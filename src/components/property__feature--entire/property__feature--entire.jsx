import React from "react";
import propTypes from "../../proptypes";

const PropertyFeatureEntire = ({ type }) => {
  return (
    <React.Fragment>
      <li className="property__feature property__feature--entire">
        {type}
      </li>
    </React.Fragment>
  );
};

PropertyFeatureEntire.propTypes = {
  type: propTypes.type,
};

export default PropertyFeatureEntire;
