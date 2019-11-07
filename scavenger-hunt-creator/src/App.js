import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Register from './containers/Register/Register';
import './App.css';

const App = props => {
  let routes = (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/register' component={Register} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
