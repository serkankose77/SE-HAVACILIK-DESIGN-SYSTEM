import React from 'react';

/**
 * Content card. Optional gradient icon tile, title, body, or arbitrary children.
 * Variants: default, framed (orange frame), inverse (dark).
 */
export function Card({
  icon,
  title,
  children,
  variant = 'default',
  hover = false,
  className = '',
  ...props
}) {
  const classes = [
    'se-card',
    variant === 'framed' ? 'se-card--framed' : '',
    variant === 'inverse' ? 'se-card--inverse' : '',
    hover ? 'se-card--hover' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={classes} {...props}>
      {icon && <div className="se-card__icon">{icon}</div>}
      {title && <h3 className="se-card__title">{title}</h3>}
      {typeof children === 'string'
        ? <p className="se-card__body">{children}</p>
        : children}
    </div>
  );
}
