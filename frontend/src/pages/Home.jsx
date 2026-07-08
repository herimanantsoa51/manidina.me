import React from 'react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ProjectsPreview from '../components/ProjectsPreview';

/**
 * Home Page (Index)
 * Page d'accueil principale du site Manidina
 */
const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://manidina.me/#organization",
    "name": "MANIDINA",
    "url": "https://manidina.me",
    "logo": "https://manidina.me/logo.png",
    "description": "Solutions numériques, IA et automatisation pour entreprises à Madagascar.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "addressCountry": "MG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@manidina.me",
      "contactType": "sales"
    },
    "sameAs": [
      "https://facebook.com/manidina.plus.plus"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://manidina.me/#website",
    "url": "https://manidina.me",
    "name": "Manidina | Solutions Numériques & IA",
    "description": "Manidina transforme les processus manuels de votre entreprise en solutions digitales accessibles et performantes.",
    "publisher": { "@id": "https://manidina.me/#organization" }
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <SEO 
        title="Manidina | Solutions Numériques & IA - Christian HERIMANANTSOA"
        description="Manidina transforme les processus manuels de votre entreprise en solutions digitales accessibles et performantes. Automatisation, IA et développement web à Madagascar."
        path="/"
      />
      <Hero />
      <Services />
      <About />
      <ProjectsPreview />
    </>
  );
};

export default Home;