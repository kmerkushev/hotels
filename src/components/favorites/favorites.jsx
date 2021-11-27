import React from "react";
import Header from '../header/header';
import LocationsItem from '../locations__item/locations__item';
import FavoritesCards from '../favorites__cards/favorites__cards';
import Footer from '../footer/footer';
import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/favorites/selectors";
import { getCitiesFromOffers } from "../../utils/get-cities-from-offers";
import { getOffersByCityName } from "../../utils/get-offers-by-city-name";
import { nanoid } from "nanoid";

const Favorites = () => {
  const favoriteOffers = useSelector(getFavorites);
  const cities = getCitiesFromOffers(favoriteOffers);

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li className="favorites__locations-items" key={nanoid()}>
                  <div className="favorites__locations locations locations--current">
                    <LocationsItem cityName={city.name}/>
                  </div>
                  <div className="favorites__places">
                    <FavoritesCards offers={getOffersByCityName(city.name, favoriteOffers)}/>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Favorites;
