import React from "react";
import { Route, Switch } from "react-router-dom";
import { request } from "../../const";
import MainContainer from "../../containers/main-container";
import OfferContainer from "../../containers/offer-container";
import FavoritesContainer from "../../containers/favorites-container";
import SignIn from "../sign-in/sign-in";
import Error404 from "../error404/Error404";
import PrivateRoute from "../private-route/private-route";

const App = () => {
  return (
    <Switch>
      <Route exact path={request.path.root()} component={MainContainer} />
      <Route exact path={request.get.login()} component={SignIn} />
      <PrivateRoute exact path={request.path.favorites()} render={() => <FavoritesContainer />} />
      <Route path={request.path.offer()} component={OfferContainer} />
      <Route component={Error404} />
    </Switch>
  );
};

export default App;
