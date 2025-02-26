import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getRandomFeaturedPianos } from '../api/pianos';
import PianoCard from './PianoCard';

const FeaturedPianos = ({ pianos }) => {
  const [featuredPianos, setFeaturedPianos] = useState([]);
  const [loading, setLoading] = useState(!pianos);

  useEffect(() => {
    if (!pianos) {
      const loadFeaturedPianos = async () => {
        try {
          setLoading(true);
          const data = await getRandomFeaturedPianos(3);
          setFeaturedPianos(data);
        } catch (error) {
          console.error('Error loading featured pianos:', error);
        } finally {
          setLoading(false);
        }
      };
      
      loadFeaturedPianos();
    }
  }, [pianos]);

  const displayPianos = pianos || featuredPianos;

  const adaptPianoData = (piano) => {
    // Handle CMS image format (array of objects with image property)
    const images = Array.isArray(piano.images) 
      ? piano.images.map(img => typeof img === 'string' ? img : img.image)
      : [];
      
    return {
      ...piano,
      name: piano.model,
      image: images[0] || '',
      year: piano.productionDate,
      length: piano.length,
      height: piano.height,
    };
  };

  if (loading) {
    return (
      <section className="featured-pianos py-5">
        <Container>
          <div className="text-center">Caricamento...</div>
        </Container>
      </section>
    );
  }

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
