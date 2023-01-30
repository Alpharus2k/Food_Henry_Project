import {  GET_ALL_RECEPIES,
          SORT_HIGH_SCORE,
          SORT_LOW_SCORE,
          SORT_ASC,
          SORT_DESC,
          GET_RECEPIES_BY_NAME,
          UNSORTED,
          GET_DIETS,
          FILTER_BY_DIET,
          GET_FULL_DETAIL,
           } from "../actions/index"

//  GET_RECIPE_BY_ID, GET_DIETS, CREATE_RECIPE

// @initialState == estado inicial del REDUCER
const initialState = {
  recipes: [],
  sorted: [],
  diets: [],
  recipeFull: [],
};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FULL_DETAIL:
      return {...state, recipeFull: state.recipes.find(rec => rec.id.toString() === action.payload.toString()) }
    case GET_ALL_RECEPIES:
      return {...state, recipes: action.payload, sorted: action.payload}
    case SORT_HIGH_SCORE:
      return {...state, sorted: [ ...state.sorted.sort((a,b) => {return b.score - a.score })] }
    case SORT_LOW_SCORE:
      return {...state, sorted: [ ...state.sorted.sort((a,b) => {return a.score - b.score })] }
    case SORT_ASC:
      return { ...state, sorted: [ ...state.sorted.sort((a,b) => { return b.name > a.name ? -1 : b.name === a.name ? 0 : 1 })]}
    case SORT_DESC:
      return { ...state, sorted: [ ...state.sorted.sort((a,b) => { return a.name > b.name ? -1 : a.name === b.name ? 0 : 1 })]}
    case UNSORTED:
      return { ...state, sorted: [...state.recipes]}
    case GET_RECEPIES_BY_NAME:
       return {...state, recipes: [...action.payload], sorted: [...action.payload]}
    case GET_DIETS:
      return {...state, diets: action.payload}
    case FILTER_BY_DIET:
      return {...state, sorted: [...state.sorted.filter((rec) => rec.diets && rec.diets.includes(action.payload))]}
    // case GET_RECIPE_BY_ID:
    //   return {...state, recipe: [...state.recipe, action.payload]}
    default:
      return { ...state };
  }
}

export default rootReducer;
