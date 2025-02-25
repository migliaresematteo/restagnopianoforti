import React from 'react';

const InfoBox = ({ icon, label, value, colorIndicator, valueClassName, valueIcon }) => {
  return (
    <div className="p-2 rounded-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="text-muted small mb-1">
        <i className={`bi ${icon} me-1`}></i>
        {label}
      </div>
      <div className="d-flex align-items-center">
        {colorIndicator && (
          <div 
            className="color-indicator me-2"
            style={{
              backgroundColor: colorIndicator,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              border: '2px solid white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          />
        )}
        <span className={`fw-medium small ${valueClassName || ''}`}>
          {valueIcon && <i className={`bi ${valueIcon} me-1`}></i>}
          {value}
        </span>
      </div>
    </div>
  );
};

export default InfoBox;
