import * as types from "./actionTypes";
import { DATA_STRUCTURE } from "../../const";

import {
  setFavoritesAction,
  resetFavoritesAction,
} from "./actions";

describe(`Favorites Actions`, () => {
  it(`action creator for setting favorite offers to store returns Array of Hotels`, () => {
    const expectedAction = {
      type: types.SET_FAVORITES,
      payload: DATA_STRUCTURE.hotels
    };

    expect(setFavoritesAction(DATA_STRUCTURE.hotelsRaw)).toStrictEqual(expectedAction);
  });

  it(`action creator for reset favorites to default values`, () => {
    const expectedAction = {
      type: types.RESET_FAVORITES
    };

    expect(resetFavoritesAction()).toEqual(expectedAction);
  });

});
