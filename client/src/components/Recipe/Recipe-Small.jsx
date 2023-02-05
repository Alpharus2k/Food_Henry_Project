import dietsConverter from "../Utils/Diets-Converter"
import style from "./Recipe-Small.module.css"

const RecipeSmall = ({recipe}) => {
    const diets = dietsConverter(recipe);
    
    return (
        <>
            <img src={recipe?.url} alt={recipe?.name} className={style.recipe__img}/>
            <h2 className={style.recipe__h2}>{recipe?.name}</h2>
            <p className={style.recipe__p} ><b>Diets:  </b>{diets}</p>
            <p className={style.lastElem} ><b>Healty Score:  </b>{recipe.score}</p>

        </>
    )
}

export default RecipeSmall
