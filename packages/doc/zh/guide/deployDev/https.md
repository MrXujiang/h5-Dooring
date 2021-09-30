<!--
 * @Date: 2021-01-20 23:25:29
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-01-22 21:48:34
 * @FilePath: /github-h5-Dooring/doc/zh/guide/deployDev/deploy.md
-->

目前**H5-Dooring**全面支持https部署, 具体方式方案如下.

### 前端工程

我们需要在前端工程中的`src/pages/document.ejs`中的`head`中添加如下代码:

``` html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

目的是强制将页面中HTTP请求转换为HTTPS.

### 服务器工程

#### 1. 申请SSL证书

#### 2. 生成 server.csr+server.key

#### 3. 通过证书链生成.pem文件

#### 在`server`中的`src/index.js`按如下方式修改

``` js
// 忽略部分无影响代码
import https from 'https';

// 你的ssl存放路径, 建议直接放在server目录下
const filePath = path.join(__dirname, '../ssl')

// 启动逻辑
async function start() {
    // https配置
    const httpsOptions = {
        key: fs.readFileSync(path.join(filePath, '3536084__doctopia.com.cn.key')),  //ssl文件路径
        cert: fs.readFileSync(path.join(filePath, '3536084__doctopia.com.cn.pem'))  //ssl文件路径
    };
	
	// https服务
    const server = https.createServer(httpsOptions, app.callback());

    const io = require('socket.io')(server);
	
	// 忽略其他无影响代码
	
	// https默认443, 这里我们可以走公共配置
	server.listen(443, () => {
	    console.log(`服务器地址:${config.staticPath}`)
	});
}

start()
```