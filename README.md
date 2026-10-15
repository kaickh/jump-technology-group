# Jump Technology Group

Official website. Custom Next.js site, exported as static files, with Terraform for a later AWS deploy. Nothing in AWS has been provisioned.

## Commands

```bash
npm install
npm run dev
npm test
npm run lint
npm run build
```

`npm run build` writes the static site to `out/`. The default contact mode is `local`: the form validates in the browser and does not send email. Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to the API URL at build time when the contact service exists. See `.env.example`.

`npm run build:lambda` bundles the contact function for Terraform. Run it before `terraform plan`. Do not apply Terraform without approval.

## Read first

| Document | What it decides |
| --- | --- |
| [AGENTS.md](AGENTS.md) | How work in this repo should proceed |
| [docs/PROJECT_BRIEF.md](docs/PROJECT_BRIEF.md) | Business facts, routes, and prohibitions |
| [docs/BRAND_DIRECTION.md](docs/BRAND_DIRECTION.md) | Art direction. Direction A is the build |
| [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Tokens, type, and the ascending mark |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Accepted choices and open confirmations |
| [docs/CONTENT_INVENTORY.md](docs/CONTENT_INVENTORY.md) | What is on the site and what is still unapproved |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Stack and file roles |
| [docs/AWS_DEPLOYMENT.md](docs/AWS_DEPLOYMENT.md) | Target AWS shape. Not applied |

## Routes

`/`, `/services/`, `/solutions/vaultiq/`, `/about/`, `/insights/`, `/contact/`, `/privacy/`

Articles under `/insights/[slug]/` are generated from published entries in `src/content/insights.ts`. There are none yet.
