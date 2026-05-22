import React, { useMemo } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const dots = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      // Vary sizes between 8px and 40px for depth
      const size = Math.random() * 32 + 8; 
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      // Randomize animation timings so they don't move together
      const animationDuration = Math.random() * 20 + 20; // 20s to 40s
      const animationDelay = Math.random() * 20 * -1; // Start at different points in animation
      
      // Use theme accent colors with very low opacity
      const colors = [
        'rgba(217, 119, 6, 0.2)',   // Solar Amber
        'rgba(2, 132, 199, 0.15)',  // Motors Cyan
        'rgba(5, 150, 105, 0.15)',  // MEW Emerald
        'rgba(148, 163, 184, 0.2)'  // Slate
      ];
      const bg = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          background: bg,
          boxShadow: `0 4px 15px ${bg}`,
          backdropFilter: 'blur(2px)'
        }
      };
    });
  }, []);

  return (
    <div className="animated-bg-container">
      {dots.map(dot => (
        <div key={dot.id} className="floating-dot" style={dot.style}></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
