import React from "react";
import propTypes from "../../proptypes";

const PropertyInsideItem = ({ item }) => {
  return (
    <React.Fragment>
      <li className="property__inside-item">
        {item}
      </li>
    </React.Fragment>
  );
};

PropertyInsideItem.propTypes = {
  item: propTypes.string,
};

export default PropertyInsideItem;
