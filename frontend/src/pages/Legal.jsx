import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Legal.css';

const Legal = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <SEO
        title="Mentions Légales | Manidina"
        description="Mentions légales du site Manidina.me - Éditeur, hébergement, propriété intellectuelle."
        path="/mentions-legales"
      />
      <div className="container">
        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t('legal.title')}</h1>
          <p className="legal-date">{t('legal.last_updated')}</p>

          <section>
            <h2>{t('legal.editor.title')}</h2>
            <p>{t('legal.editor.name')}</p>
            <p>{t('legal.editor.contact')}</p>
          </section>

          <section>
            <h2>{t('legal.hosting.title')}</h2>
            <p>{t('legal.hosting.desc')}</p>
            <p>{t('legal.hosting.platform')} — <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a></p>
          </section>

          <section>
            <h2>{t('legal.ip.title')}</h2>
            <p>{t('legal.ip.desc')}</p>
          </section>

          <section>
            <h2>{t('legal.liability.title')}</h2>
            <p>{t('legal.liability.desc')}</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
