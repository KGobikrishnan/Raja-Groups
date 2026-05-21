import React from 'react';
import Icon from './Icon';
import './AboutContact.css';

const AboutContact = () => {
  return (
    <section id="about" className="about-snap-section">
      <div className="about-content-wrapper view-fade">

        <div className="section-heading-block text-center">
          <span className="chip chip-solar"><Icon name="mapPin" size={14} style={{marginRight: '6px'}} /> Operational Grid</span>
          <h2>Regional Trust & Contact Matrix</h2>
          <p>Connecting agricultural and industrial communities directly with our core operational offices.</p>
        </div>

        {/* Streamlined Layout containing Cumbum HQ & Maps on Left, ID Card on Right */}
        <div className="about-interactive-layout">

          <div className="contact-hubs-block optimized-full-width">

            {/* Main Branch Cumbum Only */}
            <div className="hub-office-card luxury-glass glow-solar">
              <div className="office-header">
                <h3>Main Branch Cumbum</h3>
                <span className="hub-status-pill">Primary HQ</span>
              </div>
              <p className="office-addr">
                1A3-2, Ward 32, Sri Nandagopalasamy Nagar, <br />
                L.F.Road, Cumbum, Theni District, Tamil Nadu - 625 516
              </p>
              <div className="office-tels">
                <span className="tel-node"><Icon name="phone" size={16} /> +91 93612 10091</span>
                <span className="tel-node"><Icon name="phone" size={16} /> +91 81224 10091</span>
                <span className="tel-node"><Icon name="mail" size={16} /> rajapooja1979@gmail.com</span>
              </div>
            </div>

            {/* Dark Styled Google Maps Interactive Container */}
            <div className="gmaps-mock-container luxury-glass glow-emerald">
              <div className="maps-header-row">
                <div className="maps-title-meta">
                  <h4>Google Maps Satellite Link</h4>
                  <p>L.F. Road, Cumbum HQ Office Coordinates</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/jMLgQbCdpJm4e3uh7"
                  target="_blank"
                  rel="noreferrer"
                  className="map-nav-btn"
                >
                  Navigate Hub →
                </a>
              </div>

              <div className="actual-iframe-wrapper">
                <iframe
                  title="Cumbum HQ Satellite Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.743456383636!2d77.282909!3d9.745163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDQnNDIuNiJOIDc3wrAxNyc1OC41IkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)', borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Business Digital ID Card (Right Column) */}
          <div className="business-id-card luxury-glass glow-cyan">
            <div className="id-card-header">
              <div className="id-logos">
                <img src="/Raja%20solor%20logo.jpeg" alt="RSE" />
                <img src="/Raja%20motors%20Logo.jpeg" alt="RMA" />
                <img src="/Marichamy%20logo.jpeg" alt="MEW" />
              </div>
              <div className="id-badge">✓ VERIFIED BUSINESS</div>
            </div>
            <div className="id-card-body">
              <h3>Raja Groups</h3>
              <p className="id-tagline">Solar Energy • Water Motors • Engineering Works</p>
              <div className="id-details-grid">
                <div className="id-detail-item">
                  <Icon name="phone" size={16} />
                  <span>+91 93612 10091</span>
                </div>
                <div className="id-detail-item">
                  <Icon name="phone" size={16} />
                  <span>+91 81224 10091</span>
                </div>
                <div className="id-detail-item">
                  <Icon name="mail" size={16} />
                  <span>rajapooja1979@gmail.com</span>
                </div>
                <div className="id-detail-item">
                  <Icon name="mapPin" size={16} />
                  <span>Cumbum, Theni DT</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutContact;