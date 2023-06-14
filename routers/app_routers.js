const express = require("express")

// Creación de objeto enrutador(proporciona una forma de definir rutas y manejar solicitudes) con express.
const router = express.Router()
const controladores = require("../controllers/app_controllers")

// Establecimiento de rutas en el enrutador.

router.get("/", controladores.get)
router.post("/", controladores.post)
router.put("/", controladores.put)
router.delete("/", controladores.delete)

// Exportacion de la variable router, haciendo que sea accesible desde otros directorios del proyecto.
module.exports = router;