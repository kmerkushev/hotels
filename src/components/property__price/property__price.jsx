import React from "react";
import propTypes from "../../proptypes";

const PropertyPrice = ({ price }) => {
  return (
    <React.Fragment>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </React.Fragment>
  );
};

PropertyPrice.propTypes = {
  price: propTypes.price,
};

export default PropertyPrice;
