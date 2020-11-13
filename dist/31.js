(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    '/oEu': function(a, n, t) {
      a.exports = { chartWrap: 'chartWrap___1z6B5', chartTitle: 'chartTitle___3z8R_' };
    },
    lnB6: function(a, n, t) {
      'use strict';
      t.r(n);
      var m = t('k1fw'),
        E = t('4ASp'),
        g = t.n(E),
        o = t('q1tI'),
        l = t.n(o),
        c = t('qgaN'),
        P = t.n(c),
        v = t('/oEu'),
        d = t.n(v),
        h = e => {
          var i = e.isTpl,
            u = e.data,
            O = e.color,
            R = e.size,
            D = e.paddingTop,
            M = e.title,
            f = Object(o.useRef)(null);
          return (
            Object(o.useEffect)(() => {
              if (!i) {
                var _ = new E.Chart({
                    el: f.current || void 0,
                    pixelRatio: window.devicePixelRatio,
                  }),
                  U = u.map(r => Object(m.a)(Object(m.a)({}, r), {}, { value: Number(r.value) }));
                _.source(U, { value: { tickCount: 5, min: 0 } }),
                  _.tooltip({ showCrosshairs: !0, showItemMarker: !1 }),
                  _.axis('name', {
                    label: function(x, p, T) {
                      var s = {};
                      return (
                        p === 0 ? (s.textAlign = 'left') : p === T - 1 && (s.textAlign = 'right'), s
                      );
                    },
                  }),
                  _.line().position('name*value'),
                  _.point()
                    .position('name*value')
                    .style({ stroke: '#fff', lineWidth: 1 }),
                  _.render();
              }
            }, [u, i]),
            l.a.createElement(
              'div',
              { className: d.a.chartWrap },
              l.a.createElement(
                'div',
                { className: d.a.chartTitle, style: { color: O, fontSize: R, paddingTop: D } },
                M,
              ),
              i
                ? l.a.createElement('img', { src: P.a, alt: 'dooring chart' })
                : l.a.createElement('canvas', { ref: f }),
            )
          );
        };
      n.default = Object(o.memo)(h);
    },
    qgaN: function(a, n, t) {
      a.exports = t.p + 'static/line.95d1bfba.png';
    },
  },
]);

//# sourceMappingURL=31.js.map
