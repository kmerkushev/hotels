import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { hotelsReducer } from "./hotels/reducer";
import { offerReducer } from "./offer/reducer";
import { favoritesReducer } from "./favorites/reducer";

export const NameSpace = {
  AUTH: `AUTH`,
  HOTELS: `HOTELS`,
  OFFER: `OFFER`,
  FAVORITES: `FAVORITES`,
};

export default combineReducers({
  [NameSpace.AUTH]: authReducer,
  [NameSpace.HOTELS]: hotelsReducer,
  [NameSpace.OFFER]: offerReducer,
  [NameSpace.FAVORITES]: favoritesReducer,
});
