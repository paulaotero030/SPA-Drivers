const { Router } = require('express');
const router = Router();

//Importar los controllers
const { getDrivers } = require('../controllers/getDrivers');
const { getDriverById } = require('../controllers/getDriverById');
const { createDriver } = require('../controllers/createDriver');

// Creo una ruta para cada controllers
router.get('/', getDrivers);
router.get('/:id', getDriverById);
router.post('/', createDriver);

// module.exports = router;
module.exports = router;
