import React from 'react';
import Icon from './Icon';
import './MEW.css';

const MEW = () => {
  return (
    <section id="mew" className="mew-snap-section">
      <img src="/marichamy_bg_1779278160700.png" alt="Marichamy BG" className="section-bg-image" />
      
      <div className="section-content-wrapper view-fade">
        
        <div className="section-heading-block">
          <div className="brand-header-meta">
            <img src="/Marichamy%20logo.jpeg" alt="MEW Logo" className="section-header-logo" />
            <span className="chip chip-mew"><Icon name="wrench" size={14} style={{marginRight: '6px'}} /> Service & Repair Hub</span>
            <span className="chip chip-mew" style={{background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.4)'}}>🌟 Authorised Service center of KSB Pumps</span>
          </div>
          <h2>Marichamy Engineering Works</h2>
          <p>Delivering expert water motor and pump repair, complete rewinding, and field maintenance services with authorized diagnostic support.</p>
        </div>

        <div className="mew-expanded-grid">
          
          {/* Left Split: Service Specs */}
          <div className="specs-details-column">
            
            {/* Spec Card C1: Motor Rewinding & Repair */}
            <div className="bento-card luxury-glass glow-emerald">
              <div className="bento-card-bg-image" style={{ backgroundImage: 'url(https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/04/Mechanical_Engineers_Work-3.jpg)' }}></div>
              <div className="bento-card-content">
                <div className="bento-card-icon"><Icon name="bolt" size={32} /></div>
                <h3>Motor Rewinding & Overhauling</h3>
                <p>Complete motor rewinding, bearing replacement, and overhauling services for submersible, monoblock, and industrial electric motors of all capacities.</p>
                <div className="bento-specs">
                  <div className="spec-item">
                    <span>Submersible Motor Rewinding</span>
                    <span>Full copper rewinding for 1HP to 25HP submersible motors with dynamic balancing</span>
                  </div>
                  <div className="spec-item">
                    <span>Monoblock Motor Repair</span>
                    <span>Stator & rotor rewinding, bearing press-fit, and insulation varnishing</span>
                  </div>
                  <div className="spec-item">
                    <span>Industrial Motor Service</span>
                    <span>3-phase induction motor overhauling, shaft alignment, and vibration testing</span>
                  </div>
                  <div className="spec-item">
                    <span>Winding Quality Test</span>
                    <span>Megger insulation resistance testing and full-load current diagnostic reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Card C2: Pump Repair & Maintenance */}
            <div className="bento-card luxury-glass glow-emerald">
              <div className="bento-card-bg-image" style={{ backgroundImage: 'url(https://oswalpumps.com/images/product/stainless-v4-1.jpg)' }}></div>
              <div className="bento-card-content">
                <div className="bento-card-icon"><Icon name="wrench" size={32} /></div>
                <h3>Pump Repair & Field Maintenance</h3>
                <p>On-site and workshop pump repair services covering impeller replacement, mechanical seal fitting, and complete pump overhauling for agricultural and industrial applications.</p>
                <div className="bento-specs">
                  <div className="spec-item">
                    <span>Impeller Replacement</span>
                    <span>Bronze, stainless steel, and cast iron impeller fitting for all pump models</span>
                  </div>
                  <div className="spec-item">
                    <span>Mechanical Seal Service</span>
                    <span>Carbon-silicon dual face seal installation preventing internal fluid leaks</span>
                  </div>
                  <div className="spec-item">
                    <span>Borewell Pump Pulling</span>
                    <span>Deep borewell pump extraction, servicing, and reinstallation up to 1200ft</span>
                  </div>
                  <div className="spec-item">
                    <span>Annual Maintenance</span>
                    <span>Preventive maintenance contracts with scheduled inspection and greasing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Split: Visual Column */}
          <div className="brand-visual-column luxury-glass glow-emerald">
            <div className="visual-image-wrapper">
              <img src="/marichamy_bg_1779278160700.png" alt="MEW Pump Repair Workshop" className="visual-showcase-image" />
              <div className="visual-overlay-gradient"></div>
              <div className="visual-badge emerald-badge">MEW SERVICE CENTER</div>
            </div>
            <div className="visual-meta-box">
              <h4>Authorized Pump Service Workshop</h4>
              <p>
                Fully equipped service workshop with precision winding machines, dynamic balancing units, and diagnostic test beds for comprehensive motor and pump servicing across Theni district.
              </p>
              <div className="visual-stats-row">
                <div className="v-stat">
                  <span>Since</span>
                  <span>2007</span>
                </div>
                <div className="v-stat">
                  <span>Depth Capacity</span>
                  <span>Up to 1200 ft</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Our Repair & Service Capabilities */}
        <div className="mew-services-section">
          <div className="section-heading-block text-center">
            <span className="chip chip-mew"><Icon name="tool" size={14} style={{marginRight: '6px'}} /> FULL-SPECTRUM SERVICES</span>
            <h2>Our Repair & Service Capabilities</h2>
            <p className="mew-meta-para">From minor pump servicing to complete motor overhauling — we deliver end-to-end water system repair solutions with genuine spare parts and certified technicians.</p>
          </div>

          <div className="mew-services-grid">
            
            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="plug" size={28} /></div>
              <h3>Motor Rewinding</h3>
              <p>Complete copper rewinding for submersible and surface motors</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="nut" size={28} /></div>
              <h3>Bearing Replacement</h3>
              <p>Precision bearing press-fit and shaft alignment services</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="droplet" size={28} /></div>
              <h3>Pump Overhauling</h3>
              <p>Complete pump disassembly, cleaning, and reassembly</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="wrench" size={28} /></div>
              <h3>Impeller Fitting</h3>
              <p>Sand-fighter and standard impeller replacement</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="clipboard" size={28} /></div>
              <h3>Diagnostic Testing</h3>
              <p>Megger test, insulation check, and full-load reports</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="building" size={28} /></div>
              <h3>Field Installation</h3>
              <p>On-site pump installation and pipeline commissioning</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="shield" size={28} /></div>
              <h3>Seal Replacement</h3>
              <p>Mechanical seal fitting and leak-proof assembly</p>
            </div>

            <div className="mew-service-card luxury-glass glow-emerald">
              <div className="mew-service-icon"><Icon name="calendar" size={28} /></div>
              <h3>AMC Contracts</h3>
              <p>Annual maintenance with scheduled preventive service</p>
            </div>

          </div>
        </div>

        {/* Pipeline & Panel Board Services */}
        <div className="mew-pipeline-section">
          <div className="section-heading-block text-center">
            <span className="chip chip-mew"><Icon name="link" size={14} style={{marginRight: '6px'}} /> INFRASTRUCTURE SUPPORT</span>
            <h2>Pipeline & Control Panel Services</h2>
            <p className="mew-meta-para">Expert pipeline installation, L&T/MEECO panel board wiring, and complete borewell column pipe assembly with Ashirvad Schedule 80 high-tensile columns.</p>
          </div>

          <div className="mew-pipeline-grid">

            <div className="mew-pipeline-card luxury-glass glow-emerald">
              <div className="mew-pipeline-header">
                <span className="mew-pipeline-icon"><Icon name="link" size={24} /></span>
                <h3>Ashirvad Column Pipes</h3>
              </div>
              <p>Schedule 80 high-tensile column PVC pipes with patented safety lock rings for deep borewell installations up to 1200ft depth.</p>
            </div>

            <div className="mew-pipeline-card luxury-glass glow-emerald">
              <div className="mew-pipeline-header">
                <span className="mew-pipeline-icon"><Icon name="gear" size={24} /></span>
                <h3>EPDM Joint Rings</h3>
              </div>
              <p>Vibration-absorbing leak-proof dynamic couplings rated up to 40 kg/cm² working pressure for zero-leak installations.</p>
            </div>

            <div className="mew-pipeline-card luxury-glass glow-emerald">
              <div className="mew-pipeline-header">
                <span className="mew-pipeline-icon"><Icon name="sliders" size={24} /></span>
                <h3>L&T MNX Switchgear</h3>
              </div>
              <p>Heavy double-door IP55 cabinets with ML/MNX dynamic overload protection switchgears for motor safety.</p>
            </div>

            <div className="mew-pipeline-card luxury-glass glow-emerald">
              <div className="mew-pipeline-header">
                <span className="mew-pipeline-icon"><Icon name="monitor" size={24} /></span>
                <h3>MEECO Smart Panels</h3>
              </div>
              <p>Automated dry-run sensor loops, cyclic scheduling relays, and dynamic voltage monitoring screens.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MEW;
