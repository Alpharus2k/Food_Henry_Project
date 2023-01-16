const { Recipe } = require('../db.js');
const { INVALID_NAME, INVALID_DESCRIPTION } = require("./error-msgs")


const postRecipe = async (name, description,score, stepByStep, dietsIds) => {
    if( !name.trim().length ) throw Error(INVALID_NAME);
    if( !description.trim().length ) throw Error(INVALID_DESCRIPTION);

    const newRecipe = await Recipe.create({name, description, score, stepByStep});

    /* TODO */
    //await newRecipe.setDiet(dietsIds);

    return newRecipe;
}

module.exports = {postRecipe}