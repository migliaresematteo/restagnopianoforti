import React from 'react';

const PianoBadges = ({ type, condition }) => {
  return (
    <div className="my-3">
      <span className="badge bg-dark me-2 px-3 py-2">
        <i className="bi bi-music-note me-1"></i>
        {type}
      </span>
      <span className="badge bg-secondary px-3 py-2">
        <i className="bi bi-stars me-1"></i>
        {condition}
      </span>
    </div>
  );
};

export default PianoBadges;
