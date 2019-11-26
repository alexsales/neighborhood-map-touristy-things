import React, { Fragment, useEffect, useRef } from 'react';
import Places from './PlacesBG/PlacesBG';
import { connect } from 'react-redux';

// const useForceUpdate = () => {
//   const [val, setVal] = useState(0);
//   return () => setVal(val => ++val);
// };

const MapBGNoLibrary = props => {
  const otherProps = { ref: useRef(), className: props.className };
  // const forceUpdate = useForceUpdate();

  const onHeartFavToggle = (e, place, index) => {
    console.log(e, place, index);
    e.preventDefault();
    e.stopPropagation();

    place.isFav = !place.isFav;
    console.log(place.isFav);
    props.onUpdatePlaceItem(index, place.isFav);
    // forceUpdate();
  };
  const onLoad = () => {
    const map = new window.google.maps.Map(otherProps.ref.current, {
      center: props.center,
      zoom: 17
      // zoomControl: false
    });
    const infowindow = new window.google.maps.InfoWindow({
      maxWidth: 300
    });

    props.onMount && props.onMount(map);
    props.onMapLoaded(map, otherProps.ref, props.center);
    props.onUpdateInfoWindow(infowindow);
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
      {<Places heartClick={onHeartFavToggle} />}
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
    },
    onUpdateInfoWindow: iw => {
      dispatch({
        type: 'UPDATEINFOWINDOW',
        payload: iw
      });
    },
    onUpdatePlaceItem: (index, isFav) => {
      dispatch({
        type: 'UPDATEPLACEITEM',
        payload: [index, isFav]
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapBGNoLibrary);
