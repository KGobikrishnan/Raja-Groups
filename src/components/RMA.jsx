import React from 'react';
import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import './RMA.css';

const RMA = () => {
  return (
    <section id="rma" className="rma-snap-section">
      <img src="/motors_bg_1779278176265.png" alt="Motors BG" className="section-bg-image" />
      
      <div className="section-content-wrapper">
        
        <div className="section-heading-block">
          <div className="brand-header-meta">
            <img src="/Raja%20motors%20Logo.jpeg" alt="RMA Logo" className="section-header-logo" />
            <span className="chip chip-motors"><Icon name="droplet" size={14} style={{marginRight: '6px'}} /> Water Solutions Hub</span>
            <span className="chip chip-motors" style={{background: 'rgba(56, 189, 248, 0.2)', border: '1px solid rgba(56, 189, 248, 0.4)'}}>🌟 Authorised Dealer of KSB Pumps</span>
          </div>
          <h2>Raja Motors & SS Pumps</h2>
          <p>Authorized KSB dealer providing premium water motors, submersible pumps, and complete fluid management systems for all applications.</p>
        </div>

        <div className="rma-expanded-grid">
          
          {/* Left Split: Pump Specifications */}
          <div className="specs-details-column">
            
            {/* Spec Card B1: Submersible & Borewell Pumps */}
            <ScrollReveal delay={0} className="bento-card luxury-glass glow-cyan">
              <div className="bento-card-bg-image" style={{ backgroundImage: 'url(https://oswalpumps.com/images/product/stainless-v4-1.jpg)' }}></div>
              <div className="bento-card-content">
                <div className="ev-flex-header-row">
                  <div className="ev-heading-box">
                    <div className="bento-card-icon"><Icon name="wrench" size={32} /></div>
                    <h3>Submersible & Borewell Pumps</h3>
                  </div>
                  <span className="ev-hybrid-pill">KSB CERTIFIED</span>
                </div>
                <p className="special-card-desc">
                  High-performance S.G. / C.I. / PP submersible pumps built for deep borewell operations, openwell extraction, and continuous-duty agricultural water supply.
                </p>
                <div className="bento-specs">
                  <div className="spec-item">
                    <span>S.G./C.I./PP Submersible</span>
                    <span>Openwell & monoblock pumps for agricultural and residential deep extraction</span>
                  </div>
                  <div className="spec-item">
                    <span>Vertical In-Line Pumps</span>
                    <span>High-pressure vertical turbine systems for continuous irrigation supply</span>
                  </div>
                  <div className="spec-item">
                    <span>Borewell Compressors</span>
                    <span>Agricultural borewell compressor pumps for deep-well water extraction</span>
                  </div>
                  <div className="spec-item">
                    <span>Solar Powered Pumps</span>
                    <span>Fluid Power Series — solar PMBLDC pumping systems with dry-run protection</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Spec Card B2: Industrial & Domestic Pumps */}
            <ScrollReveal delay={150} className="bento-card luxury-glass glow-cyan">
              <div className="bento-card-bg-image" style={{ backgroundImage: 'url(https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/04/Mechanical_Engineers_Work-3.jpg)' }}></div>
              <div className="bento-card-content">
                <div className="bento-card-icon"><Icon name="factory" size={32} /></div>
                <h3>Industrial & Domestic Water Systems</h3>
                <p>Complete range of horizontal boosters, drainage pumps, sewage handling units, and drinking water solutions for homes, factories, and municipal projects.</p>
                <div className="bento-specs">
                  <div className="spec-item">
                    <span>Horizontal Booster Pumps</span>
                    <span>High-flow multi-stage boosters for commercial and residential pressure systems</span>
                  </div>
                  <div className="spec-item">
                    <span>Drinking Water Pumps</span>
                    <span>Food-grade stainless steel pumps for safe residential water distribution</span>
                  </div>
                  <div className="spec-item">
                    <span>Sewage & Slurry Pumps</span>
                    <span>Household sewage/slurry and domestic waste water/soiled water handling</span>
                  </div>
                  <div className="spec-item">
                    <span>Industrial Drainage</span>
                    <span>Heavy-duty industrial drainage and waste water treatment pump systems</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Right Split: Brand Image & Motors Section */}
          <ScrollReveal delay={300} className="brand-visual-column luxury-glass glow-cyan">
            <div className="visual-image-wrapper">
              <img src="https://oswalpumps.com/images/product/stainless-v4-1.jpg" alt="KSB Submersible Pump Systems" className="visual-showcase-image" />
              <div className="visual-overlay-gradient"></div>
              <div className="visual-badge cyan-badge">KSB AUTHORIZED DEALER</div>
            </div>
            <div className="visual-meta-box">
              <h4>KSB — A Global Leader in Pumps Since 1871</h4>
              <p>
                As an authorized KSB dealer, Raja Motors & SS Pumps delivers premium German-engineered pump systems with complete sales, service, and spare parts support from our Cumbum headquarters.
              </p>
              <div className="visual-stats-row">
                <div className="v-stat">
                  <span>Experience</span>
                  <span>13+ Years</span>
                </div>
                <div className="v-stat">
                  <span>Service</span>
                  <span>Sales · Spares</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Electric Motors & Accessories Section */}
        <div className="motors-accessories-section">
          <div className="section-heading-block text-center">
            <span className="chip chip-motors"><Icon name="bolt" size={14} style={{marginRight: '6px'}} /> MOTORS & ACCESSORIES</span>
            <h2>Agri & Industrial Electric Motors</h2>
            <p className="motors-meta-para">Premium 100% pure copper wound agricultural and industrial electric motors with complete winding, repair, and maintenance services.</p>
          </div>

          <div className="motors-products-grid">

            {/* Product Categories */}
            <ScrollReveal delay={0} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="droplet" size={28} /></div>
              <h3>S.G./C.I./PP Submersible</h3>
              <p>Openwell & Monoblock Pumps</p>
            </ScrollReveal>

            <ScrollReveal delay={50} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="refreshCw" size={28} /></div>
              <h3>Vertical In-Line Pumps</h3>
              <p>High-pressure turbine systems</p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="arrowUp" size={28} /></div>
              <h3>Horizontal Boosters</h3>
              <p>Multi-stage pressure boosters</p>
            </ScrollReveal>

            <ScrollReveal delay={150} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="faucet" size={28} /></div>
              <h3>Drinking Water Pumps</h3>
              <p>Food-grade stainless steel</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="home" size={28} /></div>
              <h3>Domestic Waste Water</h3>
              <p>Soiled water handling pumps</p>
            </ScrollReveal>

            <ScrollReveal delay={250} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="building" size={28} /></div>
              <h3>Industrial Drainage</h3>
              <p>Heavy-duty waste water pumps</p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="sun" size={28} /></div>
              <h3>Solar Powered Pumps</h3>
              <p>Fluid Power Series</p>
            </ScrollReveal>

            <ScrollReveal delay={350} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="waves" size={28} /></div>
              <h3>Sewage & Slurry Pumps</h3>
              <p>Household sewage handling</p>
            </ScrollReveal>

            <ScrollReveal delay={400} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="pickaxe" size={28} /></div>
              <h3>Borewell Compressors</h3>
              <p>Agricultural deep-well extraction</p>
            </ScrollReveal>

            <ScrollReveal delay={450} className="motor-product-card luxury-glass glow-cyan">
              <div className="motor-product-icon"><Icon name="gear" size={28} /></div>
              <h3>Electric Motors</h3>
              <p>Agri & industrial copper wound</p>
            </ScrollReveal>

          </div>
        </div>

        {/* Borewell Scanning Camera Highlight */}
        <ScrollReveal className="borewell-camera-highlight luxury-glass glow-cyan">
          <div className="borewell-camera-image-col">
            <div className="borewell-img-wrapper">
              <img src="https://5.imimg.com/data5/ANDROID/Default/2024/1/382097928/PQ/FI/OJ/4369384/product-jpeg.jpeg" alt="Borewell Scanning Camera" className="borewell-camera-img" />
              <div className="visual-overlay-gradient"></div>
              <div className="borewell-featured-tag">★ FEATURED SERVICE</div>
            </div>
          </div>
          <div className="borewell-camera-info-col">
            <span className="chip chip-motors"><Icon name="camera" size={14} style={{marginRight: '6px'}} /> ADVANCED DIAGNOSTICS</span>
            <h2>Borewell Scanning Camera</h2>
            <p>State-of-the-art underwater borewell inspection camera system for real-time visual diagnostics of deep bore wells. Our high-resolution submersible camera helps identify blockages, casing damage, pipe misalignments, and water level analysis — enabling precise repair decisions before costly interventions.</p>
            <div className="borewell-features-row">
              <div className="borewell-feature-item">
                <span className="bf-icon"><Icon name="search" size={22} /></span>
                <div>
                  <strong>Deep Bore Inspection</strong>
                  <span>Up to 1200ft depth scanning with HD live video feed</span>
                </div>
              </div>
              <div className="borewell-feature-item">
                <span className="bf-icon"><Icon name="shield" size={22} /></span>
                <div>
                  <strong>Blockage Detection</strong>
                  <span>Identify pipe cracks, sediment buildup, and casing failures</span>
                </div>
              </div>
              <div className="borewell-feature-item">
                <span className="bf-icon"><Icon name="droplet" size={22} /></span>
                <div>
                  <strong>Water Level Analysis</strong>
                  <span>Precise water table and yield measurement before pump installation</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Brand Partners Strip */}
        <div className="motors-brand-partners">
          <div className="section-heading-block text-center">
            <span className="chip chip-motors"><Icon name="handshake" size={14} style={{marginRight: '6px'}} /> AUTHORIZED PARTNERS</span>
            <h2>Our Trusted Brand Network</h2>
            <p className="motors-meta-para">Partnered with global tier-1 pump, piping, and panel manufacturers to deliver uncompromised quality and certified warranty support.</p>
          </div>

          <div className="motors-partners-grid">
            <ScrollReveal delay={0} className="motor-partner-tile luxury-glass glow-cyan">
              <img src="https://images.seeklogo.com/logo-png/30/2/ashirvad-logo-png_seeklogo-305072.png" alt="Ashirvad Pipes" className="partner-logo-img" />
              <span>Ashirvad Pipe</span>
            </ScrollReveal>
            <ScrollReveal delay={100} className="motor-partner-tile luxury-glass glow-cyan">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/KSB_SVG.svg/3840px-KSB_SVG.svg.png" alt="KSB Pumps" className="partner-logo-img" />
              <span>KSB Cable</span>
            </ScrollReveal>
            <ScrollReveal delay={200} className="motor-partner-tile luxury-glass glow-cyan">
              <img src="https://meeco.com/meeco/wp-content/themes/mecco/images/logo.png" alt="Meeco Panel" className="partner-logo-img" />
              <span>Meeco Panel</span>
            </ScrollReveal>
            <ScrollReveal delay={300} className="motor-partner-tile luxury-glass glow-cyan">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" alt="L&T Panel" className="partner-logo-img" />
              <span>L&T Panel</span>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RMA;
