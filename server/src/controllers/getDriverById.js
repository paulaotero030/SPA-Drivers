// const axios = require('axios');
// const { Driver, Teams } = require('../db');

// const getDriverById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     // Consultar la base de datos para obtener el detalle del driver por su ID
//     const driver = await Driver.findByPk({
//       id,
//       include: [{ model: Teams, attributes: ['name'] }], // Incluir la relación con el equipo
//     });

//     // Si no se encontró el driver
//     if (!driver) {
//       // Hacer una solicitud GET a la API externa para obtener información adicional
//       const response = await axios.get(` http://localhost:5000/drivers/${id}`);
//       if (!response.data) {
//         return res.status(404).json({ error: 'driver no encontrado' });
//       }
//       // Obtener los datos de la respuesta de la API externa
//       const externalData = response.data;
//       return res.status(200).json(externalData);
//     }
//     // Enviar la respuesta con el detalle del driver y su equipo
//     return res.status(200).json(driver);
//   } catch (error) {
//     // En caso de error, enviar una respuesta de error con el código 500 (Error interno del servidor)
//     res.status(500).json({ error: 'Error al obtener el detalle del driver' });
//   }
// };

// module.exports = {
//   getDriverById,
// };
const axios = require('axios');
const { Driver, Team } = require('../db');

const getDriverById = async (req, res) => {
  const { idDriver } = req.params;
  console.log('aca id', idDriver);
  try {
    // Consultar la base de datos para obtener el detalle del driver por su ID
    const driver = await Driver.findByPk(idDriver, {
      include: [{ model: Team, attributes: ['name'] }],
    });

    if (!driver) {
      // Si no se encuentra en la base de datos, hacer una solicitud a la API externa
      try {
        const response = await axios.get(
          `http://localhost:5000/drivers/${idDriver}`
        );

        if (!response.data || Object.keys(response.data).length === 0) {
          return res
            .status(404)
            .json({ error: 'Driver no encontrado en la API externa' });
        }

        const externalData = response.data;
        return res.status(200).json(externalData);
      } catch (error) {
        console.error('Error en la solicitud a la API externa:', error);
        return res
          .status(500)
          .json({ error: 'Error al obtener datos de la API externa' });
      }
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
