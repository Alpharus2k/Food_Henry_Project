const { Router }    = require('express');
// Importar todos los routers;
const recipesRouter = require("./recipes.js")
const dietsRouter   = require("./diets.js")

const router = Router();

// Configurar los routers
router.use("/recipes", recipesRouter)
router.use("/diets", dietsRouter)

module.exports = router;
