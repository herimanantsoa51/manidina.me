'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/components/i18n';

export default function AppShell({ children }) {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const savedLang = localStorage.getItem('i18nextLng');
    const detected = savedLang && savedLang.startsWith('en') ? 'en' : 'fr';
    setLang(detected);
    if (i18n.language !== detected) i18n.changeLanguage(detected);
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeLanguage = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    localStorage.setItem('i18nextLng', newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        scrolled={scrolled}
        toggleTheme={toggleTheme}
        changeLanguage={changeLanguage}
        theme={theme}
        lang={lang}
      />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}