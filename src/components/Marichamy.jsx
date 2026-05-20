import React, { useEffect, useRef } from 'react';
import './Marichamy.css';

const Marichamy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="marichamy" className="section-container light-section">
      <div className="section-content" ref={sectionRef}>
        
        <div className="brand-header-split">
          <div className="brand-header-text">
            <span className="chip" style={{ color: 'var(--brand-marichamy)', background: 'rgba(227, 74, 39, 0.1)' }}>
              Industrial Infrastructure
            </span>
            <h2 className="section-title">Marichamy Engineering Works</h2>
            <p className="section-subtitle">
              Delivering robust industrial and domestic engineering solutions since 2007. We specialize in high-quality pipelines, heavy-duty cables, and advanced control panels for large-scale operations.
            </p>
          </div>
          <div className="brand-logo-large glass-panel">
            <img src="/Marichamy%20logo.jpeg" alt="Marichamy Engineering Works" />
          </div>
        </div>

        <div className="content-grid-3">
          <div className="service-card">
            <div className="service-icon" style={{ background: 'rgba(227, 74, 39, 0.1)', color: 'var(--brand-marichamy)' }}>
              🏗️
            </div>
            <h3>Industrial Pipelines</h3>
            <p>End-to-end installation and maintenance of premium PVC, UPVC, and CPVC piping systems for agricultural and commercial applications.</p>
            <ul className="service-list">
              <li>High-pressure tolerance</li>
              <li>Leak-proof jointing</li>
              <li>Underground specialization</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ background: 'rgba(227, 74, 39, 0.1)', color: 'var(--brand-marichamy)' }}>
              ⚡
            </div>
            <h3>Cables & Wiring</h3>
            <p>Providing high-tension, weather-resistant cabling solutions that ensure uninterrupted power supply to massive industrial setups.</p>
            <ul className="service-list">
              <li>Submersible pump cables</li>
              <li>Fire-retardant wiring</li>
              <li>Heavy load capacity</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ background: 'rgba(227, 74, 39, 0.1)', color: 'var(--brand-marichamy)' }}>
              🎛️
            </div>
            <h3>Control Panels</h3>
            <p>Smart electrical control panels for motor protection, automation, and safe operation of complex machinery.</p>
            <ul className="service-list">
              <li>Overload protection</li>
              <li>Phase failure relays</li>
              <li>Automated timer systems</li>
            </ul>
          </div>
        </div>

        <div className="partners-section">
          <h3 className="sub-heading">Our Trusted Partners</h3>
          <div className="partners-grid">
            <div className="partner-logo">Ashirvad Pipe</div>
            <div className="partner-logo">KSB Cable</div>
            <div className="partner-logo">MEECO Panel</div>
            <div className="partner-logo">L&T Panel</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Marichamy;
