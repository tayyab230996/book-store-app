// src/components/Spinner.js
import React from 'react';
import '../styles/Spinner.css'; // Add necessary CSS

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
