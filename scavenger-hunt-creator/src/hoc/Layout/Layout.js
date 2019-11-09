import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MapBG from '../../components/UI/MapBG/MapBG';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <Search />
      <MapBG />
      {props.children}
    </Fragment>
  );
};

export default Layout;