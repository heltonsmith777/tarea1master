const express = require('express');
const personaController = require('../controllers/personaController');

const router = express.Router();

router.get('/obtenerPersonas',personaController.obtenerPersonas);
router.post('/crearPersona',personaController.crearPersona);
//path
//put 


module.exports = router;