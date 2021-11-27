import React from "react";
import { useSelector } from "react-redux";
import Map from "../map/map";
import PlaceCardList from "../place-card-list/place-card-list";
import PlacesFound from "../places-found/places-found";
import PlacesSorting from "../places-sorting/places-sorting";
import { getCity, getOffers } from "../../redux/hotels/selectors";

const Places = () => {
  const city = useSelector(getCity);
  const offers = useSelector(getOffers);

  return (
    <React.Fragment>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound />
            <PlacesSorting />
            <PlaceCardList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <Map city={city} offers={offers}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Places;
