import actionTypes from "../actions/actionTypes";

const initState = {
  mgs: "",
  categories: [],
  prices: [],
  areas: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories || [],
        mgs: action.mgs || "",
      };
    case actionTypes.GET_PRICE:
      return {
        ...state,
        prices: action.prices || [],
        mgs: action.mgs || "",
      };
    case actionTypes.GET_AREA:
      return {
        ...state,
        areas: action.areas || [],
        mgs: action.mgs || "",
      };

    default:
      return state;
  }
};

export default appReducer;
