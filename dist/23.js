(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    EwGo: function(o, l, _) {
      o.exports = {
        topArea: 'topArea___3GJbu',
        leftBox: 'leftBox___1wGYR',
        rightBox: 'rightBox___WDnwI',
        label: 'label___12xxU',
        time: 'time___3gUOc',
        ft: 'ft___3_yRp',
      };
    },
    Fsdy: function(o, l, _) {
      o.exports = _.p + 'static/cunpos.ea850aa6.png';
    },
    gHzm: function(o, l, _) {
      'use strict';
      _.r(l);
      var n = _('q1tI'),
        e = _.n(n),
        s = _('Fsdy'),
        m = _.n(s),
        E = _('EwGo'),
        t = _.n(E),
        d = Object(n.memo)(a => {
          var c = a.money,
            P = a.ifText,
            u = a.desc,
            x = a.dealTime,
            i = a.link,
            r = a.bgColor,
            R = a.isTpl,
            U = () => {
              i && window.location.href.indexOf('editor') < 0 && (window.location.href = i);
            };
          return R
            ? e.a.createElement(
                'div',
                null,
                e.a.createElement('img', { style: { width: '100%' }, src: m.a, alt: '' }),
              )
            : e.a.createElement(
                'div',
                {
                  style: {
                    width: 'calc(100% - 32px)',
                    borderRadius: '6px',
                    margin: '16px auto',
                    overflow: 'hidden',
                    boxShadow: '0 0 6px rgba(0,0,0, .1)',
                  },
                },
                e.a.createElement(
                  'div',
                  { className: t.a.topArea, style: { backgroundColor: r }, onClick: U },
                  e.a.createElement(
                    'div',
                    { className: t.a.leftBox },
                    e.a.createElement('span', null, c),
                    '元优惠券',
                  ),
                  e.a.createElement(
                    'div',
                    { className: t.a.rightBox },
                    e.a.createElement('div', { className: t.a.label, style: { color: r } }, P),
                    e.a.createElement('div', { className: t.a.time }, x),
                  ),
                ),
                e.a.createElement('div', { className: t.a.ft }, u),
              );
        });
      l.default = d;
    },
  },
]);

//# sourceMappingURL=23.js.map
