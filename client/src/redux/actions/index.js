//const {} process.env;

// Action Type!!
export const GET_ALL_RECEPIES = "GET_ALL_RECIPES";
/*
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECEPIES_BY_NAME = "GET_RECEPIES_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";

//export const GET_DIETS = "GET_DIETS"
*/
export const getAllRecipes = () =>  {
  return async function (dispatch) {
    //return await fetch(`${window.event.URL_RECIPES}`)
    return await fetch(`http://localhost:3001/recipes`)
      .then((response) => response.json())
      .then(data => dispatch({type: GET_ALL_RECEPIES, payload: data}))
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
export const getRecipeByName = (name) => {
    return async (dispatch) => {
      return fetch(`${window.event.URL_RECIPES}/?name=${name}`)
        .then((response) => response.json())
        .then(data => dispatch({type: GET_RECEPIES_BY_NAME, payload: data}))
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
