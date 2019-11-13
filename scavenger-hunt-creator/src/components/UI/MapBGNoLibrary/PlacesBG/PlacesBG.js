import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const PlacesBG = props => {
  const onLoad = () => {
    const placeLocation = new window.google.maps.LatLng(props.center);
    const request = {
      location: placeLocation,
      radius: '500',
      type: 'museum'
    };

    const createMarker = (place, index) => {
      new window.google.maps.Marker({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        },
        map: props.map,
        title: place.name
      });
    };

    const callback = (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
      }
    };

    const service = new window.google.maps.places.PlacesService(props.map);
    service.nearbySearch(request, callback);
  };

  useEffect(() => {
    if (!window.google) {
    } else {
      onLoad();
    }
  });

  return <p>Some places.</p>;
};

const mapStateToProps = state => {
  return {
    map: state.mapReduce.map,
    mapLoaded: state.mapReduce.mapLoaded,
    center: state.mapReduce.mapCenter,
    places: state.mapReduce.mapPlaces
  };
};

export default connect(mapStateToProps)(PlacesBG);
