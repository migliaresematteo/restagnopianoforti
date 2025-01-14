import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FeaturedPianos.css';

const FeaturedPianos = () => {
  const featuredPianos = [
    {
      id: 1,
      name: 'Yamaha C3X',
      image: '/path-to-yamaha-c3x.jpg',
      description: 'Pianoforte a coda professionale, perfetto per sale da concerto e conservatori.',
      price: '€45.000'
    },
    {
      id: 2,
      name: 'Steinway Model B',
      image: '/path-to-steinway-b.jpg',
      description: 'Il "pianoforte da salotto" per eccellenza, suono ricco e potente.',
      price: '€85.000'
    },
    {
      id: 3,
      name: 'Kawai K-500',
      image: '/path-to-kawai-k500.jpg',
      description: 'Pianoforte verticale di alta qualità, ideale per studio e casa.',
      price: '€15.000'
    }
  ];

  return (
    <section id="pianoforti" className="featured-pianos-section">
      <Container>
        <h2 className="section-title text-center">I Nostri Pianoforti</h2>
        <p className="section-subtitle text-center mb-5">
          Selezione dei migliori strumenti disponibili
        </p>
        
        <Row>
          {featuredPianos.map((piano) => (
            <Col key={piano.id} lg={4} md={6} className="mb-4">
              <Card className="piano-card">
                <div className="piano-image-wrapper">
                  <Card.Img variant="top" src={piano.image} className="piano-image" />
                </div>
                <Card.Body>
                  <Card.Title>{piano.name}</Card.Title>
                  <Card.Text>{piano.description}</Card.Text>
                  <div className="piano-price">{piano.price}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Link to="/shop">
            <Button variant="outline-dark" size="lg" className="view-all-btn">
              Vedi tutti i pianoforti
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPianos;
