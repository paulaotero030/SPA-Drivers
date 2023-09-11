import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrivers } from '../redux/actions/index';
import Cards from './Cards';
import SearchBar from './SearchBar';
import Paginado from './Paginado';
import NavBar from './NavBar';

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers); // Asegúrate de que la ruta sea correcta
  console.log('Saaa', drivers);
  const [order, setOrder] = useState('');

  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  let driversPage = 10;
  if (currentPage === 1) {
    driversPage--;
  }
  const indexOfLastDriver = currentPage * driversPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPage;

  const currentDrivers =
    drivers && drivers.slice(indexOfFirstDriver, indexOfLastDriver);
  console.log('currentDrivers', currentDrivers);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDrivers())
      .then((data) => {
        console.log('Data from getAllDrivers:', data);
      })
      .catch((error) => {
        console.error('Error fetching drivers:', error);
      });
  }, []);

  return (
    <div>
      <h1>Drivers</h1>
      <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
      <Paginado
        driversPage={driversPage}
        drivers={drivers.length}
        paginado={paginado}
      />
      <SearchBar setCurrentPage={setCurrentPage} />
      <Cards drivers={currentDrivers} />
      {/* <Cards drivers={drivers} /> */}
      {/* <Cards /> */}
    </div>
  );
};
export default Home;

// export function getAllDrivers() {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`http://localhost:3001/drivers`);
//       const dataObject = response.data[1]; // Acceder al segundo elemento que contiene el objeto
//       console.log('response drivers', dataObject);
//       return dispatch({
//         type: GET_DRIVERS,
//         payload: dataObject,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
