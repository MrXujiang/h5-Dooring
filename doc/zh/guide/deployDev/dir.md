<!--
 * @Date: 2021-01-20 23:25:29
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-01-22 21:48:34
 * @FilePath: /github-h5-Dooring/doc/zh/guide/deployDev/deploy.md
-->

服务端主要是我们的`server`工程, 数据主要存放在`server/public`下, 具体数据指代含义我们接下来会详细介绍.

- bed 存放图片库中的分类图片, 私有化部署的用户可以直接在此处扩充图片(更好的建议是直接存到第三方图床)
- h5 用户保存的 h5 数据文件, 一个页面对应一个 json 文件
- h5_tpl 平台保存的模版数据文件夹
  - xxx.json 模版页面文件
  - tpls.json 模版库中的模版列表数据, 可以手动清空
- h5_vip 会员数据目录
  - form 会员制作的含表单页面的表单收集数据
  - view.json 用户浏览量数据
  - vip.json 会员列表数据
  - vipCard.json 会员订单数据(暂时无用, 可删除)
- image.json 图片库, 主要用来渲染页面的图片库数据
- city.json 省市 3 级联动数据, 为表单组件提供数据支持
