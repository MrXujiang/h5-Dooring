(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    368: function(t, a, s) {
      t.exports = s.p + 'assets/img/home.f76105db.png';
    },
    400: function(t, a, s) {
      'use strict';
      s.r(a);
      var e = s(42),
        r = Object(e.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a;
            return e('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              e('h1', { attrs: { id: '快速上手' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#快速上手' } }, [t._v('#')]),
                t._v(' 快速上手'),
              ]),
              t._v(' '),
              e('h2', { attrs: { id: '环境准备' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#环境准备' } }, [t._v('#')]),
                t._v(' 环境准备'),
              ]),
              t._v(' '),
              e('p', [
                t._v('首先得有 node，并确保 node 版本是 '),
                e('code', [t._v('10.13')]),
                t._v(' 或以上，（mac/win 下推荐使用 n 来管理 node 版本）'),
              ]),
              t._v(' '),
              e('div', { staticClass: 'language- extra-class' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [t._v('$ node-v\nv10.13.0\n')]),
                ]),
              ]),
              e('p', [t._v('注：推荐使用 yarn 管理 npm 依赖')]),
              t._v(' '),
              e('h2', { attrs: { id: '源码工程' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#源码工程' } }, [t._v('#')]),
                t._v(' 源码工程'),
              ]),
              t._v(' '),
              e('table', [
                e('thead', [
                  e('tr', [
                    e('th', [t._v('h5_plus(编辑器项目)')]),
                    t._v(' '),
                    e('th', [t._v('admin(管理后台)')]),
                    t._v(' '),
                    e('th', [t._v('Server(服务端项目)')]),
                  ]),
                ]),
                t._v(' '),
                e('tbody'),
              ]),
              t._v(' '),
              e('p', [
                t._v(
                  '本地拿到源码工程之后先安装对应依赖，在对应工程目录里执行 yarn 命令，等待依赖安装完成。',
                ),
              ]),
              t._v(' '),
              e('h2', { attrs: { id: '本地运行' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#本地运行' } }, [t._v('#')]),
                t._v(' 本地运行'),
              ]),
              t._v(' '),
              e('p', [
                t._v(
                  '1.首先本地启动 server，在 src 目录的 index.js 中修改跨域白名单，改为本地的 ip+端口，如http://192.167.0.3:8000',
                ),
              ]),
              t._v(' '),
              e('p', [
                t._v('2.其次本地启动 h5_plus,启动完毕在浏览器打开对应的启动地址即可查看，如下：'),
              ]),
              t._v(' '),
              e('img', { attrs: { src: s(368), alt: 'foo' } }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      a.default = r.exports;
    },
  },
]);
