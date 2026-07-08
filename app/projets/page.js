'use client';

import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import '@/components/i18n';

const PROJECTS_DATA = [
  {
    key: 'express_sale',
    featured: true,
    status: 'live',
    statusLabel: { fr: 'En production', en: 'Live' },
    year: '2024–2025',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    stats: [
      { value: '13+', label: { fr: 'Écrans', en: 'Screens' } },
      { value: '6', label: { fr: 'Modules', en: 'Modules' } },
      { value: '∞', label: { fr: 'Transactions', en: 'Transactions' } },
    ],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a2f1a 50%, #0a0a0a 100%)',
    accentColor: '#7FFF00',
    image: '/images/express_sale/express_sale1.png',
    images: [
      '/images/express_sale/express_sale1.png',
      '/images/express_sale/express_sale2.png',
      '/images/express_sale/express_sale3.png',
      '/images/express_sale/express_sale4.png',
      '/images/express_sale/express_sale5.png',
      '/images/express_sale/express_sale6.png',
      '/images/express_sale/express_sale7.png',
      '/images/express_sale/express_sale8.png',
      '/images/express_sale/express_sale9.png',
      '/images/express_sale/express_sale10.png',
      '/images/express_sale/express_sale11.png',
      '/images/express_sale/express_sale12.png',
    ],
  },
  {
    key: 'soaharilandy',
    featured: false,
    status: 'live',
    statusLabel: { fr: 'En production', en: 'Live' },
    year: '2024',
    tech: ['React', 'Node.js', 'MongoDB', 'QR Code', 'PWA'],
    stats: [
      { value: '6', label: { fr: 'Modules', en: 'Modules' } },
      { value: 'QR', label: { fr: 'Traçabilité', en: 'Traceability' } },
      { value: '100%', label: { fr: 'Certifié', en: 'Certified' } },
    ],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2f 50%, #0a0a0a 100%)',
    accentColor: '#60a5fa',
    image: '/images/soaharilandy/soaharilandy.jpg',
    images: [
      '/images/soaharilandy/soaharilandy.jpg',
      '/images/soaharilandy/soa1.jpg',
      '/images/soaharilandy/soa2.jpg',
      '/images/soaharilandy/soa3.jpg',
    ],
  },
];

function StatusBadge({ status, label }) {
  const colors = {
    live: { bg: 'rgba(34, 197, 94, 0.15)', text: '#22c55e', dot: '#22c55e' },
    beta: { bg: 'rgba(251, 191, 36, 0.15)', text: '#fbbf24', dot: '#fbbf24' },
    dev: { bg: 'rgba(96, 165, 250, 0.15)', text: '#60a5fa', dot: '#60a5fa' },
  };
  const c = colors[status] || colors.dev;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '6px 14px', borderRadius: '100px',
      background: c.bg, color: c.text,
      fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em',
      textTransform: 'uppercase',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: c.dot, boxShadow: `0 0 8px ${c.dot}`,
      }} />
      {label}
    </span>
  );
}

function TechPill({ name }) {
  return (
    <span style={{
      padding: '5px 12px', borderRadius: '100px',
      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
      fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)',
      whiteSpace: 'nowrap',
    }}>
      {name}
    </span>
  );
}

function ImageCarousel({ images, accentColor }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        borderRadius: 'var(--radius-md)', overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#111',
        aspectRatio: '16/10',
      }}>
        <motion.img
          key={current}
          src={images[current]}
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      {images.length > 1 && (
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '6px',
          marginTop: '12px',
        }}>
          {images.slice(0, 8).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8, height: 8,
                borderRadius: 100, border: 'none', cursor: 'pointer',
                background: i === current ? accentColor : 'rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
          {images.length > 8 && (
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', alignSelf: 'center' }}>
              +{images.length - 8}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, t, index }) {
  const p = `projects_page.projects.${project.key}`;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        background: project.gradient,
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        marginBottom: '2rem',
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute', top: '-50%', left: '-50%',
        width: '200%', height: '200%',
        background: `radial-gradient(circle at 30% 30%, ${project.accentColor}08 0%, transparent 50%)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <StatusBadge status={project.status} label={project.statusLabel[t('lang') || 'fr']} />
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
              {project.year}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {project.tech.map(tech => <TechPill key={tech} name={tech} />)}
          </div>
        </div>

        {/* Title + Description */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.1,
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-heading)',
          }}>
            {t(`${p}.name`)}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: project.accentColor,
            fontWeight: 500, marginBottom: '1rem',
          }}>
            {t(`${p}.tagline`)}
          </p>
          <p style={{
            fontSize: '1rem', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '700px',
          }}>
            {t(`${p}.description`)}
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '2rem', flexWrap: 'wrap',
          marginBottom: '2rem',
          padding: '1.5rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {project.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', minWidth: '80px' }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 700, color: project.accentColor,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)',
                marginTop: '4px', textTransform: 'uppercase',
                letterSpacing: '0.05em', fontWeight: 500,
              }}>
                {stat.label[t('lang') || 'fr']}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '0.85rem', textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)',
            marginBottom: '1rem', fontWeight: 600,
          }}>
            {t('projects_page.features_title')}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {Object.entries(t(`${p}.features`, { returnObjects: true }) || {}).map(([fk, fv]) => (
              <motion.div
                key={fk}
                whileHover={{ scale: 1.02, borderColor: `${project.accentColor}40` }}
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <h4 style={{
                  fontSize: '0.95rem', fontWeight: 600,
                  marginBottom: '0.4rem', color: 'rgba(255,255,255,0.9)',
                }}>
                  {fv.title}
                </h4>
                <p style={{
                  fontSize: '0.85rem', lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  {fv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div>
          <h3 style={{
            fontSize: '0.85rem', textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)',
            marginBottom: '1rem', fontWeight: 600,
          }}>
            {t('projects_page.screenshots_title')}
          </h3>
          <ImageCarousel images={project.images} accentColor={project.accentColor} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: 'clamp(6rem, 15vh, 10rem) 0 clamp(4rem, 10vh, 6rem)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                borderRadius: '100px',
                background: 'rgba(127,255,0,0.1)',
                border: '1px solid rgba(127,255,0,0.2)',
                color: '#7FFF00',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              {lang === 'fr' ? 'Portfolio' : 'Portfolio'}
            </motion.span>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)',
            }}>
              {t('projects_page.hero.title_prefix')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7FFF00, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {t('projects_page.hero.title_highlight')}
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              {t('projects_page.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.key}
            project={project}
            t={t}
            index={index}
          />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            padding: 'clamp(3rem, 6vw, 5rem)',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(127,255,0,0.05) 0%, rgba(96,165,250,0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            marginTop: '2rem',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)',
          }}>
            {t('projects_page.cta.title')}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 500,
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
          }}>
            {t('projects_page.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="button button--primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '100px',
              background: '#7FFF00',
              color: '#000',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {t('projects_page.cta.button')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
