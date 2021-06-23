import React, { FC, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routePaths from './routePaths';

import CenteredLoader from '../components/shared/CenteredLoader';

const Login = lazy(() => import('../components/authentication/login/Login'));
const Register = lazy(() => import('../components/authentication/register/Register'));

const AuthRoutes: FC = () => (
  <Suspense fallback={<CenteredLoader />}>
    <Switch>
      <Route exact path={routePaths.login} component={Login} />
      <Route exact path={routePaths.register} component={Register} />
      <Redirect to={routePaths.login} />
    </Switch>
  </Suspense>
);

export default AuthRoutes;
