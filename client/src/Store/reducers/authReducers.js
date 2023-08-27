import actionTypes from "../actions/actionTypes";

const initState = {
  isLoggedIn: false,
  token: null,
  mgs: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
        mgs: "",
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        mgs: action.data,
        token: null,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        mgs: "",
      };

    default:
      return state;
  }
};

export default authReducer;
