import React from "react";
import propTypes from "../../proptypes";
import {connect} from "react-redux";

const PlacesFound = ({cityName, numberOffers}) => {
  return (
    <React.Fragment>
      {<b className="places__found">{numberOffers} places to stay in {cityName}</b>}
    </React.Fragment>
  );
};

PlacesFound.propTypes = propTypes.cityName;

let mapStateToProps = (state) => {
  return {
    cityName: state.city.name,
    numberOffers: state.offers.length
  };
};

export {PlacesFound};

export default connect(mapStateToProps, null)(PlacesFound);
