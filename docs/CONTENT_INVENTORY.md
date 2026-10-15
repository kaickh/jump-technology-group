# Content inventory

The site is populated with first-draft copy. It is not approved for launch. Founder wording, VaultIQ behavior, and the privacy notice still need review. No articles, clients, or testimonials have been invented.

Status values: `draft on site`, `published`, `missing`, `do not create`.

## Global

| Slot | Status | Rule |
| --- | --- | --- |
| Logo | missing | Text wordmark in `src/components/wordmark.tsx` |
| Tagline | missing | The hero line is a test headline, not a locked tagline |
| Company description | draft on site | Names the three kinds of work |
| Contact address | accepted fact | support@jumptechgroup.com |
| Founder name and role | draft on site | Wording still needs Dwalu's approval |
| Client list | do not create | Confidential prospects stay unpublished |
| Testimonials, logos, metrics | do not create | None exist for the site |

## Home

| Slot | Status | Notes |
| --- | --- | --- |
| Hero headline and support | draft on site | Test headline, not a tagline |
| Discovery prompts | draft on site | Three choices: technology, operations, VaultIQ |
| Service index | draft on site | Drawn from the service entries |
| VaultIQ feature | draft on site | Stages are labeled as direction, not shipped features |
| Approach sequence | draft on site | Point of view, not a formal methodology |
| Founder block | draft on site | Placeholder frame, wording unapproved |
| Insights preview | draft on site | Empty journal. No fake essays |
| Closing invitation | draft on site | Email link plus consultation action |

## Services

Four provisional areas. Each needs: problem, who it helps, kinds of work, how to inquire.

| Area | Status |
| --- | --- |
| Technology consulting and implementation | draft on site |
| Managed IT and technology support | draft on site |
| Business insights and operational advisory | draft on site |
| Digital solutions and emerging products | draft on site |

Prohibited until approved: 24/7 coverage, certifications, SLAs, guaranteed outcomes, named vendor stacks.

## VaultIQ

Keep this module independent enough to move to another site later: its own content object, its own route, no Jump-only layout assumptions baked into the copy.

| Slot | Status | Public rule |
| --- | --- | --- |
| Problem and why it matters | draft on site | Industry observation, not a customer story |
| Product introduction | draft on site | Emerging product inside Jump |
| Workflow stages | draft on site | Capture, organize, retrieve are labeled unverified |
| Use cases | draft on site | Labeled as situations, not deployments |
| Product status | draft on site | Says it is not launched and has no live demo |
| Conversation request | draft on site | Links to contact with VaultIQ interest |

Prohibited: customer counts, compliance badges, uptime, a live demo that is not real.

## About

| Slot | Status |
| --- | --- |
| Why the company was founded | draft on site |
| View of technology in a business | draft on site |
| Founder experience | draft on site, wording unapproved |
| Principles | draft on site |
| Client relationships | draft on site |
| Team profiles | reserved | No fictional colleagues |
| Photography | reserved | Placeholder frame only |

## Insights

Working publication name: Field Notes.

Categories to support, not to fill with generated posts:

- Technology & Infrastructure
- Business Operations
- Digital Transformation
- Product Thinking
- From the Founder

| Slot | Status |
| --- | --- |
| Masthead and introduction | draft on site |
| Articles | none | Zero published pieces |
| Article template | built | Reading time, category, date, description, related notes |

An article file requires `status: "draft" | "published"`. Only `published` is eligible for the index, the homepage, the sitemap, and related links.

## Contact

| Field | Required |
| --- | --- |
| Name | yes |
| Email | yes |
| Company | no |
| Area of interest | yes: general, technology consulting, VaultIQ, consultation request |
| Message | yes |
| Preferred timing | no |

Also required in the interface: validation, loading, error, success after acceptance, and a visible mailto link.

Scheduling sits behind a small interface with no provider attached. The label is a request, not a booking.

## Privacy

| Slot | Status |
| --- | --- |
| Notice covering form fields, email delivery, retention, and local-dev behavior | draft on site |
| Legal review | required before launch |

The page should state that counsel has not reviewed it until that review is done.
