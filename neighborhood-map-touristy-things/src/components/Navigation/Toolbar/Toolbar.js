import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';

const Toolbar = props => {
  const onOpenLogin = () => {
    props.onShowAuth(true);
    props.onShowLogin(false);
  };

  // const onCloseLogin = () => {
  //   onCloseAuth();
  // };

  const showLoginLink =
    props.showLogin && !props.showAuth ? (
      <li onClick={onOpenLogin}>
        {/* <NavLink to='/auth' clickClose={onCloseLogin}> */}
        <NavLink to='/auth'>Login</NavLink>
      </li>
    ) : (
      ''
    );

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

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
