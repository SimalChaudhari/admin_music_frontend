import { lazy } from 'react';

const DashboardApp = lazy(() => import('./DashboardApp'));

const DashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/dashboard',
      element: <DashboardApp />,
    },
  ],
};

export default DashboardAppConfig;
