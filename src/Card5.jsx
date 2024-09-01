// src/App.jsx
import React, { useEffect, useState } from 'react';
import Card from './components/Card1';

const Card5 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/src/components/Home.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    
    <div className="App flex flex-wrap justify-center">
      {data.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Card5;
