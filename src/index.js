import React from "react";
import ReactDOM from "react-dom";
import { createAPI } from "./api/api";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import App from "./components/app/app";
import rootReducer from "./redux/root-reducer";
import { checkAuthAsync, requireAuthorizationAction } from "./redux/auth/actions";
import { AuthorizationStatus } from "./const";
import { redirect } from "./redirect";
import browserHistory from "./browser-history";
import ansiHTML from "ansi-html-community";

const api = createAPI(
    () => store.dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH)),
);

const rootElement = document.getElementById(`root`);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});

store.dispatch(checkAuthAsync());


ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    rootElement
);
