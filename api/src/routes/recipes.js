const { Router } = require('express');
const router = Router();
const { getRecipeByName } = require("../controllers/recipe-getByName")
const { getRecipeByID } = require("../controllers/recipe-getByID")
const { postRecipe } = require("../controllers/recipe-post")
const { getEveryRecipe } = require("../controllers/recipe-getEverything")

router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        const result = name ? await getRecipeByName( name ): await getEveryRecipe();
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

router.get("/:idReceta", async (req, res) => {
    const { idReceta } = req.params;
    try {
        const result = await getRecipeByID( idReceta );
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});



router.post("/", async (req, res) => {
    const { name, description, score, stepByStep, url, dietsIds } = req.body;
    try {
        const result = await postRecipe(name, description, score, stepByStep, url, dietsIds )
        /*
            RECIBIR Y ASOCIAR Recipe <=> 
        */
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

module.exports = router;