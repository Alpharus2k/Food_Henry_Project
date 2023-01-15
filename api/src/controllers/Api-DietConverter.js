const { Diet } = require('../db.js');

module.exports = {
    buildDietAPI: (diet) => {
        const recipeAttrs = Object.keys(Diet["rawAttributes"]);
        let retorno = {}
        recipeAttrs.forEach(elem => {
        switch (elem) {
            case "id":
                // No hacemos NADA
                break;
            case "name":
                retorno[elem] = diet;
                break;
            default:
                //throw Error("SE MODIFICÓ 'MODEL DE DIET' FALTA MODIFICAR EL CONTROLER")
                break;
            }
        });
        return retorno;
    }
}
