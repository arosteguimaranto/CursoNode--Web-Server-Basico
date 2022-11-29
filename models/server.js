const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;


        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        


        //conectar base de datos
        this.conectarDB();
        //Middlewares
        // Son funciones que van a a;adir otra funcioanlidad a mi web server
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //CORS
        this.app.use( cors());

        //Lectura y Parseo del body
        this.app.use(express.json());

        // Directorio Publico
        this.app.use( express.static('public'));
    }

    routes(){

        this.app.use (this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/user'));
       
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}





module.exports = Server;