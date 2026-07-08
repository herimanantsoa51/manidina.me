'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Icon from '@/components/Icon';
import '@/components/i18n';

const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '';

export default function ContactPage() {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
      time: new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' }),
      source: 'manidina.me'
    };

    if (!N8N_WEBHOOK_URL) {
      console.warn('⚠️ Webhook n8n non configuré');
      await new Promise(r => setTimeout(r, 1000));
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 8000);
      return;
    }

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 8000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ marginBottom: '0.5rem' }}>{t('contact.title')}</h1>
          <p style={{ marginBottom: '2rem' }}>{t('contact.subtitle')}</p>
        </motion.div>

        <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="user_name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('contact.form.name_label')}</label>
            <input type="text" name="user_name" id="user_name" required placeholder={t('contact.form.name_placeholder')}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)', color: 'var(--color-text)', fontSize: '1rem' }} />
          </div>

          <div>
            <label htmlFor="user_email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('contact.form.email_label')}</label>
            <input type="email" name="user_email" id="user_email" required placeholder={t('contact.form.email_placeholder')}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)', color: 'var(--color-text)', fontSize: '1rem' }} />
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('contact.form.message_label')}</label>
            <textarea name="message" id="message" required rows={5} placeholder={t('contact.form.message_placeholder')}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-card-bg)', color: 'var(--color-text)', fontSize: '1rem', resize: 'vertical' }} />
          </div>

          <button type="submit" disabled={status === 'sending'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-md)', background: 'var(--color-primary)', color: '#000',
              border: 'none', fontSize: '1rem', fontWeight: 600, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1
            }}>
            {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
            {status !== 'sending' && <Icon name="rocket" size={20} />}
          </button>

          {status === 'success' && <p style={{ color: 'var(--color-primary)', padding: '1rem', background: 'rgba(127,255,0,0.1)', borderRadius: 'var(--radius-sm)' }}>{t('contact.form.success')}</p>}
          {status === 'error' && <p style={{ color: '#ff4444', padding: '1rem', background: 'rgba(255,68,68,0.1)', borderRadius: 'var(--radius-sm)' }}>{t('contact.form.error')}</p>}
        </motion.form>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          <h3>{t('contact.info.title')}</h3>
          <p>{t('contact.info.desc')}</p>
          <div><strong>{t('contact.info.email_manidina')} :</strong> <a href="mailto:contact@manidina.me">contact@manidina.me</a></div>
          <div><strong>{t('contact.info.email_personal')} :</strong> <a href="mailto:christian@manidina.me">christian@manidina.me</a></div>
          <div><strong>{t('contact.info.whatsapp')} :</strong> <a href="https://wa.me/261340425089">+261 34 04 250 89</a></div>
          <div><strong>{t('contact.info.location')} :</strong> Antananarivo, Madagascar</div>
        </div>
      </div>
    </div>
  );
}
