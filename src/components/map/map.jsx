import React, { useEffect, useRef } from "react";
import propTypes from "../../proptypes";
import getPointsFromOffers from "../../utils/get-points-from-offers";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ city, offers }) => {
  const mapRef = useRef();

  let points = getPointsFromOffers(offers);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [points]);

  return (
    <React.Fragment>
      <section className="cities__map map" style={{ height: `100%` }}>
        <div id="map" style={{ height: `100%` }}></div>
      </section>
    </React.Fragment>
  );
};

Map.propTypes = {
  city: propTypes.city,
  offers: propTypes.offers,
};

export default Map;
