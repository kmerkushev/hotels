import React from "react";
import { Link, useHistory } from 'react-router-dom';

const LogoMini = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Link className="footer__logo-link" to="/" onClick={() => history.push(`/`)}>
        <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </React.Fragment>
  );
};

LogoMini.propTypes = {
};

export default LogoMini;
