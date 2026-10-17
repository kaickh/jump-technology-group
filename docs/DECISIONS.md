# Decisions

Record a decision here when it changes brand, content truth, architecture, or launch scope. Do not treat this file as a changelog of code.

Status values: `open`, `assumed`, `accepted`.

`assumed` means implementation may proceed only if the founder says to continue without a confirmation.

## Accepted

### D-001 — Custom site, not a template
Static marketing site, designed for this company. No theme, site builder, or generic UI kit as the visual system.
Date: 2026-10-15.

### D-002 — Stack boundary
TypeScript, React, Next.js App Router, Tailwind, `output: 'export'`. No Vercel hosting dependency, no database, no CMS in the first build. Client components only for interaction.
Date: 2026-10-15.

### D-003 — Routes and navigation
`/`, `/services`, `/solutions/vaultiq`, `/about`, `/insights`, `/insights/[slug]`, `/contact`, `/privacy`.

Navigation labels: Home, Services, About, Insights, Contact. VaultIQ is not a top-level nav item.
Date: 2026-10-15.

### D-004 — No fabricated proof
No client logos, quotes, case studies, usage statistics, certifications, or SLA claims without approval. Airbnb and Meta are employment history only.
Date: 2026-10-15.

### D-005 — AWS is described, not applied
Terraform may be written. Live resources are not created, and the site is not published, without explicit approval. Future CI should use GitHub Actions with AWS OIDC.
Date: 2026-10-15.

### D-006 — Contact success means accepted
The interface shows success only after the configured backend accepts the payload. Development mode is labeled and is not a simulated production delivery.
Date: 2026-10-15.

## Accepted for this build

Confirmed 2026-10-15 as the working baseline. Final brand lock can still be tuned after the site is reviewed on screen.

### D-007 — Direction A is the build baseline
Superseded for the interface by D-024. The earlier Warm Editorial prototype remains in `BRAND_DIRECTION.md` as history.

### D-008 — Accent system 1
Superseded by D-024. Terracotta is no longer used on the site.

### D-009 — Type pairing
Superseded by D-024. Poppins for display, DM Sans for body.

### D-010 — Headline under test
"Make your next move a better one." Supporting copy names technology consulting, managed IT, and business advisory. This is not the company tagline.

### D-011 — Field Notes
Title of the insights publication for this build.

### D-023 — Primary actions
"Let's talk" and "See our services." There is no "Explore our work" action until approved public work exists.

### D-016 — Logo
The navy lockup and icon PNGs from the brand kit are the site logo. Files live in `public/brand/`. A vector master can replace them later without a layout rewrite.

### D-024 — Commercial brand system
Accepted 2026-10-17. The live interface follows the logo: white ground, navy `#021639`, blue `#0174AD` for emphasized words and links, teal `#00DED8` for marks and the closing action. Teal is not used for small text. Poppins headlines, DM Sans body. Pill actions. VaultIQ is the flagship section. No testimonial, logo wall, or metric row until real proof exists.

### D-025 — GitHub Pages is the public preview
Accepted 2026-10-17. The static export may be published to a public GitHub repository and GitHub Pages. AWS is still not applied. On that host the contact form stays in labeled local mode until a real endpoint is configured.

## Assumed until rewritten

### D-012 — Service category names
The four provisional categories in `PROJECT_BRIEF.md` are the content model until rewritten. They are not a promise of packaged SKUs.

### D-013 — Consultation language
A consultation request is an inquiry with an optional timing preference. It is not a confirmed meeting. No scheduling vendor until one is chosen.

### D-014 — Portrait
The founder block uses a reserved placeholder frame until a real photograph exists. No stock portrait.

## Open

### D-015 — Tagline
Not finalized. Do not crown a tagline in the header.

### D-017 — VaultIQ behavior
Capture, organize, and retrieve are illustrative stages. Public pages must label unverified product behavior as draft until someone confirms what the product actually does.

### D-018 — Founder bio wording
Public sentences about Airbnb and Meta need approval before launch copy is treated as final. Factual, short, and free of endorsement language.

### D-019 — Domain and canonical host
Unknown. Metadata should read the site URL from configuration. Local work must not require a domain.

### D-020 — AWS account, region, and DNS
Unknown. CloudFront-related ACM certificates are still required to live in `us-east-1` when that work starts. Site bucket region is not chosen.

### D-021 — Privacy copy
Must match the real contact pipeline. A lawyer needs to review it before launch. The page should say that review is still required until it has happened.

### D-022 — Reference-site review
Origins (`originshq.com`) was reviewed on 2026-10-17 and informed D-024. The earlier reference list in the brief has not been re-reviewed as a set.
