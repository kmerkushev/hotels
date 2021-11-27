import * as types from "./actionTypes";
import { redirectToRouteAction } from "./actions";

describe(`Actions`, () => {
  it(`action creator for redirecting to route returns url`, () => {
    const TEST_STRING = `URL`;
    const expectedAction = {
      type: types.REDIRECT_TO_ROUTE,
      payload: TEST_STRING
    };
    expect(redirectToRouteAction(TEST_STRING)).toEqual(expectedAction);
  });
});
