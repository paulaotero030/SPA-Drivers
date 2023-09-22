import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postDrivers } from '../../redux/actions/index';
import { useNavigate } from 'react-router-dom';
import './CreateDriver.css'
function error(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is required.';
  } else if (!input.surname) {
    errors.surname = 'Surname is required.';
  } else if (!input.nationality) {
    errors.nationality = 'Nationality is required.';
  } else if (!input.dob) {
    errors.dob = 'Date of Birth is required.';
  } else if (!input.description) {
    errors.description = 'Description is required.';
  }
  return errors;
}

const CreateDriver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const [errors, setErrors] = useState({});

  const [newDriver, setNewDriver] = useState({
    name: '',
    surname: '',
    nationality: '',
    dob: '',
    description: '',
    teams: [],
  });

  const handleChange = (event) => {
    setNewDriver({
      ...newDriver,
      [event.target.name]: event.target.value,
    });
    setErrors(
      error({
        ...newDriver,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleTeamChange = (event) => {
    setNewDriver({
      ...newDriver,
      teams: [...newDriver.teams, event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !newDriver.name.trim() ||
      !newDriver.surname.trim() ||
      !newDriver.nationality.trim() ||
      !newDriver.dob.trim() ||
      !newDriver.description.trim()
    ) {
      alert('Please fill in all fields.');
      return;
    }

    dispatch(postDrivers(newDriver))
      .then((response) => {
        console.log('Driver created successfully', response.data);
        alert('Driver Created Successfully');
        setNewDriver({
          name: '',
          surname: '',
          nationality: '',
          dob: '',
          description: '',
          teams: [],
        });
        navigate.push('/home');
      })
      .catch((error) => {
        console.error('Error creating driver', error);
        // Handle error appropriately
      });
  };

  return (
    <div className="create-driver-container">
      <h1 className='title'>Create Driver</h1>
      <form onSubmit={handleSubmit} className="driver-form">
        <div className="form-field">
          <label className='text1'>Name:</label>
          <input
            type='text'
            value={newDriver.name}
            name='name'
            placeholder='Add name...'

            onChange={handleChange}
          />
          {errors.name && <p className='form-error'>{errors.name}</p>}
        </div>
        <div className="form-field">
          <label className='text1'>Surname:</label>
          <input
            type='text'
            value={newDriver.surname}
            name='surname'
            placeholder='Add surname...'

            onChange={handleChange}
          />
          {errors.surname && <p className='form-error'>{errors.surname}</p>}
        </div>
        <div className="form-field">
          <label className='text1'>Nationality:</label>
          <input
            type='text'
            value={newDriver.nationality}
            name='nationality'
            placeholder='Add nationality...'

            onChange={handleChange}
          />
          {errors.nationality && (
            <p className='form-error'>{errors.nationality}</p>
          )}
        </div>
     
        <div className="form-field">
          <label className='text1'>Description:</label>
          <input
            value={newDriver.description}
            name='description'
            placeholder='Add description...'

            onChange={handleChange}
          />
          {errors.description && (
            <p className='form-error'>{errors.description}</p>
          )}
        </div>
        <div className="form-field">
          <label className='text1'>Teams:</label>
          <input
            type='text'
            name='team'
            placeholder='Add team...'
            onChange={handleTeamChange}
          />
        </div>
        <div className="form-field">
          <label className='text1'>Date of Birth:</label>
          <input
            type='date'
            value={newDriver.dob}
            name='dob'
            onChange={handleChange}
          />
          {errors.dob && <p className='form-error'>{errors.dob}</p>}
        </div>
        {newDriver.teams.map((team, index) => (
          <div key={index}>{team}</div>
        ))}
        <div>
          <button type='submit' className="submit-button">Create Driver</button>
        </div>
      </form>
      <Link to='/home'>
        <button className="go-back-button">Go back</button>
      </Link>
    </div>
  );
};
export default CreateDriver;
