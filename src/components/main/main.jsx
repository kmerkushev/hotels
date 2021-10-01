import React from "react";

import CitiesTabs from "../cities-tabs/cities-tabs";
import Header from "../header/header";
import Map from "../map/map";
import PlacesCards from "../places-cards/places-cards";
import PlacesFound from "../places-found/places-found";
import PlacesSorting from "../places-sorting/places-sorting";
import {connect} from "react-redux";
import propTypes from "../../proptypes";
import LoadingScreen from "../loading-screen/loading-screen";


const Main = ({isDataLoaded}) => {

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound />
              <PlacesSorting />
              <PlacesCards />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map />
              </section>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

Main.propTypes = {
  isDataLoaded: propTypes.isDataLoaded,
};

const mapStateToProps = (state) => {
  return {
    isDataLoaded: state.isDataLoaded,
  };
};

export {Main};
export default connect(mapStateToProps, null)(Main);
