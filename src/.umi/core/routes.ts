// @ts-nocheck
import { ApplyPluginsType, dynamic } from 'D:/project/prr/h5-Dooring/node_modules/@umijs/runtime';
import { plugin } from './plugin';
import LoadingComponent from '@/components/LoadingCp';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "routes": [
      {
        "path": "/editor",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor' */'D:/project/prr/h5-Dooring/src/pages/editor'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'D:/project/prr/h5-Dooring/src/pages/login'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/mobileTip",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__mobileTip' */'D:/project/prr/h5-Dooring/src/pages/mobileTip'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/preview",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__preview' */'D:/project/prr/h5-Dooring/src/pages/editor/preview'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
