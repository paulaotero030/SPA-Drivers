import React from 'react';
import Card from '../Card/Card';
import './Cards.css';
const Cards = ({ drivers }) => {
  return (
    <div className='card-container'>
      {drivers &&
        drivers.map((drivers) => {
          //verificar si driver va con s
          const forename = drivers.name
            ? drivers.name.forename
            : 'Nombre no disponible';

          return (
            <Card
              key={drivers.id}
              id={drivers.id}
              name={forename} //accedo de esta forma
              image={drivers.image}
              teams={drivers.teams}
            />
          );
        })}
    </div>
  );
};

export default Cards;
