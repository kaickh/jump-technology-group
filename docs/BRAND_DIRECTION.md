# Brand direction

Status: **recommendation, not locked.** Direction A is the baseline to prototype after the open items in `DECISIONS.md` are confirmed or explicitly waived.

These notes follow the creative principles in the project brief. The reference sites were not inspected in the browser for this document. A short live review of those sites is still worth doing before visual lock, to check rhythm and type scale against the real work rather than memory of it.

## The idea

"Jump" means a deliberate next move: clarity, progression, and a change you can explain. The identity should be recognizable without a logo.

Repeatable vocabulary:

- A short ascending stroke used as a section mark, about the height of a caption
- Editorial numbers (`01`) in the margin or beside a heading
- Compositions that step upward: a heading sitting slightly above the block it introduces
- Navigation that stays quiet: a text wordmark, a single action, a thin rule rather than a bar of color
- Motion that moves forward or reveals the next state, and that still makes sense when motion is off

No bouncing icons, arrows-as-mascots, or a jump metaphor explained in a caption.

## Color

The site is mostly light. Ink does the talking. Accent is rare.

Exploratory grounds from the brief:

| Role | Value | Use |
| --- | --- | --- |
| Warm white | `#FBFAF7` | Page ground |
| White | `#FFFFFF` | Raised reading surfaces, form fields |
| Deep ink | `#252B29` | Text, primary actions |
| Muted sage | `#E8EEE7` | Occasional full-bleed field, never a card fill on every block |
| Warm terracotta | `#D87560` | Marks and large moments only |
| Supporting neutral | `#747B76` | Captions if contrast is checked; likely too light for body copy |

`#D87560` on white is about 3.2:1. It fails WCAG AA for small text. `#747B76` on `#FBFAF7` is only around 4.3:1, so it is unsafe for body copy. Body and interface text stay `#252B29`. If terracotta is the accent, a darker companion (to be sampled in Phase 2, target at least 4.5:1) is required for text links.

### Accent system 1 — Terracotta mark (preferred to test)

Sage fields, ink type, terracotta only on the ascending mark, a link underline, and at most one solid action. This keeps the warmth without turning the site clay-colored.

### Accent system 2 — Olive advisory

Replace terracotta with a deep olive around `#3E5348` for actions and a drier leaf green for the mark. Sage becomes the main atmosphere. More consulting-firm, less human. Safer contrast. Weaker connection to warmth.

### Accent system 3 — Studio clay

A darker clay (around `#8C3D2E`) used for small type and a lighter clay kept for large marks. More boutique, easier to overuse, closer to a generic "warm startup" if the clay spreads into buttons, tags, and cards.

**Recommendation:** prototype system 1 with the contrast rule above. Hold systems 2 and 3 as alternates until the homepage is on screen. Do not finalize from swatches alone.

## Typography

- **DM Sans** for navigation, body, forms, and UI. It is plain in a useful way and holds up at small sizes.
- **Newsreader** for a limited set of display lines: the hero, a pull quote, the Field Notes masthead, the founder name. Not for buttons, labels, or paragraphs.
- **Manrope** is the backup interface face if DM Sans feels too geometric beside Newsreader.

Line length for body copy stays near 60–72 characters. Headlines wrap on purpose, not by accident of the viewport. Letter-spacing stays near the default except for small section labels, which may be slightly opened.

## Direction A — Warm Editorial (baseline)

**Concept.** An independent advisory studio that publishes like a small magazine. Whitespace, type, and a few warm fields. Photography is reserved and real, so until portraits exist the layout must still work on type alone.

**Palette.** System 1.

**Type.** Newsreader headlines, DM Sans everywhere else.

**Homepage.**

- Header: "Jump" as the wordmark, "Technology Group" set smaller on the same line. Text link for the consultation. No tall sticky bar.
- Hero: a two-line headline and a short column that names technology services, managed IT, and business advisory. The ascending mark sits in the margin. Actions: start a conversation, and read the services. Not "view our work."
- Discovery: three text choices, one expanded panel. Keyboard radiogroup or tabs. No wizard.
- Services: a numbered list. The active row carries the challenge, the approach, and the inquiry. Other rows stay quiet.
- VaultIQ: three named states on one line — Capture, Organize, Retrieve — with a simple document motif. A visible draft note if behavior is still unconfirmed. Link to the product page.
- Approach: four beats on a single rising baseline.
- Founder: name and role at display size, a short factual bio, an image frame that is obviously a placeholder.
- Field Notes: masthead and, if empty, an honest introduction.
- Close: one sentence, the email address as a real link, and the consultation action. Not a full-width color slab.

**Interaction.** Hover underlines, a visible focus ring, the discovery panel, and the VaultIQ state change. Reduced motion shows the selected state instantly.

**Strengths.** Fits the approved warmth, gives VaultIQ a distinct moment, and does not depend on photography we do not have.

**Weaknesses.** Editorial sites become anonymous when type hierarchy is timid. The homepage has to commit to scale.

**Why it will not look templated.** Sections do not share a component skeleton. Proof is omitted rather than faked. The ascending mark and numbered index are the identity.

## Direction B — Human Studio

**Concept.** The founder and the working relationship lead. Larger portrait moments, a letter-like about page, services introduced through the kind of conversation a client actually has.

**Palette.** Warmer ground, more clay in large fields, ink still used for text. System 3, used more generously than in Direction A.

**Type.** Newsreader for names and section openers. DM Sans for explanation.

**Homepage.** A short founder note appears before the service index. VaultIQ is introduced as something the studio is building, in the founder's voice.

**Interaction.** Almost none beyond navigation and the form. The tone comes from writing and pictures.

**Strengths.** Trust and personableness. Strong About page.

**Weaknesses.** Without real photographs it collapses into stock-portrait cliché or empty frames. It also makes the company feel like a single person, which may be true today and limiting tomorrow.

**Why it will not look templated.** It only works with specific writing and real images. That is also why it should not be the first build.

**Use later.** Pull the portrait framing and the plainspoken founder note into Direction A. Do not build the whole site in this direction yet.

## Direction C — Quiet Systems

**Concept.** A systems-thinking consultancy. Information design, thin rules, diagrams that explain a workflow, very little color.

**Palette.** System 2. Warm white, ink, olive. Terracotta dropped or kept as a one-pixel accent.

**Type.** DM Sans leads, including most headlines. Newsreader appears only on Field Notes, so the publication feels different from the practice.

**Homepage.** The hero is a structured statement: what we take on, what we do not pretend to be. Services are a specification. VaultIQ is a diagram with three states and almost no decoration. The approach section is the visual center.

**Interaction.** Diagrams that update in place. Precise, fast, no easing theatrics.

**Strengths.** Credible for technology and for VaultIQ. Hard to fill with fake emotion. Excellent services page.

**Weaknesses.** Easy to feel cold, and easy to resemble a generic "productized consulting" site if the diagrams are decorative. Weaker expression of hospitality.

**Why it will not look templated.** Only if the diagrams explain real work. Decorative boxes would undo it.

**Use now.** Borrow the connected approach diagram and the VaultIQ state model for Direction A. Keep the rest of the site warmer than this direction.

## Recommendation

Build Direction A. Take the workflow diagram language from Direction C for VaultIQ and the approach section. Leave photographic room from Direction B without depending on it.

Direction A matches the brief's preferred path, can be excellent before a logo or portrait arrives, and keeps Jump broader than a single product. Direction B should wait for photography. Direction C is a dialect for product explanation, not the company voice.

## Proposed words (not a tagline)

Hero headline to test: **Make your next move a better one.**

Supporting line to test: Jump Technology Group helps organizations with technology consulting, managed IT, and practical business advice.

Other lines from the brief stay in the content file as unused options. None of them is an approved tagline.

Primary actions to test: **Let's talk** and **See our services.** "Explore our work" waits until there is public work that has been approved.
