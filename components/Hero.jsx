'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import '../components/i18n';

const SOCIALS = [
  { href: 'https://github.com/herimanantsoa51', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/christian-herimanantsoa', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://www.upwork.com/freelancers/~herimanantsoa51', icon: 'upwork', label: 'Upwork' },
  { href: 'mailto:contact@manidina.me', icon: 'mail', label: 'Email' },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        padding: 'var(--spacing-xxl) 0 var(--spacing-lg)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: 100,
              border: '1px solid rgba(127,255,0,0.3)',
              background: 'rgba(127,255,0,0.08)',
              marginBottom: '1.75rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--color-primary)',
                boxShadow: '0 0 10px var(--color-primary)',
                animation: 'pulse 2s infinite',
              }}
            />
            {t('hero.available')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '1.5rem' }}
          >
            {t('hero.title_main')}{' '}
            <span style={{ color: 'var(--color-primary)' }}>{t('hero.title_accent')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: 640 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            <a href="#projets" className="button button--primary">
              {t('hero.cta_services')}
              <Icon name="arrow-down" size={18} />
            </a>
            <a href="/portfolio" className="button button--secondary">
              {t('hero.cta_projects')}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                title={s.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-card-bg)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text)';
                }}
              >
                <Icon name={s.icon} size={18} />
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}