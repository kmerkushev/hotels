import * as types from "./actionTypes";
import { DATA_STRUCTURE } from "../../const";
import {
  setCurrentOfferAction,
  loadCommentsAction,
  setCommentsAction,
  loadNearbyAction,
  setNearbyAction,
  disableFormAction,
  enableFormAction,
  setIsRatingReadyAction,
  setIsCommentReadyAction,
  setFormReadyAction,
  resetFormAction,
  updateCommentsAction,
  sendCommentAction,
  sendFormErrorAction,
  resetOfferAction,
  updateCurrentOfferAction
} from "./actions";

describe(`Offer Actions`, () => {
  it(`action creator of setting current offer to state returns Hotel`, () => {
    const expectedAction = {
      type: types.SET_CURRENT_OFFER,
      payload: DATA_STRUCTURE.hotels[0]
    };
    expect(setCurrentOfferAction(DATA_STRUCTURE.hotels[0])).toEqual(expectedAction);
  });

  it(`action creator of setting isCommentsLoaded flag returns Boolean`, () => {
    const expectedAction = {
      type: types.LOAD_COMMENTS,
      payload: true
    };
    expect(loadCommentsAction(true)).toEqual(expectedAction);
  });

  it(`action creator of setting comments and sorting them by date returns Comments`, () => {
    const expectedAction = {
      type: types.SET_COMMENTS,
      payload: DATA_STRUCTURE.comments
    };
    expect(setCommentsAction(DATA_STRUCTURE.commentsRaw)).toEqual(expectedAction);
  });

  it(`action creator of setting isNearbyLoaded flag returns Boolean`, () => {
    const expectedAction = {
      type: types.LOAD_NEARBY,
      payload: true
    };
    expect(loadNearbyAction(true)).toEqual(expectedAction);
  });

  it(`action creator of setting hotels nearby returns Hotels`, () => {
    const expectedAction = {
      type: types.SET_NEARBY,
      payload: DATA_STRUCTURE.hotels
    };
    expect(setNearbyAction(DATA_STRUCTURE.hotelsRaw)).toEqual(expectedAction);
  });

  it(`action creator of disabling form`, () => {
    const expectedAction = {
      type: types.DISABLE_FORM
    };
    expect(disableFormAction()).toEqual(expectedAction);
  });

  it(`action creator of enabling form`, () => {
    const expectedAction = {
      type: types.ENABLE_FORM
    };
    expect(enableFormAction()).toEqual(expectedAction);
  });

  it(`action creator of setting isRatingReady flag returns Boolean`, () => {
    const expectedAction = {
      type: types.SET_IS_RATING_READY,
      payload: true
    };
    expect(setIsRatingReadyAction(true)).toEqual(expectedAction);
  });

  it(`action creator of setting isCommentReady flag returns Boolean`, () => {
    const expectedAction = {
      type: types.SET_IS_COMMENT_READY,
      payload: true
    };
    expect(setIsCommentReadyAction(true)).toEqual(expectedAction);
  });

  it(`action creator of setting isFormReady flag returns Boolean`, () => {
    const expectedAction = {
      type: types.SET_FORM_READY,
      payload: true
    };
    expect(setFormReadyAction(true)).toEqual(expectedAction);
  });

  it(`action creator of resetting form`, () => {
    const expectedAction = {
      type: types.RESET_FORM,
      payload: true
    };
    expect(resetFormAction(true)).toEqual(expectedAction);
  });

  it(`action creator of updating comments and sorting them by date returns Comments`, () => {
    const expectedAction = {
      type: types.UPDATE_COMMENTS,
      payload: DATA_STRUCTURE.comments
    };
    expect(updateCommentsAction(DATA_STRUCTURE.commentsRaw)).toEqual(expectedAction);
  });

  it(`action creator of indication of sending comment`, () => {
    const expectedAction = {
      type: types.SEND_COMMENT
    };
    expect(sendCommentAction()).toEqual(expectedAction);
  });

  it(`action creator of sending form error returns Error`, () => {
    const testError = new Error(`test`);
    const expectedAction = {
      type: types.SEND_FORM_ERROR,
      payload: testError
    };
    expect(sendFormErrorAction(testError)).toEqual(expectedAction);
  });

  it(`action creator of resetting offer`, () => {
    const expectedAction = {
      type: types.RESET_OFFER,
    };
    expect(resetOfferAction()).toEqual(expectedAction);
  });

  it(`action creator of updating current offer returns Hotel`, () => {
    const expectedAction = {
      type: types.UPDATE_OFFER,
      payload: DATA_STRUCTURE.hotels[0]
    };
    expect(updateCurrentOfferAction(DATA_STRUCTURE.hotels[0])).toEqual(expectedAction);
  });
});
