(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    363: function(s, a, t) {
      s.exports = t.p + 'assets/img/down.75812dab.png';
    },
    400: function(s, a, t) {
      'use strict';
      t.r(a);
      var n = t(42),
        e = Object(n.a)(
          {},
          function() {
            var s = this,
              a = s.$createElement,
              n = s._self._c || a;
            return n('ContentSlotsDistributor', { attrs: { 'slot-key': s.$parent.slotKey } }, [
              n('h2', { attrs: { id: '下载源码' } }, [
                n('a', { staticClass: 'header-anchor', attrs: { href: '#下载源码' } }, [s._v('#')]),
                s._v(' 下载源码'),
              ]),
              s._v(' '),
              n('p', [
                s._v(
                  '目前Dooring已支持下载源码功能, 我们可以使用编辑器页面头部的下载按钮来实现下载用户搭建的H5源码.\n',
                ),
                n('img', { attrs: { src: t(363), alt: 'foo' } }),
              ]),
              s._v(' '),
              n('p', [
                s._v(
                  '源码下载之后是完整的React项目源代码, 开发人员可以直接根据自己的业务需求来二次编写代码来满足不同的业务需求.',
                ),
              ]),
              s._v(' '),
              n('p', [
                s._v('在拿到源码之后, 我们需要进入项目, 使用npm或者yarn安装项目依赖, 如下:'),
              ]),
              s._v(' '),
              n('div', { staticClass: 'language-bash extra-class' }, [
                n('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  n('code', [
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('npm')]),
                    s._v(' '),
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('install')]),
                    s._v('\n// 或者\n'),
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('yarn')]),
                    s._v('\n'),
                  ]),
                ]),
              ]),
              n('p', [s._v('之后我们就可以本地运行项目了:')]),
              s._v(' '),
              n('div', { staticClass: 'language-bash extra-class' }, [
                n('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  n('code', [
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('npm')]),
                    s._v(' start\n// 或者\n'),
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('yarn')]),
                    s._v(' start\n'),
                  ]),
                ]),
              ]),
              n('p', [
                s._v('因为源码工程采用'),
                n('code', [s._v('umi3.0')]),
                s._v('搭建, 所以代码配置可以参考'),
                n('code', [s._v('umi3.0')]),
                s._v('规范, 比如路由配置, '),
                n('code', [s._v('history')]),
                s._v('模式, 打包路径等, 二次开发完成之后, 我们可以执行:'),
              ]),
              s._v(' '),
              n('div', { staticClass: 'language-bash extra-class' }, [
                n('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  n('code', [
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('npm')]),
                    s._v(' run build\n// 或者\n'),
                    n('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('yarn')]),
                    s._v(' build\n'),
                  ]),
                ]),
              ]),
              n('p', [s._v('将项目打包成html, 以便部署到任何服务器中.')]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      a.default = e.exports;
    },
  },
]);
