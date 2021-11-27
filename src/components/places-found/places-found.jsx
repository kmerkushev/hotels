import React from "react";
import { useSelector } from "react-redux";
import { getCity, getOffers } from "../../redux/hotels/selectors";

const PlacesFound = () => {
  const cityName = useSelector(getCity).name;
  const numberOffers = useSelector(getOffers).length;
  return (
    <React.Fragment>
      {<b className="places__found">{numberOffers} places to stay in {cityName}</b>}
    </React.Fragment>
  );
};

export default PlacesFound;
