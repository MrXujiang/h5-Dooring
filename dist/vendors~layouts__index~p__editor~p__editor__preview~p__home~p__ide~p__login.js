(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '+L6B': function(C, m, t) {
      'use strict';
      var c = t('cIOH'),
        h = t.n(c),
        s = t('qCM6'),
        a = t.n(s);
    },
    '0n0R': function(C, m, t) {
      'use strict';
      t.d(m, 'b', function() {
        return s;
      }),
        t.d(m, 'c', function() {
          return a;
        }),
        t.d(m, 'a', function() {
          return d;
        });
      var c = t('q1tI'),
        h = t.n(c),
        s = c.isValidElement;
      function a(l, p, v) {
        return s(l) ? c.cloneElement(l, typeof v == 'function' ? v() : v) : p;
      }
      function d(l, p) {
        return a(l, l, p);
      }
    },
    '2/Rp': function(C, m, t) {
      'use strict';
      var c = t('zvFY');
      m.a = c.b;
    },
    '3Nzz': function(C, m, t) {
      'use strict';
      t.d(m, 'a', function() {
        return a;
      });
      var c = t('q1tI'),
        h = t.n(c),
        s = c.createContext(void 0),
        a = function(l) {
          var p = l.children,
            v = l.size;
          return c.createElement(s.Consumer, null, function(e) {
            return c.createElement(s.Provider, { value: v || e }, p);
          });
        };
      m.b = s;
    },
    'BGR+': function(C, m, t) {
      'use strict';
      t.r(m);
      function c(h, s) {
        for (var a = Object.assign({}, h), d = 0; d < s.length; d += 1) {
          var l = s[d];
          delete a[l];
        }
        return a;
      }
      m.default = c;
    },
    CWQg: function(C, m, t) {
      'use strict';
      t.d(m, 'a', function() {
        return c;
      });
      var c = function() {
          for (var a = arguments.length, d = new Array(a), l = 0; l < a; l++) d[l] = arguments[l];
          return d;
        },
        h = function() {
          for (var a = arguments.length, d = new Array(a), l = 0; l < a; l++) d[l] = arguments[l];
          return d;
        };
    },
    KS4O: function(C, m, t) {
      'use strict';
      var c = {
          transitionstart: {
            transition: 'transitionstart',
            WebkitTransition: 'webkitTransitionStart',
            MozTransition: 'mozTransitionStart',
            OTransition: 'oTransitionStart',
            msTransition: 'MSTransitionStart',
          },
          animationstart: {
            animation: 'animationstart',
            WebkitAnimation: 'webkitAnimationStart',
            MozAnimation: 'mozAnimationStart',
            OAnimation: 'oAnimationStart',
            msAnimation: 'MSAnimationStart',
          },
        },
        h = {
          transitionend: {
            transition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'mozTransitionEnd',
            OTransition: 'oTransitionEnd',
            msTransition: 'MSTransitionEnd',
          },
          animationend: {
            animation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            OAnimation: 'oAnimationEnd',
            msAnimation: 'MSAnimationEnd',
          },
        },
        s = [],
        a = [];
      function d() {
        var e = document.createElement('div'),
          g = e.style;
        'AnimationEvent' in window ||
          (delete c.animationstart.animation, delete h.animationend.animation),
          'TransitionEvent' in window ||
            (delete c.transitionstart.transition, delete h.transitionend.transition);
        function f(x, O) {
          for (var D in x)
            if (x.hasOwnProperty(D)) {
              var b = x[D];
              for (var _ in b)
                if (_ in g) {
                  O.push(b[_]);
                  break;
                }
            }
        }
        f(c, s), f(h, a);
      }
      typeof window != 'undefined' && typeof document != 'undefined' && d();
      function l(e, g, f) {
        e.addEventListener(g, f, !1);
      }
      function p(e, g, f) {
        e.removeEventListener(g, f, !1);
      }
      var v = {
        startEvents: s,
        addStartEventListener: function(g, f) {
          if (s.length === 0) {
            window.setTimeout(f, 0);
            return;
          }
          s.forEach(function(x) {
            l(g, x, f);
          });
        },
        removeStartEventListener: function(g, f) {
          if (s.length === 0) return;
          s.forEach(function(x) {
            p(g, x, f);
          });
        },
        endEvents: a,
        addEndEventListener: function(g, f) {
          if (a.length === 0) {
            window.setTimeout(f, 0);
            return;
          }
          a.forEach(function(x) {
            l(g, x, f);
          });
        },
        removeEndEventListener: function(g, f) {
          if (a.length === 0) return;
          a.forEach(function(x) {
            p(g, x, f);
          });
        },
      };
      m.a = v;
    },
    Kwbf: function(C, m, t) {
      'use strict';
      t.d(m, 'b', function() {
        return p;
      });
      var c = {};
      function h(v, e) {}
      function s(v, e) {}
      function a() {
        c = {};
      }
      function d(v, e, g) {
        !e && !c[g] && (v(!1, g), (c[g] = !0));
      }
      function l(v, e) {
        d(h, v, e);
      }
      function p(v, e) {
        d(s, v, e);
      }
      m.a = l;
    },
    bQgK: function(C, m, t) {
      (function(c) {
        (function() {
          var h, s, a, d, l, p;
          typeof performance != 'undefined' && performance !== null && performance.now
            ? (C.exports = function() {
                return performance.now();
              })
            : typeof c != 'undefined' && c !== null && c.hrtime
            ? ((C.exports = function() {
                return (h() - l) / 1e6;
              }),
              (s = c.hrtime),
              (h = function() {
                var e;
                return (e = s()), e[0] * 1e9 + e[1];
              }),
              (d = h()),
              (p = c.uptime() * 1e9),
              (l = d - p))
            : Date.now
            ? ((C.exports = function() {
                return Date.now() - a;
              }),
              (a = Date.now()))
            : ((C.exports = function() {
                return new Date().getTime() - a;
              }),
              (a = new Date().getTime()));
        }.call(this));
      }.call(this, t('Q2Ig')));
    },
    g0mS: function(C, m, t) {
      'use strict';
      t.d(m, 'a', function() {
        return Z;
      });
      var c = t('lwsE'),
        h = t.n(c),
        s = t('W8MJ'),
        a = t.n(s),
        d = t('PJYZ'),
        l = t.n(d),
        p = t('7W2i'),
        v = t.n(p),
        e = t('LQ03'),
        g = t.n(e),
        f = t('q1tI'),
        x = t('i8i4'),
        O = t('KS4O'),
        D = t('xEkU'),
        b = t.n(D),
        _ = 0,
        A = {};
      function U(S) {
        var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
          L = _++,
          i = N;
        function n() {
          (i -= 1), i <= 0 ? (S(), delete A[L]) : (A[L] = b()(n));
        }
        return (A[L] = b()(n)), L;
      }
      (U.cancel = function(N) {
        if (N === void 0) return;
        b.a.cancel(A[N]), delete A[N];
      }),
        (U.ids = A);
      var H = t('H84U'),
        j;
      function J(S) {
        return !S || S.offsetParent === null;
      }
      function Y(S) {
        var N = (S || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        return N && N[1] && N[2] && N[3] ? !(N[1] === N[2] && N[2] === N[3]) : !0;
      }
      var Z = (function(S) {
        v()(L, S);
        var N = g()(L);
        function L() {
          var i;
          return (
            h()(this, L),
            (i = N.apply(this, arguments)),
            (i.animationStart = !1),
            (i.destroyed = !1),
            (i.onClick = function(n, y) {
              if (!n || J(n) || n.className.indexOf('-leave') >= 0) return;
              var W = i.props.insertExtraNode;
              i.extraNode = document.createElement('div');
              var K = l()(i),
                B = K.extraNode,
                k = i.context.getPrefixCls;
              B.className = ''.concat(k(''), '-click-animating-node');
              var et = i.getAttributeName();
              n.setAttribute(et, 'true'),
                (j = j || document.createElement('style')),
                y &&
                  y !== '#ffffff' &&
                  y !== 'rgb(255, 255, 255)' &&
                  Y(y) &&
                  !/rgba\((?:\d*, ){3}0\)/.test(y) &&
                  y !== 'transparent' &&
                  (i.csp && i.csp.nonce && (j.nonce = i.csp.nonce),
                  (B.style.borderColor = y),
                  (j.innerHTML = `
      [`
                    .concat(k(''), "-click-animating-without-extra-node='true']::after, .")
                    .concat(
                      k(''),
                      `-click-animating-node {
        --antd-wave-shadow-color: `,
                    )
                    .concat(
                      y,
                      `;
      }`,
                    )),
                  document.body.contains(j) || document.body.appendChild(j)),
                W && n.appendChild(B),
                O.a.addStartEventListener(n, i.onTransitionStart),
                O.a.addEndEventListener(n, i.onTransitionEnd);
            }),
            (i.onTransitionStart = function(n) {
              if (i.destroyed) return;
              var y = Object(x.findDOMNode)(l()(i));
              if (!n || n.target !== y || i.animationStart) return;
              i.resetEffect(y);
            }),
            (i.onTransitionEnd = function(n) {
              if (!n || n.animationName !== 'fadeEffect') return;
              i.resetEffect(n.target);
            }),
            (i.bindAnimationEvent = function(n) {
              if (
                !n ||
                !n.getAttribute ||
                n.getAttribute('disabled') ||
                n.className.indexOf('disabled') >= 0
              )
                return;
              var y = function(K) {
                if (K.target.tagName === 'INPUT' || J(K.target)) return;
                i.resetEffect(n);
                var B =
                  getComputedStyle(n).getPropertyValue('border-top-color') ||
                  getComputedStyle(n).getPropertyValue('border-color') ||
                  getComputedStyle(n).getPropertyValue('background-color');
                (i.clickWaveTimeoutId = window.setTimeout(function() {
                  return i.onClick(n, B);
                }, 0)),
                  U.cancel(i.animationStartId),
                  (i.animationStart = !0),
                  (i.animationStartId = U(function() {
                    i.animationStart = !1;
                  }, 10));
              };
              return (
                n.addEventListener('click', y, !0),
                {
                  cancel: function() {
                    n.removeEventListener('click', y, !0);
                  },
                }
              );
            }),
            (i.renderWave = function(n) {
              var y = n.csp,
                W = i.props.children;
              return (i.csp = y), W;
            }),
            i
          );
        }
        return (
          a()(L, [
            {
              key: 'componentDidMount',
              value: function() {
                var n = Object(x.findDOMNode)(this);
                if (!n || n.nodeType !== 1) return;
                this.instance = this.bindAnimationEvent(n);
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.instance && this.instance.cancel(),
                  this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId),
                  (this.destroyed = !0);
              },
            },
            {
              key: 'getAttributeName',
              value: function() {
                var n = this.context.getPrefixCls,
                  y = this.props.insertExtraNode;
                return y
                  ? ''.concat(n(''), '-click-animating')
                  : ''.concat(n(''), '-click-animating-without-extra-node');
              },
            },
            {
              key: 'resetEffect',
              value: function(n) {
                if (!n || n === this.extraNode || !(n instanceof Element)) return;
                var y = this.props.insertExtraNode,
                  W = this.getAttributeName();
                n.setAttribute(W, 'false'),
                  j && (j.innerHTML = ''),
                  y &&
                    this.extraNode &&
                    n.contains(this.extraNode) &&
                    n.removeChild(this.extraNode),
                  O.a.removeStartEventListener(n, this.onTransitionStart),
                  O.a.removeEndEventListener(n, this.onTransitionEnd);
              },
            },
            {
              key: 'render',
              value: function() {
                return f.createElement(H.a, null, this.renderWave);
              },
            },
          ]),
          L
        );
      })(f.Component);
      Z.contextType = H.b;
    },
    qCM6: function(C, m, t) {},
    uaoM: function(C, m, t) {
      'use strict';
      var c = t('Kwbf');
      m.a = function(h, s, a) {
        Object(c.a)(h, '[antd: '.concat(s, '] ').concat(a));
      };
    },
    xEkU: function(C, m, t) {
      (function(c) {
        for (
          var h = t('bQgK'),
            s = typeof window == 'undefined' ? c : window,
            a = ['moz', 'webkit'],
            d = 'AnimationFrame',
            l = s['request' + d],
            p = s['cancel' + d] || s['cancelRequest' + d],
            v = 0;
          !l && v < a.length;
          v++
        )
          (l = s[a[v] + 'Request' + d]),
            (p = s[a[v] + 'Cancel' + d] || s[a[v] + 'CancelRequest' + d]);
        if (!l || !p) {
          var e = 0,
            g = 0,
            f = [],
            x = 1e3 / 60;
          (l = function(D) {
            if (f.length === 0) {
              var b = h(),
                _ = Math.max(0, x - (b - e));
              (e = _ + b),
                setTimeout(function() {
                  var A = f.slice(0);
                  f.length = 0;
                  for (var U = 0; U < A.length; U++)
                    if (!A[U].cancelled)
                      try {
                        A[U].callback(e);
                      } catch (H) {
                        setTimeout(function() {
                          throw H;
                        }, 0);
                      }
                }, Math.round(_));
            }
            return f.push({ handle: ++g, callback: D, cancelled: !1 }), g;
          }),
            (p = function(D) {
              for (var b = 0; b < f.length; b++) f[b].handle === D && (f[b].cancelled = !0);
            });
        }
        (C.exports = function(O) {
          return l.call(s, O);
        }),
          (C.exports.cancel = function() {
            p.apply(s, arguments);
          }),
          (C.exports.polyfill = function(O) {
            O || (O = s), (O.requestAnimationFrame = l), (O.cancelAnimationFrame = p);
          });
      }.call(this, t('yLpj')));
    },
    zvFY: function(C, m, t) {
      'use strict';
      t.d(m, 'a', function() {
        return Rt;
      });
      var c = t('pVnL'),
        h = t.n(c),
        s = t('lSNA'),
        a = t.n(s),
        d = t('J4zp'),
        l = t.n(d),
        p = t('cDf5'),
        v = t.n(p),
        e = t('q1tI'),
        g = t('TSYQ'),
        f = t.n(g),
        x = t('BGR+'),
        O = t('H84U'),
        D = t('lwsE'),
        b = t.n(D),
        _ = function r(u) {
          return b()(this, r), new Error('unreachable case: '.concat(JSON.stringify(u)));
        },
        A = function(r, u) {
          var T = {};
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && u.indexOf(o) < 0 && (T[o] = r[o]);
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var E = 0, o = Object.getOwnPropertySymbols(r); E < o.length; E++)
              u.indexOf(o[E]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r, o[E]) &&
                (T[o[E]] = r[o[E]]);
          return T;
        },
        U = function(u) {
          return e.createElement(O.a, null, function(T) {
            var o,
              E = T.getPrefixCls,
              z = T.direction,
              R = u.prefixCls,
              w = u.size,
              X = u.className,
              nt = A(u, ['prefixCls', 'size', 'className']),
              Q = E('btn-group', R),
              M = '';
            switch (w) {
              case 'large':
                M = 'lg';
                break;
              case 'small':
                M = 'sm';
                break;
              case 'middle':
              case void 0:
                break;
              default:
                console.warn(new _(w));
            }
            var I = f()(
              Q,
              ((o = {}),
              a()(o, ''.concat(Q, '-').concat(M), M),
              a()(o, ''.concat(Q, '-rtl'), z === 'rtl'),
              o),
              X,
            );
            return e.createElement('div', h()({}, nt, { className: I }));
          });
        },
        H = U,
        j = t('g0mS'),
        J = t('CWQg'),
        Y = t('uaoM'),
        Z = t('3Nzz'),
        S = t('8XRh'),
        N = t('gZBC'),
        L = t.n(N),
        i = function() {
          return { width: 0, opacity: 0, transform: 'scale(0)' };
        },
        n = function(u) {
          return { width: u.scrollWidth, opacity: 1, transform: 'scale(1)' };
        };
      function y(r) {
        var u = r.prefixCls,
          T = r.loading,
          o = r.existIcon,
          E = !!T;
        return o
          ? e.createElement(
              'span',
              { className: ''.concat(u, '-loading-icon') },
              e.createElement(L.a, null),
            )
          : e.createElement(
              S.default,
              {
                visible: E,
                motionName: ''.concat(u, '-loading-icon-motion'),
                removeOnLeave: !0,
                onAppearStart: i,
                onAppearActive: n,
                onEnterStart: i,
                onEnterActive: n,
                onLeaveStart: n,
                onLeaveActive: i,
              },
              function(z, R) {
                var w = z.className,
                  X = z.style;
                return e.createElement(
                  'span',
                  { className: ''.concat(u, '-loading-icon'), style: X, ref: R },
                  e.createElement(L.a, { className: f()(w) }),
                );
              },
            );
      }
      var W = t('0n0R'),
        K = function(r, u) {
          var T = {};
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && u.indexOf(o) < 0 && (T[o] = r[o]);
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var E = 0, o = Object.getOwnPropertySymbols(r); E < o.length; E++)
              u.indexOf(o[E]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r, o[E]) &&
                (T[o[E]] = r[o[E]]);
          return T;
        },
        B = /^[\u4e00-\u9fa5]{2}$/,
        k = B.test.bind(B);
      function et(r) {
        return typeof r == 'string';
      }
      function q(r) {
        return r === 'text' || r === 'link';
      }
      function bt(r, u) {
        if (r == null) return;
        var T = u ? ' ' : '';
        return typeof r != 'string' && typeof r != 'number' && et(r.type) && k(r.props.children)
          ? Object(W.a)(r, { children: r.props.children.split('').join(T) })
          : typeof r == 'string'
          ? (k(r) && (r = r.split('').join(T)), e.createElement('span', null, r))
          : r;
      }
      function Lt(r, u) {
        var T = !1,
          o = [];
        return (
          e.Children.forEach(r, function(E) {
            var z = v()(E),
              R = z === 'string' || z === 'number';
            if (T && R) {
              var w = o.length - 1,
                X = o[w];
              o[w] = ''.concat(X).concat(E);
            } else o.push(E);
            T = R;
          }),
          e.Children.map(o, function(E) {
            return bt(E, u);
          })
        );
      }
      var wt = Object(J.a)('default', 'primary', 'ghost', 'dashed', 'link', 'text'),
        Bt = Object(J.a)('circle', 'circle-outline', 'round'),
        Xt = Object(J.a)('submit', 'button', 'reset');
      function Rt(r) {
        return r === 'danger' ? { danger: !0 } : { type: r };
      }
      var At = function(u, T) {
          var o,
            E = u.loading,
            z = u.prefixCls,
            R = u.type,
            w = u.danger,
            X = u.shape,
            nt = u.size,
            Q = u.className,
            M = u.children,
            I = u.icon,
            it = u.ghost,
            Pt = u.block,
            st = K(u, [
              'loading',
              'prefixCls',
              'type',
              'danger',
              'shape',
              'size',
              'className',
              'children',
              'icon',
              'ghost',
              'block',
            ]),
            Ut = e.useContext(Z.b),
            St = e.useState(!!E),
            lt = l()(St, 2),
            $ = lt[0],
            ct = lt[1],
            Mt = e.useState(!1),
            ut = l()(Mt, 2),
            at = ut[0],
            dt = ut[1],
            rt = e.useContext(O.b),
            Dt = rt.getPrefixCls,
            ft = rt.autoInsertSpaceInButton,
            jt = rt.direction,
            V = T || e.createRef(),
            mt = e.useRef(),
            Et = function() {
              return e.Children.count(M) === 1 && !I && !q(R);
            },
            It = function() {
              if (!V || !V.current || ft === !1) return;
              var ot = V.current.textContent;
              Et() && k(ot) ? at || dt(!0) : at && dt(!1);
            },
            F;
          v()(E) === 'object' && E.delay ? (F = E.delay || !0) : (F = !!E),
            e.useEffect(
              function() {
                clearTimeout(mt.current),
                  typeof F == 'number'
                    ? (mt.current = window.setTimeout(function() {
                        ct(F);
                      }, F))
                    : ct(F);
              },
              [F],
            ),
            e.useEffect(
              function() {
                It();
              },
              [V],
            );
          var vt = function(ot) {
            var Nt = u.onClick;
            if ($) return;
            Nt && Nt(ot);
          };
          Object(Y.a)(
            !(typeof I == 'string' && I.length > 2),
            'Button',
            '`icon` is using ReactNode instead of string naming in v4. Please check `'.concat(
              I,
              '` at https://ant.design/components/icon',
            ),
          ),
            Object(Y.a)(
              !(it && q(R)),
              'Button',
              "`link` or `text` button can't be a `ghost` button.",
            );
          var P = Dt('btn', z),
            ht = ft !== !1,
            tt = '';
          switch (nt || Ut) {
            case 'large':
              tt = 'lg';
              break;
            case 'small':
              tt = 'sm';
              break;
            default:
              break;
          }
          var _t = $ ? 'loading' : I,
            gt = f()(
              P,
              ((o = {}),
              a()(o, ''.concat(P, '-').concat(R), R),
              a()(o, ''.concat(P, '-').concat(X), X),
              a()(o, ''.concat(P, '-').concat(tt), tt),
              a()(o, ''.concat(P, '-icon-only'), !M && M !== 0 && _t),
              a()(o, ''.concat(P, '-background-ghost'), it && !q(R)),
              a()(o, ''.concat(P, '-loading'), $),
              a()(o, ''.concat(P, '-two-chinese-chars'), at && ht),
              a()(o, ''.concat(P, '-block'), Pt),
              a()(o, ''.concat(P, '-dangerous'), !!w),
              a()(o, ''.concat(P, '-rtl'), jt === 'rtl'),
              o),
              Q,
            ),
            pt = I && !$ ? I : e.createElement(y, { existIcon: !!I, prefixCls: P, loading: !!$ }),
            yt = M || M === 0 ? Lt(M, Et() && ht) : null,
            Ct = Object(x.default)(st, ['htmlType', 'loading', 'navigate']);
          if (Ct.href !== void 0)
            return e.createElement(
              'a',
              h()({}, Ct, { className: gt, onClick: vt, ref: V }),
              pt,
              yt,
            );
          var Tt = st,
            Wt = Tt.htmlType,
            zt = K(Tt, ['htmlType']),
            xt = e.createElement(
              'button',
              h()({}, Object(x.default)(zt, ['loading']), {
                type: Wt,
                className: gt,
                onClick: vt,
                ref: V,
              }),
              pt,
              yt,
            );
          return q(R) ? xt : e.createElement(j.a, null, xt);
        },
        G = e.forwardRef(At);
      (G.displayName = 'Button'),
        (G.defaultProps = { loading: !1, ghost: !1, block: !1, htmlType: 'button' }),
        (G.Group = H),
        (G.__ANT_BUTTON = !0);
      var Kt = (m.b = G);
    },
  },
]);

//# sourceMappingURL=vendors~layouts__index~p__editor~p__editor__preview~p__home~p__ide~p__login.js.map
