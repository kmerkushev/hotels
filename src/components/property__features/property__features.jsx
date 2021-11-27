import React from "react";
import PropertyFeatureEntire from "../property__feature--entire/property__feature--entire";
import PropertyFeatureBedrooms from "../property__feature--bedrooms/property__feature--bedrooms";
import PropertyFeatureAdults from "../property__feature--adults/property__feature--adults";
import propTypes from "../../proptypes";

const Property = ({ type, bedrooms, maxAdults }) => {
  return (
    <React.Fragment>
      <ul className="property__features">
        <PropertyFeatureEntire type={type}/>
        <PropertyFeatureBedrooms bedrooms={bedrooms}/>
        <PropertyFeatureAdults maxAdults={maxAdults}/>
      </ul>
    </React.Fragment>
  );
};

Property.propTypes = {
  type: propTypes.type,
  bedrooms: propTypes.bedrooms,
  maxAdults: propTypes.maxAdults,
};

export default Property;
