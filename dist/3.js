(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '0yDM': function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = { actions: h.default.object, player: h.default.object, className: h.default.string },
        C = (function(N) {
          (0, s.default)(y, N);
          function y(E, p) {
            var o;
            return (
              (0, f.default)(this, y),
              (o = (0, M.default)(this, (0, T.default)(y).call(this, E, p))),
              (o.handleClick = o.handleClick.bind((0, u.default)(o))),
              o
            );
          }
          return (
            (0, S.default)(y, [
              {
                key: 'handleClick',
                value: function() {
                  var p = this.props,
                    o = p.actions,
                    t = p.player;
                  t.paused ? o.play() : o.pause();
                },
              },
              {
                key: 'render',
                value: function() {
                  var p = this,
                    o = this.props,
                    t = o.player,
                    l = o.className,
                    n = t.paused ? 'Play' : 'Pause';
                  return d.default.createElement(
                    'button',
                    {
                      ref: function(c) {
                        p.button = c;
                      },
                      className: (0, g.default)(l, {
                        'video-react-play-control': !0,
                        'video-react-control': !0,
                        'video-react-button': !0,
                        'video-react-paused': t.paused,
                        'video-react-playing': !t.paused,
                      }),
                      type: 'button',
                      tabIndex: '0',
                      onClick: this.handleClick,
                    },
                    d.default.createElement('span', { className: 'video-react-control-text' }, n),
                  );
                },
              },
            ]),
            y
          );
        })(d.Component);
      (r.default = C), (C.propTypes = m), (C.displayName = 'PlayToggle');
    },
    '3nJo': function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = M);
      var a = v(e('MVZn')),
        f = e('we7k'),
        S = { count: 0, operation: { action: '', source: '' } };
      function M() {
        var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S,
          u = arguments.length > 1 ? arguments[1] : void 0;
        switch (u.type) {
          case f.OPERATE:
            return (0, a.default)({}, T, {
              count: T.count + 1,
              operation: (0, a.default)({}, T.operation, u.operation),
            });
          default:
            return T;
        }
      }
    },
    '4FqI': function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = { player: h.default.object, children: h.default.any },
        m = (function(C) {
          (0, s.default)(N, C);
          function N(y, E) {
            var p;
            return (
              (0, f.default)(this, N),
              (p = (0, M.default)(this, (0, T.default)(N).call(this, y, E))),
              (p.handleClick = p.handleClick.bind((0, u.default)(p))),
              p
            );
          }
          return (
            (0, S.default)(N, [
              {
                key: 'handleClick',
                value: function(E) {
                  E.preventDefault();
                },
              },
              {
                key: 'render',
                value: function() {
                  var E = this.props.children;
                  return d.default.createElement(
                    'div',
                    { className: 'video-react-menu', onClick: this.handleClick },
                    d.default.createElement('div', { className: 'video-react-menu-content' }, E),
                  );
                },
              },
            ]),
            N
          );
        })(d.Component);
      (r.default = m), (m.propTypes = g), (m.displayName = 'Popup');
    },
    '4b3c': function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('8nKf')),
        f = (0, a.default)('forward');
      f.displayName = 'ForwardControl';
      var S = f;
      r.default = S;
    },
    '54lq': function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = { actions: h.default.object, player: h.default.object, className: h.default.string },
        C = (function(N) {
          (0, s.default)(y, N);
          function y(E, p) {
            var o;
            return (
              (0, f.default)(this, y),
              (o = (0, M.default)(this, (0, T.default)(y).call(this, E, p))),
              (o.handleClick = o.handleClick.bind((0, u.default)(o))),
              o
            );
          }
          return (
            (0, S.default)(y, [
              {
                key: 'handleClick',
                value: function() {
                  var p = this.props,
                    o = p.player,
                    t = p.actions;
                  t.toggleFullscreen(o);
                },
              },
              {
                key: 'render',
                value: function() {
                  var p = this,
                    o = this.props,
                    t = o.player,
                    l = o.className;
                  return d.default.createElement(
                    'button',
                    {
                      className: (0, g.default)(
                        l,
                        {
                          'video-react-icon-fullscreen-exit': t.isFullscreen,
                          'video-react-icon-fullscreen': !t.isFullscreen,
                        },
                        'video-react-fullscreen-control video-react-control video-react-button video-react-icon',
                      ),
                      ref: function(i) {
                        p.button = i;
                      },
                      type: 'button',
                      tabIndex: '0',
                      onClick: this.handleClick,
                    },
                    d.default.createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Non-Fullscreen',
                    ),
                  );
                },
              },
            ]),
            y
          );
        })(d.Component);
      (r.default = C), (C.propTypes = m), (C.displayName = 'FullscreenToggle');
    },
    '56F6': function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = T);
      var a = v(e('MVZn')),
        f = e('INgg'),
        S = e('we7k'),
        M = {
          currentSrc: null,
          duration: 0,
          currentTime: 0,
          seekingTime: 0,
          buffered: null,
          waiting: !1,
          seeking: !1,
          paused: !0,
          autoPaused: !1,
          ended: !1,
          playbackRate: 1,
          muted: !1,
          volume: 1,
          readyState: 0,
          networkState: 0,
          videoWidth: 0,
          videoHeight: 0,
          hasStarted: !1,
          userActivity: !0,
          isActive: !1,
          isFullscreen: !1,
          activeTextTrack: null,
        };
      function T() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M,
          s = arguments.length > 1 ? arguments[1] : void 0;
        switch (s.type) {
          case S.USER_ACTIVATE:
            return (0, a.default)({}, u, { userActivity: s.activity });
          case S.PLAYER_ACTIVATE:
            return (0, a.default)({}, u, { isActive: s.activity });
          case S.FULLSCREEN_CHANGE:
            return (0, a.default)({}, u, { isFullscreen: !!s.isFullscreen });
          case f.SEEKING_TIME:
            return (0, a.default)({}, u, { seekingTime: s.time });
          case f.END_SEEKING:
            return (0, a.default)({}, u, { seekingTime: 0 });
          case f.LOAD_START:
            return (0, a.default)({}, u, s.videoProps, { hasStarted: !1, ended: !1 });
          case f.CAN_PLAY:
            return (0, a.default)({}, u, s.videoProps, { waiting: !1 });
          case f.WAITING:
            return (0, a.default)({}, u, s.videoProps, { waiting: !0 });
          case f.CAN_PLAY_THROUGH:
          case f.PLAYING:
            return (0, a.default)({}, u, s.videoProps, { waiting: !1 });
          case f.PLAY:
            return (0, a.default)({}, u, s.videoProps, {
              ended: !1,
              paused: !1,
              autoPaused: !1,
              waiting: !1,
              hasStarted: !0,
            });
          case f.PAUSE:
            return (0, a.default)({}, u, s.videoProps, { paused: !0 });
          case f.END:
            return (0, a.default)({}, u, s.videoProps, { ended: !0 });
          case f.SEEKING:
            return (0, a.default)({}, u, s.videoProps, { seeking: !0 });
          case f.SEEKED:
            return (0, a.default)({}, u, s.videoProps, { seeking: !1 });
          case f.ERROR:
            return (0, a.default)({}, u, s.videoProps, { error: 'UNKNOWN ERROR', ended: !0 });
          case f.DURATION_CHANGE:
          case f.TIME_UPDATE:
          case f.VOLUME_CHANGE:
          case f.PROGRESS_CHANGE:
          case f.RATE_CHANGE:
          case f.SUSPEND:
          case f.ABORT:
          case f.EMPTIED:
          case f.STALLED:
          case f.LOADED_META_DATA:
          case f.LOADED_DATA:
          case f.RESIZE:
            return (0, a.default)({}, u, s.videoProps);
          case f.ACTIVATE_TEXT_TRACK:
            return (0, a.default)({}, u, { activeTextTrack: s.textTrack });
          default:
            return u;
        }
      }
    },
    '8nKf': function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = {
          actions: h.default.object,
          className: h.default.string,
          seconds: h.default.oneOf([5, 10, 30]),
        },
        m = { seconds: 10 },
        C = function(y) {
          var E = (function(p) {
            (0, s.default)(o, p);
            function o(t, l) {
              var n;
              return (
                (0, f.default)(this, o),
                (n = (0, M.default)(this, (0, T.default)(o).call(this, t, l))),
                (n.handleClick = n.handleClick.bind((0, u.default)(n))),
                n
              );
            }
            return (
              (0, S.default)(o, [
                {
                  key: 'handleClick',
                  value: function() {
                    var l = this.props,
                      n = l.actions,
                      i = l.seconds;
                    y === 'forward' ? n.forward(i) : n.replay(i);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var l = this,
                      n = this.props,
                      i = n.seconds,
                      c = n.className,
                      R = ['video-react-control', 'video-react-button', 'video-react-icon'];
                    return (
                      R.push(
                        'video-react-icon-'.concat(y, '-').concat(i),
                        'video-react-'.concat(y, '-control'),
                      ),
                      c && R.push(c),
                      d.default.createElement(
                        'button',
                        {
                          ref: function(O) {
                            l.button = O;
                          },
                          className: R.join(' '),
                          type: 'button',
                          onClick: this.handleClick,
                        },
                        d.default.createElement(
                          'span',
                          { className: 'video-react-control-text' },
                          ''.concat(y, ' ').concat(i, ' seconds'),
                        ),
                      )
                    );
                  },
                },
              ]),
              o
            );
          })(d.Component);
          return (E.propTypes = g), (E.defaultProps = m), E;
        };
      r.default = C;
    },
    AZ0a: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('pVnL')),
        S = a(e('lwsE')),
        M = a(e('W8MJ')),
        T = a(e('a1gu')),
        u = a(e('Nsbk')),
        s = a(e('PJYZ')),
        h = a(e('7W2i')),
        d = a(e('17x9')),
        g = v(e('q1tI')),
        m = a(e('TSYQ')),
        C = a(e('QJtQ')),
        N = a(e('Qrqe')),
        y = {
          player: d.default.object,
          actions: d.default.object,
          vertical: d.default.bool,
          className: d.default.string,
          alwaysShowVolume: d.default.bool,
        },
        E = { vertical: !1 },
        p = (function(t) {
          (0, h.default)(l, t);
          function l(n, i) {
            var c;
            return (
              (0, S.default)(this, l),
              (c = (0, T.default)(this, (0, u.default)(l).call(this, n, i))),
              (c.state = { active: !1 }),
              (c.handleClick = c.handleClick.bind((0, s.default)(c))),
              (c.handleFocus = c.handleFocus.bind((0, s.default)(c))),
              (c.handleBlur = c.handleBlur.bind((0, s.default)(c))),
              c
            );
          }
          return (
            (0, M.default)(l, [
              {
                key: 'handleClick',
                value: function() {
                  var i = this.props,
                    c = i.player,
                    R = i.actions;
                  R.mute(!c.muted);
                },
              },
              {
                key: 'handleFocus',
                value: function() {
                  this.setState({ active: !0 });
                },
              },
              {
                key: 'handleBlur',
                value: function() {
                  this.setState({ active: !1 });
                },
              },
              {
                key: 'render',
                value: function() {
                  var i = this.props,
                    c = i.vertical,
                    R = i.player,
                    b = i.className,
                    O = !c,
                    I = this.volumeLevel;
                  return g.default.createElement(
                    C.default,
                    {
                      className: (0, m.default)(
                        b,
                        {
                          'video-react-volume-menu-button-vertical': c,
                          'video-react-volume-menu-button-horizontal': !c,
                          'video-react-vol-muted': R.muted,
                          'video-react-vol-0': I === 0 && !R.muted,
                          'video-react-vol-1': I === 1,
                          'video-react-vol-2': I === 2,
                          'video-react-vol-3': I === 3,
                          'video-react-slider-active':
                            this.props.alwaysShowVolume || this.state.active,
                          'video-react-lock-showing':
                            this.props.alwaysShowVolume || this.state.active,
                        },
                        'video-react-volume-menu-button',
                      ),
                      onClick: this.handleClick,
                      inline: O,
                    },
                    g.default.createElement(
                      N.default,
                      (0, f.default)(
                        { onFocus: this.handleFocus, onBlur: this.handleBlur },
                        this.props,
                      ),
                    ),
                  );
                },
              },
              {
                key: 'volumeLevel',
                get: function() {
                  var i = this.props.player,
                    c = i.volume,
                    R = i.muted,
                    b = 3;
                  return c === 0 || R ? (b = 0) : c < 0.33 ? (b = 1) : c < 0.67 && (b = 2), b;
                },
              },
            ]),
            l
          );
        })(g.Component);
      (p.propTypes = y), (p.defaultProps = E), (p.displayName = 'VolumeMenuButton');
      var o = p;
      r.default = o;
    },
    DGqw: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = a(e('U3K2')),
        C = {
          player: h.default.object,
          actions: h.default.object,
          rates: h.default.array,
          className: h.default.string,
        },
        N = { rates: [2, 1.5, 1.25, 1, 0.5, 0.25] },
        y = (function(p) {
          (0, s.default)(o, p);
          function o(t, l) {
            var n;
            return (
              (0, f.default)(this, o),
              (n = (0, M.default)(this, (0, T.default)(o).call(this, t, l))),
              (n.handleSelectItem = n.handleSelectItem.bind((0, u.default)(n))),
              n
            );
          }
          return (
            (0, S.default)(o, [
              {
                key: 'handleSelectItem',
                value: function(l) {
                  var n = this.props,
                    i = n.rates,
                    c = n.actions;
                  l >= 0 && l < i.length && c.changeRate(i[l]);
                },
              },
              {
                key: 'render',
                value: function() {
                  var l = this.props,
                    n = l.rates,
                    i = l.player,
                    c = n.map(function(b) {
                      return { label: ''.concat(b, 'x'), value: b };
                    }),
                    R = n.indexOf(i.playbackRate) || 0;
                  return d.default.createElement(
                    m.default,
                    {
                      className: (0, g.default)('video-react-playback-rate', this.props.className),
                      onSelectItem: this.handleSelectItem,
                      items: c,
                      selectedIndex: R,
                    },
                    d.default.createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Playback Rate',
                    ),
                    d.default.createElement(
                      'div',
                      { className: 'video-react-playback-rate-value' },
                      ''.concat(i.playbackRate.toFixed(2), 'x'),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(d.Component);
      (y.propTypes = C), (y.defaultProps = N), (y.displayName = 'PlaybackRateMenuButton');
      var E = y;
      r.default = E;
    },
    DeZD: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = {
          item: h.default.object,
          index: h.default.number,
          activateIndex: h.default.number,
          onSelectItem: h.default.func,
        },
        C = (function(N) {
          (0, s.default)(y, N);
          function y(E, p) {
            var o;
            return (
              (0, f.default)(this, y),
              (o = (0, M.default)(this, (0, T.default)(y).call(this, E, p))),
              (o.handleClick = o.handleClick.bind((0, u.default)(o))),
              o
            );
          }
          return (
            (0, S.default)(y, [
              {
                key: 'handleClick',
                value: function() {
                  var p = this.props,
                    o = p.index,
                    t = p.onSelectItem;
                  t(o);
                },
              },
              {
                key: 'render',
                value: function() {
                  var p = this.props,
                    o = p.item,
                    t = p.index,
                    l = p.activateIndex;
                  return d.default.createElement(
                    'li',
                    {
                      className: (0, g.default)({
                        'video-react-menu-item': !0,
                        'video-react-selected': t === l,
                      }),
                      role: 'menuitem',
                      onClick: this.handleClick,
                    },
                    o.label,
                    d.default.createElement('span', { className: 'video-react-control-text' }),
                  );
                },
              },
            ]),
            y
          );
        })(d.Component);
      (r.default = C), (C.propTypes = m), (C.displayName = 'MenuItem');
    },
    EVUy: function(A, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.findElPosition = v),
        (r.getPointerPosition = a),
        (r.blurNode = f),
        (r.focusNode = S),
        (r.hasClass = M);
      function v(T) {
        var u;
        if ((T.getBoundingClientRect && T.parentNode && (u = T.getBoundingClientRect()), !u))
          return { left: 0, top: 0 };
        var s = document,
          h = s.body,
          d = s.documentElement,
          g = d.clientLeft || h.clientLeft || 0,
          m = window.pageXOffset || h.scrollLeft,
          C = u.left + m - g,
          N = d.clientTop || h.clientTop || 0,
          y = window.pageYOffset || h.scrollTop,
          E = u.top + y - N;
        return { left: Math.round(C), top: Math.round(E) };
      }
      function a(T, u) {
        var s = {},
          h = v(T),
          d = T.offsetWidth,
          g = T.offsetHeight,
          m = h.top,
          C = h.left,
          N = u.pageY,
          y = u.pageX;
        return (
          u.changedTouches && ((y = u.changedTouches[0].pageX), (N = u.changedTouches[0].pageY)),
          (s.y = Math.max(0, Math.min(1, (m - N + g) / g))),
          (s.x = Math.max(0, Math.min(1, (y - C) / d))),
          s
        );
      }
      function f(T) {
        T && T.blur && T.blur();
      }
      function S(T) {
        T && T.focus && T.focus();
      }
      function M(T, u) {
        for (var s = T.className.split(' '), h = 0; h < s.length; h++)
          if (s[h].toLowerCase() === u.toLowerCase()) return !0;
        return !1;
      }
    },
    Edwz: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('MVZn')),
        S = a(e('lwsE')),
        M = a(e('W8MJ')),
        T = a(e('a1gu')),
        u = a(e('Nsbk')),
        s = a(e('PJYZ')),
        h = a(e('7W2i')),
        d = a(e('17x9')),
        g = v(e('q1tI')),
        m = a(e('TSYQ')),
        C = e('tJTW'),
        N = {
          actions: d.default.object,
          player: d.default.object,
          children: d.default.any,
          startTime: d.default.number,
          loop: d.default.bool,
          muted: d.default.bool,
          autoPlay: d.default.bool,
          playsInline: d.default.bool,
          src: d.default.string,
          poster: d.default.string,
          className: d.default.string,
          preload: d.default.oneOf(['auto', 'metadata', 'none']),
          crossOrigin: d.default.string,
          onLoadStart: d.default.func,
          onWaiting: d.default.func,
          onCanPlay: d.default.func,
          onCanPlayThrough: d.default.func,
          onPlaying: d.default.func,
          onEnded: d.default.func,
          onSeeking: d.default.func,
          onSeeked: d.default.func,
          onPlay: d.default.func,
          onPause: d.default.func,
          onProgress: d.default.func,
          onDurationChange: d.default.func,
          onError: d.default.func,
          onSuspend: d.default.func,
          onAbort: d.default.func,
          onEmptied: d.default.func,
          onStalled: d.default.func,
          onLoadedMetadata: d.default.func,
          onLoadedData: d.default.func,
          onTimeUpdate: d.default.func,
          onRateChange: d.default.func,
          onVolumeChange: d.default.func,
          onResize: d.default.func,
        },
        y = (function(E) {
          (0, h.default)(p, E);
          function p(o) {
            var t;
            return (
              (0, S.default)(this, p),
              (t = (0, T.default)(this, (0, u.default)(p).call(this, o))),
              (t.video = null),
              (t.play = t.play.bind((0, s.default)(t))),
              (t.pause = t.pause.bind((0, s.default)(t))),
              (t.seek = t.seek.bind((0, s.default)(t))),
              (t.forward = t.forward.bind((0, s.default)(t))),
              (t.replay = t.replay.bind((0, s.default)(t))),
              (t.toggleFullscreen = t.toggleFullscreen.bind((0, s.default)(t))),
              (t.getProperties = t.getProperties.bind((0, s.default)(t))),
              (t.renderChildren = t.renderChildren.bind((0, s.default)(t))),
              (t.handleLoadStart = t.handleLoadStart.bind((0, s.default)(t))),
              (t.handleCanPlay = t.handleCanPlay.bind((0, s.default)(t))),
              (t.handleCanPlayThrough = t.handleCanPlayThrough.bind((0, s.default)(t))),
              (t.handlePlay = t.handlePlay.bind((0, s.default)(t))),
              (t.handlePlaying = t.handlePlaying.bind((0, s.default)(t))),
              (t.handlePause = t.handlePause.bind((0, s.default)(t))),
              (t.handleEnded = t.handleEnded.bind((0, s.default)(t))),
              (t.handleWaiting = t.handleWaiting.bind((0, s.default)(t))),
              (t.handleSeeking = t.handleSeeking.bind((0, s.default)(t))),
              (t.handleSeeked = t.handleSeeked.bind((0, s.default)(t))),
              (t.handleFullscreenChange = t.handleFullscreenChange.bind((0, s.default)(t))),
              (t.handleError = t.handleError.bind((0, s.default)(t))),
              (t.handleSuspend = t.handleSuspend.bind((0, s.default)(t))),
              (t.handleAbort = t.handleAbort.bind((0, s.default)(t))),
              (t.handleEmptied = t.handleEmptied.bind((0, s.default)(t))),
              (t.handleStalled = t.handleStalled.bind((0, s.default)(t))),
              (t.handleLoadedMetaData = t.handleLoadedMetaData.bind((0, s.default)(t))),
              (t.handleLoadedData = t.handleLoadedData.bind((0, s.default)(t))),
              (t.handleTimeUpdate = t.handleTimeUpdate.bind((0, s.default)(t))),
              (t.handleRateChange = t.handleRateChange.bind((0, s.default)(t))),
              (t.handleVolumeChange = t.handleVolumeChange.bind((0, s.default)(t))),
              (t.handleDurationChange = t.handleDurationChange.bind((0, s.default)(t))),
              (t.handleProgress = (0, C.throttle)(t.handleProgress.bind((0, s.default)(t)), 250)),
              (t.handleKeypress = t.handleKeypress.bind((0, s.default)(t))),
              (t.handleTextTrackChange = t.handleTextTrackChange.bind((0, s.default)(t))),
              t
            );
          }
          return (
            (0, M.default)(p, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.forceUpdate(),
                    this.video &&
                      this.video.textTracks &&
                      ((this.video.textTracks.onaddtrack = this.handleTextTrackChange),
                      (this.video.textTracks.onremovetrack = this.handleTextTrackChange));
                },
              },
              {
                key: 'getProperties',
                value: function() {
                  var t = this;
                  return this.video
                    ? C.mediaProperties.reduce(function(l, n) {
                        return (l[n] = t.video[n]), l;
                      }, {})
                    : null;
                },
              },
              {
                key: 'handleTextTrackChange',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.player;
                  if (this.video && this.video.textTracks) {
                    var i = Array.from(this.video.textTracks).find(function(c) {
                      return c.mode === 'showing';
                    });
                    i !== n.activeTextTrack && l.activateTextTrack(i);
                  }
                },
              },
              {
                key: 'play',
                value: function() {
                  var t = this.video.play();
                  t !== void 0 && t.catch(function() {}).then(function() {});
                },
              },
              {
                key: 'pause',
                value: function() {
                  var t = this.video.pause();
                  t !== void 0 && t.catch(function() {}).then(function() {});
                },
              },
              {
                key: 'load',
                value: function() {
                  this.video.load();
                },
              },
              {
                key: 'addTextTrack',
                value: function() {
                  var t;
                  (t = this.video).addTextTrack.apply(t, arguments);
                },
              },
              {
                key: 'canPlayType',
                value: function() {
                  var t;
                  (t = this.video).canPlayType.apply(t, arguments);
                },
              },
              {
                key: 'togglePlay',
                value: function() {
                  this.video.paused ? this.play() : this.pause();
                },
              },
              {
                key: 'seek',
                value: function(t) {
                  try {
                    this.video.currentTime = t;
                  } catch (l) {}
                },
              },
              {
                key: 'forward',
                value: function(t) {
                  this.seek(this.video.currentTime + t);
                },
              },
              {
                key: 'replay',
                value: function(t) {
                  this.forward(-t);
                },
              },
              {
                key: 'toggleFullscreen',
                value: function() {
                  var t = this.props,
                    l = t.player,
                    n = t.actions;
                  n.toggleFullscreen(l);
                },
              },
              {
                key: 'handleLoadStart',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onLoadStart;
                  l.handleLoadStart(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleCanPlay',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onCanPlay;
                  l.handleCanPlay(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleCanPlayThrough',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onCanPlayThrough;
                  l.handleCanPlayThrough(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handlePlaying',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onPlaying;
                  l.handlePlaying(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handlePlay',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onPlay;
                  l.handlePlay(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handlePause',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onPause;
                  l.handlePause(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleDurationChange',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onDurationChange;
                  l.handleDurationChange(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleProgress',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onProgress;
                  this.video && l.handleProgressChange(this.getProperties()),
                    n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleEnded',
                value: function() {
                  var t = this.props,
                    l = t.loop,
                    n = t.player,
                    i = t.actions,
                    c = t.onEnded;
                  l ? (this.seek(0), this.play()) : n.paused || this.pause(),
                    i.handleEnd(this.getProperties()),
                    c && c.apply(void 0, arguments);
                },
              },
              {
                key: 'handleWaiting',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onWaiting;
                  l.handleWaiting(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleSeeking',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onSeeking;
                  l.handleSeeking(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleSeeked',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onSeeked;
                  l.handleSeeked(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              { key: 'handleFullscreenChange', value: function() {} },
              {
                key: 'handleSuspend',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onSuspend;
                  l.handleSuspend(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleAbort',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onAbort;
                  l.handleAbort(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleEmptied',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onEmptied;
                  l.handleEmptied(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleStalled',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onStalled;
                  l.handleStalled(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleLoadedMetaData',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onLoadedMetadata,
                    i = t.startTime;
                  i && i > 0 && (this.video.currentTime = i),
                    l.handleLoadedMetaData(this.getProperties()),
                    n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleLoadedData',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onLoadedData;
                  l.handleLoadedData(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleTimeUpdate',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onTimeUpdate;
                  l.handleTimeUpdate(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleRateChange',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onRateChange;
                  l.handleRateChange(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleVolumeChange',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onVolumeChange;
                  l.handleVolumeChange(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleError',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onError;
                  l.handleError(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleResize',
                value: function() {
                  var t = this.props,
                    l = t.actions,
                    n = t.onResize;
                  l.handleResize(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              { key: 'handleKeypress', value: function() {} },
              {
                key: 'renderChildren',
                value: function() {
                  var t = this,
                    l = (0, f.default)({}, this.props, { video: this.video });
                  return this.video
                    ? g.default.Children.toArray(this.props.children)
                        .filter(C.isVideoChild)
                        .map(function(n) {
                          var i;
                          if (typeof n.type == 'string') {
                            if (n.type === 'source') {
                              i = (0, f.default)({}, n.props);
                              var c = i.onError;
                              i.onError = function() {
                                c && c.apply(void 0, arguments), t.handleError.apply(t, arguments);
                              };
                            }
                          } else i = l;
                          return g.default.cloneElement(n, i);
                        })
                    : null;
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this,
                    l = this.props,
                    n = l.loop,
                    i = l.poster,
                    c = l.preload,
                    R = l.src,
                    b = l.autoPlay,
                    O = l.playsInline,
                    I = l.muted,
                    j = l.crossOrigin,
                    L = l.videoId;
                  return g.default.createElement(
                    'video',
                    {
                      className: (0, m.default)('video-react-video', this.props.className),
                      id: L,
                      crossOrigin: j,
                      ref: function(F) {
                        t.video = F;
                      },
                      muted: I,
                      preload: c,
                      loop: n,
                      playsInline: O,
                      autoPlay: b,
                      poster: i,
                      src: R,
                      onLoadStart: this.handleLoadStart,
                      onWaiting: this.handleWaiting,
                      onCanPlay: this.handleCanPlay,
                      onCanPlayThrough: this.handleCanPlayThrough,
                      onPlaying: this.handlePlaying,
                      onEnded: this.handleEnded,
                      onSeeking: this.handleSeeking,
                      onSeeked: this.handleSeeked,
                      onPlay: this.handlePlay,
                      onPause: this.handlePause,
                      onProgress: this.handleProgress,
                      onDurationChange: this.handleDurationChange,
                      onError: this.handleError,
                      onSuspend: this.handleSuspend,
                      onAbort: this.handleAbort,
                      onEmptied: this.handleEmptied,
                      onStalled: this.handleStalled,
                      onLoadedMetadata: this.handleLoadedMetaData,
                      onLoadedData: this.handleLoadedData,
                      onTimeUpdate: this.handleTimeUpdate,
                      onRateChange: this.handleRateChange,
                      onVolumeChange: this.handleVolumeChange,
                      tabIndex: '-1',
                    },
                    this.renderChildren(),
                  );
                },
              },
              {
                key: 'playbackRate',
                get: function() {
                  return this.video.playbackRate;
                },
                set: function(t) {
                  this.video.playbackRate = t;
                },
              },
              {
                key: 'muted',
                get: function() {
                  return this.video.muted;
                },
                set: function(t) {
                  this.video.muted = t;
                },
              },
              {
                key: 'volume',
                get: function() {
                  return this.video.volume;
                },
                set: function(t) {
                  t > 1 && (t = 1), t < 0 && (t = 0), (this.video.volume = t);
                },
              },
              {
                key: 'videoWidth',
                get: function() {
                  return this.video.videoWidth;
                },
              },
              {
                key: 'videoHeight',
                get: function() {
                  return this.video.videoHeight;
                },
              },
            ]),
            p
          );
        })(g.Component);
      (r.default = y), (y.propTypes = N), (y.displayName = 'Video');
    },
    FcgA: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('QILm')),
        S = a(e('lwsE')),
        M = a(e('W8MJ')),
        T = a(e('a1gu')),
        u = a(e('Nsbk')),
        s = a(e('PJYZ')),
        h = a(e('7W2i')),
        d = a(e('17x9')),
        g = v(e('q1tI')),
        m = a(e('TSYQ')),
        C = a(e('zHIc')),
        N = a(e('0yDM')),
        y = a(e('4b3c')),
        E = a(e('UXv2')),
        p = a(e('54lq')),
        o = a(e('Na29')),
        t = a(e('HI9P')),
        l = a(e('GdU9')),
        n = a(e('ruMa')),
        i = a(e('AZ0a')),
        c = a(e('DGqw')),
        R = e('tJTW'),
        b = {
          children: d.default.any,
          autoHide: d.default.bool,
          autoHideTime: d.default.number,
          disableDefaultControls: d.default.bool,
          disableCompletely: d.default.bool,
          className: d.default.string,
        },
        O = { autoHide: !0, disableCompletely: !1 },
        I = (function(j) {
          (0, h.default)(L, j);
          function L(V) {
            var F;
            return (
              (0, S.default)(this, L),
              (F = (0, T.default)(this, (0, u.default)(L).call(this, V))),
              (F.getDefaultChildren = F.getDefaultChildren.bind((0, s.default)(F))),
              (F.getFullChildren = F.getFullChildren.bind((0, s.default)(F))),
              F
            );
          }
          return (
            (0, M.default)(L, [
              {
                key: 'getDefaultChildren',
                value: function() {
                  return [
                    g.default.createElement(N.default, { key: 'play-toggle', order: 1 }),
                    g.default.createElement(i.default, { key: 'volume-menu-button', order: 4 }),
                    g.default.createElement(t.default, { key: 'current-time-display', order: 5.1 }),
                    g.default.createElement(n.default, { key: 'time-divider', order: 5.2 }),
                    g.default.createElement(l.default, { key: 'duration-display', order: 5.3 }),
                    g.default.createElement(C.default, { key: 'progress-control', order: 6 }),
                    g.default.createElement(p.default, { key: 'fullscreen-toggle', order: 8 }),
                  ];
                },
              },
              {
                key: 'getFullChildren',
                value: function() {
                  return [
                    g.default.createElement(N.default, { key: 'play-toggle', order: 1 }),
                    g.default.createElement(E.default, { key: 'replay-control', order: 2 }),
                    g.default.createElement(y.default, { key: 'forward-control', order: 3 }),
                    g.default.createElement(i.default, { key: 'volume-menu-button', order: 4 }),
                    g.default.createElement(t.default, { key: 'current-time-display', order: 5 }),
                    g.default.createElement(n.default, { key: 'time-divider', order: 6 }),
                    g.default.createElement(l.default, { key: 'duration-display', order: 7 }),
                    g.default.createElement(C.default, { key: 'progress-control', order: 8 }),
                    g.default.createElement(o.default, { key: 'remaining-time-display', order: 9 }),
                    g.default.createElement(c.default, {
                      rates: [1, 1.25, 1.5, 2],
                      key: 'playback-rate',
                      order: 10,
                    }),
                    g.default.createElement(p.default, { key: 'fullscreen-toggle', order: 11 }),
                  ];
                },
              },
              {
                key: 'getChildren',
                value: function() {
                  var F = g.default.Children.toArray(this.props.children),
                    k = this.props.disableDefaultControls ? [] : this.getDefaultChildren(),
                    P = this.props,
                    W = P.className,
                    U = (0, f.default)(P, ['className']);
                  return (0, R.mergeAndSortChildren)(k, F, U);
                },
              },
              {
                key: 'render',
                value: function() {
                  var F = this.props,
                    k = F.autoHide,
                    P = F.className,
                    W = F.disableCompletely,
                    U = this.getChildren();
                  return W
                    ? null
                    : g.default.createElement(
                        'div',
                        {
                          className: (0, m.default)(
                            'video-react-control-bar',
                            { 'video-react-control-bar-auto-hide': k },
                            P,
                          ),
                        },
                        U,
                      );
                },
              },
            ]),
            L
          );
        })(g.Component);
      (r.default = I), (I.propTypes = b), (I.defaultProps = O), (I.displayName = 'ControlBar');
    },
    GdU9: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = e('tJTW'),
        T = { player: a.default.object, className: a.default.string };
      function u(h) {
        var d = h.player.duration,
          g = h.className,
          m = (0, M.formatTime)(d);
        return f.default.createElement(
          'div',
          {
            className: (0, S.default)(
              g,
              'video-react-duration video-react-time-control video-react-control',
            ),
          },
          f.default.createElement(
            'div',
            { className: 'video-react-duration-display', 'aria-live': 'off' },
            f.default.createElement(
              'span',
              { className: 'video-react-control-text' },
              'Duration Time ',
            ),
            m,
          ),
        );
      }
      (u.propTypes = T), (u.displayName = 'DurationDisplay');
      var s = u;
      r.default = s;
    },
    GuGs: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = e('tJTW');
      function T(s) {
        var h = s.duration,
          d = s.mouseTime,
          g = s.className,
          m = s.text;
        if (!d.time) return null;
        var C = m || (0, M.formatTime)(d.time, h);
        return f.default.createElement('div', {
          className: (0, S.default)('video-react-mouse-display', g),
          style: { left: ''.concat(d.position, 'px') },
          'data-current-time': C,
        });
      }
      (T.propTypes = {
        duration: a.default.number,
        mouseTime: a.default.object,
        className: a.default.string,
      }),
        (T.displayName = 'MouseTimeDisplay');
      var u = T;
      r.default = u;
    },
    HI9P: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = e('tJTW'),
        T = { player: a.default.object, className: a.default.string };
      function u(h) {
        var d = h.player,
          g = d.currentTime,
          m = d.duration,
          C = h.className,
          N = (0, M.formatTime)(g, m);
        return f.default.createElement(
          'div',
          {
            className: (0, S.default)(
              'video-react-current-time video-react-time-control video-react-control',
              C,
            ),
          },
          f.default.createElement(
            'div',
            { className: 'video-react-current-time-display', 'aria-live': 'off' },
            f.default.createElement(
              'span',
              { className: 'video-react-control-text' },
              'Current Time ',
            ),
            N,
          ),
        );
      }
      (u.propTypes = T), (u.displayName = 'CurrentTimeDisplay');
      var s = u;
      r.default = s;
    },
    INgg: function(A, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.handleLoadStart = I),
        (r.handleCanPlay = j),
        (r.handleWaiting = L),
        (r.handleCanPlayThrough = V),
        (r.handlePlaying = F),
        (r.handlePlay = k),
        (r.handlePause = P),
        (r.handleEnd = W),
        (r.handleSeeking = U),
        (r.handleSeeked = B),
        (r.handleDurationChange = G),
        (r.handleTimeUpdate = J),
        (r.handleVolumeChange = Y),
        (r.handleProgressChange = z),
        (r.handleRateChange = H),
        (r.handleSuspend = $),
        (r.handleAbort = K),
        (r.handleEmptied = Q),
        (r.handleStalled = Z),
        (r.handleLoadedMetaData = X),
        (r.handleLoadedData = w),
        (r.handleResize = x),
        (r.handleError = q),
        (r.handleSeekingTime = _),
        (r.handleEndSeeking = ee),
        (r.activateTextTrack = te),
        (r.ACTIVATE_TEXT_TRACK = r.ERROR = r.RESIZE = r.LOADED_DATA = r.LOADED_META_DATA = r.STALLED = r.EMPTIED = r.ABORT = r.SUSPEND = r.RATE_CHANGE = r.PROGRESS_CHANGE = r.VOLUME_CHANGE = r.TIME_UPDATE = r.DURATION_CHANGE = r.END_SEEKING = r.SEEKING_TIME = r.SEEKED = r.SEEKING = r.END = r.PAUSE = r.PLAY = r.PLAYING = r.CAN_PLAY_THROUGH = r.WAITING = r.CAN_PLAY = r.LOAD_START = void 0);
      var v = 'video-react/LOAD_START';
      r.LOAD_START = v;
      var a = 'video-react/CAN_PLAY';
      r.CAN_PLAY = a;
      var f = 'video-react/WAITING';
      r.WAITING = f;
      var S = 'video-react/CAN_PLAY_THROUGH';
      r.CAN_PLAY_THROUGH = S;
      var M = 'video-react/PLAYING';
      r.PLAYING = M;
      var T = 'video-react/PLAY';
      r.PLAY = T;
      var u = 'video-react/PAUSE';
      r.PAUSE = u;
      var s = 'video-react/END';
      r.END = s;
      var h = 'video-react/SEEKING';
      r.SEEKING = h;
      var d = 'video-react/SEEKED';
      r.SEEKED = d;
      var g = 'video-react/SEEKING_TIME';
      r.SEEKING_TIME = g;
      var m = 'video-react/END_SEEKING';
      r.END_SEEKING = m;
      var C = 'video-react/DURATION_CHANGE';
      r.DURATION_CHANGE = C;
      var N = 'video-react/TIME_UPDATE';
      r.TIME_UPDATE = N;
      var y = 'video-react/VOLUME_CHANGE';
      r.VOLUME_CHANGE = y;
      var E = 'video-react/PROGRESS_CHANGE';
      r.PROGRESS_CHANGE = E;
      var p = 'video-react/RATE_CHANGE';
      r.RATE_CHANGE = p;
      var o = 'video-react/SUSPEND';
      r.SUSPEND = o;
      var t = 'video-react/ABORT';
      r.ABORT = t;
      var l = 'video-react/EMPTIED';
      r.EMPTIED = l;
      var n = 'video-react/STALLED';
      r.STALLED = n;
      var i = 'video-react/LOADED_META_DATA';
      r.LOADED_META_DATA = i;
      var c = 'video-react/LOADED_DATA';
      r.LOADED_DATA = c;
      var R = 'video-react/RESIZE';
      r.RESIZE = R;
      var b = 'video-react/ERROR';
      r.ERROR = b;
      var O = 'video-react/ACTIVATE_TEXT_TRACK';
      r.ACTIVATE_TEXT_TRACK = O;
      function I(D) {
        return { type: v, videoProps: D };
      }
      function j(D) {
        return { type: a, videoProps: D };
      }
      function L(D) {
        return { type: f, videoProps: D };
      }
      function V(D) {
        return { type: S, videoProps: D };
      }
      function F(D) {
        return { type: M, videoProps: D };
      }
      function k(D) {
        return { type: T, videoProps: D };
      }
      function P(D) {
        return { type: u, videoProps: D };
      }
      function W(D) {
        return { type: s, videoProps: D };
      }
      function U(D) {
        return { type: h, videoProps: D };
      }
      function B(D) {
        return { type: d, videoProps: D };
      }
      function G(D) {
        return { type: C, videoProps: D };
      }
      function J(D) {
        return { type: N, videoProps: D };
      }
      function Y(D) {
        return { type: y, videoProps: D };
      }
      function z(D) {
        return { type: E, videoProps: D };
      }
      function H(D) {
        return { type: p, videoProps: D };
      }
      function $(D) {
        return { type: o, videoProps: D };
      }
      function K(D) {
        return { type: t, videoProps: D };
      }
      function Q(D) {
        return { type: l, videoProps: D };
      }
      function Z(D) {
        return { type: n, videoProps: D };
      }
      function X(D) {
        return { type: i, videoProps: D };
      }
      function w(D) {
        return { type: c, videoProps: D };
      }
      function x(D) {
        return { type: R, videoProps: D };
      }
      function q(D) {
        return { type: b, videoProps: D };
      }
      function _(D) {
        return { type: g, time: D };
      }
      function ee(D) {
        return { type: m, time: D };
      }
      function te(D) {
        return { type: O, textTrack: D };
      }
    },
    LgmY: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('lSNA')),
        f = v(e('RIqP')),
        S = v(e('lwsE')),
        M = v(e('W8MJ')),
        T = v(e('a1gu')),
        u = v(e('Nsbk')),
        s = v(e('PJYZ')),
        h = v(e('7W2i')),
        d = e('q1tI'),
        g = v(e('17x9')),
        m = e('EVUy'),
        C = {
          clickable: g.default.bool,
          dblclickable: g.default.bool,
          manager: g.default.object,
          actions: g.default.object,
          player: g.default.object,
          shortcuts: g.default.array,
        },
        N = { clickable: !0, dblclickable: !0 },
        y = (function(E) {
          (0, h.default)(p, E);
          function p(o, t) {
            var l;
            return (
              (0, S.default)(this, p),
              (l = (0, T.default)(this, (0, u.default)(p).call(this, o, t))),
              (l.defaultShortcuts = [
                { keyCode: 32, handle: l.togglePlay },
                { keyCode: 75, handle: l.togglePlay },
                { keyCode: 70, handle: l.toggleFullscreen },
                {
                  keyCode: 37,
                  handle: function(i, c) {
                    if (!i.hasStarted) return;
                    c.replay(5, { action: 'replay-5', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 74,
                  handle: function(i, c) {
                    if (!i.hasStarted) return;
                    c.replay(10, { action: 'replay-10', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 39,
                  handle: function(i, c) {
                    if (!i.hasStarted) return;
                    c.forward(5, { action: 'forward-5', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 76,
                  handle: function(i, c) {
                    if (!i.hasStarted) return;
                    c.forward(10, { action: 'forward-10', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 36,
                  handle: function(i, c) {
                    if (!i.hasStarted) return;
                    c.seek(0);
                  },
                },
                {
                  keyCode: 35,
                  handle: function(i, c) {
                    if (!i.hasStarted) return;
                    c.seek(i.duration);
                  },
                },
                {
                  keyCode: 38,
                  handle: function(i, c) {
                    var R = i.volume + 0.05;
                    R > 1 && (R = 1),
                      c.changeVolume(R, { action: 'volume-up', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 40,
                  handle: function(i, c) {
                    var R = i.volume - 0.05;
                    R < 0 && (R = 0);
                    var b = R > 0 ? 'volume-down' : 'volume-off';
                    c.changeVolume(R, { action: b, source: 'shortcut' });
                  },
                },
                {
                  keyCode: 190,
                  shift: !0,
                  handle: function(i, c) {
                    var R = i.playbackRate;
                    R >= 1.5
                      ? (R = 2)
                      : R >= 1.25
                      ? (R = 1.5)
                      : R >= 1
                      ? (R = 1.25)
                      : R >= 0.5
                      ? (R = 1)
                      : R >= 0.25
                      ? (R = 0.5)
                      : R >= 0 && (R = 0.25),
                      c.changeRate(R, { action: 'fast-forward', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 188,
                  shift: !0,
                  handle: function(i, c) {
                    var R = i.playbackRate;
                    R <= 0.5
                      ? (R = 0.25)
                      : R <= 1
                      ? (R = 0.5)
                      : R <= 1.25
                      ? (R = 1)
                      : R <= 1.5
                      ? (R = 1.25)
                      : R <= 2 && (R = 1.5),
                      c.changeRate(R, { action: 'fast-rewind', source: 'shortcut' });
                  },
                },
              ]),
              (l.shortcuts = (0, f.default)(l.defaultShortcuts)),
              (l.mergeShortcuts = l.mergeShortcuts.bind((0, s.default)(l))),
              (l.handleKeyPress = l.handleKeyPress.bind((0, s.default)(l))),
              (l.handleClick = l.handleClick.bind((0, s.default)(l))),
              (l.handleDoubleClick = l.handleDoubleClick.bind((0, s.default)(l))),
              l
            );
          }
          return (
            (0, M.default)(p, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.mergeShortcuts(),
                    document.addEventListener('keydown', this.handleKeyPress),
                    document.addEventListener('click', this.handleClick),
                    document.addEventListener('dblclick', this.handleDoubleClick);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(t) {
                  t.shortcuts !== this.props.shortcuts && this.mergeShortcuts();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('keydown', this.handleKeyPress),
                    document.removeEventListener('click', this.handleClick),
                    document.removeEventListener('dblclick', this.handleDoubleClick);
                },
              },
              {
                key: 'mergeShortcuts',
                value: function() {
                  var t = function(R) {
                      var b = R.keyCode,
                        O = b === void 0 ? 0 : b,
                        I = R.ctrl,
                        j = I === void 0 ? !1 : I,
                        L = R.shift,
                        V = L === void 0 ? !1 : L,
                        F = R.alt,
                        k = F === void 0 ? !1 : F;
                      return ''
                        .concat(O, ':')
                        .concat(j, ':')
                        .concat(V, ':')
                        .concat(k);
                    },
                    l = this.defaultShortcuts.reduce(function(c, R) {
                      return Object.assign(c, (0, a.default)({}, t(R), R));
                    }, {}),
                    n = (this.props.shortcuts || []).reduce(function(c, R) {
                      var b = R.keyCode,
                        O = R.handle;
                      return b && typeof O == 'function'
                        ? Object.assign(c, (0, a.default)({}, t(R), R))
                        : c;
                    }, l),
                    i = function(R) {
                      var b = 0,
                        O = ['ctrl', 'shift', 'alt'];
                      return (
                        O.forEach(function(I) {
                          R[I] && b++;
                        }),
                        b
                      );
                    };
                  this.shortcuts = Object.keys(n)
                    .map(function(c) {
                      return n[c];
                    })
                    .sort(function(c, R) {
                      return i(R) - i(c);
                    });
                },
              },
              {
                key: 'togglePlay',
                value: function(t, l) {
                  t.paused
                    ? l.play({ action: 'play', source: 'shortcut' })
                    : l.pause({ action: 'pause', source: 'shortcut' });
                },
              },
              {
                key: 'toggleFullscreen',
                value: function(t, l) {
                  l.toggleFullscreen(t);
                },
              },
              {
                key: 'handleKeyPress',
                value: function(t) {
                  var l = this.props,
                    n = l.player,
                    i = l.actions;
                  if (!n.isActive) return;
                  if (
                    document.activeElement &&
                    ((0, m.hasClass)(document.activeElement, 'video-react-control') ||
                      (0, m.hasClass)(document.activeElement, 'video-react-menu-button-active') ||
                      (0, m.hasClass)(document.activeElement, 'video-react-big-play-button'))
                  )
                    return;
                  var c = t.keyCode || t.which,
                    R = t.ctrlKey || t.metaKey,
                    b = t.shiftKey,
                    O = t.altKey,
                    I = this.shortcuts.filter(function(j) {
                      return !j.keyCode || j.keyCode - c !== 0
                        ? !1
                        : !(
                            (j.ctrl !== void 0 && j.ctrl !== R) ||
                            (j.shift !== void 0 && j.shift !== b) ||
                            (j.alt !== void 0 && j.alt !== O)
                          );
                    })[0];
                  I && (I.handle(n, i), t.preventDefault());
                },
              },
              {
                key: 'canBeClicked',
                value: function(t, l) {
                  return !(!t.isActive || l.target.nodeName !== 'VIDEO' || t.readyState !== 4);
                },
              },
              {
                key: 'handleClick',
                value: function(t) {
                  var l = this.props,
                    n = l.player,
                    i = l.actions,
                    c = l.clickable;
                  if (!this.canBeClicked(n, t) || !c) return;
                  this.togglePlay(n, i);
                },
              },
              {
                key: 'handleDoubleClick',
                value: function(t) {
                  var l = this.props,
                    n = l.player,
                    i = l.actions,
                    c = l.dblclickable;
                  if (!this.canBeClicked(n, t) || !c) return;
                  this.toggleFullscreen(n, i);
                },
              },
              {
                key: 'render',
                value: function() {
                  return null;
                },
              },
            ]),
            p
          );
        })(d.Component);
      (r.default = y), (y.propTypes = C), (y.defaultProps = N), (y.displayName = 'Shortcut');
    },
    MVZn: function(A, r, e) {
      var v = e('lSNA');
      function a(f) {
        for (var S = 1; S < arguments.length; S++) {
          var M = arguments[S] != null ? Object(arguments[S]) : {},
            T = Object.keys(M);
          typeof Object.getOwnPropertySymbols == 'function' &&
            (T = T.concat(
              Object.getOwnPropertySymbols(M).filter(function(u) {
                return Object.getOwnPropertyDescriptor(M, u).enumerable;
              }),
            )),
            T.forEach(function(u) {
              v(f, u, M[u]);
            });
        }
        return f;
      }
      A.exports = a;
    },
    Na29: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = e('tJTW'),
        T = { player: a.default.object, className: a.default.string };
      function u(h) {
        var d = h.player,
          g = d.currentTime,
          m = d.duration,
          C = h.className,
          N = m - g,
          y = (0, M.formatTime)(N);
        return f.default.createElement(
          'div',
          {
            className: (0, S.default)(
              'video-react-remaining-time video-react-time-control video-react-control',
              C,
            ),
          },
          f.default.createElement(
            'div',
            { className: 'video-react-remaining-time-display', 'aria-live': 'off' },
            f.default.createElement(
              'span',
              { className: 'video-react-control-text' },
              'Remaining Time ',
            ),
            '-'.concat(y),
          ),
        );
      }
      (u.propTypes = T), (u.displayName = 'RemainingTimeDisplay');
      var s = u;
      r.default = s;
    },
    QJtQ: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = g);
      var a = v(e('pVnL')),
        f = v(e('MVZn')),
        S = v(e('17x9')),
        M = v(e('q1tI')),
        T = v(e('TSYQ')),
        u = v(e('mJvV')),
        s = v(e('4FqI')),
        h = {
          inline: S.default.bool,
          onClick: S.default.func.isRequired,
          onFocus: S.default.func,
          onBlur: S.default.func,
          className: S.default.string,
        },
        d = { inline: !0 };
      function g(m) {
        var C = m.inline,
          N = m.className,
          y = (0, f.default)({}, m);
        return (
          delete y.children,
          delete y.inline,
          delete y.className,
          M.default.createElement(
            u.default,
            (0, a.default)(
              {
                className: (0, T.default)(
                  N,
                  { 'video-react-menu-button-inline': !!C, 'video-react-menu-button-popup': !C },
                  'video-react-control video-react-button video-react-menu-button',
                ),
              },
              y,
            ),
            M.default.createElement(s.default, m),
          )
        );
      }
      (g.propTypes = h), (g.defaultProps = d), (g.displayName = 'PopupButton');
    },
    Qrqe: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('pVnL')),
        S = a(e('lwsE')),
        M = a(e('W8MJ')),
        T = a(e('a1gu')),
        u = a(e('Nsbk')),
        s = a(e('PJYZ')),
        h = a(e('7W2i')),
        d = a(e('17x9')),
        g = v(e('q1tI')),
        m = a(e('TSYQ')),
        C = a(e('kXlQ')),
        N = a(e('jSMv')),
        y = {
          actions: d.default.object,
          player: d.default.object,
          className: d.default.string,
          onFocus: d.default.func,
          onBlur: d.default.func,
        },
        E = (function(o) {
          (0, h.default)(t, o);
          function t(l, n) {
            var i;
            return (
              (0, S.default)(this, t),
              (i = (0, T.default)(this, (0, u.default)(t).call(this, l, n))),
              (i.state = { percentage: '0%' }),
              (i.handleMouseMove = i.handleMouseMove.bind((0, s.default)(i))),
              (i.handlePercentageChange = i.handlePercentageChange.bind((0, s.default)(i))),
              (i.checkMuted = i.checkMuted.bind((0, s.default)(i))),
              (i.getPercent = i.getPercent.bind((0, s.default)(i))),
              (i.stepForward = i.stepForward.bind((0, s.default)(i))),
              (i.stepBack = i.stepBack.bind((0, s.default)(i))),
              (i.handleFocus = i.handleFocus.bind((0, s.default)(i))),
              (i.handleBlur = i.handleBlur.bind((0, s.default)(i))),
              (i.handleClick = i.handleClick.bind((0, s.default)(i))),
              i
            );
          }
          return (
            (0, M.default)(t, [
              { key: 'componentDidMount', value: function() {} },
              {
                key: 'getPercent',
                value: function() {
                  var n = this.props.player;
                  return n.muted ? 0 : n.volume;
                },
              },
              {
                key: 'checkMuted',
                value: function() {
                  var n = this.props,
                    i = n.player,
                    c = n.actions;
                  i.muted && c.mute(!1);
                },
              },
              {
                key: 'handleMouseMove',
                value: function(n) {
                  var i = this.props.actions;
                  this.checkMuted();
                  var c = this.slider.calculateDistance(n);
                  i.changeVolume(c);
                },
              },
              {
                key: 'stepForward',
                value: function() {
                  var n = this.props,
                    i = n.player,
                    c = n.actions;
                  this.checkMuted(), c.changeVolume(i.volume + 0.1);
                },
              },
              {
                key: 'stepBack',
                value: function() {
                  var n = this.props,
                    i = n.player,
                    c = n.actions;
                  this.checkMuted(), c.changeVolume(i.volume - 0.1);
                },
              },
              {
                key: 'handleFocus',
                value: function(n) {
                  this.props.onFocus && this.props.onFocus(n);
                },
              },
              {
                key: 'handleBlur',
                value: function(n) {
                  this.props.onBlur && this.props.onBlur(n);
                },
              },
              {
                key: 'handlePercentageChange',
                value: function(n) {
                  n !== this.state.percentage && this.setState({ percentage: n });
                },
              },
              {
                key: 'handleClick',
                value: function(n) {
                  n.stopPropagation();
                },
              },
              {
                key: 'render',
                value: function() {
                  var n = this,
                    i = this.props,
                    c = i.player,
                    R = i.className,
                    b = (c.volume * 100).toFixed(2);
                  return g.default.createElement(
                    C.default,
                    (0, f.default)(
                      {
                        ref: function(I) {
                          n.slider = I;
                        },
                        label: 'volume level',
                        valuenow: b,
                        valuetext: ''.concat(b, '%'),
                        onMouseMove: this.handleMouseMove,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onClick: this.handleClick,
                        sliderActive: this.handleFocus,
                        sliderInactive: this.handleBlur,
                        getPercent: this.getPercent,
                        onPercentageChange: this.handlePercentageChange,
                        stepForward: this.stepForward,
                        stepBack: this.stepBack,
                      },
                      this.props,
                      {
                        className: (0, m.default)(
                          R,
                          'video-react-volume-bar video-react-slider-bar',
                        ),
                      },
                    ),
                    g.default.createElement(N.default, this.props),
                  );
                },
              },
            ]),
            t
          );
        })(g.Component);
      (E.propTypes = y), (E.displayName = 'VolumeBar');
      var p = E;
      r.default = p;
    },
    U3K2: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = a(e('o4RB')),
        C = a(e('DeZD')),
        N = a(e('mJvV')),
        y = {
          inline: h.default.bool,
          items: h.default.array,
          className: h.default.string,
          onSelectItem: h.default.func,
          children: h.default.any,
          selectedIndex: h.default.number,
        },
        E = (function(p) {
          (0, s.default)(o, p);
          function o(t, l) {
            var n;
            return (
              (0, f.default)(this, o),
              (n = (0, M.default)(this, (0, T.default)(o).call(this, t, l))),
              (n.state = { active: !1, activateIndex: t.selectedIndex || 0 }),
              (n.commitSelection = n.commitSelection.bind((0, u.default)(n))),
              (n.activateMenuItem = n.activateMenuItem.bind((0, u.default)(n))),
              (n.handleClick = n.handleClick.bind((0, u.default)(n))),
              (n.renderMenu = n.renderMenu.bind((0, u.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, u.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, u.default)(n))),
              (n.handleUpArrow = n.handleUpArrow.bind((0, u.default)(n))),
              (n.handleDownArrow = n.handleDownArrow.bind((0, u.default)(n))),
              (n.handleEscape = n.handleEscape.bind((0, u.default)(n))),
              (n.handleReturn = n.handleReturn.bind((0, u.default)(n))),
              (n.handleTab = n.handleTab.bind((0, u.default)(n))),
              (n.handleKeyPress = n.handleKeyPress.bind((0, u.default)(n))),
              (n.handleSelectItem = n.handleSelectItem.bind((0, u.default)(n))),
              (n.handleIndexChange = n.handleIndexChange.bind((0, u.default)(n))),
              n
            );
          }
          return (
            (0, S.default)(o, [
              {
                key: 'componentDidUpdate',
                value: function(l) {
                  l.selectedIndex !== this.props.selectedIndex &&
                    this.activateMenuItem(this.props.selectedIndex);
                },
              },
              {
                key: 'commitSelection',
                value: function(l) {
                  this.setState({ activateIndex: l }), this.handleIndexChange(l);
                },
              },
              {
                key: 'activateMenuItem',
                value: function(l) {
                  this.setState({ activateIndex: l }), this.handleIndexChange(l);
                },
              },
              {
                key: 'handleIndexChange',
                value: function(l) {
                  var n = this.props.onSelectItem;
                  n(l);
                },
              },
              {
                key: 'handleClick',
                value: function() {
                  this.setState(function(l) {
                    return { active: !l.active };
                  });
                },
              },
              {
                key: 'handleFocus',
                value: function() {
                  document.addEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'handleBlur',
                value: function() {
                  this.setState({ active: !1 }),
                    document.removeEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'handleUpArrow',
                value: function(l) {
                  var n = this.props.items;
                  if (this.state.active) {
                    l.preventDefault();
                    var i = this.state.activateIndex - 1;
                    i < 0 && (i = n.length ? n.length - 1 : 0), this.activateMenuItem(i);
                  }
                },
              },
              {
                key: 'handleDownArrow',
                value: function(l) {
                  var n = this.props.items;
                  if (this.state.active) {
                    l.preventDefault();
                    var i = this.state.activateIndex + 1;
                    i >= n.length && (i = 0), this.activateMenuItem(i);
                  }
                },
              },
              {
                key: 'handleTab',
                value: function(l) {
                  this.state.active &&
                    (l.preventDefault(), this.commitSelection(this.state.activateIndex));
                },
              },
              {
                key: 'handleReturn',
                value: function(l) {
                  l.preventDefault(),
                    this.state.active
                      ? this.commitSelection(this.state.activateIndex)
                      : this.setState({ active: !0 });
                },
              },
              {
                key: 'handleEscape',
                value: function() {
                  this.setState({ active: !1, activateIndex: 0 });
                },
              },
              {
                key: 'handleKeyPress',
                value: function(l) {
                  l.which === 27
                    ? this.handleEscape(l)
                    : l.which === 9
                    ? this.handleTab(l)
                    : l.which === 13
                    ? this.handleReturn(l)
                    : l.which === 38
                    ? this.handleUpArrow(l)
                    : l.which === 40 && this.handleDownArrow(l);
                },
              },
              {
                key: 'handleSelectItem',
                value: function(l) {
                  this.commitSelection(l);
                },
              },
              {
                key: 'renderMenu',
                value: function() {
                  var l = this;
                  if (!this.state.active) return null;
                  var n = this.props.items;
                  return d.default.createElement(
                    m.default,
                    null,
                    n.map(function(i, c) {
                      return d.default.createElement(C.default, {
                        item: i,
                        index: c,
                        onSelectItem: l.handleSelectItem,
                        activateIndex: l.state.activateIndex,
                        key: 'item-'.concat(c++),
                      });
                    }),
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var l = this,
                    n = this.props,
                    i = n.inline,
                    c = n.className;
                  return d.default.createElement(
                    N.default,
                    {
                      className: (0, g.default)(
                        c,
                        {
                          'video-react-menu-button-inline': !!i,
                          'video-react-menu-button-popup': !i,
                          'video-react-menu-button-active': this.state.active,
                        },
                        'video-react-control video-react-button video-react-menu-button',
                      ),
                      role: 'button',
                      tabIndex: '0',
                      ref: function(b) {
                        l.menuButton = b;
                      },
                      onClick: this.handleClick,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                    },
                    this.props.children,
                    this.renderMenu(),
                  );
                },
              },
            ]),
            o
          );
        })(d.Component);
      (r.default = E), (E.propTypes = y), (E.displayName = 'MenuButton');
    },
    UXv2: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('8nKf')),
        f = (0, a.default)('replay');
      f.displayName = 'ReplayControl';
      var S = f;
      r.default = S;
    },
    X2cd: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = T);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = { player: a.default.object, className: a.default.string };
      function T(u) {
        var s = u.player,
          h = u.className;
        return s.error
          ? null
          : f.default.createElement('div', {
              className: (0, S.default)('video-react-loading-spinner', h),
            });
      }
      (T.propTypes = M), (T.displayName = 'LoadingSpinner');
    },
    iAfH: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('MVZn')),
        S = a(e('lwsE')),
        M = a(e('W8MJ')),
        T = e('ANjH'),
        u = a(e('ulZL')),
        s = v(e('we7k')),
        h = v(e('INgg')),
        d = (function() {
          function g(m) {
            (0, S.default)(this, g),
              (this.store = m || (0, T.createStore)(u.default)),
              (this.video = null),
              (this.rootElement = null);
          }
          return (
            (0, M.default)(g, [
              {
                key: 'getActions',
                value: function() {
                  var C = this,
                    N = this.store.dispatch,
                    y = (0, f.default)({}, s, h);
                  function E(p) {
                    return function() {
                      var t = p.apply(C, arguments);
                      typeof t != 'undefined' && N(t);
                    };
                  }
                  return Object.keys(y)
                    .filter(function(p) {
                      return typeof y[p] == 'function';
                    })
                    .reduce(function(p, o) {
                      return (p[o] = E(y[o])), p;
                    }, {});
                },
              },
              {
                key: 'getState',
                value: function() {
                  return this.store.getState();
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function(C, N) {
                  N || (N = this.getState.bind(this));
                  var y = N(),
                    E = function() {
                      var o = N();
                      if (o === y) return;
                      var t = y;
                      (y = o), C(o, t);
                    };
                  return this.store.subscribe(E);
                },
              },
              {
                key: 'subscribeToOperationStateChange',
                value: function(C) {
                  var N = this;
                  return this.subscribeToStateChange(C, function() {
                    return N.getState().operation;
                  });
                },
              },
              {
                key: 'subscribeToPlayerStateChange',
                value: function(C) {
                  var N = this;
                  return this.subscribeToStateChange(C, function() {
                    return N.getState().player;
                  });
                },
              },
            ]),
            g
          );
        })();
      r.default = d;
    },
    jSMv: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = { percentage: a.default.string, vertical: a.default.bool, className: a.default.string },
        T = { percentage: '100%', vertical: !1 };
      function u(h) {
        var d = h.percentage,
          g = h.vertical,
          m = h.className,
          C = {};
        return (
          g ? (C.height = d) : (C.width = d),
          f.default.createElement(
            'div',
            { className: (0, S.default)(m, 'video-react-volume-level'), style: C },
            f.default.createElement('span', { className: 'video-react-control-text' }),
          )
        );
      }
      (u.propTypes = M), (u.defaultProps = T), (u.displayName = 'VolumeLevel');
      var s = u;
      r.default = s;
    },
    kXlQ: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = v(e('EVUy')),
        C = {
          className: h.default.string,
          onMouseDown: h.default.func,
          onMouseMove: h.default.func,
          stepForward: h.default.func,
          stepBack: h.default.func,
          sliderActive: h.default.func,
          sliderInactive: h.default.func,
          onMouseUp: h.default.func,
          onFocus: h.default.func,
          onBlur: h.default.func,
          onClick: h.default.func,
          getPercent: h.default.func,
          vertical: h.default.bool,
          children: h.default.node,
          label: h.default.string,
          valuenow: h.default.string,
          valuetext: h.default.string,
        },
        N = (function(y) {
          (0, s.default)(E, y);
          function E(p, o) {
            var t;
            return (
              (0, f.default)(this, E),
              (t = (0, M.default)(this, (0, T.default)(E).call(this, p, o))),
              (t.handleMouseDown = t.handleMouseDown.bind((0, u.default)(t))),
              (t.handleMouseMove = t.handleMouseMove.bind((0, u.default)(t))),
              (t.handleMouseUp = t.handleMouseUp.bind((0, u.default)(t))),
              (t.handleFocus = t.handleFocus.bind((0, u.default)(t))),
              (t.handleBlur = t.handleBlur.bind((0, u.default)(t))),
              (t.handleClick = t.handleClick.bind((0, u.default)(t))),
              (t.handleKeyPress = t.handleKeyPress.bind((0, u.default)(t))),
              (t.stepForward = t.stepForward.bind((0, u.default)(t))),
              (t.stepBack = t.stepBack.bind((0, u.default)(t))),
              (t.calculateDistance = t.calculateDistance.bind((0, u.default)(t))),
              (t.getProgress = t.getProgress.bind((0, u.default)(t))),
              (t.renderChildren = t.renderChildren.bind((0, u.default)(t))),
              (t.state = { active: !1 }),
              t
            );
          }
          return (
            (0, S.default)(E, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('mousemove', this.handleMouseMove, !0),
                    document.removeEventListener('mouseup', this.handleMouseUp, !0),
                    document.removeEventListener('touchmove', this.handleMouseMove, !0),
                    document.removeEventListener('touchend', this.handleMouseUp, !0),
                    document.removeEventListener('keydown', this.handleKeyPress, !0);
                },
              },
              {
                key: 'getProgress',
                value: function() {
                  var o = this.props.getPercent;
                  if (!o) return 0;
                  var t = o();
                  return (typeof t != 'number' || t < 0 || t === Infinity) && (t = 0), t;
                },
              },
              {
                key: 'handleMouseDown',
                value: function(o) {
                  var t = this.props.onMouseDown;
                  document.addEventListener('mousemove', this.handleMouseMove, !0),
                    document.addEventListener('mouseup', this.handleMouseUp, !0),
                    document.addEventListener('touchmove', this.handleMouseMove, !0),
                    document.addEventListener('touchend', this.handleMouseUp, !0),
                    this.setState({ active: !0 }),
                    this.props.sliderActive && this.props.sliderActive(o),
                    this.handleMouseMove(o),
                    t && t(o);
                },
              },
              {
                key: 'handleMouseMove',
                value: function(o) {
                  var t = this.props.onMouseMove;
                  t && t(o);
                },
              },
              {
                key: 'handleMouseUp',
                value: function(o) {
                  o.preventDefault();
                  var t = this.props.onMouseUp;
                  document.removeEventListener('mousemove', this.handleMouseMove, !0),
                    document.removeEventListener('mouseup', this.handleMouseUp, !0),
                    document.removeEventListener('touchmove', this.handleMouseMove, !0),
                    document.removeEventListener('touchend', this.handleMouseUp, !0),
                    this.setState({ active: !1 }),
                    this.props.sliderInactive && this.props.sliderInactive(o),
                    t && t(o);
                },
              },
              {
                key: 'handleFocus',
                value: function(o) {
                  document.addEventListener('keydown', this.handleKeyPress, !0),
                    this.props.onFocus && this.props.onFocus(o);
                },
              },
              {
                key: 'handleBlur',
                value: function(o) {
                  document.removeEventListener('keydown', this.handleKeyPress, !0),
                    this.props.onBlur && this.props.onBlur(o);
                },
              },
              {
                key: 'handleClick',
                value: function(o) {
                  o.preventDefault(), this.props.onClick && this.props.onClick(o);
                },
              },
              {
                key: 'handleKeyPress',
                value: function(o) {
                  o.which === 37 || o.which === 40
                    ? (o.preventDefault(), o.stopPropagation(), this.stepBack())
                    : (o.which === 38 || o.which === 39) &&
                      (o.preventDefault(), o.stopPropagation(), this.stepForward());
                },
              },
              {
                key: 'stepForward',
                value: function() {
                  this.props.stepForward && this.props.stepForward();
                },
              },
              {
                key: 'stepBack',
                value: function() {
                  this.props.stepBack && this.props.stepBack();
                },
              },
              {
                key: 'calculateDistance',
                value: function(o) {
                  var t = this.slider,
                    l = m.getPointerPosition(t, o);
                  return this.props.vertical ? l.y : l.x;
                },
              },
              {
                key: 'renderChildren',
                value: function() {
                  var o = this.getProgress(),
                    t = ''.concat((o * 100).toFixed(2), '%');
                  return d.default.Children.map(this.props.children, function(l) {
                    return d.default.cloneElement(l, { progress: o, percentage: t });
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var o = this,
                    t = this.props,
                    l = t.vertical,
                    n = t.label,
                    i = t.valuenow,
                    c = t.valuetext;
                  return d.default.createElement(
                    'div',
                    {
                      className: (0, g.default)(
                        this.props.className,
                        {
                          'video-react-slider-vertical': l,
                          'video-react-slider-horizontal': !l,
                          'video-react-sliding': this.state.active,
                        },
                        'video-react-slider',
                      ),
                      ref: function(b) {
                        o.slider = b;
                      },
                      tabIndex: '0',
                      role: 'slider',
                      onMouseDown: this.handleMouseDown,
                      onTouchStart: this.handleMouseDown,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      onClick: this.handleClick,
                      'aria-label': n || '',
                      'aria-valuenow': i || '',
                      'aria-valuetext': c || '',
                      'aria-valuemin': 0,
                      'aria-valuemax': 100,
                    },
                    this.renderChildren(),
                  );
                },
              },
            ]),
            E
          );
        })(d.Component);
      (r.default = N), (N.propTypes = C), (N.displayName = 'Slider');
    },
    mJvV: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('pVnL')),
        S = a(e('MVZn')),
        M = a(e('lwsE')),
        T = a(e('W8MJ')),
        u = a(e('a1gu')),
        s = a(e('Nsbk')),
        h = a(e('PJYZ')),
        d = a(e('7W2i')),
        g = a(e('17x9')),
        m = v(e('q1tI')),
        C = a(e('TSYQ')),
        N = {
          tagName: g.default.string,
          onClick: g.default.func.isRequired,
          onFocus: g.default.func,
          onBlur: g.default.func,
          className: g.default.string,
        },
        y = { tagName: 'div' },
        E = (function(p) {
          (0, d.default)(o, p);
          function o(t, l) {
            var n;
            return (
              (0, M.default)(this, o),
              (n = (0, u.default)(this, (0, s.default)(o).call(this, t, l))),
              (n.handleClick = n.handleClick.bind((0, h.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, h.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, h.default)(n))),
              (n.handleKeypress = n.handleKeypress.bind((0, h.default)(n))),
              n
            );
          }
          return (
            (0, T.default)(o, [
              {
                key: 'handleKeypress',
                value: function(l) {
                  (l.which === 32 || l.which === 13) && (l.preventDefault(), this.handleClick(l));
                },
              },
              {
                key: 'handleClick',
                value: function(l) {
                  var n = this.props.onClick;
                  n(l);
                },
              },
              {
                key: 'handleFocus',
                value: function(l) {
                  document.addEventListener('keydown', this.handleKeypress),
                    this.props.onFocus && this.props.onFocus(l);
                },
              },
              {
                key: 'handleBlur',
                value: function(l) {
                  document.removeEventListener('keydown', this.handleKeypress),
                    this.props.onBlur && this.props.onBlur(l);
                },
              },
              {
                key: 'render',
                value: function() {
                  var l = this.props.tagName,
                    n = (0, S.default)({}, this.props);
                  return (
                    delete n.tagName,
                    delete n.className,
                    m.default.createElement(
                      l,
                      (0, f.default)(
                        {
                          className: (0, C.default)(this.props.className),
                          role: 'button',
                          tabIndex: '0',
                          onClick: this.handleClick,
                          onFocus: this.handleFocus,
                          onBlur: this.handleBlur,
                        },
                        n,
                      ),
                    )
                  );
                },
              },
            ]),
            o
          );
        })(m.Component);
      (r.default = E),
        (E.propTypes = N),
        (E.defaultProps = y),
        (E.displayName = 'ClickableComponent');
    },
    o4RB: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = { children: h.default.any },
        m = (function(C) {
          (0, s.default)(N, C);
          function N(y, E) {
            var p;
            return (
              (0, f.default)(this, N),
              (p = (0, M.default)(this, (0, T.default)(N).call(this, y, E))),
              (p.handleClick = p.handleClick.bind((0, u.default)(p))),
              p
            );
          }
          return (
            (0, S.default)(N, [
              {
                key: 'handleClick',
                value: function(E) {
                  E.preventDefault();
                },
              },
              {
                key: 'render',
                value: function() {
                  return d.default.createElement(
                    'div',
                    {
                      className: 'video-react-menu video-react-lock-showing',
                      role: 'presentation',
                      onClick: this.handleClick,
                    },
                    d.default.createElement(
                      'ul',
                      { className: 'video-react-menu-content' },
                      this.props.children,
                    ),
                  );
                },
              },
            ]),
            N
          );
        })(d.Component);
      (r.default = m), (m.propTypes = g), (m.displayName = 'Menu');
    },
    'q+t5': function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = u);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = e('tJTW'),
        T = {
          currentTime: a.default.number,
          duration: a.default.number,
          percentage: a.default.string,
          className: a.default.string,
        };
      function u(s) {
        var h = s.currentTime,
          d = s.duration,
          g = s.percentage,
          m = s.className;
        return f.default.createElement(
          'div',
          {
            'data-current-time': (0, M.formatTime)(h, d),
            className: (0, S.default)('video-react-play-progress video-react-slider-bar', m),
            style: { width: g },
          },
          f.default.createElement(
            'span',
            { className: 'video-react-control-text' },
            'Progress: '.concat(g),
          ),
        );
      }
      (u.propTypes = T), (u.displayName = 'PlayProgressBar');
    },
    qdLH: function(A, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.IS_IOS = r.IS_IPOD = r.IS_IPHONE = r.IS_IPAD = void 0);
      var v = typeof window != 'undefined' && window.navigator ? window.navigator.userAgent : '',
        a = /iPad/i.test(v);
      r.IS_IPAD = a;
      var f = /iPhone/i.test(v) && !a;
      r.IS_IPHONE = f;
      var S = /iPod/i.test(v);
      r.IS_IPOD = S;
      var M = f || a || S;
      r.IS_IOS = M;
    },
    rsAN: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = T);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = { duration: a.default.number, buffered: a.default.object, className: a.default.string };
      function T(u) {
        var s = u.buffered,
          h = u.duration,
          d = u.className;
        if (!s || !s.length) return null;
        var g = s.end(s.length - 1),
          m = {};
        g > h && (g = h);
        function C(t, l) {
          var n = t / l || 0;
          return ''.concat((n >= 1 ? 1 : n) * 100, '%');
        }
        m.width = C(g, h);
        for (var N = [], y = 0; y < s.length; y++) {
          var E = s.start(y),
            p = s.end(y),
            o = f.default.createElement('div', {
              style: { left: C(E, g), width: C(p - E, g) },
              key: 'part-'.concat(y),
            });
          N.push(o);
        }
        return (
          N.length === 0 && (N = null),
          f.default.createElement(
            'div',
            { style: m, className: (0, S.default)('video-react-load-progress', d) },
            f.default.createElement(
              'span',
              { className: 'video-react-control-text' },
              'Loaded: 0%',
            ),
            N,
          )
        );
      }
      (T.propTypes = M), (T.displayName = 'LoadProgressBar');
    },
    ruMa: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = T);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = { separator: a.default.string, className: a.default.string };
      function T(u) {
        var s = u.separator,
          h = u.className,
          d = s || '/';
        return f.default.createElement(
          'div',
          {
            className: (0, S.default)('video-react-time-control video-react-time-divider', h),
            dir: 'ltr',
          },
          f.default.createElement('div', null, f.default.createElement('span', null, d)),
        );
      }
      (T.propTypes = M), (T.displayName = 'TimeDivider');
    },
    rzyQ: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('lwsE')),
        f = v(e('W8MJ')),
        S = (function() {
          function T() {
            (0, a.default)(this, T);
          }
          return (
            (0, f.default)(T, [
              {
                key: 'request',
                value: function(s) {
                  s.requestFullscreen
                    ? s.requestFullscreen()
                    : s.webkitRequestFullscreen
                    ? s.webkitRequestFullscreen()
                    : s.mozRequestFullScreen
                    ? s.mozRequestFullScreen()
                    : s.msRequestFullscreen && s.msRequestFullscreen();
                },
              },
              {
                key: 'exit',
                value: function() {
                  document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.msExitFullscreen && document.msExitFullscreen();
                },
              },
              {
                key: 'addEventListener',
                value: function(s) {
                  document.addEventListener('fullscreenchange', s),
                    document.addEventListener('webkitfullscreenchange', s),
                    document.addEventListener('mozfullscreenchange', s),
                    document.addEventListener('MSFullscreenChange', s);
                },
              },
              {
                key: 'removeEventListener',
                value: function(s) {
                  document.removeEventListener('fullscreenchange', s),
                    document.removeEventListener('webkitfullscreenchange', s),
                    document.removeEventListener('mozfullscreenchange', s),
                    document.removeEventListener('MSFullscreenChange', s);
                },
              },
              {
                key: 'isFullscreen',
                get: function() {
                  return (
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement
                  );
                },
              },
              {
                key: 'enabled',
                get: function() {
                  return (
                    document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled
                  );
                },
              },
            ]),
            T
          );
        })(),
        M = new S();
      r.default = M;
    },
    tJTW: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.formatTime = u),
        (r.isVideoChild = s),
        (r.mergeAndSortChildren = g),
        (r.deprecatedWarning = m),
        (r.throttle = C),
        (r.mediaProperties = void 0);
      var a = v(e('RIqP')),
        f = v(e('MVZn')),
        S = v(e('QILm')),
        M = v(e('q1tI')),
        T =
          Number.isNaN ||
          function(y) {
            return y !== y;
          };
      function u() {
        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
          E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y,
          p = Math.floor(y % 60),
          o = Math.floor((y / 60) % 60),
          t = Math.floor(y / 3600),
          l = Math.floor((E / 60) % 60),
          n = Math.floor(E / 3600);
        return (
          (T(y) || y === Infinity) && ((t = '-'), (o = '-'), (p = '-')),
          (t = t > 0 || n > 0 ? ''.concat(t, ':') : ''),
          (o = ''.concat((t || l >= 10) && o < 10 ? '0'.concat(o) : o, ':')),
          (p = p < 10 ? '0'.concat(p) : p),
          t + o + p
        );
      }
      function s(y) {
        return y.props && y.props.isVideoChild ? !0 : y.type === 'source' || y.type === 'track';
      }
      var h = function(E, p) {
          return E.filter(p)[0];
        },
        d = function(E, p) {
          var o = E.type,
            t = p.type;
          return typeof o == 'string' || typeof t == 'string'
            ? o === t
            : typeof o == 'function' && typeof t == 'function'
            ? o.displayName === t.displayName
            : !1;
        };
      function g(y, E, p) {
        var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1,
          t = M.default.Children.toArray(E),
          l = p.order,
          n = (0, S.default)(p, ['order']);
        return t
          .filter(function(i) {
            return !i.props.disabled;
          })
          .concat(
            y.filter(function(i) {
              return !h(t, function(c) {
                return d(c, i);
              });
            }),
          )
          .map(function(i) {
            var c = h(y, function(I) {
                return d(I, i);
              }),
              R = c ? c.props : {},
              b = (0, f.default)({}, n, R, i.props),
              O = M.default.cloneElement(i, b, i.props.children);
            return O;
          })
          .sort(function(i, c) {
            return (i.props.order || o) - (c.props.order || o);
          });
      }
      function m(y, E) {
        console.warn(
          'WARNING: '.concat(y, ' will be deprecated soon! Please use ').concat(E, ' instead.'),
        );
      }
      function C(y, E) {
        var p = arguments,
          o = !1;
        return function() {
          o ||
            (y.apply(void 0, (0, a.default)(p)),
            (o = !0),
            setTimeout(function() {
              o = !1;
            }, E));
        };
      }
      var N = [
        'error',
        'src',
        'srcObject',
        'currentSrc',
        'crossOrigin',
        'networkState',
        'preload',
        'buffered',
        'readyState',
        'seeking',
        'currentTime',
        'duration',
        'paused',
        'defaultPlaybackRate',
        'playbackRate',
        'played',
        'seekable',
        'ended',
        'autoplay',
        'loop',
        'mediaGroup',
        'controller',
        'controls',
        'volume',
        'muted',
        'defaultMuted',
        'audioTracks',
        'videoTracks',
        'textTracks',
        'width',
        'height',
        'videoWidth',
        'videoHeight',
        'poster',
      ];
      r.mediaProperties = N;
    },
    tPgb: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var a = v(e('17x9')),
        f = v(e('q1tI')),
        S = v(e('TSYQ')),
        M = {
          poster: a.default.string,
          player: a.default.object,
          actions: a.default.object,
          className: a.default.string,
        };
      function T(s) {
        var h = s.poster,
          d = s.player,
          g = s.actions,
          m = s.className;
        return !h || d.hasStarted
          ? null
          : f.default.createElement('div', {
              className: (0, S.default)('video-react-poster', m),
              style: { backgroundImage: 'url("'.concat(h, '")') },
              onClick: function() {
                d.paused && g.play();
              },
            });
      }
      (T.propTypes = M), (T.displayName = 'PosterImage');
      var u = T;
      r.default = u;
    },
    udzn: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'Player', {
          enumerable: !0,
          get: function() {
            return f.default;
          },
        }),
        Object.defineProperty(r, 'Video', {
          enumerable: !0,
          get: function() {
            return S.default;
          },
        }),
        Object.defineProperty(r, 'BigPlayButton', {
          enumerable: !0,
          get: function() {
            return M.default;
          },
        }),
        Object.defineProperty(r, 'LoadingSpinner', {
          enumerable: !0,
          get: function() {
            return T.default;
          },
        }),
        Object.defineProperty(r, 'PosterImage', {
          enumerable: !0,
          get: function() {
            return u.default;
          },
        }),
        Object.defineProperty(r, 'Slider', {
          enumerable: !0,
          get: function() {
            return s.default;
          },
        }),
        Object.defineProperty(r, 'Bezel', {
          enumerable: !0,
          get: function() {
            return h.default;
          },
        }),
        Object.defineProperty(r, 'Shortcut', {
          enumerable: !0,
          get: function() {
            return d.default;
          },
        }),
        Object.defineProperty(r, 'ControlBar', {
          enumerable: !0,
          get: function() {
            return g.default;
          },
        }),
        Object.defineProperty(r, 'PlayToggle', {
          enumerable: !0,
          get: function() {
            return m.default;
          },
        }),
        Object.defineProperty(r, 'ForwardControl', {
          enumerable: !0,
          get: function() {
            return C.default;
          },
        }),
        Object.defineProperty(r, 'ReplayControl', {
          enumerable: !0,
          get: function() {
            return N.default;
          },
        }),
        Object.defineProperty(r, 'FullscreenToggle', {
          enumerable: !0,
          get: function() {
            return y.default;
          },
        }),
        Object.defineProperty(r, 'ProgressControl', {
          enumerable: !0,
          get: function() {
            return E.default;
          },
        }),
        Object.defineProperty(r, 'SeekBar', {
          enumerable: !0,
          get: function() {
            return p.default;
          },
        }),
        Object.defineProperty(r, 'PlayProgressBar', {
          enumerable: !0,
          get: function() {
            return o.default;
          },
        }),
        Object.defineProperty(r, 'LoadProgressBar', {
          enumerable: !0,
          get: function() {
            return t.default;
          },
        }),
        Object.defineProperty(r, 'MouseTimeDisplay', {
          enumerable: !0,
          get: function() {
            return l.default;
          },
        }),
        Object.defineProperty(r, 'VolumeMenuButton', {
          enumerable: !0,
          get: function() {
            return n.default;
          },
        }),
        Object.defineProperty(r, 'PlaybackRateMenuButton', {
          enumerable: !0,
          get: function() {
            return i.default;
          },
        }),
        Object.defineProperty(r, 'PlaybackRate', {
          enumerable: !0,
          get: function() {
            return c.default;
          },
        }),
        Object.defineProperty(r, 'ClosedCaptionButton', {
          enumerable: !0,
          get: function() {
            return R.default;
          },
        }),
        Object.defineProperty(r, 'RemainingTimeDisplay', {
          enumerable: !0,
          get: function() {
            return b.default;
          },
        }),
        Object.defineProperty(r, 'CurrentTimeDisplay', {
          enumerable: !0,
          get: function() {
            return O.default;
          },
        }),
        Object.defineProperty(r, 'DurationDisplay', {
          enumerable: !0,
          get: function() {
            return I.default;
          },
        }),
        Object.defineProperty(r, 'TimeDivider', {
          enumerable: !0,
          get: function() {
            return j.default;
          },
        }),
        Object.defineProperty(r, 'MenuButton', {
          enumerable: !0,
          get: function() {
            return L.default;
          },
        }),
        Object.defineProperty(r, 'playerReducer', {
          enumerable: !0,
          get: function() {
            return k.playerReducer;
          },
        }),
        Object.defineProperty(r, 'operationReducer', {
          enumerable: !0,
          get: function() {
            return k.operationReducer;
          },
        }),
        (r.videoActions = r.playerActions = void 0);
      var f = a(e('vcz5')),
        S = a(e('Edwz')),
        M = a(e('vu4D')),
        T = a(e('X2cd')),
        u = a(e('tPgb')),
        s = a(e('kXlQ')),
        h = a(e('zFvY')),
        d = a(e('LgmY')),
        g = a(e('FcgA')),
        m = a(e('0yDM')),
        C = a(e('4b3c')),
        N = a(e('UXv2')),
        y = a(e('54lq')),
        E = a(e('zHIc')),
        p = a(e('xFFL')),
        o = a(e('q+t5')),
        t = a(e('rsAN')),
        l = a(e('GuGs')),
        n = a(e('AZ0a')),
        i = a(e('DGqw')),
        c = a(e('wXLL')),
        R = a(e('yYHT')),
        b = a(e('Na29')),
        O = a(e('HI9P')),
        I = a(e('GdU9')),
        j = a(e('ruMa')),
        L = a(e('U3K2')),
        V = v(e('we7k'));
      r.playerActions = V;
      var F = v(e('INgg'));
      r.videoActions = F;
      var k = e('ulZL');
    },
    ulZL: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = S),
        (r.operationReducer = r.playerReducer = void 0);
      var a = v(e('56F6')),
        f = v(e('3nJo'));
      function S() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          s = arguments.length > 1 ? arguments[1] : void 0;
        return { player: (0, a.default)(u.player, s), operation: (0, f.default)(u.operation, s) };
      }
      var M = a.default;
      r.playerReducer = M;
      var T = f.default;
      r.operationReducer = T;
    },
    vcz5: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('MVZn')),
        S = a(e('lSNA')),
        M = a(e('QILm')),
        T = a(e('lwsE')),
        u = a(e('W8MJ')),
        s = a(e('a1gu')),
        h = a(e('Nsbk')),
        d = a(e('PJYZ')),
        g = a(e('7W2i')),
        m = a(e('17x9')),
        C = v(e('q1tI')),
        N = a(e('TSYQ')),
        y = a(e('iAfH')),
        E = a(e('vu4D')),
        p = a(e('X2cd')),
        o = a(e('tPgb')),
        t = a(e('Edwz')),
        l = a(e('zFvY')),
        n = a(e('LgmY')),
        i = a(e('FcgA')),
        c = v(e('qdLH')),
        R = e('EVUy'),
        b = e('tJTW'),
        O = a(e('rzyQ')),
        I = {
          children: m.default.any,
          width: m.default.oneOfType([m.default.string, m.default.number]),
          height: m.default.oneOfType([m.default.string, m.default.number]),
          fluid: m.default.bool,
          muted: m.default.bool,
          playsInline: m.default.bool,
          aspectRatio: m.default.string,
          className: m.default.string,
          videoId: m.default.string,
          startTime: m.default.number,
          loop: m.default.bool,
          autoPlay: m.default.bool,
          src: m.default.string,
          poster: m.default.string,
          preload: m.default.oneOf(['auto', 'metadata', 'none']),
          onLoadStart: m.default.func,
          onWaiting: m.default.func,
          onCanPlay: m.default.func,
          onCanPlayThrough: m.default.func,
          onPlaying: m.default.func,
          onEnded: m.default.func,
          onSeeking: m.default.func,
          onSeeked: m.default.func,
          onPlay: m.default.func,
          onPause: m.default.func,
          onProgress: m.default.func,
          onDurationChange: m.default.func,
          onError: m.default.func,
          onSuspend: m.default.func,
          onAbort: m.default.func,
          onEmptied: m.default.func,
          onStalled: m.default.func,
          onLoadedMetadata: m.default.func,
          onLoadedData: m.default.func,
          onTimeUpdate: m.default.func,
          onRateChange: m.default.func,
          onVolumeChange: m.default.func,
          store: m.default.object,
        },
        j = { fluid: !0, muted: !1, playsInline: !1, preload: 'auto', aspectRatio: 'auto' },
        L = (function(V) {
          (0, g.default)(F, V);
          function F(k) {
            var P;
            return (
              (0, T.default)(this, F),
              (P = (0, s.default)(this, (0, h.default)(F).call(this, k))),
              (P.controlsHideTimer = null),
              (P.video = null),
              (P.manager = new y.default(k.store)),
              (P.actions = P.manager.getActions()),
              P.manager.subscribeToPlayerStateChange(P.handleStateChange.bind((0, d.default)(P))),
              (P.getStyle = P.getStyle.bind((0, d.default)(P))),
              (P.handleResize = P.handleResize.bind((0, d.default)(P))),
              (P.getChildren = P.getChildren.bind((0, d.default)(P))),
              (P.handleMouseMove = (0, b.throttle)(P.handleMouseMove.bind((0, d.default)(P)), 250)),
              (P.handleMouseDown = P.handleMouseDown.bind((0, d.default)(P))),
              (P.startControlsTimer = P.startControlsTimer.bind((0, d.default)(P))),
              (P.handleFullScreenChange = P.handleFullScreenChange.bind((0, d.default)(P))),
              (P.handleKeyDown = P.handleKeyDown.bind((0, d.default)(P))),
              (P.handleFocus = P.handleFocus.bind((0, d.default)(P))),
              (P.handleBlur = P.handleBlur.bind((0, d.default)(P))),
              P
            );
          }
          return (
            (0, u.default)(F, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.handleResize(),
                    window.addEventListener('resize', this.handleResize),
                    O.default.addEventListener(this.handleFullScreenChange);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener('resize', this.handleResize),
                    O.default.removeEventListener(this.handleFullScreenChange),
                    this.controlsHideTimer && window.clearTimeout(this.controlsHideTimer);
                },
              },
              {
                key: 'getDefaultChildren',
                value: function(P) {
                  var W = this;
                  return [
                    C.default.createElement(
                      t.default,
                      {
                        ref: function(B) {
                          (W.video = B), (W.manager.video = W.video);
                        },
                        key: 'video',
                        order: 0,
                      },
                      P,
                    ),
                    C.default.createElement(o.default, { key: 'poster-image', order: 1 }),
                    C.default.createElement(p.default, { key: 'loading-spinner', order: 2 }),
                    C.default.createElement(l.default, { key: 'bezel', order: 3 }),
                    C.default.createElement(E.default, { key: 'big-play-button', order: 4 }),
                    C.default.createElement(i.default, { key: 'control-bar', order: 5 }),
                    C.default.createElement(n.default, { key: 'shortcut', order: 99 }),
                  ];
                },
              },
              {
                key: 'getChildren',
                value: function(P) {
                  var W = P.className,
                    U = P.children,
                    B = (0, M.default)(P, ['className', 'children']),
                    G = C.default.Children.toArray(this.props.children).filter(function(Y) {
                      return !(0, b.isVideoChild)(Y);
                    }),
                    J = this.getDefaultChildren(U);
                  return (0, b.mergeAndSortChildren)(J, G, B);
                },
              },
              {
                key: 'setWidthOrHeight',
                value: function(P, W, U) {
                  var B;
                  typeof U == 'string'
                    ? U === 'auto'
                      ? (B = 'auto')
                      : U.match(/\d+%/) && (B = U)
                    : typeof U == 'number' && (B = ''.concat(U, 'px')),
                    Object.assign(P, (0, S.default)({}, W, B));
                },
              },
              {
                key: 'getStyle',
                value: function() {
                  var P = this.props,
                    W = P.fluid,
                    U = P.aspectRatio,
                    B = P.height,
                    G = P.width,
                    J = this.manager.getState(),
                    Y = J.player,
                    z = {},
                    H,
                    $,
                    K;
                  U !== void 0 && U !== 'auto'
                    ? (K = U)
                    : Y.videoWidth
                    ? (K = ''.concat(Y.videoWidth, ':').concat(Y.videoHeight))
                    : (K = '16:9');
                  var Q = K.split(':'),
                    Z = Q[1] / Q[0];
                  return (
                    G !== void 0 ? (H = G) : B !== void 0 ? (H = B / Z) : (H = Y.videoWidth || 400),
                    B !== void 0 ? ($ = B) : ($ = H * Z),
                    W
                      ? (z.paddingTop = ''.concat(Z * 100, '%'))
                      : (this.setWidthOrHeight(z, 'width', H),
                        this.setWidthOrHeight(z, 'height', $)),
                    z
                  );
                },
              },
              {
                key: 'getState',
                value: function() {
                  return this.manager.getState();
                },
              },
              {
                key: 'play',
                value: function() {
                  this.video.play();
                },
              },
              {
                key: 'pause',
                value: function() {
                  this.video.pause();
                },
              },
              {
                key: 'load',
                value: function() {
                  this.video.load();
                },
              },
              {
                key: 'addTextTrack',
                value: function() {
                  var P;
                  (P = this.video).addTextTrack.apply(P, arguments);
                },
              },
              {
                key: 'canPlayType',
                value: function() {
                  var P;
                  (P = this.video).canPlayType.apply(P, arguments);
                },
              },
              {
                key: 'seek',
                value: function(P) {
                  this.video.seek(P);
                },
              },
              {
                key: 'forward',
                value: function(P) {
                  this.video.forward(P);
                },
              },
              {
                key: 'replay',
                value: function(P) {
                  this.video.replay(P);
                },
              },
              {
                key: 'toggleFullscreen',
                value: function() {
                  this.video.toggleFullscreen();
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function(P) {
                  return this.manager.subscribeToPlayerStateChange(P);
                },
              },
              { key: 'handleResize', value: function() {} },
              {
                key: 'handleFullScreenChange',
                value: function(P) {
                  P.target === this.manager.rootElement &&
                    this.actions.handleFullscreenChange(O.default.isFullscreen);
                },
              },
              {
                key: 'handleMouseDown',
                value: function() {
                  this.startControlsTimer();
                },
              },
              {
                key: 'handleMouseMove',
                value: function() {
                  this.startControlsTimer();
                },
              },
              {
                key: 'handleKeyDown',
                value: function() {
                  this.startControlsTimer();
                },
              },
              {
                key: 'startControlsTimer',
                value: function() {
                  var P = this,
                    W = 3e3;
                  C.default.Children.forEach(this.props.children, function(U) {
                    if (!C.default.isValidElement(U) || U.type !== i.default) return;
                    var B = U.props.autoHideTime;
                    typeof B == 'number' && (W = B);
                  }),
                    this.actions.userActivate(!0),
                    clearTimeout(this.controlsHideTimer),
                    (this.controlsHideTimer = setTimeout(function() {
                      P.actions.userActivate(!1);
                    }, W));
                },
              },
              {
                key: 'handleStateChange',
                value: function(P, W) {
                  P.isFullscreen !== W.isFullscreen &&
                    (this.handleResize(), (0, R.focusNode)(this.manager.rootElement)),
                    this.forceUpdate();
                },
              },
              {
                key: 'handleFocus',
                value: function() {
                  this.actions.activate(!0);
                },
              },
              {
                key: 'handleBlur',
                value: function() {
                  this.actions.activate(!1);
                },
              },
              {
                key: 'render',
                value: function() {
                  var P = this,
                    W = this.props.fluid,
                    U = this.manager.getState(),
                    B = U.player,
                    G = B.paused,
                    J = B.hasStarted,
                    Y = B.waiting,
                    z = B.seeking,
                    H = B.isFullscreen,
                    $ = B.userActivity,
                    K = (0, f.default)({}, this.props, {
                      player: B,
                      actions: this.actions,
                      manager: this.manager,
                      store: this.manager.store,
                      video: this.video ? this.video.video : null,
                    }),
                    Q = this.getChildren(K);
                  return C.default.createElement(
                    'div',
                    {
                      className: (0, N.default)(
                        {
                          'video-react-controls-enabled': !0,
                          'video-react-has-started': J,
                          'video-react-paused': G,
                          'video-react-playing': !G,
                          'video-react-waiting': Y,
                          'video-react-seeking': z,
                          'video-react-fluid': W,
                          'video-react-fullscreen': H,
                          'video-react-user-inactive': !$,
                          'video-react-user-active': $,
                          'video-react-workinghover': !c.IS_IOS,
                        },
                        'video-react',
                        this.props.className,
                      ),
                      style: this.getStyle(),
                      ref: function(X) {
                        P.manager.rootElement = X;
                      },
                      role: 'region',
                      onTouchStart: this.handleMouseDown,
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleMouseMove,
                      onMouseMove: this.handleMouseMove,
                      onKeyDown: this.handleKeyDown,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      tabIndex: '-1',
                    },
                    Q,
                  );
                },
              },
              {
                key: 'playbackRate',
                get: function() {
                  return this.video.playbackRate;
                },
                set: function(P) {
                  this.video.playbackRate = P;
                },
              },
              {
                key: 'muted',
                get: function() {
                  return this.video.muted;
                },
                set: function(P) {
                  this.video.muted = P;
                },
              },
              {
                key: 'volume',
                get: function() {
                  return this.video.volume;
                },
                set: function(P) {
                  this.video.volume = P;
                },
              },
              {
                key: 'videoWidth',
                get: function() {
                  return this.video.videoWidth;
                },
              },
              {
                key: 'videoHeight',
                get: function() {
                  return this.video.videoHeight;
                },
              },
            ]),
            F
          );
        })(C.Component);
      (r.default = L),
        (L.contextTypes = { store: m.default.object }),
        (L.propTypes = I),
        (L.defaultProps = j),
        (L.displayName = 'Player');
    },
    vu4D: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = {
          actions: h.default.object,
          player: h.default.object,
          position: h.default.string,
          className: h.default.string,
        },
        C = { position: 'left' },
        N = (function(y) {
          (0, s.default)(E, y);
          function E(p, o) {
            var t;
            return (
              (0, f.default)(this, E),
              (t = (0, M.default)(this, (0, T.default)(E).call(this, p, o))),
              (t.handleClick = t.handleClick.bind((0, u.default)(t))),
              t
            );
          }
          return (
            (0, S.default)(E, [
              { key: 'componentDidMount', value: function() {} },
              {
                key: 'handleClick',
                value: function() {
                  var o = this.props.actions;
                  o.play();
                },
              },
              {
                key: 'render',
                value: function() {
                  var o = this.props,
                    t = o.player,
                    l = o.position;
                  return d.default.createElement(
                    'button',
                    {
                      className: (0, g.default)(
                        'video-react-big-play-button',
                        'video-react-big-play-button-'.concat(l),
                        this.props.className,
                        { 'big-play-button-hide': t.hasStarted || !t.currentSrc },
                      ),
                      type: 'button',
                      'aria-live': 'polite',
                      tabIndex: '0',
                      onClick: this.handleClick,
                    },
                    d.default.createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Play Video',
                    ),
                  );
                },
              },
            ]),
            E
          );
        })(d.Component);
      (r.default = N), (N.propTypes = m), (N.defaultProps = C), (N.displayName = 'BigPlayButton');
    },
    wXLL: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('7W2i')),
        s = v(e('q1tI')),
        h = a(e('DGqw')),
        d = e('tJTW'),
        g = (function(m) {
          (0, u.default)(C, m);
          function C(N, y) {
            var E;
            return (
              (0, f.default)(this, C),
              (E = (0, M.default)(this, (0, T.default)(C).call(this, N, y))),
              (0, d.deprecatedWarning)('PlaybackRate', 'PlaybackRateMenuButton'),
              E
            );
          }
          return (
            (0, S.default)(C, [
              {
                key: 'render',
                value: function() {
                  return s.default.createElement(h.default, this.props);
                },
              },
            ]),
            C
          );
        })(s.Component);
      (r.default = g), (g.displayName = 'PlaybackRate');
    },
    we7k: function(A, r, e) {
      'use strict';
      var v = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.handleFullscreenChange = u),
        (r.activate = s),
        (r.userActivate = h),
        (r.play = d),
        (r.pause = g),
        (r.togglePlay = m),
        (r.seek = C),
        (r.forward = N),
        (r.replay = y),
        (r.changeRate = E),
        (r.changeVolume = p),
        (r.mute = o),
        (r.toggleFullscreen = t),
        (r.USER_ACTIVATE = r.PLAYER_ACTIVATE = r.FULLSCREEN_CHANGE = r.OPERATE = void 0);
      var a = v(e('rzyQ')),
        f = 'video-react/OPERATE';
      r.OPERATE = f;
      var S = 'video-react/FULLSCREEN_CHANGE';
      r.FULLSCREEN_CHANGE = S;
      var M = 'video-react/PLAYER_ACTIVATE';
      r.PLAYER_ACTIVATE = M;
      var T = 'video-react/USER_ACTIVATE';
      r.USER_ACTIVATE = T;
      function u(l) {
        return { type: S, isFullscreen: l };
      }
      function s(l) {
        return { type: M, activity: l };
      }
      function h(l) {
        return { type: T, activity: l };
      }
      function d() {
        var l =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { action: 'play', source: '' };
        return this.video.play(), { type: f, operation: l };
      }
      function g() {
        var l =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { action: 'pause', source: '' };
        return this.video.pause(), { type: f, operation: l };
      }
      function m() {
        var l =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { action: 'toggle-play', source: '' };
        return this.video.togglePlay(), { type: f, operation: l };
      }
      function C(l) {
        var n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { action: 'seek', source: '' };
        return this.video.seek(l), { type: f, operation: n };
      }
      function N(l) {
        var n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { action: 'forward-'.concat(l), source: '' };
        return this.video.forward(l), { type: f, operation: n };
      }
      function y(l) {
        var n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { action: 'replay-'.concat(l), source: '' };
        return this.video.replay(l), { type: f, operation: n };
      }
      function E(l) {
        var n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { action: 'change-rate', source: '' };
        return (this.video.playbackRate = l), { type: f, operation: n };
      }
      function p(l) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { action: 'change-volume', source: '' },
          i = l;
        return (
          l < 0 && (i = 0), l > 1 && (i = 1), (this.video.volume = i), { type: f, operation: n }
        );
      }
      function o(l) {
        var n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { action: l ? 'muted' : 'unmuted', source: '' };
        return (this.video.muted = l), { type: f, operation: n };
      }
      function t(l) {
        return a.default.enabled
          ? (a.default.isFullscreen ? a.default.exit() : a.default.request(this.rootElement),
            { type: f, operation: { action: 'toggle-fullscreen', source: '' } })
          : { type: S, isFullscreen: !l.isFullscreen };
      }
    },
    xFFL: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = a(e('kXlQ')),
        C = a(e('q+t5')),
        N = a(e('rsAN')),
        y = a(e('GuGs')),
        E = e('tJTW'),
        p = {
          player: h.default.object,
          mouseTime: h.default.object,
          actions: h.default.object,
          className: h.default.string,
        },
        o = (function(t) {
          (0, s.default)(l, t);
          function l(n, i) {
            var c;
            return (
              (0, f.default)(this, l),
              (c = (0, M.default)(this, (0, T.default)(l).call(this, n, i))),
              (c.getPercent = c.getPercent.bind((0, u.default)(c))),
              (c.getNewTime = c.getNewTime.bind((0, u.default)(c))),
              (c.stepForward = c.stepForward.bind((0, u.default)(c))),
              (c.stepBack = c.stepBack.bind((0, u.default)(c))),
              (c.handleMouseDown = c.handleMouseDown.bind((0, u.default)(c))),
              (c.handleMouseMove = c.handleMouseMove.bind((0, u.default)(c))),
              (c.handleMouseUp = c.handleMouseUp.bind((0, u.default)(c))),
              c
            );
          }
          return (
            (0, S.default)(l, [
              { key: 'componentDidMount', value: function() {} },
              { key: 'componentDidUpdate', value: function() {} },
              {
                key: 'getPercent',
                value: function() {
                  var i = this.props.player,
                    c = i.currentTime,
                    R = i.seekingTime,
                    b = i.duration,
                    O = R || c,
                    I = O / b;
                  return I >= 1 ? 1 : I;
                },
              },
              {
                key: 'getNewTime',
                value: function(i) {
                  var c = this.props.player.duration,
                    R = this.slider.calculateDistance(i),
                    b = R * c;
                  return b === c ? b - 0.1 : b;
                },
              },
              { key: 'handleMouseDown', value: function() {} },
              {
                key: 'handleMouseUp',
                value: function(i) {
                  var c = this.props.actions,
                    R = this.getNewTime(i);
                  c.seek(R), c.handleEndSeeking(R);
                },
              },
              {
                key: 'handleMouseMove',
                value: function(i) {
                  var c = this.props.actions,
                    R = this.getNewTime(i);
                  c.handleSeekingTime(R);
                },
              },
              {
                key: 'stepForward',
                value: function() {
                  var i = this.props.actions;
                  i.forward(5);
                },
              },
              {
                key: 'stepBack',
                value: function() {
                  var i = this.props.actions;
                  i.replay(5);
                },
              },
              {
                key: 'render',
                value: function() {
                  var i = this,
                    c = this.props,
                    R = c.player,
                    b = R.currentTime,
                    O = R.seekingTime,
                    I = R.duration,
                    j = R.buffered,
                    L = c.mouseTime,
                    V = O || b;
                  return d.default.createElement(
                    m.default,
                    {
                      ref: function(k) {
                        i.slider = k;
                      },
                      label: 'video progress bar',
                      className: (0, g.default)(
                        'video-react-progress-holder',
                        this.props.className,
                      ),
                      valuenow: (this.getPercent() * 100).toFixed(2),
                      valuetext: (0, E.formatTime)(V, I),
                      onMouseDown: this.handleMouseDown,
                      onMouseMove: this.handleMouseMove,
                      onMouseUp: this.handleMouseUp,
                      getPercent: this.getPercent,
                      stepForward: this.stepForward,
                      stepBack: this.stepBack,
                    },
                    d.default.createElement(N.default, {
                      buffered: j,
                      currentTime: V,
                      duration: I,
                    }),
                    d.default.createElement(y.default, { duration: I, mouseTime: L }),
                    d.default.createElement(C.default, { currentTime: V, duration: I }),
                  );
                },
              },
            ]),
            l
          );
        })(d.Component);
      (r.default = o), (o.propTypes = p), (o.displayName = 'SeekBar');
    },
    yYHT: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = a(e('U3K2')),
        C = {
          player: h.default.object,
          actions: h.default.object,
          className: h.default.string,
          offMenuText: h.default.string,
          showOffMenu: h.default.bool,
          kinds: h.default.array,
        },
        N = { offMenuText: 'Off', showOffMenu: !0, kinds: ['captions', 'subtitles'] },
        y = (function(p) {
          (0, s.default)(o, p);
          function o(t, l) {
            var n;
            return (
              (0, f.default)(this, o),
              (n = (0, M.default)(this, (0, T.default)(o).call(this, t, l))),
              (n.getTextTrackItems = n.getTextTrackItems.bind((0, u.default)(n))),
              (n.updateState = n.updateState.bind((0, u.default)(n))),
              (n.handleSelectItem = n.handleSelectItem.bind((0, u.default)(n))),
              (n.state = n.getTextTrackItems()),
              n
            );
          }
          return (
            (0, S.default)(o, [
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.updateState();
                },
              },
              {
                key: 'getTextTrackItems',
                value: function() {
                  var l = this.props,
                    n = l.kinds,
                    i = l.player,
                    c = l.offMenuText,
                    R = l.showOffMenu,
                    b = i.textTracks,
                    O = i.activeTextTrack,
                    I = { items: [], selectedIndex: 0 },
                    j = Array.from(b || []);
                  return (
                    j.length === 0 ||
                      (R && I.items.push({ label: c || 'Off', value: null }),
                      j.forEach(function(L) {
                        if (n.length && !n.includes(L.kind)) return;
                        I.items.push({ label: L.label, value: L.language });
                      }),
                      (I.selectedIndex = I.items.findIndex(function(L) {
                        return O && O.language === L.value;
                      })),
                      I.selectedIndex === -1 && (I.selectedIndex = 0)),
                    I
                  );
                },
              },
              {
                key: 'updateState',
                value: function() {
                  var l = this.getTextTrackItems();
                  (l.selectedIndex !== this.state.selectedIndex ||
                    !this.textTrackItemsAreEqual(l.items, this.state.items)) &&
                    this.setState(l);
                },
              },
              {
                key: 'textTrackItemsAreEqual',
                value: function(l, n) {
                  if (l.length !== n.length) return !1;
                  for (var i = 0; i < l.length; i++)
                    if (!n[i] || l[i].label !== n[i].label || l[i].value !== n[i].value) return !1;
                  return !0;
                },
              },
              {
                key: 'handleSelectItem',
                value: function(l) {
                  var n = this.props,
                    i = n.player,
                    c = n.actions,
                    R = n.showOffMenu,
                    b = i.textTracks;
                  Array.from(b).forEach(function(O, I) {
                    l === (R ? I + 1 : I)
                      ? ((O.mode = 'showing'), c.activateTextTrack(O))
                      : (O.mode = 'hidden');
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var l = this.state,
                    n = l.items,
                    i = l.selectedIndex;
                  return d.default.createElement(
                    m.default,
                    {
                      className: (0, g.default)('video-react-closed-caption', this.props.className),
                      onSelectItem: this.handleSelectItem,
                      items: n,
                      selectedIndex: i,
                    },
                    d.default.createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Closed Caption',
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(d.Component);
      (y.propTypes = C), (y.defaultProps = N), (y.displayName = 'ClosedCaptionButton');
      var E = y;
      r.default = E;
    },
    zFvY: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('lwsE')),
        S = a(e('W8MJ')),
        M = a(e('a1gu')),
        T = a(e('Nsbk')),
        u = a(e('PJYZ')),
        s = a(e('7W2i')),
        h = a(e('17x9')),
        d = v(e('q1tI')),
        g = a(e('TSYQ')),
        m = { manager: h.default.object, className: h.default.string },
        C = (function(N) {
          (0, s.default)(y, N);
          function y(E, p) {
            var o;
            return (
              (0, f.default)(this, y),
              (o = (0, M.default)(this, (0, T.default)(y).call(this, E, p))),
              (o.timer = null),
              E.manager.subscribeToOperationStateChange(
                o.handleStateChange.bind((0, u.default)(o)),
              ),
              (o.state = { hidden: !0, operation: {} }),
              o
            );
          }
          return (
            (0, S.default)(y, [
              {
                key: 'handleStateChange',
                value: function(p, o) {
                  var t = this;
                  p.count !== o.count &&
                    p.operation.source === 'shortcut' &&
                    (this.timer && (clearTimeout(this.timer), (this.timer = null)),
                    this.setState({ hidden: !1, count: p.count, operation: p.operation }),
                    (this.timer = setTimeout(function() {
                      t.setState({ hidden: !0 }), (t.timer = null);
                    }, 500)));
                },
              },
              {
                key: 'render',
                value: function() {
                  if (this.state.operation.source !== 'shortcut') return null;
                  var p = this.state.hidden ? { display: 'none' } : null;
                  return d.default.createElement(
                    'div',
                    {
                      className: (0, g.default)(
                        {
                          'video-react-bezel': !0,
                          'video-react-bezel-animation': this.state.count % 2 === 0,
                          'video-react-bezel-animation-alt': this.state.count % 2 === 1,
                        },
                        this.props.className,
                      ),
                      style: p,
                      role: 'status',
                      'aria-label': this.state.operation.action,
                    },
                    d.default.createElement('div', {
                      className: (0, g.default)(
                        'video-react-bezel-icon',
                        'video-react-bezel-icon-'.concat(this.state.operation.action),
                      ),
                    }),
                  );
                },
              },
            ]),
            y
          );
        })(d.Component);
      (r.default = C), (C.propTypes = m), (C.displayName = 'Bezel');
    },
    zHIc: function(A, r, e) {
      'use strict';
      var v = e('284h'),
        a = e('TqRt');
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = void 0);
      var f = a(e('pVnL')),
        S = a(e('lwsE')),
        M = a(e('W8MJ')),
        T = a(e('a1gu')),
        u = a(e('Nsbk')),
        s = a(e('PJYZ')),
        h = a(e('7W2i')),
        d = a(e('17x9')),
        g = v(e('q1tI')),
        m = a(e('TSYQ')),
        C = v(e('EVUy')),
        N = a(e('xFFL')),
        y = { player: d.default.object, className: d.default.string },
        E = (function(p) {
          (0, h.default)(o, p);
          function o(t, l) {
            var n;
            return (
              (0, S.default)(this, o),
              (n = (0, T.default)(this, (0, u.default)(o).call(this, t, l))),
              (n.state = { mouseTime: { time: null, position: 0 } }),
              (n.handleMouseMoveThrottle = n.handleMouseMove.bind((0, s.default)(n))),
              n
            );
          }
          return (
            (0, M.default)(o, [
              {
                key: 'handleMouseMove',
                value: function(l) {
                  if (!l.pageX) return;
                  var n = this.props.player.duration,
                    i = this.seekBar,
                    c = C.getPointerPosition(i, l).x * n,
                    R = l.pageX - C.findElPosition(i).left;
                  this.setState({ mouseTime: { time: c, position: R } });
                },
              },
              {
                key: 'render',
                value: function() {
                  var l = this,
                    n = this.props.className;
                  return g.default.createElement(
                    'div',
                    {
                      onMouseMove: this.handleMouseMoveThrottle,
                      className: (0, m.default)(
                        'video-react-progress-control video-react-control',
                        n,
                      ),
                    },
                    g.default.createElement(
                      N.default,
                      (0, f.default)(
                        {
                          mouseTime: this.state.mouseTime,
                          ref: function(c) {
                            l.seekBar = c;
                          },
                        },
                        this.props,
                      ),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(g.Component);
      (r.default = E), (E.propTypes = y), (E.displayName = 'ProgressControl');
    },
  },
]);

//# sourceMappingURL=3.js.map
