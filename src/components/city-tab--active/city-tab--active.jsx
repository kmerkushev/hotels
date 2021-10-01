import React from "react";
import {connect} from 'react-redux';
import {ActionCreator} from "../../action";
import PropTypes from 'prop-types';
import getCityByName from "../../getCityByName";


const CityTabActive = ({cityName, changeCity}) => {
  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active"
          onClick={(evt) => {
            evt.preventDefault();
            changeCity(getCityByName(evt.target.textContent));
          }} href="">
          <span>{cityName}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

CityTabActive.propTypes = {
  cityName: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity() {
    dispatch(ActionCreator.changeCity());
  }
});

export {CityTabActive};

export default connect(null, mapDispatchToProps)(CityTabActive);
