(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    '3BnL': function(o, l, _) {
      o.exports = {
        topArea: 'topArea___2Z5LG',
        leftBox: 'leftBox___22MqF',
        rightBox: 'rightBox___2Gk02',
        title: 'title___2G1xu',
        desc: 'desc___22dgc',
      };
    },
    VlpU: function(o, l, _) {
      'use strict';
      _.r(l);
      var n = _('q1tI'),
        t = _.n(n),
        c = _('wLY3'),
        m = _.n(c),
        s = _('3BnL'),
        a = _.n(s),
        E = Object(n.memo)(e => {
          var r = e.title,
            P = e.desc,
            i = e.link,
            x = e.frontColor,
            U = e.titColor,
            g = e.round,
            d = e.imgUrl,
            R = e.bgColor,
            f = e.isTpl,
            u = () => {
              i && window.location.href.indexOf('editor') < 0 && (window.location.href = i);
            };
          return f
            ? t.a.createElement(
                'div',
                null,
                t.a.createElement('img', { style: { width: '100%' }, src: m.a, alt: '' }),
              )
            : t.a.createElement(
                'div',
                {
                  style: {
                    maxWidth: 'calc(100% - 8px)',
                    borderRadius: g + 'px',
                    margin: '4px auto',
                    overflow: 'hidden',
                    boxShadow: '0 0 6px rgba(0,0,0, .1)',
                  },
                },
                t.a.createElement(
                  'div',
                  {
                    className: a.a.topArea,
                    style: {
                      backgroundImage: 'linear-gradient(45deg, '.concat(x, ', ').concat(R, ')'),
                    },
                    onClick: u,
                  },
                  t.a.createElement(
                    'div',
                    { className: a.a.leftBox },
                    t.a.createElement('img', { src: d && d[0].url, alt: '' }),
                  ),
                  r &&
                    t.a.createElement(
                      'div',
                      { className: a.a.rightBox },
                      t.a.createElement('div', { className: a.a.title, style: { color: U } }, r),
                      t.a.createElement('div', { className: a.a.desc }, P),
                    ),
                ),
              );
        });
      l.default = E;
    },
    wLY3: function(o, l, _) {
      o.exports = _.p + 'static/cardLabel.d7448fd6.png';
    },
  },
]);

//# sourceMappingURL=22.js.map
