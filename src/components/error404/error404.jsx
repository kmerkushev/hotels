import React from "react";
import Header from '../header/header';
import Footer from '../footer/footer';

const Error404 = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404. Not found</b>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Error404;
