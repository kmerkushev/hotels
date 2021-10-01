import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";

import {reducer} from "./reducer";
import {createAPI} from "./api";
import {checkAuth, fetchOffersList} from "./api-actions";
import {AuthorizationStatus} from "./const";
import {ActionCreator} from "./action";
import {redirect} from "./redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const rootElement = document.getElementById(`root`);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect),
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, rootElement
);
