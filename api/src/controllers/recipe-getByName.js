const axios = require("axios")
const { Recipe } = require('../db.js');
const { Op } = require("sequelize");
const { buildRecipeAPI } = require("./Api-RecipeConverter")
const { API_KEY } = process.env;
const { NO_RESULTS, INVALID_NAME } = require("./error-msgs")
const { LISTA_RECETAS } = require("../utils/API-simulator")
    
const getRecipeByName = async (name) => {
        /* TEST */
    // [ "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]
    await Recipe.create({name: "Alta milanguesa",description: "LA mejor milanesa" })
    await Recipe.create({name: "Morfología de la tortilla",description: "Te morís!!"})
    await Recipe.create({name: "X",description: "X!!", diets: []})
    await Recipe.create({name: "Algo con X",description: "nada por aca!!"})
    await Recipe.create({name: "CANNX",description: "nada por aca!!"})

    /* FIN TEST */

    if( !name.length || !name.trim() ) throw Error(INVALID_NAME)
    let results = [];
        // Obtener datos de la API                                                                          //&titleMatch=${name} &query=${name}     //&number=100

    let apiSearch =  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=3`)
                    .then(response => response.data.results)
        // Los transforma acorde al Model.Recipe los datos recibidos de la api
        apiSearch = apiSearch.map( re => buildRecipeAPI(re))
        
                                                                    
        // FAKE
        // let lista = LISTA_RECETAS.filter(elem => (elem.title.toLowerCase()).includes(name.toLowerCase()))
        // let apiSearch = lista.map( re => buildRecipeAPI(re));
                                                         
    
        // Busca en la DB
    const dbSearch = await Recipe.findAll({where: { name: { [Op.iLike]: `%${name}%` }}})

    // Integra las busquedas
    results = [...apiSearch, ...dbSearch];
    if( !results.length ) throw Error(NO_RESULTS)
    return results;
}

module.exports = {getRecipeByName}