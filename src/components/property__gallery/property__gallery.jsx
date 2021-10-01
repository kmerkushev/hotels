import React from "react";
import PropTypes from 'prop-types';

import PropertyImage from '../property__image/property__image';

const PropertyGallery = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          <PropertyImage />
          <PropertyImage />
          <PropertyImage />
          <PropertyImage />
          <PropertyImage />
          <PropertyImage />
        </div>
      </div>
    </React.Fragment>
  );
};

PropertyGallery.propTypes = {
};

export default PropertyGallery;
