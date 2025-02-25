import React from 'react';
import Header from '../components/Header';
import BrandLogos from '../components/BrandLogos';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedPianos from '../components/FeaturedPianos';
import SEO from '../components/common/SEO';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Restagno Pianoforti - Vendita e Restauro Pianoforti a Torino dal 1908"
        description="Restagno Pianoforti, storica azienda torinese specializzata nella vendita, restauro e accordatura di pianoforti. Oltre 100 anni di esperienza e professionalità."
        keywords="pianoforti torino, vendita pianoforti, restauro pianoforti, accordatura pianoforti, pianoforti usati torino, pianoforti nuovi torino, Restagno pianoforti"
        url="/"
      />
      <Header 
        title="Restagno Pianoforti" 
        subtitle="Cav. Vincenzo Restagno dal 1908" 
        ctaText="Vedi i nostri pianoforti" 
        onCtaClick={() => navigate("/Pianoforti")}
      />
      <BrandLogos />
      <About />
      <Services />
      <FeaturedPianos />
    </>
  );
};

export default Home;
