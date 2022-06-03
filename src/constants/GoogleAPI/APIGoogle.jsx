import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./style.css";

const containerStyle = {
  width: "85%",
  height: "300px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCaUrSc8jezo9Ux1xiPNosjwa4CIIq0bO4",
  });

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker
            position={center}
            options={{
              label: {
                text: "Localização inicial",
                className: "map-marker",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MyComponent;
