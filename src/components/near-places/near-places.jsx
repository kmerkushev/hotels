import React from "react";
import propTypes from '../../proptypes.js';

import PlaceCardList from "../place-card-list/place-card-list";

const NearPlaces = ({ offers }) => {

  return (
    <React.Fragment>
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <PlaceCardList offers={offers} />
        </div>
      </section>
    </React.Fragment>
  );
};

NearPlaces.propTypes = {
  offers: propTypes.offers,
};

export default NearPlaces;
