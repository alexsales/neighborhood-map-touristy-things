import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import heartInactive from '../../../../assets/heart-inactive-v3.svg';
import heartActive from '../../../../assets/heart-active-v2.svg';
import classes from './PlacesBG.module.css';

const PlacesBG = props => {
  let infowindowActive = null;
  const onLoad = () => {
    props.places.forEach((place, index) => {
      const mapIcon = {
        url:
          'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
        size: new window.google.maps.Size(23, 36.8),
        scaledSize: new window.google.maps.Size(23, 36.8)
      };

      const marker = new window.google.maps.Marker({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        },
        icon: mapIcon,
        map: props.map,
        title: place.name
      });

      // add listener and infoWindow
      window.google.maps.event.addListener(marker, 'click', function() {
        // close all existing windows
        if (infowindowActive) {
          infowindowActive.close();
        }

        if (props.infowin) {
          props.infowin.close();
        }

        const whichHeartImg = place.isFav ? heartActive : heartInactive;

        const infowindow = props.infowin;
        const basicInfo = {
          name: place.name,
          image: place.photos ? place.photos[0].getUrl() : null
        };

        infowindow.setContent(
          `<div class=${classes.PlacesBG}>
            <div>
              <div class=${classes.iwPlaceName}>${basicInfo.name}</div>
              <div class="${classes.iwHeart}">
                <img src="${whichHeartImg}" class="heart-img">
              </div>
            </div>` +
            (basicInfo.image !== null
              ? `<div class="iw-place-img"><img src="${basicInfo.image}"></div>`
              : '') +
            `</div>`
        );
        infowindow.open(props.map, marker);
        infowindowActive = infowindow;
        const iwListener = infowindow.addListener(
          'domready',
          function() {
            window.google.maps.event.removeListener(iwListener);
            const imagesNode = document.querySelectorAll('.gm-style-iw img');
            const imagesArr = [...imagesNode];

            imagesArr.forEach(img => {
              img.style.width = '100%';
            });

            document
              .getElementsByClassName('heart-img')[0]
              .addEventListener('click', e => {
                props.heartClick(e, place, index);
                e.target.src = place.isFav ? heartActive : heartInactive;
              });

            const buttonsNode = document.querySelectorAll(
              '.gm-style-iw button[title=Close]'
            );
            const buttonsArr = [...buttonsNode];
            buttonsArr.forEach(btn => {
              // btn.style.display = 'none';
              btn.style.right = '1px';
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
    places: state.mapReduce.mapPlaces,
    infowin: state.mapReduce.infoWindow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateInfoWindow: iw => {
      dispatch({
        type: 'UPDATEINFOWINDOW',
        payload: iw
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesBG);
