import React, { Fragment, useEffect, useRef } from 'react';
import Places from './PlacesBG/PlacesBG';
import { connect } from 'react-redux';
import { instanceFirebase } from '../../../axios';

const MapBGNoLibrary = props => {
  const otherProps = { ref: useRef(), className: props.className };
  const onHeartFavToggle = (e, place, index) => {
    e.preventDefault();
    e.stopPropagation();

    place.isFav = !place.isFav;

    if (place.isFav === true) {
      // add to Faves in database using id, then update store's mapPlaces
      instanceFirebase
        .patch(
          '/users/' +
            localStorage.getItem('userId') +
            `/faves-list/${place.place_id}.json`,
          {
            name: place.name,
            address: place.vicinity,
            placeId: place.place_id
          }
        )
        .then(resp => {
          props.onAddToFaves(resp.data);
        });
    }

    if (place.isFav === false) {
      // delete from Faves in database using id, then update store's mapPlaces
      const idToDelete = place.place_id;
      instanceFirebase
        .delete(
          '/users/' +
            localStorage.getItem('userId') +
            `/faves-list/${place.place_id}.json`
        )
        .then(resp => {
          props.onDeleteFromFaves(idToDelete);
        });
    }

    props.onUpdatePlaceItem(index, place.isFav);
  };
  const onLoad = () => {
    const map = new window.google.maps.Map(otherProps.ref.current, {
      center: props.center,
      zoom: 17
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
      script.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_API_KEY}&libraries=places`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return (
    <Fragment>
      <div {...otherProps} style={{ height: `calc(100vh - 60px)` }} />
      <Places heartClick={onHeartFavToggle} />
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
    },
    onAddToFaves: userData => {
      dispatch({
        type: 'ADDTOFAVES',
        payload: userData
      });
    },
    onDeleteFromFaves: idToDelete => {
      dispatch({
        type: 'DELETEFROMFAVES',
        payload: idToDelete
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapBGNoLibrary);
