import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './styles/global.css';

// Code-split des pages pour réduire le bundle initial
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Legal = lazy(() => import('./pages/Legal'));
const Privacy = lazy(() => import('./pages/Privacy'));

// Fallback pour Suspense
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    color: 'var(--color-text-secondary)',
    fontSize: '1.125rem'
  }}>
    <span>Chargement...</span>
  </div>
);

/**
 * App Component
 * Point d'entrée principal de l'application
 * Code-splitting via React.lazy pour chaque page
 */
function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<About />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/confidentialite" element={<Privacy />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
