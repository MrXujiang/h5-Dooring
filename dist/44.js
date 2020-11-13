(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '7QEZ': function(r, a, _) {
      r.exports = _.p + 'static/14-视频.33b88ab5.png';
    },
    fA9K: function(r, a, _) {
      'use strict';
      _.r(a);
      var e = _('q1tI'),
        t = _.n(e),
        n = _('udzn'),
        d = _.n(n),
        o = _('z0Ys'),
        R = _.n(o),
        l = _('7QEZ'),
        m = _.n(l),
        P = Object(e.memo)(E => {
          var s = E.poster,
            i = E.url,
            U = E.isTpl;
          return t.a.createElement(
            t.a.Fragment,
            null,
            U
              ? t.a.createElement('div', null, t.a.createElement('img', { src: m.a, alt: '' }))
              : t.a.createElement(
                  'div',
                  null,
                  t.a.createElement(
                    n.Player,
                    {
                      playsInline: !0,
                      poster: s[0].url,
                      src: i || 'https://gossv.vcg.com/cmsUploadVideo/creative/1移轴/7月移轴.mp4',
                    },
                    t.a.createElement(n.BigPlayButton, { position: 'center' }),
                  ),
                ),
          );
        });
      a.default = P;
    },
  },
]);

//# sourceMappingURL=44.js.map
