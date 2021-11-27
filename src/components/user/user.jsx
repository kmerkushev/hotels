import React from "react";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "../../const";
import { request } from "../../const";
import { Link, useHistory } from "react-router-dom";
import { getAuthorizationStatus } from "../../redux/auth/selectors";

const User = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <React.Fragment>
        <li className="header__nav-item user">
          <Link to={request.path.favorites()} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </Link>
        </li>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link to={request.get.login()} className="header__nav-link header__nav-link--profile" onClick={() => history.push(request.get.login())}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </React.Fragment>
  );
};

export default React.memo(User);
