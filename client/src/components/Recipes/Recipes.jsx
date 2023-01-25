import React from "react";
//import style from "./Recipes.modules.css"
import RecipeSmall from "../Recipe/Recipe-Small";

class Recipes extends React.Component{
    constructor(props){
        super(props);
        this.state = {toShow: []};
    }

    
    render(){
        return (
            <>
                {   this.props.recipes.map( (recipe, index) => {
                        return (
                            <>
                                <RecipeSmall key={index} recipe={recipe} />
                            </>
                        )
                    })
                }
            </>
        )
    }
}

//@connect == Accede al estado Global de Redux conectando al componente
// null a la function que no voy a usar
export default Recipes;
/*
// Permite acceder al estado global
                        // Recibe el estado
const mapStateToProps = (state) => {
    // Selecciona el componente deseado de Estado Global
    return{
        //@recipes == se lo pasará por props
        //@state.recipes == nombre que buscará en el global
        recipes: state.recipes
    }
}
// Permite despachar acciones
// @dispatch funciones con capacidad de Dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        //@getRecipes = se pasa por Props
        //@getAllRecipes = pertenece a Action Creator
        getRecipes: () => dispatch(getAllRecipes())
    }
}

//@connect == Accede al estado Global de Redux conectando al componente
// null a la function que no voy a usar
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);
*/

// Cargo la vista Estandart
  // useEffect(() => {
  // },[recipes])
/*
  // Declaro le State de VISTAS
  const [toShow, setToShow] = useState([]);



  //let index = 0;

  const handleToShow = (toProcess = recipes) => {
    // Agrupar el array en grupos de 9
    let result = [];
    let auxArr = [];
    let countAux = 0;
    const groupBy = 3;
    while (toProcess.length) {
      countAux++;
      if  (countAux > groupBy){
        countAux = 1;
        result.push(auxArr)
        auxArr = [];
      }
      let value = toProcess.shift()
      auxArr.push(value)
    }
    if (auxArr.length) result.push(auxArr)
    setToShow(result)
  }
*/