(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    Fke4: function(n, A, a) {
      'use strict';
      a.r(A);
      var i = a('q1tI'),
        e = a.n(i),
        E = a('GCgG'),
        c = a.n(E),
        x = Object(i.memo)(t => {
          var P = t.bgColor,
            f = t.text,
            h = t.color,
            l = t.align,
            U = t.fontSize,
            o = t.height;
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
                  'footer',
                  {
                    style: {
                      backgroundColor: P,
                      color: h,
                      fontSize: U,
                      textAlign: l,
                      height: o,
                      lineHeight: o + 'px',
                    },
                  },
                  f,
                ),
              ),
          );
        });
      A.default = x;
    },
    GCgG: function(n, A) {
      n.exports =
        'data:image/png;base64,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';
    },
  },
]);

//# sourceMappingURL=39.js.map
