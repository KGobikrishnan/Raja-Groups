import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      
      // Main hero text parallax fade
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
        heroRef.current.style.opacity = Math.max(0, 1 - scrollValue / 600);
      }

      // Parallax for floating pillar cards
      elementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 0.15;
          el.style.transform = `translateY(${scrollValue * speed}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-mesh-bg"></div>
      
      <div className="hero-content" ref={heroRef}>
        <div className="hero-chip">
          <span className="dot"></span> Defining Industry Standards Since 2007
        </div>
        
        <h1 className="hero-title">
          Engineering the <br />
          <span className="text-gradient brand-gradient">Future Ecosystem</span>
        </h1>
        
        <p className="hero-subtitle">
          The Raja Group unifies three powerful brands under one vision. From heavy-duty industrial pipelines to advanced German pumping technology and sustainable solar grids.
        </p>
        
        <div className="hero-actions">
          <a href="#marichamy" className="btn btn-primary">Discover Our Ecosystem</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className="hero-floating-pillars">
        <div className="pillar card-marichamy" ref={addToRefs}>
          <div className="pillar-icon">⚙️</div>
          <h3>Engineering Works</h3>
        </div>
        <div className="pillar card-motors" ref={addToRefs} style={{ marginTop: '80px' }}>
          <div className="pillar-icon">💧</div>
          <h3>Motors & Pumps</h3>
        </div>
        <div className="pillar card-solar" ref={addToRefs} style={{ marginTop: '40px' }}>
          <div className="pillar-icon">☀️</div>
          <h3>Solar Energy</h3>
        </div>
      </div>
      
      <div className="scroll-indicator-light">
        <div className="mouse-light"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
