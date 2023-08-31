const api = require('../../api/db.json');
const { Driver } = require('../db');

const getDriverName = async (req, res) => {
  const name = req.query.name.forename;
  console.log('nombre', name);
  try {
    // Buscar drivers en la base de datos local
    const dbDrivers = await Driver.findAll({
      where: {
        nombre: name,
      },
    });
    if (!dbDrivers) {
      const apiresponse = api.drivers.filter(
        (nameDriver) => nameDriver.forename === name
      );
      return res.status(200).json(apiresponse);
    }

    return res.status(200).json(dbDrivers);
  } catch (error) {
    return res.status(505).json({ error: 'error en la api' });
  }
};

module.exports = {
  getDriverName,
};
