import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameDrivers } from '../redux/actions';

const SearchBar = () => {
  const [name, setName] = useState('');
  console.log('nameeee', name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();

    setName(event.target.value);
    console.log('nameee', name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(getNameDrivers(name))
      .then((data) => {
        console.log('Data obtenida de getNameDrivers:', data);
        // Accede al segundo array en la propiedad payload
        const segundoArray = data.payload[1];

        // Filtra los conductores cuyo nombre coincide con el valor ingresado en el SearchBar
        const conductoresFiltrados = segundoArray.filter(
          (conductor) =>
            conductor.name.forename.toLowerCase() === name.toLowerCase()
        );

        console.log('Conductores encontrados:', conductoresFiltrados);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });

    setName('');
  };

  return (
    <div>
      <input
        type='search'
        value={name}
        placeholder='Enter a name...'
        onChange={(el) => handleChange(el)}
      />
      <button
        className='search'
        type='submit'
        value={name}
        onClick={(el) => handleSubmit(el)}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
