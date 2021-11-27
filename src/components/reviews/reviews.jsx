import React from "react";
import ReviewsList from '../reviews__list/reviews__list';
import ReviewsForm from '../reviews__form/reviews__form';
import { useSelector } from "react-redux";
import { getAuthorizationStatus } from "../../redux/auth/selectors";
import { getComments } from "../../redux/offer/selectors";

const Reviews = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const comments = useSelector(getComments);
  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ReviewsList comments={comments} />
        {authorizationStatus === `AUTH` && <ReviewsForm />}
      </section>
    </React.Fragment>
  );
};

export default Reviews;
