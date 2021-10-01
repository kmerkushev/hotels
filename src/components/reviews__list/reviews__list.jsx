import React from "react";
import PropTypes from 'prop-types';
import propTypes from "../../proptypes";
import Review from '../review/review';


const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = propTypes.reviews;

export default ReviewsList;
