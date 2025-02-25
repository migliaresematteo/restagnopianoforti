import React from 'react';

const InsuranceBadge = ({ price }) => {
  if (parseFloat(price.replace('.', '')) < 2000) return null;

  return (
    <div className="mt-3 p-3 rounded-3" style={{
      background: 'linear-gradient(45deg, #28a745, #20c997)',
      color: 'white',
    }}>
      <div className="d-flex align-items-center">
        <i className="bi bi-shield-check fs-4 me-2"></i>
        <div>
          <div className="fw-semibold">Assicurazione Premium</div>
          <div className="small opacity-75">Protezione completa inclusa</div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceBadge;
