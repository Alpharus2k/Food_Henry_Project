const { Recipe } = require('../db.js');
const { INVALID_NAME, INVALID_DESCRIPTION } = require("./error-msgs")


const postRecipe = async (name, description,score, stepByStep) => {
    if( !name.trim().length ) throw Error(INVALID_NAME);
    if( !description.trim().length ) throw Error(INVALID_DESCRIPTION);

    return await Recipe.create({name, description, score, stepByStep});
}

module.exports = {postRecipe}