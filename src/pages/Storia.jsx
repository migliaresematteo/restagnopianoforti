import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Storia = () => {
  return (
    <div className="storia-page section-decoration py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="text-center mb-5">La Nostra Storia</h1>
            <div className="timeline">
              <div className="timeline-item">
                <h3>1908</h3>
                <p>Fondazione del laboratorio Restagno Pianoforti a Torino, dando inizio a una tradizione di eccellenza nel restauro e nella manutenzione di pianoforti.</p>
              </div>
              
              <div className="timeline-item">
                <h3>1950</h3>
                <p>Espansione dell'attività e consolidamento della reputazione come uno dei più rinomati laboratori di restauro pianoforti in Piemonte.</p>
              </div>
              
              <div className="timeline-item">
                <h3>1980</h3>
                <p>Introduzione di tecniche innovative nel restauro, combinando la tradizione artigianale con le moderne tecnologie.</p>
              </div>
              
              <div className="timeline-item">
                <h3>Oggi</h3>
                <p>Continuiamo a portare avanti la tradizione familiare, offrendo servizi di restauro, accordatura e vendita di pianoforti, mantenendo viva la passione e l'expertise tramandati attraverso le generazioni.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Storia;
