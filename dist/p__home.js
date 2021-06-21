(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    FCkD: function(u, n, t) {
      'use strict';
      t.r(n);
      var A = t('Znn+'),
        s = t('ZTPi'),
        _ = t('q1tI'),
        e = t.n(_),
        d = t('9kvl'),
        r = t('3flX'),
        i = t('6WrX'),
        U = t('aJNx'),
        R = t('su5N'),
        D = t('Q9mQ'),
        p = t('diRs'),
        h = t('+L6B'),
        F = t('2/Rp'),
        v = t('UTqZ'),
        m = t.n(v),
        P = e.a.createElement(
          'div',
          { className: m.a.imgWrap },
          e.a.createElement('img', {
            src: 'http://h5.dooring.cn/uploads/WechatIMG2_17969ccfe40.jpeg',
            alt: 'sponsorship',
          }),
        ),
        g = Object(_.memo)(function(o) {
          var c = o.text,
            C =
              c === void 0
                ? e.a.createElement(
                    F.a,
                    {
                      type: 'primary',
                      danger: !0,
                      style: { background: 'red !important' },
                      size: 'large',
                    },
                    '支持开源, 请作者喝茶~',
                  )
                : c;
          return e.a.createElement(
            'div',
            { className: m.a.takeCat },
            e.a.createElement(
              p.a,
              { placement: 'top', title: null, content: P, trigger: 'hover' },
              C,
            ),
          );
        }),
        x = t('U0+B'),
        a = t.n(x),
        E = s.a.TabPane,
        f = () => {
          var l = o => {
            o === 'H5'
              ? d.a.push('/editor?tid=123456')
              : o === 'PC'
              ? window.open('http://v6.dooring.cn/beta')
              : d.a.push('/ide');
          };
          return e.a.createElement(
            'div',
            { className: a.a.homeWrap },
            e.a.createElement(
              'div',
              { className: a.a.leftArea },
              e.a.createElement(
                s.a,
                { defaultActiveKey: '1' },
                e.a.createElement(
                  E,
                  {
                    tab: e.a.createElement('span', null, e.a.createElement(r.a, null), '我的H5'),
                    key: '1',
                  },
                  '正在开发...',
                ),
                e.a.createElement(
                  E,
                  {
                    tab: e.a.createElement('span', null, e.a.createElement(i.a, null), '我的大屏'),
                    key: '2',
                  },
                  '正在开发...',
                ),
                e.a.createElement(
                  E,
                  {
                    tab: e.a.createElement(
                      'span',
                      null,
                      e.a.createElement(U.a, null),
                      '我的可视化',
                    ),
                    key: '3',
                  },
                  '正在开发...',
                ),
              ),
            ),
            e.a.createElement(
              'div',
              { className: a.a.contentArea },
              e.a.createElement(
                'div',
                { className: a.a.logoTip },
                e.a.createElement(
                  'div',
                  { className: a.a.logo },
                  e.a.createElement(
                    'span',
                    { className: a.a.logoText, title: 'H5-Dooring可视化编辑器' },
                    'H5-Dooring',
                  ),
                  '可视化编辑器',
                ),
                e.a.createElement(
                  'p',
                  {
                    style: {
                      display: 'inline-block',
                      width: '520px',
                      fontSize: '16px',
                      lineHeight: '2',
                    },
                  },
                  'H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案， 致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。 技术栈以react为主， 后台采用nodejs开发。',
                ),
              ),
              e.a.createElement(
                'div',
                { className: a.a.operation },
                e.a.createElement(
                  'div',
                  { className: a.a.card, onClick: () => l('H5') },
                  e.a.createElement(r.a, null),
                  e.a.createElement('div', null, '制作H5页面'),
                ),
                e.a.createElement(
                  'div',
                  { className: a.a.card, onClick: () => l('online') },
                  e.a.createElement(R.a, null),
                  e.a.createElement('div', null, '在线编程'),
                ),
                e.a.createElement(
                  'div',
                  { className: a.a.card, onClick: () => l('PC') },
                  e.a.createElement(i.a, null),
                  e.a.createElement('div', null, '制作可视化大屏'),
                ),
              ),
              e.a.createElement(
                'footer',
                { className: a.a.footer },
                e.a.createElement(
                  'div',
                  { style: { display: 'flex', justifyContent: 'center' } },
                  e.a.createElement(
                    'div',
                    { style: { marginTop: '30px' } },
                    e.a.createElement(g, null),
                  ),
                ),
                e.a.createElement(
                  'div',
                  { style: { display: 'flex', justifyContent: 'center' } },
                  e.a.createElement(
                    'div',
                    { style: { width: '500px', marginLeft: '40px', marginTop: '32px' } },
                    e.a.createElement('span', { style: { marginRight: '24px' } }, '更多产品: '),
                    e.a.createElement(
                      'a',
                      {
                        href: 'http://v6.dooring.cn/beta',
                        style: { marginRight: '24px' },
                        target: '_blank',
                      },
                      'v6.dooring可视化大屏编辑器',
                    ),
                    e.a.createElement(
                      'a',
                      {
                        href: 'http://h5.dooring.cn/qt',
                        style: { marginRight: '24px' },
                        target: '_blank',
                      },
                      '在线gif动图制作平台',
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        L = (n.default = f);
    },
    'U0+B': function(u, n, t) {
      u.exports = {
        homeWrap: 'homeWrap___1x0xg',
        leftArea: 'leftArea___yEWq3',
        contentArea: 'contentArea___Z3usC',
        logoTip: 'logoTip___-J2aA',
        logo: 'logo___3WCnj',
        logoText: 'logoText___258Ah',
        operation: 'operation___2Pxiq',
        card: 'card___8Db4b',
        footer: 'footer___2nQkL',
      };
    },
    UTqZ: function(u, n, t) {
      u.exports = { takeCat: 'takeCat___3mdIo', imgWrap: 'imgWrap___1Gbqq' };
    },
  },
]);

//# sourceMappingURL=p__home.js.map
