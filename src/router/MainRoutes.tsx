import React, { FC, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routePaths from './routePaths';

import CenteredLoader from '../components/shared/CenteredLoader';

const Users = lazy(() => import('../components/users/Users'));
const MyAccount = lazy(() => import('../components/myAccount/MyAccount'));

const MainRoutes: FC = () => (
  <Suspense fallback={<CenteredLoader />}>
    <Switch>
      <Route exact path={routePaths.users} component={Users} />
      <Route exact path={routePaths.account} component={MyAccount} />
      <Route exact path={routePaths.hotels} component={() => <>Hotel Management</>} />
      <Route exact path={routePaths.bookings} component={() => <>Bookings</>} />
      <Redirect to={routePaths.users} />
    </Switch>
  </Suspense>
);

export default MainRoutes;
