import React from "react";
import PropTypes from 'prop-types';

const PropertyFeatureEntire = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <li className="property__feature property__feature--entire">
        Entire place
      </li>
    </React.Fragment>
  );
};

PropertyFeatureEntire.propTypes = {
};

export default PropertyFeatureEntire;
