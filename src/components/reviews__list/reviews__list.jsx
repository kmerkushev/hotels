import React from "react";
import propTypes from "../../proptypes";
import Review from "../review/review";
import { MAX_REVIEWS_ON_PAGE } from "../../const";


const ReviewsList = ({ comments }) => {
  return (
    <React.Fragment>
      <ul className="reviews__list">
        { comments
        .slice(0, MAX_REVIEWS_ON_PAGE)
        .map((comment) => (
          <Review key={comment.id} comment={comment} />
        ))
        }
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  comments: propTypes.comments,
};

export default ReviewsList;
