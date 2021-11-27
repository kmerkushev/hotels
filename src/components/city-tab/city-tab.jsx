import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCityAction, setOffersAction } from "../../redux/hotels/actions";
import propTypes from "../../proptypes";
import { getCityByName } from "../../utils/get-city-by-name";
import { getOffersByCityName } from "../../utils/get-offers-by-city-name";
import { closeDropdown } from "../../utils/animate-dropdown";
import { getAllOffers } from "../../redux/hotels/selectors";

const CityTab = ({ cityName }) => {
  const allOffers = useSelector(getAllOffers);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href=""
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(setCityAction(getCityByName(evt.target.textContent)));
            dispatch(setOffersAction(getOffersByCityName(cityName, allOffers)));
            closeDropdown();
          }}>
          <span>{cityName}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

CityTab.propTypes = {
  cityName: propTypes.string.isRequired,
};

export default React.memo(CityTab);
