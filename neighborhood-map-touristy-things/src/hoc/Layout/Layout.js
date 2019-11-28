import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      {props.children}
    </Fragment>
  );
};

export default Layout;
