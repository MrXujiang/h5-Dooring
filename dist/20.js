(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    KoHC: function(a, n, t) {
      'use strict';
      t.r(n);
      var m = t('k1fw'),
        E = t('4ASp'),
        T = t.n(E),
        o = t('q1tI'),
        i = t.n(o),
        v = t('qgaN'),
        c = t.n(v),
        P = t('vH7d'),
        d = t.n(P),
        h = e => {
          var l = e.isTpl,
            u = e.data,
            O = e.color,
            R = e.size,
            D = e.paddingTop,
            M = e.title,
            f = Object(o.useRef)(null);
          return (
            Object(o.useEffect)(() => {
              if (!l) {
                var _ = new E.Chart({
                    el: f.current || void 0,
                    pixelRatio: window.devicePixelRatio,
                  }),
                  U = u.map(r => Object(m.a)(Object(m.a)({}, r), {}, { value: Number(r.value) }));
                _.source(U, { value: { tickCount: 5, min: 0 } }),
                  _.tooltip({ showCrosshairs: !0, showItemMarker: !1 }),
                  _.axis('name', {
                    label: function(x, p, g) {
                      var s = {};
                      return (
                        p === 0 ? (s.textAlign = 'left') : p === g - 1 && (s.textAlign = 'right'), s
                      );
                    },
                  }),
                  _.line().position('name*value'),
                  _.point()
                    .position('name*value')
                    .style({ stroke: '#fff', lineWidth: 1 }),
                  _.render();
              }
            }, [u, l]),
            i.a.createElement(
              'div',
              { className: d.a.chartWrap },
              i.a.createElement(
                'div',
                { className: d.a.chartTitle, style: { color: O, fontSize: R, paddingTop: D } },
                M,
              ),
              l
                ? i.a.createElement('img', { src: c.a, alt: 'dooring chart' })
                : i.a.createElement('canvas', { ref: f }),
            )
          );
        };
      n.default = Object(o.memo)(h);
    },
    qgaN: function(a, n, t) {
      a.exports = t.p + 'static/line.95d1bfba.png';
    },
    vH7d: function(a, n, t) {
      a.exports = { chartWrap: 'chartWrap___kuajX', chartTitle: 'chartTitle___3oa5g' };
    },
  },
]);

//# sourceMappingURL=20.js.map
