import React from 'react';

import { useDispatch } from 'react-redux';
import { orderAlpha } from '../../redux/actions/index';

const OrderAlpha = () => {
  //{setOrder} llega por parametro
  const dispatch = useDispatch();

  const handleSort = (event) => {
    event.preventDefault();
    dispatch(orderAlpha(event.target.value));
    // setOrder(`Ordenado ${event.target.value}`)
  };
  return (
    <div>
      <fieldset>
        <legend>Sort by</legend>
        <select onChange={() => handleSort()}>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </fieldset>
    </div>
  );
};

export default OrderAlpha;
