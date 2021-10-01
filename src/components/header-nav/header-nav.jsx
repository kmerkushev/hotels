import React from "react";
import User from '../user/user';

const HeaderNav = () => {
  return (
    <React.Fragment>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <User />
        </ul>
      </nav>
    </React.Fragment>
  );
};

HeaderNav.propTypes = {
};

export default HeaderNav;
