import React from "react";
import propTypes from "../../proptypes";
import PropertyImage from '../property__image/property__image';
import { nanoid } from "nanoid";

const PropertyGallery = ({ images }) => {
  return (
    <React.Fragment>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.map((imageUrl) => (
            <PropertyImage imageUrl={imageUrl} key={nanoid()}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

PropertyGallery.propTypes = {
  images: propTypes.images,
};

export default PropertyGallery;
