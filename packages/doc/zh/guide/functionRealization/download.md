<!--
 * @Date: 2021-01-17 14:26:00
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-05-17 21:32:58
 * @FilePath: /github-h5-Dooring/doc/zh/guide/functionRealization/saveJson.md
-->
## 下载源码
目前Dooring已支持下载源码功能, 我们可以使用编辑器页面头部的下载按钮来实现下载用户搭建的H5源码.
<img src="../../../img/functionRealization/down.png" alt="foo">

源码下载之后是完整的React项目源代码, 开发人员可以直接根据自己的业务需求来二次编写代码来满足不同的业务需求.

在拿到源码之后, 我们需要进入项目, 使用npm或者yarn安装项目依赖, 如下:

``` bash
npm install
// 或者
yarn
```

之后我们就可以本地运行项目了:

``` bash
npm start
// 或者
yarn start
```

因为源码工程采用`umi3.0`搭建, 所以代码配置可以参考`umi3.0`规范, 比如路由配置, `history`模式, 打包路径等, 二次开发完成之后, 我们可以执行:
``` bash
npm run build
// 或者
yarn build
```
将项目打包成html, 以便部署到任何服务器中.