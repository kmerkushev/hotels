import React from "react";
import propTypes from "../../proptypes";

const LocationsItem = ({ cityName }) => {
  return (
    <React.Fragment>
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </React.Fragment>
  );
};

LocationsItem.propTypes = {
  cityName: propTypes.string.isRequired,
};

export default LocationsItem;
