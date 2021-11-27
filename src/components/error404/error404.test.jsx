import React from 'react';
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Error404 from "./error404";

describe(`Component: Error404`, () => {
  it(`should render correctly`, () => {
    const history = createMemoryHistory();
    const { getByText } = render(
        <Router history={history}>
          <Error404 />
        </Router>
    );

    const headerElement = getByText(`Page not found`);
    expect(headerElement).toBeInTheDocument();
  });
});
