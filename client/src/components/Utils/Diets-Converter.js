export default function dietsConverter(recipe) {
    let diets = "";
    if(recipe.diets && recipe.diets.length > 0){
        if(typeof  recipe.diets[0] === "string" ) diets = recipe.diets.join(", ")
        else diets = recipe.diets.map( elem => elem.name).join(", ")
    }else diets ="Dieta sin especificar"
    return diets;
}