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

const EXPERIENCES = [
  { key: 'reference_mg', icon: 'code', technologies: ['Laravel', 'React', 'n8n', 'LangChain'] },
  { key: 'edlr', icon: 'social', technologies: ['Laravel', 'PostgreSQL', 'Automatisation', 'Gestion comptable'] },
];

const CATEGORIES = [
  {
    id: 'selected',
    icon: 'rocket',
    projects: [
      { key: 'edlr', period: { fr: 'Expérience professionnelle', en: 'Professional experience' }, client: 'Enfants De La Rue (ONG)', technologies: ['Laravel', 'PostgreSQL', 'Gestion comptable', 'Automatisation'], stats: [{ key: 'type', value: 'SI' }, { key: 'stack', value: 'Laravel' }, { key: 'status', value: 'Réalisé' }] },
      { key: 'taniko', period: { fr: '2025 – aujourd’hui', en: '2025 – present' }, client: 'Taniko Madagascar', technologies: ['Laravel', 'React / Next.js', 'FastAPI', 'Agents IA', 'Docker'], stats: [{ key: 'services', value: '5+' }, { key: 'sites', value: '10+' }, { key: 'status', value: 'Prod' }] },
      { key: 'express_sale', period: { fr: 'Projet livré', en: 'Delivered project' }, client: 'Système de gestion commerciale', technologies: ['React', 'Node.js', 'PostgreSQL', 'Comptabilité', 'Docker'], stats: [{ key: 'screens', value: '13+' }, { key: 'modules', value: '6' }, { key: 'transactions', value: '∞' }], image: '/images/express_sale/express_sale1.png', gallery: ['/images/express_sale/express_sale2.png', '/images/express_sale/express_sale3.png', '/images/express_sale/express_sale_ticket.jpeg', '/images/express_sale/express_sale5.png'] },
      { key: 'rag', period: { fr: 'Projet IA', en: 'AI project' }, client: 'Projet personnel', technologies: ['Python', 'RAG', 'FastAPI', 'LangChain', 'PostgreSQL'], stats: [{ key: 'type', value: 'RAG' }, { key: 'lang', value: 'Python' }, { key: 'status', value: 'Prototype' }] },
    ],
  },
];

export default function PortfolioPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'fr';

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

        {/* Professional experience */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('portfolio.experience_title')}</h2>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem' }}>{t('portfolio.experience_desc')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {EXPERIENCES.map((experience) => {
              const details = t(`portfolio.experiences.${experience.key}`, { returnObjects: true });
              return (
                <motion.article key={experience.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  style={{ padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Icon name={experience.icon} size={24} />
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{details.organization}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600 }}>{details.role}</p>
                    </div>
                  </div>
                  <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>{details.description}</p>
                  <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem', lineHeight: 1.7 }}>
                    {Array.isArray(details.highlights) && details.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {experience.technologies.map((technology) => (
                      <span key={technology} style={{ padding: '0.25rem 0.7rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', background: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}>{technology}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
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
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{project.period?.[lang]}</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>• {project.client}</span>
                        </div>
                        <h4 style={{ fontSize: '1.3rem' }}>{t(`${pKey}.tagline`)}</h4>
                      </div>
                    </div>
                    <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>{t(`${pKey}.description`)}</p>

                    {project.image && (
                      <div style={{ marginBottom: '1rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                        <img src={project.image} alt={t(`${pKey}.tagline`)} loading="lazy" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      </div>
                    )}
                    {Array.isArray(project.gallery) && project.gallery.length > 0 && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '0.5rem', marginBottom: '1.25rem' }}>
                        {project.gallery.map((src) => (
                          <img key={src} src={src} alt="" loading="lazy" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 8, border: '1px solid var(--color-border)', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        ))}
                      </div>
                    )}

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