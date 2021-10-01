import React from "react";
import propTypes from "../../proptypes";
import Dropdown from '../dropdown/dropdown';
import {toggleDropdown} from "../../animateDropdown";
import {dropdownOptions} from "../../const";
import {connect} from "react-redux";

const PlacesSorting = ({currentFilter}) => {

  return (
    <React.Fragment>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" onClick={() => {
          toggleDropdown();
        }} tabIndex="0">
          {currentFilter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <Dropdown currentFilter={currentFilter} dropdownOptions={dropdownOptions}/>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentFilter: state.currentFilter,
});

PlacesSorting.propTypes = propTypes.currentFilter;

export {PlacesSorting};

export default connect(mapStateToProps, null)(PlacesSorting);
