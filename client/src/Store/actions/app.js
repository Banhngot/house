import actionTypes from "./actionTypes";
import * as apis from "../../Service/";

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apis.apiGetCategories();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data.response,
        mgs: "",
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        msg: response.data.mgs,
        categories: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      categories: null,
      mgs: error,
    });
  }
};

export const getPrices = () => async (dispatch) => {
  try {
    const response = await apis.apiGetPrices();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PRICE,
        prices: response.data.response.sort((a, b) => {
          return +a.order - +b.order;
        }),
        mgs: "",
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRICE,
        msg: response.data.mgs,
        prices: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRICE,
      prices: null,
      mgs: error,
    });
  }
};

export const getAreas = () => async (dispatch) => {
  try {
    const response = await apis.apiGetAreas();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_AREA,
        areas: response.data.response.sort((a, b) => {
          return +a.order - +b.order;
        }),
        mgs: "",
      });
    } else {
      dispatch({
        type: actionTypes.GET_AREA,
        msg: response.data.mgs,
        areas: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AREA,
      areas: null,
      mgs: error,
    });
  }
};

export const getProvinces = () => async (dispatch) => {
  try {
    const response = await apis.apiGetProvinces();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PROVINCE,
        provinces: response.data.response,
        mgs: "",
      });
    } else {
      dispatch({
        type: actionTypes.GET_PROVINCE,
        msg: response.data.mgs,
        provinces: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROVINCE,
      provinces: null,
      mgs: "",
    });
  }
};
