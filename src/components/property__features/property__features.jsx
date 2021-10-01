import React from "react";
import PropTypes from 'prop-types';

import PropertyFeatureEntire from "../property__feature--entire/property__feature--entire";
import PropertyFeatureBedrooms from "../property__feature--bedrooms/property__feature--bedrooms";
import PropertyFeatureAdults from "../property__feature--adults/property__feature--adults";

const Property = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <ul className="property__features">
        <PropertyFeatureEntire />
        <PropertyFeatureBedrooms />
        <PropertyFeatureAdults />
      </ul>
    </React.Fragment>
  );
};

Property.propTypes = {
};

export default Property;
