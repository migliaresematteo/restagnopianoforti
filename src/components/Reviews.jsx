import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      text: "A magical piano shop managed by a very kind father and his son. A wide variety of different pianos and fun conversations. If you are in the market for a piano, make sure to visit here.",
      rating: 5
    },
    {
      text: "Sono rimasto molto contento del trattamento che ho ricevuto a partire dalla scelta del pianoforte fino al suo arrivo a casa mia.",
      rating: 5
    },
    {
      text: "Professionali e gentilissimi. Trasporto del pianoforte effettuato con cura e attenzione. Sicuramente da consigliare!",
      rating: 5
    },
    {
      text: "Se cerchi un pianoforte qui si possono trovare competenza e passione",
      rating: 5
    },
    {
      text: "Si possono trovare pianoforti di ottima qualità e di prezzi abbordabili",
      rating: 4
    },
    {
      text: "Ci sono pianoforti nuovi e molto vecchi restaurati! Il venditore è stato molto attento!! Ci tornerò sicuramente!",
      rating: 4
    }
    
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="mt-5">
      <div className="container">
      <h2 className="text-center section-title mb-3">Recensioni</h2>
      <div className="elegant-hr mb-4">
            <div className="hr-line"></div>
            <div className="hr-icon">♪</div>
            <div className="hr-line"></div>
          </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <p className="review-text">{review.text}</p>
                <div className="review-rating">
                  <span className="stars">{renderStars(review.rating)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
