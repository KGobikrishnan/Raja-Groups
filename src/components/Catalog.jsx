import React, { useState } from 'react';
import './Catalog.css';

const Catalog = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'solar-lighting',
      title: 'Solar Lighting Systems',
      subtitle: 'Premium Photovoltaic Luminaires & Bollards',
      items: [
        {
          name: 'Solar Bollards',
          specs: [
            { label: 'Luminous Flux', val: '800 Lumens / High Output LED' },
            { label: 'Battery Unit', val: '6.4V 6000mAh LiFePO4 Battery' },
            { label: 'Chassis Build', val: 'Anodized Extruded Aluminum Frame' },
            { label: 'Ingress Class', val: 'IP65 Extreme Weather Certification' }
          ]
        },
        {
          name: 'Solar Gate Lights',
          specs: [
            { label: 'Lumens Output', val: '1200 Lumens / 360 Degree Array' },
            { label: 'Solar Collector', val: 'High efficiency Monocrystalline 10W Panel' },
            { label: 'Control Systems', val: 'Automatic dusk-to-dawn + RF remote override' },
            { label: 'Ingress Class', val: 'IP66 Industrial Proof' }
          ]
        },
        {
          name: 'Solar Flame LED Lights',
          specs: [
            { label: 'Visual Effect', val: '96 LED dynamic realistic flickering flame' },
            { label: 'Collector Tech', val: 'Polycrystalline 5V 1.2W top array' },
            { label: 'Battery Unit', val: '3.7V 2200mAh Lithium-ion core' },
            { label: 'Operational Duration', val: 'Up to 12 Hours on complete charge' }
          ]
        },
        {
          name: 'Solar Street Lights',
          specs: [
            { label: 'Luminous Flux', val: '4000 Lumens / Lumileds SMD Chips' },
            { label: 'Solar Collector', val: '40W Mono PERC Panel integrated' },
            { label: 'Battery Unit', val: '12.8V 24AH High capacity LifePO4' },
            { label: 'Motion Intelligence', val: 'Microwave Radar Sensor integrated' }
          ]
        },
        {
          name: 'Solar Interaction Wall Lamps',
          specs: [
            { label: 'PIR Detection', val: '120-degree motion angle / 8 meter reach' },
            { label: 'Battery Unit', val: '3.7V 1200mAh Lithium cell' },
            { label: 'Luminous Flux', val: '500 Lumens output' },
            { label: 'Material Core', val: 'Impact-resistant polycarbonate' }
          ]
        },
        {
          name: 'Solar Sensor Lights',
          specs: [
            { label: 'LED Layout', val: 'Dual-headed adjustable array / 20W' },
            { label: 'PIR Detection', val: '360 degree motion coverage' },
            { label: 'Solar Collector', val: '6V 3W remote monocrystalline module' },
            { label: 'Ingress Class', val: 'IP65 Jet-spray waterproof' }
          ]
        }
      ]
    },
    {
      id: 'core-drives',
      title: 'Core Energy Drives',
      subtitle: 'Inverters, Converters & Generation Units',
      items: [
        {
          name: 'INVT Solar Inverters',
          specs: [
            { label: 'Power Scope', val: '1.5kW to 45kW Agricultural Drives' },
            { label: 'MPPT Tracking', val: '99.9% dynamic efficiency optimization' },
            { label: 'Protection System', val: 'Ingress class protection, dry run prevention' },
            { label: 'Telemetry Link', val: 'RS485 modbus interface standard' }
          ]
        },
        {
          name: 'Mitsubishi Drives',
          specs: [
            { label: 'Drive Architecture', val: 'FR-A800 series high-grade VFD control' },
            { label: 'Operating Temp', val: '-10°C to +50°C heavy operational environment' },
            { label: 'Motor Handling', val: 'Sensorless vector regulation algorithms' },
            { label: 'Enclosure Rating', val: 'IP20 default, custom IP54 cabinet setups' }
          ]
        },
        {
          name: 'Solar Water Pumps',
          specs: [
            { label: 'Displacement', val: '3HP / 5HP / 7.5HP Submersible models' },
            { label: 'Head Range', val: 'Max lift head up to 180 meters' },
            { label: 'Impeller Setup', val: 'Stainless steel grade 304 laser cut' },
            { label: 'Motor Design', val: 'Permanent Magnet Brushless DC (PMBLDC)' }
          ]
        },
        {
          name: 'Mono PERC Solar Panels',
          specs: [
            { label: 'Peak Capacity', val: '450W / 550W Dynamic rating panels' },
            { label: 'Panel Efficiency', val: 'Up to 21.3% conversion module rate' },
            { label: 'Load Mechanics', val: 'Wind load 2400Pa / Snow load 5400Pa' },
            { label: 'Degradation Path', val: '25-Year performance warranty' }
          ]
        }
      ]
    },
    {
      id: 'pump-division',
      title: 'Pump Division (Marichamy)',
      subtitle: 'Heavy Submersibles & Control Panel Infrastructure',
      items: [
        {
          name: 'KSB Submersible Pumps',
          specs: [
            { label: 'Flow Volume', val: 'Up to 480 cubic meters per hour capability' },
            { label: 'Shell Build', val: 'Cast iron grade EN-GJL-250 corrosion proof' },
            { label: 'Shaft Seal', val: 'Double mechanical carbon-ceramic assembly' },
            { label: 'Power Unit', val: 'Rewindable oil-filled/water-filled motors' }
          ]
        },
        {
          name: 'MEW Sales & Service Ecosystem',
          specs: [
            { label: 'Diagnostic Lab', val: 'State-of-the-art dynamic winding and motor testing' },
            { label: 'Turnaround Time', val: '24-hour certified field engineer emergency dispatch' },
            { label: 'Winding Spec', val: 'Super enameled dual-layer copper wiring core' },
            { label: 'Parts Support', val: 'Genuine KSB spares inventory maintained 24/7' }
          ]
        },
        {
          name: 'Ashirvad Pipes & Fittings',
          specs: [
            { label: 'Pipeline Rating', val: 'Schedule 40 / 80 industrial column systems' },
            { label: 'Lock Assembly', val: 'Patented coupler with EPDM ring support' },
            { label: 'Pressure Limit', val: 'Safe operational capacity up to 40 kg/cm²' },
            { label: 'Lifespan Rating', val: '50-Year chemical decay resistance guarantee' }
          ]
        },
        {
          name: 'MEECO & L&T Panels',
          specs: [
            { label: 'Enclosure Rating', val: 'IP55 Double-door powder coated steel framework' },
            { label: 'Contactor System', val: 'Heavy L&T MNX/ML series contactor assembly' },
            { label: 'Protection Gear', val: 'Digital overcurrent, dry run, and phase delay protection' },
            { label: 'Indicators', val: 'LED Phase volt meters, load amps tracker' }
          ]
        }
      ]
    },
    {
      id: 'smart-infra',
      title: 'Smart Infrastructure',
      subtitle: 'Fins EV Charging Systems & Remote Diagnostics',
      items: [
        {
          name: 'Fins EV Charger Units',
          specs: [
            { label: 'Charging Output', val: '7.2kW AC Single Phase / 22kW AC Three Phase' },
            { label: 'Safety Protocol', val: 'Residual Current Device (Type A 30mA + 6mA DC)' },
            { label: 'Auth Interface', val: 'RFID dynamic authentication / Smart App override' },
            { label: 'Ingress Class', val: 'IP54 enclosure rating for outdoor mounting' }
          ]
        },
        {
          name: 'Solar SIM CCTV Cameras',
          specs: [
            { label: 'Image Resolution', val: '4MP Quad-HD / Advanced Color Night Vision' },
            { label: 'Solar Collector', val: 'Remote bracket 15W high conversion panel' },
            { label: 'Network standard', val: '4G LTE / SIM Carrier independent telemetry' },
            { label: 'Local Storage', val: 'MicroSD slot up to 256GB / Encrypted cloud loop' }
          ]
        }
      ]
    }
  ];

  return (
    <section id="catalog" className="catalog-section">
      <div className="catalog-header">
        <span className="badge-solar chip">Technical Dossier</span>
        <h2 className="catalog-main-title">Specification Database</h2>
        <p className="catalog-subtitle">
          Examine the precise engineering metrics of our sustainable lighting, high-power industrial drives, and pumping components.
        </p>
      </div>

      <div className="catalog-tabs-container">
        {/* Tab Selection Header */}
        <div className="tabs-selection-row luxury-glass">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              className={`tab-selector-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="tab-display-body">
          <div className="tab-header-meta">
            <h3>{tabs[activeTab].title}</h3>
            <p>{tabs[activeTab].subtitle}</p>
          </div>

          <div className="catalog-specs-grid">
            {tabs[activeTab].items.map((item, itemIdx) => (
              <div key={itemIdx} className="catalog-spec-item luxury-glass">
                <div className="spec-item-badge"></div>
                <h4>{item.name}</h4>
                <div className="technical-list">
                  {item.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="tech-spec-row">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
