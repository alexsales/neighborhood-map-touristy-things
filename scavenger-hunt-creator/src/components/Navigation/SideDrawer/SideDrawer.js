import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {
  console.log(props.markers);
  return (
    <Fragment>
      <div className={classes.SideDrawer}>test</div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    markers: state.mapReduce.mapMarkers
  };
};

export default connect(mapStateToProps)(SideDrawer);
