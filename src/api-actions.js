import {ActionCreator} from "./action";
import {AppRoute, AuthorizationStatus} from "./const";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .then(() => dispatch(ActionCreator.changeOffers()));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
  .then(() => dispatch.ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
  .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => localStorage.setItem(`token`, data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT))))
);
