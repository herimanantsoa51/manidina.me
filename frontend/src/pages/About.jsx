import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon';
import './About.css';

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
        style={{ zIndex: 10000 }}
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
          {image.caption && (
            <div className="modal-caption">
              <p>{image.caption}</p>
            </div>
          )}

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
        <p>{type === 'desktop' ? t('portfolio.project.empty_desktop') : t('portfolio.project.empty_mobile')}</p>
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
                  alt={image.caption || 'Capture d\'écran'}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span>{t('portfolio.project.expand')}</span>
                </div>
              </div>
              {image.caption && <p className="image-caption">{image.caption}</p>}
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
 * CONFIGURATION COMPÉTENCES
 */
const SKILLS_CONFIG = {
  ai: {
    icon: "brain",
    items: ["Scikit-learn", "PyTorch", "OpenCV", "YOLO"]
  },
  frameworks: {
    icon: "code",
    items: ["React", "React Native", "Tailwind CSS", "Laravel", "Javalin"]
  },
  databases: {
    icon: "database",
    items: ["PostgreSQL", "MySQL", "SQLite", "Neo4j"]
  },
  languages: {
    icon: "sparkles",
    items: ["C", "C++", "JavaScript", "TypeScript", "PHP", "Python", "Java", "Bash", "SQL"]
  },
  automation: {
    icon: "rocket",
    items: ["N8N", "GitHub", "GitLab", "Supabase", "Tailscale", "Microsoft Azure", "Linux", "SSH"]
  }
};

/**
 * CONFIGURATION PROJETS
 */
const PROJECTS_CONFIG = [
  {
    id: 1,
    key: "maintsovola",
    link: "https://www.maintsovola.com",
    linkFacebook: null,
    logo: "/images/maintsovola/maintso_vola.png",
    year: "2025 - ",
    technologies: ["React", "React Native","Supabase","Multi-plateforme"],
    stats: [
      { key: "farmers", value: "500+" },
      { key: "projects", value: "75" },
      { key: "communities", value: "25" }
    ],
    features: [
      { key: "management", icon: "agriculture" },
      { key: "social", icon: "social" },
      { key: "map", icon: "map" },
      { key: "finance", icon: "chart" },
      { key: "funding", icon: "lightning" },
      { key: "ai", icon: "brain" }
    ],
    images: {
      desktop: [],
      mobile: [
        { url:"/images/maintsovola/manitso_vola3.jpeg", caption: "" },
        { url:"/images/maintsovola/manitso_vola1.jpeg", caption: "" },
        { url:"/images/maintsovola/manitso_vola2.jpeg", caption:"" }
      ]
    }
  },
  {
    id: 4,
    key: "trashlink",
    link: null,
    linkFacebook: null,
    logo: "/images/trashlink/trashlink_logo.png",
    year: "2025 (En étude)",
    technologies: ["YOLO", "RAG AI", "Pathfinding", "React Native"],
    stats: [
      { key: "precision", value: "95%" },
      { key: "time", value: "40%" },
      { key: "classes", value: "15+" }
    ],
    features: [
      { key: "route", icon: "map" },
      { key: "cost", icon: "chart" },
      { key: "detection", icon: "scan" },
      { key: "assistant", icon: "brain" },
      { key: "biogas", icon: "recycle" }
    ],
    images: {
      desktop: [],
      mobile: [
        { url: "/images/trashlink/trashlink1.jpeg", caption: "" },
        { url: "/images/trashlink/trashlink2.jpeg", caption: "" },
        { url: "/images/trashlink/trashlink3.jpeg", caption: "" },
        { url: "/images/trashlink/trashlink6.jpeg", caption: "" },
        { url: "/images/trashlink/trashlink4.jpeg", caption: "" },
        { url: "/images/trashlink/trashlink5.jpeg", caption: "" }
      ]
    }
  },
  {
    id: 2,
    key: "varotra",
    link: null,
    linkFacebook: null,
    logo: "/logo.png",
    year: "2025",
    technologies: ["YOLO", "OpenCV", "Python", "PHP", "MySQL", "ESP32", "Raspberry Pi", "Asterisk", "Robotique"],
    stats: [
      { key: "precision", value: "96%" },
      { key: "time", value: "<2s" },
      { key: "recognition", value: "98%" }
    ],
    features: [
      { key: "vision", icon: "brain" },
      { key: "robot", icon: "robot" },
      { key: "platform", icon: "globe" },
      { key: "offline", icon: "lightning" },
      { key: "payment", icon: "scan" },
      { key: "monitoring", icon: "chart" }
    ],
    images: {
      desktop: [
        { url:"/images/varotra_intelliz/varotra_intelliz.png", caption: "control" },
        { url:"/images/varotra_intelliz/vola_detection.png", caption: "money" },
      ],
      mobile: []
    }
  },
  {
    id: 3,
    key: "manidina",
    link: null,
    linkFacebook: null,
    logo: "/logo.png",
    year: "2025 - En cours",
    technologies: ["React", "Java", "Javalin", "PostgreSQL", "Python", "Pandas", "Leaflet", "Algorithmes de graphes"],
    stats: [
      { key: "airports", value: "89 000+" },
      { key: "routes", value: "67 000+" },
      { key: "countries", value: "195" }
    ],
    features: [
      { key: "map", icon: "map" },
      { key: "data", icon: "database" },
      { key: "analytics", icon: "chart" },
      { key: "pathfinding", icon: "code" },
      { key: "cleaning", icon: "sparkles" },
      { key: "roadmap", icon: "brain" }
    ],
    images: {
      desktop: [
        { url:"/images/manidina_aviation/manidina_aviation1.png", caption: "map" },
        { url:"/images/manidina_aviation/manidina_aviation2.png", caption: "details" },
        { url:"/images/manidina_aviation/manidina_aviation3.png", caption: "runway" },
        { url:"/images/manidina_aviation/manidina_aviation4.png", caption: "search" },
        { url:"/images/manidina_aviation/manidina_aviation5.png", caption: "routes" },
        { url:"/images/manidina_aviation/manidina_aviation6.png", caption: "navaids" },
        { url:"/images/manidina_aviation/manidina_aviation9.png", caption: "" },
        { url:"/images/manidina_aviation/manidina_aviation7.png", caption: "path" },
        { url:"/images/manidina_aviation/manidina_aviation8.png", caption: "" },
        { url:"/images/manidina_aviation/manidina_aviation10.png", caption: "path_view" },
        { url:"/images/manidina_aviation/manidina_aviation11.png", caption: "route_details" },
      ],
      mobile: []
    }
  },
  {
    id: 5,
    key: "gigapayant",
    link: null,
    linkFacebook: null,
    logo: "logo.png",
    year: "2025",
    technologies: ["Laravel", "PHP", "MySQL", "Network Management", "Authentication Systems"],
    stats: [
      { key: "codes", value: "∞" },
      { key: "security", value: "14 chars" },
      { key: "granularity", value: "1 Mo" }
    ],
    features: [
      { key: "fairness", icon: "globe" },
      { key: "billing", icon: "lightning" },
      { key: "security", icon: "code" },
      { key: "admin", icon: "chart" },
      { key: "user", icon: "database" },
      { key: "scale", icon: "rocket" }
    ],
    images: {
      desktop: [
        { url:"/images/giga_payant/giga_payant1.png", caption: "admin" },
        { url:"/images/giga_payant/giga_payant2.png", caption: "codes" }
      ],
      mobile: []
    }
  },
  {
    id: 7,
    key: "scraping",
    link: null,
    linkFacebook: null,
    logo: "/logo.png",
    year: "2025",
    technologies: ["n8n", "Python", "YOLO", "Google Colab", "APIs", "Web Scraping"],
    stats: [
      { key: "sources", value: "Multiple" },
      { key: "filtering", value: "YOLO v8" },
      { key: "automation", value: "100%" }
    ],
    features: [
      { key: "n8n", icon: "rocket" },
      { key: "scraping", icon: "database" },
      { key: "python", icon: "code" },
      { key: "yolo", icon: "brain" }
    ],
    images: {
      desktop: [
        { url: "/images/n8n/n8n1.png", caption: "result" },
        { url: "/images/n8n/n8n2.png", caption: "workflow" }
      ],
      mobile: []
    }
  },
  {
    id: 6,
    key: "atc",
    link: null,
    linkFacebook: null,
    logo: "/logo.png",
    year: "2024",
    technologies: ["C", "SDL2", "Algorithmes de planification", "Systèmes temps réel"],
    stats: [
      { key: "parkings", value: "25+" },
      { key: "emergency", value: "15" },
      { key: "response", value: "<100ms" }
    ],
    features: [
      { key: "satellite", icon: "map" },
      { key: "parkings", icon: "chart" },
      { key: "monitoring", icon: "lightning" },
      { key: "trajectory", icon: "plane" },
      { key: "scheduling", icon: "database" },
      { key: "performance", icon: "code" }
    ],
    images: {
      desktop: [
        { url:"/images/Ivato_Airport/TNR.jpeg", caption: "tnr" },
        { url:"/images/Ivato_Airport/TNR.png", caption: "jfk" }
      ],
      mobile: []
    }
  }
];

/**
 * COMPOSANT PRINCIPAL
 */
function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Profile Section */}
      <motion.section 
        className="profile-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-background">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`bg-circle bg-circle--${i + 1}`}
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
          {/* Photo de profil */}
          <motion.div
            className="profile-photo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-photo">
              <img src="/images/profile.jpeg" alt="Christian Herimanantsoa" />
            </div>
            <div className="aviation-badge">
              <Icon name="plane" size={32} className="aviation-emoji" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="profile-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="location-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{t('portfolio.location')}</span>
            </div>

            <p 
              className="profile-description"
              dangerouslySetInnerHTML={{ __html: t('portfolio.profile_desc') }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('portfolio.skills_title')}</h2>
          </motion.div>

          <div className="skills-grid">
            {Object.entries(SKILLS_CONFIG).map(([key, category], index) => (
              <motion.div
                key={key}
                className="skill-category"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="category-header">
                  <Icon name={category.icon} size={28} className="category-icon" />
                  <h3>{t(`portfolio.skills.${key}`)}</h3>
                </div>

                <div className="skills-list">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (i * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployments & Projects Section */}
      <section id="deployments" className="deployments-section" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '60px', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('portfolio.deployments_title')}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              {t('portfolio.deployments_desc')}
            </p>
          </motion.div>

          <div className="projects-grid">
            {PROJECTS_CONFIG.map((project, index) => {
              const pKey = `portfolio.projects_list.${project.key}`;
              const desktopImages = project.images.desktop.map(img => ({
                ...img,
                caption: img.caption ? t(`${pKey}.images.${img.caption}`) : ""
              }));
              const mobileImages = project.images.mobile.map(img => ({
                ...img,
                caption: img.caption ? t(`${pKey}.images.${img.caption}`) : "" 
              }));

              return (
              <motion.article
                key={project.id}
                className="project"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ marginBottom: '80px', background: 'var(--bg-primary)', borderRadius: '24px', overflow: 'hidden', padding: '40px' }}
              >
                {/* Project Header */}
                <div className="project__header">
                  <div className="project__header-left">
                    <motion.div 
                      className="project__logo"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={project.logo} alt={`Logo ${project.key}`} />
                    </motion.div>

                    <div className="project__info">
                      <div className="project__meta">
                        <span className="year">{project.year}</span>
                        <span className="separator">•</span>
                        <span className="client">{t(`${pKey}.client`)}</span>
                      </div>
                      <h2 className="project__title">{t(`${pKey}.tagline`)}</h2>
                    </div>
                  </div>

                  <div className="project__links">
                    {/* Bouton Visiter (affiché seulement si link existe) */}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link-btn"
                      >
                        <span>{t('portfolio.project.visit')}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </a>
                    )}
                    
                    {/* Bouton Facebook (affiché seulement si linkFacebook existe) */}
                    {project.linkFacebook && (
                      <a 
                        href={project.linkFacebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link-btn project__link-btn--facebook"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>{t('portfolio.project.facebook')}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project__content">
                  <p className="project__description">{t(`${pKey}.description`)}</p>
                  
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
                        <div className="stat__label">{t(`${pKey}.stats.${stat.key}`)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="project__features">
                  <h3 className="section-title">
                    <Icon name="sparkles" size={24} />
                    {t('portfolio.project.features')}
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
                        <Icon name={feature.icon} size={32} className="feature-icon" />
                        <h4>{t(`${pKey}.features.${feature.key}.title`)}</h4>
                        <p>{t(`${pKey}.features.${feature.key}.desc`)}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Images Gallery */}
                {(project.images.desktop.length > 0 || project.images.mobile.length > 0) && (
                  <div className="project__gallery" style={{ marginTop: '40px' }}>
                    <h3 className="section-title">
                      <Icon name="code" size={24} />
                       {t('portfolio.project.overview')}
                    </h3>

                    {/* Desktop Screenshots */}
                    {desktopImages.length > 0 && (
                      <div className="gallery-section">
                        <h4 className="gallery-section-title">💻 {t('portfolio.project.desktop_version')}</h4>
                        <ImageCarousel images={desktopImages} type="desktop" />
                      </div>
                    )}

                    {/* Mobile Screenshots */}
                    {mobileImages.length > 0 && (
                      <div className="gallery-section">
                        <h4 className="gallery-section-title">📱 {t('portfolio.project.mobile_version')}</h4>
                        <ImageCarousel images={mobileImages} type="mobile" />
                      </div>
                    )}
                  </div>
                )}
              </motion.article>
            )})}
          </div>
        </div>
      </section>

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
            <Icon name="lightning" size={56} className="cta-icon" />
          </motion.div>
          <h2>{t('portfolio.cta_title')}</h2>
          <p>{t('portfolio.cta_text')}</p>
          <motion.a
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('portfolio.cta_btn')}
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default About;