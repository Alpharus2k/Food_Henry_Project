const axios = require("axios")
const { Recipe } = require('../db.js');
//const { Op } = require("sequelize");
const { buildRecipeAPI } = require("./Api-RecipeConverter")
const { API_KEY } = process.env;
const { NO_RESULTS, INVALID_ID } = require("./error-msgs")
const UUID_REGEX = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;


const getRecipeByID = async (id) => {
    // Valida si el ID es NUMBER ó UUID
    if( !Number.isInteger( Number(id) ) && !UUID_REGEX.test( id )) throw Error(INVALID_ID)

    let result ;

    if (UUID_REGEX.test( id )){
        // Busca en la DB
        result = await Recipe.findByPk( id );
    }else {
        // Obtener datos de la API
        let res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`)

        // Los transforma acorde al Model.Recipe los datos recibidos de la api
        result = buildRecipeAPI( res.data );
    }

    if( Object.keys(result).length === 0 ) throw Error(NO_RESULTS)
    return result;
}

module.exports = {getRecipeByID}