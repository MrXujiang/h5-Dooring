(window.webpackJsonp = window.webpackJsonp || []).push([
  [143],
  {
    FCkD: function(n, t, e) {
      'use strict';
      e.r(t);
      var C = e('+L6B'),
        i = e('2/Rp'),
        h = e('miYZ'),
        P = e('tsqr'),
        p = e('Znn+'),
        l = e('ZTPi'),
        c = e('q1tI'),
        _ = e.n(c),
        o = e('9kvl'),
        r = e('3flX'),
        m = e('6WrX'),
        d = e('aJNx'),
        U = e('su5N'),
        R = e('oN5p'),
        D = e('U0+B'),
        a = e.n(D),
        u = l.a.TabPane,
        F = () => {
          var E = s => {
            s === 'H5'
              ? o.a.push('/editor?tid=123456')
              : s === 'PC'
              ? P.b.error('该功能暂未开放, 敬请关注...')
              : o.a.push('/ide');
          };
          return _.a.createElement(
            'div',
            { className: a.a.homeWrap },
            _.a.createElement(
              'div',
              { className: a.a.leftArea },
              _.a.createElement(
                l.a,
                { defaultActiveKey: '1' },
                _.a.createElement(
                  u,
                  {
                    tab: _.a.createElement('span', null, _.a.createElement(r.a, null), '我的H5'),
                    key: '1',
                  },
                  '正在开发...',
                ),
                _.a.createElement(
                  u,
                  {
                    tab: _.a.createElement('span', null, _.a.createElement(m.a, null), '我的大屏'),
                    key: '2',
                  },
                  '正在开发...',
                ),
                _.a.createElement(
                  u,
                  {
                    tab: _.a.createElement(
                      'span',
                      null,
                      _.a.createElement(d.a, null),
                      '我的可视化',
                    ),
                    key: '3',
                  },
                  '正在开发...',
                ),
              ),
            ),
            _.a.createElement(
              'div',
              { className: a.a.contentArea },
              _.a.createElement(
                'div',
                { className: a.a.logoTip },
                _.a.createElement(
                  'div',
                  { className: a.a.logo },
                  _.a.createElement(
                    'span',
                    { className: a.a.logoText, title: 'H5-Dooring可视化编辑器' },
                    'H5-Dooring',
                  ),
                  '可视化编辑器',
                ),
                _.a.createElement(
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
              _.a.createElement(
                'div',
                { className: a.a.operation },
                _.a.createElement(
                  'div',
                  { className: a.a.card, onClick: () => E('H5') },
                  _.a.createElement(r.a, null),
                  _.a.createElement('div', null, '制作H5页面'),
                ),
                _.a.createElement(
                  'div',
                  { className: a.a.card, onClick: () => E('online') },
                  _.a.createElement(U.a, null),
                  _.a.createElement('div', null, '在线编程'),
                ),
                _.a.createElement(
                  'div',
                  { className: a.a.card, onClick: () => E('PC') },
                  _.a.createElement(m.a, null),
                  _.a.createElement('div', null, '制作可视化大屏'),
                ),
              ),
              _.a.createElement(
                'footer',
                { className: a.a.footer },
                _.a.createElement(
                  'div',
                  null,
                  _.a.createElement(
                    'a',
                    { href: 'https://github.com/MrXujiang/h5-Dooring' },
                    _.a.createElement(R.a, null),
                  ),
                  _.a.createElement(
                    'p',
                    null,
                    'Welcome to H5-Dooring',
                    _.a.createElement('span', { role: 'img', 'aria-label': 'welcome' }, '👋'),
                  ),
                  _.a.createElement(
                    'p',
                    null,
                    _.a.createElement(
                      i.a,
                      { type: 'primary' },
                      _.a.createElement(
                        'a',
                        { href: 'https://www.oschina.net/p/h5-dooring' },
                        '为dooring投票',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        };
      t.default = F;
    },
    'U0+B': function(n, t, e) {
      n.exports = {
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
  },
]);

//# sourceMappingURL=p__home.js.map
