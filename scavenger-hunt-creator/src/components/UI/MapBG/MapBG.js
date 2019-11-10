import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';

const MapBG = props => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const mapWrapperStyles = {
    height: 'calc(100% - 60px)',
    zIndex: '-100'
  };

  const displayMarkers = () => {
    return props.initPlaces.map((placeObj, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: placeObj.lat,
            lng: placeObj.lng
          }}
          onClick={() => console.log('marker clicked')}
        />
      );
    });
  };

  return (
    <Map
      google={props.google}
      zoom={13}
      style={mapStyles}
      containerStyle={mapWrapperStyles}
      initialCenter={props.initCenter}
      center={props.center}>
      {displayMarkers()}
    </Map>
  );
};

const mapStateToProps = state => {
  return {
    initPlaces: state.mapReduce.initialPlaces,
    initCenter: state.mapReduce.initialCenter,
    center: state.mapReduce.mapCenter
  };
};

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA'
  })(MapBG)
);
