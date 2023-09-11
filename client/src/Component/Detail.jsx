import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  console.log('detailsss', details);

  let { id } = useParams(); //toma el id de la url
  console.log('isss', id); // Esto imprimirá el valor de "id" en la consola

  useEffect(() => {
    dispatch(getDetail(id)); //aca se le pasa el id
    console.log('efect data', details);
  }, [dispatch, id]);

  return (
    <div>
      {details ? (
        <div>
          <img src={details.image} alt={details.name}></img>
          <h1>{details.name}</h1>
          <div>
            <h2>Id: {details.id}</h2>
            <h2>Nationality: {details.nationality}</h2>
            <h2>Dob: {details.dob}</h2>
            <h3>Description: {details.description}</h3>
          </div>

          {details.teams?.map((element) => {
            return (
              <div>
                <h2>Teams: {element.teams}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>No details</p>
        </div>
      )}
      <Link to='/home'>Home</Link>
    </div>
  );
}
