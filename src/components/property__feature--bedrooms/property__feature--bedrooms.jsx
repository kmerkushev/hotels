import React from "react";
import propTypes from "../../proptypes";

const PropertyFeatureBedrooms = ({ bedrooms }) => {
  return (
    <React.Fragment>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
    </React.Fragment>
  );
};

PropertyFeatureBedrooms.propTypes = {
  bedrooms: propTypes.bedrooms,
};

export default PropertyFeatureBedrooms;
