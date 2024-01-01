import React from "react";
import { ServiceProductInput, ServiceProviderDiv, TitleText } from "./style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import SpottrPlaces from "../../dashboard/main/GoogleMap/reactPlaces";
import Geocode from "react-geocode";
import { useCorporateUser } from "context/userDetails";
import GoogleMaps from "components/dashboard/main/GoogleMap";
import ReactGeoCode from "../../dashboard/main/GoogleMap/geocode";
import { useDispatch } from "react-redux";
import { setCorporateAddress } from "store/corporateUserDetails/corporateUserDetailsReducer";
import { useSelector } from "react-redux";

Geocode.setApiKey("AIzaSyBkhkRKwHRXhPkz41YMnXk_XqH7H1Y-HWs");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

const LocationContent = ({ restart }) => {
  const { lat, lng } = useSelector((state) => state.authorize);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setCorporateAddress({ lat, lng }));
  }, []);

  // const { corporateUser, setCorporateUser } = useCorporateUser();
  // const [input, setInput] = React.useState("");
  // const [loc, setLoc] = React.useState({
  //   lat: "",
  //   lng: "",
  // });

  // React.useEffect(() => {
  //   Geocode.fromAddress(input).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       console.log(lat, lng);
  //       setLoc({
  //         lat: lat,
  //         lng: lng,
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, [input]);

  return (
    <Div width="100%" height="100%">
      <ReactGeoCode />
    </Div>
  );
};

export default LocationContent;
