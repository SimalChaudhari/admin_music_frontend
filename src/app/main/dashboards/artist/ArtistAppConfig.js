import { lazy } from 'react';

const ArtistApp = lazy(() => import('./ArtistApp'));

const ArtistAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/artist',
      element: <ArtistApp />,
    },
  ],
};

export default ArtistAppConfig;
