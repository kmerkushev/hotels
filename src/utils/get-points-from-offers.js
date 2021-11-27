let getPointsFromOffers = (offers) => {
  let points = [];
  offers.map((offer) => {
    let point = {
      location: offer.location,
      title: offer.title,
    };
    points.push(point);
  });
  return points;
};

export default getPointsFromOffers;
