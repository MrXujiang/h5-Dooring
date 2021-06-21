(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    'HaE+': function(S, g, o) {
      'use strict';
      o.d(g, 'a', function() {
        return b;
      });
      function a(u, f, p, d, v, h, s) {
        try {
          var y = u[h](s),
            _ = y.value;
        } catch (E) {
          p(E);
          return;
        }
        y.done ? f(_) : Promise.resolve(_).then(d, v);
      }
      function b(u) {
        return function() {
          var f = this,
            p = arguments;
          return new Promise(function(d, v) {
            var h = u.apply(f, p);
            function s(_) {
              a(h, d, v, s, y, 'next', _);
            }
            function y(_) {
              a(h, d, v, s, y, 'throw', _);
            }
            s(void 0);
          });
        };
      }
    },
    'QC+M': function(S, g, o) {
      'use strict';
      var a = o('q1tI'),
        b = o.n(a),
        u = o('i8i4'),
        f = o.n(u),
        p = o('MNnm'),
        d = Object(a.forwardRef)(function(v, h) {
          var s = v.didUpdate,
            y = v.getContainer,
            _ = v.children,
            E = Object(a.useRef)();
          Object(a.useImperativeHandle)(h, function() {
            return {};
          });
          var R = Object(a.useRef)(!1);
          return (
            !R.current && Object(p.a)() && ((E.current = y()), (R.current = !0)),
            Object(a.useEffect)(function() {
              s == null || s(v);
            }),
            Object(a.useEffect)(function() {
              return function() {
                var M, C;
                (M = E.current) === null ||
                  M === void 0 ||
                  (C = M.parentNode) === null || C === void 0 ||
                  C.removeChild(E.current);
              };
            }, []),
            E.current ? f.a.createPortal(_, E.current) : null
          );
        });
      g.a = d;
    },
    Zm9Q: function(S, g, o) {
      'use strict';
      o.d(g, 'a', function() {
        return p;
      });
      var a = o('q1tI'),
        b = o.n(a),
        u = o('TOwV'),
        f = o.n(u);
      function p(d) {
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          h = [];
        return (
          b.a.Children.forEach(d, function(s) {
            if (s == null && !v.keepEmpty) return;
            Array.isArray(s)
              ? (h = h.concat(p(s)))
              : Object(u.isFragment)(s) && s.props
              ? (h = h.concat(p(s.props.children, v)))
              : h.push(s);
          }),
          h
        );
      }
    },
    bdgK: function(S, g, o) {
      'use strict';
      (function(a) {
        var b = (function() {
            if (typeof Map != 'undefined') return Map;
            function t(e, n) {
              var r = -1;
              return (
                e.some(function(i, l) {
                  return i[0] === n ? ((r = l), !0) : !1;
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
                  for (var i = 0, l = this.__entries__; i < l.length; i++) {
                    var O = l[i];
                    n.call(r, O[1], O[0]);
                  }
                }),
                e
              );
            })();
          })(),
          u =
            typeof window != 'undefined' &&
            typeof document != 'undefined' &&
            window.document === document,
          f = (function() {
            return typeof a != 'undefined' && a.Math === Math
              ? a
              : typeof self != 'undefined' && self.Math === Math
              ? self
              : typeof window != 'undefined' && window.Math === Math
              ? window
              : Function('return this')();
          })(),
          p = (function() {
            return typeof requestAnimationFrame == 'function'
              ? requestAnimationFrame.bind(f)
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
          function l() {
            n && ((n = !1), t()), r && z();
          }
          function O() {
            p(l);
          }
          function z() {
            var A = Date.now();
            if (n) {
              if (A - i < d) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(O, e);
            i = A;
          }
          return z;
        }
        var h = 20,
          s = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
          y = typeof MutationObserver != 'undefined',
          _ = (function() {
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
                if (!u || this.connected_) return;
                document.addEventListener('transitionend', this.onTransitionEnd_),
                  window.addEventListener('resize', this.refresh),
                  y
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
                if (!u || !this.connected_) return;
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
                  i = s.some(function(l) {
                    return !!~r.indexOf(l);
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
              var l = i[r];
              Object.defineProperty(e, l, {
                value: n[l],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          R = function(e) {
            var n = e && e.ownerDocument && e.ownerDocument.defaultView;
            return n || f;
          },
          M = I(0, 0, 0, 0);
        function C(t) {
          return parseFloat(t) || 0;
        }
        function L(t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          return e.reduce(function(r, i) {
            var l = t['border-' + i + '-width'];
            return r + C(l);
          }, 0);
        }
        function x(t) {
          for (
            var e = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, i = e;
            r < i.length;
            r++
          ) {
            var l = i[r],
              O = t['padding-' + l];
            n[l] = C(O);
          }
          return n;
        }
        function c(t) {
          var e = t.getBBox();
          return I(0, 0, e.width, e.height);
        }
        function D(t) {
          var e = t.clientWidth,
            n = t.clientHeight;
          if (!e && !n) return M;
          var r = R(t).getComputedStyle(t),
            i = x(r),
            l = i.left + i.right,
            O = i.top + i.bottom,
            z = C(r.width),
            A = C(r.height);
          if (
            (r.boxSizing === 'border-box' &&
              (Math.round(z + l) !== e && (z -= L(r, 'left', 'right') + l),
              Math.round(A + O) !== n && (A -= L(r, 'top', 'bottom') + O)),
            !w(t))
          ) {
            var K = Math.round(z + l) - e,
              F = Math.round(A + O) - n;
            Math.abs(K) !== 1 && (z -= K), Math.abs(F) !== 1 && (A -= F);
          }
          return I(i.left, i.top, z, A);
        }
        var m = (function() {
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
        function T(t) {
          return u ? (m(t) ? c(t) : D(t)) : M;
        }
        function P(t) {
          var e = t.x,
            n = t.y,
            r = t.width,
            i = t.height,
            l = typeof DOMRectReadOnly != 'undefined' ? DOMRectReadOnly : Object,
            O = Object.create(l.prototype);
          return (
            E(O, { x: e, y: n, width: r, height: i, top: n, right: e + r, bottom: i + n, left: e }),
            O
          );
        }
        function I(t, e, n, r) {
          return { x: t, y: e, width: n, height: r };
        }
        var W = (function() {
            function t(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = I(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (t.prototype.isActive = function() {
                var e = T(this.target);
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
          B = (function() {
            function t(e, n, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new b()),
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
                n.set(e, new W(e)), this.controller_.addObserver(this), this.controller_.refresh();
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
          k = typeof WeakMap != 'undefined' ? new WeakMap() : new b(),
          U = (function() {
            function t(e) {
              if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = _.getInstance(),
                r = new B(e, n, this);
              k.set(this, r);
            }
            return t;
          })();
        ['observe', 'unobserve', 'disconnect'].forEach(function(t) {
          U.prototype[t] = function() {
            var e;
            return (e = k.get(this))[t].apply(e, arguments);
          };
        });
        var H = (function() {
          return typeof f.ResizeObserver != 'undefined' ? f.ResizeObserver : U;
        })();
        g.a = H;
      }.call(this, o('yLpj')));
    },
    l4aY: function(S, g, o) {
      'use strict';
      o.d(g, 'a', function() {
        return a;
      });
      function a(b, u) {
        return b ? b.contains(u) : !1;
      }
    },
    t23M: function(S, g, o) {
      'use strict';
      o.r(g);
      var a = o('VTBJ'),
        b = o('1OyB'),
        u = o('vuIU'),
        f = o('Ji7U'),
        p = o('LK+K'),
        d = o('q1tI'),
        v = o.n(d),
        h = o('m+aA'),
        s = o('Zm9Q'),
        y = o('Kwbf'),
        _ = o('c+Xe'),
        E = o('bdgK'),
        R = 'rc-observer-key',
        M = (function(C) {
          Object(f.a)(x, C);
          var L = Object(p.a)(x);
          function x() {
            var c;
            return (
              Object(b.a)(this, x),
              (c = L.apply(this, arguments)),
              (c.resizeObserver = null),
              (c.childNode = null),
              (c.currentElement = null),
              (c.state = { width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 }),
              (c.onResize = function(D) {
                var m = c.props.onResize,
                  w = D[0].target,
                  T = w.getBoundingClientRect(),
                  P = T.width,
                  I = T.height,
                  W = w.offsetWidth,
                  j = w.offsetHeight,
                  B = Math.floor(P),
                  k = Math.floor(I);
                if (
                  c.state.width !== B ||
                  c.state.height !== k ||
                  c.state.offsetWidth !== W ||
                  c.state.offsetHeight !== j
                ) {
                  var U = { width: B, height: k, offsetWidth: W, offsetHeight: j };
                  c.setState(U),
                    m &&
                      Promise.resolve().then(function() {
                        m(Object(a.a)(Object(a.a)({}, U), {}, { offsetWidth: W, offsetHeight: j }));
                      });
                }
              }),
              (c.setChildNode = function(D) {
                c.childNode = D;
              }),
              c
            );
          }
          return (
            Object(u.a)(x, [
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
                  var m = Object(h.a)(this.childNode || this),
                    w = m !== this.currentElement;
                  w && (this.destroyObserver(), (this.currentElement = m)),
                    !this.resizeObserver &&
                      m &&
                      ((this.resizeObserver = new E.a(this.onResize)),
                      this.resizeObserver.observe(m));
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
                    m = Object(s.a)(D);
                  if (m.length > 1)
                    Object(y.a)(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    );
                  else if (m.length === 0)
                    return (
                      Object(y.a)(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    );
                  var w = m[0];
                  if (d.isValidElement(w) && Object(_.c)(w)) {
                    var T = w.ref;
                    m[0] = d.cloneElement(w, { ref: Object(_.a)(T, this.setChildNode) });
                  }
                  return m.length === 1
                    ? m[0]
                    : m.map(function(P, I) {
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
      (M.displayName = 'ResizeObserver'), (g.default = M);
    },
    zT1h: function(S, g, o) {
      'use strict';
      o.d(g, 'a', function() {
        return u;
      });
      var a = o('i8i4'),
        b = o.n(a);
      function u(f, p, d, v) {
        var h = b.a.unstable_batchedUpdates
          ? function(y) {
              b.a.unstable_batchedUpdates(d, y);
            }
          : d;
        return (
          f.addEventListener && f.addEventListener(p, h, v),
          {
            remove: function() {
              f.removeEventListener && f.removeEventListener(p, h);
            },
          }
        );
      }
    },
  },
]);

//# sourceMappingURL=vendors~layouts__index~p__editor~p__editor__preview~p__home~p__login.js.map
