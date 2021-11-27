export const ActionType = {
  REDIRECT_TO_ROUTE: `REDIRECT TO ROUTE`,

  UPDATE_OFFER: `OFFER UPDATED`,

  LOADING_OFFERS_START: `> LOADING 0FFERS STARTED`,
  LOAD_OFFERS: ` LOADING OFFERS`,
  LOADING_OFFERS_FINISH: `< LOADING OFFERS FINISHED`,

  LOADING_OFFER_START: `-> LOADING 0FFER STARTED`,
  LOAD_OFFER: `   LOADING OFFER`,
  LOADING_OFFER_FINISH: `<- LOADING OFFER FINISHED`,

  LOADING_COMMENTS_START: `->-> LOADING COMMENTS STARTED`,
  LOAD_COMMENTS: `     LOAD COMMENTS`,
  LOADING_COMMENTS_FINISH: `<-<- LOADING COMMENTS FINISHED`,

  LOAD_NEARBY_START: `->-> LOADING NEARBY OFFERS STARTED`,
  LOAD_NEARBY: `     LOAD NEARBY OFFERS`,
  LOAD_NEARBY_FINISH: `<-<- LOADING NEARBY OFFERS FINISHED`,

  REQUIRED_AUTHORIZATION: `REQUIRED AUTHORIZATION`,
  LOGOUT: `LOGOUT`,

  CHANGE_CITY: `CITY CHANGED`,
  CHANGE_OFFERS: `OFFERS CHANGED`,

  OPEN_DROPDOWN: `SORT BY... DROPDOWN OPENED`,
  CHANGE_CURRENT_FILTER: `CHANGE CURRENT FILTER`,
  SORT_OFFERS: `OFFERS SORTED`,
  CLOSE_DROPDOWN: `SORT... BY DROPDOWN CLOSED`,

  CHANGE_CURRENT_OFFER: `CURRENT OFFER CHANGED`,

  UPDATE_COMMENTS: `COMMENTS UPDATED`,

  SENDING_REVIEW_START: `START SENDING REVIEW`,
  SENDING_REVIEW_FINISH: `FINISH SENDING REVIEW`,
  CLEAR_REVIEW_FORM: `CLEAR REVIEW FORM`,
  SET_RATING: `SET_RATING`,
  SET_COMMENT: `SET_COMMENT`,
  FORM_READY_SET: `FORM READY SET`,
  RESET_FORM: `RESET REVIEW FORM`,
  DISABLE_FORM: `FORM DISABLED`,
  ENABLE_FORM: `FORM ENABLED`,
  SEND_FORM_ERROR: `FORM ERROR`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const changeOffers = () => ({
  type: ActionType.CHANGE_OFFERS,
});

export const changeCurrentOffer = (offer) => ({
  type: ActionType.CHANGE_CURRENT_OFFER,
  payload: offer
});

export const changeCurrentFilter = (filterName) => ({
  type: ActionType.CHANGE_CURRENT_FILTER,
  payload: filterName
});

export const sortOffers = (offers) => ({
  type: ActionType.SORT_OFFERS,
  payload: offers
});


export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});


export const openDropdown = () => ({
  type: ActionType.OPEN_DROPDOWN,
});

export const closeDropdown = () => ({
  type: ActionType.CLOSE_DROPDOWN,
});


export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const updateOffer = (offer, hotelId) => ({
  type: ActionType.UPDATE_OFFER,
  payload: offer, hotelId
});


export const loadingOffersStart = () => ({
  type: ActionType.LOADING_OFFERS_START,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadingOffersFinish = () => ({
  type: ActionType.LOADING_OFFERS_FINISH,
});

export const loadingOfferStart = () => ({
  type: ActionType.LOADING_OFFER_START,
});

export const loadingOfferFinish = () => ({
  type: ActionType.LOADING_OFFER_FINISH,
});

export const loadingNearbyStart = () => ({
  type: ActionType.LOAD_NEARBY_START,
});

export const loadNearby = (hotelsNearby) => ({
  type: ActionType.LOAD_NEARBY,
  payload: hotelsNearby
});

export const loadingNearbyFinish = () => ({
  type: ActionType.LOAD_NEARBY_FINISH,
});

export const loadingCommentsStart = () => ({
  type: ActionType.LOADING_COMMENTS_START,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const loadingCommentsFinish = () => ({
  type: ActionType.LOADING_COMMENTS_FINISH,
});

export const updateComments = (comments) => ({
  type: ActionType.UPDATE_COMMENTS,
  payload: comments
});

export const startSendingReview = () => ({
  type: ActionType.SENDING_REVIEW_START,
});

export const finishSendingReview = () => ({
  type: ActionType.SENDING_REVIEW_FINISH,
});

export const setRating = (isRatingSet) => ({
  type: ActionType.SET_RATING,
  payload: isRatingSet,
});

export const setComment = (isCommentSet) => ({
  type: ActionType.SET_COMMENT,
  payload: isCommentSet,
});

export const formReadySet = (isFormReady) => ({
  type: ActionType.FORM_READY_SET,
  payload: isFormReady,
});

export const resetForm = () => ({
  type: ActionType.RESET_FORM,
});

export const disableForm = () => ({
  type: ActionType.DISABLE_FORM,
});

export const enableForm = () => ({
  type: ActionType.ENABLE_FORM,
});

export const sendFormError = (err) => ({
  type: ActionType.SEND_FORM_ERROR,
  payload: err
});
