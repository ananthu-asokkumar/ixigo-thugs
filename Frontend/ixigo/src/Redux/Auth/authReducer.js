import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionTypes';

// let localStorageValues=

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  data: {
    token: localStorage.getItem('token') || null,
    user: {
      userID: localStorage.getItem('userID') || null,
      email: localStorage.getItem('email') || null,
      name: localStorage.getItem('name') || null,
    },
  },
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return { ...state, isLoading: true };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, data: action.payload };
    case LOGOUT:
      return initState;

    default:
      return state;
  }
};
