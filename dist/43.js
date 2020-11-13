(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '7QEZ': function(n, a, _) {
      n.exports = _.p + 'static/14-视频.33b88ab5.png';
    },
    Xro1: function(n, a, _) {
      'use strict';
      _.r(a);
      var r = _('q1tI'),
        t = _.n(r),
        o = _('F4IQ'),
        c = _.n(o),
        E = _('7QEZ'),
        s = _.n(E),
        l = Object(r.memo)(e => {
          var m = e.poster,
            P = e.url,
            i = e.isTpl;
          return t.a.createElement(
            t.a.Fragment,
            null,
            i
              ? t.a.createElement('div', null, t.a.createElement('img', { src: s.a, alt: '' }))
              : t.a.createElement(
                  'div',
                  null,
                  t.a.createElement(
                    Player,
                    {
                      playsInline: !0,
                      poster: m[0].url,
                      src: P || 'https://gossv.vcg.com/cmsUploadVideo/creative/1移轴/7月移轴.mp4',
                    },
                    t.a.createElement(BigPlayButton, { position: 'center' }),
                  ),
                ),
          );
        });
      a.default = l;
    },
  },
]);

//# sourceMappingURL=43.js.map
