import React from 'react';
import { connect } from 'react-redux';
import { instanceGeocode } from '../../axios';
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
    onCheckEntered: event => {
      if (event.key === 'Enter' || event.key === 'ENTER') {
        // use axios to get lat/lng of searchText, then pass as payload
        const queryParams =
          '/json?address=90004&key=AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA';
        instanceGeocode
          .get(queryParams)
          .then(response => {
            console.log('response: ', response);
            dispatch({
              type: 'UPDATEMAP'
            });
          })
          .catch(error => {
            console.log('error: ', error);
            dispatch({
              type: 'UPDATEMAPFAILED'
            });
          });
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
