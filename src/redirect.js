import * as types from "./redux/redirect/actionTypes";

import browserHistory from "./browser-history";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === types.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
