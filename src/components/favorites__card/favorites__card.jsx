import React from "react";
import { Link } from "react-router-dom";
import propTypes from "../../proptypes";
import { request } from "../../const";
import BookmarkButtonActive from "../bookmark-button--active/bookmark-button--active";

const FavoritesCard = ({ offer }) => {
  const { price, title, type, id } = offer;

  return (
    <React.Fragment>
      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={request.get.offer(id)}>
            <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <BookmarkButtonActive id={id} />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `100%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={request.get.offer(id)}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

FavoritesCard.propTypes = propTypes.offers;

export default FavoritesCard;
