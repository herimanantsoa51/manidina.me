'use client';

import { useTranslation } from 'react-i18next';
import '../components/i18n';
import ThemeToggle from './ThemeToggle';

export default function Header({ scrolled, toggleTheme, changeLanguage, theme, lang }) {
  const { t, i18n } = useTranslation();

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0.75rem 0',
      background: scrolled ? 'var(--color-header-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all var(--transition-base)'
    }}>
      <nav className="header__nav container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="header__logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Manidina" style={{ height: 32, width: 32 }} />
            <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-text)' }}>Manidina</span>
          </a>
        </div>

        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
          <li><a href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}>{t('header.home')}</a></li>
          <li><a href="/projets" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}>{t('header.projects')}</a></li>
          <li><a href="/portfolio" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}>{t('header.about')}</a></li>
          <li><a href="/contact" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}>{t('header.contact')}</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={changeLanguage} style={{
            background: 'none', border: 'none', color: 'var(--color-text)',
            fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem'
          }}>
            {i18n?.language?.startsWith('fr') ? 'EN' : 'FR'}
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
}
