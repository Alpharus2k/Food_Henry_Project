const axios = require("axios")
const { Recipe, Diet } = require('../db.js');
const { buildRecipeAPI } = require("./Api-RecipeConverter")
const { API_KEY } = process.env;
const { NO_RESULTS } = require("./error-msgs")
//FAKE DATA
const { LISTA_RECETAS } = require("../utils/FakeData")
const { FAKE } = require("../utils/processedFake")

const getEveryRecipe = async () => {
    let results = [];
    /*
    // Obtener datos de la API                                                                                                   //&number=100
    let apiSearch = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
                    .then(response => response.data.results)
    // Los transforma acorde al Model.Recipe los datos recibidos de la api
    if (Array.isArray(apiSearch) && apiSearch.length) {
        apiSearch = apiSearch.map( re => buildRecipeAPI(re));
    }
                                                         
   //*     FAKE DATA       */
    let apiSearch = FAKE;
                                                           

    // Busca en la DB
    const dbSearch = await Recipe.findAll({include: {
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

module.exports = {getEveryRecipe}