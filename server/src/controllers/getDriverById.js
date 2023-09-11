const api = require('../../api/db.json');
const { Driver, Team } = require('../db');

// Tiene que incluir los datos del/los team/s del driver al que está asociado.

const getDriverById = async (req, res) => {
  const { id } = req.params;
  console.log('aca id', id);
  try {
    const responseapi = api.drivers.filter((driver) => driver.id == id);

    if (!responseapi) {
      const driver = await Driver.findOne(id);
      return res.status(200).json(driver);
    }

    // Si se encuentra en la base de datos, enviar la respuesta con el detalle del driver y su equipo
    return res.status(200).json(responseapi);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al obtener el detalle del driver' });
  }
};

module.exports = {
  getDriverById,
};
