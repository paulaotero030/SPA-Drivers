import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateDriver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  };

  return (
    <div>
      <h1>Create Driver</h1>
      <form>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={newDriver.name}
          onChange={handleChange}
        ></input>

        <label>Surname:</label>
        <input
          type='text'
          name='surname'
          value={newDriver.surname}
          onChange={handleChange}
        ></input>

        <label>Nationality:</label>
        <input
          type='text'
          name='nationality'
          value={newDriver.nationality}
          onChange={handleChange}
        ></input>

        <label>Image:</label>
        <input></input>

        <label>Dob:</label>
        <input
          type='text'
          name='dob'
          value={newDriver.dob}
          onChange={handleChange}
        ></input>

        <label>Description:</label>
        <input
          type='text'
          name='description'
          value={newDriver.dob}
          onChange={handleChange}
        ></input>

        <label>Teams:</label>
        <input></input>

        <button>Send</button>
      </form>
    </div>
  );
};

export default CreateDriver;
