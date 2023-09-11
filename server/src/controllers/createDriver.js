const { Driver, Teams } = require('../db');

const createDriver = async (req, res) => {
  const { name, surname, description, image, nationality, dob, teams } =
    req.body;
  try {
    const newDriver = await Driver.create({
      name,
      surname,
      description,
      image,
      nationality,
      dob,
    });
    if (teams) {
      const foundTeams = await findAll(
        teams.map(async (teamName) => {
          const foundTeam = await Teams.findOne({
            where: { name: teamName },
          });
          return foundTeam;
        })
      );
      await newDriver.setTeams(foundTeams);
    }
    return res.status(200).json(newDriver);
  } catch (error) {
    console.error('Error en la creación del conductor:', error);

    return res.status(500).json({ error: 'no se pudo crear el driver' });
  }
};

module.exports = {
  createDriver,
};
