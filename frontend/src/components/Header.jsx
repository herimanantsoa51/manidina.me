import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import
import ThemeToggle from './ThemeToggle';
import './Header.css';

/**
 * Header Component
 * Navigation fixe avec effet au scroll, style Apple
 * - Logo Manidina à gauche
 * - Navigation principale au centre
 * - Theme toggle à droite
 * - Fond transparent qui devient opaque au scroll
 */

const Header = () => {
  const { t, i18n } = useTranslation(); // Hook
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gérer le thème
  useEffect(() => {
    // Si pas de préférence stockée, on met 'dark' par défaut
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeLanguage = () => {
    const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav container">
        <div className="header__logo">
          <a href="/" aria-label="Manidina - Accueil">
            <img src="/logo.png" alt="Manidina" className="header__logo-img" />
            <span className="header__logo-text">Manidina</span>
          </a>
        </div>
        
        <ul className="header__menu">
          <li>
            <a href="/" className="header__link">{t('header.home')}</a>
          </li>
          <li>
            <a href="/projets" className="header__link">{t('header.projects')}</a>
          </li>
          <li>
            <a href="/portfolio" className="header__link">{t('header.about')}</a>
          </li>
          <li>
            <a href="/contact" className="header__link">{t('header.contact')}</a>
          </li>
        </ul>

        <div className="header__actions">
          <button 
            className="lang-toggle" 
            onClick={changeLanguage}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-primary)',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginRight: '1rem',
              fontSize: '0.9rem'
            }}
          >
            {i18n.language.startsWith('fr') ? 'EN' : 'FR'}
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header;