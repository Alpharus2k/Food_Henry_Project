const { Recipe } = require('../db.js');
const { INVALID_NAME, INVALID_DESCRIPTION } = require("./error-msgs")


const postRecipe = async (name, description, score, stepByStep, url, dietsIds) => {
    if( !name.trim().length ) throw Error(INVALID_NAME);
    if( !description.trim().length ) throw Error(INVALID_DESCRIPTION);

    const newRecipe = await Recipe.create({name, description, score, stepByStep, url});
    
    /* TODO */
    console.log(dietsIds);
    console.log(newRecipe.dataValues);
    if(dietsIds.length) await newRecipe.setDiets(dietsIds);
    
    /* VERIFICAR el recipe a ver que contiene */
                                          
    
    return newRecipe;
}

module.exports = {postRecipe}