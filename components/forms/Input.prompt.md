Labelled single-line text input with brand focus ring + hint/error states.

```jsx
<Input label="Ad Soyad" required placeholder="Adınızı girin" />
<Input label="E-posta" type="email" error="Geçerli bir e-posta girin" />
<Input label="Telefon" hint="İsteğe bağlı" onDark />
```

Pass `error` to flip to the invalid (red) style, `onDark` for inverted form panels.
