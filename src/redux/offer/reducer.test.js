import * as types from "./actionTypes";
import {
  loadNearbyAction,
  setNearbyAction,
  updateCommentsAction,
  sendCommentAction,
  setIsRatingReadyAction,
  setIsCommentReadyAction,
  setFormReadyAction,
  resetFormAction,
  disableFormAction,
  enableFormAction,
  resetOfferAction,
  updateCurrentOfferAction
} from "./actions";
import { offerReducer } from "./reducer";

describe(`Reducer: offerReducer `, () => {
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

  it(`without additional parameters should return initial state`, () => {
    expect(offerReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should return new offer`, () => {
    const state = {
      currentOffer: `offer`,
      isOfferLoaded: false
    };
    const payload = {
      currentOffer: `new offer`,
      isOfferLoaded: true
    };
    const setCurrentOfferAction = {
      type: types.SET_CURRENT_OFFER,
      payload
    };
    const finalState = {
      currentOffer: `new offer`,
      isOfferLoaded: true
    };
    expect(offerReducer(state, setCurrentOfferAction))
      .toEqual(finalState);
  });

  it(`should return isNearbyLoaded`, () => {
    const state = { isNearbyLoaded: false };
    const finalState = { isNearbyLoaded: true };
    expect(offerReducer(state, loadNearbyAction(true)))
      .toEqual(finalState);
  });

  it(`should return nearby hotels`, () => {
    const state = {
      hotelsNearby: []
    };
    const nearbyHotels = [{ hotel_one: `hotelOne` }, { hotel_two: `hotelTwo` }];
    const finalState = {
      hotelsNearby: [{ hotelOne: `hotelOne` }, { hotelTwo: `hotelTwo` }]
    };

    expect(offerReducer(state, setNearbyAction(nearbyHotels)))
      .toEqual(finalState);
  });

  it(`should return isFormDisabled=true`, () => {
    const state = { isFormDisabled: false };
    const finalState = { isFormDisabled: true };
    expect(offerReducer(state, disableFormAction()))
      .toEqual(finalState);
  });

  it(`should return isFormDisabled=false`, () => {
    const state = { isFormDisabled: true };
    const finalState = { isFormDisabled: false };
    expect(offerReducer(state, enableFormAction()))
      .toEqual(finalState);
  });

  it(`should return isRatingReady`, () => {
    const state = {
      isRatingReady: false
    };
    const finalState = {
      isRatingReady: true
    };
    expect(offerReducer(state, setIsRatingReadyAction(true)))
      .toEqual(finalState);
  });

  it(`should return isCommentReady`, () => {
    const state = {
      isCommentReady: false
    };
    const finalState = {
      isCommentReady: true
    };
    expect(offerReducer(state, setIsCommentReadyAction(true)))
      .toEqual(finalState);
  });

  it(`should return isFormReady`, () => {
    const state = {
      isFormReady: false
    };
    const finalState = {
      isFormReady: true
    };
    expect(offerReducer(state, setFormReadyAction(true)))
      .toEqual(finalState);
  });

  it(`should return false: isRatingReady, isCommentReady, isFormReady`, () => {
    const state = {
      isRatingReady: true,
      isCommentReady: true,
      isFormReady: true
    };
    const finalState = {
      isRatingReady: false,
      isCommentReady: false,
      isFormReady: false
    };
    expect(offerReducer(state, resetFormAction()))
      .toEqual(finalState);
  });

  it(`should return updated comments`, () => {
    const state = {
      comments: []
    };
    const comments = [{ date: `2019-05-08T14:13:56.569Z`, camel_case: `` }, { date: `2020-05-08T14:13:56.569Z`, camel_case: `` }];
    const finalState = {
      comments: [{ date: `2020-05-08T14:13:56.569Z`, camelCase: `` }, { date: `2019-05-08T14:13:56.569Z`, camelCase: `` }]
    };
    expect(offerReducer(state, updateCommentsAction(comments)))
      .toEqual(finalState);
  });

  it(`should return same state`, () => {
    const state = { ok: `ok` };
    const finalState = { ok: `ok` };
    expect(offerReducer(state, sendCommentAction()))
      .toEqual(finalState);
  });

  it(`should return initial state`, () => {
    const state = {
      isOfferLoaded: true,
      hotelsNearby: [`test`],
      comments: [`test`],
      isRatingReady: true,
      isCommentReady: true,
      isFormReady: true,
      isFormDisabled: true,
      sendFormError: `test`
    };
    expect(offerReducer(state, resetOfferAction()))
      .toEqual(initialState);
  });

  it(`should return new currentOffer`, () => {
    const state = {
      currentOffer: `current offer`
    };
    const finalState = {
      currentOffer: `new current offer`
    };
    expect(offerReducer(state, updateCurrentOfferAction(`new current offer`)))
      .toEqual(finalState);
  });
});
