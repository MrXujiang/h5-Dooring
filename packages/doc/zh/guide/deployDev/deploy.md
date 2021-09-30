<!--
 * @Date: 2021-01-20 23:25:29
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-01-22 21:48:34
 * @FilePath: /github-h5-Dooring/doc/zh/guide/deployDev/deploy.md
-->

私有化部署需要获取4个核心项目包, 包括
- H5编辑器(h5_plus) 
- H5基座(h5)
- Dooring管理后台(Dooring-Admin)
- 服务端项目(Server)

获取以上四个核心源码工程需要满足商业授权协议, 具体可联系[徐小夕](http://h5.dooring.cn/uploads/WechatIMG3_1758e9753e2.jpeg)

### 部署架构图

<img src="../../../img/common/deploy.png" alt="H5-dooring部署">

部署流程如下:

1. 下载4个源码工程, 安装依赖(npm install 或 yarn)
2. 打包3个前端工程至`server`的static目录下
3. 在`server`下本地运行 `yarn start` 或 `npm start` 启动服务端进行本地测试
4. 打包服务端代码, `yarn build` 生成 `dist` 目录, 建议使用 `pm2` 做`nodejs`服务的负载均衡, 运行 `pm2 start dist/index.js`启动生产环境代码

也可以将以上步骤集成到gitlab等CI, CD服务中, 进行自动化打包发布, 或者采用`docker`进行容器化部署.

### 步骤3.4详细流程

#### 1. 安装项目环境

服务器需提前安装node和pm2, 将本项目上传至服务器指定的目录(如/www/activity), 进入项目目录, 执行:
``` 
npm install
```

#### 2. 修改项目域名

进入`./src/config/index.js`, 修改`staticPath`变量为当前服务器域名/ip, 如`http://xxx.com`或`http://xxx.com:8080`(如非80端口)

#### 3. 编译项目

执行`npm run build`编译项目, 生成`dist`目录

#### 4. 运行项目
在项目根目录执行 `pm2 start dist/index.js`启动项目
