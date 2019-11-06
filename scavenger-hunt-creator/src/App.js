import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import logo from './logo.svg';
import './App.css';

const App = props => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <div className='App'>
      <Map
        google={props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 34.1020231, lng: -118.3409712 }}
      />

      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA'
})(App);
