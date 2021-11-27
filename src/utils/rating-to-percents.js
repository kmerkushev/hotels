let ratingToPercents = (rating) => {
  const MAX_PERCENTS = 100;
  const MAX_RATING = 5;
  return MAX_PERCENTS / MAX_RATING * rating;
};

export default ratingToPercents;
