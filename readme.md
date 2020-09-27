<h1 align="center">Welcome to H5-Dooring 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://juejin.im/post/6864410873709592584/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。技术栈以react为主， 后台采用nodejs开发。

### 🏠 [Homepage](http://io.nainor.com/h5_visible)

### ✨ [Demo](http://io.nainor.com/h5_plus/editor?tid=123456)

<img src="http://io.nainor.com/uploads/demo_1748b27f0e4.png" alt="H5可视化编辑器" />

## Author

👤 **徐小夕**

* Website: http://io.nainor.com/h5_visible
* Github: [@MrXujiang](https://github.com/MrXujiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MrXujiang/h5-Dooring/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 技术栈
* **React** 前端主流框架(react,vue,angular)之一,更适合开发灵活度高且复杂的应用
* **dva** 主流的react应用状态管理工具，基于redux
* **less** css预编译语言，轻松编写结构化分明的css
* **umi** 基于react的前端集成解决方案
* **antd** 地球人都知道的react组件库
* **axios** 强大的前端请求库
* **react-dnd** 基于react的拖拽组件解决方案，具有优秀的设计哲学
* **qrcode.react** 基于react的二维码生成插件
* **zarm** 基于react的移动端ui库，轻松实现美观的H5应用
* **koa** 基于nodejs的上一代开发框架，轻松实现基于nodejs的后端开发
* **@koa/router** 基于koa2的服务端路由中间件
* **ramda** 优秀的函数式js工具库

### 预览功能
预览功能这块比较简单, 我们只需要将用户生成的json数据丢进H5渲染器中即可, 这里我们需要做一个渲染页面单独用来预览组件. 先来看看几个预览效果:

<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/582e67cb0a874bee947efb05af622a55~tplv-k3u1fbpfcp-zoom-1.image" alt="h5-editor" width="375px" />
<br />
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c50d89f770f4ae5b4c5c4ec9f0052c1~tplv-k3u1fbpfcp-zoom-1.image" alt="h5-editor" width="375px" />

前面的渲染器原理已经介绍了, 这里就不一一介绍了,感兴趣的可以交流讨论.

### 实现在线下载功能
在线下载这块我们需要用到一个开源库: **file-saver**, 专门解决前端下载文件困难的窘境. 具体使用举例:
``` js
var FileSaver = require('file-saver');
var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");
```
以上代码可以实现将传入的数据下载为txt文件, 如果是Blob, 是不是还能在线下载图片, html呢? 答案是肯定的, 所以我们的下载任务采用该方案来实现.

### 后端部分
后端部分由于涉及的知识点比较多, 不是本文考虑的重点, 所以这里大致提几个点, 大家可以用完全不同的技术来实现后台服务, 比如说**PHP**, **Java**, **Python**或者**Egg**. 笔者这里采用的是**koa**. 主要实现功能如下:
* 保存模板
* 真机原理的数据源存储
* 用户相关功能
* H5图床和静态文件托管

具体代码可以参考笔者的另一篇全栈开发文章

[基于nodeJS从0到1实现一个CMS全栈项目](https://juejin.im/post/6844903952761225230)

模式基本一致.

## wiki(参考文档)
* [H5可视化编辑器(H5 Dooring)介绍](https://github.com/MrXujiang/h5-Dooring/wiki/H5%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8(H5-Dooring)%E4%BB%8B%E7%BB%8D)
* [Form Editor(动态表单设计器)](https://github.com/MrXujiang/h5-Dooring/wiki/Form-Editor(%E5%8A%A8%E6%80%81%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1%E5%99%A8))
* [基于f2实现移动端可视化编辑器(dooring升级版)](https://github.com/MrXujiang/h5-Dooring/wiki/%E5%9F%BA%E4%BA%8Ef2%E5%AE%9E%E7%8E%B0%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8(dooring%E5%8D%87%E7%BA%A7%E7%89%88))

## 已完成功能
1. 组件库拖拽和显示
2. 组件库动态编辑
3. H5页面预览功能
4. 保存H5页面配置文件
5. 保存为模版
6. 移动端跨端适配
7. 媒体组件
8. 在线下载网站代码功能
9. 添加typescript支持
10. 表单设计器/自定义表单组件
11. 可视化组件Chart实现
12. 在线编程模块(Mini Web IDE)
13. 新增图表组件 面积图，折线图， 饼图

## 正在完成功能
* 升级模版库
* 丰富组件库组件，添加可视化组件如折线图, 饼图, 面积图等
* 添加配置交互功能
* 组件细分和代码优化
* 单元测试

## Install(安装)
1. 下载代码
```sh
git clone https://github.com/MrXujiang/h5-Dooring.git
```
2. 进入项目目录
```sh
cd ./h5-Dooring
```

3. 安装依赖包
```sh
yarn install
```

## Usage
启动应用
```sh
yarn run start
```

## 更新日志
1. 添加在线编程模块（在执行代码前先启动node服务 npm run server）
2. 添加客服机器人模块[chatbot-antd](https://www.npmjs.com/package/chatbot-antd)


## 持续升级
正在升级1.3版本，敬请期待...

## 赞助
开源不易, 有了您的赞助, 我们会做的更好~
<img src="http://io.nainor.com/uploads/WechatIMG2_1742b586c3d.jpeg" width="180px" />

## 技术反馈和交流
微信：beautifulFront


<img src="http://io.nainor.com/uploads/code_1741c445027.png" width="180px" />

## 技术交流群
<img src="http://io.nainor.com/uploads/i_1749a2713f0.png" width="180px" />
