# Roadmap

Do not skip ahead of an open decision that would lock the brand or publish the site. Smaller assumptions are listed in `DECISIONS.md`.

## Phase 0 — Repository guidance

**Done.**

## Phase 1 — Creative discovery review

**Done for the prototype.** Direction A, accent system 1, the test headline, and Field Notes were confirmed. Reference-site review (D-022) is still open and is not a blocker for the prototype.

## Phase 2 — Design foundation

**Done.** Tokens and primitives are in the site. See `docs/DESIGN_SYSTEM.md`.

## Phase 3 — Homepage

**Built.** Ready for visual review. The brand is not locked beyond the confirmed baseline.

## Phase 4 — Remaining pages

**Built.** Services, VaultIQ, About, Insights, article template, Contact, Privacy.

## Phase 5 — Contact and infrastructure

**Built, not applied.** Validation, labeled local mode, Lambda handler, Terraform, and a manual GitHub Actions deploy workflow. No `terraform apply`.

## Phase 6 — Quality review

In progress with the founder. Measured against the local static export with Lighthouse:

- Desktop: performance 99, accessibility 100, best practices 100, SEO 100. LCP 1.0s.
- Mobile lab, simulated slow network: performance 82, accessibility 100, best practices 100, SEO 100. The performance gap is the headline waiting on the Newsreader file. Desktop is the realistic number for this text-first page on a normal connection.

Browser review covered the homepage, services, VaultIQ, contact, and Field Notes at desktop, 768px, and 375px.

## Phase 7 — Deployment preparation

Documented in `docs/AWS_DEPLOYMENT.md`. Publishing still requires approval, plus the open items in `docs/DECISIONS.md`.
