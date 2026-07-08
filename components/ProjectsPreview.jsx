'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../components/i18n';

export default function ProjectsPreview() {
  const { t } = useTranslation();

  const stats = [
    { number: '10+', label: t('projects_preview.stats.projects_done') },
    { number: '100%', label: t('projects_preview.stats.happy_clients') },
    { number: '5+', label: t('projects_preview.stats.sectors') },
  ];

  return (
    <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{t('projects_preview.title')}</h2>
          <p style={{ maxWidth: 600, margin: '0 auto 3rem' }}>{t('projects_preview.description')}</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>{stat.number}</div>
                <div style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <a href="/projets" className="button button--primary">{t('projects_preview.cta')}</a>
        </motion.div>
      </div>
    </section>
  );
}
