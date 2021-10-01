import React, {useState} from "react";
import PropTypes from 'prop-types';

import FavoriteCard from '../favorites__card/favorites__card';

import propTypes from "../../proptypes";

const FavoritesCards = (props) => {
  const {offers} = props;

  return <React.Fragment>
    {offers.map((offer) => (
      <FavoriteCard key={offer.id} offer={offer}/>))
    }
  </React.Fragment>;
};

FavoritesCards.propTypes = propTypes.offers;

export default FavoritesCards;
