const axios = require("axios")
const { Recipe } = require('../db.js');
const { buildRecipeAPI } = require("./Api-RecipeConverter")
const { API_KEY } = process.env;
const { NO_RESULTS } = require("./error-msgs")
//FAKE DATA
const { LISTA_RECETAS } = require("../utils/API-simulator")
const getEveryRecipe = async () => {
    /* TEST */
    /*
    await Recipe.create({name: "Alta milanguesa",description: "LA mejor milanesa"})
    await Recipe.create({name: "Morfología de la tortilla",description: "Te morís!!"})
    await Recipe.create({name: "X",description: "X!!"})
    await Recipe.create({name: "Algo con X",description: "nada por aca!!"})
    /* FIN TEST */

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
    let apiSearch = LISTA_RECETAS.map( re => buildRecipeAPI(re));
                                                   
    // Busca en la DB
    const dbSearch = await Recipe.findAll()

    // Integra las busquedas
    results = [...apiSearch, ...dbSearch];
    if( !results.length ) throw Error(NO_RESULTS)
    return results;
}

module.exports = {getEveryRecipe}