import React from "react";
import { useDispatch } from "react-redux";
import propTypes from "../../proptypes";
import { postFavoriteAsync } from "../../redux/favorites/actions";

const BookmarkButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(postFavoriteAsync(id, 1));
  };

  return (
    <React.Fragment>
      <button className="place-card__bookmark-button button" type="button" onClick={handleClick}>
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </React.Fragment>
  );
};

BookmarkButton.propTypes = {
  id: propTypes.number.isRequired,
};

export default BookmarkButton;
