'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import '../components/i18n';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { id: 1, key: 'education', icon: 'globe' },
    { id: 2, key: 'business', icon: 'database' },
    { id: 3, key: 'automation', icon: 'lightning' },
    { id: 4, key: 'web', icon: 'code' },
    { id: 5, key: 'traceability', icon: 'scan' },
    { id: 6, key: 'ai', icon: 'brain' },
    { id: 7, key: 'data', icon: 'chart' },
    { id: 8, key: 'network', icon: 'rocket' },
  ];

  return (
    <section id="services" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{t('services.title')}</h2>
          <p style={{ maxWidth: 600, margin: '0 auto' }}>{t('services.intro')}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              style={{
                padding: '2rem', borderRadius: 'var(--radius-md)',
                background: 'var(--color-card-bg)', border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                <Icon name={service.icon} size={40} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{t(`services.items.${service.key}.title`)}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{t(`services.items.${service.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
