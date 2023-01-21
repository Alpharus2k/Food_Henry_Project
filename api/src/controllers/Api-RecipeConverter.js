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
                /* split por propaganda.. quedarse con [0] */
                /* luego partimos por oracion y componemos todas menos la ultima */
                let porOracion = apiObj.summary.split("<a href=")[0].split(". ")
                let compuesto = "";
                for (let i = 0; i < porOracion.length-1; i++) {
                    compuesto += porOracion[i]+". ";
                }
                retorno[elem] = compuesto;
                break;
            case "score":
                retorno[elem] = apiObj.healthScore;
                break;
            case "stepByStep":
                // let pasosArr = apiObj.analyzedInstructions[0]["steps"];
                // let pasosStr = "";
                // for (let i = 0; i < pasosArr.length; i++) {
                //     pasosStr += pasosArr[i].number +". "+ pasosArr[i].step+"\n ";
                // }
                // retorno[elem] = pasosStr;
                retorno[elem]=apiObj.analyzedInstructions[0]
                break;
            default:
                //throw Error("SE MODIFICÓ 'MODEL DE RECIPE' FALTA MODIFICAR EL CONTROLER")
                break;
            }
        });
        return retorno;
    }
}
