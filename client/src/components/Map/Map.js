import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export const MapComponent = (props) => {
  const [restrooms, setRestrooms] = useState(null);

  useEffect(() => {
    fetch("https://www.refugerestrooms.org/api/v1/restrooms")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRestrooms(data);
      });
  }, []);

  console.log(restrooms);

  return (
    <div className="map-area">
      <Map
        google={props.google}
        zoom={5}
        center={{
          lat: 37.5919459,

          lng: -77.5090561,
        }}
      >
        {restrooms &&
          restrooms.map(({ latitude, longitude, id }) => (
            <Marker
              key={id}
              position={{
                lat: latitude,

                lng: longitude,
              }}
            />
          ))}
      </Map>



      
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCYXrxhue2vZfkXo6rIlk_uapWKN3wbQ9o",
})(MapComponent);
