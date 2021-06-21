(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '+X2g': function(e, r, _) {
      'use strict';
      _.r(r);
      var a = _('q1tI'),
        n = _.n(a),
        o = _('TiL0'),
        d = _.n(o),
        i = _('6mIW'),
        E = _.n(i),
        l = Object(a.memo)(t => {
          var m = t.isTpl,
            s = t.borderColor,
            c = t.borderWidth,
            P = t.round,
            h = t.padding,
            x = t.content;
          return m
            ? n.a.createElement(
                'div',
                null,
                n.a.createElement('img', { style: { width: '100%' }, src: E.a, alt: '' }),
              )
            : n.a.createElement(
                'div',
                {
                  className: d.a.richTextWrap,
                  style: {
                    border: ''.concat(c, 'px solid ').concat(s),
                    borderRadius: P + 'px',
                    padding: h + 'px',
                  },
                },
                n.a.createElement('div', { dangerouslySetInnerHTML: { __html: x } }),
              );
        });
      r.default = l;
    },
    '6mIW': function(e, r, _) {
      e.exports = _.p + 'static/richText.ea0d0d5c.png';
    },
    TiL0: function(e, r, _) {
      e.exports = { richTextWrap: 'richTextWrap___1Yin4' };
    },
  },
]);

//# sourceMappingURL=17.js.map
