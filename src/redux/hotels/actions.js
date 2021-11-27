import * as types from "./actionTypes";
import { DEFAULT_CITY, request } from "../../const";
import { parseOffers } from "../../utils/parse-offers";
import { getOffersByCity } from "../../utils/get-offers-by-city";
import { createAction } from '@reduxjs/toolkit';
import replaceOffer from "../../utils/replace-offer";

export const setAllOffersAction = createAction(types.SET_ALL_OFFERS, (data) => ({
  payload: parseOffers(data)
}));

export const setCityAction = createAction(types.SET_CITY, (city) => ({
  payload: city
}));

export const setOffersAction = createAction(types.SET_OFFERS, (offers) => ({
  payload: offers
}));

export const setCurrentFilterAction = createAction(types.SET_CURRENT_FILTER, (filterName) => ({
  payload: filterName
}));

export const sortOffersAction = createAction(types.SORT_OFFERS);

export const resetOffersAction = createAction(types.RESET_OFFERS);

export const updateOffersAction = createAction(types.UPDATE_OFFERS, (offers, offer) => ({
  payload: replaceOffer(offers, offer)
}));

// Asynchronous actions
export const loadAllOffersAsync = () => (dispatch, _getState, api) => (
  api.get(request.get.hotels())
    .then(({ data }) => {
      dispatch(setAllOffersAction(data));
      dispatch(setCityAction(DEFAULT_CITY));
      dispatch(setOffersAction(getOffersByCity(DEFAULT_CITY, parseOffers(data))));
    })
);
