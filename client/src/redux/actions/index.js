import axios from "axios";
// Action Type!!
export const GET_FULL_DETAIL = "GET_FULL_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const GET_RECEPIES_BY_NAME = "GET_RECEPIES_BY_NAME";
export const GET_ALL_RECEPIES = "GET_ALL_RECIPES";
export const SORT_HIGH_SCORE = "SORT_HIGH_SCORE";
export const SORT_LOW_SCORE = "SORT_LOW_SCORE";
export const SORT_ASC = "SORT_ASC";
export const SORT_DESC = "SORT_DESC";
export const UNSORTED = "UNSORTED";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SEARCH_SORT_FILTER = "SEARCH_SORT_FILTER"
export const CREATE_RECIPE = "CREATE_RECIPE";

function dispatchSort(sort) {
  return async(dispatch) => {
    switch( sort ){
      case "desc":
        return await dispatch(sortRecipesDesc());
      case "asc":
        return await dispatch(sortRecipesAsc());
      case "high":
        return await dispatch(sortRecipesHighScore())
      case "low":
        return await dispatch(sortRecipesLowScore())
      default:
        return await dispatch(unSorted())
    }
  }
}
export const createRecipe = (name, description, score, stepByStep, url, dietsIds) => {
  return async (dispatch) => {
    const result = await axios.post(window.env.URL_POST_RECIPE, {name, description, score, stepByStep, url, dietsIds})
    let data = result.data;
    dispatch({type: CREATE_RECIPE, payload: data})
  }
}
export const searchSortFilter = (search, sort, filter) => {
  return async(dispatch) => {
    if(search.trim().length) await dispatch(getRecipeByName(search))
    else await dispatch(getAllRecipes())

    if(sort !== "none")   await dispatch(dispatchSort(sort))
    if(filter !== "none")  await dispatch(filterByDiet(filter))
  }
}

export const getFullDetail = (id) => {
  return async (dispatch) => {
    await dispatch({type: GET_FULL_DETAIL, payload: id});
  }
}
export const filterByDiet = (diet) => {
  return (dispatch) => {
    dispatch({type: FILTER_BY_DIET, payload: diet})
  }
}
export const getDiets = () => async (dispatch) => {
  const apiData = await axios.get(window.env.URL_DIETS)
  let data = apiData.data;
  dispatch({type: GET_DIETS, payload: data})
}
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

  //let url = window.event.URL_RECIPES+`/?name="+${name}`
  let apiData = await axios.get(`http://localhost:3001/recipes/?name=${name}`)
  let data = apiData.data;
  dispatch({type: GET_RECEPIES_BY_NAME, payload: data})
};

export const getAllRecipes = () =>  {
  return function (dispatch) {
    return axios.get(window.env.URL_RECIPES)
                 .then(res => res.data)
                 .then(data => dispatch({type: GET_ALL_RECEPIES, payload: data}))

  };
};
