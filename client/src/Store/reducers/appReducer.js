import actionTypes from "../actions/actionTypes";

const initState = {
  mgs: "",
  categories: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories || [],
        mgs: action.mgs || "",
      };

    default:
      return state;
  }
};

export default appReducer;
