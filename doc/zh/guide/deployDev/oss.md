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

### 如何接入任何第三方上传服务

首先我们的上传组件`Upload`使用内部的服务接口来实现上传功能, 所以需要给组件的`action`赋值, 如下:

``` jsx
<Upload
  fileList={fileList}
  onPreview={this.handlePreview}
  onChange={this.handleChange}
  onRemove={this.handleRemove}
  name="file"
  listType="picture-card"
  className={styles.avatarUploader}
  action={sdk_upload_api || action}
  withCredentials={withCredentials}
  headers={{
    'x-requested-with': localStorage.getItem('user') || '',
    'authorization': localStorage.getItem('token') || '',
    ...headers
  }}
  beforeUpload={this.handleBeforeUpload}
>
  {fileList.length >= maxLen ? null : uploadButton}
</Upload>
```
如果需要集成第三方oss, 如七牛云, 阿里oss等, 我们需要将`Upload`组件的`action`属性设置为空字符串, 其次删除`onChange`属性, 上传操作统一在`beforeUpload`中进行. 案例如下:

``` jsx
<Upload
    fileList={fileList}
    action=""
    onPreview={this.handlePreview}
    onRemove={this.onRemove}
    name="file"
    listType="picture-card"
    className={styles.avatarUploader}
    headers={{...headers}}
    beforeUpload={this.handleBeforeUpload}
>
    {fileList.length >= maxLen ? null : uploadButton}
</Upload>
```
自定义上传的核心逻辑放在了`beforeUpload`上. 我们具体看看`beforeUpload`这个方法如何实现.

``` js
handleBeforeUpload = (file:RcFile) => {
    // 1. 限制图片类型
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif';
    if (!isJpgOrPng) {
      message.error('只能上传格式为jpeg/png/gif的图片');
    }
    // 限制上传文件大小
    const isLt3M = file.size / 1024 / 1024 < 3;
    if (!isLt3M) {
      message.error('图片必须小于3MB!');
    }
    if(isJpgOrPng && isLt3M) {
      // 3. 正常上传逻辑
      const fileName = file.name
      // 3.1 调用oss接口, 将图片上传oss
      // 3.2 将接口返回的url信息, 组装成fileList数据结构, 并更新state
      const fileList = [{ uid, name: fileName, status: 'done', url }];
        this.setState({
          curImgUrl: url,
          fileList,
        })
      // 3.3 将数据传给上层保存
      this.props.onChange && this.props.onChange(fileList)
    }
    return isJpgOrPng && isLt3M;
  }
```

