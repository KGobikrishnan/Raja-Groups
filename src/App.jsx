import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RSE from './components/RSE';
import RMA from './components/RMA';
import MEW from './components/MEW';
import AboutContact from './components/AboutContact';
import CorporateFooter from './components/CorporateFooter';
import MobileBottomNav from './components/MobileBottomNav';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      // Clean up hash to get page id
      const hash = window.location.hash.replace('#', '') || 'home';
      
      // Page routing mapping
      if (['home', 'solar', 'motors', 'engineering', 'about'].includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === 'rse') {
        setCurrentPage('solar');
      } else if (hash === 'rma') {
        setCurrentPage('motors');
      } else if (hash === 'mew') {
        setCurrentPage('engineering');
      } else {
        setCurrentPage('home');
      }
      
      // Instant scroll-to-top on page change
      window.scrollTo({ top: 0, behavior: 'instant' });
      const mainContent = document.querySelector('.page-content-container');
      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    // Attach listener
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial parse
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId) => {
    window.location.hash = pageId;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero navigateToPage={navigateToPage} />;
      case 'solar':
        return <RSE />;
      case 'motors':
        return <RMA />;
      case 'engineering':
        return <MEW />;
      case 'about':
        return <AboutContact />;
      default:
        return <Hero navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} navigateToPage={navigateToPage} />
      
      <main className="page-content-container">
        {renderPage()}
        <CorporateFooter setCurrentPage={navigateToPage} />
      </main>

      <MobileBottomNav currentPage={currentPage} navigateToPage={navigateToPage} />
    </div>
  );
}

export default App;
