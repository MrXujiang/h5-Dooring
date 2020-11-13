(window.webpackJsonp = window.webpackJsonp || []).push([
  [144],
  {
    mxmt: function(u, s, e) {
      u.exports = e.p + 'static/logo.3d15201a.svg';
    },
    wYZQ: function(u, s, e) {
      u.exports = {
        wrap: 'wrap___115df',
        header: 'header___16FzI',
        logoArea: 'logoArea___XBuLC',
        backBtn: 'backBtn___1Igl-',
        logo: 'logo___15WuW',
        logoText: 'logoText___2NazV',
        operationBar: 'operationBar___19VmI',
        contentWrap: 'contentWrap___xZYnv',
        codeWrap: 'codeWrap___1XZf2',
        previewWrap: 'previewWrap___31cfv',
      };
    },
    xh0k: function(u, s, e) {
      'use strict';
      e.r(s);
      var w = e('+L6B'),
        m = e('2/Rp'),
        z = e('miYZ'),
        B = e('tsqr'),
        E = e('tJVT'),
        _ = e('q1tI'),
        t = e.n(_),
        c = e('a2PE'),
        J = e.n(c),
        h = e('Iab2'),
        Q = e.n(h),
        F = e('mxmt'),
        C = e.n(F),
        W = e('wYZQ'),
        o = e.n(W),
        p = e('RKZ9'),
        x = e('ga3A'),
        A = e('mP80');
      e('1eCo'), e('+dQi');
      var v = (p.b, 'http://localhost:3000'),
        P = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      html,body {
        margin: 0;
        padding: 0;
      }
      #root {
        padding-top: 200px;
        text-align: center;
      }
      p {
        padding: 0 10px;
        color: #06c;
        line-height: 1.8;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <img src="http://io.nainor.com/uploads/logo_1747374040f.png" />
      <p>
        (H5编辑器)H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案，
        致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。
      </p>
    </div>
  </body>
</html>
`;
      s.default = function() {
        var T = Object(_.useState)(!1),
          g = Object(E.a)(T, 2),
          I = g[0],
          K = g[1],
          L = Object(_.useState)({ line: 1, ch: 1 }),
          D = Object(E.a)(L, 2),
          O = D[0],
          b = D[1],
          j = Object(_.useState)({ data: P }),
          y = Object(E.a)(j, 2),
          n = y[0],
          N = y[1],
          S = (a, r, l) => {
            N({ data: l });
          },
          i = Object(_.useMemo)(
            () => a => {
              var r = a != null ? a : n.data;
              fetch(''.concat(v, '/dooring/render'), { method: 'POST', body: r }).then(() => {
                (P = r), B.b.success('已保存'), K(l => !l);
              });
            },
            [n],
          ),
          R = () => {
            var a = new File([n.data], ''.concat(Date.now(), '.html'), {
              type: 'text/html;charset=utf-8',
            });
            Object(h.saveAs)(a);
          },
          H = (a, r) => {
            var l = r.line,
              V = r.ch;
            b({ line: l, ch: V });
          };
        Object(A.a)(
          'ctrl+s',
          a => {
            i(), a.preventDefault();
          },
          [n],
        );
        var U = Object(_.useMemo)(
            () => (a, r) => {
              r.ctrlKey && r.key === 's' && (i(a.getValue()), r.preventDefault());
            },
            [i],
          ),
          Z = Object(_.useMemo)(
            () =>
              t.a.createElement(c.Controlled, {
                className: o.a.codeWrap,
                value: n.data,
                options: { mode: 'xml', theme: 'material', lineNumbers: !0 },
                onBeforeChange: S,
                cursor: O,
                onCursor: H,
                onKeyDown: U,
              }),
            [O, n.data, U],
          ),
          M = Object(p.e)(),
          f = Object(_.useMemo)(() => {
            var a = M.height - 42 - 1;
            return a < 694 ? 694 : a;
          }, [M.height]),
          d = Object(_.useMemo)(() => 694, []),
          Y = Object(_.useMemo)(() => d - 30 - 12 - 12, [d]);
        return t.a.createElement(
          'div',
          { className: o.a.wrap },
          t.a.createElement(
            'div',
            { className: o.a.header },
            t.a.createElement(
              'div',
              { className: o.a.logoArea },
              t.a.createElement(
                'div',
                { className: o.a.logo, title: 'Dooring' },
                t.a.createElement(
                  'a',
                  { href: 'http://io.nainor.com/h5_visible' },
                  t.a.createElement('img', { src: C.a, alt: 'Dooring-强大的h5编辑器' }),
                ),
              ),
              t.a.createElement('div', { className: o.a.logoText }, '| 在线代码编辑器'),
            ),
            t.a.createElement(
              'div',
              { className: o.a.operationBar },
              t.a.createElement(
                m.a,
                {
                  type: 'primary',
                  title: '保存（ctrl+s）',
                  onClick: () => i(),
                  style: { marginRight: '10px' },
                },
                t.a.createElement(x.a, null),
              ),
              t.a.createElement(
                m.a,
                { type: 'primary', onClick: R, style: { marginRight: '10px' } },
                '下载页面',
              ),
              t.a.createElement(m.a, { danger: !0, onClick: R }, '一键部署'),
            ),
          ),
          t.a.createElement(
            'div',
            {
              className: o.a.contentWrap,
              style: { height: ''.concat(f, 'px'), position: 'relative' },
            },
            t.a.createElement(
              'div',
              {
                className: o.a.codeWrap,
                style: { height: ''.concat(f, 'px'), position: 'relative' },
              },
              Z,
            ),
            t.a.createElement(
              'div',
              { className: o.a.previewWrap, style: { height: ''.concat(d, 'px') } },
              t.a.createElement('iframe', {
                title: 'preview',
                src: ''.concat(v, '/html?flag=').concat(I),
                style: {
                  width: '100%',
                  height: ''.concat(Y, 'px'),
                  margin: 0,
                  padding: 0,
                  border: 'none',
                },
              }),
            ),
          ),
        );
      };
    },
  },
]);

//# sourceMappingURL=p__ide.js.map
