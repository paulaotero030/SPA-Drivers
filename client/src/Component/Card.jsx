import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, teams }) => {
  return (
    <Link to={`/drivers/${id}`}>
      <div key={id}>
        <img src={image} alt='img not found'></img>
        <div>
          <h1>cardd</h1>
          <h1>{name}</h1>
          <h2>{teams}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
