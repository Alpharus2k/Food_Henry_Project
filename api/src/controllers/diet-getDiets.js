const axios = require("axios")
const { Diet } = require('../db.js');
//const { Op } = require("sequelize");
const { API_KEY } = process.env;
const { buildDietAPI } = require("./Api-DietConverter")

const getDiets = async () => {
    /* TEST */
    /*
    await Diet.create({name: "Una muy estupida"})
    await Diet.create({name: "Kamikaze"})
    await Diet.create({name: "Gatotariana"})
    /* FIN TEST */
    // Busca en la DB
    const dbSearch = await Diet.findAll();
    if( !dbSearch.length ){
        // Obtener datos de la API - NO SE COMO AUN
    /*
    let apiSearch = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
                    .then(response => response.data.results)
    apiSearch = apiSearch.map(rec => rec.diets);
    let auxArr = []
    apiSearch.forEach(element => {
        auxArr = [...auxArr, ...element]
    });
    auxArr = [...new Set(auxArr)]
    */
    let apiSearch = [ "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]

    const aux = apiSearch.map(diet => buildDietAPI( diet ));
    //const aux = auxArr.map(diet => buildDietAPI( diet ));
    console.log(aux);
    return await Diet.bulkCreate(aux);
    //return await Promise.all(aux.map(d => Diet.create(d)));
    }

    return dbSearch;
}

module.exports = {getDiets}