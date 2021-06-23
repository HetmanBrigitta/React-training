import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import routePaths from '../../router/routePaths';

import style from './Navbar.module.scss';

const Navbar: FC = () => (
  <div className={`${style.navBarWrapper} ${style.flex}`}>
    <h2>Hotel Management System</h2>
    <div className={style.sideNav}>
      <NavLink to={routePaths.account}>My Account</NavLink>
      <NavLink to={routePaths.users} exact>
        User Management
      </NavLink>
      <NavLink to={routePaths.hotels}>Hotel Management</NavLink>
      <NavLink to={routePaths.bookings}>Bookings</NavLink>
      <NavLink to={routePaths.logout}>Logout</NavLink>
    </div>
  </div>
);

export default Navbar;
