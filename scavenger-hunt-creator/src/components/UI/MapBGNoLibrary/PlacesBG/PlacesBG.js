import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const PlacesBG = props => {
  let infowindowActive = null;
  const onLoad = () => {
    props.places.forEach(place => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        },
        map: props.map,
        title: place.name
      });

      // add listener and infoWindow
      window.google.maps.event.addListener(marker, 'click', function() {
        // close all existing windows
        if (infowindowActive) {
          infowindowActive.close();
        }

        const infowindow = new window.google.maps.InfoWindow({
          maxWidth: 300
        });
        const basicInfo = {
          name: place.name,
          image: place.photos ? place.photos[0].getUrl() : null
        };
        infowindow.setContent(
          `<div>
              <div>${basicInfo.name}</div>` +
            (basicInfo.image !== null ? `<img src="${basicInfo.image}">` : '') +
            `</div>`
        );
        infowindow.open(props.map, marker);
        infowindowActive = infowindow;
        infowindow.addListener(
          'domready',
          function() {
            const imagesNode = document.querySelectorAll('.gm-style-iw img');
            const imagesArr = [...imagesNode];
            imagesArr.forEach(img => {
              img.style.width = '100%';
            });

            const buttonsNode = document.querySelectorAll(
              '.gm-style-iw button[title=Close]'
            );
            const buttonsArr = [...buttonsNode];
            buttonsArr.forEach(btn => {
              btn.style.display = 'none';
            });

            const imgContainersNode = document.querySelectorAll(
              '.gm-style-iw-d'
            );
            const imgContainersArr = [...imgContainersNode];
            imgContainersArr.forEach(cnt => {
              cnt.style.overflow = 'unset';
              cnt.style.overflowY = 'hidden';
            });

            const iwContainersNode = document.querySelectorAll(
              '.gm-style-iw-c'
            );
            const iwContainersArr = [...iwContainersNode];
            iwContainersArr.forEach(iwCnt => {
              iwCnt.style.padding = '12px';
              iwCnt.style.height = 'auto';
              iwCnt.style.boxSizing = 'content-box';
            });
          },
          this
        );
      });
    });
  };

  useEffect(() => {
    onLoad();
  });

  return <p>Some places.</p>;
};

const mapStateToProps = state => {
  return {
    map: state.mapReduce.map,
    places: state.mapReduce.mapPlaces
  };
};

export default connect(mapStateToProps)(PlacesBG);
