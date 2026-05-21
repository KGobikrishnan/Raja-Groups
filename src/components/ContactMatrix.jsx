import React, { useState } from 'react';
import './ContactMatrix.css';

const ContactMatrix = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sector: 'solar',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', sector: 'solar', details: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-matrix-section">
      <div className="contact-matrix-container">
        
        {/* Left Side: Regional Operations Hub Matrix */}
        <div className="matrix-hubs-column">
          <span className="badge-solar chip mb-4">Operations Matrix</span>
          <h2 className="matrix-title">Regional Trust Hubs</h2>
          <p className="matrix-desc">
            Serving agricultural collectives, industrial manufacturing zones, and residential grids across Tamil Nadu. Mapped directly to our main operational offices.
          </p>

          <div className="hubs-grid">
            <div className="hub-card luxury-glass glow-solar">
              <div className="hub-badge">MAIN BRANCH</div>
              <h4>Cumbum Hub</h4>
              <p className="hub-address">
                1A3-2, Ward 32, Sri Nandagopalasamy Nagar, <br />
                L.F.Road, Cumbum, <br />
                Theni District - 625 516
              </p>
              <div className="hub-tel-list">
                <span className="tel-item">📞 93612 10091</span>
                <span className="tel-item">📞 81224 10091</span>
              </div>
            </div>

            <div className="hub-card luxury-glass glow-cyan">
              <div className="hub-badge secondary">REGISTERED OFFICE</div>
              <h4>Theni Hub</h4>
              <p className="hub-address">
                IA3-2, Ward 31, Sri Nandagopalasamy Nagar, <br />
                L.F.Road, Cumbum, <br />
                Theni District - 625 516
              </p>
              <div className="hub-tel-list">
                <span className="tel-item">📞 81224 10091</span>
                <span className="tel-item">✉️ rajapooja1979@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Portal Form */}
        <div className="matrix-form-column luxury-glass glow-cyan">
          <h3 className="portal-title">Industrial Inquiry Portal</h3>
          <p className="portal-subtitle">Submit your specifications for a custom engineering diagnostic overview.</p>
          
          <form className="diagnostic-form" onSubmit={handleSubmit}>
            <div className="form-field-group">
              <label>Name / Corporate Entity</label>
              <input 
                type="text" 
                placeholder="e.g., Marichamy Farms" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-field-row">
              <div className="form-field-group">
                <label>Contact Phone</label>
                <input 
                  type="tel" 
                  placeholder="e.g., +91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-field-group">
                <label>Corporate Email</label>
                <input 
                  type="email" 
                  placeholder="e.g., service@mew.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="form-field-group">
              <label>Integration Sector</label>
              <select 
                value={formData.sector}
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
              >
                <option value="solar">Raja Solar Energy (Power Grids & Lighting)</option>
                <option value="motors">Raja Motors (Industrial Drives & KSB Pumps)</option>
                <option value="marichamy">Marichamy Engineering (Sales & Pipelines)</option>
                <option value="ev-infra">Fins EV Charging & Smart Telemetry</option>
              </select>
            </div>

            <div className="form-field-group">
              <label>Engineering Requirements Summary</label>
              <textarea 
                rows="4" 
                placeholder="Exhaustively list your power demand, pump head requirements, or site specifications..." 
                required
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="portal-submit-btn">
              {submitted ? 'Transmission Secure ✓' : 'Transmit Inquiry'}
            </button>
          </form>
        </div>

      </div>

      {/* Industrial Footer Section */}
      <div className="industrial-footer">
        <div className="footer-meta">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} RAJA SOLAR ENERGY & RAJA MOTORS. All rights reserved.</p>
          <div className="footer-sub-links">
            <span>Proprietor: M. RAJA</span>
            <span>•</span>
            <span>Established 2007</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMatrix;
