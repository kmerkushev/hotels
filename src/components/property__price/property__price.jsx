import React from "react";
import PropTypes from 'prop-types';

const PropertyPrice = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <div className="property__price">
        <b className="property__price-value">&euro;120</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </React.Fragment>
  );
};

PropertyPrice.propTypes = {
};

export default PropertyPrice;
