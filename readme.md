# SE Havacılık ve Makina — Design System

Design system for **SE Havacılık ve Makina A.Ş.** ("SE Aerospace & Precision
Machining"), a Turkish aerospace precision-machining company in
Kahramankazan/Ankara. The company machines critical aviation components on a
HAAS CNC park (UMC750 5-axis, VF6, VF4, ST10 lathe) with CMM quality control
(HAAS HMM430, ZEISS SPECTRUM 9/18/6), targeting AS9100 / ISO 9001 aerospace
quality compliance. The site is bilingual — Turkish first, English toggle.

## Sources

- **Codebase** (attached read-only): `se-havacilik-website/` — a Vite/React/
  Tailwind repo. Two generations coexist inside it:
  - `index.html` (repo root): the shipped static one-page site — **the
    brand-true design**: orange `#F39200` + charcoal on white, TR/EN toggle.
  - `src/`: a newer React rebuild (shadcn/ui + lucide-react) whose palette
    drifted to blue. Structure is richer (stats, quality cards) but the
    colors contradict the logo.
- **Logo files** (uploaded): `uploads/SeLogo1000.png` (full lockup),
  `uploads/SeLogoYazisiz.png` (mark only). Processed copies live in `assets/`.

**Reconciliation:** the logo and the shipped static site agree — SE Orange +
charcoal ink is the identity. This system codifies that, keeps the React
rebuild's structural ideas, and demotes its blue to a supporting accent.

## CONTENT FUNDAMENTALS

- **Bilingual, Turkish-first.** Every string exists in TR and EN; TR is the
  default, EN behind a header toggle. Machine/industry terms often stay in
  English even in TR copy ("Precision Machining", "5-Axis VMC", "CMM").
- **Voice: first-person plural, institutional.** "Sunuyoruz", "üretiyoruz",
  "taahhüt ediyoruz" — *we provide, we manufacture, we commit*. The customer
  is addressed formally ("siz"): "Bizimle iletişime geçin."
- **Tone: sober, assured, capability-led.** Sentences state capacity and
  compliance; no hype, no humor, no exclamation marks, **no emoji**.
  Example: "Havacılık endüstrisinin en yüksek kalite standartlarında üretim
  yapmayı taahhüt ediyoruz."
- **Numbers carry the message.** Tolerances, travels and capacities are the
  brand's proof: `±2.5 μm`, `Ø750`, `1600×700 mm`, `8,100 RPM`, `15+ yıl`,
  `24/7`, `100%`. Always set these in the mono spec face.
- **Recurring triad:** *Kalite, Güvenlik, Mükemmellik* (Quality, Safety,
  Excellence) — the core values, often shown as three items.
- **Headings are short nouns:** "Hakkımızda", "Makinelerimiz", "Kalite
  Politikası", "İletişim". CTAs are polite imperatives: "Bizimle İletişime
  Geçin", "Ücretsiz Teklif Alın".

## VISUAL FOUNDATIONS

- **Color.** SE Orange `#F39200` (logo-sampled) is the single hero color —
  headlines, CTAs, frames, header/footer gradients. Charcoal ink `#1D1D1B`
  for text and the dark half of the logo. Cool neutral grays for body/border.
  "Aerospace steel" (`--steel-900` `#14181D`) for inverted sections. Aviation
  blue `#2B6CB0` survives only as an info/support accent. Semantic green is
  the quality-check "pass" color. One light + one dark surface per page, max.
- **Type.** **Saira** (display + UI) — a technical grotesque whose engineered
  width echoes the logo wordmark; bold, tight-tracked headlines (−0.02em).
  **IBM Plex Mono** for overlines/kickers (uppercase, +0.12–0.22em tracking)
  and ALL measurements/specs with tabular numerals. *Substitution: the
  original site shipped no brand font (Inter/Segoe fallbacks) — see Caveats.*
- **Section anatomy.** Mono uppercase kicker → bold Saira title → **64×3px
  orange rule** → optional lead. Centered for openers, left for splits.
- **Backgrounds.** Flat white pages; alternating sections use a faint
  white→gray-50 gradient. Signature motifs: a subtle **engineering grid**
  (1px lines, 32–48px cells) on light, a **blueprint grid** on steel-900 on
  dark, and orange edge-glow accents. No photography in the current brand —
  machine imagery is a known gap (placeholders used).
- **Gradients.** Only brand-internal: orange 500→600 at 135° (header, footer,
  icon tiles). Never multi-hue.
- **Radii.** 5–12px working range; cards 12px, buttons/inputs 8px, badges 5px,
  pills for rules. Nothing fully round except dots.
- **Borders.** Hairline `gray-200` separators; **2px orange frame** marks
  flagship cards (machines, key offers) with a faint orange glow shadow
  `rgba(243,146,0,0.10)`.
- **Shadows.** Restrained cool elevation (xs→xl); brand-tinted glow
  `--shadow-brand` reserved for primary-CTA hover.
- **Motion.** `cubic-bezier(0.4,0,0.2,1)`, 0.3s default. Hover: buttons lift
  −2px (+glow), cards lift −6px (+deeper shadow), links darken. Press: lift
  resets. Entrances: fadeInUp 0.8s. Smooth scroll between sections. No
  bounces, no parallax.
- **Transparency/blur** only on the fixed header (white 95% + backdrop-blur
  in the React build) and white-10% capsule chips on dark.
- **Layout.** 1200px container, 2rem gutters, 80px section rhythm, 4px grid.
  Header is sticky; content sections anchor-navigable (one-page site).

## ICONOGRAPHY

- **System: Lucide** (`lucide-react@0.364` in the codebase) — 24px grid, 2px
  stroke, round caps, no fill. Recurring glyphs: Cog/Settings (machining),
  Shield (safety/quality), Target, CheckCircle (features/pass), Gauge, Wrench,
  Zap, Mail, Phone, MapPin, Clock, Menu/X, ChevronUp, Linkedin, ArrowRight.
- **Usage pattern:** white icon on an orange 500→600 gradient tile (8–12px
  radius) for feature/service cards; inline orange check-circles for feature
  bullets; plain gray for nav/utility.
- **In this system:** components inline the few structural SVGs they need
  (check, chevron); kits/cards use hand-inlined Lucide paths. In consuming
  projects load Lucide from CDN (`https://unpkg.com/lucide@latest`) or copy
  the inlined paths — same 2px stroke style.
- **No icon font, no emoji, no unicode-as-icon.** The only non-Lucide marks
  are the logo files in `assets/`.

## Index

| Path | Contents |
|---|---|
| `styles.css` | Entry point — `@import`s everything below |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css` |
| `assets/` | `se-logo-full.png`, `se-mark.png` + `-ondark` knockout variants |
| `components/buttons/` | **Button**, **IconButton** |
| `components/forms/` | **Input**, **Textarea**, **Select**, **Checkbox** |
| `components/display/` | **Badge**, **Card**, **Stat**, **SectionHeading** |
| `components/data/` | **SpecTable**, **FeatureList** |
| `ui_kits/website/` | Marketing-site kit: `WebsiteHome` + header/hero/sections/contact/footer, TR/EN toggle |
| `guidelines/` | 16 foundation specimen cards (Colors / Type / Spacing / Brand) |
| `SKILL.md` | Agent-skill manifest for using this system elsewhere |

Component contracts live in each `<Name>.d.ts`; usage one-liners in
`<Name>.prompt.md`.

## Caveats

- **Fonts are substitutions** (Saira, IBM Plex Mono via Google Fonts CDN) —
  the brand ships no licensed typeface. Replace `tokens/fonts.css` with
  self-hosted `@font-face` if brand binaries arrive.
- **No real photography/illustration** exists in the sources; kits use
  logo-and-grid placeholders where imagery belongs.
- Contact phone numbers in the React build are placeholders (`+90 XXX…`);
  only the address and `info@sehavacilik.com` are real.
