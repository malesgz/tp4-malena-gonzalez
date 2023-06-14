// Controlador, encargado de manejar las solicitudes y respuestas del servidor.

peticion = {};

peticion.get = (req, res) => {
    res.send("Petición - GET ")
}


peticion.post=(req,res)=>{
    res.send("Petición - POST")
}


peticion.put=(req,res)=>{
    res.send("Petición - PUT")
}


peticion.delete=(req,res)=>{
    res.send("Petición - DELETE")
}

//Exportacion de la variable petición, haciendo que sea accesible desde otros directorios del proyecto.
module.exports = peticion;