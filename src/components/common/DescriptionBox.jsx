import React from 'react';
import { Card } from 'react-bootstrap';

const DescriptionBox = ({ description, icon = 'info-circle', title = 'Descrizione' }) => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="p-4">
        <h2 className="h5 mb-3 d-flex align-items-center">
          <i className={`bi bi-${icon} me-2`}></i>
          {title}
        </h2>
        <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
          {description}
        </p>
      </Card.Body>
    </Card>
  );
};

export default DescriptionBox;
