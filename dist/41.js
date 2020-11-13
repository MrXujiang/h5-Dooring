(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    'h/WE': function(_, n, a) {
      'use strict';
      a.r(n);
      var o = a('q1tI'),
        e = a.n(o),
        d = a('ovil'),
        s = a.n(d),
        E = Object(o.memo)(t => {
          var l = t.imgUrl,
            r = t.round,
            c = r === void 0 ? 0 : r,
            i = t.translate,
            m = t.align,
            g = t.titText,
            u = t.titFontSize,
            h = t.titColor,
            P = t.titFontWeight,
            R = t.subTitText,
            T = t.subTitFontSize,
            b = t.subTitColor,
            v = t.subTitFontWeight;
          return e.a.createElement(
            e.a.Fragment,
            null,
            t.isTpl &&
              e.a.createElement('div', null, e.a.createElement('img', { src: s.a, alt: '' })),
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
                      borderRadius: c,
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
                        textAlign: m,
                      },
                    },
                    e.a.createElement(
                      'div',
                      { style: { fontSize: u, color: h, fontWeight: +P } },
                      g,
                    ),
                    e.a.createElement(
                      'div',
                      { style: { fontSize: T, color: b, fontWeight: +v, lineHeight: 2.6 } },
                      R,
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
      n.default = E;
    },
    ovil: function(_, n, a) {
      _.exports = a.p + 'static/06-图片组件.d2dc592b.png';
    },
  },
]);

//# sourceMappingURL=41.js.map
