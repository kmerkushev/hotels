import React from "react";
import PlaceCard from '../place-card/place-card';
import {connect} from "react-redux";

import propTypes from "../../proptypes";

const PlacesCards = ({offers}) => {
  return <React.Fragment>
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))
      }
    </div>
  </React.Fragment>;
};

PlacesCards.propTypes = propTypes.offers;

let mapStateToProps = (state) => {
  return {
    offers: state.offers,
  };
};

export {PlacesCards};

export default connect(mapStateToProps, null)(PlacesCards);
