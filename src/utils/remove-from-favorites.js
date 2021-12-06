let removeFromFavorites = (favorites, offer) => {
  const newFavorites = favorites.map((favorite) => {
    if (favorite.id === offer.id) {
      favorite = null;
    }
  });
  console.log(newFavorites);
  return newFavorites;
};

export { removeFromFavorites };
