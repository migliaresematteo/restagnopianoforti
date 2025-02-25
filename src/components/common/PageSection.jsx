import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageSection = ({
  title,
  icon: Icon,
  content,
  image,
  imageAlt,
  listTitle,
  listItems,
  reverseLayout = false,
  className = '',
}) => {
  return (
    <div className={`page-section ${className}`}>
      <Row className={`align-items-center ${reverseLayout ? 'flex-lg-row-reverse' : ''}`}>
        <Col lg={6} className="section-image-container">
          {image && (
            <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }} className="rounded-3">
              <img 
                src={image} 
                alt={imageAlt || title} 
                className="section-image shadow-sm"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}
        </Col>
        <Col lg={6}>
          <div className="section-content">
            {Icon && (
              <div className="section-icon-box mt-4 mt-md-0">
                <Icon sx={{ fontSize: 40 }} />
              </div>
            )}
            {title && <h2 className="section-title">{title}</h2>}
            {content && <p className="section-text">{content}</p>}
            {listTitle && listItems && (
              <div className="summary-box">
                <h4>{listTitle}</h4>
                <ul>
                  {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PageSection;
