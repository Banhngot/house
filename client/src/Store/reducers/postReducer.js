import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  mgs: "",
  count: 0,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
    case actionTypes.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.posts || [],
        mgs: action.mgs || "",
        count: action.count || 0,
      };

    default:
      return state;
  }
};

export default postReducer;
