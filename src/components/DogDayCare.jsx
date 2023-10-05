// DogDayCare.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DogDayCare.css';

const apiUrl = 'https://api.jsonbin.io/v3/b/651ee3cc0574da7622b4d1d3';

const DogDayCare = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '<YOUR_API_KEY>', // Replace with your API key
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('API Response:', result);
        const records = result.record;
        setData(records);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="image-grid">
        {data.map((item, index) => (
          <Link
            key={index}
            to={{
              pathname: `/information/${encodeURIComponent(
                item.img
              )}/${item.age}/${item.sex}/${item.name}/${item.breed}/${item.chipNumber}/${item.owner.name}/${item.owner.lastName}/${item.owner.phoneNumber}`,
              state: { details: item },
            }}
          >
            <img src={item.img} alt={`Image ${index}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DogDayCare;
