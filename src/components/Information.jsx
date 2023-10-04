// Information.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Information = () => {
  const { img, age, sex } = useParams();
  const location = useLocation();
  const { details } = location.state || {};

  return (
    <section>
      <div>
        <h2>Hej!</h2>
        <img src={decodeURIComponent(img)} alt="Image" />
        <p>Age: {age}</p>
        <p>Sex: {sex}</p>
      </div>
    </section>
  );
};

export default Information;
