(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    Qivd: function(_, n, t) {
      'use strict';
      t.r(n);
      var m = t('k1fw'),
        E = t('4ASp'),
        x = t.n(E),
        r = t('q1tI'),
        o = t.n(r),
        v = t('ugTi'),
        P = t.n(v),
        O = t('dntl'),
        u = t.n(O),
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
                var e = new E.Chart({
                    el: c.current || void 0,
                    pixelRatio: window.devicePixelRatio,
                  }),
                  T = d.map(i =>
                    Object(m.a)(Object(m.a)({}, i), {}, { value: Number(i.value), a: '1' }),
                  );
                e.source(T, {
                  percent: {
                    formatter: function(f) {
                      return f * 100 + '%';
                    },
                  },
                }),
                  e.tooltip({ showCrosshairs: !0 }),
                  e.scale({ name: { range: [0, 1] }, value: { tickCount: 5, min: 0 } }),
                  e.axis('name', {
                    label: function(f, p, g) {
                      var s = {};
                      return (
                        p === 0 ? (s.textAlign = 'left') : p === g - 1 && (s.textAlign = 'right'), s
                      );
                    },
                  }),
                  e.area().position('name*value'),
                  e.line().position('name*value'),
                  e.render();
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
                ? o.a.createElement('img', { src: P.a, alt: 'dooring chart' })
                : o.a.createElement('canvas', { ref: c }),
            )
          );
        };
      n.default = Object(r.memo)(R);
    },
    dntl: function(_, n, t) {
      _.exports = { chartWrap: 'chartWrap___e3OHZ', chartTitle: 'chartTitle___wOnuc' };
    },
    ugTi: function(_, n, t) {
      _.exports = t.p + 'static/area.cd1c6849.png';
    },
  },
]);

//# sourceMappingURL=18.js.map
