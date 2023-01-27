//import { useState } from "react"
import style from "./Recipe-Small.module.css"

const RecipeSmall = ({recipe}) => {
    /*{
        id: 0,
        url: "",
        name: "",
        description: "",
        score: -1,
        stepByStep: "",
        url: ""
    })*/
    //let path = "/create/"+recipe.id;
    let diets = recipe.diets ? recipe.diets.join(", ") : "Dieta sin especificar"
    return (
        <div key={recipe.id} className={style.recipe} >
            <img src={recipe?.url} alt={recipe?.name} />
            <h2>{recipe?.name}</h2>
            <p><b>Diets:  </b>{diets}</p>
            <p><b>Healty Score:  </b>{recipe.score}</p>
        </div>
    )
}

export default RecipeSmall
