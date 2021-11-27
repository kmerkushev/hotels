import React from "react";
import User from '../user/user';
import Logout from "../logout/logout";

const HeaderNav = () => {
  return (
    <React.Fragment>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <User />
          <Logout />
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default HeaderNav;
