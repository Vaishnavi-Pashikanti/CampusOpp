import React from 'react';
import '../styles/FeatureCard.css';

function FeatureCard({ image, title, description }) {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default FeatureCard;
