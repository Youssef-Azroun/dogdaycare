// DogDayCare.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DogDayCare.css';

const apiUrl = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

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
              )}/${item.age}/${item.sex}`,
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
