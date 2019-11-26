import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Auth.module.css';

const Auth = props => {
  return (
    <>
      <Backdrop show={true} />
      <Modal className={classes.Auth}>
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
      </Modal>
    </>
  );
};

export default Auth;
