import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  mgs: "",
  count: 0,
  newPost: [],
  postOfCurrent: [],
  dataEdit: {},
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
    case actionTypes.GET_POST_ADMIN:
      return {
        ...state,
        mgs: action.mgs || "",
        postOfCurrent: action.posts || [],
      };
    case actionTypes.EDIT_DATA:
      return {
        ...state,
        dataEdit: action.dataEdit || {},
      };

    default:
      return state;
  }
};

export default postReducer;
