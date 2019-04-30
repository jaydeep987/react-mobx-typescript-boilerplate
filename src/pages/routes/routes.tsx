import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { RouteError } from '~pages/route-error/route-error';

/**
 * Load module dynamically.
 * Handles exception, renders error page in that case
 */
// tslint:disable-next-line:no-any completed-docs
async function loadModule(loadingFactory: () => Promise<any>, moduleName: string): Promise<{default: any}> {
  try {
    return {
      default: (await loadingFactory())[moduleName],
    };
  } catch (err) {
    return {
      default: () => <div><RouteError errorText={err.message} /></div>,
    };
  }
}

const Dashboard = React.lazy(() => loadModule(() => import('~pages/dashboard/dashboard'), 'Dashboard'));
const Counter = React.lazy(() => loadModule(() => import('~pages/counter/counter'), 'Counter'));

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
