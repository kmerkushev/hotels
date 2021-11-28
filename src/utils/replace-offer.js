let replaceOffer = (offers, newOffer) => {
  let updatedOffers = offers.map((offer) => {
    if (offer.id === newOffer.id) {
      return newOffer;
    }
    return offer;
  });
  return updatedOffers;
};

export default replaceOffer;
