const express = require('express');
const personaController = require('../controllers/personaController');

const router = express.Router();

router.get('/obtenerPersonas',personaController.obtenerPersonas);
router.post('/crearPersona',personaController.crearPersona);
router.delete('/borrarPersona',personaController.borrarPersona);
router.put('/actualizarPersona',personaController.actualizarPersona);

module.exports = router;
