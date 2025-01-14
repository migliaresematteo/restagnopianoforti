import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import image from '../assets/Restagno-Pianoforti.jpg';

const About = () => {
  return (
    <section id="chi-siamo" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h2 className="section-title">Chi Siamo</h2>
              <p className="section-subtitle">Dal 1908, A Torino</p>
              <div className="about-text">
                <p>
                Siamo specializzati nel restauro di pianoforti antichi che riportiamo al loro originario splendore ma anche di pianoforti più moderni che ricondizioniamo a nuovo per renderli in grado di affrontare la loro seconda vita.<br></br><br></br>

                Nel nostro showroom troverai pianoforti a coda, pianoforti verticali (pianoforti a muro) nuovi e usati totalmente revisionati.<br></br><br></br>

                Facciamo anche servizio di revisione pianoforti a casa del cliente, accordatura e perizia del pianoforte in Torino e provincia, Val d’Aosta e Liguria.<br></br><br></br>

                Installiamo sistemi Silent sia su pianoforti a coda e anche su pianoforti verticali.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img 
                  src={image} 
                  alt="Laboratorio Restagno Pianoforti" 
                  className="about-image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
