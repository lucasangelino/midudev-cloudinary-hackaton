const Server = require('./models/server');

// Paquete para leer y establecer las variables de entorno
require('dotenv').config();


// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();