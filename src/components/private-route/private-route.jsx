import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { request, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getIsAuthChecked } from "../../redux/auth/selectors";
import propTypes from '../../proptypes';
import LoadingScreen from '../loading-screen/loading-screen';

const PrivateRoute = ({ path, exact, render }) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthChecked = useSelector(getIsAuthChecked);

  if (!isAuthChecked) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={request.get.login()} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
};

export default PrivateRoute;
