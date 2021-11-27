import { NameSpace } from "../root-reducer";

export const getIsDataLoaded = (state) => state[NameSpace.HOTELS].isDataLoaded;
export const getCity = (state) => state[NameSpace.HOTELS].city;
export const getOffers = (state) => state[NameSpace.HOTELS].offers;
export const getCities = (state) => state[NameSpace.HOTELS].cities;
export const getAllOffers = (state) => state[NameSpace.HOTELS].allOffers;
export const getCurrentFilter = (state) => state[NameSpace.HOTELS].currentFilter;
export const getIsOffersNotEmpty = (state) => state[NameSpace.HOTELS].isOffersNotEmpty;
