import { GET_ALL_RECEPIES } from "../actions/index"
//  GET_RECEPIES_BY_NAME, GET_RECIPE_BY_ID, GET_DIETS, CREATE_RECIPE

// @initialState == estado inicial del REDUCER
const initialState = {
  recipes: [],
  recipe: {},
  diets: [],
};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECEPIES:
      return {...state, recipes: action.payload}
    // case GET_RECEPIES_BY_NAME:
    //   return {...state, recipes: [...state.recipes, action.payload]}
    // case GET_RECIPE_BY_ID:
    //   return {...state, recipe: [...state.recipe, action.payload]}
    default:
      return { ...state };
  }
}

export default rootReducer;
