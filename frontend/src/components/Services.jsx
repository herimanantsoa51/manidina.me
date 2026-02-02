import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import './Services.css';

/**
 * Services Section avec Framer Motion
 * Présentation des services Manidina
 * - 8 cartes de services avec icônes SVG modernes
 * - Animations au scroll et au hover
 * - Compatible mode sombre/clair
 */
const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      key: "education",
      icon: "globe"
    },
    {
      id: 2,
      key: "business",
      icon: "database"
    },
    {
      id: 3,
      key: "automation",
      icon: "lightning"
    },
    {
      id: 4,
      key: "web",
      icon: "code"
    },
    {
      id: 5,
      key: "traceability",
      icon: "scan"
    },
    {
      id: 6,
      key: "ai",
      icon: "brain"
    },
    {
      id: 7,
      key: "data",
      icon: "chart"
    },
    {
      id: 8,
      key: "network",
      icon: "rocket"
    }
  ];

  // Animations au scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section className="services" id="services">
      <div className="services__container container">
        <motion.header 
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services__title">{t('services.title')}</h2>
          <p className="services__intro">
            {t('services.intro')}
          </p>
        </motion.header>

        <motion.div 
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.article 
              key={service.id} 
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Icon name={service.icon} size={48} className="icon--gradient" />
              </motion.div>
              <h3 className="service-card__title">{t(`services.items.${service.key}.title`)}</h3>
              <p className="service-card__description">{t(`services.items.${service.key}.desc`)}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;