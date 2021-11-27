import React from "react";
import propTypes from "../../proptypes";
import ratingToPercents from "../../utils/rating-to-percents";

const RatingBig = ({ rating }) => {
  return <React.Fragment>
    <div className="property__stars rating__stars">
      <span style={{ width: `${ratingToPercents(rating)}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </React.Fragment>;
};

RatingBig.propTypes = {
  rating: propTypes.rating,
};

export default RatingBig;
