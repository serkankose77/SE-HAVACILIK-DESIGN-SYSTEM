import React from 'react';
import { Button } from '../../components/buttons/Button.jsx';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * White hero with the full logo lockup, orange display title and CTA.
 */
export function WebsiteHero({ t, logoSrc, onCta }) {
  return (
    <section className="sew-hero" id="hero" data-screen-label="Hero">
      <div className="sew-hero__inner">
        <img className="sew-hero__logo" src={logoSrc} alt="SE Havacılık ve Makina" />
        <h1 className="sew-hero__title">{t.hero.title}</h1>
        <p className="sew-hero__sub">{t.hero.sub}</p>
        <Button variant="primary" size="lg" iconRight={<ArrowRight />} onClick={onCta}>
          {t.hero.cta}
        </Button>
      </div>
    </section>
  );
}
