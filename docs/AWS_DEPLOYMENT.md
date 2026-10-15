# AWS deployment

Status: **defined, not applied.** Do not run `terraform apply` or the deploy workflow until that work is explicitly approved.

## Local build

```bash
npm test
npm run lint
npm run build
npm run build:lambda
```

The static export is `out/`. `build:lambda` writes `infra/terraform/dist/contact/index.mjs`, which Terraform zips. That folder is gitignored.

A production build should set:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_CONTACT_ENDPOINT=https://example.com/api/contact
```

`NEXT_PUBLIC_CONTACT_ENDPOINT=local` validates on the page and does not send mail. The UI says so. A local result is not a successful delivery.

## Target

```text
Browser
  -> Route 53 (only after a domain exists)
  -> CloudFront (HTTPS)
       -> S3 private bucket (static export) via Origin Access Control
       -> API Gateway HTTP API, path POST /api/contact
            -> Lambda (validate, send)
                 -> SES -> support@jumptechgroup.com
```

CloudFront rewrites extensionless routes to `index.html` so the trailing-slash export resolves. `/api/*` is excluded from that rewrite and is not cached. Missing objects return `404.html`. S3 answers missing keys with 403, and CloudFront maps that to the 404 page.

| Piece | Role |
| --- | --- |
| S3 | Private bucket. Not a public website endpoint |
| CloudFront | CDN, HTTPS, URI rewrite, security headers |
| Origin Access Control | CloudFront is the only reader of the bucket |
| ACM | Certificate in `us-east-1`, only when `domain_name` and `hosted_zone_id` are set |
| Route 53 | Alias records for that domain |
| API Gateway + Lambda | `POST /api/contact` only |
| SES | Sends to the fixed recipient. The identity resource is in Terraform. Production access may still be sandboxed until AWS approves it |
| GitHub Actions | `.github/workflows/deploy-site.yml` is manual only. It assumes an OIDC role and syncs `out/`. It does not apply Terraform |

Copy `infra/terraform/terraform.tfvars.example` to a local `terraform.tfvars` that is not committed. Required input: a globally unique `site_bucket_name`.

```bash
cd infra/terraform
terraform init
terraform plan
```

## Contact function

- Allows only the fields in `src/lib/contact.ts`
- Rejects unexpected fields, bad JSON, and bodies over 8,000 characters
- Validates on the server with the same parser as the page
- Recipient and sender come from Lambda environment variables
- API Gateway throttles the stage to 2 requests per second, burst 5
- A honeypot field must be empty
- Does not log message bodies
- Returns `{ ok: true, mode: "sent" }` only after SES accepts the message
- SES failure returns 502 `{ ok: false, error: "send_failed" }`
- Does not store a database copy. Retention is the mailbox that receives the email
- CORS is set on the HTTP API for `allowed_origin`

`CONTACT_DELIVERY=local` on the Lambda returns `{ ok: true, mode: "local" }` and does not call SES. Production Terraform does not set that variable.

## Still unknown

- AWS account
- Domain and hosted zone
- Whether the SES account is out of the sandbox
- Terraform state backend
- The OIDC deploy role ARN

## Launch blockers

- An approved apply
- A certificate issued for the real domain
- SES able to send from the production account to `support@jumptechgroup.com`
- Privacy notice reviewed by counsel after it is checked against the live path
- A production test that shows both failure and `{ mode: "sent" }` honestly
