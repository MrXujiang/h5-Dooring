# 快速上手

## 从零搭建一个H5表单页面

<iframe src="//player.bilibili.com/player.html?aid=715343955&bvid=BV1QQ4y1Z725&cid=332145157&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%;height: 420px; margin-top: 20px"> </iframe>


## 环境准备

首先得有 node，并确保 node 版本是 `10.13` 或以上，（mac/win 下推荐使用 n 来管理 node 版本）

```
$ node-v
v10.13.0
```

注：推荐使用 yarn 管理 npm 依赖

## 源码工程

| h5_plus(编辑器项目) | admin(管理后台) | Server(服务端项目) |
| ------------------- | --------------- | ------------------ |


本地拿到源码工程之后先安装对应依赖，在对应工程目录里执行 yarn 命令，等待依赖安装完成。

## 本地运行

1.首先本地启动 server，在 src 目录的 index.js 中修改跨域白名单，改为本地的 ip+端口，如http://192.167.0.3:8000

2.其次本地启动 h5_plus,启动完毕在浏览器打开对应的启动地址即可查看，如下：

<img src="../../img/common/home.png" alt="foo">

## 项目路径说明

- `/h5_plus` H5编辑器项目
- `/iH5` Dooring后台管理系统
- `/doc` Dooring文档
