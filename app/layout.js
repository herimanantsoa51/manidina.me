'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/components/i18n';

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeLanguage = () => {
    const newLang = i18n.language?.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <html lang="fr" data-theme={theme}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {mounted ? (
          <>
            <Header scrolled={scrolled} mounted={mounted} toggleTheme={toggleTheme} changeLanguage={changeLanguage} theme={theme} />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </>
        ) : (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
            <span>Chargement...</span>
          </div>
        )}
      </body>
    </html>
  );
}
