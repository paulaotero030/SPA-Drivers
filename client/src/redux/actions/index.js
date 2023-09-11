import axios from 'axios';
import {
  SEARCH_DRIVERS,
  GET_DETAIL,
  GET_DRIVERS,
  ORDER_ALPHA,
  ORDER_DOB,
  GET_TEAMS,
  FILTER_BY_TEAMS,
} from './actionsTypes';
import Filter from '../../Component/Filtrado/Filter';

//TRAE DRIVERS POR NOMBRE
export function getNameDrivers(name) {
  return async (dispatch) => {
    try {
      const json = await axios.get(
        ` http://localhost:3001/drivers?name=${name}`
      );
      console.log('response drivers name', json.data);
      return dispatch({
        type: SEARCH_DRIVERS,
        payload: json.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_DRIVERS,
        payload: [],
      });
    }
  };
}
//TRAE DRIVERS POR ID
export function getDetail(id) {
  console.log('iddd', id);

  return async (dispatch) => {
    try {
      var json = await axios.get(`http://localhost:3001/drivers/${id}`);
      console.log('loggg', json);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//TRAE TODOS LOS DRIVERS
export function getAllDrivers() {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/drivers`);
      const dataObject = json.data[1]; // Acceder al segundo elemento que contiene el objeto

      console.log('response drivers', dataObject);
      return dispatch({
        type: GET_DRIVERS,
        payload: dataObject.drivers, //accedo de esta forma
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//ORDENAR POR ORDEN ALFABETICO ASCENDENTE Y DESENDENTEMENTE
export function orderAlpha(payload) {
  return {
    type: ORDER_ALPHA,
    payload,
  };
}
//ORDENAR POR FECHA DE NACIMIENTO
export function orderDob(payload) {
  return {
    type: ORDER_DOB,
    payload,
  };
}
//TRAER TODOS LOS TEAMS
export function getTeams() {
  return async (dispatch) => {
    try {
      const json = await axios.get('http://localhost:3001/drivers');
      return dispatch({
        type: GET_TEAMS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//FILTRAR POR TEAMS
export function filterTeams(payload) {
  return {
    type: FILTER_BY_TEAMS,
    payload,
  };
}
