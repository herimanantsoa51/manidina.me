import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import
import './About.css';

/**
 * About Section avec Framer Motion
 * Présentation de Christian Herimanantsoa et de l'équipe
 */
const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__container container">
        <motion.div 
          className="about__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="about__title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('about.title')}
          </motion.h2>
          
          <div className="about__text">
            <motion.p 
              className="about__paragraph"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('about.p1_prefix')}{' '}
              <motion.a 
                href="/portfolio" 
                className="about__link"
                aria-label="Voir le portfolio de Christian HERIMANANTSOA"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('about.p1_link')}
              </motion.a>
              {t('about.p1_suffix')}
            </motion.p>
            
            <motion.p 
              className="about__paragraph"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('about.p2')}
            </motion.p>
            
            <motion.p 
              className="about__paragraph about__paragraph--light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t('about.p3')}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;