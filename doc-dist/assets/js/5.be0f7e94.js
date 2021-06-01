(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    335: function(e, t, c) {},
    375: function(e, t, c) {
      'use strict';
      c(335);
    },
    383: function(e, t, c) {
      'use strict';
      c.r(t);
      var i = {
          name: 'CodeBlock',
          props: { title: { type: String, required: !0 }, active: { type: Boolean, default: !1 } },
        },
        n = (c(375), c(42)),
        s = Object(n.a)(
          i,
          function() {
            var e = this.$createElement;
            return (this._self._c || e)(
              'div',
              {
                staticClass: 'theme-code-block',
                class: { 'theme-code-block__active': this.active },
              },
              [this._t('default')],
              2,
            );
          },
          [],
          !1,
          null,
          '6d04095e',
          null,
        );
      t.default = s.exports;
    },
  },
]);
