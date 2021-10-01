import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import propTypes from '../../proptypes';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );

};

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
};

let mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
  };
};

export {PrivateRoute};

export default connect(mapStateToProps, null)(PrivateRoute);
