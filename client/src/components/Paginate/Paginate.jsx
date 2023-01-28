import RecipeSmall from "../Recipe/Recipe-Small";
import style from "./Paginate.module.css";
import { useState } from "react";
import { useEffect } from "react";
const LIMIT_NUMBER_BUTONS = 10;

const Paginate = ({recipes, perPage, totalPages}) =>{
    const [currentPage, setCurrentPage] = useState(1);
    const [toShow, setToShow ] = useState([]);

    useEffect(() => {
        setToShow(recipes.slice(perPage * (currentPage - 1), perPage * currentPage))
    },[currentPage,recipes,perPage])

    // Botones de acceso rapido de paginado
    let buttons = makeButtons(totalPages, currentPage, setCurrentPage);

    return (
        <>
        {/* Prototype of the view */}
            <div className={style.gridContainer }>
            { toShow && toShow.map( (recipe) => {
                return (
                    <div key={recipe.id} className={style.recipe} >
                        <RecipeSmall recipe={recipe} />
                    </div>
                    )
                }
            )}
            </div>
        {/* Pagination */}
            {/* Previous */}
        <div className={style.spaced}>
            <div className={style.pageButton}>
				<button className={ currentPage === 1 ? style.hidden : ""} onClick={() => setCurrentPage(currentPage-1)}>
					&laquo; Prev
				</button>
			</div>
                {/* Numeric Buttons */}
            <div className={style.numericButton}>
                {buttons}
            </div>
                {/* Next */}
            <div className={style.pageButton}>
				<button className={currentPage === totalPages ? style.hidden : ""} onClick={() => setCurrentPage(currentPage+1)}>
                Next &raquo;
				</button>
			</div>
        </div>
        </>
    )
}
export default Paginate;

function makeButtons(totalPages, currentPage, setCurrentPage) {
    const retorno = [];
    for (let i = 0; i < totalPages && i < LIMIT_NUMBER_BUTONS; i++) retorno.push(i+1);
    if(totalPages > LIMIT_NUMBER_BUTONS) retorno.push(totalPages)
    return retorno.map( (elem, index) => {
        return (
            <button className={ currentPage === elem ? style.hidden : ""}
                    key={index}
                    value={elem}
                    onClick={() => setCurrentPage(elem)}
                    >
                {elem}
            </button>
        );
})}
