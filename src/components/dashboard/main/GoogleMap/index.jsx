import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import spotIcon from "../../../../assets/svg/markpnt.svg";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const location = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent({ loc, style = containerStyle }) {
  const { search } = useLocation();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBkhkRKwHRXhPkz41YMnXk_XqH7H1Y-HWs",
  });

  const { lat, lng } = useSelector((state) => state.authorize);
  let { currentData } = useSelector((state) => state.dashboardData);
  const [center, setCenter] = React.useState(location);

  React.useEffect(() => {
    if (lat !== "" && lng !== "") {
      setCenter({
        lat: lat,
        lng: lng,
      });
    }
  }, [lat, lng]);

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={style}
      center={
        loc !== undefined && (loc.lat !== "" || loc.lng !== "") ? loc : center
      }
      defaultZoom={16}
      zoom={16}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {loc !== undefined && (loc.lat !== "" || loc.lng !== "") && (
        <Marker position={{ lat: loc.lat, lng: loc.lng }} />
      )}
      {search === "?product" ? (
        <Marker position={{ lat: currentData?.lat, lng: currentData?.lng }} />
      ) : (
        <Marker
          position={{ lat: center.lat, lng: center.lng }}
          icon={spotIcon}
        />
      )}

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
