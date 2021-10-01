import React from "react";
import PropTypes from 'prop-types';

import Header from "../header/header";
import Map from "../map/map";
import NearPlaces from "../near-places/near-places";
import Host from "../host/host";
import PropertyFeatures from "../property__features/property__features";
import PropertyGallery from "../property__gallery/property__gallery";
import PropertyInside from "../property__inside/property__inside";
import PropertyPrice from "../property__price/property__price";
import RatingBig from "../rating-big/rating-big";
import Reviews from "../reviews/reviews";

import {reviews} from "../../const";
import propTypes from "../../proptypes";

const Property = ({nearCity, nearPoints, nearOffers}) => {

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
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map city={nearCity} points={nearPoints}/>
          </section>
        </section>

        <div className="container">
          <NearPlaces offers={nearOffers}/>
        </div>
      </main>
    </React.Fragment>
  );
};

Property.propTypes = {
  nearCity: propTypes.city,
  nearPoints: propTypes.points,
  nearOffers: propTypes.offers
};

export default Property;
