import camelize from "./camelize";

let loadedToOffersAdapter = (hotels) => {
  let offers = [];
  hotels.map((hotel) => {
    let offer = {};
    for (const key in hotel) {
      if (Object.hasOwnProperty.call(hotel, key)) {
        let camelCasedKey = camelize(key);
        offer[camelCasedKey] = hotel[key];
      }
    }
    offers.push(offer);
  });
  return offers;
};

export default loadedToOffersAdapter;
