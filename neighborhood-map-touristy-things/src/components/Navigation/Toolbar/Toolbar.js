import React, { Fragment, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';

const Toolbar = props => {
  // const onOpenLogin = () => {
  //   props.onShowAuth(true);
  //   props.onShowLogin(false);
  // };

  // const onCloseLogin = () => {
  //   onCloseAuth();
  // };
  let showLoginLink = null;
  // useEffect(() => {
  // showLoginLink = onShowLoginLink();
  //   console.log(showLoginLink);
  // });

  const onShowLoginLink = () => {
    // !window.location.hash.includes('auth') &&
    // props.showLogin &&
    // !props.showAuth ? (
    return !window.location.hash.includes('auth') ? (
      // <li onClick={onOpenLogin}>
      <li>
        {/* <NavLink to='/auth' clickClose={onCloseLogin}> */}
        {/* <NavLink to='/auth'>Login</NavLink> */}
        <NavLink
          to={{
            pathname: '/auth',
            showLogin: props.showLogin,
            showAuth: props.showAuth
          }}>
          Login
        </NavLink>
      </li>
    ) : (
      ''
    );
  };

  showLoginLink = onShowLoginLink();

  return (
    <Fragment>
      {/* <Backdrop /> */}
      <ul className={classes.Toolbar}>
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
    showLogin: state.mapReduce.showLogin
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
