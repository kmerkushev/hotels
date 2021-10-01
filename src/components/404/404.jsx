import React from "react";
import PropTypes from 'prop-types';

import Header from '../header/header';
import Footer from '../footer/footer';

const SignIn = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Page not found</b>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

SignIn.propTypes = {
};

export default SignIn;
