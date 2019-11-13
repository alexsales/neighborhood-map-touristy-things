import React, { useEffect, useRef, Fragment } from 'react';
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
    props.onMapLoaded(map, otherProps.ref, true);
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
      {props.mapLoaded && <Places />}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    places: state.mapReduce.mapPlaces,
    center: state.mapReduce.mapCenter,
    mapLoaded: state.mapReduce.mapLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMapLoaded: (map, mapRef, mapLoaded) => {
      dispatch({
        type: 'MAPLOADED',
        payload: { map, mapRef, mapLoaded }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapBGNoLibrary);
