(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    ORdL: function(n, l, _) {
      n.exports = {
        topArea: 'topArea___113Ga',
        tx: 'tx___2WpJO',
        textArea: 'textArea___17Vtt',
        title: 'title___1a_xl',
        desc: 'desc___2Kdch',
        btnArea: 'btnArea____2czn',
        btn: 'btn___4aAdj',
        content: 'content___4J-lr',
      };
    },
    SPWw: function(n, l, _) {
      n.exports = _.p + 'static/zhuanlan.e2ec0bf0.png';
    },
    e7GY: function(n, l, _) {
      'use strict';
      _.r(l);
      var i = _('q1tI'),
        e = _.n(i),
        s = _('SPWw'),
        E = _.n(s),
        m = _('ORdL'),
        a = _.n(m),
        P = Object(i.memo)(t => {
          var x = t.title,
            R = t.desc,
            o = t.imgUrl,
            r = t.link,
            U = t.linkText,
            u = t.linkBg,
            c = t.titColor,
            d = t.titFontSize,
            g = t.bgColor,
            h = t.padding,
            v = t.radius,
            O = t.content,
            A = t.isTpl,
            f = () => {
              r && window.location.href.indexOf('editor') < 0 && (window.location.href = r);
            };
          return A
            ? e.a.createElement(
                'div',
                null,
                e.a.createElement('img', { style: { width: '100%' }, src: E.a, alt: '' }),
              )
            : e.a.createElement(
                'div',
                {
                  style: {
                    width: 'calc(100% - 32px)',
                    backgroundColor: g,
                    padding: h + 'px',
                    borderRadius: v + 'px',
                    margin: '16px auto',
                    boxShadow: '0 0 6px rgba(0,0,0, .1)',
                  },
                },
                e.a.createElement(
                  'div',
                  { className: a.a.topArea },
                  e.a.createElement(
                    'div',
                    { className: a.a.tx },
                    e.a.createElement('img', { src: o && o[0].url, alt: 'dooring' }),
                  ),
                  e.a.createElement(
                    'div',
                    { className: a.a.textArea },
                    e.a.createElement(
                      'div',
                      { className: a.a.title, style: { fontSize: d + 'px', color: c } },
                      x,
                    ),
                    e.a.createElement(
                      'div',
                      {
                        className: a.a.desc,
                        style: { fontSize: Math.ceil(d * 0.7) + 'px', color: c },
                      },
                      R,
                    ),
                  ),
                  e.a.createElement(
                    'div',
                    { className: a.a.btnArea },
                    e.a.createElement(
                      'span',
                      { className: a.a.btn, style: { backgroundColor: u }, onClick: f },
                      ' ',
                      U,
                      ' ',
                    ),
                  ),
                ),
                e.a.createElement('div', {
                  className: a.a.content,
                  dangerouslySetInnerHTML: { __html: O },
                }),
              );
        });
      l.default = P;
    },
  },
]);

//# sourceMappingURL=26.js.map
