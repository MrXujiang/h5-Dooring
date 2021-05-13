(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    359: function(t, r, a) {
      t.exports = a.p + 'assets/img/dynamic.15a5303a.png';
    },
    387: function(t, r, a) {
      'use strict';
      a.r(r);
      var n = a(42),
        i = Object(n.a)(
          {},
          function() {
            var t = this,
              r = t.$createElement,
              n = t._self._c || r;
            return n('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              n('h1', { attrs: { id: '组件动态加载' } }, [
                n('a', { staticClass: 'header-anchor', attrs: { href: '#组件动态加载' } }, [
                  t._v('#'),
                ]),
                t._v(' 组件动态加载'),
              ]),
              t._v(' '),
              n('p', [
                t._v(
                  '目前H5-Dooring的组件都是通过动态加载的方式引入，好处是我们在页面中只会加载我们需要的组件，不需要的组件不会被加载，这样可以提高页面加载的速度，这样做也会出现一些问题，比如一个长页面，配置了很多组件，那么一个页面加载过程可以会触发多次请求，目前还没有遇到性能问题，但后续会逐渐优化这个问题。',
                ),
              ]),
              t._v(' '),
              n('h2', { attrs: { id: 'umi3提供的dynamic' } }, [
                n('a', { staticClass: 'header-anchor', attrs: { href: '#umi3提供的dynamic' } }, [
                  t._v('#'),
                ]),
                t._v(' umi3提供的dynamic'),
              ]),
              t._v(' '),
              n('p', [
                t._v(
                  '目前组件的动态加载我们采用的umi的dynamic方案，基于它我们上层封装了一个组件动态加载器，原理如下：',
                ),
              ]),
              t._v(' '),
              n('img', { attrs: { src: a(359), alt: 'foo' } }),
              t._v(' '),
              n('p', [
                t._v('具体代码可以参考Dooring的Github地址：'),
                n(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/MrXujiang/h5-Dooring',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('https://github.com/MrXujiang/h5-Dooring'), n('OutboundLink')],
                  1,
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      r.default = i.exports;
    },
  },
]);
