<!--
 * @Date: 2021-01-20 23:25:29
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-01-22 21:48:34
 * @FilePath: /github-h5-Dooring/doc/zh/guide/deployDev/deploy.md
-->

**H5-Dooring**全面支持第三方对象存储服务, 我们以七牛云对象存储为例.

### 前端上传文件到oss
首先我们需要在第三方对象储存服务中配置对应的服务和域名. 其次安装对应的sdk, 如七牛云sdk:

``` js
import * as qiniu from 'qiniu-js';
```

其次我们修改`h5_plus`工程的`Upload`组件, 详细地址为`src/core/FormComponents/Upload`.

修改内容如下:

``` js
const fileName = file.name
const suffix = '自定义文件后缀'
const putExtra = {
    fname: fileName,
    params: {}
}
const uid = +new Date() + uuid(16, 8) + suffix
// 使用七牛云上传api, 前提是提前在前端拿到对应的ticket, 可以通过请求的方式获取
const observe = qiniu.upload(file, uid, this.state.qnToken.ticket, putExtra, {})
observe.subscribe(() => {}, null, (res) => {
    // 拼接路径
    const url = `${this.state.qnToken.domain}/${res.key}`;
    // 存库
    const fileList = [{ uid, name: fileName, status: 'done', url }];
    this.setState({
        curImgUrl: url,
        fileList
    })
    this.props.onChange && this.props.onChange(fileList)
})
```

其他oss服务类似, 如果不清楚如何配置, 可以在[H5-Dooring官网](http://h5.dooring.cn/)中找到我们.

