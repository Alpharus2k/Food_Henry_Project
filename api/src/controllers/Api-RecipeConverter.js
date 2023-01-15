const { Recipe } = require('../db.js');

module.exports = {
    buildRecipeAPI: (apiObj) => {
        const recipeAttrs = Object.keys(Recipe["rawAttributes"]);
        let retorno = {}
        recipeAttrs.forEach(elem => {
        switch (elem) {
            case "id":
                retorno[elem] = apiObj.id;
                break;
            case "name":
                retorno[elem] = apiObj.title;
                break;
            case "description":
                /* split ear por propaganda.. quedarse con [0] */
                retorno[elem] = apiObj.summary.split("<a href=")[0];
                break;
            case "score":
                retorno[elem] = apiObj.healthScore;
                break;
            case "stepByStep":
                /* AGREGAR PROCESADOR DE INSTRUCCIONES */
                // TODO
                retorno[elem] = apiObj.analyzedInstructions;
                break;
            default:
                //throw Error("SE MODIFICÓ 'MODEL DE RECIPE' FALTA MODIFICAR EL CONTROLER")
                break;
            }
        });
        return retorno;
    }
}
