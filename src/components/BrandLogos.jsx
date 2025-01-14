import React from 'react';
import yamahaLogo from '../assets/yamaha.png';
import steinwayLogo from '../assets/s&s.png';
import kawaiLogo from '../assets/kawai.png';
import bosendorferLogo from '../assets/bose.png';
import fazioliLogo from '../assets/fazioli.png';
import bechsteinLogo from '../assets/bechstein.png';
import './BrandLogos.css';

const BrandLogos = () => {
  const brands = [
    { name: 'Yamaha', logo: yamahaLogo },
    { name: 'Steinway & Sons', logo: steinwayLogo },
    { name: 'Kawai', logo: kawaiLogo },
    { name: 'Bechstein', logo: bechsteinLogo },
    { name: 'Fazioli', logo: fazioliLogo },

  ];

  // Create three sets of logos for seamless scrolling
  const scrollContent = [...brands, ...brands, ...brands];

  return (
    <section className="brand-logos-section">
      <div className="logos-container">
        <div className="logos-track">
          <div className="logos-scroll">
            {scrollContent.map((brand, index) => (
              <div key={`brand-${index}`} className="logo-item">
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
