const axios = require('axios');

const getDrivers = async (req, res) => {
  try {
    // Hacer una solicitud GET a la URL que contiene la información de los drivers
    const response = await axios.get(`http://localhost:5000/drivers`);
    console.log('data', response);

    // Obtener los datos de la respuesta
    const driversData = response.data;

    // Enviar la respuesta con los datos de los drivers
    res.status(200).json(driversData);
  } catch (error) {
    // En caso de error, enviar una respuesta de error con el código 500 (Error interno del servidor)
    res.status(500).json({ error: 'Error al obtener los drivers' });
  }
};

module.exports = {
  getDrivers,
};
