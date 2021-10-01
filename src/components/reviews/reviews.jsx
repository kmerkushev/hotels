import React from "react";
import PropTypes from 'prop-types';
import propTypes from "../../proptypes";
import ReviewsList from '../reviews__list/reviews__list';
import ReviewsForm from '../reviews__form/reviews__form';

const Reviews = ({reviews}) => {

  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ReviewsList reviews={reviews} />
        <ReviewsForm />
      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = propTypes.reviews;

export default Reviews;
