import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MapBG from '../../components/UI/MapBG/MapBG';

export default function Layout() {
  return (
    <Fragment>
      <Toolbar />
      <Search />
      <MapBG />
    </Fragment>
  );
}
