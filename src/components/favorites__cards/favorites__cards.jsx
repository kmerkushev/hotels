import React from "react";
import FavoritesCard from "../favorites__card/favorites__card";
import propTypes from "../../proptypes";

const FavoritesCards = ({ offers }) => {
  return <React.Fragment>
    {offers.map((offer) => (
      <FavoritesCard key={offer.id} offer={offer}/>))
    }
  </React.Fragment>;
};

FavoritesCards.propTypes = propTypes.offers;

export default FavoritesCards;
