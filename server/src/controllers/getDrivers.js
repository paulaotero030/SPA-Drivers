const api = require('../../api/db.json');
const { Driver } = require('../db');

const getDrivers = async (req, res) => {
  try {
    const db = await Driver.findAll();
    const driversData = [db, api];

    // Enviar la respuesta con los datos de los drivers
    return res.status(200).json(driversData);
  } catch (error) {
    // En caso de error, enviar una respuesta de error con el código 500 (Error interno del servidor)
    return res.status(500).json({ error: 'Error al obtener los drivers' });
  }
};

module.exports = {
  getDrivers,
};
