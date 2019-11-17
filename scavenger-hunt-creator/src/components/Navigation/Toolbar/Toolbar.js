import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <Fragment>
      {/* <Backdrop /> */}
      <ul className={classes.Toolbar}>
        <li>
          <NavLink to='/auth'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Toolbar;
