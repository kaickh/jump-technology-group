# Project brief

Scope contract for the Jump Technology Group website. Brand exploration is in `BRAND_DIRECTION.md`. Open confirmations are in `DECISIONS.md`.

## Company

Jump Technology Group is a technology services and business consulting group founded by Dwalu Khasu. He previously worked at Airbnb and Meta. That experience is professional background, not a client relationship, partnership, or endorsement.

The company is early-stage. The site should sound confident and truthful. It should not imitate the voice or proof points of a large enterprise.

**Contact:** support@jumptechgroup.com

**Audience:** business and organizational leaders who need reliable technology services, managed IT, operational advice, or a digital product conversation. They should understand the offer on the first screen without learning internal jargon.

## Provisional services

These are marketing categories to refine, not a catalog to invent beyond:

1. Technology consulting and implementation
2. Managed IT and technology support
3. Business insights and operational advisory
4. Digital solutions and emerging products

Each area, once written, should say what problem it addresses, who it is for, what kinds of work might be involved, and how to inquire. Do not promise 24/7 support, certifications, guaranteed outcomes, SLAs, or named technologies until those facts are approved.

## VaultIQ

VaultIQ is an emerging document digitization product inside the group. The public story may cover document capture, digital records, and clearer document workflows. Those capabilities are illustrative until confirmed.

VaultIQ gets a homepage feature and `/solutions/vaultiq`. The parent brand stays broad enough for later products. The product page should be separable into its own site later without rewriting the story from scratch.

Do not invent usage numbers, compliance claims, or a launch date.

## Site map

| Route | Job |
| --- | --- |
| `/` | Introduce Jump, help a visitor self-identify, feature VaultIQ, close with a real way to write |
| `/services` | A consulting practice, not a grid of pitches |
| `/solutions/vaultiq` | Editorial product page with an honest status |
| `/about` | Why the company exists, how it thinks about technology, founder, principles |
| `/insights` | Small publication. Working name: Field Notes |
| `/insights/[slug]` | Statically generated article |
| `/contact` | Inquiry and consultation request. A request is not a booking |
| `/privacy` | Notice matched to the real forms and data handling. Legal review required before launch |

Primary navigation: Home, Services, About, Insights, Contact.

## Homepage sequence

The homepage is one narrative, not a stack of interchangeable marketing rows.

1. Understated header. Text identity until a logo exists. One consultation action. Real mobile navigation.
2. Hero that states the work on the first screen.
3. Lightweight choice: "What are you looking to move forward?" with three paths (technology, operations, VaultIQ).
4. Services told as an editorial index.
5. VaultIQ feature: capture, organize, retrieve. Understandable without animation. No fake dashboard.
6. Approach as one connected sequence, presented as a point of view rather than a certified methodology.
7. Founder introduction with a portrait placeholder.
8. Insights preview. If nothing is published, introduce the journal. Do not fake an archive.
9. Closing invitation with the email visible.

"Explore our work" is a poor primary action while there is no approved public work. Prefer a path into services or a conversation.

## Creative standard

Warm, modern, friendly, and precise. Inspired by the qualities of Airbnb, Norgram, IDEO, Notion, Studio Mast, AREA 17, and ustwo: human clarity, editorial type, and studio restraint. Do not copy their layouts or assets.

The word "jump" should show up as progression: numbers, a small ascending mark, slight vertical offsets, forward motion. Not a literal bounce.

Direction A, Warm Editorial, is the implementation baseline. See `BRAND_DIRECTION.md`.

Avoid thoughtless defaults: gradient heroes, abstract 3D, three equal cards, fabricated proof, glassmorphism, robot illustrations, a card on every section, empty superlatives, and motion on every scroll.

## Engineering boundary

- TypeScript, React, Next.js App Router, Tailwind, minimal dependencies
- `output: 'export'`, build-time pages, client components only where interaction requires them
- No Vercel product dependency, no website builder, no database, no CMS yet
- Content in typed files so a CMS can replace the source later
- WCAG 2.2 AA, unique metadata, sitemap, robots, appropriate structured data
- No fake review schema
- Contact: server-side validation, fixed recipient, throttling, no credential leaks, no sensitive body logs
- AWS described in Terraform and not applied without approval
- ACM certificates for CloudFront belong in `us-east-1`
- Future deploys should use GitHub Actions with OIDC, not long-lived keys

## Acceptance

The site is ready to consider launch only when it is visually specific to Jump, truthful, multipage, responsive, accessible, statically exportable, and paired with a documented AWS path. Logo, final tagline, confirmed VaultIQ behavior, and legal review of the privacy notice can still be outstanding if they are labeled that way. Publishing still requires approval.

## Non-goals for now

- Live AWS accounts, DNS, or a production domain
- A scheduling vendor
- A CMS or blog admin
- Client case studies
- Treating VaultIQ as a finished enterprise platform
