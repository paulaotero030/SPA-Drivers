import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, name, teams }) => {
  console.log('Nombre del conductor:', name); // Agrega este console.log
  const imageUrl = image ? image.url : '';

  return (
    <Link to={`/drivers/${id}`}>
      <div className='card' key={id}>
        <img src={imageUrl} alt='img not found'></img>
        <div>
          <h1>{name}</h1>
          <h2>{teams}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
