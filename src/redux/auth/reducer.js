import { requireAuthorizationAction, logoutAction, setIsAuthCheckedAction } from "./actions";
import { AuthorizationStatus } from "../../const";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isAuthChecked: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorizationAction, (state, action) => {
    state.authorizationStatus = action.payload;
    state.isAuthChecked = true;
  });
  builder.addCase(logoutAction, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setIsAuthCheckedAction, (state, action) => {
    state.isAuthChecked = action.payload;
  });
});

export { authReducer };
