import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: '',
    subtitle: '',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.dashboard',
        title: 'DashBoard',
        type: 'item',
        icon: 'heroicons-outline:view-boards',
        url: '/dashboards/dashboard',
      },
      {
        id: 'dashboards.artists',
        title: 'Artists',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
        url: '/dashboards/artists',
      },
      {
        id: 'dashboards.users',
        title: 'Users',
        type: 'item',
        icon: 'heroicons-outline:user-group',
        url: '/dashboards/users',
      },
      {
        id: 'dashboards.project',
        title: 'Reports',
        type: 'item',
        icon: 'heroicons-outline:document-report',
        url: '/dashboards/project',
      },
      {
        id: 'dashboards.analytics',
        title: 'Settings',
        type: 'item',
        icon: 'heroicons-outline:support',
        url: '/dashboards/analytics',
      },
    ],
  },
];

export default navigationConfig;
