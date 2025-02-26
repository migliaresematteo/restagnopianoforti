import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getRandomFeaturedPianos } from '../data/pianos';
import PianoCard from './PianoCard';

const FeaturedPianos = ({ pianos }) => {
  const displayPianos = pianos || getRandomFeaturedPianos(3);

  const adaptPianoData = (piano) => ({
    ...piano,
    name: piano.model,
    image: piano.images[0],
    year: piano.productionDate,
    length: piano.dimensions.length,
    height: piano.dimensions.height,
  });

  return (
    <section className="featured-pianos py-5">
      <Container>
        {!pianos && (
          <div className="featured-pianos-header text-center mb-5">
            <h2 className="section-title mb-3">Pianoforti in Evidenza</h2>
            <div className="elegant-hr mb-4">
              <div className="hr-line"></div>
              <div className="hr-icon">♪</div>
              <div className="hr-line"></div>
            </div>
            <p className="text-muted">
              Scopri la nostra selezione di pianoforti di alta qualità, accuratamente scelti per offrire 
              il meglio in termini di suono, estetica e performance.
            </p>
          </div>
        )}
        <Row>
          {displayPianos.map((piano) => (
            <Col key={piano.id} lg={4} className="mb-4">
              <PianoCard piano={adaptPianoData(piano)} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedPianos;
