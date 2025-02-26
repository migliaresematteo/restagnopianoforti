import React from 'react';

const ImageGallery = ({ 
  image, 
  alt, 
  onPrevious, 
  onNext, 
  showNavigation, 
  isMobile, 
  className = ''
}) => {
  const commonImageStyles = {
    objectFit: 'contain',
    width: '100%',
    height: isMobile ? '100%' : '400px',
    backgroundColor: '#f8f9fa'
  };

  const buttonStyles = {
    width: isMobile ? '44px' : '40px',
    height: isMobile ? '44px' : '40px',
    fontSize: isMobile ? '24px' : '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    zIndex: 2
  };

  const containerStyles = isMobile ? {
    paddingTop: '75%',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    position: 'relative'
  } : {};

  // Handle CMS image format (could be a string or an object with image property)
  const imageSrc = typeof image === 'string' ? image : (image?.image || '');

  return (
    <div className={`card border-0 shadow-sm overflow-hidden ${className}`}>
      <div className="position-relative" style={containerStyles}>
        <img
          src={imageSrc}
          alt={alt}
          className={isMobile ? "position-absolute top-0 start-0 w-100 h-100" : "card-img-top"}
          style={commonImageStyles}
        />
        
        {showNavigation && (
          <>
            <button
              className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle ms-3 shadow-sm d-flex align-items-center justify-content-center"
              onClick={onPrevious}
              style={buttonStyles}
              aria-label="Previous image"
            >
              <i className="bi bi-chevron-left fs-4"></i>
            </button>
            <button
              className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle me-3 shadow-sm d-flex align-items-center justify-content-center"
              onClick={onNext}
              style={buttonStyles}
              aria-label="Next image"
            >
              <i className="bi bi-chevron-right fs-4"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
