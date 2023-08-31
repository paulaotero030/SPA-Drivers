const { Router } = require('express');

// Importar todos los routers;
const routesDrivers = require('./routesDrivers');
const routeTeams = require('./routeTeams');

const router = Router();

// Configurar los routers
router.use('/drivers', routesDrivers);
router.use('/teams', routeTeams);

module.exports = router;
