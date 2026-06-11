import React from 'react';

/**
 * Section header: mono kicker, display title, 64×3 orange rule, optional sub.
 */
export function SectionHeading({
  kicker,
  title,
  sub,
  center = false,
  onDark = false,
  level = 2,
  className = '',
  ...props
}) {
  const H = `h${level}`;
  const classes = [
    'se-heading',
    center ? 'se-heading--center' : '',
    onDark ? 'se-heading--on-dark' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <header className={classes} {...props}>
      {kicker && <span className="se-heading__kicker">{kicker}</span>}
      <H className="se-heading__title">{title}</H>
      <hr className="se-heading__rule" />
      {sub && <p className="se-heading__sub">{sub}</p>}
    </header>
  );
}
