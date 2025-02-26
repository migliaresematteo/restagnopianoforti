import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
  const logos = [
    '/images/brands/yamaha.png',
    '/images/brands/steinway.png',
    '/images/brands/bechstein.png',
    '/images/brands/kawai.png'
  ];
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
