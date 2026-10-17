# Architecture

Next.js App Router static export. Client components are the mobile menu and the contact form. Discovery and the VaultIQ stages are native radio groups.

## Runtime

- Next.js App Router, TypeScript, React, Tailwind CSS
- `output: 'export'`
- One trailing-slash policy, chosen at setup and followed by CloudFront rewrites
- Pages and articles generated at build time
- No long-running Node server for the marketing site
- Environment variables for the public site URL, contact endpoint, and a flag that distinguishes local contact mode from the deployed API

The contact API is the exception: API Gateway and Lambda, described in `AWS_DEPLOYMENT.md`. The static site does not call AWS SDK code from the browser.

## Directory plan

```text
src/app/                  routes, metadata, sitemap, robots
src/components/           shared UI primitives and page sections
src/components/experiences/   VaultIQ stages, approach, contact form, mobile nav
src/content/              typed business content and articles
src/lib/                  content queries, metadata helpers, validation shared types
src/styles/               tokens and global CSS
public/                   static files
infra/terraform/          AWS definitions, not applied by default
docs/                     decisions and operating notes
tests/                    content filters, validation, critical UI
```

`src/content` is the seam for a future CMS. Components should accept typed props. Replacing a module with a fetched payload should not require redesigning a page.

## Content rules in code

- Published-only selectors for anything user-visible
- VaultIQ capability copy can exist as draft data without being rendered as fact
- Article slugs are the static paths under `/insights/[slug]`

## UI boundaries

Server Components render pages. Client Components are limited to:

- Header menu on small screens
- "What are you looking to move forward?"
- VaultIQ stage switch
- Contact form state

CSS handles hover, focus, and reduced motion. Do not add a motion library in the first build.

## Metadata

Each route has its own title and description. Canonical URLs use the configured site origin. Open Graph fields are set from the same source. Structured data may describe the organization and the website. It must not include reviews, aggregate ratings, or client claims.

## Local development

Must run without an AWS account or a domain. Contact form in development posts to the local mode and shows that the submission was not emailed.

## Hosting

Static files are built to the Next export directory and later synced to a private S3 bucket behind CloudFront. See `AWS_DEPLOYMENT.md`.
