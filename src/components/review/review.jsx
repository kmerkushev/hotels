import React from "react";
import propTypes from "../../proptypes";
import Rating from '../rating/rating';
import dayjs from "dayjs";

const Review = ({ comment }) => {
  return (
    <React.Fragment>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {comment.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <Rating rating={comment.rating}/>
          <p className="reviews__text">
            {comment.comment}
          </p>
          <time className="reviews__time"
            dateTime={
              dayjs(comment.date).format(`YYYY-MM-DD`)
            }>
            {
              dayjs(comment.date).format(`MMMM`) + ` ` + dayjs(comment.date).format(`YYYY`)
            }
          </time>
        </div>
      </li>
    </React.Fragment>
  );
};

Review.propTypes = propTypes.comment;

export default Review;
