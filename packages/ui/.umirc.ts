import { defineConfig } from 'umi';
import path from 'path';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    lazyLoad:true,
    skipModelValidate:true,
    disableModelsReExport: true,
    
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/preview', component: '@/pages/preview/index' },
  ],
  fastRefresh: {},
  dynamicImport: {},
  devServer: {
    port: 8008,
  },
  webpack5: {},
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
  },
//   mfsu: {},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "dooringUI",
        library: { type: 'umd', name: 'dooringUI' },
        filename: 'remoteEntry.js',
        exposes: {
          "./viewRender": './src/renderer/ViewRender',
          "./loader": './src/renderer/DynamicEngine',
          "./components": './src/ui-component/index',
        },
        shared: { react: { eager: true , requiredVersion: '17.x' }, "react-dom": { eager: true , requiredVersion: '17.x'  } }
      }])
  },
});
