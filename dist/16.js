(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    'CO/p': function(n, i, a) {
      n.exports = {
        list: 'list___1d2Hk',
        sourceList: 'sourceList___3pjcQ',
        sourceItem: 'sourceItem___Pdzeu',
        content: 'content___Eou_U',
        tit: 'tit___2GsKZ',
      };
    },
    L8SK: function(n, i, a) {
      'use strict';
      a.r(i);
      var E = a('q1tI'),
        t = a.n(E),
        c = a('CO/p'),
        s = a.n(c),
        _ = a('biz8'),
        l = a.n(_),
        m = Object(E.memo)(e => {
          var u = e.round,
            R = e.sourceData,
            A = e.imgSize,
            r = e.fontSize,
            U = e.color;
          return t.a.createElement(
            t.a.Fragment,
            null,
            e.isTpl &&
              t.a.createElement('div', null, t.a.createElement('img', { src: l.a, alt: '' })),
            !e.isTpl &&
              t.a.createElement(
                'div',
                {
                  className: s.a.list,
                  style: {
                    overflow: 'hidden',
                    position: 'absolute',
                    width: ''.concat(e.baseWidth, '%'),
                    height: ''.concat(e.baseHeight, '%'),
                    borderRadius: e.baseRadius,
                    transform: 'translate('
                      .concat(e.baseLeft, 'px,')
                      .concat(
                        e.baseTop,
                        `px) 
      scale(`,
                      )
                      .concat(
                        e.baseScale / 100,
                        `) 
      rotate(`,
                      )
                      .concat(e.baseRotate, 'deg)'),
                  },
                },
                t.a.createElement(
                  'div',
                  { className: s.a.sourceList },
                  R.map((o, g) =>
                    t.a.createElement(
                      'div',
                      { className: s.a.sourceItem, key: g },
                      t.a.createElement(
                        'div',
                        { className: s.a.imgWrap },
                        t.a.createElement('img', {
                          src: o.imgUrl[0] ? o.imgUrl[0].url : '',
                          alt: o.desc,
                          style: {
                            width: parseFloat(A),
                            height: A + 'px',
                            objectFit: 'cover',
                            borderRadius: u,
                          },
                        }),
                      ),
                      t.a.createElement(
                        'div',
                        { className: s.a.content },
                        t.a.createElement(
                          'a',
                          {
                            className: s.a.tit,
                            style: { fontSize: r, color: U },
                            href: o.link ? o.link : '#',
                          },
                          o.title,
                          t.a.createElement(
                            'div',
                            {
                              className: s.a.desc,
                              style: { fontSize: r * 0.8, color: 'rgba(0,0,0, .3)' },
                            },
                            o.desc,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
          );
        });
      i.default = m;
    },
    biz8: function(n, i) {
      n.exports =
        'data:image/png;base64,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';
    },
  },
]);

//# sourceMappingURL=16.js.map
