import * as types from "./actionTypes";
import { createAction } from '@reduxjs/toolkit';

export const redirectToRouteAction = createAction(types.REDIRECT_TO_ROUTE, (url) => ({
  payload: url
}));
