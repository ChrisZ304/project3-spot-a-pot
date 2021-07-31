import React, { Component } from 'react'; 
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapComponent extends Component {
  render() {

    return (<div className="map-area">

        <Map google={this.props.google}

            zoom={5}

            center={{

              lat: 37.5919459,

              lng: -77.5090561

            }}>


            <Marker key="marker_1"

            position={{

                lat: 37.5919459,

                lng: -77.5090561

            }}

        />

    </Map>

</div>);

}

}
  

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCYXrxhue2vZfkXo6rIlk_uapWKN3wbQ9o')
  })(MapComponent)
  




















