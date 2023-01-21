import React from "react";
import style from "./Recipes.modules.css"
import { connect } from "react-redux";
import { getAllRecipes } from "../../redux/actions/index"

class Recipes extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)
        // console.log(props)
        this.props.getRecipes();
    }

    render(){
        return (
            <div className={style.grid}>
                <h1>{this.props.recipes.length}</h1>
            
            </div>
        )
    }
}
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