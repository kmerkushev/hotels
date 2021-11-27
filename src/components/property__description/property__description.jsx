import React from "react";
import propTypes from "../../proptypes";

const PropertyDescription = ({ description }) => {
  return (
    <React.Fragment>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

PropertyDescription.propTypes = {
  description: propTypes.description,
};

export default PropertyDescription;
