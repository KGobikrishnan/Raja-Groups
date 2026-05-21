import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, navigateToPage }) => {
  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'solar', label: 'Solar' },
    { id: 'motors', label: 'Motors' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'about', label: 'About Us' }
  ];

  const logos = [
    '/Raja%20solor%20logo.jpeg',
    '/Raja%20motors%20Logo.jpeg',
    '/Marichamy%20logo.jpeg'
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigateToPage('home');
  };

  const handleNavClick = (pageId, e) => {
    e.preventDefault();
    navigateToPage(pageId);
  };

  return (
    <nav className="unified-nav luxury-glass">
      <div className="nav-wrapper">
        <a href="#home" className="nav-logo" onClick={handleLogoClick}>
          <img 
            src={logos[currentLogoIndex]} 
            alt="Brand Logo" 
            className="rotating-nav-logo"
            key={currentLogoIndex} // Key helps trigger simple CSS animations if needed
          />
          <div className="logo-text">
            <h2>RAJA GROUP</h2>
            <p>ESTD 2007</p>
          </div>
        </a>

        {/* Desktop Links (automatically hidden on mobile via CSS) */}
        <div className="nav-links">
          {navigation.map((nav) => {
            const isActive = currentPage === nav.id;
            return (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(nav.id, e)}
              >
                <span className="nav-indicator-dot"></span>
                {nav.label}
              </a>
            );
          })}
          
          <a
            href="#about"
            className="nav-cta-btn"
            onClick={(e) => handleNavClick('about', e)}
          >
            Inquiry Hub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
