import React from "react";
import PropTypes from 'prop-types';

import PropertyInsideItem from '../property__inside-item/property__inside-item';

const PlacesSorting = (props) => {
  return (
    <React.Fragment>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
          <PropertyInsideItem />
        </ul>
      </div>
    </React.Fragment>
  );
};

PlacesSorting.propTypes = {
};

export default PlacesSorting;
