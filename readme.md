> 让H5制作像搭积木一样简单!

<p align="center">
    <img src="./public/logo.png" width="260" alt="H5编辑器,H5制作神器,H5 editor,lowcode">
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

> H5-Dooring是一款功能强大，专业可靠的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。技术栈以react为主， 后台采用nodejs开发。

> H5-Dooring is a powerful, open source, free H5 visual page configuration solution dedicated to providing a simple, convenient, professional and reliable, unlimited set of H5 landing page best practices. The technology stack is mainly react, developed in the background using nodejs.

### 🏠 [Homepage](http://h5.dooring.cn)

### ✨ [Demo](http://h5.dooring.cn/h5_plus)

### 📦 doc(文档) [H5-Dooring Document](http://h5.dooring.cn/doc)

### [视频教程 | Video tutorial](https://www.zhihu.com/zvideo/1326300284608417792)

<!-- <img src="http://io.nainor.com/uploads/face_17512320c6d.png" alt="H5可视化编辑器" /> -->
![](http://h5.dooring.cn/uploads/dooring-sdk_1763cbe7028.png)

相关产品: [V6.Dooring | 大屏可视化编辑器](https://github.com/MrXujiang/v6.dooring.public)

## Author

👤 **徐小夕**

* Website: http://h5.dooring.cn
* Github: [@MrXujiang](https://github.com/MrXujiang)

## 声明

专有软件及代码，未获得授权的情况下，禁止对该仓库代码进行反编译、分发等行为，否则将承担相应的法律后果。

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MrXujiang/h5-Dooring/issues).

## Show your support

Give a ⭐️ if this project helped you!

## ⭐️ dooring-sdk使用
最近笔者正在开放dooring的插拔式服务, 以js-sdk的形式支持集成到外部系统中, 并提供开放API共使用者自由配置. 规划如下:


![](http://h5.dooring.cn/uploads/sdk_1763cc11bd5.png)


### 1. 如何引用js-sdk | How to use js-sdk
我们可以使用两种方式来使用我们的js-sdk, 第一种是在项目脚本中引入如下script标签, 如下:
``` js
<script src="http://h5.dooring.cn/dooring-sdk.js"></script>
```
或者直接复制如下代码到你的script标签中, 代码如下:
``` js
(function(){var b=document.createElement("iframe");var d=Date.now();var a="http://49.234.61.19";b.src=a+"/h5_plus/editor?tid="+d+"&"+c(dooringOpts)+"&isOpen=1";console.log(c(dooringOpts));b.style.border="none";b.style.width="100vw";b.style.height="100vh";if(dooringOpts&&dooringOpts.iframeStyle){b.style.border=dooringOpts.iframeStyle.border||"none";b.style.width=dooringOpts.iframeStyle.width||"100vw";b.style.height=dooringOpts.iframeStyle.height||"100vh"}document.querySelector(dooringOpts.container||"body").appendChild(b);function c(g){var e=Object.assign({gallery:false,template:false,saveTemplate:true,save:true,downCode:true,isPhoneTest:false,helpPage:true,uploadApi:"",formApi:"",screenshotsApi:""},g.controls||{});var h="";for(var f in e){h+=f+"="+encodeURI(e[f])+"&"}return h.slice(0,h.length-1)}})();
```

### 2. 自定义选项 | Custom options

我们可以在全局定义如下配置项:

``` js
var dooringOpts = {
    container: '',  // 挂载到哪个dom节点上
    iframeStyle: {  // iframe自定义样式
        width: '',
        height: '',
        border: ''
    },
    controls: {
      gallery: false,  // 是否启动图片库
      template: false, // 是否启用模版库
      saveTemplate: true,  // 参数可以是true/false,表示是否启动下载代码, 也可以是函数, 用来自定义下载代码逻辑
      save: true,  // 参数可以是true/false,表示是否启动下载代码, 也可以是函数, 用来自定义下载代码逻辑
      downCode: true, // 参数可以是true/false,表示是否启动下载代码, 也可以是函数, 用来自定义下载代码逻辑
      isPhoneTest: false,
      helpPage: true,   // false/true表示隐藏/显示帮助页面
      uploadApi: '',  // 自定义上传api
      formApi: '',  // 自定义表单提交api
      screenshotsApi: ''  // 自定义截图提交api
    }
};
```

注: 在使用自定义配置时, 自定义配置的顺序应先于sdk引入的顺序, 所以正确的使用案例如下:

``` js
<script>
  var dooringOpts = {

  }
</script>
<script src="http://49.234.61.19/dooring-sdk.js"></script>
```


## 技术栈 | The technology stack
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

### 预览功能 | Preview features
预览功能这块比较简单, 我们只需要将用户生成的json数据丢进H5渲染器中即可, 这里我们需要做一个渲染页面单独用来预览组件. 先来看看几个预览效果:
> The preview function is relatively simple, we just need to throw the user-generated jason data into the H5 renderer, here we need to make a rendering page for the preview components separately. Let's take a look at a few previews:

<img src="http://49.234.61.19/uploads/pr_1_1763cc4184a.png" alt="h5_preview_pic" width="375px"/>
<br />
<img src="http://49.234.61.19/uploads/pr_2_1763cc49dd1.png" alt="h5_preview_pic" width="375px"/>

前面的渲染器原理已经介绍了, 这里就不一一介绍了,感兴趣的可以交流讨论.

### 实现在线下载功能 | Enable online download
在线下载这块我们需要用到一个开源库: **file-saver**, 专门解决前端下载文件困难的窘境. 具体使用举例:
``` js
var FileSaver = require('file-saver');
var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");
```
以上代码可以实现将传入的数据下载为txt文件, 如果是Blob, 是不是还能在线下载图片, html呢? 答案是肯定的, 所以我们的下载任务采用该方案来实现.

### 后端部分 | The back-end section
后端部分由于涉及的知识点比较多, 不是本文考虑的重点, 所以这里大致提几个点, 大家可以用完全不同的技术来实现后台服务, 比如说**PHP**, **Java**, **Python**或者**Egg**. 笔者这里采用的是**koa**. 主要实现功能如下:
* 保存模板 | Save the template
* 真机预览的数据源存储 | The data source store for the real machine preview
* 用户相关功能 | User-related features
* H5图床和静态文件托管 | H5 map bed and static file hosting

具体代码可以参考笔者的另一篇全栈开发文章

[基于nodeJS从0到1实现一个CMS全栈项目](https://juejin.im/post/6844903952761225230)

模式基本一致.

## wiki(参考文档)
* [H5可视化编辑器(H5 Dooring)介绍](https://github.com/MrXujiang/h5-Dooring/wiki/H5%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8(H5-Dooring)%E4%BB%8B%E7%BB%8D)
* [Form Editor(动态表单设计器)](https://github.com/MrXujiang/h5-Dooring/wiki/Form-Editor(%E5%8A%A8%E6%80%81%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1%E5%99%A8))
* [基于f2实现移动端可视化编辑器(dooring升级版)](https://github.com/MrXujiang/h5-Dooring/wiki/%E5%9F%BA%E4%BA%8Ef2%E5%AE%9E%E7%8E%B0%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8(dooring%E5%8D%87%E7%BA%A7%E7%89%88))
* [实现H5可视化编辑器的实时预览和真机扫码预览功能](https://github.com/MrXujiang/h5-Dooring/wiki/%E5%AE%9E%E7%8E%B0H5%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8%E7%9A%84%E5%AE%9E%E6%97%B6%E9%A2%84%E8%A7%88%E5%92%8C%E7%9C%9F%E6%9C%BA%E6%89%AB%E7%A0%81%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD)
* [基于H5 Dooring场景下的图片 文件上传方案指南](https://github.com/MrXujiang/h5-Dooring/wiki/%E5%9F%BA%E4%BA%8EH5-Dooring%E5%9C%BA%E6%99%AF%E4%B8%8B%E7%9A%84%E5%9B%BE%E7%89%87-%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%96%B9%E6%A1%88%E6%8C%87%E5%8D%97)

## 已完成功能 | The functionality is complete
1. 组件库拖拽和显示 | Component library drag and display
2. 组件库动态编辑 | Component library dynamic editing
3. H5页面预览功能 | H5 page preview feature
4. 保存H5页面配置文件 | Save the H5 page profile
5. 保存为模版 | Save as a template
6. 移动端跨端适配 | Mobile cross-end fit
7. 媒体组件 | The media component
8. 在线下载网站代码功能 | Download the website code feature online
9. 添加typescript支持 | Add typescript support
10. 表单设计器/自定义表单组件 | Form designer/custom form components
11. 可视化组件Chart实现 | Visual component Chart implementation
12. 在线编程模块(Mini Web IDE) | Online programming module
13. 新增图表组件 面积图，折线图， 饼图 | Added chart component area chart, line chart, pie chart
14. 添加图片库,支持用户在线选择图片素材 | Add a picture library to allow users to select picture footage online
15. 升级图片组件为图文组件 | Upgrade the picture component to the picture component
16. 添加模版库 | Add a template library
17. 添加可视化组件(基于g2)如折线图, 饼图, 面积图等 | Add visualization components (based on g2) such as line charts, pie charts, area charts, etc
18. form组件文本框字段修改 | The form component text box field is modified
19. 清空按钮添加确认框 | Empty the button to add a confirmation box
20. 表单组件中添加展示型文本,用来对字段说明 | Add presentation text to the form component to describe the field
21. 支持组件复制, 右键删除 | Support for component replication, right-click deletion

## 正在完成功能 | The functionality is being completed
* 丰富组件库组件 Enrich component library components
* 添加配置交互功能 Add configuration interaction
* 组件细分和代码优化 Component segmentation and code optimization
* 单元测试 Unit tests

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

## How to run the downloaded code ?

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
* [powerNice - 一款轻量级文档管理编辑器](http://h5.dooring.cn/powernice/views)
* [rc-drag - 基于react的轻量级拖拽缩放组件](https://github.com/MrXujiang/rc-drag)
* [Luckysheet - 强大的在线excel编辑器](https://github.com/mengshukeji/Luckysheet)
* [Blink - 一款自定义的生成故障艺术动画的组件库](https://github.com/MrXujiang/blink)
* [frontend-developer-roadmap | 一个能提高开发者工作效率的前端js库汇总](https://github.com/MrXujiang/frontend-developer-roadmap)
* [lucky-canvas 抽奖插件 | 一个支持H5, 微信小程序, React的抽奖插件](https://github.com/LuckDraw/lucky-canvas)

## 更新日志 | Update the log
1. 添加在线编程模块（在执行代码前先启动node服务 npm run server）
2. 添加客服机器人模块[chatbot-antd](https://www.npmjs.com/package/chatbot-antd)
3. 添加数据可视化模块
4. 添加表单定制模块


## 持续升级 | Continuous upgrades
正在升级1.5版本，敬请期待...

## 赞助 | Sponsored
开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://49.234.61.19/uploads/WechatIMG2_1742b586c3d.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication
微信：beautifulFront

<img src="http://49.234.61.19/uploads/code_1763cc23385.png" width="180px" />
