import actionTypes from "./actionTypes";
import {
  apiGetNewPosts,
  apiGetPosts,
  apiGetPostsLimit,
  apiGetPostsLimitAdmin,
} from "../../Service/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.data.mgs,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};

export const getPostsLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(query);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: response.data.mgs,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};

export const getNewPosts = () => async (dispatch) => {
  try {
    const response = await apiGetNewPosts();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        newPosts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        msg: response.data.mgs,
        newPosts: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEW_POST,
      newPosts: null,
    });
  }
};
export const getOutStandingPost = () => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit({
      limitPost: 5,
      order: ["star", "DESC"],
    });

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_OUTSTANDING,
        outStandingPost: response.data.response.rows,
      });
    } else {
      dispatch({
        type: actionTypes.GET_OUTSTANDING,
        msg: response.data.mgs,
        outStandingPost: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_OUTSTANDING,
      outStandingPost: null,
    });
  }
};

export const getPostsLimitAdmin = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimitAdmin(query);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_ADMIN,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_ADMIN,
        msg: response.data.mgs,
        post: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_ADMIN,
      posts: null,
    });
  }
};

export const editData = (dataEdit) => ({
  type: actionTypes.EDIT_DATA,
  dataEdit,
});

export const resetDataEdit = () => ({
  type: actionTypes.RESET_DATAEDIT,
});
