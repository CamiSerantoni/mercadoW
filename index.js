
import Server from "./models/Server.js";
import dotenv from 'dotenv'; //esta dependencia me permite buscar una variable de entorno desde cualquier punto del proyecto

// Esto es para que funcione la ruta hacia el .env
dotenv.config();

// Instanciar el Server 
const server = new Server()
server.initHandlebar();//acá lo inicializamos
server.listen();
console.clear();//para que limpie la terminal