/* @ds-bundle: {"format":3,"namespace":"SEHavacLKDesignSystem_1f3d56","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"FeatureList","sourcePath":"components/data/FeatureList.jsx"},{"name":"SpecTable","sourcePath":"components/data/SpecTable.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"WebsiteContact","sourcePath":"ui_kits/website/WebsiteContact.jsx"},{"name":"WebsiteFooter","sourcePath":"ui_kits/website/WebsiteContact.jsx"},{"name":"WebsiteHeader","sourcePath":"ui_kits/website/WebsiteHeader.jsx"},{"name":"WebsiteHero","sourcePath":"ui_kits/website/WebsiteHero.jsx"},{"name":"WebsiteHome","sourcePath":"ui_kits/website/WebsiteHome.jsx"},{"name":"WebsiteSections","sourcePath":"ui_kits/website/WebsiteSections.jsx"},{"name":"WebsiteStrings","sourcePath":"ui_kits/website/WebsiteStrings.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"7da5784b70ce","components/buttons/IconButton.jsx":"25cc336289c8","components/data/FeatureList.jsx":"5665956eee26","components/data/SpecTable.jsx":"5ec6dc8d6886","components/display/Badge.jsx":"60d00b092bbe","components/display/Card.jsx":"f4c0f918bc75","components/display/SectionHeading.jsx":"77152206efff","components/display/Stat.jsx":"19dcd361f85e","components/forms/Checkbox.jsx":"07c23497cbc0","components/forms/Input.jsx":"6444064f58c0","components/forms/Select.jsx":"83e4f57575db","components/forms/Textarea.jsx":"8fe5545b306b","ui_kits/website/WebsiteContact.jsx":"205dae92c984","ui_kits/website/WebsiteHeader.jsx":"84371b3404e0","ui_kits/website/WebsiteHero.jsx":"549fc5327993","ui_kits/website/WebsiteHome.jsx":"2d107a32e66b","ui_kits/website/WebsiteSections.jsx":"5ae805f2cfce","ui_kits/website/WebsiteStrings.jsx":"31a0f79b4c5d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SEHavacLKDesignSystem_1f3d56 = window.SEHavacLKDesignSystem_1f3d56 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SE Havacılık primary action button.
 * Variants: primary (orange), secondary (ink), outline, ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  onDark = false,
  as = 'button',
  className = '',
  ...props
}) {
  const Tag = as;
  const classes = ['se-btn', `se-btn--${variant}`, `se-btn--${size}`, block ? 'se-btn--block' : '', onDark ? 'se-btn--on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, props), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "se-btn__icon"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "se-btn__icon"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button. Variants: solid (orange), soft (orange tint), ghost.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...props
}) {
  const classes = ['se-iconbtn', `se-iconbtn--${variant}`, `se-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": label
  }, props), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/FeatureList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CheckIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 11 3 3L22 4"
}));

/**
 * Orange-check feature list (service features, "Neden SE?" bullets).
 */
function FeatureList({
  items = [],
  columns = 1,
  onDark = false,
  className = '',
  ...props
}) {
  const classes = ['se-featurelist', onDark ? 'se-featurelist--on-dark' : '', className].filter(Boolean).join(' ');
  const style = columns > 1 ? {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: 'var(--space-3)'
  } : undefined;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classes,
    style: style
  }, props), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    className: "se-featurelist__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "se-featurelist__check"
  }, /*#__PURE__*/React.createElement(CheckIcon, null)), /*#__PURE__*/React.createElement("span", null, item))));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/data/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Key/value technical spec table in mono (machine specs, tolerances).
 */
function SpecTable({
  specs = [],
  inverse = false,
  className = '',
  ...props
}) {
  const classes = ['se-spectable', inverse ? 'se-spectable--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props), specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "se-spectable__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "se-spectable__key"
  }, s.key), /*#__PURE__*/React.createElement("span", {
    className: "se-spectable__val"
  }, s.value))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status / category badge (mono uppercase).
 */
function Badge({
  children,
  tone = 'brand',
  dot = false,
  icon,
  className = '',
  ...props
}) {
  const classes = ['se-badge', `se-badge--${tone}`, dot ? 'se-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, props), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content card. Optional gradient icon tile, title, body, or arbitrary children.
 * Variants: default, framed (orange frame), inverse (dark).
 */
function Card({
  icon,
  title,
  children,
  variant = 'default',
  hover = false,
  className = '',
  ...props
}) {
  const classes = ['se-card', variant === 'framed' ? 'se-card--framed' : '', variant === 'inverse' ? 'se-card--inverse' : '', hover ? 'se-card--hover' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props), icon && /*#__PURE__*/React.createElement("div", {
    className: "se-card__icon"
  }, icon), title && /*#__PURE__*/React.createElement("h3", {
    className: "se-card__title"
  }, title), typeof children === 'string' ? /*#__PURE__*/React.createElement("p", {
    className: "se-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section header: mono kicker, display title, 64×3 orange rule, optional sub.
 */
function SectionHeading({
  kicker,
  title,
  sub,
  center = false,
  onDark = false,
  level = 2,
  className = '',
  ...props
}) {
  const H = `h${level}`;
  const classes = ['se-heading', center ? 'se-heading--center' : '', onDark ? 'se-heading--on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("header", _extends({
    className: classes
  }, props), kicker && /*#__PURE__*/React.createElement("span", {
    className: "se-heading__kicker"
  }, kicker), /*#__PURE__*/React.createElement(H, {
    className: "se-heading__title"
  }, title), /*#__PURE__*/React.createElement("hr", {
    className: "se-heading__rule"
  }), sub && /*#__PURE__*/React.createElement("p", {
    className: "se-heading__sub"
  }, sub));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big metric block — value + mono uppercase label (15+, ±2.5μm, 24/7).
 */
function Stat({
  value,
  label,
  center = false,
  onDark = false,
  accent = false,
  className = '',
  ...props
}) {
  const classes = ['se-stat', center ? 'se-stat--center' : '', onDark ? 'se-stat--on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "se-stat__value"
  }, accent ? /*#__PURE__*/React.createElement("em", null, value) : value), /*#__PURE__*/React.createElement("div", {
    className: "se-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with brand-orange checked state and inline label.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['se-checkbox', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "se-checkbox__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text input with hint/error states.
 */
function Input({
  label,
  id,
  hint,
  error,
  required = false,
  onDark = false,
  className = '',
  ...props
}) {
  const inputId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['se-field', onDark ? 'se-field--on-dark' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "se-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "se-req"
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['se-input', error ? 'se-input--invalid' : ''].filter(Boolean).join(' '),
    "aria-invalid": !!error,
    required: required
  }, props)), error ? /*#__PURE__*/React.createElement("span", {
    className: "se-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "se-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled native select with brand chevron + focus ring.
 */
function Select({
  label,
  id,
  hint,
  error,
  required = false,
  onDark = false,
  placeholder,
  options = [],
  className = '',
  children,
  ...props
}) {
  const selId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['se-field', onDark ? 'se-field--on-dark' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "se-field__label",
    htmlFor: selId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "se-req"
  }, "*")), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: ['se-select', error ? 'se-select--invalid' : ''].filter(Boolean).join(' '),
    "aria-invalid": !!error,
    required: required,
    defaultValue: placeholder ? '' : undefined
  }, props), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), error ? /*#__PURE__*/React.createElement("span", {
    className: "se-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "se-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled multi-line text area.
 */
function Textarea({
  label,
  id,
  hint,
  error,
  required = false,
  onDark = false,
  rows = 5,
  className = '',
  ...props
}) {
  const taId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['se-field', onDark ? 'se-field--on-dark' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "se-field__label",
    htmlFor: taId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "se-req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    className: ['se-textarea', error ? 'se-textarea--invalid' : ''].filter(Boolean).join(' '),
    "aria-invalid": !!error,
    required: required
  }, props)), error ? /*#__PURE__*/React.createElement("span", {
    className: "se-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "se-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteContact.jsx
try { (() => {
const {
  useState
} = React;
const MapPin = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Mail = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 5L2 7"
}));
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 11 3 3L22 4"
}));

/**
 * Contact section: info column, framed message form (fake submit), map placeholder.
 */
function WebsiteContact({
  t
}) {
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "sew-section sew-section--subtle",
    id: "contact",
    "data-screen-label": "\u0130leti\u015Fim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-section__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    center: true,
    kicker: "info@sehavacilik.com",
    title: t.contact.heading
  }), /*#__PURE__*/React.createElement("div", {
    className: "sew-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-contact__info"
  }, /*#__PURE__*/React.createElement("h3", null, t.contact.infoTitle), /*#__PURE__*/React.createElement("div", {
    className: "sew-contact__row"
  }, /*#__PURE__*/React.createElement(MapPin, null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, t.contact.addressLabel), " ", t.contact.address)), /*#__PURE__*/React.createElement("div", {
    className: "sew-contact__row"
  }, /*#__PURE__*/React.createElement(Mail, null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, t.contact.emailLabel), " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@sehavacilik.com"
  }, t.contact.email))), /*#__PURE__*/React.createElement("p", null, t.contact.blurb)), /*#__PURE__*/React.createElement("div", {
    className: "se-card se-card--framed"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "se-card__title"
  }, t.contact.formTitle), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 'var(--space-5) 0',
      color: 'var(--color-success)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("strong", null, t.contact.sent)) : /*#__PURE__*/React.createElement("form", {
    className: "sew-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: t.contact.name,
    required: true,
    name: "name"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: t.contact.email2,
    type: "email",
    required: true,
    name: "email"
  }), /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    label: t.contact.message,
    required: true,
    rows: 4,
    name: "message"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary"
  }, t.contact.send)))), /*#__PURE__*/React.createElement("div", {
    className: "sew-map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-map__pin"
  }, /*#__PURE__*/React.createElement(MapPin, null), /*#__PURE__*/React.createElement("span", null, t.contact.mapNote), /*#__PURE__*/React.createElement("span", null, t.contact.address)))));
}

/**
 * Orange gradient footer bar.
 */
function WebsiteFooter({
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "sew-footer",
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement("p", null, t.footer));
}
Object.assign(__ds_scope, { WebsiteContact, WebsiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHeader.jsx
try { (() => {
/**
 * Fixed orange gradient header with brand lockup, section nav and TR/EN toggle.
 */
function WebsiteHeader({
  t,
  active,
  onNav,
  onToggleLang,
  markSrc
}) {
  const links = [['about', t.nav.about], ['machines', t.nav.machines], ['quality', t.nav.quality], ['contact', t.nav.contact]];
  return /*#__PURE__*/React.createElement("header", {
    className: "sew-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-header__inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sew-header__brand",
    onClick: () => onNav('hero')
  }, markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "SE mark"
  }), /*#__PURE__*/React.createElement("span", null, t.brand)), /*#__PURE__*/React.createElement("nav", {
    className: "sew-nav"
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: 'sew-nav__link' + (active === id ? ' sew-nav__link--active' : ''),
    onClick: () => onNav(id)
  }, label)), /*#__PURE__*/React.createElement("button", {
    className: "sew-lang",
    onClick: onToggleLang
  }, t.langButton))));
}
Object.assign(__ds_scope, { WebsiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHero.jsx
try { (() => {
const ArrowRight = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));

/**
 * White hero with the full logo lockup, orange display title and CTA.
 */
function WebsiteHero({
  t,
  logoSrc,
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sew-hero",
    id: "hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-hero__inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sew-hero__logo",
    src: logoSrc,
    alt: "SE Havac\u0131l\u0131k ve Makina"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "sew-hero__title"
  }, t.hero.title), /*#__PURE__*/React.createElement("p", {
    className: "sew-hero__sub"
  }, t.hero.sub), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onCta
  }, t.hero.cta)));
}
Object.assign(__ds_scope, { WebsiteHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteSections.jsx
try { (() => {
/**
 * About + Machines + Quality sections of the marketing site.
 */
function WebsiteSections({
  t,
  markSrc
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sew-section",
    id: "about",
    "data-screen-label": "Hakk\u0131m\u0131zda"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-section__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    center: true,
    kicker: "SE Havac\u0131l\u0131k & Makina",
    title: t.about.heading
  }), /*#__PURE__*/React.createElement("div", {
    className: "sew-about"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sew-about__text"
  }, /*#__PURE__*/React.createElement("p", null, t.about.p1), /*#__PURE__*/React.createElement("p", null, t.about.p2)), /*#__PURE__*/React.createElement("div", {
    className: "sew-stats"
  }, t.about.stats.map(s => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: s.label
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    center: true,
    value: s.value,
    label: s.label,
    accent: true
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sew-about__panel"
  }, /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: ""
  }), /*#__PURE__*/React.createElement("strong", null, t.about.panel))))), /*#__PURE__*/React.createElement("section", {
    className: "sew-section sew-section--subtle",
    id: "machines",
    "data-screen-label": "Makinelerimiz"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-section__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    center: true,
    kicker: "HAAS \xB7 ZEISS",
    title: t.machines.heading
  }), /*#__PURE__*/React.createElement("div", {
    className: "sew-machines"
  }, t.machines.list.map(m => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: m.model,
    variant: "framed",
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-machine"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-machine__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sew-machine__model"
  }, m.model), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand"
  }, m.badge)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, m.cap, " mm"), /*#__PURE__*/React.createElement("p", {
    className: "sew-machine__desc"
  }, m.desc))))))), /*#__PURE__*/React.createElement("section", {
    className: "sew-section",
    id: "quality",
    "data-screen-label": "Kalite Politikas\u0131"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-section__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    center: true,
    kicker: "AS9100 \xB7 ISO 9001",
    title: t.quality.heading
  }), /*#__PURE__*/React.createElement("div", {
    className: "sew-quality"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sew-quality__text"
  }, /*#__PURE__*/React.createElement("p", null, t.quality.p1), /*#__PURE__*/React.createElement("p", null, t.quality.p2), /*#__PURE__*/React.createElement("p", null, t.quality.p3)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "framed",
    title: t.quality.panelTitle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FeatureList, {
    items: t.quality.checks
  }))))))));
}
Object.assign(__ds_scope, { WebsiteSections });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteStrings.jsx
try { (() => {
/**
 * Bilingual copy for the SE Havacılık marketing site (TR default, EN toggle),
 * lifted verbatim from the shipped site's data-tr / data-en attributes.
 */
const WebsiteStrings = {
  tr: {
    brand: 'SE Havacılık & Makina',
    nav: {
      about: 'Hakkımızda',
      machines: 'Makinelerimiz',
      quality: 'Kalite Politikası',
      contact: 'İletişim'
    },
    langButton: 'EN',
    hero: {
      title: 'SE Havacılık & Makina',
      sub: 'Havacılık endüstrisi için hassas işleme çözümleri',
      cta: 'Bizimle İletişime Geçin'
    },
    about: {
      heading: 'Hakkımızda',
      p1: 'SE Havacılık & Makina olarak, havacılık endüstrisinde yüksek kaliteli hassas işleme hizmetleri sunuyoruz. Deneyimli ekibimiz ve gelişmiş teknolojimizle, en kritik havacılık bileşenlerini üretiyoruz.',
      p2: 'Hassas işleme uzmanlığımız, en yüksek kalite standartlarında havacılık parçaları üretmemizi sağlar. Modern makinelerimiz ve kalite kontrol süreçlerimizle, müşterilerimizin beklentilerini aşan sonuçlar elde ediyoruz.',
      panel: 'Hassas İşleme',
      stats: [{
        value: '15+',
        label: 'Yıllık Deneyim'
      }, {
        value: '±2.5 μm',
        label: 'Ölçme Hassasiyeti'
      }]
    },
    machines: {
      heading: 'Makinelerimiz',
      list: [{
        model: 'HAAS UMC750',
        badge: '5-Axis VMC',
        cap: 'Ø750',
        desc: '5 eksen işleme kapasitesi ile karmaşık geometrileri hassas şekilde işleyebilen gelişmiş makine'
      }, {
        model: 'HAAS VF6',
        badge: '3-Axis VMC',
        cap: '1600×700',
        desc: 'Geniş çalışma alanı ile büyük parçaların işlenmesi için ideal'
      }, {
        model: 'HAAS VF4',
        badge: '3-Axis VMC',
        cap: '1300×600',
        desc: 'Orta boyutlu parçalar için optimize edilmiş hassas işleme makinesi'
      }, {
        model: 'HAAS ST10',
        badge: 'CNC Lathe',
        cap: '305×410',
        desc: 'Silindirik parçalar için hassas torna işleme kapasitesi'
      }, {
        model: 'HAAS HMM430',
        badge: 'CMM',
        cap: '430×400',
        desc: 'Yüksek hassasiyetli koordinat ölçüm makinesi ile kalite kontrol'
      }, {
        model: 'ZEISS SPECTRUM 9/18/6',
        badge: 'CMM',
        cap: '1800×900',
        desc: 'Yüksek hassasiyetli koordinat ölçüm makinesi ile kalite kontrol'
      }]
    },
    quality: {
      heading: 'Kalite Politikası',
      p1: 'SE Havacılık & Makina olarak, havacılık endüstrisinin en yüksek kalite standartlarında üretim yapmayı taahhüt ediyoruz. Tüm üretim süreçlerimizde havacılık kalite uyumluluğunu sağlıyoruz.',
      p2: 'Kalite kontrol süreçlerimiz, her üretim aşamasında detaylı inceleme ve test yapılmasını garanti eder. Modern ölçüm ekipmanlarımız ve deneyimli kalite kontrol ekibimizle, her parçanın mükemmeliyetini sağlıyoruz.',
      p3: 'Havacılık sektörünün katı gereksinimlerini karşılayarak, güvenli ve güvenilir ürünler üretiyoruz. Kalite, güvenlik ve mükemmeliyet bizim temel değerlerimizdir.',
      checks: ['Havacılık kalite uyumluluğu', 'Her aşamada detaylı inceleme ve test', 'Modern ölçüm ekipmanları', 'Deneyimli kalite kontrol ekibi'],
      panelTitle: 'Havacılık Kalite Uyumluluğu'
    },
    contact: {
      heading: 'İletişim',
      infoTitle: 'İletişim Bilgileri',
      addressLabel: 'Adres:',
      address: 'Saray Mah 228 Cad 8B Kahramankazan/Ankara Turkey',
      emailLabel: 'E-posta:',
      email: 'info@sehavacilik.com',
      blurb: 'Hassas işleme ihtiyaçlarınız için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunmaktan memnuniyet duyacaktır.',
      formTitle: 'Mesaj Gönder',
      name: 'Ad Soyad',
      email2: 'E-posta',
      message: 'Mesaj',
      send: 'Gönder',
      sent: 'Mesajınız gönderildi. Teşekkür ederiz!',
      mapTitle: 'Konumumuz',
      mapNote: 'Google Maps · Kahramankazan, Ankara'
    },
    footer: '© 2025 SE Havacılık & Makina A.Ş. Tüm hakları saklıdır.'
  },
  en: {
    brand: 'SE Aerospace & Precision Machining',
    nav: {
      about: 'About',
      machines: 'Our Machines',
      quality: 'Quality Policy',
      contact: 'Contact'
    },
    langButton: 'TR',
    hero: {
      title: 'SE Aerospace & Precision Machining',
      sub: 'Precision machining solutions for the aerospace industry',
      cta: 'Get In Touch'
    },
    about: {
      heading: 'About Us',
      p1: 'At SE Aerospace & Precision Machining, we provide high-quality precision machining services for the aerospace industry. With our experienced team and advanced technology, we manufacture the most critical aerospace components.',
      p2: "Our precision machining expertise enables us to produce aerospace parts to the highest quality standards. With our modern machines and quality control processes, we achieve results that exceed our customers' expectations.",
      panel: 'Precision Machining',
      stats: [{
        value: '15+',
        label: 'Years of Experience'
      }, {
        value: '±2.5 μm',
        label: 'Measuring Accuracy'
      }]
    },
    machines: {
      heading: 'Our Machines',
      list: [{
        model: 'HAAS UMC750',
        badge: '5-Axis VMC',
        cap: 'Ø750',
        desc: 'Advanced machine capable of precision machining complex geometries with 5-axis machining capability'
      }, {
        model: 'HAAS VF6',
        badge: '3-Axis VMC',
        cap: '1600×700',
        desc: 'Ideal for machining large parts with extensive working area'
      }, {
        model: 'HAAS VF4',
        badge: '3-Axis VMC',
        cap: '1300×600',
        desc: 'Precision machining machine optimized for medium-sized parts'
      }, {
        model: 'HAAS ST10',
        badge: 'CNC Lathe',
        cap: '305×410',
        desc: 'Precision turning capability for cylindrical parts'
      }, {
        model: 'HAAS HMM430',
        badge: 'CMM',
        cap: '430×400',
        desc: 'Quality control with high-precision coordinate measuring machine'
      }, {
        model: 'ZEISS SPECTRUM 9/18/6',
        badge: 'CMM',
        cap: '1800×900',
        desc: 'Quality control with high-precision coordinate measuring machine'
      }]
    },
    quality: {
      heading: 'Quality Policy',
      p1: 'At SE Aerospace & Precision Machining, we are committed to manufacturing to the highest quality standards of the aerospace industry. We ensure aerospace quality compliance in all our production processes.',
      p2: 'Our quality control processes guarantee detailed inspection and testing at every production stage. With our modern measuring equipment and experienced quality control team, we ensure the perfection of every part.',
      p3: 'By meeting the strict requirements of the aerospace sector, we produce safe and reliable products. Quality, safety, and excellence are our core values.',
      checks: ['Aerospace quality compliance', 'Detailed inspection & testing at every stage', 'Modern measuring equipment', 'Experienced quality control team'],
      panelTitle: 'Aerospace Quality Compliance'
    },
    contact: {
      heading: 'Contact',
      infoTitle: 'Contact Information',
      addressLabel: 'Address:',
      address: 'Saray Mah 228 Cad 8B Kahramankazan/Ankara Turkey',
      emailLabel: 'Email:',
      email: 'info@sehavacilik.com',
      blurb: 'Contact us for your precision machining needs. Our expert team will be happy to provide you with the most suitable solutions.',
      formTitle: 'Send Message',
      name: 'Full Name',
      email2: 'Email',
      message: 'Message',
      send: 'Send',
      sent: 'Your message has been sent. Thank you!',
      mapTitle: 'Our Location',
      mapNote: 'Google Maps · Kahramankazan, Ankara'
    },
    footer: '© 2025 SE Aerospace & Precision Machining. All rights reserved.'
  }
};
Object.assign(__ds_scope, { WebsiteStrings });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteStrings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHome.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Full one-page SE Havacılık marketing site with working TR/EN toggle.
 * Pass logoSrc/markSrc relative to the consuming page.
 */
function WebsiteHome({
  logoSrc = '../../assets/se-logo-full.png',
  markSrc = '../../assets/se-mark-ondark.png'
}) {
  const [lang, setLang] = useState('tr');
  const [active, setActive] = useState('hero');
  const t = __ds_scope.WebsiteStrings[lang];
  const whiteMark = markSrc.replace(/-ondark\.png$/, '-white.png');
  const nav = id => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sew-page"
  }, /*#__PURE__*/React.createElement(__ds_scope.WebsiteHeader, {
    t: t,
    active: active,
    onNav: nav,
    onToggleLang: () => setLang(lang === 'tr' ? 'en' : 'tr')
  }), /*#__PURE__*/React.createElement(__ds_scope.WebsiteHero, {
    t: t,
    logoSrc: logoSrc,
    onCta: () => nav('contact')
  }), /*#__PURE__*/React.createElement(__ds_scope.WebsiteSections, {
    t: t,
    markSrc: whiteMark
  }), /*#__PURE__*/React.createElement(__ds_scope.WebsiteContact, {
    t: t
  }), /*#__PURE__*/React.createElement(__ds_scope.WebsiteFooter, {
    t: t
  }));
}
Object.assign(__ds_scope, { WebsiteHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.WebsiteContact = __ds_scope.WebsiteContact;

__ds_ns.WebsiteFooter = __ds_scope.WebsiteFooter;

__ds_ns.WebsiteHeader = __ds_scope.WebsiteHeader;

__ds_ns.WebsiteHero = __ds_scope.WebsiteHero;

__ds_ns.WebsiteHome = __ds_scope.WebsiteHome;

__ds_ns.WebsiteSections = __ds_scope.WebsiteSections;

__ds_ns.WebsiteStrings = __ds_scope.WebsiteStrings;

})();
