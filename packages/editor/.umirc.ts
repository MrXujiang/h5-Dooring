import path from 'path';
import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/LoadingCp',
  },
  dva: {
    immer: true,
  },
  // devtool: 'source-map',
  antd: {},
  title: 'h5-dooring',
  // exportStatic: {},
  base: '/',
  publicPath: '/',
  outputPath: 'dist',
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/home',
        },
        {
          path: '/editor',
          component: '../pages/editor',
        },
        {
          path: '/ide',
          component: '../pages/ide',
        },
        {
          path: '/help',
          component: '../pages/help',
        },
        {
          path: '/login',
          component: '../pages/login',
        },
        {
          path: '/mobileTip',
          component: '../pages/mobileTip',
        },
      ],
    },
  ],
  theme: {
    'primary-color': '#2F54EB',
    // "btn-primary-bg": "#2F54EB"
  },
  extraBabelPlugins: [['import', { libraryName: 'zarm', style: true }]],
  // sass: {},
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
  },
  fastRefresh: {},
  webpack5: {},
  plugins: [
    './src/plugins/umi-msfu-plugin.ts',
  ],
  chainWebpack(memo) {
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "dooringEditor",
        remotes: {
          dooringUI: "dooringUI@//localhost:8008/remoteEntry.js"
        },
        shared: { react: { singleton: true, eager: true, requiredVersion: '17.x' }, "react-dom": { singleton: true,eager: true, requiredVersion: '17.x' }, }
      }])
  },
});
