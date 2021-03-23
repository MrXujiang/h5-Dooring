(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    308: function(t, e, n) {
      'use strict';
      n.d(e, 'd', function() {
        return i;
      }),
        n.d(e, 'a', function() {
          return s;
        }),
        n.d(e, 'i', function() {
          return a;
        }),
        n.d(e, 'f', function() {
          return u;
        }),
        n.d(e, 'g', function() {
          return l;
        }),
        n.d(e, 'h', function() {
          return c;
        }),
        n.d(e, 'b', function() {
          return p;
        }),
        n.d(e, 'e', function() {
          return f;
        }),
        n.d(e, 'k', function() {
          return h;
        }),
        n.d(e, 'l', function() {
          return d;
        }),
        n.d(e, 'c', function() {
          return v;
        }),
        n.d(e, 'j', function() {
          return m;
        });
      n(23), n(93), n(170), n(96), n(172), n(65), n(43), n(309), n(66), n(310), n(95);
      var i = /#.*$/,
        r = /\.(md|html)$/,
        s = /\/$/,
        a = /^[a-z]+:/i;
      function o(t) {
        return decodeURI(t)
          .replace(i, '')
          .replace(r, '');
      }
      function u(t) {
        return a.test(t);
      }
      function l(t) {
        return /^mailto:/.test(t);
      }
      function c(t) {
        return /^tel:/.test(t);
      }
      function p(t) {
        if (u(t)) return t;
        var e = t.match(i),
          n = e ? e[0] : '',
          r = o(t);
        return s.test(r) ? t : r + '.html' + n;
      }
      function f(t, e) {
        var n = decodeURIComponent(t.hash),
          r = (function(t) {
            var e = t.match(i);
            if (e) return e[0];
          })(e);
        return (!r || n === r) && o(t.path) === o(e);
      }
      function h(t, e, n) {
        if (u(e)) return { type: 'external', path: e };
        n &&
          (e = (function(t, e, n) {
            var i = t.charAt(0);
            if ('/' === i) return t;
            if ('?' === i || '#' === i) return e + t;
            var r = e.split('/');
            (n && r[r.length - 1]) || r.pop();
            for (var s = t.replace(/^\//, '').split('/'), a = 0; a < s.length; a++) {
              var o = s[a];
              '..' === o ? r.pop() : '.' !== o && r.push(o);
            }
            '' !== r[0] && r.unshift('');
            return r.join('/');
          })(e, n));
        for (var i = o(e), r = 0; r < t.length; r++)
          if (o(t[r].regularPath) === i)
            return Object.assign({}, t[r], { type: 'page', path: p(t[r].path) });
        return (
          console.error('[vuepress] No matching page found for sidebar item "'.concat(e, '"')), {}
        );
      }
      function d(t, e, n, i) {
        var r = n.pages,
          s = n.themeConfig,
          a = (i && s.locales && s.locales[i]) || s;
        if ('auto' === (t.frontmatter.sidebar || a.sidebar || s.sidebar)) return g(t);
        var o = a.sidebar || s.sidebar;
        if (o) {
          var u = (function(t, e) {
              if (Array.isArray(e)) return { base: '/', config: e };
              for (var n in e)
                if (0 === ((i = t), /(\.html|\/)$/.test(i) ? i : i + '/').indexOf(encodeURI(n)))
                  return { base: n, config: e[n] };
              var i;
              return {};
            })(e, o),
            l = u.base,
            c = u.config;
          return 'auto' === c
            ? g(t)
            : c
            ? c.map(function(t) {
                return (function t(e, n, i) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                  if ('string' == typeof e) return h(n, e, i);
                  if (Array.isArray(e)) return Object.assign(h(n, e[0], i), { title: e[1] });
                  var s = e.children || [];
                  return 0 === s.length && e.path
                    ? Object.assign(h(n, e.path, i), { title: e.title })
                    : {
                        type: 'group',
                        path: e.path,
                        title: e.title,
                        sidebarDepth: e.sidebarDepth,
                        initialOpenGroupIndex: e.initialOpenGroupIndex,
                        children: s.map(function(e) {
                          return t(e, n, i, r + 1);
                        }),
                        collapsable: !1 !== e.collapsable,
                      };
                })(t, r, l);
              })
            : [];
        }
        return [];
      }
      function g(t) {
        var e = v(t.headers || []);
        return [
          {
            type: 'group',
            collapsable: !1,
            title: t.title,
            path: null,
            children: e.map(function(e) {
              return {
                type: 'auto',
                title: e.title,
                basePath: t.path,
                path: t.path + '#' + e.slug,
                children: e.children || [],
              };
            }),
          },
        ];
      }
      function v(t) {
        var e;
        return (
          (t = t.map(function(t) {
            return Object.assign({}, t);
          })).forEach(function(t) {
            2 === t.level ? (e = t) : e && (e.children || (e.children = [])).push(t);
          }),
          t.filter(function(t) {
            return 2 === t.level;
          })
        );
      }
      function m(t) {
        return Object.assign(t, { type: t.items && t.items.length ? 'links' : 'link' });
      }
    },
    309: function(t, e, n) {
      'use strict';
      var i = n(167),
        r = n(5),
        s = n(13),
        a = n(22),
        o = n(168),
        u = n(169);
      i('match', 1, function(t, e, n) {
        return [
          function(e) {
            var n = a(this),
              i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n));
          },
          function(t) {
            var i = n(e, t, this);
            if (i.done) return i.value;
            var a = r(t),
              l = String(this);
            if (!a.global) return u(a, l);
            var c = a.unicode;
            a.lastIndex = 0;
            for (var p, f = [], h = 0; null !== (p = u(a, l)); ) {
              var d = String(p[0]);
              (f[h] = d), '' === d && (a.lastIndex = o(l, s(a.lastIndex), c)), h++;
            }
            return 0 === h ? null : f;
          },
        ];
      });
    },
    310: function(t, e, n) {
      'use strict';
      var i = n(167),
        r = n(171),
        s = n(5),
        a = n(22),
        o = n(97),
        u = n(168),
        l = n(13),
        c = n(169),
        p = n(67),
        f = n(1),
        h = [].push,
        d = Math.min,
        g = !f(function() {
          return !RegExp(4294967295, 'y');
        });
      i(
        'split',
        2,
        function(t, e, n) {
          var i;
          return (
            (i =
              'c' == 'abbc'.split(/(b)*/)[1] ||
              4 != 'test'.split(/(?:)/, -1).length ||
              2 != 'ab'.split(/(?:ab)*/).length ||
              4 != '.'.split(/(.?)(.?)/).length ||
              '.'.split(/()()/).length > 1 ||
              ''.split(/.?/).length
                ? function(t, n) {
                    var i = String(a(this)),
                      s = void 0 === n ? 4294967295 : n >>> 0;
                    if (0 === s) return [];
                    if (void 0 === t) return [i];
                    if (!r(t)) return e.call(i, t, s);
                    for (
                      var o,
                        u,
                        l,
                        c = [],
                        f =
                          (t.ignoreCase ? 'i' : '') +
                          (t.multiline ? 'm' : '') +
                          (t.unicode ? 'u' : '') +
                          (t.sticky ? 'y' : ''),
                        d = 0,
                        g = new RegExp(t.source, f + 'g');
                      (o = p.call(g, i)) &&
                      !(
                        (u = g.lastIndex) > d &&
                        (c.push(i.slice(d, o.index)),
                        o.length > 1 && o.index < i.length && h.apply(c, o.slice(1)),
                        (l = o[0].length),
                        (d = u),
                        c.length >= s)
                      );

                    )
                      g.lastIndex === o.index && g.lastIndex++;
                    return (
                      d === i.length ? (!l && g.test('')) || c.push('') : c.push(i.slice(d)),
                      c.length > s ? c.slice(0, s) : c
                    );
                  }
                : '0'.split(void 0, 0).length
                ? function(t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                  }
                : e),
            [
              function(e, n) {
                var r = a(this),
                  s = null == e ? void 0 : e[t];
                return void 0 !== s ? s.call(e, r, n) : i.call(String(r), e, n);
              },
              function(t, r) {
                var a = n(i, t, this, r, i !== e);
                if (a.done) return a.value;
                var p = s(t),
                  f = String(this),
                  h = o(p, RegExp),
                  v = p.unicode,
                  m =
                    (p.ignoreCase ? 'i' : '') +
                    (p.multiline ? 'm' : '') +
                    (p.unicode ? 'u' : '') +
                    (g ? 'y' : 'g'),
                  b = new h(g ? p : '^(?:' + p.source + ')', m),
                  k = void 0 === r ? 4294967295 : r >>> 0;
                if (0 === k) return [];
                if (0 === f.length) return null === c(b, f) ? [f] : [];
                for (var x = 0, _ = 0, C = []; _ < f.length; ) {
                  b.lastIndex = g ? _ : 0;
                  var L,
                    y = c(b, g ? f : f.slice(_));
                  if (null === y || (L = d(l(b.lastIndex + (g ? 0 : _)), f.length)) === x)
                    _ = u(f, _, v);
                  else {
                    if ((C.push(f.slice(x, _)), C.length === k)) return C;
                    for (var $ = 1; $ <= y.length - 1; $++)
                      if ((C.push(y[$]), C.length === k)) return C;
                    _ = x = L;
                  }
                }
                return C.push(f.slice(x)), C;
              },
            ]
          );
        },
        !g,
      );
    },
    311: function(t, e, n) {
      'use strict';
      n(166), n(94), n(313);
      var i = n(308),
        r = {
          name: 'NavLink',
          props: { item: { required: !0 } },
          computed: {
            link: function() {
              return Object(i.b)(this.item.link);
            },
            exact: function() {
              var t = this;
              return this.$site.locales
                ? Object.keys(this.$site.locales).some(function(e) {
                    return e === t.link;
                  })
                : '/' === this.link;
            },
            isNonHttpURI: function() {
              return Object(i.g)(this.link) || Object(i.h)(this.link);
            },
            isBlankTarget: function() {
              return '_blank' === this.target;
            },
            isInternal: function() {
              return !Object(i.f)(this.link) && !this.isBlankTarget;
            },
            target: function() {
              return this.isNonHttpURI
                ? null
                : this.item.target
                ? this.item.target
                : Object(i.f)(this.link)
                ? '_blank'
                : '';
            },
            rel: function() {
              return this.isNonHttpURI || !1 === this.item.rel
                ? null
                : this.item.rel
                ? this.item.rel
                : this.isBlankTarget
                ? 'noopener noreferrer'
                : null;
            },
          },
          methods: {
            focusoutAction: function() {
              this.$emit('focusout');
            },
          },
        },
        s = n(42),
        a = Object(s.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isInternal
              ? n(
                  'RouterLink',
                  {
                    staticClass: 'nav-link',
                    attrs: { to: t.link, exact: t.exact },
                    nativeOn: {
                      focusout: function(e) {
                        return t.focusoutAction(e);
                      },
                    },
                  },
                  [t._v('\n  ' + t._s(t.item.text) + '\n')],
                )
              : n(
                  'a',
                  {
                    staticClass: 'nav-link external',
                    attrs: { href: t.link, target: t.target, rel: t.rel },
                    on: { focusout: t.focusoutAction },
                  },
                  [
                    t._v('\n  ' + t._s(t.item.text) + '\n  '),
                    t.isBlankTarget ? n('OutboundLink') : t._e(),
                  ],
                  1,
                );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = a.exports;
    },
    312: function(t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
    },
    313: function(t, e, n) {
      'use strict';
      var i = n(0),
        r = n(314);
      i(
        { target: 'String', proto: !0, forced: n(315)('link') },
        {
          link: function(t) {
            return r(this, 'a', 'href', t);
          },
        },
      );
    },
    314: function(t, e, n) {
      var i = n(22),
        r = /"/g;
      t.exports = function(t, e, n, s) {
        var a = String(i(t)),
          o = '<' + e;
        return (
          '' !== n && (o += ' ' + n + '="' + String(s).replace(r, '&quot;') + '"'),
          o + '>' + a + '</' + e + '>'
        );
      };
    },
    315: function(t, e, n) {
      var i = n(1);
      t.exports = function(t) {
        return i(function() {
          var e = ''[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    316: function(t, e, n) {
      var i = n(22),
        r = '[' + n(312) + ']',
        s = RegExp('^' + r + r + '*'),
        a = RegExp(r + r + '*$'),
        o = function(t) {
          return function(e) {
            var n = String(i(e));
            return 1 & t && (n = n.replace(s, '')), 2 & t && (n = n.replace(a, '')), n;
          };
        };
      t.exports = { start: o(1), end: o(2), trim: o(3) };
    },
    317: function(t, e, n) {
      'use strict';
      var i = n(0),
        r = n(316).trim;
      i(
        { target: 'String', proto: !0, forced: n(341)('trim') },
        {
          trim: function() {
            return r(this);
          },
        },
      );
    },
    318: function(t, e, n) {
      var i = n(6),
        r = n(3),
        s = n(100),
        a = n(342),
        o = n(8).f,
        u = n(68).f,
        l = n(171),
        c = n(104),
        p = n(175),
        f = n(10),
        h = n(1),
        d = n(28).set,
        g = n(173),
        v = n(2)('match'),
        m = r.RegExp,
        b = m.prototype,
        k = /a/g,
        x = /a/g,
        _ = new m(k) !== k,
        C = p.UNSUPPORTED_Y;
      if (
        i &&
        s(
          'RegExp',
          !_ ||
            C ||
            h(function() {
              return (x[v] = !1), m(k) != k || m(x) == x || '/a/i' != m(k, 'i');
            }),
        )
      ) {
        for (
          var L = function(t, e) {
              var n,
                i = this instanceof L,
                r = l(t),
                s = void 0 === e;
              if (!i && r && t.constructor === L && s) return t;
              _
                ? r && !s && (t = t.source)
                : t instanceof L && (s && (e = c.call(t)), (t = t.source)),
                C && (n = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, ''));
              var o = a(_ ? new m(t, e) : m(t, e), i ? this : b, L);
              return C && n && d(o, { sticky: n }), o;
            },
            y = function(t) {
              (t in L) ||
                o(L, t, {
                  configurable: !0,
                  get: function() {
                    return m[t];
                  },
                  set: function(e) {
                    m[t] = e;
                  },
                });
            },
            $ = u(m),
            w = 0;
          $.length > w;

        )
          y($[w++]);
        (b.constructor = L), (L.prototype = b), f(r, 'RegExp', L);
      }
      g('RegExp');
    },
    319: function(t, e, n) {},
    320: function(t, e, n) {},
    321: function(t, e, n) {},
    322: function(t, e, n) {},
    323: function(t, e, n) {},
    324: function(t, e, n) {},
    325: function(t, e) {
      t.exports = function(t) {
        return null == t;
      };
    },
    326: function(t, e, n) {},
    327: function(t, e, n) {},
    328: function(t, e, n) {},
    329: function(t, e, n) {},
    330: function(t, e, n) {},
    331: function(t, e, n) {},
    336: function(t, e, n) {
      'use strict';
      n.r(e);
      n(166);
      var i = n(308),
        r = {
          name: 'SidebarGroup',
          components: { DropdownTransition: n(338).a },
          props: ['item', 'open', 'collapsable', 'depth'],
          beforeCreate: function() {
            this.$options.components.SidebarLinks = n(336).default;
          },
          methods: { isActive: i.e },
        },
        s = (n(354), n(42)),
        a = Object(s.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'section',
              {
                staticClass: 'sidebar-group',
                class: [
                  { collapsable: t.collapsable, 'is-sub-group': 0 !== t.depth },
                  'depth-' + t.depth,
                ],
              },
              [
                t.item.path
                  ? n(
                      'RouterLink',
                      {
                        staticClass: 'sidebar-heading clickable',
                        class: { open: t.open, active: t.isActive(t.$route, t.item.path) },
                        attrs: { to: t.item.path },
                        nativeOn: {
                          click: function(e) {
                            return t.$emit('toggle');
                          },
                        },
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable
                          ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })
                          : t._e(),
                      ],
                    )
                  : n(
                      'p',
                      {
                        staticClass: 'sidebar-heading',
                        class: { open: t.open },
                        on: {
                          click: function(e) {
                            return t.$emit('toggle');
                          },
                        },
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable
                          ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })
                          : t._e(),
                      ],
                    ),
                t._v(' '),
                n(
                  'DropdownTransition',
                  [
                    t.open || !t.collapsable
                      ? n('SidebarLinks', {
                          staticClass: 'sidebar-group-items',
                          attrs: {
                            items: t.item.children,
                            'sidebar-depth': t.item.sidebarDepth,
                            'initial-open-group-index': t.item.initialOpenGroupIndex,
                            depth: t.depth + 1,
                          },
                        })
                      : t._e(),
                  ],
                  1,
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
      n(355), n(65);
      function o(t, e, n, i, r) {
        var s = {
          props: { to: e, activeClass: '', exactActiveClass: '' },
          class: { active: i, 'sidebar-link': !0 },
        };
        return r > 2 && (s.style = { 'padding-left': r + 'rem' }), t('RouterLink', s, n);
      }
      function u(t, e, n, r, s) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        return !e || a > s
          ? null
          : t(
              'ul',
              { class: 'sidebar-sub-headers' },
              e.map(function(e) {
                var l = Object(i.e)(r, n + '#' + e.slug);
                return t('li', { class: 'sidebar-sub-header' }, [
                  o(t, n + '#' + e.slug, e.title, l, e.level - 1),
                  u(t, e.children, n, r, s, a + 1),
                ]);
              }),
            );
      }
      var l = {
        functional: !0,
        props: ['item', 'sidebarDepth'],
        render: function(t, e) {
          var n = e.parent,
            r = n.$page,
            s = (n.$site, n.$route),
            a = n.$themeConfig,
            l = n.$themeLocaleConfig,
            c = e.props,
            p = c.item,
            f = c.sidebarDepth,
            h = Object(i.e)(s, p.path),
            d =
              'auto' === p.type
                ? h ||
                  p.children.some(function(t) {
                    return Object(i.e)(s, p.basePath + '#' + t.slug);
                  })
                : h,
            g =
              'external' === p.type
                ? (function(t, e, n) {
                    return t(
                      'a',
                      {
                        attrs: { href: e, target: '_blank', rel: 'noopener noreferrer' },
                        class: { 'sidebar-link': !0 },
                      },
                      [n, t('OutboundLink')],
                    );
                  })(t, p.path, p.title || p.path)
                : o(t, p.path, p.title || p.path, d),
            v = [r.frontmatter.sidebarDepth, f, l.sidebarDepth, a.sidebarDepth, 1].find(function(
              t,
            ) {
              return void 0 !== t;
            }),
            m = l.displayAllHeaders || a.displayAllHeaders;
          return 'auto' === p.type
            ? [g, u(t, p.children, p.basePath, s, v)]
            : (d || m) && p.headers && !i.d.test(p.path)
            ? [g, u(t, Object(i.c)(p.headers), p.path, s, v)]
            : g;
        },
      };
      n(356);
      function c(t, e) {
        return (
          'group' === e.type &&
          e.children.some(function(e) {
            return 'group' === e.type ? c(t, e) : 'page' === e.type && Object(i.e)(t, e.path);
          })
        );
      }
      var p = {
          name: 'SidebarLinks',
          components: {
            SidebarGroup: a,
            SidebarLink: Object(s.a)(l, void 0, void 0, !1, null, null, null).exports,
          },
          props: ['items', 'depth', 'sidebarDepth', 'initialOpenGroupIndex'],
          data: function() {
            return { openGroupIndex: this.initialOpenGroupIndex || 0 };
          },
          watch: {
            $route: function() {
              this.refreshIndex();
            },
          },
          created: function() {
            this.refreshIndex();
          },
          methods: {
            refreshIndex: function() {
              var t = (function(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  if (c(t, i)) return n;
                }
                return -1;
              })(this.$route, this.items);
              t > -1 && (this.openGroupIndex = t);
            },
            toggleGroup: function(t) {
              this.openGroupIndex = t === this.openGroupIndex ? -1 : t;
            },
            isActive: function(t) {
              return Object(i.e)(this.$route, t.regularPath);
            },
          },
        },
        f = Object(s.a)(
          p,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.items.length
              ? n(
                  'ul',
                  { staticClass: 'sidebar-links' },
                  t._l(t.items, function(e, i) {
                    return n(
                      'li',
                      { key: i },
                      [
                        'group' === e.type
                          ? n('SidebarGroup', {
                              attrs: {
                                item: e,
                                open: i === t.openGroupIndex,
                                collapsable: e.collapsable || e.collapsible,
                                depth: t.depth,
                              },
                              on: {
                                toggle: function(e) {
                                  return t.toggleGroup(i);
                                },
                              },
                            })
                          : n('SidebarLink', {
                              attrs: { 'sidebar-depth': t.sidebarDepth, item: e },
                            }),
                      ],
                      1,
                    );
                  }),
                  0,
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = f.exports;
    },
    337: function(t, e, n) {
      'use strict';
      n(177), n(65), n(166), n(94), n(318), n(43), n(98), n(309), n(66);
      var i = n(40),
        r = n(311),
        s = n(338),
        a = n(179),
        o = n.n(a),
        u = {
          name: 'DropdownLink',
          components: { NavLink: r.a, DropdownTransition: s.a },
          props: { item: { required: !0 } },
          data: function() {
            return { open: !1 };
          },
          computed: {
            dropdownAriaLabel: function() {
              return this.item.ariaLabel || this.item.text;
            },
          },
          watch: {
            $route: function() {
              this.open = !1;
            },
          },
          methods: {
            setOpen: function(t) {
              this.open = t;
            },
            isLastItemOfArray: function(t, e) {
              return o()(e) === t;
            },
            handleDropdown: function() {
              0 === event.detail && this.setOpen(!this.open);
            },
          },
        },
        l = (n(347), n(42)),
        c = Object(l.a)(
          u,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'dropdown-wrapper', class: { open: t.open } },
              [
                n(
                  'button',
                  {
                    staticClass: 'dropdown-title',
                    attrs: { type: 'button', 'aria-label': t.dropdownAriaLabel },
                    on: { click: t.handleDropdown },
                  },
                  [
                    n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]),
                    t._v(' '),
                    n('span', { staticClass: 'arrow down' }),
                  ],
                ),
                t._v(' '),
                n(
                  'button',
                  {
                    staticClass: 'mobile-dropdown-title',
                    attrs: { type: 'button', 'aria-label': t.dropdownAriaLabel },
                    on: {
                      click: function(e) {
                        return t.setOpen(!t.open);
                      },
                    },
                  },
                  [
                    n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]),
                    t._v(' '),
                    n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' }),
                  ],
                ),
                t._v(' '),
                n('DropdownTransition', [
                  n(
                    'ul',
                    {
                      directives: [
                        { name: 'show', rawName: 'v-show', value: t.open, expression: 'open' },
                      ],
                      staticClass: 'nav-dropdown',
                    },
                    t._l(t.item.items, function(e, i) {
                      return n(
                        'li',
                        { key: e.link || i, staticClass: 'dropdown-item' },
                        [
                          'links' === e.type
                            ? n('h4', [t._v('\n          ' + t._s(e.text) + '\n        ')])
                            : t._e(),
                          t._v(' '),
                          'links' === e.type
                            ? n(
                                'ul',
                                { staticClass: 'dropdown-subitem-wrapper' },
                                t._l(e.items, function(i) {
                                  return n(
                                    'li',
                                    { key: i.link, staticClass: 'dropdown-subitem' },
                                    [
                                      n('NavLink', {
                                        attrs: { item: i },
                                        on: {
                                          focusout: function(n) {
                                            t.isLastItemOfArray(i, e.items) &&
                                              t.isLastItemOfArray(e, t.item.items) &&
                                              t.setOpen(!1);
                                          },
                                        },
                                      }),
                                    ],
                                    1,
                                  );
                                }),
                                0,
                              )
                            : n('NavLink', {
                                attrs: { item: e },
                                on: {
                                  focusout: function(n) {
                                    t.isLastItemOfArray(e, t.item.items) && t.setOpen(!1);
                                  },
                                },
                              }),
                        ],
                        1,
                      );
                    }),
                    0,
                  ),
                ]),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports,
        p = n(308),
        f = {
          name: 'NavLinks',
          components: { NavLink: r.a, DropdownLink: c },
          computed: {
            userNav: function() {
              return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
            },
            nav: function() {
              var t = this,
                e = this.$site.locales;
              if (e && Object.keys(e).length > 1) {
                var n = this.$page.path,
                  r = this.$router.options.routes,
                  s = this.$site.themeConfig.locales || {},
                  a = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
                    items: Object.keys(e).map(function(i) {
                      var a,
                        o = e[i],
                        u = (s[i] && s[i].label) || o.lang;
                      return (
                        o.lang === t.$lang
                          ? (a = n)
                          : ((a = n.replace(t.$localeConfig.path, i)),
                            r.some(function(t) {
                              return t.path === a;
                            }) || (a = i)),
                        { text: u, link: a }
                      );
                    }),
                  };
                return [].concat(Object(i.a)(this.userNav), [a]);
              }
              return this.userNav;
            },
            userLinks: function() {
              return (this.nav || []).map(function(t) {
                return Object.assign(Object(p.j)(t), { items: (t.items || []).map(p.j) });
              });
            },
            repoLink: function() {
              var t = this.$site.themeConfig.repo;
              return t ? (/^https?:/.test(t) ? t : 'https://github.com/'.concat(t)) : null;
            },
            repoLabel: function() {
              if (this.repoLink) {
                if (this.$site.themeConfig.repoLabel) return this.$site.themeConfig.repoLabel;
                for (
                  var t = this.repoLink.match(/^https?:\/\/[^/]+/)[0],
                    e = ['GitHub', 'GitLab', 'Bitbucket'],
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i = e[n];
                  if (new RegExp(i, 'i').test(t)) return i;
                }
                return 'Source';
              }
            },
          },
        },
        h =
          (n(348),
          Object(l.a)(
            f,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.userLinks.length || t.repoLink
                ? n(
                    'nav',
                    { staticClass: 'nav-links' },
                    [
                      t._l(t.userLinks, function(t) {
                        return n(
                          'div',
                          { key: t.link, staticClass: 'nav-item' },
                          [
                            'links' === t.type
                              ? n('DropdownLink', { attrs: { item: t } })
                              : n('NavLink', { attrs: { item: t } }),
                          ],
                          1,
                        );
                      }),
                      t._v(' '),
                      t.repoLink
                        ? n(
                            'a',
                            {
                              staticClass: 'repo-link',
                              attrs: {
                                href: t.repoLink,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              },
                            },
                            [t._v('\n    ' + t._s(t.repoLabel) + '\n    '), n('OutboundLink')],
                            1,
                          )
                        : t._e(),
                    ],
                    2,
                  )
                : t._e();
            },
            [],
            !1,
            null,
            null,
            null,
          ));
      e.a = h.exports;
    },
    338: function(t, e, n) {
      'use strict';
      var i = {
          name: 'DropdownTransition',
          methods: {
            setHeight: function(t) {
              t.style.height = t.scrollHeight + 'px';
            },
            unsetHeight: function(t) {
              t.style.height = '';
            },
          },
        },
        r = (n(346), n(42)),
        s = Object(r.a)(
          i,
          function() {
            var t = this.$createElement;
            return (this._self._c || t)(
              'transition',
              {
                attrs: { name: 'dropdown' },
                on: {
                  enter: this.setHeight,
                  'after-enter': this.unsetHeight,
                  'before-leave': this.setHeight,
                },
              },
              [this._t('default')],
              2,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = s.exports;
    },
    339: function(t, e, n) {
      var i = n(0),
        r = n(340);
      i({ global: !0, forced: parseInt != r }, { parseInt: r });
    },
    340: function(t, e, n) {
      var i = n(3),
        r = n(316).trim,
        s = n(312),
        a = i.parseInt,
        o = /^[+-]?0[Xx]/,
        u = 8 !== a(s + '08') || 22 !== a(s + '0x16');
      t.exports = u
        ? function(t, e) {
            var n = r(String(t));
            return a(n, e >>> 0 || (o.test(n) ? 16 : 10));
          }
        : a;
    },
    341: function(t, e, n) {
      var i = n(1),
        r = n(312);
      t.exports = function(t) {
        return i(function() {
          return !!r[t]() || '​᠎' != '​᠎'[t]() || r[t].name !== t;
        });
      };
    },
    342: function(t, e, n) {
      var i = n(4),
        r = n(101);
      t.exports = function(t, e, n) {
        var s, a;
        return (
          r &&
            'function' == typeof (s = e.constructor) &&
            s !== n &&
            i((a = s.prototype)) &&
            a !== n.prototype &&
            r(t, a),
          t
        );
      };
    },
    343: function(t, e, n) {
      'use strict';
      var i,
        r = n(0),
        s = n(24).f,
        a = n(13),
        o = n(102),
        u = n(22),
        l = n(103),
        c = n(19),
        p = ''.endsWith,
        f = Math.min,
        h = l('endsWith');
      r(
        {
          target: 'String',
          proto: !0,
          forced: !!(c || h || ((i = s(String.prototype, 'endsWith')), !i || i.writable)) && !h,
        },
        {
          endsWith: function(t) {
            var e = String(u(this));
            o(t);
            var n = arguments.length > 1 ? arguments[1] : void 0,
              i = a(e.length),
              r = void 0 === n ? i : f(a(n), i),
              s = String(t);
            return p ? p.call(e, s, r) : e.slice(r - s.length, r) === s;
          },
        },
      );
    },
    344: function(t, e, n) {
      'use strict';
      n(319);
    },
    345: function(t, e, n) {
      'use strict';
      n(320);
    },
    346: function(t, e, n) {
      'use strict';
      n(321);
    },
    347: function(t, e, n) {
      'use strict';
      n(322);
    },
    348: function(t, e, n) {
      'use strict';
      n(323);
    },
    349: function(t, e, n) {
      'use strict';
      n(324);
    },
    350: function(t, e, n) {
      'use strict';
      n(326);
    },
    351: function(t, e, n) {
      var i = n(30),
        r = n(14),
        s = n(25);
      t.exports = function(t) {
        return 'string' == typeof t || (!r(t) && s(t) && '[object String]' == i(t));
      };
    },
    352: function(t, e, n) {
      'use strict';
      n(327);
    },
    353: function(t, e, n) {
      'use strict';
      n(328);
    },
    354: function(t, e, n) {
      'use strict';
      n(329);
    },
    355: function(t, e, n) {
      'use strict';
      var i = n(0),
        r = n(29).find,
        s = n(99),
        a = n(17),
        o = !0,
        u = a('find');
      'find' in [] &&
        Array(1).find(function() {
          o = !1;
        }),
        i(
          { target: 'Array', proto: !0, forced: o || !u },
          {
            find: function(t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
        s('find');
    },
    356: function(t, e, n) {
      'use strict';
      n(330);
    },
    357: function(t, e, n) {
      'use strict';
      n(331);
    },
    374: function(t, e, n) {
      'use strict';
      n(339),
        n(23),
        n(174),
        n(170),
        n(96),
        n(43),
        n(176),
        n(309),
        n(317),
        n(172),
        n(65),
        n(166),
        n(318),
        n(98),
        n(343),
        n(66),
        n(310);
      var i = n(178),
        r = n.n(i),
        s = function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = r()(e, 'title', '');
          return (
            r()(e, 'frontmatter.tags') && (i += ' '.concat(e.frontmatter.tags.join(' '))),
            n && (i += ' '.concat(n)),
            a(t, i)
          );
        },
        a = function(t, e) {
          var n = function(t) {
              return t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
            },
            i = new RegExp('[^\0-]'),
            r = t
              .split(/\s+/g)
              .map(function(t) {
                return t.trim();
              })
              .filter(function(t) {
                return !!t;
              });
          if (i.test(t))
            return r.some(function(t) {
              return e.toLowerCase().indexOf(t) > -1;
            });
          var s = t.endsWith(' ');
          return new RegExp(
            r
              .map(function(t, e) {
                return r.length !== e + 1 || s
                  ? '(?=.*\\b'.concat(n(t), '\\b)')
                  : '(?=.*\\b'.concat(n(t), ')');
              })
              .join('') + '.+',
            'gi',
          ).test(e);
        },
        o = {
          name: 'SearchBox',
          data: function() {
            return { query: '', focused: !1, focusIndex: 0, placeholder: void 0 };
          },
          computed: {
            showSuggestions: function() {
              return this.focused && this.suggestions && this.suggestions.length;
            },
            suggestions: function() {
              var t = this.query.trim().toLowerCase();
              if (t) {
                for (
                  var e = this.$site.pages,
                    n = this.$site.themeConfig.searchMaxSuggestions || 5,
                    i = this.$localePath,
                    r = [],
                    a = 0;
                  a < e.length && !(r.length >= n);
                  a++
                ) {
                  var o = e[a];
                  if (this.getPageLocalePath(o) === i && this.isSearchable(o))
                    if (s(t, o)) r.push(o);
                    else if (o.headers)
                      for (var u = 0; u < o.headers.length && !(r.length >= n); u++) {
                        var l = o.headers[u];
                        l.title &&
                          s(t, o, l.title) &&
                          r.push(Object.assign({}, o, { path: o.path + '#' + l.slug, header: l }));
                      }
                }
                return r;
              }
            },
            alignRight: function() {
              return (this.$site.themeConfig.nav || []).length + (this.$site.repo ? 1 : 0) <= 2;
            },
          },
          mounted: function() {
            (this.placeholder = this.$site.themeConfig.searchPlaceholder || ''),
              document.addEventListener('keydown', this.onHotkey);
          },
          beforeDestroy: function() {
            document.removeEventListener('keydown', this.onHotkey);
          },
          methods: {
            getPageLocalePath: function(t) {
              for (var e in this.$site.locales || {})
                if ('/' !== e && 0 === t.path.indexOf(e)) return e;
              return '/';
            },
            isSearchable: function(t) {
              var e = null;
              return (
                null === e ||
                (e = Array.isArray(e) ? e : new Array(e)).filter(function(e) {
                  return t.path.match(e);
                }).length > 0
              );
            },
            onHotkey: function(t) {
              t.srcElement === document.body &&
                ['s', '/'].includes(t.key) &&
                (this.$refs.input.focus(), t.preventDefault());
            },
            onUp: function() {
              this.showSuggestions &&
                (this.focusIndex > 0
                  ? this.focusIndex--
                  : (this.focusIndex = this.suggestions.length - 1));
            },
            onDown: function() {
              this.showSuggestions &&
                (this.focusIndex < this.suggestions.length - 1
                  ? this.focusIndex++
                  : (this.focusIndex = 0));
            },
            go: function(t) {
              this.showSuggestions &&
                (this.$router.push(this.suggestions[t].path),
                (this.query = ''),
                (this.focusIndex = 0));
            },
            focus: function(t) {
              this.focusIndex = t;
            },
            unfocus: function() {
              this.focusIndex = -1;
            },
          },
        },
        u = (n(344), n(42)),
        l = Object(u.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'search-box' }, [
              n('input', {
                ref: 'input',
                class: { focused: t.focused },
                attrs: {
                  'aria-label': 'Search',
                  placeholder: t.placeholder,
                  autocomplete: 'off',
                  spellcheck: 'false',
                },
                domProps: { value: t.query },
                on: {
                  input: function(e) {
                    t.query = e.target.value;
                  },
                  focus: function(e) {
                    t.focused = !0;
                  },
                  blur: function(e) {
                    t.focused = !1;
                  },
                  keyup: [
                    function(e) {
                      return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                        ? null
                        : t.go(t.focusIndex);
                    },
                    function(e) {
                      return !e.type.indexOf('key') &&
                        t._k(e.keyCode, 'up', 38, e.key, ['Up', 'ArrowUp'])
                        ? null
                        : t.onUp(e);
                    },
                    function(e) {
                      return !e.type.indexOf('key') &&
                        t._k(e.keyCode, 'down', 40, e.key, ['Down', 'ArrowDown'])
                        ? null
                        : t.onDown(e);
                    },
                  ],
                },
              }),
              t._v(' '),
              t.showSuggestions
                ? n(
                    'ul',
                    {
                      staticClass: 'suggestions',
                      class: { 'align-right': t.alignRight },
                      on: { mouseleave: t.unfocus },
                    },
                    t._l(t.suggestions, function(e, i) {
                      return n(
                        'li',
                        {
                          key: i,
                          staticClass: 'suggestion',
                          class: { focused: i === t.focusIndex },
                          on: {
                            mousedown: function(e) {
                              return t.go(i);
                            },
                            mouseenter: function(e) {
                              return t.focus(i);
                            },
                          },
                        },
                        [
                          n(
                            'a',
                            {
                              attrs: { href: e.path },
                              on: {
                                click: function(t) {
                                  t.preventDefault();
                                },
                              },
                            },
                            [
                              n('span', { staticClass: 'page-title' }, [
                                t._v(t._s(e.title || e.path)),
                              ]),
                              t._v(' '),
                              e.header
                                ? n('span', { staticClass: 'header' }, [
                                    t._v('> ' + t._s(e.header.title)),
                                  ])
                                : t._e(),
                            ],
                          ),
                        ],
                      );
                    }),
                    0,
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
      n(345);
      function c(t, e) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)[e];
      }
      var p = {
          name: 'Navbar',
          components: {
            SidebarButton: Object(u.a)(
              {},
              function() {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n(
                  'div',
                  {
                    staticClass: 'sidebar-button',
                    on: {
                      click: function(e) {
                        return t.$emit('toggle-sidebar');
                      },
                    },
                  },
                  [
                    n(
                      'svg',
                      {
                        staticClass: 'icon',
                        attrs: {
                          xmlns: 'http://www.w3.org/2000/svg',
                          'aria-hidden': 'true',
                          role: 'img',
                          viewBox: '0 0 448 512',
                        },
                      },
                      [
                        n('path', {
                          attrs: {
                            fill: 'currentColor',
                            d:
                              'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z',
                          },
                        }),
                      ],
                    ),
                  ],
                );
              },
              [],
              !1,
              null,
              null,
              null,
            ).exports,
            NavLinks: n(337).a,
            SearchBox: l,
            AlgoliaSearchBox: {},
          },
          data: function() {
            return { linksWrapMaxWidth: null };
          },
          computed: {
            algolia: function() {
              return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
            },
            isAlgoliaSearch: function() {
              return this.algolia && this.algolia.apiKey && this.algolia.indexName;
            },
          },
          mounted: function() {
            var t = this,
              e = parseInt(c(this.$el, 'paddingLeft')) + parseInt(c(this.$el, 'paddingRight')),
              n = function() {
                document.documentElement.clientWidth < 719
                  ? (t.linksWrapMaxWidth = null)
                  : (t.linksWrapMaxWidth =
                      t.$el.offsetWidth -
                      e -
                      ((t.$refs.siteName && t.$refs.siteName.offsetWidth) || 0));
              };
            n(), window.addEventListener('resize', n, !1);
          },
        },
        f =
          (n(349),
          Object(u.a)(
            p,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'header',
                { staticClass: 'navbar' },
                [
                  n('SidebarButton', {
                    on: {
                      'toggle-sidebar': function(e) {
                        return t.$emit('toggle-sidebar');
                      },
                    },
                  }),
                  t._v(' '),
                  n('RouterLink', { staticClass: 'home-link', attrs: { to: t.$localePath } }, [
                    t.$site.themeConfig.logo
                      ? n('img', {
                          staticClass: 'logo',
                          attrs: { src: t.$withBase(t.$site.themeConfig.logo), alt: t.$siteTitle },
                        })
                      : t._e(),
                    t._v(' '),
                    t.$siteTitle
                      ? n(
                          'span',
                          {
                            ref: 'siteName',
                            staticClass: 'site-name',
                            class: { 'can-hide': t.$site.themeConfig.logo },
                          },
                          [t._v(t._s(t.$siteTitle))],
                        )
                      : t._e(),
                  ]),
                  t._v(' '),
                  n(
                    'div',
                    {
                      staticClass: 'links',
                      style: t.linksWrapMaxWidth ? { 'max-width': t.linksWrapMaxWidth + 'px' } : {},
                    },
                    [
                      t.isAlgoliaSearch
                        ? n('AlgoliaSearchBox', { attrs: { options: t.algolia } })
                        : !1 !== t.$site.themeConfig.search && !1 !== t.$page.frontmatter.search
                        ? n('SearchBox')
                        : t._e(),
                      t._v(' '),
                      n('NavLinks', { staticClass: 'can-hide' }),
                    ],
                    1,
                  ),
                ],
                1,
              );
            },
            [],
            !1,
            null,
            null,
            null,
          ));
      e.a = f.exports;
    },
    375: function(t, e, n) {
      'use strict';
      n(43), n(66);
      var i = n(325),
        r = n.n(i),
        s = n(308),
        a = {
          name: 'PageEdit',
          computed: {
            lastUpdated: function() {
              return this.$page.lastUpdated;
            },
            lastUpdatedText: function() {
              return 'string' == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : 'string' == typeof this.$site.themeConfig.lastUpdated
                ? this.$site.themeConfig.lastUpdated
                : 'Last Updated';
            },
            editLink: function() {
              var t = r()(this.$page.frontmatter.editLink)
                  ? this.$site.themeConfig.editLinks
                  : this.$page.frontmatter.editLink,
                e = this.$site.themeConfig,
                n = e.repo,
                i = e.docsDir,
                s = void 0 === i ? '' : i,
                a = e.docsBranch,
                o = void 0 === a ? 'master' : a,
                u = e.docsRepo,
                l = void 0 === u ? n : u;
              return t && l && this.$page.relativePath
                ? this.createEditLink(n, l, s, o, this.$page.relativePath)
                : null;
            },
            editLinkText: function() {
              return (
                this.$themeLocaleConfig.editLinkText ||
                this.$site.themeConfig.editLinkText ||
                'Edit this page'
              );
            },
          },
          methods: {
            createEditLink: function(t, e, n, i, r) {
              if (/bitbucket.org/.test(e))
                return (
                  e.replace(s.a, '') +
                  '/src' +
                  '/'.concat(i, '/') +
                  (n ? n.replace(s.a, '') + '/' : '') +
                  r +
                  '?mode=edit&spa=0&at='.concat(i, '&fileviewer=file-view-default')
                );
              return /gitlab.com/.test(e)
                ? e.replace(s.a, '') +
                    '/-/edit' +
                    '/'.concat(i, '/') +
                    (n ? n.replace(s.a, '') + '/' : '') +
                    r
                : (s.i.test(e) ? e : 'https://github.com/'.concat(e)).replace(s.a, '') +
                    '/edit' +
                    '/'.concat(i, '/') +
                    (n ? n.replace(s.a, '') + '/' : '') +
                    r;
            },
          },
        },
        o = (n(350), n(42)),
        u = Object(o.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('footer', { staticClass: 'page-edit' }, [
              t.editLink
                ? n(
                    'div',
                    { staticClass: 'edit-link' },
                    [
                      n(
                        'a',
                        {
                          attrs: { href: t.editLink, target: '_blank', rel: 'noopener noreferrer' },
                        },
                        [t._v(t._s(t.editLinkText))],
                      ),
                      t._v(' '),
                      n('OutboundLink'),
                    ],
                    1,
                  )
                : t._e(),
              t._v(' '),
              t.lastUpdated
                ? n('div', { staticClass: 'last-updated' }, [
                    n('span', { staticClass: 'prefix' }, [t._v(t._s(t.lastUpdatedText) + ':')]),
                    t._v(' '),
                    n('span', { staticClass: 'time' }, [t._v(t._s(t.lastUpdated))]),
                  ])
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports,
        l = n(351),
        c = n.n(l),
        p = {
          name: 'PageNav',
          props: ['sidebarItems'],
          computed: {
            prev: function() {
              return h(f.PREV, this);
            },
            next: function() {
              return h(f.NEXT, this);
            },
          },
        };
      var f = {
        NEXT: {
          resolveLink: function(t, e) {
            return d(t, e, 1);
          },
          getThemeLinkConfig: function(t) {
            return t.nextLinks;
          },
          getPageLinkConfig: function(t) {
            return t.frontmatter.next;
          },
        },
        PREV: {
          resolveLink: function(t, e) {
            return d(t, e, -1);
          },
          getThemeLinkConfig: function(t) {
            return t.prevLinks;
          },
          getPageLinkConfig: function(t) {
            return t.frontmatter.prev;
          },
        },
      };
      function h(t, e) {
        var n = e.$themeConfig,
          i = e.$page,
          a = e.$route,
          o = e.$site,
          u = e.sidebarItems,
          l = t.resolveLink,
          p = t.getThemeLinkConfig,
          f = t.getPageLinkConfig,
          h = p(n),
          d = f(i),
          g = r()(d) ? h : d;
        return !1 === g ? void 0 : c()(g) ? Object(s.k)(o.pages, g, a.path) : l(i, u);
      }
      function d(t, e, n) {
        var i = [];
        !(function t(e, n) {
          for (var i = 0, r = e.length; i < r; i++)
            'group' === e[i].type ? t(e[i].children || [], n) : n.push(e[i]);
        })(e, i);
        for (var r = 0; r < i.length; r++) {
          var s = i[r];
          if ('page' === s.type && s.path === decodeURIComponent(t.path)) return i[r + n];
        }
      }
      var g = p,
        v =
          (n(352),
          {
            components: {
              PageEdit: u,
              PageNav: Object(o.a)(
                g,
                function() {
                  var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                  return t.prev || t.next
                    ? n('div', { staticClass: 'page-nav' }, [
                        n('p', { staticClass: 'inner' }, [
                          t.prev
                            ? n(
                                'span',
                                { staticClass: 'prev' },
                                [
                                  t._v('\n      ←\n      '),
                                  'external' === t.prev.type
                                    ? n(
                                        'a',
                                        {
                                          staticClass: 'prev',
                                          attrs: {
                                            href: t.prev.path,
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                          },
                                        },
                                        [
                                          t._v(
                                            '\n        ' +
                                              t._s(t.prev.title || t.prev.path) +
                                              '\n\n        ',
                                          ),
                                          n('OutboundLink'),
                                        ],
                                        1,
                                      )
                                    : n(
                                        'RouterLink',
                                        { staticClass: 'prev', attrs: { to: t.prev.path } },
                                        [
                                          t._v(
                                            '\n        ' +
                                              t._s(t.prev.title || t.prev.path) +
                                              '\n      ',
                                          ),
                                        ],
                                      ),
                                ],
                                1,
                              )
                            : t._e(),
                          t._v(' '),
                          t.next
                            ? n(
                                'span',
                                { staticClass: 'next' },
                                [
                                  'external' === t.next.type
                                    ? n(
                                        'a',
                                        {
                                          attrs: {
                                            href: t.next.path,
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                          },
                                        },
                                        [
                                          t._v(
                                            '\n        ' +
                                              t._s(t.next.title || t.next.path) +
                                              '\n\n        ',
                                          ),
                                          n('OutboundLink'),
                                        ],
                                        1,
                                      )
                                    : n('RouterLink', { attrs: { to: t.next.path } }, [
                                        t._v(
                                          '\n        ' +
                                            t._s(t.next.title || t.next.path) +
                                            '\n      ',
                                        ),
                                      ]),
                                  t._v('\n      →\n    '),
                                ],
                                1,
                              )
                            : t._e(),
                        ]),
                      ])
                    : t._e();
                },
                [],
                !1,
                null,
                null,
                null,
              ).exports,
            },
            props: ['sidebarItems'],
          }),
        m =
          (n(353),
          Object(o.a)(
            v,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'main',
                { staticClass: 'page' },
                [
                  t._t('top'),
                  t._v(' '),
                  n('Content', { staticClass: 'theme-default-content' }),
                  t._v(' '),
                  n('PageEdit'),
                  t._v(' '),
                  n('PageNav', t._b({}, 'PageNav', { sidebarItems: t.sidebarItems }, !1)),
                  t._v(' '),
                  t._t('bottom'),
                ],
                2,
              );
            },
            [],
            !1,
            null,
            null,
            null,
          ));
      e.a = m.exports;
    },
    376: function(t, e, n) {
      'use strict';
      var i = n(336),
        r = n(337),
        s = {
          name: 'Sidebar',
          components: { SidebarLinks: i.default, NavLinks: r.a },
          props: ['items'],
        },
        a = (n(357), n(42)),
        o = Object(a.a)(
          s,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              'aside',
              { staticClass: 'sidebar' },
              [
                e('NavLinks'),
                this._v(' '),
                this._t('top'),
                this._v(' '),
                e('SidebarLinks', { attrs: { depth: 0, items: this.items } }),
                this._v(' '),
                this._t('bottom'),
              ],
              2,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = o.exports;
    },
  },
]);
