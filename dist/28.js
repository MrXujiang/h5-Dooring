(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    Grdd: function(e, a, _) {
      'use strict';
      _.r(a);
      var s = _('k1fw'),
        i = _('4ASp'),
        U = _.n(i),
        r = _('q1tI'),
        o = _.n(r),
        u = _('yj5Z'),
        p = _.n(u),
        P = _('qTsH'),
        m = _.n(P),
        h = t => {
          var n = t.isTpl,
            E = t.data,
            v = t.color,
            f = t.size,
            O = t.paddingTop,
            R = t.title,
            d = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(() => {
              if (!n) {
                var l = new i.Chart({
                    el: d.current || void 0,
                    pixelRatio: window.devicePixelRatio,
                  }),
                  D = E.map(c => Object(s.a)(Object(s.a)({}, c), {}, { value: Number(c.value) }));
                l.source(D),
                  l
                    .interval()
                    .position('name*value')
                    .color('name'),
                  l.render();
              }
            }, [E, n]),
            o.a.createElement(
              'div',
              { className: m.a.chartWrap },
              o.a.createElement(
                'div',
                { className: m.a.chartTitle, style: { color: v, fontSize: f, paddingTop: O } },
                R,
              ),
              n
                ? o.a.createElement('img', { src: p.a, alt: 'dooring chart' })
                : o.a.createElement('canvas', { ref: d }),
            )
          );
        };
      a.default = Object(r.memo)(h);
    },
    qTsH: function(e, a, _) {
      e.exports = { chartWrap: 'chartWrap___2I09I', chartTitle: 'chartTitle___BJ7m9' };
    },
    yj5Z: function(e, a, _) {
      e.exports = _.p + 'static/chart.e0cb218c.png';
    },
  },
]);

//# sourceMappingURL=28.js.map
