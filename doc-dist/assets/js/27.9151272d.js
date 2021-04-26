(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    396: function(t, n, e) {
      'use strict';
      e.r(n);
      var o = e(42),
        r = Object(o.a)(
          {},
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              e('h1', { attrs: { id: '保存json' } }, [
                e('a', { staticClass: 'header-anchor', attrs: { href: '#保存json' } }, [t._v('#')]),
                t._v(' 保存json'),
              ]),
              t._v(' '),
              e('p', [
                t._v(
                  '我们配置好H5页面之后，如果希望其他人观看，我们可以保存页面并发送链接。但是如果有多人协作的需求，比如一个H5页面可能由多个人完成，这个时候该怎么实现呢？基于已有的方案，我们可以采用socket实现多人协同编辑，但是成本比较大，所有这里我们提供了保存json的功能。',
                ),
              ]),
              t._v(' '),
              e('p', [
                t._v(
                  '我们可以将配置好的页面导出为json，发送给另一个人，这样另一个人通过导入该json文件可以实时看到当前的页面，这里还是依靠我们的页面渲染引擎viewEngine。实现思路也很简单，可以在github[',
                ),
                e(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/MrXujiang/h5-Dooring',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('https://github.com/MrXujiang/h5-Dooring'), e('OutboundLink')],
                  1,
                ),
                t._v(']上参考体验。'),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      n.default = r.exports;
    },
  },
]);
