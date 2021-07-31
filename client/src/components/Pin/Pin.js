import React from 'react';
import {Marker} from 'react-google-maps';


const CustomMarker = (props) => {
    const {id} = props;

    const onMarkerClick = (evt) => {
        console.log(id);
    };

    return (
        <Marker
            onClick={onMarkerClick}
            {...props}
        />
    );
};

export default CustomMarker;