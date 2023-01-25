import Recipes from "../Recipes/Recipes";
//import SearchBar from "../SearchBar/SearchBar"
import { useEffect } from "react";
//import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions/index";
import style from "./Home.module.css";

function Home(){
  // Hook que permite dispachar acctions de REDUX
  const dispatch = useDispatch();

  // Dispacho la accion
  useEffect(() => {
    dispatch(getAllRecipes());
  },[dispatch])

  // Hook de traer data del estado global
  const recipes = useSelector((state) => state.recipes);


    return(
    <>
      {/* <div className="centered">
        <SearchBar />
      </div> */}
 
      <p>Guelcome Home!</p>
      <p>{recipes.length} YEY!!</p>
      <div className={style.gridContainer}>
        <Recipes recipes={recipes}></Recipes>
      </div>
    </>
    )
  }
  export default Home;

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
 [ ] Botones/Opciones para filtrar por por tipo de dieta
[ ] Botones/Opciones para ordenar tanto ascendentemente como 
descendentemente las recetas por orden alfabético y por health score 
(nivel de comida saludable).
[ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas 
por pagina, mostrando las primeros 9 en la primer pagina.
*/