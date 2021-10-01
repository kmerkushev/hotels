import React from "react";
import PropTypes from 'prop-types';

const PropertyFeatureAdults = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <li className="property__feature property__feature--adults">
        Max 4 adults
      </li>
    </React.Fragment>
  );
};

PropertyFeatureAdults.propTypes = {
};

export default PropertyFeatureAdults;
