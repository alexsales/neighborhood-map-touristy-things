import React from 'react';
import { connect } from 'react-redux';
import classes from './Search.module.css';

const Search = props => {
  return (
    <div className={classes.Search}>
      <input
        type='text'
        onChange={props.onSetCenter}
        onKeyPress={props.onCheckEntered}
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
    center: state.mapReduce.mapCenter,
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
    onCheckEntered: event => {
      if (event.key === 'Enter' || event.key === 'ENTER') {
        dispatch({
          type: 'UPDATEMAP'
        });
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
