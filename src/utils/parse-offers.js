import camelizeObject from "./camelize-object";

let parseOffers = (hotels) => {
  let offers = [];

  hotels.map((hotel) => {
    offers.push(camelizeObject(hotel));
  });
  return offers;
};

export { parseOffers };
