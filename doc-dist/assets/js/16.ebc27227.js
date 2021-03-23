(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    378: function(t, e, a) {
      'use strict';
      a.r(e);
      var o = a(374),
        n = a(375),
        i = a(376),
        s = a(308),
        r = {
          name: 'Layout',
          components: { Page: n.a, Sidebar: i.a, Navbar: o.a },
          data: function() {
            return { isSidebarOpen: !1 };
          },
          computed: {
            shouldShowNavbar: function() {
              var t = this.$site.themeConfig;
              return (
                !1 !== this.$page.frontmatter.navbar &&
                !1 !== t.navbar &&
                (this.$title || t.logo || t.repo || t.nav || this.$themeLocaleConfig.nav)
              );
            },
            shouldShowSidebar: function() {
              var t = this.$page.frontmatter;
              return !t.home && !1 !== t.sidebar && this.sidebarItems.length;
            },
            sidebarItems: function() {
              return Object(s.l)(this.$page, this.$page.regularPath, this.$site, this.$localePath);
            },
            pageClasses: function() {
              var t = this.$page.frontmatter.pageClass;
              return [
                {
                  'no-navbar': !this.shouldShowNavbar,
                  'sidebar-open': this.isSidebarOpen,
                  'no-sidebar': !this.shouldShowSidebar,
                },
                t,
              ];
            },
          },
          mounted: function() {
            var t = this;
            this.$router.afterEach(function() {
              t.isSidebarOpen = !1;
            });
          },
          methods: {
            toggleSidebar: function(t) {
              (this.isSidebarOpen = 'boolean' == typeof t ? t : !this.isSidebarOpen),
                this.$emit('toggle-sidebar', this.isSidebarOpen);
            },
            onTouchStart: function(t) {
              this.touchStart = { x: t.changedTouches[0].clientX, y: t.changedTouches[0].clientY };
            },
            onTouchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStart.x,
                a = t.changedTouches[0].clientY - this.touchStart.y;
              Math.abs(e) > Math.abs(a) &&
                Math.abs(e) > 40 &&
                (e > 0 && this.touchStart.x <= 80
                  ? this.toggleSidebar(!0)
                  : this.toggleSidebar(!1));
            },
          },
        },
        h = a(42),
        u = Object(h.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a(
              'div',
              {
                staticClass: 'theme-container',
                class: t.pageClasses,
                on: { touchstart: t.onTouchStart, touchend: t.onTouchEnd },
              },
              [
                t.shouldShowNavbar
                  ? a('Navbar', { on: { 'toggle-sidebar': t.toggleSidebar } })
                  : t._e(),
                t._v(' '),
                a('div', {
                  staticClass: 'sidebar-mask',
                  on: {
                    click: function(e) {
                      return t.toggleSidebar(!1);
                    },
                  },
                }),
                t._v(' '),
                a('Sidebar', {
                  attrs: { items: t.sidebarItems },
                  on: { 'toggle-sidebar': t.toggleSidebar },
                  scopedSlots: t._u(
                    [
                      {
                        key: 'top',
                        fn: function() {
                          return [t._t('sidebar-top')];
                        },
                        proxy: !0,
                      },
                      {
                        key: 'bottom',
                        fn: function() {
                          return [t._t('sidebar-bottom')];
                        },
                        proxy: !0,
                      },
                    ],
                    null,
                    !0,
                  ),
                }),
                t._v(' '),
                t.$page.frontmatter.home
                  ? a('Home')
                  : a('Page', {
                      attrs: { 'sidebar-items': t.sidebarItems },
                      scopedSlots: t._u(
                        [
                          {
                            key: 'top',
                            fn: function() {
                              return [t._t('page-top')];
                            },
                            proxy: !0,
                          },
                          {
                            key: 'bottom',
                            fn: function() {
                              return [t._t('page-bottom')];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !0,
                      ),
                    }),
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
      e.default = u.exports;
    },
  },
]);
