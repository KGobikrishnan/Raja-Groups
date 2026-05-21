import React from 'react';
import './MobileBottomNav.css';

const MobileBottomNav = ({ currentPage, navigateToPage }) => {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: (active) => (
        <svg className={`nav-svg-icon ${active ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      id: 'solar',
      label: 'Solar',
      icon: (active) => (
        <svg className={`nav-svg-icon ${active ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )
    },
    {
      id: 'motors',
      label: 'Motors',
      icon: (active) => (
        <svg className={`nav-svg-icon ${active ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: 'engineering',
      label: 'Engineering',
      icon: (active) => (
        <svg className={`nav-svg-icon ${active ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About us',
      icon: (active) => (
        <svg className={`nav-svg-icon ${active ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="mobile-bottom-nav-container">
      <div className="mobile-bottom-nav luxury-glass">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              className={`mobile-nav-item ${isActive ? 'active' : ''} active-${tab.id}`}
              onClick={() => navigateToPage(tab.id)}
            >
              <div className="icon-wrapper">
                {tab.icon(isActive)}
                <span className="glow-indicator"></span>
              </div>
              <span className="nav-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
