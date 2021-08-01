import React from 'react';
import {Pin} from 'react-google-maps';


const CustomPin = (props) => {
    const {id} = props;

    const onPinClick = (evt) => {
        console.log(id);
    };

    return (
        <Pin
            onClick={onPinClick}
            {...props}
        />
    );
};

export default CustomPin;