import React from "react";
import {connect} from "react-redux";
import propTypes from "../../proptypes";
import {AuthorizationStatus} from "../../const";
import {AppRoute} from "../../const";
import {Link, useHistory} from "react-router-dom";

const User = ({authorizationStatus}) => {
  const history = useHistory();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <React.Fragment>
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </a>
        </li>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile" onClick={() => history.push(AppRoute.LOGIN)}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </React.Fragment>
  );
};

User.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
  };
};

export {User};

export default connect(mapStateToProps, null)(User);
