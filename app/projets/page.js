'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '@/components/i18n';

const PROJECTS = ['express_sale', 'soaharilandy'];

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1>{t('projects_page.hero.title_prefix')} <span style={{ color: 'var(--color-primary)' }}>{t('projects_page.hero.title_highlight')}</span></h1>
          <p style={{ maxWidth: 600, margin: '1rem auto 0' }}>{t('projects_page.hero.subtitle')}</p>
        </motion.div>

        {PROJECTS.map((key, index) => {
          const p = `projects_page.projects.${key}`;
          return (
            <motion.article key={key} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}
              style={{
                marginBottom: '3rem', padding: '2rem', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)', background: 'var(--color-card-bg)'
              }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.8rem', flex: 1 }}>{t(`${p}.name`)}</h2>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{t(`${p}.tagline`)}</span>
              </div>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>{t(`${p}.description`)}</p>

              {/* Features */}
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✨</span> {t('projects_page.features_title')}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {Object.entries(t(`${p}.features`, { returnObjects: true }) || {}).map(([fk, fv]) => (
                  <div key={fk} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{fv.title}</h4>
                    <p style={{ fontSize: '0.9rem' }}>{fv.desc}</p>
                  </div>
                ))}
              </div>

              {/* Screenshots */}
              {(t(`${p}.images`, { returnObjects: true }) || []).length > 0 && (
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>💻 {t('projects_page.screenshots_title')}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                    {(t(`${p}.images`, { returnObjects: true }) || []).slice(0, 4).map((img, i) => (
                      <div key={i} style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                        <div style={{ aspectRatio: '16/10', background: 'var(--color-background-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                          {img.caption || 'Capture'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          );
        })}

        <div style={{ textAlign: 'center', padding: '3rem', marginTop: '2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-card-bg)', border: '1px solid var(--color-border)' }}>
          <h2>{t('projects_page.cta.title')}</h2>
          <p style={{ margin: '1rem auto', maxWidth: 500 }}>{t('projects_page.cta.subtitle')}</p>
          <a href="/contact" className="button button--primary">{t('projects_page.cta.button')}</a>
        </div>
      </div>
    </div>
  );
}
