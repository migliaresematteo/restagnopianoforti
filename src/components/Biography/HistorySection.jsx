import React from 'react';

const HighlightBox = ({ items }) => (
  <div className="highlight-box">
    {items.map(([label, value], index) => (
      <React.Fragment key={index}>
        <strong>{label}:</strong> {value}
        {index < items.length - 1 && <br />}
      </React.Fragment>
    ))}
  </div>
);

const HistorySection = ({ title, highlights, content, image, alt, reverse = false }) => (
  <section className={reverse ? 'factory-section' : 'history-section'}>
    <div className={`section-grid ${reverse ? 'reverse' : ''}`}>
      <div className="text-content">
        <h2>{title}</h2>
        <HighlightBox items={highlights} />
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="image-container">
        <img src={image} alt={alt} />
      </div>
    </div>
  </section>
);

export default HistorySection;
