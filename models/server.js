const express = require("express");
const cors = require('cors')


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routeUser = '/api/usuarios';

        // Middlewares
        this.middlewares(); 

        //rutas de mi app
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //lectura y parseo del codigo
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.routeUser, require('../routes/userRoute'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Server run in port:", this.port);
        });
        
    }

}






module.exports = Server;