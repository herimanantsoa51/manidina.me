'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../components/i18n';

const FEATURED = [
  {
    key: 'automation',
    image: '/images/n8n/n8n1.png',
    tech: ['n8n', 'Make', 'Agents IA', 'APIs'],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a2f1a 50%, #0a0a0a 100%)',
    accent: '#7FFF00',
  },
  {
    key: 'appweb',
    image: '/images/express_sale/express_sale1.png',
    tech: ['React', 'Laravel', 'PostgreSQL', 'Node.js'],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2f 50%, #0a0a0a 100%)',
    accent: '#60a5fa',
  },
  {
    key: 'aviation',
    image: '/images/manidina_aviation/manidina_aviation1.png',
    tech: ['React', 'Java', 'PostgreSQL', 'Pandas'],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #2f1a2f 50%, #0a0a0a 100%)',
    accent: '#c084fc',
  },
  {
    key: 'ia',
    image: '/images/varotra_intelliz/varotra_intelliz.png',
    tech: ['YOLO', 'OpenCV', 'Python', 'RAG'],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a2f2f 50%, #0a0a0a 100%)',
    accent: '#22d3ee',
  },
];

export default function ProjectsPreview() {
  const { t } = useTranslation();

  return (
    <section id="projets" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{t('projects_preview.title')}</h2>
          <p style={{ maxWidth: 640, margin: '0 auto' }}>{t('projects_preview.description')}</p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {FEATURED.map((p, i) => (
            <motion.a
              key={p.key}
              href="/portfolio"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                display: 'block',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: 'var(--color-card-bg)',
                textDecoration: 'none',
                color: 'var(--color-text)',
                transition: 'transform var(--transition-base), border-color var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = p.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#111' }}>
                <img
                  src={p.image}
                  alt={t(`projects_preview.featured.${p.key}.name`)}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                  {t(`projects_preview.featured.${p.key}.name`)}
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {t(`projects_preview.featured.${p.key}.desc`)}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 100,
                        fontSize: '0.75rem',
                        background: 'var(--color-background-alt)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <a href="/portfolio" className="button button--primary">
            {t('projects_preview.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}