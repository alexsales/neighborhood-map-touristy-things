import React from 'react';
import classes from './Modal.module.css';

const Modal = props => {
  const content = props.children;

  return (
    <>
      <div className={classes.Modal}>{content}</div>
    </>
  );
};

export default Modal;
