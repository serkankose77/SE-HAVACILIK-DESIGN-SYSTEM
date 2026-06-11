import React, { useState } from 'react';
import { WebsiteStrings } from './WebsiteStrings.jsx';
import { WebsiteHeader } from './WebsiteHeader.jsx';
import { WebsiteHero } from './WebsiteHero.jsx';
import { WebsiteSections } from './WebsiteSections.jsx';
import { WebsiteContact, WebsiteFooter } from './WebsiteContact.jsx';

/**
 * Full one-page SE Havacılık marketing site with working TR/EN toggle.
 * Pass logoSrc/markSrc relative to the consuming page.
 */
export function WebsiteHome({
  logoSrc = '../../assets/se-logo-full.png',
  markSrc = '../../assets/se-mark-ondark.png',
}) {
  const [lang, setLang] = useState('tr');
  const [active, setActive] = useState('hero');
  const t = WebsiteStrings[lang];
  const whiteMark = markSrc.replace(/-ondark\.png$/, '-white.png');

  const nav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sew-page">
      <WebsiteHeader
        t={t}
        active={active}
        onNav={nav}
        onToggleLang={() => setLang(lang === 'tr' ? 'en' : 'tr')}
      />
      <WebsiteHero t={t} logoSrc={logoSrc} onCta={() => nav('contact')} />
      <WebsiteSections t={t} markSrc={whiteMark} />
      <WebsiteContact t={t} />
      <WebsiteFooter t={t} />
    </div>
  );
}
