import React from "react";
import PropTypes from 'prop-types';

const PropertyFeatureBedrooms = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <li className="property__feature property__feature--bedrooms">
        3 Bedrooms
      </li>
    </React.Fragment>
  );
};

PropertyFeatureBedrooms.propTypes = {
};

export default PropertyFeatureBedrooms;
