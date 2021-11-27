import { NameSpace } from "../root-reducer";

export const getAuthorizationStatus = (state) => state[NameSpace.AUTH].authorizationStatus;
export const getIsAuthChecked = (state) => state[NameSpace.AUTH].isAuthChecked;
