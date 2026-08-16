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

const CATEGORIES = [
  {
    id: 'production',
    icon: 'rocket',
    projects: [
      { key: 'taniko', year: '2025 – aujourd’hui', client: 'Taniko Madagascar', technologies: ['Laravel', 'Sanctum OAuth', 'Next.js', 'FastAPI', 'TypeScript', 'WordPress', 'Docker', 'Oracle Cloud'], stats: [{ key: 'services', value: '5+' }, { key: 'sites', value: '10+' }, { key: 'status', value: 'Prod' }] },
      { key: 'express_sale', year: '2024 – 2025', client: 'Boutique prêt-à-porter', technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Python'], stats: [{ key: 'screens', value: '13+' }, { key: 'modules', value: '6' }, { key: 'transactions', value: '∞' }] },
      { key: 'soaharilandy', year: '2024', client: 'Soie artisanale malgache', technologies: ['React', 'React Native', 'QR Code', 'PWA'], stats: [{ key: 'modules', value: '6' }, { key: 'qrcode', value: 'QR' }, { key: 'certified', value: '100%' }] },
      { key: 'edlr', year: '2026', client: 'EDLR Madagascar', technologies: ['Laravel', 'Filament', 'PostgreSQL', 'SEO'], stats: [{ key: 'type', value: 'Web' }, { key: 'stack', value: 'Laravel' }, { key: 'status', value: 'Live' }] },
      { key: 'rag', year: '2026', client: 'Projet personnel', technologies: ['Python', 'RAG', 'FastAPI', 'LangChain', 'PostgreSQL'], stats: [{ key: 'type', value: 'RAG' }, { key: 'lang', value: 'Python' }, { key: 'status', value: 'Prototype' }] },
    ],
  },
  {
    id: 'personal',
    icon: 'sparkles',
    projects: [
      { key: 'network', year: '2026', client: 'Projet personnel', technologies: ['.NET 8', 'Next.js', 'PostgreSQL', 'TypeScript', 'REST API'], stats: [{ key: 'backend', value: '.NET 8' }, { key: 'frontend', value: 'Next.js' }, { key: 'status', value: 'Dev' }] },
      { key: 'vahy', year: '2026', client: 'Projet personnel', technologies: ['React 19', 'React Native', 'TypeScript', 'Vite', 'Figma'], stats: [{ key: 'platforms', value: '3' }, { key: 'frontend', value: 'SPA' }, { key: 'mobile', value: 'RN' }] },
      { key: 'manidina', year: '2025 – en cours', client: 'Projet personnel', technologies: ['React', 'Java', 'Javalin', 'PostgreSQL', 'Python', 'Pandas', 'Leaflet', 'Algorithms'], stats: [{ key: 'airports', value: '89 000+' }, { key: 'routes', value: '67 000+' }, { key: 'countries', value: '195' }] },
      { key: 'trashlink', year: '2025 – en étude', client: 'Projet innovation', technologies: ['YOLO', 'RAG AI', 'Pathfinding', 'React Native'], stats: [{ key: 'precision', value: '95%' }, { key: 'time', value: '-40%' }, { key: 'classes', value: '12+' }] },
      { key: 'gigapayant', year: '2025', client: 'Projet réseau collaboratif', technologies: ['Laravel', 'PHP', 'MySQL', 'Network Management'], stats: [{ key: 'codes', value: '∞' }, { key: 'security', value: '14ch' }, { key: 'granularity', value: 'Mo' }] },
      { key: 'auth3', year: '2026', client: 'Projet sécurité', technologies: ['C++', 'OpenCV', 'C#', 'Biométrie'], stats: [{ key: 'factors', value: '3' }, { key: 'type', value: 'Bio' }, { key: 'status', value: 'Dev' }] },
      { key: 'dqr', year: '2026', client: 'Projet IoT', technologies: ['C#', 'C++', 'QR', 'Embarqué'], stats: [{ key: 'type', value: 'QR' }, { key: 'backend', value: 'C#' }, { key: 'firmware', value: 'C++' }] },
      { key: 'ainga', year: '2025 – 2026', client: 'Projet personnel', technologies: ['TypeScript', 'React', 'C#', 'Python'], stats: [{ key: 'apps', value: '3+' }, { key: 'type', value: 'Suite' }, { key: 'status', value: 'MVP+' }] },
    ],
  },
  {
    id: 'academic',
    icon: 'plane',
    projects: [
      { key: 'soutenance', year: '2026', client: 'Projet académique L3', technologies: ['C#/.NET', 'Kotlin', 'QML', 'Web'], stats: [{ key: 'platforms', value: '4' }, { key: 'backend', value: 'C#' }, { key: 'status', value: 'Terminé' }] },
      { key: 'exams', year: '2026', client: 'Projet académique L3', technologies: ['Java', 'Maven', 'React Native', 'Web'], stats: [{ key: 'backend', value: 'Java' }, { key: 'frontend', value: 'Web' }, { key: 'mobile', value: 'RN' }] },
      { key: 'salles', year: '2026', client: 'Projet académique L3', technologies: ['Laravel', 'Blade', 'PostgreSQL'], stats: [{ key: 'type', value: 'Web' }, { key: 'stack', value: 'Laravel' }, { key: 'status', value: 'Terminé' }] },
      { key: 'maintsovola', year: '2025 – en cours', client: 'Maintsovola', technologies: ['React', 'React Native', 'Supabase', 'Multi-plateforme'], stats: [{ key: 'farmers', value: '500+' }, { key: 'projects', value: '75' }, { key: 'communities', value: '25' }] },
      { key: 'varotra', year: '2025', client: 'Projet académique L2', technologies: ['YOLO', 'OpenCV', 'Python', 'PHP', 'MySQL', 'ESP32', 'Raspberry Pi', 'Asterisk', 'Robotique'], stats: [{ key: 'precision', value: '97%' }, { key: 'time', value: 'Temps réel' }, { key: 'recognition', value: 'Ar' }] },
      { key: 'scraping', year: '2025', client: 'Projet pédagogique', technologies: ['n8n', 'Python', 'YOLO', 'Google Colab', 'APIs'], stats: [{ key: 'sources', value: 'Multiple' }, { key: 'filtering', value: 'YOLO' }, { key: 'automation', value: 'n8n' }] },
      { key: 'atc', year: '2024', client: 'Projet académique L1', technologies: ['C', 'SDL2', 'Algorithmes', 'Temps réel'], stats: [{ key: 'parkings', value: '25+' }, { key: 'emergency', value: '15' }, { key: 'response', value: '<100ms' }] },
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--color-text-secondary)', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Icon name="map" size={16} /> {t('portfolio.location')}
            </span>
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

        {/* Projects by category */}
        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('portfolio.deployments_title')}</h2>
          <p style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem' }}>{t('portfolio.deployments_desc')}</p>

          {CATEGORIES.map((cat, ci) => (
            <div key={cat.id} style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Icon name={cat.icon} size={26} />
                <h3 style={{ fontSize: '1.6rem' }}>{t(`portfolio.categories.${cat.id}`)}</h3>
                <span style={{ width: 1, height: 28, background: 'var(--color-border)' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{cat.projects.length} {cat.projects.length > 1 ? t('portfolio.categories.projects') : t('portfolio.categories.project')}</span>
              </div>

              {cat.projects.map((project, index) => {
                const pKey = `portfolio.projects_list.${project.key}`;
                return (
                  <motion.article key={project.key} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.05, 0.3) }}
                    style={{ marginBottom: '1.75rem', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{project.year}</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>• {project.client}</span>
                        </div>
                        <h4 style={{ fontSize: '1.3rem' }}>{t(`${pKey}.tagline`)}</h4>
                      </div>
                    </div>
                    <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>{t(`${pKey}.description`)}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {project.technologies.map(tech => (
                        <span key={tech} style={{ padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', background: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}>{tech}</span>
                      ))}
                    </div>

                    {project.stats && (
                      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                        {project.stats.map(s => (
                          <div key={s.key}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>{s.value}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{t(`${pKey}.stats.${s.key}`)}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <Icon name="sparkles" size={18} />
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{t('portfolio.project.features')}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
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
            </div>
          ))}
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