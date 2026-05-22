import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import './Hero.css';

const Hero = ({ navigateToPage }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'RAJA SOLAR ENERGY',
      sub: 'Sustainable Generation & Photovoltaic Integration',
      tagline: 'Leading Tamil Nadu in residential, commercial, and floating solar array systems. Harvesting the infinite power of clean energy.',
      bg: '/solar_bg_1779278192603.png',
      logo: '/Raja%20solor%20logo.jpeg',
      badge: <><Icon name="sun" size={12} style={{marginRight: '4px'}} /> PV Spectrum Accents</>,
      pageId: 'solar'
    },
    {
      title: 'RAJA MOTORS & SS PUMPS',
      sub: 'Heavy Industrial Drives & Electric Infrastructure',
      tagline: 'Authorized KSB partner, powering variable frequency Mitsubishi VFDs, INVT motor converters, and integrated Fins EV charging hubs.',
      bg: '/motors_bg_1779278176265.png',
      logo: '/Raja%20motors%20Logo.jpeg',
      badge: '⚡ RMA Heavy Industry',
      pageId: 'motors'
    },
    {
      title: 'MARICHAMY ENGINEERING WORKS',
      sub: 'Robust Fluid Logistics & High-Pressure Engineering',
      tagline: 'Delivering robust German submersibles, Schedule 80 Ashirvad column pipes, and IP55 MEECO switchgear panels since 2007.',
      bg: '/marichamy_bg_1779278160700.png',
      logo: '/Marichamy%20logo.jpeg',
      badge: '💧 MEW Fluid Hub',
      pageId: 'engineering'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Swaps slides every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    const hub = document.getElementById('divisions-hub');
    if (hub) {
      hub.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGridClick = (pageId) => {
    navigateToPage(pageId);
  };

  return (
    <>
      <section id="home" className="hero-snap-section">
        
        {/* Background Slideshow Engine */}
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`hero-slide-bg ${activeSlide === idx ? 'visible' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.82), rgba(11, 15, 25, 0.95)), url(${slide.bg})` }}
          ></div>
        ))}

        <div className="hero-grid-pattern"></div>

        <div className="hero-slider-content view-fade">
          <div className="slideshow-container">
            
            {slides.map((slide, idx) => (
              <div key={idx} className={`slide-content-block ${activeSlide === idx ? 'active' : ''}`}>
                <div className="slide-meta-row">
                  <span className="chip chip-solar">{slide.badge}</span>
                  <img src={slide.logo} alt="Brand Logo" className="slide-brand-logo" fetchPriority={idx === 0 ? "high" : "auto"} loading={idx === 0 ? "eager" : "lazy"} />
                </div>
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-sub">{slide.sub}</h2>
                <p className="slide-desc">{slide.tagline}</p>
                
                <button 
                  className="slide-cta-link-btn" 
                  onClick={() => handleGridClick(slide.pageId)}
                >
                  Explore Division Hub →
                </button>
              </div>
            ))}

            {/* Navigation Indicators */}
            <div className="slider-indicator-row">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  className={`indicator-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                >
                  <span className="dot-fill"></span>
                </button>
              ))}
            </div>

          </div>

          {/* Corporate Profile description panel */}
          <div className="corporate-profile-card luxury-glass glow-cyan">
            <h3>Industrial Infrastructure Group</h3>
            <p>
              Establishing dynamic regional networks in Theni, Cumbum, and wider Tamil Nadu. Over 13+ years of reliable field engineering, servicing high-pressure grids, advanced fluid logistics, and ecological power projects.
            </p>
            <div className="corporate-stats">
              <div className="corp-stat">
                <h4>13+</h4>
                <p>Years of Engineering</p>
              </div>
              <div className="corp-stat border-l">
                <h4>100%</h4>
                <p>Service Assurance</p>
              </div>
              <div className="corp-stat border-l">
                <h4>1A3</h4>
                <p>Operational Hub Class</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Corporate Core Divisions Quick Access Hub */}
      <section id="divisions-hub" className="divisions-hub-section">
        <div className="divisions-hub-wrapper">
          
          <div className="section-heading-block text-center">
            <span className="chip chip-solar"><Icon name="gear" size={14} style={{marginRight: '6px'}} /> OPERATIONAL CORE</span>
            <h2>Pioneering Regional Infrastructure</h2>
            <p>Empowering local farming collectives, industrial mills, and modern operations through highly specialized engineering solutions.</p>
          </div>

          <div className="divisions-grid-container">
            
            {/* Division 1: Solar */}
            <ScrollReveal delay={0} className="division-hub-card luxury-glass glow-solar" onClick={() => handleGridClick('solar')}>
              <div className="card-bg-image" style={{ backgroundImage: 'url(https://i0.wp.com/eepowerschool.com/wp-content/uploads/2018/09/Solar-Photovoltaic-panel.jpg?fit=1600%2C1062&ssl=1)' }}></div>
              <div className="card-top-header">
                <span className="div-icon"><Icon name="sun" size={32} /></span>
                <span className="div-pill pill-solar">Solar Division</span>
              </div>
              <h3>RSE Solar Energy Systems</h3>
              <p>Certified Tier-1 photovoltaic engineering. We design heavy-duty solar pumps, solar tracking nets, and cellular SIM CCTV telemetry arrays built to withstand wind coefficients.</p>
              <div className="div-metrics">
                <div className="metric-box">
                  <span>Efficiency</span>
                  <span>21.8% Yield</span>
                </div>
                <div className="metric-box border-l">
                  <span>Systems Built</span>
                  <span>On/Off Grid</span>
                </div>
              </div>
              <button className="div-explore-btn btn-solar">Explore Solar Energy Grid →</button>
            </ScrollReveal>

            {/* Division 2: Motors */}
            <ScrollReveal delay={150} className="division-hub-card luxury-glass glow-cyan" onClick={() => handleGridClick('motors')}>
              <div className="card-bg-image" style={{ backgroundImage: 'url(https://oswalpumps.com/images/product/stainless-v4-1.jpg)' }}></div>
              <div className="card-top-header">
                <span className="div-icon"><Icon name="bolt" size={32} /></span>
                <span className="div-pill pill-motors">Motors Division</span>
              </div>
              <h3>RMA Heavy Industry & EV</h3>
              <p>Industrial power drivetrains. Authorized KSB pumps service network. Powering heavy AC induction motors, Mitsubishi vector drives, and smart OCPP EV chargers.</p>
              <div className="div-metrics">
                <div className="metric-box">
                  <span>Torque</span>
                  <span>200% dynamic</span>
                </div>
                <div className="metric-box border-l">
                  <span>EV Power</span>
                  <span>7.2kW to 22kW</span>
                </div>
              </div>
              <button className="div-explore-btn btn-motors">Explore Motors & SS Pumps →</button>
            </ScrollReveal>

            {/* Division 3: Engineering */}
            <ScrollReveal delay={300} className="division-hub-card luxury-glass glow-emerald" onClick={() => handleGridClick('engineering')}>
              <div className="card-bg-image" style={{ backgroundImage: 'url(https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/04/Mechanical_Engineers_Work-3.jpg)' }}></div>
              <div className="card-top-header">
                <span className="div-icon"><Icon name="droplet" size={32} /></span>
                <span className="div-pill pill-mew">Engineering Division</span>
              </div>
              <h3>Marichamy Engineering Works</h3>
              <p>Since 2007, delivering robust fluid logistics. Executing deep borewell pump setups, Schedule 80 Ashirvad column pipelines, and IP55 custom MEECO control panel cabinets.</p>
              <div className="div-metrics">
                <div className="metric-box">
                  <span>Drill Capacity</span>
                  <span>Up to 1200 ft</span>
                </div>
                <div className="metric-box border-l">
                  <span>Switchgear</span>
                  <span>L&T MNX IP55</span>
                </div>
              </div>
              <button className="div-explore-btn btn-mew">Explore Engineering Works →</button>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* The Foundation of Our Success Section */}
      <section className="success-foundation-section">
        <div className="success-foundation-wrapper">
          
          <div className="section-heading-block text-center">
            <span className="chip chip-solar"><Icon name="diamond" size={14} style={{marginRight: '6px'}} /> OUR CORE PRINCIPLES</span>
            <h2>The Foundation of Our Success</h2>
            <p>The strategic virtues powering our corporate ecosystem across Tamil Nadu since 2007.</p>
          </div>

          <div className="foundation-grid-container">
            
            {/* Principle 1: Team Work */}
            <ScrollReveal delay={0} className="foundation-card luxury-glass glow-cyan">
              <div className="foundation-icon-box">
                <svg className="foundation-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Team Work</h3>
              <p>Synergizing Tamil Nadu's leading field engineers and PV telemetry technicians to build sustainable power grids.</p>
            </ScrollReveal>

            {/* Principle 2: Quality */}
            <ScrollReveal delay={100} className="foundation-card luxury-glass glow-solar">
              <div className="foundation-icon-box">
                <svg className="foundation-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>Rigorous field testing parameters conforming with premium ISO 9001:2015 and German technology standards.</p>
            </ScrollReveal>

            {/* Principle 3: Customers */}
            <ScrollReveal delay={200} className="foundation-card luxury-glass glow-emerald">
              <div className="foundation-icon-box">
                <svg className="foundation-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
              <h3>Customer Care</h3>
              <p>Empowering agricultural collectives, heavy mills, and local hubs with dedicated 24/7 technical dispatch support.</p>
            </ScrollReveal>

            {/* Principle 4: Goals */}
            <ScrollReveal delay={0} className="foundation-card luxury-glass glow-cyan">
              <div className="foundation-icon-box">
                <svg className="foundation-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Strategic Goals</h3>
              <p>Expanding eco-aware utility power structures, EV smart infrastructure, and robust regional hydraulics pipelines.</p>
            </ScrollReveal>

            {/* Principle 5: Innovations */}
            <ScrollReveal delay={100} className="foundation-card luxury-glass glow-solar">
              <div className="foundation-icon-box">
                <svg className="foundation-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="10" y1="22" x2="14" y2="22" />
                </svg>
              </div>
              <h3>Innovations</h3>
              <p>Pioneering high-frequency motor vector controllers, smart telemetry CCTV panels, and clean energy storage matrices.</p>
            </ScrollReveal>

            {/* Principle 6: Operational Trust */}
            <ScrollReveal delay={200} className="foundation-card luxury-glass glow-emerald">
              <div className="foundation-icon-box">
                <svg className="foundation-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Operational Trust</h3>
              <p>Powering regional projects with transparent contracts, tier-1 brand warranties, and lifetime technical safety grids.</p>
            </ScrollReveal>

          </div> {/* end of foundation-grid-container */}

        </div>
      </section>

      {/* Our Brand Partners Section */}
      <section className="brand-partners-section">
        <div className="brand-partners-wrapper">
          
          <div className="section-heading-block text-center">
            <span className="chip chip-solar"><Icon name="handshake" size={14} style={{marginRight: '6px'}} /> TRUSTED INTEGRATION</span>
            <h2>Our Brand Partners</h2>
            <p className="partners-description">
              We collaborate with global tier-1 engineering, piping, and electrical brands to deliver uncompromised, high-efficiency equipment across all industrial and agricultural projects in Tamil Nadu.
            </p>
          </div>

          <div className="partners-logos-grid">
            
            {/* Ashirvad Pipes */}
            <ScrollReveal delay={0} className="partner-logo-box luxury-glass glow-solar">
              <div className="logo-img-wrapper">
                <img 
                  src="https://images.seeklogo.com/logo-png/30/2/ashirvad-logo-png_seeklogo-305072.png" 
                  alt="Ashirvad Pipes Partner" 
                  className="partner-logo-img ashirvad-logo"
                  loading="lazy"
                />
              </div>
              <span className="partner-label">Ashirvad Pipes</span>
            </ScrollReveal>

            {/* KSB */}
            <ScrollReveal delay={100} className="partner-logo-box luxury-glass glow-cyan">
              <div className="logo-img-wrapper">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/KSB_SVG.svg/3840px-KSB_SVG.svg.png" 
                  alt="KSB Pumps Partner" 
                  className="partner-logo-img ksb-logo"
                  loading="lazy"
                />
              </div>
              <span className="partner-label">KSB Pumps</span>
            </ScrollReveal>

            {/* L&T */}
            <ScrollReveal delay={200} className="partner-logo-box luxury-glass glow-emerald">
              <div className="logo-img-wrapper">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" 
                  alt="L&T Switchgear Partner" 
                  className="partner-logo-img lt-logo"
                  loading="lazy"
                />
              </div>
              <span className="partner-label">Larsen & Toubro</span>
            </ScrollReveal>

            {/* MEECO */}
            <ScrollReveal delay={300} className="partner-logo-box luxury-glass glow-cyan">
              <div className="logo-img-wrapper">
                <img 
                  src="https://meeco.com/meeco/wp-content/themes/mecco/images/logo.png" 
                  alt="MEECO Control Panels Partner" 
                  className="partner-logo-img meeco-logo"
                  loading="lazy"
                />
              </div>
              <span className="partner-label">MEECO Panels</span>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Our Impact Story Section */}
      <section className="impact-story-section">
        <div className="impact-story-wrapper">
          
          <div className="section-heading-block text-center">
            <span className="chip chip-solar"><Icon name="seedling" size={14} style={{marginRight: '6px'}} /> REVOLUTIONIZING INFRASTRUCTURE</span>
            <h2>Our Impact Story</h2>
            <div className="tagline-block">
              <span className="tagline-glow text-amber">Nature First.</span>
              <span className="tagline-glow text-cyan">Nation First.</span>
            </div>
            <p className="impact-mission-statement">
              Since 2007, Raja Group has pioneered environmental and national infrastructure across Tamil Nadu. We believe that robust commercial engineering must go hand-in-hand with ecological preservation to power our country's tomorrow.
            </p>
          </div>

          <div className="impact-grid-container">
            
            {/* Impact Card 1: Solar */}
            <ScrollReveal delay={0} className="impact-card luxury-glass hover-scale">
              <div className="impact-card-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600" 
                  alt="Ecological Power Networks" 
                  className="impact-card-img"
                  loading="lazy"
                />
                <div className="impact-overlay glow-solar"></div>
              </div>
              <div className="impact-card-body">
                <span className="impact-card-pill pill-solar">Ecological Power</span>
                <h3>Harvesting the Infinite Sun</h3>
                <p>Deploying heavy-duty solar telemetry grids across local farming networks, offsetting carbon footprints and delivering green energy.</p>
              </div>
            </ScrollReveal>

            {/* Impact Card 2: Motors & Hydraulics */}
            <ScrollReveal delay={150} className="impact-card luxury-glass hover-scale">
              <div className="impact-card-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600" 
                  alt="Agricultural Water Networks" 
                  className="impact-card-img"
                  loading="lazy"
                />
                <div className="impact-overlay glow-cyan"></div>
              </div>
              <div className="impact-card-body">
                <span className="impact-card-pill pill-motors">Fluid Engineering</span>
                <h3>Fluidizing Rural Operations</h3>
                <p>Automating agricultural deep-well KSB pump logistics and smart INVT speed converters, reducing utility power costs by 35%.</p>
              </div>
            </ScrollReveal>

            {/* Impact Card 3: EV Smart Mobility */}
            <ScrollReveal delay={300} className="impact-card luxury-glass hover-scale">
              <div className="impact-card-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600" 
                  alt="EV Integration Networks" 
                  className="impact-card-img" 
                />
                <div className="impact-overlay glow-emerald"></div>
              </div>
              <div className="impact-card-body">
                <span className="impact-card-pill pill-mew">National Progress</span>
                <h3>Fueling National Progress</h3>
                <p>Accelerating eco-conscious logistics and smart municipal corridors with Fins OCPP EV charging station integration.</p>
              </div>
            </ScrollReveal>

            {/* Impact Card 4: Rural Prosperity */}
            <ScrollReveal delay={450} className="impact-card luxury-glass hover-scale">
              <div className="impact-card-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80" 
                  alt="Rural Prosperity Irrigation" 
                  className="impact-card-img" 
                />
                <div className="impact-overlay glow-solar"></div>
              </div>
              <div className="impact-card-body">
                <span className="impact-card-pill pill-solar">Rural Prosperity</span>
                <h3>Prosperity in Every Field</h3>
                <p>Electrifying 5,000+ deep agricultural tracts, bringing modern automated solar borewell hydraulics to regional farming families.</p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
