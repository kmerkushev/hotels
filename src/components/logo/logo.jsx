import React from "react";
import { Link, useHistory } from 'react-router-dom';

const Logo = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Link className="header__logo-link header__logo-link--active" to="/" onClick={() => history.push(`/`)}>
        <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </React.Fragment>
  );
};

export default React.memo(Logo);
