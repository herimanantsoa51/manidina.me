'use client';

import { useTranslation } from 'react-i18next';
import '@/components/i18n';

export default function LegalPage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <h1 style={{ marginBottom: '0.5rem' }}>{t('legal.title')}</h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>{t('legal.last_updated')}</p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>{t('legal.editor.title')}</h2>
          <p>{t('legal.editor.name')}</p>
          <p>{t('legal.editor.contact')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>{t('legal.hosting.title')}</h2>
          <p>{t('legal.hosting.desc')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>{t('legal.ip.title')}</h2>
          <p>{t('legal.ip.desc')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>{t('legal.liability.title')}</h2>
          <p>{t('legal.liability.desc')}</p>
        </section>
      </div>
    </div>
  );
}
