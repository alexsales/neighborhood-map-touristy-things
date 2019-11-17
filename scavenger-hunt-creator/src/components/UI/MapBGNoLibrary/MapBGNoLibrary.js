import React, { Fragment, useEffect, useRef } from 'react';
import Places from './PlacesBG/PlacesBG';
import { connect } from 'react-redux';

const MapBGNoLibrary = props => {
  const otherProps = { ref: useRef(), className: props.className };
  const onLoad = () => {
    const map = new window.google.maps.Map(otherProps.ref.current, {
      center: props.center,
      zoom: 17
    });

    props.onMount && props.onMount(map);
    props.onMapLoaded(map, otherProps.ref, props.center);
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = `https://maps.google.com/maps/api/js?key=AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA&libraries=places`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return (
    <Fragment>
      <div {...otherProps} style={{ height: `calc(100vh - 60px)` }} />
      {<Places />}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    center: state.mapReduce.mapCenter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMapLoaded: (map, mapRef, mapCenter) => {
      dispatch({
        type: 'MAPLOADED',
        payload: { map, mapRef }
      });

      const businessTypes = [
        'amusement_park',
        'art_gallery',
        'bar',
        'book_store',
        'cafe',
        'museum',
        'tourist_attraction'
      ];
      const placeLocation = new window.google.maps.LatLng(mapCenter);

      businessTypes.forEach(type => {
        let request = {
          location: placeLocation,
          radius: '500',
          type: ''
        };

        request.type = type;

        (function(_type) {
          new window.google.maps.places.PlacesService(map).nearbySearch(
            request,
            results => {
              dispatch({
                type: 'PLACESLOADED',
                payload: results
              });
            }
          );
        })(request.type);
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapBGNoLibrary);
