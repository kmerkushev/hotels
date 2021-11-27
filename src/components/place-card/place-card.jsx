import React from "react";
import { Link } from "react-router-dom";
import Rating from '../rating/rating';
import BookmarkButton from "../bookmark-button/bookmark-button";
import BookmarkButtonActive from "../bookmark-button--active/bookmark-button--active";
import propTypes from "../../proptypes";
import { request } from "../../const";

const PlaceCard = ({ offer }) => {
  const { price, rating, title, type, id, isFavorite, isPremium } = offer;

  return <React.Fragment>
    <article className="cities__place-card place-card" id={id}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="/img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {isFavorite
            ? <BookmarkButtonActive id={id} />
            : <BookmarkButton id={id}/>
          }
        </div>
        <Rating rating={rating}/>
        <h2 className="place-card__name">
          <Link to={request.get.offer(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </React.Fragment>;
};

PlaceCard.propTypes = {
  offer: propTypes.offer,
};

export default React.memo(PlaceCard);
