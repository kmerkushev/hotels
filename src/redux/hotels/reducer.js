import { cities, DEFAULT_CITY, DEFAULT_FILTER_ID, dropdownOptions } from "../../const";
import {
  setAllOffersAction,
  setCityAction,
  setOffersAction,
  setCurrentFilterAction,
  sortOffersAction,
  resetOffersAction,
  updateOffersAction,
} from "./actions";
import { getSortedOffers } from "../../utils/filters";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  allOffers: [],
  city: DEFAULT_CITY,
  cities,
  isDataLoaded: false,
  currentFilter: dropdownOptions[DEFAULT_FILTER_ID],
  offers: [],
  isOffersNotEmpty: undefined,
};

const hotelsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAllOffersAction, (state, action) => {
    state.allOffers = action.payload;
    state.isDataLoaded = true;
  });
  builder.addCase(setCityAction, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setOffersAction, (state, action) => {
    state.offers = action.payload;
    state.isOffersNotEmpty = false;
  });
  builder.addCase(setCurrentFilterAction, (state, action) => {
    state.currentFilter = action.payload;
  });
  builder.addCase(sortOffersAction, (state) => {
    state.offers = getSortedOffers(state.currentFilter, state.offers);
  });
  builder.addCase(resetOffersAction, (state) => {
    state.isDataLoaded = false;
    state.offers = [];
  });
  builder.addCase(updateOffersAction, (state, action) => {
    state.offers = action.payload;
  });
});

export { hotelsReducer };
