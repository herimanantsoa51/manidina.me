'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import '@/components/i18n';

const SKILLS_CONFIG = {
  languages: { icon: 'code', items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C#', 'Java', 'C++', 'SQL', 'Bash'] },
  frameworks: { icon: 'sparkles', items: ['React', 'Next.js', 'React Native', 'Laravel', '.NET 8', 'FastAPI', 'Tailwind CSS', 'Javalin'] },
  automation: { icon: 'rocket', items: ['n8n', 'Make', 'Agents IA', 'Pipedrive', 'RAG', 'GitHub Actions', 'Docker', 'Dokku', 'Google Cloud'] },
  databases: { icon: 'database', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Neo4j', 'Redis', 'Supabase'] },
  ai: { icon: 'brain', items: ['YOLO', 'OpenCV', 'PyTorch', 'Scikit-learn', 'LangChain', 'LlamaIndex', 'Whisper'] },
};

const PROJECTS = [
  {
    id: 1,
    key: 'taniko',
    year: '2025 – Aujourd’hui',
    client: 'Taniko Madagascar',
    technologies: ['Laravel', 'Sanctum OAuth', 'Next.js', 'FastAPI', 'TypeScript', 'WordPress', 'Docker', 'Oracle Cloud'],
    stats: [
      { key: 'services', value: '5+' },
      { key: 'sites', value: '10+' },
      { key: 'status', value: 'Prod' },
    ],
  },
  {
    id: 2,
    key: 'network',
    year: '2026',
    client: 'Projet Personnel',
    technologies: ['.NET 8', 'Next.js', 'PostgreSQL', 'TypeScript', 'REST API'],
    stats: [
      { key: 'backend', value: '.NET 8' },
      { key: 'frontend', value: 'Next.js' },
      { key: 'status', value: 'Dev' },
    ],
  },
  {
    id: 3,
    key: 'vahy',
    year: '2026',
    client: 'Projet Personnel',
    technologies: ['React 19', 'React Native', 'TypeScript', 'Vite', 'Figma'],
    stats: [
      { key: 'platforms', value: '3' },
      { key: 'frontend', value: 'SPA' },
      { key: 'mobile', value: 'RN' },
    ],
  },
  {
    id: 4,
    key: 'rag',
    year: '2026',
    client: 'Projet Personnel',
    technologies: ['Python', 'RAG', 'FastAPI', 'LangChain', 'PostgreSQL'],
    stats: [
      { key: 'type', value: 'RAG' },
      { key: 'lang', value: 'Python' },
      { key: 'status', value: 'Prototype' },
    ],
  },
  {
    id: 5,
    key: 'edlr',
    year: '2026',
    client: 'EDLR Madagascar',
    technologies: ['Laravel', 'Filament', 'PostgreSQL', 'HTML/CSS', 'SEO'],
    stats: [
      { key: 'type', value: 'Web' },
      { key: 'stack', value: 'Laravel' },
      { key: 'status', value: 'Live' },
    ],
  },
  {
    id: 6,
    key: 'maintsovola',
    year: '2025 - ',
    client: 'Maintsovola',
    technologies: ['React', 'React Native', 'Supabase', 'Multi-plateforme'],
    stats: [
      { key: 'farmers', value: '500+' },
      { key: 'projects', value: '75' },
      { key: 'communities', value: '25' },
    ],
  },
  {
    id: 7,
    key: 'trashlink',
    year: '2025 (En étude)',
    client: 'Projet Innovation',
    technologies: ['YOLO', 'RAG AI', 'Pathfinding', 'React Native'],
    stats: [
      { key: 'precision', value: '95%' },
      { key: 'time', value: '-40%' },
      { key: 'classes', value: '12+' },
    ],
  },
  {
    id: 8,
    key: 'varotra',
    year: '2025',
    client: 'Projet Académique L2',
    technologies: ['YOLO', 'OpenCV', 'Python', 'PHP', 'MySQL', 'ESP32', 'Raspberry Pi', 'Asterisk', 'Robotique'],
    stats: [
      { key: 'precision', value: '97%' },
      { key: 'time', value: 'Temps réel' },
      { key: 'recognition', value: 'Ar' },
    ],
  },
  {
    id: 9,
    key: 'manidina',
    year: '2025 - En cours',
    client: 'Projet Personnel',
    technologies: ['React', 'Java', 'Javalin', 'PostgreSQL', 'Python', 'Pandas', 'Leaflet', 'Algorithmes'],
    stats: [
      { key: 'airports', value: '89 000+' },
      { key: 'routes', value: '67 000+' },
      { key: 'countries', value: '195' },
    ],
  },
  {
    id: 10,
    key: 'gigapayant',
    year: '2025',
    client: 'Projet Réseau Collaboratif',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Network Management'],
    stats: [
      { key: 'codes', value: '∞' },
      { key: 'security', value: '14ch' },
      { key: 'granularity', value: 'Mo' },
    ],
  },
  {
    id: 11,
    key: 'scraping',
    year: '2025',
    client: 'Projet Pédagogique',
    technologies: ['n8n', 'Python', 'YOLO', 'Google Colab', 'APIs'],
    stats: [
      { key: 'sources', value: 'Multiple' },
      { key: 'filtering', value: 'YOLO' },
      { key: 'automation', value: 'n8n' },
    ],
  },
  {
    id: 12,
    key: 'atc',
    year: '2024',
    client: 'Projet Académique L1',
    technologies: ['C', 'SDL2', 'Algorithmes', 'Temps réel'],
    stats: [
      { key: 'parkings', value: '25+' },
      { key: 'emergency', value: '15' },
      { key: 'response', value: '<100ms' },
    ],
  },
];

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container">
        {/* Profile */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid var(--color-primary)', boxShadow: '0 0 40px rgba(127,255,0,0.15)' }}>
            <img src="/images/profile.jpeg" alt="Christian Herimanantsoa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 style={{ marginBottom: '0.5rem' }}>Christian HERIMANANTSOA</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--color-text-secondary)' }}>
            <Icon name="map" size={16} /> <span>{t('portfolio.location')}</span>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <a href="https://github.com/herimanantsoa51" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-secondary)' }}>
              <Icon name="github" size={16} /> GitHub
            </a>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: t('portfolio.profile_desc') }} />
        </motion.section>

        {/* Skills */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('portfolio.skills_title')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {Object.entries(SKILLS_CONFIG).map(([key, cat]) => (
              <div key={key} style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Icon name={cat.icon} size={24} />
                  <h3 style={{ fontSize: '1.1rem' }}>{t(`portfolio.skills.${key}`)}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.items.map(skill => (
                    <span key={skill} style={{ padding: '0.25rem 0.75rem', borderRadius: 20, fontSize: '0.85rem', background: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('portfolio.deployments_title')}</h2>
          <p style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem' }}>{t('portfolio.deployments_desc')}</p>

          {PROJECTS.map((project, index) => {
            const pKey = `portfolio.projects_list.${project.key}`;
            return (
              <motion.article key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.05, 0.4) }}
                style={{ marginBottom: '2.5rem', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{project.year}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>• {project.client}</span>
                    </div>
                    <h3 style={{ fontSize: '1.4rem' }}>{t(`${pKey}.tagline`)}</h3>
                  </div>
                </div>
                <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>{t(`${pKey}.description`)}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map(tech => (
                    <span key={tech} style={{ padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', background: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}>{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  {project.stats.map(s => (
                    <div key={s.key}>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)' }}>{s.value}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{t(`${pKey}.stats.${s.key}`)}</div>
                    </div>
                  ))}
                </div>

                <h4 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon name="sparkles" size={20} /> {t('portfolio.project.features')}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {Object.entries(t(`${pKey}.features`, { returnObjects: true }) || {}).map(([fk, fv]) => (
                    <div key={fk} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                      <h5 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{fv.title}</h5>
                      <p style={{ fontSize: '0.85rem' }}>{fv.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
          <h2>{t('portfolio.cta_title')}</h2>
          <p style={{ margin: '1rem auto', maxWidth: 500 }}>{t('portfolio.cta_text')}</p>
          <a href="/contact" className="button button--primary">{t('portfolio.cta_btn')}</a>
        </div>
      </div>
    </div>
  );
}