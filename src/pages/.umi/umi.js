import './polyfills';
import history from './history';

import React from 'react';
import ReactDOM from 'react-dom';
import findRoute, {
  getUrlQuery,
} from '/Users/xujiang/Documents/qk/h5-visible-plat/node_modules/umi-build-dev/lib/findRoute.js';

// runtime plugins
const plugins = require('umi/_runtimePlugin');
window.g_plugins = plugins;
plugins.init({
  validKeys: [
    'patchRoutes',
    'render',
    'rootContainer',
    'modifyRouteProps',
    'onRouteChange',
    'modifyInitialProps',
    'initialProps',
    'dva',
  ],
});
plugins.use(require('../../../node_modules/umi-plugin-dva/lib/runtime'));

const app = require('@tmp/dva')._onCreate();
window.g_app = app;

// render
let clientRender = async () => {
  window.g_isBrowser = true;
  let props = {};
  // Both support SSR and CSR
  if (window.g_useSSR) {
    // 如果开启服务端渲染则客户端组件初始化 props 使用服务端注入的数据
    props = window.g_initialData;
  } else {
    const pathname = location.pathname;
    const activeRoute = findRoute(require('@@/router').routes, pathname);
    // 在客户端渲染前，执行 getInitialProps 方法
    // 拿到初始数据
    if (
      activeRoute &&
      activeRoute.component &&
      activeRoute.component.getInitialProps
    ) {
      const initialProps = plugins.apply('modifyInitialProps', {
        initialValue: {},
      });
      props = activeRoute.component.getInitialProps
        ? await activeRoute.component.getInitialProps({
            route: activeRoute,
            isServer: false,
            location,
            ...initialProps,
          })
        : {};
    }
  }
  const rootContainer = plugins.apply('rootContainer', {
    initialValue: React.createElement(require('./router').default, props),
  });
  ReactDOM[window.g_useSSR ? 'hydrate' : 'render'](
    rootContainer,
    document.getElementById('root'),
  );
};
const render = plugins.compose(
  'render',
  { initialValue: clientRender },
);

const moduleBeforeRendererPromises = [];
// client render
if (__IS_BROWSER) {
  Promise.all(moduleBeforeRendererPromises)
    .then(() => {
      render();
    })
    .catch(err => {
      window.console && window.console.error(err);
    });
}

// export server render
let serverRender, ReactDOMServer;
if (!__IS_BROWSER) {
  const { matchRoutes } = require('react-router-config');
  const { StaticRouter } = require('react-router');
  // difference: umi-history has query object
  const { createLocation } = require('umi-history');
  // don't remove, use stringify html map
  const stringify = require('serialize-javascript');
  const router = require('./router');

  /**
   * 1. Load dynamicImport Component
   * 2. Get Component initialProps function data
   * return Component props
   * @param pathname
   * @param props
   */
  const getInitialProps = async (pathname, props) => {
    const { routes } = router;
    const matchedComponents = matchRoutes(routes, pathname)
      .map(({ route }) => {
        if (route.component) {
          return !route.component.preload
            ? // 同步
              route.component
            : // 异步，支持 dynamicImport
              route.component.preload().then(component => component.default);
        }
      })
      .filter(c => c);
    const loadedComponents = await Promise.all(matchedComponents);

    // get Store
    const initialProps = plugins.apply('modifyInitialProps', {
      initialValue: {},
    });
    // support getInitialProps
    const promises = loadedComponents.map(component => {
      if (component && component.getInitialProps) {
        return component.getInitialProps({
          isServer: true,
          ...props,
          ...initialProps,
        });
      }
      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  serverRender = async (ctx = {}) => {
    // ctx.req.url may be `/bar?locale=en-US`
    const [pathname] = (ctx.req.url || '').split('?');
    // global
    global.req = {
      url: ctx.req.url,
    };
    const location = createLocation(ctx.req.url);
    const activeRoute = findRoute(router.routes, pathname);
    // omit component
    const { component, ...restRoute } = activeRoute || {};
    // router context hook
    // get current router status 40x / 30x, share with server
    const context = {};
    // TODO: getInitialProps timeout handle
    const initialData = await getInitialProps(pathname, {
      route: restRoute,
      // only exist in server
      req: ctx.req || {},
      res: ctx.res || {},
      context,
      location,
    });

    // 当前路由（不包含 Layout）的 getInitialProps 有返回值
    // Page 值为 undefined 时，有 getInitialProps 无返回，此时 return dva model
    const pageData = initialData[initialData.length - 1];
    if (pageData === undefined) {
      initialData[initialData.length - 1] = plugins.apply('initialProps', {
        initialValue: pageData,
      });
    }

    // reduce all match component getInitialProps
    // in the same object key
    // page data key will override layout key
    const props = Array.isArray(initialData)
      ? initialData.reduce(
          (acc, curr) => ({
            ...acc,
            ...curr,
          }),
          {},
        )
      : {};

    const App = React.createElement(
      StaticRouter,
      {
        location: ctx.req.url,
        context,
      },
      React.createElement(router.default, props),
    );

    // render rootContainer for htmlTemplateMap
    const rootContainer = plugins.apply('rootContainer', {
      initialValue: App,
    });
    const htmlTemplateMap = {};
    const matchPath = activeRoute ? activeRoute.path : undefined;
    return {
      htmlElement: matchPath ? htmlTemplateMap[matchPath] : '',
      rootContainer,
      matchPath,
      g_initialData: props,
      context,
    };
  };
  // using project react-dom version
  // https://github.com/facebook/react/issues/13991
  ReactDOMServer = require('react-dom/server');
}

export { ReactDOMServer };
export default (__IS_BROWSER ? null : serverRender);

require('../../global.css');

// hot module replacement
if (__IS_BROWSER && module.hot) {
  module.hot.accept('./router', () => {
    clientRender();
  });
}
