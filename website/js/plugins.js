/*
	01) Magnific Popup
	02) Popper
  03) Bootstrap
  04) Jarallax Elements
  05) Jarallax
  06) WOW 
  07) Waypoints 
  08) Counter Up
  09) jQuery Easing 
  10) ScrollIt
  11) MBYTBPLAYER 
  12) Owl Carousel
  13) Zepto Js
  14) Vegas Slider
*/

/*------------------------------------------------------------------*/
/*	01) Magnific Popup
/*------------------------------------------------------------------*/

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function(a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a('object' == typeof exports ? require('jquery') : window.jQuery || window.Zepto);
})(function(a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = 'Close',
    i = 'BeforeClose',
    j = 'AfterClose',
    k = 'BeforeAppend',
    l = 'MarkupParse',
    m = 'Open',
    n = 'Change',
    o = 'mfp',
    p = '.' + o,
    q = 'mfp-ready',
    r = 'mfp-removing',
    s = 'mfp-prevent-close',
    t = function() {},
    u = !!window.jQuery,
    v = a(window),
    w = function(a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function(b, c, d, e) {
      var f = document.createElement('div');
      return (
        (f.className = 'mfp-' + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function(c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function(c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace('%title%', b.st.tClose))),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function() {
      a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function() {
      var a = document.createElement('p').style,
        b = ['ms', 'O', 'Moz', 'Webkit'];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + 'Transition' in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function() {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent,
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function(c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ''),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          'auto' === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x('bg').on('click' + p, function() {
            b.close();
          })),
          (b.wrap = x('wrap')
            .attr('tabindex', -1)
            .on('click' + p, function(a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x('container', b.wrap))),
        (b.contentContainer = x('content')),
        b.st.preloader && (b.preloader = x('preloader', b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b['init' + j].call(b);
      }
      y('BeforeOpen'),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += ' mfp-close-btn-in'))
            : b.wrap.append(z())),
        b.st.alignTop && (f += ' mfp-align-top'),
        b.fixedContentPos
          ? b.wrap.css({ overflow: b.st.overflowY, overflowX: 'hidden', overflowY: b.st.overflowY })
          : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }),
        (b.st.fixedBgPos === !1 || ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: 'absolute' }),
        b.st.enableEscapeKey &&
          d.on('keyup' + p, function(a) {
            27 === a.keyCode && b.close();
          }),
        v.on('resize' + p, function() {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7 ? a('body, html').css('overflow', 'hidden') : (n.overflow = 'hidden'));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += ' mfp-ie7'),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y('BuildControls'),
        a('html').css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function() {
          b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q),
            d.on('focusin' + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function() {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function() {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function() {
      y(h);
      var c = r + ' ' + q + ' ';
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + ' '),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: '' };
        b.isIE7 ? a('body, html').css('overflow', '') : (e.overflow = ''), a('html').css(e);
      }
      d.off('keyup' + p + ' focusin' + p),
        b.ev.off(p),
        b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        b.bgOverlay.attr('class', 'mfp-bg'),
        b.container.attr('class', 'mfp-container'),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css('height', d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize');
    },
    updateItemHTML: function() {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y('FirstMarkupParse', f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder');
      var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y('AfterChange');
    },
    appendContent: function(a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find('.mfp-close').length || b.content.append(z())
            : (b.content = a)
          : (b.content = ''),
        y(k),
        b.container.addClass('mfp-' + c + '-holder'),
        b.contentContainer.append(b.content);
    },
    parseEl: function(c) {
      var d,
        e = b.items[c];
      if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass('mfp-' + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr('data-mfp-src')), e.src || (e.src = e.el.attr('href'));
      }
      return (
        (e.type = d || b.st.type || 'inline'),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y('ElementParse', e),
        b.items[c]
      );
    },
    addGroup: function(a, c) {
      var d = function(d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = 'click.magnificPopup';
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass('mfp-s-' + c),
          d || 'loading' !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y('UpdateStatus', e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find('a').on('click', function(a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass('mfp-s-' + a),
          (c = a);
      }
    },
    _checkIfClose: function(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass('mfp-close') || (b.preloader && c === b.preloader[0]))
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function(c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split('_')), e.length > 1)) {
            var f = b.find(p + '-' + e[0]);
            if (f.length > 0) {
              var g = e[1];
              'replaceWith' === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : 'img' === g
                ? f.is('img')
                  ? f.attr('src', d)
                  : f.replaceWith(
                      a('<img>')
                        .attr('src', d)
                        .attr('class', f.attr('class')),
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + '-' + c).html(d);
        });
    },
    _getScrollbarSize: function() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement('div');
        (a.style.cssText =
          'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function(b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function() {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function(b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function(c) {
      A();
      var d = a(this);
      if ('string' == typeof c)
        if ('open' === c) {
          var e,
            f = u ? d.data('magnificPopup') : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = 'inline',
    G = function() {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
    proto: {
      initInline: function() {
        b.types.push(F),
          w(h + '.' + F, function() {
            G();
          });
      },
      getInline: function(c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = 'mfp-' + C)),
              (E = f
                .after(D)
                .detach()
                .removeClass(C))),
              b.updateStatus('ready');
          } else b.updateStatus('error', e.tNotFound), (f = a('<div>'));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = 'ajax',
    J = function() {
      H && a(document.body).removeClass(H);
    },
    K = function() {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function() {
        b.types.push(I), (H = b.st.ajax.cursor), w(h + '.' + I, K), w('BeforeChange.' + I, K);
      },
      getAjax: function(c) {
        H && a(document.body).addClass(H), b.updateStatus('loading');
        var d = a.extend(
          {
            url: c.src,
            success: function(d, e, f) {
              var g = { data: d, xhr: f };
              y('ParseAjax', g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function() {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus('ready'),
                y('AjaxContentAdded');
            },
            error: function() {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus('error', b.st.ajax.tError.replace('%url%', c.src));
            },
          },
          b.st.ajax.settings,
        );
        return (b.req = a.ajax(d)), '';
      },
    },
  });
  var L,
    M = function(c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || '';
      }
      return '';
    };
  a.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function() {
        var c = b.st.image,
          d = '.image';
        b.types.push('image'),
          w(m + d, function() {
            'image' === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
          }),
          w(h + d, function() {
            c.cursor && a(document.body).removeClass(c.cursor), v.off('resize' + p);
          }),
          w('Resize' + d, b.resizeImage),
          b.isLowIE && w('AfterChange', b.resizeImage);
      },
      resizeImage: function() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css('padding-top'), 10) + parseInt(a.img.css('padding-bottom'), 10)),
            a.img.css('max-height', b.wH - c);
        }
      },
      _onImageHasSize: function(a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y('ImageHasSize', a),
          a.imgHidden && (b.content && b.content.removeClass('mfp-loading'), (a.imgHidden = !1)));
      },
      findImageSize: function(a) {
        var c = 0,
          d = a.img[0],
          e = function(f) {
            L && clearInterval(L),
              (L = setInterval(function() {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function(c, d) {
        var e = 0,
          f = function() {
            c &&
              (c.img[0].complete
                ? (c.img.off('.mfploader'),
                  c === b.currItem && (b._onImageHasSize(c), b.updateStatus('ready')),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y('ImageLoadComplete'))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function() {
            c &&
              (c.img.off('.mfploader'),
              c === b.currItem &&
                (b._onImageHasSize(c), b.updateStatus('error', h.tError.replace('%url%', c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find('.mfp-img');
        if (i.length) {
          var j = document.createElement('img');
          (j.className = 'mfp-img'),
            c.el && c.el.find('img').length && (j.alt = c.el.find('img').attr('alt')),
            (c.img = a(j)
              .on('load.mfploader', f)
              .on('error.mfploader', g)),
            (j.src = c.src),
            i.is('img') && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass('mfp-loading'),
                  b.updateStatus('error', h.tError.replace('%url%', c.src)))
                : (d.removeClass('mfp-loading'), b.updateStatus('ready')),
              d)
            : (b.updateStatus('loading'),
              (c.loading = !0),
              c.hasSize || ((c.imgHidden = !0), d.addClass('mfp-loading'), b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function() {
      return void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform), N;
    };
  a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function(a) {
        return a.is('img') ? a : a.find('img');
      },
    },
    proto: {
      initZoom: function() {
        var a,
          c = b.st.zoom,
          d = '.zoom';
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function(a) {
              var b = a
                  .clone()
                  .removeAttr('style')
                  .removeAttr('class')
                  .addClass('mfp-animated-image'),
                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                e = {
                  position: 'fixed',
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  '-webkit-backface-visibility': 'hidden',
                },
                f = 'transition';
              return (e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d), b.css(e), b;
            },
            k = function() {
              b.content.css('visibility', 'visible');
            };
          w('BuildControls' + d, function() {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css('visibility', 'hidden'),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function() {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function() {
                      k(),
                        setTimeout(function() {
                          f.remove(), (a = f = null), y('ZoomAnimationEnded');
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function() {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css('visibility', 'hidden'),
                  setTimeout(function() {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function() {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function() {
        return 'image' === b.currItem.type;
      },
      _getItemToZoom: function() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css('padding-top'), 10),
          g = parseInt(d.css('padding-bottom'), 10);
        e.top -= a(window).scrollTop() - f;
        var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
        return (
          O()
            ? (h['-moz-transform'] = h.transform = 'translate(' + e.left + 'px,' + e.top + 'px)')
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = 'iframe',
    Q = '//about:blank',
    R = function(a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find('iframe');
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css('display', a ? 'block' : 'none'));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1',
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'https://player.vimeo.com/video/%id%?autoplay=1',
        },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function() {
        b.types.push(P),
          w('BeforeChange', function(a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + '.' + P, function() {
            R();
          });
      },
      getIframe: function(c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function() {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  'string' == typeof this.id
                    ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length)
                    : this.id.call(this, e)),
              (e = this.src.replace('%id%', e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus('ready'), d
        );
      },
    },
  });
  var S = function(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function() {
        var c = b.st.gallery,
          e = '.mfp-gallery';
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += ' mfp-gallery'),
              w(m + e, function() {
                c.navigateByImgClick &&
                  b.wrap.on('click' + e, '.mfp-img', function() {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on('keydown' + e, function(a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w('UpdateStatus' + e, function(a, c) {
                c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function(a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : '';
              }),
              w('BuildControls' + e, function() {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left'),
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, 'right'),
                    ).addClass(s));
                  e.click(function() {
                    b.prev();
                  }),
                    f.click(function() {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function() {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function() {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function() {
                d.off(e), b.wrap.off('click' + e), (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function() {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function() {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function(a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function() {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
      },
      _preloadItem: function(c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y('LazyLoad', d),
            'image' === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on('load.mfploader', function() {
                  d.hasSize = !0;
                })
                .on('error.mfploader', function() {
                  (d.hasSize = !0), (d.loadError = !0), y('LazyLoadError', d);
                })
                .attr('src', d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = 'retina';
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function(a) {
        return a.src.replace(/\.\w+$/, function(a) {
          return '@2x' + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w('ImageHasSize.' + U, function(a, b) {
                b.img.css({ 'max-width': b.img[0].naturalWidth / c, width: '100%' });
              }),
              w('ElementParse.' + U, function(b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*------------------------------------------------------------------*/
/*	02) Popper
/*------------------------------------------------------------------*/

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(
  e,
  t,
) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function() {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = e.ownerDocument.defaultView,
      n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }
  function p(e) {
    if (!e) return document.documentElement;
    for (
      var o = r(10) ? document.body : null, n = e.offsetParent || null;
      n === o && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position')
        ? p(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }
  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }
  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }
  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }
    return e[o];
  }
  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = l(t, 'top'),
      i = l(t, 'left'),
      r = o ? -1 : 1;
    return (e.top += n * r), (e.bottom += n * r), (e.left += i * r), (e.right += i * r), e;
  }
  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }
  function h(e, t, o, n) {
    return ee(
      t['offset' + e],
      t['scroll' + e],
      o['client' + e],
      o['offset' + e],
      o['scroll' + e],
      r(10)
        ? parseInt(o['offset' + e]) +
            parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) +
            parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')])
        : 0,
    );
  }
  function c(e) {
    var t = e.body,
      o = e.documentElement,
      n = r(10) && getComputedStyle(o);
    return { height: h('Height', t, o, n), width: h('Width', t, o, n) };
  }
  function g(e) {
    return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
          i = l(e, 'left');
        (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
      } else o = e.getBoundingClientRect();
    } catch (t) {}
    var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
      s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
      d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top,
      f = e.offsetWidth - d,
      h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      (f -= m(u, 'x')), (h -= m(u, 'y')), (p.width -= f), (p.height -= h);
    }
    return g(p);
  }
  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      p = r(10),
      s = 'HTML' === o.nodeName,
      d = u(e),
      a = u(o),
      l = n(e),
      m = t(o),
      h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height,
    });
    if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
      var w = parseFloat(m.marginTop, 10),
        y = parseFloat(m.marginLeft, 10);
      (b.top -= h - w),
        (b.bottom -= h - w),
        (b.left -= c - y),
        (b.right -= c - y),
        (b.marginTop = w),
        (b.marginLeft = y);
    }
    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }
  function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = b(e, o),
      i = ee(o.clientWidth, window.innerWidth || 0),
      r = ee(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o),
      s = t ? 0 : l(o, 'left'),
      d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };
    return g(d);
  }
  function y(e) {
    var n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) return !1;
    if ('fixed' === t(e, 'position')) return !0;
    var i = o(e);
    return !!i && y(i);
  }
  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && 'none' === t(o, 'transform'); ) o = o.parentElement;
    return o || document.documentElement;
  }
  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = { top: 0, left: 0 },
      d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = w(d, p);
    else {
      var l;
      'scrollParent' === r
        ? ((l = n(o(t))), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement))
        : 'window' === r
        ? (l = e.ownerDocument.documentElement)
        : (l = r);
      var f = b(l, d, p);
      if ('HTML' === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
          h = m.height,
          g = m.width;
        (s.top += f.top - f.marginTop),
          (s.bottom = h + f.top),
          (s.left += f.left - f.marginLeft),
          (s.right = g + f.left);
      } else s = f;
    }
    i = i || 0;
    var u = 'number' == typeof i;
    return (
      (s.left += u ? i : i.left || 0),
      (s.top += u ? i : i.top || 0),
      (s.right -= u ? i : i.right || 0),
      (s.bottom -= u ? i : i.bottom || 0),
      s
    );
  }
  function x(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function(e) {
          return fe({ key: e }, s[e], { area: x(s[e]) });
        })
        .sort(function(e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function(e) {
        var t = e.width,
          n = e.height;
        return t >= o.clientWidth && n >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }
  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }
  function S(e) {
    var t = e.ownerDocument.defaultView,
      o = t.getComputedStyle(e),
      n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
      i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
      r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
    return r;
  }
  function T(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return e.replace(/left|right|bottom|top/g, function(e) {
      return t[e];
    });
  }
  function D(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
      i = { width: n.width, height: n.height },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return (i[p] = t[p] + t[d] / 2 - n[d] / 2), (i[s] = o === s ? t[s] - n[a] : t[T(s)]), i;
  }
  function C(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function(e) {
        return e[t] === o;
      });
    var n = C(e, function(e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }
  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return (
      i.forEach(function(t) {
        t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var n = t['function'] || t.fn;
        t.enabled &&
          e(n) &&
          ((o.offsets.popper = g(o.offsets.popper)),
          (o.offsets.reference = g(o.offsets.reference)),
          (o = n(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = L(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed,
      )),
        (e.placement = O(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding,
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = D(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
        (e = P(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function(e) {
      var o = e.name,
        n = e.enabled;
      return n && o === t;
    });
  }
  function H(e) {
    for (
      var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0;
      n < t.length;
      n++
    ) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function B() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[H('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }
  function F(e, t, o, i) {
    (o.updateBound = i), A(e).addEventListener('resize', o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      M(r, 'scroll', o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function I() {
    this.state.eventsEnabled ||
      (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function R(e, t) {
    return (
      A(e).removeEventListener('resize', t.updateBound),
      t.scrollParents.forEach(function(e) {
        e.removeEventListener('scroll', t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function U() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate), (this.state = R(this.reference, this.state)));
  }
  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function j(e, t) {
    Object.keys(t).forEach(function(o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) &&
        Y(t[o]) &&
        (n = 'px'),
        (e.style[o] = t[o] + n);
    });
  }
  function V(e, t) {
    Object.keys(t).forEach(function(o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function q(e, t) {
    var o = e.offsets,
      n = o.popper,
      i = o.reference,
      r = $,
      p = function(e) {
        return e;
      },
      s = r(i.width),
      d = r(n.width),
      a = -1 !== ['left', 'right'].indexOf(e.placement),
      l = -1 !== e.placement.indexOf('-'),
      f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
      m = t ? r : p;
    return {
      left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
      top: m(n.top),
      bottom: m(n.bottom),
      right: f(n.right),
    };
  }
  function K(e, t, o) {
    var n = C(e, function(e) {
        var o = e.name;
        return o === t;
      }),
      i =
        !!n &&
        e.some(function(e) {
          return e.name === o && e.enabled && e.order < n.order;
        });
    if (!i) {
      var r = '`' + t + '`';
      console.warn(
        '`' +
          o +
          '`' +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!',
      );
    }
    return i;
  }
  function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }
  function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ce.indexOf(e),
      n = ce.slice(o + 1).concat(ce.slice(0, o));
    return t ? n.reverse() : n;
  }
  function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = n;
      }
      var d = g(s);
      return (d[t] / 100) * r;
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return (
        (a =
          'vh' === p
            ? ee(document.documentElement.clientHeight, window.innerHeight || 0)
            : ee(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function X(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(n),
      p = e.split(/(\+|\-)/).map(function(e) {
        return e.trim();
      }),
      s = p.indexOf(
        C(p, function(e) {
          return -1 !== e.search(/,|\s/);
        }),
      );
    p[s] &&
      -1 === p[s].indexOf(',') &&
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return (
      (a = a.map(function(e, n) {
        var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
        return e
          .reduce(function(e, t) {
            return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function(e) {
            return _(e, i, t, o);
          });
      })),
      a.forEach(function(e, t) {
        e.forEach(function(o, n) {
          Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
        });
      }),
      i
    );
  }
  function J(e, t) {
    var o,
      n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split('-')[0];
    return (
      (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
      'left' === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : 'right' === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : 'top' === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : 'bottom' === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var Q = Math.min,
      Z = Math.floor,
      $ = Math.round,
      ee = Math.max,
      te = 'undefined' != typeof window && 'undefined' != typeof document,
      oe = ['Edge', 'Trident', 'Firefox'],
      ne = 0,
      ie = 0;
    ie < oe.length;
    ie += 1
  )
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;
      break;
    }
  var i = te && window.Promise,
    re = i
      ? function(e) {
          var t = !1;
          return function() {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function() {
                (t = !1), e();
              }));
          };
        }
      : function(e) {
          var t = !1;
          return function() {
            t ||
              ((t = !0),
              setTimeout(function() {
                (t = !1), e();
              }, ne));
          };
        },
    pe = te && !!(window.MSInputMethodContext && document.documentMode),
    se = te && /MSIE 10/.test(navigator.userAgent),
    de = function(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
    ae = (function() {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    })(),
    le = function(e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    fe =
      Object.assign ||
      function(e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var n in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      },
    me = te && /Firefox/i.test(navigator.userAgent),
    he = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    ce = he.slice(3),
    ge = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
    ue = (function() {
      function t(o, n) {
        var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        de(this, t),
          (this.scheduleUpdate = function() {
            return requestAnimationFrame(i.update);
          }),
          (this.update = re(this.update.bind(this))),
          (this.options = fe({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o && o.jquery ? o[0] : o),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
            i.options.modifiers[e] = fe(
              {},
              t.Defaults.modifiers[e] || {},
              r.modifiers ? r.modifiers[e] : {},
            );
          }),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function(e) {
              return fe({ name: e }, i.options.modifiers[e]);
            })
            .sort(function(e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function(t) {
            t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        ae(t, [
          {
            key: 'update',
            value: function() {
              return k.call(this);
            },
          },
          {
            key: 'destroy',
            value: function() {
              return B.call(this);
            },
          },
          {
            key: 'enableEventListeners',
            value: function() {
              return I.call(this);
            },
          },
          {
            key: 'disableEventListeners',
            value: function() {
              return U.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
    (ue.placements = he),
    (ue.Defaults = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function(e) {
            var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];
            if (n) {
              var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) };
              e.offsets.popper = fe({}, p, l[n]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: J, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function(e, t) {
            var o = t.boundariesElement || p(e.instance.popper);
            e.instance.reference === o && (o = p(o));
            var n = H('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
            (i.top = ''), (i.left = ''), (i[n] = '');
            var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
            (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
            var l = t.priority,
              f = e.offsets.popper,
              m = {
                primary: function(e) {
                  var o = f[e];
                  return (
                    f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o)
                  );
                },
                secondary: function(e) {
                  var o = 'right' === e ? 'left' : 'top',
                    n = f[o];
                  return (
                    f[e] > a[e] &&
                      !t.escapeWithReference &&
                      (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
                    le({}, o, n)
                  );
                },
              };
            return (
              l.forEach(function(e) {
                var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                f = fe({}, f, m[t](e));
              }),
              (e.offsets.popper = f),
              e
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function(e) {
            var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
            return (
              o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
              o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function(e, o) {
            var n;
            if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
            var i = o.element;
            if ('string' == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn('WARNING: `arrow.element` must be child of its popper element!'), e
              );
            var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
            d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
              d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
              (e.offsets.popper = g(e.offsets.popper));
            var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;
            return (
              (v = ee(Q(s[l] - u, v), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = ((n = {}), le(n, m, $(v)), le(n, h, ''), n)),
              e
            );
          },
          element: '[x-arrow]',
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function(e, t) {
            if (W(e.instance.modifiers, 'inner')) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = v(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement,
                e.positionFixed,
              ),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];
            switch (t.behavior) {
              case ge.FLIP:
                p = [n, i];
                break;
              case ge.CLOCKWISE:
                p = G(n);
                break;
              case ge.COUNTERCLOCKWISE:
                p = G(n, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function(s, d) {
                if (n !== s || p.length === d + 1) return e;
                (n = e.placement.split('-')[0]), (i = T(n));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = Z,
                  m =
                    ('left' === n && f(a.right) > f(l.left)) ||
                    ('right' === n && f(a.left) < f(l.right)) ||
                    ('top' === n && f(a.bottom) > f(l.top)) ||
                    ('bottom' === n && f(a.top) < f(l.bottom)),
                  h = f(a.left) < f(o.left),
                  c = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ('left' === n && h) ||
                    ('right' === n && c) ||
                    ('top' === n && g) ||
                    ('bottom' === n && u),
                  w = -1 !== ['top', 'bottom'].indexOf(n),
                  y =
                    !!t.flipVariations &&
                    ((w && 'start' === r && h) ||
                      (w && 'end' === r && c) ||
                      (!w && 'start' === r && g) ||
                      (!w && 'end' === r && u));
                (m || b || y) &&
                  ((e.flipped = !0),
                  (m || b) && (n = p[d + 1]),
                  y && (r = z(r)),
                  (e.placement = n + (r ? '-' + r : '')),
                  (e.offsets.popper = fe(
                    {},
                    e.offsets.popper,
                    D(e.instance.popper, e.offsets.reference, e.placement),
                  )),
                  (e = P(e.instance.modifiers, e, 'flip')));
              }),
              e
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function(e) {
            var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
            return (
              (i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0)),
              (e.placement = T(t)),
              (e.offsets.popper = g(i)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function(e) {
            if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
            var t = e.offsets.reference,
              o = C(e.instance.modifiers, function(e) {
                return 'preventOverflow' === e.name;
              }).boundaries;
            if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function(e, t) {
            var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = C(e.instance.modifiers, function(e) {
                return 'applyStyle' === e.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
              );
            var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = H('transform');
            if (
              ((d =
                'bottom' == c
                  ? 'HTML' === l.nodeName
                    ? -l.clientHeight + h.bottom
                    : -f.height + h.bottom
                  : h.top),
              (s =
                'right' == g
                  ? 'HTML' === l.nodeName
                    ? -l.clientWidth + h.right
                    : -f.width + h.right
                  : h.left),
              a && b)
            )
              (m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)'),
                (m[c] = 0),
                (m[g] = 0),
                (m.willChange = 'transform');
            else {
              var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;
              (m[c] = d * w), (m[g] = s * y), (m.willChange = c + ', ' + g);
            }
            var E = { 'x-placement': e.placement };
            return (
              (e.attributes = fe({}, E, e.attributes)),
              (e.styles = fe({}, m, e.styles)),
              (e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function(e) {
            return (
              j(e.instance.popper, e.styles),
              V(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                j(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function(e, t, o, n, i) {
            var r = L(i, t, e, o.positionFixed),
              p = O(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding,
              );
            return (
              t.setAttribute('x-placement', p),
              j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    ue
  );
});
//# sourceMappingURL=popper.min.js.map

/*------------------------------------------------------------------*/
/*	03) Bootstrap
/*------------------------------------------------------------------*/

/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function(t, g, u) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          }),
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  (g = g && g.hasOwnProperty('default') ? g.default : g),
    (u = u && u.hasOwnProperty('default') ? u.default : u);
  var e = 'transitionend';
  function n(t) {
    var e = this,
      n = !1;
    return (
      g(this).one(_.TRANSITION_END, function() {
        n = !0;
      }),
      setTimeout(function() {
        n || _.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var _ = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function(t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
      return t;
    },
    getSelectorFromElement: function(t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function(t) {
      if (!t) return 0;
      var e = g(t).css('transition-duration'),
        n = g(t).css('transition-delay'),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(',')[0]), (n = n.split(',')[0]), 1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function() {
      return Boolean(e);
    },
    isElement: function(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function(t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && _.isElement(r)
                ? 'element'
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".',
            );
        }
      var a;
    },
    findShadowRoot: function(t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' != typeof t.getRootNode)
        return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
  };
  (g.fn.emulateTransitionEnd = n),
    (g.event.special[_.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
        if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      },
    });
  var o = 'alert',
    r = 'bs.alert',
    a = '.' + r,
    c = g.fn[o],
    h = { CLOSE: 'close' + a, CLOSED: 'closed' + a, CLICK_DATA_API: 'click' + a + '.data-api' },
    f = 'alert',
    d = 'fade',
    m = 'show',
    p = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function(t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }),
        (t.dispose = function() {
          g.removeData(this._element, r), (this._element = null);
        }),
        (t._getRootElement = function(t) {
          var e = _.getSelectorFromElement(t),
            n = !1;
          return e && (n = document.querySelector(e)), n || (n = g(t).closest('.' + f)[0]), n;
        }),
        (t._triggerCloseEvent = function(t) {
          var e = g.Event(h.CLOSE);
          return g(t).trigger(e), e;
        }),
        (t._removeElement = function(e) {
          var n = this;
          if ((g(e).removeClass(m), g(e).hasClass(d))) {
            var t = _.getTransitionDurationFromElement(e);
            g(e)
              .one(_.TRANSITION_END, function(t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function(t) {
          g(t)
            .detach()
            .trigger(h.CLOSED)
            .remove();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this),
              e = t.data(r);
            e || ((e = new i(this)), t.data(r, e)), 'close' === n && e[n](this);
          });
        }),
        (i._handleDismiss = function(e) {
          return function(t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
        ]),
        i
      );
    })();
  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
    (g.fn[o] = p._jQueryInterface),
    (g.fn[o].Constructor = p),
    (g.fn[o].noConflict = function() {
      return (g.fn[o] = c), p._jQueryInterface;
    });
  var v = 'button',
    y = 'bs.button',
    E = '.' + y,
    C = '.data-api',
    T = g.fn[v],
    S = 'active',
    b = 'btn',
    I = 'focus',
    D = '[data-toggle^="button"]',
    w = '[data-toggle="buttons"]',
    A = 'input:not([type="hidden"])',
    N = '.active',
    O = '.btn',
    k = { CLICK_DATA_API: 'click' + E + C, FOCUS_BLUR_DATA_API: 'focus' + E + C + ' blur' + E + C },
    P = (function() {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function() {
          var t = !0,
            e = !0,
            n = g(this._element).closest(w)[0];
          if (n) {
            var i = this._element.querySelector(A);
            if (i) {
              if ('radio' === i.type)
                if (i.checked && this._element.classList.contains(S)) t = !1;
                else {
                  var o = n.querySelector(N);
                  o && g(o).removeClass(S);
                }
              if (t) {
                if (
                  i.hasAttribute('disabled') ||
                  n.hasAttribute('disabled') ||
                  i.classList.contains('disabled') ||
                  n.classList.contains('disabled')
                )
                  return;
                (i.checked = !this._element.classList.contains(S)), g(i).trigger('change');
              }
              i.focus(), (e = !1);
            }
          }
          e && this._element.setAttribute('aria-pressed', !this._element.classList.contains(S)),
            t && g(this._element).toggleClass(S);
        }),
        (t.dispose = function() {
          g.removeData(this._element, y), (this._element = null);
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = g(this).data(y);
            t || ((t = new n(this)), g(this).data(y, t)), 'toggle' === e && t[e]();
          });
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
        ]),
        n
      );
    })();
  g(document)
    .on(k.CLICK_DATA_API, D, function(t) {
      t.preventDefault();
      var e = t.target;
      g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), 'toggle');
    })
    .on(k.FOCUS_BLUR_DATA_API, D, function(t) {
      var e = g(t.target).closest(O)[0];
      g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
    }),
    (g.fn[v] = P._jQueryInterface),
    (g.fn[v].Constructor = P),
    (g.fn[v].noConflict = function() {
      return (g.fn[v] = T), P._jQueryInterface;
    });
  var L = 'carousel',
    j = 'bs.carousel',
    H = '.' + j,
    R = '.data-api',
    x = g.fn[L],
    F = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
    U = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    W = 'next',
    q = 'prev',
    M = 'left',
    K = 'right',
    Q = {
      SLIDE: 'slide' + H,
      SLID: 'slid' + H,
      KEYDOWN: 'keydown' + H,
      MOUSEENTER: 'mouseenter' + H,
      MOUSELEAVE: 'mouseleave' + H,
      TOUCHSTART: 'touchstart' + H,
      TOUCHMOVE: 'touchmove' + H,
      TOUCHEND: 'touchend' + H,
      POINTERDOWN: 'pointerdown' + H,
      POINTERUP: 'pointerup' + H,
      DRAG_START: 'dragstart' + H,
      LOAD_DATA_API: 'load' + H + R,
      CLICK_DATA_API: 'click' + H + R,
    },
    B = 'carousel',
    V = 'active',
    Y = 'slide',
    z = 'carousel-item-right',
    X = 'carousel-item-left',
    $ = 'carousel-item-next',
    G = 'carousel-item-prev',
    J = 'pointer-event',
    Z = '.active',
    tt = '.active.carousel-item',
    et = '.carousel-item',
    nt = '.carousel-item img',
    it = '.carousel-item-next, .carousel-item-prev',
    ot = '.carousel-indicators',
    rt = '[data-slide], [data-slide-to]',
    st = '[data-ride="carousel"]',
    at = { TOUCH: 'touch', PEN: 'pen' },
    lt = (function() {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(ot)),
          (this._touchSupported =
            'ontouchstart' in document.documentElement || 0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function() {
          this._isSliding || this._slide(W);
        }),
        (t.nextWhenVisible = function() {
          !document.hidden &&
            g(this._element).is(':visible') &&
            'hidden' !== g(this._element).css('visibility') &&
            this.next();
        }),
        (t.prev = function() {
          this._isSliding || this._slide(q);
        }),
        (t.pause = function(t) {
          t || (this._isPaused = !0),
            this._element.querySelector(it) &&
              (_.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function(t) {
          t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                this._config.interval,
              ));
        }),
        (t.to = function(t) {
          var e = this;
          this._activeElement = this._element.querySelector(tt);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              g(this._element).one(Q.SLID, function() {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? W : q;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function() {
          g(this._element).off(H),
            g.removeData(this._element, j),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function(t) {
          return (t = l({}, F, t)), _.typeCheckConfig(L, t, U), t;
        }),
        (t._handleSwipe = function() {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            0 < e && this.prev(), e < 0 && this.next();
          }
        }),
        (t._addEventListeners = function() {
          var e = this;
          this._config.keyboard &&
            g(this._element).on(Q.KEYDOWN, function(t) {
              return e._keydown(t);
            }),
            'hover' === this._config.pause &&
              g(this._element)
                .on(Q.MOUSEENTER, function(t) {
                  return e.pause(t);
                })
                .on(Q.MOUSELEAVE, function(t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function() {
          var n = this;
          if (this._touchSupported) {
            var e = function(t) {
                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = t.originalEvent.clientX)
                  : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
              },
              i = function(t) {
                n._pointerEvent &&
                  at[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  'hover' === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function(t) {
                      return n.cycle(t);
                    }, 500 + n._config.interval)));
              };
            g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
              return t.preventDefault();
            }),
              this._pointerEvent
                ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                    return e(t);
                  }),
                  g(this._element).on(Q.POINTERUP, function(t) {
                    return i(t);
                  }),
                  this._element.classList.add(J))
                : (g(this._element).on(Q.TOUCHSTART, function(t) {
                    return e(t);
                  }),
                  g(this._element).on(Q.TOUCHMOVE, function(t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length
                      ? (n.touchDeltaX = 0)
                      : (n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX);
                  }),
                  g(this._element).on(Q.TOUCHEND, function(t) {
                    return i(t);
                  }));
          }
        }),
        (t._keydown = function(t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function(t) {
          return (
            (this._items =
              t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function(t, e) {
          var n = t === W,
            i = t === q,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
          var s = (o + (t === q ? -1 : 1)) % this._items.length;
          return -1 === s ? this._items[this._items.length - 1] : this._items[s];
        }),
        (t._triggerSlideEvent = function(t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(tt)),
            o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
          return g(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function(t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
            g(e).removeClass(V);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && g(n).addClass(V);
          }
        }),
        (t._slide = function(t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(tt),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o = t === W ? ((n = X), (i = $), M) : ((n = z), (i = G), K)), l && g(l).hasClass(V))
          )
            this._isSliding = !1;
          else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
            (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(l);
            var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c });
            if (g(this._element).hasClass(Y)) {
              g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
              var f = parseInt(l.getAttribute('data-interval'), 10);
              this._config.interval = f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  f)
                : this._config.defaultInterval || this._config.interval;
              var d = _.getTransitionDurationFromElement(s);
              g(s)
                .one(_.TRANSITION_END, function() {
                  g(l)
                    .removeClass(n + ' ' + i)
                    .addClass(V),
                    g(s).removeClass(V + ' ' + i + ' ' + n),
                    (r._isSliding = !1),
                    setTimeout(function() {
                      return g(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              g(s).removeClass(V),
                g(l).addClass(V),
                (this._isSliding = !1),
                g(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function(i) {
          return this.each(function() {
            var t = g(this).data(j),
              e = l({}, F, g(this).data());
            'object' == typeof i && (e = l({}, e, i));
            var n = 'string' == typeof i ? i : e.slide;
            if ((t || ((t = new r(this, e)), g(this).data(j, t)), 'number' == typeof i)) t.to(i);
            else if ('string' == typeof n) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function(t) {
          var e = _.getSelectorFromElement(this);
          if (e) {
            var n = g(e)[0];
            if (n && g(n).hasClass(B)) {
              var i = l({}, g(n).data(), g(this).data()),
                o = this.getAttribute('data-slide-to');
              o && (i.interval = !1),
                r._jQueryInterface.call(g(n), i),
                o &&
                  g(n)
                    .data(j)
                    .to(o),
                t.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return F;
            },
          },
        ]),
        r
      );
    })();
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
    g(window).on(Q.LOAD_DATA_API, function() {
      for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
        var i = g(t[e]);
        lt._jQueryInterface.call(i, i.data());
      }
    }),
    (g.fn[L] = lt._jQueryInterface),
    (g.fn[L].Constructor = lt),
    (g.fn[L].noConflict = function() {
      return (g.fn[L] = x), lt._jQueryInterface;
    });
  var ct = 'collapse',
    ht = 'bs.collapse',
    ut = '.' + ht,
    ft = g.fn[ct],
    dt = { toggle: !0, parent: '' },
    gt = { toggle: 'boolean', parent: '(string|element)' },
    _t = {
      SHOW: 'show' + ut,
      SHOWN: 'shown' + ut,
      HIDE: 'hide' + ut,
      HIDDEN: 'hidden' + ut,
      CLICK_DATA_API: 'click' + ut + '.data-api',
    },
    mt = 'show',
    pt = 'collapse',
    vt = 'collapsing',
    yt = 'collapsed',
    Et = 'width',
    Ct = 'height',
    Tt = '.show, .collapsing',
    St = '[data-toggle="collapse"]',
    bt = (function() {
      function a(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]',
            ),
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
              return t === e;
            });
          null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function() {
          g(this._element).hasClass(mt) ? this.hide() : this.show();
        }),
        (t.show = function() {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !g(this._element).hasClass(mt) &&
            (this._parent &&
              0 ===
                (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                  return 'string' == typeof n._config.parent
                    ? t.getAttribute('data-parent') === n._config.parent
                    : t.classList.contains(pt);
                })).length &&
              (t = null),
            !(
              t &&
              (e = g(t)
                .not(this._selector)
                .data(ht)) &&
              e._isTransitioning
            ))
          ) {
            var i = g.Event(_t.SHOW);
            if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
              t &&
                (a._jQueryInterface.call(g(t).not(this._selector), 'hide'),
                e || g(t).data(ht, null));
              var o = this._getDimension();
              g(this._element)
                .removeClass(pt)
                .addClass(vt),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  g(this._triggerArray)
                    .removeClass(yt)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var r = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
                s = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function() {
                  g(n._element)
                    .removeClass(vt)
                    .addClass(pt)
                    .addClass(mt),
                    (n._element.style[o] = ''),
                    n.setTransitioning(!1),
                    g(n._element).trigger(_t.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + 'px');
            }
          }
        }),
        (t.hide = function() {
          var t = this;
          if (!this._isTransitioning && g(this._element).hasClass(mt)) {
            var e = g.Event(_t.HIDE);
            if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
              var n = this._getDimension();
              (this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px'),
                _.reflow(this._element),
                g(this._element)
                  .addClass(vt)
                  .removeClass(pt)
                  .removeClass(mt);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = _.getSelectorFromElement(r);
                  if (null !== s)
                    g([].slice.call(document.querySelectorAll(s))).hasClass(mt) ||
                      g(r)
                        .addClass(yt)
                        .attr('aria-expanded', !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = '';
              var a = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function() {
                  t.setTransitioning(!1),
                    g(t._element)
                      .removeClass(vt)
                      .addClass(pt)
                      .trigger(_t.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (t.setTransitioning = function(t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function() {
          g.removeData(this._element, ht),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function(t) {
          return ((t = l({}, dt, t)).toggle = Boolean(t.toggle)), _.typeCheckConfig(ct, t, gt), t;
        }),
        (t._getDimension = function() {
          return g(this._element).hasClass(Et) ? Et : Ct;
        }),
        (t._getParent = function() {
          var t,
            n = this;
          _.isElement(this._config.parent)
            ? ((t = this._config.parent),
              'undefined' != typeof this._config.parent.jquery && (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            g(i).each(function(t, e) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function(t, e) {
          var n = g(t).hasClass(mt);
          e.length &&
            g(e)
              .toggleClass(yt, !n)
              .attr('aria-expanded', n);
        }),
        (a._getTargetFromElement = function(t) {
          var e = _.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (a._jQueryInterface = function(i) {
          return this.each(function() {
            var t = g(this),
              e = t.data(ht),
              n = l({}, dt, t.data(), 'object' == typeof i && i ? i : {});
            if (
              (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(ht, e)),
              'string' == typeof i)
            ) {
              if ('undefined' == typeof e[i]) throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return dt;
            },
          },
        ]),
        a
      );
    })();
  g(document).on(_t.CLICK_DATA_API, St, function(t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = g(this),
      e = _.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function() {
      var t = g(this),
        e = t.data(ht) ? 'toggle' : n.data();
      bt._jQueryInterface.call(t, e);
    });
  }),
    (g.fn[ct] = bt._jQueryInterface),
    (g.fn[ct].Constructor = bt),
    (g.fn[ct].noConflict = function() {
      return (g.fn[ct] = ft), bt._jQueryInterface;
    });
  var It = 'dropdown',
    Dt = 'bs.dropdown',
    wt = '.' + Dt,
    At = '.data-api',
    Nt = g.fn[It],
    Ot = new RegExp('38|40|27'),
    kt = {
      HIDE: 'hide' + wt,
      HIDDEN: 'hidden' + wt,
      SHOW: 'show' + wt,
      SHOWN: 'shown' + wt,
      CLICK: 'click' + wt,
      CLICK_DATA_API: 'click' + wt + At,
      KEYDOWN_DATA_API: 'keydown' + wt + At,
      KEYUP_DATA_API: 'keyup' + wt + At,
    },
    Pt = 'disabled',
    Lt = 'show',
    jt = 'dropup',
    Ht = 'dropright',
    Rt = 'dropleft',
    xt = 'dropdown-menu-right',
    Ft = 'position-static',
    Ut = '[data-toggle="dropdown"]',
    Wt = '.dropdown form',
    qt = '.dropdown-menu',
    Mt = '.navbar-nav',
    Kt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    Qt = 'top-start',
    Bt = 'top-end',
    Vt = 'bottom-start',
    Yt = 'bottom-end',
    zt = 'right-start',
    Xt = 'left-start',
    $t = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' },
    Gt = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
    },
    Jt = (function() {
      function c(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = c.prototype;
      return (
        (t.toggle = function() {
          if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
            var t = c._getParentFromElement(this._element),
              e = g(this._menu).hasClass(Lt);
            if ((c._clearMenus(), !e)) {
              var n = { relatedTarget: this._element },
                i = g.Event(kt.SHOW, n);
              if ((g(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if ('undefined' == typeof u)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
                    );
                  var o = this._element;
                  'parent' === this._config.reference
                    ? (o = t)
                    : _.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      'undefined' != typeof this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary && g(t).addClass(Ft),
                    (this._popper = new u(o, this._menu, this._getPopperConfig()));
                }
                'ontouchstart' in document.documentElement &&
                  0 === g(t).closest(Mt).length &&
                  g(document.body)
                    .children()
                    .on('mouseover', null, g.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  g(this._menu).toggleClass(Lt),
                  g(t)
                    .toggleClass(Lt)
                    .trigger(g.Event(kt.SHOWN, n));
              }
            }
          }
        }),
        (t.show = function() {
          if (
            !(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(kt.SHOW, t),
              n = c._getParentFromElement(this._element);
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (g(this._menu).toggleClass(Lt),
                g(n)
                  .toggleClass(Lt)
                  .trigger(g.Event(kt.SHOWN, t)));
          }
        }),
        (t.hide = function() {
          if (
            !this._element.disabled &&
            !g(this._element).hasClass(Pt) &&
            g(this._menu).hasClass(Lt)
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(kt.HIDE, t),
              n = c._getParentFromElement(this._element);
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (g(this._menu).toggleClass(Lt),
                g(n)
                  .toggleClass(Lt)
                  .trigger(g.Event(kt.HIDDEN, t)));
          }
        }),
        (t.dispose = function() {
          g.removeData(this._element, Dt),
            g(this._element).off(wt),
            (this._element = null),
            (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function() {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function() {
          var e = this;
          g(this._element).on(kt.CLICK, function(t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function(t) {
          return (
            (t = l({}, this.constructor.Default, g(this._element).data(), t)),
            _.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function() {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(qt));
          }
          return this._menu;
        }),
        (t._getPlacement = function() {
          var t = g(this._element.parentNode),
            e = Vt;
          return (
            t.hasClass(jt)
              ? ((e = Qt), g(this._menu).hasClass(xt) && (e = Bt))
              : t.hasClass(Ht)
              ? (e = zt)
              : t.hasClass(Rt)
              ? (e = Xt)
              : g(this._menu).hasClass(xt) && (e = Yt),
            e
          );
        }),
        (t._detectNavbar = function() {
          return 0 < g(this._element).closest('.navbar').length;
        }),
        (t._getOffset = function() {
          var e = this,
            t = {};
          return (
            'function' == typeof this._config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function() {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return 'static' === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
        }),
        (c._jQueryInterface = function(e) {
          return this.each(function() {
            var t = g(this).data(Dt);
            if (
              (t || ((t = new c(this, 'object' == typeof e ? e : null)), g(this).data(Dt, t)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof t[e]) throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (c._clearMenus = function(t) {
          if (!t || (3 !== t.which && ('keyup' !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = g(e[n]).data(Dt),
                s = { relatedTarget: e[n] };
              if ((t && 'click' === t.type && (s.clickEvent = t), r)) {
                var a = r._menu;
                if (
                  g(o).hasClass(Lt) &&
                  !(
                    t &&
                    (('click' === t.type && /input|textarea/i.test(t.target.tagName)) ||
                      ('keyup' === t.type && 9 === t.which)) &&
                    g.contains(o, t.target)
                  )
                ) {
                  var l = g.Event(kt.HIDE, s);
                  g(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        g(document.body)
                          .children()
                          .off('mouseover', null, g.noop),
                      e[n].setAttribute('aria-expanded', 'false'),
                      g(a).removeClass(Lt),
                      g(o)
                        .removeClass(Lt)
                        .trigger(g.Event(kt.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function(t) {
          var e,
            n = _.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (c._dataApiKeydownHandler = function(t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) || g(t.target).closest(qt).length))
                )
              : Ot.test(t.which)) &&
            (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))
          ) {
            var e = c._getParentFromElement(this),
              n = g(e).hasClass(Lt);
            if (n && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = [].slice.call(e.querySelectorAll(Kt));
              if (0 !== i.length) {
                var o = i.indexOf(t.target);
                38 === t.which && 0 < o && o--,
                  40 === t.which && o < i.length - 1 && o++,
                  o < 0 && (o = 0),
                  i[o].focus();
              }
            } else {
              if (27 === t.which) {
                var r = e.querySelector(Ut);
                g(r).trigger('focus');
              }
              g(this).trigger('click');
            }
          }
        }),
        s(c, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return $t;
            },
          },
          {
            key: 'DefaultType',
            get: function() {
              return Gt;
            },
          },
        ]),
        c
      );
    })();
  g(document)
    .on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler)
    .on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler)
    .on(kt.CLICK_DATA_API + ' ' + kt.KEYUP_DATA_API, Jt._clearMenus)
    .on(kt.CLICK_DATA_API, Ut, function(t) {
      t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), 'toggle');
    })
    .on(kt.CLICK_DATA_API, Wt, function(t) {
      t.stopPropagation();
    }),
    (g.fn[It] = Jt._jQueryInterface),
    (g.fn[It].Constructor = Jt),
    (g.fn[It].noConflict = function() {
      return (g.fn[It] = Nt), Jt._jQueryInterface;
    });
  var Zt = 'modal',
    te = 'bs.modal',
    ee = '.' + te,
    ne = g.fn[Zt],
    ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    oe = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
    re = {
      HIDE: 'hide' + ee,
      HIDDEN: 'hidden' + ee,
      SHOW: 'show' + ee,
      SHOWN: 'shown' + ee,
      FOCUSIN: 'focusin' + ee,
      RESIZE: 'resize' + ee,
      CLICK_DISMISS: 'click.dismiss' + ee,
      KEYDOWN_DISMISS: 'keydown.dismiss' + ee,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + ee,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ee,
      CLICK_DATA_API: 'click' + ee + '.data-api',
    },
    se = 'modal-dialog-scrollable',
    ae = 'modal-scrollbar-measure',
    le = 'modal-backdrop',
    ce = 'modal-open',
    he = 'fade',
    ue = 'show',
    fe = '.modal-dialog',
    de = '.modal-body',
    ge = '[data-toggle="modal"]',
    _e = '[data-dismiss="modal"]',
    me = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    pe = '.sticky-top',
    ve = (function() {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(fe)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function(t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function(t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            g(this._element).hasClass(he) && (this._isTransitioning = !0);
            var n = g.Event(re.SHOW, { relatedTarget: t });
            g(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                  return e.hide(t);
                }),
                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                  g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                    g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function() {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function(t) {
          var e = this;
          if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
            var n = g.Event(re.HIDE);
            if ((g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
              this._isShown = !1;
              var i = g(this._element).hasClass(he);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(document).off(re.FOCUSIN),
                g(this._element).removeClass(ue),
                g(this._element).off(re.CLICK_DISMISS),
                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = _.getTransitionDurationFromElement(this._element);
                g(this._element)
                  .one(_.TRANSITION_END, function(t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function() {
          [window, this._element, this._dialog].forEach(function(t) {
            return g(t).off(ee);
          }),
            g(document).off(re.FOCUSIN),
            g.removeData(this._element, te),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function() {
          this._adjustDialog();
        }),
        (t._getConfig = function(t) {
          return (t = l({}, ie, t)), _.typeCheckConfig(Zt, t, oe), t;
        }),
        (t._showElement = function(t) {
          var e = this,
            n = g(this._element).hasClass(he);
          (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            g(this._dialog).hasClass(se)
              ? (this._dialog.querySelector(de).scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && _.reflow(this._element),
            g(this._element).addClass(ue),
            this._config.focus && this._enforceFocus();
          var i = g.Event(re.SHOWN, { relatedTarget: t }),
            o = function() {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                g(e._element).trigger(i);
            };
          if (n) {
            var r = _.getTransitionDurationFromElement(this._dialog);
            g(this._dialog)
              .one(_.TRANSITION_END, o)
              .emulateTransitionEnd(r);
          } else o();
        }),
        (t._enforceFocus = function() {
          var e = this;
          g(document)
            .off(re.FOCUSIN)
            .on(re.FOCUSIN, function(t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === g(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function() {
          var e = this;
          this._isShown && this._config.keyboard
            ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function() {
          var e = this;
          this._isShown
            ? g(window).on(re.RESIZE, function(t) {
                return e.handleUpdate(t);
              })
            : g(window).off(re.RESIZE);
        }),
        (t._hideModal = function() {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            (this._isTransitioning = !1),
            this._showBackdrop(function() {
              g(document.body).removeClass(ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(re.HIDDEN);
            });
        }),
        (t._removeBackdrop = function() {
          this._backdrop && (g(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function(t) {
          var e = this,
            n = g(this._element).hasClass(he) ? he : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = le),
              n && this._backdrop.classList.add(n),
              g(this._backdrop).appendTo(document.body),
              g(this._element).on(re.CLICK_DISMISS, function(t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === e._config.backdrop ? e._element.focus() : e.hide());
              }),
              n && _.reflow(this._backdrop),
              g(this._backdrop).addClass(ue),
              !t)
            )
              return;
            if (!n) return void t();
            var i = _.getTransitionDurationFromElement(this._backdrop);
            g(this._backdrop)
              .one(_.TRANSITION_END, t)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            g(this._backdrop).removeClass(ue);
            var o = function() {
              e._removeBackdrop(), t && t();
            };
            if (g(this._element).hasClass(he)) {
              var r = _.getTransitionDurationFromElement(this._backdrop);
              g(this._backdrop)
                .one(_.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else t && t();
        }),
        (t._adjustDialog = function() {
          var t = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + 'px');
        }),
        (t._resetAdjustments = function() {
          (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
        }),
        (t._checkScrollbar = function() {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function() {
          var o = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(me)),
              e = [].slice.call(document.querySelectorAll(pe));
            g(t).each(function(t, e) {
              var n = e.style.paddingRight,
                i = g(e).css('padding-right');
              g(e)
                .data('padding-right', n)
                .css('padding-right', parseFloat(i) + o._scrollbarWidth + 'px');
            }),
              g(e).each(function(t, e) {
                var n = e.style.marginRight,
                  i = g(e).css('margin-right');
                g(e)
                  .data('margin-right', n)
                  .css('margin-right', parseFloat(i) - o._scrollbarWidth + 'px');
              });
            var n = document.body.style.paddingRight,
              i = g(document.body).css('padding-right');
            g(document.body)
              .data('padding-right', n)
              .css('padding-right', parseFloat(i) + this._scrollbarWidth + 'px');
          }
          g(document.body).addClass(ce);
        }),
        (t._resetScrollbar = function() {
          var t = [].slice.call(document.querySelectorAll(me));
          g(t).each(function(t, e) {
            var n = g(e).data('padding-right');
            g(e).removeData('padding-right'), (e.style.paddingRight = n || '');
          });
          var e = [].slice.call(document.querySelectorAll('' + pe));
          g(e).each(function(t, e) {
            var n = g(e).data('margin-right');
            'undefined' != typeof n &&
              g(e)
                .css('margin-right', n)
                .removeData('margin-right');
          });
          var n = g(document.body).data('padding-right');
          g(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '');
        }),
        (t._getScrollbarWidth = function() {
          var t = document.createElement('div');
          (t.className = ae), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function(n, i) {
          return this.each(function() {
            var t = g(this).data(te),
              e = l({}, ie, g(this).data(), 'object' == typeof n && n ? n : {});
            if ((t || ((t = new o(this, e)), g(this).data(te, t)), 'string' == typeof n)) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        s(o, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return ie;
            },
          },
        ]),
        o
      );
    })();
  g(document).on(re.CLICK_DATA_API, ge, function(t) {
    var e,
      n = this,
      i = _.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? 'toggle' : l({}, g(e).data(), g(this).data());
    ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
    var r = g(e).one(re.SHOW, function(t) {
      t.isDefaultPrevented() ||
        r.one(re.HIDDEN, function() {
          g(n).is(':visible') && n.focus();
        });
    });
    ve._jQueryInterface.call(g(e), o, this);
  }),
    (g.fn[Zt] = ve._jQueryInterface),
    (g.fn[Zt].Constructor = ve),
    (g.fn[Zt].noConflict = function() {
      return (g.fn[Zt] = ne), ve._jQueryInterface;
    });
  var ye = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
    Ee = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && 'function' == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, 'text/html'),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll('*')),
        i = function(t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), 'continue';
          var o = [].slice.call(n.attributes),
            r = [].concat(s['*'] || [], s[i] || []);
          o.forEach(function(t) {
            (function(t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te))
                );
              for (
                var i = e.filter(function(t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) || n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var be = 'tooltip',
    Ie = 'bs.tooltip',
    De = '.' + Ie,
    we = g.fn[be],
    Ae = 'bs-tooltip',
    Ne = new RegExp('(^|\\s)' + Ae + '\\S+', 'g'),
    Oe = ['sanitize', 'whiteList', 'sanitizeFn'],
    ke = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
    },
    Pe = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
    Le = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Ee,
    },
    je = 'show',
    He = 'out',
    Re = {
      HIDE: 'hide' + De,
      HIDDEN: 'hidden' + De,
      SHOW: 'show' + De,
      SHOWN: 'shown' + De,
      INSERTED: 'inserted' + De,
      CLICK: 'click' + De,
      FOCUSIN: 'focusin' + De,
      FOCUSOUT: 'focusout' + De,
      MOUSEENTER: 'mouseenter' + De,
      MOUSELEAVE: 'mouseleave' + De,
    },
    xe = 'fade',
    Fe = 'show',
    Ue = '.tooltip-inner',
    We = '.arrow',
    qe = 'hover',
    Me = 'focus',
    Ke = 'click',
    Qe = 'manual',
    Be = (function() {
      function i(t, e) {
        if ('undefined' == typeof u)
          throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function() {
          this._isEnabled = !0;
        }),
        (t.disable = function() {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function(t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = g(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                g(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
            } else {
              if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element)
              .closest('.modal')
              .off('hide.bs.modal'),
            this.tip && g(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function() {
          var e = this;
          if ('none' === g(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var t = g.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            g(this.element).trigger(t);
            var n = _.findShadowRoot(this.element),
              i = g.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element,
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = _.getUID(this.constructor.NAME);
            o.setAttribute('id', r),
              this.element.setAttribute('aria-describedby', r),
              this.setContent(),
              this.config.animation && g(o).addClass(xe);
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            g(o).data(this.constructor.DATA_KEY, this),
              g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
              g(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new u(this.element, o, {
                placement: a,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: We },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function(t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                },
                onUpdate: function(t) {
                  return e._handlePopperPlacementChange(t);
                },
              })),
              g(o).addClass(Fe),
              'ontouchstart' in document.documentElement &&
                g(document.body)
                  .children()
                  .on('mouseover', null, g.noop);
            var c = function() {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                g(e.element).trigger(e.constructor.Event.SHOWN),
                t === He && e._leave(null, e);
            };
            if (g(this.tip).hasClass(xe)) {
              var h = _.getTransitionDurationFromElement(this.tip);
              g(this.tip)
                .one(_.TRANSITION_END, c)
                .emulateTransitionEnd(h);
            } else c();
          }
        }),
        (t.hide = function(t) {
          var e = this,
            n = this.getTipElement(),
            i = g.Event(this.constructor.Event.HIDE),
            o = function() {
              e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute('aria-describedby'),
                g(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((g(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (g(n).removeClass(Fe),
              'ontouchstart' in document.documentElement &&
                g(document.body)
                  .children()
                  .off('mouseover', null, g.noop),
              (this._activeTrigger[Ke] = !1),
              (this._activeTrigger[Me] = !1),
              (this._activeTrigger[qe] = !1),
              g(this.tip).hasClass(xe))
            ) {
              var r = _.getTransitionDurationFromElement(n);
              g(n)
                .one(_.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
            this._hoverState = '';
          }
        }),
        (t.update = function() {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function() {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function(t) {
          g(this.getTipElement()).addClass(Ae + '-' + t);
        }),
        (t.getTipElement = function() {
          return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function() {
          var t = this.getTipElement();
          this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
            g(t).removeClass(xe + ' ' + Fe);
        }),
        (t.setElementContent = function(t, e) {
          'object' != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? g(e)
                .parent()
                .is(t) || t.empty().append(e)
            : t.text(g(e).text());
        }),
        (t.getTitle = function() {
          var t = this.element.getAttribute('data-original-title');
          return (
            t ||
              (t =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (t._getOffset = function() {
          var e = this,
            t = {};
          return (
            'function' == typeof this.config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function() {
          return !1 === this.config.container
            ? document.body
            : _.isElement(this.config.container)
            ? g(this.config.container)
            : g(document).find(this.config.container);
        }),
        (t._getAttachment = function(t) {
          return Pe[t.toUpperCase()];
        }),
        (t._setListeners = function() {
          var i = this;
          this.config.trigger.split(' ').forEach(function(t) {
            if ('click' === t)
              g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                return i.toggle(t);
              });
            else if (t !== Qe) {
              var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
              g(i.element)
                .on(e, i.config.selector, function(t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function(t) {
                  return i._leave(t);
                });
            }
          }),
            g(this.element)
              .closest('.modal')
              .on('hide.bs.modal', function() {
                i.element && i.hide();
              }),
            this.config.selector
              ? (this.config = l({}, this.config, { trigger: 'manual', selector: '' }))
              : this._fixTitle();
        }),
        (t._fixTitle = function() {
          var t = typeof this.element.getAttribute('data-original-title');
          (this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || '',
            ),
            this.element.setAttribute('title', ''));
        }),
        (t._enter = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusin' === t.type ? Me : qe] = !0),
            g(e.getTipElement()).hasClass(Fe) || e._hoverState === je
              ? (e._hoverState = je)
              : (clearTimeout(e._timeout),
                (e._hoverState = je),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function() {
                      e._hoverState === je && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusout' === t.type ? Me : qe] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = He),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function() {
                    e._hoverState === He && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function() {
          for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function(t) {
          var e = g(this.element).data();
          return (
            Object.keys(e).forEach(function(t) {
              -1 !== Oe.indexOf(t) && delete e[t];
            }),
            'number' ==
              typeof (t = l({}, this.constructor.Default, e, 'object' == typeof t && t ? t : {}))
                .delay && (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(be, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (t._getDelegateConfig = function() {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function() {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(Ne);
          null !== e && e.length && t.removeClass(e.join(''));
        }),
        (t._handlePopperPlacementChange = function(t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function() {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (g(t).removeClass(xe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this).data(Ie),
              e = 'object' == typeof n && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ie, t)), 'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return Le;
            },
          },
          {
            key: 'NAME',
            get: function() {
              return be;
            },
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Ie;
            },
          },
          {
            key: 'Event',
            get: function() {
              return Re;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return De;
            },
          },
          {
            key: 'DefaultType',
            get: function() {
              return ke;
            },
          },
        ]),
        i
      );
    })();
  (g.fn[be] = Be._jQueryInterface),
    (g.fn[be].Constructor = Be),
    (g.fn[be].noConflict = function() {
      return (g.fn[be] = we), Be._jQueryInterface;
    });
  var Ve = 'popover',
    Ye = 'bs.popover',
    ze = '.' + Ye,
    Xe = g.fn[Ve],
    $e = 'bs-popover',
    Ge = new RegExp('(^|\\s)' + $e + '\\S+', 'g'),
    Je = l({}, Be.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Ze = l({}, Be.DefaultType, { content: '(string|element|function)' }),
    tn = 'fade',
    en = 'show',
    nn = '.popover-header',
    on = '.popover-body',
    rn = {
      HIDE: 'hide' + ze,
      HIDDEN: 'hidden' + ze,
      SHOW: 'show' + ze,
      SHOWN: 'shown' + ze,
      INSERTED: 'inserted' + ze,
      CLICK: 'click' + ze,
      FOCUSIN: 'focusin' + ze,
      FOCUSOUT: 'focusout' + ze,
      MOUSEENTER: 'mouseenter' + ze,
      MOUSELEAVE: 'mouseleave' + ze,
    },
    sn = (function(t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function(t) {
          g(this.getTipElement()).addClass($e + '-' + t);
        }),
        (o.getTipElement = function() {
          return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
        }),
        (o.setContent = function() {
          var t = g(this.getTipElement());
          this.setElementContent(t.find(nn), this.getTitle());
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(on), e),
            t.removeClass(tn + ' ' + en);
        }),
        (o._getContent = function() {
          return this.element.getAttribute('data-content') || this.config.content;
        }),
        (o._cleanTipClass = function() {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(Ge);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this).data(Ye),
              e = 'object' == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ye, t)), 'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n]) throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return Je;
            },
          },
          {
            key: 'NAME',
            get: function() {
              return Ve;
            },
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Ye;
            },
          },
          {
            key: 'Event',
            get: function() {
              return rn;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return ze;
            },
          },
          {
            key: 'DefaultType',
            get: function() {
              return Ze;
            },
          },
        ]),
        i
      );
    })(Be);
  (g.fn[Ve] = sn._jQueryInterface),
    (g.fn[Ve].Constructor = sn),
    (g.fn[Ve].noConflict = function() {
      return (g.fn[Ve] = Xe), sn._jQueryInterface;
    });
  var an = 'scrollspy',
    ln = 'bs.scrollspy',
    cn = '.' + ln,
    hn = g.fn[an],
    un = { offset: 10, method: 'auto', target: '' },
    fn = { offset: 'number', method: 'string', target: '(string|element)' },
    dn = {
      ACTIVATE: 'activate' + cn,
      SCROLL: 'scroll' + cn,
      LOAD_DATA_API: 'load' + cn + '.data-api',
    },
    gn = 'dropdown-item',
    _n = 'active',
    mn = '[data-spy="scroll"]',
    pn = '.nav, .list-group',
    vn = '.nav-link',
    yn = '.nav-item',
    En = '.list-group-item',
    Cn = '.dropdown',
    Tn = '.dropdown-item',
    Sn = '.dropdown-toggle',
    bn = 'offset',
    In = 'position',
    Dn = (function() {
      function n(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' ' +
            vn +
            ',' +
            this._config.target +
            ' ' +
            En +
            ',' +
            this._config.target +
            ' ' +
            Tn),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          g(this._scrollElement).on(dn.SCROLL, function(t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = n.prototype;
      return (
        (t.refresh = function() {
          var e = this,
            t = this._scrollElement === this._scrollElement.window ? bn : In,
            o = 'auto' === this._config.method ? t : this._config.method,
            r = o === In ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function(t) {
                var e,
                  n = _.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height) return [g(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function(t) {
                return t;
              })
              .sort(function(t, e) {
                return t[0] - e[0];
              })
              .forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function() {
          g.removeData(this._element, ln),
            g(this._scrollElement).off(cn),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function(t) {
          if ('string' != typeof (t = l({}, un, 'object' == typeof t && t ? t : {})).target) {
            var e = g(t.target).attr('id');
            e || ((e = _.getUID(an)), g(t.target).attr('id', e)), (t.target = '#' + e);
          }
          return _.typeCheckConfig(an, t, fn), t;
        }),
        (t._getScrollTop = function() {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function() {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          );
        }),
        (t._getOffsetHeight = function() {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function() {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ('undefined' == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function(e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(',').map(function(t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
            }),
            n = g([].slice.call(document.querySelectorAll(t.join(','))));
          n.hasClass(gn)
            ? (n
                .closest(Cn)
                .find(Sn)
                .addClass(_n),
              n.addClass(_n))
            : (n.addClass(_n),
              n
                .parents(pn)
                .prev(vn + ', ' + En)
                .addClass(_n),
              n
                .parents(pn)
                .prev(yn)
                .children(vn)
                .addClass(_n)),
            g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e });
        }),
        (t._clear = function() {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function(t) {
              return t.classList.contains(_n);
            })
            .forEach(function(t) {
              return t.classList.remove(_n);
            });
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = g(this).data(ln);
            if (
              (t || ((t = new n(this, 'object' == typeof e && e)), g(this).data(ln, t)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof t[e]) throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function() {
              return un;
            },
          },
        ]),
        n
      );
    })();
  g(window).on(dn.LOAD_DATA_API, function() {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
      var n = g(t[e]);
      Dn._jQueryInterface.call(n, n.data());
    }
  }),
    (g.fn[an] = Dn._jQueryInterface),
    (g.fn[an].Constructor = Dn),
    (g.fn[an].noConflict = function() {
      return (g.fn[an] = hn), Dn._jQueryInterface;
    });
  var wn = 'bs.tab',
    An = '.' + wn,
    Nn = g.fn.tab,
    On = {
      HIDE: 'hide' + An,
      HIDDEN: 'hidden' + An,
      SHOW: 'show' + An,
      SHOWN: 'shown' + An,
      CLICK_DATA_API: 'click' + An + '.data-api',
    },
    kn = 'dropdown-menu',
    Pn = 'active',
    Ln = 'disabled',
    jn = 'fade',
    Hn = 'show',
    Rn = '.dropdown',
    xn = '.nav, .list-group',
    Fn = '.active',
    Un = '> li > .active',
    Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    qn = '.dropdown-toggle',
    Mn = '> .dropdown-menu .active',
    Kn = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                g(this._element).hasClass(Pn)) ||
              g(this._element).hasClass(Ln)
            )
          ) {
            var t,
              i,
              e = g(this._element).closest(xn)[0],
              o = _.getSelectorFromElement(this._element);
            if (e) {
              var r = 'UL' === e.nodeName || 'OL' === e.nodeName ? Un : Fn;
              i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
            }
            var s = g.Event(On.HIDE, { relatedTarget: this._element }),
              a = g.Event(On.SHOW, { relatedTarget: i });
            if (
              (i && g(i).trigger(s),
              g(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)), this._activate(this._element, e);
              var l = function() {
                var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                  e = g.Event(On.SHOWN, { relatedTarget: i });
                g(i).trigger(t), g(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function() {
          g.removeData(this._element, wn), (this._element = null);
        }),
        (t._activate = function(t, e, n) {
          var i = this,
            o = (!e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
              ? g(e).children(Fn)
              : g(e).find(Un))[0],
            r = n && o && g(o).hasClass(jn),
            s = function() {
              return i._transitionComplete(t, o, n);
            };
          if (o && r) {
            var a = _.getTransitionDurationFromElement(o);
            g(o)
              .removeClass(Hn)
              .one(_.TRANSITION_END, s)
              .emulateTransitionEnd(a);
          } else s();
        }),
        (t._transitionComplete = function(t, e, n) {
          if (e) {
            g(e).removeClass(Pn);
            var i = g(e.parentNode).find(Mn)[0];
            i && g(i).removeClass(Pn),
              'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !1);
          }
          if (
            (g(t).addClass(Pn),
            'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0),
            _.reflow(t),
            t.classList.contains(jn) && t.classList.add(Hn),
            t.parentNode && g(t.parentNode).hasClass(kn))
          ) {
            var o = g(t).closest(Rn)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(qn));
              g(r).addClass(Pn);
            }
            t.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this),
              e = t.data(wn);
            if ((e || ((e = new i(this)), t.data(wn, e)), 'string' == typeof n)) {
              if ('undefined' == typeof e[n]) throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
        ]),
        i
      );
    })();
  g(document).on(On.CLICK_DATA_API, Wn, function(t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), 'show');
  }),
    (g.fn.tab = Kn._jQueryInterface),
    (g.fn.tab.Constructor = Kn),
    (g.fn.tab.noConflict = function() {
      return (g.fn.tab = Nn), Kn._jQueryInterface;
    });
  var Qn = 'toast',
    Bn = 'bs.toast',
    Vn = '.' + Bn,
    Yn = g.fn[Qn],
    zn = {
      CLICK_DISMISS: 'click.dismiss' + Vn,
      HIDE: 'hide' + Vn,
      HIDDEN: 'hidden' + Vn,
      SHOW: 'show' + Vn,
      SHOWN: 'shown' + Vn,
    },
    Xn = 'fade',
    $n = 'hide',
    Gn = 'show',
    Jn = 'showing',
    Zn = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    ti = { animation: !0, autohide: !0, delay: 500 },
    ei = '[data-dismiss="toast"]',
    ni = (function() {
      function i(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var t = this;
          g(this._element).trigger(zn.SHOW),
            this._config.animation && this._element.classList.add(Xn);
          var e = function() {
            t._element.classList.remove(Jn),
              t._element.classList.add(Gn),
              g(t._element).trigger(zn.SHOWN),
              t._config.autohide && t.hide();
          };
          if (
            (this._element.classList.remove($n),
            this._element.classList.add(Jn),
            this._config.animation)
          ) {
            var n = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (t.hide = function(t) {
          var e = this;
          this._element.classList.contains(Gn) &&
            (g(this._element).trigger(zn.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function() {
                  e._close();
                }, this._config.delay)));
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
            g(this._element).off(zn.CLICK_DISMISS),
            g.removeData(this._element, Bn),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function(t) {
          return (
            (t = l({}, ti, g(this._element).data(), 'object' == typeof t && t ? t : {})),
            _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function() {
          var t = this;
          g(this._element).on(zn.CLICK_DISMISS, ei, function() {
            return t.hide(!0);
          });
        }),
        (t._close = function() {
          var t = this,
            e = function() {
              t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
            };
          if ((this._element.classList.remove(Gn), this._config.animation)) {
            var n = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this),
              e = t.data(Bn);
            if (
              (e || ((e = new i(this, 'object' == typeof n && n)), t.data(Bn, e)),
              'string' == typeof n)
            ) {
              if ('undefined' == typeof e[n]) throw new TypeError('No method named "' + n + '"');
              e[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            },
          },
          {
            key: 'DefaultType',
            get: function() {
              return Zn;
            },
          },
          {
            key: 'Default',
            get: function() {
              return ti;
            },
          },
        ]),
        i
      );
    })();
  (g.fn[Qn] = ni._jQueryInterface),
    (g.fn[Qn].Constructor = ni),
    (g.fn[Qn].noConflict = function() {
      return (g.fn[Qn] = Yn), ni._jQueryInterface;
    }),
    (function() {
      if ('undefined' == typeof g)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
        );
      var t = g.fn.jquery.split(' ')[0].split('.');
      if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0])
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
        );
    })(),
    (t.Util = _),
    (t.Alert = p),
    (t.Button = P),
    (t.Carousel = lt),
    (t.Collapse = bt),
    (t.Dropdown = Jt),
    (t.Modal = ve),
    (t.Popover = sn),
    (t.Scrollspy = Dn),
    (t.Tab = Kn),
    (t.Toast = ni),
    (t.Tooltip = Be),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*------------------------------------------------------------------*/
/*	04) Jarallax Elements
/*------------------------------------------------------------------*/

/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */ !(function(n) {
  var o = {};
  function r(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = n),
    (r.c = o),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 0));
})([
  function(t, e, n) {
    t.exports = n(1);
  },
  function(t, e, n) {
    'use strict';
    var o = r(n(2));
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (0, r(n(3)).default)(),
      (0, o.default)(function() {
        'undefined' != typeof jarallax &&
          jarallax(document.querySelectorAll('[data-jarallax-element]'));
      });
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t) {
      'complete' === document.readyState || 'interactive' === document.readyState
        ? t.call()
        : document.attachEvent
        ? document.attachEvent('onreadystatechange', function() {
            'interactive' === document.readyState && t.call();
          })
        : document.addEventListener && document.addEventListener('DOMContentLoaded', t);
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i.default.jarallax;
        if (void 0 === t) return;
        var e = t.constructor;
        [
          'initImg',
          'canInitParallax',
          'init',
          'destroy',
          'clipContainer',
          'coverImage',
          'isVisible',
          'onScroll',
          'onResize',
        ].forEach(function(f) {
          var y = e.prototype[f];
          e.prototype[f] = function() {
            var t = this,
              e = arguments || [];
            if (
              ('initImg' === f &&
                null !== t.$item.getAttribute('data-jarallax-element') &&
                ((t.options.type = 'element'),
                (t.pureOptions.speed =
                  t.$item.getAttribute('data-jarallax-element') || t.pureOptions.speed)),
              'element' !== t.options.type)
            )
              return y.apply(t, e);
            switch (((t.pureOptions.threshold = t.$item.getAttribute('data-threshold') || ''), f)) {
              case 'init':
                var n = t.pureOptions.speed.split(' ');
                (t.options.speed = t.pureOptions.speed || 0),
                  (t.options.speedY = n[0] ? parseFloat(n[0]) : 0),
                  (t.options.speedX = n[1] ? parseFloat(n[1]) : 0);
                var o = t.pureOptions.threshold.split(' ');
                (t.options.thresholdY = o[0] ? parseFloat(o[0]) : null),
                  (t.options.thresholdX = o[1] ? parseFloat(o[1]) : null),
                  y.apply(t, e);
                var r = t.$item.getAttribute('data-jarallax-original-styles');
                return r && t.$item.setAttribute('style', r), !0;
              case 'onResize':
                var i = t.css(t.$item, 'transform');
                t.css(t.$item, { transform: '' });
                var a = t.$item.getBoundingClientRect();
                (t.itemData = {
                  width: a.width,
                  height: a.height,
                  y: a.top + t.getWindowData().y,
                  x: a.left,
                }),
                  t.css(t.$item, { transform: i });
                break;
              case 'onScroll':
                var l = t.getWindowData(),
                  s = (l.y + l.height / 2 - t.itemData.y - t.itemData.height / 2) / (l.height / 2),
                  u = s * t.options.speedY,
                  c = s * t.options.speedX,
                  d = u,
                  p = c;
                null !== t.options.thresholdY && u > t.options.thresholdY && (d = 0),
                  null !== t.options.thresholdX && c > t.options.thresholdX && (p = 0),
                  t.css(t.$item, { transform: 'translate3d(' + p + 'px,' + d + 'px,0)' });
                break;
              case 'initImg':
              case 'isVisible':
              case 'clipContainer':
              case 'coverImage':
                return !0;
            }
            return y.apply(t, e);
          };
        });
      });
    var o,
      r = n(4),
      i = (o = r) && o.__esModule ? o : { default: o };
  },
  function(n, t, e) {
    'use strict';
    (function(t) {
      var e;
      (e =
        'undefined' != typeof window
          ? window
          : void 0 !== t
          ? t
          : 'undefined' != typeof self
          ? self
          : {}),
        (n.exports = e);
    }.call(this, e(5)));
  },
  function(t, e, n) {
    'use strict';
    var o,
      r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            };
    o = (function() {
      return this;
    })();
    try {
      o = o || new Function('return this')();
    } catch (t) {
      'object' === ('undefined' == typeof window ? 'undefined' : r(window)) && (o = window);
    }
    t.exports = o;
  },
]);
//# sourceMappingURL=jarallax-element.min.js.map

/*------------------------------------------------------------------*/
/*	05) Jarallax
/*------------------------------------------------------------------*/

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.11.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */ !(function(n) {
  var i = {};
  function o(e) {
    if (i[e]) return i[e].exports;
    var t = (i[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = n),
    (o.c = i),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          o.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i),
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ''),
    o((o.s = 11));
})([
  ,
  ,
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      'complete' === document.readyState || 'interactive' === document.readyState
        ? e.call()
        : document.attachEvent
        ? document.attachEvent('onreadystatechange', function() {
            'interactive' === document.readyState && e.call();
          })
        : document.addEventListener && document.addEventListener('DOMContentLoaded', e);
    };
  },
  ,
  function(n, e, t) {
    'use strict';
    (function(e) {
      var t;
      (t =
        'undefined' != typeof window
          ? window
          : void 0 !== e
          ? e
          : 'undefined' != typeof self
          ? self
          : {}),
        (n.exports = t);
    }.call(this, t(5)));
  },
  function(e, t, n) {
    'use strict';
    var i,
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
    i = (function() {
      return this;
    })();
    try {
      i = i || new Function('return this')();
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : o(window)) && (i = window);
    }
    e.exports = i;
  },
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(12);
  },
  function(e, t, n) {
    'use strict';
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      o = l(n(2)),
      a = n(4),
      r = l(n(13));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = a.window.jarallax;
    if (
      ((a.window.jarallax = r.default),
      (a.window.jarallax.noConflict = function() {
        return (a.window.jarallax = s), this;
      }),
      void 0 !== a.jQuery)
    ) {
      var c = function() {
        var e = arguments || [];
        Array.prototype.unshift.call(e, this);
        var t = r.default.apply(a.window, e);
        return 'object' !== (void 0 === t ? 'undefined' : i(t)) ? t : this;
      };
      c.constructor = r.default.constructor;
      var u = a.jQuery.fn.jarallax;
      (a.jQuery.fn.jarallax = c),
        (a.jQuery.fn.jarallax.noConflict = function() {
          return (a.jQuery.fn.jarallax = u), this;
        });
    }
    (0, o.default)(function() {
      (0, r.default)(document.querySelectorAll('[data-jarallax]'));
    });
  },
  function(e, I, P) {
    'use strict';
    (function(e) {
      Object.defineProperty(I, '__esModule', { value: !0 });
      var s = function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                i = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var r, l = e[Symbol.iterator]();
                  !(i = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  !i && l.return && l.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            })(e, t);
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        },
        t = function(e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        n = r(P(2)),
        o = r(P(14)),
        a = P(4);
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u =
          -1 < navigator.userAgent.indexOf('MSIE ') ||
          -1 < navigator.userAgent.indexOf('Trident/') ||
          -1 < navigator.userAgent.indexOf('Edge/'),
        l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
        d = (function() {
          for (
            var e = 'transform WebkitTransform MozTransform'.split(' '),
              t = document.createElement('div'),
              n = 0;
            n < e.length;
            n++
          )
            if (t && void 0 !== t.style[e[n]]) return e[n];
          return !1;
        })(),
        m = void 0;
      var v = void 0,
        b = void 0,
        p = void 0,
        f = !1,
        g = !1;
      function y(e) {
        (v = a.window.innerWidth || document.documentElement.clientWidth),
          (b = l
            ? (!m &&
                document.body &&
                (((m = document.createElement('div')).style.cssText =
                  'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;'),
                document.body.appendChild(m)),
              (m ? m.clientHeight : 0) ||
                a.window.innerHeight ||
                document.documentElement.clientHeight)
            : a.window.innerHeight || document.documentElement.clientHeight),
          'object' !== (void 0 === e ? 'undefined' : c(e)) ||
            ('load' !== e.type && 'dom-loaded' !== e.type) ||
            (f = !0);
      }
      y(),
        a.window.addEventListener('resize', y),
        a.window.addEventListener('orientationchange', y),
        a.window.addEventListener('load', y),
        (0, n.default)(function() {
          y({ type: 'dom-loaded' });
        });
      var h = [],
        x = !1;
      function w() {
        if (h.length) {
          p =
            void 0 !== a.window.pageYOffset
              ? a.window.pageYOffset
              : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          var t = f || !x || x.width !== v || x.height !== b,
            n = g || t || !x || x.y !== p;
          (g = f = !1),
            (t || n) &&
              (h.forEach(function(e) {
                t && e.onResize(), n && e.onScroll();
              }),
              (x = { width: v, height: b, y: p })),
            (0, o.default)(w);
        }
      }
      var A =
          !!e.ResizeObserver &&
          new e.ResizeObserver(function(e) {
            e &&
              e.length &&
              (0, o.default)(function() {
                e.forEach(function(e) {
                  e.target && e.target.jarallax && (f || e.target.jarallax.onResize(), (g = !0));
                });
              });
          }),
        $ = 0,
        S =
          (t(j, [
            {
              key: 'css',
              value: function(t, n) {
                return 'string' == typeof n
                  ? a.window.getComputedStyle(t).getPropertyValue(n)
                  : (n.transform && d && (n[d] = n.transform),
                    Object.keys(n).forEach(function(e) {
                      t.style[e] = n[e];
                    }),
                    t);
              },
            },
            {
              key: 'extend',
              value: function(n) {
                var i = arguments;
                return (
                  (n = n || {}),
                  Object.keys(arguments).forEach(function(t) {
                    i[t] &&
                      Object.keys(i[t]).forEach(function(e) {
                        n[e] = i[t][e];
                      });
                  }),
                  n
                );
              },
            },
            {
              key: 'getWindowData',
              value: function() {
                return { width: v, height: b, y: p };
              },
            },
            {
              key: 'initImg',
              value: function() {
                var e = this,
                  t = e.options.imgElement;
                return (
                  t && 'string' == typeof t && (t = e.$item.querySelector(t)),
                  t instanceof Element || (t = null),
                  t &&
                    (e.options.keepImg
                      ? (e.image.$item = t.cloneNode(!0))
                      : ((e.image.$item = t), (e.image.$itemParent = t.parentNode)),
                    (e.image.useImgTag = !0)),
                  !(
                    !e.image.$item &&
                    (null === e.image.src &&
                      ((e.image.src =
                        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
                      (e.image.bgImage = e.css(e.$item, 'background-image'))),
                    !e.image.bgImage || 'none' === e.image.bgImage)
                  )
                );
              },
            },
            {
              key: 'canInitParallax',
              value: function() {
                return d && !this.options.disableParallax();
              },
            },
            {
              key: 'init',
              value: function() {
                var e = this,
                  t = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                  },
                  n = {};
                if (!e.options.keepImg) {
                  var i = e.$item.getAttribute('style');
                  if (
                    (i && e.$item.setAttribute('data-jarallax-original-styles', i),
                    e.image.useImgTag)
                  ) {
                    var o = e.image.$item.getAttribute('style');
                    o && e.image.$item.setAttribute('data-jarallax-original-styles', o);
                  }
                }
                if (
                  ('static' === e.css(e.$item, 'position') &&
                    e.css(e.$item, { position: 'relative' }),
                  'auto' === e.css(e.$item, 'z-index') && e.css(e.$item, { zIndex: 0 }),
                  (e.image.$container = document.createElement('div')),
                  e.css(e.image.$container, t),
                  e.css(e.image.$container, { 'z-index': e.options.zIndex }),
                  u && e.css(e.image.$container, { opacity: 0.9999 }),
                  e.image.$container.setAttribute('id', 'jarallax-container-' + e.instanceID),
                  e.$item.appendChild(e.image.$container),
                  e.image.useImgTag
                    ? (n = e.extend(
                        {
                          'object-fit': e.options.imgSize,
                          'object-position': e.options.imgPosition,
                          'font-family':
                            'object-fit: ' +
                            e.options.imgSize +
                            '; object-position: ' +
                            e.options.imgPosition +
                            ';',
                          'max-width': 'none',
                        },
                        t,
                        n,
                      ))
                    : ((e.image.$item = document.createElement('div')),
                      e.image.src &&
                        (n = e.extend(
                          {
                            'background-position': e.options.imgPosition,
                            'background-size': e.options.imgSize,
                            'background-repeat': e.options.imgRepeat,
                            'background-image': e.image.bgImage || 'url("' + e.image.src + '")',
                          },
                          t,
                          n,
                        ))),
                  ('opacity' !== e.options.type &&
                    'scale' !== e.options.type &&
                    'scale-opacity' !== e.options.type &&
                    1 !== e.options.speed) ||
                    (e.image.position = 'absolute'),
                  'fixed' === e.image.position)
                )
                  for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a; ) {
                    var l =
                      e.css(r, '-webkit-transform') ||
                      e.css(r, '-moz-transform') ||
                      e.css(r, 'transform');
                    l && 'none' !== l && ((a = 1), (e.image.position = 'absolute')),
                      (r = r.parentNode);
                  }
                (n.position = e.image.position),
                  e.css(e.image.$item, n),
                  e.image.$container.appendChild(e.image.$item),
                  e.onResize(),
                  e.onScroll(!0),
                  e.options.automaticResize && A && A.observe(e.$item),
                  e.options.onInit && e.options.onInit.call(e),
                  'none' !== e.css(e.$item, 'background-image') &&
                    e.css(e.$item, { 'background-image': 'none' }),
                  e.addToParallaxList();
              },
            },
            {
              key: 'addToParallaxList',
              value: function() {
                h.push(this), 1 === h.length && w();
              },
            },
            {
              key: 'removeFromParallaxList',
              value: function() {
                var n = this;
                h.forEach(function(e, t) {
                  e.instanceID === n.instanceID && h.splice(t, 1);
                });
              },
            },
            {
              key: 'destroy',
              value: function() {
                var e = this;
                e.removeFromParallaxList();
                var t = e.$item.getAttribute('data-jarallax-original-styles');
                if (
                  (e.$item.removeAttribute('data-jarallax-original-styles'),
                  t ? e.$item.setAttribute('style', t) : e.$item.removeAttribute('style'),
                  e.image.useImgTag)
                ) {
                  var n = e.image.$item.getAttribute('data-jarallax-original-styles');
                  e.image.$item.removeAttribute('data-jarallax-original-styles'),
                    n
                      ? e.image.$item.setAttribute('style', t)
                      : e.image.$item.removeAttribute('style'),
                    e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item);
                }
                e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles),
                  e.image.$container &&
                    e.image.$container.parentNode.removeChild(e.image.$container),
                  e.options.onDestroy && e.options.onDestroy.call(e),
                  delete e.$item.jarallax;
              },
            },
            {
              key: 'clipContainer',
              value: function() {
                if ('fixed' === this.image.position) {
                  var e = this,
                    t = e.image.$container.getBoundingClientRect(),
                    n = t.width,
                    i = t.height;
                  e.$clipStyles ||
                    ((e.$clipStyles = document.createElement('style')),
                    e.$clipStyles.setAttribute('type', 'text/css'),
                    e.$clipStyles.setAttribute('id', 'jarallax-clip-' + e.instanceID),
                    (document.head || document.getElementsByTagName('head')[0]).appendChild(
                      e.$clipStyles,
                    ));
                  var o =
                    '#jarallax-container-' +
                    e.instanceID +
                    ' {\n           clip: rect(0 ' +
                    n +
                    'px ' +
                    i +
                    'px 0);\n           clip: rect(0, ' +
                    n +
                    'px, ' +
                    i +
                    'px, 0);\n        }';
                  e.$clipStyles.styleSheet
                    ? (e.$clipStyles.styleSheet.cssText = o)
                    : (e.$clipStyles.innerHTML = o);
                }
              },
            },
            {
              key: 'coverImage',
              value: function() {
                var e = this,
                  t = e.image.$container.getBoundingClientRect(),
                  n = t.height,
                  i = e.options.speed,
                  o = 'scroll' === e.options.type || 'scroll-opacity' === e.options.type,
                  a = 0,
                  r = n,
                  l = 0;
                return (
                  o &&
                    (i < 0
                      ? ((a = i * Math.max(n, b)), b < n && (a -= i * (n - b)))
                      : (a = i * (n + b)),
                    1 < i
                      ? (r = Math.abs(a - b))
                      : i < 0
                      ? (r = a / i + Math.abs(a))
                      : (r += (b - n) * (1 - i)),
                    (a /= 2)),
                  (e.parallaxScrollDistance = a),
                  (l = o ? (b - r) / 2 : (n - r) / 2),
                  e.css(e.image.$item, {
                    height: r + 'px',
                    marginTop: l + 'px',
                    left: 'fixed' === e.image.position ? t.left + 'px' : '0',
                    width: t.width + 'px',
                  }),
                  e.options.onCoverImage && e.options.onCoverImage.call(e),
                  { image: { height: r, marginTop: l }, container: t }
                );
              },
            },
            {
              key: 'isVisible',
              value: function() {
                return this.isElementInViewport || !1;
              },
            },
            {
              key: 'onScroll',
              value: function(e) {
                var t = this,
                  n = t.$item.getBoundingClientRect(),
                  i = n.top,
                  o = n.height,
                  a = {},
                  r = n;
                if (
                  (t.options.elementInViewport &&
                    (r = t.options.elementInViewport.getBoundingClientRect()),
                  (t.isElementInViewport =
                    0 <= r.bottom && 0 <= r.right && r.top <= b && r.left <= v),
                  e || t.isElementInViewport)
                ) {
                  var l = Math.max(0, i),
                    s = Math.max(0, o + i),
                    c = Math.max(0, -i),
                    u = Math.max(0, i + o - b),
                    d = Math.max(0, o - (i + o - b)),
                    m = Math.max(0, -i + b - o),
                    p = 1 - (2 * (b - i)) / (b + o),
                    f = 1;
                  if (
                    (o < b ? (f = 1 - (c || u) / o) : s <= b ? (f = s / b) : d <= b && (f = d / b),
                    ('opacity' !== t.options.type &&
                      'scale-opacity' !== t.options.type &&
                      'scroll-opacity' !== t.options.type) ||
                      ((a.transform = 'translate3d(0,0,0)'), (a.opacity = f)),
                    'scale' === t.options.type || 'scale-opacity' === t.options.type)
                  ) {
                    var g = 1;
                    t.options.speed < 0
                      ? (g -= t.options.speed * f)
                      : (g += t.options.speed * (1 - f)),
                      (a.transform = 'scale(' + g + ') translate3d(0,0,0)');
                  }
                  if ('scroll' === t.options.type || 'scroll-opacity' === t.options.type) {
                    var y = t.parallaxScrollDistance * p;
                    'absolute' === t.image.position && (y -= i),
                      (a.transform = 'translate3d(0,' + y + 'px,0)');
                  }
                  t.css(t.image.$item, a),
                    t.options.onScroll &&
                      t.options.onScroll.call(t, {
                        section: n,
                        beforeTop: l,
                        beforeTopEnd: s,
                        afterTop: c,
                        beforeBottom: u,
                        beforeBottomEnd: d,
                        afterBottom: m,
                        visiblePercent: f,
                        fromViewportCenter: p,
                      });
                }
              },
            },
            {
              key: 'onResize',
              value: function() {
                this.coverImage(), this.clipContainer();
              },
            },
          ]),
          j);
      function j(e, t) {
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, j);
        var n = this;
        (n.instanceID = $++),
          (n.$item = e),
          (n.defaults = {
            type: 'scroll',
            speed: 0.5,
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat',
            keepImg: !1,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: !1,
            disableVideo: !1,
            automaticResize: !0,
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: !0,
            videoPlayOnlyVisible: !0,
            videoLazyLoading: !0,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
          });
        var i = n.$item.dataset || {},
          o = {};
        if (
          (Object.keys(i).forEach(function(e) {
            var t = e.substr(0, 1).toLowerCase() + e.substr(1);
            t && void 0 !== n.defaults[t] && (o[t] = i[e]);
          }),
          (n.options = n.extend({}, n.defaults, o, t)),
          (n.pureOptions = n.extend({}, n.options)),
          Object.keys(n.options).forEach(function(e) {
            'true' === n.options[e]
              ? (n.options[e] = !0)
              : 'false' === n.options[e] && (n.options[e] = !1);
          }),
          (n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed)))),
          'string' == typeof n.options.disableParallax &&
            (n.options.disableParallax = new RegExp(n.options.disableParallax)),
          n.options.disableParallax instanceof RegExp)
        ) {
          var a = n.options.disableParallax;
          n.options.disableParallax = function() {
            return a.test(navigator.userAgent);
          };
        }
        if (
          ('function' != typeof n.options.disableParallax &&
            (n.options.disableParallax = function() {
              return !1;
            }),
          'string' == typeof n.options.disableVideo &&
            (n.options.disableVideo = new RegExp(n.options.disableVideo)),
          n.options.disableVideo instanceof RegExp)
        ) {
          var r = n.options.disableVideo;
          n.options.disableVideo = function() {
            return r.test(navigator.userAgent);
          };
        }
        'function' != typeof n.options.disableVideo &&
          (n.options.disableVideo = function() {
            return !1;
          });
        var l = n.options.elementInViewport;
        l &&
          'object' === (void 0 === l ? 'undefined' : c(l)) &&
          void 0 !== l.length &&
          (l = s(l, 1)[0]);
        l instanceof Element || (l = null),
          (n.options.elementInViewport = l),
          (n.image = {
            src: n.options.imgSrc || null,
            $container: null,
            useImgTag: !1,
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed',
          }),
          n.initImg() && n.canInitParallax() && n.init();
      }
      function E(e, t) {
        ('object' === ('undefined' == typeof HTMLElement ? 'undefined' : c(HTMLElement))
          ? e instanceof HTMLElement
          : e &&
            'object' === (void 0 === e ? 'undefined' : c(e)) &&
            null !== e &&
            1 === e.nodeType &&
            'string' == typeof e.nodeName) && (e = [e]);
        for (
          var n = t, i = Array.prototype.slice.call(arguments, 2), o = e.length, a = 0, r = void 0;
          a < o;
          a++
        )
          if (
            ('object' === (void 0 === n ? 'undefined' : c(n)) || void 0 === n
              ? e[a].jarallax || (e[a].jarallax = new S(e[a], n))
              : e[a].jarallax && (r = e[a].jarallax[n].apply(e[a].jarallax, i)),
            void 0 !== r)
          )
            return r;
        return e;
      }
      (E.constructor = S), (I.default = E);
    }.call(this, P(5)));
  },
  function(e, t, n) {
    'use strict';
    var i = n(15),
      o =
        i.requestAnimationFrame ||
        i.webkitRequestAnimationFrame ||
        i.mozRequestAnimationFrame ||
        function(e) {
          var t = +new Date(),
            n = Math.max(0, 16 - (t - a)),
            i = setTimeout(e, n);
          return (a = t), i;
        },
      a = +new Date();
    var r =
      i.cancelAnimationFrame ||
      i.webkitCancelAnimationFrame ||
      i.mozCancelAnimationFrame ||
      clearTimeout;
    Function.prototype.bind && ((o = o.bind(i)), (r = r.bind(i))), ((e.exports = o).cancel = r);
  },
  function(n, e, t) {
    'use strict';
    (function(e) {
      var t;
      (t =
        'undefined' != typeof window
          ? window
          : void 0 !== e
          ? e
          : 'undefined' != typeof self
          ? self
          : {}),
        (n.exports = t);
    }.call(this, t(5)));
  },
]);
//# sourceMappingURL=jarallax.min.js.map

/*------------------------------------------------------------------*/
/*	06) WOW 
/*------------------------------------------------------------------*/

/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */ (function() {
  var a,
    b,
    c,
    d,
    e,
    f = function(a, b) {
      return function() {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function(a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function() {
    function a() {}
    return (
      (a.prototype.extend = function(a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
      }),
      (a.prototype.createEvent = function(a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent('CustomEvent')), e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function(a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : 'on' + b in (null != a)
          ? a['on' + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function(a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent('on' + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function(a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent('on' + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function() {
        return 'innerHeight' in window ? window.innerHeight : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function() {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function() {
        function a() {
          'undefined' != typeof console &&
            null !== console &&
            console.warn('MutationObserver is not supported by your browser.'),
            'undefined' != typeof console &&
              null !== console &&
              console.warn(
                'WOW.js cannot detect dom mutations, please call .sync() after loading new content.',
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function() {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function(a) {
        return (
          (this.getPropertyValue = function(b) {
            var c;
            return (
              'float' === b && (b = 'styleFloat'),
              e.test(b) &&
                b.replace(e, function(a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function() {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
        }),
        (e.prototype.init = function() {
          var a;
          return (
            (this.element = window.document.documentElement),
            'interactive' === (a = document.readyState) || 'complete' === a
              ? this.start()
              : this.util().addEvent(document, 'DOMContentLoaded', this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function() {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function() {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll('.' + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function() {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(window, 'scroll', this.scrollHandler),
              this.util().addEvent(window, 'resize', this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function(a) {
                    return function(b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function() {
                              var a, b, c, d;
                              for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a),
                          );
                      return g;
                    };
                  })(this),
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function() {
          return (
            (this.stopped = !0),
            this.util().removeEvent(window, 'scroll', this.scrollHandler),
            this.util().removeEvent(window, 'resize', this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function() {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function(a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll('.' + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function(a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + ' ' + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, 'animationend', this.resetAnimation),
            this.util().addEvent(a, 'oanimationend', this.resetAnimation),
            this.util().addEvent(a, 'webkitAnimationEnd', this.resetAnimation),
            this.util().addEvent(a, 'MSAnimationEnd', this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function(a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute('data-wow-duration')),
            (c = a.getAttribute('data-wow-delay')),
            (e = a.getAttribute('data-wow-iteration')),
            this.animate(
              (function(f) {
                return function() {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this),
            )
          );
        }),
        (e.prototype.animate = (function() {
          return 'requestAnimationFrame' in window
            ? function(a) {
                return window.requestAnimationFrame(a);
              }
            : function(a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function() {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = 'visible'));
          return e;
        }),
        (e.prototype.resetAnimation = function(a) {
          var b;
          return a.type.toLowerCase().indexOf('animationend') >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className.replace(this.config.animateClass, '').trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function(a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? 'hidden' : 'visible'),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, { animationName: b ? 'none' : this.cachedAnimationName(a) }),
            a
          );
        }),
        (e.prototype.vendors = ['moz', 'webkit']),
        (e.prototype.vendorSet = function(a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a['' + c] = e),
              d.push(
                function() {
                  var b, d, g, h;
                  for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)
                    (f = g[b]), h.push((a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] = e));
                  return h;
                }.call(this),
              );
          return d;
        }),
        (e.prototype.vendorCSS = function(a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue('-' + i + '-' + b));
          return g;
        }),
        (e.prototype.animationName = function(a) {
          var b;
          try {
            b = this.vendorCSS(a, 'animation-name').cssText;
          } catch (c) {
            b = d(a).getPropertyValue('animation-name');
          }
          return 'none' === b ? '' : b;
        }),
        (e.prototype.cacheAnimationName = function(a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function(a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function() {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function() {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function() {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function(a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function(a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute('data-wow-offset') || this.config.offset),
            (f = window.pageYOffset),
            (e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function() {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function() {
          return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }),
        e
      );
    })());
}.call(this));

/*------------------------------------------------------------------*/
/*	07) Waypoints 
/*------------------------------------------------------------------*/

/*!
Waypoints - 4.0.0
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function() {
  'use strict';
  function t(o) {
    if (!o) throw new Error('No options passed to Waypoint constructor');
    if (!o.element) throw new Error('No element option passed to Waypoint constructor');
    if (!o.handler) throw new Error('No handler option passed to Waypoint constructor');
    (this.key = 'waypoint-' + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function(t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function() {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function() {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function() {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function() {
      return this.group.next(this);
    }),
    (t.prototype.previous = function() {
      return this.group.previous(this);
    }),
    (t.invokeAll = function(t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function() {
      t.invokeAll('destroy');
    }),
    (t.disableAll = function() {
      t.invokeAll('disable');
    }),
    (t.enableAll = function() {
      t.invokeAll('enable');
    }),
    (t.refreshAll = function() {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function() {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: 'default',
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      'bottom-in-view': function() {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      'right-in-view': function() {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function() {
    'use strict';
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function(t) {
      var e = t.options.horizontal ? 'horizontal' : 'vertical';
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off('.waypoints'), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function() {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on('resize.waypoints', function() {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function() {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on('scroll.waypoints', function() {
          (!e.didScroll || n.isTouch) && ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function() {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function() {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function() {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function() {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
              offsetProp: 'left',
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
              offsetProp: 'top',
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]),
              'function' == typeof f
                ? (f = f.apply(d))
                : 'string' == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf('%') > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function() {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function(t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function() {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function(e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function() {
    'use strict';
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function(t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = 'up' === i || 'left' === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function() {
        return this.waypoints[0];
      }),
      (i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function() {
    'use strict';
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop',
      ],
      function(e, i) {
        t.prototype[i] = function() {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      },
    ),
      e.each(['extend', 'inArray', 'isEmptyObject'], function(i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: 'jquery', Adapter: t }),
      (i.Adapter = t);
  })(),
  (function() {
    'use strict';
    function t(t) {
      return function() {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function() {
            var n = t.extend({}, o, { element: this });
            'string' == typeof n.context && (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*------------------------------------------------------------------*/
/*	08) Counter Up 
/*------------------------------------------------------------------*/

/*!
 * jquery.counterup.js 2.1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Feb 24, 2017
 */
!(function(e) {
  'use strict';
  e.fn.counterUp = function(t) {
    var m,
      g = e.extend(
        {
          time: 400,
          delay: 10,
          offset: 100,
          beginAt: 0,
          formatter: !1,
          context: 'window',
          callback: function() {},
        },
        t,
      );
    return this.each(function() {
      var p = e(this),
        h = {
          time: e(this).data('counterup-time') || g.time,
          delay: e(this).data('counterup-delay') || g.delay,
          offset: e(this).data('counterup-offset') || g.offset,
          beginAt: e(this).data('counterup-beginat') || g.beginAt,
          context: e(this).data('counterup-context') || g.context,
        };
      p.waypoint(
        function(t) {
          !(function() {
            var t = [],
              e = h.time / h.delay,
              a = p.attr('data-num') ? p.attr('data-num') : p.text(),
              n = /[0-9]+,[0-9]+/.test(a),
              u = ((a = a.replace(/,/g, '')).split('.')[1] || []).length;
            h.beginAt > a && (h.beginAt = a);
            var o = /[0-9]+:[0-9]+:[0-9]+/.test(a);
            if (o) {
              var r = a.split(':'),
                i = 1;
              for (m = 0; 0 < r.length; ) (m += i * parseInt(r.pop(), 10)), (i *= 60);
            }
            for (var c = e; c >= (h.beginAt / a) * e; c--) {
              var s = parseFloat((a / e) * c).toFixed(u);
              if (o) {
                s = parseInt((m / e) * c);
                var f = parseInt(s / 3600) % 24,
                  l = parseInt(s / 60) % 60,
                  d = parseInt(s % 60, 10);
                s =
                  (f < 10 ? '0' + f : f) +
                  ':' +
                  (l < 10 ? '0' + l : l) +
                  ':' +
                  (d < 10 ? '0' + d : d);
              }
              if (n)
                for (; /(\d+)(\d{3})/.test(s.toString()); )
                  s = s.toString().replace(/(\d+)(\d{3})/, '$1,$2');
              g.formatter && (s = g.formatter.call(this, s)), t.unshift(s);
            }
            p.data('counterup-nums', t), p.text(h.beginAt);
            p.data('counterup-func', function() {
              p.data('counterup-nums')
                ? (p.html(p.data('counterup-nums').shift()),
                  p.data('counterup-nums').length
                    ? setTimeout(p.data('counterup-func'), h.delay)
                    : (p.data('counterup-nums', null),
                      p.data('counterup-func', null),
                      g.callback.call(this)))
                : g.callback.call(this);
            }),
              setTimeout(p.data('counterup-func'), h.delay);
          })(),
            this.destroy();
        },
        { offset: h.offset + '%', context: h.context },
      );
    });
  };
})(jQuery);

/*------------------------------------------------------------------*/
/*	09) jQuery Easing
/*------------------------------------------------------------------*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
(jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(n, e, t, u, a) {
      return jQuery.easing[jQuery.easing.def](n, e, t, u, a);
    },
    easeInQuad: function(n, e, t, u, a) {
      return u * (e /= a) * e + t;
    },
    easeOutQuad: function(n, e, t, u, a) {
      return -u * (e /= a) * (e - 2) + t;
    },
    easeInOutQuad: function(n, e, t, u, a) {
      return (e /= a / 2) < 1 ? (u / 2) * e * e + t : (-u / 2) * (--e * (e - 2) - 1) + t;
    },
    easeInCubic: function(n, e, t, u, a) {
      return u * (e /= a) * e * e + t;
    },
    easeOutCubic: function(n, e, t, u, a) {
      return u * ((e = e / a - 1) * e * e + 1) + t;
    },
    easeInOutCubic: function(n, e, t, u, a) {
      return (e /= a / 2) < 1 ? (u / 2) * e * e * e + t : (u / 2) * ((e -= 2) * e * e + 2) + t;
    },
    easeInQuart: function(n, e, t, u, a) {
      return u * (e /= a) * e * e * e + t;
    },
    easeOutQuart: function(n, e, t, u, a) {
      return -u * ((e = e / a - 1) * e * e * e - 1) + t;
    },
    easeInOutQuart: function(n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (u / 2) * e * e * e * e + t
        : (-u / 2) * ((e -= 2) * e * e * e - 2) + t;
    },
    easeInQuint: function(n, e, t, u, a) {
      return u * (e /= a) * e * e * e * e + t;
    },
    easeOutQuint: function(n, e, t, u, a) {
      return u * ((e = e / a - 1) * e * e * e * e + 1) + t;
    },
    easeInOutQuint: function(n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (u / 2) * e * e * e * e * e + t
        : (u / 2) * ((e -= 2) * e * e * e * e + 2) + t;
    },
    easeInSine: function(n, e, t, u, a) {
      return -u * Math.cos((e / a) * (Math.PI / 2)) + u + t;
    },
    easeOutSine: function(n, e, t, u, a) {
      return u * Math.sin((e / a) * (Math.PI / 2)) + t;
    },
    easeInOutSine: function(n, e, t, u, a) {
      return (-u / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
    },
    easeInExpo: function(n, e, t, u, a) {
      return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t;
    },
    easeOutExpo: function(n, e, t, u, a) {
      return e == a ? t + u : u * (1 - Math.pow(2, (-10 * e) / a)) + t;
    },
    easeInOutExpo: function(n, e, t, u, a) {
      return 0 == e
        ? t
        : e == a
        ? t + u
        : (e /= a / 2) < 1
        ? (u / 2) * Math.pow(2, 10 * (e - 1)) + t
        : (u / 2) * (2 - Math.pow(2, -10 * --e)) + t;
    },
    easeInCirc: function(n, e, t, u, a) {
      return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
    },
    easeOutCirc: function(n, e, t, u, a) {
      return u * Math.sqrt(1 - (e = e / a - 1) * e) + t;
    },
    easeInOutCirc: function(n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (-u / 2) * (Math.sqrt(1 - e * e) - 1) + t
        : (u / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
    },
    easeInElastic: function(n, e, t, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      if (0 == e) return t;
      if (1 == (e /= a)) return t + u;
      if (((i = i || 0.3 * a), s < Math.abs(u))) {
        s = u;
        r = i / 4;
      } else r = (i / (2 * Math.PI)) * Math.asin(u / s);
      return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * a - r) * (2 * Math.PI)) / i) + t;
    },
    easeOutElastic: function(n, e, t, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      if (0 == e) return t;
      if (1 == (e /= a)) return t + u;
      if (((i = i || 0.3 * a), s < Math.abs(u))) {
        s = u;
        r = i / 4;
      } else r = (i / (2 * Math.PI)) * Math.asin(u / s);
      return s * Math.pow(2, -10 * e) * Math.sin(((e * a - r) * (2 * Math.PI)) / i) + u + t;
    },
    easeInOutElastic: function(n, e, t, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      if (0 == e) return t;
      if (2 == (e /= a / 2)) return t + u;
      if (((i = i || a * (0.3 * 1.5)), s < Math.abs(u))) {
        s = u;
        r = i / 4;
      } else r = (i / (2 * Math.PI)) * Math.asin(u / s);
      return e < 1
        ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * a - r) * (2 * Math.PI)) / i) * -0.5 + t
        : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e * a - r) * (2 * Math.PI)) / i) * 0.5 +
            u +
            t;
    },
    easeInBack: function(n, e, t, u, a, r) {
      return null == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t;
    },
    easeOutBack: function(n, e, t, u, a, r) {
      return null == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t;
    },
    easeInOutBack: function(n, e, t, u, a, r) {
      return (
        null == r && (r = 1.70158),
        (e /= a / 2) < 1
          ? (u / 2) * (e * e * ((1 + (r *= 1.525)) * e - r)) + t
          : (u / 2) * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
      );
    },
    easeInBounce: function(n, e, t, u, a) {
      return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t;
    },
    easeOutBounce: function(n, e, t, u, a) {
      return (e /= a) < 1 / 2.75
        ? u * (7.5625 * e * e) + t
        : e < 2 / 2.75
        ? u * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
        : e < 2.5 / 2.75
        ? u * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
        : u * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
    },
    easeInOutBounce: function(n, e, t, u, a) {
      return e < a / 2
        ? 0.5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t
        : 0.5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + 0.5 * u + t;
    },
  });

/*------------------------------------------------------------------*/
/*	10) ScrollIt
/*------------------------------------------------------------------*/
(function(e) {
  'use strict';
  var t = 'ScrollIt',
    n = '1.0.3';
  var r = {
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset: 0,
  };
  e.scrollIt = function(t) {
    var n = e.extend(r, t),
      i = 0,
      s = e('[data-scroll-index]:last').attr('data-scroll-index');
    var o = function(t) {
      if (t < 0 || t > s) return;
      var r = e('[data-scroll-index=' + t + ']').offset().top + n.topOffset + 1;
      e('html,body').animate({ scrollTop: r, easing: n.easing }, n.scrollTime);
    };
    var u = function(t) {
      var n =
        e(t.target)
          .closest('[data-scroll-nav]')
          .attr('data-scroll-nav') ||
        e(t.target)
          .closest('[data-scroll-goto]')
          .attr('data-scroll-goto');
      o(parseInt(n));
    };
    var a = function(t) {
      var r = t.which;
      if (e('html,body').is(':animated') && (r == n.upKey || r == n.downKey)) {
        return false;
      }
      if (r == n.upKey && i > 0) {
        o(parseInt(i) - 1);
        return false;
      } else if (r == n.downKey && i < s) {
        o(parseInt(i) + 1);
        return false;
      }
      return true;
    };
    var f = function(t) {
      if (n.onPageChange && t && i != t) n.onPageChange(t);
      i = t;
      e('[data-scroll-nav]').removeClass(n.activeClass);
      e('[data-scroll-nav=' + t + ']').addClass(n.activeClass);
    };
    var l = function() {
      var t = e(window).scrollTop();
      var r = e('[data-scroll-index]').filter(function(r, i) {
        return (
          t >= e(i).offset().top + n.topOffset &&
          t < e(i).offset().top + n.topOffset + e(i).outerHeight()
        );
      });
      var i = r.first().attr('data-scroll-index');
      f(i);
    };
    e(window)
      .on('scroll', l)
      .scroll();
    e(window).on('keydown', a);
    e('body').on('click', '[data-scroll-nav], [data-scroll-goto]', function(e) {
      e.preventDefault();
      u(e);
    });
  };
})(jQuery);

/*------------------------------------------------------------------*/
/*	11) MBYTBPLAYER 
/*------------------------------------------------------------------*/

/*jquery.mb.YTPlayer 05-04-2019
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2019. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */

var ytp = ytp || {};
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady || ((ytp.YTAPIReady = !0), jQuery(document).trigger('YTAPIReady'));
}
var getYTPVideoID = function(e) {
  var r, t;
  return (
    0 < e.indexOf('youtu.be') || 0 < e.indexOf('youtube.com/embed')
      ? (r = (t =
          0 < (r = e.substr(e.lastIndexOf('/') + 1, e.length)).indexOf('?list=')
            ? r.substr(r.lastIndexOf('='), r.length)
            : null)
          ? r.substr(0, r.lastIndexOf('?'))
          : r)
      : (t =
          -1 < e.indexOf('http')
            ? ((r = e.match(/[\\?&]v=([^&#]*)/)[1]),
              0 < e.indexOf('list=') ? e.match(/[\\?&]list=([^&#]*)/)[1] : null)
            : (r = 15 < e.length ? null : e)
            ? null
            : e),
    { videoID: r, playlistID: t }
  );
};
function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)];
  }
}
!(function(jQuery, ytp) {
  (jQuery.mbYTPlayer = {
    name: 'jquery.mb.YTPlayer',
    version: '3.2.10',
    build: '7430',
    author: 'Matteo Bicocchi (pupunzi)',
    apiKey: '',
    defaults: {
      videoURL: null,
      containment: 'body',
      ratio: 'auto',
      fadeOnStartTime: 1e3,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      coverImage: !1,
      loop: !0,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: 'default',
      vol: 50,
      mute: !1,
      showControls: !0,
      anchor: 'center,center',
      showAnnotations: !1,
      cc_load_policy: !1,
      showYTLogo: !0,
      useOnMobile: !0,
      mobileFallbackImage: null,
      playOnlyIfVisible: !1,
      onScreenPercentage: 30,
      stopMovieOnBlur: !0,
      realFullscreen: !0,
      optimizeDisplay: !0,
      abundance: 0.3,
      gaTrack: !0,
      remember_last_time: !1,
      addFilters: !1,
      onReady: function(e) {},
      onError: function(e, r) {},
    },
    controls: {
      play: 'P',
      pause: 'p',
      mute: 'M',
      unmute: 'A',
      onlyYT: 'O',
      showSite: 'R',
      ytLogo: 'Y',
    },
    controlBar: null,
    locationProtocol: 'https:',
    defaultFilters: {
      grayscale: { value: 0, unit: '%' },
      hue_rotate: { value: 0, unit: 'deg' },
      invert: { value: 0, unit: '%' },
      opacity: { value: 0, unit: '%' },
      saturate: { value: 0, unit: '%' },
      sepia: { value: 0, unit: '%' },
      brightness: { value: 0, unit: '%' },
      contrast: { value: 0, unit: '%' },
      blur: { value: 0, unit: 'px' },
    },
    buildPlayer: function(options) {
      if (ytp.YTAPIReady || void 0 !== window.YT)
        setTimeout(function() {
          jQuery(document).trigger('YTAPIReady'), (ytp.YTAPIReady = !0);
        }, 100);
      else {
        jQuery('#YTAPI').remove();
        var tag = jQuery('<script>').attr({
          src: 'https://www.youtube.com/iframe_api?v=' + jQuery.mbYTPlayer.version,
          id: 'YTAPI',
        });
        jQuery('head').prepend(tag);
      }
      function isIframe() {
        var r = !1;
        try {
          self.location.href != top.location.href && (r = !0);
        } catch (e) {
          r = !0;
        }
        return r;
      }
      return this.each(function() {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        $YTPlayer.hide(),
          (YTPlayer.loop = 0),
          (YTPlayer.state = 0),
          (YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)),
          (YTPlayer.filtersEnabled = !0),
          (YTPlayer.id = YTPlayer.id || 'YTP_' + new Date().getTime()),
          $YTPlayer.addClass('mb_YTPlayer');
        var property =
          $YTPlayer.data('property') && 'string' == typeof $YTPlayer.data('property')
            ? eval('(' + $YTPlayer.data('property') + ')')
            : $YTPlayer.data('property');
        'object' != typeof property && (property = {}),
          (YTPlayer.opt = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaults,
            YTPlayer.opt,
            options,
            property,
          )),
          (YTPlayer.opt.elementId = YTPlayer.id),
          0 === YTPlayer.opt.vol && ((YTPlayer.opt.vol = 1), (YTPlayer.opt.mute = !0)),
          YTPlayer.opt.autoPlay &&
            0 == YTPlayer.opt.mute &&
            jQuery.mbBrowser.chrome &&
            (jQuery(document).one('mousedown.YTPstart', function() {
              $YTPlayer.YTPPlay();
            }),
            console.info(
              'YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.',
            )),
          YTPlayer.opt.loop && 'boolean' == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
        var fullScreenAvailable =
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled;
        (YTPlayer.opt.realFullscreen =
          !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen),
          (YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '1' : '3'),
          (YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? '1' : '0'),
          (YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage),
          jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1),
          (YTPlayer.opt.containment =
            'self' === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment)),
          (YTPlayer.isRetina = window.retina || 1 < window.devicePixelRatio),
          (YTPlayer.opt.ratio = 'auto' === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (YTPlayer.orig_containment_background = YTPlayer.opt.containment.css('background-image')),
          $YTPlayer.attr('id') || $YTPlayer.attr('id', 'ytp_' + new Date().getTime()),
          (YTPlayer.playerID = 'iframe_' + YTPlayer.id),
          (YTPlayer.isAlone = !1),
          (YTPlayer.hasFocus = !0),
          (YTPlayer.videoID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).videoID
            : !!$YTPlayer.attr('href') && getYTPVideoID($YTPlayer.attr('href')).videoID),
          (YTPlayer.playlistID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID
            : !!$YTPlayer.attr('href') && getYTPVideoID($YTPlayer.attr('href')).playlistID);
        var start_from_last = 0;
        if (
          (jQuery.mbCookie.get('YTPlayer_start_from' + YTPlayer.videoID) &&
            (start_from_last = parseFloat(
              jQuery.mbCookie.get('YTPlayer_start_from' + YTPlayer.videoID),
            )),
          YTPlayer.opt.remember_last_time &&
            start_from_last &&
            ((YTPlayer.start_from_last = start_from_last),
            jQuery.mbCookie.remove('YTPlayer_start_from' + YTPlayer.videoID)),
          (YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment)),
          (YTPlayer.isBackground = YTPlayer.opt.containment.is('body')),
          !YTPlayer.isBackground || !ytp.backgroundIsInited)
        ) {
          if (
            (YTPlayer.isPlayer && $YTPlayer.show(),
            (YTPlayer.overlay = jQuery('<div/>')
              .css({ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' })
              .addClass('YTPOverlay')),
            YTPlayer.opt.coverImage || YTPlayer.orig_containment_background)
          ) {
            var bgndURL = YTPlayer.opt.coverImage
              ? 'url(' + YTPlayer.opt.coverImage + ') center center'
              : YTPlayer.orig_containment_background;
            YTPlayer.opt.containment.css({
              background: bgndURL,
              backgroundColor: '#000',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            });
          }
          (YTPlayer.wrapper = jQuery('<div/>')
            .attr('id', 'wrapper_' + YTPlayer.id)
            .css({
              position: 'absolute',
              zIndex: 0,
              minWidth: '100%',
              minHeight: '100%',
              left: 0,
              top: 0,
              overflow: 'hidden',
              opacity: 0,
            })
            .addClass('mbYTP_wrapper')),
            YTPlayer.isPlayer &&
              ((YTPlayer.inlinePlayButton = jQuery('<div/>')
                .addClass('inlinePlayButton')
                .html(jQuery.mbYTPlayer.controls.play)),
              $YTPlayer.append(YTPlayer.inlinePlayButton),
              YTPlayer.inlinePlayButton.on('click', function(e) {
                $YTPlayer.YTPPlay(), e.stopPropagation();
              }),
              YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(),
              YTPlayer.overlay
                .on('click', function() {
                  $YTPlayer.YTPTogglePlay();
                })
                .css({ cursor: 'pointer' }));
          var playerBox = jQuery('<div/>')
            .attr('id', YTPlayer.playerID)
            .addClass('playerBox');
          if (
            (playerBox.css({
              position: 'absolute',
              zIndex: 0,
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              overflow: 'hidden',
              opacity: 1,
            }),
            YTPlayer.wrapper.append(playerBox),
            playerBox.after(YTPlayer.overlay),
            YTPlayer.isPlayer &&
              ((YTPlayer.inlineWrapper = jQuery('<div/>').addClass('inline-YTPlayer')),
              YTPlayer.inlineWrapper.css({
                position: 'relative',
                maxWidth: YTPlayer.opt.containment.css('width'),
              }),
              YTPlayer.opt.containment.css({
                position: 'relative',
                paddingBottom: '56.25%',
                overflow: 'hidden',
                height: 0,
              }),
              YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),
            YTPlayer.opt.containment
              .children()
              .not('script, style')
              .each(function() {
                'static' == jQuery(this).css('position') &&
                  jQuery(this).css('position', 'relative');
              }),
            YTPlayer.isBackground
              ? (jQuery('body').css({ boxSizing: 'border-box' }),
                YTPlayer.wrapper.css({ position: 'fixed', top: 0, left: 0, zIndex: 0 }))
              : 'static' == YTPlayer.opt.containment.css('position') &&
                (YTPlayer.opt.containment.css({ position: 'relative' }), $YTPlayer.show()),
            YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
            YTPlayer.isBackground ||
              YTPlayer.overlay
                .on('mouseenter', function() {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.addClass('visible');
                })
                .on('mouseleave', function() {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.removeClass('visible');
                }),
            jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile)
          )
            return (
              YTPlayer.opt.mobileFallbackImage &&
                (YTPlayer.wrapper.css({
                  backgroundImage: 'url(' + YTPlayer.opt.mobileFallbackImage + ')',
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  opacity: 1,
                }),
                YTPlayer.wrapper.css({ opacity: 1 })),
              $YTPlayer
            );
          jQuery.mbBrowser.mobile &&
            YTPlayer.opt.autoPlay &&
            YTPlayer.opt.useOnMobile &&
            jQuery('body').one('touchstart', function() {
              YTPlayer.player.playVideo();
            }),
            jQuery(document).one('YTAPIReady', function() {
              $YTPlayer.trigger('YTAPIReady_' + YTPlayer.id), (ytp.YTAPIReady = !0);
            }),
            (YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(
              YTPlayer,
              YTPlayer.opt.onScreenPercentage,
            )),
            $YTPlayer.one('YTAPIReady_' + YTPlayer.id, function() {
              var o = this,
                t = jQuery(o);
              (o.isBackground && ytp.backgroundIsInited) ||
                o.isInit ||
                (o.isBackground && (ytp.backgroundIsInited = !0),
                (o.opt.autoPlay = void 0 === o.opt.autoPlay ? !!o.isBackground : o.opt.autoPlay),
                (o.opt.vol = o.opt.vol ? o.opt.vol : 100),
                jQuery.mbYTPlayer.getDataFromAPI(o),
                jQuery(o).on('YTPChanged', function(e) {
                  if (!o.isInit) {
                    o.isInit = !0;
                    var r = {
                      modestbranding: 1,
                      autoplay: 0,
                      controls: 0,
                      showinfo: 0,
                      rel: 0,
                      enablejsapi: 1,
                      version: 3,
                      playerapiid: o.playerID,
                      origin: '*',
                      allowfullscreen: !0,
                      wmode: 'transparent',
                      iv_load_policy: o.opt.showAnnotations,
                      cc_load_policy: o.opt.cc_load_policy,
                      playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                      html5: document.createElement('video').canPlayType ? 1 : 0,
                    };
                    new YT.Player(o.playerID, {
                      playerVars: r,
                      events: {
                        onReady: function(e) {
                          (o.player = e.target),
                            o.player.loadVideoById({
                              videoId: o.videoID.toString(),
                              suggestedQuality: o.opt.quality,
                            }),
                            t.trigger('YTPlayerIsReady_' + o.id);
                        },
                        onStateChange: function(e) {
                          if ('function' == typeof e.target.getPlayerState) {
                            var r = e.target.getPlayerState();
                            if (o.preventTrigger || o.isStarting) o.preventTrigger = !1;
                            else {
                              var t;
                              switch (
                                ((o.state = r),
                                e.data == YT.PlayerState.PLAYING &&
                                  e.target.setPlaybackQuality(o.opt.quality),
                                r)
                              ) {
                                case -1:
                                  t = 'YTPUnstarted';
                                  break;
                                case 0:
                                  t = 'YTPRealEnd';
                                  break;
                                case 1:
                                  (t = 'YTPPlay'),
                                    o.controlBar.length &&
                                      o.controlBar
                                        .find('.mb_YTPPlayPause')
                                        .html(jQuery.mbYTPlayer.controls.pause),
                                    o.isPlayer && o.inlinePlayButton.hide(),
                                    jQuery(document).off('mousedown.YTPstart');
                                  break;
                                case 2:
                                  (t = 'YTPPause'),
                                    o.controlBar.length &&
                                      o.controlBar
                                        .find('.mb_YTPPlayPause')
                                        .html(jQuery.mbYTPlayer.controls.play),
                                    o.isPlayer && o.inlinePlayButton.show();
                                  break;
                                case 3:
                                  o.player.setPlaybackQuality(o.opt.quality),
                                    (t = 'YTPBuffering'),
                                    o.controlBar.length &&
                                      o.controlBar
                                        .find('.mb_YTPPlayPause')
                                        .html(jQuery.mbYTPlayer.controls.play);
                                  break;
                                case 5:
                                  t = 'YTPCued';
                              }
                              var a = jQuery.Event(t);
                              (a.time = o.currentTime), jQuery(o).trigger(a);
                            }
                          }
                        },
                        onPlaybackQualityChange: function(e) {
                          var r = e.target.getPlaybackQuality(),
                            t = jQuery.Event('YTPQualityChange');
                          (t.quality = r), jQuery(o).trigger(t);
                        },
                        onError: function(e) {
                          switch (
                            ('function' == typeof o.opt.onError && o.opt.onError(t, e), e.data)
                          ) {
                            case 2:
                              console.error(
                                'video ID:: ' +
                                  o.videoID +
                                  ': The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
                              );
                              break;
                            case 5:
                              console.error(
                                'video ID:: ' +
                                  o.videoID +
                                  ': The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
                              );
                              break;
                            case 100:
                              console.error(
                                'video ID:: ' +
                                  o.videoID +
                                  ': The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
                              );
                              break;
                            case 101:
                            case 150:
                              console.error(
                                'video ID:: ' +
                                  o.videoID +
                                  ': The owner of the requested video does not allow it to be played in embedded players.',
                              );
                          }
                          o.isList && jQuery(o).YTPPlayNext();
                        },
                      },
                    }),
                      t.on('YTPlayerIsReady_' + o.id, function() {
                        if (o.isReady) return this;
                        (o.playerEl = o.player.getIframe()),
                          jQuery(o.playerEl).unselectable(),
                          t.optimizeDisplay(),
                          jQuery(window)
                            .off('resize.YTP_' + o.id)
                            .on('resize.YTP_' + o.id, function() {
                              t.optimizeDisplay();
                            }),
                          o.opt.remember_last_time &&
                            jQuery(window).on('unload.YTP_' + o.id, function() {
                              var e = o.player.getCurrentTime();
                              jQuery.mbCookie.set('YTPlayer_start_from' + o.videoID, e, 0);
                            }),
                          t.YTPCheckForState();
                      });
                  }
                }));
            }),
            $YTPlayer.off('YTPTime.mask'),
            jQuery.mbYTPlayer.applyMask(YTPlayer);
        }
      });
    },
    isOnScreen: function(e, r) {
      r = r || 10;
      var t = e.wrapper,
        a = jQuery(window).scrollTop(),
        o = a + jQuery(window).height(),
        n = (t.height() * r) / 100,
        i = t.offset().top + n;
      return t.offset().top + (t.height() - n) <= o && a <= i;
    },
    getDataFromAPI: function(n) {
      (n.videoData = jQuery.mbStorage.get('YTPlayer_data_' + n.videoID)),
        n.videoData
          ? (setTimeout(function() {
              n.dataReceived = !0;
              var e = jQuery.Event('YTPChanged');
              (e.time = n.currentTime),
                (e.videoId = n.videoID),
                (e.opt = n.opt),
                jQuery(n).trigger(e);
              var r = jQuery.Event('YTPData');
              for (var t in ((r.prop = {}), n.videoData)) r.prop[t] = n.videoData[t];
              jQuery(n).trigger(r);
            }, n.opt.fadeOnStartTime),
            (n.hasData = !0))
          : jQuery.mbYTPlayer.apiKey
          ? jQuery.getJSON(
              'https://www.googleapis.com/youtube/v3/videos?id=' +
                n.videoID +
                '&key=' +
                jQuery.mbYTPlayer.apiKey +
                '&part=snippet',
              function(e) {
                n.dataReceived = !0;
                var r,
                  t = jQuery.Event('YTPChanged');
                (t.time = n.currentTime),
                  (t.videoId = n.videoID),
                  jQuery(n).trigger(t),
                  e.items[0]
                    ? ((r = e.items[0].snippet),
                      (n.videoData = {}),
                      (n.videoData.id = n.videoID),
                      (n.videoData.channelTitle = r.channelTitle),
                      (n.videoData.title = r.title),
                      (n.videoData.description =
                        r.description.length < 400
                          ? r.description
                          : r.description.substring(0, 400) + ' ...'),
                      (n.videoData.thumb_max = r.thumbnails.maxres
                        ? r.thumbnails.maxres.url
                        : null),
                      (n.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null),
                      (n.videoData.thumb_medium = r.thumbnails.medium
                        ? r.thumbnails.medium.url
                        : null),
                      jQuery.mbStorage.set('YTPlayer_data_' + n.videoID, n.videoData),
                      (n.hasData = !0))
                    : ((n.videoData = {}), (n.hasData = !1));
                var a = jQuery.Event('YTPData');
                for (var o in ((a.prop = {}), n.videoData)) a.prop[o] = n.videoData[o];
                jQuery(n).trigger(a);
              },
            )
          : (setTimeout(function() {
              var e = jQuery.Event('YTPChanged');
              (e.time = n.currentTime), (e.videoId = n.videoID), jQuery(n).trigger(e);
            }, 10),
            (n.videoData = null)),
        (n.opt.ratio = 'auto' == n.opt.ratio ? 16 / 9 : n.opt.ratio),
        n.isPlayer &&
          !n.opt.autoPlay &&
          ((n.loading = jQuery('<div/>')
            .addClass('loading')
            .html('Loading')
            .hide()),
          jQuery(n).append(n.loading),
          n.loading.fadeIn());
    },
    removeStoredData: function() {
      jQuery.mbStorage.remove();
    },
    getVideoData: function() {
      return this.get(0).videoData;
    },
    getVideoID: function() {
      return this.get(0).videoID || !1;
    },
    getPlaylistID: function() {
      return this.get(0).playlistID || !1;
    },
    setVideoQuality: function(e) {
      var r = this.get(0);
      return (
        jQuery(r).YTPPause(),
        (r.opt.quality = e),
        r.player.setPlaybackQuality(e),
        jQuery(r).YTPPlay(),
        this
      );
    },
    getVideoQuality: function() {
      return this.get(0).player.getPlaybackQuality();
    },
    playlist: function(e, r, t) {
      var a = this.get(0);
      return (
        (a.isList = !0),
        r && (e = jQuery.shuffle(e)),
        a.videoID ||
          ((a.videos = e),
          (a.videoCounter = 1),
          (a.videoLength = e.length),
          jQuery(a).data('property', e[0]),
          jQuery(a).YTPlayer()),
        'function' == typeof t &&
          jQuery(a).on('YTPChanged', function() {
            t(a);
          }),
        jQuery(a).on('YTPEnd', function() {
          jQuery(a).YTPPlayNext();
        }),
        this
      );
    },
    playNext: function() {
      var e = this.get(0);
      return (
        e.videoCounter++,
        e.videoCounter > e.videoLength && (e.videoCounter = 1),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playPrev: function() {
      var e = this.get(0);
      return (
        e.videoCounter--,
        e.videoCounter <= 0 && (e.videoCounter = e.videoLength),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playIndex: function(e) {
      var r = this.get(0);
      r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)),
        (r.videoCounter = e),
        r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
      var t = r.videos[r.videoCounter - 1];
      return jQuery(r).YTPChangeVideo(t), this;
    },
    changeVideo: function(e) {
      var r = this,
        t = r.get(0);
      (t.opt.startAt = 0),
        (t.opt.stopAt = 0),
        (t.opt.mask = !1),
        (t.opt.mute = !0),
        (t.opt.autoPlay = !0),
        (t.opt.addFilters = !1),
        (t.opt.coverImage = !1),
        (t.hasData = !1),
        (t.hasChanged = !0),
        (t.player.loopTime = void 0),
        e && jQuery.extend(t.opt, e),
        (t.videoID = getYTPVideoID(t.opt.videoURL).videoID),
        t.opt.loop && 'boolean' == typeof t.opt.loop && (t.opt.loop = 9999),
        t.wrapper.css({ background: 'none' }),
        jQuery(t.playerEl).CSSAnimate({ opacity: 0 }, t.opt.fadeOnStartTime, function() {
          jQuery.mbYTPlayer.getDataFromAPI(t),
            r.YTPGetPlayer().loadVideoById({ videoId: t.videoID, suggestedQuality: t.opt.quality }),
            r.YTPPause(),
            r.optimizeDisplay(),
            r.YTPCheckForState();
        });
      var a = jQuery.Event('YTPChangeVideo');
      return (a.time = t.currentTime), jQuery(t).trigger(a), jQuery.mbYTPlayer.applyMask(t), this;
    },
    getPlayer: function() {
      var e = this.get(0);
      return (e.isReady && e.player) || null;
    },
    playerDestroy: function() {
      var e = this.get(0);
      return (
        e.isReady &&
          ((ytp.YTAPIReady = !0),
          (ytp.backgroundIsInited = !1),
          (e.isInit = !1),
          (e.videoID = null),
          (e.isReady = !1),
          e.wrapper.remove(),
          jQuery('#controlBar_' + e.id).remove(),
          clearInterval(e.checkForStartAt),
          clearInterval(e.getState)),
        this
      );
    },
    fullscreen: function(real) {
      var YTPlayer = this.get(0);
      void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
      var controls = jQuery('#controlBar_' + YTPlayer.id),
        fullScreenBtn = controls.find('.mb_OnlyYT'),
        videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.mbBrowser.mozilla
          ? 'mozfullscreenchange'
          : jQuery.mbBrowser.webkit
          ? 'webkitfullscreenchange'
          : 'fullscreenchange';
        jQuery(document)
          .off(fullscreenchange)
          .on(fullscreenchange, function() {
            RunPrefixMethod(document, 'IsFullScreen') || RunPrefixMethod(document, 'FullScreen')
              ? (jQuery(YTPlayer).YTPSetVideoQuality('default'),
                jQuery(YTPlayer).trigger('YTPFullScreenStart'))
              : ((YTPlayer.isAlone = !1),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                videoWrapper.removeClass('YTPFullscreen'),
                videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime,
                ),
                videoWrapper.css({ zIndex: 0 }),
                YTPlayer.isBackground
                  ? jQuery('body').after(controls)
                  : YTPlayer.wrapper.before(controls),
                jQuery(window).resize(),
                jQuery(YTPlayer).trigger('YTPFullScreenEnd'));
          });
      }
      if (YTPlayer.isAlone)
        jQuery(document).off('mousemove.YTPlayer'),
          clearTimeout(YTPlayer.hideCursor),
          YTPlayer.overlay.css({ cursor: 'auto' }),
          real
            ? cancelFullscreen()
            : (videoWrapper.CSSAnimate(
                { opacity: YTPlayer.opt.opacity },
                YTPlayer.opt.fadeOnStartTime,
              ),
              videoWrapper.css({ zIndex: 0 })),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
          (YTPlayer.isAlone = !1);
      else {
        function hideMouse() {
          YTPlayer.overlay.css({ cursor: 'none' });
        }
        jQuery(document).on('mousemove.YTPlayer', function(e) {
          YTPlayer.overlay.css({ cursor: 'auto' }),
            clearTimeout(YTPlayer.hideCursor),
            jQuery(e.target)
              .parents()
              .is('.mb_YTPBar') || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
        }),
          hideMouse(),
          real
            ? (videoWrapper.css({ opacity: 0 }),
              videoWrapper.addClass('YTPFullscreen'),
              launchFullscreen(videoWrapper.get(0)),
              setTimeout(function() {
                videoWrapper.CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
                  videoWrapper.append(controls),
                  jQuery(YTPlayer).optimizeDisplay(),
                  YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + 0.1, !0);
              }, YTPlayer.opt.fadeOnStartTime))
            : videoWrapper
                .css({ zIndex: 1e4 })
                .CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
          (YTPlayer.isAlone = !0);
      }
      function RunPrefixMethod(e, r) {
        for (var t, a, o = ['webkit', 'moz', 'ms', 'o', ''], n = 0; n < o.length && !e[t]; ) {
          if (
            ((t = r),
            '' == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)),
            'undefined' != (a = typeof e[(t = o[n] + t)]))
          )
            return (o = [o[n]]), 'function' == a ? e[t]() : e[t];
          n++;
        }
      }
      function launchFullscreen(e) {
        RunPrefixMethod(e, 'RequestFullScreen');
      }
      function cancelFullscreen() {
        (RunPrefixMethod(document, 'FullScreen') || RunPrefixMethod(document, 'IsFullScreen')) &&
          RunPrefixMethod(document, 'CancelFullScreen');
      }
      return this;
    },
    toggleLoops: function() {
      var e = this.get(0),
        r = e.opt;
      return (
        1 == r.loop
          ? (r.loop = 0)
          : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), (r.loop = 1)),
        this
      );
    },
    play: function() {
      var e = this.get(0),
        r = jQuery(e);
      return (
        e.isReady &&
          (setTimeout(function() {
            r.YTPSetAbundance(e.opt.abundance);
          }, 300),
          e.player.playVideo(),
          jQuery(e.playerEl).css({ opacity: 1 }),
          e.wrapper.css({ backgroundImage: 'none' }),
          e.wrapper.CSSAnimate({ opacity: e.isAlone ? 1 : e.opt.opacity }, e.opt.fadeOnStartTime),
          jQuery('#controlBar_' + e.id)
            .find('.mb_YTPPlayPause')
            .html(jQuery.mbYTPlayer.controls.pause),
          (e.state = 1)),
        this
      );
    },
    togglePlay: function(e) {
      var r = this.get(0);
      return (
        r.isReady &&
          (1 == r.state ? this.YTPPause() : this.YTPPlay(), 'function' == typeof e && e(r.state)),
        this
      );
    },
    stop: function() {
      var e = this.get(0);
      return (
        e.isReady &&
          (jQuery('#controlBar_' + e.id)
            .find('.mb_YTPPlayPause')
            .html(jQuery.mbYTPlayer.controls.play),
          e.player.stopVideo()),
        this
      );
    },
    pause: function() {
      var e = this.get(0);
      return (
        e.isReady &&
          (e.opt.abundance < 0.2 && this.YTPSetAbundance(0.2),
          e.player.pauseVideo(),
          (e.state = 2)),
        this
      );
    },
    seekTo: function(e) {
      var r = this.get(0);
      return r.isReady && r.player.seekTo(e, !0), this;
    },
    setVolume: function(e) {
      var r = this.get(0);
      return (
        r.isReady &&
          ((r.opt.vol = e),
          this.YTPUnmute(),
          r.player.setVolume(r.opt.vol),
          r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)),
        this
      );
    },
    getVolume: function() {
      var e = this.get(0);
      return e.isReady ? e.player.getVolume() : this;
    },
    toggleVolume: function() {
      var e = this.get(0);
      return (
        e.isReady &&
          (e.isMute
            ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol), this.YTPUnmute())
            : this.YTPMute()),
        this
      );
    },
    mute: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      if (e.isMute) return this;
      e.player.mute(),
        (e.isMute = !0),
        e.player.setVolume(0),
        e.volumeBar &&
          e.volumeBar.length &&
          10 < e.volumeBar.width() &&
          e.volumeBar.updateSliderVal(0),
        jQuery('#controlBar_' + e.id)
          .find('.mb_YTPMuteUnmute')
          .html(jQuery.mbYTPlayer.controls.unmute),
        jQuery(e).addClass('isMuted'),
        e.volumeBar && e.volumeBar.length && e.volumeBar.addClass('muted');
      var r = jQuery.Event('YTPMuted');
      return (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this;
    },
    unmute: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      if (!e.isMute) return this;
      e.player.unMute(),
        (e.isMute = !1),
        jQuery(e).YTPSetVolume(e.opt.vol),
        e.volumeBar &&
          e.volumeBar.length &&
          e.volumeBar.updateSliderVal(10 < e.opt.vol ? e.opt.vol : 10),
        jQuery('#controlBar_' + e.id)
          .find('.mb_YTPMuteUnmute')
          .html(jQuery.mbYTPlayer.controls.mute),
        jQuery(e).removeClass('isMuted'),
        e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass('muted');
      var r = jQuery.Event('YTPUnmuted');
      return (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this;
    },
    applyFilter: function(e, r) {
      var t = this.get(0);
      if (!t.isReady) return this;
      (t.filters[e].value = r), t.filtersEnabled && this.YTPEnableFilters();
    },
    applyFilters: function(e) {
      var r = this,
        t = r.get(0);
      if (!t.isReady)
        return (
          jQuery(t).on('YTPReady', function() {
            r.YTPApplyFilters(e);
          }),
          this
        );
      for (var a in e) r.YTPApplyFilter(a, e[a]);
      r.trigger('YTPFiltersApplied');
    },
    toggleFilter: function(e, r) {
      var t = this.get(0);
      return (
        t.isReady &&
          (t.filters[e].value ? (t.filters[e].value = 0) : (t.filters[e].value = r),
          t.filtersEnabled && jQuery(t).YTPEnableFilters()),
        this
      );
    },
    toggleFilters: function(e) {
      var r = this.get(0);
      return (
        r.isReady &&
          (r.filtersEnabled
            ? (jQuery(r).trigger('YTPDisableFilters'), jQuery(r).YTPDisableFilters())
            : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger('YTPEnableFilters')),
          'function' == typeof e && e(r.filtersEnabled)),
        this
      );
    },
    disableFilters: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e.playerEl);
      return r.css('-webkit-filter', ''), r.css('filter', ''), (e.filtersEnabled = !1), this;
    },
    enableFilters: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e.playerEl),
        t = '';
      for (var a in e.filters)
        e.filters[a].value &&
          (t += a.replace('_', '-') + '(' + e.filters[a].value + e.filters[a].unit + ') ');
      return r.css('-webkit-filter', t), r.css('filter', t), (e.filtersEnabled = !0), this;
    },
    removeFilter: function(e, r) {
      var t = this.get(0);
      if (!t.isReady) return this;
      if (('function' == typeof e && ((r = e), (e = null)), e))
        this.YTPApplyFilter(e, 0), 'function' == typeof r && r(e);
      else {
        for (var a in t.filters) this.YTPApplyFilter(a, 0);
        'function' == typeof r && r(a),
          (t.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters));
      }
      var o = jQuery.Event('YTPFiltersApplied');
      return this.trigger(o), this;
    },
    getFilters: function() {
      var e = this.get(0);
      return e.isReady ? e.filters : this;
    },
    addMask: function(e) {
      var r = this.get(0);
      e || (e = r.actualMask);
      var t = jQuery('<img/>')
        .attr('src', e)
        .on('load', function() {
          r.overlay.CSSAnimate({ opacity: 0 }, r.opt.fadeOnStartTime, function() {
            (r.hasMask = !0),
              t.remove(),
              r.overlay.css({
                backgroundImage: 'url(' + e + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }),
              r.overlay.CSSAnimate({ opacity: 1 }, r.opt.fadeOnStartTime);
          });
        });
      return this;
    },
    removeMask: function() {
      var e = this.get(0);
      return (
        e.overlay.CSSAnimate({ opacity: 0 }, e.opt.fadeOnStartTime, function() {
          (e.hasMask = !1),
            e.overlay.css({
              backgroundImage: '',
              backgroundRepeat: '',
              backgroundPosition: '',
              backgroundSize: '',
            }),
            e.overlay.CSSAnimate({ opacity: 1 }, e.opt.fadeOnStartTime);
        }),
        this
      );
    },
    applyMask: function(t) {
      var a = jQuery(t);
      if ((a.off('YTPTime.mask'), t.opt.mask))
        if ('string' == typeof t.opt.mask) a.YTPAddMask(t.opt.mask), (t.actualMask = t.opt.mask);
        else if ('object' == typeof t.opt.mask) {
          for (var e in (console.debug(t.opt.mask), t.opt.mask))
            if (t.opt.mask[e]) jQuery('<img/>').attr('src', t.opt.mask[e]);
          t.opt.mask[0] && a.YTPAddMask(t.opt.mask[0]),
            a.on('YTPTime.mask', function(e) {
              for (var r in t.opt.mask)
                e.time == r &&
                  (t.opt.mask[r]
                    ? (a.YTPAddMask(t.opt.mask[r]), (t.actualMask = t.opt.mask[r]))
                    : a.YTPRemoveMask());
            });
        }
    },
    toggleMask: function() {
      var e = this.get(0),
        r = jQuery(e);
      return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this;
    },
    manageProgress: function() {
      var e = this.get(0),
        r = jQuery('#controlBar_' + e.id),
        t = r.find('.mb_YTPProgress'),
        a = r.find('.mb_YTPLoaded'),
        o = r.find('.mb_YTPseekbar'),
        n = t.outerWidth(),
        i = Math.floor(e.player.getCurrentTime()),
        l = Math.floor(e.player.getDuration()),
        s = (i * n) / l,
        u = 100 * e.player.getVideoLoadedFraction();
      return (
        a.css({ left: 0, width: u + '%' }),
        o.css({ left: 0, width: s }),
        { totalTime: l, currentTime: i }
      );
    },
    buildControls: function(YTPlayer) {
      if ((jQuery('#controlBar_' + YTPlayer.id).remove(), YTPlayer.opt.showControls)) {
        if (
          ((YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl),
          !jQuery('#controlBar_' + YTPlayer.id).length)
        ) {
          YTPlayer.controlBar = jQuery('<div/>')
            .attr('id', 'controlBar_' + YTPlayer.id)
            .addClass('mb_YTPBar')
            .css({
              whiteSpace: 'noWrap',
              position: YTPlayer.isBackground ? 'fixed' : 'absolute',
              zIndex: YTPlayer.isBackground ? 1e4 : 1e3,
            })
            .hide()
            .on('click', function(e) {
              e.stopPropagation();
            });
          var buttonBar = jQuery('<div/>').addClass('buttonBar'),
            playpause = jQuery('<span>' + jQuery.mbYTPlayer.controls.play + '</span>')
              .addClass('mb_YTPPlayPause ytpicon')
              .on('click', function(e) {
                e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay();
              }),
            MuteUnmute = jQuery('<span>' + jQuery.mbYTPlayer.controls.mute + '</span>')
              .addClass('mb_YTPMuteUnmute ytpicon')
              .on('click', function(e) {
                e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume();
              }),
            volumeBar = jQuery('<div/>')
              .addClass('mb_YTPVolumeBar')
              .css({ display: 'inline-block' });
          YTPlayer.volumeBar = volumeBar;
          var idx = jQuery('<span/>').addClass('mb_YTPTime'),
            vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : '';
          vURL.indexOf('http') < 0 &&
            (vURL = 'https://www.youtube.com/watch?v=' + YTPlayer.opt.videoURL);
          var movieUrl = jQuery('<span/>')
              .html(jQuery.mbYTPlayer.controls.ytLogo)
              .addClass('mb_YTPUrl ytpicon')
              .attr('title', 'view on YouTube')
              .on('click', function() {
                window.open(vURL, 'viewOnYT');
              }),
            onlyVideo = jQuery('<span/>')
              .html(jQuery.mbYTPlayer.controls.onlyYT)
              .addClass('mb_OnlyYT ytpicon')
              .on('click', function(e) {
                e.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen);
              }),
            progressBar = jQuery('<div/>')
              .addClass('mb_YTPProgress')
              .css('position', 'absolute')
              .on('click', function(e) {
                e.stopPropagation(),
                  timeBar.css({ width: e.clientX - timeBar.offset().left }),
                  (YTPlayer.timeW = e.clientX - timeBar.offset().left),
                  YTPlayer.controlBar.find('.mb_YTPLoaded').css({ width: 0 });
                var r = Math.floor(YTPlayer.player.getDuration());
                (YTPlayer.goto = (timeBar.outerWidth() * r) / progressBar.outerWidth()),
                  YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
                  YTPlayer.controlBar.find('.mb_YTPLoaded').css({ width: 0 });
              }),
            loadedBar = jQuery('<div/>')
              .addClass('mb_YTPLoaded')
              .css('position', 'absolute'),
            timeBar = jQuery('<div/>')
              .addClass('mb_YTPseekbar')
              .css('position', 'absolute');
          progressBar.append(loadedBar).append(timeBar),
            buttonBar
              .append(playpause)
              .append(MuteUnmute)
              .append(volumeBar)
              .append(idx),
            YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl),
            (YTPlayer.isBackground ||
              (eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground)) &&
              buttonBar.append(onlyVideo),
            YTPlayer.controlBar.append(buttonBar).append(progressBar),
            YTPlayer.isBackground
              ? jQuery('body').after(YTPlayer.controlBar)
              : (YTPlayer.controlBar.addClass('inlinePlayer'),
                YTPlayer.wrapper.before(YTPlayer.controlBar)),
            volumeBar.simpleSlider({
              initialval: YTPlayer.opt.vol,
              scale: 100,
              orientation: 'h',
              callback: function(e) {
                0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(),
                  YTPlayer.player.setVolume(e.value),
                  YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
              },
            });
        }
      } else YTPlayer.controlBar = !1;
    },
    checkForState: function() {
      var YTPlayer = this.get(0),
        $YTPlayer = jQuery(YTPlayer);
      clearInterval(YTPlayer.getState);
      var interval = 100;
      if (!jQuery.contains(document, YTPlayer))
        return (
          $YTPlayer.YTPPlayerDestroy(),
          clearInterval(YTPlayer.getState),
          void clearInterval(YTPlayer.checkForStartAt)
        );
      jQuery.mbYTPlayer.checkForStart(YTPlayer),
        (YTPlayer.getState = setInterval(function() {
          var $YTPlayer = jQuery(YTPlayer);
          if (YTPlayer.isReady) {
            var prog = jQuery(YTPlayer).YTPManageProgress(),
              stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
            if (
              ((stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0),
              YTPlayer.currentTime != prog.currentTime)
            ) {
              var YTPEvent = jQuery.Event('YTPTime');
              (YTPEvent.time = YTPlayer.currentTime), jQuery(YTPlayer).trigger(YTPEvent);
            }
            if (
              ((YTPlayer.currentTime = prog.currentTime),
              (YTPlayer.totalTime = YTPlayer.player.getDuration()),
              0 == YTPlayer.player.getVolume()
                ? $YTPlayer.addClass('isMuted')
                : $YTPlayer.removeClass('isMuted'),
              YTPlayer.opt.showControls &&
                (prog.totalTime
                  ? YTPlayer.controlBar
                      .find('.mb_YTPTime')
                      .html(
                        jQuery.mbYTPlayer.formatTime(prog.currentTime) +
                          ' / ' +
                          jQuery.mbYTPlayer.formatTime(prog.totalTime),
                      )
                  : YTPlayer.controlBar.find('.mb_YTPTime').html('-- : -- / -- : --')),
              eval(YTPlayer.opt.stopMovieOnBlur) &&
                (document.hasFocus()
                  ? document.hasFocus() &&
                    !YTPlayer.hasFocus &&
                    -1 != YTPlayer.state &&
                    0 != YTPlayer.state &&
                    ((YTPlayer.hasFocus = !0), (YTPlayer.preventTrigger = !0), $YTPlayer.YTPPlay())
                  : 1 == YTPlayer.state &&
                    ((YTPlayer.hasFocus = !1),
                    (YTPlayer.preventTrigger = !0),
                    $YTPlayer.YTPPause())),
              YTPlayer.opt.playOnlyIfVisible)
            ) {
              var isOnScreen = jQuery.mbYTPlayer.isOnScreen(
                YTPlayer,
                YTPlayer.opt.onScreenPercentage,
              );
              isOnScreen || 1 != YTPlayer.state
                ? isOnScreen &&
                  !YTPlayer.isOnScreen &&
                  ((YTPlayer.isOnScreen = !0), YTPlayer.player.playVideo())
                : ((YTPlayer.isOnScreen = !1), $YTPlayer.YTPPause());
            }
            if (
              (YTPlayer.controlBar.length &&
              YTPlayer.controlBar.outerWidth() <= 400 &&
              !YTPlayer.isCompact
                ? (YTPlayer.controlBar.addClass('compact'),
                  (YTPlayer.isCompact = !0),
                  !YTPlayer.isMute &&
                    YTPlayer.volumeBar &&
                    YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
                : YTPlayer.controlBar.length &&
                  400 < YTPlayer.controlBar.outerWidth() &&
                  YTPlayer.isCompact &&
                  (YTPlayer.controlBar.removeClass('compact'),
                  (YTPlayer.isCompact = !1),
                  !YTPlayer.isMute &&
                    YTPlayer.volumeBar &&
                    YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
              0 < YTPlayer.player.getPlayerState() &&
                (parseFloat(YTPlayer.player.getDuration() - YTPlayer.opt.fadeOnStartTime / 1e3) <
                  YTPlayer.player.getCurrentTime() ||
                  (0 < stopAt && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)))
            ) {
              if (YTPlayer.isEnded) return;
              if (
                ((YTPlayer.isEnded = !0),
                setTimeout(function() {
                  YTPlayer.isEnded = !1;
                }, 1e3),
                YTPlayer.isList)
              ) {
                if (
                  !YTPlayer.opt.loop ||
                  (0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
                ) {
                  (YTPlayer.player.loopTime = void 0), clearInterval(YTPlayer.getState);
                  var YTPEnd = jQuery.Event('YTPEnd');
                  return (
                    (YTPEnd.time = YTPlayer.currentTime), void jQuery(YTPlayer).trigger(YTPEnd)
                  );
                }
              } else if (
                !YTPlayer.opt.loop ||
                (0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
              ) {
                if (
                  ((YTPlayer.player.loopTime = void 0),
                  (YTPlayer.state = 2),
                  YTPlayer.opt.coverImage || YTPlayer.orig_containment_background)
                ) {
                  var bgndURL = YTPlayer.opt.coverImage
                    ? 'url(' + YTPlayer.opt.coverImage + ') center center'
                    : YTPlayer.orig_containment_background;
                  YTPlayer.opt.containment.css({ background: bgndURL, backgroundSize: 'cover' });
                }
                return (
                  jQuery(YTPlayer).YTPPause(),
                  void YTPlayer.wrapper.CSSAnimate(
                    { opacity: 0 },
                    YTPlayer.opt.fadeOnStartTime,
                    function() {
                      YTPlayer.controlBar.length &&
                        YTPlayer.controlBar
                          .find('.mb_YTPPlayPause')
                          .html(jQuery.mbYTPlayer.controls.play);
                      var e = jQuery.Event('YTPEnd');
                      if (
                        ((e.time = YTPlayer.currentTime),
                        jQuery(YTPlayer).trigger(e),
                        YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0),
                        YTPlayer.opt.coverImage || YTPlayer.orig_containment_background)
                      ) {
                        var r = YTPlayer.opt.coverImage
                          ? 'url(' + YTPlayer.opt.coverImage + ') center center'
                          : YTPlayer.orig_containment_background;
                        YTPlayer.opt.containment.css({ background: r, backgroundSize: 'cover' });
                      }
                    },
                  )
                );
              }
              (YTPlayer.player.loopTime = YTPlayer.player.loopTime
                ? ++YTPlayer.player.loopTime
                : 1),
                (YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1),
                (YTPlayer.preventTrigger = !0),
                (YTPlayer.state = 2),
                YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
            }
          }
        }, interval));
    },
    checkForStart: function(YTPlayer) {
      var $YTPlayer = jQuery(YTPlayer);
      if (jQuery.contains(document, YTPlayer)) {
        if ((jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay))
          if (YTPlayer.opt.addRaster) {
            var classN = 'dot' == YTPlayer.opt.addRaster ? 'raster-dot' : 'raster';
            YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + ' retina' : classN);
          } else
            YTPlayer.overlay.removeClass(function(e, r) {
              var t = r.split(' '),
                a = [];
              return (
                jQuery.each(t, function(e, r) {
                  /raster.*/.test(r) && a.push(r);
                }),
                a.push('retina'),
                a.join(' ')
              );
            });
        (YTPlayer.preventTrigger = !0),
          (YTPlayer.state = 2),
          (YTPlayer.preventTrigger = !0),
          YTPlayer.player.mute(),
          YTPlayer.player.playVideo(),
          (YTPlayer.isStarting = !0);
        var startAt = YTPlayer.start_from_last
          ? YTPlayer.start_from_last
          : YTPlayer.opt.startAt
          ? YTPlayer.opt.startAt
          : 1;
        return (
          (YTPlayer.preventTrigger = !0),
          (YTPlayer.checkForStartAt = setInterval(function() {
            YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
            var canPlayVideo =
              YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
            if (
              0 < YTPlayer.player.getDuration() &&
              YTPlayer.player.getCurrentTime() >= startAt &&
              canPlayVideo
            ) {
              (YTPlayer.start_from_last = null),
                (YTPlayer.preventTrigger = !0),
                $YTPlayer.YTPPause(),
                clearInterval(YTPlayer.checkForStartAt),
                'function' == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer),
                (YTPlayer.isReady = !0),
                $YTPlayer.YTPRemoveFilter(),
                YTPlayer.opt.addFilters
                  ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters)
                  : $YTPlayer.YTPApplyFilters(),
                $YTPlayer.YTPEnableFilters();
              var YTPready = jQuery.Event('YTPReady');
              if (
                ((YTPready.time = YTPlayer.currentTime),
                $YTPlayer.trigger(YTPready),
                (YTPlayer.state = 2),
                YTPlayer.opt.mute
                  ? $YTPlayer.YTPMute()
                  : (YTPlayer.opt.autoPlay &&
                      (console.debug(
                        "To make the video 'auto-play' you must mute the audio according with the latest vendor policy",
                      ),
                      YTPlayer.player.mute()),
                    YTPlayer.player.unMute()),
                'undefined' != typeof _gaq && eval(YTPlayer.opt.gaTrack)
                  ? _gaq.push([
                      '_trackEvent',
                      'YTPlayer',
                      'Play',
                      YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString(),
                    ])
                  : 'undefined' != typeof ga &&
                    eval(YTPlayer.opt.gaTrack) &&
                    ga(
                      'send',
                      'event',
                      'YTPlayer',
                      'play',
                      YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString(),
                    ),
                YTPlayer.opt.autoPlay)
              ) {
                var YTPStart = jQuery.Event('YTPStart');
                (YTPStart.time = YTPlayer.currentTime),
                  jQuery(YTPlayer).trigger(YTPStart),
                  (YTPlayer.isStarting = !1),
                  'mac' == jQuery.mbBrowser.os.name &&
                    jQuery.mbBrowser.safari &&
                    jQuery('body').one('mousedown.YTPstart', function() {
                      $YTPlayer.YTPPlay();
                    }),
                  $YTPlayer.YTPPlay();
              } else
                (YTPlayer.preventTrigger = !0),
                  $YTPlayer.YTPPause(),
                  YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0),
                  setTimeout(function() {
                    (YTPlayer.preventTrigger = !0),
                      $YTPlayer.YTPPause(),
                      YTPlayer.isPlayer ||
                        (YTPlayer.opt.coverImage
                          ? (YTPlayer.wrapper.css({ opacity: 0 }),
                            setTimeout(function() {
                              if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                                var e = YTPlayer.opt.coverImage
                                  ? 'url(' + YTPlayer.opt.coverImage + ') center center'
                                  : YTPlayer.orig_containment_background;
                                YTPlayer.wrapper.css({
                                  background: e,
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                });
                              }
                            }, YTPlayer.opt.fadeOnStartTime))
                          : (jQuery(YTPlayer.playerEl).CSSAnimate(
                              { opacity: 1 },
                              YTPlayer.opt.fadeOnStartTime,
                            ),
                            YTPlayer.wrapper.CSSAnimate(
                              { opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity },
                              YTPlayer.opt.fadeOnStartTime,
                            ))),
                      (YTPlayer.isStarting = !1);
                  }, 500),
                  YTPlayer.controlBar.length &&
                    YTPlayer.controlBar
                      .find('.mb_YTPPlayPause')
                      .html(jQuery.mbYTPlayer.controls.play);
              YTPlayer.isPlayer &&
                !YTPlayer.opt.autoPlay &&
                YTPlayer.loading &&
                YTPlayer.loading.length &&
                (YTPlayer.loading.html('Ready'),
                setTimeout(function() {
                  YTPlayer.loading.fadeOut();
                }, 100)),
                YTPlayer.controlBar &&
                  YTPlayer.controlBar.length &&
                  YTPlayer.controlBar.slideDown(1e3);
            }
            'mac' == jQuery.mbBrowser.os.name &&
              jQuery.mbBrowser.safari &&
              (YTPlayer.player.playVideo(), 0 <= startAt && YTPlayer.player.seekTo(startAt, !0));
          }, 100)),
          $YTPlayer
        );
      }
      $YTPlayer.YTPPlayerDestroy();
    },
    getTime: function() {
      var e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.currentTime);
    },
    getTotalTime: function(e) {
      var r = this.get(0);
      return jQuery.mbYTPlayer.formatTime(r.totalTime);
    },
    formatTime: function(e) {
      var r = Math.floor(e / 60),
        t = Math.floor(e - 60 * r);
      return (r <= 9 ? '0' + r : r) + ' : ' + (t <= 9 ? '0' + t : t);
    },
    setAnchor: function(e) {
      this.optimizeDisplay(e);
    },
    getAnchor: function() {
      return this.get(0).opt.anchor;
    },
    setAbundance: function(e, r) {
      var t = this.get(0);
      return r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this;
    },
    getAbundance: function() {
      return this.get(0).opt.abundance;
    },
    setOption: function(e, r) {
      var t = this.get(0);
      return (t.opt[e] = r), this;
    },
  }),
    (jQuery.fn.optimizeDisplay = function(anchor, abundanceX) {
      var YTPlayer = this.get(0),
        vid = {},
        el = YTPlayer.wrapper,
        iframe = jQuery(YTPlayer.playerEl);
      (YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor),
        (YTPlayer.opt.anchor =
          'undefined ' != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : 'center,center');
      var YTPAlign = YTPlayer.opt.anchor.split(','),
        ab = abundanceX || YTPlayer.opt.abundance;
      if (YTPlayer.opt.optimizeDisplay) {
        var abundance = el.height() * ab,
          win = {};
        (win.width = el.outerWidth()),
          (win.height = el.outerHeight() + abundance),
          (YTPlayer.opt.ratio = 'auto' === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (vid.width = win.width + abundance),
          (vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)),
          (vid.marginTop = Math.ceil(-(vid.height - win.height + abundance) / 2)),
          (vid.marginLeft = -abundance / 2);
        var lowest = vid.height < win.height;
        for (var a in (lowest &&
          ((vid.height = win.height + abundance),
          (vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)),
          (vid.marginTop = -abundance / 2),
          (vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2))),
        YTPAlign))
          if (YTPAlign.hasOwnProperty(a)) {
            var al = YTPAlign[a].replace(/ /g, '');
            switch (al) {
              case 'top':
                vid.marginTop = -abundance;
                break;
              case 'bottom':
                vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
                break;
              case 'left':
                vid.marginLeft = -abundance;
                break;
              case 'right':
                vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2);
            }
          }
      } else (vid.width = '100%'), (vid.height = '100%'), (vid.marginTop = 0), (vid.marginLeft = 0);
      iframe.css({
        width: vid.width,
        height: vid.height,
        marginTop: vid.marginTop,
        marginLeft: vid.marginLeft,
        maxWidth: 'initial',
      });
    }),
    (jQuery.shuffle = function(e) {
      for (var r = e.slice(), t = r.length, a = t; a--; ) {
        var o = parseInt(Math.random() * t),
          n = r[a];
        (r[a] = r[o]), (r[o] = n);
      }
      return r;
    }),
    (jQuery.fn.unselectable = function() {
      return this.each(function() {
        jQuery(this)
          .css({ '-moz-user-select': 'none', '-webkit-user-select': 'none', 'user-select': 'none' })
          .attr('unselectable', 'on');
      });
    }),
    (jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState),
    (jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID),
    (jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo),
    (jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play),
    (jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay),
    (jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop),
    (jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause),
    (jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist),
    (jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex),
    (jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute),
    (jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume),
    (jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume),
    (jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData),
    (jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality),
    (jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter),
    (jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters),
    (jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter),
    (jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters),
    (jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter),
    (jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters),
    (jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters),
    (jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters),
    (jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime),
    (jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime),
    (jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask),
    (jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask),
    (jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask),
    (jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance),
    (jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance),
    (jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor),
    (jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor),
    (jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption);
})(jQuery, ytp);
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = 'ontouchstart' in document.createElement('div');
  return !(!e && !r);
}
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function() {
    var e = { version: 'Unknown version', name: 'Unknown OS' };
    return (
      -1 != navigator.appVersion.indexOf('Win') && (e.name = 'Windows'),
      -1 != navigator.appVersion.indexOf('Mac') &&
        navigator.appVersion.indexOf('Mobile') < 0 &&
        (e.name = 'Mac'),
      -1 != navigator.appVersion.indexOf('Linux') && (e.name = 'Linux'),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, '.').substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = 'Unknown.Unknown'),
      /Windows NT 5.1/.test(nAgt) && (e.version = '5.1'),
      /Windows NT 6.0/.test(nAgt) && (e.version = '6.0'),
      /Windows NT 6.1/.test(nAgt) && (e.version = '6.1'),
      /Windows NT 6.2/.test(nAgt) && (e.version = '6.2'),
      /Windows NT 10.0/.test(nAgt) && (e.version = '10.0'),
      /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = 'Unknown.Unknown'),
      (e.name = e.name.toLowerCase()),
      (e.major_version = 'Unknown'),
      (e.minor_version = 'Unknown'),
      'Unknown.Unknown' != e.version &&
        ((e.major_version = parseFloat(e.version.split('.')[0])),
        (e.minor_version = parseFloat(e.version.split('.')[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf('Opera')))
)
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = 'Opera'),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf('Version')) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf('OPR')))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = 'Opera'),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf('MSIE')))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = 'Microsoft Internet Explorer'),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf('Trident')) {
  (jQuery.browser.msie = !0), (jQuery.browser.name = 'Microsoft Internet Explorer');
  var start = nAgt.indexOf('rv:') + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf('Edge'))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = 'Microsoft Edge'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf('Chrome'))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = 'Chrome'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf('mozilla/5.0') &&
      -1 < nAgt.indexOf('android ') &&
      -1 < nAgt.indexOf('applewebkit') &&
      !(-1 < nAgt.indexOf('chrome'))
    ? ((verOffset = nAgt.indexOf('Chrome')),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = 'androidStock'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf('Safari'))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = 'Safari'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf('Version')) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf('AppleWebkit'))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = 'Safari'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf('Version')) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf('Firefox'))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = 'Firefox'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/')) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
function uncamel(e) {
  return e.replace(/([A-Z])/g, function(e) {
    return '-' + e.toLowerCase();
  });
}
function setUnit(e, r) {
  return 'string' != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? '' + e + r : e;
}
function setFilter(e, r, t) {
  var a = uncamel(r),
    o = jQuery.browser.mozilla ? '' : jQuery.CSS.sfx;
  (e[o + 'filter'] = e[o + 'filter'] || ''),
    (t = setUnit(
      t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t,
      jQuery.CSS.filters[r].unit,
    )),
    (e[o + 'filter'] += a + '(' + t + ') '),
    delete e[r];
}
-1 != (ix = jQuery.browser.fullVersion.indexOf(';')) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(' ')) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt('' + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function(e, r) {
    if ('stringstring' != typeof e + typeof r) return !1;
    for (
      var t = e.split('.'), a = r.split('.'), o = 0, n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if ((t[o] && !a[o] && 0 < parseInt(t[o])) || parseInt(t[o]) > parseInt(a[o])) return 1;
      if ((a[o] && !t[o] && 0 < parseInt(a[o])) || parseInt(t[o]) < parseInt(a[o])) return -1;
    }
    return 0;
  }),
  (jQuery.support.CSStransition = (function() {
    var e = (document.body || document.documentElement).style;
    return (
      void 0 !== e.transition ||
      void 0 !== e.WebkitTransition ||
      void 0 !== e.MozTransition ||
      void 0 !== e.MsTransition ||
      void 0 !== e.OTransition
    );
  })()),
  (jQuery.CSS = {
    name: 'mb.CSSAnimate',
    author: 'Matteo Bicocchi',
    version: '2.0.0',
    transitionEnd: 'transitionEnd',
    sfx: '',
    filters: {
      blur: { min: 0, max: 100, unit: 'px' },
      brightness: { min: 0, max: 400, unit: '%' },
      contrast: { min: 0, max: 400, unit: '%' },
      grayscale: { min: 0, max: 100, unit: '%' },
      hueRotate: { min: 0, max: 360, unit: 'deg' },
      invert: { min: 0, max: 100, unit: '%' },
      saturate: { min: 0, max: 400, unit: '%' },
      sepia: { min: 0, max: 100, unit: '%' },
    },
    normalizeCss: function(e) {
      var r = jQuery.extend(!0, {}, e);
      for (var t in (jQuery.browser.webkit || jQuery.browser.opera
        ? (jQuery.CSS.sfx = '-webkit-')
        : jQuery.browser.mozilla
        ? (jQuery.CSS.sfx = '-moz-')
        : jQuery.browser.msie && (jQuery.CSS.sfx = '-ms-'),
      (jQuery.CSS.sfx = ''),
      r)) {
        if (
          ('transform' === t && ((r[jQuery.CSS.sfx + 'transform'] = r[t]), delete r[t]),
          'transform-origin' === t &&
            ((r[jQuery.CSS.sfx + 'transform-origin'] = e[t]), delete r[t]),
          'filter' !== t ||
            jQuery.browser.mozilla ||
            ((r[jQuery.CSS.sfx + 'filter'] = e[t]), delete r[t]),
          'blur' === t && setFilter(r, 'blur', e[t]),
          'brightness' === t && setFilter(r, 'brightness', e[t]),
          'contrast' === t && setFilter(r, 'contrast', e[t]),
          'grayscale' === t && setFilter(r, 'grayscale', e[t]),
          'hueRotate' === t && setFilter(r, 'hueRotate', e[t]),
          'invert' === t && setFilter(r, 'invert', e[t]),
          'saturate' === t && setFilter(r, 'saturate', e[t]),
          'sepia' === t && setFilter(r, 'sepia', e[t]),
          'x' === t)
        ) {
          var a = jQuery.CSS.sfx + 'transform';
          (r[a] = r[a] || ''), (r[a] += ' translateX(' + setUnit(e[t], 'px') + ')'), delete r[t];
        }
        'y' === t &&
          ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
          (r[a] += ' translateY(' + setUnit(e[t], 'px') + ')'),
          delete r[t]),
          'z' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' translateZ(' + setUnit(e[t], 'px') + ')'),
            delete r[t]),
          'rotate' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' rotate(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'rotateX' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' rotateX(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'rotateY' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' rotateY(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'rotateZ' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' rotateZ(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'scale' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' scale(' + setUnit(e[t], '') + ')'),
            delete r[t]),
          'scaleX' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' scaleX(' + setUnit(e[t], '') + ')'),
            delete r[t]),
          'scaleY' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' scaleY(' + setUnit(e[t], '') + ')'),
            delete r[t]),
          'scaleZ' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' scaleZ(' + setUnit(e[t], '') + ')'),
            delete r[t]),
          'skew' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' skew(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'skewX' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' skewX(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'skewY' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' skewY(' + setUnit(e[t], 'deg') + ')'),
            delete r[t]),
          'perspective' === t &&
            ((r[(a = jQuery.CSS.sfx + 'transform')] = r[a] || ''),
            (r[a] += ' perspective(' + setUnit(e[t], 'px') + ')'),
            delete r[t]);
      }
      return r;
    },
    getProp: function(e) {
      var r,
        t = [];
      for (r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
      return t.join(',');
    },
    animate: function(l, s, u, y, d) {
      return this.each(function() {
        function e() {
          (r.called = !0),
            (r.CSSAIsRunning = !1),
            t.off(jQuery.CSS.transitionEnd + '.' + r.id),
            clearTimeout(r.timeout),
            t.css(jQuery.CSS.sfx + 'transition', ''),
            'function' == typeof d && d.apply(r),
            'function' == typeof r.CSSqueue && (r.CSSqueue(), (r.CSSqueue = null));
        }
        var r = this,
          t = jQuery(this);
        r.id = r.id || 'CSSA_' + new Date().getTime();
        var a = a || { type: 'noEvent' };
        if (
          r.CSSAIsRunning &&
          r.eventType == a.type &&
          !jQuery.browser.msie &&
          jQuery.browser.version <= 9
        )
          r.CSSqueue = function() {
            t.CSSAnimate(l, s, u, y, d);
          };
        else if (((r.CSSqueue = null), (r.eventType = a.type), 0 !== t.length && l)) {
          if (
            ((l = jQuery.normalizeCss(l)),
            (r.CSSAIsRunning = !0),
            'function' == typeof s && ((d = s), (s = jQuery.fx.speeds._default)),
            'function' == typeof u && ((y = u), (u = 0)),
            'string' == typeof u && ((d = u), (u = 0)),
            'function' == typeof y && ((d = y), (y = 'cubic-bezier(0.65,0.03,0.36,0.72)')),
            'string' == typeof s)
          )
            for (var o in jQuery.fx.speeds) {
              if (s == o) {
                s = jQuery.fx.speeds[o];
                break;
              }
              s = jQuery.fx.speeds._default;
            }
          if (
            (s || (s = jQuery.fx.speeds._default),
            'string' == typeof d && ((y = d), (d = null)),
            jQuery.support.CSStransition)
          ) {
            var n = {
              default: 'ease',
              in: 'ease-in',
              out: 'ease-out',
              'in-out': 'ease-in-out',
              snap: 'cubic-bezier(0,1,.5,1)',
              easeOutCubic: 'cubic-bezier(.215,.61,.355,1)',
              easeInOutCubic: 'cubic-bezier(.645,.045,.355,1)',
              easeInCirc: 'cubic-bezier(.6,.04,.98,.335)',
              easeOutCirc: 'cubic-bezier(.075,.82,.165,1)',
              easeInOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
              easeInExpo: 'cubic-bezier(.95,.05,.795,.035)',
              easeOutExpo: 'cubic-bezier(.19,1,.22,1)',
              easeInOutExpo: 'cubic-bezier(1,0,0,1)',
              easeInQuad: 'cubic-bezier(.55,.085,.68,.53)',
              easeOutQuad: 'cubic-bezier(.25,.46,.45,.94)',
              easeInOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
              easeInQuart: 'cubic-bezier(.895,.03,.685,.22)',
              easeOutQuart: 'cubic-bezier(.165,.84,.44,1)',
              easeInOutQuart: 'cubic-bezier(.77,0,.175,1)',
              easeInQuint: 'cubic-bezier(.755,.05,.855,.06)',
              easeOutQuint: 'cubic-bezier(.23,1,.32,1)',
              easeInOutQuint: 'cubic-bezier(.86,0,.07,1)',
              easeInSine: 'cubic-bezier(.47,0,.745,.715)',
              easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
              easeInOutSine: 'cubic-bezier(.445,.05,.55,.95)',
              easeInBack: 'cubic-bezier(.6,-.28,.735,.045)',
              easeOutBack: 'cubic-bezier(.175, .885,.32,1.275)',
              easeInOutBack: 'cubic-bezier(.68,-.55,.265,1.55)',
            };
            n[y] && (y = n[y]),
              t.off(jQuery.CSS.transitionEnd + '.' + r.id),
              (n = jQuery.CSS.getProp(l));
            var i = {};
            jQuery.extend(i, l),
              (i[jQuery.CSS.sfx + 'transition-property'] = n),
              (i[jQuery.CSS.sfx + 'transition-duration'] = s + 'ms'),
              (i[jQuery.CSS.sfx + 'transition-delay'] = u + 'ms'),
              (i[jQuery.CSS.sfx + 'transition-timing-function'] = y),
              setTimeout(function() {
                t.one(jQuery.CSS.transitionEnd + '.' + r.id, e), t.css(i);
              }, 1),
              (r.timeout = setTimeout(function() {
                r.called || !d
                  ? ((r.called = !1), (r.CSSAIsRunning = !1))
                  : (t.css(jQuery.CSS.sfx + 'transition', ''),
                    d.apply(r),
                    (r.CSSAIsRunning = !1),
                    'function' == typeof r.CSSqueue && (r.CSSqueue(), (r.CSSqueue = null)));
              }, s + u + 10));
          } else {
            for (n in l)
              'transform' === n && delete l[n],
                'filter' === n && delete l[n],
                'transform-origin' === n && delete l[n],
                'auto' === l[n] && delete l[n],
                'x' === n && ((a = l[n]), (l[(o = 'left')] = a), delete l[n]),
                'y' === n && ((a = l[n]), (l[(o = 'top')] = a), delete l[n]),
                ('-ms-transform' !== n && '-ms-filter' !== n) || delete l[n];
            t.delay(u).animate(l, s, d);
          }
        }
      });
    },
  }),
  (jQuery.fn.CSSAnimate = jQuery.CSS.animate),
  (jQuery.normalizeCss = jQuery.CSS.normalizeCss),
  (jQuery.fn.css3 = function(t) {
    return this.each(function() {
      var e = jQuery(this),
        r = jQuery.normalizeCss(t);
      e.css(r);
    });
  });
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = 'ontouchstart' in document.createElement('div');
  return !(!e && !r);
}
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function() {
    var e = { version: 'Unknown version', name: 'Unknown OS' };
    return (
      -1 != navigator.appVersion.indexOf('Win') && (e.name = 'Windows'),
      -1 != navigator.appVersion.indexOf('Mac') &&
        navigator.appVersion.indexOf('Mobile') < 0 &&
        (e.name = 'Mac'),
      -1 != navigator.appVersion.indexOf('Linux') && (e.name = 'Linux'),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, '.').substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = 'Unknown.Unknown'),
      /Windows NT 5.1/.test(nAgt) && (e.version = '5.1'),
      /Windows NT 6.0/.test(nAgt) && (e.version = '6.0'),
      /Windows NT 6.1/.test(nAgt) && (e.version = '6.1'),
      /Windows NT 6.2/.test(nAgt) && (e.version = '6.2'),
      /Windows NT 10.0/.test(nAgt) && (e.version = '10.0'),
      /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = 'Unknown.Unknown'),
      (e.name = e.name.toLowerCase()),
      (e.major_version = 'Unknown'),
      (e.minor_version = 'Unknown'),
      'Unknown.Unknown' != e.version &&
        ((e.major_version = parseFloat(e.version.split('.')[0])),
        (e.minor_version = parseFloat(e.version.split('.')[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf('Opera')))
)
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = 'Opera'),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf('Version')) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf('OPR')))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = 'Opera'),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf('MSIE')))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = 'Microsoft Internet Explorer'),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf('Trident')) {
  (jQuery.browser.msie = !0), (jQuery.browser.name = 'Microsoft Internet Explorer');
  var start = nAgt.indexOf('rv:') + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf('Edge'))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = 'Microsoft Edge'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf('Chrome'))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = 'Chrome'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf('mozilla/5.0') &&
      -1 < nAgt.indexOf('android ') &&
      -1 < nAgt.indexOf('applewebkit') &&
      !(-1 < nAgt.indexOf('chrome'))
    ? ((verOffset = nAgt.indexOf('Chrome')),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = 'androidStock'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf('Safari'))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = 'Safari'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf('Version')) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf('AppleWebkit'))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = 'Safari'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf('Version')) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf('Firefox'))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = 'Firefox'),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/')) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(';')) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(' ')) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt('' + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function(e, r) {
    if ('stringstring' != typeof e + typeof r) return !1;
    for (
      var t = e.split('.'), a = r.split('.'), o = 0, n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if ((t[o] && !a[o] && 0 < parseInt(t[o])) || parseInt(t[o]) > parseInt(a[o])) return 1;
      if ((a[o] && !t[o] && 0 < parseInt(a[o])) || parseInt(t[o]) < parseInt(a[o])) return -1;
    }
    return 0;
  }),
  (function(o) {
    (o.simpleSlider = {
      defaults: { initialval: 0, scale: 100, orientation: 'h', readonly: !1, callback: !1 },
      events: {
        start: o.browser.mobile ? 'touchstart' : 'mousedown',
        end: o.browser.mobile ? 'touchend' : 'mouseup',
        move: o.browser.mobile ? 'touchmove' : 'mousemove',
      },
      init: function(a) {
        return this.each(function() {
          var r = this,
            t = o(r);
          t.addClass('simpleSlider'),
            (r.opt = {}),
            o.extend(r.opt, o.simpleSlider.defaults, a),
            o.extend(r.opt, t.data());
          var e = 'h' == r.opt.orientation ? 'horizontal' : 'vertical';
          (e = o('<div/>')
            .addClass('level')
            .addClass(e)),
            t.prepend(e),
            (r.level = e),
            t.css({ cursor: 'default' }),
            'auto' == r.opt.scale && (r.opt.scale = o(r).outerWidth()),
            t.updateSliderVal(),
            r.opt.readonly ||
              (t.on(o.simpleSlider.events.start, function(e) {
                o.browser.mobile && (e = e.changedTouches[0]),
                  (r.canSlide = !0),
                  t.updateSliderVal(e),
                  'h' == r.opt.orientation
                    ? t.css({ cursor: 'col-resize' })
                    : t.css({ cursor: 'row-resize' }),
                  o.browser.mobile || (e.preventDefault(), e.stopPropagation());
              }),
              o(document)
                .on(o.simpleSlider.events.move, function(e) {
                  o.browser.mobile && (e = e.changedTouches[0]),
                    r.canSlide &&
                      (o(document).css({ cursor: 'default' }),
                      t.updateSliderVal(e),
                      o.browser.mobile || (e.preventDefault(), e.stopPropagation()));
                })
                .on(o.simpleSlider.events.end, function() {
                  o(document).css({ cursor: 'auto' }), (r.canSlide = !1), t.css({ cursor: 'auto' });
                }));
        });
      },
      updateSliderVal: function(e) {
        var r = this.get(0);
        if (r.opt) {
          r.opt.initialval =
            'number' == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);
          var t = o(r).outerWidth(),
            a = o(r).outerHeight();
          (r.x =
            'object' == typeof e
              ? e.clientX + document.body.scrollLeft - this.offset().left
              : 'number' == typeof e
              ? (e * t) / r.opt.scale
              : (r.opt.initialval * t) / r.opt.scale),
            (r.y =
              'object' == typeof e
                ? e.clientY + document.body.scrollTop - this.offset().top
                : 'number' == typeof e
                ? ((r.opt.scale - r.opt.initialval - e) * a) / r.opt.scale
                : (r.opt.initialval * a) / r.opt.scale),
            (r.y = this.outerHeight() - r.y),
            (r.scaleX = (r.x * r.opt.scale) / t),
            (r.scaleY = (r.y * r.opt.scale) / a),
            (r.outOfRangeX =
              r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0),
            (r.outOfRangeY =
              r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0),
            (r.outOfRange = 'h' == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY),
            (r.value =
              void 0 !== e
                ? 'h' == r.opt.orientation
                  ? r.x >= this.outerWidth()
                    ? r.opt.scale
                    : r.x <= 0
                    ? 0
                    : r.scaleX
                  : r.y >= this.outerHeight()
                  ? r.opt.scale
                  : r.y <= 0
                  ? 0
                  : r.scaleY
                : 'h' == r.opt.orientation
                ? r.scaleX
                : r.scaleY),
            'h' == r.opt.orientation
              ? r.level.width(Math.floor((100 * r.x) / t) + '%')
              : r.level.height(Math.floor((100 * r.y) / a)),
            'function' == typeof r.opt.callback && r.opt.callback(r);
        }
      },
    }),
      (o.fn.simpleSlider = o.simpleSlider.init),
      (o.fn.updateSliderVal = o.simpleSlider.updateSliderVal);
  })(jQuery),
  (function(r) {
    (r.mbCookie = {
      set: function(e, r, t, a) {
        'object' == typeof r && (r = JSON.stringify(r)), (a = a ? '; domain=' + a : '');
        var o = new Date(),
          n = '';
        0 < t && (o.setTime(o.getTime() + 864e5 * t), (n = '; expires=' + o.toGMTString())),
          (document.cookie = e + '=' + r + n + '; path=/' + a);
      },
      get: function(r) {
        r += '=';
        for (var e = document.cookie.split(';'), t = 0; t < e.length; t++) {
          for (var a = e[t]; ' ' == a.charAt(0); ) a = a.substring(1, a.length);
          if (0 == a.indexOf(r))
            try {
              return JSON.parse(a.substring(r.length, a.length));
            } catch (e) {
              return a.substring(r.length, a.length);
            }
        }
        return null;
      },
      remove: function(e) {
        r.mbCookie.set(e, '', -1);
      },
    }),
      (r.mbStorage = {
        set: function(e, r) {
          'object' == typeof r && (r = JSON.stringify(r)), localStorage.setItem(e, r);
        },
        get: function(r) {
          if (!localStorage[r]) return null;
          try {
            return JSON.parse(localStorage[r]);
          } catch (e) {
            return localStorage[r];
          }
        },
        remove: function(e) {
          e ? localStorage.removeItem(e) : localStorage.clear();
        },
      });
  })(jQuery);

/*------------------------------------------------------------------*/
/*	12) Owl Carousel
/*------------------------------------------------------------------*/
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function(a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: { initializing: ['busy'], animating: ['busy'], dragging: ['interacting'] },
      }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function(b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this),
      ),
      a.each(
        e.Plugins,
        a.proxy(function(a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this),
      ),
      a.each(
        e.Workers,
        a.proxy(function(b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this),
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function() {
          this._width = this.$element.width();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function(a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ['items', 'settings'],
        run: function() {
          this.$stage.children('.cloned').remove();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function(a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = { width: 'auto', 'margin-left': d ? b : '', 'margin-right': d ? '' : b };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function(a) {
          var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ['items', 'settings'],
        run: function() {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = '';
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h)
              .addClass('cloned')
              .appendTo(this.$stage),
            a(i)
              .addClass('cloned')
              .prependTo(this.$stage);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function() {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function() {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              'padding-left': a || '',
              'padding-right': a || '',
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function(a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ['items'],
        run: function() {
          this._coordinates.length < 1 && this.$stage.removeAttr('style');
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function(a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))),
            this.reset(a.current);
        },
      },
      {
        filter: ['position'],
        run: function() {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function() {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                (this.op(b, '<', g) && this.op(b, '>', h))) &&
                i.push(c);
          this.$stage.children('.active').removeClass('active'),
            this.$stage.children(':eq(' + i.join('), :eq(') + ')').addClass('active'),
            this.$stage.children('.center').removeClass('center'),
            this.settings.center &&
              this.$stage
                .children()
                .eq(this.current())
                .addClass('center');
        },
      },
    ]),
    (e.prototype.initializeStage = function() {
      (this.$stage = this.$element.find('.' + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a('<' + this.settings.stageElement + '>', {
            class: this.settings.stageClass,
          }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function() {
      var b = this.$element.find('.owl-item');
      if (b.length)
        return (
          (this._items = b.get().map(function(b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function() {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate('width'),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function() {
      if (
        (this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading'))
      ) {
        var a, b, c;
        (a = this.$element.find('img')),
          (b = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized');
    }),
    (e.prototype.isVisible = function() {
      return !this.settings.checkVisibility || this.$element.is(':visible');
    }),
    (e.prototype.setup = function() {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'),
                  '$1' + d,
                ),
            ))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    }),
    (e.prototype.optionsLogic = function() {
      this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function(b) {
      var c = this.trigger('prepare', { content: b });
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function() {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function(a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is('valid') && this.enter('valid');
    }),
    (e.prototype.width = function(a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin;
      }
    }),
    (e.prototype.refresh = function() {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed');
    }),
    (e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate,
        ));
    }),
    (e.prototype.onResize = function() {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
          !!this.isVisible() &&
            (this.enter('resizing'),
            this.trigger('resize').isDefaultPrevented()
              ? (this.leave('resizing'), !1)
              : (this.invalidate('width'),
                this.refresh(),
                this.leave('resizing'),
                void this.trigger('resized')))
      );
    }),
    (e.prototype.registerEventHandlers = function() {
      a.support.transition &&
        this.$stage.on(a.support.transition.end + '.owl.core', a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on('dragstart.owl.core selectstart.owl.core', function() {
            return !1;
          })),
        this.settings.touchDrag &&
          (this.$stage.on('touchstart.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)));
    }),
    (e.prototype.onDragStart = function(b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left + this.$stage.width() - this.width() + this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is('animating') &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(this.options.grabClass, 'mousedown' === b.type),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on('mouseup.owl.core touchend.owl.core', a.proxy(this.onDragEnd, this)),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on('mousemove.owl.core touchmove.owl.core', a.proxy(this.onDragMove, this)),
              (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                (b.preventDefault(), this.enter('dragging'), this.trigger('drag'));
          }, this),
        ));
    }),
    (e.prototype.onDragMove = function(a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function(b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right';
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function() {
              return !1;
            })),
        this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'));
    }),
    (e.prototype.closest = function(b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function(a, i) {
              return (
                'left' === c && b > i - f && b < i + f
                  ? (e = a)
                  : 'right' === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, '<', i) &&
                    this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = 'left' === c ? a + 1 : a),
                -1 === e
              );
            }, this),
          ),
        this.settings.loop ||
          (this.op(b, '>', h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function(b) {
      var c = this.speed() > 0;
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + b + 'px,0px,0px)',
              transition:
                this.speed() / 1e3 +
                's' +
                (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''),
            })
          : c
          ? this.$stage.animate(
              { left: b + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this),
            )
          : this.$stage.css({ left: b + 'px' });
    }),
    (e.prototype.is = function(a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function(a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', { property: { name: 'position', value: a } });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate('position'),
          this.trigger('changed', { property: { name: 'position', value: this._current } });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function(b) {
      return (
        'string' === a.type(b) &&
          ((this._invalidated[b] = !0), this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function(a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function(a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(['translate', 'translated']),
        this.animate(this.coordinates(a)),
        this.release(['translate', 'translated']));
    }),
    (e.prototype.normalize = function(a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function(a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function(a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function(a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function(a) {
      return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function(a) {
      return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function(b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function(a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function(a, b) {
            return f(b);
          })
        : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function(a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function(b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function(a, b) {
              return this.coordinates(b);
            }, this),
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function(a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function(a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function(a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function(a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function(a) {
      if (
        a !== d &&
        (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave('animating'), this.trigger('translated');
    }),
    (e.prototype.viewport = function() {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      );
    }),
    (e.prototype.replace = function(b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function() {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function(a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1,
                );
            }, this),
          ),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate('items');
    }),
    (e.prototype.add = function(b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1,
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1,
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c });
    }),
    (e.prototype.remove = function(a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger('remove', { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate('items'),
        this.trigger('removed', { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function(b) {
      b.each(
        a.proxy(function(b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function(a) {
                  c.attr('src', a.target.src),
                    c.css('opacity', 1),
                    this.leave('pre-loading'),
                    !this.is('pre-loading') && !this.is('initializing') && this.refresh();
                }, this),
              )
              .attr('src', c.attr('src') || c.attr('data-src') || c.attr('data-src-retina'));
        }, this),
      );
    }),
    (e.prototype.destroy = function() {
      this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        a(c).off('.owl.core'),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, 'resize', this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage
          .children()
          .contents()
          .unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''),
          )
          .removeData('owl.carousel');
    }),
    (e.prototype.op = function(a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case '<':
          return d ? a > c : a < c;
        case '>':
          return d ? a < c : a > c;
        case '>=':
          return d ? a <= c : a >= c;
        case '<=':
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function(a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    }),
    (e.prototype.off = function(a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent('on' + b, c);
    }),
    (e.prototype.trigger = function(b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function(a) {
              return a;
            })
            .join('-')
            .toLowerCase(),
        ),
        j = a.Event(
          [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
          a.extend({ relatedTarget: this }, h, c),
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings && 'function' == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function(b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function(a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this),
      );
    }),
    (e.prototype.leave = function(b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function(a, b) {
          this._states.current[b]--;
        }, this),
      );
    }),
    (e.prototype.register = function(b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function(a) {
            return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf('owl'))
              ? a.namespace && a.namespace.indexOf('owl') > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function(c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this),
          )));
    }),
    (e.prototype.suppress = function(b) {
      a.each(
        b,
        a.proxy(function(a, b) {
          this._supress[b] = !0;
        }, this),
      );
    }),
    (e.prototype.release = function(b) {
      a.each(
        b,
        a.proxy(function(a, b) {
          delete this._supress[b];
        }, this),
      );
    }),
    (e.prototype.pointer = function(a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function(a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function(b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
        var d = a(this),
          f = d.data('owl.carousel');
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function(
            b,
            c,
          ) {
            f.register({ type: e.Type.Event, name: c }),
              f.$element.on(
                c + '.owl.carousel.core',
                a.proxy(function(a) {
                  a.namespace &&
                    a.relatedTarget !== this &&
                    (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]));
                }, f),
              );
          })),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function(a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function() {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval,
          )));
      }),
      (e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible && this._core.invalidate('width') && this._core.refresh());
      }),
      (e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel': a.proxy(function(b) {
            if (
              b.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((b.property && 'position' == b.property.name) || 'initialized' == b.type)
            ) {
              var c = this._core.settings,
                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                f = (c.center && -1 * e) || 0,
                g =
                  (b.property && b.property.value !== d ? b.property.value : this._core.current()) +
                  f,
                h = this._core.clones().length,
                i = a.proxy(function(a, b) {
                  this.load(b);
                }, this);
              for (
                c.lazyLoadEager > 0 &&
                ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++));
                f++ < e;

              )
                this.load(h / 2 + this._core.relative(g)),
                  h && a.each(this._core.clones(this._core.relative(g)), i),
                  g++;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy');
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function(c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                  f.attr('data-src') ||
                  f.attr('data-srcset');
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function() {
                          f.css('opacity', 1),
                            this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                        }, this),
                      )
                      .attr('src', g)
                  : f.is('source')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function() {
                          this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                        }, this),
                      )
                      .attr('srcset', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function() {
                      f.css({ 'background-image': 'url("' + g + '")', opacity: '1' }),
                        this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                    }, this)),
                    (e.src = g));
            }, this),
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function(a) {
            a.namespace && this._core.settings.autoHeight && this.update();
          }, this),
          'changed.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              'position' === a.property.name &&
              this.update();
          }, this),
          'loaded.owl.lazy': a.proxy(function(a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on('load', function() {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function() {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function() {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function() {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage
            .children()
            .toArray()
            .slice(b, c),
          f = [],
          g = 0;
        a.each(e, function(b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
          }, this),
          'resize.owl.carousel': a.proxy(function(a) {
            a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
          }, this),
          'refreshed.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove();
          }, this),
          'changed.owl.carousel': a.proxy(function(a) {
            a.namespace && 'position' === a.property.name && this._playing && this.stop();
          }, this),
          'prepared.owl.carousel': a.proxy(function(b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video');
              c.length && (c.css('display', 'none'), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function(a) {
            this.play(a);
          }, this),
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function(a, b) {
        var c = (function() {
            return a.attr('data-vimeo-id')
              ? 'vimeo'
              : a.attr('data-vzaar-id')
              ? 'vzaar'
              : 'youtube';
          })(),
          d = a.attr('data-vimeo-id') || a.attr('data-youtube-id') || a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href');
        if (!g) throw new Error('Missing video URL.');
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube';
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo';
        else {
          if (!(d[3].indexOf('vzaar') > -1)) throw new Error('Video URL not supported.');
          c = 'vzaar';
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr('data-video', g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function(b, c) {
        var d,
          e,
          f,
          g = c.width && c.height ? 'width:' + c.width + 'px;height:' + c.height + 'px;' : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function(c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c })
                : a('<div/>', {
                    class: 'owl-video-tn',
                    style: 'opacity:1;background-image:url(' + c + ')',
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })),
          this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function(a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function(a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function() {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video');
      }),
      (e.prototype.play = function(b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>',
          )),
          c.attr('height', h),
          c.attr('width', g),
          'youtube' === f.type
            ? c.attr('src', '//www.youtube.com/embed/' + f.id + '?autoplay=1&rel=0&v=' + f.id)
            : 'vimeo' === f.type
            ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
            : 'vzaar' === f.type &&
              c.attr('src', '//view.vzaar.com/' + f.id + '/player?autoplay=true'),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find('.owl-video')),
          (this._playing = e.addClass('owl-video-playing')));
      }),
      (e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return (
          b &&
          a(b)
            .parent()
            .hasClass('owl-video-frame')
        );
      }),
      (e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off('click.owl.video');
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              'position' == a.property.name &&
              ((this.previous = this.core.current()), (this.next = a.property.value));
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': a.proxy(function(a) {
            a.namespace && (this.swapping = 'translated' == a.type);
          }, this),
          'translate.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass('animated owl-animated-in')
                .addClass(f));
        }
      }),
      (e.prototype.clear = function(b) {
        a(b.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function(a) {
            a.namespace && 'settings' === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace && 'position' === a.property.name && this._paused && (this._time = 0);
          }, this),
          'initialized.owl.carousel': a.proxy(function(a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          'play.owl.autoplay': a.proxy(function(a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          'stop.owl.autoplay': a.proxy(function(a) {
            a.namespace && this.stop();
          }, this),
          'mouseover.owl.autoplay': a.proxy(function() {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function() {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play();
          }, this),
          'touchstart.owl.core': a.proxy(function() {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
          }, this),
          'touchend.owl.core': a.proxy(function() {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function(d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read(),
        )),
          this._core.is('interacting') ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function() {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function(c, d) {
        var e;
        this._core.is('rotating') || this._core.enter('rotating'),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function() {
        this._core.is('rotating') &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave('rotating'));
      }),
      (e.prototype.pause = function() {
        this._core.is('rotating') &&
          !this._paused &&
          ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    'use strict';
    var e = function(b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function(b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>',
              );
          }, this),
          'added.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          'remove.owl.carousel': a.proxy(function(a) {
            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
          }, this),
          'changed.owl.carousel': a.proxy(function(a) {
            a.namespace && 'position' == a.property.name && this.draw();
          }, this),
          'initialized.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'));
          }, this),
          'refreshed.owl.carousel': a.proxy(function(a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function() {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (c.navContainer
          ? a(c.navContainer)
          : a('<div>')
              .addClass(c.navContainerClass)
              .appendTo(this.$element)
        ).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function(a) {
                this.prev(c.navSpeed);
              }, this),
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function(a) {
                this.next(c.navSpeed);
              }, this),
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a('<span>'))
                .prop('outerHTML'),
            ]),
          (this._controls.$absolute = (c.dotsContainer
            ? a(c.dotsContainer)
            : a('<div>')
                .addClass(c.dotsClass)
                .appendTo(this.$element)
          ).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'button',
            a.proxy(function(b) {
              var d = a(b.target)
                .parent()
                .is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target)
                    .parent()
                    .index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this),
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          '$relative' === b && e.navContainer
            ? this._controls[b].html('')
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function() {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || 'page' == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function() {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass('disabled', !f && e <= this._core.minimum(!0)),
            this._controls.$next.toggleClass('disabled', !f && e >= this._core.maximum(!0))),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b = this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
              : b < 0 &&
                this._controls.$absolute
                  .children()
                  .slice(b)
                  .remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass('active'));
      }),
      (e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function(a, c) {
              return a.start <= b && a.end >= b;
            }, this),
          )
          .pop();
      }),
      (e.prototype.getPosition = function(b) {
        var c,
          d,
          e = this._core.settings;
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    'use strict';
    var e = function(c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function(c) {
            c.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              a(b).trigger('hashchange.owl.navigation');
          }, this),
          'prepared.owl.carousel': a.proxy(function(b) {
            if (b.namespace) {
              var c = a(b.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash');
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          'changed.owl.carousel': a.proxy(function(c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(this._core.relative(this._core.current())),
                e = a
                  .map(this._hashes, function(a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function(a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
          }, this),
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function() {
        var c, d;
        a(b).off('hashchange.owl.navigation');
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          'function' != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function(a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      },
      j = {
        csstransforms: function() {
          return !!e('transform');
        },
        csstransforms3d: function() {
          return !!e('perspective');
        },
        csstransitions: function() {
          return !!e('transition');
        },
        cssanimations: function() {
          return !!e('animation');
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f('transition'))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f('animation'))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f('transform'))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*------------------------------------------------------------------*/
/*	13) Zepto Js
/*------------------------------------------------------------------*/
/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!(function(t, e) {
  'function' == typeof define && define.amd
    ? define(function() {
        return e(t);
      })
    : e(t);
})(this, function(t) {
  var e = (function() {
    function $(t) {
      return null == t ? String(t) : S[C.call(t)] || 'object';
    }
    function F(t) {
      return 'function' == $(t);
    }
    function k(t) {
      return null != t && t == t.window;
    }
    function M(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE;
    }
    function R(t) {
      return 'object' == $(t);
    }
    function Z(t) {
      return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype;
    }
    function z(t) {
      var e = !!t && 'length' in t && t.length,
        n = r.type(t);
      return (
        'function' != n &&
        !k(t) &&
        ('array' == n || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t))
      );
    }
    function q(t) {
      return a.call(t, function(t) {
        return null != t;
      });
    }
    function H(t) {
      return t.length > 0 ? r.fn.concat.apply([], t) : t;
    }
    function I(t) {
      return t
        .replace(/::/g, '/')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .replace(/_/g, '-')
        .toLowerCase();
    }
    function V(t) {
      return t in l ? l[t] : (l[t] = new RegExp('(^|\\s)' + t + '(\\s|$)'));
    }
    function _(t, e) {
      return 'number' != typeof e || h[I(t)] ? e : e + 'px';
    }
    function B(t) {
      var e, n;
      return (
        c[t] ||
          ((e = f.createElement(t)),
          f.body.appendChild(e),
          (n = getComputedStyle(e, '').getPropertyValue('display')),
          e.parentNode.removeChild(e),
          'none' == n && (n = 'block'),
          (c[t] = n)),
        c[t]
      );
    }
    function U(t) {
      return 'children' in t
        ? u.call(t.children)
        : r.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0;
          });
    }
    function X(t, e) {
      var n,
        r = t ? t.length : 0;
      for (n = 0; r > n; n++) this[n] = t[n];
      (this.length = r), (this.selector = e || '');
    }
    function J(t, r, i) {
      for (n in r)
        i && (Z(r[n]) || L(r[n]))
          ? (Z(r[n]) && !Z(t[n]) && (t[n] = {}),
            L(r[n]) && !L(t[n]) && (t[n] = []),
            J(t[n], r[n], i))
          : r[n] !== e && (t[n] = r[n]);
    }
    function W(t, e) {
      return null == e ? r(t) : r(t).filter(e);
    }
    function Y(t, e, n, r) {
      return F(e) ? e.call(t, n, r) : e;
    }
    function G(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
    }
    function K(t, n) {
      var r = t.className || '',
        i = r && r.baseVal !== e;
      return n === e ? (i ? r.baseVal : r) : void (i ? (r.baseVal = n) : (t.className = n));
    }
    function Q(t) {
      try {
        return t
          ? 'true' == t ||
              ('false' == t
                ? !1
                : 'null' == t
                ? null
                : +t + '' == t
                ? +t
                : /^[\[\{]/.test(t)
                ? r.parseJSON(t)
                : t)
          : t;
      } catch (e) {
        return t;
      }
    }
    function tt(t, e) {
      e(t);
      for (var n = 0, r = t.childNodes.length; r > n; n++) tt(t.childNodes[n], e);
    }
    var e,
      n,
      r,
      i,
      O,
      P,
      o = [],
      s = o.concat,
      a = o.filter,
      u = o.slice,
      f = t.document,
      c = {},
      l = {},
      h = {
        'column-count': 1,
        columns: 1,
        'font-weight': 1,
        'line-height': 1,
        opacity: 1,
        'z-index': 1,
        zoom: 1,
      },
      p = /^\s*<(\w+|!)[^>]*>/,
      d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      g = /^(?:body|html)$/i,
      v = /([A-Z])/g,
      y = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
      x = ['after', 'prepend', 'before', 'append'],
      b = f.createElement('table'),
      E = f.createElement('tr'),
      j = {
        tr: f.createElement('tbody'),
        tbody: b,
        thead: b,
        tfoot: b,
        td: E,
        th: E,
        '*': f.createElement('div'),
      },
      w = /complete|loaded|interactive/,
      T = /^[\w-]*$/,
      S = {},
      C = S.toString,
      N = {},
      A = f.createElement('div'),
      D = {
        tabindex: 'tabIndex',
        readonly: 'readOnly',
        for: 'htmlFor',
        class: 'className',
        maxlength: 'maxLength',
        cellspacing: 'cellSpacing',
        cellpadding: 'cellPadding',
        rowspan: 'rowSpan',
        colspan: 'colSpan',
        usemap: 'useMap',
        frameborder: 'frameBorder',
        contenteditable: 'contentEditable',
      },
      L =
        Array.isArray ||
        function(t) {
          return t instanceof Array;
        };
    return (
      (N.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.oMatchesSelector ||
          t.matchesSelector;
        if (n) return n.call(t, e);
        var r,
          i = t.parentNode,
          o = !i;
        return o && (i = A).appendChild(t), (r = ~N.qsa(i, e).indexOf(t)), o && A.removeChild(t), r;
      }),
      (O = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
          return e ? e.toUpperCase() : '';
        });
      }),
      (P = function(t) {
        return a.call(t, function(e, n) {
          return t.indexOf(e) == n;
        });
      }),
      (N.fragment = function(t, n, i) {
        var o, s, a;
        return (
          d.test(t) && (o = r(f.createElement(RegExp.$1))),
          o ||
            (t.replace && (t = t.replace(m, '<$1></$2>')),
            n === e && (n = p.test(t) && RegExp.$1),
            n in j || (n = '*'),
            (a = j[n]),
            (a.innerHTML = '' + t),
            (o = r.each(u.call(a.childNodes), function() {
              a.removeChild(this);
            }))),
          Z(i) &&
            ((s = r(o)),
            r.each(i, function(t, e) {
              y.indexOf(t) > -1 ? s[t](e) : s.attr(t, e);
            })),
          o
        );
      }),
      (N.Z = function(t, e) {
        return new X(t, e);
      }),
      (N.isZ = function(t) {
        return t instanceof N.Z;
      }),
      (N.init = function(t, n) {
        var i;
        if (!t) return N.Z();
        if ('string' == typeof t)
          if (((t = t.trim()), '<' == t[0] && p.test(t)))
            (i = N.fragment(t, RegExp.$1, n)), (t = null);
          else {
            if (n !== e) return r(n).find(t);
            i = N.qsa(f, t);
          }
        else {
          if (F(t)) return r(f).ready(t);
          if (N.isZ(t)) return t;
          if (L(t)) i = q(t);
          else if (R(t)) (i = [t]), (t = null);
          else if (p.test(t)) (i = N.fragment(t.trim(), RegExp.$1, n)), (t = null);
          else {
            if (n !== e) return r(n).find(t);
            i = N.qsa(f, t);
          }
        }
        return N.Z(i, t);
      }),
      (r = function(t, e) {
        return N.init(t, e);
      }),
      (r.extend = function(t) {
        var e,
          n = u.call(arguments, 1);
        return (
          'boolean' == typeof t && ((e = t), (t = n.shift())),
          n.forEach(function(n) {
            J(t, n, e);
          }),
          t
        );
      }),
      (N.qsa = function(t, e) {
        var n,
          r = '#' == e[0],
          i = !r && '.' == e[0],
          o = r || i ? e.slice(1) : e,
          s = T.test(o);
        return t.getElementById && s && r
          ? (n = t.getElementById(o))
            ? [n]
            : []
          : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType
          ? []
          : u.call(
              s && !r && t.getElementsByClassName
                ? i
                  ? t.getElementsByClassName(o)
                  : t.getElementsByTagName(e)
                : t.querySelectorAll(e),
            );
      }),
      (r.contains = f.documentElement.contains
        ? function(t, e) {
            return t !== e && t.contains(e);
          }
        : function(t, e) {
            for (; e && (e = e.parentNode); ) if (e === t) return !0;
            return !1;
          }),
      (r.type = $),
      (r.isFunction = F),
      (r.isWindow = k),
      (r.isArray = L),
      (r.isPlainObject = Z),
      (r.isEmptyObject = function(t) {
        var e;
        for (e in t) return !1;
        return !0;
      }),
      (r.isNumeric = function(t) {
        var e = Number(t),
          n = typeof t;
        return (
          (null != t &&
            'boolean' != n &&
            ('string' != n || t.length) &&
            !isNaN(e) &&
            isFinite(e)) ||
          !1
        );
      }),
      (r.inArray = function(t, e, n) {
        return o.indexOf.call(e, t, n);
      }),
      (r.camelCase = O),
      (r.trim = function(t) {
        return null == t ? '' : String.prototype.trim.call(t);
      }),
      (r.uuid = 0),
      (r.support = {}),
      (r.expr = {}),
      (r.noop = function() {}),
      (r.map = function(t, e) {
        var n,
          i,
          o,
          r = [];
        if (z(t)) for (i = 0; i < t.length; i++) (n = e(t[i], i)), null != n && r.push(n);
        else for (o in t) (n = e(t[o], o)), null != n && r.push(n);
        return H(r);
      }),
      (r.each = function(t, e) {
        var n, r;
        if (z(t)) {
          for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t;
        } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
        return t;
      }),
      (r.grep = function(t, e) {
        return a.call(t, e);
      }),
      t.JSON && (r.parseJSON = JSON.parse),
      r.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function(
        t,
        e,
      ) {
        S['[object ' + e + ']'] = e.toLowerCase();
      }),
      (r.fn = {
        constructor: N.Z,
        length: 0,
        forEach: o.forEach,
        reduce: o.reduce,
        push: o.push,
        sort: o.sort,
        splice: o.splice,
        indexOf: o.indexOf,
        concat: function() {
          var t,
            e,
            n = [];
          for (t = 0; t < arguments.length; t++)
            (e = arguments[t]), (n[t] = N.isZ(e) ? e.toArray() : e);
          return s.apply(N.isZ(this) ? this.toArray() : this, n);
        },
        map: function(t) {
          return r(
            r.map(this, function(e, n) {
              return t.call(e, n, e);
            }),
          );
        },
        slice: function() {
          return r(u.apply(this, arguments));
        },
        ready: function(t) {
          return (
            w.test(f.readyState) && f.body
              ? t(r)
              : f.addEventListener(
                  'DOMContentLoaded',
                  function() {
                    t(r);
                  },
                  !1,
                ),
            this
          );
        },
        get: function(t) {
          return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length];
        },
        toArray: function() {
          return this.get();
        },
        size: function() {
          return this.length;
        },
        remove: function() {
          return this.each(function() {
            null != this.parentNode && this.parentNode.removeChild(this);
          });
        },
        each: function(t) {
          return (
            o.every.call(this, function(e, n) {
              return t.call(e, n, e) !== !1;
            }),
            this
          );
        },
        filter: function(t) {
          return F(t)
            ? this.not(this.not(t))
            : r(
                a.call(this, function(e) {
                  return N.matches(e, t);
                }),
              );
        },
        add: function(t, e) {
          return r(P(this.concat(r(t, e))));
        },
        is: function(t) {
          return this.length > 0 && N.matches(this[0], t);
        },
        not: function(t) {
          var n = [];
          if (F(t) && t.call !== e)
            this.each(function(e) {
              t.call(this, e) || n.push(this);
            });
          else {
            var i = 'string' == typeof t ? this.filter(t) : z(t) && F(t.item) ? u.call(t) : r(t);
            this.forEach(function(t) {
              i.indexOf(t) < 0 && n.push(t);
            });
          }
          return r(n);
        },
        has: function(t) {
          return this.filter(function() {
            return R(t)
              ? r.contains(this, t)
              : r(this)
                  .find(t)
                  .size();
          });
        },
        eq: function(t) {
          return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
        },
        first: function() {
          var t = this[0];
          return t && !R(t) ? t : r(t);
        },
        last: function() {
          var t = this[this.length - 1];
          return t && !R(t) ? t : r(t);
        },
        find: function(t) {
          var e,
            n = this;
          return (e = t
            ? 'object' == typeof t
              ? r(t).filter(function() {
                  var t = this;
                  return o.some.call(n, function(e) {
                    return r.contains(e, t);
                  });
                })
              : 1 == this.length
              ? r(N.qsa(this[0], t))
              : this.map(function() {
                  return N.qsa(this, t);
                })
            : r());
        },
        closest: function(t, e) {
          var n = [],
            i = 'object' == typeof t && r(t);
          return (
            this.each(function(r, o) {
              for (; o && !(i ? i.indexOf(o) >= 0 : N.matches(o, t)); )
                o = o !== e && !M(o) && o.parentNode;
              o && n.indexOf(o) < 0 && n.push(o);
            }),
            r(n)
          );
        },
        parents: function(t) {
          for (var e = [], n = this; n.length > 0; )
            n = r.map(n, function(t) {
              return (t = t.parentNode) && !M(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
            });
          return W(e, t);
        },
        parent: function(t) {
          return W(P(this.pluck('parentNode')), t);
        },
        children: function(t) {
          return W(
            this.map(function() {
              return U(this);
            }),
            t,
          );
        },
        contents: function() {
          return this.map(function() {
            return this.contentDocument || u.call(this.childNodes);
          });
        },
        siblings: function(t) {
          return W(
            this.map(function(t, e) {
              return a.call(U(e.parentNode), function(t) {
                return t !== e;
              });
            }),
            t,
          );
        },
        empty: function() {
          return this.each(function() {
            this.innerHTML = '';
          });
        },
        pluck: function(t) {
          return r.map(this, function(e) {
            return e[t];
          });
        },
        show: function() {
          return this.each(function() {
            'none' == this.style.display && (this.style.display = ''),
              'none' == getComputedStyle(this, '').getPropertyValue('display') &&
                (this.style.display = B(this.nodeName));
          });
        },
        replaceWith: function(t) {
          return this.before(t).remove();
        },
        wrap: function(t) {
          var e = F(t);
          if (this[0] && !e)
            var n = r(t).get(0),
              i = n.parentNode || this.length > 1;
          return this.each(function(o) {
            r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n);
          });
        },
        wrapAll: function(t) {
          if (this[0]) {
            r(this[0]).before((t = r(t)));
            for (var e; (e = t.children()).length; ) t = e.first();
            r(t).append(this);
          }
          return this;
        },
        wrapInner: function(t) {
          var e = F(t);
          return this.each(function(n) {
            var i = r(this),
              o = i.contents(),
              s = e ? t.call(this, n) : t;
            o.length ? o.wrapAll(s) : i.append(s);
          });
        },
        unwrap: function() {
          return (
            this.parent().each(function() {
              r(this).replaceWith(r(this).children());
            }),
            this
          );
        },
        clone: function() {
          return this.map(function() {
            return this.cloneNode(!0);
          });
        },
        hide: function() {
          return this.css('display', 'none');
        },
        toggle: function(t) {
          return this.each(function() {
            var n = r(this);
            (t === e ? 'none' == n.css('display') : t) ? n.show() : n.hide();
          });
        },
        prev: function(t) {
          return r(this.pluck('previousElementSibling')).filter(t || '*');
        },
        next: function(t) {
          return r(this.pluck('nextElementSibling')).filter(t || '*');
        },
        html: function(t) {
          return 0 in arguments
            ? this.each(function(e) {
                var n = this.innerHTML;
                r(this)
                  .empty()
                  .append(Y(this, t, e, n));
              })
            : 0 in this
            ? this[0].innerHTML
            : null;
        },
        text: function(t) {
          return 0 in arguments
            ? this.each(function(e) {
                var n = Y(this, t, e, this.textContent);
                this.textContent = null == n ? '' : '' + n;
              })
            : 0 in this
            ? this.pluck('textContent').join('')
            : null;
        },
        attr: function(t, r) {
          var i;
          return 'string' != typeof t || 1 in arguments
            ? this.each(function(e) {
                if (1 === this.nodeType)
                  if (R(t)) for (n in t) G(this, n, t[n]);
                  else G(this, t, Y(this, r, e, this.getAttribute(t)));
              })
            : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t))
            ? i
            : e;
        },
        removeAttr: function(t) {
          return this.each(function() {
            1 === this.nodeType &&
              t.split(' ').forEach(function(t) {
                G(this, t);
              }, this);
          });
        },
        prop: function(t, e) {
          return (
            (t = D[t] || t),
            1 in arguments
              ? this.each(function(n) {
                  this[t] = Y(this, e, n, this[t]);
                })
              : this[0] && this[0][t]
          );
        },
        removeProp: function(t) {
          return (
            (t = D[t] || t),
            this.each(function() {
              delete this[t];
            })
          );
        },
        data: function(t, n) {
          var r = 'data-' + t.replace(v, '-$1').toLowerCase(),
            i = 1 in arguments ? this.attr(r, n) : this.attr(r);
          return null !== i ? Q(i) : e;
        },
        val: function(t) {
          return 0 in arguments
            ? (null == t && (t = ''),
              this.each(function(e) {
                this.value = Y(this, t, e, this.value);
              }))
            : this[0] &&
                (this[0].multiple
                  ? r(this[0])
                      .find('option')
                      .filter(function() {
                        return this.selected;
                      })
                      .pluck('value')
                  : this[0].value);
        },
        offset: function(e) {
          if (e)
            return this.each(function(t) {
              var n = r(this),
                i = Y(this, e, t, n.offset()),
                o = n.offsetParent().offset(),
                s = { top: i.top - o.top, left: i.left - o.left };
              'static' == n.css('position') && (s.position = 'relative'), n.css(s);
            });
          if (!this.length) return null;
          if (f.documentElement !== this[0] && !r.contains(f.documentElement, this[0]))
            return { top: 0, left: 0 };
          var n = this[0].getBoundingClientRect();
          return {
            left: n.left + t.pageXOffset,
            top: n.top + t.pageYOffset,
            width: Math.round(n.width),
            height: Math.round(n.height),
          };
        },
        css: function(t, e) {
          if (arguments.length < 2) {
            var i = this[0];
            if ('string' == typeof t) {
              if (!i) return;
              return i.style[O(t)] || getComputedStyle(i, '').getPropertyValue(t);
            }
            if (L(t)) {
              if (!i) return;
              var o = {},
                s = getComputedStyle(i, '');
              return (
                r.each(t, function(t, e) {
                  o[e] = i.style[O(e)] || s.getPropertyValue(e);
                }),
                o
              );
            }
          }
          var a = '';
          if ('string' == $(t))
            e || 0 === e
              ? (a = I(t) + ':' + _(t, e))
              : this.each(function() {
                  this.style.removeProperty(I(t));
                });
          else
            for (n in t)
              t[n] || 0 === t[n]
                ? (a += I(n) + ':' + _(n, t[n]) + ';')
                : this.each(function() {
                    this.style.removeProperty(I(n));
                  });
          return this.each(function() {
            this.style.cssText += ';' + a;
          });
        },
        index: function(t) {
          return t
            ? this.indexOf(r(t)[0])
            : this.parent()
                .children()
                .indexOf(this[0]);
        },
        hasClass: function(t) {
          return t
            ? o.some.call(
                this,
                function(t) {
                  return this.test(K(t));
                },
                V(t),
              )
            : !1;
        },
        addClass: function(t) {
          return t
            ? this.each(function(e) {
                if ('className' in this) {
                  i = [];
                  var n = K(this),
                    o = Y(this, t, e, n);
                  o.split(/\s+/g).forEach(function(t) {
                    r(this).hasClass(t) || i.push(t);
                  }, this),
                    i.length && K(this, n + (n ? ' ' : '') + i.join(' '));
                }
              })
            : this;
        },
        removeClass: function(t) {
          return this.each(function(n) {
            if ('className' in this) {
              if (t === e) return K(this, '');
              (i = K(this)),
                Y(this, t, n, i)
                  .split(/\s+/g)
                  .forEach(function(t) {
                    i = i.replace(V(t), ' ');
                  }),
                K(this, i.trim());
            }
          });
        },
        toggleClass: function(t, n) {
          return t
            ? this.each(function(i) {
                var o = r(this),
                  s = Y(this, t, i, K(this));
                s.split(/\s+/g).forEach(function(t) {
                  (n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t);
                });
              })
            : this;
        },
        scrollTop: function(t) {
          if (this.length) {
            var n = 'scrollTop' in this[0];
            return t === e
              ? n
                ? this[0].scrollTop
                : this[0].pageYOffset
              : this.each(
                  n
                    ? function() {
                        this.scrollTop = t;
                      }
                    : function() {
                        this.scrollTo(this.scrollX, t);
                      },
                );
          }
        },
        scrollLeft: function(t) {
          if (this.length) {
            var n = 'scrollLeft' in this[0];
            return t === e
              ? n
                ? this[0].scrollLeft
                : this[0].pageXOffset
              : this.each(
                  n
                    ? function() {
                        this.scrollLeft = t;
                      }
                    : function() {
                        this.scrollTo(t, this.scrollY);
                      },
                );
          }
        },
        position: function() {
          if (this.length) {
            var t = this[0],
              e = this.offsetParent(),
              n = this.offset(),
              i = g.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
            return (
              (n.top -= parseFloat(r(t).css('margin-top')) || 0),
              (n.left -= parseFloat(r(t).css('margin-left')) || 0),
              (i.top += parseFloat(r(e[0]).css('border-top-width')) || 0),
              (i.left += parseFloat(r(e[0]).css('border-left-width')) || 0),
              { top: n.top - i.top, left: n.left - i.left }
            );
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (
              var t = this.offsetParent || f.body;
              t && !g.test(t.nodeName) && 'static' == r(t).css('position');

            )
              t = t.offsetParent;
            return t;
          });
        },
      }),
      (r.fn.detach = r.fn.remove),
      ['width', 'height'].forEach(function(t) {
        var n = t.replace(/./, function(t) {
          return t[0].toUpperCase();
        });
        r.fn[t] = function(i) {
          var o,
            s = this[0];
          return i === e
            ? k(s)
              ? s['inner' + n]
              : M(s)
              ? s.documentElement['scroll' + n]
              : (o = this.offset()) && o[t]
            : this.each(function(e) {
                (s = r(this)), s.css(t, Y(this, i, e, s[t]()));
              });
        };
      }),
      x.forEach(function(n, i) {
        var o = i % 2;
        (r.fn[n] = function() {
          var n,
            a,
            s = r.map(arguments, function(t) {
              var i = [];
              return (
                (n = $(t)),
                'array' == n
                  ? (t.forEach(function(t) {
                      return t.nodeType !== e
                        ? i.push(t)
                        : r.zepto.isZ(t)
                        ? (i = i.concat(t.get()))
                        : void (i = i.concat(N.fragment(t)));
                    }),
                    i)
                  : 'object' == n || null == t
                  ? t
                  : N.fragment(t)
              );
            }),
            u = this.length > 1;
          return s.length < 1
            ? this
            : this.each(function(e, n) {
                (a = o ? n : n.parentNode),
                  (n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null);
                var c = r.contains(f.documentElement, a);
                s.forEach(function(e) {
                  if (u) e = e.cloneNode(!0);
                  else if (!a) return r(e).remove();
                  a.insertBefore(e, n),
                    c &&
                      tt(e, function(e) {
                        if (
                          !(
                            null == e.nodeName ||
                            'SCRIPT' !== e.nodeName.toUpperCase() ||
                            (e.type && 'text/javascript' !== e.type) ||
                            e.src
                          )
                        ) {
                          var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                          n.eval.call(n, e.innerHTML);
                        }
                      });
                });
              });
        }),
          (r.fn[o ? n + 'To' : 'insert' + (i ? 'Before' : 'After')] = function(t) {
            return r(t)[n](this), this;
          });
      }),
      (N.Z.prototype = X.prototype = r.fn),
      (N.uniq = P),
      (N.deserializeValue = Q),
      (r.zepto = N),
      r
    );
  })();
  return (
    (t.Zepto = e),
    void 0 === t.$ && (t.$ = e),
    (function(e) {
      function h(t) {
        return t._zid || (t._zid = n++);
      }
      function p(t, e, n, r) {
        if (((e = d(e)), e.ns)) var i = m(e.ns);
        return (a[h(t)] || []).filter(function(t) {
          return (
            t &&
            (!e.e || t.e == e.e) &&
            (!e.ns || i.test(t.ns)) &&
            (!n || h(t.fn) === h(n)) &&
            (!r || t.sel == r)
          );
        });
      }
      function d(t) {
        var e = ('' + t).split('.');
        return {
          e: e[0],
          ns: e
            .slice(1)
            .sort()
            .join(' '),
        };
      }
      function m(t) {
        return new RegExp('(?:^| )' + t.replace(' ', ' .* ?') + '(?: |$)');
      }
      function g(t, e) {
        return (t.del && !f && t.e in c) || !!e;
      }
      function v(t) {
        return l[t] || (f && c[t]) || t;
      }
      function y(t, n, i, o, s, u, f) {
        var c = h(t),
          p = a[c] || (a[c] = []);
        n.split(/\s/).forEach(function(n) {
          if ('ready' == n) return e(document).ready(i);
          var a = d(n);
          (a.fn = i),
            (a.sel = s),
            a.e in l &&
              (i = function(t) {
                var n = t.relatedTarget;
                return !n || (n !== this && !e.contains(this, n))
                  ? a.fn.apply(this, arguments)
                  : void 0;
              }),
            (a.del = u);
          var c = u || i;
          (a.proxy = function(e) {
            if (((e = T(e)), !e.isImmediatePropagationStopped())) {
              e.data = o;
              var n = c.apply(t, e._args == r ? [e] : [e].concat(e._args));
              return n === !1 && (e.preventDefault(), e.stopPropagation()), n;
            }
          }),
            (a.i = p.length),
            p.push(a),
            'addEventListener' in t && t.addEventListener(v(a.e), a.proxy, g(a, f));
        });
      }
      function x(t, e, n, r, i) {
        var o = h(t);
        (e || '').split(/\s/).forEach(function(e) {
          p(t, e, n, r).forEach(function(e) {
            delete a[o][e.i],
              'removeEventListener' in t && t.removeEventListener(v(e.e), e.proxy, g(e, i));
          });
        });
      }
      function T(t, n) {
        return (
          (n || !t.isDefaultPrevented) &&
            (n || (n = t),
            e.each(w, function(e, r) {
              var i = n[e];
              (t[e] = function() {
                return (this[r] = b), i && i.apply(n, arguments);
              }),
                (t[r] = E);
            }),
            t.timeStamp || (t.timeStamp = Date.now()),
            (n.defaultPrevented !== r
              ? n.defaultPrevented
              : 'returnValue' in n
              ? n.returnValue === !1
              : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)),
          t
        );
      }
      function S(t) {
        var e,
          n = { originalEvent: t };
        for (e in t) j.test(e) || t[e] === r || (n[e] = t[e]);
        return T(n, t);
      }
      var r,
        n = 1,
        i = Array.prototype.slice,
        o = e.isFunction,
        s = function(t) {
          return 'string' == typeof t;
        },
        a = {},
        u = {},
        f = 'onfocusin' in t,
        c = { focus: 'focusin', blur: 'focusout' },
        l = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
      (u.click = u.mousedown = u.mouseup = u.mousemove = 'MouseEvents'),
        (e.event = { add: y, remove: x }),
        (e.proxy = function(t, n) {
          var r = 2 in arguments && i.call(arguments, 2);
          if (o(t)) {
            var a = function() {
              return t.apply(n, r ? r.concat(i.call(arguments)) : arguments);
            };
            return (a._zid = h(t)), a;
          }
          if (s(n)) return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t);
          throw new TypeError('expected function');
        }),
        (e.fn.bind = function(t, e, n) {
          return this.on(t, e, n);
        }),
        (e.fn.unbind = function(t, e) {
          return this.off(t, e);
        }),
        (e.fn.one = function(t, e, n, r) {
          return this.on(t, e, n, r, 1);
        });
      var b = function() {
          return !0;
        },
        E = function() {
          return !1;
        },
        j = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        w = {
          preventDefault: 'isDefaultPrevented',
          stopImmediatePropagation: 'isImmediatePropagationStopped',
          stopPropagation: 'isPropagationStopped',
        };
      (e.fn.delegate = function(t, e, n) {
        return this.on(e, t, n);
      }),
        (e.fn.undelegate = function(t, e, n) {
          return this.off(e, t, n);
        }),
        (e.fn.live = function(t, n) {
          return e(document.body).delegate(this.selector, t, n), this;
        }),
        (e.fn.die = function(t, n) {
          return e(document.body).undelegate(this.selector, t, n), this;
        }),
        (e.fn.on = function(t, n, a, u, f) {
          var c,
            l,
            h = this;
          return t && !s(t)
            ? (e.each(t, function(t, e) {
                h.on(t, n, a, e, f);
              }),
              h)
            : (s(n) || o(u) || u === !1 || ((u = a), (a = n), (n = r)),
              (u === r || a === !1) && ((u = a), (a = r)),
              u === !1 && (u = E),
              h.each(function(r, o) {
                f &&
                  (c = function(t) {
                    return x(o, t.type, u), u.apply(this, arguments);
                  }),
                  n &&
                    (l = function(t) {
                      var r,
                        s = e(t.target)
                          .closest(n, o)
                          .get(0);
                      return s && s !== o
                        ? ((r = e.extend(S(t), { currentTarget: s, liveFired: o })),
                          (c || u).apply(s, [r].concat(i.call(arguments, 1))))
                        : void 0;
                    }),
                  y(o, t, u, a, n, l || c);
              }));
        }),
        (e.fn.off = function(t, n, i) {
          var a = this;
          return t && !s(t)
            ? (e.each(t, function(t, e) {
                a.off(t, n, e);
              }),
              a)
            : (s(n) || o(i) || i === !1 || ((i = n), (n = r)),
              i === !1 && (i = E),
              a.each(function() {
                x(this, t, i, n);
              }));
        }),
        (e.fn.trigger = function(t, n) {
          return (
            (t = s(t) || e.isPlainObject(t) ? e.Event(t) : T(t)),
            (t._args = n),
            this.each(function() {
              t.type in c && 'function' == typeof this[t.type]
                ? this[t.type]()
                : 'dispatchEvent' in this
                ? this.dispatchEvent(t)
                : e(this).triggerHandler(t, n);
            })
          );
        }),
        (e.fn.triggerHandler = function(t, n) {
          var r, i;
          return (
            this.each(function(o, a) {
              (r = S(s(t) ? e.Event(t) : t)),
                (r._args = n),
                (r.target = a),
                e.each(p(a, t.type || t), function(t, e) {
                  return (i = e.proxy(r)), r.isImmediatePropagationStopped() ? !1 : void 0;
                });
            }),
            i
          );
        }),
        'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
          .split(' ')
          .forEach(function(t) {
            e.fn[t] = function(e) {
              return 0 in arguments ? this.bind(t, e) : this.trigger(t);
            };
          }),
        (e.Event = function(t, e) {
          s(t) || ((e = t), (t = e.type));
          var n = document.createEvent(u[t] || 'Events'),
            r = !0;
          if (e) for (var i in e) 'bubbles' == i ? (r = !!e[i]) : (n[i] = e[i]);
          return n.initEvent(t, r, !0), T(n);
        });
    })(e),
    (function(e) {
      function p(t, n, r) {
        var i = e.Event(n);
        return e(t).trigger(i, r), !i.isDefaultPrevented();
      }
      function d(t, e, n, i) {
        return t.global ? p(e || r, n, i) : void 0;
      }
      function m(t) {
        t.global && 0 === e.active++ && d(t, null, 'ajaxStart');
      }
      function g(t) {
        t.global && !--e.active && d(t, null, 'ajaxStop');
      }
      function v(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 || d(e, n, 'ajaxBeforeSend', [t, e]) === !1
          ? !1
          : void d(e, n, 'ajaxSend', [t, e]);
      }
      function y(t, e, n, r) {
        var i = n.context,
          o = 'success';
        n.success.call(i, t, o, e),
          r && r.resolveWith(i, [t, o, e]),
          d(n, i, 'ajaxSuccess', [e, n, t]),
          b(o, e, n);
      }
      function x(t, e, n, r, i) {
        var o = r.context;
        r.error.call(o, n, e, t),
          i && i.rejectWith(o, [n, e, t]),
          d(r, o, 'ajaxError', [n, r, t || e]),
          b(e, n, r);
      }
      function b(t, e, n) {
        var r = n.context;
        n.complete.call(r, e, t), d(n, r, 'ajaxComplete', [e, n]), g(n);
      }
      function E(t, e, n) {
        if (n.dataFilter == j) return t;
        var r = n.context;
        return n.dataFilter.call(r, t, e);
      }
      function j() {}
      function w(t) {
        return (
          t && (t = t.split(';', 2)[0]),
          (t && (t == c ? 'html' : t == f ? 'json' : a.test(t) ? 'script' : u.test(t) && 'xml')) ||
            'text'
        );
      }
      function T(t, e) {
        return '' == e ? t : (t + '&' + e).replace(/[&?]{1,2}/, '?');
      }
      function S(t) {
        t.processData &&
          t.data &&
          'string' != e.type(t.data) &&
          (t.data = e.param(t.data, t.traditional)),
          !t.data ||
            (t.type && 'GET' != t.type.toUpperCase() && 'jsonp' != t.dataType) ||
            ((t.url = T(t.url, t.data)), (t.data = void 0));
      }
      function C(t, n, r, i) {
        return (
          e.isFunction(n) && ((i = r), (r = n), (n = void 0)),
          e.isFunction(r) || ((i = r), (r = void 0)),
          { url: t, data: n, success: r, dataType: i }
        );
      }
      function O(t, n, r, i) {
        var o,
          s = e.isArray(n),
          a = e.isPlainObject(n);
        e.each(n, function(n, u) {
          (o = e.type(u)),
            i && (n = r ? i : i + '[' + (a || 'object' == o || 'array' == o ? n : '') + ']'),
            !i && s
              ? t.add(u.name, u.value)
              : 'array' == o || (!r && 'object' == o)
              ? O(t, u, r, n)
              : t.add(n, u);
        });
      }
      var i,
        o,
        n = +new Date(),
        r = t.document,
        s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        a = /^(?:text|application)\/javascript/i,
        u = /^(?:text|application)\/xml/i,
        f = 'application/json',
        c = 'text/html',
        l = /^\s*$/,
        h = r.createElement('a');
      (h.href = t.location.href),
        (e.active = 0),
        (e.ajaxJSONP = function(i, o) {
          if (!('type' in i)) return e.ajax(i);
          var c,
            p,
            s = i.jsonpCallback,
            a = (e.isFunction(s) ? s() : s) || 'Zepto' + n++,
            u = r.createElement('script'),
            f = t[a],
            l = function(t) {
              e(u).triggerHandler('error', t || 'abort');
            },
            h = { abort: l };
          return (
            o && o.promise(h),
            e(u).on('load error', function(n, r) {
              clearTimeout(p),
                e(u)
                  .off()
                  .remove(),
                'error' != n.type && c ? y(c[0], h, i, o) : x(null, r || 'error', h, i, o),
                (t[a] = f),
                c && e.isFunction(f) && f(c[0]),
                (f = c = void 0);
            }),
            v(h, i) === !1
              ? (l('abort'), h)
              : ((t[a] = function() {
                  c = arguments;
                }),
                (u.src = i.url.replace(/\?(.+)=\?/, '?$1=' + a)),
                r.head.appendChild(u),
                i.timeout > 0 &&
                  (p = setTimeout(function() {
                    l('timeout');
                  }, i.timeout)),
                h)
          );
        }),
        (e.ajaxSettings = {
          type: 'GET',
          beforeSend: j,
          success: j,
          error: j,
          complete: j,
          context: null,
          global: !0,
          xhr: function() {
            return new t.XMLHttpRequest();
          },
          accepts: {
            script: 'text/javascript, application/javascript, application/x-javascript',
            json: f,
            xml: 'application/xml, text/xml',
            html: c,
            text: 'text/plain',
          },
          crossDomain: !1,
          timeout: 0,
          processData: !0,
          cache: !0,
          dataFilter: j,
        }),
        (e.ajax = function(n) {
          var u,
            f,
            s = e.extend({}, n || {}),
            a = e.Deferred && e.Deferred();
          for (i in e.ajaxSettings) void 0 === s[i] && (s[i] = e.ajaxSettings[i]);
          m(s),
            s.crossDomain ||
              ((u = r.createElement('a')),
              (u.href = s.url),
              (u.href = u.href),
              (s.crossDomain = h.protocol + '//' + h.host != u.protocol + '//' + u.host)),
            s.url || (s.url = t.location.toString()),
            (f = s.url.indexOf('#')) > -1 && (s.url = s.url.slice(0, f)),
            S(s);
          var c = s.dataType,
            p = /\?.+=\?/.test(s.url);
          if (
            (p && (c = 'jsonp'),
            (s.cache !== !1 && ((n && n.cache === !0) || ('script' != c && 'jsonp' != c))) ||
              (s.url = T(s.url, '_=' + Date.now())),
            'jsonp' == c)
          )
            return (
              p ||
                (s.url = T(s.url, s.jsonp ? s.jsonp + '=?' : s.jsonp === !1 ? '' : 'callback=?')),
              e.ajaxJSONP(s, a)
            );
          var P,
            d = s.accepts[c],
            g = {},
            b = function(t, e) {
              g[t.toLowerCase()] = [t, e];
            },
            C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol,
            N = s.xhr(),
            O = N.setRequestHeader;
          if (
            (a && a.promise(N),
            s.crossDomain || b('X-Requested-With', 'XMLHttpRequest'),
            b('Accept', d || '*/*'),
            (d = s.mimeType || d) &&
              (d.indexOf(',') > -1 && (d = d.split(',', 2)[0]),
              N.overrideMimeType && N.overrideMimeType(d)),
            (s.contentType || (s.contentType !== !1 && s.data && 'GET' != s.type.toUpperCase())) &&
              b('Content-Type', s.contentType || 'application/x-www-form-urlencoded'),
            s.headers)
          )
            for (o in s.headers) b(o, s.headers[o]);
          if (
            ((N.setRequestHeader = b),
            (N.onreadystatechange = function() {
              if (4 == N.readyState) {
                (N.onreadystatechange = j), clearTimeout(P);
                var t,
                  n = !1;
                if (
                  (N.status >= 200 && N.status < 300) ||
                  304 == N.status ||
                  (0 == N.status && 'file:' == C)
                ) {
                  if (
                    ((c = c || w(s.mimeType || N.getResponseHeader('content-type'))),
                    'arraybuffer' == N.responseType || 'blob' == N.responseType)
                  )
                    t = N.response;
                  else {
                    t = N.responseText;
                    try {
                      (t = E(t, c, s)),
                        'script' == c
                          ? (1, eval)(t)
                          : 'xml' == c
                          ? (t = N.responseXML)
                          : 'json' == c && (t = l.test(t) ? null : e.parseJSON(t));
                    } catch (r) {
                      n = r;
                    }
                    if (n) return x(n, 'parsererror', N, s, a);
                  }
                  y(t, N, s, a);
                } else x(N.statusText || null, N.status ? 'error' : 'abort', N, s, a);
              }
            }),
            v(N, s) === !1)
          )
            return N.abort(), x(null, 'abort', N, s, a), N;
          var A = 'async' in s ? s.async : !0;
          if ((N.open(s.type, s.url, A, s.username, s.password), s.xhrFields))
            for (o in s.xhrFields) N[o] = s.xhrFields[o];
          for (o in g) O.apply(N, g[o]);
          return (
            s.timeout > 0 &&
              (P = setTimeout(function() {
                (N.onreadystatechange = j), N.abort(), x(null, 'timeout', N, s, a);
              }, s.timeout)),
            N.send(s.data ? s.data : null),
            N
          );
        }),
        (e.get = function() {
          return e.ajax(C.apply(null, arguments));
        }),
        (e.post = function() {
          var t = C.apply(null, arguments);
          return (t.type = 'POST'), e.ajax(t);
        }),
        (e.getJSON = function() {
          var t = C.apply(null, arguments);
          return (t.dataType = 'json'), e.ajax(t);
        }),
        (e.fn.load = function(t, n, r) {
          if (!this.length) return this;
          var a,
            i = this,
            o = t.split(/\s/),
            u = C(t, n, r),
            f = u.success;
          return (
            o.length > 1 && ((u.url = o[0]), (a = o[1])),
            (u.success = function(t) {
              i.html(
                a
                  ? e('<div>')
                      .html(t.replace(s, ''))
                      .find(a)
                  : t,
              ),
                f && f.apply(i, arguments);
            }),
            e.ajax(u),
            this
          );
        });
      var N = encodeURIComponent;
      e.param = function(t, n) {
        var r = [];
        return (
          (r.add = function(t, n) {
            e.isFunction(n) && (n = n()), null == n && (n = ''), this.push(N(t) + '=' + N(n));
          }),
          O(r, t, n),
          r.join('&').replace(/%20/g, '+')
        );
      };
    })(e),
    (function(t) {
      (t.fn.serializeArray = function() {
        var e,
          n,
          r = [],
          i = function(t) {
            return t.forEach ? t.forEach(i) : void r.push({ name: e, value: t });
          };
        return (
          this[0] &&
            t.each(this[0].elements, function(r, o) {
              (n = o.type),
                (e = o.name),
                e &&
                  'fieldset' != o.nodeName.toLowerCase() &&
                  !o.disabled &&
                  'submit' != n &&
                  'reset' != n &&
                  'button' != n &&
                  'file' != n &&
                  (('radio' != n && 'checkbox' != n) || o.checked) &&
                  i(t(o).val());
            }),
          r
        );
      }),
        (t.fn.serialize = function() {
          var t = [];
          return (
            this.serializeArray().forEach(function(e) {
              t.push(encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value));
            }),
            t.join('&')
          );
        }),
        (t.fn.submit = function(e) {
          if (0 in arguments) this.bind('submit', e);
          else if (this.length) {
            var n = t.Event('submit');
            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
          }
          return this;
        });
    })(e),
    (function() {
      try {
        getComputedStyle(void 0);
      } catch (e) {
        var n = getComputedStyle;
        t.getComputedStyle = function(t, e) {
          try {
            return n(t, e);
          } catch (r) {
            return null;
          }
        };
      }
    })(),
    e
  );
});

/*------------------------------------------------------------------*/
/*	14) Vegas Slider
/*------------------------------------------------------------------*/
/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.4.4 - built 2018-10-30
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2018 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/
!(function(b) {
  'use strict';
  var e = {
      slide: 0,
      delay: 5e3,
      loop: !0,
      preload: !1,
      preloadImage: !1,
      preloadVideo: !1,
      timer: !0,
      overlay: !1,
      autoplay: !0,
      shuffle: !1,
      cover: !0,
      color: null,
      align: 'center',
      valign: 'center',
      firstTransition: null,
      firstTransitionDuration: null,
      transition: 'fade',
      transitionDuration: 1e3,
      transitionRegister: [],
      animation: null,
      animationDuration: 'auto',
      animationRegister: [],
      slidesToKeep: 1,
      init: function() {},
      play: function() {},
      pause: function() {},
      walk: function() {},
      slides: [],
    },
    n = {},
    t = function(t, s) {
      (this.elmt = t),
        (this.settings = b.extend({}, e, b.vegas.defaults, s)),
        (this.slide = this.settings.slide),
        (this.total = this.settings.slides.length),
        (this.noshow = this.total < 2),
        (this.paused = !this.settings.autoplay || this.noshow),
        (this.ended = !1),
        (this.$elmt = b(t)),
        (this.$timer = null),
        (this.$overlay = null),
        (this.$slide = null),
        (this.timeout = null),
        (this.first = !0),
        (this.transitions = [
          'fade',
          'fade2',
          'blur',
          'blur2',
          'flash',
          'flash2',
          'negative',
          'negative2',
          'burn',
          'burn2',
          'slideLeft',
          'slideLeft2',
          'slideRight',
          'slideRight2',
          'slideUp',
          'slideUp2',
          'slideDown',
          'slideDown2',
          'zoomIn',
          'zoomIn2',
          'zoomOut',
          'zoomOut2',
          'swirlLeft',
          'swirlLeft2',
          'swirlRight',
          'swirlRight2',
        ]),
        (this.animations = [
          'kenburns',
          'kenburnsLeft',
          'kenburnsRight',
          'kenburnsUp',
          'kenburnsUpLeft',
          'kenburnsUpRight',
          'kenburnsDown',
          'kenburnsDownLeft',
          'kenburnsDownRight',
        ]),
        this.settings.transitionRegister instanceof Array == !1 &&
          (this.settings.transitionRegister = [this.settings.transitionRegister]),
        this.settings.animationRegister instanceof Array == !1 &&
          (this.settings.animationRegister = [this.settings.animationRegister]),
        (this.transitions = this.transitions.concat(this.settings.transitionRegister)),
        (this.animations = this.animations.concat(this.settings.animationRegister)),
        (this.support = {
          objectFit: 'objectFit' in document.body.style,
          transition:
            'transition' in document.body.style || 'WebkitTransition' in document.body.style,
          video: b.vegas.isVideoCompatible(),
        }),
        !0 === this.settings.shuffle && this.shuffle(),
        this._init();
    };
  (t.prototype = {
    _init: function() {
      var t,
        s,
        i,
        e = 'BODY' === this.elmt.tagName,
        n = this.settings.timer,
        o = this.settings.overlay,
        a = this;
      this._preload(),
        e ||
          (this.$elmt.css('height', this.$elmt.css('height')),
          (t = b('<div class="vegas-wrapper">')
            .css('overflow', this.$elmt.css('overflow'))
            .css('padding', this.$elmt.css('padding'))),
          this.$elmt.css('padding') ||
            t
              .css('padding-top', this.$elmt.css('padding-top'))
              .css('padding-bottom', this.$elmt.css('padding-bottom'))
              .css('padding-left', this.$elmt.css('padding-left'))
              .css('padding-right', this.$elmt.css('padding-right')),
          this.$elmt
            .clone(!0)
            .children()
            .appendTo(t),
          (this.elmt.innerHTML = '')),
        n &&
          this.support.transition &&
          ((i = b('<div class="vegas-timer"><div class="vegas-timer-progress">')),
          (this.$timer = i),
          this.$elmt.prepend(i)),
        o &&
          ((s = b('<div class="vegas-overlay">')),
          'string' == typeof o && s.css('background-image', 'url(' + o + ')'),
          (this.$overlay = s),
          this.$elmt.prepend(s)),
        this.$elmt.addClass('vegas-container'),
        e || this.$elmt.append(t),
        setTimeout(function() {
          a.trigger('init'), a._goto(a.slide), a.settings.autoplay && a.trigger('play');
        }, 1);
    },
    _preload: function() {
      var t;
      for (t = 0; t < this.settings.slides.length; t++)
        (this.settings.preload || this.settings.preloadImages) &&
          this.settings.slides[t].src &&
          (new Image().src = this.settings.slides[t].src),
          (this.settings.preload || this.settings.preloadVideos) &&
            this.support.video &&
            this.settings.slides[t].video &&
            (this.settings.slides[t].video instanceof Array
              ? this._video(this.settings.slides[t].video)
              : this._video(this.settings.slides[t].video.src));
    },
    _random: function(t) {
      return t[Math.floor(Math.random() * t.length)];
    },
    _slideShow: function() {
      var t = this;
      1 < this.total &&
        !this.ended &&
        !this.paused &&
        !this.noshow &&
        (this.timeout = setTimeout(function() {
          t.next();
        }, this._options('delay')));
    },
    _timer: function(t) {
      var s = this;
      clearTimeout(this.timeout),
        this.$timer &&
          (this.$timer
            .removeClass('vegas-timer-running')
            .find('div')
            .css('transition-duration', '0ms'),
          this.ended ||
            this.paused ||
            this.noshow ||
            (t &&
              setTimeout(function() {
                s.$timer
                  .addClass('vegas-timer-running')
                  .find('div')
                  .css('transition-duration', s._options('delay') - 100 + 'ms');
              }, 100)));
    },
    _video: function(t) {
      var s,
        i,
        e = t.toString();
      return n[e]
        ? n[e]
        : (t instanceof Array == !1 && (t = [t]),
          ((s = document.createElement('video')).preload = !0),
          t.forEach(function(t) {
            ((i = document.createElement('source')).src = t), s.appendChild(i);
          }),
          (n[e] = s));
    },
    _fadeOutSound: function(t, s) {
      var i = this,
        e = s / 10,
        n = t.volume - 0.09;
      0 < n
        ? ((t.volume = n),
          setTimeout(function() {
            i._fadeOutSound(t, s);
          }, e))
        : t.pause();
    },
    _fadeInSound: function(t, s) {
      var i = this,
        e = s / 10,
        n = t.volume + 0.09;
      n < 1 &&
        ((t.volume = n),
        setTimeout(function() {
          i._fadeInSound(t, s);
        }, e));
    },
    _options: function(t, s) {
      return (
        void 0 === s && (s = this.slide),
        void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
      );
    },
    _goto: function(t) {
      void 0 === this.settings.slides[t] && (t = 0), (this.slide = t);
      var s,
        i,
        e,
        n,
        o,
        a = this.$elmt.children('.vegas-slide'),
        r = this.settings.slides[t].src,
        h = this.settings.slides[t].video,
        d = this._options('delay'),
        l = this._options('align'),
        g = this._options('valign'),
        u = this._options('cover'),
        c = this._options('color') || this.$elmt.css('background-color'),
        p = this,
        m = a.length,
        f = this._options('transition'),
        v = this._options('transitionDuration'),
        y = this._options('animation'),
        _ = this._options('animationDuration');
      function w() {
        p._timer(!0),
          setTimeout(function() {
            f &&
              (p.support.transition
                ? (a
                    .css('transition', 'all ' + v + 'ms')
                    .addClass('vegas-transition-' + f + '-out'),
                  a.each(function() {
                    var t = a.find('video').get(0);
                    t && ((t.volume = 1), p._fadeOutSound(t, v));
                  }),
                  s.css('transition', 'all ' + v + 'ms').addClass('vegas-transition-' + f + '-in'))
                : s.fadeIn(v));
            for (var t = 0; t < a.length - p.settings.slidesToKeep; t++) a.eq(t).remove();
            p.trigger('walk'), p._slideShow();
          }, 100);
      }
      this.settings.firstTransition && this.first && (f = this.settings.firstTransition || f),
        this.settings.firstTransitionDuration &&
          this.first &&
          (v = this.settings.firstTransitionDuration || v),
        this.first && (this.first = !1),
        'repeat' !== u && (!0 === u ? (u = 'cover') : !1 === u && (u = 'contain')),
        ('random' === f || f instanceof Array) &&
          (f = f instanceof Array ? this._random(f) : this._random(this.transitions)),
        ('random' === y || y instanceof Array) &&
          (y = y instanceof Array ? this._random(y) : this._random(this.animations)),
        ('auto' === v || d < v) && (v = d),
        'auto' === _ && (_ = d),
        (s = b('<div class="vegas-slide"></div>')),
        this.support.transition && f && s.addClass('vegas-transition-' + f),
        this.support.video && h
          ? (((n = h instanceof Array ? this._video(h) : this._video(h.src)).loop =
              void 0 === h.loop || h.loop),
            (n.muted = void 0 === h.mute || h.mute),
            !1 === n.muted ? ((n.volume = 0), this._fadeInSound(n, v)) : n.pause(),
            (e = b(n)
              .addClass('vegas-video')
              .css('background-color', c)),
            this.support.objectFit
              ? e
                  .css('object-position', l + ' ' + g)
                  .css('object-fit', u)
                  .css('width', '100%')
                  .css('height', '100%')
              : 'contain' === u && e.css('width', '100%').css('height', '100%'),
            s.append(e))
          : ((o = new Image()),
            (i = b('<div class="vegas-slide-inner"></div>')
              .css('background-image', 'url("' + r + '")')
              .css('background-color', c)
              .css('background-position', l + ' ' + g)),
            'repeat' === u ? i.css('background-repeat', 'repeat') : i.css('background-size', u),
            this.support.transition &&
              y &&
              i.addClass('vegas-animation-' + y).css('animation-duration', _ + 'ms'),
            s.append(i)),
        this.support.transition || s.css('display', 'none'),
        m ? a.eq(m - 1).after(s) : this.$elmt.prepend(s),
        a.css('transition', 'all 0ms').each(function() {
          (this.className = 'vegas-slide'),
            'VIDEO' === this.tagName && (this.className += ' vegas-video'),
            f &&
              ((this.className += ' vegas-transition-' + f),
              (this.className += ' vegas-transition-' + f + '-in'));
        }),
        p._timer(!1),
        n
          ? (4 === n.readyState && (n.currentTime = 0), n.play(), w())
          : ((o.src = r), o.complete ? w() : (o.onload = w));
    },
    _end: function() {
      this.settings.autoplay ? (this.ended = !1) : (this.ended = !0),
        this._timer(!1),
        this.trigger('end');
    },
    shuffle: function() {
      for (var t, s, i = this.total - 1; 0 < i; i--)
        (s = Math.floor(Math.random() * (i + 1))),
          (t = this.settings.slides[i]),
          (this.settings.slides[i] = this.settings.slides[s]),
          (this.settings.slides[s] = t);
    },
    play: function() {
      this.paused && ((this.paused = !1), this.next(), this.trigger('play'));
    },
    pause: function() {
      this._timer(!1), (this.paused = !0), this.trigger('pause');
    },
    toggle: function() {
      this.paused ? this.play() : this.pause();
    },
    playing: function() {
      return !this.paused && !this.noshow;
    },
    current: function(t) {
      return t ? { slide: this.slide, data: this.settings.slides[this.slide] } : this.slide;
    },
    jump: function(t) {
      t < 0 || t > this.total - 1 || t === this.slide || ((this.slide = t), this._goto(this.slide));
    },
    next: function() {
      if ((this.slide++, this.slide >= this.total)) {
        if (!this.settings.loop) return this._end();
        this.slide = 0;
      }
      this._goto(this.slide);
    },
    previous: function() {
      if ((this.slide--, this.slide < 0)) {
        if (!this.settings.loop) return void this.slide++;
        this.slide = this.total - 1;
      }
      this._goto(this.slide);
    },
    trigger: function(t) {
      var s = [];
      (s = 'init' === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]]),
        this.$elmt.trigger('vegas' + t, s),
        'function' == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s);
    },
    options: function(t, s) {
      var i = this.settings.slides.slice();
      if ('object' == typeof t) this.settings = b.extend({}, e, b.vegas.defaults, t);
      else {
        if ('string' != typeof t) return this.settings;
        if (void 0 === s) return this.settings[t];
        this.settings[t] = s;
      }
      this.settings.slides !== i &&
        ((this.total = this.settings.slides.length),
        (this.noshow = this.total < 2),
        this._preload());
    },
    destroy: function() {
      clearTimeout(this.timeout),
        this.$elmt.removeClass('vegas-container'),
        this.$elmt.find('> .vegas-slide').remove(),
        this.$elmt
          .find('> .vegas-wrapper')
          .clone(!0)
          .children()
          .appendTo(this.$elmt),
        this.$elmt.find('> .vegas-wrapper').remove(),
        this.settings.timer && this.$timer.remove(),
        this.settings.overlay && this.$overlay.remove(),
        (this.elmt._vegas = null);
    },
  }),
    (b.fn.vegas = function(s) {
      var i,
        e = arguments,
        n = !1;
      if (void 0 === s || 'object' == typeof s)
        return this.each(function() {
          this._vegas || (this._vegas = new t(this, s));
        });
      if ('string' == typeof s) {
        if (
          (this.each(function() {
            var t = this._vegas;
            if (!t) throw new Error('No Vegas applied to this element.');
            'function' == typeof t[s] && '_' !== s[0]
              ? (i = t[s].apply(t, [].slice.call(e, 1)))
              : (n = !0);
          }),
          n)
        )
          throw new Error('No method "' + s + '" in Vegas.');
        return void 0 !== i ? i : this;
      }
    }),
    (b.vegas = {}),
    (b.vegas.defaults = e),
    (b.vegas.isVideoCompatible = function() {
      return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
    });
})(window.jQuery || window.Zepto);
//# sourceMappingURL=vegas.min.js.map
