import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";


export const MapComponent = (props) => {
  const [restrooms, setRestrooms] = useState(null);

const {latitude, longitude} = props


  useEffect(() => {

    if (latitude && longitude) {
      fetch(
        `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${latitude}&lng=${longitude}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRestrooms(data);
        });
    }
  }, [latitude, longitude]);


  return (
    <div className="map-area">
      <Map
        google={props.google}
        zoom={13}
        center={{
          lat: latitude,

          lng: longitude,
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
