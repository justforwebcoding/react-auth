import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../constants/User";

window.localStorage.setItem("username", "admin");
window.localStorage.setItem("password", "12345");

const userstate = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("REQUEST");
      return state;

    case LOGIN_FAIL:
      console.log("FAIL");
      return state;

    case LOGIN_SUCCESS:
      console.log("SUCCESS");
      console.log(action.payload);
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        isAuthenticated: action.payload.isAuthenticated
      };

    case LOGOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default userstate;
