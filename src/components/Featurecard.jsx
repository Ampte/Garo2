import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeatureCard({ icon, title, description, link }) {

    const navigate = useNavigate();
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => navigate(link)}>Learn More</button>
    </div>
  );
}

export default FeatureCard;