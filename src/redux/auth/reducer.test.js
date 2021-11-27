import { requireAuthorizationAction, logoutAction, setIsAuthCheckedAction } from "./actions";
import { AuthorizationStatus } from "../../const";
import { authReducer } from "./reducer";

describe(`Reducer: authReducer `, () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isAuthChecked: false,
  };

  it(`without additional parameters should return initial state`, () => {
    expect(authReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should return authorization status`, () => {
    const finalState = {
      authorizationStatus: AuthorizationStatus.AUTH,
      isAuthChecked: true
    };
    expect(authReducer(initialState, requireAuthorizationAction(AuthorizationStatus.AUTH)))
      .toEqual(finalState);
  });

  it(`should return negative authorization status`, () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      isAuthChecked: true
    };
    const finalState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthChecked: true
    };
    expect(authReducer(state, logoutAction()))
      .toEqual(finalState);
  });

  it(`should return isAuthChecked = true`, () => {
    const finalState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthChecked: true
    };
    expect(authReducer(initialState, setIsAuthCheckedAction()))
      .toEqual(finalState);
  });
});
