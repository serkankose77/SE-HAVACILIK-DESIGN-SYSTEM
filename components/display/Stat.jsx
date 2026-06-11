import React from 'react';

/**
 * Big metric block — value + mono uppercase label (15+, ±2.5μm, 24/7).
 */
export function Stat({ value, label, center = false, onDark = false, accent = false, className = '', ...props }) {
  const classes = [
    'se-stat',
    center ? 'se-stat--center' : '',
    onDark ? 'se-stat--on-dark' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={classes} {...props}>
      <div className="se-stat__value">{accent ? <em>{value}</em> : value}</div>
      <div className="se-stat__label">{label}</div>
    </div>
  );
}
