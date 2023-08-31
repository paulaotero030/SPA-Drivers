import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSearch = () => {
    onSearch(name);
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
