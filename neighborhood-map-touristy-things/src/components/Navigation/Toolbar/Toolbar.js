import React, { Fragment, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import fav from '../../../assets/heart-active-v2.svg';

const Toolbar = props => {
  let showLoginLink = null;
  const [, setState] = useState();

  const forceUpdate = () => {
    setState({});
  };

  const onShowLoginLink = () => {
    return !window.location.hash.includes('auth') ? (
      <li onClick={forceUpdate}>
        {props.showLogin ? (
          <NavLink
            to={{
              pathname: '/auth',
              showLogin: props.showLogin,
              showAuth: props.showAuth,
              buttonName: 'login'
            }}>
            Login
          </NavLink>
        ) : (
          <NavLink
            to={{
              pathname: '/auth',
              showLogin: props.showLogin,
              showAuth: props.showAuth,
              buttonName: 'logout'
            }}>
            Logout
          </NavLink>
        )}
      </li>
    ) : (
      ''
    );
  };

  showLoginLink = onShowLoginLink();

  return (
    <Fragment>
      <ul className={classes.Toolbar}>
        <li className={classes.faves}>
          <NavLink to='/faves'>
            <img src={fav} alt='favorites link' />
          </NavLink>
        </li>
        {showLoginLink}
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    showLogin: state.mapReduce.showLogin,
    showLogout: state.mapReduce.showLogout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleShowLogin: () => {},
    onShowAuth: bool => {
      dispatch({
        type: 'SHOWAUTH',
        payload: bool
      });
    },
    onShowLogin: bool => {
      dispatch({
        type: 'SHOWLOGIN',
        payload: bool
      });
    },
    onClostAuth: () => {
      dispatch({
        type: 'CLOSEAUTH'
      });
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Toolbar)
);
