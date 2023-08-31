const { Router } = require('express');
const router = Router();

const { getTeams } = require('../controllers/getTeams');

router.get('/', getTeams);

module.exports = router;
