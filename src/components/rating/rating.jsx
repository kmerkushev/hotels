import React from "react";
import propTypes from "../../proptypes";

const Rating = ({ rating }) => {

  const getRatingInPercents = (stars) => {
    return stars * 20;
  };

  return <React.Fragment>
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: getRatingInPercents(rating) + `%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  </React.Fragment>;
};

Rating.propTypes = {
  rating: propTypes.rating,
};

export default Rating;
