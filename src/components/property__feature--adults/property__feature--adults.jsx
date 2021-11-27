import React from "react";
import propTypes from "../../proptypes";

const PropertyFeatureAdults = ({ maxAdults }) => {
  return (
    <React.Fragment>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </React.Fragment>
  );
};

PropertyFeatureAdults.propTypes = {
  maxAdults: propTypes.maxAdults,
};

export default PropertyFeatureAdults;
