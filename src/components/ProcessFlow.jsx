import React, { useEffect, useRef } from 'react';
import './ProcessFlow.css';

const ProcessFlow = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.15 }
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

  const phases = [
    {
      num: '01',
      title: 'Design & Engineering',
      desc: 'High-fidelity drafting, load calculation, solar angle planning, and hydraulic flow calculation using precision industrial models.',
      icon: '📐',
      glow: 'glow-solar'
    },
    {
      num: '02',
      title: 'Procurement & Materials',
      desc: 'Strategic component selection featuring tier-1 Kenbrook solar modules, Fins chargers, KSB German water pumps, and heavy L&T panel gear.',
      icon: '⚙️',
      glow: 'glow-cyan'
    },
    {
      num: '03',
      title: 'Erection & Commissioning',
      desc: 'Expert field engineering, safe ground mount/rooftop setup, grid linking, dynamic pump pressure alignment, and strict telemetry diagnostics.',
      icon: '⚡',
      glow: 'glow-emerald'
    },
    {
      num: '04',
      title: 'Operation & Maintenance',
      desc: 'Real-time telemetry oversight, smart predictive panel diagnostics, physical module scaling & cleaning, and certified emergency breakdown mechanics.',
      icon: '🛡️',
      glow: 'glow-solar'
    }
  ];

  return (
    <section id="process" className="process-flow-section" ref={sectionRef}>
      <div className="process-header">
        <span className="badge-emerald chip">Lifecycle Mechanics</span>
        <h2 className="process-main-title">Full Engineering Lifecycle</h2>
        <p className="process-subtitle">
          How Raja Solar Energy and Raja Motors manage massive infrastructure projects from early conception to decades of operational security.
        </p>
      </div>

      <div className="process-timeline-container">
        <div className="structural-pipe-line">
          <div className="flow-energy-particle"></div>
        </div>
        
        <div className="phases-grid">
          {phases.map((phase, idx) => (
            <div key={idx} className={`phase-card luxury-glass ${phase.glow}`}>
              <div className="phase-indicator-row">
                <div className="phase-badge">{phase.num}</div>
                <span className="phase-card-icon">{phase.icon}</span>
              </div>
              <h3 className="phase-card-title">{phase.title}</h3>
              <p className="phase-card-desc">{phase.desc}</p>
              <div className="structural-corner-nodes">
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
