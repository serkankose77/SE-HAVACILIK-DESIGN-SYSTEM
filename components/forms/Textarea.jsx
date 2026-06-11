import React from 'react';

/**
 * Labelled multi-line text area.
 */
export function Textarea({
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
  return (
    <div className={['se-field', onDark ? 'se-field--on-dark' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="se-field__label" htmlFor={taId}>
          {label}{required && <span className="se-req">*</span>}
        </label>
      )}
      <textarea
        id={taId}
        rows={rows}
        className={['se-textarea', error ? 'se-textarea--invalid' : ''].filter(Boolean).join(' ')}
        aria-invalid={!!error}
        required={required}
        {...props}
      />
      {error ? <span className="se-field__error">{error}</span>
             : hint ? <span className="se-field__hint">{hint}</span> : null}
    </div>
  );
}
