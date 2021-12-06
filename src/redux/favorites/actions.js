import * as types from "./actionTypes";
import { request } from "../../const";
import { parseOffers } from "../../utils/parse-offers";
import camelizeObject from "../../utils/camelize-object";
import { removeFromFavorites } from "../../utils/remove-from-favorites";
import { createAction } from '@reduxjs/toolkit';
import { updateOffersAction } from "../hotels/actions";
import { updateCurrentOfferAction } from "../offer/actions";

export const setFavoritesAction = createAction(types.SET_FAVORITES, (favoriteOffers) => ({
  payload: parseOffers(favoriteOffers)
}));

export const resetFavoritesAction = createAction(types.RESET_FAVORITES);

export const removeFromFavoritesAction = createAction(types.REMOVE_FROM_FAVORITES, (favorites, offer) => ({
  payload: removeFromFavorites(favorites, offer)
}));

export const loadFavoritesAsync = () => (dispatch, _getState, api) => (
  api.get(request.get.favorites())
    .then(({ data }) => {
      dispatch(setFavoritesAction(data));
    })
    .catch(() => {})
);

export const postFavoriteAsync = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(request.post.favorite(hotelId, status))
    .then(({ data }) => {
      let offers = _getState().HOTELS.offers;
      let updatedOffer = camelizeObject(data);
      dispatch(updateOffersAction(offers, updatedOffer));
    })
    .catch(() => {})
);

export const postFavoriteFromOfferAsync = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(request.post.favorite(hotelId, status))
    .then(({ data }) => {
      dispatch(updateCurrentOfferAction(camelizeObject(data)));
    })
    .catch(() => {})
);
