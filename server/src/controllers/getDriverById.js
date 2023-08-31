const api = require('../../api/db.json');
const { Driver, Team } = require('../db');

const getDriverById = async (req, res) => {
  const { id } = req.params;
  console.log('aca id', id);
  try {
    // Consultar la base de datos para obtener el detalle del driver por su ID
    const driver = await Driver.findByPk(id);
    console.log('driver', driver);

    if (!driver) {
      // Si no se encuentra en la base de datos, hacer una solicitud a la API externa
      const responseapi = api.filter((driver) => driver.id === toString(id));

      return res.status(200).json(responseapi);
    }

    // Si se encuentra en la base de datos, enviar la respuesta con el detalle del driver y su equipo
    return res.status(200).json(driver);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al obtener el detalle del driver' });
  }
};

module.exports = {
  getDriverById,
};
