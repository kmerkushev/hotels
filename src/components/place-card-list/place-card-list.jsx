import React from "react";
import PlaceCard from '../place-card/place-card';
import propTypes from "../../proptypes";

const PlaceCardList = ({ offers }) => {
  return <React.Fragment>
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))
      }
    </div>
  </React.Fragment>;
};

PlaceCardList.propTypes = {
  offers: propTypes.offers,
};

export default React.memo(PlaceCardList);
