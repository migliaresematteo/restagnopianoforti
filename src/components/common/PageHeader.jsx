import React from 'react';

const PageHeader = ({ title, subtitle, className = '' }) => {
  return (
    <header className={`page-header text-center mb-5 ${className}`}>
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
