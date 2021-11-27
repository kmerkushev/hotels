import {
  setCurrentOfferAction,
  loadNearbyAction,
  setNearbyAction,
  setCommentsAction,
  sendCommentAction,
  updateCommentsAction,
  setIsRatingReadyAction,
  setIsCommentReadyAction,
  setFormReadyAction,
  resetFormAction,
  disableFormAction,
  enableFormAction,
  resetOfferAction,
  updateCurrentOfferAction
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isOfferLoaded: false,
  isNearbyLoaded: false,
  isCommentsLoaded: false,
  hotelsNearby: [],
  comments: [],
  currentOffer: {},
  isRatingReady: false,
  isCommentReady: false,
  isFormReady: false,
  isFormDisabled: false,
  sendFormError: ``,
};

const offerReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCurrentOfferAction, (state, action) => {
    state.currentOffer = action.payload.currentOffer;
    state.isOfferLoaded = action.payload.isOfferLoaded;
  });
  builder.addCase(loadNearbyAction, (state, action) => {
    state.isNearbyLoaded = action.payload;
  });
  builder.addCase(setNearbyAction, (state, action) => {
    state.hotelsNearby = action.payload;
  });
  builder.addCase(setCommentsAction, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(sendCommentAction);
  builder.addCase(updateCommentsAction, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(setIsRatingReadyAction, (state, action) => {
    state.isRatingReady = action.payload;
  });
  builder.addCase(setIsCommentReadyAction, (state, action) => {
    state.isCommentReady = action.payload;
  });
  builder.addCase(setFormReadyAction, (state, action) => {
    state.isFormReady = action.payload;
  });
  builder.addCase(resetFormAction, (state) => {
    state.isRatingReady = false;
    state.isCommentReady = false;
    state.isFormReady = false;
  });
  builder.addCase(disableFormAction, (state) => {
    state.isFormDisabled = true;
  });
  builder.addCase(enableFormAction, (state) => {
    state.isFormDisabled = false;
  });
  builder.addCase(resetOfferAction, (state) => {
    state.isOfferLoaded = false;
    state.hotelsNearby = [];
    state.comments = [];
    state.isRatingReady = false;
    state.isCommentReady = false;
    state.isFormReady = false;
    state.isFormDisabled = false;
    state.sendFormError = ``;
  });
  builder.addCase(updateCurrentOfferAction, (state, action) => {
    state.currentOffer = action.payload;
  });
});

export { offerReducer };
