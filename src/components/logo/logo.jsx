import React from "react";
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';

const Logo = (props) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Link className="header__logo-link header__logo-link--active" to="/" onClick={() => history.push(`/`)}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </React.Fragment>
  );
};

Logo.propTypes = {
};

export default Logo;
