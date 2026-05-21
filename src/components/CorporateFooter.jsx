import React from 'react';
import './CorporateFooter.css';

const CorporateFooter = ({ setCurrentPage }) => {
  const handleLinkClick = (page, e) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <footer className="massive-corporate-footer luxury-glass">
      <div className="footer-columns-grid">
        
        {/* Col 1: Corporate Profile */}
        <div className="footer-col">
          <h4>RAJA GROUP OF COMPANIES</h4>
          <p className="footer-corp-desc">
            Engineering Tamil Nadu's ecological power systems, smart industrial drivetrains, and deep fluid mechanics since 2007.
          </p>
          <div className="proprietor-node">
            <span>Proprietor:</span>
            <span>M. RAJA</span>
          </div>
        </div>

        {/* Col 2: Brand Ecosystem */}
        <div className="footer-col">
          <h4>Ecosystem Hubs</h4>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => handleLinkClick('home', e)}>Home Hub</a></li>
            <li><a href="#solar" onClick={(e) => handleLinkClick('solar', e)}>RSE Solar Spectrum</a></li>
            <li><a href="#motors" onClick={(e) => handleLinkClick('motors', e)}>RMA Heavy Industry</a></li>
            <li><a href="#engineering" onClick={(e) => handleLinkClick('engineering', e)}>MEW Engineering Hub</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick('about', e)}>Trust & Diagnostic Form</a></li>
          </ul>
        </div>

        {/* Col 3: Strategic Partners */}
        <div className="footer-col">
          <h4>Strategic Integration</h4>
          <ul className="footer-links">
            <li><span>KSB German Technology</span></li>
            <li><span>Fins Smart EV Networks</span></li>
            <li><span>Ashirvad Column Pipes</span></li>
            <li><span>MEECO & L&T Switchgears</span></li>
          </ul>
        </div>

        {/* Col 4: Reach Info */}
        <div className="footer-col">
          <h4>Corporate Operations</h4>
          <div className="footer-reach-info">
            <span>Main Branch: L.F.Road, Cumbum HQ</span>
            <span>Registered: Sri Nandagopalasamy Nagar</span>
            <span>Hotlines: 93612 10091 / 81224 10091</span>
            <span>Service Desk: 24/7 Field Dispatch</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} RAJA GROUP. All rights reserved across Tamil Nadu.</p>
        <p className="navi-attribution">
          Designed By <a href="https://www.navipromotions.in/" target="_blank" rel="noopener noreferrer" className="navi-link">Navi Promotions</a>
        </p>
        <div className="footer-regulatory-badges">
          <span className="badge-item">ISO 9001:2015</span>
          <span className="badge-item">ESTD 2007</span>
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;
