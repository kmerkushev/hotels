import React from "react";
import PropTypes from 'prop-types';

const CityTabActive = ({ cityName }) => {
  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active"
          onClick={(evt) => {
            evt.preventDefault();
          }} href="">
          <span>{cityName}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

CityTabActive.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default CityTabActive;
