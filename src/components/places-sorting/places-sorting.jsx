import React from "react";
import Dropdown from '../dropdown/dropdown';
import { toggleDropdown } from "../../utils/animate-dropdown";
import { dropdownOptions } from "../../const";
import { useSelector } from "react-redux";
import { getCurrentFilter } from "../../redux/hotels/selectors";

const PlacesSorting = () => {
  const currentFilter = useSelector(getCurrentFilter);

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

export default React.memo(PlacesSorting);
