(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    '+yBZ': function(E, a, e) {
      'use strict';
      e.r(a);
      var n = e('q1tI'),
        o = e.n(n),
        i = Object(n.memo)(t => {
          var r = t.qrcode,
            _ = t.text,
            l = t.color,
            d = t.fontSize,
            c = d === void 0 ? 14 : d;
          return o.a.createElement(
            'div',
            { style: { width: '240px', margin: '16px auto' } },
            o.a.createElement('img', { src: r && r[0].url, alt: _, style: { width: '100%' } }),
            o.a.createElement(
              'div',
              { style: { textAlign: 'center', color: l, fontSize: c, paddingTop: '8px' } },
              _,
            ),
          );
        });
      a.default = i;
    },
  },
]);

//# sourceMappingURL=48.js.map
