import React from 'react';
import { Form, Col } from 'react-bootstrap';

const FilterSelect = ({ 
  label, 
  icon, 
  value, 
  onChange, 
  options,
  md = 3
}) => {
  return (
    <Col md={md}>
      <Form.Group>
        <Form.Label className="small text-muted mb-2">
          <i className={`bi bi-${icon} me-1`}></i>
          {label}
        </Form.Label>
        <Form.Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-select-sm border-0 shadow-sm"
          style={{ backgroundColor: '#f8f9fa' }}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Col>
  );
};

export default FilterSelect;
