import React from "react";
import propTypes from "../../proptypes";
import { setCurrentFilterAction, sortOffersAction } from "../../redux/hotels/actions";
import { useDispatch } from "react-redux";
import { closeDropdown } from "../../utils/animate-dropdown";

const Dropdown = ({ currentFilter, dropdownOptions }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <ul className="places__options places__options--custom">
        {dropdownOptions.map((option, index) => (
          <li className={`places__option ` + ((currentFilter === option) ? `places__option--active` : ``)} tabIndex="0" key={index}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(setCurrentFilterAction(evt.target.textContent));
              closeDropdown();
              dispatch(sortOffersAction());
            }
            }>{option}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

Dropdown.propTypes = {
  currentFilter: propTypes.currentFilter,
  dropdownOptions: propTypes.dropdownOptions,
};

export default Dropdown;
