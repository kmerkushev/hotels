import {cities} from "./const";

let getCityByName = (cityName) => {
  let currentCity = {};
  cities.map((city) => {
    if (city.name === cityName) {
      currentCity = city;
    }
  });
  return currentCity;
};

export default getCityByName;
