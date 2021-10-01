import React, {useState} from "react";
import PropTypes from 'prop-types';
import RatingForm from '../rating-form/rating-form';

const ReviewsForm = (props) => {
  const [feedback, setFeedback] = useState(undefined);

  let submitHandler = (evt) => {
    evt.preventDefault();
    let form = evt.target;
    setFeedback({
      rating: form.rating.value,
      review: form.review.value
    });
  };

  return (
    <React.Fragment>
      <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <RatingForm />
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

ReviewsForm.propTypes = {
};

export default ReviewsForm;
