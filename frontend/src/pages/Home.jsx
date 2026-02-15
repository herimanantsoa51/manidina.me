import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ProjectsPreview from '../components/ProjectsPreview';

/**
 * Home Page (Index)
 * Page d'accueil principale du site Manidina
 * Header et Footer sont dans le Layout parent
 */
const Home = () => {
  return (
    <>
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