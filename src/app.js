const express = require('express');
const bodyParser = require('body-parser');
const _connect = require('./db/_connect');
const personaRoutes = require('./routes/personaRouter');

_connect();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/', personaRoutes);

app.get('/', (req, res) => {
    res.send({ message: "Prueba de estado del servicio - Ruta Raiz"});
});

app.listen(PORT, () => console.log(`Aplicación lista y escuchando por el puerto: ${PORT} `));

