import React from "react";
import Header from "../header/header";
import Map from "../map/map";
import NearPlaces from "../near-places/near-places";
import Host from "../host/host";
import PropertyFeatures from "../property__features/property__features";
import PropertyGallery from "../property__gallery/property__gallery";
import PropertyInside from "../property__inside/property__inside";
import PropertyDescription from "../property__description/property__description";
import PropertyPrice from "../property__price/property__price";
import RatingBig from "../rating-big/rating-big";
import Reviews from "../reviews/reviews";
import { AuthorizationStatus } from "../../const";
import BookmarkButtonBig from "../bookmark-button-big/bookmark-button-big";
import BookmarkButtonBigActive from "../bookmark-button-big--active/bookmark-button-big--active";
import { useSelector } from "react-redux";
import { getAuthorizationStatus } from "../../redux/auth/selectors";
import { getComments, getCurrentOffer, getHotelsNearby } from "../../redux/offer/selectors";

const Offer = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offer = useSelector(getCurrentOffer);
  const comments = useSelector(getComments);
  const hotelsNearby = useSelector(getHotelsNearby);
  const {
    bedrooms,
    city,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type } = offer;

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                {isFavorite && authorizationStatus === AuthorizationStatus.AUTH ? <BookmarkButtonBigActive /> : <BookmarkButtonBig />}

              </div>
              <div className="property__rating rating">
                <RatingBig rating={rating}/>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <PropertyPrice price={price}/>
              <PropertyInside goods={goods}/>
              <Host host={host}/>
              <PropertyDescription description={description}/>
              <Reviews comments={comments}/>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} offers={hotelsNearby}/>
          </section>
        </section>

        <div className="container">
          <NearPlaces offers={hotelsNearby}/>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Offer;
