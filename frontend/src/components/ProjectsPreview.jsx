import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import
import './ProjectsPreview.css';

/**
 * Projects Preview Section avec Framer Motion
 * Teaser vers la page projets avec animations
 */
const ProjectsPreview = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "10+", label: t('projects_preview.stats.projects_done') },
    { number: "100%", label: t('projects_preview.stats.happy_clients') },
    { number: "5+", label: t('projects_preview.stats.sectors') }
  ];

  return (
    <section className="projects-preview">
      <div className="projects-preview__container container">
        <motion.div 
          className="projects-preview__content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="projects-preview__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('projects_preview.title')}
          </motion.h2>
          
          <motion.p 
            className="projects-preview__description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('projects_preview.description')}
          </motion.p>
          
          <motion.div 
            className="projects-preview__stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat"
                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className="stat__number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="projects-preview__cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.a 
              href="/projets" 
              className="button button--primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('projects_preview.cta')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;