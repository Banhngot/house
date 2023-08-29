import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  mgs: "",
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts || [],
        mgs: action.mgs || "",
      };

    default:
      return state;
  }
};

export default postReducer;
