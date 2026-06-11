import React from 'react';

/**
 * Checkbox with brand-orange checked state and inline label.
 */
export function Checkbox({ label, checked, defaultChecked, onChange, className = '', ...props }) {
  return (
    <label className={['se-checkbox', className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...props}
      />
      <span className="se-checkbox__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
