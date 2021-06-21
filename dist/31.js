(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    'fnf+': function(_, n, a) {
      _.exports = a.p + 'static/img.d2dc592b.png';
    },
    gcsX: function(_, n, a) {
      'use strict';
      a.r(n);
      var o = a('q1tI'),
        e = a.n(o),
        s = a('fnf+'),
        c = a.n(s),
        d = Object(o.memo)(t => {
          var l = t.imgUrl,
            r = t.round,
            m = r === void 0 ? 0 : r,
            i = t.translate,
            E = t.align,
            g = t.titText,
            u = t.titFontSize,
            h = t.titColor,
            f = t.titFontWeight,
            P = t.subTitText,
            R = t.subTitFontSize,
            T = t.subTitColor,
            b = t.subTitFontWeight;
          return e.a.createElement(
            e.a.Fragment,
            null,
            t.isTpl &&
              e.a.createElement('div', null, e.a.createElement('img', { src: c.a, alt: '' })),
            !t.isTpl &&
              e.a.createElement(
                'div',
                {
                  style: {
                    overflow: 'hidden',
                    position: 'absolute',
                    width: ''.concat(t.baseWidth, '%'),
                    height: ''.concat(t.baseHeight, '%'),
                    borderRadius: t.baseRadius,
                    transform: 'translate('
                      .concat(t.baseLeft, 'px,')
                      .concat(
                        t.baseTop,
                        `px) 
      scale(`,
                      )
                      .concat(
                        t.baseScale / 100,
                        `) 
      rotate(`,
                      )
                      .concat(t.baseRotate, 'deg)'),
                  },
                },
                e.a.createElement(
                  'div',
                  {
                    style: {
                      borderRadius: m,
                      width: '100%',
                      textAlign: 'center',
                      overflow: 'hidden',
                      position: 'relative',
                    },
                  },
                  e.a.createElement(
                    'div',
                    {
                      style: {
                        position: 'absolute',
                        width: '100%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        marginLeft: i && i[0],
                        marginTop: i && i[1],
                        textAlign: E,
                      },
                    },
                    e.a.createElement(
                      'div',
                      { style: { fontSize: u, color: h, fontWeight: +f } },
                      g,
                    ),
                    e.a.createElement(
                      'div',
                      { style: { fontSize: R, color: T, fontWeight: +b, lineHeight: 2.6 } },
                      P,
                    ),
                  ),
                  e.a.createElement('img', {
                    src: l && l[0].url,
                    alt: '',
                    style: { width: '100%' },
                  }),
                ),
              ),
          );
        });
      n.default = d;
    },
  },
]);

//# sourceMappingURL=31.js.map
