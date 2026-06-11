---
name: se-havacilik-design
description: Use this skill to generate well-branded interfaces and assets for SE Havacılık ve Makina (SE Aerospace & Precision Machining), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- Brand = SE Orange `#F39200` + charcoal ink `#1D1D1B` on white; "aerospace steel" `#14181D` for dark sections. Never lead with blue.
- Type = Saira (display/UI, tight tracking) + IBM Plex Mono (uppercase kickers, all measurements/specs).
- Tokens in `tokens/*.css` (entry: `styles.css`); components in `components/**`; full site recreation in `ui_kits/website/`; logos in `assets/`.
- Copy is bilingual TR-first, formal "we" voice, no emoji, numbers (±2.5 μm, Ø750) set in mono.
