# Design system

Working system after D-024. Tokens live in `src/styles/globals.css`.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `paper` / `white` | `#FFFFFF` | Page ground |
| `ink` / `navy` | `#021639` | Text, filled actions, closing band |
| `mist` / `sage` | `#F3F6F9` | Flagship band, footer, portrait field |
| `blue` | `#0174AD` | Emphasized words, links, focus ring. About 5:1 on white |
| `teal` | `#00DED8` | Dots, gradient stops, the closing button. Not small text |
| `muted` | `#3E5168` | Secondary text |
| `line` | `#D8DEE6` | Rules and card borders |
| `clay-ink` | `#9F1239` | Error text only |

Body copy is navy. Teal fails contrast as small type on white, so it stays on marks and on the navy closing band.

## Type

- Poppins: headlines, pills, buttons, card titles
- DM Sans: navigation, body, forms
- One italic Poppins word in blue carries the emphasis in a headline
- Body size 17px, line-height 1.65

## Mark

The logo is `public/brand/jump-lockup-navy.png` in the header and footer, and `public/brand/jump-icon.png` as the favicon. Both are transparent PNGs.

## Layout

- Content width caps at 90rem
- Homepage: split hero with three offer cards, VaultIQ flagship, practice switch, four-step row, founder, Field Notes, navy close
- Header sticks, with a hairline after scroll
- Primary actions are pills

## Interaction

- Practice areas and VaultIQ stages are native radio groups styled with `:has()`
- The mobile menu, sticky header, and contact form are the client components
- Cards lift on hover. `prefers-reduced-motion: reduce` removes that, the panel fade, and smooth scrolling
- Focus is a 2px blue outline

## Breakpoints in use

- Below 1024px the header becomes a full-screen menu
- Offer cards, practice pills, and approach steps stack below 768px
