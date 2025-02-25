import React from 'react';
import { Card } from 'react-bootstrap';

const FilterCard = ({ title, icon, children, resultCount }) => {
  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-4">
          <i className={`bi bi-${icon} fs-4 me-2`}></i>
          <h5 className="mb-0">{title}</h5>
        </div>
        
        {children}

        {resultCount !== undefined && (
          <div className="mt-4 pt-3 border-top">
            <div className="d-flex align-items-center text-muted small">
              <i className="bi bi-info-circle me-2"></i>
              Risultati trovati: {resultCount}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default FilterCard;
