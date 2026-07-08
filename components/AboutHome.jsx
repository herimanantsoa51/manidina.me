'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../components/i18n';

export default function AboutHome() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 800, margin: '0 auto' }}
        >
          <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>{t('about.title')}</h2>
          <p style={{ marginBottom: '1rem' }}>
            {t('about.p1_prefix')}{' '}
            <a href="/portfolio" style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}>
              {t('about.p1_link')}
            </a>
            {t('about.p1_suffix')}
          </p>
          <p style={{ marginBottom: '1rem' }}>{t('about.p2')}</p>
          <p style={{ opacity: 0.7 }}>{t('about.p3')}</p>
        </motion.div>
      </div>
    </section>
  );
}
