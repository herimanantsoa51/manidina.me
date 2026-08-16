'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';

// En SSR/SSG (build Next.js), forcer 'fr' pour que le HTML statique soit en français.
// Côté navigateur, le détecteur (localStorage puis navigator) prend le relais.
const forcedLng = typeof window === 'undefined' ? 'fr' : undefined;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { fr: { translation: fr }, en: { translation: en } },
    lng: forcedLng,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;