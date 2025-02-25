import React from 'react';
import './BrandLogos.css';
import yamaha from '../assets/yamaha.png';
import steinway from '../assets/s&s.png';
import bechstein from '../assets/bechstein.png';
import kawai from '../assets/kawai.png';

const BrandLogos = () => {
  const logos = [yamaha, steinway, bechstein, kawai];
  // Duplicate logos to ensure smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="brand-logos-section">
      <div className="logos-container">
        <div className="fade-edge fade-left"></div>
        <div className="logos-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Brand Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="fade-edge fade-right"></div>
      </div>
    </section>
  );
};

export default BrandLogos;
