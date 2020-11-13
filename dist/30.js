(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    'C+qP': function(e, a, _) {
      e.exports = { chartWrap: 'chartWrap___V0N8w', chartTitle: 'chartTitle___Rz1uP' };
    },
    yj5Z: function(e, a, _) {
      e.exports = _.p + 'static/chart.e0cb218c.png';
    },
    yrAH: function(e, a, _) {
      'use strict';
      _.r(a);
      var i = _('k1fw'),
        s = _('4ASp'),
        U = _.n(s),
        r = _('q1tI'),
        o = _.n(r),
        P = _('yj5Z'),
        u = _.n(P),
        p = _('C+qP'),
        m = _.n(p),
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
                var l = new s.Chart({
                    el: d.current || void 0,
                    pixelRatio: window.devicePixelRatio,
                  }),
                  D = E.map(c => Object(i.a)(Object(i.a)({}, c), {}, { value: Number(c.value) }));
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
                ? o.a.createElement('img', { src: u.a, alt: 'dooring chart' })
                : o.a.createElement('canvas', { ref: d }),
            )
          );
        };
      a.default = Object(r.memo)(h);
    },
  },
]);

//# sourceMappingURL=30.js.map
