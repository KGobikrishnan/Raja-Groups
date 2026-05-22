import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', animation = 'fade-up', delay = 0, duration = 800 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once it's visible so it doesn't animate out and in repeatedly
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: '0px 0px -50px 0px' // Slightly before it fully enters viewport
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
