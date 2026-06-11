import React from 'react';

/**
 * Square icon-only button. Variants: solid (orange), soft (orange tint), ghost.
 */
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...props
}) {
  const classes = [
    'se-iconbtn',
    `se-iconbtn--${variant}`,
    `se-iconbtn--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} aria-label={label} {...props}>
      {children}
    </button>
  );
}
