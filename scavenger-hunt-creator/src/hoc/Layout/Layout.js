import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MapBGNoLibrary from '../../components/UI/MapBGNoLibrary/MapBGNoLibrary.js';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <Search />
      <MapBGNoLibrary />
      {props.children}
    </Fragment>
  );
};

export default Layout;
