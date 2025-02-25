import React from 'react';
import CustomButton from './CustomButton';

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="card h-100 border-0 shadow-sm transition-hover d-flex flex-column">
      <div className="card-body text-center p-4 flex-grow-1">
        {icon && (
          <div className="d-inline-flex p-3 mb-3 rounded-circle bg-black text-white">
            {icon}
          </div>
        )}
        <h4 className="card-title h5 fw-bold mb-3">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
      </div>
      {link && (
        <div className="mt-auto mx-auto mb-4">
          <CustomButton link={link} text="Scopri di più" />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
