import RecipeSmall from "../Recipe/Recipe-Small";
import SearchBar from "../SearchBar/SearchBar"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getRecipeByName } from "../../redux/actions/index";
import style from "./Home.module.css";
import { useState } from "react";
//import Paginate from "../test/Paginate";

const Home = () => {
    // Hooks para manejar las Busquedas
  const [ search, setSearch ] = useState("");                   // Hook que permite dispachar acctions de REDUX
  const dispatch = useDispatch();                               // Dispachador de Redux
  useEffect(() => { dispatch(getAllRecipes()) },[dispatch])     // Precarga los elementos a mostrar
  const recipes = useSelector((state) => state.sorted);         // Hook de traer data del estado global
  /* HANDLERS */
  const handleSearch = (e) => {
    let str = e.target.value.trim();
    if (str.length){
      //setCurrent(1);
      dispatch(getRecipeByName(e.target.value));
    }else {
      dispatch(getAllRecipes())
      setSearch(e.target.value);
    }
  }
    // Declaramos constantes
    /*
  const RECIPES_PER_PAGE = 9;                                     //postPerPage
  const totalRecipes = recipes.length;                            //totalPosts
  const idxSliceFinish = current * RECIPES_PER_PAGE;  //2do parram slice (inclusivo)
  const idxSliceStart = idxSliceFinish - RECIPES_PER_PAGE;  // obtengo la amplitud a mostrar
  const slicedRecipes = recipes.slice(idxSliceStart, idxSliceFinish);
  */
  

    return(
    <>
      {/* SearchBar && Filters */}
      <div  className={style.centered}>
        <SearchBar find={search} handleSearchChange={handleSearch}/>
      </div>

      {/* Prototype of the view */}
      <div className={style.gridContainer }>
        { recipes.map( (recipe) => {
            return (
              <>
                <RecipeSmall recipe={recipe} />
              </>
            )
          })
        }
      </div>
    </>
    )
  }
  export default Home;

  // {totalRecipes > RECIPES_PER_PAGE && (
  //   <Paginate
  //         current={current}
  //         setCurrent={setCurrent}
  //         totalRecipes={totalRecipes}
  //         recipesPerPage={RECIPES_PER_PAGE}
  //   />
  // )}


  /*
  useEffect(() => {
    didMount
  
    return () => {
      didWillUnmount
    }
  }, [pendienteDe])
  */
 // TODO
 /*

[ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas
por pagina, mostrando las primeros 9 en la primer pagina.
*//*
import { useState } from "react";
import {  sortRecipesHighScore,
          sortRecipesLowScore,
          unsort,
          sortRecipesAsc,
          sortRecipesDesc,
          getRecipeByName
          } from "../../redux/actions/index"*/
/*
switch(sortBy){
      case "asc":
        dispatch(sortRecipesAsc())
        break;
      case "desc":
        dispatch(sortRecipesDesc())
        break;
      case "highScoreFirst":
        dispatch(sortRecipesHighScore())
        break;
      case "lowScoreFirst":
        dispatch(sortRecipesLowScore())
        break;
      case "none":
        dispatch(unsort())
        break;
      default:
        setSortBy("none");
        break;
    }
*/
/*
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
  });
  // Declaramos Sort
  const [sortBy, setSortBy] = useState("none")
  // Dispacho la accion
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(search)
    if(sortBy === "asc") dispatch(sortRecipesAsc())
    if(sortBy === "desc") dispatch(sortRecipesDesc())
    if(sortBy === "highScoreFirst") dispatch(sortRecipesHighScore())
    if(sortBy === "lowScoreFirst") dispatch(sortRecipesLowScore())
    if(sortBy === "none") dispatch(unsort())
    // Al desmontar
    return () => {
      setSortBy("none")
    }
  },[dispatch, sortBy])
  // Hook de traer data del estado global
  const recipes = useSelector((state) => state.sorted);

  */
