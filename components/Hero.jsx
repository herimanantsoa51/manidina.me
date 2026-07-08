'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../components/i18n';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)', position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 700 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '1.5rem' }}
          >
            {t('hero.title_main')}{' '}
            <span style={{ color: 'var(--color-primary)' }}>{t('hero.title_accent')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: 600 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#services" className="button button--primary">{t('hero.cta_services')}</a>
            <a href="/projets" className="button button--secondary">{t('hero.cta_projects')}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
