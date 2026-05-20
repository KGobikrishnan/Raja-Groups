import React, { useEffect, useRef } from 'react';
import './RajaSolar.css';

const RajaSolar = () => {
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

  const products = [
    { name: "On-Grid/Off-Grid Systems", desc: "Complete roof-top installations for homes & businesses.", icon: "☀️" },
    { name: "Solar Water Pumps", desc: "Kenbrook solar powered agriculture pumps.", icon: "💧" },
    { name: "Street Lights & EV Chargers", desc: "Integrated solar lighting and vehicle charging.", icon: "🔋" },
    { name: "Solar Bollards & Gate Lights", desc: "Elegant lighting for driveways and entrances.", icon: "🏮" },
    { name: "Solar Flame LED Lights", desc: "Decorative flame-effect solar powered lamps.", icon: "🔥" },
    { name: "Solar Sim CCTV Camera", desc: "Off-grid security monitoring solutions.", icon: "📷" },
  ];

  return (
    <section id="solar" className="section-container solar-section-light">
      <div className="section-content" ref={sectionRef}>
        
        <div className="brand-header-split">
          <div className="brand-header-text">
            <span className="chip" style={{ color: 'var(--brand-solar)', background: 'rgba(245, 158, 11, 0.1)' }}>
              Sustainable Energy
            </span>
            <h2 className="section-title">Raja Solar Energy Power System</h2>
            <p className="section-subtitle">
              Transition to clean energy with our comprehensive solar ecosystem. From heavy-duty solar panels to intelligent outdoor lighting, we provide a 360-degree approach to sustainable living.
            </p>
          </div>
          <div className="brand-logo-large glass-panel" style={{ borderColor: 'rgba(245, 158, 11, 0.2)' }}>
            <img src="/Raja%20solor%20logo.jpeg" alt="Raja Solar Energy Power System" />
          </div>
        </div>

        <div className="solar-horizontal-scroll-container">
          <h3 className="sub-heading" style={{ textAlign: 'left' }}>Explore Our Solar Catalog</h3>
          <div className="horizontal-scroll">
            {products.map((product, index) => (
              <div key={index} className="solar-product-card">
                <div className="sp-icon-wrapper">
                  <span className="sp-icon">{product.icon}</span>
                </div>
                <h4>{product.name}</h4>
                <p>{product.desc}</p>
                <button className="sp-btn">Details</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="solar-workflow">
          <h3 className="sub-heading">The Raja Solar Workflow</h3>
          <div className="workflow-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h4>Site Inspection</h4>
              <p>We evaluate your energy needs and roof layout.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">02</div>
              <h4>Custom Design</h4>
              <p>Engineering a system for maximum efficiency.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">03</div>
              <h4>Installation</h4>
              <p>Professional setup by certified technicians.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">04</div>
              <h4>Maintenance</h4>
              <p>Lifetime support and cleaning services.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RajaSolar;
