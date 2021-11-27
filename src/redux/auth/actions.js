import * as types from "./actionTypes";
import { request, AuthorizationStatus } from "../../const";
import { redirectToRouteAction } from "../redirect/actions";
import { createAction } from '@reduxjs/toolkit';

export const requireAuthorizationAction = createAction(types.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status
}));

export const logoutAction = createAction(types.LOGOUT, () => ({
  payload: AuthorizationStatus.NO_AUTH
}));

export const setIsAuthCheckedAction = createAction(types.SET_IS_AUTH_CHECKED, () => ({
  payload: true
}));


// Asynchronous actions
export const checkAuthAsync = () => (dispatch, _getState, api) => (
  api.get(request.get.login())
    .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const loginAsync = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(request.post.login(), { email, password })
    .then(({ data }) => localStorage.setItem(`token`, data.token))
    .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRouteAction(request.path.root())))
);

export const logoutAsync = () => (dispatch, _getState, api) => (
  api.get(request.get.logout())
    .then(() => {
      localStorage.removeItem(`token`);
      dispatch(logoutAction());
    })
);
