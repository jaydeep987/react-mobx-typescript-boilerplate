import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { RouteError } from '~pages/route-error/route-error';

const Dashboard = React.lazy(async () => {
  try {
    return {
      default: (await import('~pages/dashboard/dashboard')).Dashboard,
    };
  } catch (err) {
    return {
      default: () => <div><RouteError errorText={err.message} /></div>,
    };
  }
});

const Counter = React.lazy(async () => {
  try {
    return {
      default: (await import('~pages/counter/counter')).Counter,
    };
  } catch (err) {
    return {
      default: () => <div><RouteError errorText={err.message} /></div>,
    };
  }
});

const routes: RouteProps[] = [
  {
    path: '/',
    render: (props) => <Dashboard {...props} />,
  },
  {
    path: '/counter',
    render: (props) => <Counter {...props} />,
  },
];

/**
 * Generates Routes from routes data
 */
function getRoutes(): JSX.Element[] {
  return routes.map((route: RouteProps) => (
    <Route
      key={route.path as string}
      exact={true}
      path={route.path}
      render={route.render}
    />
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
