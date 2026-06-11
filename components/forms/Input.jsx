import React from 'react';

/**
 * Labelled text input with hint/error states.
 */
export function Input({
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
  return (
    <div className={['se-field', onDark ? 'se-field--on-dark' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="se-field__label" htmlFor={inputId}>
          {label}{required && <span className="se-req">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={['se-input', error ? 'se-input--invalid' : ''].filter(Boolean).join(' ')}
        aria-invalid={!!error}
        required={required}
        {...props}
      />
      {error ? <span className="se-field__error">{error}</span>
             : hint ? <span className="se-field__hint">{hint}</span> : null}
    </div>
  );
}
