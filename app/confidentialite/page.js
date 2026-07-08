'use client';

import { useTranslation } from 'react-i18next';
import '@/components/i18n';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <h1 style={{ marginBottom: '0.5rem' }}>{t('privacy.title')}</h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>{t('privacy.last_updated')}</p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>{t('privacy.data.title')}</h2>
          <p>{t('privacy.data.desc')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>{t('privacy.cookies.title')}</h2>
          <p>{t('privacy.cookies.desc')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>{t('privacy.third_party.title')}</h2>
          <p>{t('privacy.third_party.desc')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.desc')}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>{t('privacy.contact.title')}</h2>
          <p>{t('privacy.contact.desc')}</p>
        </section>
      </div>
    </div>
  );
}
