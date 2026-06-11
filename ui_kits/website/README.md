# Website UI Kit — SE Havacılık & Makina

High-fidelity recreation of the company's one-page marketing site
(`se-havacilik-website/index.html` in the attached codebase — the static,
brand-true orange/charcoal version).

## Files

| File | What it is |
|---|---|
| `index.html` | Interactive demo (`@dsCard` thumbnail) — full page, working TR/EN toggle, nav scroll, fake form submit |
| `Marketing Site.html` | Same page tagged as a **starting point** for consuming projects |
| `WebsiteHome.jsx` | Page shell — holds language state, composes everything |
| `WebsiteHeader.jsx` | Sticky orange-gradient header: brand lockup, section nav, TR/EN toggle |
| `WebsiteHero.jsx` | White hero: full logo lockup, orange display title, CTA |
| `WebsiteSections.jsx` | About (+stat cards), Machines grid (framed cards), Quality |
| `WebsiteContact.jsx` | Contact info + framed message form + map placeholder; also exports `WebsiteFooter` |
| `WebsiteStrings.jsx` | Bilingual TR/EN copy, lifted verbatim from the shipped site |
| `website.css` | Kit-specific `.sew-` classes (imported via root `styles.css`) |

## Fidelity notes

- Copy is verbatim from the shipped site's `data-tr` / `data-en` attributes.
- The orange gradient header & footer, white logo hero, 2px-orange machine
  cards and quality band replicate the static production site.
- The Google Maps embed is replaced by a placeholder tile (no third-party
  iframe in the kit); swap in the real embed in production.
- The repo also contains a newer React rebuild (`src/`) that drifted to a
  blue palette; this kit follows the **brand-true orange** identity. Its
  structural extras (stat cards, quality checklist card) are composed from
  the design-system primitives.
