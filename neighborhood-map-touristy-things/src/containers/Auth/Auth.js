import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  firebase,
  instanceFirebase,
  instanceGToolkitSignIn
} from '../../axios';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Auth.module.css';

const Auth = props => {
  if (props.location.buttonName === 'logout') {
    props.onShowAuth(false);
    props.onShowLogin(true);
    props.onShowLogout(false);

    localStorage.removeItem('token');
    localStorage.removeItem('expiresInDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    props.onClearUserToken();
    props.history.push('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickCloseModal = () => {
    props.onShowAuth(false);
    if (!!localStorage.getItem('token') === true) {
      props.onShowLogin(false);
      props.onShowLogout(true);
    } else {
      props.onShowLogin(true);
      props.onShowLogout(false);
    }
  };

  const submitHandler = (e, loginLogoutStr) => {
    e.preventDefault();

    if (loginLogoutStr === 'login') {
      instanceGToolkitSignIn
        .post('', { email: email, password: password, returnSecureToken: true })
        .then(resp => {
          const tokenExpiresInDate = new Date(
            new Date().getTime() + resp.data.expiresIn * 1000
          );
          // save token into localStorage
          localStorage.setItem('token', resp.data.idToken);
          localStorage.setItem('expiresInDate', tokenExpiresInDate);
          localStorage.setItem('userId', resp.data.localId);
          localStorage.setItem('email', resp.data.email);
          props.onFirebaseAuthenticate(resp.data.idToken, resp.data.localId);
          props.onShowLogin(false);
          props.onShowLogout(true);
          props.history.push('/');
          // return resp;
        })
        .then(() => {
          return instanceFirebase.get(
            '/users/' + localStorage.getItem('userId') + '.json'
          );
        })
        .then(resp => {
          // add to Faves in database using id, then update store's mapPlaces
          props.onLoadUserData(resp.data);
          let tmpFavesArr = null;
          let tmpJSONFaves = {};

          if (resp.data['faves-list']) {
            tmpFavesArr = Object.keys(resp.data['faves-list'])
              .map((key, index) => {
                return resp.data['faves-list'][key];
              })
              .concat([...props.faves]);

            tmpFavesArr.filter(
              (fave, index) => tmpFavesArr.indexOf(fave) === index
            );
          } else {
            tmpFavesArr = [...props.faves];
          }

          tmpFavesArr.forEach((fave, index, arr) => {
            const placeId = fave['placeId'];
            tmpJSONFaves[placeId] = fave;
          });

          return instanceFirebase.patch(
            '/users/' + localStorage.getItem('userId') + '.json',
            {
              'faves-list': tmpJSONFaves
            }
          );
        })
        .then(resp => {
          props.onLoadUserFaves(resp.data);
        })
        .catch(err => {
          // TODO: handle error
          console.log(err);
        });
    }

    if (loginLogoutStr === 'logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresInDate');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      props.onClearUserToken();
      props.onShowLogin(true);
      props.onShowLogout(false);
      props.history.push('/');
    }
  };

  let formContents = (
    <>
      <h2>Login</h2>
      <p className={classes.testLoginInfo}>
        <span>test login:</span>
        <span>asales2005@gmail.com</span>
        <span>abc123</span>
      </p>
      <div>
        <label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            value={email}
            required
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={password}
            required
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </div>
      <button type='submit' onClick={e => submitHandler(e, 'login')}>
        Submit
      </button>
    </>
  );

  if (!!localStorage.getItem('token') === true) {
    props.onShowLogout(true);
    formContents = (
      <>
        <div>
          <h2>
            Already logged in with {localStorage.getItem('email')}. Need to
            login as a different user? Logout out first:
          </h2>
        </div>
        <button type='submit' onClick={e => submitHandler(e, 'logout')}>
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <form className={classes.Auth}>{formContents}</form>
      <Backdrop show={true} closeModal={clickCloseModal} />{' '}
    </>
  );
};

const mapStateToProps = state => {
  return {
    faves: state.mapReduce.userFaves
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
    onShowLogout: bool => {
      dispatch({
        type: 'SHOWLOGOUT',
        payload: bool
      });
    },
    onFirebaseAuthenticate: (token, userId) => {
      dispatch({
        type: 'FIREBASEAUTHENTICATE',
        payload: { token, userId }
      });
    },
    onClearUserToken: () => {
      firebase.auth().signOut();
      dispatch({
        type: 'CLEARUSERTOKEN'
      });
    },
    onLoadUserData: userData => {
      dispatch({
        type: 'LOADUSERDATA',
        payload: userData
      });
    },
    onLoadUserFaves: userFavs => {
      dispatch({
        type: 'LOADUSERFAVES',
        payload: userFavs
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
