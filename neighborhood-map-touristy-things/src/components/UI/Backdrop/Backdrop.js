import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = props => {
  // const { show = false, ...otherProps } = props;
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.click}></div>
  ) : null;
};

export default Backdrop;
