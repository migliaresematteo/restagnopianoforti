import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PianoBadges from './PianoBadges';
import InsuranceBadge from './InsuranceBadge';
import InfoBox from './InfoBox';
import PriceSection from './PriceSection';

const PianoDetailsCard = ({ piano, infoBoxes }) => {
  return (
    <div style={{ position: 'sticky', top: '2rem' }}>
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          <h1 className="h2 mb-0 fw-bold">{piano.model}</h1>
          <InsuranceBadge price={piano.price} />
          <PianoBadges type={piano.type} condition={piano.condition} />

          <Row className="g-4 mb-4">
            {infoBoxes.map((box, index) => (
              <Col xs={6} md={6} key={index}>
                <InfoBox {...box} />
              </Col>
            ))}
          </Row>

          <PriceSection 
            price={piano.price} 
            productName={`pianoforte ${piano.brand != null ? piano.brand : ''} ${piano.model}`}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PianoDetailsCard;
