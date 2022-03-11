> 让H5制作像搭积木一样简单!

<p align="center">
    <img src="http://cdn.dooring.cn/dr/logo.ff7fc6bb.png" width="260" alt="H5编辑器,H5制作神器,H5 editor,lowcode">
</p>
<h1 align="center">欢迎使用 H5-Dooring 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://juejin.im/post/6864410873709592584/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="license:GPL3.0" src="https://img.shields.io/badge/license-GPL3.0-yellow.svg" />
  </a>
</p>

> H5-Dooring是一款功能强大，专业可靠的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。技术栈以react和typescript为主， 后台采用nodejs开发, 正在探索h5-lowcode解决方案。

<img src="http://cdn.dooring.cn/dr/123.png" alt="H5-Dooring编辑器预览图" width="100%" />

| 主页🏠     | 演示✨ |  文档📦  |  教程 |  更多 |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [website](http://h5.dooring.cn) | [Demo](http://h5.dooring.cn/h5_plus) | [Document](http://h5.dooring.cn/doc) | [视频&Video](https://www.zhihu.com/zvideo/1406394315950653440) | [wiki](https://github.com/MrXujiang/h5-Dooring/wiki)

简体中文 | [English](./readme.md)

相关产品: 

- [V6.Dooring | 大屏可视化编辑器](https://github.com/MrXujiang/v6.dooring.public)
- [dooring-electron-lowcode | dooring桌面端软件](https://github.com/MrXujiang/dooring-electron-lowcode)

👤 **徐小夕**

* Website: http://h5.dooring.cn
* Github: [@MrXujiang](https://github.com/MrXujiang)

## 🤝 贡献和支持

> 欢迎提供问题和功能需求, 如果大家有好的点子和优化建议, 也欢迎提pr参与我们的共建. [issues page](https://github.com/MrXujiang/h5-Dooring/issues).

> 如果觉得项目还不错, 就点个star吧~

## 私有化部署文档

地址: http://h5.dooring.cn/docz


### 特点
1. 编辑器
    - [x] 参考线
    - [x] 基础组件
    - [x] 可视化组件
    - [x] 媒体组件
    - [x] 商品组件
    - [x] 拖拽器
    - [x] 配置面板
    - [x] 表单设计器
    - [x] (多)页面管理(复制,编辑, 删除, 新建)
    - [x] 组件动画
    - [x] 组件交互
    - [x] 数据源管理
    - [x] 快速预览
    - [x] 真机预览
    - [x] 撤销、重做
    - [x] 微信分享
    - [x] 快捷键
    - [x] 模版库
    - [x] 桌面端软件Dooring-electron, 支持离线使用


2. 增强功能
    - [x] 上传 json，一键转换为 H5
    - [x] 图片库
    - [x] 出码能力(下载源码, 下载dist包)

4. 后端 API
    - [x] 创建、保存、更新作品
    - [x] 用户管理, 权限管理
    - [x] 一键智能分析
    - [x] 数据看版
    - [x] 表单数据收集
    - [x] 表单数据展示
    - [x] 表单数据分析, 一键导出excel, 表单多条件搜索
    - [x] 在线预览
    - [x] 二维码预览
    - [x] 模版管理
    - [x] 出码接口

## 更新日志
1. 视频组件添加播放时是否全屏配置项
2. 修复icon组件点击失效问题
3. 编辑器支持多尺寸切换, 支持画布尺寸自定义
4. 修复后台管理分析表单的多语言问题
5. 组件库支持用户自定义选择

### 后端部分
后端部分由于涉及的知识点比较多, 不是本文考虑的重点, 所以这里大致提几个点, 大家可以用完全不同的技术来实现后台服务, 比如说**PHP**, **Java**, **Python**或者**Egg**. 笔者这里采用的是**koa**. 

具体代码可以参考全栈开发文章:

- [基于Koa + React + TS从零开发全栈文档编辑器](https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247486910&idx=2&sn=7ce865dd8a8f6769439f0e8eebb72212&chksm=fc531445cb249d534a7d8a362ad40d26bc90f2d2e867385768ee19575e32826fcbe419fcbe0b&token=297396546&lang=zh_CN#rd)

- [Dooring后台接口文档](http://h5.dooring.cn/doc/zh/guide/deployDev/api.html)
- [私有化部署](http://h5.dooring.cn/h5_plus/price)


## 安装
1. 下载代码
```sh
git clone https://github.com/MrXujiang/h5-Dooring.git
```
2. 进入项目目录
```sh
cd ./h5-Dooring
```

3. 安装依赖包(需要提前安装yarn)
```sh
yarn pkg
```

## 使用

本地启动应用
```sh
yarn start
or
cnpm run start
```

## 模块及目录说明

本项目使用 lerna多包管理，采用模块联邦共用渲染器，巧妙解耦项目编辑器和C端展示器；增强组件健壮性和提升预览页加载性能

- editor

可视化编辑器;负责拖拽组件，编辑属性，保存发布

- ui

组件库和渲染器;负责各种组件物料和画布引擎加载

- doc 

使用手册和开发文档

## 如何运行下载后的代码?

 1. 可以将压缩包解压直接放到服务器根目录, 访问根目录地址即可
 2. `vscode`安装Live Server插件, 将下载的压缩包解压成文件夹, 用`vscode`打开, 点击Live Server即可, 注意要删除启动路径的`index.html`, 改成`/`


如发现本地启动后组件拖拽遇到奇怪的报错, 是应为第三方组件在开发环境的bug, 可以采用一下方式解决:

```sh
yarn dev
or
cnpm run dev
```
前提是先安装http-server模块.

## 浏览器支持

兼容除了IE之外的任何主流浏览器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IEdge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## 合作项目

* [mitu-editor - 轻量级且强大的图片编辑器](https://github.com/H5-Dooring/mitu-editor)
* [powerNice - 一款轻量级文档管理编辑器](http://h5.dooring.cn/powernice/views)
* [rc-drag - 基于react的轻量级拖拽缩放组件](https://github.com/MrXujiang/rc-drag)
* [Luckysheet - 强大的在线excel编辑器](https://github.com/mengshukeji/Luckysheet)
* [Blink - 一款自定义的生成故障艺术动画的组件库](https://github.com/MrXujiang/blink)
* [frontend-developer-roadmap | 一个能提高开发者工作效率的前端js库汇总](https://github.com/MrXujiang/frontend-developer-roadmap)
* [lucky-canvas 抽奖插件 | 一个支持H5, 微信小程序, React的抽奖插件](https://github.com/LuckDraw/lucky-canvas)
* [vue-admin-box | 免费并且开源的中后台管理系统模板](https://github.com/cmdparkour/vue-admin-box)
* [基于antd开箱即用的后台管理模版ant-simple-pro](https://github.com/lgf196/ant-simple-pro)
* [使用gin+vue进行极速开发的全栈开发基础平台](https://github.com/flipped-aurora/gin-vue-admin)

## 赞助
开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群
微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
