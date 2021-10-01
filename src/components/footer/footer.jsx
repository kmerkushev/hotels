import React from "react";
import PropTypes from 'prop-types';

import LogoMini from '../logo--mini/logo--mini';

const Footer = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <footer className="footer container">
        <LogoMini />
      </footer>
    </React.Fragment>
  );
};

Footer.propTypes = {
};

export default Footer;
