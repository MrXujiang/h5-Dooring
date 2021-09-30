<img src="http://cdn.dooring.cn/dr/logo.ff7fc6bb.png" alt="dooring" width=200>

H5-Dooring 仍在持续迭代, 如果有任何问题, 可以点击 [立即反馈](http://h5.dooring.cn/h5?tid=86C45FAE)。

## 问题汇总

#### 1. 本地部署后, win系统下如何启动server?

win下启动server, 需要将server/package.json的启动脚本修改为如下:

``` js
"scripts": {
    "start": "set NODE_ENV=development&& nodemon -w src --exec \"babel-node src\"",
    // ... 其他不变
  },
```

#### 2. 添加自定义组件, 需要改哪些文件?

dooring支持根据企业自身业务添加自定义组件, 目前2.0版本添加自定义组件只需要在 `editor/src/components/BasicShop` 对应的组件分类下添加组件即可, 最后在 `editor/src/components/BasicShop/template.ts`下对应位置添加组件描述即可生效. 同时, 为了保证发布后的H5页面保持最新, 需要在部署发布代码前在H5工程中对应的位置也同步一份组件代码. 后续会对这一流程做一定的优化.

#### 3. 本地如何调试对应的项目?

授权后, 本地安装项目依赖, 在调试编辑器(editor)项目或后台管理项目(admin)前, 需要先启动服务器工程(server), 在
`server/index.js` 代码中添加 editor / admin 项目的启动 `ip`, 这样就能跨域请求了, 同时需要修改 editor / admin 项目中 `utils/tools.ts` 下的api地址, 开发环境改为本地 `server` 项目的 `ip`.


如果在部署中遇到其他问题, 欢迎加我微信交流: `Mr_xuxiaoxi`
