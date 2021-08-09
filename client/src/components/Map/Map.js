import React, { useState, useEffect } from "react";
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow,
  Icon,
} from "google-maps-react";
//import StarRatings from "./react-star-ratings";
import RestroomInfo from "./RestroomInfo";

import MyComponent from "../Rating/Rating";

//import RestroomRatingButton from '../Map/RestroomRatingButton';
//import RestroomRatingButton from "./RestroomRatingButton";

export const MapComponent = (props) => {
  const [restrooms, setRestrooms] = useState(null);
  const [selectedRestroom, setSelectedRestroom] = useState(null);
  const { latitude, longitude } = props;

  //const {  getCurrentPosition } = props;

  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=${latitude}&lng=${longitude}`
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
        {
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
            }}
            title={"My location"}
            icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          />
        }
        {restrooms &&
          restrooms.map((restroom) => (
            <Marker
              key={restroom.id}
              position={{
                lat: restroom.latitude,
                lng: restroom.longitude,
              }}
              onClick={() => setSelectedRestroom(restroom)}
              clickable
            ></Marker>
          ))}
        {selectedRestroom && (
          <InfoWindow
          
            onCloseClick={() => {
              setSelectedRestroom(null);
            }}
            position={{
              lat: selectedRestroom.latitude,
              lng: selectedRestroom.longitude,
            }}
            visible={selectedRestroom !== null}
          >
            <RestroomInfo restroom={selectedRestroom} />
           
            <MyComponent />
           
          </InfoWindow>
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCYXrxhue2vZfkXo6rIlk_uapWKN3wbQ9o",
})(MapComponent);
