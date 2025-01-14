import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from './Navbar';
import backgroundImg from '../assets/restagno-pianoforti-in-vendita.jpg';
import './Header.css';

const Header = ({ 
  title = "Restagno Pianoforti", 
  subtitle = "Cav. Vincenzo Restagno dal 1908", 
  ctaText = "Scopri di più",
  onCtaClick = () => {},
}) => {
  return (
    <>
      <NavigationBar />
      <div className="header-wrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="header-overlay">
          <Container className="header-content">
            <Row className="text-center">
              <Col>
                <h1 className="header-title">{title}</h1>
                <p className="header-subtitle">{subtitle}</p>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className="header-cta"
                  onClick={onCtaClick}
                >
                  {ctaText}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;