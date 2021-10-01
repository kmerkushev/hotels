import React from "react";
import {connect} from 'react-redux';
import {ActionCreator} from "../../action";
import propTypes from "../../proptypes";
import getCityByName from "../../getCityByName";
import getOffersByCity from "../../getOffersByCity";

const CityTab = ({cityName, allOffers, changeCity, changeOffers, closeDropdown, sortOffers}) => {
  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item"
          onClick={(evt) => {
            evt.preventDefault();
            changeCity(getCityByName(evt.target.textContent));
            changeOffers(getOffersByCity(cityName, allOffers));
            closeDropdown();
            sortOffers();
          }} href="">
          <span>{cityName}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    allOffers: state.allOffers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeOffers() {
    dispatch(ActionCreator.changeOffers());
  },
  closeDropdown() {
    dispatch(ActionCreator.closeDropdown());
  },
  sortOffers() {
    dispatch(ActionCreator.sortOffers());
  },
});

CityTab.propTypes = {
  cityName: propTypes.string.isRequired,
  allOffers: propTypes.offers,
  changeCity: propTypes.func.isRequired,
  changeOffers: propTypes.func.isRequired,
  closeDropdown: propTypes.func.isRequired,
  sortOffers: propTypes.func.isRequired,
};

export {CityTab};

export default connect(mapStateToProps, mapDispatchToProps)(CityTab);
