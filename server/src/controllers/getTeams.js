const { Teams } = require('../db');
const apiTeams = require('../../api/db.json');
// console.log('datos', apiTeams);

const getTeams = async (req, res) => {
  try {
    const teams = await Teams.findAll();

    if (teams.length === 0) {
      const array = [];

      apiTeams.drivers.forEach((driver) => {
        const teamsInfo = driver.teams;
        if (typeof teamsInfo === 'string') {
          array.push(teamsInfo);
        }
      });

      const teamsArray = array
        .map((teamsInfo) => teamsInfo.split(','))
        .reduce(
          (accumulator, currentArray) => accumulator.concat(currentArray),
          []
        );

      const uniqueTeamSet = new Set();
      teamsArray.forEach((team) => {
        uniqueTeamSet.add(team.trim());
      });

      const uniqueTeamsArray = Array.from(uniqueTeamSet);
      console.log('ACAAAAAA TEAMS', uniqueTeamsArray);

      const validTeamsArray = uniqueTeamsArray.filter(
        (team) => team && team.trim() !== ''
      );
      await Teams.bulkCreate(validTeamsArray.map((team) => ({ name: team })));

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
