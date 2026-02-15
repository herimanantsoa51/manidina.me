import { useEffect } from 'react';

const SITE_URL = 'https://manidina.me';

/**
 * Composant SEO - Gère les balises <title> et <meta> dynamiquement
 * Compatible React 19 (pas besoin de react-helmet-async)
 */
const SEO = ({ title, description, path = '/', image = '/logo.png' }) => {
  const fullUrl = `${SITE_URL}${path}`;
  const fullImage = `${SITE_URL}${image}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper pour set/update une meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper pour set/update un link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Meta description
    setMeta('name', 'description', description);

    // Canonical
    setLink('canonical', fullUrl);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:image', fullImage);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', 'fr_FR');
    setMeta('property', 'og:site_name', 'Manidina');

    // Twitter
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImage);
  }, [title, description, fullUrl, fullImage]);

  return null;
};

export default SEO;
