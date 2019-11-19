import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MapBGNoLibrary from '../../components/UI/MapBGNoLibrary/MapBGNoLibrary.js';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <Search />
      <MapBGNoLibrary />
      {props.children}
    </Fragment>
  );
};

export default Layout;
