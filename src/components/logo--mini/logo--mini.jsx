import React from "react";
import PropTypes from 'prop-types';

const LogoMini = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </React.Fragment>
  );
};

LogoMini.propTypes = {
};

export default LogoMini;
