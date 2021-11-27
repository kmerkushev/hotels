import { resetFavoritesAction, setFavoritesAction } from "./actions";
import { favoritesReducer } from "./reducer";
import { DATA_STRUCTURE } from "../../const";

describe(`Reducer: favoritesReducer `, () => {
  const initialState = {
    favorites: [],
    isFavoritesLoaded: false,
  };

  it(`without additional parameters should return initial state`, () => {
    expect(favoritesReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should return new favorites and true isFavoritesLoaded`, () => {
    const finalState = {
      favorites: DATA_STRUCTURE.hotels,
      isFavoritesLoaded: true,
    };
    expect(favoritesReducer(initialState, setFavoritesAction(DATA_STRUCTURE.hotelsRaw)))
      .toEqual(finalState);
  });

  it(`should return initial state`, () => {
    const state = {
      favorites: [{ test1: `test1` }, { test2: `test2` }],
      isFavoritesLoaded: true,
    };
    expect(favoritesReducer(state, resetFavoritesAction()))
      .toEqual(initialState);
  });
});
