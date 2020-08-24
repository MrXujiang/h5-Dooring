## H5-Dooring
<img src="http://io.nainor.com/uploads/56_1741c466be0.png" alt="H5可视化编辑器" />

H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。技术栈以react为主， 后台采用nodejs开发。

* 预览地址：http://io.nainor.com/h5_visible

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

## 需求分析
在思考需求分析之前我们先来看看**Dooring**的使用演示：
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7000035ac7f44898d3450c24468cc65~tplv-k3u1fbpfcp-zoom-1.image)
由上面的gif图我们可以分析出，可视化编辑器主要有以下几部分组成：
* 可拖拽的组件库 draggable components
* 盛放组件的画布 canvas
* 组件编辑器 FormEditor
* 头部工具栏 toolBar

可拖拽组件我们可以用社区比较火的**react-dnd**，**react-draggable**来实现，由于我们的画布是可拖拽可放大缩小的，所以这里需要对画布赋能，具体实现可参考下文。

其次就是H5编辑器部分，这部分是核心功能，后面我们会详细分析。还有就是预览，生成预览链接，保存**json**文件， 保存模版这些功能本质上是对我们**json**文件的操作，可是目前可视化搭建技术的常用手段之一。先来看看这些功能的演示：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/593bdeae932e4e72a5d51249b866e65d~tplv-k3u1fbpfcp-zoom-1.image)

## 基础准备
我们的**h5页面可视化编辑器**采用**umi**来作为脚手架工具.
> **umi**是可扩展的企业级前端应用框架,以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求.

这样我们不会关注繁琐的工程配置细节, 可以直接在项目中使用 **antd** 和 **less** 这些方案, 并且集成了目前比较流行的**css module**, 可以方便我们在项目里对**css**进行模块化开发. umi创建项目的具体使用流程如下:
``` js
// 创建并进入工程目录
mkdir dooring && cd dooring
// 创建umi应用
yarn create @umijs/umi-app
// 安装依赖
yarn    // 或者使用npm install
```
简单的三步走策略就能轻松搭建我们的项目工程, 是不是省去了很多麻烦? (在使用这些方式之前我们首先确保自己本地的**node** 版本是 10.13 或以上)

在项目创建完之后我们还需要安装可视化方面必备的第三方组件, 笔者调研社区精选组件之后采用了一下方案:
* **react-dnd** react拖拽组件
* **react-color** react颜色选择组件,用于H5编辑器的编辑颜色部分
* **react-draggable** 用于组件或者画布的拖拽移动
* **react.qrcode** 基于react的二维码生成组件, 能以react组件的方式生成二维码

以上组件在运行项目前大家可以自行安装.

## 已完成功能
* 1. 组件库拖拽和显示
* 2. 组件库动态编辑
* 3. H5页面预览功能
* 4. 保存H5页面配置文件
* 5. 保存为模版
* 6. 移动端跨端适配
* 7. 媒体组件

## 正在完成功能
* 添加模版库模块
* 添加在线下载网站代码功能
* 丰富组件库组件，添加可视化组件
* 添加配置交互功能
* 组件细分和代码优化
* 添加typescript支持和单元测试

## 持续升级
正在升级1.1版本，敬请期待...

## 技术反馈和交流
微信：beautifulFront
<img src="http://io.nainor.com/uploads/code_1741c445027.png" width="180px" />
