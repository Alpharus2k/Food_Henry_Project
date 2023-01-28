import RecipeSmall from "../Recipe/Recipe-Small";
import style from "./Paginate.module.css";
import { useState } from "react";
import { useEffect } from "react";

const Paginate = ({recipes, perPage, totalPages}) =>{
    const [currentPage, setCurrentPage] = useState(1);
    const [toShow, setToShow ] = useState([]);

    useEffect(() => {
        setToShow(recipes.slice(perPage * (currentPage - 1), perPage * currentPage))
    },[currentPage,recipes,perPage])

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
        <div className={style.spaced}>
            <div className={style.pageButton}>
				<button className={ currentPage === 1 ? style.hidden : ""} onClick={() => setCurrentPage(currentPage-1)}>
					&laquo; Previous
				</button>
			</div>
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