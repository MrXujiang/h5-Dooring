/*
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-08 18:33:27
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-18 16:46:50
 * @FilePath: /his-doc/docs/.vuepress/config.js
 */
const isDev = process.env.NODE_ENV === 'development';
// console.log(process.env.NODE_ENV === 'development', 888)

module.exports = {
  base: '/',
  title: 'h5-dooring',
  dest: './doc-dist',
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '体验', link: '/' },
      { text: '文档', link: '/zh/guide/' },
      { text: '1.X', link: '/zh/guide/1' },
      { text: '语言', link: '/zh/guide/2' },
      { text: 'github', link: 'https://github.com/MrXujiang/h5-Dooring' },
    ],
    sidebar: [
      {
        title: '基本介绍',
        path: '/zh/guide/',
        collapsable: false,
        sidebarDepth: 1,
      },
      {
        title: 'doring如何工作',
        path: '/zh/guide/introduced',
        collapsable: false,
        sidebarDepth: 1,
      },
      {
        title: '快速上手',
        path: '/zh/guide/startedQuickly',
        collapsable: false,
        sidebarDepth: 1,
      },
      {
        title: '目录结构',
        path: '/zh/guide/directoryStructure',
        collapsable: false,
        sidebarDepth: 1,
      },
      {
        title: '组件开发',
        collapsable: false,
        sidebarDepth: 1,
        type: 'group',
        children: [
          {
            name: 'componentStructure',
            title: '组件结构',
            path: '/zh/guide/componentDev/componentStructure',
            collapsable: false,
            sidebarDepth: 2,
          },
          {
            name: 'DSLAnalysis',
            title: 'DSL设计',
            path: '/zh/guide/componentDev/DSLAnalysis',
            collapsable: false,
            sidebarDepth: 2,
          },
          {
            name: 'dynamicLoading',
            title: '动态加载',
            path: '/zh/guide/componentDev/dynamicLoading',
            collapsable: false,
            sidebarDepth: 1,
          },
        ],
      },
      {
        title: '功能实现',
        collapsable: false,
        sidebarDepth: 1,
        type: 'group',
        children: [
          {
            title: '模板库',
            path: '/zh/guide/functionRealization/templateLibrary',
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: '保存json',
            path: '/zh/guide/functionRealization/saveJson',
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: '网页预览',
            path: '/zh/guide/functionRealization/pagePreview',
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: '真机预览',
            path: '/zh/guide/functionRealization/machinePreview',
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: '撤销/重做',
            path: '/zh/guide/functionRealization/revocation',
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: '截图功能',
            path: '/zh/guide/functionRealization/screenshot',
            collapsable: false,
            sidebarDepth: 1,
          },
        ],
      },
    ],
  },
};
