import React from "react";
import PropTypes from 'prop-types';

const RatingBig = (props) => {
  return <React.Fragment>
    <div className="property__stars rating__stars">
      <span style={{width: `96%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </React.Fragment>;
};

RatingBig.propTypes = {
};

export default RatingBig;
