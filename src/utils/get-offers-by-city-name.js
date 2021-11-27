let getOffersByCityName = (cityName, offers) => {
  let offersByCityName = [];
  offers.map((offer) => {
    if (offer.city.name === cityName) {
      offersByCityName.push(offer);
    }
  });
  return offersByCityName;
};

export { getOffersByCityName };
