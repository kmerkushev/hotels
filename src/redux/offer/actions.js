import * as types from "./actionTypes";
import { request } from "../../const";
import camelizeObject from "../../utils/camelize-object";
import { parseOffers } from "../../utils/parse-offers";
import sortCommentsByDate from "../../utils/sort-comment-by-date";
import { createAction } from '@reduxjs/toolkit';

export const setCurrentOfferAction = createAction(types.SET_CURRENT_OFFER, (currentOffer) => ({
  payload: currentOffer
}));

export const loadCommentsAction = createAction(types.LOAD_COMMENTS, (isCommentsLoaded) => ({
  payload: isCommentsLoaded
}));

export const setCommentsAction = createAction(types.SET_COMMENTS, (comments) => ({
  payload: sortCommentsByDate(parseOffers(comments))
}));

export const loadNearbyAction = createAction(types.LOAD_NEARBY, (isNearbyLoaded) => ({
  payload: isNearbyLoaded
}));

export const setNearbyAction = createAction(types.SET_NEARBY, (nearbyHotels) => ({
  payload: parseOffers(nearbyHotels)
}));

export const disableFormAction = createAction(types.DISABLE_FORM);
export const enableFormAction = createAction(types.ENABLE_FORM);

export const setIsRatingReadyAction = createAction(types.SET_IS_RATING_READY, (isRatingReady) => ({
  payload: isRatingReady
}));

export const setIsCommentReadyAction = createAction(types.SET_IS_COMMENT_READY, (isCommentReady) => ({
  payload: isCommentReady
}));

export const setFormReadyAction = createAction(types.SET_FORM_READY, (isFormReady) => ({
  payload: isFormReady
}));

export const resetFormAction = createAction(types.RESET_FORM);

export const updateCommentsAction = createAction(types.UPDATE_COMMENTS, (comments) => ({
  payload: sortCommentsByDate(parseOffers(comments))
}));

export const sendCommentAction = createAction(types.SEND_COMMENT);


export const sendFormErrorAction = createAction(types.SEND_FORM_ERROR, (err) => ({
  payload: err
}));

export const resetOfferAction = createAction(types.RESET_OFFER);

export const updateCurrentOfferAction = createAction(types.UPDATE_OFFER, (currentOffer) => ({
  payload: currentOffer
}));


// Asynchronous actions
export const loadOfferAsync = (hotelId) => (dispatch, _getState, api) => (
  api.get(request.get.offer(hotelId))
    .then(({ data }) => {
      dispatch(setCurrentOfferAction({
        isOfferLoaded: true,
        currentOffer: camelizeObject(data)
      }));
    })
    .catch(() => {})
);

export const loadCommentsAsync = (hotelId) => (dispatch, _getState, api) => (
  api.get(request.get.comments(hotelId))
    .then(({ data }) => {
      dispatch(loadCommentsAction(true));
      dispatch(setCommentsAction(data));
    })
    .catch(() => {})
);

export const loadNearbyAsync = (hotelId) => (dispatch, _getState, api) => (
  api.get(request.get.nearby(hotelId))
    .then(({ data }) => {
      dispatch(loadNearbyAction(true));
      dispatch(setNearbyAction(data));
    })
    .catch(() => {})
);

export const postCommentAsync = (comment, hotelId) => (dispatch, _getState, api) => (
  api.post(request.post.comments(hotelId), comment)
    .then(({ data }) => {
      if (data) {
        dispatch(sendCommentAction());
        dispatch(updateCommentsAction(data));
      }
    })
    .catch(() => {})
);
