import React from "react";
import { useCorporateUser } from "context/userDetails";
import GoogleMaps from "components/dashboard/main/GoogleMap";

import Geocode from "react-geocode";
import { Input } from "../../../onboading/inputField/style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import ReactPlacesAutocomplete from "./reactPlacesAutocomplete";

Geocode.setApiKey("AIzaSyBkhkRKwHRXhPkz41YMnXk_XqH7H1Y-HWs");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

function ReactGeoCode() {
  const [loc, setLoc] = React.useState({
    lat: "",
    lng: "",
  });

  const style = {
    width: "650px",
    height: "560px",
  };

  // const address = "111 Wellington St, Ottawa, ON K1A 0A9, Canada";

  // React.useEffect(() => {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyBkhkRKwHRXhPkz41YMnXk_XqH7H1Y-HWs`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((jsonData) => {
  //       console.log(jsonData.results[0].geometry.location); // {lat: 45.425152, lng: -75.6998028}

  //       setLoc(jsonData.results[0].geometry.location);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [input]);

  return (
    <Div>
      <ReactPlacesAutocomplete setLoc={setLoc} loc={loc} />
      <GoogleMaps style={style} loc={loc} />
    </Div>
  );
}

export default ReactGeoCode;
