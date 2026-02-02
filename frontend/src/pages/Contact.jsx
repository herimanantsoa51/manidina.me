import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import
import Icon from '../components/Icon';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation(); // Hook
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const userMessage = formData.get('message');

    // Données pour le template admin (email que VOUS recevez)
    const adminData = {
      name: userName,           // {{name}} dans le template admin
      user_email: userEmail,    // {{user_email}} dans le template admin
      message: userMessage,     // {{message}} dans le template admin
      time: new Date().toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    // Données pour le template auto-reply (email que L'UTILISATEUR reçoit)
    const autoReplyData = {
      from_name: userName,      // {{from_name}} dans le template auto-reply
      to_email: userEmail,      // Email de destination
      title: userMessage,       // {{title}} - le message résumé
      message: userMessage      // {{message}} - le message complet
    };

    const SERVICE_ID = 'service_crkl0lk';
    const TEMPLATE_ADMIN = 'template_received';
    const TEMPLATE_AUTO_REPLY = 'template_reply';
    const PUBLIC_KEY = 'ALDptbdckCv1GcLKe';

    try {
      // 1. Mail vers VOUS (admin)
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ADMIN,
        adminData,
        PUBLIC_KEY
      );

      // 2. Auto-reply vers le visiteur
      // IMPORTANT: Désactivez l'auto-reply dans les paramètres EmailJS
      // pour éviter le double envoi !
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTO_REPLY,
        {
          ...autoReplyData,
          to_email: userEmail  // EmailJS utilise ce champ pour envoyer
        },
        PUBLIC_KEY
      );

      console.log("Emails sent successfully");
      setStatus('success');
      form.current.reset();
      
      // Reset status after a longer delay to let user read the message
      setTimeout(() => setStatus(''), 8000);
      
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          {/* Formulaire */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">{t('contact.form.name_label')}</label>
                <input type="text" name="user_name" id="user_name" required placeholder={t('contact.form.name_placeholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">{t('contact.form.email_label')}</label>
                <input type="email" name="user_email" id="user_email" required placeholder={t('contact.form.email_placeholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message_label')}</label>
                <textarea name="message" id="message" required placeholder={t('contact.form.message_placeholder')} rows="5"></textarea>
              </div>

              <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                {status !== 'sending' && <Icon name="rocket" size={20} />}
              </button>

              {status === 'success' && (
                <p className="status-msg success">{t('contact.form.success')}</p>
              )}
              {status === 'error' && (
                <p className="status-msg error">{t('contact.form.error')}</p>
              )}
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="info-card">
              <h3>{t('contact.info.title')}</h3>
              <p>{t('contact.info.desc')}</p>
              
              <div className="info-item">
                <div className="icon-box">
                  <Icon name="mail" size={24} />
                </div>
                <div>
                  <span className="label">{t('contact.info.email_manidina')}</span>
                  <a href="mailto:contact@manidina.me" className="value">contact@manidina.me</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Icon name="mail" size={24} />
                </div>
                <div>
                  <span className="label">{t('contact.info.email_personal')}</span>
                  <a href="mailto:christian@manidina.me" className="value">christian@manidina.me</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  {/* Icone Facebook */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <span className="label">{t('contact.info.facebook')}</span>
                  <a href="https://facebook.com/manidina.plus.plus" target="_blank" rel="noopener noreferrer" className="value">
                    Manidina
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Icon name="social" size={24} />
                </div>
                <div>
                  <span className="label">{t('contact.info.whatsapp')}</span>
                  <a href="https://wa.me/261340425089" target="_blank" rel="noopener noreferrer" className="value">
                    +261 34 04 250 89
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Icon name="map" size={24} />
                </div>
                <div>
                  <span className="label">{t('contact.info.location')}</span>
                  <span className="value">Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
