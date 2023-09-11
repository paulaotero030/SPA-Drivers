const api = require('../../api/db.json');
const { Driver } = require('../db');
const Sequelize = require('sequelize');

const getDrivers = async (req, res) => {
  const name = req.query.name;
  console.log('nombre', name);

  try {
    if (!name) {
      const dbDriver = await Driver.findAll();
      const allDrivers = [dbDriver, api];
      return res.status(200).json(allDrivers);
    }

    const dbDriver = await Driver.findAll({
      where: {
        name: name,
        //para que busque indep min o may y para que me traiga 15 nomas
      },
    });
    const apiDrivers = await api.drivers.filter(
      (driver) => driver.name.forename === name //para que busque indep min o may y para que me traiga 15 nomas
    );
    const allDrivers = [dbDriver, apiDrivers];
    return res.status(200).json(allDrivers);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error al obtener los conductores.' });
  }
};

module.exports = {
  getDrivers,
};
