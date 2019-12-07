import React from 'react';
import classes from './DrawerButton.module.css';
import { connect } from 'react-redux';
import heartInactive from '../../../../assets/heart-inactive-v2.svg';
import heartInactiveV3 from '../../../../assets/heart-inactive-v3.svg';
import heartActive from '../../../../assets/heart-active-v2.svg';

const DrawerButton = props => {
  const namesArr = props.places
    .filter((place, index, arr) => {
      return place !== null;
    })
    .map(place => {
      return place.name;
    })
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const linksList = props.places.map((place, index) => {
    if (place !== null && namesArr.indexOf(place.name) >= 0) {
      const nameArrIndex = namesArr.indexOf(place.name);
      const whichHeartImg = place.isFav ? (
        <img
          src={heartActive}
          alt={`is a favorite: ${place.isFav}`}
          onClick={e => {
            props.heartClick(e, place, index);
            if (!!document.getElementsByClassName('heart-img2')[0] === true) {
              document.getElementsByClassName('heart-img2')[0].src = place.isFav
                ? heartActive
                : heartInactiveV3;
            }
            if (!!document.getElementsByClassName('heart-img')[0] === true) {
              document.getElementsByClassName('heart-img')[0].src = place.isFav
                ? heartActive
                : heartInactiveV3;
            }
          }}
        />
      ) : (
        <img
          src={heartInactive}
          alt={`is a favorite: ${place.isFav}`}
          onClick={e => {
            props.heartClick(e, place, index);
            if (!!document.getElementsByClassName('heart-img2')[0] === true) {
              document.getElementsByClassName('heart-img2')[0].src = place.isFav
                ? heartActive
                : heartInactiveV3;
            }
            if (!!document.getElementsByClassName('heart-img')[0] === true) {
              document.getElementsByClassName('heart-img')[0].src = place.isFav
                ? heartActive
                : heartInactiveV3;
            }
          }}
        />
      );

      // place.isFav = Math.random() < 0.5 ? true : false;
      namesArr.splice(nameArrIndex, 1);

      return (
        <li key={index} onClick={e => props.click(e, place, index)}>
          {place.name}
          {whichHeartImg}
        </li>
      );
    }
    return false;
  });

  return <ul className={classes.DrawerButton}>{linksList}</ul>;
};

const mapStateToProps = state => {
  return {
    places: state.mapReduce.mapPlaces
  };
};

export default connect(mapStateToProps)(DrawerButton);
