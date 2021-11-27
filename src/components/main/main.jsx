import React from "react";
import CitiesTabs from "../cities-tabs/cities-tabs";
import Places from "../places/places";

const Main = () => {
  return (
    <React.Fragment>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <Places />
      </main>
    </React.Fragment>
  );
};

export default Main;
