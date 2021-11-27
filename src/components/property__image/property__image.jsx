import React from "react";
import propTypes from "../../proptypes";

const PropertyImage = ({ imageUrl }) => {
  return (
    <React.Fragment>
      <div className="property__image-wrapper">
        <img className="property__image" src={imageUrl} alt="Photo studio" />
      </div>
    </React.Fragment>
  );
};

PropertyImage.propTypes = {
  imageUrl: propTypes.string,
};

export default PropertyImage;
