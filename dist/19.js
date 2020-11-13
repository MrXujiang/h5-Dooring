(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    NsSi: function(e, a, _) {
      e.exports = { chartWrap: 'chartWrap___2yXmG', chartTitle: 'chartTitle___3q-tn' };
    },
    tQR0: function(e, a, _) {
      'use strict';
      _.r(a);
      var i = _('k1fw'),
        s = _('4ASp'),
        U = _.n(s),
        r = _('q1tI'),
        n = _.n(r),
        u = _('yj5Z'),
        p = _.n(u),
        P = _('NsSi'),
        m = _.n(P),
        h = t => {
          var o = t.isTpl,
            E = t.data,
            v = t.color,
            f = t.size,
            O = t.paddingTop,
            R = t.title,
            d = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(() => {
              if (!o) {
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
            }, [E, o]),
            n.a.createElement(
              'div',
              { className: m.a.chartWrap },
              n.a.createElement(
                'div',
                { className: m.a.chartTitle, style: { color: v, fontSize: f, paddingTop: O } },
                R,
              ),
              o
                ? n.a.createElement('img', { src: p.a, alt: 'dooring chart' })
                : n.a.createElement('canvas', { ref: d }),
            )
          );
        };
      a.default = Object(r.memo)(h);
    },
    yj5Z: function(e, a, _) {
      e.exports = _.p + 'static/chart.e0cb218c.png';
    },
  },
]);

//# sourceMappingURL=19.js.map
