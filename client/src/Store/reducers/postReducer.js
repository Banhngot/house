import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  mgs: "",
  count: 0,
  newPost: [],
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
    case actionTypes.GET_NEW_POST:
      return {
        ...state,

        mgs: action.mgs || "",
        newPosts: action.newPosts || [],
      };

    default:
      return state;
  }
};

export default postReducer;
