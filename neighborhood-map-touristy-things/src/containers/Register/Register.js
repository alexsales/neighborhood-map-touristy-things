import React from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Register.module.css';

const Register = props => {
  return (
    <div>
      <div className={classes.Register}>
        <div className={classes.notRegistered}>
          <h2>Register</h2>
          <p className={classes.regDisabled}>
            <span>registration disabled</span>
          </p>
          <div>
            <button
              onClick={e => {
                // props.history.push('/auth');
                e.preventDefault();
                e.stopPropagation();
              }}>
              REGISTER
            </button>{' '}
          </div>
        </div>
        <Backdrop show={true} />
      </div>
    </div>
  );
};

export default Register;
