import { request, AuthorizationStatus } from "../const";
import { checkAuthAsync, loginAsync, logoutAsync } from "./auth/actions";
import {
  loadFavoritesAsync,
  postFavoriteAsync,
  postFavoriteFromOfferAsync } from "./favorites/actions";
import { loadAllOffersAsync } from "./hotels/actions";
import {
  loadOfferAsync,
  loadCommentsAsync,
  loadNearbyAsync,
  postCommentAsync } from "./offer/actions";
import MockAdapter from "axios-mock-adapter";
import { createAPI } from "./api";
import * as types from "./auth/actionTypes";
import { REDIRECT_TO_ROUTE } from "./redirect/actionTypes";

let api = null;

describe(`Async actions`, () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuthAsync();

    apiMock
      .onGet(request.get.login())
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`should make a correct API call to POST /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = { email: `test@test.ru`, password: `123456` };
    const loginLoader = loginAsync(fakeUser);

    apiMock
      .onPost(request.post.login())
      .reply(200, [{ fake: true }]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REDIRECT_TO_ROUTE,
          payload: request.path.root()
        });
      });
  });

  it(`should make a correct API call to GET /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logoutAsync();

    apiMock
      .onGet(request.get.logout())
      .reply(200, [{ fake: true }]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(localStorage.getItem(`token`)).toEqual(null);
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`should make a correct API call to GET /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavoritesLoader = loadFavoritesAsync();

    apiMock
      .onGet(request.get.favorites())
      .reply(200, [{ fake: true }]);

    return loadFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`should make a correct API call to POST /favorite/hotelId/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeHotelId = 1;
    const fakeStatus = 1;
    const fakeData = { id: 1, content: 2 };
    const fakeGetState = () => ({
      HOTELS: {
        offers: [
          { id: 1, content: 1 },
          { id: 2, content: 2 }
        ]
      }
    });
    const postFavoriteLoader = postFavoriteAsync(fakeHotelId, fakeStatus);

    apiMock
      .onPost(request.post.favorite(fakeHotelId, fakeStatus))
      .reply(200, fakeData);

    return postFavoriteLoader(dispatch, fakeGetState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`should make a correct API call to POST /favorite/hotelId/status from Offer component`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeHotelId = 1;
    const fakeStatus = 1;
    const fakeData = { id: 1, content: 2 };
    const fakeGetState = () => ({
      HOTELS: {
        offers: [
          { id: 1, content: 1 },
          { id: 2, content: 2 }
        ]
      }
    });
    const postFavoriteLoader = postFavoriteFromOfferAsync(fakeHotelId, fakeStatus);

    apiMock
      .onPost(request.post.favorite(fakeHotelId, fakeStatus))
      .reply(200, fakeData);

    return postFavoriteLoader(dispatch, fakeGetState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`should make a correct API call to GET /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadAllOffersLoader = loadAllOffersAsync();
    const fakeData = [{ id: 1, city: { name: `Paris` }}, { id: 2, city: { name: `Moscow` }}];

    apiMock
      .onGet(request.get.hotels())
      .reply(200, fakeData);

    return loadAllOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`should make a correct API call to GET /hotels/hotelId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = { id: 1, test_key: `test` };
    const fakeHotelId = 3;
    const loadOfferLoader = loadOfferAsync(fakeHotelId);

    apiMock
      .onGet(request.get.offer(fakeHotelId))
      .reply(200, fakeData);

    return loadOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`should make a correct API call to GET /comments/hotelId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{ id: 1, key: `test` }, { id: 2, key: `test` }];
    const fakeHotelId = 1;
    const loadCommentsLoader = loadCommentsAsync(fakeHotelId);

    apiMock
      .onGet(request.get.comments(fakeHotelId))
      .reply(200, fakeData);

    return loadCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`should make a correct API call to GET /hotels/hotelId/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{ id: 1, key: `test` }, { id: 2, key: `test` }];
    const fakeHotelId = 1;
    const loadNearbyLoader = loadNearbyAsync(fakeHotelId);

    apiMock
      .onGet(request.get.nearby(fakeHotelId))
      .reply(200, fakeData);

    return loadNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`should make a correct API call to POST /comments/hotelId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeHotelId = 1;
    const fakeComment = { id: 3, comment: `test` };
    const fakeData = [{ id: 1, comment: `test` }, { id: 3, comment: `test` }];
    const postCommentLoader = postCommentAsync(fakeComment, fakeHotelId);

    apiMock
      .onPost(request.post.comments(fakeHotelId), fakeComment)
      .reply(200, fakeData);

    return postCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

});
