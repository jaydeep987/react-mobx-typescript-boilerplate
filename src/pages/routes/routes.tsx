import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { Route, RouteProps } from 'react-router-dom';
import { Counter } from '~pages/counter/counter';
import { Dashboard } from '~pages/dashboard/dashboard';

const routes: RouteProps[] = [
  {
    path: '/',
    component: withTranslation()(Dashboard),
  },
  {
    path: '/counter',
    component: Counter,
  },
];

/**
 * Generates Routes from routes data
 */
function getRoutes(): JSX.Element[] {
  return routes.map((route: RouteProps) => (
    <Route key={route.path as string} exact={true} path={route.path} component={route.component} />
  ));
}

/**
 * All Routes of app
 */
export const Routes: React.FunctionComponent = (): JSX.Element => (
  <React.Fragment>
    {getRoutes()}
  </React.Fragment>
);
