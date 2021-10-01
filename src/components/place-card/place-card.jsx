import React from "react";
import {Link, useHistory} from "react-router-dom";

import Rating from '../rating/rating';

import propTypes from "../../proptypes";

const PlaceCard = ({offer}) => {
  const {price, rating, title, type, id} = offer;
  const history = useHistory();

  return <React.Fragment>
    <article className="cities__place-card place-card" id={id}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating rating={rating}/>
        <h2 className="place-card__name">
          <Link to="/offer/:id?" onClick={() => history.push(`/offer`)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </React.Fragment>;
};

PlaceCard.propTypes = {
  offer: propTypes.offer,
};

export default PlaceCard;
