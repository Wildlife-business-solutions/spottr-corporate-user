import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { SpottRPlaces } from "./style";

function SpottrPlaces({ corporateUser, setCorporateUser }) {
  const [gmapsLoaded, setGmapsLoaded] = React.useState(false);
  const handleChange = (address) => {
    // setCorporateUser({
    //   ...corporateUser,
    //   address,
    // });
    console.log(address, "Address");
  };

  const handleSelect = (myAddress) => {
    console.log(myAddress, "address");
    // geocodeByAddress(myAddress)
    //   .then((results) => {
    //     setCorporateUser((prev) => {
    //       return {
    //         ...prev,
    //         address: results[0].formatted_address,
    //       };
    //     });
    //     return getLatLng(results[0]);
    //   })
    //   .then((latLng) => {
    //     setCorporateUser((prev) => {
    //       return {
    //         ...prev,
    //         data: {
    //           ...prev.data,
    //           lat: latLng.lat,
    //           lng: latLng.lng,
    //         },
    //       };
    //     });
    //   })
    //   .catch((error) => console.error("Error", error));
  };
  return (
    <PlacesAutocomplete
      value={"India"}
      onChange={handleChange}
      onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <SpottRPlaces
            {...getInputProps({
              placeholder: "Enter Location",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? {
                    backgroundColor: "#274B89",
                    cursor: "pointer",
                    color: "white",
                    backgroundRadius: "3px",
                  }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}>
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

// }

export default SpottrPlaces;
