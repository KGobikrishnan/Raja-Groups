import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-light">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>RAJA<span className="logo-highlight">GROUP</span></h2>
          <p className="footer-desc">
            A trusted ecosystem for engineering, water, and sustainable energy solutions. Delivering quality since 2007.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon">IN</a>
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
          </div>
        </div>
        
        <div className="footer-contact-card">
          <h3>Proprietor Contact</h3>
          <p className="proprietor-name">M. RAJA</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📞</span>
              <div>
                <p>93612 10091</p>
                <p>81224 10091</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="icon">✉️</span>
              <p>rajapooja1979@gmail.com</p>
            </div>
            
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>
                1A3-2, Ward 32, <br/>
                Sri Nandagopalasamy Nagar, <br/>
                L.F.Road, CUMBUM, <br/>
                Theni Dist - 625 516
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Raja Group of Companies. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
