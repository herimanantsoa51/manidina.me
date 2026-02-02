import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/global.css';
import About from './pages/About';

/**
 * App Component
 * Point d'entrée principal de l'application
 * Utilise Layout pour Header/Footer persistants
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes à ajouter plus tard */}
          {/* <Route path="/a-propos" element={<AboutPage />} /> */}
           <Route path="/portfolio" element={<About />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;