import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../constants/User";

import { ROUTING } from "../constants/Routing";

export function login(username, password) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });

    const data = {
      username: window.localStorage.getItem("username") || {},
      password: window.localStorage.getItem("password") || {}
    };

    setTimeout(() => {
      if (username === data.username && password === data.password) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            username,
            password,
            isAuthenticated: true
          }
        });

        dispatch({
          type: ROUTING,
          payload: {
            method: "push",
            nextUrl: "/profile"
          }
        });
      } else {
        dispatch({
          type: LOGIN_FAIL
        });
      }
    }, 2000);
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
