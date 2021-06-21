(window.webpackJsonp = window.webpackJsonp || []).push([
  [107],
  {
    wYZQ: function(l, s, e) {
      l.exports = {
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
    xh0k: function(l, s, e) {
      'use strict';
      e.r(s);
      var Y = e('+L6B'),
        m = e('2/Rp'),
        V = e('miYZ'),
        B = e('tsqr'),
        E = e('tJVT'),
        _ = e('q1tI'),
        t = e.n(_),
        c = e('a2PE'),
        J = e.n(c),
        h = e('Iab2'),
        Q = e.n(h),
        F = e('zwU1'),
        C = e.n(F),
        W = e('wYZQ'),
        r = e.n(W),
        p = e('RKZ9'),
        A = e('ga3A'),
        T = e('mP80');
      e('1eCo'), e('+dQi');
      var v = (p.d, 'http://localhost:3000'),
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
        var x = Object(_.useState)(!1),
          g = Object(E.a)(x, 2),
          I = g[0],
          K = g[1],
          L = Object(_.useState)({ line: 1, ch: 1 }),
          D = Object(E.a)(L, 2),
          O = D[0],
          b = D[1],
          j = Object(_.useState)({ data: P }),
          U = Object(E.a)(j, 2),
          n = U[0],
          N = U[1],
          S = (a, o, u) => {
            N({ data: u });
          },
          i = Object(_.useMemo)(
            () => a => {
              var o = a != null ? a : n.data;
              fetch(''.concat(v, '/dooring/render'), { method: 'POST', body: o }).then(() => {
                (P = o), B.b.success('已保存'), K(u => !u);
              });
            },
            [n],
          ),
          y = () => {
            var a = new File([n.data], ''.concat(Date.now(), '.html'), {
              type: 'text/html;charset=utf-8',
            });
            Object(h.saveAs)(a);
          },
          H = (a, o) => {
            var u = o.line,
              z = o.ch;
            b({ line: u, ch: z });
          };
        Object(T.a)(
          'ctrl+s',
          a => {
            i(), a.preventDefault();
          },
          [n],
        );
        var R = Object(_.useMemo)(
            () => (a, o) => {
              o.ctrlKey && o.key === 's' && (i(a.getValue()), o.preventDefault());
            },
            [i],
          ),
          Z = Object(_.useMemo)(
            () =>
              t.a.createElement(c.Controlled, {
                className: r.a.codeWrap,
                value: n.data,
                options: { mode: 'xml', theme: 'material', lineNumbers: !0 },
                onBeforeChange: S,
                cursor: O,
                onCursor: H,
                onKeyDown: R,
              }),
            [O, n.data, R],
          ),
          M = Object(p.h)(),
          f = Object(_.useMemo)(() => {
            var a = M.height - 42 - 1;
            return a < 694 ? 694 : a;
          }, [M.height]),
          d = Object(_.useMemo)(() => 694, []),
          w = Object(_.useMemo)(() => d - 30 - 12 - 12, [d]);
        return t.a.createElement(
          'div',
          { className: r.a.wrap },
          t.a.createElement(
            'div',
            { className: r.a.header },
            t.a.createElement(
              'div',
              { className: r.a.logoArea },
              t.a.createElement(
                'div',
                { className: r.a.logo, title: 'Dooring' },
                t.a.createElement(
                  'a',
                  { href: 'http://h5.dooring.cn' },
                  t.a.createElement('img', { src: C.a, alt: 'Dooring-强大的h5编辑器' }),
                ),
              ),
              t.a.createElement('div', { className: r.a.logoText }, '| 在线代码编辑器'),
            ),
            t.a.createElement(
              'div',
              { className: r.a.operationBar },
              t.a.createElement(
                m.a,
                {
                  type: 'primary',
                  title: '保存（ctrl+s）',
                  onClick: () => i(),
                  style: { marginRight: '10px' },
                },
                t.a.createElement(A.a, null),
              ),
              t.a.createElement(
                m.a,
                { type: 'primary', onClick: y, style: { marginRight: '10px' } },
                '下载页面',
              ),
              t.a.createElement(m.a, { danger: !0, onClick: y }, '一键部署'),
            ),
          ),
          t.a.createElement(
            'div',
            {
              className: r.a.contentWrap,
              style: { height: ''.concat(f, 'px'), position: 'relative' },
            },
            t.a.createElement(
              'div',
              {
                className: r.a.codeWrap,
                style: { height: ''.concat(f, 'px'), position: 'relative' },
              },
              Z,
            ),
            t.a.createElement(
              'div',
              { className: r.a.previewWrap, style: { height: ''.concat(d, 'px') } },
              t.a.createElement('iframe', {
                title: 'preview',
                src: ''.concat(v, '/html?flag=').concat(I),
                style: {
                  width: '100%',
                  height: ''.concat(w, 'px'),
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
    zwU1: function(l, s, e) {
      l.exports = e.p + 'static/logo.ff7fc6bb.png';
    },
  },
]);

//# sourceMappingURL=p__ide.js.map
