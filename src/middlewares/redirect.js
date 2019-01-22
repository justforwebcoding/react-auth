import { history } from "../store";

import { ROUTING } from "../store/constants/Routing";

export const redirect = store => next => action => {
  if (action.type === ROUTING) {
    history[action.payload.method](action.payload.nextUrl);
  }

  return next(action);
};
