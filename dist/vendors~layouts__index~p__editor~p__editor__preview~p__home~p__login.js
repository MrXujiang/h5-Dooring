(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    'HaE+': function(T, y, o) {
      'use strict';
      o.d(y, 'a', function() {
        return _;
      });
      function l(f, m, p, d, v, h, a) {
        try {
          var O = f[h](a),
            b = O.value;
        } catch (E) {
          p(E);
          return;
        }
        O.done ? m(b) : Promise.resolve(b).then(d, v);
      }
      function _(f) {
        return function() {
          var m = this,
            p = arguments;
          return new Promise(function(d, v) {
            var h = f.apply(m, p);
            function a(b) {
              l(h, d, v, a, O, 'next', b);
            }
            function O(b) {
              l(h, d, v, a, O, 'throw', b);
            }
            a(void 0);
          });
        };
      }
    },
    'QC+M': function(T, y, o) {
      'use strict';
      var l = o('q1tI'),
        _ = o.n(l),
        f = o('i8i4'),
        m = o.n(f),
        p = o('MNnm'),
        d = Object(l.forwardRef)(function(v, h) {
          var a = v.didUpdate,
            O = v.getContainer,
            b = v.children,
            E = Object(l.useRef)();
          Object(l.useImperativeHandle)(h, function() {
            return {};
          });
          var R = Object(l.useRef)(!1);
          return (
            !R.current && Object(p.a)() && ((E.current = O()), (R.current = !0)),
            Object(l.useEffect)(function() {
              a == null || a(v);
            }),
            Object(l.useEffect)(function() {
              return function() {
                var M, C;
                (M = E.current) === null ||
                  M === void 0 ||
                  (C = M.parentNode) === null || C === void 0 ||
                  C.removeChild(E.current);
              };
            }, []),
            E.current ? m.a.createPortal(b, E.current) : null
          );
        });
      y.a = d;
    },
    Zm9Q: function(T, y, o) {
      'use strict';
      o.d(y, 'a', function() {
        return p;
      });
      var l = o('q1tI'),
        _ = o.n(l),
        f = o('TOwV'),
        m = o.n(f);
      function p(d) {
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          h = [];
        return (
          _.a.Children.forEach(d, function(a) {
            if (a == null && !v.keepEmpty) return;
            Array.isArray(a)
              ? (h = h.concat(p(a)))
              : Object(f.isFragment)(a) && a.props
              ? (h = h.concat(p(a.props.children, v)))
              : h.push(a);
          }),
          h
        );
      }
    },
    bdgK: function(T, y, o) {
      'use strict';
      (function(l) {
        var _ = (function() {
            if (typeof Map != 'undefined') return Map;
            function t(e, n) {
              var r = -1;
              return (
                e.some(function(i, c) {
                  return i[0] === n ? ((r = c), !0) : !1;
                }),
                r
              );
            }
            return (function() {
              function e() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(e.prototype, 'size', {
                  get: function() {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.get = function(n) {
                  var r = t(this.__entries__, n),
                    i = this.__entries__[r];
                  return i && i[1];
                }),
                (e.prototype.set = function(n, r) {
                  var i = t(this.__entries__, n);
                  ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
                }),
                (e.prototype.delete = function(n) {
                  var r = this.__entries__,
                    i = t(r, n);
                  ~i && r.splice(i, 1);
                }),
                (e.prototype.has = function(n) {
                  return !!~t(this.__entries__, n);
                }),
                (e.prototype.clear = function() {
                  this.__entries__.splice(0);
                }),
                (e.prototype.forEach = function(n, r) {
                  r === void 0 && (r = null);
                  for (var i = 0, c = this.__entries__; i < c.length; i++) {
                    var g = c[i];
                    n.call(r, g[1], g[0]);
                  }
                }),
                e
              );
            })();
          })(),
          f =
            typeof window != 'undefined' &&
            typeof document != 'undefined' &&
            window.document === document,
          m = (function() {
            return typeof l != 'undefined' && l.Math === Math
              ? l
              : typeof self != 'undefined' && self.Math === Math
              ? self
              : typeof window != 'undefined' && window.Math === Math
              ? window
              : Function('return this')();
          })(),
          p = (function() {
            return typeof requestAnimationFrame == 'function'
              ? requestAnimationFrame.bind(m)
              : function(t) {
                  return setTimeout(function() {
                    return t(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          d = 2;
        function v(t, e) {
          var n = !1,
            r = !1,
            i = 0;
          function c() {
            n && ((n = !1), t()), r && z();
          }
          function g() {
            p(c);
          }
          function z() {
            var A = Date.now();
            if (n) {
              if (A - i < d) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(g, e);
            i = A;
          }
          return z;
        }
        var h = 20,
          a = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
          O = typeof MutationObserver != 'undefined',
          b = (function() {
            function t() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = v(this.refresh.bind(this), h));
            }
            return (
              (t.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (t.prototype.removeObserver = function(e) {
                var n = this.observers_,
                  r = n.indexOf(e);
                ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
              }),
              (t.prototype.refresh = function() {
                var e = this.updateObservers_();
                e && this.refresh();
              }),
              (t.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(n) {
                  return n.gatherActive(), n.hasActive();
                });
                return (
                  e.forEach(function(n) {
                    return n.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (t.prototype.connect_ = function() {
                if (!f || this.connected_) return;
                document.addEventListener('transitionend', this.onTransitionEnd_),
                  window.addEventListener('resize', this.refresh),
                  O
                    ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener('DOMSubtreeModified', this.refresh),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0);
              }),
              (t.prototype.disconnect_ = function() {
                if (!f || !this.connected_) return;
                document.removeEventListener('transitionend', this.onTransitionEnd_),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener('DOMSubtreeModified', this.refresh),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1);
              }),
              (t.prototype.onTransitionEnd_ = function(e) {
                var n = e.propertyName,
                  r = n === void 0 ? '' : n,
                  i = a.some(function(c) {
                    return !!~r.indexOf(c);
                  });
                i && this.refresh();
              }),
              (t.getInstance = function() {
                return this.instance_ || (this.instance_ = new t()), this.instance_;
              }),
              (t.instance_ = null),
              t
            );
          })(),
          E = function(e, n) {
            for (var r = 0, i = Object.keys(n); r < i.length; r++) {
              var c = i[r];
              Object.defineProperty(e, c, {
                value: n[c],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          R = function(e) {
            var n = e && e.ownerDocument && e.ownerDocument.defaultView;
            return n || m;
          },
          M = I(0, 0, 0, 0);
        function C(t) {
          return parseFloat(t) || 0;
        }
        function B(t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          return e.reduce(function(r, i) {
            var c = t['border-' + i + '-width'];
            return r + C(c);
          }, 0);
        }
        function x(t) {
          for (
            var e = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, i = e;
            r < i.length;
            r++
          ) {
            var c = i[r],
              g = t['padding-' + c];
            n[c] = C(g);
          }
          return n;
        }
        function s(t) {
          var e = t.getBBox();
          return I(0, 0, e.width, e.height);
        }
        function D(t) {
          var e = t.clientWidth,
            n = t.clientHeight;
          if (!e && !n) return M;
          var r = R(t).getComputedStyle(t),
            i = x(r),
            c = i.left + i.right,
            g = i.top + i.bottom,
            z = C(r.width),
            A = C(r.height);
          if (
            (r.boxSizing === 'border-box' &&
              (Math.round(z + c) !== e && (z -= B(r, 'left', 'right') + c),
              Math.round(A + g) !== n && (A -= B(r, 'top', 'bottom') + g)),
            !w(t))
          ) {
            var K = Math.round(z + c) - e,
              F = Math.round(A + g) - n;
            Math.abs(K) !== 1 && (z -= K), Math.abs(F) !== 1 && (A -= F);
          }
          return I(i.left, i.top, z, A);
        }
        var u = (function() {
          return typeof SVGGraphicsElement != 'undefined'
            ? function(t) {
                return t instanceof R(t).SVGGraphicsElement;
              }
            : function(t) {
                return t instanceof R(t).SVGElement && typeof t.getBBox == 'function';
              };
        })();
        function w(t) {
          return t === R(t).document.documentElement;
        }
        function S(t) {
          return f ? (u(t) ? s(t) : D(t)) : M;
        }
        function P(t) {
          var e = t.x,
            n = t.y,
            r = t.width,
            i = t.height,
            c = typeof DOMRectReadOnly != 'undefined' ? DOMRectReadOnly : Object,
            g = Object.create(c.prototype);
          return (
            E(g, { x: e, y: n, width: r, height: i, top: n, right: e + r, bottom: i + n, left: e }),
            g
          );
        }
        function I(t, e, n, r) {
          return { x: t, y: e, width: n, height: r };
        }
        var k = (function() {
            function t(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = I(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (t.prototype.isActive = function() {
                var e = S(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                );
              }),
              (t.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
              }),
              t
            );
          })(),
          j = (function() {
            function t(e, n) {
              var r = P(n);
              E(this, { target: e, contentRect: r });
            }
            return t;
          })(),
          L = (function() {
            function t(e, n, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new _()),
                typeof e != 'function')
              )
                throw new TypeError('The callback provided as parameter 1 is not a function.');
              (this.callback_ = e), (this.controller_ = n), (this.callbackCtx_ = r);
            }
            return (
              (t.prototype.observe = function(e) {
                if (!arguments.length)
                  throw new TypeError('1 argument required, but only 0 present.');
                if (typeof Element == 'undefined' || !(Element instanceof Object)) return;
                if (!(e instanceof R(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                if (n.has(e)) return;
                n.set(e, new k(e)), this.controller_.addObserver(this), this.controller_.refresh();
              }),
              (t.prototype.unobserve = function(e) {
                if (!arguments.length)
                  throw new TypeError('1 argument required, but only 0 present.');
                if (typeof Element == 'undefined' || !(Element instanceof Object)) return;
                if (!(e instanceof R(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                if (!n.has(e)) return;
                n.delete(e), n.size || this.controller_.removeObserver(this);
              }),
              (t.prototype.disconnect = function() {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (t.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function(n) {
                    n.isActive() && e.activeObservations_.push(n);
                  });
              }),
              (t.prototype.broadcastActive = function() {
                if (!this.hasActive()) return;
                var e = this.callbackCtx_,
                  n = this.activeObservations_.map(function(r) {
                    return new j(r.target, r.broadcastRect());
                  });
                this.callback_.call(e, n, e), this.clearActive();
              }),
              (t.prototype.clearActive = function() {
                this.activeObservations_.splice(0);
              }),
              (t.prototype.hasActive = function() {
                return this.activeObservations_.length > 0;
              }),
              t
            );
          })(),
          W = typeof WeakMap != 'undefined' ? new WeakMap() : new _(),
          U = (function() {
            function t(e) {
              if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = b.getInstance(),
                r = new L(e, n, this);
              W.set(this, r);
            }
            return t;
          })();
        ['observe', 'unobserve', 'disconnect'].forEach(function(t) {
          U.prototype[t] = function() {
            var e;
            return (e = W.get(this))[t].apply(e, arguments);
          };
        });
        var H = (function() {
          return typeof m.ResizeObserver != 'undefined' ? m.ResizeObserver : U;
        })();
        y.a = H;
      }.call(this, o('yLpj')));
    },
    l4aY: function(T, y, o) {
      'use strict';
      o.d(y, 'a', function() {
        return l;
      });
      function l(_, f) {
        return _ ? _.contains(f) : !1;
      }
    },
    t23M: function(T, y, o) {
      'use strict';
      o.r(y);
      var l = o('VTBJ'),
        _ = o('1OyB'),
        f = o('vuIU'),
        m = o('Ji7U'),
        p = o('LK+K'),
        d = o('q1tI'),
        v = o.n(d),
        h = o('m+aA'),
        a = o('Zm9Q'),
        O = o('Kwbf'),
        b = o('c+Xe'),
        E = o('bdgK'),
        R = 'rc-observer-key',
        M = (function(C) {
          Object(m.a)(x, C);
          var B = Object(p.a)(x);
          function x() {
            var s;
            return (
              Object(_.a)(this, x),
              (s = B.apply(this, arguments)),
              (s.resizeObserver = null),
              (s.childNode = null),
              (s.currentElement = null),
              (s.state = { width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 }),
              (s.onResize = function(D) {
                var u = s.props.onResize,
                  w = D[0].target,
                  S = w.getBoundingClientRect(),
                  P = S.width,
                  I = S.height,
                  k = w.offsetWidth,
                  j = w.offsetHeight,
                  L = Math.floor(P),
                  W = Math.floor(I);
                if (
                  s.state.width !== L ||
                  s.state.height !== W ||
                  s.state.offsetWidth !== k ||
                  s.state.offsetHeight !== j
                ) {
                  var U = { width: L, height: W, offsetWidth: k, offsetHeight: j };
                  s.setState(U),
                    u &&
                      Promise.resolve().then(function() {
                        u(Object(l.a)(Object(l.a)({}, U), {}, { offsetWidth: k, offsetHeight: j }));
                      });
                }
              }),
              (s.setChildNode = function(D) {
                s.childNode = D;
              }),
              s
            );
          }
          return (
            Object(f.a)(x, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.destroyObserver();
                },
              },
              {
                key: 'onComponentUpdated',
                value: function() {
                  var D = this.props.disabled;
                  if (D) {
                    this.destroyObserver();
                    return;
                  }
                  var u = Object(h.a)(this.childNode || this),
                    w = u !== this.currentElement;
                  w && (this.destroyObserver(), (this.currentElement = u)),
                    !this.resizeObserver &&
                      u &&
                      ((this.resizeObserver = new E.a(this.onResize)),
                      this.resizeObserver.observe(u));
                },
              },
              {
                key: 'destroyObserver',
                value: function() {
                  this.resizeObserver &&
                    (this.resizeObserver.disconnect(), (this.resizeObserver = null));
                },
              },
              {
                key: 'render',
                value: function() {
                  var D = this.props.children,
                    u = Object(a.a)(D);
                  if (u.length > 1)
                    Object(O.a)(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    );
                  else if (u.length === 0)
                    return (
                      Object(O.a)(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    );
                  var w = u[0];
                  if (d.isValidElement(w) && Object(b.c)(w)) {
                    var S = w.ref;
                    u[0] = d.cloneElement(w, { ref: Object(b.a)(S, this.setChildNode) });
                  }
                  return u.length === 1
                    ? u[0]
                    : u.map(function(P, I) {
                        return !d.isValidElement(P) || ('key' in P && P.key !== null)
                          ? P
                          : d.cloneElement(P, { key: ''.concat(R, '-').concat(I) });
                      });
                },
              },
            ]),
            x
          );
        })(d.Component);
      (M.displayName = 'ResizeObserver'), (y.default = M);
    },
  },
]);

//# sourceMappingURL=vendors~layouts__index~p__editor~p__editor__preview~p__home~p__login.js.map
