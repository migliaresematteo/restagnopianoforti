import React from 'react';
import { Container } from 'react-bootstrap';
import './Map.css';

const Map = () => {
  return (
    <section className="map-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">Dove Trovarci</h2>
          <div className="elegant-hr mb-4">
            <div className="hr-line"></div>
            <div className="hr-icon">♪</div>
            <div className="hr-line"></div>
          </div>
          <p className="text-muted">
            Vieni a trovarci nel nostro showroom nel cuore di Torino
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.1263079733817!2d7.672458890604202!3d45.06294878553764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6baecbcaab%3A0x3a84ae13102452e7!2sRestagno%20Pianoforti!5e0!3m2!1sit!2sit!4v1737130933041!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Restagno Pianoforti"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Map;
