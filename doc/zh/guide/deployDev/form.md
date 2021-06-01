<!--
 * @Date: 2021-01-20 23:25:29
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-01-22 21:48:34
 * @FilePath: /github-h5-Dooring/doc/zh/guide/deployDev/deploy.md
-->

### 获取Form组件的值数据

Form表单组件在`editor`目录下`src/components/BasicShop/BasicComponents`位置. 

Form组件是`Dooring`的核心组件之一, 内部的值通过Form组件内部收集, 当然我们也可以暴露出来让其他交互或者组件消费(需要一定的二次开发), 关键代码如下:

``` js
req.post(`/vip/h5/form/post${location.search}`, {...fields, ...formData}).then(res => {
    if(type === 'link') {
    // 解析参数
    let isPre = content.indexOf('?') < 0;
    let query = {dr: Date.now(), from: urlParmas.tid};
    try {
        query = params ? {...JSON.parse(params), ...query} : query;
    }catch(err) {
        console.log(err)
    }

    // 跳转
    if(content.indexOf('http') > -1) {
        window.location.href = content + urlencode(query, isPre);
        return
    }

    history.push(`/m?tid=${content}&${urlencode(query)}`);
    }else if(type === 'modal') {
    setVisible(true);
    }else if(type === 'code') {
    eval(content);
    }
})
```

数据收集提交的核心代码在Form组件的第56-149行, 也就是`submit`方法. 表单组件收集到的数据统一存放在代码中的`formData`字段, 所以要想在其他地方获取用户表单填写的值, 我们只需要手动将`formData`传递出去, 或者挂载到全局(如window对象, localStorage, indexedDB等).