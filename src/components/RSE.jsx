import React from 'react';
import Icon from './Icon';
import './RSE.css';

const RSE = () => {
  return (
    <section id="rse" className="rse-snap-section">
      <img src="/solar_bg_1779278192603.png" alt="Solar BG" className="section-bg-image" />
      
      <div className="section-content-wrapper view-fade">
        
        <div className="section-heading-block">
          <div className="brand-header-meta">
            <img src="/Raja%20solor%20logo.jpeg" alt="RSE Logo" className="section-header-logo" />
            <span className="chip chip-solar"><Icon name="sun" size={14} style={{marginRight: '6px'}} /> RSE Solar Spectrum</span>
          </div>
          <h2>Raja Solar Energy Power System</h2>
          <p>Delivering tier-1 photovoltaic grids and off-grid solar tracking systems for critical agricultural operations.</p>
        </div>

        <div className="rse-expanded-grid">
          
          {/* Left Split: Massive Product Specifications */}
          <div className="specs-details-column">
            
            {/* Spec Card A1: Generation Grid */}
            <div className="bento-card luxury-glass glow-solar">
              <div className="bento-card-bg-image" style={{ backgroundImage: 'url(https://frontend-cdn.solarreviews.com/solar-clay-tile-roof-installation.jpg)' }}></div>
              <div className="bento-card-content">
                <div className="bento-card-icon"><Icon name="bolt" size={32} /></div>
                <h3>High-Yield Solar Generation</h3>
                <p>Heavy duty photovoltaic grids built to withstand wind pressures and operate at maximum thermal yield coefficient parameters.</p>
                <div className="bento-specs">
                  <div className="spec-item">
                    <span>Monocrystalline PERC</span>
                    <span>550W+ Tier-1 panels, 21.8% dynamic module conversion efficiency</span>
                  </div>
                  <div className="spec-item">
                    <span>On-Grid Roof Systems</span>
                    <span>Direct grid-tie synchronization with integrated bidirectional net-metering</span>
                  </div>
                  <div className="spec-item">
                    <span>Off-Grid Resiliency</span>
                    <span>48V heavy-duty LiFePO4 battery storage, dynamic backup balancing</span>
                  </div>
                  <div className="spec-item">
                    <span>Agricultural Pumps</span>
                    <span>3HP to 10HP PMBLDC high-head solar pumping systems with dry-run protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Card A2: Lighting & Telemetry */}
            <div className="bento-card luxury-glass glow-solar">
              <div className="bento-card-bg-image" style={{ backgroundImage: 'url(https://www.canadianminingjournal.com/wp-content/uploads/2026/03/EWS_Monitoring_Wellcap3.0-1024x768.jpg)' }}></div>
              <div className="bento-card-content">
                <div className="bento-card-icon"><Icon name="lightbulb" size={32} /></div>
                <h3>Solar Lighting & Quad-HD Telemetry</h3>
                <p>Certified off-grid hardware built with IP66 stormproof materials for uninterrupted agricultural and estate security.</p>
                <div className="bento-specs">
                  <div className="spec-item">
                    <span>Smart Bollards</span>
                    <span>Extruded anodized aluminum columns, dynamic dusk-to-dawn LED</span>
                  </div>
                  <div className="spec-item">
                    <span>Solar Gate & Street</span>
                    <span>Integrated SMD radar motion arrays, high-lumen flame lanterns</span>
                  </div>
                  <div className="spec-item">
                    <span>Solar SIM CCTV</span>
                    <span>4MP Quad-HD image sensor, dynamic color night vision powered by 15W PV</span>
                  </div>
                  <div className="spec-item">
                    <span>Wireless Network</span>
                    <span>Carrier-independent 4G LTE SIM telemetry links with active cloud backup</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Split: Large High-Contrast Brand Image Section */}
          <div className="brand-visual-column luxury-glass glow-solar">
            <div className="visual-image-wrapper">
              <img src="/solar_bg_1779278192603.png" alt="RSE Solar Infrastructure" className="visual-showcase-image" />
              <div className="visual-overlay-gradient"></div>
              <div className="visual-badge">RSE VISUAL PORTFOLIO</div>
            </div>
            <div className="visual-meta-box">
              <h4>On-Site Photovoltaic commission</h4>
              <p>
                RSE customized 25kW agricultural arrays deployed with extreme-strength ground mounting arrays in Cumbum Valley. Actively delivering 110kWh of continuous daily energy.
              </p>
              <div className="visual-stats-row">
                <div className="v-stat">
                  <span>Daily Yield</span>
                  <span>110 kWh</span>
                </div>
                <div className="v-stat">
                  <span>Wind Load</span>
                  <span>150 km/h</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Premium Solar Products Showcase */}
        <div className="solar-showcase-wrapper">
          
          <div className="section-heading-block text-center">
            <span className="chip chip-solar"><Icon name="gear" size={14} style={{marginRight: '6px'}} /> HARDWARE & CATALOG</span>
            <h2>Premium Solar Products & Systems</h2>
            <p className="showcase-meta-para">Explore our certified off-grid installations, smart street illumination, and commercial-grade solar solutions built for lasting performance.</p>
          </div>

          <div className="showcase-rows-container">
            
            {/* Row 1: 1*3 Grid format (3 items) */}
            <div className="showcase-row grid-3">
              
              {/* Item 1: Solar Bollards */}
              <div className="product-showcase-card luxury-glass glow-solar">
                <div className="product-image-wrapper">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2024/3/405879608/MD/FC/TV/152656222/solar-bollard-lights.jpg" alt="Solar Bollard Lights" className="product-img" />
                  <div className="product-badge">ESTATE LIGHTING</div>
                </div>
                <div className="product-info">
                  <h3>Solar Bollard Lights</h3>
                  <p>Extruded anodized aluminum columns providing dusk-to-dawn pathway illumination.</p>
                </div>
              </div>

              {/* Item 2: Solar Gate Light */}
              <div className="product-showcase-card luxury-glass glow-solar">
                <div className="product-image-wrapper">
                  <img src="https://inventaa.in/cdn/shop/files/BloomCool_6b4fc9f6-0d17-48bb-bc88-45e4b3afc71f.jpg?v=1771914882&width=2408" alt="Solar Gate Light" className="product-img" />
                   <div className="product-badge">SMART ENTRY</div>
                </div>
                <div className="product-info">
                  <h3>Solar Gate Light</h3>
                  <p>Elegant blooming floral globe design delivering auto-sensing perimeter security.</p>
                </div>
              </div>

              {/* Item 3: Solar Flame LED Light */}
              <div className="product-showcase-card luxury-glass glow-solar">
                <div className="product-image-wrapper">
                  <img src="https://5.imimg.com/data5/ECOM/Default/2024/7/435894239/WL/FJ/BR/107578888/1714010699548-500x500.png" alt="Solar Flame LED Light" className="product-img" />
                  <div className="product-badge">AMBIENT TORCH</div>
                </div>
                <div className="product-info">
                  <h3>Solar Flame LED Light</h3>
                  <p>Weatherproof dynamic flicker-effect flame lanterns for pathways and landscaping.</p>
                </div>
              </div>

            </div>

            {/* Row 2: 1*2 Grid format (2 items) */}
            <div className="showcase-row grid-2">
              
              {/* Item 4: Solar Street Light */}
              <div className="product-showcase-card luxury-glass glow-solar highlighted-product">
                <div className="product-image-wrapper">
                  <img src="https://utkarshindia.in/assets/upload/product-image/f378347fd90fdf1896582eea7f36ab62.webp" alt="Solar Street Light" className="product-img" />
                  <div className="product-badge">HIGH-LUMEN HIGHWAY</div>
                </div>
                <div className="product-info">
                  <h3>Solar Street Light</h3>
                  <p>Industrial-grade radar-sensing street lighting system, engineered with high-efficiency PV arrays and lithium cells for highways, avenues, and factories.</p>
                </div>
              </div>

              {/* Item 5: Solar EV Charger */}
              <div className="product-showcase-card luxury-glass glow-solar highlighted-product">
                <div className="product-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/63053218ec1dde0a99cc4fee/66bb45f7ad7e0b19b50c7a07_Cost%20and%20Benefits%20of%20Solar-Powered%20EV%20Charging%20Stations.jpg" alt="Solar EV Charger" className="product-img" />
                  <div className="product-badge">GREEN MOBILITY</div>
                </div>
                <div className="product-info">
                  <h3>Solar EV Charging Station</h3>
                  <p>Next-generation grid-independent solar canopy charger, delivering rapid green vehicle power through optimized smart dual-charging ports.</p>
                </div>
              </div>

            </div>

            {/* Row 3: 1*3 Grid format (3 items) */}
            <div className="showcase-row grid-3">
              
              {/* Item 6: Solar Wall Lights */}
              <div className="product-showcase-card luxury-glass glow-solar">
                <div className="product-image-wrapper">
                  <img src="https://inventaa.in/cdn/shop/files/Figo_AD_FI.jpg?v=1765270884&width=2048" alt="Solar Wall Lights" className="product-img" />
                  <div className="product-badge">WALL SCONCES</div>
                </div>
                <div className="product-info">
                  <h3>Solar Wall Lights</h3>
                  <p>Multi-directional outdoor architectural wall fixtures with integrated PV cells.</p>
                </div>
              </div>

              {/* Item 7: Solar Camera */}
              <div className="product-showcase-card luxury-glass glow-solar">
                <div className="product-image-wrapper">
                  <img src="https://www.maizic.com/cdn/shop/files/1_7edd40bc-b76f-4196-9fa8-a776dd220831_1200x.jpg?v=1712231860" alt="Solar Camera" className="product-img" />
                  <div className="product-badge">TELEMETRY SECURE</div>
                </div>
                <div className="product-info">
                  <h3>Solar SIM CCTV Camera</h3>
                  <p>4MP Quad-HD carrier-independent cellular remote monitoring and live cloud alerts.</p>
                </div>
              </div>

              {/* Item 8: Solar Sensor Light */}
              <div className="product-showcase-card luxury-glass glow-solar">
                <div className="product-image-wrapper">
                  <img src="https://cdn.dotpe.in/longtail/store-items/7909358/EPJMFzNw.jpeg" alt="Solar Sensor Light" className="product-img" />
                  <div className="product-badge">RADAR DETECTION</div>
                </div>
                <div className="product-info">
                  <h3>Solar Sensor Security Light</h3>
                  <p>Durable radar-triggered floodlights with high-capacity battery units.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RSE & MFins About Us Section */}
        <div className="solar-about-wrapper">
          
          <div className="about-brand-header">
            <div className="slash-badge-container">
              <div className="green-slash-badge">About Us</div>
            </div>
            <p className="partnership-statement">
              RSE Solar in partnership with MFins aims to provide you with a low-cost solar franchise business in India, a way to start your own business and buy multiple solar products within an affordable range.
            </p>
          </div>

          <div className="services-7-grid">
            
            {/* Service 1: Business Experience */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-icon-circle-badge">
                <span className="years-bold">13+</span>
                <span className="years-small">Years</span>
              </div>
              <span className="service-title">Business Experience</span>
            </div>

            {/* Service 2: Design & Engineering */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-svg-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <span className="service-title">Design & Engineering</span>
            </div>

            {/* Service 3: Project Management */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-svg-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <rect x="18" y="8" width="4" height="4" rx="1" />
                  <line x1="20" y1="12" x2="20" y2="15" />
                </svg>
              </div>
              <span className="service-title">Project Management</span>
            </div>

            {/* Service 4: Erection & Commissioning */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-svg-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M12 2v9" />
                  <path d="M8 5h8" />
                  <circle cx="12" cy="16" r="2" />
                </svg>
              </div>
              <span className="service-title">Erection & Commissioning</span>
            </div>

            {/* Service 5: Supply of Materials */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-svg-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className="service-title">Supply of Materials</span>
            </div>

            {/* Service 6: Operation & Maintenance */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-svg-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="service-title">Operation & Maintenance</span>
            </div>

            {/* Service 7: Monitoring System */}
            <div className="service-icon-card luxury-glass glow-solar">
              <div className="service-svg-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M12 7v4" />
                  <path d="M8 9h8" />
                </svg>
              </div>
              <span className="service-title">Monitoring System</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RSE;
