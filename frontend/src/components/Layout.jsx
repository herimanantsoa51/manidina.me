import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

/**
 * Layout Component
 * Wrapper qui garde Header et Footer persistants
 * Seul le contenu central (Outlet) change entre les pages
 */
const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;