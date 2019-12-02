import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/UI/Modal/Modal';
import { Redirect } from 'react-router-dom';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Auth.module.css';

const Auth = props => {
  const closeModal = () => {
    console.log(props);
    // return <Redirect to='/' />;
    // props.history.push('/');
  };
  const authLoaded = () => {
    props.onShowAuth(true);
    props.onShowLogin(false);
  };

  useEffect(() => {
    authLoaded();
  });

  return (
    <>
      <Backdrop show={true} click={closeModal} />
      <Modal className={classes.Auth}>
        <form>
          <div>
            <label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Email'
                value=''
                required
                onChange={() => {}}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type='text'
                id='password'
                name='password'
                placeholder='Password'
                value=''
                required
                onChange={() => {}}
              />
            </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </Modal>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     showAuth: state.showAuth,
//     showLogin: state.showLogin
//   };
// };

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
    }
  };
};

export default connect(null, mapDispatchToProps)(Auth);
