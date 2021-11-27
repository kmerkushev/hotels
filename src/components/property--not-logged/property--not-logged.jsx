import React from "react";
import Header from "../header/header";
import Map from "../map/map";
import NearPlaces from "../near-places/near-places";
import Host from "../host/host";
import PropertyFeatures from "../property__features/property__features";
import PropertyGallery from "../property__gallery/property__gallery";
import PropertyInside from "../property__inside/property__inside";
import PropertyPrice from "../property__price/property__price";
import RatingBig from "../rating-big/rating-big";
import Review from '../review/review';

const PropertyNotLogged = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery />
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <RatingBig />
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <PropertyFeatures />
              <PropertyPrice />
              <PropertyInside />
              <Host />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <Review />
                  <Review />
                </ul>
              </section>
            </div>
          </div>
          <Map />
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </React.Fragment>
  );
};

PropertyNotLogged.propTypes = {
};

export default PropertyNotLogged;
