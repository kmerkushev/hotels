import React from "react";
import propTypes from "../../proptypes";
import PropertyInsideItem from '../property__inside-item/property__inside-item';
import { nanoid } from "nanoid";

const PlacesSorting = ({ goods }) => {
  return (
    <React.Fragment>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((item) => (
            <PropertyInsideItem item={item} key={nanoid()}/>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

PlacesSorting.propTypes = {
  goods: propTypes.goods,
};

export default PlacesSorting;
