import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

/**
 * Footer Component
 * Pied de page minimaliste style Apple
 * - Informations de copyright
 * - Liens légaux (optionnels)
 * - Design épuré
 */
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__brand">
            <img src="/logo.png" alt="Manidina" className="footer__logo" />
            <span className="footer__name">Manidina</span>
          </div>
          
          <div className="footer__info">
            <p className="footer__text">
              {t('footer.created_by')}{' '}
              <a href="/portfolio" className="footer__link">
                Christian Herimanantsoa
              </a>
            </p>
            <p className="footer__copyright">
              © {currentYear} Manidina.me - {t('footer.rights')}
            </p>
          </div>
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__bottom">
          <nav className="footer__nav" aria-label="Navigation secondaire">
            {/* <a href="/mentions-legales" className="footer__nav-link">{t('footer.legal')}</a>
            <span className="footer__separator">•</span>
            <a href="/confidentialite" className="footer__nav-link">{t('footer.privacy')}</a>
            <span className="footer__separator">•</span> */}
            <a href="/contact" className="footer__nav-link">{t('footer.contact')}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;