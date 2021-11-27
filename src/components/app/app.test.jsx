import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  AuthorizationStatus,
  cities,
  DEFAULT_CITY,
  DEFAULT_FILTER_ID,
  dropdownOptions,
  request,
} from "../../const";
import App from "./app";

let history = null;
let store = null;
let fakeApp = null;

describe(`Application Routing`, () => {
  beforeAll(() => {
    const useSelectorMock = jest.spyOn(redux, `useSelector`);
    const useDispatchMock = jest.spyOn(redux, `useDispatch`);
    beforeEach(() => {
      useSelectorMock.mockClear();
      useDispatchMock.mockClear();
    });
    history = createMemoryHistory();
    /* const middlewares = [thunk]; */
    const createFakeStore = configureStore({});
    store = createFakeStore({
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
        isAuthChecked: false
      },
      HOTELS: {
        allOffers: [],
        city: DEFAULT_CITY,
        cities,
        isDataLoaded: false,
        currentFilter: dropdownOptions[DEFAULT_FILTER_ID],
        offers: [],
        isOffersNotEmpty: undefined,
      },
      OFFER: {
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
      },
      FAVORITES: {
        favorites: [],
        isFavoritesLoaded: false,
      },
    });

    fakeApp = (
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
  });

  it(`Render MainContainer when user navigate to '/' url`, () => {
    history.push(request.path.root());
    render(fakeApp);

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });

  it(`Render SignIn when user navigate to '/login' url`, () => {
    history.push(request.path.login());
    render(fakeApp);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it(`Render FavoritesContainer when user navigate to '/favorites' url`, () => {
    history.push(request.path.favorites());
    render(fakeApp);

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });

  it(`Render Error404 when user navigate to non-existent route`, () => {
    history.push(`/non-existent-route`);
    render(fakeApp);

    expect(screen.getByText(/404. Not found/i)).toBeInTheDocument();
  });
});
