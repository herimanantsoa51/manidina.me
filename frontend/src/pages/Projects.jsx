import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon';
import './Projects.css';

/**
 * COMPOSANT MODAL IMAGE
 */
const ImageModal = ({ image, isOpen, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="image-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="image-modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton fermer */}
          <button className="modal-close" onClick={onClose} aria-label="Fermer">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Image */}
          <div className="modal-image-container">
            <img src={image.url} alt={image.caption} />
          </div>

          {/* Caption */}
          <div className="modal-caption">
            <p>{image.caption}</p>
          </div>

          {/* Navigation */}
          {hasPrev && (
            <button 
              className="modal-nav modal-nav--prev" 
              onClick={onPrev}
              aria-label="Image précédente"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}

          {hasNext && (
            <button 
              className="modal-nav modal-nav--next" 
              onClick={onNext}
              aria-label="Image suivante"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * COMPOSANT IMAGE CAROUSEL
 */
const ImageCarousel = ({ images, type }) => {
  const { t } = useTranslation();
  const scrollRef = React.useRef(null);
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = type === 'desktop' ? 700 : 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (image, index) => {
    setModalImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setModalImage(images[newIndex]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setModalImage(images[newIndex]);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="carousel-empty">
        <Icon name="code" size={32} />
        <p>{type === 'desktop' ? t('projects_page.empty_carousel.desktop') : t('projects_page.empty_carousel.mobile')}</p>
      </div>
    );
  }

  return (
    <>
      <div className={`image-carousel image-carousel--${type}`}>
        <button 
          className="carousel-btn carousel-btn--left" 
          onClick={() => scroll('left')}
          aria-label="Image précédente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div className="carousel-track" ref={scrollRef}>
          {images.map((image, i) => (
            <motion.div
              key={i}
              className={`carousel-item carousel-item--${type}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openModal(image, i)}
            >
              <div className="image-wrapper">
                <img 
                  src={image.url} 
                  alt={image.caption}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span>Agrandir</span>
                </div>
              </div>
              <p className="image-caption">{image.caption}</p>
            </motion.div>
          ))}
        </div>

        <button 
          className="carousel-btn carousel-btn--right" 
          onClick={() => scroll('right')}
          aria-label="Image suivante"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Modal */}
      <ImageModal
        image={modalImage}
        isOpen={!!modalImage}
        onClose={closeModal}
        onNext={goToNext}
        onPrev={goToPrev}
        hasNext={currentIndex < images.length - 1}
        hasPrev={currentIndex > 0}
      />
    </>
  );
};

/**
 * COMPOSANT PRINCIPAL
 */
function Projects() {
  const { t } = useTranslation();

  const PROJECTS_DATA = [
    {
      id: 1,
      name: t('projects_page.projects.express_sale.name'),
      slug: "express-sale-pret-a-porter",
      link: "https://www.facebook.com/ExpressSalel",
      logo: "/express_sale_logo.jpg",
      tagline: t('projects_page.projects.express_sale.tagline'),
      description: t('projects_page.projects.express_sale.description'),
      year: "2026",
      client: "Express Sale Madagascar",
      technologies: ["React", "Laravel", "Postgres", "Tailscale", "Multi-plateforme", "Comptabilité", "Multi-devises"],
      stats: [
        { label: t('projects_page.stats_labels.transactions'), value: "500+/mois" },
        { label: t('projects_page.stats_labels.products'), value: "2000+" },
        { label: t('projects_page.stats_labels.locations'), value: "5" }
      ],
      features: [
        {
          icon: "lightning",
          title: t('projects_page.projects.express_sale.features.pos.title'),
          desc: t('projects_page.projects.express_sale.features.pos.desc')
        },
        {
          icon: "database",
          title: t('projects_page.projects.express_sale.features.fifo.title'),
          desc: t('projects_page.projects.express_sale.features.fifo.desc')
        },
        {
          icon: "chart",
          title: t('projects_page.projects.express_sale.features.accounting.title'),
          desc: t('projects_page.projects.express_sale.features.accounting.desc')
        },
        {
          icon: "globe",
          title: t('projects_page.projects.express_sale.features.multicurrency.title'),
          desc: t('projects_page.projects.express_sale.features.multicurrency.desc')
        },
        {
          icon: "brain",
          title: t('projects_page.projects.express_sale.features.reservations.title'),
          desc: t('projects_page.projects.express_sale.features.reservations.desc')
        },
        {
          icon: "rocket",
          title: t('projects_page.projects.express_sale.features.stats.title'),
          desc: t('projects_page.projects.express_sale.features.stats.desc')
        }
      ],
      images: {
        desktop: [
          { url: "/images/express_sale/express_sale7.png", caption: t('projects_page.projects.express_sale.images.0.caption') },
          { url: "/images/express_sale/express_sale8.png", caption: t('projects_page.projects.express_sale.images.1.caption') },
          { url: "/images/express_sale/express_sale11.png", caption: t('projects_page.projects.express_sale.images.2.caption') },
          { url: "/images/express_sale/express_sale3.png", caption: t('projects_page.projects.express_sale.images.3.caption') },
          { url: "/images/express_sale/express_sale4.png", caption: t('projects_page.projects.express_sale.images.4.caption') },
          { url: "/images/express_sale/express_sale5.png", caption: t('projects_page.projects.express_sale.images.5.caption') },
          { url: "/images/express_sale/express_sale12.png", caption: t('projects_page.projects.express_sale.images.6.caption') },
          { url: "/images/express_sale/express_sale6.png", caption: t('projects_page.projects.express_sale.images.7.caption') },
          { url: "/images/express_sale/express_sale1.png", caption: t('projects_page.projects.express_sale.images.8.caption') },
          { url: "/images/express_sale/express_sale2.png", caption: t('projects_page.projects.express_sale.images.9.caption') },
          { url: "/images/express_sale/express_sale9.png", caption: t('projects_page.projects.express_sale.images.10.caption') },
          { url: "/images/express_sale/express_sale10.png", caption: t('projects_page.projects.express_sale.images.11.caption') }
        ],
        mobile: []
      }
    },
    {
      id: 2,
      name: t('projects_page.projects.soaharilandy.name'),
      slug: "gestion-vetements-traditionnels",
      link: "https://www.facebook.com/Soaharilandy",
      logo: "/soaharilandy_logo.png",
      tagline: t('projects_page.projects.soaharilandy.tagline'),
      description: t('projects_page.projects.soaharilandy.description'),
      year: "2025",
      client: "Soaharilandy Madagascar",
      technologies: ["React Native", "Supabase", "QR Code", "Multi-utilisateur", "Traçabilité"],
      stats: [
        { label: t('projects_page.stats_labels.users'), value: "10+" },
        { label: t('projects_page.stats_labels.tracked_items'), value: "10k+" },
        { label: t('projects_page.stats_labels.creators'), value: "25+" }
      ],
      features: [
        {
          icon: "database",
          title: t('projects_page.projects.soaharilandy.features.multiuser.title'),
          desc: t('projects_page.projects.soaharilandy.features.multiuser.desc')
        },
        {
          icon: "code",
          title: t('projects_page.projects.soaharilandy.features.qrcode.title'),
          desc: t('projects_page.projects.soaharilandy.features.qrcode.desc')
        },
        {
          icon: "map",
          title: t('projects_page.projects.soaharilandy.features.traceability.title'),
          desc: t('projects_page.projects.soaharilandy.features.traceability.desc')
        },
        {
          icon: "chart",
          title: t('projects_page.projects.soaharilandy.features.stats.title'),
          desc: t('projects_page.projects.soaharilandy.features.stats.desc')
        },
        {
          icon: "sparkles",
          title: t('projects_page.projects.soaharilandy.features.certification.title'),
          desc: t('projects_page.projects.soaharilandy.features.certification.desc')
        },
        {
          icon: "lightning",
          title: t('projects_page.projects.soaharilandy.features.sales.title'),
          desc: t('projects_page.projects.soaharilandy.features.sales.desc')
        }
      ],
      images: {
        desktop: [],
        mobile: [
          { url: "/images/soaharilandy/soaharilandy.jpg", caption: t('projects_page.projects.soaharilandy.images.0.caption') },
          { url: "/images/soaharilandy/soa1.jpg", caption: t('projects_page.projects.soaharilandy.images.1.caption') },
          { url: "/images/soaharilandy/soa3.jpg", caption: t('projects_page.projects.soaharilandy.images.2.caption') },
          { url: "/images/soaharilandy/soa4.jpeg", caption: t('projects_page.projects.soaharilandy.images.3.caption') },
          { url: "/images/soaharilandy/soa5.jpeg", caption: t('projects_page.projects.soaharilandy.images.4.caption') },
          { url: "/images/soaharilandy/soa6.jpeg", caption: t('projects_page.projects.soaharilandy.images.5.caption') },
        ]
      }
    }
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <motion.section 
        className="projects-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="projects-hero__background">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`hero-circle hero-circle--${i + 1}`}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('projects_page.hero.title_prefix')} <span className="highlight">{t('projects_page.hero.title_highlight')}</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('projects_page.hero.subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Projects List */}
      <section className="projects-list">
        <div className="container-wide">
          {PROJECTS_DATA.map((project, index) => (
            <motion.article
              key={project.id}
              className="project"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Header */}
              <div className="project__header">
                <div className="project__header-left">
                  {/* Logo du projet */}
                  <motion.div 
                    className="project__logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={project.logo} alt={`Logo ${project.name}`} />
                  </motion.div>

                  <div className="project__info">
                    <div className="project__meta">
                      <span className="year">{project.year}</span>
                      <span className="separator">•</span>
                      <span className="client">{project.client}</span>
                    </div>
                    <h2 className="project__title">{project.name}</h2>
                    <p className="project__tagline">{project.tagline}</p>
                  </div>
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link-btn"
                >
                  <span>{t('projects_page.visit')}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>

              {/* Project Content */}
              <div className="project__content">
                <p className="project__description">{project.description}</p>

                {/* Technologies */}
                <div className="project__technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="project__stats">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="stat">
                      <div className="stat__value">{stat.value}</div>
                      <div className="stat__label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="project__features">
                <h3 className="section-title">
                  <Icon name="sparkles" size={24} />
                  {t('projects_page.features_title')}
                </h3>
                <div className="features-grid">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="feature-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <Icon name={feature.icon} size={24} className="feature-icon" />
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Images Gallery */}
              <div className="project__gallery">
                <h3 className="section-title">
                  <Icon name="code" size={24} />
                  {t('projects_page.screenshots_title')}
                </h3>

                {/* Desktop Screenshots */}
                {project.images.desktop.length > 0 && (
                  <div className="gallery-section">
                    <h4 className="gallery-section-title">
                      💻 {t('projects_page.desktop_version')}
                    </h4>
                    <ImageCarousel 
                      images={project.images.desktop} 
                      type="desktop"
                    />
                  </div>
                )}

                {/* Mobile Screenshots */}
                {project.images.mobile.length > 0 && (
                  <div className="gallery-section">
                    <h4 className="gallery-section-title">
                      📱 {t('projects_page.mobile_version')}
                    </h4>
                    <ImageCarousel 
                      images={project.images.mobile} 
                      type="mobile"
                    />
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Link to Admin Projects */}
      <div className="container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <motion.a 
          href="/portfolio#deployments" 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-primary)',
            textDecoration: 'none', 
            padding: '1rem 2rem',
            border: '2px solid var(--color-primary)',
            borderRadius: '50px',
            background: 'transparent'
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-background)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t('projects_page.admin_projects_link')}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </motion.a>
      </div>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Icon name="rocket" size={56} className="cta-icon" />
          </motion.div>
          <h2>{t('projects_page.cta.title')}</h2>
          <p>{t('projects_page.cta.subtitle')}</p>
          <motion.a
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('projects_page.cta.button')}
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default Projects;