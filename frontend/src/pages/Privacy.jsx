import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Legal.css';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <SEO
        title="Confidentialité | Manidina"
        description="Politique de confidentialité de Manidina.me — Données personnelles, cookies, vos droits."
        path="/confidentialite"
      />
      <div className="container">
        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t('privacy.title')}</h1>
          <p className="legal-date">{t('privacy.last_updated')}</p>

          <section>
            <h2>{t('privacy.data.title')}</h2>
            <p>{t('privacy.data.desc')}</p>
          </section>

          <section>
            <h2>{t('privacy.cookies.title')}</h2>
            <p>{t('privacy.cookies.desc')}</p>
          </section>

          <section>
            <h2>{t('privacy.third_party.title')}</h2>
            <p>{t('privacy.third_party.desc')}</p>
          </section>

          <section>
            <h2>{t('privacy.rights.title')}</h2>
            <p>{t('privacy.rights.desc')}</p>
          </section>

          <section>
            <h2>{t('privacy.contact.title')}</h2>
            <p>{t('privacy.contact.desc')}</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
