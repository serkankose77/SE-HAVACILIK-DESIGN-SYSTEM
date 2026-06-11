import React from 'react';

/**
 * Key/value technical spec table in mono (machine specs, tolerances).
 */
export function SpecTable({ specs = [], inverse = false, className = '', ...props }) {
  const classes = ['se-spectable', inverse ? 'se-spectable--inverse' : '', className]
    .filter(Boolean).join(' ');
  return (
    <div className={classes} {...props}>
      {specs.map((s, i) => (
        <div className="se-spectable__row" key={i}>
          <span className="se-spectable__key">{s.key}</span>
          <span className="se-spectable__val">{s.value}</span>
        </div>
      ))}
    </div>
  );
}
