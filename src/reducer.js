import {cities, dropdownOptions, AuthorizationStatus} from "./const";
import {ActionType} from "./action";
import {getSortedOffers} from "./filters";
import getOffersByCity from "./getOffersByCity";
import loadedToOffersAdapter from "./loadedToOffersAdapter";
import {closeDropdown} from "./animateDropdown";

const PARIS_ID = cities[0].id;
const POPULAR_FILTER_ID = 0;

export const initialState = {
  city: cities[PARIS_ID - 1],
  offers: [],
  allOffers: [],
  cities,
  currentFilter: dropdownOptions[POPULAR_FILTER_ID],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
};

// Функция для обновления хранилища
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.CHANGE_OFFERS:
      return {
        ...state,
        offers: getOffersByCity(state.city, state.allOffers),
      };

    case ActionType.CHANGE_CURRENT_FILTER:
      return {
        ...state,
        currentFilter: action.payload,
      };

    case ActionType.SORT_OFFERS:
      return {
        ...state,
        offers: getSortedOffers(state.currentFilter, state.offers),
      };

    case ActionType.UPDATE_OFFER:
      return {
        ...state,
        offers: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        allOffers: loadedToOffersAdapter(action.payload),
        isDataLoaded: true
      };

    case ActionType.CLOSE_DROPDOWN:
      closeDropdown();
      return {
        ...state,
      };

    default:
      return state;
  }
};
