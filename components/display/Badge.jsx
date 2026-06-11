import React from 'react';

/**
 * Compact status / category badge (mono uppercase).
 */
export function Badge({ children, tone = 'brand', dot = false, icon, className = '', ...props }) {
  const classes = [
    'se-badge',
    `se-badge--${tone}`,
    dot ? 'se-badge--dot' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={classes} {...props}>
      {icon}
      {children}
    </span>
  );
}
