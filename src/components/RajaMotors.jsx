import React, { useEffect, useRef } from 'react';
import './RajaMotors.css';

const RajaMotors = () => {
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
    <section id="motors" className="section-container motors-section-light">
      <div className="section-content" ref={sectionRef}>
        
        <div className="brand-header-split reverse-layout">
          <div className="brand-header-text">
            <span className="chip" style={{ color: 'var(--brand-motors)', background: 'rgba(14, 165, 233, 0.1)' }}>
              Water & Pumping Solutions
            </span>
            <h2 className="section-title">Raja Motors & SS Pumps</h2>
            <p className="section-subtitle">
              Authorized Dealer for KSB - Providing world-class German technology since 1871. We offer unparalleled reliability in water transport for agriculture, industry, and homes.
            </p>
          </div>
          <div className="brand-logo-large glass-panel motors-logo-bg">
            <img src="/Raja%20motors%20Logo.jpeg" alt="Raja Motors & SS Pumps" />
          </div>
        </div>

        <div className="tech-highlight-banner glass-panel">
          <div className="tech-stat">
            <h4>150+</h4>
            <p>Years of KSB German Tech</p>
          </div>
          <div className="tech-stat divider">
            <h4>100%</h4>
            <p>Copper Winding</p>
          </div>
          <div className="tech-stat divider">
            <h4>Eco</h4>
            <p>Energy Efficient</p>
          </div>
          <div className="tech-stat divider">
            <h4>ISO</h4>
            <p>Certified Standards</p>
          </div>
        </div>

        <h3 className="sub-heading mt-6">Product Categories</h3>
        <div className="motors-product-grid">
          <div className="product-category-card">
            <div className="cat-image placeholder-agri"></div>
            <div className="cat-content">
              <h3>Agricultural Pumps</h3>
              <p>Heavy-duty borewell submersible pumps capable of lifting water from extreme depths to irrigate massive farmlands efficiently.</p>
              <a href="#" className="text-link">View Specifications →</a>
            </div>
          </div>

          <div className="product-category-card">
            <div className="cat-image placeholder-ind"></div>
            <div className="cat-content">
              <h3>Industrial Motors</h3>
              <p>Robust AC/DC motors built to withstand continuous operation in factories, ensuring your production lines never halt.</p>
              <a href="#" className="text-link">View Specifications →</a>
            </div>
          </div>

          <div className="product-category-card">
            <div className="cat-image placeholder-dom"></div>
            <div className="cat-content">
              <h3>Domestic Solutions</h3>
              <p>Silent, compact, and highly efficient water pumps for residential buildings, ensuring constant pressure across all floors.</p>
              <a href="#" className="text-link">View Specifications →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RajaMotors;
