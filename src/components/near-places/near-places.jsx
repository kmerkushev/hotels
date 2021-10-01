import React from "react";
import PropTypes from 'prop-types';
import proptypes from '../../proptypes.js';

import PlacesCards from "../places-cards/places-cards";

const NearPlaces = ({offers}) => {

  return (
    <React.Fragment>
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <PlacesCards offers={offers} />
        </div>
      </section>
    </React.Fragment>
  );
};

NearPlaces.propTypes = proptypes.offers;

export default NearPlaces;
