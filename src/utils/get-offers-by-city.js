let getOffersByCity = (city, offers) => {
  let offersByCity = [];
  offers.map((offer) => {
    if (offer.city.name === city.name) {
      offersByCity.push(offer);
    }
  });
  return offersByCity;
};

export { getOffersByCity };
