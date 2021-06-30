import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../store/reducers/authReducer';
import routePaths from '../../router/routePaths';

import style from './Navbar.module.scss';

const Navbar: FC = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('authToken');
    dispatch(authActions.resetUserInfo());
  };

  return (
    <div className={`${style.navBarWrapper} ${style.flex}`}>
      <h2 className={style.navTitle}>Hotel Management System</h2>
      <div>
        <NavLink
          to={routePaths.account}
          exact
          className={style.inactive}
          activeClassName={style.active}>
          My Account
        </NavLink>
        <NavLink
          to={routePaths.users}
          exact
          className={style.inactive}
          activeClassName={style.active}>
          User Management
        </NavLink>
        <NavLink
          to={routePaths.hotels}
          exact
          className={style.inactive}
          activeClassName={style.active}>
          Hotel Management
        </NavLink>
        <NavLink
          to={routePaths.bookings}
          exact
          className={style.inactive}
          activeClassName={style.active}>
          Bookings
        </NavLink>
        <button className={`${style.inactive} ${style.logOut}`} onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
