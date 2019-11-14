import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const PlacesBG = props => {
  const onLoad = () => {
    const placeLocation = new window.google.maps.LatLng(props.center);
    const service = new window.google.maps.places.PlacesService(props.map);

    const businessTypes = ['art_gallery', 'book_store', 'cafe', 'museum'];

    let request = {
      location: placeLocation,
      radius: '500',
      type: ''
    };
    let infoWindowActive = null;

    const createMarker = (place, index) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        },
        map: props.map,
        title: place.name
      });

      window.google.maps.event.addListener(
        marker,
        'click',
        (function(_marker, _index) {
          return () => {
            const infowindow = new window.google.maps.InfoWindow({
              maxWidth: 300
            });
            const basicInfo = {
              name: place.name,
              image: place.photos[0].getUrl()
            };

            infowindow.setContent(
              `
              <div>
                <div>${basicInfo.name}</div>
                <img src="${basicInfo.image}">
              </div>
              `
            );

            if (infoWindowActive) {
              infoWindowActive.close();
              infoWindowActive = null;
            }

            infowindow.open(props.map, _marker);
            infoWindowActive = infowindow;
            infowindow.addListener('domready', function() {
              console.log(
                document.getElementsByClassName('gm-style-iw gm-style-iw-c')[0]
              );
            });
          };
        })(marker, index)
      );
    };

    const callback = (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
      }
    };

    businessTypes.forEach(_type => {
      request.type = '_type';
      service.nearbySearch(request, callback);
    });
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
