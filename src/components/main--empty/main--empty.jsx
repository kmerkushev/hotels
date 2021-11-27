import React from "react";
import CitiesTabs from "../cities-tabs/cities-tabs";
import PlacesEmpty from "../places--empty/places--empty";

const MainEmpty = () => {
  return (
    <React.Fragment>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <PlacesEmpty />
      </main>
    </React.Fragment>
  );
};

export default React.memo(MainEmpty);
