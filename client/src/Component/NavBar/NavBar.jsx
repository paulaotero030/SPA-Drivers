import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDrivers } from '../../redux/actions';
import Filter from '../Filtrado/Filter';
import OrderAlpha from '../Ordenamiento/OrderAlpha';
import OrderDob from '../Ordenamiento/OrderDob';
import './NavBar.css';

const NavBar = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleFilters = (e) => {
    e.preventDefault();
    dispatch(getAllDrivers());
    setCurrentPage(1);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Filter setCurrentPage={setCurrentPage} />
        <OrderAlpha setOrder={setOrder} />
        <OrderDob setOrder={setOrder} />
        <Link to='/drivers' className='nav-link'>
          <button className='nav-button'>Create a new Driver</button>
        </Link>
        <button className='nav-button' onClick={(e) => handleFilters(e)}>
          Show all drivers
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
