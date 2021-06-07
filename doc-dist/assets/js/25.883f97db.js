(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    393: function(v, _, l) {
      'use strict';
      l.r(_);
      var i = l(42),
        n = Object(i.a)(
          {},
          function() {
            var v = this,
              _ = v.$createElement,
              l = v._self._c || _;
            return l('ContentSlotsDistributor', { attrs: { 'slot-key': v.$parent.slotKey } }, [
              l('p', [
                v._v('服务端主要是我们的'),
                l('code', [v._v('server')]),
                v._v('工程, 数据主要存放在'),
                l('code', [v._v('server/public')]),
                v._v('下, 具体数据指代含义我们接下来会详细介绍.'),
              ]),
              v._v(' '),
              l('ul', [
                l('li', [
                  v._v(
                    'bed 存放图片库中的分类图片, 私有化部署的用户可以直接在此处扩充图片(更好的建议是直接存到第三方图床)',
                  ),
                ]),
                v._v(' '),
                l('li', [v._v('h5 用户保存的h5数据文件, 一个页面对应一个json文件')]),
                v._v(' '),
                l('li', [
                  v._v('h5_tpl 平台保存的模版数据文件夹\n'),
                  l('ul', [
                    l('li', [v._v('xxx.json 模版页面文件')]),
                    v._v(' '),
                    l('li', [v._v('tpls.json 模版库中的模版列表数据, 可以手动清空')]),
                  ]),
                ]),
                v._v(' '),
                l('li', [
                  v._v('h5_vip 会员数据目录\n'),
                  l('ul', [
                    l('li', [v._v('form 会员制作的含表单页面的表单收集数据')]),
                    v._v(' '),
                    l('li', [v._v('view.json 用户浏览量数据')]),
                    v._v(' '),
                    l('li', [v._v('vip.json 会员列表数据')]),
                    v._v(' '),
                    l('li', [v._v('vipCard.json 会员订单数据(暂时无用, 可删除)')]),
                  ]),
                ]),
                v._v(' '),
                l('li', [v._v('image.json 图片库, 主要用来渲染页面的图片库数据')]),
                v._v(' '),
                l('li', [v._v('city.json 省市3级联动数据, 为表单组件提供数据支持')]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      _.default = n.exports;
    },
  },
]);
