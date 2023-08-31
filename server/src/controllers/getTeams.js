const axios = require('axios');
const { Teams } = require('../db');

const getTeams = async (req, res) => {
  try {
    const teams = await Teams.findAll();

    if (teams.length === 0) {
      // Realiza la solicitud a la API y guárdalos en la base de datos
      const response = await axios.get(`http://localhost:5000/drivers`);
      const apiTeams = response.data;

      // Inserta los equipos en la base de datos
      await Teams.bulkCreate(apiTeams);

      // Vuelve a obtener los equipos de la base de datos
      const updatedTeams = await Teams.findAll();
      res.status(200).json(updatedTeams);
    } else {
      res.status(202).json(teams);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getTeams,
};
