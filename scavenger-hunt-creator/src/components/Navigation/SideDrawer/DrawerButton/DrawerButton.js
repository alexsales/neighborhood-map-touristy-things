import React from 'react';
import classes from './DrawerButton.module.css';
import { connect } from 'react-redux';
import heartInactive from '../../../../assets/heart-inactive-v2.svg';
import heartActive from '../../../../assets/heart-active-v2.svg';

const DrawerButton = props => {
  const namesArr = props.places
    .map(place => {
      return place.name;
    })
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const linksList = props.places.map((place, index) => {
    if (namesArr.indexOf(place.name) >= 0) {
      const nameArrIndex = namesArr.indexOf(place.name);
      const whichHeartImg = place.isFav ? (
        <img
          src={heartActive}
          alt={`is a favorite: ${place.isFav}`}
          onClick={e => props.heartClick(e, place, index)}
        />
      ) : (
        <img
          src={heartInactive}
          alt={`is a favorite: ${place.isFav}`}
          onClick={e => props.heartClick(e, place, index)}
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
