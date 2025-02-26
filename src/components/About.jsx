import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import CustomButton from './common/CustomButton';

const About = () => {
  return (
    <section id="chi-siamo" className="about-section pb-5 pt-0 mt-0">
      <Container className="w-100">
        <Row className="align-items-center mx-auto">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h2 className="section-title">Chi Siamo</h2>
              <hr className="title-separator" />
              <div className="about-text">
                <p className="mb-4">
                  Siamo specializzati nel restauro di pianoforti antichi che riportiamo al loro originario splendore ma anche di pianoforti più moderni che ricondizioniamo a nuovo per renderli in grado di affrontare la loro seconda vita.
                </p>
                <p className="mb-4">
                  Nel nostro showroom troverai pianoforti a coda, pianoforti verticali (pianoforti a muro) nuovi e usati totalmente revisionati.
                </p>
                <p className="mb-4">
                  Facciamo anche servizio di revisione pianoforti a casa del cliente, accordatura e perizia del pianoforte in Torino e provincia, Val d'Aosta e Liguria.
                </p>
                <p className="mb-4">
                  Installiamo sistemi Silent sia su pianoforti a coda e anche su pianoforti verticali.
                </p>
                <CustomButton link="/biografia" text="Scopri la nostra storia" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img 
                  src="/images/Restagno-Pianoforti.jpg" 
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
