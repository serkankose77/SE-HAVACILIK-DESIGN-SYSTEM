import React from 'react';

/**
 * SE Havacılık primary action button.
 * Variants: primary (orange), secondary (ink), outline, ghost.
 */
export function Button({
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
  const classes = [
    'se-btn',
    `se-btn--${variant}`,
    `se-btn--${size}`,
    block ? 'se-btn--block' : '',
    onDark ? 'se-btn--on-dark' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...props}>
      {iconLeft && <span className="se-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="se-btn__icon">{iconRight}</span>}
    </Tag>
  );
}
