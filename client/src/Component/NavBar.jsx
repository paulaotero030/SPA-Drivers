import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDrivers } from '../redux/actions';
import Filter from './Filtrado/Filter';
import OrderAlpha from './Ordenamiento/OrderAlpha';
import OrderDob from './Ordenamiento/OrderDob';

const NavBar = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleFilters = (event) => {
    event.preventDefault();
    dispatch(getAllDrivers());
    setCurrentPage(1);
  };

  return (
    <div>
      <Filter setCurrentPage={setCurrentPage} />
      <OrderAlpha setOrder={setOrder} />
      <OrderDob setOrder={setOrder} />
      <Link to='/drivers'>
        <button>Create a new Driver</button>
      </Link>
      <button onClick={() => handleFilters()}>Show all drivers</button>
    </div>
  );
};

export default NavBar;
