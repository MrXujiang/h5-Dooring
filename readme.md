>> Make H5 as easy as building blocks!

<p align="center">
    <img src="http://cdn.dooring.cn/dr/logo.ff7fc6bb.png" width="260" alt="H5编辑器,H5制作神器,H5 editor,lowcode">
</p>
<h1 align="center">Welcome to H5-Dooring 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://juejin.im/post/6864410873709592584/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="license:GPL3.0" src="https://img.shields.io/badge/license-GPL3.0-yellow.svg" />
  </a>
</p>

> H5-Dooring is a powerful, open source, free H5 visual page configuration solution dedicated to providing a simple, convenient, professional and reliable, unlimited set of H5 landing page best practices. The technology stack is mainly react, developed in the background using nodejs.

<img src="http://cdn.dooring.cn/dr/123.png" alt="H5-Dooring编辑器预览图" width="100%" />

| home🏠     | demo✨ |  doc📦   |  tutorial |  wiki |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [website](http://h5.dooring.cn) | [Demo](http://h5.dooring.cn/h5_plus) | [Document](http://h5.dooring.cn/doc) | [视频&Video](https://www.zhihu.com/zvideo/1406394315950653440) | [wiki](https://github.com/MrXujiang/h5-Dooring/wiki)

> ✨ note: If the official visit is too slow, visit the [H5-Dooring for Singapore](http://h5.dooring.vip)

English | [简体中文](./zh.md)

new doc: [private deployment process](http://h5.dooring.cn/docz/source-list/H5-Dooring/deploy_en)

Related products: 

- [V6.Dooring | Large screen visual editor](https://github.com/MrXujiang/v6.dooring.public)
- [dooring-electron-lowcode | Dooring desktop software](https://github.com/MrXujiang/dooring-electron-lowcode)
- [Lowcode community](http://lowcode.dooring.cn)
- [Dooring-Saas](https://dooring.vip)

## Author

👤 **alex_xu**

* Website: http://h5.dooring.cn
* Github: [@MrXujiang](https://github.com/MrXujiang)
* new tech share: [Dooring2.7+最新技术分享&复盘](https://github.com/MrXujiang/h5-Dooring/issues/145)

  ## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=MrXujiang/h5-Dooring&type=Date)](https://star-history.com/#MrXujiang/h5-Dooring&Date)


## 🤝 Contributing and support

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MrXujiang/h5-Dooring/issues).

Give a ⭐️ if this project helped you!

## Privatization Deployment documentation

- address: http://h5.dooring.cn/docz
- ⭐️ lowcode component list: http://h5.dooring.cn/docz/components/intro
- List of answers: http://h5.dooring.cn/docz/source-list/H5-Dooring/guide
- gitee mini code: https://gitee.com/lowcode-china/h5_-dooring


### Features
1. editor
    - [x] Guides
    - [x] The underlying component
    - [x] Visual components
    - [x] Media components
    - [x] Product components
    - [x] Dragper
    - [x] Configure the panel
    - [x] Form designer
    - [x] (Multi) Page management (copy, edit, delete, new)
    - [x] Component animation
    - [x] Component interaction
    - [x] Data source management
    - [x] Quick preview
    - [x] Real machine preview
    - [x] Undo and redo
    - [x] WeChat shares
    - [x] shortcut key
    - [x] The template library
    - [x] Desktop software, Dooring-electron, supports offline use


2. Enhanced features
    - [x] Upload json, convert to H5 with one click
    - [x] Photo gallery
    - [x] Code capability (download source, download dis package)

4. backend API
    - [x] Create, save, and update your work
    - [x] User management, rights management
    - [x] One-click intelligent analysis
    - [x] Data look
    - [x] Form data collection
    - [x] Form data presentation
    - [x] Form data analysis, one-click export excel, form multi-condition search
    - [x] Preview online
    - [x] QR code preview
    - [x] Template management
    - [x] Code interface

## Update the log
1. Whether the video component adds a full-screen configuration item when playing
2. Fixes a click failure of the icon component
3. The editor supports multi-size switching and canvas size customization
4. Fix multilingual issues with background management analytics forms
5. The component library supports user-defined selection

## Technology Sharing

- [(10月最新) 前端图形学实战: 从零开发几何画板(vue3 + vite版](https://github.com/MrXujiang/h5-Dooring/issues/149)
- [几何学在前端边界计算中的应用和原理分析(一)](https://github.com/MrXujiang/h5-Dooring/issues/148)

### The back-end section
The back-end part because of the knowledge points involved is more, is not the focus of this article, so here is a few points, you can use completely different technology to achieve back-office services, such as PHP, Java, Python or Egg. The author here is using the "koa" . 

Specific code can refer to the full stack development article:

- [基于Koa + React + TS从零开发全栈文档编辑器](https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247486910&idx=2&sn=7ce865dd8a8f6769439f0e8eebb72212&chksm=fc531445cb249d534a7d8a362ad40d26bc90f2d2e867385768ee19575e32826fcbe419fcbe0b&token=297396546&lang=zh_CN#rd)

- [Dooring后台接口文档](http://h5.dooring.cn/doc/zh/guide/deployDev/api.html)
- [私有化部署](http://h5.dooring.cn/h5_plus/price)


## Install
1. Download the code
```sh
git clone https://github.com/MrXujiang/h5-Dooring.git
```
2. Go to the project catalog
```sh
cd ./h5-Dooring
```

3. Install the dependency package
```sh
yarn pkg
```

## Usage

Launch the app locally
```sh
yarn start
or
cnpm run start
```

注意: 如果window系统下无法启动, 请移步 [dooring-electron](https://github.com/H5-Dooring/dooring-electron-lowcode)

## How to run the downloaded code ?

 1. The compression package can be unzipped directly to the server root, and access to the root address is sufficient
 2. 'vscode' installs the Live Server plug-in, unzips the downloaded compression package into a folder, opens with 'vscode', clicks on Live Server, and notes that to remove the 'index .html' of the startup path, change it to '/'


If you find that the local boot component drag and drop encountered strange errors, is the third-party component in the development environment bug, you can take a step to solve:
> If you find that the local start-up component drag encountered strange errors, is a bug that should be a third-party component in the development environment, can be resolved in a way:

```sh
yarn dev
or
cnpm run dev
```
The premise is to install the http-server module first.

## Browsers support

 Modern browsers does not support IE browser

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IEdge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## Contact us
<img src="http://cdn.dooring.cn/dr%2Fline.jpeg" alt="line" width=120 />

Twitter Account：@H5Dooring


## Partner project

* [ react-cropper-pro - 轻量强大的图片上传/裁切/压缩组件](https://github.com/MrXujiang/react-cropper-pro)
* [mitu-editor - 轻量级且强大的图片编辑器](https://github.com/H5-Dooring/mitu-editor)
* [powerNice - 一款轻量级文档管理编辑器](http://h5.dooring.cn/powernice/views)
* [rc-drag - 基于react的轻量级拖拽缩放组件](https://github.com/MrXujiang/rc-drag)
* [react-form-simple - 基于react开发的高性能表单库](https://github.com/easy-form/react-form-simple)
* [Luckysheet - 强大的在线excel编辑器](https://github.com/mengshukeji/Luckysheet)
* [Blink - 一款自定义的生成故障艺术动画的组件库](https://github.com/MrXujiang/blink)
* [frontend-developer-roadmap | 一个能提高开发者工作效率的前端js库汇总](https://github.com/MrXujiang/frontend-developer-roadmap)
* [lucky-canvas 抽奖插件 | 一个支持H5, 微信小程序, React的抽奖插件](https://github.com/LuckDraw/lucky-canvas)
* [vue-admin-box | 免费并且开源的中后台管理系统模板](https://github.com/cmdparkour/vue-admin-box)
* [基于antd开箱即用的后台管理模版ant-simple-pro](https://github.com/lgf196/ant-simple-pro)
* [使用gin+vue进行极速开发的全栈开发基础平台](https://github.com/flipped-aurora/gin-vue-admin)
* [DevUI中后台产品开源前端解决方案](https://github.com/DevCloudFE/ng-devui)

## Sponsored
Open source is not easy, with your sponsorship, we will do better

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## Technical feedback and communication
wechat：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
