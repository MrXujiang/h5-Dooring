(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    '+ego': function(a, _, t) {
      'use strict';
      t.r(_),
        t.d(_, 'default', function() {
          return y;
        });
      var L = t('2qtc'),
        E = t('kLXV'),
        W = t('+L6B'),
        s = t('2/Rp'),
        m = t('tJVT'),
        u = t('q1tI'),
        e = t.n(u),
        o = t('YRY9'),
        P = t('9kvl'),
        p = t('CkJw'),
        g = t('doQp'),
        D = t.n(g),
        R = t('eNmG'),
        v = t.n(R),
        U = t('H4Hi'),
        r = t.n(U);
      o.b.push(
        { text: '我是机器人', reg: '你是谁' },
        {
          text: e.a.createElement(
            'div',
            null,
            e.a.createElement('a', { href: 'https://github.com/MrXujiang' }, '@徐小夕'),
            e.a.createElement(
              'a',
              { href: 'https://github.com/yehuozhili/learnsinglespa' },
              '@yehuozhili',
            ),
          ),
          useReg: /(.*?)作者是谁(.*?)/,
        },
      );
      function y(x) {
        var F = x.children,
          O = Object(u.useState)(!1),
          d = Object(m.a)(O, 2),
          l = d[0],
          i = d[1],
          f = Object(u.useCallback)(n => {
            setTimeout(() => {
              var h = Object(o.a)(n);
              h && B(I => [...I, { isUser: !1, text: h }]);
            }, 500);
          }, []),
          A = () => {
            window.open('http://h5.dooring.cn/uploads/WechatIMG3_1758e9753e2.jpeg');
          },
          C = Object(o.c)(
            l,
            f,
            { onOk: () => i(!1), onCancel: () => i(!1), title: 'h5-Dooring机器人客服', width: 420 },
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
                      { href: 'https://github.com/MrXujiang/h5-Dooring', target: '_blank' },
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
                      },
                      '贡献者列表',
                    ),
                  ),
                  e.a.createElement(
                    'div',
                    null,
                    '  3. 如果复制/删除组件不生效, 请先点击需要复制/删除组件, 再右键删除/复制',
                  ),
                  e.a.createElement(
                    'div',
                    { style: { color: 'red' } },
                    '  4. 如果二维码组件无法扫码, 请适当调小中间图标尺寸',
                  ),
                  e.a.createElement(
                    'div',
                    { style: { fontSize: '12px' } },
                    '  5. dooring开源交流群(微信：Mr_xuxiaoxi)',
                  ),
                  e.a.createElement(
                    'div',
                    { style: { fontSize: '12px', marginTop: '10px' } },
                    '  ',
                    e.a.createElement(s.a, { type: 'primary', onClick: A }, '私有化部署'),
                  ),
                ),
              ),
            ),
          ),
          c = Object(m.a)(C, 2),
          M = c[0],
          B = c[1];
        Object(u.useEffect)(() => {
          setInterval(() => {
            var n = +localStorage.getItem('tt');
            n &&
              n < Date.now() &&
              (localStorage.removeItem('tt'),
              E.a.info({
                title: 'Dooring温馨提示',
                content: e.a.createElement('div', null, '您的登录已过期, 请点击确认按钮重新登录'),
                okText: '确认',
                onOk() {
                  localStorage.removeItem('rp'),
                    localStorage.removeItem('nickname'),
                    P.a.push('/login');
                },
              }));
          }, 1e3 * 15);
        }, []);
        var T = () => {
            E.a.info({
              title: '秒懂H5-Dooring',
              width: 860,
              zIndex: 1e5,
              content: e.a.createElement(
                'div',
                { style: { height: 380 } },
                e.a.createElement(
                  'iframe',
                  {
                    style: { width: '100%', height: '100%' },
                    src:
                      '//player.bilibili.com/player.html?aid=204342673&bvid=BV1jh411k7xs&cid=301889522&page=1',
                    scrolling: 'no',
                    border: '0',
                    frameborder: 'no',
                    framespacing: '0',
                    allowfullscreen: 'true',
                  },
                  ' ',
                ),
              ),
              okText: 'GET, 关闭',
              onOk() {},
            });
          },
          b =
            window.location.pathname.indexOf('preview') < 0
              ? { height: '100%' }
              : { height: '100%', overflow: 'auto' };
        return e.a.createElement(
          'div',
          { style: b },
          e.a.createElement(
            'div',
            {
              style: {
                position: 'fixed',
                right: ''.concat(l ? '-100%' : '10px'),
                bottom: '16px',
                transition: 'all 0.5s ease-in-out',
                zIndex: 2,
              },
            },
            e.a.createElement(
              s.a,
              { type: 'primary', style: { padding: '0 6px' }, onClick: () => i(!l) },
              e.a.createElement(p.a, null),
            ),
          ),
          M,
          F,
          window.location.pathname.indexOf('editor') > -1 &&
            e.a.createElement(
              D.a,
              null,
              e.a.createElement(
                'div',
                { className: r.a.dragPay },
                e.a.createElement('div', { className: r.a.crouseBtn }, '搭建技巧(可拖动)'),
                e.a.createElement(
                  'div',
                  { className: r.a.mask, onClick: T },
                  e.a.createElement('img', { src: v.a, alt: '' }),
                ),
              ),
            ),
        );
      }
    },
    H4Hi: function(a, _, t) {
      a.exports = {
        dragPay: 'dragPay___n-xt0',
        crouseBtn: 'crouseBtn___3y0id',
        mask: 'mask___38Yw4',
        toShake: 'toShake___24Lw5',
      };
    },
    eNmG: function(a, _, t) {
      a.exports = t.p + 'static/dooring.cfd4ea8b.png';
    },
  },
]);

//# sourceMappingURL=layouts__index.js.map
