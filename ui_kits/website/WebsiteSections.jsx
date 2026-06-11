import React from 'react';
import { SectionHeading } from '../../components/display/SectionHeading.jsx';
import { Card } from '../../components/display/Card.jsx';
import { Stat } from '../../components/display/Stat.jsx';
import { Badge } from '../../components/display/Badge.jsx';
import { FeatureList } from '../../components/data/FeatureList.jsx';

/**
 * About + Machines + Quality sections of the marketing site.
 */
export function WebsiteSections({ t, markSrc }) {
  return (
    <React.Fragment>
      {/* ---------- About ---------- */}
      <section className="sew-section" id="about" data-screen-label="Hakkımızda">
        <div className="sew-section__inner">
          <SectionHeading center kicker="SE Havacılık & Makina" title={t.about.heading} />
          <div className="sew-about">
            <div>
              <div className="sew-about__text">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              <div className="sew-stats">
                {t.about.stats.map((s) => (
                  <Card key={s.label}><Stat center value={s.value} label={s.label} accent /></Card>
                ))}
              </div>
            </div>
            <div className="sew-about__panel">
              <img src={markSrc} alt="" />
              <strong>{t.about.panel}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Machines ---------- */}
      <section className="sew-section sew-section--subtle" id="machines" data-screen-label="Makinelerimiz">
        <div className="sew-section__inner">
          <SectionHeading center kicker="HAAS · ZEISS" title={t.machines.heading} />
          <div className="sew-machines">
            {t.machines.list.map((m) => (
              <Card key={m.model} variant="framed" hover>
                <div className="sew-machine">
                  <div className="sew-machine__head">
                    <h3 className="sew-machine__model">{m.model}</h3>
                    <Badge tone="brand">{m.badge}</Badge>
                  </div>
                  <Badge tone="outline">{m.cap} mm</Badge>
                  <p className="sew-machine__desc">{m.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quality ---------- */}
      <section className="sew-section" id="quality" data-screen-label="Kalite Politikası">
        <div className="sew-section__inner">
          <SectionHeading center kicker="AS9100 · ISO 9001" title={t.quality.heading} />
          <div className="sew-quality">
            <div className="sew-quality__text">
              <p>{t.quality.p1}</p>
              <p>{t.quality.p2}</p>
              <p>{t.quality.p3}</p>
            </div>
            <div>
              <Card variant="framed" title={t.quality.panelTitle}>
                <div style={{ marginTop: 'var(--space-3)' }}>
                  <FeatureList items={t.quality.checks} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
