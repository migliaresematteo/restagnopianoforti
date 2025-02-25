import React from 'react';

const PriceSection = ({ price, buttonText = 'Richiedi Informazioni', buttonIcon = 'whatsapp', productName = '' }) => {
  const handleWhatsAppClick = () => {
    const message = `Ciao, sono interessato al ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/393475190187?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="mt-auto">
      <div className="border-top border-bottom py-4 mb-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-muted">Prezzo</div>
          <div className="h2 mb-0 fw-bold">€{price}</div>
        </div>
      </div>

      <button onClick={handleWhatsAppClick} className="btn btn-custom text-white w-100">
        <i className={`bi bi-${buttonIcon} me-2`}></i>
        {buttonText}
      </button>
    </div>
  );
};

export default PriceSection;
