const { Recipe } = require('../db.js');

module.exports = {
    buildRecipeAPI: (apiObj) => {
        let recipeAttrs = Object.keys(Recipe["rawAttributes"]);
        recipeAttrs.push("diets");
        let retorno = {}
        recipeAttrs.forEach(elem => {
        switch (elem) {
            case "id":
                retorno[elem] = apiObj.id;
                break;
            case "dishTypes":
                retorno[elem] = apiObj.dishTypes ? apiObj.dishTypes : null;
            case "name":
                retorno[elem] = apiObj.title;
                break;
            case "description":
                retorno[elem] = processDescription(apiObj.summary);
                break;
            case "score":
                // Asumimos que está entre los rangos aceptables y validados
                retorno[elem] = apiObj.healthScore;
                break;
            case "stepByStep":
                //if (!obj.hasOwnProperty("steps")) return "";
                retorno[elem] = apiObj.analyzedInstructions[0] ? processStepByStep(apiObj.analyzedInstructions[0]) : ""
                break;
            case "url":
                //Podemos procesar esto agregando img por Default y/o en el front por si el url no existe
                retorno[elem] = apiObj.image;
                break;
            case "diets":
                retorno[elem] = processDiets(apiObj.diets, apiObj["lowFodmap"]);
                break;
            default:
                //throw Error("SE MODIFICÓ 'MODEL DE RECIPE' FALTA MODIFICAR EL CONTROLER")
                break;
            }
        });
        return retorno;
    }
}
function processStepByStep(obj) {

    let pasosArr = obj["steps"];
    let pasosStr = "";
    for (let i = 0; i < pasosArr.length; i++) {
        pasosStr += "<h6><b>"+pasosArr[i].number +".</b> "+ pasosArr[i].step+"</h6><br>";
    }
    return pasosStr;
}
function processDiets(arr, lowFodmap = false) {
    let results = lowFodmap ? ["Low FODMAP"] : [];
    for (let i = 0; i < arr.length; i++) {
        let diet = arr[i];
        switch (diet) {
            case "gluten free":
                results.push("Gluten Free");
                break;
            case "lacto ovo vegetarian":
                results.push("Lacto-Vegetarian");
                results.push("Ovo-Vegetarian");
                results.push("Vegetarian")
                break;
            case "dairy free":
                // TODO
                // Se Requiere busqueda por Ingrediente en la API Spoon... para validar
                // results.push()
                break;
            case "vegan":
                results.push("Vegan");
                break;
            case "paleolithic":
                results.push("Paleo");
                break;
            case "primal":
                results.push("Primal");
                break;
            case "whole 30":
                results.push("Whole30");
                break;
            case "pescatarian":
                results.push("Pescetarian")
            default:
                break;
        }
    }
    return [...new Set(results)]
}
function processDescription(desc) {
    /* split por propaganda.. quedarse con [0] */
    /* luego partimos por oracion y componemos todas menos la ultima */
    let porOracion = desc.split("<a href=")[0].split(". ")
    let result = "";
    // Reconstruimos el String agregando . (punto)
    // Evitando el ultimo elemento
    for (let i = 0; i < porOracion.length-1; i++) {
        result += porOracion[i]+". ";
    }
    return result.replaceAll("<b>","").replaceAll("</b>","");
}