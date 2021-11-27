import { ActionCreator } from "../action";
import { request, AuthorizationStatus } from "../const";

export const fetchOffersListAsync = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadingOffersStart());
  api.get(request.get.hotels())
    .then(({ data }) => {
      dispatch(ActionCreator.loadOffers(data));
      dispatch(ActionCreator.loadingOffersFinish());
    })
    .then(() => dispatch(ActionCreator.changeOffers()));
};

export const fetchOfferAsync = (hotelId) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadingOfferStart());
  api.get(request.get.offer(hotelId))
    .then(({ data }) => {
      dispatch(ActionCreator.loadOffer(data));
      dispatch(ActionCreator.loadingOfferFinish());
    });
};

export const checkAuthAsync = () => (dispatch, _getState, api) => {
  api.get(request.get.login())
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const loginAsync = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(request.post.login(), { email, password })
    .then(({ data }) => localStorage.setItem(`token`, data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(request.path.root())))
);

export const postCommentAsync = (comment, id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.startSendingReview());
  return api.post(request.post.comments(id), comment)
    .then(({ data }) => {
      if (data) {
        dispatch(ActionCreator.updateComments(data));
        dispatch(ActionCreator.finishSendingReview());
      }
    })
    .catch((err) => dispatch(ActionCreator.sendFormError(err)));
};

export const fetchNearbyListAsync = (hotelId) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadingNearbyStart());
  api.get(request.get.nearby(hotelId))
    .then(({ data }) => {
      dispatch(ActionCreator.loadNearby(data));
      dispatch(ActionCreator.loadingNearbyFinish());
    })
    .catch(() => {});
};

export const fetchCommentsAsync = (hotelId) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadingCommentsStart());
  api.get(request.get.comments(hotelId))
    .then(({ data }) => {
      dispatch(ActionCreator.loadComments(data));
      dispatch(ActionCreator.loadingCommentsFinish());
    })
    .catch(() => {});
};

export const updateFavoriteAsync = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(request.post.favorite(hotelId, status))
    .then(({ data }) => dispatch(ActionCreator.updateOffer(data, hotelId)))
    .catch(() => {})
);

export const logoutAsync = () => (dispatch, _getState, api) => (
  api.get(request.get.logout())
    .then(() => localStorage.removeItem(`token`))
    .then(() => dispatch(ActionCreator.logout()))
);
