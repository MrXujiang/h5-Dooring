import path from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/LoadingCp',
  },
  dva: {
    immer: true
  },
  antd: {},
  sass: {
    implementation: require('node-sass'),
  },
  title: '趣谈前端-h5-visible-tool',
  exportStatic: {},
  routes: [
    {
      path: '/',
      // component: '@/layouts',
      routes: [
        {
          path: '/editor',
          component: '../pages/editor',
        },
        {
          path: '/preview',
          component: '../pages/editor/preview',
        },
        {
          path: '/prevH5',
          component: '../pages/editor/preH5',
        }
      ]
    } 
  ],
  theme: {
    "primary-color": "#2F54EB",
    // "btn-primary-bg": "#2F54EB"
  },
  extraBabelPlugins: [
    ['import', { libraryName: "zarm", style: true }],
  ],
  // sass: {},
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/')
  }
});

