import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/editor',
    component: __IS_BROWSER
      ? _dvaDynamic({
          app: require('@tmp/dva').getApp(),
          models: () => [
            import(/* webpackChunkName: 'p__editor__models__editorModal.js' */ '/Users/xujiang/Documents/qk/h5-visible-plat/src/pages/editor/models/editorModal.js').then(
              m => {
                return { namespace: 'editorModal', ...m.default };
              },
            ),
          ],
          component: () =>
            import(/* webpackChunkName: "p__editor" */ '../editor'),
          LoadingComponent: require('/Users/xujiang/Documents/qk/h5-visible-plat/src/components/LoadingCp/index')
            .default,
        })
      : require('../editor').default,
    exact: true,
    _title: 'test',
    _title_default: 'test',
  },
  {
    path: '/preview',
    component: __IS_BROWSER
      ? _dvaDynamic({
          app: require('@tmp/dva').getApp(),
          models: () => [
            import(/* webpackChunkName: 'p__editor__models__editorModal.js' */ '/Users/xujiang/Documents/qk/h5-visible-plat/src/pages/editor/models/editorModal.js').then(
              m => {
                return { namespace: 'editorModal', ...m.default };
              },
            ),
          ],
          component: () =>
            import(/* webpackChunkName: "p__editor__preview" */ '../editor/preview'),
          LoadingComponent: require('/Users/xujiang/Documents/qk/h5-visible-plat/src/components/LoadingCp/index')
            .default,
        })
      : require('../editor/preview').default,
    exact: true,
    _title: 'test',
    _title_default: 'test',
  },
  {
    path: '/prevH5',
    component: __IS_BROWSER
      ? _dvaDynamic({
          app: require('@tmp/dva').getApp(),
          models: () => [
            import(/* webpackChunkName: 'p__editor__models__editorModal.js' */ '/Users/xujiang/Documents/qk/h5-visible-plat/src/pages/editor/models/editorModal.js').then(
              m => {
                return { namespace: 'editorModal', ...m.default };
              },
            ),
          ],
          component: () =>
            import(/* webpackChunkName: "p__editor__preH5" */ '../editor/preH5'),
          LoadingComponent: require('/Users/xujiang/Documents/qk/h5-visible-plat/src/components/LoadingCp/index')
            .default,
        })
      : require('../editor/preH5').default,
    exact: true,
    _title: 'test',
    _title_default: 'test',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/xujiang/Documents/qk/h5-visible-plat/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'test',
    _title_default: 'test',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
