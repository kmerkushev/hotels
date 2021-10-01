import React from "react";
import PropTypes from 'prop-types';

const PropertyImage = (props) => {
  const {offersCount} = props;

  return (
    <React.Fragment>
      <div className="property__image-wrapper">
        <img className="property__image" src="img/room.jpg" alt="Photo studio" />
      </div>
    </React.Fragment>
  );
};

PropertyImage.propTypes = {
};

export default PropertyImage;
