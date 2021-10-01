import React from "react";
import PropTypes from 'prop-types';

const LocationsItem = (props) => {
  return (
    <React.Fragment>
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </React.Fragment>
  );
};

LocationsItem.propTypes = {
};

export default LocationsItem;
