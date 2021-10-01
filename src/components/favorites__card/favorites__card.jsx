import React from "react";
import PropTypes from 'prop-types';
import {Link, useHistory} from "react-router-dom";

import propTypes from "../../proptypes";

const FavoritesCard = (props) => {
  const {offer} = props;
  const {price, name, type} = offer;
  const history = useHistory();

  return (
    <React.Fragment>
      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `100%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to="/offer" onClick={() => history.push(`/offer`)}>{name}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

FavoritesCard.propTypes = propTypes.offers;

export default FavoritesCard;
