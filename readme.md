> 让H5制作像搭积木一样简单!

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

> H5-Dooring是一款功能强大，专业可靠的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。技术栈以react和typescript为主， 后台采用nodejs开发, 正在探索h5-lowcode解决方案。

> H5-Dooring is a powerful, open source, free H5 visual page configuration solution dedicated to providing a simple, convenient, professional and reliable, unlimited set of H5 landing page best practices. The technology stack is mainly react, developed in the background using nodejs.

| 主页🏠(home)      | 演示✨(demo) |  文档📦(doc)   |  教程(tutorial) |  wiki |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [website](http://h5.dooring.cn) | [Demo](http://h5.dooring.cn/h5_plus) | [Document](http://h5.dooring.cn/doc) | [视频&Video](https://www.zhihu.com/zvideo/1406394315950653440) | [wiki](https://github.com/MrXujiang/h5-Dooring/wiki)

相关产品: 

- [V6.Dooring | 大屏可视化编辑器](https://github.com/MrXujiang/v6.dooring.public)
- [dooring-electron-lowcode | dooring桌面端软件](https://github.com/MrXujiang/dooring-electron-lowcode)

## Author

👤 **徐小夕**

* Website: http://h5.dooring.cn
* Github: [@MrXujiang](https://github.com/MrXujiang)

## 🤝 Contributing and support

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MrXujiang/h5-Dooring/issues).

> 欢迎提供问题和功能需求, 如果大家有好的点子和优化建议, 也欢迎提pr参与我们的共建.

Give a ⭐️ if this project helped you!

> 如果觉得项目还不错, 就点个star吧~


### Features
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

## 更新日志 | Update the log
1. 视频组件添加播放时是否全屏配置项
2. 修复icon组件点击失效问题
3. 编辑器支持多尺寸切换, 支持画布尺寸自定义
4. 修复后台管理分析表单的多语言问题
5. 组件库支持用户自定义选择

### 后端部分 | The back-end section
后端部分由于涉及的知识点比较多, 不是本文考虑的重点, 所以这里大致提几个点, 大家可以用完全不同的技术来实现后台服务, 比如说**PHP**, **Java**, **Python**或者**Egg**. 笔者这里采用的是**koa**. 

具体代码可以参考全栈开发文章:

- [基于Koa + React + TS从零开发全栈文档编辑器](https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247486910&idx=2&sn=7ce865dd8a8f6769439f0e8eebb72212&chksm=fc531445cb249d534a7d8a362ad40d26bc90f2d2e867385768ee19575e32826fcbe419fcbe0b&token=297396546&lang=zh_CN#rd)

- [Dooring后台接口文档](http://h5.dooring.cn/doc/zh/guide/deployDev/api.html)
- [私有化部署](http://h5.dooring.cn/h5_plus/price)


## Install(安装)
1. 下载代码 | Download the code
```sh
git clone https://github.com/MrXujiang/h5-Dooring.git
```
2. 进入项目目录 | Go to the project catalog
```sh
cd ./h5-Dooring
```

3. 安装依赖包 | Install the dependency package
```sh
yarn install
or
cnpm install
```

## Usage

本地启动应用 | Launch the app locally
```sh
yarn start
or
cnpm run start
```

## 如何运行下载后的代码? | How to run the downloaded code ?

 1. 可以将压缩包解压直接放到服务器根目录, 访问根目录地址即可
 2. `vscode`安装Live Server插件, 将下载的压缩包解压成文件夹, 用`vscode`打开, 点击Live Server即可, 注意要删除启动路径的`index.html`, 改成`/`


如发现本地启动后组件拖拽遇到奇怪的报错, 是应为第三方组件在开发环境的bug, 可以采用一下方式解决:
> If you find that the local start-up component drag encountered strange errors, is a bug that should be a third-party component in the development environment, can be resolved in a way:

```sh
yarn dev
or
cnpm run dev
```
前提是先安装http-server模块.

## Partner project

* [mitu-editor - 轻量级且强大的图片编辑器](https://github.com/H5-Dooring/mitu-editor)
* [powerNice - 一款轻量级文档管理编辑器](http://h5.dooring.cn/powernice/views)
* [rc-drag - 基于react的轻量级拖拽缩放组件](https://github.com/MrXujiang/rc-drag)
* [Luckysheet - 强大的在线excel编辑器](https://github.com/mengshukeji/Luckysheet)
* [Blink - 一款自定义的生成故障艺术动画的组件库](https://github.com/MrXujiang/blink)
* [frontend-developer-roadmap | 一个能提高开发者工作效率的前端js库汇总](https://github.com/MrXujiang/frontend-developer-roadmap)
* [lucky-canvas 抽奖插件 | 一个支持H5, 微信小程序, React的抽奖插件](https://github.com/LuckDraw/lucky-canvas)
* [vue-admin-box | 免费并且开源的中后台管理系统模板](https://github.com/cmdparkour/vue-admin-box)
* [基于antd开箱即用的后台管理模版ant-simple-pro](https://github.com/lgf196/ant-simple-pro)

## 赞助 | Sponsored
开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication
微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
