/*
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-08 18:33:27
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-18 16:46:50
 * @FilePath: /his-doc/docs/.vuepress/config.js
 */
// const sidebar = require('./utils/gen-sidebar')()
// const navConf = require("./nav.conf.json.js.js");
const isDev = process.env.NODE_ENV === 'development';
// console.log(process.env.NODE_ENV === 'development', 888)

module.exports = {
  base: '/',
  title: 'dooring',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // themeConfig: {
  //     nav: navConf,
  //     sidebarDepth: 3,
  //     lastUpdated: "Last Updated",
  //     repo: "winning-finance/his-doc",
  //     repoLabel: "查看源码",
  // },
  dest: './dist',
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
        title: '基本介绍', // 必要的
        path: '/zh/guide/', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
      {
        title: 'doring如何工作', // 必要的
        path: '/zh/guide/introduced', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
      {
        title: '快速上手', // 必要的
        path: '/zh/guide/startedQuickly', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
      {
        title: '目录结构', // 必要的
        path: '/zh/guide/directoryStructure', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
      {
        title: '组件开发', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        type: 'group',
        children: [
          {
            name: 'componentStructure',
            title: '组件结构', // 必要的
            path: '/zh/guide/componentDev/componentStructure', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
          },
          {
            name: 'DSLAnalysis',
            title: 'DSL设计', // 必要的
            path: '/zh/guide/componentDev/DSLAnalysis', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2, // 可选的, 默认值是 1
          },
          {
            name: 'dynamicLoading',
            title: '动态加载', // 必要的
            path: '/zh/guide/componentDev/dynamicLoading', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
        ],
      },
      {
        title: '功能实现', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        type: 'group',
        children: [
          {
            title: '模板库', // 必要的
            path: '/zh/guide/functionRealization/templateLibrary', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
          {
            title: '保存json', // 必要的
            path: '/zh/guide/functionRealization/saveJson', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
          {
            title: '导入json生成页面', // 必要的
            path: '/zh/guide/functionRealization/generatePagesByJson', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
          {
            title: '网页预览', // 必要的
            path: '/zh/guide/functionRealization/pagePreview', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
          {
            title: '真机预览', // 必要的
            path: '/zh/guide/functionRealization/machinePreview', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
          {
            title: '撤销/重做', // 必要的
            path: '/zh/guide/functionRealization/revocation', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
          {
            title: '截图功能', // 必要的
            path: '/zh/guide/functionRealization/screenshot', // 可选的/, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
          },
        ],
      },
    ],
  },
};
