import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Offer from "../components/offer/offer";
import { loadOfferAsync, loadCommentsAsync, loadNearbyAsync, resetOfferAction } from "../redux/offer/actions";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/loading-screen/loading-screen";
import { getIsOfferLoaded } from "../redux/offer/selectors";

const OfferContainer = () => {
  const { hotel_id: hotelId } = useParams();
  const isOfferLoaded = useSelector(getIsOfferLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isOfferLoaded) {
        dispatch(resetOfferAction());
      }
    };
  });

  if (!isOfferLoaded) {
    dispatch(loadOfferAsync(hotelId));
    dispatch(loadCommentsAsync(hotelId));
    dispatch(loadNearbyAsync(hotelId));
  }

  if (isOfferLoaded) {
    return (
      <Offer />
    );
  }
  return (
    <LoadingScreen />
  );
};

export default OfferContainer;
