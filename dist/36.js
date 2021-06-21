(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    Pv4R: function(te, H, _) {
      'use strict';
      _.d(H, 'a', function() {
        return q;
      }),
        _.d(H, 'c', function() {
          return ue;
        }),
        _.d(H, 'd', function() {
          return ye;
        }),
        _.d(H, 'b', function() {
          return je;
        });
      var Z = document.head || document.getElementsByTagName('head')[0],
        X = {};
      function ae(e) {
        return new Promise(function(a, n) {
          if (e in X) {
            a();
            return;
          }
          var t = document.createElement('link');
          (t.type = 'text/css'),
            (t.rel = 'stylesheet'),
            (t.href = e),
            (t.onerror = function(r) {
              Z.removeChild(t), n(new URIError('The css '.concat(e, ' is no accessible.')));
            }),
            (t.onload = function() {
              (X[e] = !0), a();
            }),
            Z.appendChild(t);
        });
      }
      function W(e) {
        return new Promise(function(a, n) {
          if (e in X) {
            a();
            return;
          }
          var t = document.createElement('script');
          (t.type = 'text/javascript'),
            (t.id = '_react_baidu_map'),
            (t.src = e),
            (t.onerror = function(r) {
              Z.removeChild(t), n(new URIError('The Script '.concat(e, ' is no accessible.')));
            }),
            (t.onload = function() {
              (X[e] = !0), a();
            }),
            Z.appendChild(t);
        });
      }
      var J = _('U8pU'),
        de = _('o0o1'),
        F = _.n(de),
        ne = _('HaE+'),
        $ = _('1OyB'),
        re = _('vuIU'),
        K = _('Ji7U'),
        Y = _('LK+K'),
        i = _('q1tI'),
        M = _.n(i);
      function fe(e) {
        return new Promise(function(a, n) {
          window.setTimeout(a, e);
        });
      }
      var oe = 3,
        q = (function(e) {
          Object(K.a)(n, e);
          var a = Object(Y.a)(n);
          Object(re.a)(n, null, [
            {
              key: 'ready',
              value: (function() {
                var t = Object(ne.a)(
                  F.a.mark(function u() {
                    return F.a.wrap(function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (!window.BMap) {
                              o.next = 2;
                              break;
                            }
                            return o.abrupt('return');
                          case 2:
                            return o.abrupt(
                              'return',
                              new Promise(function(s, d) {
                                n.waitQueue.push([s, d]);
                              }),
                            );
                          case 3:
                          case 'end':
                            return o.stop();
                        }
                    }, u);
                  }),
                );
                function r() {
                  return t.apply(this, arguments);
                }
                return r;
              })(),
            },
          ]);
          function n(t) {
            var r;
            if (
              (Object($.a)(this, n),
              (r = a.call(this, t)),
              (r.state = { loaded: !!window.BMap }),
              (r.handleError = function(u) {
                r.setState({ error: u });
              }),
              (r.finish = function() {
                r.setState({ loaded: !0 });
              }),
              r.props.akay == null)
            )
              throw new TypeError('BaiDuMap: akay is required');
            return r;
          }
          return (
            Object(re.a)(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  var r = this.props.callbackName;
                  if (window.BMap == null) {
                    if (window[r]) {
                      n.waitQueue.push([this.finish, this.handleError]);
                      return;
                    }
                    this.loadMap();
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.state.loaded
                    ? this.props.children
                    : this.props.fallback
                    ? this.props.fallback(this.state.error)
                    : this.state.error
                    ? M.a.createElement(
                        'div',
                        { style: { color: 'red' } },
                        this.state.error.message,
                      )
                    : null;
                },
              },
              {
                key: 'getScriptSrc',
                value: function() {
                  var r = this.props,
                    u = r.protocol || window.location.protocol;
                  return (
                    u.indexOf(':') === -1 && (u += ':'),
                    ''
                      .concat(u, '//')
                      .concat(r.hostAndPath, '?v=')
                      .concat(r.version, '&ak=')
                      .concat(r.akay, '&callback=')
                      .concat(r.callbackName)
                  );
                },
              },
              {
                key: 'loadMap',
                value: (function() {
                  var t = Object(ne.a)(
                    F.a.mark(function u() {
                      var l = this,
                        o,
                        s,
                        d,
                        c;
                      return F.a.wrap(
                        function(f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                (o = this.props.callbackName),
                                  (s = this.getScriptSrc()),
                                  (window[o] = function() {
                                    var m = n.waitQueue;
                                    (n.waitQueue = []),
                                      m.forEach(function(C) {
                                        return C[0]();
                                      }),
                                      l.finish();
                                  }),
                                  (d = 0);
                              case 4:
                                if (!(d < oe)) {
                                  f.next = 22;
                                  break;
                                }
                                return (f.prev = 5), (f.next = 8), W(s);
                              case 8:
                                return f.abrupt('break', 22);
                              case 11:
                                if (((f.prev = 11), (f.t0 = f.catch(5)), !(d === oe - 1))) {
                                  f.next = 17;
                                  break;
                                }
                                if (
                                  ((c = (function() {
                                    var m = new Error(
                                        'Failed to load Baidu Map: '.concat(f.t0.message),
                                      ),
                                      C = n.waitQueue;
                                    return (
                                      (n.waitQueue = []),
                                      C.forEach(function(v) {
                                        return v[1](m);
                                      }),
                                      l.handleError(m),
                                      { v: void 0 }
                                    );
                                  })()),
                                  !(Object(J.a)(c) === 'object'))
                                ) {
                                  f.next = 17;
                                  break;
                                }
                                return f.abrupt('return', c.v);
                              case 17:
                                return (f.next = 19), fe(d * 1e3);
                              case 19:
                                d++, (f.next = 4);
                                break;
                              case 22:
                              case 'end':
                                return f.stop();
                            }
                        },
                        u,
                        this,
                        [[5, 11]],
                      );
                    }),
                  );
                  function r() {
                    return t.apply(this, arguments);
                  }
                  return r;
                })(),
              },
            ]),
            n
          );
        })(M.a.Component);
      (q.defaultProps = {
        akay: '',
        hostAndPath: 'api.map.baidu.com/api',
        version: '3.0',
        callbackName: 'load_bmap_sdk',
      }),
        (q.waitQueue = []);
      var b = _('VTBJ'),
        ie = _('Ff2n'),
        O = _('ODXe');
      function x(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        n.forEach(function(t) {
          var r = 'enable'.concat(t),
            u = Object(i.useState)(a[r]),
            l = Object(O.a)(u, 2),
            o = l[0],
            s = l[1];
          Object(i.useEffect)(
            function() {
              var d = a[r] ? 'enable'.concat(t) : 'disable'.concat(t);
              e && a[r] !== void 0 && (e[d] && e[d](), a[r] !== o && s(a[r]));
            },
            [e, a[r]],
          );
        });
      }
      function T(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n = a.visiable,
          t = Object(i.useState)(n),
          r = Object(O.a)(t, 2),
          u = r[0],
          l = r[1];
        Object(i.useEffect)(
          function() {
            e && n !== void 0 && (n ? e.show && e.show() : e.hide && e.hide(), n !== u && l(n));
          },
          [e, n],
        );
      }
      function P(e, a) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        n.forEach(function(t) {
          var r = ''.concat(t.charAt(0).toLowerCase()).concat(t.slice(1)),
            u = Object(i.useState)(a[r]),
            l = Object(O.a)(u, 2),
            o = l[0],
            s = l[1];
          Object(i.useEffect)(
            function() {
              if (e && e['set'.concat(t)] && a[r] !== void 0) {
                var d = a[r];
                if (d && d.lng && d.lat) {
                  d = new BMap.Point(d.lng, d.lat);
                  var c = o;
                  if (c && c.lng && c.lat && ((c = new BMap.Point(c.lng, c.lat)), d.equals(c)))
                    return;
                }
                e['set'.concat(t)](d),
                  o !== a[r] &&
                    (r === 'bounds' ? o && a[r] && !o.equals(a[r]) && s(a[r]) : s(a[r]));
              }
            },
            [e, a[r]],
          );
        });
      }
      function k(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
          t = arguments.length > 3 ? arguments[3] : void 0;
        n.forEach(function(r) {
          var u = 'on'.concat(r),
            l = a[u];
          Object(i.useEffect)(
            function() {
              if (!e) return;
              if (l && r) {
                var o = r;
                return (
                  t === 'CamelCase'
                    ? (o = r.replace(r[0], r[0].toLowerCase()))
                    : (o = r.toLowerCase()),
                  e.addEventListener(o, l),
                  function() {
                    e.removeEventListener(o, l);
                  }
                );
              }
            },
            [e, a[u]],
          );
        });
      }
      function V(e) {
        var a = Object(i.useRef)();
        return (
          Object(i.useEffect)(function() {
            a.current = e;
          }),
          a.current
        );
      }
      var pe = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.widget,
            n = e.minZoom,
            t = e.maxZoom,
            r = e.mapType,
            u = e.enableHighResolution,
            l = e.enableAutoResize,
            o = e.enableMapClick,
            s = Object(i.useState)(),
            d = Object(O.a)(s, 2),
            c = d[0],
            p = d[1],
            f = Object(i.useState)(e.zoom || 15),
            m = Object(O.a)(f, 2),
            C = m[0],
            v = m[1],
            g = Object(i.useState)(e.container),
            h = Object(O.a)(g, 2),
            y = h[0],
            E = h[1];
          Object(i.useMemo)(
            function() {
              if (y && !c && BMap) {
                var D = new BMap.Map(y, {
                  minZoom: n,
                  maxZoom: t,
                  mapType: r,
                  enableHighResolution: u,
                  enableAutoResize: l,
                  enableMapClick: o,
                });
                a &&
                  a.forEach(function(L) {
                    if (typeof L == 'string') D.addControl(new BMap[L]());
                    else if (
                      Object(J.a)(L) === 'object' &&
                      L.control &&
                      typeof L.control == 'function'
                    )
                      D.addControl(L.control(BMap, D));
                    else if (Object(J.a)(L) === 'object' && L.name) {
                      var z = typeof L.options == 'function' ? L.options(BMap, D) : L.options;
                      D.addControl(new BMap[L.name](z));
                    }
                  }),
                  p(D);
              }
            },
            [y, c],
          );
          var w = Object(i.useState)(e.center || '上海'),
            S = Object(O.a)(w, 2),
            j = S[0],
            A = S[1];
          Object(i.useEffect)(
            function() {
              if (c && j) {
                var D = j;
                j && j.lng && j.lat && (D = new BMap.Point(j.lng, j.lat)), c.centerAndZoom(D, C);
              }
            },
            [j, c],
          );
          var N = Object(i.useState)(e.autoLocalCity),
            U = Object(O.a)(N, 2),
            I = U[0],
            R = U[1];
          return (
            Object(i.useEffect)(
              function() {
                if (c && I) {
                  var D = new BMap.LocalCity();
                  D.get(function(L) {
                    A(L.name), v(L.level), R(!1);
                  });
                }
              },
              [I, c],
            ),
            k(c, e, [
              'Click',
              'DblClick',
              'RightClick',
              'RightdblClick',
              'MapTypeChange',
              'MouseMove',
              'MouseOver',
              'MouseOut',
              'MoveStart',
              'Moving',
              'MoveEnd',
              'ZoomStart',
              'ZoomEnd',
              'AddOverlay',
              'AddControl',
              'RemoveControl',
              'RemoveOverlay',
              'ClearOverlays',
              'DragStart',
              'Dragging',
              'DragEnd',
              'AddTileLayer',
              'RemoveTileLayer',
              'Load',
              'ReSize',
              'HotspotClick',
              'HotspotOver',
              'HotspotOut',
              'TilesLoaded',
              'TouchStart',
              'TouchMove',
              'TouchEnd',
              'LongPress',
            ]),
            P(c, e, [
              'DefaultCursor',
              'DraggingCursor',
              'MinZoom',
              'MaxZoom',
              'MapStyle',
              'MapStyleV2',
              'Panorama',
              'CurrentCity',
              'MapType',
              'Viewport',
              'Zoom',
            ]),
            x(c, e, [
              'Dragging',
              'ScrollWheelZoom',
              'DoubleClickZoom',
              'Keyboard',
              'InertialDragging',
              'ContinuousZoom',
              'PinchToZoom',
              'AutoResize',
            ]),
            {
              map: c,
              setMap: p,
              container: y,
              setContainer: E,
              center: j,
              setCenter: A,
              autoLocalCity: I,
              setAutoLocalCity: R,
            }
          );
        },
        ue = M.a.forwardRef(function(e, a) {
          var n = e.className,
            t = e.style,
            r = e.children,
            u = Object(ie.a)(e, ['className', 'style', 'children']),
            l = Object(i.useRef)(null),
            o = pe(Object(b.a)({ container: l.current }, u)),
            s = o.setContainer,
            d = o.container,
            c = o.setCenter,
            p = o.setAutoLocalCity,
            f = o.map;
          Object(i.useEffect)(
            function() {
              return s(l.current);
            },
            [l.current],
          ),
            Object(i.useEffect)(
              function() {
                u.center && c(u.center);
              },
              [u.center],
            ),
            Object(i.useEffect)(
              function() {
                return p(u.autoLocalCity);
              },
              [u.autoLocalCity],
            ),
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, u), {}, { map: f, BMap, container: l });
              },
              [f],
            );
          var m = M.a.Children.toArray(r);
          return M.a.createElement(
            i.Fragment,
            null,
            M.a.createElement('div', {
              ref: l,
              className: n,
              style: Object(b.a)({ fontSize: 1, height: '100%' }, t),
            }),
            BMap && f && typeof r == 'function' && r({ BMap, map: f, container: d }),
            BMap &&
              f &&
              m.map(function(C) {
                return M.a.isValidElement(C)
                  ? M.a.cloneElement(
                      C,
                      Object(b.a)(Object(b.a)({}, C.props), {}, { BMap, map: f, container: d }),
                    )
                  : void 0;
              }),
          );
        }),
        me = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.center,
            t = e.radius,
            r = e.strokeColor,
            u = e.fillColor,
            l = e.strokeWeight,
            o = e.strokeOpacity,
            s = e.fillOpacity,
            d = e.strokeStyle,
            c = e.enableMassClear,
            p = e.enableEditing,
            f = e.enableClicking,
            m = Object(i.useState)(),
            C = Object(O.a)(m, 2),
            v = C[0],
            g = C[1];
          return (
            Object(i.useMemo)(
              function() {
                if (a && !v) {
                  var h = n;
                  n && n.lng && n.lat && (h = new BMap.Point(n.lng, n.lat));
                  var y = {
                      strokeColor: r,
                      fillColor: u,
                      strokeWeight: l,
                      strokeOpacity: o,
                      fillOpacity: s,
                      strokeStyle: d,
                      enableMassClear: c,
                      enableEditing: p,
                      enableClicking: f,
                    },
                    E = new BMap.Circle(h, t, y);
                  a.addOverlay(E), g(E);
                }
              },
              [a, v],
            ),
            T(v, e),
            k(v, e, [
              'Click',
              'DblClick',
              'MouseDown',
              'MouseUp',
              'MouseOut',
              'MouseOver',
              'Remove',
              'LineUpdate',
            ]),
            x(v, e, ['Editing', 'MassClear']),
            P(v, e, [
              'Center',
              'Radius',
              'StrokeColor',
              'FillColor',
              'StrokeOpacity',
              'FillOpacity',
              'StrokeWeight',
              'StrokeStyle',
            ]),
            { circle: v, setCircle: g }
          );
        },
        Ve = M.a.forwardRef(function(e, a) {
          var n = me(e),
            t = n.circle;
          return (
            Object(i.useImperativeHandle)(a, function() {
              return Object(b.a)(Object(b.a)({}, e), {}, { circle: t });
            }),
            null
          );
        }),
        be = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.zIndex,
            t = e.paneName,
            r = Object(i.useState)(),
            u = Object(O.a)(r, 2),
            l = u[0],
            o = u[1];
          return (
            Object(i.useMemo)(
              function() {
                if (a && BMap && !l) {
                  var s = function() {
                      var p = this;
                      e.update && e.update(Object(b.a)(Object(b.a)({}, p), {}, { BMap, map: a }));
                    },
                    d = new BMap.CanvasLayer({ zIndex: n, paneName: t, update: s });
                  a.addOverlay(d), o(d);
                }
              },
              [a, l],
            ),
            T(l, e),
            { canvasLayer: l, setCanvasLayer: o }
          );
        },
        Qe = M.a.forwardRef(function(e, a) {
          var n = be(e),
            t = n.canvasLayer;
          return (
            Object(i.useImperativeHandle)(a, function() {
              return Object(b.a)(Object(b.a)({}, e), {}, { canvasLayer: t });
            }),
            null
          );
        }),
        ve = _('i8i4'),
        G = _.n(ve);
      function Oe() {
        var e;
        return (
          (e = (function(a) {
            Object(K.a)(t, a);
            var n = Object(Y.a)(t);
            function t(r, u, l) {
              var o;
              return (
                Object($.a)(this, t),
                (o = n.call(this)),
                (o.container = void 0),
                (o.map = void 0),
                (o.paneName = void 0),
                (o.position = void 0),
                (o.offset = void 0),
                (o.initialize = function(s) {
                  var d = s.getPanes();
                  return (
                    (o.container.style.position = 'absolute'),
                    (o.map = s),
                    d[o.paneName].appendChild(o.container),
                    o.container
                  );
                }),
                (o.draw = function() {
                  if (o.position == null || o.map == null) return;
                  var s = o.map.pointToOverlayPixel(o.position),
                    d = o.offset || {},
                    c = d.width,
                    p = c === void 0 ? 0 : c,
                    f = d.height,
                    m = f === void 0 ? 0 : f;
                  (o.container.style.left = ''.concat(s.x + p, 'px')),
                    (o.container.style.top = ''.concat(s.y + m, 'px'));
                }),
                (o.setOffset = function(s) {
                  (o.offset = s), o.draw();
                }),
                (o.setPosition = function(s) {
                  (o.position = s), o.draw();
                }),
                (o.setVisiable = function(s) {
                  o.container.style.display = s ? 'block' : 'none';
                }),
                (o.getPosition = function() {
                  return o.position;
                }),
                (o.setZIndex = function(s) {
                  o.container.style.zIndex = s.toString();
                }),
                (o.container = r),
                (o.paneName = l || 'markerPane'),
                (o.position = u),
                o
              );
            }
            return t;
          })(BMap.Overlay)),
          e
        );
      }
      var Ce = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.children,
            t = e.paneName,
            r = e.position,
            u = Object(i.useState)(),
            l = Object(O.a)(u, 2),
            o = l[0],
            s = l[1],
            d = Object(i.useState)(),
            c = Object(O.a)(d, 2),
            p = c[0],
            f = c[1],
            m = Object(i.useState)(),
            C = Object(O.a)(m, 2),
            v = C[0],
            g = C[1],
            h = Object(i.useState)(0),
            y = Object(O.a)(h, 2),
            E = y[0],
            w = y[1];
          Object(i.useMemo)(
            function() {
              if (a && !v) {
                var j = document.createElement('div'),
                  A = Oe(),
                  N = G.a.createPortal(n, j),
                  U = new A(j, r, t);
                w(E + 1), f(j), a.addOverlay(U), g(N), s(U);
              }
            },
            [a, v],
          );
          var S = V(E);
          return (
            Object(i.useMemo)(
              function() {
                if (a && p && n && E === S) {
                  var j = G.a.createPortal(n, p);
                  g(j), w(E + 1);
                }
              },
              [n, o],
            ),
            P(o, e, ['ZIndex', 'Offset', 'Position', 'Visiable']),
            { portal: v, setPortal: g, customOverlay: o, setCustomOverlay: s }
          );
        },
        Je = M.a.forwardRef(function(e, a) {
          var n = Ce(e),
            t = n.customOverlay,
            r = n.portal;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { customOverlay: t });
              },
              [t],
            ),
            r || null
          );
        }),
        ge = _('i4Zk'),
        B = _.n(ge),
        Me = function(a) {
          for (
            var n = {
                simple_red: new BMap.Icon(B.a, new BMap.Size(42 / 2, 66 / 2), {
                  imageOffset: new BMap.Size(-454 / 2, -378 / 2),
                  anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
                }),
                simple_blue: new BMap.Icon(B.a, new BMap.Size(42 / 2, 66 / 2), {
                  imageOffset: new BMap.Size(-454 / 2, -450 / 2),
                  anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
                }),
                loc_red: new BMap.Icon(B.a, new BMap.Size(46 / 2, 70 / 2), {
                  imageOffset: new BMap.Size(-400 / 2, -378 / 2),
                  anchor: new BMap.Size(46 / 2 / 2, 70 / 2),
                }),
                loc_blue: new BMap.Icon(B.a, new BMap.Size(46 / 2, 70 / 2), {
                  imageOffset: new BMap.Size(-400 / 2, -450 / 2),
                  anchor: new BMap.Size(46 / 2 / 2, 70 / 2),
                }),
                dot_red: new BMap.Icon(B.a, new BMap.Size(16 / 2, 16 / 2), {
                  imageOffset: new BMap.Size(-216 / 2, -466 / 2),
                  anchor: new BMap.Size(16 / 2 / 2, 16 / 2),
                }),
                dot_blue: new BMap.Icon(B.a, new BMap.Size(16 / 2, 16 / 2), {
                  imageOffset: new BMap.Size(-216 / 2, -486 / 2),
                  anchor: new BMap.Size(16 / 2 / 2, 16 / 2),
                }),
                start: new BMap.Icon(B.a, new BMap.Size(50 / 2, 80 / 2), {
                  imageOffset: new BMap.Size(-400 / 2, -278 / 2),
                  anchor: new BMap.Size(50 / 2 / 2, 80 / 2),
                }),
                end: new BMap.Icon(B.a, new BMap.Size(50 / 2, 80 / 2), {
                  imageOffset: new BMap.Size(-450 / 2, -278 / 2),
                  anchor: new BMap.Size(50 / 2 / 2, 80 / 2),
                }),
                location: new BMap.Icon(B.a, new BMap.Size(28 / 2, 40 / 2), {
                  imageOffset: new BMap.Size(-248 / 2, -466 / 2),
                  anchor: new BMap.Size(28 / 2 / 2, 40 / 2),
                }),
              },
              t = 1;
            t <= 10;
            t++
          )
            n['red' + t] = new BMap.Icon(B.a, new BMap.Size(42 / 2, 66 / 2), {
              imageOffset: new BMap.Size(0 - (42 / 2) * (t - 1), 0),
              anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
            });
          for (var t = 1; t <= 10; t++)
            n['blue' + t] = new BMap.Icon(B.a, new BMap.Size(42 / 2, 66 / 2), {
              imageOffset: new BMap.Size(0 - (42 / 2) * (t - 1), -132 / 2),
              anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
            });
          return n[a];
        },
        he = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.position,
            t = e.animation,
            r = e.offset,
            u = e.icon,
            l = e.enableMassClear,
            o = e.enableDragging,
            s = e.enableClicking,
            d = e.raiseOnDrag,
            c = e.draggingCursor,
            p = e.rotation,
            f = e.shadow,
            m = e.title,
            C = Object(i.useState)(),
            v = Object(O.a)(C, 2),
            g = v[0],
            h = v[1],
            y = {
              offset: r,
              icon: u,
              enableMassClear: l,
              enableDragging: o,
              enableClicking: s,
              raiseOnDrag: d,
              draggingCursor: c,
              rotation: p,
              shadow: f,
              title: m,
            };
          Object(i.useMemo)(
            function() {
              if (!BMap || !a) return;
              if (!g) {
                var A = new BMap.Point(n.lng, n.lat),
                  N = new BMap.Marker(A, y);
                a.addOverlay(N), N.setAnimation(t), h(N);
              }
            },
            [a, g],
          );
          var E = Object(i.useState)(e.type || 'loc_blue'),
            w = Object(O.a)(E, 2),
            S = w[0],
            j = w[1];
          return (
            Object(i.useEffect)(
              function() {
                if (a && g && !u && S) {
                  var A = Me(S);
                  A.setImageSize(new BMap.Size(600 / 2, 600 / 2)), g.setIcon(A);
                }
              },
              [S, g],
            ),
            T(g, e),
            k(g, e, [
              'Click',
              'DblClick',
              'MouseDown',
              'MouseUp',
              'MouseOut',
              'MouseOver',
              'Remove',
              'InfowindowClose',
              'InfowindowOpen',
              'DragStart',
              'Dragging',
              'DragEnd',
              'RightClick',
            ]),
            x(g, e, ['Dragging', 'MassClear', 'Clicking']),
            P(g, e, [
              'Icon',
              'Position',
              'Animation',
              'Offset',
              'Label',
              'Title',
              'Top',
              'ZIndex',
              'Rotation',
              'Shadow',
            ]),
            { marker: g, setMarker: h, type: S, setType: j }
          );
        },
        ye = M.a.forwardRef(function(e, a) {
          var n = he(e),
            t = n.marker,
            r = n.setType;
          return (
            Object(i.useEffect)(
              function() {
                return e.type && r(e.type);
              },
              [e.type],
            ),
            Object(i.useImperativeHandle)(a, function() {
              return Object(b.a)(Object(b.a)({}, e), {}, { marker: t });
            }),
            null
          );
        }),
        Ee = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.offset,
            o = e.style,
            s = e.content,
            d = e.position,
            c = e.enableMassClear;
          return (
            Object(i.useMemo)(
              function() {
                if (!BMap || !u) return;
                if (!t) {
                  var p = { offset: l, position: d, enableMassClear: c },
                    f = new BMap.Label(s || '', p);
                  f.setStyle(Object(b.a)({}, o)), u.addOverlay(f), r(f);
                }
              },
              [u],
            ),
            T(t, e),
            k(t, e, [
              'Click',
              'DblClick',
              'MouseDo',
              'MouseUp',
              'MouseOout',
              'MouseO',
              'Remove',
              'RightClick',
            ]),
            P(t, e, ['Style', 'Content', 'Position', 'Offset', 'Title', 'ZIndex']),
            x(t, e, ['MassClear']),
            { label: t, setLabel: r }
          );
        },
        je = M.a.forwardRef(function(e, a) {
          var n = Ee(e),
            t = n.label;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { label: t });
              },
              [t],
            ),
            null
          );
        }),
        we = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.transparentPng,
            o = l === void 0 ? !0 : l,
            s = e.tileUrlTemplate,
            d = e.copyright,
            c = e.zIndex;
          Object(i.useEffect)(
            function() {
              if (u && !t) {
                var v = new BMap.TileLayer({
                  transparentPng: o,
                  tileUrlTemplate: s,
                  copyright: d,
                  zIndex: c,
                });
                return (
                  e.getTilesUrl && (v.getTilesUrl = e.getTilesUrl),
                  e.getCopyright && (v.getCopyright = e.getCopyright),
                  u.addTileLayer(v),
                  r(v),
                  function() {
                    v && u.removeTileLayer(v);
                  }
                );
              }
            },
            [u],
          );
          var p = Object(i.useState)(e.visiable),
            f = Object(O.a)(p, 2),
            m = f[0],
            C = f[1];
          return (
            Object(i.useEffect)(
              function() {
                u && t && (m ? u.addTileLayer(t) : u.removeTileLayer(t));
              },
              [m, u],
            ),
            { tileLayer: t, setTileLayer: r, visiable: m, setVisiable: C }
          );
        },
        $e = M.a.forwardRef(function(e, a) {
          var n = we(e),
            t = n.tileLayer,
            r = n.setVisiable;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { tileLayer: t });
              },
              [t],
            ),
            Object(i.useEffect)(
              function() {
                return r(e.visiable);
              },
              [e.visiable],
            ),
            null
          );
        }),
        _e = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.position,
            t = Object(ie.a)(e, ['map', 'position']),
            r = Object(i.useState)(),
            u = Object(O.a)(r, 2),
            l = u[0],
            o = u[1];
          Object(i.useMemo)(
            function() {
              if (!BMap || !a) return;
              if (!l) {
                var f = new BMap.InfoWindow('', Object(b.a)({}, t));
                o(f);
              }
            },
            [a],
          );
          var s = Object(i.useState)(t.isOpen === void 0 ? !0 : t.isOpen),
            d = Object(O.a)(s, 2),
            c = d[0],
            p = d[1];
          return (
            Object(i.useEffect)(
              function() {
                if (a && BMap && l) {
                  if (!c) a.closeInfoWindow();
                  else if (n) {
                    var f = new BMap.Point(n.lng, n.lat);
                    a.openInfoWindow(l, f);
                  }
                }
              },
              [c, l],
            ),
            T(l, e),
            k(l, e, ['Close', 'Open', 'Maximize', 'Restore', 'ClickClose']),
            P(l, e, ['Width', 'Height', 'Title', 'Content', 'MaxContent']),
            x(l, e, ['CloseOnClick', 'Maximize', 'AutoPan']),
            { infoWindow: l, setInfoWindow: o, isOpen: c, setIsOpen: p }
          );
        },
        Ke = M.a.forwardRef(function(e, a) {
          var n = _e(e),
            t = n.infoWindow,
            r = n.setIsOpen;
          return (
            Object(i.useEffect)(
              function() {
                return r(e.isOpen);
              },
              [e.isOpen],
            ),
            Object(i.useImperativeHandle)(a, function() {
              return Object(b.a)(Object(b.a)({}, e), {}, { infoWindow: t });
            }),
            null
          );
        }),
        Se = ['onClick', 'onMouseOver', 'onMouseOut'],
        Le = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.shape,
            t = e.color,
            r = e.size,
            u = Object(i.useState)(e.points),
            l = Object(O.a)(u, 2),
            o = l[0],
            s = l[1],
            d = Object(i.useState)(),
            c = Object(O.a)(d, 2),
            p = c[0],
            f = c[1],
            m = function() {
              var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                g = [];
              return (
                v.forEach(function(h) {
                  g.push(new BMap.Point(h[0], h[1]));
                }),
                g
              );
            };
          return (
            Object(i.useEffect)(
              function() {
                if (!BMap || !a) return;
                if (!document.createElement('canvas').getContext) return;
                var C = { shape: n, color: t, size: r };
                if (!p) {
                  C.size || (C.size = BMAP_POINT_SIZE_SMALL),
                    C.shape || (C.shape = BMAP_POINT_SHAPE_WATERDROP),
                    C.color || (C.color = '#d340c3');
                  var v = new BMap.PointCollection(m(o), C);
                  a.addOverlay(v),
                    f(v),
                    Se.forEach(function(g) {
                      if (e[g]) {
                        var h = g.replace(/^on/, '').toLowerCase();
                        v.addEventListener(h, e[g]);
                      }
                    });
                }
              },
              [a],
            ),
            Object(i.useEffect)(
              function() {
                p && o && p.setPoints(m(o));
              },
              [o, p],
            ),
            T(p, e),
            k(p, e, ['onClick', 'onMouseOver', 'onMouseOut']),
            P(p, e, ['Styles']),
            { pointCollection: p, setPointCollection: f, points: o, setPoints: s }
          );
        },
        Ye = M.a.forwardRef(function(e, a) {
          var n = Le(e),
            t = n.pointCollection,
            r = n.setPoints;
          return (
            Object(i.useEffect)(
              function() {
                return r(e.points);
              },
              [e.points],
            ),
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { pointCollection: t });
              },
              [t],
            ),
            null
          );
        }),
        Te = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.strokeColor,
            t = e.strokeWeight,
            r = e.strokeOpacity,
            u = e.strokeStyle,
            l = e.enableMassClear,
            o = e.enableEditing,
            s = o === void 0 ? !1 : o,
            d = e.enableClicking,
            c = e.icons,
            p = Object(i.useState)(),
            f = Object(O.a)(p, 2),
            m = f[0],
            C = f[1],
            v = window.BMapLib,
            g = Object(i.useState)(v),
            h = Object(O.a)(g, 2),
            y = h[0],
            E = h[1],
            w = Object(i.useState)(!!v),
            S = Object(O.a)(w, 2),
            j = S[0],
            A = S[1],
            N = {
              strokeColor: n,
              strokeWeight: t,
              strokeOpacity: r,
              strokeStyle: u,
              enableMassClear: l,
              enableEditing: s,
              enableClicking: d,
              icons: c,
            };
          Object(i.useMemo)(
            function() {
              if (a && y && !m && y.CurveLine) {
                var L = (e.path || []).map(function(Q) {
                    return new BMap.Point(Q.lng, Q.lat);
                  }),
                  z = new BMapLib.CurveLine(L, N);
                a.addOverlay(z), C(z);
              }
              a &&
                y &&
                !y.CurveLine &&
                W('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js')
                  .then(function() {
                    if (window.BMapLib) {
                      var Q = Object.assign(window.BMapLib, y);
                      E(Q);
                      var Fe = (e.path || []).map(function(ce) {
                          return new BMap.Point(ce.lng, ce.lat);
                        }),
                        se = new BMapLib.CurveLine(Fe, N);
                      a.addOverlay(se), C(se);
                    }
                  })
                  .catch(function() {}),
                !y &&
                  !j &&
                  (A(!0),
                  W('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js')
                    .then(function() {
                      window.BMapLib && E(window.BMapLib);
                    })
                    .catch(function() {}));
            },
            [a, y, m, j, e.path, N],
          );
          var U = Object(i.useState)(e.path || []),
            I = Object(O.a)(U, 2),
            R = I[0],
            D = I[1];
          return (
            Object(i.useEffect)(
              function() {
                if (m && e.path && R && JSON.stringify(R) !== JSON.stringify(e.path)) {
                  var L = R.map(function(z) {
                    return new BMap.Point(z.lng, z.lat);
                  });
                  m.setPath(L);
                }
              },
              [m, R, e.path],
            ),
            T(m, e),
            k(m, e, [
              'Click',
              'DblClick',
              'MouseDown',
              'MouseUp',
              'MouseOut',
              'MouseOver',
              'Remove',
              'LineUpdate',
            ]),
            x(m, e, ['Editing', 'MassClear']),
            P(m, e, ['StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'StrokeStyle']),
            { curveLine: m, setCurveLine: C, BMapLib: y, path: R, setPath: D }
          );
        },
        qe = M.a.forwardRef(function(e, a) {
          var n = Te(e),
            t = n.curveLine,
            r = n.BMapLib,
            u = n.setPath;
          return (
            Object(i.useEffect)(
              function() {
                return u(e.path);
              },
              [e.path],
            ),
            Object(i.useImperativeHandle)(a, function() {
              return Object(b.a)(Object(b.a)({}, e), {}, { curveLine: t, BMapLib: r });
            }),
            null
          );
        }),
        Pe = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.isOpen,
            t = e.drawingMode,
            r = e.enableDrawingTool,
            u = e.enableCalculate,
            l = e.drawingToolOptions,
            o = e.markerOptions,
            s = e.circleOptions,
            d = e.polylineOptions,
            c = e.polygonOptions,
            p = e.rectangleOptions,
            f = Object(i.useState)(),
            m = Object(O.a)(f, 2),
            C = m[0],
            v = m[1],
            g = window.BMapLib,
            h = Object(i.useState)(g),
            y = Object(O.a)(h, 2),
            E = y[0],
            w = y[1],
            S = Object(i.useState)(!!g),
            j = Object(O.a)(S, 2),
            A = j[0],
            N = j[1],
            U = {
              isOpen: n,
              drawingMode: t,
              enableDrawingTool: r,
              enableCalculate: u,
              drawingToolOptions: l,
              markerOptions: o,
              circleOptions: s,
              polylineOptions: d,
              polygonOptions: c,
              rectangleOptions: p,
            };
          return (
            Object(i.useMemo)(
              function() {
                if (a && E && !C && E.DrawingManager) {
                  var I = new BMapLib.DrawingManager(a, U);
                  v(I);
                }
                a &&
                  E &&
                  !E.DrawingManager &&
                  (ae(
                    '//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css',
                  ).then(function() {}),
                  W('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js')
                    .then(function() {
                      if (window.BMapLib) {
                        var R = Object.assign(window.BMapLib, E);
                        w(R);
                        var D = new BMapLib.DrawingManager(a, U);
                        v(D);
                      }
                    })
                    .catch(function() {})),
                  !E &&
                    !A &&
                    (N(!0),
                    ae(
                      '//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css',
                    ).then(function() {}),
                    W('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js')
                      .then(function() {
                        window.BMapLib && w(window.BMapLib);
                      })
                      .catch(function() {}));
              },
              [a, A, E, C],
            ),
            { drawingManager: C, setDrawingManager: v, BMapLib: E }
          );
        },
        et = M.a.forwardRef(function(e, a) {
          var n = Pe(e),
            t = n.drawingManager;
          return (
            Object(i.useImperativeHandle)(a, function() {
              return Object(b.a)(Object(b.a)({}, e), {}, { drawingManager: t, BMapLib });
            }),
            null
          );
        }),
        De = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.strokeColor,
            t = e.strokeWeight,
            r = e.strokeOpacity,
            u = e.strokeStyle,
            l = e.enableMassClear,
            o = e.enableEditing,
            s = e.enableClicking,
            d = e.icons,
            c = Object(i.useState)(),
            p = Object(O.a)(c, 2),
            f = p[0],
            m = p[1],
            C = Object(i.useState)(e.path || []),
            v = Object(O.a)(C, 2),
            g = v[0],
            h = v[1],
            y = {
              strokeColor: n,
              strokeWeight: t,
              strokeOpacity: r,
              strokeStyle: u,
              enableMassClear: l,
              enableEditing: o,
              enableClicking: s,
              icons: d,
            };
          return (
            Object(i.useMemo)(
              function() {
                if (a && !f) {
                  var E = (e.path || []).map(function(S) {
                      return new BMap.Point(S.lng, S.lat);
                    }),
                    w = new BMap.Polyline(E, y);
                  a.addOverlay(w), m(w);
                }
              },
              [a, f],
            ),
            Object(i.useEffect)(
              function() {
                if (g && f) {
                  var E = g.map(function(w) {
                    return new BMap.Point(w.lng, w.lat);
                  });
                  f.setPath(E);
                }
              },
              [f, g],
            ),
            T(f, e),
            k(f, e, [
              'Click',
              'DblClick',
              'MouseDown',
              'MouseUp',
              'MouseOut',
              'MouseOver',
              'Remove',
              'LineUpdate',
            ]),
            x(f, e, ['Editing', 'MassClear']),
            P(f, e, ['StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'StrokeStyle']),
            { polyline: f, setPolyline: m, path: g, setPath: h }
          );
        },
        tt = M.a.forwardRef(function(e, a) {
          var n = De(e),
            t = n.polyline,
            r = n.setPath;
          return (
            Object(i.useEffect)(
              function() {
                return r(e.path);
              },
              [e.path],
            ),
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { polyline: t });
              },
              [t],
            ),
            null
          );
        }),
        Ae = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.map,
            n = e.strokeColor,
            t = e.fillColor,
            r = e.strokeWeight,
            u = e.strokeOpacity,
            l = e.fillOpacity,
            o = e.strokeStyle,
            s = e.enableMassClear,
            d = e.enableEditing,
            c = e.enableClicking,
            p = Object(i.useState)(),
            f = Object(O.a)(p, 2),
            m = f[0],
            C = f[1],
            v = Object(i.useState)(e.path || []),
            g = Object(O.a)(v, 2),
            h = g[0],
            y = g[1],
            E = {
              strokeColor: n,
              fillColor: t,
              strokeWeight: r,
              strokeOpacity: u,
              fillOpacity: l,
              strokeStyle: o,
              enableMassClear: s,
              enableEditing: d,
              enableClicking: c,
            };
          return (
            Object(i.useMemo)(
              function() {
                if (a && !m) {
                  var w = (h || []).map(function(j) {
                      return new BMap.Point(j.lng, j.lat);
                    }),
                    S = new BMap.Polygon(w, E);
                  a.addOverlay(S), C(S);
                }
              },
              [a, e.path, m],
            ),
            Object(i.useEffect)(
              function() {
                if (h && m) {
                  var w = h.map(function(S) {
                    return new BMap.Point(S.lng, S.lat);
                  });
                  m.setPath(w);
                }
              },
              [m, h],
            ),
            T(m, e),
            k(m, e, [
              'Click',
              'DoubleClick',
              'MouseDown',
              'MouseUp',
              'MouseOut',
              'MouseOver',
              'Remove',
              'LineUpdate',
            ]),
            x(m, e, ['Editing', 'MassClear']),
            P(m, e, [
              'StrokeColor',
              'StrokeOpacity',
              'FillColor',
              'FillOpacity',
              'StrokeWeight',
              'StrokeStyle',
            ]),
            { polygon: m, setPolygon: C, path: h, setPath: y }
          );
        },
        at = M.a.forwardRef(function(e, a) {
          var n = Ae(e),
            t = n.polygon,
            r = n.setPath;
          return (
            Object(i.useEffect)(
              function() {
                return r(e.path);
              },
              [e.path],
            ),
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { polygon: t });
              },
              [t],
            ),
            null
          );
        }),
        Ne = _('wx14');
      function nt(e) {
        return M.a.forwardRef(function(a, n) {
          return M.a.createElement(ue, a, function(t) {
            return M.a.createElement(e, Object(Ne.a)({ ref: n }, a, t));
          });
        });
      }
      var ee = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          a = Object(i.useState)(document.createElement('div')),
          n = Object(O.a)(a, 2),
          t = n[0],
          r = n[1],
          u = Object(i.useState)(),
          l = Object(O.a)(u, 2),
          o = l[0],
          s = l[1],
          d = Object(i.useState)(0),
          c = Object(O.a)(d, 2),
          p = c[0],
          f = c[1],
          m = Object(i.useState)(e.children),
          C = Object(O.a)(m, 2),
          v = C[0],
          g = C[1];
        Object(i.useMemo)(
          function() {
            if (!o) {
              var y = G.a.createPortal(v, t);
              f(p + 1), s(y);
            }
          },
          [o],
        );
        var h = V(p);
        return (
          Object(i.useMemo)(
            function() {
              if (t && v && p === h && p > 0) {
                var y = G.a.createPortal(v, t);
                f(p + 1), s(y);
              }
            },
            [v, t, o],
          ),
          { div: t, setDiv: r, portal: o, setPortal: s, children: v, setChildren: g }
        );
      };
      function ke() {
        var e;
        return (
          (e = (function(a) {
            Object(K.a)(t, a);
            var n = Object(Y.a)(t);
            function t(r, u, l) {
              var o;
              return (
                Object($.a)(this, t),
                (o = n.call(this)),
                (o.container = void 0),
                (o.map = void 0),
                (o.initialize = function(s) {
                  return (o.map = s), s.getContainer().appendChild(o.container), o.container;
                }),
                (o.draw = function() {}),
                (o.container = r),
                (o.defaultAnchor = u || BMAP_ANCHOR_TOP_LEFT),
                (o.defaultOffset = l || new BMap.Size(10, 10)),
                o
              );
            }
            return t;
          })(BMap.Control)),
          e
        );
      }
      var Be = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = ee({ children: e.children }),
            n = a.portal,
            t = a.div,
            r = a.children,
            u = a.setPortal,
            l = a.setChildren,
            o = Object(i.useState)(),
            s = Object(O.a)(o, 2),
            d = s[0],
            c = s[1],
            p = e.map,
            f = e.offset,
            m = e.anchor,
            C = Object(i.useState)(0),
            v = Object(O.a)(C, 2),
            g = v[0],
            h = v[1];
          Object(i.useEffect)(
            function() {
              if (p && !d && t) {
                var E = ke(),
                  w = new E(t, m, f);
                h(g + 1), c(w), p.addOverlay(w), l(e.children);
              }
            },
            [p, d, t],
          );
          var y = V(g);
          return (
            Object(i.useMemo)(
              function() {
                if (p && d && t && r && g === y) {
                  var E = G.a.createPortal(r, t);
                  h(g + 1), u(E), l(e.children);
                }
              },
              [e.children],
            ),
            T(d, e),
            P(d, e, ['Anchor', 'Offset']),
            { portal: n, setPortal: u, control: d, setControl: c }
          );
        },
        rt = M.a.forwardRef(function(e, a) {
          var n = Be(e),
            t = n.control,
            r = n.portal;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { control: t });
              },
              [t],
            ),
            r || null
          );
        }),
        Ue = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = ee({ children: e.children }),
            n = a.portal,
            t = a.setPortal,
            r = Object(i.useState)(),
            u = Object(O.a)(r, 2),
            l = u[0],
            o = u[1],
            s = e.map,
            d = e.anchor,
            c = e.offset;
          return (
            Object(i.useMemo)(
              function() {
                if (s && !l) {
                  var p = new BMap.CopyrightControl({
                    anchor: d || BMAP_ANCHOR_TOP_RIGHT,
                    offset: c,
                  });
                  s.addControl(p), o(p);
                }
              },
              [s, l],
            ),
            T(l, e),
            P(l, e, ['Anchor', 'Offset']),
            { portal: n, setPortal: t, copyrightControl: l, setCopyrightControl: o }
          );
        },
        Re = 1,
        xe = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = e.children,
            n = e.control,
            t = e.bounds,
            r = ee(),
            u = r.portal,
            l = r.div,
            o = r.setChildren,
            s = Object(i.useState)(Re++),
            d = Object(O.a)(s, 1),
            c = d[0];
          Object(i.useEffect)(
            function() {
              n && o(a);
            },
            [a, n],
          );
          var p = V(c);
          return (
            Object(i.useEffect)(
              function() {
                return (
                  u && n && n.addCopyright({ id: c, bounds: t, content: l.innerHTML }),
                  function() {
                    p && n && n.removeCopyright(p);
                  }
                );
              },
              [a, u],
            ),
            u || null
          );
        },
        le = M.a.forwardRef(function(e, a) {
          var n = Ue(e),
            t = n.copyrightControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { copyrightControl: t });
              },
              [t],
            ),
            M.a.createElement(
              i.Fragment,
              null,
              M.a.Children.toArray(e.children).map(function(r, u) {
                return M.a.isValidElement(r) ? M.a.cloneElement(r, { control: t, id: u + 1 }) : r;
              }),
            )
          );
        });
      le.Item = xe;
      var ot = le,
        Ie = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.anchor,
            o = e.offset,
            s = e.type,
            d = e.showZoomInfo,
            c = e.enableGeolocation;
          return (
            Object(i.useEffect)(
              function() {
                if (u && !t) {
                  var p = new BMap.NavigationControl({
                    anchor: l || BMAP_ANCHOR_TOP_LEFT,
                    offset: o,
                    type: s,
                    showZoomInfo: d,
                    enableGeolocation: c,
                  });
                  return (
                    u.addControl(p),
                    r(p),
                    function() {
                      u && p && u.removeControl(p);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            P(t, e, ['Anchor', 'Offset', 'Type']),
            { navigationControl: t, setNavigationControl: r }
          );
        },
        it = M.a.forwardRef(function(e, a) {
          var n = Ie(e),
            t = n.navigationControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { navigationControl: t });
              },
              [t],
            ),
            null
          );
        }),
        ze = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.anchor,
            o = e.offset,
            s = e.showAddressBar,
            d = e.enableAutoLocation,
            c = e.locationIcon,
            p = e.onLocationSuccess;
          return (
            Object(i.useEffect)(
              function() {
                if (u && !t) {
                  var f = new BMap.GeolocationControl({
                    anchor: l || BMAP_ANCHOR_TOP_LEFT,
                    offset: o,
                    showAddressBar: s,
                    enableAutoLocation: d,
                    locationIcon: c,
                  });
                  return (
                    u.addControl(f),
                    r(f),
                    function() {
                      u && f && u.removeControl(f);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            k(t, e, ['LocationSuccess', 'LocationError'], 'CamelCase'),
            P(t, e, ['Anchor', 'Offset']),
            { geolocationControl: t, setGeolocationControl: r }
          );
        },
        ut = M.a.forwardRef(function(e, a) {
          var n = ze(e),
            t = n.geolocationControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { geolocationControl: t });
              },
              [t],
            ),
            null
          );
        }),
        He = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.anchor,
            o = e.offset,
            s = e.size,
            d = e.isOpen;
          return (
            Object(i.useEffect)(
              function() {
                if (u && !t) {
                  var c = new BMap.OverviewMapControl({
                    anchor: l || BMAP_ANCHOR_TOP_LEFT,
                    offset: o,
                    size: s,
                    isOpen: d,
                  });
                  return (
                    u.addControl(c),
                    r(c),
                    function() {
                      u.removeControl(c);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            k(t, e, ['ViewChanged', 'ViewChanging']),
            P(t, e, ['Anchor', 'Offset', 'Size']),
            { overviewMapControl: t, setOverviewMapControl: r }
          );
        },
        lt = M.a.forwardRef(function(e, a) {
          var n = He(e),
            t = n.overviewMapControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { overviewMapControl: t });
              },
              [t],
            ),
            null
          );
        }),
        We = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.anchor,
            o = e.offset;
          return (
            Object(i.useEffect)(
              function() {
                if (u && !t) {
                  var s = new BMap.ScaleControl({ anchor: l || BMAP_ANCHOR_TOP_LEFT, offset: o });
                  return (
                    u.addControl(s),
                    r(s),
                    function() {
                      u.removeControl(s);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            P(t, e, ['Anchor', 'Offset', 'Unit']),
            { scaleControl: t, setScaleControl: r }
          );
        },
        st = M.a.forwardRef(function(e, a) {
          var n = We(e),
            t = n.scaleControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { scaleControl: t });
              },
              [t],
            ),
            null
          );
        }),
        Ge = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.anchor,
            o = e.offset,
            s = e.type,
            d = e.mapTypes;
          return (
            Object(i.useEffect)(
              function() {
                if (u && !t) {
                  var c = new BMap.MapTypeControl({
                    anchor: l || BMAP_ANCHOR_TOP_LEFT,
                    offset: o,
                    type: s,
                    mapTypes: d,
                  });
                  return (
                    u.addControl(c),
                    r(c),
                    function() {
                      u.removeControl(c);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            P(t, e, ['Anchor', 'Offset', 'Unit']),
            { mapTypeControl: t, setMapTypeControl: r }
          );
        },
        ct = M.a.forwardRef(function(e, a) {
          var n = Ge(e),
            t = n.mapTypeControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { mapTypeControl: t });
              },
              [t],
            ),
            null
          );
        }),
        Ze = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map;
          return (
            Object(i.useEffect)(
              function() {
                if (u && !t) {
                  var l = new BMap.PanoramaControl();
                  return (
                    u.addControl(l),
                    r(l),
                    function() {
                      u.removeControl(l);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            { panoramaControl: t, setPanoramaControl: r }
          );
        },
        dt = M.a.forwardRef(function(e, a) {
          var n = Ze(e),
            t = n.panoramaControl;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { panoramaControl: t });
              },
              [t],
            ),
            null
          );
        }),
        Xe = function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            a = Object(i.useState)(),
            n = Object(O.a)(a, 2),
            t = n[0],
            r = n[1],
            u = e.map,
            l = e.bounds,
            o = e.opacity,
            s = e.imageURL,
            d = e.displayOnMinLevel,
            c = e.displayOnMaxLevel;
          return (
            Object(i.useEffect)(
              function() {
                if (!t && l && u) {
                  var p = new BMap.GroundOverlay(l, {
                    opacity: o,
                    imageURL: s,
                    displayOnMinLevel: d,
                    displayOnMaxLevel: c,
                  });
                  return (
                    u.addOverlay(p),
                    r(p),
                    function() {
                      u && p && u.removeOverlay(p);
                    }
                  );
                }
              },
              [u],
            ),
            T(t, e),
            k(t, e, ['Click', 'DblClick']),
            P(t, e, ['Bounds', 'Opacity', 'ImageURL', 'DisplayOnMinLevel', 'DispalyOnMaxLevel']),
            { groundOverlay: t, setGroundOverlay: r }
          );
        },
        ft = M.a.forwardRef(function(e, a) {
          var n = Xe(e),
            t = n.groundOverlay;
          return (
            Object(i.useImperativeHandle)(
              a,
              function() {
                return Object(b.a)(Object(b.a)({}, e), {}, { groundOverlay: t });
              },
              [t],
            ),
            null
          );
        });
    },
    i4Zk: function(te, H, _) {
      te.exports = _.p + 'static/markers.2260d1c0.png';
    },
  },
]);

//# sourceMappingURL=36.js.map
