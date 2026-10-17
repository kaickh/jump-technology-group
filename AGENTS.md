# Jump Technology Group — agent guide

This repository is the official marketing site for Jump Technology Group. It is a custom, static-first website. Do not start from an agency template.

The site is a custom Next.js static export. Read the docs below before changing design, copy, or infrastructure.

## Read before design or code changes

1. `docs/PROJECT_BRIEF.md` — business facts, routes, prohibitions, acceptance
2. `docs/BRAND_DIRECTION.md` — three art directions and the recommended baseline
3. `docs/DECISIONS.md` — what is accepted, what is still open
4. `docs/ROADMAP.md` — which phase is active

Then open the doc for the area you are changing:

- Content slots: `docs/CONTENT_INVENTORY.md`
- Stack and boundaries: `docs/ARCHITECTURE.md`
- AWS, only when touching infra or deployment: `docs/AWS_DEPLOYMENT.md`

## Current phase

**The site is built and ready for review.** It has not been published, and AWS has not been provisioned.

D-024 is the working visual system: logo lockup, navy / blue / teal, Poppins headlines, VaultIQ as the flagship. The test headline and Field Notes stay. Founder bio wording, VaultIQ capabilities, tagline, domain, and legal review of the privacy notice are still open. See `docs/DECISIONS.md`.

## How to work

- Act as a design and engineering partner. Challenge weak or generic choices in `docs/DECISIONS.md` instead of silently shipping them.
- Prefer clarity and a recognizable visual language over speed or effects.
- Separate content (`src/content/`) from presentation (`src/components/`).
- Use client components only for real interaction.
- Keep each page's composition distinct. Do not repeat one section pattern down the site.
- When a brand, content, or architecture choice changes, record it in `docs/DECISIONS.md`.
- Do not provision AWS, buy or attach a domain, or publish the site without explicit approval.

## Hard constraints

- Early-stage company with experienced leadership. Do not write as if Jump were a large established enterprise.
- No invented clients, logos, testimonials, statistics, certifications, SLAs, or case studies.
- Airbnb and Meta appear only as Dwalu Khasu's prior employers. Never as clients, partners, or endorsers.
- VaultIQ stays an emerging product. Unverified capabilities remain draft and must not be stated as shipped facts.
- Unpublished insights never render as published articles.
- A contact form shows success only after the backend accepts the submission.
- Local contact mode must be labeled. It must not pretend a production email was sent.

## Definition of done for a visible change

A section is not done because it renders. It is done when it is specific to Jump, truthful, responsive at 375, 768, and 1440, keyboard accessible, and would look wrong if another firm's name were dropped in unchanged.
