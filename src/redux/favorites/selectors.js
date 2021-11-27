import { NameSpace } from "../root-reducer";

export const getIsFavoritesLoaded = (state) => state[NameSpace.FAVORITES].isFavoritesLoaded;
export const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;
