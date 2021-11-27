import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RatingInput from '../rating-input/rating-input';
import CommentTextField from "../comment-textfield/comment-textfield";
import { disableFormAction, enableFormAction, resetFormAction } from "../../redux/offer/actions";
import { postCommentAsync } from "../../redux/offer/actions";
import { getCurrentOffer, getIsRatingReady, getIsCommentReady, getSendFormError } from "../../redux/offer/selectors";


const ReviewsForm = () => {
  const id = useSelector(getCurrentOffer);
  const isRatingReady = useSelector(getIsRatingReady);
  const isCommentReady = useSelector(getIsCommentReady);
  const sendFormError = useSelector(getSendFormError);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(disableFormAction());
    dispatch(postCommentAsync({
      comment: form.review.value,
      rating: +form.rating.value,
    }, id));
    dispatch(enableFormAction());

    form.reset();
    dispatch(resetFormAction());
  };

  return (
    <React.Fragment>
      <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit}>
        <fieldset style={{ border: `none`, padding: 0 }} >
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <RatingInput />
          <CommentTextField />
          {sendFormError && (
            <span className={`form__error error`}>
              При отправке формы возникла ошибка: {sendFormError}. Пожалуйста, попробуйте
              позже.
            </span>
          )}
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={(!isRatingReady || !isCommentReady) && `disable`}>Submit</button>
          </div>
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default ReviewsForm;
