import React from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import classes from './Faves.module.css';

const Faves = props => {
  const userFavesArr = props.faves.map((fave, index) => {
    return (
      <li key={index}>
        <div>{props.faves[index].name}</div>
        <div>{props.faves[index].address}</div>
      </li>
    );
  });

  return (
    <div className={classes.Faves}>
      <div className={classes.favesList}>
        <h2>Faves</h2>
        <ul>{userFavesArr}</ul>
        {props.userToken === null ? (
          <>
            <button
              onClick={() => {
                props.history.push('/auth');
              }}>
              LOGIN
            </button>{' '}
            <span>to load/save your favorites</span>
          </>
        ) : null}
      </div>
      <Backdrop show={true} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.mapReduce.userFirebaseData,
    faves: state.mapReduce.userFaves,
    userToken: state.mapReduce.userToken
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Faves);
