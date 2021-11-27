import * as types from "./actionTypes";
import { DATA_STRUCTURE, dropdownOptions } from "../../const";
import {
  setAllOffersAction,
  setCityAction,
  setOffersAction,
  setCurrentFilterAction,
  sortOffersAction,
  resetOffersAction,
  updateOffersAction
} from "./actions";

describe(`Hotels Actions`, () => {
  it(`action creator for setting all offers to state returns Array of all Hotels from all cities`, () => {
    const expectedAction = {
      type: types.SET_ALL_OFFERS,
      payload: DATA_STRUCTURE.hotels
    };
    expect(setAllOffersAction(DATA_STRUCTURE.hotelsRaw)).toStrictEqual(expectedAction);
  });

  it(`action creator for setting city returns city object`, () => {
    const expectedAction = {
      type: types.SET_CITY,
      payload: DATA_STRUCTURE.city
    };
    expect(setCityAction(DATA_STRUCTURE.city)).toEqual(expectedAction);
  });

  it(`action creator for setting current offers returns Array of Hotels`, () => {
    const expectedAction = {
      type: types.SET_OFFERS,
      payload: DATA_STRUCTURE.hotels
    };
    expect(setOffersAction(DATA_STRUCTURE.hotels)).toEqual(expectedAction);
  });

  it(`action creator for setting current filter returns String of filter name`, () => {
    const expectedAction = {
      type: types.SET_CURRENT_FILTER,
      payload: dropdownOptions[0]
    };
    expect(setCurrentFilterAction(dropdownOptions[0])).toEqual(expectedAction);
  });

  it(`action creator for sorting offers`, () => {
    const expectedAction = {
      type: types.SORT_OFFERS
    };
    expect(sortOffersAction()).toEqual(expectedAction);
  });

  it(`action creator for resetting current offers`, () => {
    const expectedAction = {
      type: types.RESET_OFFERS
    };
    expect(resetOffersAction()).toEqual(expectedAction);
  });

  it(`action creator for updating current offers`, () => {
    const expectedAction = {
      type: types.UPDATE_OFFERS,
      payload: DATA_STRUCTURE.hotels
    };
    expect(updateOffersAction(DATA_STRUCTURE.hotels, DATA_STRUCTURE.hotels[0])).toStrictEqual(expectedAction);
  });
});
