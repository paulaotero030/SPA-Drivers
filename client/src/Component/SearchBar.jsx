import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameDrivers } from '../redux/actions';

const SearchBar = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getNameDrivers(name));
    setName('');
  };

  return (
    <div>
      <input
        type='search'
        value={name}
        placeholder='Enter a name...'
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Look for</button>
    </div>
  );
};

export default SearchBar;
