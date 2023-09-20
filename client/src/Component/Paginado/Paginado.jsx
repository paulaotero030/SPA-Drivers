import React from 'react';
import './Paginado.css';
const Paginado = ({ driversPage, drivers, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(drivers / driversPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='ul'>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className='li' key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li> //cada vez que clikeo el valor va a llamar la funcion paginado la cual va ir cambiando el valor de los numeros en la home
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
