import React, { useState, useRef, useEffect } from 'react';

const TiltEffect = ({ children, className = "", tiltMaxAngleX = 20, tiltMaxAngleY = 20, scale = 1.05 }) => {
  const [tiltStyle, setTiltStyle] = useState({});
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -tiltMaxAngleX;
    const rotateY = ((x - centerX) / centerX) * tiltMaxAngleY;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <div
      ref={tiltRef}
      className={className}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltEffect;
