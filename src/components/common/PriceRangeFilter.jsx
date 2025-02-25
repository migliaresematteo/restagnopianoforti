import React from 'react';
import { Form, Col } from 'react-bootstrap';

const PriceRangeFilter = ({ value, onChange, md = 3 }) => {
  return (
    <Col md={md}>
      <Form.Group>
        <Form.Label className="small text-muted mb-2">
          <i className="bi bi-currency-euro me-1"></i>
          Prezzo
        </Form.Label>
        <div className="d-flex gap-2">
          <Form.Control
            type="number"
            value={value[0]}
            onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
            placeholder="Min"
            className="form-control-sm border-0 shadow-sm"
            style={{ backgroundColor: '#f8f9fa' }}
          />
          <Form.Control
            type="number"
            value={value[1]}
            onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
            placeholder="Max"
            className="form-control-sm border-0 shadow-sm"
            style={{ backgroundColor: '#f8f9fa' }}
          />
        </div>
      </Form.Group>
    </Col>
  );
};

export default PriceRangeFilter;
