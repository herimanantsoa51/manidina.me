import React from 'react';
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
      <Hero />
      <Services />
      <About />
      <ProjectsPreview />
    </>
  );
};

export default Home;