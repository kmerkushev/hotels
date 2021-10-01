export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_OFFERS: `changeOffers`,
  CHANGE_CURRENT_FILTER: `changeCurrentFilter`,
  SORT_OFFERS: `sortOffers`,
  UPDATE_OFFER: `updateOffer`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `loadOffers`,
  OPEN_DROPDOWN: `openDropdown`,
  CLOSE_DROPDOWN: `closeDropdown`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeOffers: () => ({
    type: ActionType.CHANGE_OFFERS,
  }),
  changeCurrentFilter: (filterName) => ({
    type: ActionType.CHANGE_CURRENT_FILTER,
    payload: filterName
  }),
  sortOffers: (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  openDropdown: () => ({
    type: ActionType.OPEN_DROPDOWN,
  }),
  closeDropdown: () => ({
    type: ActionType.CLOSE_DROPDOWN,
  }),
  redirectToRoute: () => ({
    type: ActionType.REDIRECT_TO_ROUTE,
  }),
};
