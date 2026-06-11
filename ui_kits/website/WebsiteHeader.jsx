import React from 'react';

/**
 * Fixed orange gradient header with brand lockup, section nav and TR/EN toggle.
 */
export function WebsiteHeader({ t, active, onNav, onToggleLang, markSrc }) {
  const links = [
    ['about', t.nav.about],
    ['machines', t.nav.machines],
    ['quality', t.nav.quality],
    ['contact', t.nav.contact],
  ];
  return (
    <header className="sew-header">
      <div className="sew-header__inner">
        <button className="sew-header__brand" onClick={() => onNav('hero')}>
          {markSrc && <img src={markSrc} alt="SE mark" />}
          <span>{t.brand}</span>
        </button>
        <nav className="sew-nav">
          {links.map(([id, label]) => (
            <button
              key={id}
              className={'sew-nav__link' + (active === id ? ' sew-nav__link--active' : '')}
              onClick={() => onNav(id)}
            >
              {label}
            </button>
          ))}
          <button className="sew-lang" onClick={onToggleLang}>{t.langButton}</button>
        </nav>
      </div>
    </header>
  );
}
