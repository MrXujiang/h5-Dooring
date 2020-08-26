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

<img src="http://io.nainor.com/uploads/56_1741c466be0.png" alt="H5可视化编辑器" />

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

## 介绍
在最好项目开发准备之后,我们就来开始设计我们的h5页面可视化编辑器－**Dooring**.

### H5编辑器实现
H5可视化编辑器主要需要4个部分,在文章开头也分析过, 这里用图来巩固一下:
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dd41aec53134d558fe46401a5e58800~tplv-k3u1fbpfcp-zoom-1.image)
以上是最基本也是最核心的功能展示模型,接下来我们会一一将其拆解并逐个实现.
#### 实现原理
我们都知道, 目前比较流行的页面可视化搭建方案可以有如下几种:
* 在线编辑代码实现
* 在线编辑json实现
* 无代码化拖拽实现(底层基于json配置文件)

笔者做了一下优缺点对比图,如下:

| 方案       | 定制化程度 |   缺点 |
| :--------- | :--: | -----------: |
| 在线编辑代码     |  最高  | 使用成本高,对非技术人员不友好,效率低 |
| 在线编辑json   |  较高  | 需要熟悉json,有一定使用成本, 对非技术人员不友好,效率一般 |
| 无代码化拖拽实现   |  高  | 使用成本低, 操作基本无门槛,效率较高 |

由以上分析来看, 为了开发一个低门槛, 对任何人适用的可视化编辑器, 笔者将采用第三种方案来实现, 目前市面上已有的产品也有很多, 比如说易企秀, 兔展, 百度H5等等. **实现原理其实还是基于json, 我们通过可视化的手段将自己配置的 页面转化为json数据,最后在基于json渲染器来动态生成H5站点**.
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6aafb8a67c0844248b6122f8e021dfdb~tplv-k3u1fbpfcp-zoom-1.image)

#### 数据结构设计
为了提供组件的自定义能力,我们需要定义一套高可用的数据结构, 这样才能实现因组件需求变更而带来的维护性优势.

在开始设计数据结构之前我们先来拆解一下模块:
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de625f318fa247f3a0e3bd5048ed2266~tplv-k3u1fbpfcp-zoom-1.image)
不同的组件都对应不同的"编辑区域".我们需要设计一套统一的标准的配置来约定它, 这样对于表单编辑器的设计也非常有利, 具体拆解如下:
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ff742d89b464849898871d353f64855~tplv-k3u1fbpfcp-zoom-1.image)

经过以上分析之后, 笔者设计了类似下面的数据结构:
``` js
"Text": {
    "editData": [
      {
        "key": "text",
        "name": "文字",
        "type": "Text"
      },
      {
        "key": "color",
        "name": "标题颜色",
        "type": "Color"
      },
      {
        "key": "fontSize",
        "name": "字体大小",
        "type": "Number"
      },
      {
        "key": "align",
        "name": "对齐方式",
        "type": "Select",
        "range": [
          {
            "key": "left",
            "text": "左对齐"
          },
          {
            "key": "center",
            "text": "居中对齐"
          },
          {
            "key": "right",
            "text": "右对齐"
          }
        ]
      },
      {
        "key": "lineHeight",
        "name": "行高",
        "type": "Number"
      }
    ],
    "config": {
      "text": "我是文本",
      "color": "rgba(60,60,60,1)",
      "fontSize": 18,
      "align": "center",
      "lineHeight": 2
    }
}
```
通过这种标准化结构设计之后,我们可以很方便的实现我们所需要的编辑页面的功能, 并且后期扩展非常方便, 只需要往editData添加配置即可. 至于动态表单编辑器的实现,方案有很多, 笔者之前也写过相关的文章, 这里就不详细介绍了.

[基于react搭建一个通用的表单管理配置平台（vue同）](https://juejin.im/post/6844904137390292999)

#### 组件库设计
组件库设计考虑的一个重要的问题就是体积和渲染问题, 一旦组件库变的越来越多, 那意味着页面加载会非常慢,所以我们需要实现异步加载组件和代码分割的能力, umi提供了这样的功能,我们可以基于它提供的api去实现自己的额按需组件.
``` js
import { dynamic } from 'umi';

export default dynamic({
  loader: async function() {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './HugeA');
    return HugeA;
  },
});
```
通过以上的方式来定义包裹我们的每一个组件, 这样就能实现按需加载了, 但是最好的建议是不需要每个组件都按需加载和拆包,对于**标题**, **通知栏**,**页头**,**页脚**这些组件, 我们完全可以把它放在一个组里,这样不但对不会影响加载速度, 还能减少一定的http请求.

笔者这里简单举一个组件实现的例子，方便大家理解：
``` js
const Header = memo((props) => {
  const { 
    bgColor,
    logo,
    logoText,
    fontSize,
    color
  } = props
  return <header className={styles.header} style={{backgroundColor: bgColor}}>
      <div className={styles.logo}>
        <img src={logo && logo[0].url} alt={logoText} />
      </div>
      <div className={styles.title} style={{fontSize, color}}>{ logoText }</div>
  </header>
})
```
上面的Header组件的props属性完全是由我们之前设计的json结构来定义的，在用户编辑的过程中将收据收集并传给Header组件。最后一步是将这些组件动态传给**dynamic**组件， 这块在上文也介绍过了，大家可以根据自己的实现来做动态化渲染。

### 实现预览功能
预览功能这块比较简单, 我们只需要将用户生成的json数据丢进H5渲染器中即可, 这里我们需要做一个渲染页面单独用来预览组件. 先来看看几个预览效果:
<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/582e67cb0a874bee947efb05af622a55~tplv-k3u1fbpfcp-zoom-1.image" alt="h5-editor" width="375px" />
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

### 后端部分实现
后端部分由于涉及的知识点比较多, 不是本文考虑的重点, 所以这里大致提几个点, 大家可以用完全不同的技术来实现后台服务, 比如说**PHP**, **Java**, **Python**或者**Egg**. 笔者这里采用的是**koa**. 主要实现功能如下:
* 保存模板
* 真机原理的数据源存储
* 用户相关功能
* H5图床和静态文件托管

具体代码可以参考笔者的另一篇全栈开发文章

[基于nodeJS从0到1实现一个CMS全栈项目](https://juejin.im/post/6844903952761225230)

模式基本一致.

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

## Install(安装)

```sh
yarn install
```

## Usage

```sh
yarn run start
```

## 持续升级
正在升级1.1版本，敬请期待...

## 技术反馈和交流
微信：beautifulFront


<img src="http://io.nainor.com/uploads/code_1741c445027.png" width="180px" />
