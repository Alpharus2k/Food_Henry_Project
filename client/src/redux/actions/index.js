import axios from "axios";
// Action Type!!
/*
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS"
*/

export const GET_RECEPIES_BY_NAME = "GET_RECEPIES_BY_NAME";
export const GET_ALL_RECEPIES = "GET_ALL_RECIPES";
export const SORT_HIGH_SCORE = "SORT_HIGH_SCORE";
export const SORT_LOW_SCORE = "SORT_LOW_SCORE";
export const SORT_ASC = "SORT_ASC";
export const SORT_DESC = "SORT_DESC";
export const UNSORTED = "UNSORTED";

export const unSorted = () => {
  return (dispatch) => {
    dispatch({type: UNSORTED})
  }
}
export const sortRecipesAsc = () => {
  return (dispatch) => {
    dispatch({type: SORT_ASC })
  }
}
export const sortRecipesDesc = () => {
  return (dispatch) => {
    dispatch({type: SORT_DESC })
  }
}
export const sortRecipesHighScore = () => {
  return (dispatch) => {
    dispatch({type: SORT_HIGH_SCORE  })
  }
}
export const sortRecipesLowScore = () => {
  return (dispatch) => {
    dispatch({type: SORT_LOW_SCORE })
  }
}
export const getRecipeByName = (name) => async (dispatch) =>{
    await  fetch(`${window.event.URL_RECIPES}/?name=${name}`)
      .then((response) => response.json())
      .then(data => dispatch({type: GET_RECEPIES_BY_NAME, payload: data}))

};
export const getAllRecipes = () =>  {
  return function (dispatch) {
    // window.env.URL_RECIPES "http://localhost:3001/recipes"
    /*
    return await fetch("http://localhost:3001/recipes")
                .then(res => res.json())
                .then(data => dispatch({type: GET_ALL_RECEPIES, payload: data}))
    */
    return axios.get(window.env.URL_RECIPES)
                 .then(res => res.data)
                 .then(data => dispatch({type: GET_ALL_RECEPIES, payload: data}))
    //return dispatch({type: GET_ALL_RECEPIES, payload: testData});
  };
};










/*
export const getRecipeById = (id) => {
    return async (dispatch) => {
      return fetch(`${window.event.URL_RECIPES}/${id}`)
        .then((response) => response.json())
        .then(data => dispatch({type: GET_RECIPE_BY_ID, payload: data}))
      };
  };

  export const createRecipe = (payload) => {
    // Tu código acá

    //payload.id = id;
    return {type: CREATE_RECIPE, payload: payload }
  };
/*
// Inicializamos id en 5, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createTeam, descomentala cuando te haga falta;

let id = 5;

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear un team.
export const createTeam = (payload) => {
  // Tu código acá
  id++;
  payload.id = id;
  return {type: CREATE_TEAM, payload: payload }

};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id del team que queremos eliminar.
export const deleteTeam = (id) => {
  // Tu código acá
  return {type: DELETE_TEAM, payload: id}
};*/
