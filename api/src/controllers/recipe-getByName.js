const axios = require("axios")
const { Recipe } = require('../db.js');
const { Op } = require("sequelize");
const { buildRecipeAPI } = require("./Api-RecipeConverter")
const { API_KEY } = process.env;
const { NO_RESULTS, INVALID_NAME } = require("./error-msgs")

const getRecipeByName = async (name) => {
    /* TEST */
    /*
    await Recipe.create({name: "Alta milanguesa",description: "LA mejor milanesa"})
    await Recipe.create({name: "Morfología de la tortilla",description: "Te morís!!"})
    await Recipe.create({name: "X",description: "X!!"})
    await Recipe.create({name: "Algo con X",description: "nada por aca!!"})
    /* FIN TEST */

    if( !name.length || !name.trim() ) throw Error(INVALID_NAME)
    let results = [];

    // Obtener datos de la API                                                                          //&titleMatch=${name} &query=${name}     //&number=100
    let apiSearch =   await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true `)
                        .then(response => response.data.results)

    // Los transforma acorde al Model.Recipe los datos recibidos de la api
    apiSearch = apiSearch.map( re => buildRecipeAPI(re))

    // Busca en la DB
    const dbSearch = await Recipe.findAll({where: { name: { [Op.iLike]: `%${name}%` }}})

    // Integra las busquedas
    results = [...apiSearch, ...dbSearch];
    if( !results.length ) throw Error(NO_RESULTS)
    return results;
}

module.exports = {getRecipeByName}