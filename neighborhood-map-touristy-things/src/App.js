import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import Faves from './containers/Faves/Faves';
import Auth from './containers/Auth/Auth';
import Register from './containers/Register/Register';
import Search from './components/Search/Search';
import MapBGNoLibrary from './components/UI/MapBGNoLibrary/MapBGNoLibrary';
import { firebase } from './axios';
import './App.css';

const App = props => {
  const user = firebase.auth().currentUser;
  // TODO: page refresh does not access valid/existing token in localStorage to auto-login User; for now,page refresh will clear localStorage and User will have to login again

  if (!!user === false) {
    // clear localStorage
    // update redux store via mapDispatchToProps
    localStorage.removeItem('token');
    localStorage.removeItem('expiresInDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    props.onClearUserToken();
  }

  // TODO: setup custom route components to handle conditional routing (especially or authentication)
  let routes = (
    <Switch>
      <Route path='/faves' component={Faves} />
      <Route path='/auth' component={Auth} />
      <Route path='/register' component={Register} />
      <Route
        path='/'
        exact
        render={props => (
          <>
            <Search />
            <MapBGNoLibrary />
          </>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClearUserToken: () => {
      firebase.auth().signOut();
      dispatch({
        type: 'CLEARUSERTOKEN'
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
