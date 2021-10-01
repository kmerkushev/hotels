import React from "react";
import PropTypes from 'prop-types';

import Header from '../header/header';
import LocationsItem from '../locations__item/locations__item';
import FavoritesCards from '../favorites__cards/favorites__cards';
import Footer from '../footer/footer';

import propTypes from "../../proptypes";

const Favorites = (props) => {
  const {offers} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <LocationsItem />
                </div>
                <div className="favorites__places">
                  <FavoritesCards offers={offers}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <LocationsItem />
                </div>
                <div className="favorites__places">
                  <FavoritesCards offers={offers}/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

Favorites.propTypes = propTypes.offers;

export default Favorites;
