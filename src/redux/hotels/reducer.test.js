import {
  cities,
  DATA_STRUCTURE,
  DEFAULT_CITY,
  DEFAULT_FILTER_ID,
  dropdownOptions } from "../../const";
import {
  setAllOffersAction,
  setCityAction,
  setOffersAction,
  setCurrentFilterAction,
  sortOffersAction,
  resetOffersAction,
  updateOffersAction
} from "./actions";
import { hotelsReducer } from "./reducer";

describe(`Reducer: hotelsReducer `, () => {
  const initialState = {
    allOffers: [],
    city: DEFAULT_CITY,
    cities,
    isDataLoaded: false,
    currentFilter: dropdownOptions[DEFAULT_FILTER_ID],
    offers: [],
    isOffersNotEmpty: undefined,
  };

  it(`without additional parameters should return initial state`, () => {
    expect(hotelsReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should return all loaded offers and isDataLoaded = true`, () => {
    const state = {
      allOffers: DATA_STRUCTURE.hotelsRaw,
      isDataLoaded: false
    };
    const finalState = {
      allOffers: DATA_STRUCTURE.hotels,
      isDataLoaded: true
    };
    const payload = DATA_STRUCTURE.hotelsRaw;
    expect(hotelsReducer(state, setAllOffersAction(payload)))
      .toEqual(finalState);
  });

  it(`should return city`, () => {
    const state = { city: `Paris` };
    const finalState = { city: `Moscow` };
    const payload = `Moscow`;
    expect(hotelsReducer(state, setCityAction(payload)))
      .toEqual(finalState);
  });

  it(`should return current offers and isOffersNotEmpty=true`, () => {
    const state = {
      offers: [],
      ifOffersNotEmpty: undefined
    };
    const finalState = {
      offers: [{ offer1: `offer1`, offer2: `offer2` }],
      ifOffersNotEmpty: true
    };
    const payload = {
      offers: [{ offer1: `offer1`, offer2: `offer2` }],
    };
    expect(hotelsReducer(state, setOffersAction(payload)))
      .toEqual(finalState);
  });

  it(`should return empty offers and isOffersNotEmpty=false`, () => {
    const state = {
      offers: [{ offer1: `offer1`, offer2: `offer2` }],
      isOffersNotEmpty: true
    };
    const finalState = {
      offers: [],
      isOffersNotEmpty: false
    };
    const payload = [];
    expect(hotelsReducer(state, setOffersAction(payload)))
      .toEqual(finalState);
  });

  it(`should return filter name`, () => {
    const state = { currentFilter: `Popular` };
    const finalState = { currentFilter: `By Date` };
    expect(hotelsReducer(state, setCurrentFilterAction(`By Date`)))
      .toEqual(finalState);
  });

  it(`should return sorted offers`, () => {
    const topRatedFirst = 3;
    const state = {
      currentFilter: dropdownOptions[topRatedFirst],
      offers: [{ rating: 1 }, { rating: 3 }]
    };
    const finalState = {
      currentFilter: dropdownOptions[topRatedFirst],
      offers: [{ rating: 3 }, { rating: 1 }]
    };
    expect(hotelsReducer(state, sortOffersAction()))
      .toEqual(finalState);
  });

  it(`should return isDataLoaded=false and empty array of offers`, () => {
    const state = {
      isDataLoaded: true,
      offers: [{ offer1: `offer1`, offer2: `offer2` }]
    };
    const finalState = {
      isDataLoaded: false,
      offers: []
    };
    expect(hotelsReducer(state, resetOffersAction()))
      .toEqual(finalState);
  });

  it(`should return updated offers`, () => {
    const state = {
      offers: [{ id: 1, rating: 5 }, { id: 2, rating: 1 }]
    };
    const offers = [{ id: 1, rating: 5 }, { id: 2, rating: 1 }];
    const offer = { id: 1, rating: 3 };
    const finalState = {
      offers: [{ id: 1, rating: 3 }, { id: 2, rating: 1 }]
    };
    expect(hotelsReducer(state, updateOffersAction(offers, offer)))
      .toEqual(finalState);
  });
});
