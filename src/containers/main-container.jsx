import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header/header";
import Main from "../components/main/main";
import MainEmpty from "../components/main--empty/main--empty";
import LoadingScreen from "../components/loading-screen/loading-screen";
import { loadAllOffersAsync, resetOffersAction } from "../redux/hotels/actions";
import { getIsDataLoaded, getIsOffersNotEmpty } from "../redux/hotels/selectors";
import { useEffect } from "react";

const MainContainer = () => {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isDataLoaded) {
        dispatch(resetOffersAction());
      }
    };
  });

  if (!isDataLoaded) {
    dispatch(loadAllOffersAsync());
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        {getIsOffersNotEmpty ? <Main /> : <MainEmpty />}
      </div>
    </React.Fragment>
  );
};

export default MainContainer;
