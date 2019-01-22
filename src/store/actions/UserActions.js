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

    setTimeout(() => {
      if (username === "admin" && password === "12345") {
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
            method: "replace",
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
