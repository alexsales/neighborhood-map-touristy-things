import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Register from './containers/Register/Register';
import Search from './components/Search/Search';
import MapBGNoLibrary from './components/UI/MapBGNoLibrary/MapBGNoLibrary';
import './App.css';

const App = props => {
  // TODO: setup custom route components to handle conditional routing (especially or authentication)
  let routes = (
    <Switch>
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

export default App;
