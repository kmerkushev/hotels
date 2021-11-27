import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import * as redux from "react-redux";
import userEvent from "@testing-library/user-event";
import SignIn from "./sign-in";

const mockStore = configureStore({});

it(`Render Login when user navigate to /login url`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <SignIn />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`login`), `test@test.ru`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(/test@test.ru/i));
  expect(screen.getByDisplayValue(/123456/i));
});

