import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OpeningHours from './OpeningHours/OpeningHours';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading mb-4">Social Media</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/Restagno.pianoforti/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/restagno.pianoforti/" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@restagnopianoforti" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading mb-4">Contatti</h5>
            <ul className="contact-info">
              <li>
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+39011544658">011544658</a>
              </li>
              <li>
                <i className="bi bi-phone me-2"></i>
                <a href="tel:+393405535121">R. Carlo: 3405535121</a>
              </li>
              <li>
                <i className="bi bi-phone me-2"></i>
                <a href="tel:+393475190187">R. Stefano: 3475190187</a>
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:info@restagnopianoforti.com">info@restagnopianoforti.com</a>
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                PEC: ilpergolato@legalmail.it
              </li>
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h5 className="footer-heading mb-4">Sede Espositiva</h5>
            <ul className="contact-info">
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                Via Paolo Sacchi, 2 (interno cortile)<br />10128 Torino
              </li>
            </ul>
            <h5 className="footer-heading mb-4 mt-4">Informazioni Aziendali</h5>
            <ul className="contact-info">
              <li>P.IVA: 10393050017</li>
              <li>REA: TO 112939</li>
              <li>Uff. registro imprese: Torino</li>
              <li>Capitale Sociale: €. 10.000</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <OpeningHours />
          </Col>
        </Row>
        <div className="footer-bottom pt-4 mt-4 border-top">
          <Row>
            <Col md={6} className="text-center text-md-start text-dark">
              <p className="mb-0 text-dark">Restagno 1908 snc di Restagno Carlo Maria e C. – Torino, Via sacchi 2 | P.iva 10393050017</p>
              <p className="mb-0 text-dark">Copyright All Rights Reserved 2025 migliaresematteo@gmail.com</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Link to="/" className="me-3">Home</Link>
              <Link to="/pianoforti">Pianoforti</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
