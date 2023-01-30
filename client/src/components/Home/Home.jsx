import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions/index";
import style from "./Home.module.css";

const Home = () => {
    // Hooks para manejar las Busquedas
  const dispatch = useDispatch();                               // Dispachador de Redux
  useEffect(() => { dispatch(getAllRecipes()) },[dispatch])     // Precarga los elementos a mostrar
  const recipes = useSelector((state) => state.sorted);         // Hook de traer data del estado global

    /* Constants */
    const RECIPE_PER_PAGE = 9;
    const totalPages = Math.ceil(recipes.length / RECIPE_PER_PAGE)
    return(
    <>
      {/* SearchBar && Filters */}
      <div  className={style.centered}>
        <SearchBar />
      </div>

      <Paginate recipes={recipes} perPage={RECIPE_PER_PAGE} totalPages={totalPages}/>
    </>
    )
  }
  export default Home;