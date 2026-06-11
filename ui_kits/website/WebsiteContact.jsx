import React, { useState } from 'react';
import { SectionHeading } from '../../components/display/SectionHeading.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { Input } from '../../components/forms/Input.jsx';
import { Textarea } from '../../components/forms/Textarea.jsx';

const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
  </svg>
);

/**
 * Contact section: info column, framed message form (fake submit), map placeholder.
 */
export function WebsiteContact({ t }) {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <section className="sew-section sew-section--subtle" id="contact" data-screen-label="İletişim">
      <div className="sew-section__inner">
        <SectionHeading center kicker="info@sehavacilik.com" title={t.contact.heading} />
        <div className="sew-contact">
          <div className="sew-contact__info">
            <h3>{t.contact.infoTitle}</h3>
            <div className="sew-contact__row">
              <MapPin />
              <p><strong>{t.contact.addressLabel}</strong> {t.contact.address}</p>
            </div>
            <div className="sew-contact__row">
              <Mail />
              <p><strong>{t.contact.emailLabel}</strong> <a href="mailto:info@sehavacilik.com">{t.contact.email}</a></p>
            </div>
            <p>{t.contact.blurb}</p>
          </div>
          <div className="se-card se-card--framed">
            <h3 className="se-card__title">{t.contact.formTitle}</h3>
            {sent ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 'var(--space-5) 0', color: 'var(--color-success)' }}>
                <span style={{ width: 22, height: 22, display: 'inline-flex' }}><Check /></span>
                <strong>{t.contact.sent}</strong>
              </div>
            ) : (
              <form className="sew-form" onSubmit={submit}>
                <Input label={t.contact.name} required name="name" />
                <Input label={t.contact.email2} type="email" required name="email" />
                <Textarea label={t.contact.message} required rows={4} name="message" />
                <Button type="submit" variant="primary">{t.contact.send}</Button>
              </form>
            )}
          </div>
        </div>
        <div className="sew-map">
          <div className="sew-map__pin">
            <MapPin />
            <span>{t.contact.mapNote}</span>
            <span>{t.contact.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Orange gradient footer bar.
 */
export function WebsiteFooter({ t }) {
  return (
    <footer className="sew-footer" data-screen-label="Footer">
      <p>{t.footer}</p>
    </footer>
  );
}
