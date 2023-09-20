import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Importa el archivo CSS

const LandingPage = () => {
  return (
    <div className='contenedorLanding'>
      <Link to='/home'>
        <button className='textLanding'>Welcome</button>
      </Link>
    </div>
  );
};

export default LandingPage;
