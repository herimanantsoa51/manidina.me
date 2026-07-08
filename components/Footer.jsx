'use client';

import { useTranslation } from 'react-i18next';
import '../components/i18n';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--spacing-lg) 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <img src="/logo.png" alt="Manidina" style={{ height: 24, width: 24 }} />
          <span style={{ fontWeight: 600 }}>Manidina</span>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
          {t('footer.created_by')}{' '}
          <a href="/portfolio" style={{ color: 'var(--color-primary-dark)', textDecoration: 'underline' }}>
            Christian Herimanantsoa
          </a>
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          © {currentYear} Manidina.me - {t('footer.rights')}
        </p>
        <nav style={{ marginTop: '1rem', display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
          <a href="/mentions-legales" style={{ color: 'var(--color-text-secondary)' }}>{t('footer.legal')}</a>
          <span style={{ color: 'var(--color-text-secondary)' }}>•</span>
          <a href="/confidentialite" style={{ color: 'var(--color-text-secondary)' }}>{t('footer.privacy')}</a>
          <span style={{ color: 'var(--color-text-secondary)' }}>•</span>
          <a href="/contact" style={{ color: 'var(--color-text-secondary)' }}>{t('footer.contact')}</a>
        </nav>
      </div>
    </footer>
  );
}
