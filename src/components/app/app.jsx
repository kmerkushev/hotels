import React from "react";
import {Router as BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main";
import Property from "../property/property";
import Favorites from "../favorites/favorites";
import SignIn from "../sign-in/sign-in";
import Error404 from "../404/404";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <Property />
        </Route>
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export {App};
export default connect(mapStateToProps, null)(App);
