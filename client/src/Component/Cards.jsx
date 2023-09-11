import React from 'react';
import Card from './Card';

const Cards = ({ drivers }) => {
  return (
    <div>
      {drivers &&
        drivers.map((driver) => {
          //verificar si driver va con s
          return (
            <Card
              key={driver.id}
              id={driver.id}
              name={`${driver.name.forename}`} //accedo de esta forma
              image={driver.image}
              teams={driver.teams}
            />
          );
        })}
    </div>
  );
};

export default Cards;
