import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

import { redirect } from "../middlewares/redirect";

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, redirect));
}
