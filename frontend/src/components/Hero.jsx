import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';

/**
 * Hero Section avec Framer Motion
 * Design moderne avec animations fluides
 * - Animations de texte word by word
 * - Cercles flottants animés (comme l'exemple Marketeam)
 * - Compatible mode sombre/clair
 */
const Hero = () => {
  const { t } = useTranslation();

  // Animation pour le titre (apparition mot par mot)
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Animation pour les cercles flottants
  const circleVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const title = t('hero.title_main');
  const accent = t('hero.title_accent');
  
  return (
    <section className="hero">
      <div className="hero__container container">
        {/* Cercles flottants en arrière-plan */}
        <div className="hero__background">
          <motion.div 
            className="hero__circle hero__circle--1"
            variants={circleVariants}
            animate="animate"
            style={{ animationDelay: '0s' }}
          />
          <motion.div 
            className="hero__circle hero__circle--2"
            variants={circleVariants}
            animate="animate"
            style={{ animationDelay: '3s' }}
          />
          <motion.div 
            className="hero__circle hero__circle--3"
            variants={circleVariants}
            animate="animate"
            style={{ animationDelay: '6s' }}
          />
          <motion.div 
            className="hero__circle hero__circle--4"
            variants={circleVariants}
            animate="animate"
            style={{ animationDelay: '9s' }}
          />
          
          {/* Petits points flottants */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`hero__dot hero__dot--${i + 1}`}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        {/* Contenu principal */}
        <div className="hero__content">
          <motion.h1 
            className="hero__title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split(' ').map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="hero__word">
                {word}{' '}
              </motion.span>
            ))}
            <br />
            <motion.span 
              className="hero__title-accent"
              variants={wordVariants}
            >
              {accent.split(' ').map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="hero__word">
                  {word}{' '}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="hero__cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.a 
              href="#services" 
              className="button button--primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta_services')}
            </motion.a>
            <motion.a 
              href="/projets" 
              className="button button--secondary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta_projects')}
            </motion.a>
          </motion.div>
        </div>
        
        {/* Stats circulaire (comme Marketeam) */}
        <motion.div 
          className="hero__stats"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {/* Logo tournant - Même taille que les stats */}
          <motion.div 
            className="hero__logo-circle"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <img src="/logo.png" alt="Manidina" className="hero__logo-rotating" />
          </motion.div>
          
          {/* Stats principales - Sans rotation */}
          <motion.div 
            className="hero__stats-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2, type: "spring", stiffness: 150 }}
          >
            <div className="hero__stats-inner">
              <div className="hero__stats-number">10+</div>
              <div className="hero__stats-label">{t('hero.stats.projects')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;