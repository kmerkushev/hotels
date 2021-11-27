import {
  requireAuthorizationAction,
  logoutAction,
  setIsAuthChecked,
} from "./actions";
import { AuthorizationStatus } from "../../const";
import * as types from "./actionTypes";

describe(`Auth Actions`, () => {
  it(`action creator for authorization returns status`, () => {
    const noAuth = AuthorizationStatus.NO_AUTH;
    const expectedAction = {
      type: types.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    };
    expect(requireAuthorizationAction(noAuth)).toEqual(expectedAction);
  });

  it(`action creator for logout returns no_auth status`, () => {
    const expectedAction = {
      type: types.LOGOUT,
      payload: AuthorizationStatus.NO_AUTH
    };
    expect(logoutAction()).toEqual(expectedAction);
  });

  it(`action creator for setting isAuthChecked to true`, () => {
    const expectedAction = {
      type: types.SET_IS_AUTH_CHECKED,
      payload: true
    };
    expect(setIsAuthChecked()).toEqual(expectedAction);
  });
});
