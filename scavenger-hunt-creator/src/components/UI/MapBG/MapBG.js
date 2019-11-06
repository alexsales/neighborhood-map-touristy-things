import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapBG = props => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <Map
      google={props.google}
      zoom={13}
      style={mapStyles}
      initialCenter={{ lat: 34.1020231, lng: -118.3409712 }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA'
})(MapBG);
