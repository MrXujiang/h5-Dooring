(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    '9jDt': function(o, s, a) {
      'use strict';
      a.r(s);
      var l = a('q1tI'),
        e = a.n(l),
        i = a('MHYl'),
        t = a.n(i),
        m = Object(l.memo)(r => {
          var E = r.round,
            d = r.sourceData,
            n = r.imgSize,
            c = r.fontSize,
            u = r.color;
          return e.a.createElement(
            'div',
            { className: t.a.list },
            e.a.createElement(
              'div',
              { className: t.a.sourceList },
              d.map((_, P) =>
                e.a.createElement(
                  'div',
                  { className: t.a.sourceItem, key: P },
                  e.a.createElement(
                    'div',
                    { className: t.a.imgWrap },
                    e.a.createElement('img', {
                      src: _.imgUrl[0]
                        ? _.imgUrl[0].url
                        : 'http://io.nainor.com/uploads/01_173e15d3493.png',
                      alt: _.desc,
                      style: {
                        width: parseFloat(n),
                        height: n,
                        objectFit: 'cover',
                        borderRadius: E,
                      },
                    }),
                  ),
                  e.a.createElement(
                    'div',
                    { className: t.a.content },
                    e.a.createElement(
                      'a',
                      {
                        className: t.a.tit,
                        style: { fontSize: c, color: u },
                        href: _.link ? _.link : '#',
                      },
                      _.title,
                      e.a.createElement(
                        'div',
                        {
                          className: t.a.desc,
                          style: { fontSize: c * 0.8, color: 'rgba(0,0,0, .3)' },
                        },
                        _.desc,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      s.default = m;
    },
    MHYl: function(o, s, a) {
      o.exports = {
        list: 'list___2mIMg',
        sourceList: 'sourceList___k-Wih',
        sourceItem: 'sourceItem___1UVVt',
        content: 'content___1w3Yl',
        tit: 'tit___jWzpM',
      };
    },
  },
]);

//# sourceMappingURL=35.js.map
