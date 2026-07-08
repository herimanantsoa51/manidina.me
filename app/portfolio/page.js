'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import '@/components/i18n';

const SKILLS_CONFIG = {
  ai: { icon: 'brain', items: ['Scikit-learn', 'PyTorch', 'OpenCV', 'YOLO'] },
  frameworks: { icon: 'code', items: ['React', 'React Native', 'Tailwind CSS', 'Laravel', 'Javalin'] },
  databases: { icon: 'database', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Neo4j'] },
  languages: { icon: 'sparkles', items: ['C', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'Bash', 'SQL'] },
  automation: { icon: 'rocket', items: ['N8N', 'GitHub', 'GitLab', 'Supabase', 'Tailscale', 'Microsoft Azure', 'Linux', 'SSH'] },
};

const PROJECTS = [
  { id: 1, key: 'maintsovola', year: '2025 - ', technologies: ['React', 'React Native', 'Supabase', 'Multi-plateforme'], stats: ['farmers', 'projects', 'communities'], features: ['management', 'social', 'map', 'finance', 'funding', 'ai'] },
  { id: 2, key: 'trashlink', year: '2025 (En étude)', technologies: ['YOLO', 'RAG AI', 'Pathfinding', 'React Native'], stats: ['precision', 'time', 'classes'], features: ['route', 'cost', 'detection', 'assistant', 'biogas'] },
  { id: 3, key: 'varotra', year: '2025', technologies: ['YOLO', 'OpenCV', 'Python', 'PHP', 'MySQL', 'ESP32', 'Raspberry Pi', 'Asterisk', 'Robotique'], stats: ['precision', 'time', 'recognition'], features: ['vision', 'robot', 'platform', 'offline', 'payment', 'monitoring'] },
  { id: 4, key: 'manidina', year: '2025 - En cours', technologies: ['React', 'Java', 'Javalin', 'PostgreSQL', 'Python', 'Pandas', 'Leaflet', 'Algorithmes'], stats: ['airports', 'routes', 'countries'], features: ['map', 'data', 'analytics', 'pathfinding', 'cleaning', 'roadmap'] },
  { id: 5, key: 'gigapayant', year: '2025', technologies: ['Laravel', 'PHP', 'MySQL', 'Network Management'], stats: ['codes', 'security', 'granularity'], features: ['fairness', 'billing', 'security', 'admin', 'user', 'scale'] },
  { id: 6, key: 'scraping', year: '2025', technologies: ['n8n', 'Python', 'YOLO', 'Google Colab', 'APIs'], stats: ['sources', 'filtering', 'automation'], features: ['n8n', 'scraping', 'python', 'yolo'] },
  { id: 7, key: 'atc', year: '2024', technologies: ['C', 'SDL2', 'Algorithmes', 'Temps réel'], stats: ['parkings', 'emergency', 'response'], features: ['satellite', 'parkings', 'monitoring', 'trajectory', 'scheduling', 'performance'] },
];

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container">
        {/* Profile */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid var(--color-primary)' }}>
            <img src="/images/profile.jpeg" alt="Christian Herimanantsoa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Christian HERIMANANTSOA</h1>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            <Icon name="map" size={16} /> <span>{t('portfolio.location')}</span>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: t('portfolio.profile_desc') }} />
        </motion.section>

        {/* Skills */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('portfolio.skills_title')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {Object.entries(SKILLS_CONFIG).map(([key, cat]) => (
              <div key={key} style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Icon name={cat.icon} size={24} />
                  <h3 style={{ fontSize: '1.1rem' }}>{t(`portfolio.skills.${key}`)}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.items.map(skill => (
                    <span key={skill} style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', background: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('portfolio.deployments_title')}</h2>
          <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3rem' }}>{t('portfolio.deployments_desc')}</p>

          {PROJECTS.map((project, index) => {
            const pKey = `portfolio.projects_list.${project.key}`;
            return (
              <motion.article key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                style={{ marginBottom: '2.5rem', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{project.year}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>• {t(`${pKey}.client`)}</span>
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

                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                  {project.stats.map(s => (
                    <div key={s}>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)' }}>{project.id === 5 && s === 'codes' ? '∞' : project.id === 6 && s === 'sources' ? 'Multiple' : project.id === 4 && s === 'airports' ? '89 000+' : project.id === 4 && s === 'routes' ? '67 000+' : project.id === 4 && s === 'countries' ? '195' : project.id === 7 && s === 'parkings' ? '25+' : project.id === 7 && s === 'emergency' ? '15' : project.id === 7 && s === 'response' ? '<100ms' : project.id === 1 && s === 'farmers' ? '500+' : project.id === 1 && s === 'projects' ? '75' : project.id === 1 && s === 'communities' ? '25' : 'N/A'}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{t(`${pKey}.stats.${s}`)}</div>
                    </div>
                  ))}
                </div>

                <h4 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon name="sparkles" size={20} /> {t('portfolio.project.features')}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {project.features.map(f => (
                    <div key={f} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                      <h5 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{t(`${pKey}.features.${f}.title`)}</h5>
                      <p style={{ fontSize: '0.85rem' }}>{t(`${pKey}.features.${f}.desc`)}</p>
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
