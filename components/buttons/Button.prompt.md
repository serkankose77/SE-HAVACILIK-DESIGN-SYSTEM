Brand action button — orange primary CTA, ink secondary, plus outline/ghost; use on light or dark sections.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowRightIcon />}>
  Hizmetlerimizi Keşfedin
</Button>
<Button variant="outline">Makinelerimiz</Button>
<Button variant="ghost" iconLeft={<MailIcon />}>İletişim</Button>
```

Variants: `primary` (orange, lifts + glows on hover) · `secondary` (charcoal ink) · `outline` (hairline → orange on hover) · `ghost`. Sizes `sm | md | lg`. Set `onDark` for outline/ghost on inverted backgrounds, `block` to fill width, `as="a"` for links.
