import React from "react";
import { request, AuthorizationStatus } from "../../const";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthorizationStatus } from "../../redux/auth/selectors";
import { getCurrentOfferId } from "../../redux/offer/selectors";
import { postFavoriteFromOfferAsync } from "../../redux/favorites/actions";

const BookmarkButtonBig = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const id = useSelector(getCurrentOfferId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(postFavoriteFromOfferAsync(id, 1));
  };

  return (
    <React.Fragment>
      {authorizationStatus === AuthorizationStatus.NO_AUTH ?
        <Link to={request.get.login()}>
          <button className="property__bookmark-button button" type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </Link>
        :
        <button className="property__bookmark-button button" type="button" onClick={handleClick}>
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      }
    </React.Fragment>
  );
};

export default BookmarkButtonBig;
