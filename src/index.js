const express = require('express');
const app = express();
const morgan = require('morgan');

// Middlewares

// Iniciando el Servidor.

app.listen(3000, () => {
    console.log(`Servidor en el puerto ${3000}`);
});