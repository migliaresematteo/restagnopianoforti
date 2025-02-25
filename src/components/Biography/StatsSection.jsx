import React from 'react';

const StatBox = ({ number, text }) => (
  <div className="stat-box">
    <h3>{number}</h3>
    <p>{text}</p>
  </div>
);

const StatsSection = () => {
  const stats = [
    { number: '115+', text: 'Anni di Storia' },
    { number: '1908', text: 'Anno di Fondazione' },
    { number: '70+', text: 'Dipendenti Storici' },
    { number: '1911', text: 'Medaglia d\'Oro Torino' },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatBox key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;
