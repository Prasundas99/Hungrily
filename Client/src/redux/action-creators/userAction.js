import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from '../action-types/';

import { loginUser } from '../../api/user';

export const signInUser = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    const { data } = await loginUser(email, password);
    console.log(data);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });

    //   set userdata in localStorage

    localStorage.setItem('userData', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signOutUser = () => async (dispatch) => {
  // logout by removing localStorage jwt
  localStorage.removeItem('userData');
  dispatch({ type: LOGOUT_USER });
};
