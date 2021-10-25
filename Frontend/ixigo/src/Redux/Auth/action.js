import axios from 'axios';
import {
  FETCH_USER,
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionTypes';

export const fetchUser = () => async (dispatch) => {
  const user = await axios.get('/api/user');

  dispatch({ type: FETCH_USER, payload: user.data });
};
export const login = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  try {
    const user = await axios.post(/* 'https://ixigo-thugs.herokuapp.com/auth/login' */ payload);
    localStorage.setItem("userID",user.data.user.userID)
    localStorage.setItem("email",user.data.user.email)
    localStorage.setItem("name",user.data.user.name)
    localStorage.setItem("token",user.data.token)
    dispatch({ type: LOGIN_SUCCESS, payload: user.data });
  } catch (error) {
    console.log('login Failed');
    dispatch({ type: LOGIN_FAILURE });
  }

};

export const logout =()=>{
  return {type:LOGOUT}
}
