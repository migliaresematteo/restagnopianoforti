import React, { useState, useEffect } from 'react';
import './AppointmentBanner.css';
import CustomButton from '../common/CustomButton';

const AppointmentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 20 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 20000);

    // Set up recurring display every 3 minutes
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 300000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="appointment-banner" onClick={handleOverlayClick}>
      <div className="appointment-banner-content">
        <button className="close-button" onClick={handleClose}>×</button>
        <h3>Consigliamo un appuntamento!</h3>
        <p>Al fine di garantire la migliore assistenza, consigliamo un appuntamento.</p>
        <CustomButton text="Chiama ora" link="tel:+393475190187" onClick={handleClose}>×</CustomButton>
      </div>
    </div>
  );
};

export default AppointmentBanner;
