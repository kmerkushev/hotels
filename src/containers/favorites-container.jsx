import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadFavoritesAsync, resetFavoritesAction } from "../redux/favorites/actions";
import Favorites from "../components/favorites/favorites";
import FavoritesEmpty from "../components/favorites-empty/favorites-empty";
import { getFavorites, getIsFavoritesLoaded } from "../redux/favorites/selectors";
import LoadingScreen from "../components/loading-screen/loading-screen";

const FavoritesContainer = () => {
  const isFavoritesLoaded = useSelector(getIsFavoritesLoaded);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isFavoritesLoaded) {
        dispatch(resetFavoritesAction(false));
      }
    };
  });

  if (!isFavoritesLoaded) {
    dispatch(loadFavoritesAsync());
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      {favorites.length !== 0 ? <Favorites /> : <FavoritesEmpty />}
    </React.Fragment>
  );
};

export default FavoritesContainer;
