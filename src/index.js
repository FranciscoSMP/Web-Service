const express = require('express');
const app = express();
const morgan = require('morgan');

// Configuraciones.

app.set('port', process.env.PORT || 3000);

// Middlewares.

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas.

// Iniciando el Servidor.

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});