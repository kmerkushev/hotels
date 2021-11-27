import React from "react";
import LogoMini from '../logo--mini/logo--mini';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer container">
        <LogoMini />
      </footer>
    </React.Fragment>
  );
};

export default React.memo(Footer);
