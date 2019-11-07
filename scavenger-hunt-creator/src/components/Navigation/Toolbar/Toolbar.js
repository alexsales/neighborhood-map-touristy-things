import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <ul className={classes.Toolbar}>
      <li>
        <NavLink to='/auth'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
    </ul>
  );
};

export default Toolbar;
