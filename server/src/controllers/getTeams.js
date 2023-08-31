const { Teams } = require('../db');
const apiTeams = require('../../api/db.json');
// console.log('datos', apiTeams);

const getTeams = async (req, res) => {
  try {
    const teams = await Teams.findAll();

    if (teams.length === 0) {
      const teamsFromApi = apiTeams.drivers.map((drivers) => ({
        teams: `${drivers.teams} `,
      }));
      console.log('teams de api', teamsFromApi);
      await Teams.bulkCreate(teamsFromApi);

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
