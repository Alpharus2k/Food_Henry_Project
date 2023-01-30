//import { Link } from "react-router-dom";
import style from "./Recipe-Small.module.css"

const RecipeSmall = ({recipe}) => {
    /* TODO
        LINK a FULL RECIPE
    */
    let diets = recipe.diets && recipe.diets.length > 0 ? recipe.diets.join(", ") : "Dieta sin especificar";
    return (
        <>
            <img src={recipe?.url} alt={recipe?.name} className={style.recipe__img}/>
            <h2 className={style.recipe__h2}>{recipe?.name}</h2>
            <p className={style.recipe__p}><b>Diets:  </b>{diets}</p>
            <p className={style.recipe__p}><b>Healty Score:  </b>{recipe.score}</p>
        </>
    )
}

export default RecipeSmall
