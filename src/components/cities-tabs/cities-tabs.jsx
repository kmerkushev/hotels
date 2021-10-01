import React from "react";
import propTypes from "../../proptypes";
import CityTab from '../city-tab/city-tab';
import CityTabActive from '../city-tab--active/city-tab--active';
import {connect} from "react-redux";

const CitiesTabs = ({cities, currentCity}) => {
  return (
    <React.Fragment>
      <div className="cities tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              (city.name === currentCity.name) ? <CityTabActive cityName={city.name} key={city.id}/> : <CityTab cityName={city.name} key={city.id}/>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.city,
});

CitiesTabs.propTypes = {
  cities: propTypes.cities,
  currentCity: propTypes.city,
};

export {CitiesTabs};

export default connect(mapStateToProps, null)(CitiesTabs);
