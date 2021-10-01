import React from "react";
import PropTypes from 'prop-types';
import propTypes from "../../proptypes";
import Rating from '../rating/rating';
import dayjs from "dayjs";

const Review = (props) => {
  const {review} = props;

  return (
    <React.Fragment>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {review.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <Rating rating={review.rating}/>
          <p className="reviews__text">
            {review.comment}
          </p>
          <time className="reviews__time" dateTime={dayjs(review.date).format(`YYYY-MM-DD`)}>{dayjs(review.date).format(`MMMM`) + ` ` + dayjs(review.date).format(`YYYY`)}</time>
        </div>
      </li>
    </React.Fragment>
  );
};

Review.propTypes = propTypes.review;

export default Review;


// date: `2019-05-08T14:13:56.569Z`
