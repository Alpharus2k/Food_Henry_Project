//import { useState } from "react"
import style from "./Recipe-Small.module.css"

const RecipeSmall = ({recipe}) => {
    /*const [state, setState] = useState({
        id: -1,
        url: "",
        name: "",
        description: "",
        score: -1,
        stepByStep: "",
        url: ""
    })*/

    let diets = recipe.diets ? recipe.diets.join(", ") : "Dieta sin especificar"
    return (
        <div key={recipe.id} className={style.recipe}>
            <img src={recipe?.url} alt={recipe?.name} />
            <h2>{recipe?.name}</h2>
            <p>{diets}</p>
        </div>
    )
}

export default RecipeSmall
