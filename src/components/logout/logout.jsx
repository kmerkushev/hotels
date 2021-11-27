import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthorizationStatus } from "../../const";
import { logoutAsync } from "../../redux/auth/actions";
import { getAuthorizationStatus } from "../../redux/auth/selectors";

const Logout = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(logoutAsync());
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <React.Fragment>
        <li className="header__nav-item logout">
          <a className="header__nav-link header__nav-link--logout" href="#"
            onClick={handleClick}>
            <div className="header__logout-wrapper">
            </div>
          </a>
        </li>
      </React.Fragment>
    );
  }
  return null;
};

export default Logout;
