
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Information-design.css'; 

const Information = () => {
  const { img, age, sex, name, breed, chipNumber, ownerName, ownerLast, ownerPhoneNumber } = useParams();
  const location = useLocation();
  const { details } = location.state || {};

  return (
    <section className="information-container">
      <div className="information-card">
        <h2>Dog details!</h2>
        <div className="image-container">
          <img src={decodeURIComponent(img)} alt="Image" />
        </div>
        <div className="info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Sex:</strong> {sex}</p>
          <p><strong>Breed:</strong> {breed}</p>
          <p><strong>Chip number:</strong> {chipNumber}</p>
          <p><strong>Owner name:</strong> {ownerName}</p>
          <p><strong>Owner last name:</strong> {ownerLast}</p>
          <p><strong>Owner phone number:</strong> {ownerPhoneNumber}</p>
        </div>
      </div>
    </section>
  );
};

export default Information;
