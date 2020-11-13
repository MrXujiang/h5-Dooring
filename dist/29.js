(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    F7B3: function(_, n, e) {
      _.exports = { chartWrap: 'chartWrap___2C8gc', chartTitle: 'chartTitle___syciX' };
    },
    ugTi: function(_, n, e) {
      _.exports = e.p + 'static/area.cd1c6849.png';
    },
    xG3n: function(_, n, e) {
      'use strict';
      e.r(n);
      var m = e('k1fw'),
        E = e('4ASp'),
        x = e.n(E),
        r = e('q1tI'),
        o = e.n(r),
        P = e('ugTi'),
        v = e.n(P),
        O = e('F7B3'),
        u = e.n(O),
        R = a => {
          var l = a.isTpl,
            d = a.data,
            h = a.color,
            D = a.size,
            U = a.paddingTop,
            M = a.title,
            c = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(() => {
              if (!l) {
                var t = new E.Chart({
                    el: c.current || void 0,
                    pixelRatio: window.devicePixelRatio,
                  }),
                  T = d.map(i =>
                    Object(m.a)(Object(m.a)({}, i), {}, { value: Number(i.value), a: '1' }),
                  );
                t.source(T, {
                  percent: {
                    formatter: function(f) {
                      return f * 100 + '%';
                    },
                  },
                }),
                  t.tooltip({ showCrosshairs: !0 }),
                  t.scale({ name: { range: [0, 1] }, value: { tickCount: 5, min: 0 } }),
                  t.axis('name', {
                    label: function(f, p, g) {
                      var s = {};
                      return (
                        p === 0 ? (s.textAlign = 'left') : p === g - 1 && (s.textAlign = 'right'), s
                      );
                    },
                  }),
                  t.area().position('name*value'),
                  t.line().position('name*value'),
                  t.render();
              }
            }, [d, l]),
            o.a.createElement(
              'div',
              { className: u.a.chartWrap },
              o.a.createElement(
                'div',
                { className: u.a.chartTitle, style: { color: h, fontSize: D, paddingTop: U } },
                M,
              ),
              l
                ? o.a.createElement('img', { src: v.a, alt: 'dooring chart' })
                : o.a.createElement('canvas', { ref: c }),
            )
          );
        };
      n.default = Object(r.memo)(R);
    },
  },
]);

//# sourceMappingURL=29.js.map
