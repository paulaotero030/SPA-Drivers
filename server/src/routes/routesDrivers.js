const { Router } = require('express');
const router = Router();

//Importar los controllers
const { getDrivers } = require('../controllers/getDrivers');
const { getDriverById } = require('../controllers/getDriverById');

// Creo una ruta para cada controllers
router.get('/', getDrivers);
router.get('/:idDriver', getDriverById);

// module.exports = router;
module.exports = router;
