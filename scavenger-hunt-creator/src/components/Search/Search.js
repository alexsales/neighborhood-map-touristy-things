import React from 'react';
import { connect } from 'react-redux';
import { instanceGeocode } from '../../axios';
import classes from './Search.module.css';

const Search = props => {
  return (
    <div className={classes.Search}>
      {/* <Backdrop /> */}
      <input
        type='text'
        onChange={props.onSetCenter}
        onKeyPress={event => props.onCheckEntered(event, props.center)}
        onClick={() => {
          if (!props.searchClicked) {
            props.onSearchClicked();
          }
        }}
        value={props.center}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    center: state.mapReduce.searchText,
    searchClicked: state.mapReduce.searchboxClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCenter: event => {
      dispatch({
        type: 'SETCENTER',
        payload: event
      });
    },
    onSearchClicked: event => {
      dispatch({
        type: 'SEARCHCLICKED'
      });
    },
    onCheckEntered: (evt, cntr) => {
      if (evt.key === 'Enter' || evt.key === 'ENTER') {
        // use axios to get lat/lng of searchText, then pass as payload
        const queryParams =
          '/geocode/json?address=' +
          cntr +
          '&key=AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA';

        instanceGeocode
          .get(queryParams)
          .then(response => {
            dispatch({
              type: 'UPDATEMAP',
              payload: response
            });
          })
          .catch(error => {
            dispatch({
              type: 'UPDATEMAPFAILED'
            });
          });
      }
    }
    // onMapLoaded: (map, mapRef) => {
    //   dispatch({
    //     type: 'MAPLOADED',
    //     payload: { map, mapRef }
    //   });

    //   const businessTypes = ['art_gallery', 'book_store', 'cafe', 'museum'];
    //   const placeLocation = new window.google.maps.LatLng({
    //     lat: 34.1020231,
    //     lng: -118.3409712
    //   });

    //   businessTypes.forEach(type => {
    //     let request = {
    //       location: placeLocation,
    //       radius: '500',
    //       type: ''
    //     };

    //     request.type = type;

    //     (function(_type) {
    //       new window.google.maps.places.PlacesService(map).nearbySearch(
    //         request,
    //         results => {
    //           dispatch({
    //             type: 'PLACESLOADED',
    //             payload: results
    //           });
    //         }
    //       );
    //     })(request.type);
    //   });
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
