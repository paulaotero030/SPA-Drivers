import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions';
import { Link, useParams } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  console.log('detailsss', details);

  let { id } = useParams(); // toma el id de la URL
  console.log('isss', id); // Esto imprimirá el valor de "id" en la consola

  useEffect(() => {
    dispatch(getDetail(id)); // aquí se le pasa el id
  }, [dispatch, id]);

  return (
    <div className='player-container'>
      {details ? (
        <div className='player-content'>
          {details.image && details.image.url ? (
            <img
              src={details.image.url}
              alt={details.name.forename}
              className='player-image'
            ></img>
          ) : null}
          <div className='player-info'>
            <h1 className='player-name'>
              {details.name && details.name.forename}{' '}
              {details.name && details.name.surname}
            </h1>
            <div>
              <h2>Id: {details.id}</h2>
              <h2>Nationality: {details.nationality}</h2>
              <h2>Dob: {details.dob}</h2>
              <h3 className='player-description'>
                Description: {details.description}
              </h3>
            </div>

            {details.teams ? (
              <div>
                <h2 className='player-teams'>Teams:</h2>
                <ul className='player-info'>
                  {details.teams.split(', ').map((team, index) => (
                    <li key={index}>{team}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          <p className='player-info'>No details</p>
        </div>
      )}
      <div className='home-link'>
        <Link to='/home'>HOME</Link>
      </div>
    </div>
  );
}
