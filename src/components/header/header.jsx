import React from "react";
import HeaderNav from "../header-nav/header-nav";
import SvgIcons from "../svg-icons/svg-icons";
import Logo from "../logo/logo";


const Header = () => {
  return (
    <React.Fragment>
      <SvgIcons />

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
};

export default Header;
