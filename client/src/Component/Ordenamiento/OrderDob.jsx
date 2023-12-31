import React from 'react';
import { useDispatch } from 'react-redux';
import { orderDob } from '../../redux/actions/index';

const OrderDob = ({ setOrder }) => {
  const dispatch = useDispatch();

  const handleDob = (event) => {
    event.preventDefault();
    dispatch(orderDob(event.target.value));
    setOrder(`Ordenamiento ${event.target.value}`);
  };
  return (
    <div>
      <fieldset>
        <legend>Sort by</legend>
        <select onChange={() => handleDob()}>
          <opcion disabled selected>
            Birthdate...
          </opcion>
          <option value='Higth'>Lower</option>
          <option value='Low'>Higher</option>
        </select>
      </fieldset>
    </div>
  );
};

export default OrderDob;
