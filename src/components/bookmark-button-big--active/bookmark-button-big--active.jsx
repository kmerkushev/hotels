import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postFavoriteFromOfferAsync } from "../../redux/favorites/actions";
import { getCurrentOfferId } from "../../redux/offer/selectors";

const BookmarkButtonBigActive = () => {
  const id = useSelector(getCurrentOfferId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(postFavoriteFromOfferAsync(id, 0));
  };

  return (
    <React.Fragment>
      <button className="property__bookmark-button property__bookmark-button--active button" type="button" onClick={handleClick}>
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </React.Fragment>
  );
};

export default BookmarkButtonBigActive;
