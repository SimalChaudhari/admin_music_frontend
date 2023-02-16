import { lazy } from 'react';

const UsersApp = lazy(() => import('./UsersApp'));

const UsersAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/users',
      element: <UsersApp />,
    },
  ],
};

export default UsersAppConfig;
