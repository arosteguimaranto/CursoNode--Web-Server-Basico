require('dotenv').config();

const Server = require('./models/server');


// instancia del servidor
const server = new Server();


// lanzar el metodo listen para que se levante

server.listen();






 

