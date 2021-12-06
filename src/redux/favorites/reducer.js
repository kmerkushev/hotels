import { resetFavoritesAction, setFavoritesAction, removeFromFavoritesAction } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  isFavoritesLoaded: false,
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFavoritesAction, (state, action) => {
    state.favorites = action.payload;
    state.isFavoritesLoaded = true;
  });
  builder.addCase(resetFavoritesAction, (state) => {
    state.favorites = [];
    state.isFavoritesLoaded = false;
  });
  builder.addCase(removeFromFavoritesAction, (state, action) => {
    state.favorites = action.payload;
  });
});

export { favoritesReducer };
