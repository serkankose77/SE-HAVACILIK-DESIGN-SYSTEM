import React from 'react';

/**
 * Labelled native select with brand chevron + focus ring.
 */
export function Select({
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
  return (
    <div className={['se-field', onDark ? 'se-field--on-dark' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="se-field__label" htmlFor={selId}>
          {label}{required && <span className="se-req">*</span>}
        </label>
      )}
      <select
        id={selId}
        className={['se-select', error ? 'se-select--invalid' : ''].filter(Boolean).join(' ')}
        aria-invalid={!!error}
        required={required}
        defaultValue={placeholder ? '' : undefined}
        {...props}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const lbl = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{lbl}</option>;
        })}
        {children}
      </select>
      {error ? <span className="se-field__error">{error}</span>
             : hint ? <span className="se-field__hint">{hint}</span> : null}
    </div>
  );
}
