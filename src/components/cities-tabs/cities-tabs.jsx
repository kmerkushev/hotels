import React from "react";
import CityTab from '../city-tab/city-tab';
import CityTabActive from '../city-tab--active/city-tab--active';
import { useSelector } from "react-redux";
import { getCities, getCity } from "../../redux/hotels/selectors";

const CitiesTabs = () => {
  const cities = useSelector(getCities);
  const currentCity = useSelector(getCity);
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

export default React.memo(CitiesTabs);
