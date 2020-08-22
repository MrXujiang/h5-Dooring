// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/apple/Desktop/github/zhiku.tec/h5-visible-tool/node_modules/@umijs/runtime';
import { plugin } from './plugin';
import LoadingComponent from '@/components/LoadingCp';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "routes": [
      {
        "path": "/editor",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor' */'/Users/apple/Desktop/github/zhiku.tec/h5-visible-tool/src/pages/editor'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/preview",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__preview' */'/Users/apple/Desktop/github/zhiku.tec/h5-visible-tool/src/pages/editor/preview'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/prevH5",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__preH5' */'/Users/apple/Desktop/github/zhiku.tec/h5-visible-tool/src/pages/editor/preH5'), loading: LoadingComponent}),
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
