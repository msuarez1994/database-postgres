const express = require('express');
const { BusesSEFI } = require( '../controllers/BusesSEFI' );
const cors = require('cors');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middleware();
        this.routes();
    }
    middleware(){
        this.app.use(express.json());
        this.app.use( cors() );
    }
    routes(){
        this.app.post('/sefiRTP', BusesSEFI);
    }
    listen(){
        this.app.listen( this.port,()=>{
            console.log(`Listening on port ${this.port}`);
        } );
    }
}
module.exports = Server;