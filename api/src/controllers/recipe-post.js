const { Recipe, Diet } = require('../db.js');
const { INVALID_NAME, INVALID_DESCRIPTION } = require("./error-msgs")


const postRecipe = async (name, description, score, stepByStep, url, dietsIds) => {
    if( !name.trim().length ) throw Error(INVALID_NAME);
    if( !description.trim().length ) throw Error(INVALID_DESCRIPTION);

    const newRecipe = await Recipe.create({name, description, score, stepByStep, url});

    if(dietsIds.length) {
        const diets = await Diet.findAll({where: {id: dietsIds }})
        newRecipe.addDiets(diets)
    }
    return newRecipe;
}

module.exports = {postRecipe}