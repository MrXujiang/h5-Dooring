(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '4ASp': function(iu, Ci, Pi) {
      (function(wi) {
        (function(J, K) {
          K(Ci);
        })(this, function(J) {
          'use strict';
          var K = function(r) {
              return r !== null && typeof r != 'function' && isFinite(r.length);
            },
            Mi = function(r, a) {
              return K(r) ? r.indexOf(a) > -1 : !1;
            },
            de = function(r, a) {
              if (!K(r)) return r;
              for (var e = [], t = 0; t < r.length; t++) {
                var n = r[t];
                a(n, t) && e.push(n);
              }
              return e;
            },
            bi = {}.toString,
            St = function(r, a) {
              return bi.call(r) === '[object ' + a + ']';
            },
            F = function(r) {
              return St(r, 'Function');
            },
            w = function(r) {
              return r == null;
            },
            k = function(r) {
              return Array.isArray ? Array.isArray(r) : St(r, 'Array');
            },
            j = function(r) {
              var a = typeof r;
              return (r !== null && a === 'object') || a === 'function';
            };
          function C(i, r) {
            if (!i) return;
            var a;
            if (k(i)) for (var e = 0, t = i.length; e < t && !((a = r(i[e], e)), a === !1); e++);
            else if (j(i)) {
              for (var n in i) if (i.hasOwnProperty(n) && ((a = r(i[n], n)), a === !1)) break;
            }
          }
          var Ti = Object.keys
            ? function(i) {
                return Object.keys(i);
              }
            : function(i) {
                var r = [];
                return (
                  C(i, function(a, e) {
                    (F(i) && e === 'prototype') || r.push(e);
                  }),
                  r
                );
              };
          function Di(i, r) {
            var a = Ti(r),
              e = a.length;
            if (w(i)) return !e;
            for (var t = 0; t < e; t += 1) {
              var n = a[t];
              if (r[n] !== i[n] || !(n in i)) return !1;
            }
            return !0;
          }
          var me = function(r) {
              return typeof r == 'object' && r !== null;
            },
            Tt = function(r) {
              if (!me(r) || !St(r, 'Object')) return !1;
              if (Object.getPrototypeOf(r) === null) return !0;
              for (var a = r; Object.getPrototypeOf(a) !== null; ) a = Object.getPrototypeOf(a);
              return Object.getPrototypeOf(r) === a;
            };
          function Ei(i, r) {
            if (!k(i)) return null;
            var a;
            if (
              (F(r) && (a = r),
              Tt(r) &&
                (a = function(n) {
                  return Di(n, r);
                }),
              a)
            ) {
              for (var e = 0; e < i.length; e += 1) if (a(i[e])) return i[e];
            }
            return null;
          }
          var Ai = function(r) {
              var a = r.filter(function(o) {
                return !isNaN(o);
              });
              if (!a.length) return { min: 0, max: 0 };
              if (k(r[0])) {
                for (var e = [], t = 0; t < r.length; t++) e = e.concat(r[t]);
                a = e;
              }
              var n = Math.max.apply(null, a),
                s = Math.min.apply(null, a);
              return { min: s, max: n };
            },
            B = function(r) {
              return St(r, 'String');
            },
            ur = function(r) {
              var a = [];
              return (
                C(r, function(e) {
                  Mi(a, e) || a.push(e);
                }),
                a
              );
            };
          function ot(i) {
            return K(i) ? i[0] : void 0;
          }
          function Q(i) {
            if (K(i)) {
              var r = i;
              return r[r.length - 1];
            }
            return;
          }
          var ye = function(r, a) {
              var e = a.toString(),
                t = e.indexOf('.');
              if (t === -1) return Math.round(r);
              var n = e.substr(t + 1).length;
              return n > 20 && (n = 20), parseFloat(r.toFixed(n));
            },
            X = function(r) {
              return St(r, 'Number');
            },
            cr = function(r) {
              return w(r) ? '' : r.toString();
            },
            fr = function(r) {
              var a = cr(r);
              return a.charAt(0).toLowerCase() + a.substring(1);
            },
            lt = function(r) {
              var a = cr(r);
              return a.charAt(0).toUpperCase() + a.substring(1);
            },
            ki = {}.toString,
            Ii = function(r) {
              return ki
                .call(r)
                .replace(/^\[object /, '')
                .replace(/]$/, '');
            },
            hr = function(r) {
              return St(r, 'Boolean');
            },
            Vt = function(r) {
              return St(r, 'Date');
            },
            Oi = Object.prototype,
            Ri = function(r) {
              var a = r && r.constructor,
                e = (typeof a == 'function' && a.prototype) || Oi;
              return r === e;
            };
          function xe(i, r) {
            for (var a in r)
              r.hasOwnProperty(a) && a !== 'constructor' && r[a] !== void 0 && (i[a] = r[a]);
          }
          function _(i, r, a, e) {
            return r && xe(i, r), a && xe(i, a), e && xe(i, e), i;
          }
          var Ni = 5;
          function vr(i, r, a, e) {
            (a = a || 0), (e = e || Ni);
            for (var t in r)
              if (r.hasOwnProperty(t)) {
                var n = r[t];
                n !== null && Tt(n)
                  ? (Tt(i[t]) || (i[t] = {}), a < e ? vr(i[t], n, a + 1, e) : (i[t] = r[t]))
                  : k(n)
                  ? ((i[t] = []), (i[t] = i[t].concat(n)))
                  : n !== void 0 && (i[t] = n);
              }
          }
          var z = function(r) {
              for (var a = [], e = 1; e < arguments.length; e++) a[e - 1] = arguments[e];
              for (var t = 0; t < a.length; t += 1) vr(r, a[t]);
              return r;
            },
            _e = function(r, a) {
              if (!K(r)) return -1;
              var e = Array.prototype.indexOf;
              if (e) return e.call(r, a);
              for (var t = -1, n = 0; n < r.length; n++)
                if (r[n] === a) {
                  t = n;
                  break;
                }
              return t;
            },
            Yi = Object.prototype.hasOwnProperty;
          function Fi(i) {
            if (w(i)) return !0;
            if (K(i)) return !i.length;
            var r = Ii(i);
            if (r === 'Map' || r === 'Set') return !i.size;
            if (Ri(i)) return !Object.keys(i).length;
            for (var a in i) if (Yi.call(i, a)) return !1;
            return !0;
          }
          var Li = function i(r, a) {
              if (r === a) return !0;
              if (!r || !a) return !1;
              if (B(r) || B(a)) return !1;
              if (K(r) || K(a)) {
                if (r.length !== a.length) return !1;
                for (var e = !0, t = 0; t < r.length && !((e = i(r[t], a[t])), !e); t++);
                return e;
              }
              if (me(r) || me(a)) {
                var n = Object.keys(r),
                  s = Object.keys(a);
                if (n.length !== s.length) return !1;
                for (var e = !0, t = 0; t < n.length && !((e = i(r[n[t]], a[n[t]])), !e); t++);
                return e;
              }
              return !1;
            },
            gr = function(r, a) {
              if (!K(r)) return r;
              for (var e = [], t = 0; t < r.length; t++) {
                var n = r[t];
                e.push(a(n, t));
              }
              return e;
            };
          function pr(i) {
            return w(i) ? 0 : K(i) ? i.length : Object.keys(i).length;
          }
          function dr(i) {
            for (var r = [], a = 0, e = i.length; a < e; a++) r = r.concat(i[a]);
            return r;
          }
          function mr(i, r) {
            for (var a = [], e = {}, t = 0, n = i.length; t < n; t++) {
              var s = i[t],
                o = s[r];
              w(o) ||
                (k(o)
                  ? C(o, function(l) {
                      e[l] || (a.push(l), (e[l] = !0));
                    })
                  : e[o] || (a.push(o), (e[o] = !0)));
            }
            return a;
          }
          function Se(i, r) {
            for (var a = null, e = 0, t = i.length; e < t; e++) {
              var n = i[e],
                s = n[r];
              if (!w(s)) {
                k(s) ? (a = s[0]) : (a = s);
                break;
              }
            }
            return a;
          }
          function yr(i, r) {
            if (!r) return { 0: i };
            for (
              var a = function(u) {
                  for (var c = '_', f = 0, h = r.length; f < h; f++)
                    c += u[r[f]] && u[r[f]].toString();
                  return c;
                },
                e = {},
                t = 0,
                n = i.length;
              t < n;
              t++
            ) {
              var s = i[t],
                o = a(s);
              e[o] ? e[o].push(s) : (e[o] = [s]);
            }
            return e;
          }
          function xr(i, r, a) {
            if ((a === void 0 && (a = {}), !r)) return [i];
            var e = yr(i, r),
              t = [];
            if (r.length === 1 && a[r[0]]) {
              var n = a[r[0]];
              C(n, function(o) {
                (o = '_' + o), t.push(e[o]);
              });
            } else for (var s in e) t.push(e[s]);
            return t;
          }
          function Wt(i, r) {
            if (!i) return;
            var a = i.indexOf(r);
            a !== -1 && i.splice(a, 1);
          }
          function Ce(i) {
            if (!i.length) return { min: 0, max: 0 };
            var r = Math.max.apply(null, i),
              a = Math.min.apply(null, i);
            return { min: a, max: r };
          }
          var Bi = Object.freeze({
              __proto__: null,
              merge: dr,
              values: mr,
              firstValue: Se,
              group: xr,
              groupToMap: yr,
              remove: Wt,
              getRange: Ce,
            }),
            zi = (function() {
              var i = !1;
              try {
                var r = Object.defineProperty({}, 'passive', {
                  get: function() {
                    i = !0;
                  },
                });
                window.addEventListener('e', null, r);
              } catch (a) {}
              return i;
            })(),
            _r = zi ? { passive: !0 } : !1,
            Xi = typeof wx == 'object' && typeof wx.getSystemInfoSync == 'function',
            Gi = typeof my == 'object' && typeof my.getSystemInfoSync == 'function',
            Hi = typeof wi && !typeof window,
            Ui =
              typeof window != 'undefined' &&
              typeof window.document != 'undefined' &&
              typeof window.sessionStorage != 'undefined';
          function Sr(i) {
            return !i || typeof i != 'object'
              ? !1
              : i.nodeType === 1 && i.nodeName
              ? !0
              : !!i.isCanvasElement;
          }
          function Cr() {
            return (window && window.devicePixelRatio) || 1;
          }
          function Ct(i, r) {
            return i.currentStyle
              ? i.currentStyle[r]
              : document.defaultView.getComputedStyle(i, null).getPropertyValue(r);
          }
          function Pe(i) {
            var r = Ct(i, 'width');
            return r === 'auto' && (r = i.offsetWidth), parseFloat(r);
          }
          function we(i) {
            var r = Ct(i, 'height');
            return r === 'auto' && (r = i.offsetHeight), parseFloat(r);
          }
          function Pr(i) {
            return i ? document.getElementById(i) : null;
          }
          function qt(i, r) {
            var a = r.get('el');
            if (!a) return i;
            var e = a.getBoundingClientRect(),
              t = e.top,
              n = e.right,
              s = e.bottom,
              o = e.left,
              l = parseFloat(Ct(a, 'padding-left')),
              u = parseFloat(Ct(a, 'padding-top')),
              c = parseFloat(Ct(a, 'padding-right')),
              f = parseFloat(Ct(a, 'padding-bottom')),
              h = n - o - l - c,
              v = s - t - u - f,
              g = r.get('pixelRatio'),
              p = (((i.x - o - l) / h) * a.width) / g,
              m = (((i.y - t - u) / v) * a.height) / g;
            return { x: p, y: m };
          }
          function wr(i, r, a) {
            i.addEventListener(r, a, _r);
          }
          function Mr(i, r, a) {
            i.removeEventListener(r, a, _r);
          }
          function br(i, r, a, e, t) {
            return {
              type: i,
              chart: r,
              native: t || null,
              x: a !== void 0 ? a : null,
              y: e !== void 0 ? e : null,
            };
          }
          function Me(i, r) {
            var a = i.type,
              e;
            if (i.touches) {
              var t = i.changedTouches[0] || {},
                n = t.x,
                s = t.y,
                o = t.clientX,
                l = t.clientY;
              if (n && s) return br(a, r, n, s, i);
              e = { x: o, y: l };
            } else e = { x: i.clientX, y: i.clientY };
            var u = r.get('canvas'),
              c = qt(e, u);
            return br(a, r, c.x, c.y, i);
          }
          function be(i, r, a) {
            return (
              a || (a = document.createElement('canvas').getContext('2d')),
              (a.font = r || '12px sans-serif'),
              a.measureText(i)
            );
          }
          function ji(i, r) {
            (i = Object.assign({}, i)), (r = Object.assign({}, r));
            var a = Object.getOwnPropertyNames(i),
              e = Object.getOwnPropertyNames(r);
            if (a.length !== e.length) return !1;
            for (var t = 0, n = a.length; t < n; t++) {
              var s = a[t];
              if (i[s] !== r[s]) return !1;
            }
            return !0;
          }
          function q(i) {
            var r, a, e, t;
            return (
              X(i) || B(i)
                ? (r = e = t = a = i)
                : k(i) &&
                  ((r = i[0]),
                  (a = w(i[1]) ? i[0] : i[1]),
                  (e = w(i[2]) ? i[0] : i[2]),
                  (t = w(i[3]) ? a : i[3])),
              [r, a, e, t]
            );
          }
          function $t(i, r) {
            return i === void 0 ? !0 : typeof i == 'string' ? i.indexOf(r) !== -1 : !1;
          }
          function Yt(i) {
            return (
              B(i) &&
                (i.indexOf('T') > 0
                  ? (i = new Date(i).getTime())
                  : (i = new Date(i.replace(/-/gi, '/')).getTime())),
              Vt(i) && (i = i.getTime()),
              i
            );
          }
          var Tr = Object.freeze({
              __proto__: null,
              Array: Bi,
              upperFirst: lt,
              lowerFirst: fr,
              isString: B,
              isNumber: X,
              isBoolean: hr,
              isFunction: F,
              isDate: Vt,
              isArray: k,
              isNil: w,
              isObject: j,
              isPlainObject: Tt,
              isEqual: Li,
              deepMix: z,
              mix: _,
              each: C,
              uniq: ur,
              find: Ei,
              isObjectValueEqual: ji,
              parsePadding: q,
              directionEnabled: $t,
              toTimeStamp: Yt,
              isWx: Xi,
              isMy: Gi,
              isNode: Hi,
              isBrowser: Ui,
              isCanvasElement: Sr,
              getPixelRatio: Cr,
              getStyle: Ct,
              getWidth: Pe,
              getHeight: we,
              getDomById: Pr,
              getRelativePosition: qt,
              addEventListener: wr,
              removeEventListener: Mr,
              createEvent: Me,
              measureText: be,
            }),
            Dr = '#E8E8E8',
            Vi = '#808080',
            Pt = {
              label: { fill: Vi, fontSize: 10 },
              line: { stroke: Dr, lineWidth: 1 },
              grid: { type: 'line', stroke: Dr, lineWidth: 1, lineDash: [2] },
              tickLine: null,
              labelOffset: 7.5,
            },
            Wi = {
              fontFamily:
                '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
              defaultColor: '#1890FF',
              pixelRatio: 1,
              padding: 'auto',
              appendPadding: 15,
              colors: [
                '#1890FF',
                '#2FC25B',
                '#FACC14',
                '#223273',
                '#8543E0',
                '#13C2C2',
                '#3436C7',
                '#F04864',
              ],
              shapes: { line: ['line', 'dash'], point: ['circle', 'hollowCircle'] },
              sizes: [4, 10],
              axis: {
                common: Pt,
                bottom: _({}, Pt, { grid: null }),
                left: _({}, Pt, { line: null }),
                right: _({}, Pt, { line: null }),
                circle: _({}, Pt, { line: null }),
                radius: _({}, Pt, { labelOffset: 4 }),
              },
              shape: {
                line: { lineWidth: 2, lineJoin: 'round', lineCap: 'round' },
                point: { lineWidth: 0, size: 3 },
                area: { fillOpacity: 0.1 },
              },
              _defaultAxis: Pt,
            },
            D = {
              version: '3.7.7',
              scales: {},
              widthRatio: { column: 1 / 2, rose: 0.999999, multiplePie: 3 / 4 },
              lineDash: [4, 4],
            };
          (D.setTheme = function(i) {
            z(this, i);
          }),
            D.setTheme(Wi);
          function N(i, r, a) {
            return (
              r in i
                ? Object.defineProperty(i, r, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (i[r] = a),
              i
            );
          }
          function Zt() {
            return (
              (Zt =
                Object.assign ||
                function(i) {
                  for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (i[e] = a[e]);
                  }
                  return i;
                }),
              Zt.apply(this, arguments)
            );
          }
          function E(i, r) {
            (i.prototype = Object.create(r.prototype)),
              (i.prototype.constructor = i),
              (i.__proto__ = r);
          }
          function Jt(i) {
            if (i === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i;
          }
          var Te = 'afterinit',
            qi = 'beforerender',
            $i = 'afterrender',
            Zi = 'beforedatachange',
            Ft = 'afterdatachange',
            De = '_aftersizechange',
            Ji = '_aftergeominit',
            Ki = 'beforegeomdraw',
            Qi = 'aftergeomdraw',
            tn = 'clear',
            en = 'clearinner',
            rn = 'repaint',
            Ee = (function() {
              function i() {
                this.__events = {};
              }
              var r = i.prototype;
              return (
                (r.on = function(e, t) {
                  if (!e || !t) return;
                  var n = this.__events[e] || [];
                  n.push(t), (this.__events[e] = n);
                }),
                (r.emit = function(e, t) {
                  var n = this;
                  if ((j(e) && ((t = e), (e = t && t.type)), !e)) return;
                  var s = this.__events[e];
                  if (!s || !s.length) return;
                  s.forEach(function(o) {
                    o.call(n, t);
                  });
                }),
                (r.off = function(e, t) {
                  var n = this.__events,
                    s = n[e];
                  if (!s || !s.length) return;
                  if (!t) {
                    delete n[e];
                    return;
                  }
                  for (var o = 0, l = s.length; o < l; o++) s[o] === t && (s.splice(o, 1), o--);
                }),
                i
              );
            })(),
            Er = (function(i) {
              E(a, i);
              var r = a.prototype;
              r.getDefaultCfg = function() {
                return {};
              };
              function a(e) {
                var t;
                t = i.call(this) || this;
                var n = {},
                  s = t.getDefaultCfg();
                return (t._attrs = n), _(n, s, e), t;
              }
              return (
                (r.get = function(t) {
                  return this._attrs[t];
                }),
                (r.set = function(t, n) {
                  this._attrs[t] = n;
                }),
                (r.destroy = function() {
                  (this._attrs = {}), (this.destroyed = !0);
                }),
                a
              );
            })(Ee),
            an = (function() {
              function i(a) {
                _(this, a), this._init();
              }
              var r = i.prototype;
              return (
                (r._init = function() {
                  var e = this,
                    t = e.start,
                    n = e.end,
                    s = Math.min(t.x, n.x),
                    o = Math.max(t.x, n.x),
                    l = Math.min(t.y, n.y),
                    u = Math.max(t.y, n.y);
                  (this.tl = { x: s, y: l }),
                    (this.tr = { x: o, y: l }),
                    (this.bl = { x: s, y: u }),
                    (this.br = { x: o, y: u }),
                    (this.width = o - s),
                    (this.height = u - l);
                }),
                (r.reset = function(e, t) {
                  (this.start = e), (this.end = t), this._init();
                }),
                (r.isInRange = function(e, t) {
                  j(e) && ((t = e.y), (e = e.x));
                  var n = this.tl,
                    s = this.br;
                  return n.x <= e && e <= s.x && n.y <= t && t <= s.y;
                }),
                i
              );
            })(),
            G = {
              generateDefault: function() {
                return [1, 0, 0, 1, 0, 0];
              },
              isChanged: function(r) {
                return (
                  r[0] !== 1 || r[1] !== 0 || r[2] !== 0 || r[3] !== 1 || r[4] !== 0 || r[5] !== 0
                );
              },
              multiply: function(r, a) {
                var e = r[0] * a[0] + r[2] * a[1],
                  t = r[1] * a[0] + r[3] * a[1],
                  n = r[0] * a[2] + r[2] * a[3],
                  s = r[1] * a[2] + r[3] * a[3],
                  o = r[0] * a[4] + r[2] * a[5] + r[4],
                  l = r[1] * a[4] + r[3] * a[5] + r[5];
                return [e, t, n, s, o, l];
              },
              scale: function(r, a, e) {
                return (
                  (r[0] = a[0] * e[0]),
                  (r[1] = a[1] * e[0]),
                  (r[2] = a[2] * e[1]),
                  (r[3] = a[3] * e[1]),
                  (r[4] = a[4]),
                  (r[5] = a[5]),
                  r
                );
              },
              rotate: function(r, a, e) {
                var t = Math.cos(e),
                  n = Math.sin(e),
                  s = a[0] * t + a[2] * n,
                  o = a[1] * t + a[3] * n,
                  l = a[0] * -n + a[2] * t,
                  u = a[1] * -n + a[3] * t;
                return (
                  (r[0] = s), (r[1] = o), (r[2] = l), (r[3] = u), (r[4] = a[4]), (r[5] = a[5]), r
                );
              },
              translate: function(r, a, e) {
                return (
                  (r[0] = a[0]),
                  (r[1] = a[1]),
                  (r[2] = a[2]),
                  (r[3] = a[3]),
                  (r[4] = a[4] + a[0] * e[0] + a[2] * e[1]),
                  (r[5] = a[5] + a[1] * e[0] + a[3] * e[1]),
                  r
                );
              },
              transform: function(r, a) {
                for (var e = [].concat(r), t = 0, n = a.length; t < n; t++) {
                  var s = a[t];
                  switch (s[0]) {
                    case 't':
                      G.translate(e, e, [s[1], s[2]]);
                      break;
                    case 's':
                      G.scale(e, e, [s[1], s[2]]);
                      break;
                    case 'r':
                      G.rotate(e, e, s[1]);
                      break;
                  }
                }
                return e;
              },
            },
            A = {
              create: function() {
                return [0, 0];
              },
              length: function(r) {
                var a = r[0],
                  e = r[1];
                return Math.sqrt(a * a + e * e);
              },
              normalize: function(r, a) {
                var e = this.length(a);
                return (
                  e === 0 ? ((r[0] = 0), (r[1] = 0)) : ((r[0] = a[0] / e), (r[1] = a[1] / e)), r
                );
              },
              add: function(r, a, e) {
                return (r[0] = a[0] + e[0]), (r[1] = a[1] + e[1]), r;
              },
              sub: function(r, a, e) {
                return (r[0] = a[0] - e[0]), (r[1] = a[1] - e[1]), r;
              },
              scale: function(r, a, e) {
                return (r[0] = a[0] * e), (r[1] = a[1] * e), r;
              },
              dot: function(r, a) {
                return r[0] * a[0] + r[1] * a[1];
              },
              direction: function(r, a) {
                return r[0] * a[1] - a[0] * r[1];
              },
              angle: function(r, a) {
                var e = this.dot(r, a) / (this.length(r) * this.length(a));
                return Math.acos(e);
              },
              angleTo: function(r, a, e) {
                var t = this.angle(r, a),
                  n = this.direction(r, a) >= 0;
                return e ? (n ? Math.PI * 2 - t : t) : n ? t : Math.PI * 2 - t;
              },
              zero: function(r) {
                return r[0] === 0 && r[1] === 0;
              },
              distance: function(r, a) {
                var e = a[0] - r[0],
                  t = a[1] - r[1];
                return Math.sqrt(e * e + t * t);
              },
              clone: function(r) {
                return [r[0], r[1]];
              },
              min: function(r, a, e) {
                return (r[0] = Math.min(a[0], e[0])), (r[1] = Math.min(a[1], e[1])), r;
              },
              max: function(r, a, e) {
                return (r[0] = Math.max(a[0], e[0])), (r[1] = Math.max(a[1], e[1])), r;
              },
              transformMat2d: function(r, a, e) {
                var t = a[0],
                  n = a[1];
                return (r[0] = e[0] * t + e[2] * n + e[4]), (r[1] = e[1] * t + e[3] * n + e[5]), r;
              },
            },
            nn = [1, 0, 0, 1, 0, 0],
            Dt = (function() {
              var i = r.prototype;
              i._initDefaultCfg = function() {};
              function r(a) {
                this._initDefaultCfg(), _(this, a);
                var e, t;
                this.plot
                  ? ((e = this.plot.bl), (t = this.plot.tr), (this.start = e), (this.end = t))
                  : ((e = this.start), (t = this.end)),
                  this.init(e, t);
              }
              return (
                (i._scale = function(e, t) {
                  var n = this.matrix,
                    s = this.center;
                  G.translate(n, n, [s.x, s.y]),
                    G.scale(n, n, [e, t]),
                    G.translate(n, n, [-s.x, -s.y]);
                }),
                (i.init = function(e, t) {
                  (this.matrix = [].concat(nn)),
                    (this.center = { x: (t.x - e.x) / 2 + e.x, y: (t.y - e.y) / 2 + e.y }),
                    this.scale && this._scale(this.scale[0], this.scale[1]);
                }),
                (i.convertPoint = function(e) {
                  var t = this._convertPoint(e),
                    n = t.x,
                    s = t.y;
                  if (!G.isChanged(this.matrix)) return { x: n, y: s };
                  var o = [n, s];
                  return A.transformMat2d(o, o, this.matrix), { x: o[0], y: o[1] };
                }),
                (i.invertPoint = function(e) {
                  return this._invertPoint(e);
                }),
                (i._convertPoint = function(e) {
                  return e;
                }),
                (i._invertPoint = function(e) {
                  return e;
                }),
                (i.reset = function(e) {
                  this.plot = e;
                  var t = e.bl,
                    n = e.tr;
                  (this.start = t), (this.end = n), this.init(t, n);
                }),
                r
              );
            })(),
            Ar = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initDefaultCfg = function() {
                  (this.type = 'cartesian'), (this.transposed = !1), (this.isRect = !0);
                }),
                (a.init = function(t, n) {
                  i.prototype.init.call(this, t, n),
                    (this.x = { start: t.x, end: n.x }),
                    (this.y = { start: t.y, end: n.y });
                }),
                (a._convertPoint = function(t) {
                  var n = this,
                    s = n.transposed,
                    o = s ? 'y' : 'x',
                    l = s ? 'x' : 'y',
                    u = n.x,
                    c = n.y;
                  return {
                    x: u.start + (u.end - u.start) * t[o],
                    y: c.start + (c.end - c.start) * t[l],
                  };
                }),
                (a._invertPoint = function(t) {
                  var n = this,
                    s = n.transposed,
                    o = s ? 'y' : 'x',
                    l = s ? 'x' : 'y',
                    u = n.x,
                    c = n.y,
                    f = {};
                  return (
                    (f[o] = (t.x - u.start) / (u.end - u.start)),
                    (f[l] = (t.y - c.start) / (c.end - c.start)),
                    f
                  );
                }),
                r
              );
            })(Dt);
          (Dt.Cartesian = Ar), (Dt.Rect = Ar);
          function kr(i, r) {
            return B(r) ? r : i.invert(i.scale(r));
          }
          var Kt = (function() {
              function i(a) {
                var e = this;
                (this.type = 'base'),
                  (this.name = null),
                  (this.method = null),
                  (this.values = []),
                  (this.scales = []),
                  (this.linear = null);
                var t = null,
                  n = this.callback;
                if (a.callback) {
                  var s = a.callback;
                  t = function() {
                    for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
                      u[c] = arguments[c];
                    var f = s.apply(void 0, u);
                    return w(f) && (f = n.apply(e, u)), f;
                  };
                }
                _(this, a), t && _(this, { callback: t });
              }
              var r = i.prototype;
              return (
                (r._getAttrValue = function(e, t) {
                  var n = this.values;
                  if (e.isCategory && !this.linear) {
                    var s = e.translate(t);
                    return n[s % n.length];
                  }
                  var o = e.scale(t);
                  return this.getLinearValue(o);
                }),
                (r.getLinearValue = function(e) {
                  var t = this.values,
                    n = t.length - 1,
                    s = Math.floor(n * e),
                    o = n * e - s,
                    l = t[s],
                    u = s === n ? l : t[s + 1],
                    c = l + (u - l) * o;
                  return c;
                }),
                (r.callback = function(e) {
                  var t = this,
                    n = t.scales[0],
                    s = null;
                  return n.type === 'identity' ? (s = n.value) : (s = t._getAttrValue(n, e)), s;
                }),
                (r.getNames = function() {
                  for (
                    var e = this.scales,
                      t = this.names,
                      n = Math.min(e.length, t.length),
                      s = [],
                      o = 0;
                    o < n;
                    o++
                  )
                    s.push(t[o]);
                  return s;
                }),
                (r.getFields = function() {
                  var e = this.scales,
                    t = [];
                  return (
                    C(e, function(n) {
                      t.push(n.field);
                    }),
                    t
                  );
                }),
                (r.getScale = function(e) {
                  var t = this.scales,
                    n = this.names,
                    s = n.indexOf(e);
                  return t[s];
                }),
                (r.mapping = function() {
                  for (
                    var e = this.scales,
                      t = this.callback,
                      n = arguments.length,
                      s = new Array(n),
                      o = 0;
                    o < n;
                    o++
                  )
                    s[o] = arguments[o];
                  var l = s;
                  if (t) {
                    for (var u = 0, c = s.length; u < c; u++)
                      s[u] = this._toOriginParam(s[u], e[u]);
                    l = t.apply(this, s);
                  }
                  return (l = [].concat(l)), l;
                }),
                (r._toOriginParam = function(e, t) {
                  var n = e;
                  if (!t.isLinear)
                    if (k(e)) {
                      n = [];
                      for (var s = 0, o = e.length; s < o; s++) n.push(kr(t, e[s]));
                    } else n = kr(t, e);
                  return n;
                }),
                i
              );
            })(),
            sn = (function(i) {
              E(r, i);
              function r(e) {
                var t;
                return (
                  (t = i.call(this, e) || this), (t.names = ['x', 'y']), (t.type = 'position'), t
                );
              }
              var a = r.prototype;
              return (
                (a.mapping = function(t, n) {
                  var s = this.scales,
                    o = this.coord,
                    l = s[0],
                    u = s[1],
                    c,
                    f,
                    h;
                  if (w(t) || w(n)) return [];
                  if (k(n) && k(t)) {
                    (c = []), (f = []);
                    for (var v = 0, g = 0, p = t.length, m = n.length; v < p && g < m; v++, g++)
                      (h = o.convertPoint({ x: l.scale(t[v]), y: u.scale(n[g]) })),
                        c.push(h.x),
                        f.push(h.y);
                  } else if (k(n))
                    (t = l.scale(t)),
                      (f = []),
                      C(n, function(y) {
                        (y = u.scale(y)),
                          (h = o.convertPoint({ x: t, y })),
                          c && c !== h.x ? (k(c) || (c = [c]), c.push(h.x)) : (c = h.x),
                          f.push(h.y);
                      });
                  else if (k(t))
                    (n = u.scale(n)),
                      (c = []),
                      C(t, function(y) {
                        (y = l.scale(y)),
                          (h = o.convertPoint({ x: y, y: n })),
                          f && f !== h.y ? (k(f) || (f = [f]), f.push(h.y)) : (f = h.y),
                          c.push(h.x);
                      });
                  else {
                    (t = l.scale(t)), (n = u.scale(n));
                    var d = o.convertPoint({ x: t, y: n });
                    (c = d.x), (f = d.y);
                  }
                  return [c, f];
                }),
                r
              );
            })(Kt),
            on = (function(i) {
              E(r, i);
              function r(e) {
                var t;
                return (
                  (t = i.call(this, e) || this),
                  (t.names = ['shape']),
                  (t.type = 'shape'),
                  (t.gradient = null),
                  t
                );
              }
              var a = r.prototype;
              return (
                (a.getLinearValue = function(t) {
                  var n = this.values,
                    s = Math.round((n.length - 1) * t);
                  return n[s];
                }),
                r
              );
            })(Kt),
            ln = (function(i) {
              E(r, i);
              function r(a) {
                var e;
                return (
                  (e = i.call(this, a) || this),
                  (e.names = ['size']),
                  (e.type = 'size'),
                  (e.gradient = null),
                  e
                );
              }
              return r;
            })(Kt);
          function Ae(i, r, a, e) {
            var t = i[e] + (r[e] - i[e]) * a;
            return t;
          }
          function Ir(i) {
            return '#' + ke(i[0]) + ke(i[1]) + ke(i[2]);
          }
          function ke(i) {
            return (i = Math.round(i)), (i = i.toString(16)), i.length === 1 && (i = '0' + i), i;
          }
          function un(i, r) {
            var a = i.length - 1,
              e = Math.floor(a * r),
              t = a * r - e,
              n = i[e],
              s = e === a ? n : i[e + 1],
              o = Ir([Ae(n, s, t, 0), Ae(n, s, t, 1), Ae(n, s, t, 2)]);
            return o;
          }
          function cn(i) {
            var r = [];
            return (
              r.push(parseInt(i.substr(1, 2), 16)),
              r.push(parseInt(i.substr(3, 2), 16)),
              r.push(parseInt(i.substr(5, 2), 16)),
              r
            );
          }
          var Qt = {
            black: '#000000',
            blue: '#0000ff',
            grey: '#808080',
            green: '#008000',
            orange: '#ffa500',
            pink: '#ffc0cb',
            purple: '#800080',
            red: '#ff0000',
            white: '#ffffff',
            yellow: '#ffff00',
          };
          function fn(i) {
            if (Qt[i]) return Qt[i];
            if (i[0] === '#') {
              if (i.length === 7) return i;
              var r = i.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, s) {
                return '#' + t + t + n + n + s + s;
              });
              return (Qt[i] = r), r;
            }
            var a = i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return a.shift(), (a = Ir(a)), (Qt[i] = a), a;
          }
          function hn(i) {
            var r = [];
            return (
              B(i) && (i = i.split('-')),
              C(i, function(a) {
                a.indexOf('#') === -1 && (a = fn(a)), r.push(cn(a));
              }),
              function(a) {
                return un(r, a);
              }
            );
          }
          var vn = (function(i) {
              E(r, i);
              function r(e) {
                var t;
                return (
                  (t = i.call(this, e) || this),
                  (t.names = ['color']),
                  (t.type = 'color'),
                  (t.gradient = null),
                  B(t.values) && (t.linear = !0),
                  t
                );
              }
              var a = r.prototype;
              return (
                (a.getLinearValue = function(t) {
                  var n = this.gradient;
                  if (!n) {
                    var s = this.values;
                    (n = hn(s)), (this.gradient = n);
                  }
                  return n(t);
                }),
                r
              );
            })(Kt),
            gn = Object.freeze({ __proto__: null, Position: sn, Shape: on, Size: ln, Color: vn }),
            Y = {},
            pn = {
              _coord: null,
              draw: function(r, a) {
                this.drawShape && this.drawShape(r, a);
              },
              setCoord: function(r) {
                this._coord = r;
              },
              parsePoint: function(r) {
                var a = this._coord;
                return (
                  a.isPolar && (r.x === 1 && (r.x = 0.9999999), r.y === 1 && (r.y = 0.9999999)),
                  a.convertPoint(r)
                );
              },
              parsePoints: function(r) {
                if (!r) return !1;
                var a = this,
                  e = [];
                return (
                  r.forEach(function(t) {
                    e.push(a.parsePoint(t));
                  }),
                  e
                );
              },
            },
            dn = {
              defaultShapeType: null,
              setCoord: function(r) {
                this._coord = r;
              },
              getShape: function(r) {
                var a = this;
                k(r) && (r = r[0]);
                var e = a[r] || a[a.defaultShapeType];
                return (e._coord = a._coord), e;
              },
              getShapePoints: function(r, a) {
                var e = this.getShape(r),
                  t = e.getPoints || e.getShapePoints || this.getDefaultPoints,
                  n = t(a);
                return n;
              },
              getDefaultPoints: function() {
                return [];
              },
              drawShape: function(r, a, e) {
                var t = this.getShape(r);
                return a.color || (a.color = D.colors[0]), t.draw(a, e);
              },
            };
          (Y.registerFactory = function(i, r) {
            var a = lt(i),
              e = _({}, dn, r);
            return (Y[a] = e), (e.name = i), e;
          }),
            (Y.registerShape = function(i, r, a) {
              var e = lt(i),
                t = Y[e],
                n = _({}, pn, a);
              return (t[r] = n), n;
            }),
            (Y.registShape = Y.registerShape),
            (Y.getShapeFactory = function(i) {
              var r = this;
              i = i || 'point';
              var a = lt(i);
              return r[a];
            });
          function Ie(i, r) {
            for (var a in r)
              r.hasOwnProperty(a) && a !== 'constructor' && r[a] !== void 0 && (i[a] = r[a]);
          }
          var mn = function(r, a, e, t) {
              return a && Ie(r, a), e && Ie(r, e), t && Ie(r, t), r;
            },
            yn = mn,
            xn = (function() {
              var i = r.prototype;
              i._initDefaultCfg = function() {
                this.adjustNames = ['x', 'y'];
              };
              function r(a) {
                this._initDefaultCfg(), yn(this, a);
              }
              return (i.processAdjust = function() {}), r;
            })(),
            ft = xn,
            _n = ['color', 'size', 'shape'],
            it = '_origin',
            te = '_originY';
          function Or(i) {
            return k(i) ? i : B(i) ? i.split('*') : [i];
          }
          var V = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a.getDefaultCfg = function() {
                  return {
                    type: null,
                    data: null,
                    attrs: {},
                    scales: {},
                    container: null,
                    styleOptions: null,
                    chart: null,
                    shapeType: '',
                    generatePoints: !1,
                    attrOptions: {},
                    sortable: !1,
                    startOnZero: !0,
                    visible: !0,
                    connectNulls: !1,
                    ignoreEmptyGroup: !1,
                    isInit: !1,
                  };
                }),
                (a.init = function() {
                  var t = this,
                    n = t.get('isInit');
                  if (n) return;
                  t._initAttrs(), t._processData(), t.set('isInit', !0);
                }),
                (a._getGroupScales = function() {
                  var t = this,
                    n = [];
                  return (
                    C(_n, function(s) {
                      var o = t.getAttr(s);
                      if (o) {
                        var l = o.scales;
                        C(l, function(u) {
                          u && u.isCategory && n.indexOf(u) === -1 && n.push(u);
                        });
                      }
                    }),
                    n
                  );
                }),
                (a._groupData = function(t) {
                  var n = this,
                    s = n.get('colDefs'),
                    o = n._getGroupScales();
                  if (o.length) {
                    var l = {},
                      u = [];
                    return (
                      C(o, function(c) {
                        var f = c.field;
                        u.push(f), s && s[f] && s[f].values && (l[c.field] = s[f].values);
                      }),
                      xr(t, u, l)
                    );
                  }
                  return [t];
                }),
                (a._setAttrOptions = function(t, n) {
                  var s = this.get('attrOptions');
                  s[t] = n;
                  var o = this.get('attrs');
                  Object.keys(o).length && this._createAttr(t, n);
                }),
                (a._createAttrOption = function(t, n, s, o) {
                  var l = {};
                  (l.field = n),
                    s ? (F(s) ? (l.callback = s) : (l.values = s)) : (l.values = o),
                    this._setAttrOptions(t, l);
                }),
                (a._createAttr = function(t, n) {
                  var s = this,
                    o = s.get('attrs'),
                    l = s.get('coord'),
                    u = lt(t),
                    c = Or(n.field);
                  t === 'position' && (n.coord = l);
                  for (var f = [], h = 0, v = c.length; h < v; h++) {
                    var g = c[h],
                      p = s._createScale(g);
                    f.push(p);
                  }
                  if (t === 'position') {
                    var m = f[1];
                    l.type === 'polar' &&
                      l.transposed &&
                      s.hasAdjust('stack') &&
                      m.values.length &&
                        m.change({ nice: !1, min: 0, max: Math.max.apply(null, m.values) });
                  }
                  n.scales = f;
                  var d = new gn[u](n);
                  return (o[t] = d), d;
                }),
                (a._initAttrs = function() {
                  var t = this,
                    n = t.get('attrOptions');
                  for (var s in n) n.hasOwnProperty(s) && this._createAttr(s, n[s]);
                }),
                (a._createScale = function(t) {
                  var n = this.get('scales'),
                    s = n[t];
                  return s || ((s = this.get('chart').createScale(t)), (n[t] = s)), s;
                }),
                (a._processData = function() {
                  var t = this,
                    n = this.get('data'),
                    s = [],
                    o = this._groupData(n);
                  if (this.get('ignoreEmptyGroup')) {
                    var l = this.getYScale();
                    o = o.filter(function(v) {
                      return v.some(function(g) {
                        return typeof g[l.field] != 'undefined';
                      });
                    });
                  }
                  for (var u = 0, c = o.length; u < c; u++) {
                    var f = o[u],
                      h = t._saveOrigin(f);
                    this.hasAdjust('dodge') && t._numberic(h), s.push(h);
                  }
                  return (
                    t.get('adjust') && t._adjustData(s),
                    t.get('sortable') && t._sort(s),
                    t.emit('afterprocessdata', { dataArray: s }),
                    t.set('mappingData', s),
                    t.set('dataArray', s),
                    s
                  );
                }),
                (a._saveOrigin = function(t) {
                  for (var n = [], s = 0, o = t.length; s < o; s++) {
                    var l = t[s],
                      u = {};
                    for (var c in l) u[c] = l[c];
                    (u[it] = l), n.push(u);
                  }
                  return n;
                }),
                (a._numberic = function(t) {
                  for (
                    var n = this.getAttr('position'), s = n.scales, o = 0, l = t.length;
                    o < l;
                    o++
                  )
                    for (var u = t[o], c = Math.min(2, s.length), f = 0; f < c; f++) {
                      var h = s[f];
                      if (h.isCategory) {
                        var v = h.field;
                        u[v] = h.translate(u[v]);
                      }
                    }
                }),
                (a._adjustData = function(t) {
                  var n = this,
                    s = n.get('adjust');
                  if (s) {
                    var o = lt(s.type);
                    if (!ft[o]) throw new Error('not support such adjust : ' + s);
                    var l = n.getXScale(),
                      u = n.getYScale(),
                      c = _({ xField: l.field, yField: u.field }, s),
                      f = new ft[o](c);
                    f.processAdjust(t), o === 'Stack' && n._updateStackRange(u.field, u, t);
                  }
                }),
                (a._updateStackRange = function(t, n, s) {
                  for (var o = dr(s), l = n.min, u = n.max, c = 0, f = o.length; c < f; c++) {
                    var h = o[c],
                      v = Math.min.apply(null, h[t]),
                      g = Math.max.apply(null, h[t]);
                    v < l && (l = v), g > u && (u = g);
                  }
                  (l < n.min || u > n.max) && n.change({ min: l, max: u });
                }),
                (a._sort = function(t) {
                  var n = this,
                    s = n.getXScale(),
                    o = s.field,
                    l = s.type;
                  l !== 'identity' &&
                    s.values.length > 1 &&
                    C(t, function(u) {
                      u.sort(function(c, f) {
                        return l === 'timeCat'
                          ? Yt(c[it][o]) - Yt(f[it][o])
                          : s.translate(c[it][o]) - s.translate(f[it][o]);
                      });
                    }),
                    n.set('hasSorted', !0),
                    n.set('dataArray', t);
                }),
                (a.paint = function() {
                  var t = this,
                    n = t.get('mappingData'),
                    s = [],
                    o = t.getShapeFactory();
                  o.setCoord(t.get('coord')), t._beforeMapping(n);
                  for (var l = 0, u = n.length; l < u; l++) {
                    var c = n[l];
                    if (c.length) {
                      var f = t._mapping(c);
                      s.push(f), t.draw(f, o);
                    }
                  }
                  t.set('dataArray', s);
                }),
                (a.getShapeFactory = function() {
                  var t = this.get('shapeFactory');
                  if (!t) {
                    var n = this.get('shapeType');
                    (t = Y.getShapeFactory(n)), this.set('shapeFactory', t);
                  }
                  return t;
                }),
                (a._mapping = function(t) {
                  var n = this,
                    s = n.get('attrs'),
                    o = n.getYScale().field,
                    l = {},
                    u = new Array(t.length);
                  for (var c in s)
                    if (s.hasOwnProperty(c))
                      for (
                        var f = s[c], h = f.names, v = f.scales, g = 0, p = t.length;
                        g < p;
                        g++
                      ) {
                        var m = t[g],
                          d = Zt({}, m, u[g]);
                        if (((d[te] = m[o]), f.type === 'position'))
                          for (var y = n._getAttrValues(f, m), x = 0, S = y.length; x < S; x++) {
                            var P = y[x],
                              b = h[x];
                            d[b] = k(P) && P.length === 1 ? P[0] : P;
                          }
                        else {
                          var M = h[0],
                            I = v[0].field,
                            O = m[I],
                            T = '' + M + O,
                            L = l[T];
                          L || ((L = n._getAttrValues(f, m)), (l[T] = L)), (d[M] = L[0]);
                        }
                        u[g] = d;
                      }
                  return u;
                }),
                (a._getAttrValues = function(t, n) {
                  for (var s = t.scales, o = [], l = 0, u = s.length; l < u; l++) {
                    var c = s[l],
                      f = c.field;
                    c.type === 'identity' ? o.push(c.value) : o.push(n[f]);
                  }
                  var h = t.mapping.apply(t, o);
                  return h;
                }),
                (a.getAttrValue = function(t, n) {
                  var s = this.getAttr(t),
                    o = null;
                  if (s) {
                    var l = this._getAttrValues(s, n);
                    o = l[0];
                  }
                  return o;
                }),
                (a._beforeMapping = function(t) {
                  var n = this;
                  n.get('generatePoints') && n._generatePoints(t);
                }),
                (a.isInCircle = function() {
                  var t = this.get('coord');
                  return t && t.isPolar;
                }),
                (a.getCallbackCfg = function(t, n, s) {
                  if (!t) return n;
                  var o = {},
                    l = t.map(function(u) {
                      return s[u];
                    });
                  return (
                    C(n, function(u, c) {
                      F(u) ? (o[c] = u.apply(null, l)) : (o[c] = u);
                    }),
                    o
                  );
                }),
                (a.getDrawCfg = function(t) {
                  var n = this,
                    s = n.isInCircle(),
                    o = {
                      origin: t,
                      x: t.x,
                      y: t.y,
                      color: t.color,
                      size: t.size,
                      shape: t.shape,
                      isInCircle: s,
                      opacity: t.opacity,
                    },
                    l = n.get('styleOptions');
                  return (
                    l && l.style && (o.style = n.getCallbackCfg(l.fields, l.style, t[it])),
                    n.get('generatePoints') &&
                      ((o.points = t.points), (o.nextPoints = t.nextPoints)),
                    s && (o.center = n.get('coord').center),
                    o
                  );
                }),
                (a.draw = function(t, n) {
                  var s = this,
                    o = s.get('container'),
                    l = s.getYScale();
                  C(t, function(u, c) {
                    if (l && w(u._origin[l.field])) return;
                    u.index = c;
                    var f = s.getDrawCfg(u),
                      h = u.shape;
                    s.drawShape(h, u, f, o, n);
                  });
                }),
                (a.drawShape = function(t, n, s, o, l) {
                  var u = l.drawShape(t, s, o);
                  u &&
                    C([].concat(u), function(c) {
                      c.set('origin', n);
                    });
                }),
                (a._generatePoints = function(t) {
                  var n = this,
                    s = n.getShapeFactory(),
                    o = n.getAttr('shape');
                  C(t, function(l) {
                    for (var u = 0, c = l.length; u < c; u++) {
                      var f = l[u],
                        h = n.createShapePointsCfg(f),
                        v = o ? n._getAttrValues(o, f) : null,
                        g = s.getShapePoints(v, h);
                      f.points = g;
                    }
                  }),
                    C(t, function(l, u) {
                      var c = t[u + 1];
                      c && (l[0].nextPoints = c[0].points);
                    });
                }),
                (a.createShapePointsCfg = function(t) {
                  var n = this.getXScale(),
                    s = this.getYScale(),
                    o = this._normalizeValues(t[n.field], n),
                    l;
                  return (
                    s ? (l = this._normalizeValues(t[s.field], s)) : (l = t.y ? t.y : 0.1),
                    { x: o, y: l, y0: s ? s.scale(this.getYMinValue()) : void 0 }
                  );
                }),
                (a.getYMinValue = function() {
                  var t = this.getYScale(),
                    n = t.min,
                    s = t.max,
                    o;
                  return (
                    this.get('startOnZero')
                      ? s <= 0 && n <= 0
                        ? (o = s)
                        : (o = n >= 0 ? n : 0)
                      : (o = n),
                    o
                  );
                }),
                (a._normalizeValues = function(t, n) {
                  var s = [];
                  if (k(t))
                    for (var o = 0, l = t.length; o < l; o++) {
                      var u = t[o];
                      s.push(n.scale(u));
                    }
                  else s = n.scale(t);
                  return s;
                }),
                (a.getAttr = function(t) {
                  return this.get('attrs')[t];
                }),
                (a.getXScale = function() {
                  return this.getAttr('position').scales[0];
                }),
                (a.getYScale = function() {
                  return this.getAttr('position').scales[1];
                }),
                (a.hasAdjust = function(t) {
                  return this.get('adjust') && this.get('adjust').type === t;
                }),
                (a._getSnap = function(t, n, s) {
                  var o = 0,
                    l,
                    u = this.getYScale().field;
                  if (this.hasAdjust('stack') && t.field === u) {
                    (l = []),
                      s.forEach(function(v) {
                        l.push(v[te]);
                      });
                    for (var c = l.length; o < c && !(l[0][0] > n); o++) {
                      if (l[l.length - 1][1] <= n) {
                        o = l.length - 1;
                        break;
                      }
                      if (l[o][0] <= n && l[o][1] > n) break;
                    }
                  } else {
                    (l = t.values),
                      l.sort(function(v, g) {
                        return v - g;
                      });
                    for (var f = l.length; o < f && !(f <= 1); o++) {
                      if ((l[0] + l[1]) / 2 > n) break;
                      if ((l[o - 1] + l[o]) / 2 <= n && (l[o + 1] + l[o]) / 2 > n) break;
                      if ((l[l.length - 2] + l[l.length - 1]) / 2 <= n) {
                        o = l.length - 1;
                        break;
                      }
                    }
                  }
                  var h = l[o];
                  return h;
                }),
                (a.getSnapRecords = function(t) {
                  var n = this,
                    s = n.get('coord'),
                    o = n.getXScale(),
                    l = n.getYScale(),
                    u = o.field,
                    c = n.get('dataArray');
                  this.get('hasSorted') || this._sort(c);
                  var f = [],
                    h = s.invertPoint(t),
                    v = h.x;
                  n.isInCircle() &&
                    !s.transposed &&
                    v > (1 + o.rangeMax()) / 2 &&
                    (v = o.rangeMin());
                  var g = o.invert(v);
                  o.isCategory || (g = n._getSnap(o, g));
                  var p = [];
                  if (
                    (c.forEach(function(d) {
                      d.forEach(function(y) {
                        var x = w(y[it]) ? y[u] : y[it][u];
                        n._isEqual(x, g, o) && p.push(y);
                      });
                    }),
                    this.hasAdjust('stack') && s.isPolar && s.transposed)
                  ) {
                    if (v >= 0 && v <= 1) {
                      var m = l.invert(h.y);
                      (m = n._getSnap(l, m, p)),
                        p.forEach(function(d) {
                          (k(m) ? d[te].toString() === m.toString() : d[te] === m) && f.push(d);
                        });
                    }
                  } else f = p;
                  return f;
                }),
                (a.getRecords = function(t) {
                  var n = this,
                    s = this.getXScale(),
                    o = this.get('dataArray'),
                    l = s.field;
                  return o.map(function(u) {
                    for (var c = u.length, f = c - 1; f >= 0; f--) {
                      var h = u[f],
                        v = w(h[it]) ? h[l] : h[it][l];
                      if (n._isEqual(v, t, s)) return h;
                    }
                    return null;
                  });
                }),
                (a._isEqual = function(t, n, s) {
                  return s.type === 'timeCat' ? Yt(t) === n : n === t;
                }),
                (a.position = function(t) {
                  return this._setAttrOptions('position', { field: t }), this;
                }),
                (a.color = function(t, n) {
                  return this._createAttrOption('color', t, n, D.colors), this;
                }),
                (a.size = function(t, n) {
                  return this._createAttrOption('size', t, n, D.sizes), this;
                }),
                (a.shape = function(t, n) {
                  var s = this.get('type'),
                    o = D.shapes[s] || [];
                  return this._createAttrOption('shape', t, n, o), this;
                }),
                (a.style = function(t, n) {
                  var s = this.get('styleOptions');
                  s || ((s = {}), this.set('styleOptions', s)), j(t) && ((n = t), (t = null));
                  var o;
                  return t && (o = Or(t)), (s.fields = o), (s.style = n), this;
                }),
                (a.adjust = function(t) {
                  return B(t) && (t = { type: t }), this.set('adjust', t), this;
                }),
                (a.animate = function(t) {
                  return this.set('animateCfg', t), this;
                }),
                (a.changeData = function(t) {
                  if ((this.set('data', t), this.set('scales', {}), !this.get('isInit'))) return;
                  this.set('isInit', !1), this.init();
                }),
                (a.clearInner = function() {
                  var t = this.get('container');
                  t && t.clear();
                }),
                (a.reset = function() {
                  this.set('isInit', !1),
                    this.set('attrs', {}),
                    this.set('attrOptions', {}),
                    this.set('adjust', null),
                    this.clearInner();
                }),
                (a.clear = function() {
                  this.clearInner();
                }),
                (a.destroy = function() {
                  this.set('isInit', !1), this.clear(), i.prototype.destroy.call(this);
                }),
                (a._display = function(t) {
                  this.set('visible', t);
                  var n = this.get('container'),
                    s = n.get('canvas');
                  n.set('visible', t), s.draw();
                }),
                (a.show = function() {
                  this._display(!0);
                }),
                (a.hide = function() {
                  this._display(!1);
                }),
                r
              );
            })(Er),
            Rr = {};
          function Nr(i) {
            return Rr[i];
          }
          function $(i, r) {
            Rr[i] = r;
          }
          var ht = (function() {
            function i(r) {
              (this.type = 'base'),
                (this.isCategory = !1),
                (this.isLinear = !1),
                (this.isContinuous = !1),
                (this.isIdentity = !1),
                (this.values = []),
                (this.range = [0, 1]),
                (this.ticks = []),
                (this.__cfg__ = r),
                this.initCfg(),
                this.init();
            }
            return (
              (i.prototype.translate = function(r) {
                return r;
              }),
              (i.prototype.change = function(r) {
                _(this.__cfg__, r), this.init();
              }),
              (i.prototype.clone = function() {
                return this.constructor(this.__cfg__);
              }),
              (i.prototype.getTicks = function() {
                var r = this;
                return gr(this.ticks, function(a, e) {
                  return j(a) ? a : { text: r.getText(a, e), tickValue: a, value: r.scale(a) };
                });
              }),
              (i.prototype.getText = function(r, a) {
                var e = this.formatter,
                  t = e ? e(r, a) : r;
                return w(t) || !F(t.toString) ? '' : t.toString();
              }),
              (i.prototype.getConfig = function(r) {
                return this.__cfg__[r];
              }),
              (i.prototype.init = function() {
                _(this, this.__cfg__),
                  this.setDomain(),
                  Fi(this.getConfig('ticks')) && (this.ticks = this.calculateTicks());
              }),
              (i.prototype.initCfg = function() {}),
              (i.prototype.setDomain = function() {}),
              (i.prototype.calculateTicks = function() {
                var r = this.tickMethod,
                  a = [];
                if (B(r)) {
                  var e = Nr(r);
                  if (!e) throw new Error('There is no method to to calculate ticks!');
                  a = e(this);
                } else F(r) && (a = r(this));
                return a;
              }),
              (i.prototype.rangeMin = function() {
                return ot(this.range);
              }),
              (i.prototype.rangeMax = function() {
                return Q(this.range);
              }),
              (i.prototype.calcPercent = function(r, a, e) {
                return X(r) ? (r - a) / (e - a) : NaN;
              }),
              (i.prototype.calcValue = function(r, a, e) {
                return a + r * (e - a);
              }),
              i
            );
          })();
          /*! *****************************************************************************
Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Oe = function(
            r,
            a,
          ) {
            return (
              (Oe =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              Oe(r, a)
            );
          };
          function nt(i, r) {
            Oe(i, r);
            function a() {
              this.constructor = i;
            }
            i.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          }
          function Sn() {
            for (var i = 0, r = 0, a = arguments.length; r < a; r++) i += arguments[r].length;
            for (var e = Array(i), t = 0, r = 0; r < a; r++)
              for (var n = arguments[r], s = 0, o = n.length; s < o; s++, t++) e[t] = n[s];
            return e;
          }
          var Re = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'cat'), (a.isCategory = !0), a;
              }
              return (
                (r.prototype.translate = function(a) {
                  var e = _e(this.values, a);
                  return e === -1 ? (X(a) ? a : NaN) : e;
                }),
                (r.prototype.scale = function(a) {
                  var e = this.translate(a),
                    t = this.calcPercent(e, this.min, this.max);
                  return this.calcValue(t, this.rangeMin(), this.rangeMax());
                }),
                (r.prototype.invert = function(a) {
                  var e = this.max - this.min,
                    t = this.calcPercent(a, this.rangeMin(), this.rangeMax()),
                    n = Math.round(e * t) + this.min;
                  return n < this.min || n > this.max ? NaN : this.values[n];
                }),
                (r.prototype.getText = function(a) {
                  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                  var n = a;
                  return (
                    X(a) && !this.values.includes(a) && (n = this.values[n]),
                    i.prototype.getText.apply(this, Sn([n], e))
                  );
                }),
                (r.prototype.initCfg = function() {
                  this.tickMethod = 'cat';
                }),
                (r.prototype.setDomain = function() {
                  if ((w(this.getConfig('min')) && (this.min = 0), w(this.getConfig('max')))) {
                    var a = this.values.length;
                    this.max = a > 1 ? a - 1 : a;
                  }
                }),
                r
              );
            })(ht),
            Yr = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
            vt = '[1-9]\\d?',
            gt = '\\d\\d',
            Cn = '\\d{3}',
            Pn = '\\d{4}',
            Lt = '[^\\s]+',
            Fr = /\[([^]*?)\]/gm;
          function Lr(i, r) {
            for (var a = [], e = 0, t = i.length; e < t; e++) a.push(i[e].substr(0, r));
            return a;
          }
          var Br = function(r) {
            return function(a, e) {
              var t = e[r].map(function(s) {
                  return s.toLowerCase();
                }),
                n = t.indexOf(a.toLowerCase());
              return n > -1 ? n : null;
            };
          };
          function pt(i) {
            for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
            for (var e = 0, t = r; e < t.length; e++) {
              var n = t[e];
              for (var s in n) i[s] = n[s];
            }
            return i;
          }
          var zr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            Xr = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            wn = Lr(Xr, 3),
            Mn = Lr(zr, 3),
            Ne = {
              dayNamesShort: Mn,
              dayNames: zr,
              monthNamesShort: wn,
              monthNames: Xr,
              amPm: ['am', 'pm'],
              DoFn: function(r) {
                return (
                  r +
                  ['th', 'st', 'nd', 'rd'][
                    r % 10 > 3 ? 0 : ((r - (r % 10) !== 10 ? 1 : 0) * r) % 10
                  ]
                );
              },
            },
            ee = pt({}, Ne),
            Gr = function(r) {
              return (ee = pt(ee, r));
            },
            Hr = function(r) {
              return r.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
            },
            W = function(r, a) {
              for (a === void 0 && (a = 2), r = String(r); r.length < a; ) r = '0' + r;
              return r;
            },
            bn = {
              D: function(r) {
                return String(r.getDate());
              },
              DD: function(r) {
                return W(r.getDate());
              },
              Do: function(r, a) {
                return a.DoFn(r.getDate());
              },
              d: function(r) {
                return String(r.getDay());
              },
              dd: function(r) {
                return W(r.getDay());
              },
              ddd: function(r, a) {
                return a.dayNamesShort[r.getDay()];
              },
              dddd: function(r, a) {
                return a.dayNames[r.getDay()];
              },
              M: function(r) {
                return String(r.getMonth() + 1);
              },
              MM: function(r) {
                return W(r.getMonth() + 1);
              },
              MMM: function(r, a) {
                return a.monthNamesShort[r.getMonth()];
              },
              MMMM: function(r, a) {
                return a.monthNames[r.getMonth()];
              },
              YY: function(r) {
                return W(String(r.getFullYear()), 4).substr(2);
              },
              YYYY: function(r) {
                return W(r.getFullYear(), 4);
              },
              h: function(r) {
                return String(r.getHours() % 12 || 12);
              },
              hh: function(r) {
                return W(r.getHours() % 12 || 12);
              },
              H: function(r) {
                return String(r.getHours());
              },
              HH: function(r) {
                return W(r.getHours());
              },
              m: function(r) {
                return String(r.getMinutes());
              },
              mm: function(r) {
                return W(r.getMinutes());
              },
              s: function(r) {
                return String(r.getSeconds());
              },
              ss: function(r) {
                return W(r.getSeconds());
              },
              S: function(r) {
                return String(Math.round(r.getMilliseconds() / 100));
              },
              SS: function(r) {
                return W(Math.round(r.getMilliseconds() / 10), 2);
              },
              SSS: function(r) {
                return W(r.getMilliseconds(), 3);
              },
              a: function(r, a) {
                return r.getHours() < 12 ? a.amPm[0] : a.amPm[1];
              },
              A: function(r, a) {
                return r.getHours() < 12 ? a.amPm[0].toUpperCase() : a.amPm[1].toUpperCase();
              },
              ZZ: function(r) {
                var a = r.getTimezoneOffset();
                return (
                  (a > 0 ? '-' : '+') +
                  W(Math.floor(Math.abs(a) / 60) * 100 + (Math.abs(a) % 60), 4)
                );
              },
              Z: function(r) {
                var a = r.getTimezoneOffset();
                return (
                  (a > 0 ? '-' : '+') +
                  W(Math.floor(Math.abs(a) / 60), 2) +
                  ':' +
                  W(Math.abs(a) % 60, 2)
                );
              },
            },
            Ur = function(r) {
              return +r - 1;
            },
            jr = [null, vt],
            Vr = [null, Lt],
            Wr = [
              'isPm',
              Lt,
              function(i, r) {
                var a = i.toLowerCase();
                return a === r.amPm[0] ? 0 : a === r.amPm[1] ? 1 : null;
              },
            ],
            qr = [
              'timezoneOffset',
              '[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?',
              function(i) {
                var r = (i + '').match(/([+-]|\d\d)/gi);
                if (r) {
                  var a = +r[1] * 60 + parseInt(r[2], 10);
                  return r[0] === '+' ? a : -a;
                }
                return 0;
              },
            ],
            Tn = {
              D: ['day', vt],
              DD: ['day', gt],
              Do: [
                'day',
                vt + Lt,
                function(i) {
                  return parseInt(i, 10);
                },
              ],
              M: ['month', vt, Ur],
              MM: ['month', gt, Ur],
              YY: [
                'year',
                gt,
                function(i) {
                  var r = new Date(),
                    a = +('' + r.getFullYear()).substr(0, 2);
                  return +('' + (+i > 68 ? a - 1 : a) + i);
                },
              ],
              h: ['hour', vt, void 0, 'isPm'],
              hh: ['hour', gt, void 0, 'isPm'],
              H: ['hour', vt],
              HH: ['hour', gt],
              m: ['minute', vt],
              mm: ['minute', gt],
              s: ['second', vt],
              ss: ['second', gt],
              YYYY: ['year', Pn],
              S: [
                'millisecond',
                '\\d',
                function(i) {
                  return +i * 100;
                },
              ],
              SS: [
                'millisecond',
                gt,
                function(i) {
                  return +i * 10;
                },
              ],
              SSS: ['millisecond', Cn],
              d: jr,
              dd: jr,
              ddd: Vr,
              dddd: Vr,
              MMM: ['month', Lt, Br('monthNamesShort')],
              MMMM: ['month', Lt, Br('monthNames')],
              a: Wr,
              A: Wr,
              ZZ: qr,
              Z: qr,
            },
            re = {
              default: 'ddd MMM DD YYYY HH:mm:ss',
              shortDate: 'M/D/YY',
              mediumDate: 'MMM D, YYYY',
              longDate: 'MMMM D, YYYY',
              fullDate: 'dddd, MMMM D, YYYY',
              isoDate: 'YYYY-MM-DD',
              isoDateTime: 'YYYY-MM-DDTHH:mm:ssZ',
              shortTime: 'HH:mm',
              mediumTime: 'HH:mm:ss',
              longTime: 'HH:mm:ss.SSS',
            },
            $r = function(r) {
              return pt(re, r);
            },
            Zr = function(r, a, e) {
              if (
                (a === void 0 && (a = re.default),
                e === void 0 && (e = {}),
                typeof r == 'number' && (r = new Date(r)),
                Object.prototype.toString.call(r) !== '[object Date]' || isNaN(r.getTime()))
              )
                throw new Error('Invalid Date pass to format');
              a = re[a] || a;
              var t = [];
              a = a.replace(Fr, function(s, o) {
                return t.push(o), '@@@';
              });
              var n = pt(pt({}, ee), e);
              return (
                (a = a.replace(Yr, function(s) {
                  return bn[s](r, n);
                })),
                a.replace(/@@@/g, function() {
                  return t.shift();
                })
              );
            };
          function Jr(i, r, a) {
            if ((a === void 0 && (a = {}), typeof r != 'string'))
              throw new Error('Invalid format in fecha parse');
            if (((r = re[r] || r), i.length > 1e3)) return null;
            var e = new Date(),
              t = {
                year: e.getFullYear(),
                month: 0,
                day: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                isPm: null,
                timezoneOffset: null,
              },
              n = [],
              s = [],
              o = r.replace(Fr, function(S, P) {
                return s.push(Hr(P)), '@@@';
              }),
              l = {},
              u = {};
            (o = Hr(o).replace(Yr, function(S) {
              var P = Tn[S],
                b = P[0],
                M = P[1],
                I = P[3];
              if (l[b]) throw new Error('Invalid format. ' + b + ' specified twice in format');
              return (l[b] = !0), I && (u[I] = !0), n.push(P), '(' + M + ')';
            })),
              Object.keys(u).forEach(function(S) {
                if (!l[S])
                  throw new Error('Invalid format. ' + S + ' is required in specified format');
              }),
              (o = o.replace(/@@@/g, function() {
                return s.shift();
              }));
            var c = i.match(new RegExp(o, 'i'));
            if (!c) return null;
            for (var f = pt(pt({}, ee), a), h = 1; h < c.length; h++) {
              var v = n[h - 1],
                g = v[0],
                p = v[2],
                m = p ? p(c[h], f) : +c[h];
              if (m == null) return null;
              t[g] = m;
            }
            t.isPm === 1 && t.hour != null && +t.hour !== 12
              ? (t.hour = +t.hour + 12)
              : t.isPm === 0 && +t.hour === 12 && (t.hour = 0);
            for (
              var d = new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond),
                y = [
                  ['month', 'getMonth'],
                  ['day', 'getDate'],
                  ['hour', 'getHours'],
                  ['minute', 'getMinutes'],
                  ['second', 'getSeconds'],
                ],
                h = 0,
                x = y.length;
              h < x;
              h++
            )
              if (l[y[h][0]] && t[y[h][0]] !== d[y[h][1]]()) return null;
            return t.timezoneOffset == null
              ? d
              : new Date(
                  Date.UTC(
                    t.year,
                    t.month,
                    t.day,
                    t.hour,
                    t.minute - t.timezoneOffset,
                    t.second,
                    t.millisecond,
                  ),
                );
          }
          var Kr = {
              format: Zr,
              parse: Jr,
              defaultI18n: Ne,
              setGlobalDateI18n: Gr,
              setGlobalDateMasks: $r,
            },
            Dn = Object.freeze({
              __proto__: null,
              default: Kr,
              assign: pt,
              format: Zr,
              parse: Jr,
              defaultI18n: Ne,
              setGlobalDateI18n: Gr,
              setGlobalDateMasks: $r,
            });
          function En(i) {
            return function(r, a, e, t) {
              for (var n = w(e) ? 0 : e, s = w(t) ? r.length : t; n < s; ) {
                var o = (n + s) >>> 1;
                i(r[o]) > a ? (s = o) : (n = o + 1);
              }
              return n;
            };
          }
          var Qr = 'format';
          function ta(i, r) {
            var a = Dn[Qr] || Kr[Qr];
            return a(i, r);
          }
          function ae(i) {
            return (
              B(i) &&
                (i.indexOf('T') > 0
                  ? (i = new Date(i).getTime())
                  : (i = new Date(i.replace(/-/gi, '/')).getTime())),
              Vt(i) && (i = i.getTime()),
              i
            );
          }
          var rt = 1e3,
            wt = 60 * rt,
            Mt = 60 * wt,
            ut = 24 * Mt,
            Bt = ut * 31,
            ea = ut * 365,
            zt = [
              ['HH:mm:ss', rt],
              ['HH:mm:ss', rt * 10],
              ['HH:mm:ss', rt * 30],
              ['HH:mm', wt],
              ['HH:mm', wt * 10],
              ['HH:mm', wt * 30],
              ['HH', Mt],
              ['HH', Mt * 6],
              ['HH', Mt * 12],
              ['YYYY-MM-DD', ut],
              ['YYYY-MM-DD', ut * 4],
              ['YYYY-WW', ut * 7],
              ['YYYY-MM', Bt],
              ['YYYY-MM', Bt * 4],
              ['YYYY-MM', Bt * 6],
              ['YYYY', ut * 380],
            ];
          function An(i, r, a) {
            var e = (r - i) / a,
              t =
                En(function(s) {
                  return s[1];
                })(zt, e) - 1,
              n = zt[t];
            return t < 0 ? (n = zt[0]) : t >= zt.length && (n = Q(zt)), n;
          }
          var kn = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'timeCat'), a;
              }
              return (
                (r.prototype.translate = function(a) {
                  a = ae(a);
                  var e = this.values.indexOf(a);
                  return e === -1 && (X(a) && a < this.values.length ? (e = a) : (e = NaN)), e;
                }),
                (r.prototype.getText = function(a, e) {
                  var t = this.translate(a);
                  if (t > -1) {
                    var n = this.values[t],
                      s = this.formatter;
                    return (n = s ? s(n, e) : ta(n, this.mask)), n;
                  }
                  return a;
                }),
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'time-cat'), (this.mask = 'YYYY-MM-DD'), (this.tickCount = 7);
                }),
                (r.prototype.setDomain = function() {
                  var a = this.values;
                  C(a, function(e, t) {
                    a[t] = ae(e);
                  }),
                    a.sort(function(e, t) {
                      return e - t;
                    }),
                    i.prototype.setDomain.call(this);
                }),
                r
              );
            })(Re),
            ie = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.isContinuous = !0), a;
              }
              return (
                (r.prototype.scale = function(a) {
                  if (w(a)) return NaN;
                  var e = this.rangeMin(),
                    t = this.rangeMax(),
                    n = this.max,
                    s = this.min;
                  if (n === s) return e;
                  var o = this.getScalePercent(a);
                  return e + o * (t - e);
                }),
                (r.prototype.init = function() {
                  i.prototype.init.call(this);
                  var a = this.ticks,
                    e = ot(a),
                    t = Q(a);
                  e < this.min && (this.min = e),
                    t > this.max && (this.max = t),
                    w(this.minLimit) || (this.min = e),
                    w(this.maxLimit) || (this.max = t);
                }),
                (r.prototype.setDomain = function() {
                  var a = Ai(this.values),
                    e = a.min,
                    t = a.max;
                  w(this.min) && (this.min = e),
                    w(this.max) && (this.max = t),
                    this.min > this.max && ((this.min = e), (this.max = t));
                }),
                (r.prototype.calculateTicks = function() {
                  var a = this,
                    e = i.prototype.calculateTicks.call(this);
                  return (
                    this.nice ||
                      (e = de(e, function(t) {
                        return t >= a.min && t <= a.max;
                      })),
                    e
                  );
                }),
                (r.prototype.getScalePercent = function(a) {
                  var e = this.max,
                    t = this.min;
                  return (a - t) / (e - t);
                }),
                (r.prototype.getInvertPercent = function(a) {
                  return (a - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                }),
                r
              );
            })(ht),
            ra = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'linear'), (a.isLinear = !0), a;
              }
              return (
                (r.prototype.invert = function(a) {
                  var e = this.getInvertPercent(a);
                  return this.min + e * (this.max - this.min);
                }),
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'wilkinson-extended'), (this.nice = !1);
                }),
                r
              );
            })(ie);
          function dt(i, r) {
            var a = Math.E,
              e;
            return (
              r >= 0
                ? (e = Math.pow(a, Math.log(r) / i))
                : (e = Math.pow(a, Math.log(-r) / i) * -1),
              e
            );
          }
          function tt(i, r) {
            return i === 1 ? 1 : Math.log(r) / Math.log(i);
          }
          function aa(i, r, a) {
            w(a) && (a = Math.max.apply(null, i));
            var e = a;
            return (
              C(i, function(t) {
                t > 0 && t < e && (e = t);
              }),
              e === a && (e = a / r),
              e > 1 && (e = 1),
              e
            );
          }
          var In = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'log'), a;
              }
              return (
                (r.prototype.invert = function(a) {
                  var e = this.base,
                    t = tt(e, this.max),
                    n = this.rangeMin(),
                    s = this.rangeMax() - n,
                    o,
                    l = this.positiveMin;
                  if (l) {
                    if (a === 0) return 0;
                    o = tt(e, l / e);
                    var u = (1 / (t - o)) * s;
                    if (a < u) return (a / u) * l;
                  } else o = tt(e, this.min);
                  var c = (a - n) / s,
                    f = c * (t - o) + o;
                  return Math.pow(e, f);
                }),
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'log'),
                    (this.base = 10),
                    (this.tickCount = 6),
                    (this.nice = !0);
                }),
                (r.prototype.setDomain = function() {
                  i.prototype.setDomain.call(this);
                  var a = this.min;
                  if (a < 0)
                    throw new Error(
                      'When you use log scale, the minimum value must be greater than zero!',
                    );
                  a === 0 && (this.positiveMin = aa(this.values, this.base, this.max));
                }),
                (r.prototype.getScalePercent = function(a) {
                  var e = this.max,
                    t = this.min;
                  if (e === t) return 0;
                  if (a <= 0) return 0;
                  var n = this.base,
                    s = this.positiveMin;
                  s && (t = (s * 1) / n);
                  var o;
                  return (
                    a < s
                      ? (o = a / s / (tt(n, e) - tt(n, t)))
                      : (o = (tt(n, a) - tt(n, t)) / (tt(n, e) - tt(n, t))),
                    o
                  );
                }),
                r
              );
            })(ie),
            On = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'pow'), a;
              }
              return (
                (r.prototype.invert = function(a) {
                  var e = this.getInvertPercent(a),
                    t = this.exponent,
                    n = dt(t, this.max),
                    s = dt(t, this.min),
                    o = e * (n - s) + s,
                    l = o >= 0 ? 1 : -1;
                  return Math.pow(o, t) * l;
                }),
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'pow'),
                    (this.exponent = 2),
                    (this.tickCount = 5),
                    (this.nice = !0);
                }),
                (r.prototype.getScalePercent = function(a) {
                  var e = this.max,
                    t = this.min;
                  if (e === t) return 0;
                  var n = this.exponent,
                    s = (dt(n, a) - dt(n, t)) / (dt(n, e) - dt(n, t));
                  return s;
                }),
                r
              );
            })(ie),
            Rn = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'time'), a;
              }
              return (
                (r.prototype.getText = function(a, e) {
                  var t = this.translate(a),
                    n = this.formatter;
                  return n ? n(t, e) : ta(t, this.mask);
                }),
                (r.prototype.scale = function(a) {
                  var e = a;
                  return (
                    (B(e) || Vt(e)) && (e = this.translate(e)), i.prototype.scale.call(this, e)
                  );
                }),
                (r.prototype.translate = function(a) {
                  return ae(a);
                }),
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'time-pretty'),
                    (this.mask = 'YYYY-MM-DD'),
                    (this.tickCount = 7),
                    (this.nice = !1);
                }),
                (r.prototype.setDomain = function() {
                  var a = this.values,
                    e = this.getConfig('min'),
                    t = this.getConfig('max');
                  if (
                    ((!w(e) || !X(e)) && (this.min = this.translate(this.min)),
                    (!w(t) || !X(t)) && (this.max = this.translate(this.max)),
                    a && a.length)
                  ) {
                    var n = [],
                      s = Infinity,
                      o = s,
                      l = 0;
                    C(a, function(u) {
                      var c = ae(u);
                      if (isNaN(c)) throw new TypeError('Invalid Time: ' + u + ' in time scale!');
                      s > c ? ((o = s), (s = c)) : o > c && (o = c), l < c && (l = c), n.push(c);
                    }),
                      a.length > 1 && (this.minTickInterval = o - s),
                      w(e) && (this.min = s),
                      w(t) && (this.max = l);
                  }
                }),
                r
              );
            })(ra),
            ia = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'quantize'), a;
              }
              return (
                (r.prototype.invert = function(a) {
                  var e = this.ticks,
                    t = e.length,
                    n = this.getInvertPercent(a),
                    s = Math.floor(n * (t - 1));
                  if (s >= t - 1) return Q(e);
                  if (s < 0) return ot(e);
                  var o = e[s],
                    l = e[s + 1],
                    u = s / (t - 1),
                    c = (s + 1) / (t - 1);
                  return o + ((n - u) / (c - u)) * (l - o);
                }),
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'r-pretty'), (this.tickCount = 5), (this.nice = !0);
                }),
                (r.prototype.calculateTicks = function() {
                  var a = i.prototype.calculateTicks.call(this);
                  return (
                    this.nice ||
                      (Q(a) !== this.max && a.push(this.max),
                      ot(a) !== this.min && a.unshift(this.min)),
                    a
                  );
                }),
                (r.prototype.getScalePercent = function(a) {
                  var e = this.ticks;
                  if (a < ot(e)) return 0;
                  if (a > Q(e)) return 1;
                  var t = 0;
                  return (
                    C(e, function(n, s) {
                      if (a >= n) t = s;
                      else return !1;
                    }),
                    t / (e.length - 1)
                  );
                }),
                r
              );
            })(ie),
            Nn = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'quantile'), a;
              }
              return (
                (r.prototype.initCfg = function() {
                  (this.tickMethod = 'quantile'), (this.tickCount = 5), (this.nice = !0);
                }),
                r
              );
            })(ia),
            na = {};
          function Et(i) {
            return na[i];
          }
          function st(i, r) {
            if (Et(i)) throw new Error("type '" + i + "' existed.");
            na[i] = r;
          }
          var Yn = (function(i) {
              nt(r, i);
              function r() {
                var a = (i !== null && i.apply(this, arguments)) || this;
                return (a.type = 'identity'), (a.isIdentity = !0), a;
              }
              return (
                (r.prototype.calculateTicks = function() {
                  return this.values;
                }),
                (r.prototype.scale = function(a) {
                  return this.values[0] !== a && X(a) ? a : this.range[0];
                }),
                (r.prototype.invert = function(a) {
                  var e = this.range;
                  return a < e[0] || a > e[1] ? NaN : this.values[0];
                }),
                r
              );
            })(ht),
            Fn = [1, 5, 2, 2.5, 4, 3],
            sa = Number.EPSILON * 100;
          function Ln(i, r) {
            return ((i % r) + r) % r;
          }
          function Bn(i, r, a, e, t, n) {
            var s = pr(r),
              o = _e(r, i),
              l = 0,
              u = Ln(e, n);
            return (u < sa || n - u < sa) && e <= 0 && t >= 0 && (l = 1), 1 - o / (s - 1) - a + l;
          }
          function zn(i, r, a) {
            var e = pr(r),
              t = _e(r, i),
              n = 1;
            return 1 - t / (e - 1) - a + n;
          }
          function Xn(i, r, a, e, t, n) {
            var s = (i - 1) / (n - t),
              o = (r - 1) / (Math.max(n, e) - Math.min(a, t));
            return 2 - Math.max(s / o, o / s);
          }
          function Gn(i, r) {
            return i >= r ? 2 - (i - 1) / (r - 1) : 1;
          }
          function Hn(i, r, a, e) {
            var t = r - i;
            return 1 - (0.5 * (Math.pow(r - e, 2) + Math.pow(i - a, 2))) / Math.pow(0.1 * t, 2);
          }
          function Un(i, r, a) {
            var e = r - i;
            if (a > e) {
              var t = (a - e) / 2;
              return 1 - Math.pow(t, 2) / Math.pow(0.1 * e, 2);
            }
            return 1;
          }
          function jn() {
            return 1;
          }
          function oa(i, r, a, e, t, n) {
            if (
              (a === void 0 && (a = 5),
              e === void 0 && (e = !0),
              t === void 0 && (t = Fn),
              n === void 0 && (n = [0.25, 0.2, 0.5, 0.05]),
              i === r || a === 1)
            )
              return { min: i, max: r, ticks: [i] };
            for (var s = { score: -2, lmin: 0, lmax: 0, lstep: 0 }, o = 1; o < Infinity; ) {
              for (var l = 0, u = t; l < u.length; l++) {
                var c = u[l],
                  f = zn(c, t, o);
                if (Number.isNaN(f)) throw new Error('NaN');
                if (n[0] * f + n[1] + n[2] + n[3] < s.score) {
                  o = Infinity;
                  break;
                }
                for (var h = 2; h < Infinity; ) {
                  var v = Gn(h, a);
                  if (n[0] * f + n[1] + n[2] * v + n[3] < s.score) break;
                  for (
                    var g = (r - i) / (h + 1) / o / c, p = Math.ceil(Math.log10(g));
                    p < Infinity;

                  ) {
                    var m = o * c * Math.pow(10, p),
                      d = Un(i, r, m * (h - 1));
                    if (n[0] * f + n[1] * d + n[2] * v + n[3] < s.score) break;
                    var y = Math.floor(r / m) * o - (h - 1) * o,
                      x = Math.ceil(i / m) * o;
                    if (y > x) {
                      p = p + 1;
                      continue;
                    }
                    for (var S = y; S <= x; S = S + 1) {
                      var P = S * (m / o),
                        b = P + m * (h - 1),
                        M = m,
                        I = Bn(c, t, o, P, b, M),
                        O = Hn(i, r, P, b),
                        T = Xn(h, a, i, r, P, b),
                        L = jn(),
                        at = n[0] * I + n[1] * O + n[2] * T + n[3] * L;
                      at > s.score &&
                        (!e || (P <= i && b >= r)) &&
                        ((s.lmin = P), (s.lmax = b), (s.lstep = M), (s.score = at));
                    }
                    p = p + 1;
                  }
                  h = h + 1;
                }
              }
              o = o + 1;
            }
            for (
              var xt = Number.isInteger(s.lstep) ? 0 : Math.ceil(Math.abs(Math.log10(s.lstep))),
                _t = [],
                Z = s.lmin;
              Z <= s.lmax;
              Z += s.lstep
            )
              _t.push(Z);
            var et = xt
              ? gr(_t, function(bt) {
                  return Number.parseFloat(bt.toFixed(xt));
                })
              : _t;
            return { min: Math.min(i, ot(et)), max: Math.max(r, Q(et)), ticks: et };
          }
          function la(i) {
            var r = i.values,
              a = i.tickInterval,
              e = i.tickCount,
              t = r;
            if (X(a))
              return de(t, function(u, c) {
                return c % a === 0;
              });
            var n = i.min,
              s = i.max;
            if ((w(n) && (n = 0), w(s) && (s = r.length - 1), X(e) && e < s - n)) {
              var o = oa(n, s, e, !1, [1, 2, 5, 3, 4, 7, 6, 8, 9]).ticks,
                l = de(o, function(u) {
                  return u >= n && u <= s;
                });
              return l.map(function(u) {
                return r[u];
              });
            }
            return r.slice(n, s + 1);
          }
          function Vn(i) {
            var r = i.min,
              a = i.max,
              e = i.nice,
              t = i.tickCount,
              n = new Wn();
            return n.domain([r, a]), e && n.nice(t), n.ticks(t);
          }
          var Ye = 5,
            ua = Math.sqrt(50),
            ca = Math.sqrt(10),
            fa = Math.sqrt(2),
            Wn = (function() {
              function i() {
                this._domain = [0, 1];
              }
              return (
                (i.prototype.domain = function(r) {
                  return r ? ((this._domain = Array.from(r, Number)), this) : this._domain.slice();
                }),
                (i.prototype.nice = function(r) {
                  var a, e;
                  r === void 0 && (r = Ye);
                  var t = this._domain.slice(),
                    n = 0,
                    s = this._domain.length - 1,
                    o = this._domain[n],
                    l = this._domain[s],
                    u;
                  return (
                    l < o &&
                      ((a = [l, o]), (o = a[0]), (l = a[1]), (e = [s, n]), (n = e[0]), (s = e[1])),
                    (u = ne(o, l, r)),
                    u > 0
                      ? ((o = Math.floor(o / u) * u), (l = Math.ceil(l / u) * u), (u = ne(o, l, r)))
                      : u < 0 &&
                        ((o = Math.ceil(o * u) / u),
                        (l = Math.floor(l * u) / u),
                        (u = ne(o, l, r))),
                    u > 0
                      ? ((t[n] = Math.floor(o / u) * u),
                        (t[s] = Math.ceil(l / u) * u),
                        this.domain(t))
                      : u < 0 &&
                        ((t[n] = Math.ceil(o * u) / u),
                        (t[s] = Math.floor(l * u) / u),
                        this.domain(t)),
                    this
                  );
                }),
                (i.prototype.ticks = function(r) {
                  return (
                    r === void 0 && (r = Ye),
                    qn(this._domain[0], this._domain[this._domain.length - 1], r || Ye)
                  );
                }),
                i
              );
            })();
          function qn(i, r, a) {
            var e,
              t = -1,
              n,
              s,
              o;
            if (((r = +r), (i = +i), (a = +a), i === r && a > 0)) return [i];
            if (
              ((e = r < i) && ((n = i), (i = r), (r = n)), (o = ne(i, r, a)) === 0 || !isFinite(o))
            )
              return [];
            if (o > 0)
              for (
                i = Math.ceil(i / o),
                  r = Math.floor(r / o),
                  s = new Array((n = Math.ceil(r - i + 1)));
                ++t < n;

              )
                s[t] = (i + t) * o;
            else
              for (
                i = Math.floor(i * o),
                  r = Math.ceil(r * o),
                  s = new Array((n = Math.ceil(i - r + 1)));
                ++t < n;

              )
                s[t] = (i - t) / o;
            return e && s.reverse(), s;
          }
          function ne(i, r, a) {
            var e = (r - i) / Math.max(0, a),
              t = Math.floor(Math.log(e) / Math.LN10),
              n = e / Math.pow(10, t);
            return t >= 0
              ? (n >= ua ? 10 : n >= ca ? 5 : n >= fa ? 2 : 1) * Math.pow(10, t)
              : -Math.pow(10, -t) / (n >= ua ? 10 : n >= ca ? 5 : n >= fa ? 2 : 1);
          }
          function ha(i, r, a) {
            var e;
            return (
              a === 'ceil'
                ? (e = Math.ceil(i / r))
                : a === 'floor'
                ? (e = Math.floor(i / r))
                : (e = Math.round(i / r)),
              e * r
            );
          }
          function Fe(i, r, a) {
            var e = ha(i, a, 'floor'),
              t = ha(r, a, 'ceil');
            (e = ye(e, a)), (t = ye(t, a));
            for (var n = [], s = e; s <= t; s = s + a) {
              var o = ye(s, a);
              n.push(o);
            }
            return { min: e, max: t, ticks: n };
          }
          function Le(i, r, a) {
            var e,
              t = i.minLimit,
              n = i.maxLimit,
              s = i.min,
              o = i.max,
              l = i.tickCount,
              u = l === void 0 ? 5 : l,
              c = w(t) ? (w(r) ? s : r) : t,
              f = w(n) ? (w(a) ? o : a) : n;
            if ((c > f && ((e = [c, f]), (f = e[0]), (c = e[1])), u <= 2)) return [c, f];
            for (var h = (f - c) / (u - 1), v = [], g = 0; g < u; g++) v.push(c + h * g);
            return v;
          }
          function $n(i) {
            var r = i.min,
              a = i.max,
              e = i.tickInterval,
              t = i.minLimit,
              n = i.maxLimit,
              s = Vn(i);
            return !w(t) || !w(n) ? Le(i, ot(s), Q(s)) : e ? Fe(r, a, e).ticks : s;
          }
          function Zn(i) {
            var r = i.min,
              a = i.max,
              e = i.tickCount,
              t = i.nice,
              n = i.tickInterval,
              s = i.minLimit,
              o = i.maxLimit,
              l = oa(r, a, e, t).ticks;
            return !w(s) || !w(o) ? Le(i, ot(l), Q(l)) : n ? Fe(r, a, n).ticks : l;
          }
          function Jn(i) {
            var r = i.base,
              a = i.tickCount,
              e = i.min,
              t = i.max,
              n = i.values,
              s,
              o = tt(r, t);
            if (e > 0) s = Math.floor(tt(r, e));
            else {
              var l = aa(n, r, t);
              s = Math.floor(tt(r, l));
            }
            for (var u = o - s, c = Math.ceil(u / a), f = [], h = s; h < o + c; h = h + c)
              f.push(Math.pow(r, h));
            return e <= 0 && f.unshift(0), f;
          }
          function va(i, r, a) {
            a === void 0 && (a = 5);
            var e = { max: 0, min: 0, ticks: [] },
              t = 1.5,
              n = 0.5 + 1.5 * t,
              s = r - i,
              o = s / a,
              l = Math.pow(10, Math.floor(Math.log10(o))),
              u = l < 1 ? Math.ceil(Math.abs(Math.log10(l))) : 0,
              c = l;
            2 * l - o < t * (o - c) &&
              ((c = 2 * l),
              5 * l - o < n * (o - c) && ((c = 5 * l), 10 * l - o < t * (o - c) && (c = 10 * l)));
            var f = Math.ceil(r / c),
              h = Math.floor(i / c);
            (e.max = Math.max(f * c, r)), (e.min = Math.min(h * c, i));
            for (var v = Number.parseFloat((h * c).toFixed(u)); v < r; )
              e.ticks.push(v), (v += c), u && (v = Number.parseFloat(v.toFixed(u)));
            return e.ticks.push(v), e;
          }
          function Kn(i) {
            var r = i.exponent,
              a = i.tickCount,
              e = Math.ceil(dt(r, i.max)),
              t = Math.floor(dt(r, i.min)),
              n = va(t, e, a).ticks;
            return n.map(function(s) {
              var o = s >= 0 ? 1 : -1;
              return Math.pow(s, r) * o;
            });
          }
          function Qn(i, r) {
            var a = i.length * r;
            return r === 1
              ? i[i.length - 1]
              : r === 0
              ? i[0]
              : a % 1 !== 0
              ? i[Math.ceil(a) - 1]
              : i.length % 2 === 0
              ? (i[a - 1] + i[a]) / 2
              : i[a];
          }
          function ts(i) {
            var r = i.tickCount,
              a = i.values;
            if (!a || !a.length) return [];
            for (
              var e = a.slice().sort(function(o, l) {
                  return o - l;
                }),
                t = [],
                n = 0;
              n < r;
              n++
            ) {
              var s = n / (r - 1);
              t.push(Qn(e, s));
            }
            return t;
          }
          function es(i) {
            var r = i.min,
              a = i.max,
              e = i.tickCount,
              t = i.tickInterval,
              n = i.minLimit,
              s = i.maxLimit,
              o = va(r, a, e).ticks;
            return !w(n) || !w(s) ? Le(i, ot(o), Q(o)) : t ? Fe(r, a, t).ticks : o;
          }
          function rs(i) {
            var r = i.min,
              a = i.max,
              e = i.minTickInterval,
              t = i.tickInterval,
              n = i.tickCount;
            if (t) n = Math.ceil((a - r) / t);
            else {
              t = An(r, a, n)[1];
              var s = (a - r) / t,
                o = s / n;
              o > 1 && (t = t * Math.ceil(o)), e && t < e && (t = e);
            }
            for (var l = [], u = r; u < a + t; u += t) l.push(u);
            return l;
          }
          function as(i) {
            var r = la(i),
              a = Q(i.values);
            return a !== Q(r) && r.push(a), r;
          }
          function se(i) {
            return new Date(i).getFullYear();
          }
          function is(i) {
            return new Date(i, 0, 1).getTime();
          }
          function Be(i) {
            return new Date(i).getMonth();
          }
          function ns(i, r) {
            var a = se(i),
              e = se(r),
              t = Be(i),
              n = Be(r);
            return (e - a) * 12 + ((n - t) % 12);
          }
          function ss(i, r) {
            return new Date(i, r, 1).getTime();
          }
          function os(i, r) {
            return Math.ceil((r - i) / ut);
          }
          function ls(i, r) {
            return Math.ceil((r - i) / Mt);
          }
          function us(i, r) {
            return Math.ceil((r - i) / (60 * 1e3));
          }
          function cs(i) {
            var r = i.min,
              a = i.max,
              e = i.minTickInterval,
              t = i.tickInterval,
              n = i.tickCount,
              s = [];
            t || ((t = (a - r) / n), e && t < e && (t = e));
            var o = se(r);
            if (t > ea)
              for (var l = se(a), u = Math.ceil(t / ea), c = o; c <= l + u; c = c + u)
                s.push(is(c));
            else if (t > Bt)
              for (var f = Math.ceil(t / Bt), h = Be(r), v = ns(r, a), c = 0; c <= v + f; c = c + f)
                s.push(ss(o, c + h));
            else if (t > ut)
              for (
                var g = new Date(r),
                  p = g.getFullYear(),
                  m = g.getMonth(),
                  d = g.getDate(),
                  y = Math.ceil(t / ut),
                  x = os(r, a),
                  c = 0;
                c < x + y;
                c = c + y
              )
                s.push(new Date(p, m, d + c).getTime());
            else if (t > Mt)
              for (
                var g = new Date(r),
                  p = g.getFullYear(),
                  m = g.getMonth(),
                  y = g.getDate(),
                  S = g.getHours(),
                  P = Math.ceil(t / Mt),
                  b = ls(r, a),
                  c = 0;
                c <= b + P;
                c = c + P
              )
                s.push(new Date(p, m, y, S + c).getTime());
            else if (t > wt)
              for (var M = us(r, a), I = Math.ceil(t / wt), c = 0; c <= M + I; c = c + I)
                s.push(r + c * wt);
            else {
              var O = t;
              O < rt && (O = rt);
              for (
                var T = Math.floor(r / rt) * rt,
                  L = Math.ceil((a - r) / rt),
                  at = Math.ceil(O / rt),
                  c = 0;
                c < L + at;
                c = c + at
              )
                s.push(T + c * rt);
            }
            return s;
          }
          $('cat', la),
            $('time-cat', as),
            $('wilkinson-extended', Zn),
            $('r-pretty', es),
            $('time', rs),
            $('time-pretty', cs),
            $('log', Jn),
            $('pow', Kn),
            $('quantile', ts),
            $('d3-linear', $n),
            st('cat', Re),
            st('category', Re),
            st('identity', Yn),
            st('linear', ra),
            st('log', In),
            st('pow', On),
            st('time', Rn),
            st('timeCat', kn),
            st('quantize', ia),
            st('quantile', Nn);
          var ga = function(r) {
              var a = r.values,
                e = r.tickCount;
              if (!e) return a;
              if (a.length <= 1) return a;
              for (
                var t = parseInt(a.length / (e - 1)) || 1, n = [], s = 0;
                s < a.length;
                s = s + t
              )
                n.push(a[s]);
              var o = a[a.length - 1];
              return (
                n[n.length - 1] !== o && (n.length >= e ? (n[n.length - 1] = o) : n.push(o)), n
              );
            },
            At = [1, 1.2, 1.5, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],
            fs = 5,
            hs = function(r) {
              var a = r || {},
                e = a.tickCount,
                t = a.tickInterval,
                n = r || {},
                s = n.min,
                o = n.max;
              (s = isNaN(s) ? 0 : s), (o = isNaN(o) ? 0 : o);
              var l = e && e >= 2 ? e : fs,
                u = t || gs({ tickCount: l, max: o, min: s }),
                c = Math.floor(s / u) * u;
              if (t) {
                var f = Math.abs(Math.ceil((o - c) / t)) + 1;
                l = Math.max(l, f);
              }
              for (var h = [], v = 0, g = ze(u); v < l; ) h.push(ma(c + v * u, g)), v++;
              return h;
            },
            vs = 12;
          function pa(i) {
            i = Math.abs(i);
            var r = 1;
            if (i === 0) return r;
            if (i < 1) {
              for (var a = 0; i < 1; ) (r = r / 10), (i = i * 10), a++;
              return r.toString().length > vs && (r = parseFloat(r.toFixed(a))), r;
            }
            for (; i > 10; ) (r = r * 10), (i = i / 10);
            return r;
          }
          function gs(i) {
            var r = i.tickCount,
              a = i.min,
              e = i.max;
            if (a === e) return 1 * pa(e);
            for (
              var t = (e - a) / (r - 1), n = pa(t), s = t / n, o = e / n, l = a / n, u = 0, c = 0;
              c < At.length;
              c++
            ) {
              var f = At[c];
              if (s <= f) {
                u = c;
                break;
              }
            }
            var h = da(u, r, l, o),
              v = ze(h) + ze(n);
            return ma(h * n, v);
          }
          function da(i, r, a, e) {
            for (var t = !1, n = At[i], s = i; s < At.length; s++)
              if (ps({ interval: At[s], tickCount: r, max: e, min: a })) {
                (n = At[s]), (t = !0);
                break;
              }
            return t ? n : 10 * da(0, r, a / 10, e / 10);
          }
          function ps(i) {
            var r = i.interval,
              a = i.tickCount,
              e = i.max,
              t = i.min,
              n = Math.floor(t / r) * r;
            return n + (a - 1) * r >= e;
          }
          function ze(i) {
            var r = i.toString(),
              a = r.indexOf('.'),
              e = r.indexOf('e-'),
              t = e >= 0 ? parseInt(r.substr(e + 2), 10) : r.substr(a + 1).length;
            return t > 20 && (t = 20), t;
          }
          function ma(i, r) {
            return parseFloat(i.toFixed(r));
          }
          var ds = Et('linear'),
            ms = Et('identity'),
            ya = Et('category'),
            ys = Et('timeCat');
          $('cat', ga),
            $('time-cat', ga),
            $('wilkinson-extended', hs),
            (ht.Linear = ds),
            (ht.Identity = ms),
            (ht.Category = ya),
            (ht.Cat = ya),
            (ht.TimeCat = ys);
          function xs(i) {
            if (!i.isPolar) return !1;
            var r = i.startAngle,
              a = i.endAngle;
            return !(!w(r) && !w(a) && a - r < Math.PI * 2);
          }
          function xa(i) {
            Object.keys(i).forEach(function(r) {
              delete i[r];
            });
          }
          var _s = (function() {
              function i(a) {
                (this.defs = {}), (this.scales = {}), _(this, a);
              }
              var r = i.prototype;
              return (
                (r.setFieldDef = function(e, t) {
                  var n = this.defs;
                  j(e) ? _(n, e) : (n[e] = t), this.updateScales();
                }),
                (r._getDef = function(e) {
                  var t = this.defs,
                    n = null;
                  return (
                    (D.scales[e] || t[e]) &&
                      ((n = _({}, D.scales[e])),
                      C(t[e], function(s, o) {
                        w(s) ? delete n[o] : (n[o] = s);
                      })),
                    n
                  );
                }),
                (r._getDefaultType = function(e, t, n) {
                  if (n && n.type) return n.type;
                  var s = 'linear',
                    o = Se(t, e);
                  return k(o) && (o = o[0]), B(o) && (s = 'cat'), s;
                }),
                (r._getScaleDef = function(e, t, n, s) {
                  var o;
                  s && s.values ? (o = s.values) : (o = mr(n, t));
                  var l = { field: t, values: o };
                  if (e !== 'cat' && e !== 'timeCat') {
                    if (!s || !(s.min && s.max)) {
                      var u = Ce(o),
                        c = u.min,
                        f = u.max;
                      (l.min = c), (l.max = f), (l.nice = !0);
                    }
                  } else l.isRounding = !1;
                  return l;
                }),
                (r._adjustRange = function(e, t) {
                  var n = t.range,
                    s = t.values;
                  if (e === 'linear' || n || !s) return t;
                  var o = s.length;
                  if (o === 1) t.range = [0.5, 1];
                  else {
                    var l = this.chart,
                      u = l.get('coord'),
                      c = D.widthRatio.multiplePie,
                      f = 0;
                    xs(u)
                      ? u.transposed
                        ? ((f = (1 / o) * c), (t.range = [f / 2, 1 - f / 2]))
                        : (t.range = [0, 1 - 1 / o])
                      : ((f = (1 / o) * 0.5), (t.range = [f, 1 - f]));
                  }
                  return t;
                }),
                (r._getScaleCfg = function(e, t) {
                  var n = this,
                    s = n._getDef(e);
                  if (!t || !t.length)
                    return s && s.type
                      ? ((s.field = e), { type: s.type, cfg: s })
                      : { type: 'identity', cfg: { value: e, field: e.toString(), values: [e] } };
                  var o = t[0],
                    l = o[e];
                  if ((l === null && (l = Se(t, e)), X(e) || (w(l) && !s)))
                    return {
                      type: 'identity',
                      cfg: { value: e, field: e.toString(), values: [e] },
                    };
                  var u = n._getDefaultType(e, t, s),
                    c = n._getScaleDef(u, e, t, s);
                  return s && _(c, s), (c = this._adjustRange(u, c)), { type: u, cfg: c };
                }),
                (r.createScale = function(e, t) {
                  var n = this.scales,
                    s = this._getScaleCfg(e, t),
                    o = s.type,
                    l = s.cfg,
                    u = n[e];
                  if (u && u.type === o) return u.change(l), u;
                  var c = Et(o),
                    f = new c(l);
                  return (n[e] = f), f;
                }),
                (r._updateScale = function(e) {
                  var t = e.field,
                    n = this.chart._getScaleData(t),
                    s = this._getScaleCfg(t, n),
                    o = s.cfg;
                  e.change(o);
                }),
                (r.updateScales = function() {
                  var e = this,
                    t = this.scales;
                  C(t, function(n) {
                    e._updateScale(n);
                  });
                }),
                (r.adjustStartZero = function(e) {
                  var t = this.defs,
                    n = e.field,
                    s = e.min,
                    o = e.max;
                  if (t[n] && t[n].min) return;
                  s > 0 ? e.change({ min: 0 }) : o < 0 && e.change({ max: 0 });
                }),
                (r.clear = function() {
                  xa(this.defs), xa(this.scales), (this.data = null);
                }),
                i
              );
            })(),
            Xt = (function() {
              var i = r.prototype;
              i._initDefaultCfg = function() {
                (this.ticks = []),
                  (this.tickLine = {}),
                  (this.offsetFactor = 1),
                  (this.frontContainer = null),
                  (this.backContainer = null),
                  (this.gridPoints = []);
              };
              function r(a) {
                this._initDefaultCfg(), _(this, a), this.draw();
              }
              return (
                (i.draw = function() {
                  var e = this.line,
                    t = this.tickLine,
                    n = this.label,
                    s = this.grid;
                  s && this.drawGrid(s),
                    t && this.drawTicks(t),
                    e && this.drawLine(e),
                    n && this.drawLabels();
                }),
                (i.drawTicks = function(e) {
                  var t = this,
                    n = t.ticks,
                    s = e.length,
                    o = t.getContainer(e.top);
                  C(n, function(l) {
                    var u = t.getOffsetPoint(l.value),
                      c = t.getSidePoint(u, s),
                      f = o.addShape('line', {
                        className: 'axis-tick',
                        attrs: _({ x1: u.x, y1: u.y, x2: c.x, y2: c.y }, e),
                      });
                    f._id = t._id + '-ticks';
                  });
                }),
                (i.drawLabels = function() {
                  var e = this,
                    t = e.labelOffset,
                    n = e.labels;
                  C(n, function(s) {
                    var o = e.getContainer(s.get('top')),
                      l = e.getOffsetPoint(s.get('value')),
                      u = e.getSidePoint(l, t),
                      c = u.x,
                      f = u.y;
                    s.attr(_({ x: c, y: f }, e.getTextAlignInfo(l, t), s.get('textStyle'))),
                      (s._id = e._id + '-' + s.attr('text')),
                      o.add(s);
                  });
                }),
                (i.drawLine = function() {}),
                (i.drawGrid = function(e) {
                  var t = this,
                    n = t.gridPoints,
                    s = t.ticks,
                    o = e,
                    l = n.length;
                  C(n, function(u, c) {
                    if (F(e)) {
                      var f = s[c] || {},
                        h = e(f.text, c, l);
                      o = h ? _({}, D._defaultAxis.grid, h) : null;
                    }
                    if (o) {
                      var v = o.type,
                        g = u.points,
                        p = t.getContainer(o.top),
                        m;
                      if (v === 'arc') {
                        var d = t.center,
                          y = t.startAngle,
                          x = t.endAngle,
                          S = A.length([g[0].x - d.x, g[0].y - d.y]);
                        m = p.addShape('Arc', {
                          className: 'axis-grid',
                          attrs: _({ x: d.x, y: d.y, startAngle: y, endAngle: x, r: S }, o),
                        });
                      } else
                        m = p.addShape('Polyline', {
                          className: 'axis-grid',
                          attrs: _({ points: g }, o),
                        });
                      m._id = u._id;
                    }
                  });
                }),
                (i.getOffsetPoint = function() {}),
                (i.getAxisVector = function() {}),
                (i.getOffsetVector = function(e, t) {
                  var n = this,
                    s = n.getAxisVector(e),
                    o = A.normalize([], s),
                    l = n.offsetFactor,
                    u = [o[1] * -1 * l, o[0] * l];
                  return A.scale([], u, t);
                }),
                (i.getSidePoint = function(e, t) {
                  var n = this,
                    s = n.getOffsetVector(e, t);
                  return { x: e.x + s[0], y: e.y + s[1] };
                }),
                (i.getTextAlignInfo = function(e, t) {
                  var n = this,
                    s = n.getOffsetVector(e, t),
                    o,
                    l;
                  return (
                    s[0] > 0 ? (o = 'left') : s[0] < 0 ? (o = 'right') : (o = 'center'),
                    s[1] > 0 ? (l = 'top') : s[1] < 0 ? (l = 'bottom') : (l = 'middle'),
                    { textAlign: o, textBaseline: l }
                  );
                }),
                (i.getContainer = function(e) {
                  var t = this.frontContainer,
                    n = this.backContainer;
                  return e ? t : n;
                }),
                r
              );
            })(),
            Ss = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initDefaultCfg = function() {
                  i.prototype._initDefaultCfg.call(this), (this.start = null), (this.end = null);
                }),
                (a.getOffsetPoint = function(t) {
                  var n = this.start,
                    s = this.end;
                  return { x: n.x + (s.x - n.x) * t, y: n.y + (s.y - n.y) * t };
                }),
                (a.getAxisVector = function() {
                  var t = this.start,
                    n = this.end;
                  return [n.x - t.x, n.y - t.y];
                }),
                (a.drawLine = function(t) {
                  var n = this.getContainer(t.top),
                    s = this.start,
                    o = this.end;
                  n.addShape('line', {
                    className: 'axis-line',
                    attrs: _({ x1: s.x, y1: s.y, x2: o.x, y2: o.y }, t),
                  });
                }),
                r
              );
            })(Xt);
          Xt.Line = Ss;
          var _a = function(r, a) {
              var e = a.x - r.x,
                t = a.y - r.y;
              return Math.abs(e) > Math.abs(t) ? (e > 0 ? 'right' : 'left') : t > 0 ? 'down' : 'up';
            },
            oe = function(r, a) {
              var e = Math.abs(a.x - r.x),
                t = Math.abs(a.y - r.y);
              return Math.sqrt(e * e + t * t);
            },
            Cs = function(r, a) {
              var e = r.x + (a.x - r.x) / 2,
                t = r.y + (a.y - r.y) / 2;
              return { x: e, y: t };
            },
            Xe = function(r, a) {
              var e = r.touches;
              if (!e) {
                var t = qt({ x: r.clientX, y: r.clientY }, a);
                return [t];
              }
              for (var n = [], s = e.length, o = 0; o < s; o++) {
                var l = e[o],
                  u = l.x,
                  c = l.y,
                  f = l.clientX,
                  h = l.clientY,
                  v = void 0;
                X(u) || X(c) ? (v = { x: u, y: c }) : (v = qt({ x: f, y: h }, a)), n.push(v);
              }
              return n;
            },
            Sa = 250,
            Ps = (function() {
              function i(a) {
                var e = this,
                  t = a.canvas,
                  n = a.el;
                N(this, '_click', function(s) {
                  var o = Xe(s, e.canvas);
                  (s.points = o), e.emitEvent('click', s);
                }),
                  N(this, '_start', function(s) {
                    var o = Xe(s, e.canvas);
                    if (!o) return;
                    (s.points = o),
                      e.emitEvent('touchstart', s),
                      e.reset(),
                      (e.startTime = Date.now()),
                      (e.startPoints = o),
                      o.length > 1
                        ? ((e.startDistance = oe(o[0], o[1])), (e.center = Cs(o[0], o[1])))
                        : (e.pressTimeout = setTimeout(function() {
                            var l = 'press',
                              u = 'none';
                            (s.direction = u),
                              e.emitStart(l, s),
                              e.emitEvent(l, s),
                              (e.eventType = l),
                              (e.direction = u);
                          }, Sa));
                  }),
                  N(this, '_move', function(s) {
                    var o = Xe(s, e.canvas);
                    if (!o) return;
                    e.clearPressTimeout(), (s.points = o), e.emitEvent('touchmove', s);
                    var l = e.startPoints;
                    if (!l) return;
                    if (o.length > 1) {
                      var u = e.startDistance,
                        c = oe(o[0], o[1]);
                      (s.zoom = c / u),
                        (s.center = e.center),
                        e.emitStart('pinch', s),
                        e.emitEvent('pinch', s);
                    } else {
                      var f = o[0].x - l[0].x,
                        h = o[0].y - l[0].y,
                        v = e.direction || _a(l[0], o[0]);
                      e.direction = v;
                      var g = e.getEventType(o);
                      (s.direction = v),
                        (s.deltaX = f),
                        (s.deltaY = h),
                        e.emitStart(g, s),
                        e.emitEvent(g, s);
                      var p = e.lastMoveTime,
                        m = Date.now();
                      m - p > 0 &&
                        ((e.prevMoveTime = p),
                        (e.prevMovePoints = e.lastMovePoints),
                        (e.lastMoveTime = m),
                        (e.lastMovePoints = o));
                    }
                  }),
                  N(this, '_end', function(s) {
                    e.emitEnd(s), e.emitEvent('touchend', s);
                    var o = e.lastMoveTime,
                      l = Date.now();
                    if (l - o < 100) {
                      var u = e.prevMoveTime || e.startTime,
                        c = o - u;
                      if (c > 0) {
                        var f = e.prevMovePoints || e.startPoints,
                          h = e.lastMovePoints,
                          v = oe(f[0], h[0]) / c;
                        v > 0.3 &&
                          ((s.velocity = v),
                          (s.direction = _a(f[0], h[0])),
                          e.emitEvent('swipe', s));
                      }
                    }
                    e.reset();
                    var g = s.touches;
                    g && g.length > 0 && e._start(s);
                  }),
                  N(this, '_cancel', function(s) {
                    e.emitEvent('touchcancel', s), e.reset();
                  }),
                  (this.canvas = t),
                  this.delegateEvent(n),
                  (this.processEvent = {});
              }
              var r = i.prototype;
              return (
                (r.delegateEvent = function(e) {
                  e.addEventListener('click', this._click),
                    e.addEventListener('touchstart', this._start),
                    e.addEventListener('touchmove', this._move),
                    e.addEventListener('touchend', this._end),
                    e.addEventListener('touchcancel', this._cancel);
                }),
                (r.emitEvent = function(e, t) {
                  var n = this.canvas;
                  n.emit(e, t);
                }),
                (r.getEventType = function(e) {
                  var t = this.eventType,
                    n = this.canvas,
                    s = this.startTime,
                    o = this.startPoints;
                  if (t) return t;
                  var l,
                    u = n.__events.pan;
                  if (!u || !u.length) l = 'press';
                  else {
                    var c = Date.now();
                    c - s > Sa && oe(o[0], e[0]) < 10 ? (l = 'press') : (l = 'pan');
                  }
                  return (this.eventType = l), l;
                }),
                (r.enable = function(e) {
                  this.processEvent[e] = !0;
                }),
                (r.isProcess = function(e) {
                  return this.processEvent[e];
                }),
                (r.emitStart = function(e, t) {
                  if (this.isProcess(e)) return;
                  this.enable(e), this.emitEvent(e + 'start', t);
                }),
                (r.emitEnd = function(e) {
                  var t = this,
                    n = this.processEvent;
                  Object.keys(n).forEach(function(s) {
                    t.emitEvent(s + 'end', e), delete n[s];
                  });
                }),
                (r.clearPressTimeout = function() {
                  this.pressTimeout && (clearTimeout(this.pressTimeout), (this.pressTimeout = 0));
                }),
                (r.reset = function() {
                  this.clearPressTimeout(),
                    (this.startTime = 0),
                    (this.startPoints = null),
                    (this.startDistance = 0),
                    (this.direction = null),
                    (this.eventType = null),
                    (this.pinch = !1),
                    (this.prevMoveTime = 0),
                    (this.prevMovePoints = null),
                    (this.lastMoveTime = 0),
                    (this.lastMovePoints = null);
                }),
                i
              );
            })(),
            ws = (function(i) {
              E(r, i);
              function r(e) {
                var t;
                return (
                  (t = i.call(this) || this),
                  (t.context = e),
                  (t.width = 0),
                  (t.height = 0),
                  (t.style = {}),
                  (t.currentStyle = {}),
                  (t.isCanvasElement = !0),
                  t
                );
              }
              var a = r.prototype;
              return (
                (a.getContext = function() {
                  return this.context;
                }),
                (a.getBoundingClientRect = function() {
                  var t = this.width,
                    n = this.height;
                  return { top: 0, right: t, bottom: n, left: 0 };
                }),
                (a.addEventListener = function(t, n) {
                  this.on(t, n);
                }),
                (a.removeEventListener = function(t, n) {
                  this.off(t, n);
                }),
                (a.dispatchEvent = function(t, n) {
                  this.emit(t, n);
                }),
                r
              );
            })(Ee);
          function Ms(i) {
            if (!i) return !1;
            if (i.nodeType !== 1 || !i.nodeName || i.nodeName.toLowerCase() !== 'canvas') return !1;
            var r = !1;
            try {
              i.addEventListener('eventTest', function() {
                r = !0;
              }),
                i.dispatchEvent(new Event('eventTest'));
            } catch (a) {
              r = !1;
            }
            return r;
          }
          var bs = {
            create: function(r) {
              return r ? (Ms(r.canvas) ? r.canvas : new ws(r)) : null;
            },
          };
          function Ts(i, r) {
            return ((i % r) + r) % r;
          }
          function Ca(i, r) {
            C(i, function(a) {
              (a = a.split(':')), r.addColorStop(Number(a[0]), a[1]);
            });
          }
          function Ds(i, r, a) {
            var e = i.split(' '),
              t = e[0].slice(2, e[0].length - 1);
            t = Ts((parseFloat(t) * Math.PI) / 180, Math.PI * 2);
            var n = e.slice(1),
              s = r.getBBox(),
              o = s.minX,
              l = s.minY,
              u = s.maxX,
              c = s.maxY,
              f,
              h;
            t >= 0 && t < 0.5 * Math.PI
              ? ((f = { x: o, y: l }), (h = { x: u, y: c }))
              : 0.5 * Math.PI <= t && t < Math.PI
              ? ((f = { x: u, y: l }), (h = { x: o, y: c }))
              : Math.PI <= t && t < 1.5 * Math.PI
              ? ((f = { x: u, y: c }), (h = { x: o, y: l }))
              : ((f = { x: o, y: c }), (h = { x: u, y: l }));
            var v = Math.tan(t),
              g = v * v,
              p = (h.x - f.x + v * (h.y - f.y)) / (g + 1) + f.x,
              m = (v * (h.x - f.x + v * (h.y - f.y))) / (g + 1) + f.y,
              d = a.createLinearGradient(f.x, f.y, p, m);
            return Ca(n, d), d;
          }
          function Es(i, r, a) {
            var e = i.split(' '),
              t = e[0].slice(2, e[0].length - 1);
            t = t.split(',');
            var n = parseFloat(t[0]),
              s = parseFloat(t[1]),
              o = parseFloat(t[2]),
              l = e.slice(1);
            if (o === 0) {
              var u = l[l.length - 1];
              return u.split(':')[1];
            }
            var c = r.getBBox(),
              f = c.width,
              h = c.height,
              v = c.minX,
              g = c.minY,
              p = Math.sqrt(f * f + h * h) / 2,
              m = a.createRadialGradient(v + f * n, g + h * s, o * p, v + f / 2, g + h / 2, p);
            return Ca(l, m), m;
          }
          function As(i, r, a) {
            if (i[1] === '(')
              try {
                var e = i[0];
                if (e === 'l') return Ds(i, r, a);
                if (e === 'r') return Es(i, r, a);
              } catch (t) {
                console.error(
                  'error in parsing gradient string, please check if there are any extra whitespaces.',
                ),
                  console.error(t);
              }
            return i;
          }
          var ks = { stroke: 'strokeStyle', fill: 'fillStyle', opacity: 'globalAlpha' },
            Is = [
              'fillStyle',
              'font',
              'globalAlpha',
              'lineCap',
              'lineWidth',
              'lineJoin',
              'miterLimit',
              'shadowBlur',
              'shadowColor',
              'shadowOffsetX',
              'shadowOffsetY',
              'strokeStyle',
              'textAlign',
              'textBaseline',
              'lineDash',
              'shadow',
            ],
            Os = ['circle', 'sector', 'polygon', 'rect', 'polyline'],
            Ge = (function() {
              var i = r.prototype;
              i._initProperties = function() {
                this._attrs = { zIndex: 0, visible: !0, destroyed: !1 };
              };
              function r(a) {
                this._initProperties(), _(this._attrs, a);
                var e = this._attrs.attrs;
                e && this.initAttrs(e), this.initTransform();
              }
              return (
                (i.get = function(e) {
                  return this._attrs[e];
                }),
                (i.set = function(e, t) {
                  this._attrs[e] = t;
                }),
                (i.isGroup = function() {
                  return this.get('isGroup');
                }),
                (i.isShape = function() {
                  return this.get('isShape');
                }),
                (i.initAttrs = function(e) {
                  this.attr(_(this.getDefaultAttrs(), e));
                }),
                (i.getDefaultAttrs = function() {
                  return {};
                }),
                (i._setAttr = function(e, t) {
                  var n = this._attrs.attrs;
                  if (e === 'clip') t = this._setAttrClip(t);
                  else {
                    var s = ks[e];
                    s && (n[s] = t);
                  }
                  n[e] = t;
                }),
                (i._getAttr = function(e) {
                  return this._attrs.attrs[e];
                }),
                (i._setAttrClip = function(e) {
                  return e && Os.indexOf(e._attrs.type) > -1
                    ? (e.get('canvas') === null && (e = Object.assign({}, e)),
                      e.set('parent', this.get('parent')),
                      e.set('context', this.get('context')),
                      e)
                    : null;
                }),
                (i.attr = function(e, t) {
                  var n = this;
                  if (n.get('destroyed')) return null;
                  var s = arguments.length;
                  if (s === 0) return n._attrs.attrs;
                  if (j(e)) {
                    this._attrs.bbox = null;
                    for (var o in e) n._setAttr(o, e[o]);
                    return n._afterAttrsSet && n._afterAttrsSet(), n;
                  }
                  return s === 2
                    ? ((this._attrs.bbox = null),
                      n._setAttr(e, t),
                      n._afterAttrsSet && n._afterAttrsSet(),
                      n)
                    : n._getAttr(e);
                }),
                (i.getParent = function() {
                  return this.get('parent');
                }),
                (i.draw = function(e) {
                  if (this.get('destroyed')) return;
                  this.get('visible') &&
                    (this.setContext(e), this.drawInner(e), this.restoreContext(e));
                }),
                (i.setContext = function(e) {
                  var t = this._attrs.attrs.clip;
                  e.save(),
                    t && (t.resetTransform(e), t.createPath(e), e.clip()),
                    this.resetContext(e),
                    this.resetTransform(e);
                }),
                (i.restoreContext = function(e) {
                  e.restore();
                }),
                (i.resetContext = function(e) {
                  var t = this._attrs.attrs;
                  if (!this._attrs.isGroup) {
                    for (var n in t)
                      if (Is.indexOf(n) > -1) {
                        var s = t[n];
                        (n === 'fillStyle' || n === 'strokeStyle') && (s = As(s, this, e)),
                          n === 'lineDash' && e.setLineDash && k(s) ? e.setLineDash(s) : (e[n] = s);
                      }
                  }
                }),
                (i.hasFill = function() {
                  return this.get('canFill') && this._attrs.attrs.fillStyle;
                }),
                (i.hasStroke = function() {
                  return this.get('canStroke') && this._attrs.attrs.strokeStyle;
                }),
                (i.drawInner = function() {}),
                (i.show = function() {
                  return this.set('visible', !0), this;
                }),
                (i.hide = function() {
                  return this.set('visible', !1), this;
                }),
                (i.isVisible = function() {
                  return this.get('visible');
                }),
                (i._removeFromParent = function() {
                  var e = this.get('parent');
                  if (e) {
                    var t = e.get('children');
                    Wt(t, this);
                  }
                  return this;
                }),
                (i.remove = function(e) {
                  e ? this.destroy() : this._removeFromParent();
                }),
                (i.destroy = function() {
                  var e = this.get('destroyed');
                  if (e) return null;
                  this._removeFromParent(), (this._attrs = {}), this.set('destroyed', !0);
                }),
                (i.getBBox = function() {
                  return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };
                }),
                (i.initTransform = function() {
                  var e = this._attrs.attrs || {};
                  e.matrix || (e.matrix = [1, 0, 0, 1, 0, 0]), (this._attrs.attrs = e);
                }),
                (i.getMatrix = function() {
                  return this._attrs.attrs.matrix;
                }),
                (i.setMatrix = function(e) {
                  this._attrs.attrs.matrix = [e[0], e[1], e[2], e[3], e[4], e[5]];
                }),
                (i.transform = function(e) {
                  var t = this._attrs.attrs.matrix;
                  return (this._attrs.attrs.matrix = G.transform(t, e)), this;
                }),
                (i.setTransform = function(e) {
                  return (this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0]), this.transform(e);
                }),
                (i.translate = function(e, t) {
                  var n = this._attrs.attrs.matrix;
                  G.translate(n, n, [e, t]);
                }),
                (i.rotate = function(e) {
                  var t = this._attrs.attrs.matrix;
                  G.rotate(t, t, e);
                }),
                (i.scale = function(e, t) {
                  var n = this._attrs.attrs.matrix;
                  G.scale(n, n, [e, t]);
                }),
                (i.moveTo = function(e, t) {
                  var n = this._attrs.x || 0,
                    s = this._attrs.y || 0;
                  this.translate(e - n, t - s), this.set('x', e), this.set('y', t);
                }),
                (i.apply = function(e) {
                  var t = this._attrs.attrs.matrix;
                  return A.transformMat2d(e, e, t), this;
                }),
                (i.resetTransform = function(e) {
                  var t = this._attrs.attrs.matrix;
                  G.isChanged(t) && e.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
                }),
                (i.isDestroyed = function() {
                  return this.get('destroyed');
                }),
                r
              );
            })(),
            R = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initProperties = function() {
                  this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isShape: !0, attrs: {} };
                }),
                (a.getType = function() {
                  return this._attrs.type;
                }),
                (a.drawInner = function(t) {
                  var n = this,
                    s = n.get('attrs');
                  n.createPath(t);
                  var o = t.globalAlpha;
                  if (n.hasFill()) {
                    var l = s.fillOpacity;
                    !w(l) && l !== 1
                      ? ((t.globalAlpha = l), t.fill(), (t.globalAlpha = o))
                      : t.fill();
                  }
                  if (n.hasStroke()) {
                    var u = s.lineWidth;
                    if (u > 0) {
                      var c = s.strokeOpacity;
                      !w(c) && c !== 1 && (t.globalAlpha = c), t.stroke();
                    }
                  }
                }),
                (a.getBBox = function() {
                  var t = this._attrs.bbox;
                  return (
                    t ||
                      ((t = this.calculateBox()),
                      t &&
                        ((t.x = t.minX),
                        (t.y = t.minY),
                        (t.width = t.maxX - t.minX),
                        (t.height = t.maxY - t.minY)),
                      (this._attrs.bbox = t)),
                    t
                  );
                }),
                (a.calculateBox = function() {
                  return null;
                }),
                (a.createPath = function() {}),
                r
              );
            })(Ge),
            Pa = {},
            He = '_INDEX';
          function Rs(i) {
            return function(r, a) {
              var e = i(r, a);
              return e === 0 ? r[He] - a[He] : e;
            };
          }
          var wa = {
              getGroupClass: function() {},
              getChildren: function() {
                return this.get('children');
              },
              addShape: function(r, a) {
                a === void 0 && (a = {});
                var e = this.get('canvas'),
                  t = Pa[r];
                t || ((t = lt(r)), (Pa[r] = t)),
                  (a.canvas = e),
                  t === 'Text' &&
                    e &&
                    e.get('fontFamily') &&
                    (a.attrs.fontFamily = a.attrs.fontFamily || e.get('fontFamily'));
                var n = new R[t](a);
                return this.add(n), n;
              },
              addGroup: function(r) {
                var a = this.get('canvas'),
                  e = this.getGroupClass();
                (r = _({}, r)), (r.canvas = a), (r.parent = this);
                var t = new e(r);
                return this.add(t), t;
              },
              contain: function(r) {
                var a = this.get('children');
                return a.indexOf(r) > -1;
              },
              sort: function() {
                for (var r = this.get('children'), a = 0, e = r.length; a < e; a++) {
                  var t = r[a];
                  t[He] = a;
                }
                return (
                  r.sort(
                    Rs(function(n, s) {
                      return n.get('zIndex') - s.get('zIndex');
                    }),
                  ),
                  this
                );
              },
              drawInner: function(r) {
                for (var a = this.get('children'), e = 0, t = a.length; e < t; e++) {
                  var n = a[e];
                  n.draw(r);
                }
                return this;
              },
              clear: function() {
                for (var r = this.get('children'); r.length !== 0; ) r[r.length - 1].remove(!0);
                return this;
              },
              add: function(r) {
                var a = this,
                  e = a.get('children');
                k(r) || (r = [r]);
                for (var t = 0, n = r.length; t < n; t++) {
                  var s = r[t],
                    o = s.get('parent');
                  if (o) {
                    var l = o.get('children');
                    Wt(l, s);
                  }
                  a._setEvn(s), e.push(s);
                }
                return a;
              },
              _setEvn: function(r) {
                var a = this;
                (r._attrs.parent = a),
                  (r._attrs.context = a._attrs.context),
                  (r._attrs.canvas = a._attrs.canvas);
                var e = r._attrs.attrs.clip;
                if (
                  (e && (e.set('parent', a), e.set('context', a.get('context'))), r._attrs.isGroup)
                )
                  for (var t = r._attrs.children, n = 0, s = t.length; n < s; n++) r._setEvn(t[n]);
              },
            },
            kt = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initProperties = function() {
                  this._attrs = {
                    zIndex: 0,
                    visible: !0,
                    destroyed: !1,
                    isGroup: !0,
                    children: [],
                  };
                }),
                (a.getBBox = function() {
                  for (
                    var t = this,
                      n = Infinity,
                      s = -Infinity,
                      o = Infinity,
                      l = -Infinity,
                      u = t.get('children'),
                      c = 0,
                      f = u.length;
                    c < f;
                    c++
                  ) {
                    var h = u[c];
                    if (h.get('visible')) {
                      var v = h.getBBox();
                      if (!v) continue;
                      var g = [v.minX, v.minY],
                        p = [v.minX, v.maxY],
                        m = [v.maxX, v.minY],
                        d = [v.maxX, v.maxY],
                        y = h.attr('matrix');
                      A.transformMat2d(g, g, y),
                        A.transformMat2d(p, p, y),
                        A.transformMat2d(m, m, y),
                        A.transformMat2d(d, d, y),
                        (n = Math.min(g[0], p[0], m[0], d[0], n)),
                        (s = Math.max(g[0], p[0], m[0], d[0], s)),
                        (o = Math.min(g[1], p[1], m[1], d[1], o)),
                        (l = Math.max(g[1], p[1], m[1], d[1], l));
                    }
                  }
                  return {
                    minX: n,
                    minY: o,
                    maxX: s,
                    maxY: l,
                    x: n,
                    y: o,
                    width: s - n,
                    height: l - o,
                  };
                }),
                (a.destroy = function() {
                  if (this.get('destroyed')) return;
                  this.clear(), i.prototype.destroy.call(this);
                }),
                r
              );
            })(Ge);
          _(kt.prototype, wa, {
            getGroupClass: function() {
              return kt;
            },
          });
          var Ue =
              typeof window == 'object' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : function(i) {
                    return setTimeout(i, 16);
                  },
            je = (function(i) {
              E(a, i);
              var r = a.prototype;
              (r.get = function(t) {
                return this._attrs[t];
              }),
                (r.set = function(t, n) {
                  this._attrs[t] = n;
                });
              function a(e) {
                var t;
                return (
                  (t = i.call(this) || this),
                  (t._attrs = _({ type: 'canvas', children: [] }, e)),
                  t._initPixelRatio(),
                  t._initCanvas(),
                  t
                );
              }
              return (
                (r._initPixelRatio = function() {
                  var t = this.get('pixelRatio');
                  t || this.set('pixelRatio', Cr());
                }),
                (r.beforeDraw = function() {
                  var t = this._attrs.context,
                    n = this._attrs.el;
                  t && t.clearRect && t.clearRect(0, 0, n.width, n.height);
                }),
                (r._initCanvas = function() {
                  var t = this,
                    n = t.get('el'),
                    s = t.get('context');
                  if (!n && !s)
                    throw new Error('Please specify the id, el or context of the chart!');
                  var o;
                  n ? (o = B(n) ? Pr(n) : n) : (o = bs.create(s)),
                    s &&
                      o &&
                      !o.getContext &&
                      (o.getContext = function() {
                        return s;
                      });
                  var l = t.get('width');
                  l || (l = Pe(o));
                  var u = t.get('height');
                  u || (u = we(o)),
                    t.set('canvas', this),
                    t.set('el', o),
                    t.set('context', s || o.getContext('2d')),
                    t.changeSize(l, u);
                  var c = new Ps({ canvas: this, el: o });
                  t.set('eventController', c);
                }),
                (r.changeSize = function(t, n) {
                  var s = this.get('pixelRatio'),
                    o = this.get('el');
                  if (
                    (o.style && ((o.style.width = t + 'px'), (o.style.height = n + 'px')),
                    Sr(o) && ((o.width = t * s), (o.height = n * s), s !== 1))
                  ) {
                    var l = this.get('context');
                    l.scale(s, s);
                  }
                  this.set('width', t), this.set('height', n);
                }),
                (r.getWidth = function() {
                  var t = this.get('pixelRatio'),
                    n = this.get('width');
                  return n * t;
                }),
                (r.getHeight = function() {
                  var t = this.get('pixelRatio'),
                    n = this.get('height');
                  return n * t;
                }),
                (r.getPointByClient = function(t, n) {
                  var s = this.get('el'),
                    o = s.getBoundingClientRect(),
                    l = o.right - o.left,
                    u = o.bottom - o.top;
                  return { x: (t - o.left) * (s.width / l), y: (n - o.top) * (s.height / u) };
                }),
                (r._beginDraw = function() {
                  this._attrs.toDraw = !0;
                }),
                (r._endDraw = function() {
                  this._attrs.toDraw = !1;
                }),
                (r.draw = function() {
                  var t = this;
                  function n() {
                    t.set(
                      'animateHandler',
                      Ue(function() {
                        t.set('animateHandler', void 0), t.get('toDraw') && n();
                      }),
                    ),
                      t.beforeDraw();
                    try {
                      var s = t._attrs.context;
                      t.drawInner(s), s.draw && s.draw();
                    } catch (o) {
                      console.warn('error in draw canvas, detail as:'),
                        console.warn(o),
                        t._endDraw();
                    }
                    t._endDraw();
                  }
                  if (t.get('destroyed')) return;
                  t.get('animateHandler') ? this._beginDraw() : n();
                }),
                (r.destroy = function() {
                  if (this.get('destroyed')) return;
                  var t = this.get('el');
                  (t.width = 0),
                    (t.height = 0),
                    this.clear(),
                    (this._attrs = {}),
                    this.set('destroyed', !0);
                }),
                (r.isDestroyed = function() {
                  return this.get('destroyed');
                }),
                a
              );
            })(Ee);
          _(je.prototype, wa, {
            getGroupClass: function() {
              return kt;
            },
          });
          function Ns(i, r, a) {
            if (((i = q(i)), !i[0] && !i[1] && !i[2] && !i[3])) return i;
            var e = Math.max(i[0] + i[1], i[2] + i[3]),
              t = Math.max(i[0] + i[3], i[1] + i[2]),
              n = Math.min(r / e, a / t);
            return n < 1
              ? i.map(function(s) {
                  return s * n;
                })
              : i;
          }
          var Ys = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !0),
                  (this._attrs.canStroke = !0),
                  (this._attrs.type = 'rect');
              }),
              (a.getDefaultAttrs = function() {
                return { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 0 };
              }),
              (a.createPath = function(t) {
                var n = this,
                  s = n.get('attrs'),
                  o = s.x,
                  l = s.y,
                  u = s.width,
                  c = s.height,
                  f = s.radius;
                t.beginPath(),
                  !f || !(u * c)
                    ? t.rect(o, l, u, c)
                    : ((f = Ns(f, u, c)),
                      t.moveTo(o + f[0], l),
                      t.lineTo(o + u - f[1], l),
                      t.arc(o + u - f[1], l + f[1], f[1], -Math.PI / 2, 0, !1),
                      t.lineTo(o + u, l + c - f[2]),
                      t.arc(o + u - f[2], l + c - f[2], f[2], 0, Math.PI / 2, !1),
                      t.lineTo(o + f[3], l + c),
                      t.arc(o + f[3], l + c - f[3], f[3], Math.PI / 2, Math.PI, !1),
                      t.lineTo(o, l + f[0]),
                      t.arc(o + f[0], l + f[0], f[0], Math.PI, (Math.PI * 3) / 2, !1),
                      t.closePath());
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.x,
                  s = t.y,
                  o = t.width,
                  l = t.height;
                return { minX: n, minY: s, maxX: n + o, maxY: s + l };
              }),
              r
            );
          })(R);
          R.Rect = Ys;
          var Fs = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !1),
                  (this._attrs.canStroke = !1),
                  (this._attrs.loading = !1),
                  (this._attrs.image = null),
                  (this._attrs.type = 'image');
              }),
              (a.getDefaultAttrs = function() {
                return { x: 0, y: 0, width: 0, height: 0 };
              }),
              (a.createPath = function(t) {
                var n = this,
                  s = this.get('attrs'),
                  o = s.src;
                if (this.get('loading')) return;
                var l = this.get('image');
                if (l) this.drawImage(t, l);
                else if (o && Image) {
                  this.set('loading', !0);
                  var u = new Image();
                  (u.src = o),
                    (u.crossOrigin = 'Anonymous'),
                    (u.onload = function() {
                      n.set('loading', !1), n.set('image', u), n.drawImage(t, u);
                    });
                }
              }),
              (a.drawImage = function(t, n) {
                var s = this.get('attrs'),
                  o = s.x,
                  l = s.y,
                  u = s.width,
                  c = s.height,
                  f = s.sx,
                  h = s.sy,
                  v = s.swidth,
                  g = s.sheight;
                !w(f) && !w(h) && !w(v) && !w(g)
                  ? t.drawImage(n, f, h, v, g, o, l, u, c)
                  : t.drawImage(n, o, l, u, c);
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.x,
                  s = t.y,
                  o = t.width,
                  l = t.height;
                return { minX: n, minY: s, maxX: n + o, maxY: s + l };
              }),
              r
            );
          })(R);
          R.Image = Fs;
          var Ls = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !0),
                  (this._attrs.canStroke = !0),
                  (this._attrs.type = 'circle');
              }),
              (a.getDefaultAttrs = function() {
                return { x: 0, y: 0, r: 0, lineWidth: 0 };
              }),
              (a.createPath = function(t) {
                var n = this.get('attrs'),
                  s = n.x,
                  o = n.y,
                  l = n.r;
                t.beginPath(), t.arc(s, o, l, 0, Math.PI * 2, !1), t.closePath();
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.x,
                  s = t.y,
                  o = t.r;
                return { minX: n - o, maxX: n + o, minY: s - o, maxY: s + o };
              }),
              r
            );
          })(R);
          R.Circle = Ls;
          var le = A.create(),
            ue = A.create(),
            ce = A.create();
          function Bs(i, r, a, e, t) {
            var n = Ma(t, i.x, r.x, a.x, e.x),
              s = Ma(t, i.y, r.y, a.y, e.y);
            return { x: n, y: s };
          }
          function Ma(i, r, a, e, t) {
            var n = i * i,
              s = n * i;
            return (
              r +
              (-r * 3 + i * (3 * r - r * i)) * i +
              (3 * a + i * (-6 * a + a * 3 * i)) * i +
              (e * 3 - e * 3 * i) * n +
              t * s
            );
          }
          function zs(i) {
            for (
              var r = Infinity,
                a = -Infinity,
                e = Infinity,
                t = -Infinity,
                n = { x: i[0], y: i[1] },
                s = { x: i[2], y: i[3] },
                o = { x: i[4], y: i[5] },
                l = { x: i[6], y: i[7] },
                u = 0;
              u < 100;
              u++
            ) {
              var c = Bs(n, s, o, l, u / 100);
              c.x < r && (r = c.x),
                c.x > a && (a = c.x),
                c.y < e && (e = c.y),
                c.y > t && (t = c.y);
            }
            return { minX: r, minY: e, maxX: a, maxY: t };
          }
          function Ve(i, r) {
            if (i.length === 0) return;
            for (var a = i[0], e = a.x, t = a.x, n = a.y, s = a.y, o = i.length, l = 1; l < o; l++)
              (a = i[l]),
                (e = Math.min(e, a.x)),
                (t = Math.max(t, a.x)),
                (n = Math.min(n, a.y)),
                (s = Math.max(s, a.y));
            return (r = r / 2 || 0), { minX: e - r, minY: n - r, maxX: t + r, maxY: s + r };
          }
          function Xs(i, r, a, e, t) {
            return (
              (t = t / 2 || 0),
              {
                minX: Math.min(i, a) - t,
                minY: Math.min(r, e) - t,
                maxX: Math.max(i, a) + t,
                maxY: Math.max(r, e) + t,
              }
            );
          }
          function We(i, r, a, e, t, n) {
            var s = Math.abs(e - t);
            if (s % (Math.PI * 2) < 1e-4 && s > 1e-4)
              return { minX: i - a, minY: r - a, maxX: i + a, maxY: r + a };
            (le[0] = Math.cos(e) * a + i),
              (le[1] = Math.sin(e) * a + r),
              (ue[0] = Math.cos(t) * a + i),
              (ue[1] = Math.sin(t) * a + r);
            var o = [0, 0],
              l = [0, 0];
            if (
              (A.min(o, le, ue),
              A.max(l, le, ue),
              (e = e % (Math.PI * 2)),
              e < 0 && (e = e + Math.PI * 2),
              (t = t % (Math.PI * 2)),
              t < 0 && (t = t + Math.PI * 2),
              e > t && !n ? (t += Math.PI * 2) : e < t && n && (e += Math.PI * 2),
              n)
            ) {
              var u = t;
              (t = e), (e = u);
            }
            for (var c = 0; c < t; c += Math.PI / 2)
              c > e &&
                ((ce[0] = Math.cos(c) * a + i),
                (ce[1] = Math.sin(c) * a + r),
                A.min(o, ce, o),
                A.max(l, ce, l));
            return { minX: o[0], minY: o[1], maxX: l[0], maxY: l[1] };
          }
          function Gs(i, r) {
            for (
              var a = Infinity, e = -Infinity, t = Infinity, n = -Infinity, s = 0, o = i.length;
              s < o;
              s++
            ) {
              var l = zs(i[s]);
              l.minX < a && (a = l.minX),
                l.maxX > e && (e = l.maxX),
                l.minY < t && (t = l.minY),
                l.maxY > n && (n = l.maxY);
            }
            return (r = r / 2 || 0), { minX: a - r, minY: t - r, maxX: e + r, maxY: n + r };
          }
          var Hs = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canStroke = !0),
                  (this._attrs.type = 'line');
              }),
              (a.getDefaultAttrs = function() {
                return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 };
              }),
              (a.createPath = function(t) {
                var n = this.get('attrs'),
                  s = n.x1,
                  o = n.y1,
                  l = n.x2,
                  u = n.y2;
                t.beginPath(), t.moveTo(s, o), t.lineTo(l, u);
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.x1,
                  s = t.y1,
                  o = t.x2,
                  l = t.y2,
                  u = t.lineWidth;
                return Xs(n, s, o, l, u);
              }),
              r
            );
          })(R);
          R.Line = Hs;
          var Us = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !0),
                  (this._attrs.canStroke = !0),
                  (this._attrs.type = 'polygon');
              }),
              (a.getDefaultAttrs = function() {
                return { points: null, lineWidth: 0 };
              }),
              (a.createPath = function(t) {
                var n = this,
                  s = n.get('attrs'),
                  o = s.points;
                t.beginPath();
                for (var l = 0, u = o.length; l < u; l++) {
                  var c = o[l];
                  l === 0 ? t.moveTo(c.x, c.y) : t.lineTo(c.x, c.y);
                }
                t.closePath();
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.points;
                return Ve(n);
              }),
              r
            );
          })(R);
          R.Polygon = Us;
          function It(i) {
            return [i.x, i.y];
          }
          function js(i, r, a, e) {
            var t = [],
              n,
              s,
              o = !!e,
              l,
              u,
              c,
              f,
              h,
              v;
            if (o) {
              for (
                l = [Infinity, Infinity], u = [-Infinity, -Infinity], v = 0, h = i.length;
                v < h;
                v++
              )
                (c = It(i[v])), A.min(l, l, c), A.max(u, u, c);
              A.min(l, l, e[0]), A.max(u, u, e[1]);
            }
            for (v = 0, f = i.length; v < f; v++) {
              if (((c = It(i[v])), a)) (n = It(i[v ? v - 1 : f - 1])), (s = It(i[(v + 1) % f]));
              else if (v === 0 || v === f - 1) {
                t.push([c[0], c[1]]);
                continue;
              } else (n = It(i[v - 1])), (s = It(i[v + 1]));
              var g = A.sub([], s, n);
              A.scale(g, g, r);
              var p = A.distance(c, n),
                m = A.distance(c, s),
                d = p + m;
              d !== 0 && ((p /= d), (m /= d));
              var y = A.scale([], g, -p),
                x = A.scale([], g, m),
                S = A.add([], c, y),
                P = A.add([], c, x);
              o && (A.max(S, S, l), A.min(S, S, u), A.max(P, P, l), A.min(P, P, u)),
                t.push([S[0], S[1]]),
                t.push([P[0], P[1]]);
            }
            return a && t.push(t.shift()), t;
          }
          function fe(i, r, a) {
            for (
              var e = !!r, t = js(i, 0.4, e, a), n = i.length, s = [], o, l, u, c = 0;
              c < n - 1;
              c++
            )
              (o = t[c * 2]),
                (l = t[c * 2 + 1]),
                (u = i[c + 1]),
                s.push(['C', o[0], o[1], l[0], l[1], u.x, u.y]);
            return (
              e &&
                ((o = t[n]),
                (l = t[n + 1]),
                (u = i[0]),
                s.push(['C', o[0], o[1], l[0], l[1], u.x, u.y])),
              s
            );
          }
          function ba(i) {
            for (var r = [], a = 0, e = i.length; a < e; a++) {
              var t = i[a];
              !isNaN(t.x) && !isNaN(t.y) && r.push(t);
            }
            return r;
          }
          var Vs = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !0),
                  (this._attrs.canStroke = !0),
                  (this._attrs.type = 'polyline');
              }),
              (a.getDefaultAttrs = function() {
                return { points: null, lineWidth: 1, smooth: !1 };
              }),
              (a.createPath = function(t) {
                var n = this,
                  s = n.get('attrs'),
                  o = s.points,
                  l = s.smooth,
                  u = ba(o);
                if ((t.beginPath(), u.length))
                  if ((t.moveTo(u[0].x, u[0].y), l))
                    for (
                      var c = [
                          [0, 0],
                          [1, 1],
                        ],
                        f = fe(u, !1, c),
                        h = 0,
                        v = f.length;
                      h < v;
                      h++
                    ) {
                      var g = f[h];
                      t.bezierCurveTo(g[1], g[2], g[3], g[4], g[5], g[6]);
                    }
                  else {
                    var p, m;
                    for (p = 1, m = u.length - 1; p < m; p++) t.lineTo(u[p].x, u[p].y);
                    t.lineTo(u[m].x, u[m].y);
                  }
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.points,
                  s = t.smooth,
                  o = t.lineWidth,
                  l = ba(n);
                if (s) {
                  for (
                    var u = [],
                      c = [
                        [0, 0],
                        [1, 1],
                      ],
                      f = fe(l, !1, c),
                      h = 0,
                      v = f.length;
                    h < v;
                    h++
                  ) {
                    var g = f[h];
                    if (h === 0) u.push([l[0].x, l[0].y, g[1], g[2], g[3], g[4], g[5], g[6]]);
                    else {
                      var p = f[h - 1];
                      u.push([p[5], p[6], g[1], g[2], g[3], g[4], g[5], g[6]]);
                    }
                  }
                  return Gs(u, o);
                }
                return Ve(l, o);
              }),
              r
            );
          })(R);
          R.Polyline = Vs;
          var Ws = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canStroke = !0),
                  (this._attrs.canFill = !0),
                  (this._attrs.type = 'arc');
              }),
              (a.getDefaultAttrs = function() {
                return {
                  x: 0,
                  y: 0,
                  r: 0,
                  startAngle: 0,
                  endAngle: Math.PI * 2,
                  anticlockwise: !1,
                  lineWidth: 1,
                };
              }),
              (a.createPath = function(t) {
                var n = this.get('attrs'),
                  s = n.x,
                  o = n.y,
                  l = n.r,
                  u = n.startAngle,
                  c = n.endAngle,
                  f = n.anticlockwise;
                t.beginPath(), u !== c && t.arc(s, o, l, u, c, f);
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.x,
                  s = t.y,
                  o = t.r,
                  l = t.startAngle,
                  u = t.endAngle,
                  c = t.anticlockwise;
                return We(n, s, o, l, u, c);
              }),
              r
            );
          })(R);
          R.Arc = Ws;
          var qs = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !0),
                  (this._attrs.canStroke = !0),
                  (this._attrs.type = 'sector');
              }),
              (a.getDefaultAttrs = function() {
                return {
                  x: 0,
                  y: 0,
                  lineWidth: 0,
                  r: 0,
                  r0: 0,
                  startAngle: 0,
                  endAngle: Math.PI * 2,
                  anticlockwise: !1,
                };
              }),
              (a.createPath = function(t) {
                var n = this.get('attrs'),
                  s = n.x,
                  o = n.y,
                  l = n.startAngle,
                  u = n.endAngle,
                  c = n.r,
                  f = n.r0,
                  h = n.anticlockwise;
                t.beginPath();
                var v = Math.cos(l),
                  g = Math.sin(l);
                t.moveTo(v * f + s, g * f + o),
                  t.lineTo(v * c + s, g * c + o),
                  (Math.abs(u - l) > 1e-4 || (l === 0 && u < 0)) &&
                    (t.arc(s, o, c, l, u, h),
                    t.lineTo(Math.cos(u) * f + s, Math.sin(u) * f + o),
                    f !== 0 && t.arc(s, o, f, u, l, !h)),
                  t.closePath();
              }),
              (a.calculateBox = function() {
                var t = this.get('attrs'),
                  n = t.x,
                  s = t.y,
                  o = t.r,
                  l = t.r0,
                  u = t.startAngle,
                  c = t.endAngle,
                  f = t.anticlockwise,
                  h = We(n, s, o, u, c, f),
                  v = We(n, s, l, u, c, f);
                return {
                  minX: Math.min(h.minX, v.minX),
                  minY: Math.min(h.minY, v.minY),
                  maxX: Math.max(h.maxX, v.maxX),
                  maxY: Math.max(h.maxY, v.maxY),
                };
              }),
              r
            );
          })(R);
          R.Sector = qs;
          var $s = {
              calcRotatedBox: function(r) {
                var a = r.width,
                  e = r.height,
                  t = r.rotate,
                  n = Math.abs(t);
                return {
                  width: Math.abs(a * Math.cos(n) + e * Math.sin(n)),
                  height: Math.abs(e * Math.cos(n) + a * Math.sin(n)),
                };
              },
            },
            qe = 0,
            he = {},
            Zs = 5e3,
            Js = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initProperties = function() {
                  i.prototype._initProperties.call(this),
                    (this._attrs.canFill = !0),
                    (this._attrs.canStroke = !0),
                    (this._attrs.type = 'text');
                }),
                (a.getDefaultAttrs = function() {
                  return {
                    lineWidth: 0,
                    lineCount: 1,
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontVariant: 'normal',
                    textAlign: 'start',
                    textBaseline: 'bottom',
                    lineHeight: null,
                    textArr: null,
                  };
                }),
                (a._getFontStyle = function() {
                  var t = this._attrs.attrs,
                    n = t.fontSize,
                    s = t.fontFamily,
                    o = t.fontWeight,
                    l = t.fontStyle,
                    u = t.fontVariant;
                  return l + ' ' + u + ' ' + o + ' ' + n + 'px ' + s;
                }),
                (a._afterAttrsSet = function() {
                  var t = this._attrs.attrs;
                  if (((t.font = this._getFontStyle()), t.text)) {
                    var n = t.text,
                      s = null,
                      o = 1;
                    B(n) &&
                      n.indexOf(`
`) !== -1 &&
                      ((s = n.split(`
`)),
                      (o = s.length)),
                      (t.lineCount = o),
                      (t.textArr = s);
                  }
                  this.set('attrs', t);
                }),
                (a._getTextHeight = function() {
                  var t = this._attrs.attrs;
                  if (t.height) return t.height;
                  var n = t.lineCount,
                    s = t.fontSize * 1;
                  if (n > 1) {
                    var o = this._getSpaceingY();
                    return s * n + o * (n - 1);
                  }
                  return s;
                }),
                (a._getSpaceingY = function() {
                  var t = this._attrs.attrs,
                    n = t.lineHeight,
                    s = t.fontSize * 1;
                  return n ? n - s : s * 0.14;
                }),
                (a.drawInner = function(t) {
                  var n = this,
                    s = n._attrs.attrs,
                    o = s.text,
                    l = s.x,
                    u = s.y;
                  if (w(o) || isNaN(l) || isNaN(u)) return;
                  var c = s.textArr,
                    f = s.fontSize * 1,
                    h = n._getSpaceingY();
                  s.rotate && (t.translate(l, u), t.rotate(s.rotate), (l = 0), (u = 0));
                  var v = s.textBaseline,
                    g;
                  c && (g = n._getTextHeight());
                  var p;
                  if (n.hasFill()) {
                    var m = s.fillOpacity;
                    if ((!w(m) && m !== 1 && (t.globalAlpha = m), c))
                      for (var d = 0, y = c.length; d < y; d++) {
                        var x = c[d];
                        (p = u + d * (h + f) - g + f),
                          v === 'middle' && (p += g - f - (g - f) / 2),
                          v === 'top' && (p += g - f),
                          t.fillText(x, l, p);
                      }
                    else t.fillText(o, l, u);
                  }
                  if (n.hasStroke())
                    if (c)
                      for (var S = 0, P = c.length; S < P; S++) {
                        var b = c[S];
                        (p = u + S * (h + f) - g + f),
                          v === 'middle' && (p += g - f - (g - f) / 2),
                          v === 'top' && (p += g - f),
                          t.strokeText(b, l, p);
                      }
                    else t.strokeText(o, l, u);
                }),
                (a.calculateBox = function() {
                  var t = this,
                    n = t._attrs.attrs,
                    s = n.x,
                    o = n.y,
                    l = n.textAlign,
                    u = n.textBaseline,
                    c = t._getTextWidth();
                  if (!c) return { minX: s, minY: o, maxX: s, maxY: o };
                  var f = t._getTextHeight();
                  if (n.rotate) {
                    var h = $s.calcRotatedBox({ width: c, height: f, rotate: n.rotate });
                    (c = h.width), (f = h.height);
                  }
                  var v = { x: s, y: o - f };
                  return (
                    l &&
                      (l === 'end' || l === 'right'
                        ? (v.x -= c)
                        : l === 'center' && (v.x -= c / 2)),
                    u && (u === 'top' ? (v.y += f) : u === 'middle' && (v.y += f / 2)),
                    { minX: v.x, minY: v.y, maxX: v.x + c, maxY: v.y + f }
                  );
                }),
                (a._getTextWidth = function() {
                  var t = this._attrs.attrs;
                  if (t.width) return t.width;
                  var n = t.text,
                    s = this.get('context');
                  if (w(n)) return;
                  var o = t.font,
                    l = t.textArr,
                    u = n + '' + o;
                  if (he[u]) return he[u];
                  var c = 0;
                  if (l)
                    for (var f = 0, h = l.length; f < h; f++) {
                      var v = l[f];
                      c = Math.max(c, be(v, o, s).width);
                    }
                  else c = be(n, o, s).width;
                  return qe > Zs && ((qe = 0), (he = {})), qe++, (he[u] = c), c;
                }),
                r
              );
            })(R);
          R.Text = Js;
          var Ks = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initProperties = function() {
                i.prototype._initProperties.call(this),
                  (this._attrs.canFill = !0),
                  (this._attrs.canStroke = !0),
                  (this._attrs.createPath = null),
                  (this._attrs.type = 'custom');
              }),
              (a.createPath = function(t) {
                var n = this.get('createPath');
                n && n.call(this, t);
              }),
              (a.calculateBox = function() {
                var t = this.get('calculateBox');
                return t && t.call(this);
              }),
              r
            );
          })(R);
          R.Custom = Ks;
          var Ta = Object.freeze({
            __proto__: null,
            Canvas: je,
            Group: kt,
            Shape: R,
            Matrix: G,
            Vector2: A,
          });
          function Qs(i) {
            var r = i.slice(0);
            if (r.length > 0) {
              var a = r[0],
                e = r[r.length - 1];
              a.value !== 0 && r.unshift({ value: 0 }), e.value !== 1 && r.push({ value: 1 });
            }
            return r;
          }
          var to = (function() {
            function i(a) {
              (this.axisCfg = {}),
                (this.frontPlot = null),
                (this.backPlot = null),
                (this.axes = {}),
                _(this, a);
            }
            var r = i.prototype;
            return (
              (r._isHide = function(e) {
                var t = this.axisCfg;
                return !t || t[e] === !1;
              }),
              (r._getLinePosition = function(e, t, n, s) {
                var o = '',
                  l = e.field,
                  u = this.axisCfg;
                return (
                  u[l] && u[l].position
                    ? (o = u[l].position)
                    : t === 'x'
                    ? (o = s ? 'left' : 'bottom')
                    : t === 'y' && ((o = n ? 'right' : 'left'), s && (o = 'bottom')),
                  o
                );
              }),
              (r._getLineCfg = function(e, t, n) {
                var s,
                  o,
                  l = 1;
                return (
                  t === 'x'
                    ? ((s = { x: 0, y: 0 }), (o = { x: 1, y: 0 }))
                    : n === 'right'
                    ? ((s = { x: 1, y: 0 }), (o = { x: 1, y: 1 }))
                    : ((s = { x: 0, y: 0 }), (o = { x: 0, y: 1 }), (l = -1)),
                  e.transposed && (l *= -1),
                  { offsetFactor: l, start: e.convertPoint(s), end: e.convertPoint(o) }
                );
              }),
              (r._getCircleCfg = function(e) {
                return {
                  startAngle: e.startAngle,
                  endAngle: e.endAngle,
                  center: e.center,
                  radius: e.circleRadius,
                };
              }),
              (r._getRadiusCfg = function(e) {
                var t = e.transposed,
                  n,
                  s;
                return (
                  t
                    ? ((n = { x: 0, y: 0 }), (s = { x: 1, y: 0 }))
                    : ((n = { x: 0, y: 0 }), (s = { x: 0, y: 1 })),
                  { offsetFactor: -1, start: e.convertPoint(n), end: e.convertPoint(s) }
                );
              }),
              (r._getAxisCfg = function(e, t, n, s, o) {
                var l = this,
                  u = this.axisCfg,
                  c = t.getTicks(),
                  f = z(
                    { ticks: c, frontContainer: this.frontPlot, backContainer: this.backPlot },
                    o,
                    u[t.field],
                  ),
                  h = [],
                  v = f.label,
                  g = c.length,
                  p = 0,
                  m = 0,
                  d = v;
                return (
                  C(c, function(y, x) {
                    if (F(v)) {
                      var S = v(y.text, x, g);
                      d = S ? _({}, D._defaultAxis.label, S) : null;
                    }
                    if (d) {
                      var P = {};
                      d.textAlign && (P.textAlign = d.textAlign),
                        d.textBaseline && (P.textBaseline = d.textBaseline);
                      var b = new R.Text({
                        className: 'axis-label',
                        attrs: _(
                          {
                            x: 0,
                            y: 0,
                            text: y.text,
                            fontFamily: l.chart.get('canvas').get('fontFamily'),
                          },
                          d,
                        ),
                        value: y.value,
                        textStyle: P,
                        top: d.top,
                        context: l.chart.get('canvas').get('context'),
                      });
                      h.push(b);
                      var M = b.getBBox(),
                        I = M.width,
                        O = M.height;
                      (p = Math.max(p, I)), (m = Math.max(m, O));
                    }
                  }),
                  (f.labels = h),
                  (f.maxWidth = p),
                  (f.maxHeight = m),
                  f
                );
              }),
              (r._createAxis = function(e, t, n, s, o) {
                o === void 0 && (o = '');
                var l = this,
                  u = e.type,
                  c = e.transposed,
                  f,
                  h,
                  v;
                if (u === 'cartesian' || u === 'rect') {
                  var g = l._getLinePosition(t, s, o, c);
                  (v = D.axis[g]), (v.position = g), (f = 'Line'), (h = g);
                } else
                  (s === 'x' && !c) || (s === 'y' && c)
                    ? ((v = D.axis.circle), (f = 'Circle'), (h = 'circle'))
                    : ((v = D.axis.radius), (f = 'Line'), (h = 'radius'));
                var p = l._getAxisCfg(e, t, n, s, v);
                (p.type = f),
                  (p.dimType = s),
                  (p.verticalScale = n),
                  (p.index = o),
                  (this.axes[h] = p);
              }),
              (r.createAxis = function(e, t, n) {
                var s = this;
                t && !s._isHide(t.field) && s._createAxis(e, t, n[0], 'x'),
                  C(n, function(T, L) {
                    s._isHide(T.field) || s._createAxis(e, T, t, 'y', L);
                  });
                var o = this.axes,
                  l = s.chart;
                if (l._isAutoPadding()) {
                  var u = q(l.get('padding')),
                    c = q(l.get('appendPadding')),
                    f = l.get('legendRange') || { top: 0, right: 0, bottom: 0, left: 0 },
                    h = [
                      u[0] === 'auto' ? f.top + c[0] * 2 : u[0],
                      u[1] === 'auto' ? f.right + c[1] : u[1],
                      u[2] === 'auto' ? f.bottom + c[2] : u[2],
                      u[3] === 'auto' ? f.left + c[3] : u[3],
                    ];
                  if (e.isPolar) {
                    var v = o.circle;
                    if (v) {
                      var g = v.maxHeight,
                        p = v.maxWidth,
                        m = v.labelOffset;
                      (h[0] += g + m), (h[1] += p + m), (h[2] += g + m), (h[3] += p + m);
                    }
                  } else {
                    if (o.right && u[1] === 'auto') {
                      var d = o.right,
                        y = d.maxWidth,
                        x = d.labelOffset;
                      h[1] += y + x;
                    }
                    if (o.left && u[3] === 'auto') {
                      var S = o.left,
                        P = S.maxWidth,
                        b = S.labelOffset;
                      h[3] += P + b;
                    }
                    if (o.bottom && u[2] === 'auto') {
                      var M = o.bottom,
                        I = M.maxHeight,
                        O = M.labelOffset;
                      h[2] += I + O;
                    }
                  }
                  l.set('_padding', h), l._updateLayout(h);
                }
                C(o, function(T) {
                  var L = T.type,
                    at = T.grid,
                    xt = T.verticalScale,
                    _t = T.ticks,
                    Z = T.dimType,
                    et = T.position,
                    bt = T.index,
                    Nt;
                  if (
                    (e.isPolar
                      ? L === 'Line'
                        ? (Nt = s._getRadiusCfg(e))
                        : L === 'Circle' && (Nt = s._getCircleCfg(e))
                      : (Nt = s._getLineCfg(e, Z, et)),
                    at && xt)
                  ) {
                    var xi = [],
                      ru = Qs(xt.getTicks());
                    C(_t, function(sr) {
                      var _i = [];
                      C(ru, function(Si) {
                        var or = Z === 'x' ? sr.value : Si.value,
                          lr = Z === 'x' ? Si.value : sr.value;
                        if (or >= 0 && or <= 1 && lr >= 0 && lr <= 1) {
                          var au = e.convertPoint({ x: or, y: lr });
                          _i.push(au);
                        }
                      }),
                        xi.push({ points: _i, _id: 'axis-' + Z + bt + '-grid-' + sr.tickValue });
                    }),
                      (T.gridPoints = xi),
                      e.isPolar &&
                        ((T.center = e.center),
                        (T.startAngle = e.startAngle),
                        (T.endAngle = e.endAngle));
                  }
                  (Nt._id = 'axis-' + Z), w(bt) || (Nt._id = 'axis-' + Z + bt), new Xt[L](_(T, Nt));
                });
              }),
              (r.clear = function() {
                (this.axes = {}), this.frontPlot.clear(), this.backPlot.clear();
              }),
              i
            );
          })();
          function $e(i) {
            var r = i.start,
              a = i.end,
              e = a.x - r.x,
              t = Math.abs(a.y - r.y),
              n = 10,
              s;
            if (i.isPolar) {
              var o = i.circleRadius,
                l = i.center,
                u = i.startAngle,
                c = i.endAngle;
              s = new R.Sector({
                attrs: { x: l.x, y: l.y, r: o, r0: 0, startAngle: u, endAngle: c },
              });
            } else s = new R.Rect({ attrs: { x: r.x, y: a.y - n, width: e, height: t + 2 * n } });
            return (s.isClip = !0), s;
          }
          function Ze(i, r) {
            var a = i.x,
              e = i.y,
              t = r.tl,
              n = r.tr,
              s = r.br;
            return a >= t.x && a <= n.x && e >= t.y && e <= s.y;
          }
          var Da = Object.freeze({ __proto__: null, getClip: $e, isPointInPlot: Ze });
          function Ea(i, r) {
            return i - r;
          }
          function eo(i, r) {
            var a = !1;
            return (
              C(i, function(e) {
                var t = [].concat(e.values),
                  n = [].concat(r.values);
                if (
                  e.type === r.type &&
                  e.field === r.field &&
                  t.sort(Ea).toString() === n.sort(Ea).toString()
                ) {
                  a = !0;
                  return;
                }
              }),
              a
            );
          }
          var H = (function(i) {
            E(a, i),
              (a.initPlugins = function() {
                return {
                  _plugins: [],
                  _cacheId: 0,
                  register: function(n) {
                    var s = this._plugins;
                    [].concat(n).forEach(function(o) {
                      s.indexOf(o) === -1 && s.push(o);
                    }),
                      this._cacheId++;
                  },
                  unregister: function(n) {
                    var s = this._plugins;
                    [].concat(n).forEach(function(o) {
                      var l = s.indexOf(o);
                      l !== -1 && s.splice(l, 1);
                    }),
                      this._cacheId++;
                  },
                  clear: function() {
                    (this._plugins = []), this._cacheId++;
                  },
                  count: function() {
                    return this._plugins.length;
                  },
                  getAll: function() {
                    return this._plugins;
                  },
                  notify: function(n, s, o) {
                    var l = this.descriptors(n),
                      u = l.length,
                      c,
                      f,
                      h,
                      v,
                      g;
                    for (c = 0; c < u; ++c)
                      if (
                        ((f = l[c]),
                        (h = f.plugin),
                        (g = h[s]),
                        typeof g == 'function' && ((v = [n].concat(o || [])), g.apply(h, v) === !1))
                      )
                        return !1;
                    return !0;
                  },
                  descriptors: function(n) {
                    var s = n._plugins || (n._plugins = {});
                    if (s.id === this._cacheId) return s.descriptors;
                    var o = [],
                      l = [];
                    return (
                      this._plugins.concat((n && n.get('plugins')) || []).forEach(function(u) {
                        var c = o.indexOf(u);
                        if (c !== -1) return;
                        o.push(u), l.push({ plugin: u });
                      }),
                      (s.descriptors = l),
                      (s.id = this._cacheId),
                      l
                    );
                  },
                };
              });
            var r = a.prototype;
            (r.getDefaultCfg = function() {
              return {
                id: null,
                rendered: !1,
                padding: D.padding,
                data: null,
                scales: {},
                geoms: [],
                colDefs: null,
                pixelRatio: D.pixelRatio,
                filters: null,
                appendPadding: D.appendPadding,
              };
            }),
              (r._syncYScales = function() {
                var t = this.get('syncY');
                if (!t) return;
                var n = this.get('geoms'),
                  s = [],
                  o = [],
                  l = [];
                C(n, function(u) {
                  var c = u.getYScale();
                  c.isLinear && (s.push(c), o.push(c.min), l.push(c.max));
                }),
                  (o = Math.min.apply(null, o)),
                  (l = Math.max.apply(null, l)),
                  C(s, function(u) {
                    u.change({ min: o }), u.change({ max: l });
                  });
              }),
              (r._getFieldsForLegend = function() {
                var t = [],
                  n = this.get('geoms');
                return (
                  C(n, function(s) {
                    var o = s.get('attrOptions'),
                      l = o.color;
                    if (l && l.field && B(l.field)) {
                      var u = l.field.split('*');
                      C(u, function(c) {
                        t.indexOf(c) === -1 && t.push(c);
                      });
                    }
                  }),
                  t
                );
              }),
              (r._getScaleData = function(t) {
                var n = this.get('data'),
                  s = this.get('filteredData');
                if (s.length) {
                  var o = this._getFieldsForLegend();
                  o.indexOf(t) === -1 && (n = s);
                }
                return n;
              }),
              (r._adjustScale = function() {
                for (
                  var t = this, n = t.get('scaleController'), s = this.get('geoms'), o = 0;
                  o < s.length;
                  o++
                ) {
                  var l = s[o];
                  if (l.get('type') === 'interval') {
                    var u = l.getYScale();
                    n.adjustStartZero(u);
                  }
                }
              }),
              (r._removeGeoms = function() {
                for (var t = this.get('geoms'); t.length > 0; ) {
                  var n = t.shift();
                  n.destroy();
                }
              }),
              (r._clearGeoms = function() {
                for (var t = this.get('geoms'), n = 0, s = t.length; n < s; n++) {
                  var o = t[n];
                  o.clear();
                }
              }),
              (r._clearInner = function() {
                this._clearGeoms(),
                  a.plugins.notify(this, 'clearInner'),
                  this.emit(en),
                  this.get('axisController') && this.get('axisController').clear();
              }),
              (r._initFilteredData = function() {
                var t = this.get('filters'),
                  n = this.get('data') || [];
                t &&
                  (n = n.filter(function(s) {
                    var o = !0;
                    return (
                      C(t, function(l, u) {
                        if (l && ((o = l(s[u], s)), !o)) return !1;
                      }),
                      o
                    );
                  })),
                  this.set('filteredData', n);
              }),
              (r._changeGeomsData = function() {
                for (
                  var t = this.get('geoms'), n = this.get('filteredData'), s = 0, o = t.length;
                  s < o;
                  s++
                ) {
                  var l = t[s];
                  l.changeData(n);
                }
              }),
              (r._initGeom = function(t) {
                if (t.get('isInit')) return;
                var n = this.get('coord'),
                  s = this.get('filteredData'),
                  o = this.get('colDefs'),
                  l = this.get('middlePlot');
                t.set('chart', this),
                  t.set('container', l.addGroup()),
                  t.set('data', s),
                  t.set('coord', n),
                  t.set('colDefs', o),
                  t.init(),
                  this.emit(Ji, t);
              }),
              (r._initGeoms = function() {
                for (var t = this.get('geoms'), n = 0, s = t.length; n < s; n++)
                  this._initGeom(t[n]);
              }),
              (r._initCoord = function() {
                var t = this.get('plotRange'),
                  n = _({ type: 'cartesian' }, this.get('coordCfg'), { plot: t }),
                  s = n.type,
                  o = Dt[lt(s)],
                  l = new o(n);
                this.set('coord', l);
              }),
              (r._initLayout = function() {
                var t = this.get('_padding');
                t || ((t = this.get('margin') || this.get('padding')), (t = q(t)));
                var n = t[0] === 'auto' ? 0 : t[0],
                  s = t[1] === 'auto' ? 0 : t[1],
                  o = t[2] === 'auto' ? 0 : t[2],
                  l = t[3] === 'auto' ? 0 : t[3],
                  u = this.get('width'),
                  c = this.get('height'),
                  f = { x: l, y: n },
                  h = { x: u - s, y: c - o },
                  v = this.get('plot');
                if (v) {
                  v.reset(f, h);
                  return;
                }
                var g = new an({ start: f, end: h });
                this.set('plotRange', g), this.set('plot', g);
              }),
              (r._initCanvas = function() {
                var t = this;
                try {
                  var n = new je({
                    el: t.get('el') || t.get('id'),
                    context: t.get('context'),
                    pixelRatio: t.get('pixelRatio'),
                    width: t.get('width'),
                    height: t.get('height'),
                    fontFamily: D.fontFamily,
                  });
                  t.set('canvas', n),
                    t.set('el', n.get('el')),
                    t.set('width', n.get('width')),
                    t.set('height', n.get('height'));
                } catch (s) {
                  throw s;
                }
                a.plugins.notify(t, 'afterCanvasInit');
              }),
              (r._initLayers = function() {
                var t = this.get('canvas');
                this.set('backPlot', t.addGroup()),
                  this.set('middlePlot', t.addGroup({ zIndex: 10 })),
                  this.set('frontPlot', t.addGroup({ zIndex: 20 }));
              }),
              (r._initEvents = function() {
                var t = this;
                this.on(Ft, function() {
                  t._initFilteredData(), t._changeGeomsData();
                }),
                  this.on(De, function() {
                    t._initLayout();
                    var n = t.get('coord');
                    n && n.reset(t.get('plot'));
                  });
              }),
              (r._initScaleController = function() {
                var t = new _s({ chart: this });
                this.set('colDefs', t.defs),
                  this.set('scales', t.scales),
                  this.set('scaleController', t);
              }),
              (r._clearScaleController = function() {
                var t = this.get('scaleController');
                t.clear();
              }),
              (r._init = function() {
                var t = this;
                t._initCanvas(),
                  t._initLayout(),
                  t._initLayers(),
                  t._initEvents(),
                  t._initScaleController(),
                  t.set(
                    'axisController',
                    new to({
                      frontPlot: t.get('frontPlot').addGroup({ className: 'axisContainer' }),
                      backPlot: t.get('backPlot').addGroup({ className: 'axisContainer' }),
                      chart: t,
                    }),
                  ),
                  a.plugins.notify(t, 'init');
              });
            function a(e) {
              var t;
              t = i.call(this, e) || this;
              var n = Jt(t);
              return (
                C(V, function(s, o) {
                  var l = fr(o);
                  n[l] = function(u) {
                    var c = new s(u);
                    return n.addGeom(c), c;
                  };
                }),
                n._init(),
                t
              );
            }
            return (
              (r.init = function() {
                this._initFilteredData(),
                  this._initCoord(),
                  a.plugins.notify(this, 'beforeGeomInit'),
                  this._initGeoms(),
                  this._syncYScales(),
                  this._adjustScale(),
                  this.emit(Te);
              }),
              (r.source = function(t, n) {
                return this.set('data', t), n && this.scale(n), this;
              }),
              (r.scale = function(t, n) {
                var s = this.get('scaleController');
                return s.setFieldDef(t, n), this;
              }),
              (r.axis = function(t, n) {
                var s = this.get('axisController');
                return (
                  t ? ((s.axisCfg = s.axisCfg || {}), (s.axisCfg[t] = n)) : (s.axisCfg = null), this
                );
              }),
              (r.coord = function(t, n) {
                var s;
                return (
                  j(t) ? (s = t) : ((s = n || {}), (s.type = t || 'cartesian')),
                  this.set('coordCfg', s),
                  this
                );
              }),
              (r.filter = function(t, n) {
                var s = this.get('filters') || {};
                (s[t] = n),
                  this.set('filters', s),
                  this.get('rendered') && this.emit(Ft, this.get('data'));
              }),
              (r.render = function() {
                var t = this.get('rendered'),
                  n = this.get('canvas'),
                  s = this.get('geoms');
                t
                  ? (this._initGeoms(), this._adjustScale())
                  : (this.init(), this.set('rendered', !0)),
                  this.emit(qi),
                  a.plugins.notify(this, 'beforeGeomDraw'),
                  this._renderAxis();
                var o = this.get('middlePlot');
                if (this.get('limitInPlot') && !o.attr('clip')) {
                  var l = this.get('coord'),
                    u = $e(l);
                  u.set('canvas', o.get('canvas')), o.attr('clip', u);
                }
                this.emit(Ki);
                for (var c = 0, f = s.length; c < f; c++) {
                  var h = s[c];
                  h.paint();
                }
                return (
                  this.emit(Qi),
                  a.plugins.notify(this, 'afterGeomDraw'),
                  n.sort(),
                  this.get('frontPlot').sort(),
                  a.plugins.notify(this, 'beforeCanvasDraw'),
                  n.draw(),
                  this.emit($i),
                  this
                );
              }),
              (r.clear = function() {
                a.plugins.notify(this, 'clear'),
                  this.emit(tn),
                  this._clearInner(),
                  this._removeGeoms(),
                  this._clearScaleController(),
                  this.set('legendItems', null),
                  this.set('filters', null),
                  this.set('isUpdate', !1),
                  this.set('_padding', null),
                  this.set('rendered', !1);
                var t = this.get('canvas');
                return t.draw(), this;
              }),
              (r.repaint = function() {
                var t = this.get('rendered');
                if (!t) return;
                this.set('isUpdate', !0),
                  this.set('legendItems', null),
                  a.plugins.notify(this, 'repaint'),
                  this._clearInner(),
                  this.emit(rn),
                  this.render();
              }),
              (r.changeData = function(t) {
                this.emit(Zi, t),
                  this.set('data', t),
                  a.plugins.notify(this, 'changeData'),
                  this.emit(Ft, t),
                  this.set('_padding', null),
                  this.repaint();
              }),
              (r.changeSize = function(t, n) {
                t ? this.set('width', t) : (t = this.get('width')),
                  n ? this.set('height', n) : (n = this.get('height'));
                var s = this.get('canvas');
                return (
                  s.changeSize(t, n), this.emit(De, { width: t, height: n }), this.repaint(), this
                );
              }),
              (r.destroy = function() {
                this.clear();
                var t = this.get('canvas');
                t.destroy(),
                  a.plugins.notify(this, 'afterCanvasDestroyed'),
                  this._interactions &&
                    C(this._interactions, function(n) {
                      n.destroy();
                    }),
                  i.prototype.destroy.call(this);
              }),
              (r.getPosition = function(t) {
                for (
                  var n = this,
                    s = n.get('coord'),
                    o = n.getXScale(),
                    l = o.field,
                    u = n.getYScales(),
                    c = u[0],
                    f = c.field,
                    h = 0,
                    v = u.length;
                  h < v;
                  h++
                ) {
                  var g = u[h],
                    p = g.field;
                  if (t[p]) {
                    (c = g), (f = p);
                    break;
                  }
                }
                var m = o.scale(t[l]),
                  d = c.scale(t[f]);
                return s.convertPoint({ x: m, y: d });
              }),
              (r.getRecord = function(t) {
                var n = this,
                  s = n.get('coord'),
                  o = n.getXScale(),
                  l = n.getYScales()[0],
                  u = s.invertPoint(t),
                  c = {};
                return (c[o.field] = o.invert(u.x)), (c[l.field] = l.invert(u.y)), c;
              }),
              (r.getSnapRecords = function(t) {
                var n = this.get('geoms')[0],
                  s = [];
                return n && (s = n.getSnapRecords(t)), s;
              }),
              (r.createScale = function(t) {
                var n = this._getScaleData(t),
                  s = this.get('scaleController');
                return s.createScale(t, n);
              }),
              (r.addGeom = function(t) {
                var n = this.get('geoms');
                n.push(t);
              }),
              (r.getXScale = function() {
                var t = this,
                  n = t.get('geoms'),
                  s = n[0].getXScale();
                return s;
              }),
              (r.getYScales = function() {
                var t = this.get('geoms'),
                  n = [];
                return (
                  C(t, function(s) {
                    var o = s.getYScale();
                    n.indexOf(o) === -1 && n.push(o);
                  }),
                  n
                );
              }),
              (r.getLegendItems = function() {
                if (this.get('legendItems')) return this.get('legendItems');
                var t = {},
                  n = [],
                  s = this.get('geoms');
                return (
                  C(s, function(o) {
                    var l = o.getAttr('color');
                    if (l) {
                      var u = l.getScale('color');
                      if (u.isCategory && !eo(n, u)) {
                        n.push(u);
                        var c = u.field,
                          f = u.getTicks(),
                          h = [];
                        C(f, function(v) {
                          var g = v.text,
                            p = g,
                            m = v.value,
                            d = u.invert(m),
                            y = l.mapping(d).join('') || D.defaultColor,
                            x = { fill: y, radius: 3, symbol: 'circle', stroke: '#fff' };
                          h.push({ name: p, dataValue: d, checked: !0, marker: x });
                        }),
                          (t[c] = h);
                      }
                    }
                  }),
                  this.set('legendItems', t),
                  t
                );
              }),
              (r.registerPlugins = function(t) {
                var n = this,
                  s = n.get('plugins') || [];
                k(s) || (s = [s]),
                  [].concat(t).forEach(function(o) {
                    s.indexOf(o) === -1 && (o.init && o.init(n), s.push(o));
                  }),
                  a.plugins._cacheId++,
                  n.set('plugins', s);
              }),
              (r._renderAxis = function() {
                var t = this.get('axisController'),
                  n = this.getXScale(),
                  s = this.getYScales(),
                  o = this.get('coord');
                a.plugins.notify(this, 'beforeRenderAxis'), t.createAxis(o, n, s);
              }),
              (r._isAutoPadding = function() {
                if (this.get('_padding')) return !1;
                var t = this.get('padding');
                return k(t) ? t.indexOf('auto') !== -1 : t === 'auto';
              }),
              (r._updateLayout = function(t) {
                var n = this.get('width'),
                  s = this.get('height'),
                  o = { x: t[3], y: t[0] },
                  l = { x: n - t[1], y: s - t[2] },
                  u = this.get('plot'),
                  c = this.get('coord');
                u.reset(o, l), c.reset(u);
              }),
              a
            );
          })(Er);
          H.plugins = H.initPlugins();
          var Aa = function() {
            return null;
          };
          function ka(i) {
            var r = [],
              a = i.x,
              e = i.y;
            return (
              (e = k(e) ? e : [e]),
              e.forEach(function(t, n) {
                var s = { x: k(a) ? a[n] : a, y: t };
                r.push(s);
              }),
              r
            );
          }
          function Ia(i, r, a) {
            if (!i.length) return [];
            var e = [],
              t = [],
              n;
            return (
              C(i, function(s) {
                (n = s._origin ? s._origin[r] : s[r]),
                  a
                    ? w(n) || t.push(s)
                    : (k(n) && w(n[0])) || w(n)
                    ? t.length && (e.push(t), (t = []))
                    : t.push(s);
              }),
              t.length && e.push(t),
              e
            );
          }
          var ro = ['circle', 'hollowCircle', 'rect'],
            nu = Y.registerFactory('point', {
              defaultShapeType: 'circle',
              getDefaultPoints: function(r) {
                return ka(r);
              },
            });
          function ao(i) {
            var r = { lineWidth: 0, stroke: i.color, fill: i.color };
            return i.size && (r.size = i.size), _(r, i.style), _({}, D.shape.point, r);
          }
          function io(i, r, a) {
            if (i.size === 0) return;
            var e = ao(i),
              t = e.r || e.size,
              n = i.x,
              s = k(i.y) ? i.y : [i.y];
            a === 'hollowCircle' && ((e.lineWidth = 1), (e.fill = null));
            for (var o = 0, l = s.length; o < l; o++)
              return a === 'rect'
                ? r.addShape('Rect', {
                    className: 'point',
                    attrs: _({ x: n - t, y: s[o] - t, width: t * 2, height: t * 2 }, e),
                  })
                : r.addShape('Circle', {
                    className: 'point',
                    attrs: _({ x: n, y: s[o], r: t }, e),
                  });
          }
          C(ro, function(i) {
            Y.registerShape('point', i, {
              draw: function(a, e) {
                return io(a, e, i);
              },
            });
          });
          var no = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a.getDefaultCfg = function() {
                var t = i.prototype.getDefaultCfg.call(this);
                return (t.type = 'point'), (t.shapeType = 'point'), (t.generatePoints = !1), t;
              }),
              (a.draw = function(t, n) {
                var s = this,
                  o = s.get('container');
                C(t, function(l) {
                  var u = l.shape,
                    c = s.getDrawCfg(l);
                  if (k(l.y)) {
                    var f = s.hasAdjust('stack');
                    C(l.y, function(h, v) {
                      (c.y = h), (!f || v !== 0) && s.drawShape(u, l, c, o, n);
                    });
                  } else w(l.y) || s.drawShape(u, l, c, o, n);
                });
              }),
              r
            );
          })(V);
          V.Point = no;
          var su = Y.registerFactory('line', { defaultShapeType: 'line' });
          function so(i) {
            var r = { strokeStyle: i.color };
            return i.size >= 0 && (r.lineWidth = i.size), _(r, i.style), _({}, D.shape.line, r);
          }
          function oo(i, r, a, e) {
            var t = i.points;
            if (t.length && k(t[0].y)) {
              for (var n = [], s = [], o = 0, l = t.length; o < l; o++) {
                var u = t[o],
                  c = ka(u);
                s.push(c[0]), n.push(c[1]);
              }
              if ((i.isInCircle && (n.push(n[0]), s.push(s[0])), i.isStack))
                return r.addShape('Polyline', {
                  className: 'line',
                  attrs: _({ points: n, smooth: e }, a),
                });
              var f = r.addShape('Polyline', {
                  className: 'line',
                  attrs: _({ points: n, smooth: e }, a),
                }),
                h = r.addShape('Polyline', {
                  className: 'line',
                  attrs: _({ points: s, smooth: e }, a),
                });
              return [f, h];
            }
            return (
              i.isInCircle && t.push(t[0]),
              r.addShape('Polyline', { className: 'line', attrs: _({ points: t, smooth: e }, a) })
            );
          }
          var lo = ['line', 'smooth', 'dash'];
          C(lo, function(i) {
            Y.registerShape('line', i, {
              draw: function(a, e) {
                var t = i === 'smooth',
                  n = so(a);
                return i === 'dash' && (n.lineDash = D.lineDash), oo(a, e, n, t);
              },
            });
          });
          var Oa = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a.getDefaultCfg = function() {
                var t = i.prototype.getDefaultCfg.call(this);
                return (t.type = 'path'), (t.shapeType = 'line'), t;
              }),
              (a.getDrawCfg = function(t) {
                var n = i.prototype.getDrawCfg.call(this, t);
                return (n.isStack = this.hasAdjust('stack')), n;
              }),
              (a.draw = function(t, n) {
                var s = this,
                  o = s.get('container'),
                  l = s.getYScale(),
                  u = s.get('connectNulls'),
                  c = Ia(t, l.field, u),
                  f = this.getDrawCfg(t[0]);
                (f.origin = t),
                  C(c, function(h, v) {
                    (f.splitedIndex = v), (f.points = h), s.drawShape(f.shape, t[0], f, o, n);
                  });
              }),
              r
            );
          })(V);
          V.Path = Oa;
          var uo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a.getDefaultCfg = function() {
                var t = i.prototype.getDefaultCfg.call(this);
                return (t.type = 'line'), (t.sortable = !0), t;
              }),
              r
            );
          })(Oa);
          V.Line = uo;
          function Ra(i, r) {
            return Math.abs(i - r) < 1e-5;
          }
          function Na(i) {
            return !isNaN(i) && !w(i);
          }
          function Ya(i) {
            for (var r = [], a = 0, e = i.length; a < e; a++) {
              var t = i[a];
              Na(t.x) && Na(t.y) && r.push(t);
            }
            return r;
          }
          function co(i, r) {
            var a = !0;
            return (
              C(i, function(e) {
                if (!Ra(e.x, r.x) || !Ra(e.y, r.y)) return (a = !1), !1;
              }),
              a
            );
          }
          function fo(i, r, a, e, t) {
            var n,
              s = i.concat(r);
            return (
              t
                ? (n = a.addShape('Custom', {
                    className: 'area',
                    attrs: _({ points: s }, e),
                    createPath: function(l) {
                      var u = [
                          [0, 0],
                          [1, 1],
                        ],
                        c = Ya(this._attrs.attrs.points),
                        f = c.length,
                        h = c.slice(0, f / 2),
                        v = c.slice(f / 2, f),
                        g = fe(h, !1, u);
                      l.beginPath(), l.moveTo(h[0].x, h[0].y);
                      for (var p = 0, m = g.length; p < m; p++) {
                        var d = g[p];
                        l.bezierCurveTo(d[1], d[2], d[3], d[4], d[5], d[6]);
                      }
                      if (v.length) {
                        var y = fe(v, !1, u);
                        l.lineTo(v[0].x, v[0].y);
                        for (var x = 0, S = y.length; x < S; x++) {
                          var P = y[x];
                          l.bezierCurveTo(P[1], P[2], P[3], P[4], P[5], P[6]);
                        }
                      }
                      l.closePath();
                    },
                    calculateBox: function() {
                      var l = Ya(this._attrs.attrs.points);
                      return Ve(l);
                    },
                  }))
                : (n = a.addShape('Polyline', { className: 'area', attrs: _({ points: s }, e) })),
              n
            );
          }
          function ho(i, r, a) {
            var e = this,
              t = i.points,
              n = [],
              s = [];
            C(t, function(l) {
              s.push(l[0]), n.push(l[1]);
            });
            var o = _({ fillStyle: i.color }, D.shape.area, i.style);
            return (
              s.reverse(),
              (n = e.parsePoints(n)),
              (s = e.parsePoints(s)),
              i.isInCircle &&
                (n.push(n[0]), s.unshift(s[s.length - 1]), co(s, i.center) && (s = [])),
              fo(n, s, r, o, a)
            );
          }
          var ou = Y.registerFactory('area', {
              defaultShapeType: 'area',
              getDefaultPoints: function(r) {
                var a = r.x,
                  e = r.y,
                  t = r.y0;
                e = k(e) ? e : [t, e];
                var n = [];
                return n.push({ x: a, y: e[0] }, { x: a, y: e[1] }), n;
              },
            }),
            vo = ['area', 'smooth'];
          C(vo, function(i) {
            Y.registerShape('area', i, {
              draw: function(a, e) {
                var t = i === 'smooth';
                return ho.call(this, a, e, t);
              },
            });
          });
          var go = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a.getDefaultCfg = function() {
                var t = i.prototype.getDefaultCfg.call(this);
                return (
                  (t.type = 'area'),
                  (t.shapeType = 'area'),
                  (t.generatePoints = !0),
                  (t.sortable = !0),
                  t
                );
              }),
              (a.draw = function(t, n) {
                var s = this,
                  o = s.get('container'),
                  l = this.getDrawCfg(t[0]),
                  u = s.getYScale(),
                  c = s.get('connectNulls'),
                  f = Ia(t, u.field, c);
                (l.origin = t),
                  C(f, function(h, v) {
                    l.splitedIndex = v;
                    var g = h.map(function(p) {
                      return p.points;
                    });
                    (l.points = g), s.drawShape(l.shape, t[0], l, o, n);
                  });
              }),
              r
            );
          })(V);
          V.Area = go;
          var Fa = {
            initEvent: function() {
              var r = this,
                a = this.get('chart');
              if (!a) return;
              a.on(De, function() {
                r.set('_width', null);
              });
            },
            getDefaultSize: function() {
              var r = this.get('defaultSize');
              if (!r) {
                var a = this.get('coord'),
                  e = this.getXScale(),
                  t = this.get('dataArray'),
                  n = ur(e.values),
                  s = n.length,
                  o = e.range,
                  l = 1 / s,
                  u = 1;
                a && a.isPolar
                  ? a.transposed && s > 1
                    ? (u = D.widthRatio.multiplePie)
                    : (u = D.widthRatio.rose)
                  : (e.isLinear && (l *= o[1] - o[0]), (u = D.widthRatio.column)),
                  (l *= u),
                  this.hasAdjust('dodge') && (l = l / t.length),
                  (r = l),
                  this.set('defaultSize', r);
              }
              return r;
            },
            getDimWidth: function(r) {
              var a = this.get('coord'),
                e = a.convertPoint({ x: 0, y: 0 }),
                t = a.convertPoint({ x: r === 'x' ? 1 : 0, y: r === 'x' ? 0 : 1 }),
                n = 0;
              return e && t && (n = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))), n;
            },
            _getWidth: function() {
              var r = this.get('_width');
              if (!r) {
                var a = this.get('coord');
                a && a.isPolar && !a.transposed
                  ? (r = (a.endAngle - a.startAngle) * a.circleRadius)
                  : (r = this.getDimWidth('x')),
                  this.set('_width', r);
              }
              return r;
            },
            _toNormalizedSize: function(r) {
              var a = this._getWidth();
              return r / a;
            },
            _toCoordSize: function(r) {
              var a = this._getWidth();
              return a * r;
            },
            getNormalizedSize: function(r) {
              var a = this.getAttrValue('size', r);
              return w(a) ? (a = this.getDefaultSize()) : (a = this._toNormalizedSize(a)), a;
            },
            getSize: function(r) {
              var a = this.getAttrValue('size', r);
              if (w(a)) {
                var e = this.getDefaultSize();
                a = this._toCoordSize(e);
              }
              return a;
            },
          };
          function La(i) {
            var r = i.x,
              a = i.y,
              e = i.y0,
              t = i.size,
              n = e,
              s = a;
            k(a) && ((s = a[1]), (n = a[0]));
            var o, l;
            return (
              k(r) ? ((o = r[0]), (l = r[1])) : ((o = r - t / 2), (l = r + t / 2)),
              [
                { x: o, y: n },
                { x: o, y: s },
                { x: l, y: s },
                { x: l, y: n },
              ]
            );
          }
          function po(i) {
            for (var r = [], a = [], e = 0, t = i.length; e < t; e++) {
              var n = i[e];
              r.push(n.x), a.push(n.y);
            }
            var s = Math.min.apply(null, r),
              o = Math.min.apply(null, a),
              l = Math.max.apply(null, r),
              u = Math.max.apply(null, a);
            return { x: s, y: o, width: l - s, height: u - o };
          }
          function mo(i, r) {
            var a = (i.x - r.x) / 2 + r.x,
              e = (i.y - r.y) / 2 + r.y;
            return { x: a, y: e };
          }
          var lu = Y.registerFactory('interval', {
            defaultShapeType: 'rect',
            getDefaultPoints: function(r) {
              return La(r);
            },
          });
          Y.registerShape('interval', 'rect', {
            draw: function(r, a) {
              var e = this.parsePoints(r.points),
                t = _({ fill: r.color }, D.shape.interval, r.style);
              if (r.isInCircle) {
                var n = e.slice(0);
                this._coord.transposed && (n = [e[0], e[3], e[2], e[1]]);
                var s = r.center,
                  o = s.x,
                  l = s.y,
                  u = [1, 0],
                  c = [n[0].x - o, n[0].y - l],
                  f = [n[1].x - o, n[1].y - l],
                  h = [n[2].x - o, n[2].y - l],
                  v = A.angleTo(u, f),
                  g = A.angleTo(u, h),
                  p = A.length(c),
                  m = A.length(f);
                return (
                  v >= 1.5 * Math.PI && (v = v - 2 * Math.PI),
                  g >= 1.5 * Math.PI && (g = g - 2 * Math.PI),
                  a.addShape('Sector', {
                    className: 'interval',
                    attrs: _({ x: o, y: l, r: m, r0: p, startAngle: v, endAngle: g }, t),
                  })
                );
              }
              var d = po(e);
              return a.addShape('rect', { className: 'interval', attrs: _(d, t) });
            },
          }),
            ['pyramid', 'funnel'].forEach(function(i) {
              Y.registerShape('interval', i, {
                getPoints: function(a) {
                  return (a.size = a.size * 2), La(a);
                },
                draw: function(a, e) {
                  var t = this.parsePoints(a.points),
                    n = this.parsePoints(a.nextPoints),
                    s = null;
                  n
                    ? (s = [t[0], t[1], n[1], n[0]])
                    : ((s = [t[0], t[1]]),
                      i === 'pyramid' ? s.push(mo(t[2], t[3])) : s.push(t[2], t[3]));
                  var o = _({ fill: a.color, points: s }, D.shape.interval, a.style);
                  return e.addShape('polygon', { className: 'interval', attrs: o });
                },
              });
            });
          var yo = (function(i) {
            E(a, i);
            var r = a.prototype;
            r.getDefaultCfg = function() {
              var t = i.prototype.getDefaultCfg.call(this);
              return (t.type = 'interval'), (t.shapeType = 'interval'), (t.generatePoints = !0), t;
            };
            function a(e) {
              var t;
              return (t = i.call(this, e) || this), _(Jt(t), Fa), t;
            }
            return (
              (r.init = function() {
                i.prototype.init.call(this), this.initEvent();
              }),
              (r.createShapePointsCfg = function(t) {
                var n = i.prototype.createShapePointsCfg.call(this, t);
                return (n.size = this.getNormalizedSize(t)), n;
              }),
              (r.clearInner = function() {
                i.prototype.clearInner.call(this), this.set('defaultSize', null);
              }),
              a
            );
          })(V);
          V.Interval = yo;
          var uu = Y.registerFactory('polygon', {
            defaultShapeType: 'polygon',
            getDefaultPoints: function(r) {
              for (var a = [], e = r.x, t = r.y, n = 0, s = e.length; n < s; n++)
                a.push({ x: e[n], y: t[n] });
              return a;
            },
          });
          Y.registerShape('polygon', 'polygon', {
            draw: function(r, a) {
              var e = this.parsePoints(r.points),
                t = _({ fill: r.color, points: e }, r.style);
              return a.addShape('Polygon', { className: 'polygon', attrs: t });
            },
          });
          var xo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a.getDefaultCfg = function() {
                var t = i.prototype.getDefaultCfg.call(this);
                return (t.type = 'polygon'), (t.shapeType = 'polygon'), (t.generatePoints = !0), t;
              }),
              (a.createShapePointsCfg = function(t) {
                var n = i.prototype.createShapePointsCfg.call(this, t),
                  s = this,
                  o = n.x,
                  l = n.y,
                  u;
                if (!(k(o) && k(l))) {
                  var c = s.getXScale(),
                    f = s.getYScale(),
                    h = c.values ? c.values.length : c.ticks.length,
                    v = f.values ? f.values.length : f.ticks.length,
                    g = (0.5 * 1) / h,
                    p = (0.5 * 1) / v;
                  c.isCategory && f.isCategory
                    ? ((o = [o - g, o - g, o + g, o + g]), (l = [l - p, l + p, l + p, l - p]))
                    : k(o)
                    ? ((u = o),
                      (o = [u[0], u[0], u[1], u[1]]),
                      (l = [l - p / 2, l + p / 2, l + p / 2, l - p / 2]))
                    : k(l) &&
                      ((u = l),
                      (l = [u[0], u[1], u[1], u[0]]),
                      (o = [o - g / 2, o - g / 2, o + g / 2, o + g / 2])),
                    (n.x = o),
                    (n.y = l);
                }
                return n;
              }),
              r
            );
          })(V);
          V.Polygon = xo;
          function _o(i) {
            var r = i.sort(function(n, s) {
                return n < s ? 1 : -1;
              }),
              a = r.length;
            if (a < 4) for (var e = r[a - 1], t = 0; t < 4 - a; t++) r.push(e);
            return r;
          }
          function So(i, r, a) {
            var e = _o(r),
              t = [
                { x: i, y: e[0] },
                { x: i, y: e[1] },
                { x: i - a / 2, y: e[2] },
                { x: i - a / 2, y: e[1] },
                { x: i + a / 2, y: e[1] },
                { x: i + a / 2, y: e[2] },
                { x: i, y: e[2] },
                { x: i, y: e[3] },
              ];
            return t;
          }
          var cu = Y.registerFactory('schema', {});
          Y.registerShape('schema', 'candle', {
            getPoints: function(r) {
              return So(r.x, r.y, r.size);
            },
            draw: function(r, a) {
              var e = this.parsePoints(r.points),
                t = _({ stroke: r.color, fill: r.color, lineWidth: 1 }, r.style);
              return a.addShape('Custom', {
                className: 'schema',
                attrs: t,
                createPath: function(s) {
                  s.beginPath(),
                    s.moveTo(e[0].x, e[0].y),
                    s.lineTo(e[1].x, e[1].y),
                    s.moveTo(e[2].x, e[2].y);
                  for (var o = 3; o < 6; o++) s.lineTo(e[o].x, e[o].y);
                  s.closePath(), s.moveTo(e[6].x, e[6].y), s.lineTo(e[7].x, e[7].y);
                },
              });
            },
          });
          var Co = (function(i) {
            E(a, i);
            var r = a.prototype;
            r.getDefaultCfg = function() {
              var t = i.prototype.getDefaultCfg.call(this);
              return (t.type = 'schema'), (t.shapeType = 'schema'), (t.generatePoints = !0), t;
            };
            function a(e) {
              var t;
              return (t = i.call(this, e) || this), _(Jt(t), Fa), t;
            }
            return (
              (r.init = function() {
                i.prototype.init.call(this), this.initEvent();
              }),
              (r.createShapePointsCfg = function(t) {
                var n = i.prototype.createShapePointsCfg.call(this, t);
                return (n.size = this.getNormalizedSize(t)), n;
              }),
              (r.clearInner = function() {
                i.prototype.clearInner.call(this), this.set('defaultSize', null);
              }),
              a
            );
          })(V);
          V.Schema = Co;
          var Po = {}.toString,
            wo = function(r, a) {
              return Po.call(r) === '[object ' + a + ']';
            },
            Ba = wo,
            Mo = Array.isArray
              ? Array.isArray
              : function(i) {
                  return Ba(i, 'Array');
                },
            mt = Mo,
            bo = function(r) {
              return r == null;
            },
            To = bo;
          function Do(i, r) {
            (i.prototype = Object.create(r.prototype)),
              (i.prototype.constructor = i),
              (i.__proto__ = r);
          }
          var Eo = (function(i) {
            Do(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.xField = null), (this.yField = null);
              }),
              (a.processAdjust = function(t) {
                this.processStack(t);
              }),
              (a.processStack = function(t) {
                var n = this,
                  s = n.xField,
                  o = n.yField,
                  l = t.length,
                  u = { positive: {}, negative: {} };
                n.reverseOrder && (t = t.slice(0).reverse());
                for (var c = 0; c < l; c++)
                  for (var f = t[c], h = 0, v = f.length; h < v; h++) {
                    var g = f[h],
                      p = g[s] || 0,
                      m = g[o],
                      d = p.toString();
                    if (((m = mt(m) ? m[1] : m), !To(m))) {
                      var y = m >= 0 ? 'positive' : 'negative';
                      u[y][d] || (u[y][d] = 0), (g[o] = [u[y][d], m + u[y][d]]), (u[y][d] += m);
                    }
                  }
              }),
              r
            );
          })(ft);
          ft.Stack = Eo;
          var Ao =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function(i) {
                    return typeof i;
                  }
                : function(i) {
                    return i &&
                      typeof Symbol == 'function' &&
                      i.constructor === Symbol &&
                      i !== Symbol.prototype
                      ? 'symbol'
                      : typeof i;
                  },
            ko = function(r) {
              var a = typeof r == 'undefined' ? 'undefined' : Ao(r);
              return (r !== null && a === 'object') || a === 'function';
            },
            Io = ko,
            Oo = function(r, a) {
              if (!r) return;
              var e = void 0;
              if (mt(r)) for (var t = 0, n = r.length; t < n && !((e = a(r[t], t)), e === !1); t++);
              else if (Io(r)) {
                for (var s in r) if (r.hasOwnProperty(s) && ((e = a(r[s], s)), e === !1)) break;
              }
            },
            Ot = Oo;
          function Ro(i, r) {
            (i.prototype = Object.create(r.prototype)),
              (i.prototype.constructor = i),
              (i.__proto__ = r);
          }
          var No = 1 / 2,
            Yo = 1 / 2,
            Fo = (function(i) {
              Ro(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initDefaultCfg = function() {
                  (this.marginRatio = No), (this.dodgeRatio = Yo), (this.adjustNames = ['x', 'y']);
                }),
                (a.getDodgeOffset = function(t, n, s) {
                  var o = this,
                    l = t.pre,
                    u = t.next,
                    c = u - l,
                    f = (c * o.dodgeRatio) / s,
                    h = o.marginRatio * f,
                    v =
                      (1 / 2) * (c - s * f - (s - 1) * h) +
                      ((n + 1) * f + n * h) -
                      (1 / 2) * f -
                      (1 / 2) * c;
                  return (l + u) / 2 + v;
                }),
                (a.processAdjust = function(t) {
                  var n = this,
                    s = t.length,
                    o = n.xField;
                  Ot(t, function(l, u) {
                    for (var c = 0, f = l.length; c < f; c++) {
                      var h = l[c],
                        v = h[o],
                        g = { pre: f === 1 ? v - 1 : v - 0.5, next: f === 1 ? v + 1 : v + 0.5 },
                        p = n.getDodgeOffset(g, u, s);
                      h[o] = p;
                    }
                  });
                }),
                r
              );
            })(ft);
          ft.Dodge = Fo;
          var Lo = function(r) {
              return Ba(r, 'Function');
            },
            za = Lo,
            Bo = function(r, a) {
              if (!mt(r)) return;
              var e = r[0],
                t = void 0;
              za(a) ? (t = a(r[0])) : (t = r[0][a]);
              var n = void 0;
              return (
                Ot(r, function(s) {
                  za(a) ? (n = a(s)) : (n = s[a]), n > t && ((e = s), (t = n));
                }),
                e
              );
            },
            zo = Bo,
            Xo = function(r) {
              for (var a = [], e = 0; e < r.length; e++) a = a.concat(r[e]);
              return a;
            },
            Go = Xo;
          function Ho(i, r) {
            (i.prototype = Object.create(r.prototype)),
              (i.prototype.constructor = i),
              (i.__proto__ = r);
          }
          var Uo = { merge: Go },
            jo = (function(i) {
              Ho(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initDefaultCfg = function() {
                  (this.xField = null),
                    (this.yField = null),
                    (this.cacheMax = null),
                    (this.adjustNames = ['y']),
                    (this.groupFields = null);
                }),
                (a._getMax = function(t) {
                  var n = this,
                    s = n.mergeData,
                    o = zo(s, function(c) {
                      var f = c[t];
                      return mt(f) ? Math.max.apply(null, f) : f;
                    }),
                    l = o[t],
                    u = mt(l) ? Math.max.apply(null, l) : l;
                  return u;
                }),
                (a._getXValuesMax = function() {
                  var t = this,
                    n = t.yField,
                    s = t.xField,
                    o = {},
                    l = t.mergeData;
                  return (
                    Ot(l, function(u) {
                      var c = u[s],
                        f = u[n],
                        h = mt(f) ? Math.max.apply(null, f) : f;
                      (o[c] = o[c] || 0), o[c] < h && (o[c] = h);
                    }),
                    o
                  );
                }),
                (a.processAdjust = function(t) {
                  var n = this,
                    s = Uo.merge(t);
                  (n.mergeData = s), n._processSymmetric(t), (n.mergeData = null);
                }),
                (a._processSymmetric = function(t) {
                  var n = this,
                    s = n.xField,
                    o = n.yField,
                    l = n._getMax(o),
                    u = t[0][0],
                    c;
                  u && mt(u[o]) && (c = n._getXValuesMax()),
                    Ot(t, function(f) {
                      Ot(f, function(h) {
                        var v = h[o],
                          g;
                        if (mt(v)) {
                          var p = h[s],
                            m = c[p];
                          g = (l - m) / 2;
                          var d = [];
                          Ot(v, function(y) {
                            d.push(g + y);
                          }),
                            (h[o] = d);
                        } else (g = (l - v) / 2), (h[o] = [g, v + g]);
                      });
                    });
                }),
                r
              );
            })(ft);
          ft.Symmetric = jo;
          var Vo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'polar'),
                  (this.startAngle = -Math.PI / 2),
                  (this.endAngle = (Math.PI * 3) / 2),
                  (this.inner = 0),
                  (this.innerRadius = 0),
                  (this.isPolar = !0),
                  (this.transposed = !1),
                  (this.center = null),
                  (this.radius = null);
              }),
              (a.init = function(t, n) {
                i.prototype.init.call(this, t, n);
                var s = this,
                  o = s.inner || s.innerRadius,
                  l = Math.abs(n.x - t.x),
                  u = Math.abs(n.y - t.y),
                  c,
                  f;
                s.startAngle === -Math.PI && s.endAngle === 0
                  ? ((c = Math.min(l / 2, u)), (f = { x: (t.x + n.x) / 2, y: t.y }))
                  : ((c = Math.min(l, u) / 2), (f = { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 }));
                var h = s.radius;
                h > 0 && h <= 1 && (c = c * h),
                  (this.x = { start: s.startAngle, end: s.endAngle }),
                  (this.y = { start: c * o, end: c }),
                  (this.center = f),
                  (this.circleRadius = c);
              }),
              (a._convertPoint = function(t) {
                var n = this,
                  s = n.center,
                  o = n.transposed,
                  l = o ? 'y' : 'x',
                  u = o ? 'x' : 'y',
                  c = n.x,
                  f = n.y,
                  h = c.start + (c.end - c.start) * t[l],
                  v = f.start + (f.end - f.start) * t[u];
                return { x: s.x + Math.cos(h) * v, y: s.y + Math.sin(h) * v };
              }),
              (a._invertPoint = function(t) {
                var n = this,
                  s = n.center,
                  o = n.transposed,
                  l = n.x,
                  u = n.y,
                  c = o ? 'y' : 'x',
                  f = o ? 'x' : 'y',
                  h = [1, 0, 0, 1, 0, 0];
                G.rotate(h, h, l.start);
                var v = [1, 0];
                A.transformMat2d(v, v, h), (v = [v[0], v[1]]);
                var g = [t.x - s.x, t.y - s.y];
                if (A.zero(g)) return { x: 0, y: 0 };
                var p = A.angleTo(v, g, l.end < l.start);
                Math.abs(p - Math.PI * 2) < 0.001 && (p = 0);
                var m = A.length(g),
                  d = p / (l.end - l.start);
                d = l.end - l.start > 0 ? d : -d;
                var y = (m - u.start) / (u.end - u.start),
                  x = {};
                return (x[c] = d), (x[f] = y), x;
              }),
              r
            );
          })(Dt);
          Dt.Polar = Vo;
          var Wo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                i.prototype._initDefaultCfg.call(this),
                  (this.startAngle = -Math.PI / 2),
                  (this.endAngle = (Math.PI * 3) / 2),
                  (this.radius = null),
                  (this.center = null);
              }),
              (a.getOffsetPoint = function(t) {
                var n = this.startAngle,
                  s = this.endAngle,
                  o = n + (s - n) * t;
                return this._getCirclePoint(o);
              }),
              (a._getCirclePoint = function(t, n) {
                var s = this,
                  o = s.center;
                return (n = n || s.radius), { x: o.x + Math.cos(t) * n, y: o.y + Math.sin(t) * n };
              }),
              (a.getTextAlignInfo = function(t, n) {
                var s = this,
                  o = s.getOffsetVector(t, n),
                  l,
                  u = 'middle';
                return (
                  o[0] > 0
                    ? (l = 'left')
                    : o[0] < 0
                    ? (l = 'right')
                    : ((l = 'center'), o[1] > 0 ? (u = 'top') : o[1] < 0 && (u = 'bottom')),
                  { textAlign: l, textBaseline: u }
                );
              }),
              (a.getAxisVector = function(t) {
                var n = this.center,
                  s = this.offsetFactor;
                return [(t.y - n.y) * s, (t.x - n.x) * -1 * s];
              }),
              (a.drawLine = function(t) {
                var n = this.center,
                  s = this.radius,
                  o = this.startAngle,
                  l = this.endAngle,
                  u = this.getContainer(t.top);
                u.addShape('arc', {
                  className: 'axis-line',
                  attrs: _({ x: n.x, y: n.y, r: s, startAngle: o, endAngle: l }, t),
                });
              }),
              r
            );
          })(Xt);
          Xt.Circle = Wo;
          var Xa = { min: 0, median: 0.5, max: 1 },
            U = (function() {
              var i = r.prototype;
              i._initDefaultCfg = function() {};
              function r(a) {
                this._initDefaultCfg(), z(this, a);
              }
              return (
                (i._getNormalizedValue = function(e, t) {
                  var n;
                  return w(Xa[e]) ? (n = t.scale(e)) : (n = Xa[e]), n;
                }),
                (i.parsePercentPoint = function(e, t) {
                  var n = parseFloat(t[0]) / 100,
                    s = parseFloat(t[1]) / 100,
                    o = e.start,
                    l = e.end,
                    u = Math.abs(o.x - l.x),
                    c = Math.abs(o.y - l.y),
                    f = u * n + Math.min(o.x, l.x),
                    h = c * s + Math.min(o.y, l.y);
                  return { x: f, y: h };
                }),
                (i.parsePoint = function(e, t) {
                  var n = this,
                    s = n.xScale,
                    o = n.yScales;
                  if (
                    (F(t) && (t = t(s, o)),
                    B(t[0]) && t[0].indexOf('%') !== -1 && !isNaN(t[0].slice(0, -1)))
                  )
                    return this.parsePercentPoint(e, t);
                  var l = n._getNormalizedValue(t[0], s),
                    u = n._getNormalizedValue(t[1], o[0]),
                    c = e.convertPoint({ x: l, y: u });
                  return n.limitInPlot ? (l >= 0 && l <= 1 && u >= 0 && u <= 1 ? c : null) : c;
                }),
                (i.render = function() {}),
                (i.repaint = function() {
                  this.remove();
                  var e = this.coord,
                    t = this.container,
                    n = this.canvas;
                  t && !t.isDestroyed() && (this.render(e, t), n.draw());
                }),
                (i.remove = function() {
                  var e = this.element;
                  e && e.remove(!0);
                }),
                (i.changeVisible = function(e) {
                  var t = this;
                  t.visible = e;
                  var n = t.element;
                  if (!n) return;
                  n.set ? n.set('visible', e) : (n.style.display = e ? '' : 'none');
                }),
                r
              );
            })(),
            qo = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initDefaultCfg = function() {
                  (this.type = 'arc'),
                    (this.start = []),
                    (this.end = []),
                    (this.style = { stroke: '#999', lineWidth: 1 });
                }),
                (a.render = function(t, n) {
                  var s = this,
                    o = s.parsePoint(t, s.start),
                    l = s.parsePoint(t, s.end);
                  if (!o || !l) return;
                  var u = t.center,
                    c = Math.sqrt((o.x - u.x) * (o.x - u.x) + (o.y - u.y) * (o.y - u.y)),
                    f = Math.atan2(o.y - u.y, o.x - u.x),
                    h = Math.atan2(l.y - u.y, l.x - u.x),
                    v = n.addShape('arc', {
                      className: 'guide-arc',
                      attrs: _({ x: u.x, y: u.y, r: c, startAngle: f, endAngle: h }, s.style),
                    });
                  return (s.element = v), v;
                }),
                r
              );
            })(U);
          U.Arc = qo;
          function $o(i, r, a, e) {
            var t = [];
            return (
              i === 'left' && r === 'top'
                ? ((t[0] = 0), (t[1] = 0))
                : i === 'right' && r === 'top'
                ? ((t[0] = -a), (t[1] = 0))
                : i === 'left' && r === 'bottom'
                ? ((t[0] = 0), (t[1] = Math.floor(-e)))
                : i === 'right' && r === 'bottom'
                ? ((t[0] = Math.floor(-a)), (t[1] = Math.floor(-e)))
                : i === 'right' && r === 'middle'
                ? ((t[0] = Math.floor(-a)), (t[1] = Math.floor(-e / 2)))
                : i === 'left' && r === 'middle'
                ? ((t[0] = 0), (t[1] = Math.floor(-e / 2)))
                : i === 'center' && r === 'bottom'
                ? ((t[0] = Math.floor(-a / 2)), (t[1] = Math.floor(-e)))
                : i === 'center' && r === 'top'
                ? ((t[0] = Math.floor(-a / 2)), (t[1] = 0))
                : ((t[0] = Math.floor(-a / 2)), (t[1] = Math.floor(-e / 2))),
              t
            );
          }
          function Je(i, r) {
            for (var a in r) r.hasOwnProperty(a) && (i.style[a] = r[a]);
            return i;
          }
          function Ga(i) {
            var r = document.createElement('div');
            return (i = i.replace(/(^\s*)|(\s*$)/g, '')), (r.innerHTML = '' + i), r.childNodes[0];
          }
          var Zo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'html'),
                  (this.position = null),
                  (this.alignX = 'center'),
                  (this.alignY = 'middle'),
                  (this.offsetX = null),
                  (this.offsetY = null),
                  (this.html = null);
              }),
              (a.render = function(t, n) {
                var s = this,
                  o = s.parsePoint(t, s.position);
                if (!o) return;
                var l = Ga(s.html);
                l = Je(l, {
                  position: 'absolute',
                  top: Math.floor(o.y) + 'px',
                  left: Math.floor(o.x) + 'px',
                  visibility: 'hidden',
                });
                var u = n.get('canvas').get('el'),
                  c = u.parentNode;
                c = Je(c, { position: 'relative' });
                var f = Ga(
                  '<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>',
                );
                c.appendChild(f), f.appendChild(l);
                var h = u.offsetTop,
                  v = u.offsetLeft,
                  g = s.alignX,
                  p = s.alignY,
                  m = s.offsetX,
                  d = s.offsetY,
                  y = Pe(l),
                  x = we(l),
                  S = $o(g, p, y, x);
                (o.x = o.x + S[0] + v),
                  (o.y = o.y + S[1] + h),
                  m && (o.x += m),
                  d && (o.y += d),
                  Je(l, {
                    top: Math.floor(o.y) + 'px',
                    left: Math.floor(o.x) + 'px',
                    visibility: 'visible',
                  }),
                  (s.element = f);
              }),
              (a.remove = function() {
                var t = this.element;
                t && t.parentNode && t.parentNode.removeChild(t);
              }),
              r
            );
          })(U);
          U.Html = Zo;
          var Jo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'line'),
                  (this.start = []),
                  (this.end = []),
                  (this.style = { stroke: '#000', lineWidth: 1 });
              }),
              (a.render = function(t, n) {
                var s = [];
                if (
                  ((s[0] = this.parsePoint(t, this.start)),
                  (s[1] = this.parsePoint(t, this.end)),
                  !s[0] || !s[1])
                )
                  return;
                var o = n.addShape('Line', {
                  className: 'guide-line',
                  attrs: _({ x1: s[0].x, y1: s[0].y, x2: s[1].x, y2: s[1].y }, this.style),
                });
                return (this.element = o), o;
              }),
              r
            );
          })(U);
          U.Line = Jo;
          var Ko = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'rect'),
                  (this.start = []),
                  (this.end = []),
                  (this.style = { fill: '#CCD7EB', opacity: 0.4 });
              }),
              (a.render = function(t, n) {
                var s = this.parsePoint(t, this.start),
                  o = this.parsePoint(t, this.end);
                if (!s || !o) return;
                var l = n.addShape('rect', {
                  className: 'guide-rect',
                  attrs: _(
                    {
                      x: Math.min(s.x, o.x),
                      y: Math.min(s.y, o.y),
                      width: Math.abs(o.x - s.x),
                      height: Math.abs(s.y - o.y),
                    },
                    this.style,
                  ),
                });
                return (this.element = l), l;
              }),
              r
            );
          })(U);
          U.Rect = Ko;
          var Qo = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'text'),
                  (this.position = null),
                  (this.content = null),
                  (this.style = { fill: '#000' }),
                  (this.offsetX = 0),
                  (this.offsetY = 0);
              }),
              (a.render = function(t, n) {
                var s = this.position,
                  o = this.parsePoint(t, s);
                if (!o) return;
                var l = this.content,
                  u = this.style,
                  c = this.offsetX,
                  f = this.offsetY;
                c && (o.x += c), f && (o.y += f);
                var h = n.addShape('text', {
                  className: 'guide-text',
                  attrs: _({ x: o.x, y: o.y, text: l }, u),
                });
                return (this.element = h), h;
              }),
              r
            );
          })(U);
          U.Text = Qo;
          var tl = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'tag'),
                  (this.position = null),
                  (this.content = null),
                  (this.direct = 'tl'),
                  (this.autoAdjust = !0),
                  (this.offsetX = 0),
                  (this.offsetY = 0),
                  (this.side = 4),
                  (this.background = { padding: 5, radius: 2, fill: '#1890FF' }),
                  (this.textStyle = {
                    fontSize: 12,
                    fill: '#fff',
                    textAlign: 'center',
                    textBaseline: 'middle',
                  }),
                  (this.withPoint = !0),
                  (this.pointStyle = { fill: '#1890FF', r: 3, lineWidth: 1, stroke: '#fff' });
              }),
              (a._getDirect = function(t, n, s, o) {
                var l = this.direct,
                  u = this.side,
                  c = t.get('canvas'),
                  f = c.get('width'),
                  h = c.get('height'),
                  v = n.x,
                  g = n.y,
                  p = l[0],
                  m = l[1];
                p === 't' && g - u - o < 0 ? (p = 'b') : p === 'b' && g + u + o > h && (p = 't');
                var d = p === 'c' ? u : 0;
                return (
                  m === 'l' && v - d - s < 0
                    ? (m = 'r')
                    : m === 'r' && v + d + s > f
                    ? (m = 'l')
                    : m === 'c' && (s / 2 + v + d > f ? (m = 'l') : v - s / 2 - d < 0 && (m = 'r')),
                  (l = p + m),
                  l
                );
              }),
              (a.render = function(t, n) {
                var s = this.parsePoint(t, this.position);
                if (!s) return;
                if (isNaN(s.x) || isNaN(s.y)) return;
                var o = this.content,
                  l = this.background,
                  u = this.textStyle,
                  c = [],
                  f = n.addGroup({ className: 'guide-tag' });
                if (this.withPoint) {
                  var h = f.addShape('Circle', {
                    className: 'guide-tag-point',
                    attrs: _({ x: s.x, y: s.y }, this.pointStyle),
                  });
                  c.push(h);
                }
                var v = f.addGroup(),
                  g = v.addShape('text', {
                    className: 'guide-tag-text',
                    zIndex: 1,
                    attrs: _({ x: 0, y: 0, text: o }, u),
                  });
                c.push(g);
                var p = g.getBBox(),
                  m = q(l.padding),
                  d = p.width + m[1] + m[3],
                  y = p.height + m[0] + m[2],
                  x = p.minY - m[0],
                  S = p.minX - m[3],
                  P = v.addShape('rect', {
                    className: 'guide-tag-bg',
                    zIndex: -1,
                    attrs: _({ x: S, y: x, width: d, height: y }, l),
                  });
                c.push(P);
                var b = this.autoAdjust ? this._getDirect(n, s, d, y) : this.direct,
                  M = this.side,
                  I = s.x + this.offsetX,
                  O = s.y + this.offsetY,
                  T,
                  L = q(l.radius);
                b === 'tl'
                  ? ((T = [
                      { x: d + S - M - 1, y: y + x - 1 },
                      { x: d + S, y: y + x - 1 },
                      { x: d + S, y: y + M + x },
                    ]),
                    (L[2] = 0),
                    (I = I - d),
                    (O = O - M - y))
                  : b === 'cl'
                  ? ((T = [
                      { x: d + S - 1, y: (y - M) / 2 + x - 1 },
                      { x: d + S - 1, y: (y + M) / 2 + x + 1 },
                      { x: d + M + S, y: y / 2 + x },
                    ]),
                    (I = I - d - M),
                    (O = O - y / 2))
                  : b === 'bl'
                  ? ((T = [
                      { x: d + S, y: -M + x },
                      { x: d + S - M - 1, y: x + 1 },
                      { x: d + S, y: x + 1 },
                    ]),
                    (L[1] = 0),
                    (I = I - d),
                    (O = O + M))
                  : b === 'bc'
                  ? ((T = [
                      { x: d / 2 + S, y: -M + x },
                      { x: (d - M) / 2 + S - 1, y: x + 1 },
                      { x: (d + M) / 2 + S + 1, y: x + 1 },
                    ]),
                    (I = I - d / 2),
                    (O = O + M))
                  : b === 'br'
                  ? ((T = [
                      { x: S, y: x - M },
                      { x: S, y: x + 1 },
                      { x: S + M + 1, y: x + 1 },
                    ]),
                    (L[0] = 0),
                    (O = O + M))
                  : b === 'cr'
                  ? ((T = [
                      { x: S - M, y: y / 2 + x },
                      { x: S + 1, y: (y - M) / 2 + x - 1 },
                      { x: S + 1, y: (y + M) / 2 + x + 1 },
                    ]),
                    (I = I + M),
                    (O = O - y / 2))
                  : b === 'tr'
                  ? ((T = [
                      { x: S, y: y + M + x },
                      { x: S, y: y + x - 1 },
                      { x: M + S + 1, y: y + x - 1 },
                    ]),
                    (L[3] = 0),
                    (O = O - y - M))
                  : b === 'tc' &&
                    ((T = [
                      { x: (d - M) / 2 + S - 1, y: y + x - 1 },
                      { x: (d + M) / 2 + S + 1, y: y + x - 1 },
                      { x: d / 2 + S, y: y + M + x },
                    ]),
                    (I = I - d / 2),
                    (O = O - y - M));
                var at = v.addShape('Polygon', {
                  className: 'guide-tag-side',
                  zIndex: 0,
                  attrs: { points: T, fill: l.fill },
                });
                return (
                  c.push(at),
                  P.attr('radius', L),
                  v.moveTo(I - S, O - x),
                  v.sort(),
                  (this.element = f),
                  c
                );
              }),
              r
            );
          })(U);
          U.Tag = tl;
          var el = (function(i) {
            E(r, i);
            function r() {
              return i.apply(this, arguments) || this;
            }
            var a = r.prototype;
            return (
              (a._initDefaultCfg = function() {
                (this.type = 'point'),
                  (this.position = null),
                  (this.offsetX = 0),
                  (this.offsetY = 0),
                  (this.style = { fill: '#1890FF', r: 3, lineWidth: 1, stroke: '#fff' });
              }),
              (a.render = function(t, n) {
                var s = this.parsePoint(t, this.position);
                if (!s) return null;
                var o = n.addShape('Circle', {
                  className: 'guide-point',
                  attrs: _({ x: s.x + this.offsetX, y: s.y + this.offsetY }, this.style),
                });
                return (this.element = o), o;
              }),
              r
            );
          })(U);
          U.Point = el;
          var rl = {
              circle: function(r, a, e, t) {
                t.arc(r, a, e, 0, Math.PI * 2, !1);
              },
              square: function(r, a, e, t) {
                t.moveTo(r - e, a - e),
                  t.lineTo(r + e, a - e),
                  t.lineTo(r + e, a + e),
                  t.lineTo(r - e, a + e),
                  t.closePath();
              },
            },
            Ke = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a._initProperties = function() {
                  i.prototype._initProperties.call(this),
                    (this._attrs.canFill = !0),
                    (this._attrs.canStroke = !0),
                    (this._attrs.type = 'marker');
                }),
                (a.getDefaultAttrs = function() {
                  return { x: 0, y: 0, lineWidth: 0 };
                }),
                (a.createPath = function(t) {
                  var n = this.get('attrs'),
                    s = n.x,
                    o = n.y,
                    l = n.radius,
                    u = n.symbol || 'circle',
                    c;
                  F(u) ? (c = u) : (c = rl[u]), t.beginPath(), c(s, o, l, t, this);
                }),
                (a.calculateBox = function() {
                  var t = this.get('attrs'),
                    n = t.x,
                    s = t.y,
                    o = t.radius;
                  return { minX: n - o, minY: s - o, maxX: n + o, maxY: s + o };
                }),
                r
              );
            })(R),
            al = 3,
            Qe = (function() {
              var i = r.prototype;
              i.getDefaultCfg = function() {
                return {
                  showTitle: !1,
                  title: null,
                  items: null,
                  titleGap: 12,
                  itemGap: 10,
                  itemMarginBottom: 12,
                  itemFormatter: null,
                  itemWidth: null,
                  wordSpace: 6,
                  x: 0,
                  y: 0,
                  layout: 'horizontal',
                  joinString: ': ',
                };
              };
              function r(a) {
                z(this, this.getDefaultCfg(), a),
                  this._init(),
                  this._renderTitle(),
                  this._renderItems();
              }
              return (
                (i._init = function() {
                  var e = new kt({ zIndex: this.zIndex || 0 });
                  this.container = e;
                  var t = e.addGroup();
                  this.wrapper = t;
                  var n = t.addGroup({ className: 'itemsGroup' });
                  (this.itemsGroup = n), this.parent && this.parent.add(e);
                }),
                (i._renderTitle = function(e) {
                  e = e || this.title;
                  var t = this.titleShape,
                    n = 0;
                  if (this.showTitle && e) {
                    if (t && !t.get('destroyed')) t.attr('text', e);
                    else {
                      var s = this.wrapper,
                        o = this.titleStyle;
                      (t = s.addShape('text', {
                        className: 'title',
                        attrs: _({ x: 0, y: 0, text: e }, o),
                      })),
                        (this.titleShape = t);
                    }
                    n = t.getBBox().height + this.titleGap;
                  }
                  this._titleHeight = n;
                }),
                (i._renderItems = function(e) {
                  var t = this;
                  if (((e = e || t.items), !e)) return;
                  t.reversed && e.reverse(),
                    C(e, function(n, s) {
                      t._addItem(n, s);
                    }),
                    e.length > 1 && this._adjustItems(),
                    this._renderBackground();
                }),
                (i._renderBackground = function() {
                  var e = this.background;
                  if (e) {
                    var t = this.container,
                      n = this.wrapper,
                      s = n.getBBox(),
                      o = s.minX,
                      l = s.minY,
                      u = s.width,
                      c = s.height,
                      f = e.padding || [0, 0, 0, 0];
                    f = q(f);
                    var h = _(
                        {
                          x: o - f[3],
                          y: l - f[0],
                          width: u + f[1] + f[3],
                          height: c + f[0] + f[2],
                        },
                        e,
                      ),
                      v = this.backShape;
                    v ? v.attr(h) : (v = t.addShape('Rect', { zIndex: -1, attrs: h })),
                      (this.backShape = v),
                      t.sort();
                  }
                }),
                (i._addItem = function(e) {
                  var t = this.itemsGroup,
                    n = t.addGroup({
                      name: e.name,
                      value: e.value,
                      dataValue: e.dataValue,
                      checked: e.checked,
                    }),
                    s = this.unCheckStyle,
                    o = this.unCheckColor,
                    l = this.nameStyle,
                    u = this.valueStyle,
                    c = this.wordSpace,
                    f = e.marker,
                    h = e.value,
                    v = 0;
                  if ((o && (s.fill = o), f)) {
                    var g = f.radius || al,
                      p = _({ x: g, y: this._titleHeight }, f);
                    e.checked === !1 && _(p, s);
                    var m = new Ke({ className: 'item-marker', attrs: p });
                    n.add(m), (v += m.getBBox().width + c);
                  }
                  var d,
                    y = e.name;
                  if (y) {
                    var x = this.joinString || '';
                    (y = h ? y + x : y),
                      (d = n.addShape('text', {
                        className: 'name',
                        attrs: _(
                          { x: v, y: this._titleHeight, text: this._formatItemValue(y) },
                          l,
                          e.checked === !1 ? s : null,
                        ),
                      }));
                  }
                  if (h) {
                    var S = v;
                    d && (S += d.getBBox().width),
                      n.addShape('text', {
                        className: 'value',
                        attrs: _(
                          { x: S, y: this._titleHeight, text: h },
                          u,
                          e.checked === !1 ? s : null,
                        ),
                      });
                  }
                  return n;
                }),
                (i._formatItemValue = function(e) {
                  var t = this.itemFormatter;
                  return t && (e = t.call(this, e)), e;
                }),
                (i._getMaxItemWidth = function() {
                  var e,
                    t = this.itemWidth;
                  if (X(t) || w(t)) return t;
                  if (t === 'auto') {
                    for (
                      var n = this.itemsGroup, s = n.get('children'), o = s.length, l = 0, u = 0;
                      u < o;
                      u++
                    ) {
                      var c = s[u].getBBox(),
                        f = c.width;
                      l = Math.max(l, f);
                    }
                    var h = this.maxLength,
                      v = this.itemGap,
                      g = (h - v) / 2,
                      p = (h - v * 2) / 3;
                    return (
                      o === 2
                        ? (e = Math.max(l, g))
                        : l <= p
                        ? (e = p)
                        : l <= g
                        ? (e = g)
                        : (e = l),
                      e
                    );
                  }
                }),
                (i._adjustHorizontal = function() {
                  for (
                    var e = this.maxLength,
                      t = this.itemsGroup,
                      n = t.get('children'),
                      s = this.itemGap,
                      o = this.itemMarginBottom,
                      l = this._titleHeight,
                      u = 0,
                      c = 0,
                      f,
                      h,
                      v = this._getMaxItemWidth(),
                      g = [],
                      p = 0,
                      m = n.length;
                    p < m;
                    p++
                  ) {
                    var d = n[p],
                      y = d.getBBox(),
                      x = y.height,
                      S = y.width;
                    (f = v || S),
                      (h = x + o),
                      f - (e - c) > 1e-4 && (u++, (c = 0)),
                      d.moveTo(c, u * h),
                      g.push({ x: c, y: u * h + l - x / 2, width: S * 1.375, height: x * 1.375 }),
                      (c += f + s);
                  }
                  this.legendHitBoxes = g;
                  return;
                }),
                (i._adjustVertical = function() {
                  for (
                    var e = this.maxLength,
                      t = this.itemsGroup,
                      n = this.itemGap,
                      s = this.itemMarginBottom,
                      o = this.itemWidth,
                      l = this._titleHeight,
                      u = t.get('children'),
                      c = 0,
                      f,
                      h,
                      v = 0,
                      g = 0,
                      p = [],
                      m = 0,
                      d = u.length;
                    m < d;
                    m++
                  ) {
                    var y = u[m],
                      x = y.getBBox();
                    (f = x.width),
                      (h = x.height),
                      X(o) ? (v = o + n) : f > v && (v = f + n),
                      e - c < h
                        ? ((c = 0),
                          (g += v),
                          y.moveTo(g, 0),
                          p.push({ x: g, y: l - h / 2, width: f * 1.375, height: h * 1.375 }))
                        : (y.moveTo(g, c),
                          p.push({ x: g, y: c - h / 2 + l, width: f * 1.375, height: h * 1.375 })),
                      (c += h + s);
                  }
                  this.legendHitBoxes = p;
                  return;
                }),
                (i._adjustItems = function() {
                  var e = this.layout;
                  e === 'horizontal' ? this._adjustHorizontal() : this._adjustVertical();
                }),
                (i.moveTo = function(e, t) {
                  (this.x = e), (this.y = t);
                  var n = this.container;
                  return n && n.moveTo(e, t), this;
                }),
                (i.setItems = function(e) {
                  this.clearItems(), this._renderItems(e);
                }),
                (i.setTitle = function(e) {
                  this._renderTitle(e);
                }),
                (i.clearItems = function() {
                  var e = this.itemsGroup;
                  e.clear();
                }),
                (i.getWidth = function() {
                  var e = this.container,
                    t = e.getBBox();
                  return t.width;
                }),
                (i.getHeight = function() {
                  var e = this.container,
                    t = e.getBBox();
                  return t.height;
                }),
                (i.show = function() {
                  var e = this.container;
                  e.show();
                }),
                (i.hide = function() {
                  var e = this.container;
                  e.hide();
                }),
                (i.clear = function() {
                  var e = this.container;
                  e.clear(), e.remove(!0);
                }),
                r
              );
            })(),
            Ha = (function() {
              var i = r.prototype;
              i.getDefaultCfg = function() {
                return {
                  x: 0,
                  y: 0,
                  content: '',
                  textStyle: {
                    fontSize: 12,
                    fill: '#fff',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    fontFamily: 'Arial',
                  },
                  background: { radius: 1, fill: 'rgba(0, 0, 0, 0.65)', padding: [3, 5] },
                  width: 0,
                  height: 0,
                  className: '',
                };
              };
              function r(a) {
                z(this, this.getDefaultCfg(), a), this._init();
                var e = this.content,
                  t = this.x,
                  n = this.y;
                w(e) || this.updateContent(e), this.updatePosition(t, n);
              }
              return (
                (i._init = function() {
                  var e = this.content,
                    t = this.textStyle,
                    n = this.background,
                    s = this.className,
                    o = this.visible,
                    l = this.context,
                    u = new kt({ context: l, className: s, zIndex: 0, visible: o }),
                    c = u.addShape('Text', {
                      className: s + '-text',
                      zIndex: 1,
                      attrs: _({ text: e, x: 0, y: 0 }, t),
                    }),
                    f = u.addShape('Rect', {
                      className: s + '-bg',
                      zIndex: -1,
                      attrs: _({ x: 0, y: 0, width: 0, height: 0 }, n),
                    });
                  u.sort(), (this.container = u), (this.textShape = c), (this.backgroundShape = f);
                }),
                (i._getBBox = function() {
                  var e = this.textShape,
                    t = this.background,
                    n = e.getBBox(),
                    s = q(t.padding),
                    o = n.width + s[1] + s[3],
                    l = n.height + s[0] + s[2],
                    u = n.minX - s[3],
                    c = n.minY - s[0];
                  return { x: u, y: c, width: o, height: l };
                }),
                (i.updateContent = function(e) {
                  var t = this.textShape,
                    n = this.backgroundShape;
                  if (!w(e)) {
                    j(e) || (e = { text: e }), t.attr(e);
                    var s = this._getBBox(),
                      o = s.x,
                      l = s.y,
                      u = s.width,
                      c = s.height,
                      f = this.width || u,
                      h = this.height || c;
                    n.attr({ x: o, y: l, width: f, height: h }),
                      (this._width = f),
                      (this._height = h),
                      (this.content = e.text);
                  }
                }),
                (i.updatePosition = function(e, t) {
                  var n = this.container,
                    s = this._getBBox(),
                    o = s.x,
                    l = s.y;
                  n.moveTo(e - o, t - l), (this.x = e - o), (this.y = t - l);
                }),
                (i.getWidth = function() {
                  return this._width;
                }),
                (i.getHeight = function() {
                  return this._height;
                }),
                (i.show = function() {
                  this.container.show();
                }),
                (i.hide = function() {
                  this.container.hide();
                }),
                (i.clear = function() {
                  var e = this.container;
                  e.clear(),
                    e.remove(!0),
                    (this.container = null),
                    (this.textShape = null),
                    (this.backgroundShape = null);
                }),
                r
              );
            })(),
            ct = 4,
            il = (function() {
              var i = r.prototype;
              i.getDefaultCfg = function() {
                return {
                  showCrosshairs: !1,
                  crosshairsStyle: { stroke: 'rgba(0, 0, 0, 0.25)', lineWidth: 1 },
                  crosshairsType: 'y',
                  showXTip: !1,
                  showYTip: !1,
                  xTip: null,
                  xTipBackground: { radius: 1, fill: 'rgba(0, 0, 0, 0.65)', padding: [3, 5] },
                  xTipTextStyle: {
                    fontSize: 12,
                    fill: '#fff',
                    textAlign: 'center',
                    textBaseline: 'middle',
                  },
                  yTip: null,
                  yTipBackground: { radius: 1, fill: 'rgba(0, 0, 0, 0.65)', padding: [3, 5] },
                  yTipTextStyle: {
                    fontSize: 12,
                    fill: '#fff',
                    textAlign: 'center',
                    textBaseline: 'middle',
                  },
                  background: null,
                  layout: 'horizontal',
                  offsetX: 0,
                  offsetY: 0,
                };
              };
              function r(a) {
                z(this, this.getDefaultCfg(), a);
                var e = this.frontPlot,
                  t = this.custom;
                if (!t) {
                  var n = new Qe(_({ parent: e, zIndex: 3 }, a));
                  this.container = n;
                  var s = this.fixed,
                    o = this.background;
                  s ||
                    (this.tooltipArrow = e.addShape('Polygon', {
                      className: 'tooltip-arrow',
                      visible: !1,
                      zIndex: 2,
                      attrs: _({ points: [] }, o),
                    }));
                }
                if (this.showXTip) {
                  var l = this.xTipBackground,
                    u = this.xTipTextStyle,
                    c = new Ha({
                      context: e.get('context'),
                      className: 'xTip',
                      background: l,
                      textStyle: u,
                      visible: !1,
                    });
                  e.add(c.container), (this.xTipBox = c);
                }
                if (this.showYTip) {
                  var f = this.yTipBackground,
                    h = this.yTipTextStyle,
                    v = new Ha({
                      context: e.get('context'),
                      className: 'yTip',
                      background: f,
                      textStyle: h,
                      visible: !1,
                    });
                  e.add(v.container), (this.yTipBox = v);
                }
                this.showCrosshairs && this._renderCrosshairs(), e.sort();
              }
              return (
                (i.setContent = function(e, t) {
                  if (((this.title = e), (this.items = t), !this.custom)) {
                    var n = this.container;
                    n.setTitle(e), n.setItems(t);
                  }
                }),
                (i.setYTipContent = function(e) {
                  var t = this.yTip;
                  F(t) ? (e = t(e)) : (e = _({ text: e }, t)),
                    this.yTipBox && this.yTipBox.updateContent(e);
                }),
                (i.setYTipPosition = function(e) {
                  var t = this.plotRange,
                    n = this.crosshairsShapeX;
                  if (this.showYTip) {
                    var s = this.yTipBox,
                      o = s.getHeight(),
                      l = s.getWidth(),
                      u = t.tl.x - l,
                      c = e - o / 2;
                    c <= t.tl.y && (c = t.tl.y),
                      c + o >= t.br.y && (c = t.br.y - o),
                      u < 0 && ((u = t.tl.x), n && n.attr('x1', t.tl.x + l)),
                      s.updatePosition(u, c);
                  }
                }),
                (i.setXTipContent = function(e) {
                  var t = this.xTip;
                  F(t) ? (e = t(e)) : (e = _({ text: e }, t)),
                    this.xTipBox && this.xTipBox.updateContent(e);
                }),
                (i.setXTipPosition = function(e) {
                  var t = this.showXTip,
                    n = this.canvas,
                    s = this.plotRange,
                    o = this.xTipBox,
                    l = this.crosshairsShapeY;
                  if (t) {
                    var u = n.get('height'),
                      c = o.getWidth(),
                      f = o.getHeight(),
                      h = e - c / 2,
                      v = s.br.y;
                    h <= s.tl.x && (h = s.tl.x),
                      h + c >= s.tr.x && (h = s.tr.x - c),
                      u - v < f && (v -= f),
                      o.updatePosition(h, v),
                      l && l.attr('y1', v);
                  }
                }),
                (i.setXCrosshairPosition = function(e) {
                  this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, e);
                }),
                (i.setYCrosshairPosition = function(e) {
                  this.crosshairsShapeY && this.crosshairsShapeY.moveTo(e, 0);
                }),
                (i.setPosition = function(e) {
                  var t = this.container,
                    n = this.plotRange,
                    s = this.offsetX,
                    o = this.offsetY,
                    l = this.fixed,
                    u = this.tooltipArrow;
                  if (!t) return;
                  var c = t.container.getBBox(),
                    f = c.minX,
                    h = c.minY,
                    v = c.width,
                    g = c.height,
                    p = n.tl,
                    m = n.tr,
                    d = 0,
                    y = p.y - g - ct + o;
                  if (l) {
                    var x = (p.x + m.x) / 2;
                    d = x - v / 2 + s;
                  } else {
                    var S;
                    if (
                      (e.length > 1 ? (S = (e[0].x + e[e.length - 1].x) / 2) : (S = e[0].x),
                      (d = S - v / 2 + s),
                      d < p.x && (d = p.x),
                      d + v > m.x && (d = m.x - v),
                      u)
                    ) {
                      u.attr('points', [
                        { x: S - 3, y: p.y - ct + o },
                        { x: S + 3, y: p.y - ct + o },
                        { x: S, y: p.y + o },
                      ]);
                      var P = t.backShape,
                        b = q(P.attr('radius'));
                      S === p.x
                        ? ((b[3] = 0),
                          u.attr('points', [
                            { x: p.x, y: p.y + o },
                            { x: p.x, y: p.y - ct + o },
                            { x: p.x + ct, y: p.y - ct + o },
                          ]))
                        : S === m.x &&
                          ((b[2] = 0),
                          u.attr('points', [
                            { x: m.x, y: p.y + o },
                            { x: m.x - ct, y: p.y - ct + o },
                            { x: m.x, y: p.y - ct + o },
                          ])),
                        P.attr('radius', b);
                    }
                  }
                  t.moveTo(d - f, y - h);
                }),
                (i.setMarkers = function(e) {
                  e === void 0 && (e = {});
                  var t = this,
                    n = e,
                    s = n.items,
                    o = n.style,
                    l = n.type,
                    u = t._getMarkerGroup(l);
                  if (l === 'circle')
                    for (var c = 0, f = s.length; c < f; c++) {
                      var h = s[c],
                        v = new Ke({
                          className: 'tooltip-circle-marker',
                          attrs: _({ x: h.x, y: h.y, stroke: h.color }, o),
                        });
                      u.add(v);
                    }
                  else u.addShape('rect', { className: 'tooltip-rect-marker', attrs: o });
                }),
                (i.clearMarkers = function() {
                  var e = this.markerGroup;
                  e && e.clear();
                }),
                (i.show = function() {
                  var e = this.crosshairsShapeX,
                    t = this.crosshairsShapeY,
                    n = this.markerGroup,
                    s = this.container,
                    o = this.tooltipArrow,
                    l = this.xTipBox,
                    u = this.yTipBox,
                    c = this.canvas;
                  e && e.show(),
                    t && t.show(),
                    n && n.show(),
                    s && s.show(),
                    o && o.show(),
                    l && l.show(),
                    u && u.show(),
                    c.draw();
                }),
                (i.hide = function() {
                  var e = this.crosshairsShapeX,
                    t = this.crosshairsShapeY,
                    n = this.markerGroup,
                    s = this.container,
                    o = this.tooltipArrow,
                    l = this.xTipBox,
                    u = this.yTipBox;
                  e && e.hide(),
                    t && t.hide(),
                    n && n.hide(),
                    s && s.hide(),
                    o && o.hide(),
                    l && l.hide(),
                    u && u.hide();
                }),
                (i.destroy = function() {
                  var e = this.crosshairsShapeX,
                    t = this.crosshairsShapeY,
                    n = this.markerGroup,
                    s = this.container,
                    o = this.tooltipArrow,
                    l = this.xTipBox,
                    u = this.yTipBox;
                  e && e.remove(!0),
                    t && t.remove(!0),
                    n && n.remove(!0),
                    o && o.remove(!0),
                    s && s.clear(),
                    l && l.clear(),
                    u && u.clear(),
                    (this.destroyed = !0);
                }),
                (i._getMarkerGroup = function(e) {
                  var t = this.markerGroup;
                  return (
                    t
                      ? t.clear()
                      : (e === 'circle'
                          ? ((t = this.frontPlot.addGroup({ zIndex: 1 })), this.frontPlot.sort())
                          : (t = this.backPlot.addGroup()),
                        (this.markerGroup = t)),
                    t
                  );
                }),
                (i._renderCrosshairs = function() {
                  var e = this.crosshairsType,
                    t = this.crosshairsStyle,
                    n = this.frontPlot,
                    s = this.plotRange,
                    o = s.tl,
                    l = s.br;
                  $t(e, 'x') &&
                    (this.crosshairsShapeX = n.addShape('Line', {
                      className: 'tooltip-crosshairs-x',
                      zIndex: 0,
                      visible: !1,
                      attrs: _({ x1: o.x, y1: 0, x2: l.x, y2: 0 }, t),
                    })),
                    $t(e, 'y') &&
                      (this.crosshairsShapeY = n.addShape('Line', {
                        className: 'tooltip-crosshairs-y',
                        zIndex: 0,
                        visible: !1,
                        attrs: _({ x1: 0, y1: l.y, x2: 0, y2: o.y }, t),
                      }));
                }),
                r
              );
            })();
          D.tooltip = z(
            {
              triggerOn: 'press',
              triggerOff: 'pressend',
              alwaysShow: !1,
              showTitle: !1,
              showCrosshairs: !1,
              crosshairsStyle: { stroke: 'rgba(0, 0, 0, 0.25)', lineWidth: 1 },
              showTooltipMarker: !0,
              background: { radius: 1, fill: 'rgba(0, 0, 0, 0.65)', padding: [3, 5] },
              titleStyle: { fontSize: 12, fill: '#fff', textAlign: 'start', textBaseline: 'top' },
              nameStyle: {
                fontSize: 12,
                fill: 'rgba(255, 255, 255, 0.65)',
                textAlign: 'start',
                textBaseline: 'middle',
              },
              valueStyle: {
                fontSize: 12,
                fill: '#fff',
                textAlign: 'start',
                textBaseline: 'middle',
              },
              showItemMarker: !0,
              itemMarkerStyle: { radius: 3, symbol: 'circle', lineWidth: 1, stroke: '#fff' },
              layout: 'horizontal',
              snap: !1,
            },
            D.tooltip || {},
          );
          function Ua(i) {
            var r = i.getAttr('color');
            if (r) {
              var a = r.getScale(r.type);
              if (a.isLinear) return a;
            }
            var e = i.getXScale(),
              t = i.getYScale();
            return t || e;
          }
          function nl(i, r) {
            var a,
              e,
              t = i._getGroupScales();
            if (
              (t.length &&
                C(t, function(o) {
                  return (e = o), !1;
                }),
              e)
            ) {
              var n = e.field;
              a = e.getText(r[n]);
            } else {
              var s = Ua(i);
              a = s.alias || s.field;
            }
            return a;
          }
          function sl(i, r) {
            var a = Ua(i);
            return a.getText(r[a.field]);
          }
          function ol(i, r) {
            var a = i.getAttr('position'),
              e = a.getFields()[0],
              t = i.get('scales')[e];
            return t.getText(r[t.field]);
          }
          function ll(i, r) {
            var a = -1;
            return (
              C(i, function(e, t) {
                if (
                  e.title === r.title &&
                  e.name === r.name &&
                  e.value === r.value &&
                  e.color === r.color
                )
                  return (a = t), !1;
              }),
              a
            );
          }
          function ul(i) {
            var r = [];
            return (
              C(i, function(a) {
                var e = ll(r, a);
                e === -1 ? r.push(a) : (r[e] = a);
              }),
              r
            );
          }
          function cl(i, r) {
            return JSON.stringify(i) === JSON.stringify(r);
          }
          var fl = (function() {
            function i(a) {
              var e = this;
              N(this, 'handleShowEvent', function(s) {
                var o = e.chart;
                if (!e.enable) return;
                var l = o.get('plotRange'),
                  u = Me(s, o);
                if (!Ze(u, l) && !e._tooltipCfg.alwaysShow) {
                  e.hideTooltip();
                  return;
                }
                var c = e.timeStamp,
                  f = +new Date();
                f - c > 16 && (e.showTooltip(u), (e.timeStamp = f));
              }),
                N(this, 'handleHideEvent', function() {
                  if (!e.enable) return;
                  e.hideTooltip();
                }),
                (this.enable = !0),
                (this.cfg = {}),
                (this.tooltip = null),
                (this.chart = null),
                (this.timeStamp = 0),
                _(this, a);
              var t = this.chart,
                n = t.get('canvas');
              (this.canvas = n), (this.canvasDom = n.get('el'));
            }
            var r = i.prototype;
            return (
              (r._setCrosshairsCfg = function() {
                var e = this,
                  t = e.chart,
                  n = _({}, D.tooltip),
                  s = t.get('geoms'),
                  o = [];
                C(s, function(u) {
                  var c = u.get('type');
                  o.indexOf(c) === -1 && o.push(c);
                });
                var l = t.get('coord').type;
                return (
                  s.length &&
                    (l === 'cartesian' || l === 'rect') &&
                    o.length === 1 &&
                      ['line', 'area', 'path', 'point'].indexOf(o[0]) !== -1 &&
                      _(n, { showCrosshairs: !0 }),
                  n
                );
              }),
              (r._getMaxLength = function(e) {
                e === void 0 && (e = {});
                var t = e,
                  n = t.layout,
                  s = t.plotRange;
                return n === 'horizontal' ? s.br.x - s.bl.x : s.bl.y - s.tr.y;
              }),
              (r.render = function() {
                var e = this;
                if (e.tooltip) return;
                var t = e.chart,
                  n = t.get('canvas'),
                  s = t.get('frontPlot').addGroup({ className: 'tooltipContainer', zIndex: 10 }),
                  o = t.get('backPlot').addGroup({ className: 'tooltipContainer' }),
                  l = t.get('plotRange'),
                  u = t.get('coord'),
                  c = e._setCrosshairsCfg(),
                  f = e.cfg,
                  h = z(
                    {
                      plotRange: l,
                      frontPlot: s,
                      backPlot: o,
                      canvas: n,
                      fixed: u.transposed || u.isPolar,
                    },
                    c,
                    f,
                  );
                (h.maxLength = e._getMaxLength(h)), (this._tooltipCfg = h);
                var v = new il(h);
                (e.tooltip = v),
                  h.alwaysShow && e.prePoint && this.showTooltip(e.prePoint),
                  e.bindEvents();
              }),
              (r.clear = function() {
                var e = this.tooltip;
                e && (e.destroy(), this.unBindEvents()),
                  (this.tooltip = null),
                  (this._lastActive = null);
              }),
              (r._getTooltipMarkerStyle = function(e) {
                e === void 0 && (e = {});
                var t = e,
                  n = t.type,
                  s = t.items,
                  o = this._tooltipCfg;
                if (n === 'rect') {
                  var l,
                    u,
                    c,
                    f,
                    h = this.chart,
                    v = h.get('plotRange'),
                    g = v.tl,
                    p = v.br,
                    m = h.get('coord'),
                    d = s[0],
                    y = s[s.length - 1],
                    x = d.width;
                  m.transposed
                    ? ((l = g.x), (u = y.y - x * 0.75), (c = p.x - g.x), (f = d.y - y.y + 1.5 * x))
                    : ((l = d.x - x * 0.75), (u = g.y), (c = y.x - d.x + 1.5 * x), (f = p.y - g.y)),
                    (e.style = _(
                      { x: l, y: u, width: c, height: f, fill: '#CCD6EC', opacity: 0.3 },
                      o.tooltipMarkerStyle,
                    ));
                } else e.style = _({ radius: 4, fill: '#fff', lineWidth: 2 }, o.tooltipMarkerStyle);
                return e;
              }),
              (r._setTooltip = function(e, t, n) {
                n === void 0 && (n = {}), (this.prePoint = e);
                var s = this._lastActive,
                  o = this.tooltip,
                  l = this._tooltipCfg;
                t = ul(t);
                var u = this.chart,
                  c = u.get('coord'),
                  f = u.getYScales()[0],
                  h = l.snap;
                if (h === !1 && f.isLinear) {
                  var v = c.invertPoint(e),
                    g = u.get('plotRange'),
                    p,
                    m;
                  Ze(e, g) &&
                    (c.transposed
                      ? ((p = f.invert(v.x)),
                        (m = e.x),
                        o.setXTipContent(p),
                        o.setXTipPosition(m),
                        o.setYCrosshairPosition(m))
                      : ((p = f.invert(v.y)),
                        (m = e.y),
                        o.setYTipContent(p),
                        o.setYTipPosition(m),
                        o.setXCrosshairPosition(m)));
                }
                if (
                  (l.onShow &&
                    l.onShow({ x: e.x, y: e.y, tooltip: o, items: t, tooltipMarkerCfg: n }),
                  cl(s, t))
                ) {
                  if (h === !1 && ($t(l.crosshairsType, 'y') || l.showYTip)) {
                    var d = this.chart.get('canvas');
                    d.draw();
                  }
                  return;
                }
                this._lastActive = t;
                var y = l.onChange;
                y && y({ x: e.x, y: e.y, tooltip: o, items: t, tooltipMarkerCfg: n });
                var x = t[0],
                  S = x.title || x.name,
                  P = x.x;
                if (
                  (t.length > 1 && (P = (t[0].x + t[t.length - 1].x) / 2),
                  o.setContent(S, t, c.transposed),
                  o.setPosition(t, e),
                  c.transposed)
                ) {
                  var b = x.y;
                  t.length > 1 && (b = (t[0].y + t[t.length - 1].y) / 2),
                    o.setYTipContent(S),
                    o.setYTipPosition(b),
                    o.setXCrosshairPosition(b),
                    h &&
                      (o.setXTipContent(x.value), o.setXTipPosition(P), o.setYCrosshairPosition(P));
                } else
                  o.setXTipContent(S),
                    o.setXTipPosition(P),
                    o.setYCrosshairPosition(P),
                    h &&
                      (o.setYTipContent(x.value),
                      o.setYTipPosition(x.y),
                      o.setXCrosshairPosition(x.y));
                var M = n.items;
                l.showTooltipMarker && M.length
                  ? ((n = this._getTooltipMarkerStyle(n)), o.setMarkers(n))
                  : o.clearMarkers(),
                  o.show();
              }),
              (r.showTooltip = function(e) {
                var t = this,
                  n = t.chart,
                  s,
                  o = [],
                  l = [],
                  u = t._tooltipCfg,
                  c = u.showItemMarker,
                  f = u.itemMarkerStyle,
                  h = u.alwaysShow,
                  v;
                c && (v = f);
                var g = n.get('geoms'),
                  p = n.get('coord');
                if (
                  (C(g, function(d) {
                    if (d.get('visible')) {
                      var y = d.get('type'),
                        x = d.getSnapRecords(e),
                        S = d.get('adjust');
                      if (y === 'interval' && S && S.type === 'symmetric') return;
                      C(x, function(P) {
                        if (P.x && P.y) {
                          var b = P.x,
                            M = P.y,
                            I = P._origin,
                            O = P.color,
                            T = {
                              x: b,
                              y: k(M) ? M[1] : M,
                              color: O || D.defaultColor,
                              origin: I,
                              name: nl(d, I),
                              value: sl(d, I),
                              title: ol(d, I),
                            };
                          v && (T.marker = _({ fill: O || D.defaultColor }, v)),
                            l.push(T),
                            ['line', 'area', 'path'].indexOf(y) !== -1
                              ? ((s = 'circle'), o.push(T))
                              : y === 'interval' &&
                                (p.type === 'cartesian' || p.type === 'rect') &&
                                ((s = 'rect'), (T.width = d.getSize(P._origin)), o.push(T));
                        }
                      });
                    }
                  }),
                  l.length)
                ) {
                  var m = { items: o, type: s };
                  t._setTooltip(e, l, m);
                  return;
                }
                h || t.hideTooltip();
              }),
              (r.hideTooltip = function() {
                var e = this._tooltipCfg;
                this._lastActive = null;
                var t = this.tooltip;
                if (t) {
                  t.hide(), e.onHide && e.onHide({ tooltip: t });
                  var n = this.chart.get('canvas');
                  n.draw();
                }
              }),
              (r._handleEvent = function(e, t, n) {
                var s = this.canvas;
                C([].concat(e), function(o) {
                  n === 'bind' ? s.on(o, t) : s.off(o, t);
                });
              }),
              (r.bindEvents = function() {
                var e = this._tooltipCfg,
                  t = e.triggerOn,
                  n = e.triggerOff,
                  s = e.alwaysShow;
                t && this._handleEvent(t, this.handleShowEvent, 'bind'),
                  s || this._handleEvent(n, this.handleHideEvent, 'bind');
              }),
              (r.unBindEvents = function() {
                var e = this._tooltipCfg,
                  t = e.triggerOn,
                  n = e.triggerOff,
                  s = e.alwaysShow;
                t && this._handleEvent(t, this.handleShowEvent, 'unBind'),
                  s || this._handleEvent(n, this.handleHideEvent, 'unBind');
              }),
              i
            );
          })();
          function ja(i) {
            var r = new fl({ chart: i });
            i.set('tooltipController', r),
              (i.tooltip = function(a, e) {
                return j(a) && ((e = a), (a = !0)), (r.enable = a), e && (r.cfg = e), this;
              });
          }
          function Va(i) {
            var r = i.get('tooltipController');
            r.render(),
              (i.showTooltip = function(a) {
                return r.showTooltip(a), this;
              }),
              (i.hideTooltip = function() {
                return r.hideTooltip(), this;
              });
          }
          function Wa(i) {
            var r = i.get('tooltipController');
            r.clear();
          }
          var hl = { init: ja, afterGeomDraw: Va, clearInner: Wa },
            vl = Object.freeze({
              __proto__: null,
              init: ja,
              afterGeomDraw: Va,
              clearInner: Wa,
              default: hl,
            });
          D.guide = z(
            {
              line: { style: { stroke: '#a3a3a3', lineWidth: 1 }, top: !0 },
              text: {
                style: { fill: '#787878', textAlign: 'center', textBaseline: 'middle' },
                offsetX: 0,
                offsetY: 0,
                top: !0,
              },
              rect: { style: { fill: '#fafafa' }, top: !1 },
              arc: { style: { stroke: '#a3a3a3' }, top: !0 },
              html: { offsetX: 0, offsetY: 0, alignX: 'center', alignY: 'middle' },
              tag: {
                top: !0,
                offsetX: 0,
                offsetY: 0,
                side: 4,
                background: { padding: 5, radius: 2, fill: '#1890FF' },
                textStyle: {
                  fontSize: 12,
                  fill: '#fff',
                  textAlign: 'center',
                  textBaseline: 'middle',
                },
              },
              point: {
                top: !0,
                offsetX: 0,
                offsetY: 0,
                style: { fill: '#fff', r: 3, lineWidth: 2, stroke: '#1890ff' },
              },
            },
            D.guide || {},
          );
          var gl = (function() {
            function i(a) {
              (this.guides = []),
                (this.xScale = null),
                (this.yScales = null),
                (this.guideShapes = []),
                _(this, a);
            }
            var r = i.prototype;
            return (
              (r._toString = function(e) {
                return F(e) && (e = e(this.xScale, this.yScales)), (e = e.toString()), e;
              }),
              (r._getId = function(e, t) {
                var n = t.id;
                if (!n) {
                  var s = t.type;
                  s === 'arc' || s === 'line' || s === 'rect'
                    ? (n = this._toString(t.start) + '-' + this._toString(t.end))
                    : (n = this._toString(t.position));
                }
                return n;
              }),
              (r.paint = function(e) {
                var t = this,
                  n = t.chart,
                  s = t.guides,
                  o = t.xScale,
                  l = t.yScales,
                  u = [];
                C(s, function(c, f) {
                  (c.xScale = o), (c.yScales = l);
                  var h;
                  c.type === 'regionFilter'
                    ? (c.chart = n)
                    : (h = c.top ? t.frontPlot : t.backPlot),
                    (c.coord = e),
                    (c.container = h),
                    (c.canvas = n.get('canvas'));
                  var v = c.render(e, h);
                  if (v) {
                    var g = t._getId(v, c);
                    [].concat(v).forEach(function(p) {
                      (p._id = p.get('className') + '-' + g), p.set('index', f), u.push(p);
                    });
                  }
                }),
                  (t.guideShapes = u);
              }),
              (r.clear = function() {
                return this.reset(), (this.guides = []), this;
              }),
              (r.reset = function() {
                var e = this.guides;
                C(e, function(t) {
                  t.remove();
                });
              }),
              (r._createGuide = function(e, t) {
                var n = lt(e),
                  s = new U[n](z({}, D.guide[e], t));
                return this.guides.push(s), s;
              }),
              (r.line = function(e) {
                return e === void 0 && (e = {}), this._createGuide('line', e);
              }),
              (r.text = function(e) {
                return e === void 0 && (e = {}), this._createGuide('text', e);
              }),
              (r.arc = function(e) {
                return e === void 0 && (e = {}), this._createGuide('arc', e);
              }),
              (r.html = function(e) {
                return e === void 0 && (e = {}), this._createGuide('html', e);
              }),
              (r.rect = function(e) {
                return e === void 0 && (e = {}), this._createGuide('rect', e);
              }),
              (r.tag = function(e) {
                return e === void 0 && (e = {}), this._createGuide('tag', e);
              }),
              (r.point = function(e) {
                return e === void 0 && (e = {}), this._createGuide('point', e);
              }),
              (r.regionFilter = function(e) {
                return e === void 0 && (e = {}), this._createGuide('regionFilter', e);
              }),
              i
            );
          })();
          function qa(i) {
            var r = new gl({
              frontPlot: i.get('frontPlot').addGroup({ zIndex: 20, className: 'guideContainer' }),
              backPlot: i.get('backPlot').addGroup({ className: 'guideContainer' }),
            });
            i.set('guideController', r),
              (i.guide = function() {
                return r;
              });
          }
          function $a(i) {
            var r = i.get('guideController');
            if (!r.guides.length) return;
            var a = i.getXScale(),
              e = i.getYScales(),
              t = i.get('coord');
            (r.xScale = a), (r.yScales = e), (r.chart = i), r.paint(t);
          }
          function Za(i) {
            i.get('guideController').clear();
          }
          function Ja(i) {
            i.get('guideController').reset();
          }
          var pl = { init: qa, afterGeomDraw: $a, clear: Za, repaint: Ja },
            dl = Object.freeze({
              __proto__: null,
              init: qa,
              afterGeomDraw: $a,
              clear: Za,
              repaint: Ja,
              default: pl,
            }),
            Ka = 12,
            Qa = 3,
            Gt = {
              itemMarginBottom: 12,
              itemGap: 10,
              showTitle: !1,
              titleStyle: {
                fontSize: 12,
                fill: '#808080',
                textAlign: 'start',
                textBaseline: 'top',
              },
              nameStyle: {
                fill: '#808080',
                fontSize: 12,
                textAlign: 'start',
                textBaseline: 'middle',
              },
              valueStyle: {
                fill: '#000000',
                fontSize: 12,
                textAlign: 'start',
                textBaseline: 'middle',
              },
              unCheckStyle: { fill: '#bfbfbf' },
              itemWidth: 'auto',
              wordSpace: 6,
              selectedMode: 'multiple',
            };
          D.legend = z(
            {
              common: Gt,
              right: _({ position: 'right', layout: 'vertical' }, Gt),
              left: _({ position: 'left', layout: 'vertical' }, Gt),
              top: _({ position: 'top', layout: 'horizontal' }, Gt),
              bottom: _({ position: 'bottom', layout: 'horizontal' }, Gt),
            },
            D.legend || {},
          );
          function ml(i, r) {
            var a = 0;
            r = q(r);
            switch (i) {
              case 'top':
                a = r[0];
                break;
              case 'right':
                a = r[1];
                break;
              case 'bottom':
                a = r[2];
                break;
              case 'left':
                a = r[3];
                break;
            }
            return a;
          }
          var yl = (function() {
            function i(a) {
              var e = this;
              N(this, 'handleEvent', function(n) {
                var s = e;
                function o(P, b) {
                  var M = null,
                    I = s.legends;
                  return (
                    C(I, function(O) {
                      C(O, function(T) {
                        var L = T.itemsGroup,
                          at = T.legendHitBoxes,
                          xt = L.get('children');
                        if (xt.length) {
                          var _t = T.x,
                            Z = T.y;
                          C(at, function(et, bt) {
                            if (
                              P >= et.x + _t &&
                              P <= et.x + et.width + _t &&
                              b >= et.y + Z &&
                              b <= et.height + et.y + Z
                            )
                              return (M = { clickedItem: xt[bt], clickedLegend: T }), !1;
                          });
                        }
                      });
                    }),
                    M
                  );
                }
                var l = s.chart,
                  u = Me(n, l),
                  c = u.x,
                  f = u.y,
                  h = o(c, f);
                if (h && h.clickedLegend.clickable !== !1) {
                  var v = h.clickedItem,
                    g = h.clickedLegend;
                  if (g.onClick) (n.clickedItem = v), g.onClick(n);
                  else if (!g.custom) {
                    var p = v.get('checked'),
                      m = v.get('dataValue'),
                      d = g.filteredVals,
                      y = g.field,
                      x = g.selectedMode,
                      S = x === 'single';
                    S
                      ? l.filter(y, function(P) {
                          return P === m;
                        })
                      : (p ? d.push(m) : Wt(d, m),
                        l.filter(y, function(P) {
                          return d.indexOf(P) === -1;
                        })),
                      l.repaint();
                  }
                }
              }),
                (this.legendCfg = {}),
                (this.enable = !0),
                (this.position = 'top'),
                _(this, a);
              var t = this.chart;
              (this.canvasDom = t.get('canvas').get('el')), this.clear();
            }
            var r = i.prototype;
            return (
              (r.addLegend = function(e, t, n) {
                var s = this,
                  o = s.legendCfg,
                  l = e.field,
                  u = o[l];
                if (u === !1) return null;
                if (u && u.custom) s.addCustomLegend(l);
                else {
                  var c = o.position || s.position;
                  u && u.position && (c = u.position),
                    e.isCategory && s._addCategoryLegend(e, t, c, n);
                }
              }),
              (r.addCustomLegend = function(e) {
                var t = this,
                  n = t.legendCfg;
                e && n[e] && (n = n[e]);
                var s = n.position || t.position,
                  o = t.legends;
                o[s] = o[s] || [];
                var l = n.items;
                if (!l) return null;
                var u = t.container;
                C(l, function(f) {
                  Tt(f.marker)
                    ? (f.marker.radius = f.marker.radius || Qa)
                    : (f.marker = { symbol: f.marker || 'circle', fill: f.fill, radius: Qa }),
                    (f.checked = w(f.checked) ? !0 : f.checked),
                    (f.name = f.name || f.value);
                });
                var c = new Qe(
                  z({}, D.legend[s], n, { maxLength: t._getMaxLength(s), items: l, parent: u }),
                );
                o[s].push(c);
              }),
              (r.clear = function() {
                var e = this.legends;
                C(e, function(t) {
                  C(t, function(n) {
                    n.clear();
                  });
                }),
                  (this.legends = {}),
                  this.unBindEvents();
              }),
              (r._isFiltered = function(e, t, n) {
                var s = !1;
                return (
                  C(t, function(o) {
                    if (((s = s || e.getText(o) === e.getText(n)), s)) return !1;
                  }),
                  s
                );
              }),
              (r._getMaxLength = function(e) {
                var t = this.chart,
                  n = q(t.get('appendPadding'));
                return e === 'right' || e === 'left'
                  ? t.get('height') - (n[0] + n[2])
                  : t.get('width') - (n[1] + n[3]);
              }),
              (r._addCategoryLegend = function(e, t, n, s) {
                var o = this,
                  l = o.legendCfg,
                  u = o.legends,
                  c = o.container,
                  f = o.chart,
                  h = e.field;
                u[n] = u[n] || [];
                var v = 'circle';
                l[h] && l[h].marker ? (v = l[h].marker) : l.marker && (v = l.marker),
                  C(t, function(d) {
                    Tt(v) ? _(d.marker, v) : (d.marker.symbol = v),
                      s && (d.checked = !o._isFiltered(e, s, d.dataValue));
                  });
                var g = f.get('legendItems');
                g[h] = t;
                var p = z({}, D.legend[n], l[h] || l, {
                  maxLength: o._getMaxLength(n),
                  items: t,
                  field: h,
                  filteredVals: s,
                  parent: c,
                });
                p.showTitle && z(p, { title: e.alias || e.field });
                var m = new Qe(p);
                return u[n].push(m), m;
              }),
              (r._alignLegend = function(e, t, n) {
                var s = this,
                  o = s.plotRange,
                  l = o.tl,
                  u = o.bl,
                  c = s.chart,
                  f = e.offsetX || 0,
                  h = e.offsetY || 0,
                  v = c.get('width'),
                  g = c.get('height'),
                  p = q(c.get('appendPadding')),
                  m = e.getHeight(),
                  d = e.getWidth(),
                  y = 0,
                  x = 0;
                if (n === 'left' || n === 'right') {
                  var S = e.verticalAlign || 'middle',
                    P = Math.abs(l.y - u.y);
                  (y = n === 'left' ? p[3] : v - d - p[1]),
                    (x = (P - m) / 2 + l.y),
                    S === 'top' ? (x = l.y) : S === 'bottom' && (x = u.y - m),
                    t && (x = t.get('y') - m - Ka);
                } else {
                  var b = e.align || 'left';
                  if (
                    ((y = p[3]),
                    b === 'center' ? (y = v / 2 - d / 2) : b === 'right' && (y = v - (d + p[1])),
                    (x = n === 'top' ? p[0] + Math.abs(e.container.getBBox().minY) : g - m),
                    t)
                  ) {
                    var M = t.getWidth();
                    y = t.x + M + Ka;
                  }
                }
                n === 'bottom' && h > 0 && (h = 0),
                  n === 'right' && f > 0 && (f = 0),
                  e.moveTo(y + f, x + h);
              }),
              (r.alignLegends = function() {
                var e = this,
                  t = e.legends;
                return (
                  C(t, function(n, s) {
                    C(n, function(o, l) {
                      var u = n[l - 1];
                      e._alignLegend(o, u, s);
                    });
                  }),
                  e
                );
              }),
              (r.bindEvents = function() {
                var e = this.legendCfg,
                  t = e.triggerOn || 'touchstart';
                wr(this.canvasDom, t, this.handleEvent);
              }),
              (r.unBindEvents = function() {
                var e = this.legendCfg,
                  t = e.triggerOn || 'touchstart';
                Mr(this.canvasDom, t, this.handleEvent);
              }),
              i
            );
          })();
          function ti(i) {
            var r = new yl({
              container: i.get('backPlot'),
              plotRange: i.get('plotRange'),
              chart: i,
            });
            i.set('legendController', r),
              (i.legend = function(a, e) {
                var t = r.legendCfg;
                return (
                  (r.enable = !0),
                  hr(a) ? ((r.enable = a), (t = e || {})) : j(a) ? (t = a) : (t[a] = e),
                  (r.legendCfg = t),
                  this
                );
              });
          }
          function ei(i) {
            var r = i.get('legendController');
            if (!r.enable) return null;
            var a = r.legendCfg;
            if (a && a.custom) r.addCustomLegend();
            else {
              var e = i.getLegendItems(),
                t = i.get('scales'),
                n = i.get('filters');
              C(e, function(l, u) {
                var c = t[u],
                  f = c.values,
                  h;
                n && n[u]
                  ? (h = f.filter(function(v) {
                      return !n[u](v);
                    }))
                  : (h = []),
                  r.addLegend(c, l, h);
              });
            }
            a && a.clickable !== !1 && r.bindEvents();
            var s = r.legends,
              o = { top: 0, right: 0, bottom: 0, left: 0 };
            C(s, function(l, u) {
              var c = 0;
              C(l, function(f) {
                var h = f.getWidth(),
                  v = f.getHeight();
                u === 'top' || u === 'bottom'
                  ? ((c = Math.max(c, v)), f.offsetY > 0 && (c += f.offsetY))
                  : ((c = Math.max(c, h)), f.offsetX > 0 && (c += f.offsetX));
              }),
                (o[u] = c + ml(u, i.get('appendPadding')));
            }),
              i.set('legendRange', o);
          }
          function ri(i) {
            var r = i.get('legendController');
            r.alignLegends();
          }
          function ai(i) {
            var r = i.get('legendController');
            r.clear(), i.set('legendRange', null);
          }
          var xl = { init: ti, beforeGeomDraw: ei, afterGeomDraw: ri, clearInner: ai },
            _l = Object.freeze({
              __proto__: null,
              init: ti,
              beforeGeomDraw: ei,
              afterGeomDraw: ri,
              clearInner: ai,
              default: xl,
            }),
            tr = typeof performance == 'object' && performance.now ? performance : Date,
            Sl = (function() {
              function i() {
                (this.anims = []), (this.time = null), (this.playing = !1), (this.canvas = []);
              }
              var r = i.prototype;
              return (
                (r.play = function() {
                  var e = this;
                  (e.time = tr.now()), (e.playing = !0);
                  function t() {
                    e.playing && (Ue(t), e.update());
                  }
                  Ue(t);
                }),
                (r.stop = function() {
                  (this.playing = !1), (this.time = null), (this.canvas = []);
                }),
                (r.pushAnim = function(e) {
                  if ((this.anims.push(e), this.playing)) return;
                  this.play();
                }),
                (r.update = function() {
                  var e = tr.now();
                  if (((this.canvas = []), !this.anims.length)) {
                    this.stop();
                    return;
                  }
                  for (var t = 0; t < this.anims.length; t++) {
                    var n = this.anims[t];
                    if (e < n.startTime || n.hasEnded) continue;
                    var s = n.shape;
                    if (s.get('destroyed')) {
                      this.anims.splice(t, 1), t--;
                      continue;
                    }
                    var o = n.startState,
                      l = n.endState,
                      u = n.interpolate,
                      c = n.duration;
                    e >= n.startTime &&
                      !n.hasStarted &&
                      ((n.hasStarted = !0), n.onStart && n.onStart());
                    var f = (e - n.startTime) / c;
                    if (((f = Math.max(0, Math.min(f, 1))), (f = n.easing(f)), n.onFrame))
                      n.onFrame(f);
                    else
                      for (var h in u) {
                        var v = u[h],
                          g = v(f),
                          p = void 0;
                        if (h === 'points') {
                          p = [];
                          for (
                            var m = Math.max(o.points.length, l.points.length), d = 0;
                            d < m;
                            d += 2
                          )
                            p.push({ x: g[d], y: g[d + 1] });
                        } else p = g;
                        (s._attrs.attrs[h] = p), (s._attrs.bbox = null);
                      }
                    var y = s.get('canvas');
                    this.canvas.indexOf(y) === -1 && this.canvas.push(y),
                      n.onUpdate && n.onUpdate(f),
                      e >= n.endTime && !n.hasEnded && ((n.hasEnded = !0), n.onEnd && n.onEnd()),
                      f === 1 && (this.anims.splice(t, 1), t--);
                  }
                  this.canvas.map(function(x) {
                    return x.draw(), x;
                  }),
                    (this.time = tr.now());
                }),
                i
              );
            })();
          function ii(i) {
            return i;
          }
          function Cl(i) {
            return i * i;
          }
          function Pl(i) {
            return i * (2 - i);
          }
          function wl(i) {
            return (i *= 2) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1);
          }
          function Ml(i) {
            return i * i * i;
          }
          function bl(i) {
            return --i * i * i + 1;
          }
          function Tl(i) {
            return (i *= 2) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2);
          }
          function Dl(i) {
            var r,
              a = 0.1,
              e = 0.4;
            return i === 0
              ? 0
              : i === 1
              ? 1
              : (!a || a < 1
                  ? ((a = 1), (r = e / 4))
                  : (r = (e / (2 * Math.PI)) * Math.asin(1 / a)),
                -(a * Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - r) * (2 * Math.PI)) / e)));
          }
          function El(i) {
            var r,
              a = 0.1,
              e = 0.4;
            return i === 0
              ? 0
              : i === 1
              ? 1
              : (!a || a < 1
                  ? ((a = 1), (r = e / 4))
                  : (r = (e / (2 * Math.PI)) * Math.asin(1 / a)),
                a * Math.pow(2, -10 * i) * Math.sin(((i - r) * (2 * Math.PI)) / e) + 1);
          }
          function Al(i) {
            var r,
              a = 0.1,
              e = 0.4;
            return i === 0
              ? 0
              : i === 1
              ? 1
              : (!a || a < 1
                  ? ((a = 1), (r = e / 4))
                  : (r = (e / (2 * Math.PI)) * Math.asin(1 / a)),
                (i *= 2) < 1
                  ? -0.5 *
                    (a * Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - r) * (2 * Math.PI)) / e))
                  : a *
                      Math.pow(2, -10 * (i -= 1)) *
                      Math.sin(((i - r) * (2 * Math.PI)) / e) *
                      0.5 +
                    1);
          }
          function kl(i) {
            var r = 1.70158;
            return i * i * ((r + 1) * i - r);
          }
          function Il(i) {
            var r = 1.70158;
            return (i = i - 1) * i * ((r + 1) * i + r) + 1;
          }
          function Ol(i) {
            var r = 1.70158 * 1.525;
            return (i *= 2) < 1
              ? 0.5 * (i * i * ((r + 1) * i - r))
              : 0.5 * ((i -= 2) * i * ((r + 1) * i + r) + 2);
          }
          function ni(i) {
            return 1 - er(1 - i);
          }
          function er(i) {
            return (i /= 1) < 1 / 2.75
              ? 7.5625 * i * i
              : i < 2 / 2.75
              ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
              : i < 2.5 / 2.75
              ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
              : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
          }
          function Rl(i) {
            return i < 0.5 ? ni(i * 2) * 0.5 : er(i * 2 - 1) * 0.5 + 0.5;
          }
          var Nl = Object.freeze({
            __proto__: null,
            linear: ii,
            quadraticIn: Cl,
            quadraticOut: Pl,
            quadraticInOut: wl,
            cubicIn: Ml,
            cubicOut: bl,
            cubicInOut: Tl,
            elasticIn: Dl,
            elasticOut: El,
            elasticInOut: Al,
            backIn: kl,
            backOut: Il,
            backInOut: Ol,
            bounceIn: ni,
            bounceOut: er,
            bounceInOut: Rl,
          });
          function si(i) {
            for (var r = [], a = 0, e = i.length; a < e; a++)
              i[a] && (r.push(i[a].x), r.push(i[a].y));
            return r;
          }
          function oi(i, r) {
            return (
              (i = +i),
              (r -= i),
              function(a) {
                return i + r * a;
              }
            );
          }
          function li(i, r) {
            var a = r ? r.length : 0,
              e = i ? Math.min(a, i.length) : 0,
              t = new Array(e),
              n = new Array(a),
              s;
            for (s = 0; s < e; ++s) t[s] = oi(i[s], r[s]);
            for (; s < a; ++s) n[s] = r[s];
            return function(o) {
              for (s = 0; s < e; ++s) n[s] = t[s](o);
              return n;
            };
          }
          var Yl = (function() {
              function i(a, e, t) {
                (this.hasStarted = !1),
                  (this.hasEnded = !1),
                  (this.shape = a),
                  (this.source = e),
                  (this.timeline = t),
                  (this.animate = null);
              }
              var r = i.prototype;
              return (
                (r.to = function(e) {
                  e === void 0 && (e = {});
                  var t = e.delay || 0,
                    n = e.attrs || {},
                    s = e.duration || 1e3,
                    o;
                  typeof e.easing == 'function' ? (o = e.easing) : (o = Nl[e.easing] || ii);
                  var l = {
                      shape: this.shape,
                      startTime: this.timeline.time + t,
                      duration: s,
                      easing: o,
                    },
                    u = {};
                  for (var c in n) {
                    var f = this.source[c],
                      h = n[c];
                    c === 'points'
                      ? ((f = si(f)),
                        (h = si(h)),
                        (u.points = li(f, h)),
                        (this.source.points = f),
                        (n.points = h))
                      : c === 'matrix'
                      ? (u.matrix = li(f, h))
                      : (u[c] = oi(f, h));
                  }
                  return (
                    (l.interpolate = u),
                    (l.startState = this.source),
                    (l.endState = n),
                    (l.endTime = l.startTime + s),
                    this.timeline.pushAnim(l),
                    (this.animate = l),
                    this
                  );
                }),
                (r.onFrame = function(e) {
                  return (
                    this.animate &&
                      (this.animate.onFrame = function(t) {
                        e(t);
                      }),
                    this
                  );
                }),
                (r.onStart = function(e) {
                  return (
                    this.animate &&
                      (this.animate.onStart = function() {
                        e();
                      }),
                    this
                  );
                }),
                (r.onUpdate = function(e) {
                  return (
                    this.animate &&
                      (this.animate.onUpdate = function(t) {
                        e(t);
                      }),
                    this
                  );
                }),
                (r.onEnd = function(e) {
                  return (
                    this.animate &&
                      (this.animate.onEnd = function() {
                        e();
                      }),
                    this
                  );
                }),
                i
              );
            })(),
            Fl = {
              appear: { duration: 450, easing: 'quadraticOut' },
              update: { duration: 300, easing: 'quadraticOut' },
              enter: { duration: 300, easing: 'quadraticOut' },
              leave: { duration: 350, easing: 'quadraticIn' },
            },
            yt = {
              defaultCfg: {},
              Action: {},
              getAnimation: function(r, a, e) {
                var t = this.defaultCfg[r];
                if (t) {
                  var n = t[e];
                  if (F(n)) return n(a);
                }
                return !1;
              },
              getAnimateCfg: function(r, a) {
                var e = Fl[a],
                  t = this.defaultCfg[r];
                return t && t.cfg && t.cfg[a] ? z({}, e, t.cfg[a]) : e;
              },
              registerAnimation: function(r, a) {
                var e;
                this.Action || (this.Action = {}),
                  (this.Action = Zt({}, this.Action, ((e = {}), (e[r] = a), e)));
              },
            };
          function Ll(i) {
            var r = i.start,
              a = i.end;
            return { start: r, end: a, width: a.x - r.x, height: Math.abs(a.y - r.y) };
          }
          function ui(i, r, a) {
            var e;
            i.apply(r);
            var t = r[0],
              n = r[1];
            if (a === 'x') {
              i.transform([
                ['t', t, n],
                ['s', 0.01, 1],
                ['t', -t, -n],
              ]);
              var s = i.getMatrix();
              e = G.transform(s, [
                ['t', t, n],
                ['s', 100, 1],
                ['t', -t, -n],
              ]);
            } else if (a === 'y') {
              i.transform([
                ['t', t, n],
                ['s', 1, 0.01],
                ['t', -t, -n],
              ]);
              var o = i.getMatrix();
              e = G.transform(o, [
                ['t', t, n],
                ['s', 1, 100],
                ['t', -t, -n],
              ]);
            } else if (a === 'xy') {
              i.transform([
                ['t', t, n],
                ['s', 0.01, 0.01],
                ['t', -t, -n],
              ]);
              var l = i.getMatrix();
              e = G.transform(l, [
                ['t', t, n],
                ['s', 100, 100],
                ['t', -t, -n],
              ]);
            }
            return e;
          }
          function Bl(i, r, a) {
            var e = {};
            return (
              i.delay && (e.delay = F(i.delay) ? i.delay(r, a) : i.delay),
              (e.easing = i.easing),
              (e.duration = i.duration),
              (e.delay = i.delay),
              e
            );
          }
          function ve(i, r, a, e) {
            var t = i._id,
              n = i.get('index'),
              s = Bl(a, n, t),
              o = s.easing,
              l = s.delay,
              u = s.duration,
              c = i.animate().to({ attrs: r, duration: u, delay: l, easing: o });
            e &&
              c.onEnd(function() {
                e();
              });
          }
          function Ht(i, r) {
            var a = w(i.attr('fillOpacity')) ? 1 : i.attr('fillOpacity'),
              e = w(i.attr('strokeOpacity')) ? 1 : i.attr('strokeOpacity');
            i.attr('fillOpacity', 0), i.attr('strokeOpacity', 0);
            var t = { fillOpacity: a, strokeOpacity: e };
            ve(i, t, r);
          }
          var zl = Object.freeze({ __proto__: null, fadeIn: Ht });
          function rr(i, r, a, e, t) {
            var n = Ll(a),
              s = n.start,
              o = n.end,
              l = n.width,
              u = n.height,
              c,
              f,
              h = new R.Rect({ attrs: { x: s.x, y: o.y, width: l, height: u } });
            t === 'y'
              ? ((c = s.x + l / 2), (f = e.y < s.y ? e.y : s.y))
              : t === 'x'
              ? ((c = e.x > s.x ? e.x : s.x), (f = s.y + u / 2))
              : t === 'xy' &&
                (a.isPolar
                  ? ((c = a.center.x), (f = a.center.y))
                  : ((c = (s.x + o.x) / 2), (f = (s.y + o.y) / 2)));
            var v = ui(h, [c, f], t);
            (h.isClip = !0),
              (h.endState = { matrix: v }),
              h.set('canvas', i.get('canvas')),
              i.attr('clip', h);
            var g = function() {
              i.attr('clip', null), h.remove(!0);
            };
            ve(h, h.endState, r, g);
          }
          function ar(i, r, a) {
            for (var e = i.get('children'), t, n, s, o = 0, l = e.length; o < l; o++) {
              var u = e[o],
                c = u.getBBox();
              (t = (c.minX + c.maxX) / 2),
                (n = (c.minY + c.maxY) / 2),
                (s = ui(u, [t, n], a)),
                ve(u, { matrix: s }, r);
            }
          }
          function ci(i, r, a, e) {
            rr(i, r, a, e, 'x');
          }
          function fi(i, r, a, e) {
            rr(i, r, a, e, 'y');
          }
          function Ut(i, r, a, e) {
            rr(i, r, a, e, 'xy');
          }
          function Xl(i, r) {
            ar(i, r, 'x');
          }
          function Gl(i, r) {
            ar(i, r, 'y');
          }
          function hi(i, r) {
            ar(i, r, 'xy');
          }
          function Rt(i, r, a) {
            var e = $e(a);
            e.set('canvas', i.get('canvas')), i.attr('clip', e);
            var t = function() {
                i.attr('clip', null), e.remove(!0);
              },
              n = {};
            if (a.isPolar) {
              var s = a.startAngle,
                o = a.endAngle;
              (n.endAngle = o), e.attr('endAngle', s);
            } else {
              var l = a.start,
                u = a.end,
                c = Math.abs(l.x - u.x),
                f = Math.abs(l.y - u.y);
              a.isTransposed
                ? (e.attr('height', 0), (n.height = f))
                : (e.attr('width', 0), (n.width = c));
            }
            ve(e, n, r, t);
          }
          var Hl = Object.freeze({
              __proto__: null,
              groupWaveIn: Rt,
              groupScaleInX: ci,
              groupScaleInY: fi,
              groupScaleInXY: Ut,
              shapesScaleInX: Xl,
              shapesScaleInY: Gl,
              shapesScaleInXY: hi,
            }),
            ge;
          (Ge.prototype.animate = function() {
            var i = _({}, this.get('attrs'));
            return new Yl(this, i, ge);
          }),
            (H.prototype.animate = function(i) {
              return this.set('animate', i), this;
            }),
            (yt.Action = zl),
            (yt.defaultCfg = {
              interval: {
                enter: function(r) {
                  return r.isPolar && r.transposed
                    ? function(a) {
                        a.set('zIndex', -1);
                        var e = a.get('parent');
                        e.sort();
                      }
                    : Ht;
                },
              },
              area: {
                enter: function(r) {
                  return r.isPolar ? null : Ht;
                },
              },
              line: {
                enter: function(r) {
                  return r.isPolar ? null : Ht;
                },
              },
              path: {
                enter: function(r) {
                  return r.isPolar ? null : Ht;
                },
              },
            });
          var vi = {
            line: function(r) {
              return r.isPolar ? Ut : Rt;
            },
            area: function(r) {
              return r.isPolar ? Ut : Rt;
            },
            path: function(r) {
              return r.isPolar ? Ut : Rt;
            },
            point: function() {
              return hi;
            },
            interval: function(r) {
              var a;
              return (
                r.isPolar ? ((a = Ut), r.transposed && (a = Rt)) : (a = r.transposed ? ci : fi), a
              );
            },
            schema: function() {
              return Rt;
            },
          };
          function Ul(i, r) {
            var a = {};
            for (var e in r)
              ((X(i[e]) && i[e] !== r[e]) ||
                (k(i[e]) && JSON.stringify(i[e]) !== JSON.stringify(r[e]))) &&
                (a[e] = r[e]);
            return a;
          }
          function jl(i, r, a) {
            var e = i.get('type'),
              t = 'geom' + a + '-' + e,
              n = i.getXScale(),
              s = i.getYScale(),
              o = n.field || 'x',
              l = s.field || 'y',
              u = r[l],
              c;
            n.isIdentity ? (c = n.value) : (c = r[o]),
              e === 'interval' || e === 'schema'
                ? (t += '-' + c)
                : e === 'line' || e === 'area' || e === 'path'
                ? (t += '-' + e)
                : (t += n.isCategory ? '-' + c : '-' + c + '-' + u);
            var f = i._getGroupScales();
            return (
              C(f, function(h) {
                var v = h.field;
                h.type !== 'identity' && (t += '-' + r[v]);
              }),
              t
            );
          }
          function Vl(i, r, a) {
            var e = [];
            return (
              C(i, function(t, n) {
                var s = t.get('container'),
                  o = s.get('children'),
                  l = t.get('type'),
                  u = w(t.get('animateCfg')) ? ir(l, r) : t.get('animateCfg');
                u !== !1 &&
                  C(o, function(c, f) {
                    c.get('className') === l &&
                      ((c._id = jl(t, c.get('origin')._origin, n)),
                      c.set('coord', a),
                      c.set('animateCfg', u),
                      c.set('index', f),
                      e.push(c));
                  }),
                  t.set('shapes', o);
              }),
              e
            );
          }
          function Wl(i) {
            for (var r = {}, a = 0, e = i.length; a < e; a++) {
              var t = i[a];
              if (!t._id || t.isClip) continue;
              var n = t._id;
              r[n] = {
                _id: n,
                type: t.get('type'),
                attrs: _({}, t._attrs.attrs),
                className: t.get('className'),
                geomType: t.get('className'),
                index: t.get('index'),
                coord: t.get('coord'),
                animateCfg: t.get('animateCfg'),
              };
            }
            return r;
          }
          function jt(i, r, a, e) {
            var t;
            return F(e) ? (t = e) : B(e) ? (t = yt.Action[e]) : (t = yt.getAnimation(i, r, a)), t;
          }
          function pe(i, r, a) {
            if (a === !1 || (j(a) && a[r] === !1)) return !1;
            var e = yt.getAnimateCfg(i, r);
            return a && a[r] ? z({}, e, a[r]) : e;
          }
          function ql(i, r, a) {
            var e,
              t,
              n = [],
              s = [];
            C(r, function(o) {
              var l = i[o._id];
              l ? (o.set('cacheShape', l), n.push(o), delete i[o._id]) : s.push(o);
            }),
              C(i, function(o) {
                var l = o.className,
                  u = o.coord,
                  c = o._id,
                  f = o.attrs,
                  h = o.index,
                  v = o.type;
                if (((t = pe(l, 'leave', o.animateCfg)), t === !1)) return !0;
                if (((e = jt(l, u, 'leave', t.animation)), F(e))) {
                  var g = a.addShape(v, { attrs: f, index: h, canvas: a, className: l });
                  (g._id = c), e(g, t, u);
                }
              }),
              C(n, function(o) {
                var l = o.get('className');
                if (((t = pe(l, 'update', o.get('animateCfg'))), t === !1)) return !0;
                var u = o.get('coord'),
                  c = o.get('cacheShape').attrs,
                  f = Ul(c, o._attrs.attrs);
                Object.keys(f).length &&
                  ((e = jt(l, u, 'update', t.animation)),
                  F(e)
                    ? e(o, t, u)
                    : (o.attr(c),
                      o
                        .animate()
                        .to({ attrs: f, duration: t.duration, easing: t.easing, delay: t.delay })
                        .onEnd(function() {
                          o.set('cacheShape', null);
                        })));
              }),
              C(s, function(o) {
                var l = o.get('className'),
                  u = o.get('coord');
                if (((t = pe(l, 'enter', o.get('animateCfg'))), t === !1)) return !0;
                if (((e = jt(l, u, 'enter', t.animation)), F(e)))
                  if (l === 'interval' && u.isPolar && u.transposed) {
                    var c = o.get('index'),
                      f = n[c - 1];
                    e(o, t, f);
                  } else e(o, t, u);
              });
          }
          function ir(i, r) {
            if (!i) return null;
            var a = r.get('animate');
            return (
              i.indexOf('guide-tag') > -1 && (i = 'guide-tag'), j(a) ? a[i] : a === !1 ? !1 : null
            );
          }
          function gi() {
            (ge = new Sl()), ge.play();
          }
          function pi(i) {
            if (i.get('animate') === !1) return;
            var r = i.get('isUpdate'),
              a = i.get('canvas'),
              e = i.get('coord'),
              t = i.get('geoms'),
              n = a.get('caches') || [];
            n.length === 0 && (r = !1);
            var s = Vl(t, i, e),
              o = i.get('axisController'),
              l = o.frontPlot,
              u = o.backPlot,
              c = l.get('children').concat(u.get('children')),
              f = [];
            i.get('guideController') && (f = i.get('guideController').guideShapes);
            var h = [];
            if (
              (c.concat(f).forEach(function(p) {
                var m = p.get('className'),
                  d = ir(m, i);
                p.set('coord', e), p.set('animateCfg', d), h.push(p), s.push(p);
              }),
              a.set('caches', Wl(s)),
              r)
            )
              ql(n, s, a);
            else {
              var v, g;
              C(t, function(p) {
                var m = p.get('type'),
                  d = w(p.get('animateCfg')) ? ir(m, i) : p.get('animateCfg');
                if (d !== !1) {
                  if (((v = pe(m, 'appear', d)), (g = jt(m, e, 'appear', v.animation)), F(g))) {
                    var y = p.get('shapes');
                    C(y, function(b) {
                      g(b, v, e);
                    });
                  } else if (vi[m]) {
                    g = Hl[v.animation] || vi[m](e);
                    var x = p.getYScale(),
                      S = e.convertPoint({ x: 0, y: x.scale(p.getYMinValue()) }),
                      P = p.get('container');
                    g && g(P, v, e, S);
                  }
                }
              }),
                C(h, function(p) {
                  var m = p.get('animateCfg'),
                    d = p.get('className');
                  if (m && m.appear) {
                    var y = yt.getAnimateCfg(d, 'appear'),
                      x = z({}, y, m.appear),
                      S = jt(d, e, 'appear', x.animation);
                    F(S) && S(p, x, e);
                  }
                });
            }
          }
          function di() {
            ge.stop();
          }
          var $l = { afterCanvasInit: gi, beforeCanvasDraw: pi, afterCanvasDestroyed: di },
            Zl = Object.freeze({
              __proto__: null,
              afterCanvasInit: gi,
              beforeCanvasDraw: pi,
              afterCanvasDestroyed: di,
              default: $l,
            });
          (H._Interactions = {}),
            (H.registerInteraction = function(i, r) {
              H._Interactions[i] = r;
            }),
            (H.getInteraction = function(i) {
              return H._Interactions[i];
            }),
            (H.prototype.interaction = function(i, r) {
              var a = this._interactions || {};
              a[i] && a[i].destroy();
              var e = H.getInteraction(i),
                t = new e(r, this);
              return (a[i] = t), (this._interactions = a), this;
            }),
            (H.prototype.clearInteraction = function(i) {
              var r = this._interactions;
              return r
                ? (i
                    ? (r[i] && r[i].destroy(), delete r[i])
                    : C(r, function(a, e) {
                        a.destroy(), delete r[e];
                      }),
                  this)
                : void 0;
            });
          function Jl(i, r) {
            if (i.length !== r.length) return !1;
            var a = i.length - 1;
            return i[0] === r[0] && i[a] === r[a];
          }
          var nr = [0, 1],
            Kl = (function() {
              function i(a) {
                var e = this;
                N(this, 'chart', null),
                  N(this, 'values', null),
                  N(this, 'range', nr),
                  N(this, 'startRange', nr),
                  N(this, 'minCount', 10),
                  N(this, '_afterinit', function() {
                    var t = e.getPinchScale(),
                      n = [].concat(t.values);
                    (e.values = n),
                      e.minScale || (e.minScale = e.minCount / n.length),
                      e.range !== nr && (e.updateRange(e.range), e.updateTicks());
                  }),
                  N(this, '_afterdatachange', function() {
                    e.updateRange(e.range);
                  }),
                  (this.chart = a),
                  this._initEvent(a);
              }
              var r = i.prototype;
              return (
                (r._initEvent = function(e) {
                  e.on(Te, this._afterinit), e.on(Ft, this._afterdatachange);
                }),
                (r.getPinchScale = function() {
                  var e = this.chart,
                    t = e.getXScale();
                  return t;
                }),
                (r.getFollowScale = function() {
                  var e = this.chart,
                    t = e.getYScales() || [];
                  return t[0];
                }),
                (r.start = function() {
                  var e = this.range,
                    t = this.getPinchScale(),
                    n = e[0],
                    s = e[1];
                  (this.startRange = [n, s]), (this.lastTickCount = t.tickCount);
                }),
                (r.doZoom = function(e, t, n) {
                  var s = this.startRange,
                    o = this.minScale,
                    l = s[0],
                    u = s[1],
                    c = 1 - n,
                    f = u - l,
                    h = f * c,
                    v = h * e,
                    g = h * t,
                    p = Math.max(0, l - v),
                    m = Math.min(1, u + g),
                    d = [p, m];
                  if (m - p < o) return;
                  this.updateRange(d);
                }),
                (r.doMove = function(e) {
                  if (!e) return;
                  var t = this.startRange,
                    n = t[0],
                    s = t[1],
                    o = s - n,
                    l = o * e,
                    u = n - l,
                    c = s - l,
                    f;
                  u < 0 ? (f = [0, o]) : c > 1 ? (f = [1 - o, 1]) : (f = [u, c]),
                    this.updateRange(f);
                }),
                (r.updateRange = function(e) {
                  var t = this.values,
                    n = e[0],
                    s = e[1];
                  (n = Math.max(0, n)), (s = Math.min(1, s)), (this.range = [n, s]);
                  var o = t.length,
                    l = n * o,
                    u = s * o,
                    c = t.slice(l, u);
                  this.repaint(c);
                }),
                (r.repaint = function(e) {
                  var t = this.chart,
                    n = this.getPinchScale(),
                    s = n.values,
                    o = n.ticks;
                  if (Jl(s, e)) return;
                  this.updateScale(n, { ticks: o, values: e }),
                    this.updateFollowScale(n, e),
                    t.repaint();
                }),
                (r.updateFollowScale = function(e, t) {
                  var n = this.chart,
                    s = this.getFollowScale(),
                    o = e.field,
                    l = e.type,
                    u = s.field,
                    c = [],
                    f = {};
                  t.forEach(function(m) {
                    f[m] = !0;
                  });
                  var h = n.get('data');
                  h.forEach(function(m) {
                    if (l === 'timeCat') {
                      var d = Yt(m[o]);
                      f[d] && c.push(m[u]);
                    }
                  });
                  var v = Ce(c),
                    g = v.min,
                    p = v.max;
                  this.updateScale(s, { min: g, max: p, nice: !0 });
                }),
                (r.updateScale = function(e, t) {
                  if (!e) return;
                  e.change(t);
                }),
                (r.updateTicks = function() {
                  var e = this.chart,
                    t = this.values,
                    n = this.getPinchScale(),
                    s = n.values,
                    o = n.tickCount,
                    l = Math.round((o * t.length) / s.length),
                    u = Nr('cat'),
                    c = u({ tickCount: l, values: t });
                  this.updateScale(n, { ticks: c, values: s }), e.repaint();
                }),
                (r.destroy = function() {
                  var e = this.chart;
                  e.off(Te, this._afterinit), e.off(Ft, this._afterdatachange);
                }),
                i
              );
            })(),
            mi = (function() {
              var i = r.prototype;
              (i.getDefaultCfg = function() {
                return {};
              }),
                (i.getInteractionContext = function(e) {
                  var t = e.get('interactionContext');
                  return t || ((t = new Kl(e)), e.set('interactionContext', t), t);
                });
              function r(a, e) {
                var t = this;
                N(this, 'type', ''),
                  N(this, 'startEvent', 'touchstart'),
                  N(this, 'processEvent', 'touchmove'),
                  N(this, 'endEvent', 'touchend'),
                  N(this, 'resetEvent', null),
                  N(this, 'context', null),
                  N(this, '_start', function(s) {
                    t.preStart && t.preStart(s), t.start(s), t.onStart && t.onStart(s);
                  }),
                  N(this, '_process', function(s) {
                    t.preProcess && t.preProcess(s), t.process(s), t.onProcess && t.onProcess(s);
                  }),
                  N(this, '_end', function(s) {
                    t.preEnd && t.preEnd(s), t.end(s), t.onEnd && t.onEnd(s);
                  }),
                  N(this, '_reset', function(s) {
                    t.preReset && t.preReset(s), t.reset(s), t.onReset && t.onReset(s);
                  }),
                  _(this, this.getDefaultCfg(), a),
                  (this.context = this.getInteractionContext(e)),
                  (this.chart = e);
                var n = this.range;
                n && (this.context.range = n), this._bindEvents(e);
              }
              return (
                (i._bindEvents = function(e) {
                  var t = this.startEvent,
                    n = this.processEvent,
                    s = this.endEvent,
                    o = this.resetEvent,
                    l = e.get('canvas');
                  l.on(t, this._start),
                    l.on(n, this._process),
                    l.on(s, this._end),
                    l.on(o, this._reset);
                }),
                (i._clearEvents = function() {
                  var e = this.chart,
                    t = this.startEvent,
                    n = this.processEvent,
                    s = this.endEvent,
                    o = this.resetEvent,
                    l = e.get('canvas');
                  l.off(t, this._start),
                    l.off(n, this._process),
                    l.off(s, this._end),
                    l.off(o, this._start);
                }),
                (i.start = function() {}),
                (i.process = function() {}),
                (i.end = function() {}),
                (i.reset = function() {}),
                (i.destroy = function() {
                  this.context.destroy(), this._clearEvents();
                }),
                r
              );
            })(),
            Ql = (function(i) {
              E(r, i);
              function r() {
                return i.apply(this, arguments) || this;
              }
              var a = r.prototype;
              return (
                (a.getDefaultCfg = function() {
                  return {
                    type: 'pan',
                    startEvent: 'panstart',
                    processEvent: 'pan',
                    endEvent: 'panend',
                  };
                }),
                (a.start = function() {
                  var t = this.context;
                  t.start();
                }),
                (a.process = function(t) {
                  var n = t.direction,
                    s = t.deltaX;
                  if (n === 'up' || n === 'down') return;
                  t.preventDefault && t.preventDefault();
                  var o = this.context,
                    l = o.chart,
                    u = l.get('coord'),
                    c = u.start,
                    f = u.end,
                    h = f.x - c.x,
                    v = s / h;
                  o.doMove(v);
                }),
                r
              );
            })(mi),
            tu = (function(i) {
              E(a, i);
              var r = a.prototype;
              r.getDefaultCfg = function() {
                return {
                  type: 'pinch',
                  startEvent: 'pinchstart',
                  processEvent: 'pinch',
                  endEvent: 'pinchend',
                };
              };
              function a(e, t) {
                var n;
                n = i.call(this, e, t) || this;
                var s = Jt(n),
                  o = s.context;
                return _(o, e), n;
              }
              return (
                (r.start = function() {
                  var t = this.context;
                  t.start();
                }),
                (r.process = function(t) {
                  t.preventDefault && t.preventDefault();
                  var n = t.zoom,
                    s = t.center,
                    o = this.context,
                    l = o.chart,
                    u = l.get('coord'),
                    c = u.start,
                    f = u.end,
                    h = f.x - c.x,
                    v = Math.abs(s.x - c.x),
                    g = Math.abs(f.x - s.x),
                    p = v / h,
                    m = g / h;
                  o.doZoom(p, m, n);
                }),
                (r.end = function() {
                  var t = this.context;
                  t.updateTicks();
                }),
                a
              );
            })(mi);
          H.registerInteraction('pan', Ql), H.registerInteraction('pinch', tu);
          var yi = { Marker: Ke };
          H.plugins.register([vl, _l, dl, Zl]);
          var eu = {
            Component: yi,
            Global: D,
            Chart: H,
            Shape: Y,
            G: Ta,
            Util: Tr,
            Helper: Da,
            track: Aa,
            Animate: yt,
          };
          (J.Animate = yt),
            (J.Chart = H),
            (J.Component = yi),
            (J.G = Ta),
            (J.Global = D),
            (J.Helper = Da),
            (J.Shape = Y),
            (J.Util = Tr),
            (J.default = eu),
            (J.track = Aa),
            Object.defineProperty(J, '__esModule', { value: !0 });
        });
      }.call(this, Pi('yLpj')));
    },
  },
]);

//# sourceMappingURL=0.js.map
