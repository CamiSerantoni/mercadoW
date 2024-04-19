//Se crea el modelo del servidor con una clase

//Se importa express
import express from 'express'
//se importa motor de plantilla handlebar
import { create } from 'express-handlebars'; //con la función create
//Creación variables de entorno
import { fileURLToPath } from 'url'
import { dirname } from "path";
// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

// IMPORTAMOS NUESTRAS VISTAS
import vistaHome from '../routes/vistaHome.routes.js';
import vistaProductos  from '../routes/vistaProductos.routes.js';

// Creamos nuestro modelo o clase de servidor
class Server{
    // Vamos a crear nuestro constructor para que ejecute  los Middleware y las Rutas o Routes
    constructor(){
        // Creamos la app  de express
        //definimos las propiedades
        this.app = express(); // esto en vez de hacer const app = express(), ya que estamos en una clase
        this.port = process.env.PORT || 8000; //para comunicarse con el .env se usa process y se pone el 8000 como alternativa si no existe el .env
        this.frontEndPaths = { //acá centralizo todas las posibles rutas
            rootHome:'/',
            rootProductos:'/productos'
        }
        // Iniciamos nuestros metodos middlewares y routes
        this.middlewares();
        this.routes()
    }
    //Se crea la función middleware
    middlewares(){
        this.app.use( express.static('public') );
        this.app.use('/css', express.static(`${__dirname}/../public/assets/css`));
        this.app.use('/img', express.static( `${__dirname}/../public/assets/img`));
        // Ruta de CSS para Bootstrap
        this.app.use('/bootstrap', express.static( `${__dirname}/../node_modules/bootstrap/dist/css`));
        this.app.use('/bootstrapjs',express.static(  `${__dirname}/../node_modules/bootstrap/dist/js`  ));
    }

    routes(){
        this.app.use( this.frontEndPaths.rootHome , vistaHome );
        this.app.use( this.frontEndPaths.rootProductos, vistaProductos )
    }
    listen(){// Por donde será escuchado el servidor, se le entrega el puerto y se agrega el callback, qué debe hacer
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        } )
    }
    initHandlebar(){
        this.hbs = create({ //con el metodo create se crea la vista de handlebar
            partialsDir:[  // directorio de los parciales, en qué carpeta, por eso ponemos views
                "views"
            ]
        })
        this.app.engine( "handlebars", this.hbs.engine );//levanta la existencia de la extensión handlebar .hbs
        this.app.set("view engine","handlebars"); //visualiza handlebar
    }
}
//Para poder importar en el index
export default Server;



