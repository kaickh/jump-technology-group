# Design system

Working system for the Warm Editorial build. Tokens live in `src/styles/globals.css`. This is the prototype palette, not a permanent brand lock.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#FBFAF7` | Page ground |
| `white` | `#FFFFFF` | Occasional bands, form fields, VaultIQ sheet |
| `ink` | `#252B29` | Text and the one filled button |
| `sage` | `#E8EEE7` | VaultIQ field, portrait placeholder, privacy notice |
| `clay` | `#D87560` | Ascending mark and link underline only |
| `clay-ink` | `#8C3D2E` | Error text. About 7.4:1 on white |
| `muted` | `#3F4844` | Secondary text. Replaces `#747B76`, which fails body contrast |
| `line` | `#E3DDD4` | Rules |

`#D87560` stays off small text. Body copy is ink.

## Type

- DM Sans: interface, navigation, body, forms
- Newsreader: headlines, the Field Notes masthead, the founder name, a few editorial lines
- Body size 17px, line-height 1.65
- Headlines use `text-wrap: balance` and a tight leading
- Italic Newsreader is limited to one word in the hero and to section numbers

## Mark

`AscendingMark` is a 28×16 stepped stroke in clay. It sits beside section numbers and on the selected discovery or VaultIQ choice. It is the repeatable identity until a logo arrives. Replace `Wordmark` when the logo file exists.

## Layout

- Content width caps at 90rem, with 1.25rem side padding on small screens and 3rem from 1024px
- Sections change structure: hero, discovery split, alternating service index, sage product band, rising approach, founder split, journal masthead, typographic close
- Header is not sticky
- Primary actions are text links. The contact submit button is the filled ink control

## Interaction

- Discovery and VaultIQ stages are native radio groups styled with `:has()`. They work without a client component
- The mobile menu and the contact form are the client components
- Hover lifts a service number by 2px. `prefers-reduced-motion: reduce` removes that and smooth scrolling
- Focus is a 2px ink outline

## Breakpoints in use

- Below 1024px the header becomes a full-screen menu
- 768px keeps the menu and stacks the discovery and service rows
- Approach steps climb on a horizontal rule from 768px up, and indent down the page below that
