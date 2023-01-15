const { Router } = require('express');
const router = Router();

const { getDiets } = require("../controllers/diet-getDiets")

router.get("/", async (req, res) => {
    try {
        const result = await getDiets();
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});


module.exports = router;