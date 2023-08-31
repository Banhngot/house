import actionTypes from "./actionTypes";
import * as apis from "../../Service/";

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apis.apiGetCategories();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data.response,
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
    });
  }
};
