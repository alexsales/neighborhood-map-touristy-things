import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Backdrop.module.css';
import closeBtn from '../../../assets/close-24px.svg';

const Backdrop = props => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.closeModal}>
      <NavLink to='/' className={classes.closeBtn}>
        <img src={closeBtn} alt='close modal button' />
      </NavLink>
    </div>
  ) : null;
};

export default Backdrop;
