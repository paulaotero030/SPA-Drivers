const { Router } = require('express');

// Importar todos los routers;
const routesDrivers = require('./routesDrivers');

const router = Router();

// Configurar los routers
router.use('/drivers', routesDrivers);

module.exports = router;
