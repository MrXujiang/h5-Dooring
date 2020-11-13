(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    AqLZ: function(h, P, a) {
      h.exports = {
        radioWrap: 'radioWrap___V9Ujm',
        radioTitle: 'radioTitle___2yRMA',
        radioItem: 'radioItem___QPf2q',
      };
    },
    EpsN: function(h, P, a) {
      'use strict';
      a.r(P);
      var M = a('/K0F'),
        N = a.n(M),
        O = a('m/qA'),
        y = a.n(O),
        D = a('+n+B'),
        S = a.n(D),
        s = a('c0Zr'),
        c = a.n(s),
        v = a('tJVT'),
        C = a('kAp8'),
        j = a.n(C),
        u = a('g0ue'),
        d = a.n(u),
        T = a('yWd1'),
        F = a.n(T),
        A = a('AWtA'),
        R = a.n(A),
        W = a('4Wux'),
        Z = a.n(W),
        I = a('8Bmw'),
        n = a.n(I),
        L = a('qN19'),
        J = a.n(L),
        b = a('YLn3'),
        i = a.n(b),
        B = a('AqLZ'),
        E = a.n(B),
        K = a('q1tI'),
        e = a.n(K),
        g = a('RKZ9'),
        f = {
          Text: _ => {
            var t = _.label,
              l = _.placeholder,
              r = _.onChange;
            return e.a.createElement(
              n.a,
              { title: t },
              e.a.createElement(i.a, { clearable: !0, type: 'text', placeholder: l, onChange: r }),
            );
          },
          Textarea: _ => {
            var t = _.label,
              l = _.placeholder,
              r = _.onChange;
            return e.a.createElement(
              n.a,
              { title: t },
              e.a.createElement(i.a, {
                type: 'text',
                rows: 3,
                autoHeight: !0,
                showLength: !0,
                placeholder: l,
                onChange: r,
              }),
            );
          },
          Number: _ => {
            var t = _.label,
              l = _.placeholder,
              r = _.onChange;
            return e.a.createElement(
              n.a,
              { title: t },
              e.a.createElement(i.a, { type: 'number', placeholder: l, onChange: r }),
            );
          },
          MyRadio: _ => {
            var t = _.label,
              l = _.options,
              r = _.onChange;
            return e.a.createElement(
              'div',
              { className: E.a.radioWrap },
              e.a.createElement('div', { className: E.a.radioTitle }, t),
              e.a.createElement(
                n.a,
                null,
                e.a.createElement(
                  R.a.Group,
                  { onChange: r },
                  l.map((o, m) =>
                    e.a.createElement(
                      R.a,
                      { value: o.value, key: m, className: E.a.radioItem },
                      o.label,
                    ),
                  ),
                ),
              ),
            );
          },
          MyCheckbox: _ => {
            var t = _.label,
              l = _.options,
              r = _.onChange;
            return e.a.createElement(
              'div',
              { className: E.a.radioWrap },
              e.a.createElement('div', { className: E.a.radioTitle }, t),
              e.a.createElement(
                n.a,
                null,
                e.a.createElement(
                  d.a.Group,
                  { onChange: r },
                  l.map((o, m) =>
                    e.a.createElement(
                      d.a,
                      { value: o.value, key: m, className: E.a.radioItem },
                      o.label,
                    ),
                  ),
                ),
              ),
            );
          },
          Date: (function(_) {
            function t(l) {
              return _.apply(this, arguments);
            }
            return (
              (t.toString = function() {
                return _.toString();
              }),
              t
            );
          })(_ => {
            var t = _.label,
              l = _.placeholder,
              r = _.onChange,
              o = useState(''),
              m = Object(v.a)(o, 2),
              z = m[0],
              p = m[1],
              x = U => {
                p(U), r && r(Object(g.a)('yyyy-MM-dd', U));
              };
            return e.a.createElement(
              n.a,
              { title: t },
              e.a.createElement(c.a, {
                placeholder: l,
                mode: 'date',
                min: '1949-05-15',
                max: '2100-05-15',
                value: z,
                onOk: x,
              }),
            );
          }),
          MySelect: _ => {
            var t = _.label,
              l = _.options,
              r = _.onChange;
            return e.a.createElement(
              n.a,
              { title: t },
              e.a.createElement(y.a, { dataSource: l, onOk: r }),
            );
          },
          MyTextTip: _ => {
            var t = _.label,
              l = _.color,
              r = _.fontSize;
            return e.a.createElement(n.a, {
              title: e.a.createElement('div', { style: { color: l, fontSize: r } }, t),
            });
          },
        };
      P.default = f;
    },
  },
]);

//# sourceMappingURL=61.js.map
