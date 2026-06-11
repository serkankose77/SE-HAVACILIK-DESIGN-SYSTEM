import React from 'react';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

/**
 * Orange-check feature list (service features, "Neden SE?" bullets).
 */
export function FeatureList({ items = [], columns = 1, onDark = false, className = '', ...props }) {
  const classes = ['se-featurelist', onDark ? 'se-featurelist--on-dark' : '', className]
    .filter(Boolean).join(' ');
  const style = columns > 1
    ? { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 'var(--space-3)' }
    : undefined;
  return (
    <ul className={classes} style={style} {...props}>
      {items.map((item, i) => (
        <li className="se-featurelist__item" key={i}>
          <span className="se-featurelist__check"><CheckIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
