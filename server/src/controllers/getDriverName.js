const axios = require('axios');
const { Driver } = require('../db');

const getDriverName = async (req, res) => {
  const { name } = req.query;
  console.log('aca name', name);
  try {
    const response = await axios.get(
      `http://localhost:5000/drivers?name.forename=${name}`
    );
    const responseApi = response.data;

    // Buscar drivers en la base de datos local
    const dbDrivers = await Driver.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${name}%`, // Búsqueda sin importar mayúsculas o minúsculas
        },
      },
      limit: 15,
    });

    // Combinar resultados de la API y la base de datos
    const allDrivers = [...responseApi, ...dbDrivers];

    if (allDrivers.length === 0) {
      return res.status(404).json({ message: 'No se encontraron drivers.' });
    }

    return res.status(200).json(allDrivers.slice(0, 15));
  } catch (error) {
    return res.status(505).json({ error: 'error en la api' });
  }
};

module.exports = {
  getDriverName,
};
