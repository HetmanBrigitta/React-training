import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import AuthRoutes from './router/AuthRoutes';
import MainRoutes from './router/MainRoutes';
import { authSelectors } from './store/selectors';

const App: FC = () => {
  const userInfo = useSelector(authSelectors.getUserInfo);

  if (userInfo === null) {
    return <AuthRoutes />;
  } else {
    return <MainRoutes />;
  }
};

export default App;
