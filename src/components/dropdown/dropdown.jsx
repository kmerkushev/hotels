import React from "react";
import propTypes from "../../proptypes";
import {ActionCreator} from "../../action";
import {connect} from 'react-redux';

const Dropdown = ({currentFilter, dropdownOptions, sortOffers, closeDropdown, changeCurrentFilter}) => {
  return (
    <React.Fragment>
      <ul className="places__options places__options--custom">
        {dropdownOptions.map((option, index) => (
          <li className={`places__option ` + ((currentFilter === option) ? `places__option--active` : ``)} tabIndex="0" key={index}
            onClick={(evt) => {
              evt.preventDefault();
              changeCurrentFilter(evt.target.textContent);
              sortOffers();
              closeDropdown();
            }
            }>{option}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter(filterName) {
    dispatch(ActionCreator.changeCurrentFilter(filterName));
  },
  sortOffers(currentFilter) {
    dispatch(ActionCreator.sortOffers(currentFilter));
  },
  closeDropdown() {
    dispatch(ActionCreator.closeDropdown());
  },
});

Dropdown.propTypes = {
  currentFilter: propTypes.currentFilter,
  dropdownOptions: propTypes.dropdownOptions,
  sortOffers: propTypes.func,
  closeDropdown: propTypes.func,
  changeCurrentFilter: propTypes.func,
};

export {Dropdown};

export default connect(null, mapDispatchToProps)(Dropdown);
