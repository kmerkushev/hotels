let getOffersByCityId = (cityId, offers) => {
  let offersByCity = [];
  offers.map((offer, index) => {
    if (offer.city.id === cityId) {
      offer.popularity = index;
      offersByCity.push(offer);
    }
  });
  return offersByCity;
};

export default getOffersByCityId;
