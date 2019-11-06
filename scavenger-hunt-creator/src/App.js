import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import './App.css';

const App = props => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
};

export default App;
