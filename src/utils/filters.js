import { dropdownOptions } from "../const";

// Фильтры предложений

export let filterByPopularity = (offers) => {
  return offers.slice().sort((a, b) => {
    return a.popularity - b.popularity;
  });
};

export let filterByPriceLowToHigh = (offers) => {
  return offers.slice().sort((a, b) => {
    return a.price - b.price;
  });
};

export let filterByPriceHighToLow = (offers) => {
  return offers.slice().sort((a, b) => {
    return b.price - a.price;
  });
};

export let filterByRateTopFirst = (offers) => {
  return offers.slice().sort((a, b) => {
    return b.rating - a.rating;
  });
};

export let getSortedOffers = (filterName, offers) => {
  switch (filterName) {
    case dropdownOptions[0]:
      return filterByPopularity(offers);

    case dropdownOptions[1]:
      return filterByPriceLowToHigh(offers);

    case dropdownOptions[2]:
      return filterByPriceHighToLow(offers);

    case dropdownOptions[3]:
      return filterByRateTopFirst(offers);

    default:
      return offers;
  }
};
