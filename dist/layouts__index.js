(window.webpackJsonp = window.webpackJsonp || []).push([
  [139],
  {
    '+ego': function(j, u, t) {
      'use strict';
      t.r(u),
        t.d(u, 'dooringContext', function() {
          return E;
        }),
        t.d(u, 'default', function() {
          return p;
        });
      var T = t('+L6B'),
        P = t('2/Rp'),
        _ = t('tJVT'),
        a = t('q1tI'),
        e = t.n(a),
        l = t('YRY9'),
        R = t('CkJw');
      l.b.push(
        { text: '我是机器人', reg: '你是谁' },
        {
          text: e.a.createElement(
            'div',
            null,
            e.a.createElement('a', { href: 'https://github.com/MrXujiang' }, '@徐小夕'),
            e.a.createElement('a', { href: 'https://github.com/yehuozhili' }, '@yehuozhili'),
            e.a.createElement(
              'a',
              { href: 'https://github.com/zhangjinlongll' },
              '@zhangjinlongll',
            ),
          ),
          useReg: /(.*?)作者是谁(.*?)/,
        },
      );
      var E = Object(a.createContext)({ theme: 'h5', setTheme: () => {} });
      function p(f) {
        var v = f.children,
          b = Object(a.useState)(!1),
          m = Object(_.a)(b, 2),
          i = m[0],
          s = m[1],
          U = Object(a.useState)(0),
          d = Object(_.a)(U, 2),
          o = d[0],
          n = d[1],
          x = Object(a.useCallback)(r => {
            setTimeout(() => {
              var g = Object(l.a)(r);
              g && y(C => [...C, { isUser: !1, text: g }]);
            }, 500);
          }, []),
          O = Object(l.c)(
            i,
            x,
            {
              onOk: () => {
                s(!1), n(0);
              },
              onCancel: () => {
                s(!1), n(0);
              },
              title: 'h5-Dooring机器人客服',
              width: 400,
            },
            {},
            e.a.createElement(
              'div',
              null,
              'welcome!欢迎使用h5-Dooring，你有任何问题，都可以咨询我哦～',
              e.a.createElement(
                'div',
                {
                  style: { paddingTop: '10px', marginTop: '10px', borderTop: '1px solid #f0f0f0' },
                },
                e.a.createElement('div', null, '【dooring指南】'),
                e.a.createElement(
                  'div',
                  null,
                  e.a.createElement(
                    'div',
                    null,
                    '  1.',
                    ' ',
                    e.a.createElement(
                      'a',
                      {
                        href: 'https://github.com/MrXujiang/h5-Dooring',
                        target: '_blank',
                        rel: 'noreferrer',
                      },
                      'H5-Dooring源码地址',
                    ),
                  ),
                  e.a.createElement(
                    'div',
                    null,
                    '  2.',
                    ' ',
                    e.a.createElement(
                      'a',
                      {
                        href: 'https://github.com/MrXujiang/h5-Dooring/graphs/contributors',
                        target: '_blank',
                        rel: 'noreferrer',
                      },
                      '贡献者列表',
                    ),
                  ),
                  e.a.createElement(
                    'div',
                    { style: { fontSize: '12px' } },
                    '  3. dooring开源交流群(微信：Mr_xuxiaoxi)',
                  ),
                ),
              ),
            ),
          ),
          h = Object(_.a)(O, 2),
          D = h[0],
          y = h[1],
          F = Object(a.useState)('h5'),
          c = Object(_.a)(F, 2),
          M = c[0],
          A = c[1];
        return e.a.createElement(
          E.Provider,
          { value: { theme: M, setTheme: A } },
          e.a.createElement(
            'div',
            { style: { height: '100%', width: '100%', overflow: 'hidden' } },
            e.a.createElement(
              'div',
              {
                style: {
                  position: 'fixed',
                  right: ''.concat(o === 0 ? '-10px' : o === 1 ? '-100%' : '0px'),
                  bottom: '80px',
                  transition: 'all 0.3s ease-in-out',
                  zIndex: 2,
                },
                onMouseEnter: () => {
                  n(2);
                },
                onMouseLeave: () => {
                  n(r => (r === 2 ? 0 : r));
                },
              },
              e.a.createElement(
                P.a,
                {
                  type: 'primary',
                  style: {
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: ''.concat(o === 0 ? '1000px' : '0px'),
                    transform: ''.concat(o === 0 ? 'scale(0.5)' : 'scale(1)'),
                  },
                  onClick: () => {
                    s(!i), !i && n(1);
                  },
                },
                e.a.createElement(R.a, null),
              ),
            ),
            D,
            v,
          ),
        );
      }
    },
  },
]);

//# sourceMappingURL=layouts__index.js.map
