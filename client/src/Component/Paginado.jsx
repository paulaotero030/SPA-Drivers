import React from 'react';

const Paginado = ({ driversPage, drivers, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(drivers / driversPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
