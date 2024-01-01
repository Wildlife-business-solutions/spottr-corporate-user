// import React from "react";
// import SpottrPlaces from "../../../../components/dashboard/main/GoogleMap/reactPlaces";
// import { useCorporateUser } from "context/userDetails";
// import GoogleMaps from "components/dashboard/main/GoogleMap";

// import Geocode from "react-geocode";
// import { PlacesAutocomplete } from "react-places-autocomplete";

// Geocode.setApiKey("AIzaSyBkhkRKwHRXhPkz41YMnXk_XqH7H1Y-HWs");

// // set response language. Defaults to english.
// Geocode.setLanguage("en");

// // set response region. Its optional.
// // A Geocoding request with region=es (Spain) will return the Spanish city.
// Geocode.setRegion("es");

// function ScanBarCodePage() {
//   const { corporateUser, setCorporateUser } = useCorporateUser();
//   const [input, setInput] = React.useState("");

//   const renderSuggestion = ({ suggestion }) => (
//     <div>
//       <i className="fa fa-map-marker" />
//       {suggestion}
//     </div>
//   );

//   const handleChange = (e) => {
//     console.log(e);
//     setInput(e.target.value);
//   };

//   const inputProps = {
//     value: input,
//     onChange: handleChange, // `onChange` is required
//     onBlur: () => {
//       console.log("blur!");
//     },
//     type: "search",
//     placeholder: "Search Places...",
//     autoFocus: true,
//   };

//   return (
//     <div>
//       <input type="text" onChange={(e) => setInput(e.target.value)} />
//       {/* <SpottrPlaces /> */}
//       <PlacesAutocomplete
//         inputProps={inputProps}
//         renderSuggestion={renderSuggestion}
//       />
//     </div>
//   );
// }

// export default ScanBarCodePage;

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
// import useOnclickOutside from "react-cool-onclickoutside";
import ReactPlacesAutocomplete from "../../../../components/dashboard/main/GoogleMap/reactPlacesAutocomplete";

const ScanBarCodePage = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  // const ref = useOnclickOutside(() => {
  //   // When user clicks outside of the component, we can dismiss
  //   // the searched suggestions by calling this method
  //   clearSuggestions();
  // });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return <ReactPlacesAutocomplete />;
};

export default ScanBarCodePage;
