(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    '5SZq': function(t, o, _) {
      t.exports = { mapWrap: 'mapWrap___3jw8o' };
    },
    'THX/': function(t, o, _) {
      'use strict';
      _.r(o);
      var E = _('q1tI'),
        a = _.n(E),
        n = _('Pv4R'),
        m = _('5SZq'),
        i = _.n(m),
        l = _('o4p9'),
        p = _.n(l),
        s = Object(E.memo)(e => {
          var P = e.ak,
            d = e.location,
            r = e.position,
            c = e.isTpl;
          return a.a.createElement(
            a.a.Fragment,
            null,
            c
              ? a.a.createElement(
                  'div',
                  null,
                  a.a.createElement('img', {
                    src: p.a,
                    style: { width: '100%' },
                    alt: 'h5-dooring音频播放组件',
                  }),
                )
              : a.a.createElement(
                  'div',
                  { className: i.a.mapWrap },
                  a.a.createElement(
                    n.a,
                    { akay: P },
                    a.a.createElement(
                      n.c,
                      { widget: ['NavigationControl'], zoom: 13 },
                      a.a.createElement(n.d, { animation: 2, position: { lng: r[0], lat: r[1] } }),
                      a.a.createElement(n.b, {
                        content: d,
                        position: { lng: r[0], lat: r[1] },
                        style: {
                          color: '#000',
                          borderColor: '#06c',
                          padding: '3px 10px',
                          borderRadius: '6px',
                        },
                      }),
                    ),
                  ),
                ),
          );
        });
      o.default = s;
    },
    o4p9: function(t, o, _) {
      t.exports = _.p + 'static/map@2x.09a4014c.png';
    },
  },
]);

//# sourceMappingURL=21.js.map
