// Importación de los módulos Express, helmet, cors y morgan.
const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// Importación del directorio app_routers.js
const misRutas = require("./routers/app_routers.js");
const app = express()

// Asignación del ip y puerto a utilizar que sera el 3000, ya que el puerto solicitado en el trabajo da un error ya que se encuentra en constante uso por el S.O
const host =process.env.HOST || "localhost" ;
const port = process.env.PORT || 3000;


// Carga y configuración de las variables de entorno utilizando el siguiente módulo.
require("dotenv").config();


// Middlewares utilizados normalmente con node.js.
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
 
app.use("/", misRutas)

// Servidor en escucha.
app.listen(port,()=>{
    console.log("El servidor esta funcionando en :",port);
})