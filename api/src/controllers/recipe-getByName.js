const axios = require("axios")
const { Recipe, Diet } = require('../db.js');
const { Op } = require("sequelize");
const { buildRecipeAPI } = require("./Api-RecipeConverter")
const { API_KEY } = process.env;
const { NO_RESULTS, INVALID_NAME } = require("./error-msgs")


const getRecipeByName = async (name) => {

    if( !name.length || !name.trim() ) throw Error(INVALID_NAME)
    let results = [];
        // Obtener datos de la API                                                                          //&titleMatch=${name} &query=${name}     //&number=100

    let apiSearch =  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=21`)
                    .then(response => response.data.results)
        // Los transforma acorde al Model.Recipe los datos recibidos de la api
        apiSearch = apiSearch.map( re => buildRecipeAPI(re))

        // Busca en la DB
    const dbSearch = await Recipe.findAll({where: { name: { [Op.iLike]: `%${name}%` }}, include: {
        model: Diet,
        attributes: ["name"],
            through: {
                attributes: [],
            }
    }})

    // Integra las busquedas
    results = [...dbSearch, ...apiSearch];
    if( !results.length ) throw Error(NO_RESULTS)
    return results;
}

module.exports = {getRecipeByName}