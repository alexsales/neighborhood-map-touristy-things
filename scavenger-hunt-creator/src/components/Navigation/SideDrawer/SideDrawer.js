import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {
  let infowindowActive = null;
  const onNameClickHandler = (e, place, index) => {
    console.log(e.target, index);
    const map = props.map;
    const marker = new window.google.maps.Marker({
      position: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },
      // icon: mapIcon,
      // icon: {
      //   size: new window.google.maps.Size(20, 20)
      // },
      map: props.map,
      title: place.name
    });

    if (infowindowActive) {
      infowindowActive.close();
    }

    if (props.infowin) {
      props.infowin.close();
    }

    const infowindow = props.infowin;
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

    infowindow.open(map, marker);
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
          // btn.style.display = 'none';
          btn.style.right = '1px';
        });

        const imgContainersNode = document.querySelectorAll('.gm-style-iw-d');
        const imgContainersArr = [...imgContainersNode];
        imgContainersArr.forEach(cnt => {
          cnt.style.overflow = 'unset';
          cnt.style.overflowY = 'hidden';
        });

        const iwContainersNode = document.querySelectorAll('.gm-style-iw-c');
        const iwContainersArr = [...iwContainersNode];
        iwContainersArr.forEach(iwCnt => {
          iwCnt.style.padding = '12px';
          iwCnt.style.height = 'auto';
          iwCnt.style.boxSizing = 'content-box';
        });
      },
      this
    );
  };

  const namesArr = props.places
    .map(place => {
      return place.name;
    })
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const linksList = props.places.map((place, index) => {
    if (namesArr.indexOf(place.name) >= 0) {
      const nameArrIndex = namesArr.indexOf(place.name);
      namesArr.splice(nameArrIndex, 1);
      return (
        <li key={index} onClick={e => onNameClickHandler(e, place, index)}>
          {place.name}
        </li>
      );
    }
    return false;
  });

  return (
    <Fragment>
      <div className={classes.SideDrawer}>
        <ul>{linksList}</ul>
      </div>
      {/* <Modal /> */}
    </Fragment>
  );
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
)(SideDrawer);