let isThisCityNew = (cities, cityName) => {
  let isNew = true;
  if (cities.length === 0) {
    return isNew;
  }
  cities.map((city) => {
    if (city.name === cityName) {
      isNew = false;
    }
  });
  return isNew;
};

let getCitiesFromOffers = (offers) => {
  let cities = [];
  offers.map((offer) => {
    if (isThisCityNew(cities, offer.city.name)) {
      cities.push(offer.city);
    }
  });
  return cities;
};

export { getCitiesFromOffers };
