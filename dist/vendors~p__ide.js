(window.webpackJsonp = window.webpackJsonp || []).push([
  [113],
  {
    '+dQi': function(vt, Le, $) {
      (function(X) {
        X($('VrN/'));
      })(function(X) {
        'use strict';
        X.defineMode('javascript', function(ge, te) {
          var ve = ge.indentUnit,
            Se = te.statementIndent,
            re = te.jsonld,
            A = te.json || re,
            B = te.typescript,
            U = te.wordCharacters || /[\w$\xa1-\uffff]/,
            ne = (function() {
              function f(tt) {
                return { type: tt, style: 'keyword' };
              }
              var g = f('keyword a'),
                b = f('keyword b'),
                y = f('keyword c'),
                S = f('keyword d'),
                ye = f('operator'),
                de = { type: 'atom', style: 'atom' };
              return {
                if: f('if'),
                while: g,
                with: g,
                else: b,
                do: b,
                try: b,
                finally: b,
                return: S,
                break: S,
                continue: S,
                new: f('new'),
                delete: y,
                void: y,
                throw: y,
                debugger: f('debugger'),
                var: f('var'),
                const: f('var'),
                let: f('var'),
                function: f('function'),
                catch: f('catch'),
                for: f('for'),
                switch: f('switch'),
                case: f('case'),
                default: f('default'),
                in: ye,
                typeof: ye,
                instanceof: ye,
                true: de,
                false: de,
                null: de,
                undefined: de,
                NaN: de,
                Infinity: de,
                this: f('this'),
                class: f('class'),
                super: f('atom'),
                yield: y,
                export: f('export'),
                import: f('import'),
                extends: y,
                await: y,
              };
            })(),
            j = /[+\-*&%=<>!?|~^@]/,
            k = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
          function O(f) {
            for (var g = !1, b, y = !1; (b = f.next()) != null; ) {
              if (!g) {
                if (b == '/' && !y) return;
                b == '[' ? (y = !0) : y && b == ']' && (y = !1);
              }
              g = !g && b == '\\';
            }
          }
          var d, x;
          function E(f, g, b) {
            return (d = f), (x = b), g;
          }
          function M(f, g) {
            var b = f.next();
            if (b == '"' || b == "'") return (g.tokenize = oe(b)), g.tokenize(f, g);
            if (b == '.' && f.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return E('number', 'number');
            if (b == '.' && f.match('..')) return E('spread', 'meta');
            if (/[\[\]{}\(\),;\:\.]/.test(b)) return E(b);
            if (b == '=' && f.eat('>')) return E('=>', 'operator');
            if (b == '0' && f.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
              return E('number', 'number');
            if (/\d/.test(b))
              return (
                f.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), E('number', 'number')
              );
            if (b == '/')
              return f.eat('*')
                ? ((g.tokenize = ie), ie(f, g))
                : f.eat('/')
                ? (f.skipToEnd(), E('comment', 'comment'))
                : we(f, g, 1)
                ? (O(f), f.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), E('regexp', 'string-2'))
                : (f.eat('='), E('operator', 'operator', f.current()));
            if (b == '`') return (g.tokenize = ae), ae(f, g);
            if (b == '#' && f.peek() == '!') return f.skipToEnd(), E('meta', 'meta');
            if (b == '#' && f.eatWhile(U)) return E('variable', 'property');
            if (
              (b == '<' && f.match('!--')) ||
              (b == '-' && f.match('->') && !/\S/.test(f.string.slice(0, f.start)))
            )
              return f.skipToEnd(), E('comment', 'comment');
            if (j.test(b))
              return (
                (b != '>' || !g.lexical || g.lexical.type != '>') &&
                  (f.eat('=')
                    ? (b == '!' || b == '=') && f.eat('=')
                    : /[<>*+\-|&?]/.test(b) && (f.eat(b), b == '>' && f.eat(b))),
                b == '?' && f.eat('.') ? E('.') : E('operator', 'operator', f.current())
              );
            if (U.test(b)) {
              f.eatWhile(U);
              var y = f.current();
              if (g.lastType != '.') {
                if (ne.propertyIsEnumerable(y)) {
                  var S = ne[y];
                  return E(S.type, S.style, y);
                }
                if (y == 'async' && f.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1))
                  return E('async', 'keyword', y);
              }
              return E('variable', 'variable', y);
            }
          }
          function oe(f) {
            return function(g, b) {
              var y = !1,
                S;
              if (re && g.peek() == '@' && g.match(k))
                return (b.tokenize = M), E('jsonld-keyword', 'meta');
              for (; (S = g.next()) != null && !(S == f && !y); ) y = !y && S == '\\';
              return y || (b.tokenize = M), E('string', 'string');
            };
          }
          function ie(f, g) {
            for (var b = !1, y; (y = f.next()); ) {
              if (y == '/' && b) {
                g.tokenize = M;
                break;
              }
              b = y == '*';
            }
            return E('comment', 'comment');
          }
          function ae(f, g) {
            for (var b = !1, y; (y = f.next()) != null; ) {
              if (!b && (y == '`' || (y == '$' && f.eat('{')))) {
                g.tokenize = M;
                break;
              }
              b = !b && y == '\\';
            }
            return E('quasi', 'string-2', f.current());
          }
          var Ce = '([{}])';
          function be(f, g) {
            g.fatArrowAt && (g.fatArrowAt = null);
            var b = f.string.indexOf('=>', f.start);
            if (b < 0) return;
            if (B) {
              var y = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(f.string.slice(f.start, b));
              y && (b = y.index);
            }
            for (var S = 0, ye = !1, de = b - 1; de >= 0; --de) {
              var tt = f.string.charAt(de),
                rt = Ce.indexOf(tt);
              if (rt >= 0 && rt < 3) {
                if (!S) {
                  ++de;
                  break;
                }
                if (--S == 0) {
                  tt == '(' && (ye = !0);
                  break;
                }
              } else if (rt >= 3 && rt < 6) ++S;
              else if (U.test(tt)) ye = !0;
              else if (/["'\/`]/.test(tt))
                for (; ; --de) {
                  if (de == 0) return;
                  var Jt = f.string.charAt(de - 1);
                  if (Jt == tt && f.string.charAt(de - 2) != '\\') {
                    de--;
                    break;
                  }
                }
              else if (ye && !S) {
                ++de;
                break;
              }
            }
            ye && !S && (g.fatArrowAt = de);
          }
          var Ke = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            'jsonld-keyword': !0,
          };
          function Fe(f, g, b, y, S, ye) {
            (this.indented = f),
              (this.column = g),
              (this.type = b),
              (this.prev = S),
              (this.info = ye),
              y != null && (this.align = y);
          }
          function Re(f, g) {
            for (var b = f.localVars; b; b = b.next) if (b.name == g) return !0;
            for (var y = f.context; y; y = y.prev)
              for (var b = y.vars; b; b = b.next) if (b.name == g) return !0;
          }
          function ot(f, g, b, y, S) {
            var ye = f.cc;
            for (
              C.state = f,
                C.stream = S,
                C.marked = null,
                C.cc = ye,
                C.style = g,
                f.lexical.hasOwnProperty('align') || (f.lexical.align = !0);
              ;

            ) {
              var de = ye.length ? ye.pop() : A ? fe : he;
              if (de(b, y)) {
                for (; ye.length && ye[ye.length - 1].lex; ) ye.pop()();
                return C.marked ? C.marked : b == 'variable' && Re(f, y) ? 'variable-2' : g;
              }
            }
          }
          var C = { state: null, column: null, marked: null, cc: null };
          function G() {
            for (var f = arguments.length - 1; f >= 0; f--) C.cc.push(arguments[f]);
          }
          function h() {
            return G.apply(null, arguments), !0;
          }
          function N(f, g) {
            for (var b = g; b; b = b.next) if (b.name == f) return !0;
            return !1;
          }
          function D(f) {
            var g = C.state;
            if (((C.marked = 'def'), g.context)) {
              if (g.lexical.info == 'var' && g.context && g.context.block) {
                var b = Q(f, g.context);
                if (b != null) {
                  g.context = b;
                  return;
                }
              } else if (!N(f, g.localVars)) {
                g.localVars = new pt(f, g.localVars);
                return;
              }
            }
            te.globalVars && !N(f, g.globalVars) && (g.globalVars = new pt(f, g.globalVars));
          }
          function Q(f, g) {
            if (g)
              if (g.block) {
                var b = Q(f, g.prev);
                return b ? (b == g.prev ? g : new Ie(b, g.vars, !0)) : null;
              } else return N(f, g.vars) ? g : new Ie(g.prev, new pt(f, g.vars), !1);
            else return null;
          }
          function le(f) {
            return (
              f == 'public' ||
              f == 'private' ||
              f == 'protected' ||
              f == 'abstract' ||
              f == 'readonly'
            );
          }
          function Ie(f, g, b) {
            (this.prev = f), (this.vars = g), (this.block = b);
          }
          function pt(f, g) {
            (this.name = f), (this.next = g);
          }
          var T = new pt('this', new pt('arguments', null));
          function P() {
            (C.state.context = new Ie(C.state.context, C.state.localVars, !1)),
              (C.state.localVars = T);
          }
          function K() {
            (C.state.context = new Ie(C.state.context, C.state.localVars, !0)),
              (C.state.localVars = null);
          }
          function Y() {
            (C.state.localVars = C.state.context.vars), (C.state.context = C.state.context.prev);
          }
          Y.lex = !0;
          function z(f, g) {
            var b = function() {
              var S = C.state,
                ye = S.indented;
              if (S.lexical.type == 'stat') ye = S.lexical.indented;
              else
                for (var de = S.lexical; de && de.type == ')' && de.align; de = de.prev)
                  ye = de.indented;
              S.lexical = new Fe(ye, C.stream.column(), f, null, S.lexical, g);
            };
            return (b.lex = !0), b;
          }
          function R() {
            var f = C.state;
            f.lexical.prev &&
              (f.lexical.type == ')' && (f.indented = f.lexical.indented),
              (f.lexical = f.lexical.prev));
          }
          R.lex = !0;
          function J(f) {
            function g(b) {
              return b == f ? h() : f == ';' || b == '}' || b == ')' || b == ']' ? G() : h(g);
            }
            return g;
          }
          function he(f, g) {
            return f == 'var'
              ? h(z('vardef', g), sr, J(';'), R)
              : f == 'keyword a'
              ? h(z('form'), Be, he, R)
              : f == 'keyword b'
              ? h(z('form'), he, R)
              : f == 'keyword d'
              ? C.stream.match(/^\s*$/, !1)
                ? h()
                : h(z('stat'), $e, J(';'), R)
              : f == 'debugger'
              ? h(J(';'))
              : f == '{'
              ? h(z('}'), K, wr, R, Y)
              : f == ';'
              ? h()
              : f == 'if'
              ? (C.state.lexical.info == 'else' &&
                  C.state.cc[C.state.cc.length - 1] == R &&
                  C.state.cc.pop()(),
                h(z('form'), Be, he, R, Wn))
              : f == 'function'
              ? h(Dt)
              : f == 'for'
              ? h(z('form'), kr, he, R)
              : f == 'class' || (B && g == 'interface')
              ? ((C.marked = 'keyword'), h(z('form', f == 'class' ? f : g), Bt, R))
              : f == 'variable'
              ? B && g == 'declare'
                ? ((C.marked = 'keyword'), h(he))
                : B && (g == 'module' || g == 'enum' || g == 'type') && C.stream.match(/^\s*\w/, !1)
                ? ((C.marked = 'keyword'),
                  g == 'enum'
                    ? h(At)
                    : g == 'type'
                    ? h(Sr, J('operator'), ce, J(';'))
                    : h(z('form'), et, J('{'), z('}'), wr, R, R))
                : B && g == 'namespace'
                ? ((C.marked = 'keyword'), h(z('form'), fe, he, R))
                : B && g == 'abstract'
                ? ((C.marked = 'keyword'), h(he))
                : h(z('stat'), hi)
              : f == 'switch'
              ? h(z('form'), Be, J('{'), z('}', 'switch'), K, wr, R, R, Y)
              : f == 'case'
              ? h(fe, J(':'))
              : f == 'default'
              ? h(J(':'))
              : f == 'catch'
              ? h(z('form'), P, Oe, he, R, Y)
              : f == 'export'
              ? h(z('stat'), Vr, R)
              : f == 'import'
              ? h(z('stat'), di, R)
              : f == 'async'
              ? h(he)
              : g == '@'
              ? h(fe, he)
              : G(z('stat'), fe, J(';'), R);
          }
          function Oe(f) {
            if (f == '(') return h(Ft, J(')'));
          }
          function fe(f, g) {
            return Je(f, g, !1);
          }
          function me(f, g) {
            return Je(f, g, !0);
          }
          function Be(f) {
            return f != '(' ? G() : h(z(')'), $e, J(')'), R);
          }
          function Je(f, g, b) {
            if (C.state.fatArrowAt == C.stream.start) {
              var y = b ? En : Xr;
              if (f == '(') return h(P, z(')'), Ne(Ft, ')'), R, J('=>'), y, Y);
              if (f == 'variable') return G(P, et, J('=>'), y, Y);
            }
            var S = b ? mt : se;
            return Ke.hasOwnProperty(f)
              ? h(S)
              : f == 'function'
              ? h(Dt, S)
              : f == 'class' || (B && g == 'interface')
              ? ((C.marked = 'keyword'), h(z('form'), Qr, R))
              : f == 'keyword c' || f == 'async'
              ? h(b ? me : fe)
              : f == '('
              ? h(z(')'), $e, J(')'), R, S)
              : f == 'operator' || f == 'spread'
              ? h(b ? me : fe)
              : f == '['
              ? h(z(']'), q, R, S)
              : f == '{'
              ? kt(or, '}', null, S)
              : f == 'quasi'
              ? G(yr, S)
              : f == 'new'
              ? h(Yr(b))
              : f == 'import'
              ? h(fe)
              : h();
          }
          function $e(f) {
            return f.match(/[;\}\)\],]/) ? G() : G(fe);
          }
          function se(f, g) {
            return f == ',' ? h($e) : mt(f, g, !1);
          }
          function mt(f, g, b) {
            var y = b == !1 ? se : mt,
              S = b == !1 ? fe : me;
            if (f == '=>') return h(P, b ? En : Xr, Y);
            if (f == 'operator')
              return /\+\+|--/.test(g) || (B && g == '!')
                ? h(y)
                : B && g == '<' && C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                ? h(z('>'), Ne(ce, '>'), R, y)
                : g == '?'
                ? h(fe, J(':'), S)
                : h(S);
            if (f == 'quasi') return G(yr, y);
            if (f == ';') return;
            if (f == '(') return kt(me, ')', 'call', y);
            if (f == '.') return h(qr, y);
            if (f == '[') return h(z(']'), $e, J(']'), R, y);
            if (B && g == 'as') return (C.marked = 'keyword'), h(ce, y);
            if (f == 'regexp')
              return (
                (C.state.lastType = C.marked = 'operator'),
                C.stream.backUp(C.stream.pos - C.stream.start - 1),
                h(S)
              );
          }
          function yr(f, g) {
            return f != 'quasi' ? G() : g.slice(g.length - 2) != '${' ? h(yr) : h(fe, On);
          }
          function On(f) {
            if (f == '}') return (C.marked = 'string-2'), (C.state.tokenize = ae), h(yr);
          }
          function Xr(f) {
            return be(C.stream, C.state), G(f == '{' ? he : fe);
          }
          function En(f) {
            return be(C.stream, C.state), G(f == '{' ? he : me);
          }
          function Yr(f) {
            return function(g) {
              return g == '.'
                ? h(f ? Dn : br)
                : g == 'variable' && B
                ? h(Yt, f ? mt : se)
                : G(f ? me : fe);
            };
          }
          function br(f, g) {
            if (g == 'target') return (C.marked = 'keyword'), h(se);
          }
          function Dn(f, g) {
            if (g == 'target') return (C.marked = 'keyword'), h(mt);
          }
          function hi(f) {
            return f == ':' ? h(R, he) : G(se, J(';'), R);
          }
          function qr(f) {
            if (f == 'variable') return (C.marked = 'property'), h();
          }
          function or(f, g) {
            if (f == 'async') return (C.marked = 'property'), h(or);
            if (f == 'variable' || C.style == 'keyword') {
              if (((C.marked = 'property'), g == 'get' || g == 'set')) return h(ar);
              var b;
              return (
                B &&
                  C.state.fatArrowAt == C.stream.start &&
                  (b = C.stream.match(/^\s*:\s*/, !1)) &&
                  (C.state.fatArrowAt = C.stream.pos + b[0].length),
                h(Ht)
              );
            } else {
              if (f == 'number' || f == 'string')
                return (C.marked = re ? 'property' : C.style + ' property'), h(Ht);
              if (f == 'jsonld-keyword') return h(Ht);
              if (B && le(g)) return (C.marked = 'keyword'), h(or);
              if (f == '[') return h(fe, at, J(']'), Ht);
              if (f == 'spread') return h(me, Ht);
              if (g == '*') return (C.marked = 'keyword'), h(or);
              if (f == ':') return G(Ht);
            }
          }
          function ar(f) {
            return f != 'variable' ? G(Ht) : ((C.marked = 'property'), h(Dt));
          }
          function Ht(f) {
            if (f == ':') return h(me);
            if (f == '(') return G(Dt);
          }
          function Ne(f, g, b) {
            function y(S, ye) {
              if (b ? b.indexOf(S) > -1 : S == ',') {
                var de = C.state.lexical;
                return (
                  de.info == 'call' && (de.pos = (de.pos || 0) + 1),
                  h(function(tt, rt) {
                    return tt == g || rt == g ? G() : G(f);
                  }, y)
                );
              }
              return S == g || ye == g ? h() : b && b.indexOf(';') > -1 ? G(f) : h(J(g));
            }
            return function(S, ye) {
              return S == g || ye == g ? h() : G(f, y);
            };
          }
          function kt(f, g, b) {
            for (var y = 3; y < arguments.length; y++) C.cc.push(arguments[y]);
            return h(z(g, b), Ne(f, g), R);
          }
          function wr(f) {
            return f == '}' ? h() : G(he, wr);
          }
          function at(f, g) {
            if (B) {
              if (f == ':') return h(ce);
              if (g == '?') return h(at);
            }
          }
          function An(f, g) {
            if (B && (f == ':' || g == 'in')) return h(ce);
          }
          function V(f) {
            if (B && f == ':') return C.stream.match(/^\s*\w+\s+is\b/, !1) ? h(fe, Jr, ce) : h(ce);
          }
          function Jr(f, g) {
            if (g == 'is') return (C.marked = 'keyword'), h();
          }
          function ce(f, g) {
            if (g == 'keyof' || g == 'typeof' || g == 'infer')
              return (C.marked = 'keyword'), h(g == 'typeof' ? me : ce);
            if (f == 'variable' || g == 'void') return (C.marked = 'type'), h(ze);
            if (g == '|' || g == '&') return h(ce);
            if (f == 'string' || f == 'number' || f == 'atom') return h(ze);
            if (f == '[') return h(z(']'), Ne(ce, ']', ','), R, ze);
            if (f == '{') return h(z('}'), Ne(Ee, '}', ',;'), R, ze);
            if (f == '(') return h(Ne(xr, ')'), We, ze);
            if (f == '<') return h(Ne(ce, '>'), ce);
          }
          function We(f) {
            if (f == '=>') return h(ce);
          }
          function Ee(f, g) {
            if (f == 'variable' || C.style == 'keyword') return (C.marked = 'property'), h(Ee);
            if (g == '?' || f == 'number' || f == 'string') return h(Ee);
            if (f == ':') return h(ce);
            if (f == '[') return h(J('variable'), An, J(']'), Ee);
            if (f == '(') return G(qt, Ee);
          }
          function xr(f, g) {
            return (f == 'variable' && C.stream.match(/^\s*[?:]/, !1)) || g == '?'
              ? h(xr)
              : f == ':'
              ? h(ce)
              : f == 'spread'
              ? h(xr)
              : G(ce);
          }
          function ze(f, g) {
            if (g == '<') return h(z('>'), Ne(ce, '>'), R, ze);
            if (g == '|' || f == '.' || g == '&') return h(ce);
            if (f == '[') return h(ce, J(']'), ze);
            if (g == 'extends' || g == 'implements') return (C.marked = 'keyword'), h(ce);
            if (g == '?') return h(ce, J(':'), ce);
          }
          function Yt(f, g) {
            if (g == '<') return h(z('>'), Ne(ce, '>'), R, ze);
          }
          function je() {
            return G(ce, Nn);
          }
          function Nn(f, g) {
            if (g == '=') return h(ce);
          }
          function sr(f, g) {
            return g == 'enum' ? ((C.marked = 'keyword'), h(At)) : G(et, at, Ot, Zr);
          }
          function et(f, g) {
            if (B && le(g)) return (C.marked = 'keyword'), h(et);
            if (f == 'variable') return D(g), h();
            if (f == 'spread') return h(et);
            if (f == '[') return kt(In, ']');
            if (f == '{') return kt(Cr, '}');
          }
          function Cr(f, g) {
            return f == 'variable' && !C.stream.match(/^\s*:/, !1)
              ? (D(g), h(Ot))
              : (f == 'variable' && (C.marked = 'property'),
                f == 'spread'
                  ? h(et)
                  : f == '}'
                  ? G()
                  : f == '['
                  ? h(fe, J(']'), J(':'), Cr)
                  : h(J(':'), et, Ot));
          }
          function In() {
            return G(et, Ot);
          }
          function Ot(f, g) {
            if (g == '=') return h(me);
          }
          function Zr(f) {
            if (f == ',') return h(sr);
          }
          function Wn(f, g) {
            if (f == 'keyword b' && g == 'else') return h(z('form', 'else'), he, R);
          }
          function kr(f, g) {
            if (g == 'await') return h(kr);
            if (f == '(') return h(z(')'), ci, R);
          }
          function ci(f) {
            return f == 'var' ? h(sr, Et) : f == 'variable' ? h(Et) : G(Et);
          }
          function Et(f, g) {
            return f == ')'
              ? h()
              : f == ';'
              ? h(Et)
              : g == 'in' || g == 'of'
              ? ((C.marked = 'keyword'), h(fe, Et))
              : G(fe, Et);
          }
          function Dt(f, g) {
            if (g == '*') return (C.marked = 'keyword'), h(Dt);
            if (f == 'variable') return D(g), h(Dt);
            if (f == '(') return h(P, z(')'), Ne(Ft, ')'), R, V, he, Y);
            if (B && g == '<') return h(z('>'), Ne(je, '>'), R, Dt);
          }
          function qt(f, g) {
            if (g == '*') return (C.marked = 'keyword'), h(qt);
            if (f == 'variable') return D(g), h(qt);
            if (f == '(') return h(P, z(')'), Ne(Ft, ')'), R, V, Y);
            if (B && g == '<') return h(z('>'), Ne(je, '>'), R, qt);
          }
          function Sr(f, g) {
            if (f == 'keyword' || f == 'variable') return (C.marked = 'type'), h(Sr);
            if (g == '<') return h(z('>'), Ne(je, '>'), R);
          }
          function Ft(f, g) {
            return (
              g == '@' && h(fe, Ft),
              f == 'spread'
                ? h(Ft)
                : B && le(g)
                ? ((C.marked = 'keyword'), h(Ft))
                : B && f == 'this'
                ? h(at, Ot)
                : G(et, at, Ot)
            );
          }
          function Qr(f, g) {
            return f == 'variable' ? Bt(f, g) : Tr(f, g);
          }
          function Bt(f, g) {
            if (f == 'variable') return D(g), h(Tr);
          }
          function Tr(f, g) {
            if (g == '<') return h(z('>'), Ne(je, '>'), R, Tr);
            if (g == 'extends' || g == 'implements' || (B && f == ','))
              return g == 'implements' && (C.marked = 'keyword'), h(B ? ce : fe, Tr);
            if (f == '{') return h(z('}'), St, R);
          }
          function St(f, g) {
            if (
              f == 'async' ||
              (f == 'variable' &&
                (g == 'static' || g == 'get' || g == 'set' || (B && le(g))) &&
                C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            )
              return (C.marked = 'keyword'), h(St);
            if (f == 'variable' || C.style == 'keyword') return (C.marked = 'property'), h(zt, St);
            if (f == 'number' || f == 'string') return h(zt, St);
            if (f == '[') return h(fe, at, J(']'), zt, St);
            if (g == '*') return (C.marked = 'keyword'), h(St);
            if (B && f == '(') return G(qt, St);
            if (f == ';' || f == ',') return h(St);
            if (f == '}') return h();
            if (g == '@') return h(fe, St);
          }
          function zt(f, g) {
            if (g == '?') return h(zt);
            if (f == ':') return h(ce, Ot);
            if (g == '=') return h(me);
            var b = C.state.lexical.prev,
              y = b && b.info == 'interface';
            return G(y ? qt : Dt);
          }
          function Vr(f, g) {
            return g == '*'
              ? ((C.marked = 'keyword'), h(De, J(';')))
              : g == 'default'
              ? ((C.marked = 'keyword'), h(fe, J(';')))
              : f == '{'
              ? h(Ne(Ut, '}'), De, J(';'))
              : G(he);
          }
          function Ut(f, g) {
            if (g == 'as') return (C.marked = 'keyword'), h(J('variable'));
            if (f == 'variable') return G(me, Ut);
          }
          function di(f) {
            return f == 'string' ? h() : f == '(' ? G(fe) : G(xt, Lr, De);
          }
          function xt(f, g) {
            return f == '{'
              ? kt(xt, '}')
              : (f == 'variable' && D(g), g == '*' && (C.marked = 'keyword'), h(Pn));
          }
          function Lr(f) {
            if (f == ',') return h(xt, Lr);
          }
          function Pn(f, g) {
            if (g == 'as') return (C.marked = 'keyword'), h(xt);
          }
          function De(f, g) {
            if (g == 'from') return (C.marked = 'keyword'), h(fe);
          }
          function q(f) {
            return f == ']' ? h() : G(Ne(me, ']'));
          }
          function At() {
            return G(z('form'), et, J('{'), z('}'), Ne($r, '}'), R, R);
          }
          function $r() {
            return G(et, Ot);
          }
          function Ct(f, g) {
            return (
              f.lastType == 'operator' ||
              f.lastType == ',' ||
              j.test(g.charAt(0)) ||
              /[,.]/.test(g.charAt(0))
            );
          }
          function we(f, g, b) {
            return (
              (g.tokenize == M &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  g.lastType,
                )) ||
              (g.lastType == 'quasi' && /\{\s*$/.test(f.string.slice(0, f.pos - (b || 0))))
            );
          }
          return {
            startState: function(g) {
              var b = {
                tokenize: M,
                lastType: 'sof',
                cc: [],
                lexical: new Fe((g || 0) - ve, 0, 'block', !1),
                localVars: te.localVars,
                context: te.localVars && new Ie(null, null, !1),
                indented: g || 0,
              };
              return (
                te.globalVars && typeof te.globalVars == 'object' && (b.globalVars = te.globalVars),
                b
              );
            },
            token: function(g, b) {
              if (
                (g.sol() &&
                  (b.lexical.hasOwnProperty('align') || (b.lexical.align = !1),
                  (b.indented = g.indentation()),
                  be(g, b)),
                b.tokenize != ie && g.eatSpace())
              )
                return null;
              var y = b.tokenize(g, b);
              return d == 'comment'
                ? y
                : ((b.lastType = d == 'operator' && (x == '++' || x == '--') ? 'incdec' : d),
                  ot(b, y, d, x, g));
            },
            indent: function(g, b) {
              if (g.tokenize == ie) return X.Pass;
              if (g.tokenize != M) return 0;
              var y = b && b.charAt(0),
                S = g.lexical,
                ye;
              if (!/^\s*else\b/.test(b))
                for (var de = g.cc.length - 1; de >= 0; --de) {
                  var tt = g.cc[de];
                  if (tt == R) S = S.prev;
                  else if (tt != Wn) break;
                }
              for (
                ;
                (S.type == 'stat' || S.type == 'form') &&
                (y == '}' ||
                  ((ye = g.cc[g.cc.length - 1]) &&
                    (ye == se || ye == mt) &&
                    !/^[,\.=+\-*:?[\(]/.test(b)));

              )
                S = S.prev;
              Se && S.type == ')' && S.prev.type == 'stat' && (S = S.prev);
              var rt = S.type,
                Jt = y == rt;
              return rt == 'vardef'
                ? S.indented +
                    (g.lastType == 'operator' || g.lastType == ',' ? S.info.length + 1 : 0)
                : rt == 'form' && y == '{'
                ? S.indented
                : rt == 'form'
                ? S.indented + ve
                : rt == 'stat'
                ? S.indented + (Ct(g, b) ? Se || ve : 0)
                : S.info == 'switch' && !Jt && te.doubleIndentSwitch != !1
                ? S.indented + (/^(?:case|default)\b/.test(b) ? ve : 2 * ve)
                : S.align
                ? S.column + (Jt ? 0 : 1)
                : S.indented + (Jt ? 0 : ve);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: A ? null : '/*',
            blockCommentEnd: A ? null : '*/',
            blockCommentContinue: A ? null : ' * ',
            lineComment: A ? null : '//',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
            helperType: A ? 'json' : 'javascript',
            jsonldMode: re,
            jsonMode: A,
            expressionAllowed: we,
            skipExpression: function(g) {
              var b = g.cc[g.cc.length - 1];
              (b == fe || b == me) && g.cc.pop();
            },
          };
        }),
          X.registerHelper('wordChars', 'javascript', /[\w$]/),
          X.defineMIME('text/javascript', 'javascript'),
          X.defineMIME('text/ecmascript', 'javascript'),
          X.defineMIME('application/javascript', 'javascript'),
          X.defineMIME('application/x-javascript', 'javascript'),
          X.defineMIME('application/ecmascript', 'javascript'),
          X.defineMIME('application/json', { name: 'javascript', json: !0 }),
          X.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
          X.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
          X.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
          X.defineMIME('application/typescript', { name: 'javascript', typescript: !0 });
      });
    },
    '1eCo': function(vt, Le, $) {
      (function(X) {
        X($('VrN/'));
      })(function(X) {
        'use strict';
        var ge = {
            autoSelfClosers: {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              frame: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              menuitem: !0,
            },
            implicitlyClosed: {
              dd: !0,
              li: !0,
              optgroup: !0,
              option: !0,
              p: !0,
              rp: !0,
              rt: !0,
              tbody: !0,
              td: !0,
              tfoot: !0,
              th: !0,
              tr: !0,
            },
            contextGrabbers: {
              dd: { dd: !0, dt: !0 },
              dt: { dd: !0, dt: !0 },
              li: { li: !0 },
              option: { option: !0, optgroup: !0 },
              optgroup: { optgroup: !0 },
              p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0,
              },
              rp: { rp: !0, rt: !0 },
              rt: { rp: !0, rt: !0 },
              tbody: { tbody: !0, tfoot: !0 },
              td: { td: !0, th: !0 },
              tfoot: { tbody: !0 },
              th: { td: !0, th: !0 },
              thead: { tbody: !0, tfoot: !0 },
              tr: { tr: !0 },
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0,
          },
          te = {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            allowMissingTagName: !1,
            caseFold: !1,
          };
        X.defineMode('xml', function(ve, Se) {
          var re = ve.indentUnit,
            A = {},
            B = Se.htmlMode ? ge : te;
          for (var U in B) A[U] = B[U];
          for (var U in Se) A[U] = Se[U];
          var ne, j;
          function k(h, N) {
            function D(Ie) {
              return (N.tokenize = Ie), Ie(h, N);
            }
            var Q = h.next();
            if (Q == '<')
              return h.eat('!')
                ? h.eat('[')
                  ? h.match('CDATA[')
                    ? D(x('atom', ']]>'))
                    : null
                  : h.match('--')
                  ? D(x('comment', '-->'))
                  : h.match('DOCTYPE', !0, !0)
                  ? (h.eatWhile(/[\w\._\-]/), D(E(1)))
                  : null
                : h.eat('?')
                ? (h.eatWhile(/[\w\._\-]/), (N.tokenize = x('meta', '?>')), 'meta')
                : ((ne = h.eat('/') ? 'closeTag' : 'openTag'), (N.tokenize = O), 'tag bracket');
            if (Q == '&') {
              var le;
              return (
                h.eat('#')
                  ? h.eat('x')
                    ? (le = h.eatWhile(/[a-fA-F\d]/) && h.eat(';'))
                    : (le = h.eatWhile(/[\d]/) && h.eat(';'))
                  : (le = h.eatWhile(/[\w\.\-:]/) && h.eat(';')),
                le ? 'atom' : 'error'
              );
            } else return h.eatWhile(/[^&<]/), null;
          }
          k.isInText = !0;
          function O(h, N) {
            var D = h.next();
            if (D == '>' || (D == '/' && h.eat('>')))
              return (N.tokenize = k), (ne = D == '>' ? 'endTag' : 'selfcloseTag'), 'tag bracket';
            if (D == '=') return (ne = 'equals'), null;
            if (D == '<') {
              (N.tokenize = k), (N.state = ae), (N.tagName = N.tagStart = null);
              var Q = N.tokenize(h, N);
              return Q ? Q + ' tag error' : 'tag error';
            } else return /[\'\"]/.test(D) ? ((N.tokenize = d(D)), (N.stringStartCol = h.column()), N.tokenize(h, N)) : (h.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
          }
          function d(h) {
            var N = function(Q, le) {
              for (; !Q.eol(); )
                if (Q.next() == h) {
                  le.tokenize = O;
                  break;
                }
              return 'string';
            };
            return (N.isInAttribute = !0), N;
          }
          function x(h, N) {
            return function(D, Q) {
              for (; !D.eol(); ) {
                if (D.match(N)) {
                  Q.tokenize = k;
                  break;
                }
                D.next();
              }
              return h;
            };
          }
          function E(h) {
            return function(N, D) {
              for (var Q; (Q = N.next()) != null; ) {
                if (Q == '<') return (D.tokenize = E(h + 1)), D.tokenize(N, D);
                if (Q == '>')
                  if (h == 1) {
                    D.tokenize = k;
                    break;
                  } else return (D.tokenize = E(h - 1)), D.tokenize(N, D);
              }
              return 'meta';
            };
          }
          function M(h, N, D) {
            (this.prev = h.context),
              (this.tagName = N),
              (this.indent = h.indented),
              (this.startOfLine = D),
              (A.doNotIndent.hasOwnProperty(N) || (h.context && h.context.noIndent)) &&
                (this.noIndent = !0);
          }
          function oe(h) {
            h.context && (h.context = h.context.prev);
          }
          function ie(h, N) {
            for (var D; ; ) {
              if (!h.context) return;
              if (
                ((D = h.context.tagName),
                !A.contextGrabbers.hasOwnProperty(D) || !A.contextGrabbers[D].hasOwnProperty(N))
              )
                return;
              oe(h);
            }
          }
          function ae(h, N, D) {
            return h == 'openTag' ? ((D.tagStart = N.column()), Ce) : h == 'closeTag' ? be : ae;
          }
          function Ce(h, N, D) {
            return h == 'word'
              ? ((D.tagName = N.current()), (j = 'tag'), Re)
              : A.allowMissingTagName && h == 'endTag'
              ? ((j = 'tag bracket'), Re(h, N, D))
              : ((j = 'error'), Ce);
          }
          function be(h, N, D) {
            if (h == 'word') {
              var Q = N.current();
              return (
                D.context &&
                  D.context.tagName != Q &&
                  A.implicitlyClosed.hasOwnProperty(D.context.tagName) &&
                  oe(D),
                (D.context && D.context.tagName == Q) || A.matchClosing === !1
                  ? ((j = 'tag'), Ke)
                  : ((j = 'tag error'), Fe)
              );
            } else return A.allowMissingTagName && h == 'endTag' ? ((j = 'tag bracket'), Ke(h, N, D)) : ((j = 'error'), Fe);
          }
          function Ke(h, N, D) {
            return h != 'endTag' ? ((j = 'error'), Ke) : (oe(D), ae);
          }
          function Fe(h, N, D) {
            return (j = 'error'), Ke(h, N, D);
          }
          function Re(h, N, D) {
            if (h == 'word') return (j = 'attribute'), ot;
            if (h == 'endTag' || h == 'selfcloseTag') {
              var Q = D.tagName,
                le = D.tagStart;
              return (
                (D.tagName = D.tagStart = null),
                h == 'selfcloseTag' || A.autoSelfClosers.hasOwnProperty(Q)
                  ? ie(D, Q)
                  : (ie(D, Q), (D.context = new M(D, Q, le == D.indented))),
                ae
              );
            }
            return (j = 'error'), Re;
          }
          function ot(h, N, D) {
            return h == 'equals' ? C : (A.allowMissing || (j = 'error'), Re(h, N, D));
          }
          function C(h, N, D) {
            return h == 'string'
              ? G
              : h == 'word' && A.allowUnquoted
              ? ((j = 'string'), Re)
              : ((j = 'error'), Re(h, N, D));
          }
          function G(h, N, D) {
            return h == 'string' ? G : Re(h, N, D);
          }
          return {
            startState: function(N) {
              var D = {
                tokenize: k,
                state: ae,
                indented: N || 0,
                tagName: null,
                tagStart: null,
                context: null,
              };
              return N != null && (D.baseIndent = N), D;
            },
            token: function(N, D) {
              if ((!D.tagName && N.sol() && (D.indented = N.indentation()), N.eatSpace()))
                return null;
              ne = null;
              var Q = D.tokenize(N, D);
              return (
                (Q || ne) &&
                  Q != 'comment' &&
                  ((j = null),
                  (D.state = D.state(ne || Q, N, D)),
                  j && (Q = j == 'error' ? Q + ' error' : j)),
                Q
              );
            },
            indent: function(N, D, Q) {
              var le = N.context;
              if (N.tokenize.isInAttribute)
                return N.tagStart == N.indented ? N.stringStartCol + 1 : N.indented + re;
              if (le && le.noIndent) return X.Pass;
              if (N.tokenize != O && N.tokenize != k) return Q ? Q.match(/^(\s*)/)[0].length : 0;
              if (N.tagName)
                return A.multilineTagIndentPastTag !== !1
                  ? N.tagStart + N.tagName.length + 2
                  : N.tagStart + re * (A.multilineTagIndentFactor || 1);
              if (A.alignCDATA && /<!\[CDATA\[/.test(D)) return 0;
              var Ie = D && /^<(\/)?([\w_:\.-]*)/.exec(D);
              if (Ie && Ie[1])
                for (; le; )
                  if (le.tagName == Ie[2]) {
                    le = le.prev;
                    break;
                  } else if (A.implicitlyClosed.hasOwnProperty(le.tagName)) le = le.prev;
                  else break;
              else if (Ie)
                for (; le; ) {
                  var pt = A.contextGrabbers[le.tagName];
                  if (pt && pt.hasOwnProperty(Ie[2])) le = le.prev;
                  else break;
                }
              for (; le && le.prev && !le.startOfLine; ) le = le.prev;
              return le ? le.indent + re : N.baseIndent || 0;
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: '<!--',
            blockCommentEnd: '-->',
            configuration: A.htmlMode ? 'html' : 'xml',
            helperType: A.htmlMode ? 'html' : 'xml',
            skipAttribute: function(N) {
              N.state == C && (N.state = Re);
            },
            xmlCurrentTag: function(N) {
              return N.tagName ? { name: N.tagName, close: N.type == 'closeTag' } : null;
            },
            xmlCurrentContext: function(N) {
              for (var D = [], Q = N.context; Q; Q = Q.prev) Q.tagName && D.push(Q.tagName);
              return D.reverse();
            },
          };
        }),
          X.defineMIME('text/xml', 'xml'),
          X.defineMIME('application/xml', 'xml'),
          X.mimeModes.hasOwnProperty('text/html') ||
            X.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
      });
    },
    '6VBw': function(vt, Le, $) {
      'use strict';
      var X = $('ODXe'),
        ge = $('rePB'),
        te = $('Ff2n'),
        ve = $('q1tI'),
        Se = $.n(ve),
        re = $('TSYQ'),
        A = $.n(re),
        B = $('CJvt'),
        U = $('xc4C'),
        ne = $('Qi1f');
      Object(U.b)('#1890ff');
      var j = ve.forwardRef(function(k, O) {
        var d = k.className,
          x = k.icon,
          E = k.spin,
          M = k.rotate,
          oe = k.tabIndex,
          ie = k.onClick,
          ae = k.twoToneColor,
          Ce = Object(te.a)(k, [
            'className',
            'icon',
            'spin',
            'rotate',
            'tabIndex',
            'onClick',
            'twoToneColor',
          ]),
          be = A()('anticon', Object(ge.a)({}, 'anticon-'.concat(x.name), Boolean(x.name)), d),
          Ke = A()({ 'anticon-spin': !!E || x.name === 'loading' }),
          Fe = oe;
        Fe === void 0 && ie && (Fe = -1);
        var Re = M
            ? { msTransform: 'rotate('.concat(M, 'deg)'), transform: 'rotate('.concat(M, 'deg)') }
            : void 0,
          ot = Object(ne.d)(ae),
          C = Object(X.a)(ot, 2),
          G = C[0],
          h = C[1];
        return ve.createElement(
          'span',
          Object.assign({ role: 'img', 'aria-label': x.name }, Ce, {
            ref: O,
            tabIndex: Fe,
            onClick: ie,
            className: be,
          }),
          ve.createElement(B.a, {
            className: Ke,
            icon: x,
            primaryColor: G,
            secondaryColor: h,
            style: Re,
          }),
        );
      });
      (j.displayName = 'AntdIcon'),
        (j.getTwoToneColor = U.a),
        (j.setTwoToneColor = U.b),
        (Le.a = j);
    },
    CJvt: function(vt, Le, $) {
      'use strict';
      var X = $('Ff2n'),
        ge = $('VTBJ'),
        te = $('Qi1f'),
        ve = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
      function Se(B) {
        var U = B.primaryColor,
          ne = B.secondaryColor;
        (ve.primaryColor = U), (ve.secondaryColor = ne || Object(te.b)(U)), (ve.calculated = !!ne);
      }
      function re() {
        return Object(ge.a)({}, ve);
      }
      var A = function(U) {
        var ne = U.icon,
          j = U.className,
          k = U.onClick,
          O = U.style,
          d = U.primaryColor,
          x = U.secondaryColor,
          E = Object(X.a)(U, [
            'icon',
            'className',
            'onClick',
            'style',
            'primaryColor',
            'secondaryColor',
          ]),
          M = ve;
        if (
          (d && (M = { primaryColor: d, secondaryColor: x || Object(te.b)(d) }),
          Object(te.f)(),
          Object(te.g)(Object(te.c)(ne), 'icon should be icon definiton, but got '.concat(ne)),
          !Object(te.c)(ne))
        )
          return null;
        var oe = ne;
        return (
          oe &&
            typeof oe.icon == 'function' &&
            (oe = Object(ge.a)(
              Object(ge.a)({}, oe),
              {},
              { icon: oe.icon(M.primaryColor, M.secondaryColor) },
            )),
          Object(te.a)(
            oe.icon,
            'svg-'.concat(oe.name),
            Object(ge.a)(
              {
                className: j,
                onClick: k,
                style: O,
                'data-icon': oe.name,
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                'aria-hidden': 'true',
              },
              E,
            ),
          )
        );
      };
      (A.displayName = 'IconReact'),
        (A.getTwoToneColors = re),
        (A.setTwoToneColors = Se),
        (Le.a = A);
    },
    Iab2: function(vt, Le, $) {
      (function(X) {
        var ge, te, ve;
        (function(Se, re) {
          !((te = []),
          (ge = re),
          (ve = typeof ge == 'function' ? ge.apply(Le, te) : ge),
          ve !== void 0 && (vt.exports = ve));
        })(this, function() {
          'use strict';
          function Se(j, k) {
            return (
              typeof k == 'undefined'
                ? (k = { autoBom: !1 })
                : typeof k != 'object' &&
                  (console.warn('Deprecated: Expected third argument to be a object'),
                  (k = { autoBom: !k })),
              k.autoBom &&
              /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                j.type,
              )
                ? new Blob(['﻿', j], { type: j.type })
                : j
            );
          }
          function re(j, k, O) {
            var d = new XMLHttpRequest();
            d.open('GET', j),
              (d.responseType = 'blob'),
              (d.onload = function() {
                ne(d.response, k, O);
              }),
              (d.onerror = function() {
                console.error('could not download file');
              }),
              d.send();
          }
          function A(j) {
            var k = new XMLHttpRequest();
            k.open('HEAD', j, !1);
            try {
              k.send();
            } catch (O) {}
            return 200 <= k.status && 299 >= k.status;
          }
          function B(j) {
            try {
              j.dispatchEvent(new MouseEvent('click'));
            } catch (O) {
              var k = document.createEvent('MouseEvents');
              k.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                j.dispatchEvent(k);
            }
          }
          var U =
              typeof window == 'object' && window.window === window
                ? window
                : typeof self == 'object' && self.self === self
                ? self
                : typeof X == 'object' && X.global === X
                ? X
                : void 0,
            ne =
              U.saveAs ||
              (typeof window != 'object' || window !== U
                ? function() {}
                : 'download' in HTMLAnchorElement.prototype
                ? function(j, k, O) {
                    var d = U.URL || U.webkitURL,
                      x = document.createElement('a');
                    (k = k || j.name || 'download'),
                      (x.download = k),
                      (x.rel = 'noopener'),
                      typeof j == 'string'
                        ? ((x.href = j),
                          x.origin === location.origin
                            ? B(x)
                            : A(x.href)
                            ? re(j, k, O)
                            : B(x, (x.target = '_blank')))
                        : ((x.href = d.createObjectURL(j)),
                          setTimeout(function() {
                            d.revokeObjectURL(x.href);
                          }, 4e4),
                          setTimeout(function() {
                            B(x);
                          }, 0));
                  }
                : 'msSaveOrOpenBlob' in navigator
                ? function(j, k, O) {
                    if (((k = k || j.name || 'download'), typeof j != 'string'))
                      navigator.msSaveOrOpenBlob(Se(j, O), k);
                    else if (A(j)) re(j, k, O);
                    else {
                      var d = document.createElement('a');
                      (d.href = j),
                        (d.target = '_blank'),
                        setTimeout(function() {
                          B(d);
                        });
                    }
                  }
                : function(j, k, O, d) {
                    if (
                      ((d = d || open('', '_blank')),
                      d && (d.document.title = d.document.body.innerText = 'downloading...'),
                      typeof j == 'string')
                    )
                      return re(j, k, O);
                    var x = j.type === 'application/octet-stream',
                      E = /constructor/i.test(U.HTMLElement) || U.safari,
                      M = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((M || (x && E)) && typeof FileReader == 'object') {
                      var oe = new FileReader();
                      (oe.onloadend = function() {
                        var Ce = oe.result;
                        (Ce = M ? Ce : Ce.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                          d ? (d.location.href = Ce) : (location = Ce),
                          (d = null);
                      }),
                        oe.readAsDataURL(j);
                    } else {
                      var ie = U.URL || U.webkitURL,
                        ae = ie.createObjectURL(j);
                      d ? (d.location = ae) : (location.href = ae),
                        (d = null),
                        setTimeout(function() {
                          ie.revokeObjectURL(ae);
                        }, 4e4);
                    }
                  });
          (U.saveAs = ne.saveAs = ne), (vt.exports = ne);
        });
      }.call(this, $('yLpj')));
    },
    Qi1f: function(vt, Le, $) {
      'use strict';
      $.d(Le, 'g', function() {
        return ne;
      }),
        $.d(Le, 'c', function() {
          return j;
        }),
        $.d(Le, 'a', function() {
          return O;
        }),
        $.d(Le, 'b', function() {
          return d;
        }),
        $.d(Le, 'd', function() {
          return x;
        }),
        $.d(Le, 'e', function() {
          return E;
        }),
        $.d(Le, 'f', function() {
          return ie;
        });
      var X = $('VTBJ'),
        ge = $('U8pU'),
        te = $('HXN9'),
        ve = $.n(te),
        Se = $('q1tI'),
        re = $.n(Se),
        A = $('Kwbf'),
        B = $('Gu+u'),
        U = $.n(B);
      function ne(ae, Ce) {
        Object(A.a)(ae, '[@ant-design/icons] '.concat(Ce));
      }
      function j(ae) {
        return (
          Object(ge.a)(ae) === 'object' &&
          typeof ae.name == 'string' &&
          typeof ae.theme == 'string' &&
          (Object(ge.a)(ae.icon) === 'object' || typeof ae.icon == 'function')
        );
      }
      function k() {
        var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.keys(ae).reduce(function(Ce, be) {
          var Ke = ae[be];
          switch (be) {
            case 'class':
              (Ce.className = Ke), delete Ce.class;
              break;
            default:
              Ce[be] = Ke;
          }
          return Ce;
        }, {});
      }
      function O(ae, Ce, be) {
        return be
          ? re.a.createElement(
              ae.tag,
              Object(X.a)(Object(X.a)({ key: Ce }, k(ae.attrs)), be),
              (ae.children || []).map(function(Ke, Fe) {
                return O(
                  Ke,
                  ''
                    .concat(Ce, '-')
                    .concat(ae.tag, '-')
                    .concat(Fe),
                );
              }),
            )
          : re.a.createElement(
              ae.tag,
              Object(X.a)({ key: Ce }, k(ae.attrs)),
              (ae.children || []).map(function(Ke, Fe) {
                return O(
                  Ke,
                  ''
                    .concat(Ce, '-')
                    .concat(ae.tag, '-')
                    .concat(Fe),
                );
              }),
            );
      }
      function d(ae) {
        return Object(te.generate)(ae)[0];
      }
      function x(ae) {
        return ae ? (Array.isArray(ae) ? ae : [ae]) : [];
      }
      var E = {
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false',
        },
        M = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
        oe = !1,
        ie = function() {
          var Ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M;
          Object(Se.useEffect)(function() {
            oe || (Object(B.insertCss)(Ce, { prepend: !0 }), (oe = !0));
          }, []);
        };
    },
    'VrN/': function(vt, Le, $) {
      (function(X, ge) {
        vt.exports = ge();
      })(this, function() {
        'use strict';
        var X = navigator.userAgent,
          ge = navigator.platform,
          te = /gecko\/\d/i.test(X),
          ve = /MSIE \d/.test(X),
          Se = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(X),
          re = /Edge\/(\d+)/.exec(X),
          A = ve || Se || re,
          B = A && (ve ? document.documentMode || 6 : +(re || Se)[1]),
          U = !re && /WebKit\//.test(X),
          ne = U && /Qt\/\d+\.\d+/.test(X),
          j = !re && /Chrome\//.test(X),
          k = /Opera\//.test(X),
          O = /Apple Computer/.test(navigator.vendor),
          d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(X),
          x = /PhantomJS/.test(X),
          E = !re && /AppleWebKit/.test(X) && /Mobile\/\w+/.test(X),
          M = /Android/.test(X),
          oe = E || M || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(X),
          ie = E || /Mac/.test(ge),
          ae = /\bCrOS\b/.test(X),
          Ce = /win/i.test(ge),
          be = k && X.match(/Version\/(\d*\.\d*)/);
        be && (be = Number(be[1])), be && be >= 15 && ((k = !1), (U = !0));
        var Ke = ie && (ne || (k && (be == null || be < 12.11))),
          Fe = te || (A && B >= 9);
        function Re(e) {
          return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        var ot = function(t, r) {
          var n = t.className,
            i = Re(r).exec(n);
          if (i) {
            var o = n.slice(i.index + i[0].length);
            t.className = n.slice(0, i.index) + (o ? i[1] + o : '');
          }
        };
        function C(e) {
          for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
          return e;
        }
        function G(e, t) {
          return C(e).appendChild(t);
        }
        function h(e, t, r, n) {
          var i = document.createElement(e);
          if ((r && (i.className = r), n && (i.style.cssText = n), typeof t == 'string'))
            i.appendChild(document.createTextNode(t));
          else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
          return i;
        }
        function N(e, t, r, n) {
          var i = h(e, t, r, n);
          return i.setAttribute('role', 'presentation'), i;
        }
        var D;
        document.createRange
          ? (D = function(t, r, n, i) {
              var o = document.createRange();
              return o.setEnd(i || t, n), o.setStart(t, r), o;
            })
          : (D = function(t, r, n) {
              var i = document.body.createTextRange();
              try {
                i.moveToElementText(t.parentNode);
              } catch (o) {
                return i;
              }
              return i.collapse(!0), i.moveEnd('character', n), i.moveStart('character', r), i;
            });
        function Q(e, t) {
          if ((t.nodeType == 3 && (t = t.parentNode), e.contains)) return e.contains(t);
          do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0;
          while ((t = t.parentNode));
        }
        function le() {
          var e;
          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
          return e;
        }
        function Ie(e, t) {
          var r = e.className;
          Re(t).test(r) || (e.className += (r ? ' ' : '') + t);
        }
        function pt(e, t) {
          for (var r = e.split(' '), n = 0; n < r.length; n++)
            r[n] && !Re(r[n]).test(t) && (t += ' ' + r[n]);
          return t;
        }
        var T = function(t) {
          t.select();
        };
        E
          ? (T = function(t) {
              (t.selectionStart = 0), (t.selectionEnd = t.value.length);
            })
          : A &&
            (T = function(t) {
              try {
                t.select();
              } catch (r) {}
            });
        function P(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function() {
            return e.apply(null, t);
          };
        }
        function K(e, t, r) {
          t || (t = {});
          for (var n in e)
            e.hasOwnProperty(n) && (r !== !1 || !t.hasOwnProperty(n)) && (t[n] = e[n]);
          return t;
        }
        function Y(e, t, r, n, i) {
          t == null && ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length));
          for (var o = n || 0, a = i || 0; ; ) {
            var s = e.indexOf('	', o);
            if (s < 0 || s >= t) return a + (t - o);
            (a += s - o), (a += r - (a % r)), (o = s + 1);
          }
        }
        var z = function() {
          (this.id = null),
            (this.f = null),
            (this.time = 0),
            (this.handler = P(this.onTimeout, this));
        };
        (z.prototype.onTimeout = function(e) {
          (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }),
          (z.prototype.set = function(e, t) {
            this.f = t;
            var r = +new Date() + e;
            (!this.id || r < this.time) &&
              (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = r));
          });
        function R(e, t) {
          for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
          return -1;
        }
        var J = 50,
          he = {
            toString: function() {
              return 'CodeMirror.Pass';
            },
          },
          Oe = { scroll: !1 },
          fe = { origin: '*mouse' },
          me = { origin: '+move' };
        function Be(e, t, r) {
          for (var n = 0, i = 0; ; ) {
            var o = e.indexOf('	', n);
            o == -1 && (o = e.length);
            var a = o - n;
            if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
            if (((i += o - n), (i += r - (i % r)), (n = o + 1), i >= t)) return n;
          }
        }
        var Je = [''];
        function $e(e) {
          for (; Je.length <= e; ) Je.push(se(Je) + ' ');
          return Je[e];
        }
        function se(e) {
          return e[e.length - 1];
        }
        function mt(e, t) {
          for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
          return r;
        }
        function yr(e, t, r) {
          for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++;
          e.splice(n, 0, t);
        }
        function On() {}
        function Xr(e, t) {
          var r;
          return (
            Object.create ? (r = Object.create(e)) : ((On.prototype = e), (r = new On())),
            t && K(t, r),
            r
          );
        }
        var En = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function Yr(e) {
          return /\w/.test(e) || (e > '' && (e.toUpperCase() != e.toLowerCase() || En.test(e)));
        }
        function br(e, t) {
          return t ? (t.source.indexOf('\\w') > -1 && Yr(e) ? !0 : t.test(e)) : Yr(e);
        }
        function Dn(e) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
          return !0;
        }
        var hi = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function qr(e) {
          return e.charCodeAt(0) >= 768 && hi.test(e);
        }
        function or(e, t, r) {
          for (; (r < 0 ? t > 0 : t < e.length) && qr(e.charAt(t)); ) t += r;
          return t;
        }
        function ar(e, t, r) {
          for (var n = t > r ? -1 : 1; ; ) {
            if (t == r) return t;
            var i = (t + r) / 2,
              o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : r;
            e(o) ? (r = o) : (t = o + n);
          }
        }
        function Ht(e, t, r, n) {
          if (!e) return n(t, r, 'ltr', 0);
          for (var i = !1, o = 0; o < e.length; ++o) {
            var a = e[o];
            ((a.from < r && a.to > t) || (t == r && a.to == t)) &&
              (n(Math.max(a.from, t), Math.min(a.to, r), a.level == 1 ? 'rtl' : 'ltr', o),
              (i = !0));
          }
          i || n(t, r, 'ltr');
        }
        var Ne = null;
        function kt(e, t, r) {
          var n;
          Ne = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && r == 'before' ? (n = i) : (Ne = i)),
              o.from == t && (o.from != o.to && r != 'before' ? (n = i) : (Ne = i));
          }
          return n != null ? n : Ne;
        }
        var wr = (function() {
          var e =
              'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
            t =
              'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
          function r(u) {
            return u <= 247
              ? e.charAt(u)
              : 1424 <= u && u <= 1524
              ? 'R'
              : 1536 <= u && u <= 1785
              ? t.charAt(u - 1536)
              : 1774 <= u && u <= 2220
              ? 'r'
              : 8192 <= u && u <= 8203
              ? 'w'
              : u == 8204
              ? 'b'
              : 'L';
          }
          var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            i = /[stwN]/,
            o = /[LRr]/,
            a = /[Lb1n]/,
            s = /[1n]/;
          function l(u, c, p) {
            (this.level = u), (this.from = c), (this.to = p);
          }
          return function(u, c) {
            var p = c == 'ltr' ? 'L' : 'R';
            if (u.length == 0 || (c == 'ltr' && !n.test(u))) return !1;
            for (var v = u.length, m = [], w = 0; w < v; ++w) m.push(r(u.charCodeAt(w)));
            for (var L = 0, I = p; L < v; ++L) {
              var W = m[L];
              W == 'm' ? (m[L] = I) : (I = W);
            }
            for (var H = 0, F = p; H < v; ++H) {
              var _ = m[H];
              _ == '1' && F == 'r'
                ? (m[H] = 'n')
                : o.test(_) && ((F = _), _ == 'r' && (m[H] = 'R'));
            }
            for (var ee = 1, Z = m[0]; ee < v - 1; ++ee) {
              var pe = m[ee];
              pe == '+' && Z == '1' && m[ee + 1] == '1'
                ? (m[ee] = '1')
                : pe == ',' && Z == m[ee + 1] && (Z == '1' || Z == 'n') && (m[ee] = Z),
                (Z = pe);
            }
            for (var xe = 0; xe < v; ++xe) {
              var Qe = m[xe];
              if (Qe == ',') m[xe] = 'N';
              else if (Qe == '%') {
                var Me = void 0;
                for (Me = xe + 1; Me < v && m[Me] == '%'; ++Me);
                for (
                  var lt = (xe && m[xe - 1] == '!') || (Me < v && m[Me] == '1') ? '1' : 'N',
                    ht = xe;
                  ht < Me;
                  ++ht
                )
                  m[ht] = lt;
                xe = Me - 1;
              }
            }
            for (var Ue = 0, ct = p; Ue < v; ++Ue) {
              var Ve = m[Ue];
              ct == 'L' && Ve == '1' ? (m[Ue] = 'L') : o.test(Ve) && (ct = Ve);
            }
            for (var Ge = 0; Ge < v; ++Ge)
              if (i.test(m[Ge])) {
                var _e = void 0;
                for (_e = Ge + 1; _e < v && i.test(m[_e]); ++_e);
                for (
                  var Pe = (Ge ? m[Ge - 1] : p) == 'L',
                    dt = (_e < v ? m[_e] : p) == 'L',
                    jr = Pe == dt ? (Pe ? 'L' : 'R') : p,
                    ir = Ge;
                  ir < _e;
                  ++ir
                )
                  m[ir] = jr;
                Ge = _e - 1;
              }
            for (var it = [], Rt, qe = 0; qe < v; )
              if (a.test(m[qe])) {
                var no = qe;
                for (++qe; qe < v && a.test(m[qe]); ++qe);
                it.push(new l(0, no, qe));
              } else {
                var Xt = qe,
                  vr = it.length,
                  mr = c == 'rtl' ? 1 : 0;
                for (++qe; qe < v && m[qe] != 'L'; ++qe);
                for (var ut = Xt; ut < qe; )
                  if (s.test(m[ut])) {
                    Xt < ut && (it.splice(vr, 0, new l(1, Xt, ut)), (vr += mr));
                    var Gr = ut;
                    for (++ut; ut < qe && s.test(m[ut]); ++ut);
                    it.splice(vr, 0, new l(2, Gr, ut)), (vr += mr), (Xt = ut);
                  } else ++ut;
                Xt < qe && it.splice(vr, 0, new l(1, Xt, qe));
              }
            return (
              c == 'ltr' &&
                (it[0].level == 1 &&
                  (Rt = u.match(/^\s+/)) &&
                  ((it[0].from = Rt[0].length), it.unshift(new l(0, 0, Rt[0].length))),
                se(it).level == 1 &&
                  (Rt = u.match(/\s+$/)) &&
                  ((se(it).to -= Rt[0].length), it.push(new l(0, v - Rt[0].length, v)))),
              c == 'rtl' ? it.reverse() : it
            );
          };
        })();
        function at(e, t) {
          var r = e.order;
          return r == null && (r = e.order = wr(e.text, t)), r;
        }
        var An = [],
          V = function(t, r, n) {
            if (t.addEventListener) t.addEventListener(r, n, !1);
            else if (t.attachEvent) t.attachEvent('on' + r, n);
            else {
              var i = t._handlers || (t._handlers = {});
              i[r] = (i[r] || An).concat(n);
            }
          };
        function Jr(e, t) {
          return (e._handlers && e._handlers[t]) || An;
        }
        function ce(e, t, r) {
          if (e.removeEventListener) e.removeEventListener(t, r, !1);
          else if (e.detachEvent) e.detachEvent('on' + t, r);
          else {
            var n = e._handlers,
              i = n && n[t];
            if (i) {
              var o = R(i, r);
              o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }
        function We(e, t) {
          var r = Jr(e, t);
          if (!r.length) return;
          for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i)
            r[i].apply(null, n);
        }
        function Ee(e, t, r) {
          return (
            typeof t == 'string' &&
              (t = {
                type: t,
                preventDefault: function() {
                  this.defaultPrevented = !0;
                },
              }),
            We(e, r || t.type, e, t),
            sr(t) || t.codemirrorIgnore
          );
        }
        function xr(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (!t) return;
          for (
            var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0;
            n < t.length;
            ++n
          )
            R(r, t[n]) == -1 && r.push(t[n]);
        }
        function ze(e, t) {
          return Jr(e, t).length > 0;
        }
        function Yt(e) {
          (e.prototype.on = function(t, r) {
            V(this, t, r);
          }),
            (e.prototype.off = function(t, r) {
              ce(this, t, r);
            });
        }
        function je(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function Nn(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function sr(e) {
          return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
        }
        function et(e) {
          je(e), Nn(e);
        }
        function Cr(e) {
          return e.target || e.srcElement;
        }
        function In(e) {
          var t = e.which;
          return (
            t == null &&
              (e.button & 1 ? (t = 1) : e.button & 2 ? (t = 3) : e.button & 4 && (t = 2)),
            ie && e.ctrlKey && t == 1 && (t = 3),
            t
          );
        }
        var Ot = (function() {
            if (A && B < 9) return !1;
            var e = h('div');
            return 'draggable' in e || 'dragDrop' in e;
          })(),
          Zr;
        function Wn(e) {
          if (Zr == null) {
            var t = h('span', '​');
            G(e, h('span', [t, document.createTextNode('x')])),
              e.firstChild.offsetHeight != 0 &&
                (Zr = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(A && B < 8));
          }
          var r = Zr
            ? h('span', '​')
            : h('span', ' ', null, 'display: inline-block; width: 1px; margin-right: -1px');
          return r.setAttribute('cm-text', ''), r;
        }
        var kr;
        function ci(e) {
          if (kr != null) return kr;
          var t = G(e, document.createTextNode('AخA')),
            r = D(t, 0, 1).getBoundingClientRect(),
            n = D(t, 1, 2).getBoundingClientRect();
          return C(e), !r || r.left == r.right ? !1 : (kr = n.right - r.right < 3);
        }
        var Et =
            `

b`.split(/\n/).length != 3
              ? function(e) {
                  for (var t = 0, r = [], n = e.length; t <= n; ) {
                    var i = e.indexOf(
                      `
`,
                      t,
                    );
                    i == -1 && (i = e.length);
                    var o = e.slice(t, e.charAt(i - 1) == '\r' ? i - 1 : i),
                      a = o.indexOf('\r');
                    a != -1 ? (r.push(o.slice(0, a)), (t += a + 1)) : (r.push(o), (t = i + 1));
                  }
                  return r;
                }
              : function(e) {
                  return e.split(/\r\n?|\n/);
                },
          Dt = window.getSelection
            ? function(e) {
                try {
                  return e.selectionStart != e.selectionEnd;
                } catch (t) {
                  return !1;
                }
              }
            : function(e) {
                var t;
                try {
                  t = e.ownerDocument.selection.createRange();
                } catch (r) {}
                return !t || t.parentElement() != e ? !1 : t.compareEndPoints('StartToEnd', t) != 0;
              },
          qt = (function() {
            var e = h('div');
            return 'oncopy' in e
              ? !0
              : (e.setAttribute('oncopy', 'return;'), typeof e.oncopy == 'function');
          })(),
          Sr = null;
        function Ft(e) {
          if (Sr != null) return Sr;
          var t = G(e, h('span', 'x')),
            r = t.getBoundingClientRect(),
            n = D(t, 0, 1).getBoundingClientRect();
          return (Sr = Math.abs(r.left - n.left) > 1);
        }
        var Qr = {},
          Bt = {};
        function Tr(e, t) {
          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            (Qr[e] = t);
        }
        function St(e, t) {
          Bt[e] = t;
        }
        function zt(e) {
          if (typeof e == 'string' && Bt.hasOwnProperty(e)) e = Bt[e];
          else if (e && typeof e.name == 'string' && Bt.hasOwnProperty(e.name)) {
            var t = Bt[e.name];
            typeof t == 'string' && (t = { name: t }), (e = Xr(t, e)), (e.name = t.name);
          } else {
            if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return zt('application/xml');
            if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return zt('application/json');
          }
          return typeof e == 'string' ? { name: e } : e || { name: 'null' };
        }
        function Vr(e, t) {
          t = zt(t);
          var r = Qr[t.name];
          if (!r) return Vr(e, 'text/plain');
          var n = r(e, t);
          if (Ut.hasOwnProperty(t.name)) {
            var i = Ut[t.name];
            for (var o in i) {
              if (!i.hasOwnProperty(o)) continue;
              n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]);
            }
          }
          if (((n.name = t.name), t.helperType && (n.helperType = t.helperType), t.modeProps))
            for (var a in t.modeProps) n[a] = t.modeProps[a];
          return n;
        }
        var Ut = {};
        function di(e, t) {
          var r = Ut.hasOwnProperty(e) ? Ut[e] : (Ut[e] = {});
          K(t, r);
        }
        function xt(e, t) {
          if (t === !0) return t;
          if (e.copyState) return e.copyState(t);
          var r = {};
          for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), (r[n] = i);
          }
          return r;
        }
        function Lr(e, t) {
          for (var r; e.innerMode && !((r = e.innerMode(t)), !r || r.mode == e); )
            (t = r.state), (e = r.mode);
          return r || { mode: e, state: t };
        }
        function Pn(e, t, r) {
          return e.startState ? e.startState(t, r) : !0;
        }
        var De = function(t, r, n) {
          (this.pos = this.start = 0),
            (this.string = t),
            (this.tabSize = r || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
        };
        (De.prototype.eol = function() {
          return this.pos >= this.string.length;
        }),
          (De.prototype.sol = function() {
            return this.pos == this.lineStart;
          }),
          (De.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0;
          }),
          (De.prototype.next = function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++);
          }),
          (De.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos),
              r;
            if ((typeof e == 'string' ? (r = t == e) : (r = t && (e.test ? e.test(t) : e(t))), r))
              return ++this.pos, t;
          }),
          (De.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
          }),
          (De.prototype.eatSpace = function() {
            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
            return this.pos > e;
          }),
          (De.prototype.skipToEnd = function() {
            this.pos = this.string.length;
          }),
          (De.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
          }),
          (De.prototype.backUp = function(e) {
            this.pos -= e;
          }),
          (De.prototype.column = function() {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = Y(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue,
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue -
                (this.lineStart ? Y(this.string, this.lineStart, this.tabSize) : 0)
            );
          }),
          (De.prototype.indentation = function() {
            return (
              Y(this.string, null, this.tabSize) -
              (this.lineStart ? Y(this.string, this.lineStart, this.tabSize) : 0)
            );
          }),
          (De.prototype.match = function(e, t, r) {
            if (typeof e == 'string') {
              var n = function(s) {
                  return r ? s.toLowerCase() : s;
                },
                i = this.string.substr(this.pos, e.length);
              if (n(i) == n(e)) return t !== !1 && (this.pos += e.length), !0;
            } else {
              var o = this.string.slice(this.pos).match(e);
              return o && o.index > 0 ? null : (o && t !== !1 && (this.pos += o[0].length), o);
            }
          }),
          (De.prototype.current = function() {
            return this.string.slice(this.start, this.pos);
          }),
          (De.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
              return t();
            } finally {
              this.lineStart -= e;
            }
          }),
          (De.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
          }),
          (De.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
          });
        function q(e, t) {
          if (((t -= e.first), t < 0 || t >= e.size))
            throw new Error('There is no line ' + (t + e.first) + ' in the document.');
          for (var r = e; !r.lines; )
            for (var n = 0; ; ++n) {
              var i = r.children[n],
                o = i.chunkSize();
              if (t < o) {
                r = i;
                break;
              }
              t -= o;
            }
          return r.lines[t];
        }
        function At(e, t, r) {
          var n = [],
            i = t.line;
          return (
            e.iter(t.line, r.line + 1, function(o) {
              var a = o.text;
              i == r.line && (a = a.slice(0, r.ch)),
                i == t.line && (a = a.slice(t.ch)),
                n.push(a),
                ++i;
            }),
            n
          );
        }
        function $r(e, t, r) {
          var n = [];
          return (
            e.iter(t, r, function(i) {
              n.push(i.text);
            }),
            n
          );
        }
        function Ct(e, t) {
          var r = t - e.height;
          if (r) for (var n = e; n; n = n.parent) n.height += r;
        }
        function we(e) {
          if (e.parent == null) return null;
          for (var t = e.parent, r = R(t.lines, e), n = t.parent; n; t = n, n = n.parent)
            for (var i = 0; !(n.children[i] == t); ++i) r += n.children[i].chunkSize();
          return r + t.first;
        }
        function f(e, t) {
          var r = e.first;
          e: do {
            for (var n = 0; n < e.children.length; ++n) {
              var i = e.children[n],
                o = i.height;
              if (t < o) {
                e = i;
                continue e;
              }
              (t -= o), (r += i.chunkSize());
            }
            return r;
          } while (!e.lines);
          for (var a = 0; a < e.lines.length; ++a) {
            var s = e.lines[a],
              l = s.height;
            if (t < l) break;
            t -= l;
          }
          return r + a;
        }
        function g(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function b(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function y(e, t, r) {
          if ((r === void 0 && (r = null), !(this instanceof y))) return new y(e, t, r);
          (this.line = e), (this.ch = t), (this.sticky = r);
        }
        function S(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function ye(e, t) {
          return e.sticky == t.sticky && S(e, t) == 0;
        }
        function de(e) {
          return y(e.line, e.ch);
        }
        function tt(e, t) {
          return S(e, t) < 0 ? t : e;
        }
        function rt(e, t) {
          return S(e, t) < 0 ? e : t;
        }
        function Jt(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function ue(e, t) {
          if (t.line < e.first) return y(e.first, 0);
          var r = e.first + e.size - 1;
          return t.line > r ? y(r, q(e, r).text.length) : ss(t, q(e, t.line).text.length);
        }
        function ss(e, t) {
          var r = e.ch;
          return r == null || r > t ? y(e.line, t) : r < 0 ? y(e.line, 0) : e;
        }
        function oo(e, t) {
          for (var r = [], n = 0; n < t.length; n++) r[n] = ue(e, t[n]);
          return r;
        }
        var Rn = function(t, r) {
            (this.state = t), (this.lookAhead = r);
          },
          Nt = function(t, r, n, i) {
            (this.state = r),
              (this.doc = t),
              (this.line = n),
              (this.maxLookAhead = i || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        (Nt.prototype.lookAhead = function(e) {
          var t = this.doc.getLine(this.line + e);
          return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
        }),
          (Nt.prototype.baseToken = function(e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
              type: t && t.replace(/( |^)overlay .*/, ''),
              size: this.baseTokens[this.baseTokenPos] - e,
            };
          }),
          (Nt.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (Nt.fromSaved = function(e, t, r) {
            return t instanceof Rn
              ? new Nt(e, xt(e.mode, t.state), r, t.lookAhead)
              : new Nt(e, xt(e.mode, t), r);
          }),
          (Nt.prototype.save = function(e) {
            var t = e !== !1 ? xt(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new Rn(t, this.maxLookAhead) : t;
          });
        function ao(e, t, r, n) {
          var i = [e.state.modeGen],
            o = {};
          co(
            e,
            t.text,
            e.doc.mode,
            r,
            function(u, c) {
              return i.push(u, c);
            },
            o,
            n,
          );
          for (
            var a = r.state,
              s = function(c) {
                r.baseTokens = i;
                var p = e.state.overlays[c],
                  v = 1,
                  m = 0;
                (r.state = !0),
                  co(
                    e,
                    t.text,
                    p.mode,
                    r,
                    function(w, L) {
                      for (var I = v; m < w; ) {
                        var W = i[v];
                        W > w && i.splice(v, 1, w, i[v + 1], W), (v += 2), (m = Math.min(w, W));
                      }
                      if (!L) return;
                      if (p.opaque) i.splice(I, v - I, w, 'overlay ' + L), (v = I + 2);
                      else
                        for (; I < v; I += 2) {
                          var H = i[I + 1];
                          i[I + 1] = (H ? H + ' ' : '') + 'overlay ' + L;
                        }
                    },
                    o,
                  ),
                  (r.state = a),
                  (r.baseTokens = null),
                  (r.baseTokenPos = 1);
              },
              l = 0;
            l < e.state.overlays.length;
            ++l
          )
            s(l);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function so(e, t, r) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = en(e, we(t)),
              i = t.text.length > e.options.maxHighlightLength && xt(e.doc.mode, n.state),
              o = ao(e, t, n);
            i && (n.state = i),
              (t.stateAfter = n.save(!i)),
              (t.styles = o.styles),
              o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
              r === e.doc.highlightFrontier &&
                (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
          }
          return t.styles;
        }
        function en(e, t, r) {
          var n = e.doc,
            i = e.display;
          if (!n.mode.startState) return new Nt(n, !0, t);
          var o = ls(e, t, r),
            a = o > n.first && q(n, o - 1).stateAfter,
            s = a ? Nt.fromSaved(n, a, o) : new Nt(n, Pn(n.mode), o);
          return (
            n.iter(o, t, function(l) {
              pi(e, l.text, s);
              var u = s.line;
              (l.stateAfter =
                u == t - 1 || u % 5 == 0 || (u >= i.viewFrom && u < i.viewTo) ? s.save() : null),
                s.nextLine();
            }),
            r && (n.modeFrontier = s.line),
            s
          );
        }
        function pi(e, t, r, n) {
          var i = e.doc.mode,
            o = new De(t, e.options.tabSize, r);
          for (o.start = o.pos = n || 0, t == '' && lo(i, r.state); !o.eol(); )
            gi(i, o, r.state), (o.start = o.pos);
        }
        function lo(e, t) {
          if (e.blankLine) return e.blankLine(t);
          if (!e.innerMode) return;
          var r = Lr(e, t);
          if (r.mode.blankLine) return r.mode.blankLine(r.state);
        }
        function gi(e, t, r, n) {
          for (var i = 0; i < 10; i++) {
            n && (n[0] = Lr(e, r).mode);
            var o = e.token(t, r);
            if (t.pos > t.start) return o;
          }
          throw new Error('Mode ' + e.name + ' failed to advance stream.');
        }
        var uo = function(t, r, n) {
          (this.start = t.start),
            (this.end = t.pos),
            (this.string = t.current()),
            (this.type = r || null),
            (this.state = n);
        };
        function fo(e, t, r, n) {
          var i = e.doc,
            o = i.mode,
            a;
          t = ue(i, t);
          var s = q(i, t.line),
            l = en(e, t.line, r),
            u = new De(s.text, e.options.tabSize, l),
            c;
          for (n && (c = []); (n || u.pos < t.ch) && !u.eol(); )
            (u.start = u.pos),
              (a = gi(o, u, l.state)),
              n && c.push(new uo(u, a, xt(i.mode, l.state)));
          return n ? c : new uo(u, a, l.state);
        }
        function ho(e, t) {
          if (e)
            for (;;) {
              var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!r) break;
              e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
              var n = r[1] ? 'bgClass' : 'textClass';
              t[n] == null
                ? (t[n] = r[2])
                : new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(t[n]) || (t[n] += ' ' + r[2]);
            }
          return e;
        }
        function co(e, t, r, n, i, o, a) {
          var s = r.flattenSpans;
          s == null && (s = e.options.flattenSpans);
          var l = 0,
            u = null,
            c = new De(t, e.options.tabSize, n),
            p,
            v = e.options.addModeClass && [null];
          for (t == '' && ho(lo(r, n.state), o); !c.eol(); ) {
            if (
              (c.pos > e.options.maxHighlightLength
                ? ((s = !1), a && pi(e, t, n, c.pos), (c.pos = t.length), (p = null))
                : (p = ho(gi(r, c, n.state, v), o)),
              v)
            ) {
              var m = v[0].name;
              m && (p = 'm-' + (p ? m + ' ' + p : m));
            }
            if (!s || u != p) {
              for (; l < c.start; ) (l = Math.min(c.start, l + 5e3)), i(l, u);
              u = p;
            }
            c.start = c.pos;
          }
          for (; l < c.pos; ) {
            var w = Math.min(c.pos, l + 5e3);
            i(w, u), (l = w);
          }
        }
        function ls(e, t, r) {
          for (
            var n, i, o = e.doc, a = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t;
            s > a;
            --s
          ) {
            if (s <= o.first) return o.first;
            var l = q(o, s - 1),
              u = l.stateAfter;
            if (u && (!r || s + (u instanceof Rn ? u.lookAhead : 0) <= o.modeFrontier)) return s;
            var c = Y(l.text, null, e.options.tabSize);
            (i == null || n > c) && ((i = s - 1), (n = c));
          }
          return i;
        }
        function us(e, t) {
          if (((e.modeFrontier = Math.min(e.modeFrontier, t)), e.highlightFrontier < t - 10))
            return;
          for (var r = e.first, n = t - 1; n > r; n--) {
            var i = q(e, n).stateAfter;
            if (i && (!(i instanceof Rn) || n + i.lookAhead < t)) {
              r = n + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, r);
        }
        var po = !1,
          _t = !1;
        function fs() {
          po = !0;
        }
        function hs() {
          _t = !0;
        }
        function Hn(e, t, r) {
          (this.marker = e), (this.from = t), (this.to = r);
        }
        function tn(e, t) {
          if (e)
            for (var r = 0; r < e.length; ++r) {
              var n = e[r];
              if (n.marker == t) return n;
            }
        }
        function cs(e, t) {
          for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
          return r;
        }
        function ds(e, t) {
          (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
        }
        function ps(e, t, r) {
          var n;
          if (e)
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                a = o.marker,
                s = o.from == null || (a.inclusiveLeft ? o.from <= t : o.from < t);
              if (s || (o.from == t && a.type == 'bookmark' && (!r || !o.marker.insertLeft))) {
                var l = o.to == null || (a.inclusiveRight ? o.to >= t : o.to > t);
                (n || (n = [])).push(new Hn(a, o.from, l ? null : o.to));
              }
            }
          return n;
        }
        function gs(e, t, r) {
          var n;
          if (e)
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                a = o.marker,
                s = o.to == null || (a.inclusiveRight ? o.to >= t : o.to > t);
              if (s || (o.from == t && a.type == 'bookmark' && (!r || o.marker.insertLeft))) {
                var l = o.from == null || (a.inclusiveLeft ? o.from <= t : o.from < t);
                (n || (n = [])).push(
                  new Hn(a, l ? null : o.from - t, o.to == null ? null : o.to - t),
                );
              }
            }
          return n;
        }
        function vi(e, t) {
          if (t.full) return null;
          var r = g(e, t.from.line) && q(e, t.from.line).markedSpans,
            n = g(e, t.to.line) && q(e, t.to.line).markedSpans;
          if (!r && !n) return null;
          var i = t.from.ch,
            o = t.to.ch,
            a = S(t.from, t.to) == 0,
            s = ps(r, i, a),
            l = gs(n, o, a),
            u = t.text.length == 1,
            c = se(t.text).length + (u ? i : 0);
          if (s)
            for (var p = 0; p < s.length; ++p) {
              var v = s[p];
              if (v.to == null) {
                var m = tn(l, v.marker);
                m ? u && (v.to = m.to == null ? null : m.to + c) : (v.to = i);
              }
            }
          if (l)
            for (var w = 0; w < l.length; ++w) {
              var L = l[w];
              if ((L.to != null && (L.to += c), L.from == null)) {
                var I = tn(s, L.marker);
                I || ((L.from = c), u && (s || (s = [])).push(L));
              } else (L.from += c), u && (s || (s = [])).push(L);
            }
          s && (s = go(s)), l && l != s && (l = go(l));
          var W = [s];
          if (!u) {
            var H = t.text.length - 2,
              F;
            if (H > 0 && s)
              for (var _ = 0; _ < s.length; ++_)
                s[_].to == null && (F || (F = [])).push(new Hn(s[_].marker, null, null));
            for (var ee = 0; ee < H; ++ee) W.push(F);
            W.push(l);
          }
          return W;
        }
        function go(e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            r.from != null && r.from == r.to && r.marker.clearWhenEmpty !== !1 && e.splice(t--, 1);
          }
          return e.length ? e : null;
        }
        function vs(e, t, r) {
          var n = null;
          if (
            (e.iter(t.line, r.line + 1, function(m) {
              if (m.markedSpans)
                for (var w = 0; w < m.markedSpans.length; ++w) {
                  var L = m.markedSpans[w].marker;
                  L.readOnly && (!n || R(n, L) == -1) && (n || (n = [])).push(L);
                }
            }),
            !n)
          )
            return null;
          for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
            for (var a = n[o], s = a.find(0), l = 0; l < i.length; ++l) {
              var u = i[l];
              if (S(u.to, s.from) < 0 || S(u.from, s.to) > 0) continue;
              var c = [l, 1],
                p = S(u.from, s.from),
                v = S(u.to, s.to);
              (p < 0 || (!a.inclusiveLeft && !p)) && c.push({ from: u.from, to: s.from }),
                (v > 0 || (!a.inclusiveRight && !v)) && c.push({ from: s.to, to: u.to }),
                i.splice.apply(i, c),
                (l += c.length - 3);
            }
          return i;
        }
        function vo(e) {
          var t = e.markedSpans;
          if (!t) return;
          for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
          e.markedSpans = null;
        }
        function mo(e, t) {
          if (!t) return;
          for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
          e.markedSpans = t;
        }
        function Fn(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function Bn(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function mi(e, t) {
          var r = e.lines.length - t.lines.length;
          if (r != 0) return r;
          var n = e.find(),
            i = t.find(),
            o = S(n.from, i.from) || Fn(e) - Fn(t);
          if (o) return -o;
          var a = S(n.to, i.to) || Bn(e) - Bn(t);
          return a || t.id - e.id;
        }
        function yo(e, t) {
          var r = _t && e.markedSpans,
            n;
          if (r)
            for (var i = void 0, o = 0; o < r.length; ++o)
              (i = r[o]),
                i.marker.collapsed &&
                  (t ? i.from : i.to) == null &&
                  (!n || mi(n, i.marker) < 0) &&
                  (n = i.marker);
          return n;
        }
        function bo(e) {
          return yo(e, !0);
        }
        function zn(e) {
          return yo(e, !1);
        }
        function ms(e, t) {
          var r = _t && e.markedSpans,
            n;
          if (r)
            for (var i = 0; i < r.length; ++i) {
              var o = r[i];
              o.marker.collapsed &&
                (o.from == null || o.from < t) &&
                (o.to == null || o.to > t) &&
                (!n || mi(n, o.marker) < 0) &&
                (n = o.marker);
            }
          return n;
        }
        function wo(e, t, r, n, i) {
          var o = q(e, t),
            a = _t && o.markedSpans;
          if (a)
            for (var s = 0; s < a.length; ++s) {
              var l = a[s];
              if (!l.marker.collapsed) continue;
              var u = l.marker.find(0),
                c = S(u.from, r) || Fn(l.marker) - Fn(i),
                p = S(u.to, n) || Bn(l.marker) - Bn(i);
              if ((c >= 0 && p <= 0) || (c <= 0 && p >= 0)) continue;
              if (
                (c <= 0 &&
                  (l.marker.inclusiveRight && i.inclusiveLeft
                    ? S(u.to, r) >= 0
                    : S(u.to, r) > 0)) ||
                (c >= 0 &&
                  (l.marker.inclusiveRight && i.inclusiveLeft
                    ? S(u.from, n) <= 0
                    : S(u.from, n) < 0))
              )
                return !0;
            }
        }
        function It(e) {
          for (var t; (t = bo(e)); ) e = t.find(-1, !0).line;
          return e;
        }
        function ys(e) {
          for (var t; (t = zn(e)); ) e = t.find(1, !0).line;
          return e;
        }
        function bs(e) {
          for (var t, r; (t = zn(e)); ) (e = t.find(1, !0).line), (r || (r = [])).push(e);
          return r;
        }
        function yi(e, t) {
          var r = q(e, t),
            n = It(r);
          return r == n ? t : we(n);
        }
        function xo(e, t) {
          if (t > e.lastLine()) return t;
          var r = q(e, t),
            n;
          if (!Zt(e, r)) return t;
          for (; (n = zn(r)); ) r = n.find(1, !0).line;
          return we(r) + 1;
        }
        function Zt(e, t) {
          var r = _t && t.markedSpans;
          if (r)
            for (var n = void 0, i = 0; i < r.length; ++i) {
              if (((n = r[i]), !n.marker.collapsed)) continue;
              if (n.from == null) return !0;
              if (n.marker.widgetNode) continue;
              if (n.from == 0 && n.marker.inclusiveLeft && bi(e, t, n)) return !0;
            }
        }
        function bi(e, t, r) {
          if (r.to == null) {
            var n = r.marker.find(1, !0);
            return bi(e, n.line, tn(n.line.markedSpans, r.marker));
          }
          if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
              ((i = t.markedSpans[o]),
              i.marker.collapsed &&
                !i.marker.widgetNode &&
                i.from == r.to &&
                (i.to == null || i.to != r.from) &&
                (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
                bi(e, t, i))
            )
              return !0;
        }
        function Kt(e) {
          e = It(e);
          for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
            var i = r.lines[n];
            if (i == e) break;
            t += i.height;
          }
          for (var o = r.parent; o; r = o, o = r.parent)
            for (var a = 0; a < o.children.length; ++a) {
              var s = o.children[a];
              if (s == r) break;
              t += s.height;
            }
          return t;
        }
        function Un(e) {
          if (e.height == 0) return 0;
          for (var t = e.text.length, r, n = e; (r = bo(n)); ) {
            var i = r.find(0, !0);
            (n = i.from.line), (t += i.from.ch - i.to.ch);
          }
          for (n = e; (r = zn(n)); ) {
            var o = r.find(0, !0);
            (t -= n.text.length - o.from.ch), (n = o.to.line), (t += n.text.length - o.to.ch);
          }
          return t;
        }
        function wi(e) {
          var t = e.display,
            r = e.doc;
          (t.maxLine = q(r, r.first)),
            (t.maxLineLength = Un(t.maxLine)),
            (t.maxLineChanged = !0),
            r.iter(function(n) {
              var i = Un(n);
              i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = n));
            });
        }
        var Mr = function(t, r, n) {
          (this.text = t), mo(this, r), (this.height = n ? n(this) : 1);
        };
        (Mr.prototype.lineNo = function() {
          return we(this);
        }),
          Yt(Mr);
        function ws(e, t, r, n) {
          (e.text = t),
            e.stateAfter && (e.stateAfter = null),
            e.styles && (e.styles = null),
            e.order != null && (e.order = null),
            vo(e),
            mo(e, r);
          var i = n ? n(e) : 1;
          i != e.height && Ct(e, i);
        }
        function xs(e) {
          (e.parent = null), vo(e);
        }
        var Cs = {},
          ks = {};
        function Co(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var r = t.addModeClass ? ks : Cs;
          return r[e] || (r[e] = e.replace(/\S+/g, 'cm-$&'));
        }
        function ko(e, t) {
          var r = N('span', null, null, U ? 'padding-right: .1px' : null),
            n = {
              pre: N('pre', [r], 'CodeMirror-line'),
              content: r,
              col: 0,
              pos: 0,
              cm: e,
              trailingSpace: !1,
              splitSpaces: e.getOption('lineWrapping'),
            };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
              a = void 0;
            (n.pos = 0),
              (n.addToken = Ts),
              ci(e.display.measure) &&
                (a = at(o, e.doc.direction)) &&
                (n.addToken = Ms(n.addToken, a)),
              (n.map = []);
            var s = t != e.display.externalMeasured && we(o);
            Os(o, n, so(e, o, s)),
              o.styleClasses &&
                (o.styleClasses.bgClass &&
                  (n.bgClass = pt(o.styleClasses.bgClass, n.bgClass || '')),
                o.styleClasses.textClass &&
                  (n.textClass = pt(o.styleClasses.textClass, n.textClass || ''))),
              n.map.length == 0 && n.map.push(0, 0, n.content.appendChild(Wn(e.display.measure))),
              i == 0
                ? ((t.measure.map = n.map), (t.measure.cache = {}))
                : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                  (t.measure.caches || (t.measure.caches = [])).push({}));
          }
          if (U) {
            var l = n.content.lastChild;
            (/\bcm-tab\b/.test(l.className) || (l.querySelector && l.querySelector('.cm-tab'))) &&
              (n.content.className = 'cm-tab-wrap-hack');
          }
          return (
            We(e, 'renderLine', e, t.line, n.pre),
            n.pre.className && (n.textClass = pt(n.pre.className, n.textClass || '')),
            n
          );
        }
        function Ss(e) {
          var t = h('span', '•', 'cm-invalidchar');
          return (
            (t.title = '\\u' + e.charCodeAt(0).toString(16)),
            t.setAttribute('aria-label', t.title),
            t
          );
        }
        function Ts(e, t, r, n, i, o, a) {
          if (!t) return;
          var s = e.splitSpaces ? Ls(t, e.trailingSpace) : t,
            l = e.cm.state.specialChars,
            u = !1,
            c;
          if (!l.test(t))
            (e.col += t.length),
              (c = document.createTextNode(s)),
              e.map.push(e.pos, e.pos + t.length, c),
              A && B < 9 && (u = !0),
              (e.pos += t.length);
          else {
            c = document.createDocumentFragment();
            for (var p = 0; ; ) {
              l.lastIndex = p;
              var v = l.exec(t),
                m = v ? v.index - p : t.length - p;
              if (m) {
                var w = document.createTextNode(s.slice(p, p + m));
                A && B < 9 ? c.appendChild(h('span', [w])) : c.appendChild(w),
                  e.map.push(e.pos, e.pos + m, w),
                  (e.col += m),
                  (e.pos += m);
              }
              if (!v) break;
              p += m + 1;
              var L = void 0;
              if (v[0] == '	') {
                var I = e.cm.options.tabSize,
                  W = I - (e.col % I);
                (L = c.appendChild(h('span', $e(W), 'cm-tab'))),
                  L.setAttribute('role', 'presentation'),
                  L.setAttribute('cm-text', '	'),
                  (e.col += W);
              } else
                v[0] == '\r' ||
                v[0] ==
                  `
`
                  ? ((L = c.appendChild(h('span', v[0] == '\r' ? '␍' : '␤', 'cm-invalidchar'))),
                    L.setAttribute('cm-text', v[0]),
                    (e.col += 1))
                  : ((L = e.cm.options.specialCharPlaceholder(v[0])),
                    L.setAttribute('cm-text', v[0]),
                    A && B < 9 ? c.appendChild(h('span', [L])) : c.appendChild(L),
                    (e.col += 1));
              e.map.push(e.pos, e.pos + 1, L), e.pos++;
            }
          }
          if (((e.trailingSpace = s.charCodeAt(t.length - 1) == 32), r || n || i || u || o || a)) {
            var H = r || '';
            n && (H += n), i && (H += i);
            var F = h('span', [c], H, o);
            if (a)
              for (var _ in a)
                a.hasOwnProperty(_) && _ != 'style' && _ != 'class' && F.setAttribute(_, a[_]);
            return e.content.appendChild(F);
          }
          e.content.appendChild(c);
        }
        function Ls(e, t) {
          if (e.length > 1 && !/  /.test(e)) return e;
          for (var r = t, n = '', i = 0; i < e.length; i++) {
            var o = e.charAt(i);
            o == ' ' && r && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (o = ' '),
              (n += o),
              (r = o == ' ');
          }
          return n;
        }
        function Ms(e, t) {
          return function(r, n, i, o, a, s, l) {
            i = i ? i + ' cm-force-border' : 'cm-force-border';
            for (var u = r.pos, c = u + n.length; ; ) {
              for (
                var p = void 0, v = 0;
                v < t.length && !((p = t[v]), p.to > u && p.from <= u);
                v++
              );
              if (p.to >= c) return e(r, n, i, o, a, s, l);
              e(r, n.slice(0, p.to - u), i, o, null, s, l),
                (o = null),
                (n = n.slice(p.to - u)),
                (u = p.to);
            }
          };
        }
        function So(e, t, r, n) {
          var i = !n && r.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
            !n &&
              e.cm.display.input.needsContentAttribute &&
              (i || (i = e.content.appendChild(document.createElement('span'))),
              i.setAttribute('cm-marker', r.id)),
            i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
        }
        function Os(e, t, r) {
          var n = e.markedSpans,
            i = e.text,
            o = 0;
          if (!n) {
            for (var a = 1; a < r.length; a += 2)
              t.addToken(t, i.slice(o, (o = r[a])), Co(r[a + 1], t.cm.options));
            return;
          }
          for (var s = i.length, l = 0, u = 1, c = '', p, v, m = 0, w, L, I, W, H; ; ) {
            if (m == l) {
              (w = L = I = v = ''), (H = null), (W = null), (m = Infinity);
              for (var F = [], _ = void 0, ee = 0; ee < n.length; ++ee) {
                var Z = n[ee],
                  pe = Z.marker;
                if (pe.type == 'bookmark' && Z.from == l && pe.widgetNode) F.push(pe);
                else if (
                  Z.from <= l &&
                  (Z.to == null || Z.to > l || (pe.collapsed && Z.to == l && Z.from == l))
                ) {
                  if (
                    (Z.to != null && Z.to != l && m > Z.to && ((m = Z.to), (L = '')),
                    pe.className && (w += ' ' + pe.className),
                    pe.css && (v = (v ? v + ';' : '') + pe.css),
                    pe.startStyle && Z.from == l && (I += ' ' + pe.startStyle),
                    pe.endStyle && Z.to == m && (_ || (_ = [])).push(pe.endStyle, Z.to),
                    pe.title && ((H || (H = {})).title = pe.title),
                    pe.attributes)
                  )
                    for (var xe in pe.attributes) (H || (H = {}))[xe] = pe.attributes[xe];
                  pe.collapsed && (!W || mi(W.marker, pe) < 0) && (W = Z);
                } else Z.from > l && m > Z.from && (m = Z.from);
              }
              if (_) for (var Qe = 0; Qe < _.length; Qe += 2) _[Qe + 1] == m && (L += ' ' + _[Qe]);
              if (!W || W.from == l) for (var Me = 0; Me < F.length; ++Me) So(t, 0, F[Me]);
              if (W && (W.from || 0) == l) {
                if (
                  (So(t, (W.to == null ? s + 1 : W.to) - l, W.marker, W.from == null), W.to == null)
                )
                  return;
                W.to == l && (W = !1);
              }
            }
            if (l >= s) break;
            for (var lt = Math.min(s, m); ; ) {
              if (c) {
                var ht = l + c.length;
                if (!W) {
                  var Ue = ht > lt ? c.slice(0, lt - l) : c;
                  t.addToken(t, Ue, p ? p + w : w, I, l + Ue.length == m ? L : '', v, H);
                }
                if (ht >= lt) {
                  (c = c.slice(lt - l)), (l = lt);
                  break;
                }
                (l = ht), (I = '');
              }
              (c = i.slice(o, (o = r[u++]))), (p = Co(r[u++], t.cm.options));
            }
          }
        }
        function To(e, t, r) {
          (this.line = t),
            (this.rest = bs(t)),
            (this.size = this.rest ? we(se(this.rest)) - r + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = Zt(e, t));
        }
        function _n(e, t, r) {
          for (var n = [], i, o = t; o < r; o = i) {
            var a = new To(e.doc, q(e.doc, o), o);
            (i = o + a.size), n.push(a);
          }
          return n;
        }
        var Or = null;
        function Es(e) {
          Or ? Or.ops.push(e) : (e.ownsGroup = Or = { ops: [e], delayedCallbacks: [] });
        }
        function Ds(e) {
          var t = e.delayedCallbacks,
            r = 0;
          do {
            for (; r < t.length; r++) t[r].call(null);
            for (var n = 0; n < e.ops.length; n++) {
              var i = e.ops[n];
              if (i.cursorActivityHandlers)
                for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                  i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
            }
          } while (r < t.length);
        }
        function As(e, t) {
          var r = e.ownsGroup;
          if (!r) return;
          try {
            Ds(r);
          } finally {
            (Or = null), t(r);
          }
        }
        var rn = null;
        function Ze(e, t) {
          var r = Jr(e, t);
          if (!r.length) return;
          var n = Array.prototype.slice.call(arguments, 2),
            i;
          Or ? (i = Or.delayedCallbacks) : rn ? (i = rn) : ((i = rn = []), setTimeout(Ns, 0));
          for (
            var o = function(l) {
                i.push(function() {
                  return r[l].apply(null, n);
                });
              },
              a = 0;
            a < r.length;
            ++a
          )
            o(a);
        }
        function Ns() {
          var e = rn;
          rn = null;
          for (var t = 0; t < e.length; ++t) e[t]();
        }
        function Lo(e, t, r, n) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            o == 'text'
              ? Ws(e, t)
              : o == 'gutter'
              ? Oo(e, t, r, n)
              : o == 'class'
              ? xi(e, t)
              : o == 'widget' && Ps(e, t, n);
          }
          t.changes = null;
        }
        function nn(e) {
          return (
            e.node == e.text &&
              ((e.node = h('div', null, null, 'position: relative')),
              e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
              e.node.appendChild(e.text),
              A && B < 8 && (e.node.style.zIndex = 2)),
            e.node
          );
        }
        function Is(e, t) {
          var r = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
          if ((r && (r += ' CodeMirror-linebackground'), t.background))
            r
              ? (t.background.className = r)
              : (t.background.parentNode.removeChild(t.background), (t.background = null));
          else if (r) {
            var n = nn(t);
            (t.background = n.insertBefore(h('div', null, r), n.firstChild)),
              e.display.input.setUneditable(t.background);
          }
        }
        function Mo(e, t) {
          var r = e.display.externalMeasured;
          return r && r.line == t.line
            ? ((e.display.externalMeasured = null), (t.measure = r.measure), r.built)
            : ko(e, t);
        }
        function Ws(e, t) {
          var r = t.text.className,
            n = Mo(e, t);
          t.text == t.node && (t.node = n.pre),
            t.text.parentNode.replaceChild(n.pre, t.text),
            (t.text = n.pre),
            n.bgClass != t.bgClass || n.textClass != t.textClass
              ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), xi(e, t))
              : r && (t.text.className = r);
        }
        function xi(e, t) {
          Is(e, t),
            t.line.wrapClass
              ? (nn(t).className = t.line.wrapClass)
              : t.node != t.text && (t.node.className = '');
          var r = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass;
          t.text.className = r || '';
        }
        function Oo(e, t, r, n) {
          if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground &&
              (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
            t.line.gutterClass)
          ) {
            var i = nn(t);
            (t.gutterBackground = h(
              'div',
              null,
              'CodeMirror-gutter-background ' + t.line.gutterClass,
              'left: ' +
                (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                'px; width: ' +
                n.gutterTotalWidth +
                'px',
            )),
              e.display.input.setUneditable(t.gutterBackground),
              i.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var a = nn(t),
              s = (t.gutter = h(
                'div',
                null,
                'CodeMirror-gutter-wrapper',
                'left: ' + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + 'px',
              ));
            if (
              (e.display.input.setUneditable(s),
              a.insertBefore(s, t.text),
              t.line.gutterClass && (s.className += ' ' + t.line.gutterClass),
              e.options.lineNumbers &&
                (!o || !o['CodeMirror-linenumbers']) &&
                (t.lineNumber = s.appendChild(
                  h(
                    'div',
                    b(e.options, r),
                    'CodeMirror-linenumber CodeMirror-gutter-elt',
                    'left: ' +
                      n.gutterLeft['CodeMirror-linenumbers'] +
                      'px; width: ' +
                      e.display.lineNumInnerWidth +
                      'px',
                  ),
                )),
              o)
            )
              for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
                var u = e.display.gutterSpecs[l].className,
                  c = o.hasOwnProperty(u) && o[u];
                c &&
                  s.appendChild(
                    h(
                      'div',
                      [c],
                      'CodeMirror-gutter-elt',
                      'left: ' + n.gutterLeft[u] + 'px; width: ' + n.gutterWidth[u] + 'px',
                    ),
                  );
              }
          }
        }
        function Ps(e, t, r) {
          t.alignable && (t.alignable = null);
          for (var n = Re('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0; i; i = o)
            (o = i.nextSibling), n.test(i.className) && t.node.removeChild(i);
          Eo(e, t, r);
        }
        function Rs(e, t, r, n) {
          var i = Mo(e, t);
          return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            xi(e, t),
            Oo(e, t, r, n),
            Eo(e, t, n),
            t.node
          );
        }
        function Eo(e, t, r) {
          if ((Do(e, t.line, t, r, !0), t.rest))
            for (var n = 0; n < t.rest.length; n++) Do(e, t.rest[n], t, r, !1);
        }
        function Do(e, t, r, n, i) {
          if (!t.widgets) return;
          for (var o = nn(r), a = 0, s = t.widgets; a < s.length; ++a) {
            var l = s[a],
              u = h(
                'div',
                [l.node],
                'CodeMirror-linewidget' + (l.className ? ' ' + l.className : ''),
              );
            l.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
              Hs(l, u, r, n),
              e.display.input.setUneditable(u),
              i && l.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u),
              Ze(l, 'redraw');
          }
        }
        function Hs(e, t, r, n) {
          if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            (t.style.left = n.fixedPos + 'px'),
              e.coverGutter ||
                ((i -= n.gutterTotalWidth), (t.style.paddingLeft = n.gutterTotalWidth + 'px')),
              (t.style.width = i + 'px');
          }
          e.coverGutter &&
            ((t.style.zIndex = 5),
            (t.style.position = 'relative'),
            e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + 'px'));
        }
        function on(e) {
          if (e.height != null) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;
          if (!Q(document.body, e.node)) {
            var r = 'position: relative;';
            e.coverGutter && (r += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
              e.noHScroll && (r += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
              G(t.display.measure, h('div', [e.node], null, r));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function jt(e, t) {
          for (var r = Cr(t); r != e.wrapper; r = r.parentNode)
            if (
              !r ||
              (r.nodeType == 1 && r.getAttribute('cm-ignore-events') == 'true') ||
              (r.parentNode == e.sizer && r != e.mover)
            )
              return !0;
        }
        function Kn(e) {
          return e.lineSpace.offsetTop;
        }
        function Ci(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function Ao(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = G(e.measure, h('pre', 'x', 'CodeMirror-line-like')),
            r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
            n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) };
          return !isNaN(n.left) && !isNaN(n.right) && (e.cachedPaddingH = n), n;
        }
        function Wt(e) {
          return J - e.display.nativeBarWidth;
        }
        function lr(e) {
          return e.display.scroller.clientWidth - Wt(e) - e.display.barWidth;
        }
        function ki(e) {
          return e.display.scroller.clientHeight - Wt(e) - e.display.barHeight;
        }
        function Fs(e, t, r) {
          var n = e.options.lineWrapping,
            i = n && lr(e);
          if (!t.measure.heights || (n && t.measure.width != i)) {
            var o = (t.measure.heights = []);
            if (n) {
              t.measure.width = i;
              for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                var l = a[s],
                  u = a[s + 1];
                Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - r.top);
              }
            }
            o.push(r.bottom - r.top);
          }
        }
        function No(e, t, r) {
          if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
          for (var n = 0; n < e.rest.length; n++)
            if (e.rest[n] == t) return { map: e.measure.maps[n], cache: e.measure.caches[n] };
          for (var i = 0; i < e.rest.length; i++)
            if (we(e.rest[i]) > r)
              return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
        }
        function Bs(e, t) {
          t = It(t);
          var r = we(t),
            n = (e.display.externalMeasured = new To(e.doc, t, r));
          n.lineN = r;
          var i = (n.built = ko(e, n));
          return (n.text = i.pre), G(e.display.lineMeasure, i.pre), n;
        }
        function Io(e, t, r, n) {
          return Pt(e, Er(e, t), r, n);
        }
        function Si(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[hr(e, t)];
          var r = e.display.externalMeasured;
          if (r && t >= r.lineN && t < r.lineN + r.size) return r;
        }
        function Er(e, t) {
          var r = we(t),
            n = Si(e, r);
          n && !n.text
            ? (n = null)
            : n && n.changes && (Lo(e, n, r, Di(e)), (e.curOp.forceUpdate = !0)),
            n || (n = Bs(e, t));
          var i = No(n, t, r);
          return {
            line: t,
            view: n,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1,
          };
        }
        function Pt(e, t, r, n, i) {
          t.before && (r = -1);
          var o = r + (n || ''),
            a;
          return (
            t.cache.hasOwnProperty(o)
              ? (a = t.cache[o])
              : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                t.hasHeights || (Fs(e, t.view, t.rect), (t.hasHeights = !0)),
                (a = Us(e, t, r, n)),
                a.bogus || (t.cache[o] = a)),
            {
              left: a.left,
              right: a.right,
              top: i ? a.rtop : a.top,
              bottom: i ? a.rbottom : a.bottom,
            }
          );
        }
        var Wo = { left: 0, right: 0, top: 0, bottom: 0 };
        function Po(e, t, r) {
          for (var n, i, o, a, s, l, u = 0; u < e.length; u += 3)
            if (
              ((s = e[u]),
              (l = e[u + 1]),
              t < s
                ? ((i = 0), (o = 1), (a = 'left'))
                : t < l
                ? ((i = t - s), (o = i + 1))
                : (u == e.length - 3 || (t == l && e[u + 3] > t)) &&
                  ((o = l - s), (i = o - 1), t >= l && (a = 'right')),
              i != null)
            ) {
              if (
                ((n = e[u + 2]),
                s == l && r == (n.insertLeft ? 'left' : 'right') && (a = r),
                r == 'left' && i == 0)
              )
                for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                  (n = e[(u -= 3) + 2]), (a = 'left');
              if (r == 'right' && i == l - s)
                for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
                  (n = e[(u += 3) + 2]), (a = 'right');
              break;
            }
          return { node: n, start: i, end: o, collapse: a, coverStart: s, coverEnd: l };
        }
        function zs(e, t) {
          var r = Wo;
          if (t == 'left') for (var n = 0; n < e.length && !((r = e[n]).left != r.right); n++);
          else for (var i = e.length - 1; i >= 0 && !((r = e[i]).left != r.right); i--);
          return r;
        }
        function Us(e, t, r, n) {
          var i = Po(t.map, r, n),
            o = i.node,
            a = i.start,
            s = i.end,
            l = i.collapse,
            u;
          if (o.nodeType == 3) {
            for (var c = 0; c < 4; c++) {
              for (; a && qr(t.line.text.charAt(i.coverStart + a)); ) --a;
              for (; i.coverStart + s < i.coverEnd && qr(t.line.text.charAt(i.coverStart + s)); )
                ++s;
              if (
                (A && B < 9 && a == 0 && s == i.coverEnd - i.coverStart
                  ? (u = o.parentNode.getBoundingClientRect())
                  : (u = zs(D(o, a, s).getClientRects(), n)),
                u.left || u.right || a == 0)
              )
                break;
              (s = a), (a = a - 1), (l = 'right');
            }
            A && B < 11 && (u = _s(e.display.measure, u));
          } else {
            a > 0 && (l = n = 'right');
            var p;
            e.options.lineWrapping && (p = o.getClientRects()).length > 1
              ? (u = p[n == 'right' ? p.length - 1 : 0])
              : (u = o.getBoundingClientRect());
          }
          if (A && B < 9 && !a && (!u || (!u.left && !u.right))) {
            var v = o.parentNode.getClientRects()[0];
            v
              ? (u = { left: v.left, right: v.left + Ar(e.display), top: v.top, bottom: v.bottom })
              : (u = Wo);
          }
          for (
            var m = u.top - t.rect.top,
              w = u.bottom - t.rect.top,
              L = (m + w) / 2,
              I = t.view.measure.heights,
              W = 0;
            W < I.length - 1 && !(L < I[W]);
            W++
          );
          var H = W ? I[W - 1] : 0,
            F = I[W],
            _ = {
              left: (l == 'right' ? u.right : u.left) - t.rect.left,
              right: (l == 'left' ? u.left : u.right) - t.rect.left,
              top: H,
              bottom: F,
            };
          return (
            !u.left && !u.right && (_.bogus = !0),
            e.options.singleCursorHeightPerLine || ((_.rtop = m), (_.rbottom = w)),
            _
          );
        }
        function _s(e, t) {
          if (
            !window.screen ||
            screen.logicalXDPI == null ||
            screen.logicalXDPI == screen.deviceXDPI ||
            !Ft(e)
          )
            return t;
          var r = screen.logicalXDPI / screen.deviceXDPI,
            n = screen.logicalYDPI / screen.deviceYDPI;
          return { left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n };
        }
        function Ro(e) {
          if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function Ho(e) {
          (e.display.externalMeasure = null), C(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) Ro(e.display.view[t]);
        }
        function an(e) {
          Ho(e),
            (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
        }
        function Fo() {
          return j && M
            ? -(
                document.body.getBoundingClientRect().left -
                parseInt(getComputedStyle(document.body).marginLeft)
              )
            : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }
        function Bo() {
          return j && M
            ? -(
                document.body.getBoundingClientRect().top -
                parseInt(getComputedStyle(document.body).marginTop)
              )
            : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }
        function Ti(e) {
          var t = 0;
          if (e.widgets)
            for (var r = 0; r < e.widgets.length; ++r)
              e.widgets[r].above && (t += on(e.widgets[r]));
          return t;
        }
        function jn(e, t, r, n, i) {
          if (!i) {
            var o = Ti(t);
            (r.top += o), (r.bottom += o);
          }
          if (n == 'line') return r;
          n || (n = 'local');
          var a = Kt(t);
          if (
            (n == 'local' ? (a += Kn(e.display)) : (a -= e.display.viewOffset),
            n == 'page' || n == 'window')
          ) {
            var s = e.display.lineSpace.getBoundingClientRect();
            a += s.top + (n == 'window' ? 0 : Bo());
            var l = s.left + (n == 'window' ? 0 : Fo());
            (r.left += l), (r.right += l);
          }
          return (r.top += a), (r.bottom += a), r;
        }
        function zo(e, t, r) {
          if (r == 'div') return t;
          var n = t.left,
            i = t.top;
          if (r == 'page') (n -= Fo()), (i -= Bo());
          else if (r == 'local' || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            (n += o.left), (i += o.top);
          }
          var a = e.display.lineSpace.getBoundingClientRect();
          return { left: n - a.left, top: i - a.top };
        }
        function Li(e, t, r, n, i) {
          return n || (n = q(e.doc, t.line)), jn(e, n, Io(e, n, t.ch, i), r);
        }
        function Tt(e, t, r, n, i, o) {
          (n = n || q(e.doc, t.line)), i || (i = Er(e, n));
          function a(w, L) {
            var I = Pt(e, i, w, L ? 'right' : 'left', o);
            return L ? (I.left = I.right) : (I.right = I.left), jn(e, n, I, r);
          }
          var s = at(n, e.doc.direction),
            l = t.ch,
            u = t.sticky;
          if (
            (l >= n.text.length
              ? ((l = n.text.length), (u = 'before'))
              : l <= 0 && ((l = 0), (u = 'after')),
            !s)
          )
            return a(u == 'before' ? l - 1 : l, u == 'before');
          function c(w, L, I) {
            var W = s[L],
              H = W.level == 1;
            return a(I ? w - 1 : w, H != I);
          }
          var p = kt(s, l, u),
            v = Ne,
            m = c(l, p, u == 'before');
          return v != null && (m.other = c(l, v, u != 'before')), m;
        }
        function Uo(e, t) {
          var r = 0;
          (t = ue(e.doc, t)), e.options.lineWrapping || (r = Ar(e.display) * t.ch);
          var n = q(e.doc, t.line),
            i = Kt(n) + Kn(e.display);
          return { left: r, right: r, top: i, bottom: i + n.height };
        }
        function Mi(e, t, r, n, i) {
          var o = y(e, t, r);
          return (o.xRel = i), n && (o.outside = n), o;
        }
        function Oi(e, t, r) {
          var n = e.doc;
          if (((r += e.display.viewOffset), r < 0)) return Mi(n.first, 0, null, -1, -1);
          var i = f(n, r),
            o = n.first + n.size - 1;
          if (i > o) return Mi(n.first + n.size - 1, q(n, o).text.length, null, 1, 1);
          t < 0 && (t = 0);
          for (var a = q(n, i); ; ) {
            var s = Ks(e, a, i, t, r),
              l = ms(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
            if (!l) return s;
            var u = l.find(1);
            if (u.line == i) return u;
            a = q(n, (i = u.line));
          }
        }
        function _o(e, t, r, n) {
          n -= Ti(t);
          var i = t.text.length,
            o = ar(
              function(a) {
                return Pt(e, r, a - 1).bottom <= n;
              },
              i,
              0,
            );
          return (
            (i = ar(
              function(a) {
                return Pt(e, r, a).top > n;
              },
              o,
              i,
            )),
            { begin: o, end: i }
          );
        }
        function Ko(e, t, r, n) {
          r || (r = Er(e, t));
          var i = jn(e, t, Pt(e, r, n), 'line').top;
          return _o(e, t, r, i);
        }
        function Ei(e, t, r, n) {
          return e.bottom <= r ? !1 : e.top > r ? !0 : (n ? e.left : e.right) > t;
        }
        function Ks(e, t, r, n, i) {
          i -= Kt(t);
          var o = Er(e, t),
            a = Ti(t),
            s = 0,
            l = t.text.length,
            u = !0,
            c = at(t, e.doc.direction);
          if (c) {
            var p = (e.options.lineWrapping ? Gs : js)(e, t, r, o, c, n, i);
            (u = p.level != 1), (s = u ? p.from : p.to - 1), (l = u ? p.to : p.from - 1);
          }
          var v = null,
            m = null,
            w = ar(
              function(ee) {
                var Z = Pt(e, o, ee);
                return (
                  (Z.top += a),
                  (Z.bottom += a),
                  Ei(Z, n, i, !1) ? (Z.top <= i && Z.left <= n && ((v = ee), (m = Z)), !0) : !1
                );
              },
              s,
              l,
            ),
            L,
            I,
            W = !1;
          if (m) {
            var H = n - m.left < m.right - n,
              F = H == u;
            (w = v + (F ? 0 : 1)), (I = F ? 'after' : 'before'), (L = H ? m.left : m.right);
          } else {
            !u && (w == l || w == s) && w++,
              (I =
                w == 0
                  ? 'after'
                  : w == t.text.length
                  ? 'before'
                  : Pt(e, o, w - (u ? 1 : 0)).bottom + a <= i == u
                  ? 'after'
                  : 'before');
            var _ = Tt(e, y(r, w, I), 'line', t, o);
            (L = _.left), (W = i < _.top ? -1 : i >= _.bottom ? 1 : 0);
          }
          return (w = or(t.text, w, 1)), Mi(r, w, I, W, n - L);
        }
        function js(e, t, r, n, i, o, a) {
          var s = ar(
              function(p) {
                var v = i[p],
                  m = v.level != 1;
                return Ei(
                  Tt(e, y(r, m ? v.to : v.from, m ? 'before' : 'after'), 'line', t, n),
                  o,
                  a,
                  !0,
                );
              },
              0,
              i.length - 1,
            ),
            l = i[s];
          if (s > 0) {
            var u = l.level != 1,
              c = Tt(e, y(r, u ? l.from : l.to, u ? 'after' : 'before'), 'line', t, n);
            Ei(c, o, a, !0) && c.top > a && (l = i[s - 1]);
          }
          return l;
        }
        function Gs(e, t, r, n, i, o, a) {
          var s = _o(e, t, n, a),
            l = s.begin,
            u = s.end;
          /\s/.test(t.text.charAt(u - 1)) && u--;
          for (var c = null, p = null, v = 0; v < i.length; v++) {
            var m = i[v];
            if (m.from >= u || m.to <= l) continue;
            var w = m.level != 1,
              L = Pt(e, n, w ? Math.min(u, m.to) - 1 : Math.max(l, m.from)).right,
              I = L < o ? o - L + 1e9 : L - o;
            (!c || p > I) && ((c = m), (p = I));
          }
          return (
            c || (c = i[i.length - 1]),
            c.from < l && (c = { from: l, to: c.to, level: c.level }),
            c.to > u && (c = { from: c.from, to: u, level: c.level }),
            c
          );
        }
        var ur;
        function Dr(e) {
          if (e.cachedTextHeight != null) return e.cachedTextHeight;
          if (ur == null) {
            ur = h('pre', null, 'CodeMirror-line-like');
            for (var t = 0; t < 49; ++t)
              ur.appendChild(document.createTextNode('x')), ur.appendChild(h('br'));
            ur.appendChild(document.createTextNode('x'));
          }
          G(e.measure, ur);
          var r = ur.offsetHeight / 50;
          return r > 3 && (e.cachedTextHeight = r), C(e.measure), r || 1;
        }
        function Ar(e) {
          if (e.cachedCharWidth != null) return e.cachedCharWidth;
          var t = h('span', 'xxxxxxxxxx'),
            r = h('pre', [t], 'CodeMirror-line-like');
          G(e.measure, r);
          var n = t.getBoundingClientRect(),
            i = (n.right - n.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function Di(e) {
          for (
            var t = e.display,
              r = {},
              n = {},
              i = t.gutters.clientLeft,
              o = t.gutters.firstChild,
              a = 0;
            o;
            o = o.nextSibling, ++a
          ) {
            var s = e.display.gutterSpecs[a].className;
            (r[s] = o.offsetLeft + o.clientLeft + i), (n[s] = o.clientWidth);
          }
          return {
            fixedPos: Ai(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: n,
            wrapperWidth: t.wrapper.clientWidth,
          };
        }
        function Ai(e) {
          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }
        function jo(e) {
          var t = Dr(e.display),
            r = e.options.lineWrapping,
            n = r && Math.max(5, e.display.scroller.clientWidth / Ar(e.display) - 3);
          return function(i) {
            if (Zt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets)
              for (var a = 0; a < i.widgets.length; a++)
                i.widgets[a].height && (o += i.widgets[a].height);
            return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
          };
        }
        function Ni(e) {
          var t = e.doc,
            r = jo(e);
          t.iter(function(n) {
            var i = r(n);
            i != n.height && Ct(n, i);
          });
        }
        function fr(e, t, r, n) {
          var i = e.display;
          if (!r && Cr(t).getAttribute('cm-not-content') == 'true') return null;
          var o,
            a,
            s = i.lineSpace.getBoundingClientRect();
          try {
            (o = t.clientX - s.left), (a = t.clientY - s.top);
          } catch (p) {
            return null;
          }
          var l = Oi(e, o, a),
            u;
          if (n && l.xRel > 0 && (u = q(e.doc, l.line).text).length == l.ch) {
            var c = Y(u, u.length, e.options.tabSize) - u.length;
            l = y(l.line, Math.max(0, Math.round((o - Ao(e.display).left) / Ar(e.display)) - c));
          }
          return l;
        }
        function hr(e, t) {
          if (t >= e.display.viewTo) return null;
          if (((t -= e.display.viewFrom), t < 0)) return null;
          for (var r = e.display.view, n = 0; n < r.length; n++)
            if (((t -= r[n].size), t < 0)) return n;
        }
        function ft(e, t, r, n) {
          t == null && (t = e.doc.first), r == null && (r = e.doc.first + e.doc.size), n || (n = 0);
          var i = e.display;
          if (
            (n &&
              r < i.viewTo &&
              (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
              (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
          )
            _t && yi(e.doc, t) < i.viewTo && Vt(e);
          else if (r <= i.viewFrom)
            _t && xo(e.doc, r + n) > i.viewFrom ? Vt(e) : ((i.viewFrom += n), (i.viewTo += n));
          else if (t <= i.viewFrom && r >= i.viewTo) Vt(e);
          else if (t <= i.viewFrom) {
            var o = Gn(e, r, r + n, 1);
            o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += n)) : Vt(e);
          } else if (r >= i.viewTo) {
            var a = Gn(e, t, t, -1);
            a ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN)) : Vt(e);
          } else {
            var s = Gn(e, t, t, -1),
              l = Gn(e, r, r + n, 1);
            s && l
              ? ((i.view = i.view
                  .slice(0, s.index)
                  .concat(_n(e, s.lineN, l.lineN))
                  .concat(i.view.slice(l.index))),
                (i.viewTo += n))
              : Vt(e);
          }
          var u = i.externalMeasured;
          u && (r < u.lineN ? (u.lineN += n) : t < u.lineN + u.size && (i.externalMeasured = null));
        }
        function Qt(e, t, r) {
          e.curOp.viewChanged = !0;
          var n = e.display,
            i = e.display.externalMeasured;
          if (
            (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null),
            t < n.viewFrom || t >= n.viewTo)
          )
            return;
          var o = n.view[hr(e, t)];
          if (o.node == null) return;
          var a = o.changes || (o.changes = []);
          R(a, r) == -1 && a.push(r);
        }
        function Vt(e) {
          (e.display.viewFrom = e.display.viewTo = e.doc.first),
            (e.display.view = []),
            (e.display.viewOffset = 0);
        }
        function Gn(e, t, r, n) {
          var i = hr(e, t),
            o,
            a = e.display.view;
          if (!_t || r == e.doc.first + e.doc.size) return { index: i, lineN: r };
          for (var s = e.display.viewFrom, l = 0; l < i; l++) s += a[l].size;
          if (s != t) {
            if (n > 0) {
              if (i == a.length - 1) return null;
              (o = s + a[i].size - t), i++;
            } else o = s - t;
            (t += o), (r += o);
          }
          for (; yi(e.doc, r) != r; ) {
            if (i == (n < 0 ? 0 : a.length - 1)) return null;
            (r += n * a[i - (n < 0 ? 1 : 0)].size), (i += n);
          }
          return { index: i, lineN: r };
        }
        function Xs(e, t, r) {
          var n = e.display,
            i = n.view;
          i.length == 0 || t >= n.viewTo || r <= n.viewFrom
            ? ((n.view = _n(e, t, r)), (n.viewFrom = t))
            : (n.viewFrom > t
                ? (n.view = _n(e, t, n.viewFrom).concat(n.view))
                : n.viewFrom < t && (n.view = n.view.slice(hr(e, t))),
              (n.viewFrom = t),
              n.viewTo < r
                ? (n.view = n.view.concat(_n(e, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, hr(e, r)))),
            (n.viewTo = r);
        }
        function Go(e) {
          for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            !i.hidden && (!i.node || i.changes) && ++r;
          }
          return r;
        }
        function sn(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function Xo(e, t) {
          t === void 0 && (t = !0);
          for (
            var r = e.doc,
              n = {},
              i = (n.cursors = document.createDocumentFragment()),
              o = (n.selection = document.createDocumentFragment()),
              a = 0;
            a < r.sel.ranges.length;
            a++
          ) {
            if (!t && a == r.sel.primIndex) continue;
            var s = r.sel.ranges[a];
            if (s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom) continue;
            var l = s.empty();
            (l || e.options.showCursorWhenSelecting) && Yo(e, s.head, i), l || Ys(e, s, o);
          }
          return n;
        }
        function Yo(e, t, r) {
          var n = Tt(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
            i = r.appendChild(h('div', ' ', 'CodeMirror-cursor'));
          if (
            ((i.style.left = n.left + 'px'),
            (i.style.top = n.top + 'px'),
            (i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + 'px'),
            n.other)
          ) {
            var o = r.appendChild(h('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'));
            (o.style.display = ''),
              (o.style.left = n.other.left + 'px'),
              (o.style.top = n.other.top + 'px'),
              (o.style.height = (n.other.bottom - n.other.top) * 0.85 + 'px');
          }
        }
        function Xn(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function Ys(e, t, r) {
          var n = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            a = Ao(e.display),
            s = a.left,
            l = Math.max(n.sizerWidth, lr(e) - n.sizer.offsetLeft) - a.right,
            u = i.direction == 'ltr';
          function c(F, _, ee, Z) {
            _ < 0 && (_ = 0),
              (_ = Math.round(_)),
              (Z = Math.round(Z)),
              o.appendChild(
                h(
                  'div',
                  null,
                  'CodeMirror-selected',
                  'position: absolute; left: ' +
                    F +
                    `px;
                             top: ` +
                    _ +
                    'px; width: ' +
                    (ee == null ? l - F : ee) +
                    `px;
                             height: ` +
                    (Z - _) +
                    'px',
                ),
              );
          }
          function p(F, _, ee) {
            var Z = q(i, F),
              pe = Z.text.length,
              xe,
              Qe;
            function Me(Ue, ct) {
              return Li(e, y(F, Ue), 'div', Z, ct);
            }
            function lt(Ue, ct, Ve) {
              var Ge = Ko(e, Z, null, Ue),
                _e = (ct == 'ltr') == (Ve == 'after') ? 'left' : 'right',
                Pe =
                  Ve == 'after'
                    ? Ge.begin
                    : Ge.end - (/\s/.test(Z.text.charAt(Ge.end - 1)) ? 2 : 1);
              return Me(Pe, _e)[_e];
            }
            var ht = at(Z, i.direction);
            return (
              Ht(ht, _ || 0, ee == null ? pe : ee, function(Ue, ct, Ve, Ge) {
                var _e = Ve == 'ltr',
                  Pe = Me(Ue, _e ? 'left' : 'right'),
                  dt = Me(ct - 1, _e ? 'right' : 'left'),
                  jr = _ == null && Ue == 0,
                  ir = ee == null && ct == pe,
                  it = Ge == 0,
                  Rt = !ht || Ge == ht.length - 1;
                if (dt.top - Pe.top <= 3) {
                  var qe = (u ? jr : ir) && it,
                    no = (u ? ir : jr) && Rt,
                    Xt = qe ? s : (_e ? Pe : dt).left,
                    vr = no ? l : (_e ? dt : Pe).right;
                  c(Xt, Pe.top, vr - Xt, Pe.bottom);
                } else {
                  var mr, ut, Gr, io;
                  _e
                    ? ((mr = u && jr && it ? s : Pe.left),
                      (ut = u ? l : lt(Ue, Ve, 'before')),
                      (Gr = u ? s : lt(ct, Ve, 'after')),
                      (io = u && ir && Rt ? l : dt.right))
                    : ((mr = u ? lt(Ue, Ve, 'before') : s),
                      (ut = !u && jr && it ? l : Pe.right),
                      (Gr = !u && ir && Rt ? s : dt.left),
                      (io = u ? lt(ct, Ve, 'after') : l)),
                    c(mr, Pe.top, ut - mr, Pe.bottom),
                    Pe.bottom < dt.top && c(s, Pe.bottom, null, dt.top),
                    c(Gr, dt.top, io - Gr, dt.bottom);
                }
                (!xe || Xn(Pe, xe) < 0) && (xe = Pe),
                  Xn(dt, xe) < 0 && (xe = dt),
                  (!Qe || Xn(Pe, Qe) < 0) && (Qe = Pe),
                  Xn(dt, Qe) < 0 && (Qe = dt);
              }),
              { start: xe, end: Qe }
            );
          }
          var v = t.from(),
            m = t.to();
          if (v.line == m.line) p(v.line, v.ch, m.ch);
          else {
            var w = q(i, v.line),
              L = q(i, m.line),
              I = It(w) == It(L),
              W = p(v.line, v.ch, I ? w.text.length + 1 : null).end,
              H = p(m.line, I ? 0 : null, m.ch).start;
            I &&
              (W.top < H.top - 2
                ? (c(W.right, W.top, null, W.bottom), c(s, H.top, H.left, H.bottom))
                : c(W.right, W.top, H.left - W.right, W.bottom)),
              W.bottom < H.top && c(s, W.bottom, null, H.top);
          }
          r.appendChild(o);
        }
        function Ii(e) {
          if (!e.state.focused) return;
          var t = e.display;
          clearInterval(t.blinker);
          var r = !0;
          (t.cursorDiv.style.visibility = ''),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function() {
                  e.hasFocus() || Nr(e), (t.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden');
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden');
        }
        function qo(e) {
          e.state.focused || (e.display.input.focus(), Wi(e));
        }
        function Jo(e) {
          (e.state.delayingBlurEvent = !0),
            setTimeout(function() {
              e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), Nr(e));
            }, 100);
        }
        function Wi(e, t) {
          if (
            (e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
            e.options.readOnly == 'nocursor')
          )
            return;
          e.state.focused ||
            (We(e, 'focus', e, t),
            (e.state.focused = !0),
            Ie(e.display.wrapper, 'CodeMirror-focused'),
            !e.curOp &&
              e.display.selForContextMenu != e.doc.sel &&
              (e.display.input.reset(),
              U &&
                setTimeout(function() {
                  return e.display.input.reset(!0);
                }, 20)),
            e.display.input.receivedFocus()),
            Ii(e);
        }
        function Nr(e, t) {
          if (e.state.delayingBlurEvent) return;
          e.state.focused &&
            (We(e, 'blur', e, t),
            (e.state.focused = !1),
            ot(e.display.wrapper, 'CodeMirror-focused')),
            clearInterval(e.display.blinker),
            setTimeout(function() {
              e.state.focused || (e.display.shift = !1);
            }, 150);
        }
        function Yn(e) {
          for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
            var i = t.view[n],
              o = e.options.lineWrapping,
              a = void 0,
              s = 0;
            if (i.hidden) continue;
            if (A && B < 8) {
              var l = i.node.offsetTop + i.node.offsetHeight;
              (a = l - r), (r = l);
            } else {
              var u = i.node.getBoundingClientRect();
              (a = u.bottom - u.top),
                !o &&
                  i.text.firstChild &&
                  (s = i.text.firstChild.getBoundingClientRect().right - u.left - 1);
            }
            var c = i.line.height - a;
            if ((c > 0.005 || c < -0.005) && (Ct(i.line, a), Zo(i.line), i.rest))
              for (var p = 0; p < i.rest.length; p++) Zo(i.rest[p]);
            if (s > e.display.sizerWidth) {
              var v = Math.ceil(s / Ar(e.display));
              v > e.display.maxLineLength &&
                ((e.display.maxLineLength = v),
                (e.display.maxLine = i.line),
                (e.display.maxLineChanged = !0));
            }
          }
        }
        function Zo(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var r = e.widgets[t],
                n = r.node.parentNode;
              n && (r.height = n.offsetHeight);
            }
        }
        function qn(e, t, r) {
          var n = r && r.top != null ? Math.max(0, r.top) : e.scroller.scrollTop;
          n = Math.floor(n - Kn(e));
          var i = r && r.bottom != null ? r.bottom : n + e.wrapper.clientHeight,
            o = f(t, n),
            a = f(t, i);
          if (r && r.ensure) {
            var s = r.ensure.from.line,
              l = r.ensure.to.line;
            s < o
              ? ((o = s), (a = f(t, Kt(q(t, s)) + e.wrapper.clientHeight)))
              : Math.min(l, t.lastLine()) >= a &&
                ((o = f(t, Kt(q(t, l)) - e.wrapper.clientHeight)), (a = l));
          }
          return { from: o, to: Math.max(a, o + 1) };
        }
        function qs(e, t) {
          if (Ee(e, 'scrollCursorIntoView')) return;
          var r = e.display,
            n = r.sizer.getBoundingClientRect(),
            i = null;
          if (
            (t.top + n.top < 0
              ? (i = !0)
              : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) &&
                (i = !1),
            i != null && !x)
          ) {
            var o = h(
              'div',
              '​',
              null,
              `position: absolute;
                         top: ` +
                (t.top - r.viewOffset - Kn(e.display)) +
                `px;
                         height: ` +
                (t.bottom - t.top + Wt(e) + r.barHeight) +
                `px;
                         left: ` +
                t.left +
                'px; width: ' +
                Math.max(2, t.right - t.left) +
                'px;',
            );
            e.display.lineSpace.appendChild(o),
              o.scrollIntoView(i),
              e.display.lineSpace.removeChild(o);
          }
        }
        function Js(e, t, r, n) {
          n == null && (n = 0);
          var i;
          !e.options.lineWrapping &&
            t == r &&
            ((t = t.ch ? y(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after') : t),
            (r = t.sticky == 'before' ? y(t.line, t.ch + 1, 'before') : t));
          for (var o = 0; o < 5; o++) {
            var a = !1,
              s = Tt(e, t),
              l = !r || r == t ? s : Tt(e, r);
            i = {
              left: Math.min(s.left, l.left),
              top: Math.min(s.top, l.top) - n,
              right: Math.max(s.left, l.left),
              bottom: Math.max(s.bottom, l.bottom) + n,
            };
            var u = Pi(e, i),
              c = e.doc.scrollTop,
              p = e.doc.scrollLeft;
            if (
              (u.scrollTop != null &&
                (un(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)),
              u.scrollLeft != null &&
                (cr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - p) > 1 && (a = !0)),
              !a)
            )
              break;
          }
          return i;
        }
        function Zs(e, t) {
          var r = Pi(e, t);
          r.scrollTop != null && un(e, r.scrollTop), r.scrollLeft != null && cr(e, r.scrollLeft);
        }
        function Pi(e, t) {
          var r = e.display,
            n = Dr(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : r.scroller.scrollTop,
            o = ki(e),
            a = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var s = e.doc.height + Ci(r),
            l = t.top < n,
            u = t.bottom > s - n;
          if (t.top < i) a.scrollTop = l ? 0 : t.top;
          else if (t.bottom > i + o) {
            var c = Math.min(t.top, (u ? s : t.bottom) - o);
            c != i && (a.scrollTop = c);
          }
          var p =
              e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : r.scroller.scrollLeft,
            v = lr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
            m = t.right - t.left > v;
          return (
            m && (t.right = t.left + v),
            t.left < 10
              ? (a.scrollLeft = 0)
              : t.left < p
              ? (a.scrollLeft = Math.max(0, t.left - (m ? 0 : 10)))
              : t.right > v + p - 3 && (a.scrollLeft = t.right + (m ? 0 : 10) - v),
            a
          );
        }
        function Ri(e, t) {
          if (t == null) return;
          Jn(e),
            (e.curOp.scrollTop =
              (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t);
        }
        function Ir(e) {
          Jn(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
        }
        function ln(e, t, r) {
          (t != null || r != null) && Jn(e),
            t != null && (e.curOp.scrollLeft = t),
            r != null && (e.curOp.scrollTop = r);
        }
        function Qs(e, t) {
          Jn(e), (e.curOp.scrollToPos = t);
        }
        function Jn(e) {
          var t = e.curOp.scrollToPos;
          if (t) {
            e.curOp.scrollToPos = null;
            var r = Uo(e, t.from),
              n = Uo(e, t.to);
            Qo(e, r, n, t.margin);
          }
        }
        function Qo(e, t, r, n) {
          var i = Pi(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - n,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + n,
          });
          ln(e, i.scrollLeft, i.scrollTop);
        }
        function un(e, t) {
          if (Math.abs(e.doc.scrollTop - t) < 2) return;
          te || Fi(e, { top: t }), Vo(e, t, !0), te && Fi(e), cn(e, 100);
        }
        function Vo(e, t, r) {
          if (
            ((t = Math.max(
              0,
              Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t),
            )),
            e.display.scroller.scrollTop == t && !r)
          )
            return;
          (e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t);
        }
        function cr(e, t, r, n) {
          if (
            ((t = Math.max(
              0,
              Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth),
            )),
            (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n)
          )
            return;
          (e.doc.scrollLeft = t),
            na(e),
            e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t);
        }
        function fn(e) {
          var t = e.display,
            r = t.gutters.offsetWidth,
            n = Math.round(e.doc.height + Ci(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: n,
            scrollHeight: n + Wt(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r,
          };
        }
        var dr = function(t, r, n) {
          this.cm = n;
          var i = (this.vert = h(
              'div',
              [h('div', null, null, 'min-width: 1px')],
              'CodeMirror-vscrollbar',
            )),
            o = (this.horiz = h(
              'div',
              [h('div', null, null, 'height: 100%; min-height: 1px')],
              'CodeMirror-hscrollbar',
            ));
          (i.tabIndex = o.tabIndex = -1),
            t(i),
            t(o),
            V(i, 'scroll', function() {
              i.clientHeight && r(i.scrollTop, 'vertical');
            }),
            V(o, 'scroll', function() {
              o.clientWidth && r(o.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            A && B < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
        (dr.prototype.update = function(e) {
          var t = e.scrollWidth > e.clientWidth + 1,
            r = e.scrollHeight > e.clientHeight + 1,
            n = e.nativeBarWidth;
          if (r) {
            (this.vert.style.display = 'block'), (this.vert.style.bottom = t ? n + 'px' : '0');
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height =
              Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
          } else (this.vert.style.display = ''), (this.vert.firstChild.style.height = '0');
          if (t) {
            (this.horiz.style.display = 'block'),
              (this.horiz.style.right = r ? n + 'px' : '0'),
              (this.horiz.style.left = e.barLeft + 'px');
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
          } else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0');
          return (
            !this.checkedZeroWidth &&
              e.clientHeight > 0 &&
              (n == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: r ? n : 0, bottom: t ? n : 0 }
          );
        }),
          (dr.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
          }),
          (dr.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
          }),
          (dr.prototype.zeroWidthHack = function() {
            var e = ie && !d ? '12px' : '18px';
            (this.horiz.style.height = this.vert.style.width = e),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
              (this.disableHoriz = new z()),
              (this.disableVert = new z());
          }),
          (dr.prototype.enableZeroWidthBar = function(e, t, r) {
            e.style.pointerEvents = 'auto';
            function n() {
              var i = e.getBoundingClientRect(),
                o =
                  r == 'vert'
                    ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                    : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
              o != e ? (e.style.pointerEvents = 'none') : t.set(1e3, n);
            }
            t.set(1e3, n);
          }),
          (dr.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          });
        var hn = function() {};
        (hn.prototype.update = function() {
          return { bottom: 0, right: 0 };
        }),
          (hn.prototype.setScrollLeft = function() {}),
          (hn.prototype.setScrollTop = function() {}),
          (hn.prototype.clear = function() {});
        function Wr(e, t) {
          t || (t = fn(e));
          var r = e.display.barWidth,
            n = e.display.barHeight;
          $o(e, t);
          for (var i = 0; (i < 4 && r != e.display.barWidth) || n != e.display.barHeight; i++)
            r != e.display.barWidth && e.options.lineWrapping && Yn(e),
              $o(e, fn(e)),
              (r = e.display.barWidth),
              (n = e.display.barHeight);
        }
        function $o(e, t) {
          var r = e.display,
            n = r.scrollbars.update(t);
          (r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
            (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
            (r.heightForcer.style.borderBottom = n.bottom + 'px solid transparent'),
            n.right && n.bottom
              ? ((r.scrollbarFiller.style.display = 'block'),
                (r.scrollbarFiller.style.height = n.bottom + 'px'),
                (r.scrollbarFiller.style.width = n.right + 'px'))
              : (r.scrollbarFiller.style.display = ''),
            n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
              ? ((r.gutterFiller.style.display = 'block'),
                (r.gutterFiller.style.height = n.bottom + 'px'),
                (r.gutterFiller.style.width = t.gutterWidth + 'px'))
              : (r.gutterFiller.style.display = '');
        }
        var ea = { native: dr, null: hn };
        function ta(e) {
          e.display.scrollbars &&
            (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass && ot(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new ea[e.options.scrollbarStyle](
              function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                  V(t, 'mousedown', function() {
                    e.state.focused &&
                      setTimeout(function() {
                        return e.display.input.focus();
                      }, 0);
                  }),
                  t.setAttribute('cm-not-content', 'true');
              },
              function(t, r) {
                r == 'horizontal' ? cr(e, t) : un(e, t);
              },
              e,
            )),
            e.display.scrollbars.addClass && Ie(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var Vs = 0;
        function pr(e) {
          (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Vs,
          }),
            Es(e.curOp);
        }
        function gr(e) {
          var t = e.curOp;
          t &&
            As(t, function(r) {
              for (var n = 0; n < r.ops.length; n++) r.ops[n].cm.curOp = null;
              $s(r);
            });
        }
        function $s(e) {
          for (var t = e.ops, r = 0; r < t.length; r++) el(t[r]);
          for (var n = 0; n < t.length; n++) tl(t[n]);
          for (var i = 0; i < t.length; i++) rl(t[i]);
          for (var o = 0; o < t.length; o++) nl(t[o]);
          for (var a = 0; a < t.length; a++) il(t[a]);
        }
        function el(e) {
          var t = e.cm,
            r = t.display;
          al(t),
            e.updateMaxLine && wi(t),
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              e.scrollTop != null ||
              (e.scrollToPos &&
                (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo)) ||
              (r.maxLineChanged && t.options.lineWrapping)),
            (e.update =
              e.mustUpdate &&
              new Zn(
                t,
                e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                e.forceUpdate,
              ));
        }
        function tl(e) {
          e.updatedDisplay = e.mustUpdate && Hi(e.cm, e.update);
        }
        function rl(e) {
          var t = e.cm,
            r = t.display;
          e.updatedDisplay && Yn(t),
            (e.barMeasure = fn(t)),
            r.maxLineChanged &&
              !t.options.lineWrapping &&
              ((e.adjustWidthTo = Io(t, r.maxLine, r.maxLine.text.length).left + 3),
              (t.display.sizerWidth = e.adjustWidthTo),
              (e.barMeasure.scrollWidth = Math.max(
                r.scroller.clientWidth,
                r.sizer.offsetLeft + e.adjustWidthTo + Wt(t) + t.display.barWidth,
              )),
              (e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - lr(t)))),
            (e.updatedDisplay || e.selectionChanged) &&
              (e.preparedSelection = r.input.prepareSelection());
        }
        function nl(e) {
          var t = e.cm;
          e.adjustWidthTo != null &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
            e.maxScrollLeft < t.doc.scrollLeft &&
              cr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
            (t.display.maxLineChanged = !1));
          var r = e.focus && e.focus == le();
          e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
            (e.updatedDisplay || e.startHeight != t.doc.height) && Wr(t, e.barMeasure),
            e.updatedDisplay && zi(t, e.barMeasure),
            e.selectionChanged && Ii(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            r && qo(e.cm);
        }
        function il(e) {
          var t = e.cm,
            r = t.display,
            n = t.doc;
          if (
            (e.updatedDisplay && ra(t, e.update),
            r.wheelStartX != null &&
              (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) &&
              (r.wheelStartX = r.wheelStartY = null),
            e.scrollTop != null && Vo(t, e.scrollTop, e.forceScroll),
            e.scrollLeft != null && cr(t, e.scrollLeft, !0, !0),
            e.scrollToPos)
          ) {
            var i = Js(t, ue(n, e.scrollToPos.from), ue(n, e.scrollToPos.to), e.scrollToPos.margin);
            qs(t, i);
          }
          var o = e.maybeHiddenMarkers,
            a = e.maybeUnhiddenMarkers;
          if (o) for (var s = 0; s < o.length; ++s) o[s].lines.length || We(o[s], 'hide');
          if (a) for (var l = 0; l < a.length; ++l) a[l].lines.length && We(a[l], 'unhide');
          r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && We(t, 'changes', t, e.changeObjs),
            e.update && e.update.finish();
        }
        function gt(e, t) {
          if (e.curOp) return t();
          pr(e);
          try {
            return t();
          } finally {
            gr(e);
          }
        }
        function Xe(e, t) {
          return function() {
            if (e.curOp) return t.apply(e, arguments);
            pr(e);
            try {
              return t.apply(e, arguments);
            } finally {
              gr(e);
            }
          };
        }
        function st(e) {
          return function() {
            if (this.curOp) return e.apply(this, arguments);
            pr(this);
            try {
              return e.apply(this, arguments);
            } finally {
              gr(this);
            }
          };
        }
        function Ye(e) {
          return function() {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            pr(t);
            try {
              return e.apply(this, arguments);
            } finally {
              gr(t);
            }
          };
        }
        function cn(e, t) {
          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, P(ol, e));
        }
        function ol(e) {
          var t = e.doc;
          if (t.highlightFrontier >= e.display.viewTo) return;
          var r = +new Date() + e.options.workTime,
            n = en(e, t.highlightFrontier),
            i = [];
          t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
            if (n.line >= e.display.viewFrom) {
              var a = o.styles,
                s = o.text.length > e.options.maxHighlightLength ? xt(t.mode, n.state) : null,
                l = ao(e, o, n, !0);
              s && (n.state = s), (o.styles = l.styles);
              var u = o.styleClasses,
                c = l.classes;
              c ? (o.styleClasses = c) : u && (o.styleClasses = null);
              for (
                var p =
                    !a ||
                    a.length != o.styles.length ||
                    (u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass)),
                  v = 0;
                !p && v < a.length;
                ++v
              )
                p = a[v] != o.styles[v];
              p && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
            } else o.text.length <= e.options.maxHighlightLength && pi(e, o.text, n), (o.stateAfter = n.line % 5 == 0 ? n.save() : null), n.nextLine();
            if (+new Date() > r) return cn(e, e.options.workDelay), !0;
          }),
            (t.highlightFrontier = n.line),
            (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
            i.length &&
              gt(e, function() {
                for (var o = 0; o < i.length; o++) Qt(e, i[o], 'text');
              });
        }
        var Zn = function(t, r, n) {
          var i = t.display;
          (this.viewport = r),
            (this.visible = qn(i, t.doc, r)),
            (this.editorIsHidden = !i.wrapper.offsetWidth),
            (this.wrapperHeight = i.wrapper.clientHeight),
            (this.wrapperWidth = i.wrapper.clientWidth),
            (this.oldDisplayWidth = lr(t)),
            (this.force = n),
            (this.dims = Di(t)),
            (this.events = []);
        };
        (Zn.prototype.signal = function(e, t) {
          ze(e, t) && this.events.push(arguments);
        }),
          (Zn.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++) We.apply(null, this.events[e]);
          });
        function al(e) {
          var t = e.display;
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = Wt(e) + 'px'),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
            (t.sizer.style.borderRightWidth = Wt(e) + 'px'),
            (t.scrollbarsClipped = !0));
        }
        function sl(e) {
          if (e.hasFocus()) return null;
          var t = le();
          if (!t || !Q(e.display.lineDiv, t)) return null;
          var r = { activeElt: t };
          if (window.getSelection) {
            var n = window.getSelection();
            n.anchorNode &&
              n.extend &&
              Q(e.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset));
          }
          return r;
        }
        function ll(e) {
          if (!e || !e.activeElt || e.activeElt == le()) return;
          if (
            (e.activeElt.focus(),
            !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
              e.anchorNode &&
              Q(document.body, e.anchorNode) &&
              Q(document.body, e.focusNode))
          ) {
            var t = window.getSelection(),
              r = document.createRange();
            r.setEnd(e.anchorNode, e.anchorOffset),
              r.collapse(!1),
              t.removeAllRanges(),
              t.addRange(r),
              t.extend(e.focusNode, e.focusOffset);
          }
        }
        function Hi(e, t) {
          var r = e.display,
            n = e.doc;
          if (t.editorIsHidden) return Vt(e), !1;
          if (
            !t.force &&
            t.visible.from >= r.viewFrom &&
            t.visible.to <= r.viewTo &&
            (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo) &&
            r.renderedView == r.view &&
            Go(e) == 0
          )
            return !1;
          ia(e) && (Vt(e), (t.dims = Di(e)));
          var i = n.first + n.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
            a = Math.min(i, t.visible.to + e.options.viewportMargin);
          r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)),
            r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)),
            _t && ((o = yi(e.doc, o)), (a = xo(e.doc, a)));
          var s =
            o != r.viewFrom ||
            a != r.viewTo ||
            r.lastWrapHeight != t.wrapperHeight ||
            r.lastWrapWidth != t.wrapperWidth;
          Xs(e, o, a),
            (r.viewOffset = Kt(q(e.doc, r.viewFrom))),
            (e.display.mover.style.top = r.viewOffset + 'px');
          var l = Go(e);
          if (
            !s &&
            l == 0 &&
            !t.force &&
            r.renderedView == r.view &&
            (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo)
          )
            return !1;
          var u = sl(e);
          return (
            l > 4 && (r.lineDiv.style.display = 'none'),
            ul(e, r.updateLineNumbers, t.dims),
            l > 4 && (r.lineDiv.style.display = ''),
            (r.renderedView = r.view),
            ll(u),
            C(r.cursorDiv),
            C(r.selectionDiv),
            (r.gutters.style.height = r.sizer.style.minHeight = 0),
            s &&
              ((r.lastWrapHeight = t.wrapperHeight),
              (r.lastWrapWidth = t.wrapperWidth),
              cn(e, 400)),
            (r.updateLineNumbers = null),
            !0
          );
        }
        function ra(e, t) {
          for (var r = t.viewport, n = !0; ; n = !1) {
            if (!n || !e.options.lineWrapping || t.oldDisplayWidth == lr(e)) {
              if (
                (r &&
                  r.top != null &&
                  (r = { top: Math.min(e.doc.height + Ci(e.display) - ki(e), r.top) }),
                (t.visible = qn(e.display, e.doc, r)),
                t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
              )
                break;
            } else n && (t.visible = qn(e.display, e.doc, r));
            if (!Hi(e, t)) break;
            Yn(e);
            var i = fn(e);
            sn(e), Wr(e, i), zi(e, i), (t.force = !1);
          }
          t.signal(e, 'update', e),
            (e.display.viewFrom != e.display.reportedViewFrom ||
              e.display.viewTo != e.display.reportedViewTo) &&
              (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
              (e.display.reportedViewFrom = e.display.viewFrom),
              (e.display.reportedViewTo = e.display.viewTo));
        }
        function Fi(e, t) {
          var r = new Zn(e, t);
          if (Hi(e, r)) {
            Yn(e), ra(e, r);
            var n = fn(e);
            sn(e), Wr(e, n), zi(e, n), r.finish();
          }
        }
        function ul(e, t, r) {
          var n = e.display,
            i = e.options.lineNumbers,
            o = n.lineDiv,
            a = o.firstChild;
          function s(w) {
            var L = w.nextSibling;
            return (
              U && ie && e.display.currentWheelTarget == w
                ? (w.style.display = 'none')
                : w.parentNode.removeChild(w),
              L
            );
          }
          for (var l = n.view, u = n.viewFrom, c = 0; c < l.length; c++) {
            var p = l[c];
            if (!p.hidden)
              if (!p.node || p.node.parentNode != o) {
                var v = Rs(e, p, u, r);
                o.insertBefore(v, a);
              } else {
                for (; a != p.node; ) a = s(a);
                var m = i && t != null && t <= u && p.lineNumber;
                p.changes && (R(p.changes, 'gutter') > -1 && (m = !1), Lo(e, p, u, r)),
                  m &&
                    (C(p.lineNumber),
                    p.lineNumber.appendChild(document.createTextNode(b(e.options, u)))),
                  (a = p.node.nextSibling);
              }
            u += p.size;
          }
          for (; a; ) a = s(a);
        }
        function Bi(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + 'px';
        }
        function zi(e, t) {
          (e.display.sizer.style.minHeight = t.docHeight + 'px'),
            (e.display.heightForcer.style.top = t.docHeight + 'px'),
            (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Wt(e) + 'px');
        }
        function na(e) {
          var t = e.display,
            r = t.view;
          if (!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter)) return;
          for (
            var n = Ai(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
              i = t.gutters.offsetWidth,
              o = n + 'px',
              a = 0;
            a < r.length;
            a++
          )
            if (!r[a].hidden) {
              e.options.fixedGutter &&
                (r[a].gutter && (r[a].gutter.style.left = o),
                r[a].gutterBackground && (r[a].gutterBackground.style.left = o));
              var s = r[a].alignable;
              if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = n + i + 'px');
        }
        function ia(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
            r = b(e.options, t.first + t.size - 1),
            n = e.display;
          if (r.length != n.lineNumChars) {
            var i = n.measure.appendChild(
                h('div', [h('div', r)], 'CodeMirror-linenumber CodeMirror-gutter-elt'),
              ),
              o = i.firstChild.offsetWidth,
              a = i.offsetWidth - o;
            return (
              (n.lineGutter.style.width = ''),
              (n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - a) + 1),
              (n.lineNumWidth = n.lineNumInnerWidth + a),
              (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
              (n.lineGutter.style.width = n.lineNumWidth + 'px'),
              Bi(e.display),
              !0
            );
          }
          return !1;
        }
        function Ui(e, t) {
          for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i],
              a = null;
            if (
              (typeof o != 'string' && ((a = o.style), (o = o.className)),
              o == 'CodeMirror-linenumbers')
            )
              if (t) n = !0;
              else continue;
            r.push({ className: o, style: a });
          }
          return t && !n && r.push({ className: 'CodeMirror-linenumbers', style: null }), r;
        }
        function oa(e) {
          var t = e.gutters,
            r = e.gutterSpecs;
          C(t), (e.lineGutter = null);
          for (var n = 0; n < r.length; ++n) {
            var i = r[n],
              o = i.className,
              a = i.style,
              s = t.appendChild(h('div', null, 'CodeMirror-gutter ' + o));
            a && (s.style.cssText = a),
              o == 'CodeMirror-linenumbers' &&
                ((e.lineGutter = s), (s.style.width = (e.lineNumWidth || 1) + 'px'));
          }
          (t.style.display = r.length ? '' : 'none'), Bi(e);
        }
        function dn(e) {
          oa(e.display), ft(e), na(e);
        }
        function fl(e, t, r, n) {
          var i = this;
          (this.input = r),
            (i.scrollbarFiller = h('div', null, 'CodeMirror-scrollbar-filler')),
            i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
            (i.gutterFiller = h('div', null, 'CodeMirror-gutter-filler')),
            i.gutterFiller.setAttribute('cm-not-content', 'true'),
            (i.lineDiv = N('div', null, 'CodeMirror-code')),
            (i.selectionDiv = h('div', null, null, 'position: relative; z-index: 1')),
            (i.cursorDiv = h('div', null, 'CodeMirror-cursors')),
            (i.measure = h('div', null, 'CodeMirror-measure')),
            (i.lineMeasure = h('div', null, 'CodeMirror-measure')),
            (i.lineSpace = N(
              'div',
              [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
              null,
              'position: relative; outline: none',
            ));
          var o = N('div', [i.lineSpace], 'CodeMirror-lines');
          (i.mover = h('div', [o], null, 'position: relative')),
            (i.sizer = h('div', [i.mover], 'CodeMirror-sizer')),
            (i.sizerWidth = null),
            (i.heightForcer = h(
              'div',
              null,
              null,
              'position: absolute; height: ' + J + 'px; width: 1px;',
            )),
            (i.gutters = h('div', null, 'CodeMirror-gutters')),
            (i.lineGutter = null),
            (i.scroller = h('div', [i.sizer, i.heightForcer, i.gutters], 'CodeMirror-scroll')),
            i.scroller.setAttribute('tabIndex', '-1'),
            (i.wrapper = h('div', [i.scrollbarFiller, i.gutterFiller, i.scroller], 'CodeMirror')),
            A && B < 8 && ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
            !U && !(te && oe) && (i.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
            (i.viewFrom = i.viewTo = t.first),
            (i.reportedViewFrom = i.reportedViewTo = t.first),
            (i.view = []),
            (i.renderedView = null),
            (i.externalMeasured = null),
            (i.viewOffset = 0),
            (i.lastWrapHeight = i.lastWrapWidth = 0),
            (i.updateLineNumbers = null),
            (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
            (i.scrollbarsClipped = !1),
            (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
            (i.alignWidgets = !1),
            (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
            (i.maxLine = null),
            (i.maxLineLength = 0),
            (i.maxLineChanged = !1),
            (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
            (i.shift = !1),
            (i.selForContextMenu = null),
            (i.activeTouch = null),
            (i.gutterSpecs = Ui(n.gutters, n.lineNumbers)),
            oa(i),
            r.init(i);
        }
        var Qn = 0,
          yt = null;
        A ? (yt = -0.53) : te ? (yt = 15) : j ? (yt = -0.7) : O && (yt = -1 / 3);
        function aa(e) {
          var t = e.wheelDeltaX,
            r = e.wheelDeltaY;
          return (
            t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
            r == null && e.detail && e.axis == e.VERTICAL_AXIS
              ? (r = e.detail)
              : r == null && (r = e.wheelDelta),
            { x: t, y: r }
          );
        }
        function hl(e) {
          var t = aa(e);
          return (t.x *= yt), (t.y *= yt), t;
        }
        function sa(e, t) {
          var r = aa(t),
            n = r.x,
            i = r.y,
            o = e.display,
            a = o.scroller,
            s = a.scrollWidth > a.clientWidth,
            l = a.scrollHeight > a.clientHeight;
          if (!((n && s) || (i && l))) return;
          if (i && ie && U) {
            e: for (var u = t.target, c = o.view; u != a; u = u.parentNode)
              for (var p = 0; p < c.length; p++)
                if (c[p].node == u) {
                  e.display.currentWheelTarget = u;
                  break e;
                }
          }
          if (n && !te && !k && yt != null) {
            i && l && un(e, Math.max(0, a.scrollTop + i * yt)),
              cr(e, Math.max(0, a.scrollLeft + n * yt)),
              (!i || (i && l)) && je(t),
              (o.wheelStartX = null);
            return;
          }
          if (i && yt != null) {
            var v = i * yt,
              m = e.doc.scrollTop,
              w = m + o.wrapper.clientHeight;
            v < 0 ? (m = Math.max(0, m + v - 50)) : (w = Math.min(e.doc.height, w + v + 50)),
              Fi(e, { top: m, bottom: w });
          }
          Qn < 20 &&
            (o.wheelStartX == null
              ? ((o.wheelStartX = a.scrollLeft),
                (o.wheelStartY = a.scrollTop),
                (o.wheelDX = n),
                (o.wheelDY = i),
                setTimeout(function() {
                  if (o.wheelStartX == null) return;
                  var L = a.scrollLeft - o.wheelStartX,
                    I = a.scrollTop - o.wheelStartY,
                    W = (I && o.wheelDY && I / o.wheelDY) || (L && o.wheelDX && L / o.wheelDX);
                  if (((o.wheelStartX = o.wheelStartY = null), !W)) return;
                  (yt = (yt * Qn + W) / (Qn + 1)), ++Qn;
                }, 200))
              : ((o.wheelDX += n), (o.wheelDY += i)));
        }
        var bt = function(t, r) {
          (this.ranges = t), (this.primIndex = r);
        };
        (bt.prototype.primary = function() {
          return this.ranges[this.primIndex];
        }),
          (bt.prototype.equals = function(e) {
            if (e == this) return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var r = this.ranges[t],
                n = e.ranges[t];
              if (!ye(r.anchor, n.anchor) || !ye(r.head, n.head)) return !1;
            }
            return !0;
          }),
          (bt.prototype.deepCopy = function() {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new ke(de(this.ranges[t].anchor), de(this.ranges[t].head));
            return new bt(e, this.primIndex);
          }),
          (bt.prototype.somethingSelected = function() {
            for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
            return !1;
          }),
          (bt.prototype.contains = function(e, t) {
            t || (t = e);
            for (var r = 0; r < this.ranges.length; r++) {
              var n = this.ranges[r];
              if (S(t, n.from()) >= 0 && S(e, n.to()) <= 0) return r;
            }
            return -1;
          });
        var ke = function(t, r) {
          (this.anchor = t), (this.head = r);
        };
        (ke.prototype.from = function() {
          return rt(this.anchor, this.head);
        }),
          (ke.prototype.to = function() {
            return tt(this.anchor, this.head);
          }),
          (ke.prototype.empty = function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
          });
        function Lt(e, t, r) {
          var n = e && e.options.selectionsMayTouch,
            i = t[r];
          t.sort(function(v, m) {
            return S(v.from(), m.from());
          }),
            (r = R(t, i));
          for (var o = 1; o < t.length; o++) {
            var a = t[o],
              s = t[o - 1],
              l = S(s.to(), a.from());
            if (n && !a.empty() ? l > 0 : l >= 0) {
              var u = rt(s.from(), a.from()),
                c = tt(s.to(), a.to()),
                p = s.empty() ? a.from() == a.head : s.from() == s.head;
              o <= r && --r, t.splice(--o, 2, new ke(p ? c : u, p ? u : c));
            }
          }
          return new bt(t, r);
        }
        function $t(e, t) {
          return new bt([new ke(e, t || e)], 0);
        }
        function er(e) {
          return e.text
            ? y(
                e.from.line + e.text.length - 1,
                se(e.text).length + (e.text.length == 1 ? e.from.ch : 0),
              )
            : e.to;
        }
        function la(e, t) {
          if (S(e, t.from) < 0) return e;
          if (S(e, t.to) <= 0) return er(t);
          var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            n = e.ch;
          return e.line == t.to.line && (n += er(t).ch - t.to.ch), y(r, n);
        }
        function _i(e, t) {
          for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new ke(la(i.anchor, t), la(i.head, t)));
          }
          return Lt(e.cm, r, e.sel.primIndex);
        }
        function ua(e, t, r) {
          return e.line == t.line
            ? y(r.line, e.ch - t.ch + r.ch)
            : y(r.line + (e.line - t.line), e.ch);
        }
        function cl(e, t, r) {
          for (var n = [], i = y(e.first, 0), o = i, a = 0; a < t.length; a++) {
            var s = t[a],
              l = ua(s.from, i, o),
              u = ua(er(s), i, o);
            if (((i = s.to), (o = u), r == 'around')) {
              var c = e.sel.ranges[a],
                p = S(c.head, c.anchor) < 0;
              n[a] = new ke(p ? u : l, p ? l : u);
            } else n[a] = new ke(l, l);
          }
          return new bt(n, e.sel.primIndex);
        }
        function Ki(e) {
          (e.doc.mode = Vr(e.options, e.doc.modeOption)), pn(e);
        }
        function pn(e) {
          e.doc.iter(function(t) {
            t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
          }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            cn(e, 100),
            e.state.modeGen++,
            e.curOp && ft(e);
        }
        function fa(e, t) {
          return (
            t.from.ch == 0 &&
            t.to.ch == 0 &&
            se(t.text) == '' &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
          );
        }
        function ji(e, t, r, n) {
          function i(H) {
            return r ? r[H] : null;
          }
          function o(H, F, _) {
            ws(H, F, _, n), Ze(H, 'change', H, t);
          }
          function a(H, F) {
            for (var _ = [], ee = H; ee < F; ++ee) _.push(new Mr(u[ee], i(ee), n));
            return _;
          }
          var s = t.from,
            l = t.to,
            u = t.text,
            c = q(e, s.line),
            p = q(e, l.line),
            v = se(u),
            m = i(u.length - 1),
            w = l.line - s.line;
          if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
          else if (fa(e, t)) {
            var L = a(0, u.length - 1);
            o(p, p.text, m), w && e.remove(s.line, w), L.length && e.insert(s.line, L);
          } else if (c == p)
            if (u.length == 1) o(c, c.text.slice(0, s.ch) + v + c.text.slice(l.ch), m);
            else {
              var I = a(1, u.length - 1);
              I.push(new Mr(v + c.text.slice(l.ch), m, n)),
                o(c, c.text.slice(0, s.ch) + u[0], i(0)),
                e.insert(s.line + 1, I);
            }
          else if (u.length == 1)
            o(c, c.text.slice(0, s.ch) + u[0] + p.text.slice(l.ch), i(0)), e.remove(s.line + 1, w);
          else {
            o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(p, v + p.text.slice(l.ch), m);
            var W = a(1, u.length - 1);
            w > 1 && e.remove(s.line + 1, w - 1), e.insert(s.line + 1, W);
          }
          Ze(e, 'change', e, t);
        }
        function tr(e, t, r) {
          function n(i, o, a) {
            if (i.linked)
              for (var s = 0; s < i.linked.length; ++s) {
                var l = i.linked[s];
                if (l.doc == o) continue;
                var u = a && l.sharedHist;
                if (r && !u) continue;
                t(l.doc, u), n(l.doc, i, u);
              }
          }
          n(e, null, !0);
        }
        function ha(e, t) {
          if (t.cm) throw new Error('This document is already in use.');
          (e.doc = t),
            (t.cm = e),
            Ni(e),
            Ki(e),
            ca(e),
            e.options.lineWrapping || wi(e),
            (e.options.mode = t.modeOption),
            ft(e);
        }
        function ca(e) {
          (e.doc.direction == 'rtl' ? Ie : ot)(e.display.lineDiv, 'CodeMirror-rtl');
        }
        function dl(e) {
          gt(e, function() {
            ca(e), ft(e);
          });
        }
        function Vn(e) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = Infinity),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e || 1);
        }
        function Gi(e, t) {
          var r = { from: de(t.from), to: er(t), text: At(e, t.from, t.to) };
          return (
            ga(e, r, t.from.line, t.to.line + 1),
            tr(
              e,
              function(n) {
                return ga(n, r, t.from.line, t.to.line + 1);
              },
              !0,
            ),
            r
          );
        }
        function da(e) {
          for (; e.length; ) {
            var t = se(e);
            if (t.ranges) e.pop();
            else break;
          }
        }
        function pl(e, t) {
          if (t) return da(e.done), se(e.done);
          if (e.done.length && !se(e.done).ranges) return se(e.done);
          if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
            return e.done.pop(), se(e.done);
        }
        function pa(e, t, r, n) {
          var i = e.history;
          i.undone.length = 0;
          var o = +new Date(),
            a,
            s;
          if (
            (i.lastOp == n ||
              (i.lastOrigin == t.origin &&
                t.origin &&
                ((t.origin.charAt(0) == '+' &&
                  i.lastModTime > o - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  t.origin.charAt(0) == '*'))) &&
            (a = pl(i, i.lastOp == n))
          )
            (s = se(a.changes)),
              S(t.from, t.to) == 0 && S(t.from, s.to) == 0
                ? (s.to = er(t))
                : a.changes.push(Gi(e, t));
          else {
            var l = se(i.done);
            for (
              (!l || !l.ranges) && $n(e.sel, i.done),
                a = { changes: [Gi(e, t)], generation: i.generation },
                i.done.push(a);
              i.done.length > i.undoDepth;

            )
              i.done.shift(), i.done[0].ranges || i.done.shift();
          }
          i.done.push(r),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = o),
            (i.lastOp = i.lastSelOp = n),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            s || We(e, 'historyAdded');
        }
        function gl(e, t, r, n) {
          var i = t.charAt(0);
          return (
            i == '*' ||
            (i == '+' &&
              r.ranges.length == n.ranges.length &&
              r.somethingSelected() == n.somethingSelected() &&
              new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
          );
        }
        function vl(e, t, r, n) {
          var i = e.history,
            o = n && n.origin;
          r == i.lastSelOp ||
          (o &&
            i.lastSelOrigin == o &&
            ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) || gl(e, o, se(i.done), t)))
            ? (i.done[i.done.length - 1] = t)
            : $n(t, i.done),
            (i.lastSelTime = +new Date()),
            (i.lastSelOrigin = o),
            (i.lastSelOp = r),
            n && n.clearRedo !== !1 && da(i.undone);
        }
        function $n(e, t) {
          var r = se(t);
          (r && r.ranges && r.equals(e)) || t.push(e);
        }
        function ga(e, t, r, n) {
          var i = t['spans_' + e.id],
            o = 0;
          e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(a) {
            a.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[o] = a.markedSpans), ++o;
          });
        }
        function ml(e) {
          if (!e) return null;
          for (var t, r = 0; r < e.length; ++r)
            e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
          return t ? (t.length ? t : null) : e;
        }
        function yl(e, t) {
          var r = t['spans_' + e.id];
          if (!r) return null;
          for (var n = [], i = 0; i < t.text.length; ++i) n.push(ml(r[i]));
          return n;
        }
        function va(e, t) {
          var r = yl(e, t),
            n = vi(e, t);
          if (!r) return n;
          if (!n) return r;
          for (var i = 0; i < r.length; ++i) {
            var o = r[i],
              a = n[i];
            if (o && a) {
              e: for (var s = 0; s < a.length; ++s) {
                for (var l = a[s], u = 0; u < o.length; ++u)
                  if (o[u].marker == l.marker) continue e;
                o.push(l);
              }
            } else a && (r[i] = a);
          }
          return r;
        }
        function Pr(e, t, r) {
          for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) {
              n.push(r ? bt.prototype.deepCopy.call(o) : o);
              continue;
            }
            var a = o.changes,
              s = [];
            n.push({ changes: s });
            for (var l = 0; l < a.length; ++l) {
              var u = a[l],
                c = void 0;
              if ((s.push({ from: u.from, to: u.to, text: u.text }), t))
                for (var p in u)
                  (c = p.match(/^spans_(\d+)$/)) &&
                    R(t, Number(c[1])) > -1 && ((se(s)[p] = u[p]), delete u[p]);
            }
          }
          return n;
        }
        function Xi(e, t, r, n) {
          if (n) {
            var i = e.anchor;
            if (r) {
              var o = S(t, i) < 0;
              o != S(r, i) < 0 ? ((i = t), (t = r)) : o != S(t, r) < 0 && (t = r);
            }
            return new ke(i, t);
          } else return new ke(r || t, t);
        }
        function ei(e, t, r, n, i) {
          i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
            nt(e, new bt([Xi(e.sel.primary(), t, r, i)], 0), n);
        }
        function ma(e, t, r) {
          for (
            var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
            o < e.sel.ranges.length;
            o++
          )
            n[o] = Xi(e.sel.ranges[o], t[o], null, i);
          var a = Lt(e.cm, n, e.sel.primIndex);
          nt(e, a, r);
        }
        function Yi(e, t, r, n) {
          var i = e.sel.ranges.slice(0);
          (i[t] = r), nt(e, Lt(e.cm, i, e.sel.primIndex), n);
        }
        function ya(e, t, r, n) {
          nt(e, $t(t, r), n);
        }
        function bl(e, t, r) {
          var n = {
            ranges: t.ranges,
            update: function(o) {
              this.ranges = [];
              for (var a = 0; a < o.length; a++)
                this.ranges[a] = new ke(ue(e, o[a].anchor), ue(e, o[a].head));
            },
            origin: r && r.origin,
          };
          return (
            We(e, 'beforeSelectionChange', e, n),
            e.cm && We(e.cm, 'beforeSelectionChange', e.cm, n),
            n.ranges != t.ranges ? Lt(e.cm, n.ranges, n.ranges.length - 1) : t
          );
        }
        function ba(e, t, r) {
          var n = e.history.done,
            i = se(n);
          i && i.ranges ? ((n[n.length - 1] = t), ti(e, t, r)) : nt(e, t, r);
        }
        function nt(e, t, r) {
          ti(e, t, r), vl(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
        }
        function ti(e, t, r) {
          (ze(e, 'beforeSelectionChange') || (e.cm && ze(e.cm, 'beforeSelectionChange'))) &&
            (t = bl(e, t, r));
          var n = (r && r.bias) || (S(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          wa(e, Ca(e, t, n, !0)), !(r && r.scroll === !1) && e.cm && Ir(e.cm);
        }
        function wa(e, t) {
          if (t.equals(e.sel)) return;
          (e.sel = t),
            e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), xr(e.cm)),
            Ze(e, 'cursorActivity', e);
        }
        function xa(e) {
          wa(e, Ca(e, e.sel, null, !1));
        }
        function Ca(e, t, r, n) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o],
              s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
              l = ri(e, a.anchor, s && s.anchor, r, n),
              u = ri(e, a.head, s && s.head, r, n);
            (i || l != a.anchor || u != a.head) &&
              (i || (i = t.ranges.slice(0, o)), (i[o] = new ke(l, u)));
          }
          return i ? Lt(e.cm, i, t.primIndex) : t;
        }
        function Rr(e, t, r, n, i) {
          var o = q(e, t.line);
          if (o.markedSpans)
            for (var a = 0; a < o.markedSpans.length; ++a) {
              var s = o.markedSpans[a],
                l = s.marker,
                u = 'selectLeft' in l ? !l.selectLeft : l.inclusiveLeft,
                c = 'selectRight' in l ? !l.selectRight : l.inclusiveRight;
              if (
                (s.from == null || (u ? s.from <= t.ch : s.from < t.ch)) &&
                (s.to == null || (c ? s.to >= t.ch : s.to > t.ch))
              ) {
                if (i && (We(l, 'beforeCursorEnter'), l.explicitlyCleared))
                  if (o.markedSpans) {
                    --a;
                    continue;
                  } else break;
                if (!l.atomic) continue;
                if (r) {
                  var p = l.find(n < 0 ? 1 : -1),
                    v = void 0;
                  if (
                    ((n < 0 ? c : u) && (p = ka(e, p, -n, p && p.line == t.line ? o : null)),
                    p && p.line == t.line && (v = S(p, r)) && (n < 0 ? v < 0 : v > 0))
                  )
                    return Rr(e, p, t, n, i);
                }
                var m = l.find(n < 0 ? -1 : 1);
                return (
                  (n < 0 ? u : c) && (m = ka(e, m, n, m.line == t.line ? o : null)),
                  m ? Rr(e, m, t, n, i) : null
                );
              }
            }
          return t;
        }
        function ri(e, t, r, n, i) {
          var o = n || 1,
            a =
              Rr(e, t, r, o, i) ||
              (!i && Rr(e, t, r, o, !0)) ||
              Rr(e, t, r, -o, i) ||
              (!i && Rr(e, t, r, -o, !0));
          return a || ((e.cantEdit = !0), y(e.first, 0));
        }
        function ka(e, t, r, n) {
          return r < 0 && t.ch == 0
            ? t.line > e.first
              ? ue(e, y(t.line - 1))
              : null
            : r > 0 && t.ch == (n || q(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? y(t.line + 1, 0)
              : null
            : new y(t.line, t.ch + r);
        }
        function Sa(e) {
          e.setSelection(y(e.firstLine(), 0), y(e.lastLine()), Oe);
        }
        function Ta(e, t, r) {
          var n = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
              return (n.canceled = !0);
            },
          };
          return (
            r &&
              (n.update = function(i, o, a, s) {
                i && (n.from = ue(e, i)),
                  o && (n.to = ue(e, o)),
                  a && (n.text = a),
                  s !== void 0 && (n.origin = s);
              }),
            We(e, 'beforeChange', e, n),
            e.cm && We(e.cm, 'beforeChange', e.cm, n),
            n.canceled
              ? (e.cm && (e.cm.curOp.updateInput = 2), null)
              : { from: n.from, to: n.to, text: n.text, origin: n.origin }
          );
        }
        function Hr(e, t, r) {
          if (e.cm) {
            if (!e.cm.curOp) return Xe(e.cm, Hr)(e, t, r);
            if (e.cm.state.suppressEdits) return;
          }
          if (
            (ze(e, 'beforeChange') || (e.cm && ze(e.cm, 'beforeChange'))) &&
            ((t = Ta(e, t, !0)), !t)
          )
            return;
          var n = po && !r && vs(e, t.from, t.to);
          if (n)
            for (var i = n.length - 1; i >= 0; --i)
              La(e, { from: n[i].from, to: n[i].to, text: i ? [''] : t.text, origin: t.origin });
          else La(e, t);
        }
        function La(e, t) {
          if (t.text.length == 1 && t.text[0] == '' && S(t.from, t.to) == 0) return;
          var r = _i(e, t);
          pa(e, t, r, e.cm ? e.cm.curOp.id : NaN), gn(e, t, r, vi(e, t));
          var n = [];
          tr(e, function(i, o) {
            !o && R(n, i.history) == -1 && (Da(i.history, t), n.push(i.history)),
              gn(i, t, null, vi(i, t));
          });
        }
        function ni(e, t, r) {
          var n = e.cm && e.cm.state.suppressEdits;
          if (n && !r) return;
          for (
            var i = e.history,
              o,
              a = e.sel,
              s = t == 'undo' ? i.done : i.undone,
              l = t == 'undo' ? i.undone : i.done,
              u = 0;
            u < s.length && !((o = s[u]), r ? o.ranges && !o.equals(e.sel) : !o.ranges);
            u++
          );
          if (u == s.length) return;
          for (i.lastOrigin = i.lastSelOrigin = null; ; )
            if (((o = s.pop()), o.ranges)) {
              if (($n(o, l), r && !o.equals(e.sel))) {
                nt(e, o, { clearRedo: !1 });
                return;
              }
              a = o;
            } else if (n) {
              s.push(o);
              return;
            } else break;
          var c = [];
          $n(a, l),
            l.push({ changes: c, generation: i.generation }),
            (i.generation = o.generation || ++i.maxGeneration);
          for (
            var p = ze(e, 'beforeChange') || (e.cm && ze(e.cm, 'beforeChange')),
              v = function(I) {
                var W = o.changes[I];
                if (((W.origin = t), p && !Ta(e, W, !1))) return (s.length = 0), {};
                c.push(Gi(e, W));
                var H = I ? _i(e, W) : se(s);
                gn(e, W, H, va(e, W)),
                  !I && e.cm && e.cm.scrollIntoView({ from: W.from, to: er(W) });
                var F = [];
                tr(e, function(_, ee) {
                  !ee && R(F, _.history) == -1 && (Da(_.history, W), F.push(_.history)),
                    gn(_, W, null, va(_, W));
                });
              },
              m = o.changes.length - 1;
            m >= 0;
            --m
          ) {
            var w = v(m);
            if (w) return w.v;
          }
        }
        function Ma(e, t) {
          if (t == 0) return;
          if (
            ((e.first += t),
            (e.sel = new bt(
              mt(e.sel.ranges, function(i) {
                return new ke(y(i.anchor.line + t, i.anchor.ch), y(i.head.line + t, i.head.ch));
              }),
              e.sel.primIndex,
            )),
            e.cm)
          ) {
            ft(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) Qt(e.cm, n, 'gutter');
          }
        }
        function gn(e, t, r, n) {
          if (e.cm && !e.cm.curOp) return Xe(e.cm, gn)(e, t, r, n);
          if (t.to.line < e.first) {
            Ma(e, t.text.length - 1 - (t.to.line - t.from.line));
            return;
          }
          if (t.from.line > e.lastLine()) return;
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            Ma(e, i),
              (t = {
                from: y(e.first, 0),
                to: y(t.to.line + i, t.to.ch),
                text: [se(t.text)],
                origin: t.origin,
              });
          }
          var o = e.lastLine();
          t.to.line > o &&
            (t = {
              from: t.from,
              to: y(o, q(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = At(e, t.from, t.to)),
            r || (r = _i(e, t)),
            e.cm ? wl(e.cm, t, n) : ji(e, t, n),
            ti(e, r, Oe),
            e.cantEdit && ri(e, y(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
        function wl(e, t, r) {
          var n = e.doc,
            i = e.display,
            o = t.from,
            a = t.to,
            s = !1,
            l = o.line;
          e.options.lineWrapping ||
            ((l = we(It(q(n, o.line)))),
            n.iter(l, a.line + 1, function(m) {
              if (m == i.maxLine) return (s = !0), !0;
            })),
            n.sel.contains(t.from, t.to) > -1 && xr(e),
            ji(n, t, r, jo(e)),
            e.options.lineWrapping ||
              (n.iter(l, o.line + t.text.length, function(m) {
                var w = Un(m);
                w > i.maxLineLength &&
                  ((i.maxLine = m), (i.maxLineLength = w), (i.maxLineChanged = !0), (s = !1));
              }),
              s && (e.curOp.updateMaxLine = !0)),
            us(n, o.line),
            cn(e, 400);
          var u = t.text.length - (a.line - o.line) - 1;
          t.full
            ? ft(e)
            : o.line == a.line && t.text.length == 1 && !fa(e.doc, t)
            ? Qt(e, o.line, 'text')
            : ft(e, o.line, a.line + 1, u);
          var c = ze(e, 'changes'),
            p = ze(e, 'change');
          if (p || c) {
            var v = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };
            p && Ze(e, 'change', e, v),
              c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(v);
          }
          e.display.selForContextMenu = null;
        }
        function Fr(e, t, r, n, i) {
          var o;
          n || (n = r),
            S(n, r) < 0 && ((o = [n, r]), (r = o[0]), (n = o[1])),
            typeof t == 'string' && (t = e.splitLines(t)),
            Hr(e, { from: r, to: n, text: t, origin: i });
        }
        function Oa(e, t, r, n) {
          r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function Ea(e, t, r, n) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              a = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()), (o.copied = !0));
              for (var s = 0; s < o.ranges.length; s++)
                Oa(o.ranges[s].anchor, t, r, n), Oa(o.ranges[s].head, t, r, n);
              continue;
            }
            for (var l = 0; l < o.changes.length; ++l) {
              var u = o.changes[l];
              if (r < u.from.line)
                (u.from = y(u.from.line + n, u.from.ch)), (u.to = y(u.to.line + n, u.to.ch));
              else if (t <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (e.splice(0, i + 1), (i = 0));
          }
        }
        function Da(e, t) {
          var r = t.from.line,
            n = t.to.line,
            i = t.text.length - (n - r) - 1;
          Ea(e.done, r, n, i), Ea(e.undone, r, n, i);
        }
        function vn(e, t, r, n) {
          var i = t,
            o = t;
          return (
            typeof t == 'number' ? (o = q(e, Jt(e, t))) : (i = we(t)),
            i == null ? null : (n(o, i) && e.cm && Qt(e.cm, i, r), o)
          );
        }
        function mn(e) {
          (this.lines = e), (this.parent = null);
          for (var t = 0, r = 0; r < e.length; ++r) (e[r].parent = this), (t += e[r].height);
          this.height = t;
        }
        mn.prototype = {
          chunkSize: function() {
            return this.lines.length;
          },
          removeInner: function(t, r) {
            for (var n = t, i = t + r; n < i; ++n) {
              var o = this.lines[n];
              (this.height -= o.height), xs(o), Ze(o, 'delete');
            }
            this.lines.splice(t, r);
          },
          collapse: function(t) {
            t.push.apply(t, this.lines);
          },
          insertInner: function(t, r, n) {
            (this.height += n),
              (this.lines = this.lines
                .slice(0, t)
                .concat(r)
                .concat(this.lines.slice(t)));
            for (var i = 0; i < r.length; ++i) r[i].parent = this;
          },
          iterN: function(t, r, n) {
            for (var i = t + r; t < i; ++t) if (n(this.lines[t])) return !0;
          },
        };
        function yn(e) {
          this.children = e;
          for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            (t += i.chunkSize()), (r += i.height), (i.parent = this);
          }
          (this.size = t), (this.height = r), (this.parent = null);
        }
        yn.prototype = {
          chunkSize: function() {
            return this.size;
          },
          removeInner: function(t, r) {
            this.size -= r;
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (t < o) {
                var a = Math.min(r, o - t),
                  s = i.height;
                if (
                  (i.removeInner(t, a),
                  (this.height -= s - i.height),
                  o == a && (this.children.splice(n--, 1), (i.parent = null)),
                  (r -= a) == 0)
                )
                  break;
                t = 0;
              } else t -= o;
            }
            if (
              this.size - r < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof mn))
            ) {
              var l = [];
              this.collapse(l), (this.children = [new mn(l)]), (this.children[0].parent = this);
            }
          },
          collapse: function(t) {
            for (var r = 0; r < this.children.length; ++r) this.children[r].collapse(t);
          },
          insertInner: function(t, r, n) {
            (this.size += r.length), (this.height += n);
            for (var i = 0; i < this.children.length; ++i) {
              var o = this.children[i],
                a = o.chunkSize();
              if (t <= a) {
                if ((o.insertInner(t, r, n), o.lines && o.lines.length > 50)) {
                  for (var s = (o.lines.length % 25) + 25, l = s; l < o.lines.length; ) {
                    var u = new mn(o.lines.slice(l, (l += 25)));
                    (o.height -= u.height), this.children.splice(++i, 0, u), (u.parent = this);
                  }
                  (o.lines = o.lines.slice(0, s)), this.maybeSpill();
                }
                break;
              }
              t -= a;
            }
          },
          maybeSpill: function() {
            if (this.children.length <= 10) return;
            var t = this;
            do {
              var r = t.children.splice(t.children.length - 5, 5),
                n = new yn(r);
              if (t.parent) {
                (t.size -= n.size), (t.height -= n.height);
                var o = R(t.parent.children, t);
                t.parent.children.splice(o + 1, 0, n);
              } else {
                var i = new yn(t.children);
                (i.parent = t), (t.children = [i, n]), (t = i);
              }
              n.parent = t.parent;
            } while (t.children.length > 10);
            t.parent.maybeSpill();
          },
          iterN: function(t, r, n) {
            for (var i = 0; i < this.children.length; ++i) {
              var o = this.children[i],
                a = o.chunkSize();
              if (t < a) {
                var s = Math.min(r, a - t);
                if (o.iterN(t, s, n)) return !0;
                if ((r -= s) == 0) break;
                t = 0;
              } else t -= a;
            }
          },
        };
        var bn = function(t, r, n) {
          if (n) for (var i in n) n.hasOwnProperty(i) && (this[i] = n[i]);
          (this.doc = t), (this.node = r);
        };
        (bn.prototype.clear = function() {
          var e = this.doc.cm,
            t = this.line.widgets,
            r = this.line,
            n = we(r);
          if (n == null || !t) return;
          for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
          t.length || (r.widgets = null);
          var o = on(this);
          Ct(r, Math.max(0, r.height - o)),
            e &&
              (gt(e, function() {
                Aa(e, r, -o), Qt(e, n, 'widget');
              }),
              Ze(e, 'lineWidgetCleared', e, this, n));
        }),
          (bn.prototype.changed = function() {
            var e = this,
              t = this.height,
              r = this.doc.cm,
              n = this.line;
            this.height = null;
            var i = on(this) - t;
            if (!i) return;
            Zt(this.doc, n) || Ct(n, n.height + i),
              r &&
                gt(r, function() {
                  (r.curOp.forceUpdate = !0), Aa(r, n, i), Ze(r, 'lineWidgetChanged', r, e, we(n));
                });
          }),
          Yt(bn);
        function Aa(e, t, r) {
          Kt(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Ri(e, r);
        }
        function xl(e, t, r, n) {
          var i = new bn(e, r, n),
            o = e.cm;
          return (
            o && i.noHScroll && (o.display.alignWidgets = !0),
            vn(e, t, 'widget', function(a) {
              var s = a.widgets || (a.widgets = []);
              if (
                (i.insertAt == null
                  ? s.push(i)
                  : s.splice(Math.min(s.length - 1, Math.max(0, i.insertAt)), 0, i),
                (i.line = a),
                o && !Zt(e, a))
              ) {
                var l = Kt(a) < e.scrollTop;
                Ct(a, a.height + on(i)), l && Ri(o, i.height), (o.curOp.forceUpdate = !0);
              }
              return !0;
            }),
            o && Ze(o, 'lineWidgetAdded', o, i, typeof t == 'number' ? t : we(t)),
            i
          );
        }
        var Na = 0,
          rr = function(t, r) {
            (this.lines = []), (this.type = r), (this.doc = t), (this.id = ++Na);
          };
        (rr.prototype.clear = function() {
          if (this.explicitlyCleared) return;
          var e = this.doc.cm,
            t = e && !e.curOp;
          if ((t && pr(e), ze(this, 'clear'))) {
            var r = this.find();
            r && Ze(this, 'clear', r.from, r.to);
          }
          for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o],
              s = tn(a.markedSpans, this);
            e && !this.collapsed
              ? Qt(e, we(a), 'text')
              : e && (s.to != null && (i = we(a)), s.from != null && (n = we(a))),
              (a.markedSpans = cs(a.markedSpans, s)),
              s.from == null && this.collapsed && !Zt(this.doc, a) && e && Ct(a, Dr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var u = It(this.lines[l]),
                c = Un(u);
              c > e.display.maxLineLength &&
                ((e.display.maxLine = u),
                (e.display.maxLineLength = c),
                (e.display.maxLineChanged = !0));
            }
          n != null && e && this.collapsed && ft(e, n, i + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && xa(e.doc)),
            e && Ze(e, 'markerCleared', e, this, n, i),
            t && gr(e),
            this.parent && this.parent.clear();
        }),
          (rr.prototype.find = function(e, t) {
            e == null && this.type == 'bookmark' && (e = 1);
            for (var r, n, i = 0; i < this.lines.length; ++i) {
              var o = this.lines[i],
                a = tn(o.markedSpans, this);
              if (a.from != null && ((r = y(t ? o : we(o), a.from)), e == -1)) return r;
              if (a.to != null && ((n = y(t ? o : we(o), a.to)), e == 1)) return n;
            }
            return r && { from: r, to: n };
          }),
          (rr.prototype.changed = function() {
            var e = this,
              t = this.find(-1, !0),
              r = this,
              n = this.doc.cm;
            if (!t || !n) return;
            gt(n, function() {
              var i = t.line,
                o = we(t.line),
                a = Si(n, o);
              if (
                (a && (Ro(a), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !Zt(r.doc, i) && r.height != null)
              ) {
                var s = r.height;
                r.height = null;
                var l = on(r) - s;
                l && Ct(i, i.height + l);
              }
              Ze(n, 'markerChanged', n, e);
            });
          }),
          (rr.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
              var t = this.doc.cm.curOp;
              (!t.maybeHiddenMarkers || R(t.maybeHiddenMarkers, this) == -1) &&
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
            }
            this.lines.push(e);
          }),
          (rr.prototype.detachLine = function(e) {
            if ((this.lines.splice(R(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
          }),
          Yt(rr);
        function Br(e, t, r, n, i) {
          if (n && n.shared) return Cl(e, t, r, n, i);
          if (e.cm && !e.cm.curOp) return Xe(e.cm, Br)(e, t, r, n, i);
          var o = new rr(e, i),
            a = S(t, r);
          if ((n && K(n, o, !1), a > 0 || (a == 0 && o.clearWhenEmpty !== !1))) return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = N('span', [o.replacedWith], 'CodeMirror-widget')),
              n.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
              n.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if (wo(e, t.line, t, r, o) || (t.line != r.line && wo(e, r.line, t, r, o)))
              throw new Error('Inserting collapsed marker partially overlapping an existing one');
            hs();
          }
          o.addToHistory && pa(e, { from: t, to: r, origin: 'markText' }, e.sel, NaN);
          var s = t.line,
            l = e.cm,
            u;
          if (
            (e.iter(s, r.line + 1, function(p) {
              l && o.collapsed && !l.options.lineWrapping && It(p) == l.display.maxLine && (u = !0),
                o.collapsed && s != t.line && Ct(p, 0),
                ds(p, new Hn(o, s == t.line ? t.ch : null, s == r.line ? r.ch : null)),
                ++s;
            }),
            o.collapsed &&
              e.iter(t.line, r.line + 1, function(p) {
                Zt(e, p) && Ct(p, 0);
              }),
            o.clearOnEnter &&
              V(o, 'beforeCursorEnter', function() {
                return o.clear();
              }),
            o.readOnly &&
              (fs(), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
            o.collapsed && ((o.id = ++Na), (o.atomic = !0)),
            l)
          ) {
            if ((u && (l.curOp.updateMaxLine = !0), o.collapsed)) ft(l, t.line, r.line + 1);
            else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
              for (var c = t.line; c <= r.line; c++) Qt(l, c, 'text');
            o.atomic && xa(l.doc), Ze(l, 'markerAdded', l, o);
          }
          return o;
        }
        var wn = function(t, r) {
          (this.markers = t), (this.primary = r);
          for (var n = 0; n < t.length; ++n) t[n].parent = this;
        };
        (wn.prototype.clear = function() {
          if (this.explicitlyCleared) return;
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
          Ze(this, 'clear');
        }),
          (wn.prototype.find = function(e, t) {
            return this.primary.find(e, t);
          }),
          Yt(wn);
        function Cl(e, t, r, n, i) {
          (n = K(n)), (n.shared = !1);
          var o = [Br(e, t, r, n, i)],
            a = o[0],
            s = n.widgetNode;
          return (
            tr(e, function(l) {
              s && (n.widgetNode = s.cloneNode(!0)), o.push(Br(l, ue(l, t), ue(l, r), n, i));
              for (var u = 0; u < l.linked.length; ++u) if (l.linked[u].isParent) return;
              a = se(o);
            }),
            new wn(o, a)
          );
        }
        function Ia(e) {
          return e.findMarks(y(e.first, 0), e.clipPos(y(e.lastLine())), function(t) {
            return t.parent;
          });
        }
        function kl(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r],
              i = n.find(),
              o = e.clipPos(i.from),
              a = e.clipPos(i.to);
            if (S(o, a)) {
              var s = Br(e, o, a, n.primary, n.primary.type);
              n.markers.push(s), (s.parent = n);
            }
          }
        }
        function Sl(e) {
          for (
            var t = function(i) {
                var o = e[i],
                  a = [o.primary.doc];
                tr(o.primary.doc, function(u) {
                  return a.push(u);
                });
                for (var s = 0; s < o.markers.length; s++) {
                  var l = o.markers[s];
                  R(a, l.doc) == -1 && ((l.parent = null), o.markers.splice(s--, 1));
                }
              },
              r = 0;
            r < e.length;
            r++
          )
            t(r);
        }
        var Tl = 0,
          wt = function e(t, r, n, i, o) {
            if (!(this instanceof e)) return new e(t, r, n, i, o);
            n == null && (n = 0),
              yn.call(this, [new mn([new Mr('', null)])]),
              (this.first = n),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = n);
            var a = y(n, 0);
            (this.sel = $t(a)),
              (this.history = new Vn(null)),
              (this.id = ++Tl),
              (this.modeOption = r),
              (this.lineSep = i),
              (this.direction = o == 'rtl' ? 'rtl' : 'ltr'),
              (this.extend = !1),
              typeof t == 'string' && (t = this.splitLines(t)),
              ji(this, { from: a, to: a, text: t }),
              nt(this, $t(a), Oe);
          };
        (wt.prototype = Xr(yn.prototype, {
          constructor: wt,
          iter: function(t, r, n) {
            n
              ? this.iterN(t - this.first, r - t, n)
              : this.iterN(this.first, this.first + this.size, t);
          },
          insert: function(t, r) {
            for (var n = 0, i = 0; i < r.length; ++i) n += r[i].height;
            this.insertInner(t - this.first, r, n);
          },
          remove: function(t, r) {
            this.removeInner(t - this.first, r);
          },
          getValue: function(t) {
            var r = $r(this, this.first, this.first + this.size);
            return t === !1 ? r : r.join(t || this.lineSeparator());
          },
          setValue: Ye(function(e) {
            var t = y(this.first, 0),
              r = this.first + this.size - 1;
            Hr(
              this,
              {
                from: t,
                to: y(r, q(this, r).text.length),
                text: this.splitLines(e),
                origin: 'setValue',
                full: !0,
              },
              !0,
            ),
              this.cm && ln(this.cm, 0, 0),
              nt(this, $t(t), Oe);
          }),
          replaceRange: function(t, r, n, i) {
            (r = ue(this, r)), (n = n ? ue(this, n) : r), Fr(this, t, r, n, i);
          },
          getRange: function(t, r, n) {
            var i = At(this, ue(this, t), ue(this, r));
            return n === !1 ? i : i.join(n || this.lineSeparator());
          },
          getLine: function(t) {
            var r = this.getLineHandle(t);
            return r && r.text;
          },
          getLineHandle: function(t) {
            if (g(this, t)) return q(this, t);
          },
          getLineNumber: function(t) {
            return we(t);
          },
          getLineHandleVisualStart: function(t) {
            return typeof t == 'number' && (t = q(this, t)), It(t);
          },
          lineCount: function() {
            return this.size;
          },
          firstLine: function() {
            return this.first;
          },
          lastLine: function() {
            return this.first + this.size - 1;
          },
          clipPos: function(t) {
            return ue(this, t);
          },
          getCursor: function(t) {
            var r = this.sel.primary(),
              n;
            return (
              t == null || t == 'head'
                ? (n = r.head)
                : t == 'anchor'
                ? (n = r.anchor)
                : t == 'end' || t == 'to' || t === !1
                ? (n = r.to())
                : (n = r.from()),
              n
            );
          },
          listSelections: function() {
            return this.sel.ranges;
          },
          somethingSelected: function() {
            return this.sel.somethingSelected();
          },
          setCursor: Ye(function(e, t, r) {
            ya(this, ue(this, typeof e == 'number' ? y(e, t || 0) : e), null, r);
          }),
          setSelection: Ye(function(e, t, r) {
            ya(this, ue(this, e), ue(this, t || e), r);
          }),
          extendSelection: Ye(function(e, t, r) {
            ei(this, ue(this, e), t && ue(this, t), r);
          }),
          extendSelections: Ye(function(e, t) {
            ma(this, oo(this, e), t);
          }),
          extendSelectionsBy: Ye(function(e, t) {
            var r = mt(this.sel.ranges, e);
            ma(this, oo(this, r), t);
          }),
          setSelections: Ye(function(e, t, r) {
            if (!e.length) return;
            for (var n = [], i = 0; i < e.length; i++)
              n[i] = new ke(ue(this, e[i].anchor), ue(this, e[i].head));
            t == null && (t = Math.min(e.length - 1, this.sel.primIndex)),
              nt(this, Lt(this.cm, n, t), r);
          }),
          addSelection: Ye(function(e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new ke(ue(this, e), ue(this, t || e))),
              nt(this, Lt(this.cm, n, n.length - 1), r);
          }),
          getSelection: function(t) {
            for (var r = this.sel.ranges, n, i = 0; i < r.length; i++) {
              var o = At(this, r[i].from(), r[i].to());
              n = n ? n.concat(o) : o;
            }
            return t === !1 ? n : n.join(t || this.lineSeparator());
          },
          getSelections: function(t) {
            for (var r = [], n = this.sel.ranges, i = 0; i < n.length; i++) {
              var o = At(this, n[i].from(), n[i].to());
              t !== !1 && (o = o.join(t || this.lineSeparator())), (r[i] = o);
            }
            return r;
          },
          replaceSelection: function(t, r, n) {
            for (var i = [], o = 0; o < this.sel.ranges.length; o++) i[o] = t;
            this.replaceSelections(i, r, n || '+input');
          },
          replaceSelections: Ye(function(e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var a = i.ranges[o];
              n[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: r };
            }
            for (var s = t && t != 'end' && cl(this, n, t), l = n.length - 1; l >= 0; l--)
              Hr(this, n[l]);
            s ? ba(this, s) : this.cm && Ir(this.cm);
          }),
          undo: Ye(function() {
            ni(this, 'undo');
          }),
          redo: Ye(function() {
            ni(this, 'redo');
          }),
          undoSelection: Ye(function() {
            ni(this, 'undo', !0);
          }),
          redoSelection: Ye(function() {
            ni(this, 'redo', !0);
          }),
          setExtending: function(t) {
            this.extend = t;
          },
          getExtending: function() {
            return this.extend;
          },
          historySize: function() {
            for (var t = this.history, r = 0, n = 0, i = 0; i < t.done.length; i++)
              t.done[i].ranges || ++r;
            for (var o = 0; o < t.undone.length; o++) t.undone[o].ranges || ++n;
            return { undo: r, redo: n };
          },
          clearHistory: function() {
            var t = this;
            (this.history = new Vn(this.history.maxGeneration)),
              tr(
                this,
                function(r) {
                  return (r.history = t.history);
                },
                !0,
              );
          },
          markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function(t) {
            return (
              t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
              this.history.generation
            );
          },
          isClean: function(t) {
            return this.history.generation == (t || this.cleanGeneration);
          },
          getHistory: function() {
            return { done: Pr(this.history.done), undone: Pr(this.history.undone) };
          },
          setHistory: function(t) {
            var r = (this.history = new Vn(this.history.maxGeneration));
            (r.done = Pr(t.done.slice(0), null, !0)), (r.undone = Pr(t.undone.slice(0), null, !0));
          },
          setGutterMarker: Ye(function(e, t, r) {
            return vn(this, e, 'gutter', function(n) {
              var i = n.gutterMarkers || (n.gutterMarkers = {});
              return (i[t] = r), !r && Dn(i) && (n.gutterMarkers = null), !0;
            });
          }),
          clearGutter: Ye(function(e) {
            var t = this;
            this.iter(function(r) {
              r.gutterMarkers &&
                r.gutterMarkers[e] &&
                vn(t, r, 'gutter', function() {
                  return (
                    (r.gutterMarkers[e] = null), Dn(r.gutterMarkers) && (r.gutterMarkers = null), !0
                  );
                });
            });
          }),
          lineInfo: function(t) {
            var r;
            if (typeof t == 'number') {
              if (!g(this, t)) return null;
              if (((r = t), (t = q(this, t)), !t)) return null;
            } else if (((r = we(t)), r == null)) return null;
            return {
              line: r,
              handle: t,
              text: t.text,
              gutterMarkers: t.gutterMarkers,
              textClass: t.textClass,
              bgClass: t.bgClass,
              wrapClass: t.wrapClass,
              widgets: t.widgets,
            };
          },
          addLineClass: Ye(function(e, t, r) {
            return vn(this, e, t == 'gutter' ? 'gutter' : 'class', function(n) {
              var i =
                t == 'text'
                  ? 'textClass'
                  : t == 'background'
                  ? 'bgClass'
                  : t == 'gutter'
                  ? 'gutterClass'
                  : 'wrapClass';
              if (!n[i]) n[i] = r;
              else {
                if (Re(r).test(n[i])) return !1;
                n[i] += ' ' + r;
              }
              return !0;
            });
          }),
          removeLineClass: Ye(function(e, t, r) {
            return vn(this, e, t == 'gutter' ? 'gutter' : 'class', function(n) {
              var i =
                  t == 'text'
                    ? 'textClass'
                    : t == 'background'
                    ? 'bgClass'
                    : t == 'gutter'
                    ? 'gutterClass'
                    : 'wrapClass',
                o = n[i];
              if (o)
                if (r == null) n[i] = null;
                else {
                  var a = o.match(Re(r));
                  if (!a) return !1;
                  var s = a.index + a[0].length;
                  n[i] =
                    o.slice(0, a.index) + (!a.index || s == o.length ? '' : ' ') + o.slice(s) ||
                    null;
                }
              else return !1;
              return !0;
            });
          }),
          addLineWidget: Ye(function(e, t, r) {
            return xl(this, e, t, r);
          }),
          removeLineWidget: function(t) {
            t.clear();
          },
          markText: function(t, r, n) {
            return Br(this, ue(this, t), ue(this, r), n, (n && n.type) || 'range');
          },
          setBookmark: function(t, r) {
            var n = {
              replacedWith: r && (r.nodeType == null ? r.widget : r),
              insertLeft: r && r.insertLeft,
              clearWhenEmpty: !1,
              shared: r && r.shared,
              handleMouseEvents: r && r.handleMouseEvents,
            };
            return (t = ue(this, t)), Br(this, t, t, n, 'bookmark');
          },
          findMarksAt: function(t) {
            t = ue(this, t);
            var r = [],
              n = q(this, t.line).markedSpans;
            if (n)
              for (var i = 0; i < n.length; ++i) {
                var o = n[i];
                (o.from == null || o.from <= t.ch) &&
                  (o.to == null || o.to >= t.ch) &&
                  r.push(o.marker.parent || o.marker);
              }
            return r;
          },
          findMarks: function(t, r, n) {
            (t = ue(this, t)), (r = ue(this, r));
            var i = [],
              o = t.line;
            return (
              this.iter(t.line, r.line + 1, function(a) {
                var s = a.markedSpans;
                if (s)
                  for (var l = 0; l < s.length; l++) {
                    var u = s[l];
                    !(
                      (u.to != null && o == t.line && t.ch >= u.to) ||
                      (u.from == null && o != t.line) ||
                      (u.from != null && o == r.line && u.from >= r.ch)
                    ) &&
                      (!n || n(u.marker)) &&
                      i.push(u.marker.parent || u.marker);
                  }
                ++o;
              }),
              i
            );
          },
          getAllMarks: function() {
            var t = [];
            return (
              this.iter(function(r) {
                var n = r.markedSpans;
                if (n) for (var i = 0; i < n.length; ++i) n[i].from != null && t.push(n[i].marker);
              }),
              t
            );
          },
          posFromIndex: function(t) {
            var r,
              n = this.first,
              i = this.lineSeparator().length;
            return (
              this.iter(function(o) {
                var a = o.text.length + i;
                if (a > t) return (r = t), !0;
                (t -= a), ++n;
              }),
              ue(this, y(n, r))
            );
          },
          indexFromPos: function(t) {
            t = ue(this, t);
            var r = t.ch;
            if (t.line < this.first || t.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return (
              this.iter(this.first, t.line, function(i) {
                r += i.text.length + n;
              }),
              r
            );
          },
          copy: function(t) {
            var r = new wt(
              $r(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction,
            );
            return (
              (r.scrollTop = this.scrollTop),
              (r.scrollLeft = this.scrollLeft),
              (r.sel = this.sel),
              (r.extend = !1),
              t &&
                ((r.history.undoDepth = this.history.undoDepth), r.setHistory(this.getHistory())),
              r
            );
          },
          linkedDoc: function(t) {
            t || (t = {});
            var r = this.first,
              n = this.first + this.size;
            t.from != null && t.from > r && (r = t.from), t.to != null && t.to < n && (n = t.to);
            var i = new wt(
              $r(this, r, n),
              t.mode || this.modeOption,
              r,
              this.lineSep,
              this.direction,
            );
            return (
              t.sharedHist && (i.history = this.history),
              (this.linked || (this.linked = [])).push({ doc: i, sharedHist: t.sharedHist }),
              (i.linked = [{ doc: this, isParent: !0, sharedHist: t.sharedHist }]),
              kl(i, Ia(this)),
              i
            );
          },
          unlinkDoc: function(t) {
            if ((t instanceof Ae && (t = t.doc), this.linked))
              for (var r = 0; r < this.linked.length; ++r) {
                var n = this.linked[r];
                if (n.doc != t) continue;
                this.linked.splice(r, 1), t.unlinkDoc(this), Sl(Ia(this));
                break;
              }
            if (t.history == this.history) {
              var i = [t.id];
              tr(
                t,
                function(o) {
                  return i.push(o.id);
                },
                !0,
              ),
                (t.history = new Vn(null)),
                (t.history.done = Pr(this.history.done, i)),
                (t.history.undone = Pr(this.history.undone, i));
            }
          },
          iterLinkedDocs: function(t) {
            tr(this, t);
          },
          getMode: function() {
            return this.mode;
          },
          getEditor: function() {
            return this.cm;
          },
          splitLines: function(t) {
            return this.lineSep ? t.split(this.lineSep) : Et(t);
          },
          lineSeparator: function() {
            return (
              this.lineSep ||
              `
`
            );
          },
          setDirection: Ye(function(e) {
            if ((e != 'rtl' && (e = 'ltr'), e == this.direction)) return;
            (this.direction = e),
              this.iter(function(t) {
                return (t.order = null);
              }),
              this.cm && dl(this.cm);
          }),
        })),
          (wt.prototype.eachLine = wt.prototype.iter);
        var Wa = 0;
        function Ll(e) {
          var t = this;
          if ((Pa(t), Ee(t, e) || jt(t.display, e))) return;
          je(e), A && (Wa = +new Date());
          var r = fr(t, e, !0),
            n = e.dataTransfer.files;
          if (!r || t.isReadOnly()) return;
          if (n && n.length && window.FileReader && window.File)
            for (
              var i = n.length,
                o = Array(i),
                a = 0,
                s = function() {
                  ++a == i &&
                    Xe(t, function() {
                      r = ue(t.doc, r);
                      var w = {
                        from: r,
                        to: r,
                        text: t.doc.splitLines(
                          o
                            .filter(function(L) {
                              return L != null;
                            })
                            .join(t.doc.lineSeparator()),
                        ),
                        origin: 'paste',
                      };
                      Hr(t.doc, w), ba(t.doc, $t(ue(t.doc, r), ue(t.doc, er(w))));
                    })();
                },
                l = function(w, L) {
                  if (
                    t.options.allowDropFileTypes &&
                    R(t.options.allowDropFileTypes, w.type) == -1
                  ) {
                    s();
                    return;
                  }
                  var I = new FileReader();
                  (I.onerror = function() {
                    return s();
                  }),
                    (I.onload = function() {
                      var W = I.result;
                      if (/[\x00-\x08\x0e-\x1f]{2}/.test(W)) {
                        s();
                        return;
                      }
                      (o[L] = W), s();
                    }),
                    I.readAsText(w);
                },
                u = 0;
              u < n.length;
              u++
            )
              l(n[u], u);
          else {
            if (t.state.draggingText && t.doc.sel.contains(r) > -1) {
              t.state.draggingText(e),
                setTimeout(function() {
                  return t.display.input.focus();
                }, 20);
              return;
            }
            try {
              var c = e.dataTransfer.getData('Text');
              if (c) {
                var p;
                if (
                  (t.state.draggingText && !t.state.draggingText.copy && (p = t.listSelections()),
                  ti(t.doc, $t(r, r)),
                  p)
                )
                  for (var v = 0; v < p.length; ++v) Fr(t.doc, '', p[v].anchor, p[v].head, 'drag');
                t.replaceSelection(c, 'around', 'paste'), t.display.input.focus();
              }
            } catch (m) {}
          }
        }
        function Ml(e, t) {
          if (A && (!e.state.draggingText || +new Date() - Wa < 100)) {
            et(t);
            return;
          }
          if (Ee(e, t) || jt(e.display, t)) return;
          if (
            (t.dataTransfer.setData('Text', e.getSelection()),
            (t.dataTransfer.effectAllowed = 'copyMove'),
            t.dataTransfer.setDragImage && !O)
          ) {
            var r = h('img', null, null, 'position: fixed; left: 0; top: 0;');
            (r.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
              k &&
                ((r.width = r.height = 1),
                e.display.wrapper.appendChild(r),
                (r._top = r.offsetTop)),
              t.dataTransfer.setDragImage(r, 0, 0),
              k && r.parentNode.removeChild(r);
          }
        }
        function Ol(e, t) {
          var r = fr(e, t);
          if (!r) return;
          var n = document.createDocumentFragment();
          Yo(e, r, n),
            e.display.dragCursor ||
              ((e.display.dragCursor = h('div', null, 'CodeMirror-cursors CodeMirror-dragcursors')),
              e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
            G(e.display.dragCursor, n);
        }
        function Pa(e) {
          e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
        }
        function Ra(e) {
          if (!document.getElementsByClassName) return;
          for (
            var t = document.getElementsByClassName('CodeMirror'), r = [], n = 0;
            n < t.length;
            n++
          ) {
            var i = t[n].CodeMirror;
            i && r.push(i);
          }
          r.length &&
            r[0].operation(function() {
              for (var o = 0; o < r.length; o++) e(r[o]);
            });
        }
        var Ha = !1;
        function El() {
          if (Ha) return;
          Dl(), (Ha = !0);
        }
        function Dl() {
          var e;
          V(window, 'resize', function() {
            e == null &&
              (e = setTimeout(function() {
                (e = null), Ra(Al);
              }, 100));
          }),
            V(window, 'blur', function() {
              return Ra(Nr);
            });
        }
        function Al(e) {
          var t = e.display;
          (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
            (t.scrollbarsClipped = !1),
            e.setSize();
        }
        for (
          var nr = {
              3: 'Pause',
              8: 'Backspace',
              9: 'Tab',
              13: 'Enter',
              16: 'Shift',
              17: 'Ctrl',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Esc',
              32: 'Space',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'Left',
              38: 'Up',
              39: 'Right',
              40: 'Down',
              44: 'PrintScrn',
              45: 'Insert',
              46: 'Delete',
              59: ';',
              61: '=',
              91: 'Mod',
              92: 'Mod',
              93: 'Mod',
              106: '*',
              107: '=',
              109: '-',
              110: '.',
              111: '/',
              145: 'ScrollLock',
              173: '-',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: "'",
              224: 'Mod',
              63232: 'Up',
              63233: 'Down',
              63234: 'Left',
              63235: 'Right',
              63272: 'Delete',
              63273: 'Home',
              63275: 'End',
              63276: 'PageUp',
              63277: 'PageDown',
              63302: 'Insert',
            },
            xn = 0;
          xn < 10;
          xn++
        )
          nr[xn + 48] = nr[xn + 96] = String(xn);
        for (var ii = 65; ii <= 90; ii++) nr[ii] = String.fromCharCode(ii);
        for (var Cn = 1; Cn <= 12; Cn++) nr[Cn + 111] = nr[Cn + 63235] = 'F' + Cn;
        var Gt = {};
        (Gt.basic = {
          Left: 'goCharLeft',
          Right: 'goCharRight',
          Up: 'goLineUp',
          Down: 'goLineDown',
          End: 'goLineEnd',
          Home: 'goLineStartSmart',
          PageUp: 'goPageUp',
          PageDown: 'goPageDown',
          Delete: 'delCharAfter',
          Backspace: 'delCharBefore',
          'Shift-Backspace': 'delCharBefore',
          Tab: 'defaultTab',
          'Shift-Tab': 'indentAuto',
          Enter: 'newlineAndIndent',
          Insert: 'toggleOverwrite',
          Esc: 'singleSelection',
        }),
          (Gt.pcDefault = {
            'Ctrl-A': 'selectAll',
            'Ctrl-D': 'deleteLine',
            'Ctrl-Z': 'undo',
            'Shift-Ctrl-Z': 'redo',
            'Ctrl-Y': 'redo',
            'Ctrl-Home': 'goDocStart',
            'Ctrl-End': 'goDocEnd',
            'Ctrl-Up': 'goLineUp',
            'Ctrl-Down': 'goLineDown',
            'Ctrl-Left': 'goGroupLeft',
            'Ctrl-Right': 'goGroupRight',
            'Alt-Left': 'goLineStart',
            'Alt-Right': 'goLineEnd',
            'Ctrl-Backspace': 'delGroupBefore',
            'Ctrl-Delete': 'delGroupAfter',
            'Ctrl-S': 'save',
            'Ctrl-F': 'find',
            'Ctrl-G': 'findNext',
            'Shift-Ctrl-G': 'findPrev',
            'Shift-Ctrl-F': 'replace',
            'Shift-Ctrl-R': 'replaceAll',
            'Ctrl-[': 'indentLess',
            'Ctrl-]': 'indentMore',
            'Ctrl-U': 'undoSelection',
            'Shift-Ctrl-U': 'redoSelection',
            'Alt-U': 'redoSelection',
            fallthrough: 'basic',
          }),
          (Gt.emacsy = {
            'Ctrl-F': 'goCharRight',
            'Ctrl-B': 'goCharLeft',
            'Ctrl-P': 'goLineUp',
            'Ctrl-N': 'goLineDown',
            'Alt-F': 'goWordRight',
            'Alt-B': 'goWordLeft',
            'Ctrl-A': 'goLineStart',
            'Ctrl-E': 'goLineEnd',
            'Ctrl-V': 'goPageDown',
            'Shift-Ctrl-V': 'goPageUp',
            'Ctrl-D': 'delCharAfter',
            'Ctrl-H': 'delCharBefore',
            'Alt-D': 'delWordAfter',
            'Alt-Backspace': 'delWordBefore',
            'Ctrl-K': 'killLine',
            'Ctrl-T': 'transposeChars',
            'Ctrl-O': 'openLine',
          }),
          (Gt.macDefault = {
            'Cmd-A': 'selectAll',
            'Cmd-D': 'deleteLine',
            'Cmd-Z': 'undo',
            'Shift-Cmd-Z': 'redo',
            'Cmd-Y': 'redo',
            'Cmd-Home': 'goDocStart',
            'Cmd-Up': 'goDocStart',
            'Cmd-End': 'goDocEnd',
            'Cmd-Down': 'goDocEnd',
            'Alt-Left': 'goGroupLeft',
            'Alt-Right': 'goGroupRight',
            'Cmd-Left': 'goLineLeft',
            'Cmd-Right': 'goLineRight',
            'Alt-Backspace': 'delGroupBefore',
            'Ctrl-Alt-Backspace': 'delGroupAfter',
            'Alt-Delete': 'delGroupAfter',
            'Cmd-S': 'save',
            'Cmd-F': 'find',
            'Cmd-G': 'findNext',
            'Shift-Cmd-G': 'findPrev',
            'Cmd-Alt-F': 'replace',
            'Shift-Cmd-Alt-F': 'replaceAll',
            'Cmd-[': 'indentLess',
            'Cmd-]': 'indentMore',
            'Cmd-Backspace': 'delWrappedLineLeft',
            'Cmd-Delete': 'delWrappedLineRight',
            'Cmd-U': 'undoSelection',
            'Shift-Cmd-U': 'redoSelection',
            'Ctrl-Up': 'goDocStart',
            'Ctrl-Down': 'goDocEnd',
            fallthrough: ['basic', 'emacsy'],
          }),
          (Gt.default = ie ? Gt.macDefault : Gt.pcDefault);
        function Nl(e) {
          var t = e.split(/-(?!$)/);
          e = t[t.length - 1];
          for (var r, n, i, o, a = 0; a < t.length - 1; a++) {
            var s = t[a];
            if (/^(cmd|meta|m)$/i.test(s)) o = !0;
            else if (/^a(lt)?$/i.test(s)) r = !0;
            else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
            else if (/^s(hift)?$/i.test(s)) i = !0;
            else throw new Error('Unrecognized modifier name: ' + s);
          }
          return (
            r && (e = 'Alt-' + e),
            n && (e = 'Ctrl-' + e),
            o && (e = 'Cmd-' + e),
            i && (e = 'Shift-' + e),
            e
          );
        }
        function Il(e) {
          var t = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
              if (n == '...') {
                delete e[r];
                continue;
              }
              for (var i = mt(r.split(' '), Nl), o = 0; o < i.length; o++) {
                var a = void 0,
                  s = void 0;
                o == i.length - 1
                  ? ((s = i.join(' ')), (a = n))
                  : ((s = i.slice(0, o + 1).join(' ')), (a = '...'));
                var l = t[s];
                if (!l) t[s] = a;
                else if (l != a) throw new Error('Inconsistent bindings for ' + s);
              }
              delete e[r];
            }
          for (var u in t) e[u] = t[u];
          return e;
        }
        function zr(e, t, r, n) {
          t = oi(t);
          var i = t.call ? t.call(e, n) : t[e];
          if (i === !1) return 'nothing';
          if (i === '...') return 'multi';
          if (i != null && r(i)) return 'handled';
          if (t.fallthrough) {
            if (Object.prototype.toString.call(t.fallthrough) != '[object Array]')
              return zr(e, t.fallthrough, r, n);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var a = zr(e, t.fallthrough[o], r, n);
              if (a) return a;
            }
          }
        }
        function Fa(e) {
          var t = typeof e == 'string' ? e : nr[e.keyCode];
          return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod';
        }
        function Ba(e, t, r) {
          var n = e;
          return (
            t.altKey && n != 'Alt' && (e = 'Alt-' + e),
            (Ke ? t.metaKey : t.ctrlKey) && n != 'Ctrl' && (e = 'Ctrl-' + e),
            (Ke ? t.ctrlKey : t.metaKey) && n != 'Mod' && (e = 'Cmd-' + e),
            !r && t.shiftKey && n != 'Shift' && (e = 'Shift-' + e),
            e
          );
        }
        function za(e, t) {
          if (k && e.keyCode == 34 && e.char) return !1;
          var r = nr[e.keyCode];
          return r == null || e.altGraphKey
            ? !1
            : (e.keyCode == 3 && e.code && (r = e.code), Ba(r, e, t));
        }
        function oi(e) {
          return typeof e == 'string' ? Gt[e] : e;
        }
        function Ur(e, t) {
          for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            for (var o = t(r[i]); n.length && S(o.from, se(n).to) <= 0; ) {
              var a = n.pop();
              if (S(a.from, o.from) < 0) {
                o.from = a.from;
                break;
              }
            }
            n.push(o);
          }
          gt(e, function() {
            for (var s = n.length - 1; s >= 0; s--) Fr(e.doc, '', n[s].from, n[s].to, '+delete');
            Ir(e);
          });
        }
        function qi(e, t, r) {
          var n = or(e.text, t + r, r);
          return n < 0 || n > e.text.length ? null : n;
        }
        function Ji(e, t, r) {
          var n = qi(e, t.ch, r);
          return n == null ? null : new y(t.line, n, r < 0 ? 'after' : 'before');
        }
        function Zi(e, t, r, n, i) {
          if (e) {
            t.doc.direction == 'rtl' && (i = -i);
            var o = at(r, t.doc.direction);
            if (o) {
              var a = i < 0 ? se(o) : o[0],
                s = i < 0 == (a.level == 1),
                l = s ? 'after' : 'before',
                u;
              if (a.level > 0 || t.doc.direction == 'rtl') {
                var c = Er(t, r);
                u = i < 0 ? r.text.length - 1 : 0;
                var p = Pt(t, c, u).top;
                (u = ar(
                  function(v) {
                    return Pt(t, c, v).top == p;
                  },
                  i < 0 == (a.level == 1) ? a.from : a.to - 1,
                  u,
                )),
                  l == 'before' && (u = qi(r, u, 1));
              } else u = i < 0 ? a.to : a.from;
              return new y(n, u, l);
            }
          }
          return new y(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
        }
        function Wl(e, t, r, n) {
          var i = at(t, e.doc.direction);
          if (!i) return Ji(t, r, n);
          r.ch >= t.text.length
            ? ((r.ch = t.text.length), (r.sticky = 'before'))
            : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
          var o = kt(i, r.ch, r.sticky),
            a = i[o];
          if (e.doc.direction == 'ltr' && a.level % 2 == 0 && (n > 0 ? a.to > r.ch : a.from < r.ch))
            return Ji(t, r, n);
          var s = function(H, F) {
              return qi(t, H instanceof y ? H.ch : H, F);
            },
            l,
            u = function(H) {
              return e.options.lineWrapping
                ? ((l = l || Er(e, t)), Ko(e, t, l, H))
                : { begin: 0, end: t.text.length };
            },
            c = u(r.sticky == 'before' ? s(r, -1) : r.ch);
          if (e.doc.direction == 'rtl' || a.level == 1) {
            var p = (a.level == 1) == n < 0,
              v = s(r, p ? 1 : -1);
            if (v != null && (p ? v <= a.to && v <= c.end : v >= a.from && v >= c.begin)) {
              var m = p ? 'before' : 'after';
              return new y(r.line, v, m);
            }
          }
          var w = function(H, F, _) {
              for (
                var ee = function(Me, lt) {
                  return lt ? new y(r.line, s(Me, 1), 'before') : new y(r.line, Me, 'after');
                };
                H >= 0 && H < i.length;
                H += F
              ) {
                var Z = i[H],
                  pe = F > 0 == (Z.level != 1),
                  xe = pe ? _.begin : s(_.end, -1);
                if (Z.from <= xe && xe < Z.to) return ee(xe, pe);
                if (((xe = pe ? Z.from : s(Z.to, -1)), _.begin <= xe && xe < _.end))
                  return ee(xe, pe);
              }
            },
            L = w(o + n, n, c);
          if (L) return L;
          var I = n > 0 ? c.end : s(c.begin, -1);
          return I != null &&
            !(n > 0 && I == t.text.length) &&
            ((L = w(n > 0 ? 0 : i.length - 1, n, u(I))), L)
            ? L
            : null;
        }
        var kn = {
          selectAll: Sa,
          singleSelection: function(t) {
            return t.setSelection(t.getCursor('anchor'), t.getCursor('head'), Oe);
          },
          killLine: function(t) {
            return Ur(t, function(r) {
              if (r.empty()) {
                var n = q(t.doc, r.head.line).text.length;
                return r.head.ch == n && r.head.line < t.lastLine()
                  ? { from: r.head, to: y(r.head.line + 1, 0) }
                  : { from: r.head, to: y(r.head.line, n) };
              } else return { from: r.from(), to: r.to() };
            });
          },
          deleteLine: function(t) {
            return Ur(t, function(r) {
              return { from: y(r.from().line, 0), to: ue(t.doc, y(r.to().line + 1, 0)) };
            });
          },
          delLineLeft: function(t) {
            return Ur(t, function(r) {
              return { from: y(r.from().line, 0), to: r.from() };
            });
          },
          delWrappedLineLeft: function(t) {
            return Ur(t, function(r) {
              var n = t.charCoords(r.head, 'div').top + 5,
                i = t.coordsChar({ left: 0, top: n }, 'div');
              return { from: i, to: r.from() };
            });
          },
          delWrappedLineRight: function(t) {
            return Ur(t, function(r) {
              var n = t.charCoords(r.head, 'div').top + 5,
                i = t.coordsChar({ left: t.display.lineDiv.offsetWidth + 100, top: n }, 'div');
              return { from: r.from(), to: i };
            });
          },
          undo: function(t) {
            return t.undo();
          },
          redo: function(t) {
            return t.redo();
          },
          undoSelection: function(t) {
            return t.undoSelection();
          },
          redoSelection: function(t) {
            return t.redoSelection();
          },
          goDocStart: function(t) {
            return t.extendSelection(y(t.firstLine(), 0));
          },
          goDocEnd: function(t) {
            return t.extendSelection(y(t.lastLine()));
          },
          goLineStart: function(t) {
            return t.extendSelectionsBy(
              function(r) {
                return Ua(t, r.head.line);
              },
              { origin: '+move', bias: 1 },
            );
          },
          goLineStartSmart: function(t) {
            return t.extendSelectionsBy(
              function(r) {
                return _a(t, r.head);
              },
              { origin: '+move', bias: 1 },
            );
          },
          goLineEnd: function(t) {
            return t.extendSelectionsBy(
              function(r) {
                return Pl(t, r.head.line);
              },
              { origin: '+move', bias: -1 },
            );
          },
          goLineRight: function(t) {
            return t.extendSelectionsBy(function(r) {
              var n = t.cursorCoords(r.head, 'div').top + 5;
              return t.coordsChar({ left: t.display.lineDiv.offsetWidth + 100, top: n }, 'div');
            }, me);
          },
          goLineLeft: function(t) {
            return t.extendSelectionsBy(function(r) {
              var n = t.cursorCoords(r.head, 'div').top + 5;
              return t.coordsChar({ left: 0, top: n }, 'div');
            }, me);
          },
          goLineLeftSmart: function(t) {
            return t.extendSelectionsBy(function(r) {
              var n = t.cursorCoords(r.head, 'div').top + 5,
                i = t.coordsChar({ left: 0, top: n }, 'div');
              return i.ch < t.getLine(i.line).search(/\S/) ? _a(t, r.head) : i;
            }, me);
          },
          goLineUp: function(t) {
            return t.moveV(-1, 'line');
          },
          goLineDown: function(t) {
            return t.moveV(1, 'line');
          },
          goPageUp: function(t) {
            return t.moveV(-1, 'page');
          },
          goPageDown: function(t) {
            return t.moveV(1, 'page');
          },
          goCharLeft: function(t) {
            return t.moveH(-1, 'char');
          },
          goCharRight: function(t) {
            return t.moveH(1, 'char');
          },
          goColumnLeft: function(t) {
            return t.moveH(-1, 'column');
          },
          goColumnRight: function(t) {
            return t.moveH(1, 'column');
          },
          goWordLeft: function(t) {
            return t.moveH(-1, 'word');
          },
          goGroupRight: function(t) {
            return t.moveH(1, 'group');
          },
          goGroupLeft: function(t) {
            return t.moveH(-1, 'group');
          },
          goWordRight: function(t) {
            return t.moveH(1, 'word');
          },
          delCharBefore: function(t) {
            return t.deleteH(-1, 'codepoint');
          },
          delCharAfter: function(t) {
            return t.deleteH(1, 'char');
          },
          delWordBefore: function(t) {
            return t.deleteH(-1, 'word');
          },
          delWordAfter: function(t) {
            return t.deleteH(1, 'word');
          },
          delGroupBefore: function(t) {
            return t.deleteH(-1, 'group');
          },
          delGroupAfter: function(t) {
            return t.deleteH(1, 'group');
          },
          indentAuto: function(t) {
            return t.indentSelection('smart');
          },
          indentMore: function(t) {
            return t.indentSelection('add');
          },
          indentLess: function(t) {
            return t.indentSelection('subtract');
          },
          insertTab: function(t) {
            return t.replaceSelection('	');
          },
          insertSoftTab: function(t) {
            for (
              var r = [], n = t.listSelections(), i = t.options.tabSize, o = 0;
              o < n.length;
              o++
            ) {
              var a = n[o].from(),
                s = Y(t.getLine(a.line), a.ch, i);
              r.push($e(i - (s % i)));
            }
            t.replaceSelections(r);
          },
          defaultTab: function(t) {
            t.somethingSelected() ? t.indentSelection('add') : t.execCommand('insertTab');
          },
          transposeChars: function(t) {
            return gt(t, function() {
              for (var r = t.listSelections(), n = [], i = 0; i < r.length; i++) {
                if (!r[i].empty()) continue;
                var o = r[i].head,
                  a = q(t.doc, o.line).text;
                if (a) {
                  if ((o.ch == a.length && (o = new y(o.line, o.ch - 1)), o.ch > 0))
                    (o = new y(o.line, o.ch + 1)),
                      t.replaceRange(
                        a.charAt(o.ch - 1) + a.charAt(o.ch - 2),
                        y(o.line, o.ch - 2),
                        o,
                        '+transpose',
                      );
                  else if (o.line > t.doc.first) {
                    var s = q(t.doc, o.line - 1).text;
                    s &&
                      ((o = new y(o.line, 1)),
                      t.replaceRange(
                        a.charAt(0) + t.doc.lineSeparator() + s.charAt(s.length - 1),
                        y(o.line - 1, s.length - 1),
                        o,
                        '+transpose',
                      ));
                  }
                }
                n.push(new ke(o, o));
              }
              t.setSelections(n);
            });
          },
          newlineAndIndent: function(t) {
            return gt(t, function() {
              for (var r = t.listSelections(), n = r.length - 1; n >= 0; n--)
                t.replaceRange(t.doc.lineSeparator(), r[n].anchor, r[n].head, '+input');
              r = t.listSelections();
              for (var i = 0; i < r.length; i++) t.indentLine(r[i].from().line, null, !0);
              Ir(t);
            });
          },
          openLine: function(t) {
            return t.replaceSelection(
              `
`,
              'start',
            );
          },
          toggleOverwrite: function(t) {
            return t.toggleOverwrite();
          },
        };
        function Ua(e, t) {
          var r = q(e.doc, t),
            n = It(r);
          return n != r && (t = we(n)), Zi(!0, e, n, t, 1);
        }
        function Pl(e, t) {
          var r = q(e.doc, t),
            n = ys(r);
          return n != r && (t = we(n)), Zi(!0, e, r, t, -1);
        }
        function _a(e, t) {
          var r = Ua(e, t.line),
            n = q(e.doc, r.line),
            i = at(n, e.doc.direction);
          if (!i || i[0].level == 0) {
            var o = Math.max(r.ch, n.text.search(/\S/)),
              a = t.line == r.line && t.ch <= o && t.ch;
            return y(r.line, a ? 0 : o, r.sticky);
          }
          return r;
        }
        function ai(e, t, r) {
          if (typeof t == 'string' && ((t = kn[t]), !t)) return !1;
          e.display.input.ensurePolled();
          var n = e.display.shift,
            i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
              r && (e.display.shift = !1),
              (i = t(e) != he);
          } finally {
            (e.display.shift = n), (e.state.suppressEdits = !1);
          }
          return i;
        }
        function Rl(e, t, r) {
          for (var n = 0; n < e.state.keyMaps.length; n++) {
            var i = zr(t, e.state.keyMaps[n], r, e);
            if (i) return i;
          }
          return (
            (e.options.extraKeys && zr(t, e.options.extraKeys, r, e)) ||
            zr(t, e.options.keyMap, r, e)
          );
        }
        var Hl = new z();
        function Sn(e, t, r, n) {
          var i = e.state.keySeq;
          if (i) {
            if (Fa(t)) return 'handled';
            if (
              (/\'$/.test(t)
                ? (e.state.keySeq = null)
                : Hl.set(50, function() {
                    e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                  }),
              Ka(e, i + ' ' + t, r, n))
            )
              return !0;
          }
          return Ka(e, t, r, n);
        }
        function Ka(e, t, r, n) {
          var i = Rl(e, t, n);
          return (
            i == 'multi' && (e.state.keySeq = t),
            i == 'handled' && Ze(e, 'keyHandled', e, t, r),
            (i == 'handled' || i == 'multi') && (je(r), Ii(e)),
            !!i
          );
        }
        function ja(e, t) {
          var r = za(t, !0);
          return r
            ? t.shiftKey && !e.state.keySeq
              ? Sn(e, 'Shift-' + r, t, function(n) {
                  return ai(e, n, !0);
                }) ||
                Sn(e, r, t, function(n) {
                  if (typeof n == 'string' ? /^go[A-Z]/.test(n) : n.motion) return ai(e, n);
                })
              : Sn(e, r, t, function(n) {
                  return ai(e, n);
                })
            : !1;
        }
        function Fl(e, t, r) {
          return Sn(e, "'" + r + "'", t, function(n) {
            return ai(e, n, !0);
          });
        }
        var Qi = null;
        function Ga(e) {
          var t = this;
          if (e.target && e.target != t.display.input.getField()) return;
          if (((t.curOp.focus = le()), Ee(t, e))) return;
          A && B < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var r = e.keyCode;
          t.display.shift = r == 16 || e.shiftKey;
          var n = ja(t, e);
          k &&
            ((Qi = n ? r : null),
            !n &&
              r == 88 &&
              !qt &&
              (ie ? e.metaKey : e.ctrlKey) &&
              t.replaceSelection('', null, 'cut')),
            te &&
              !ie &&
              !n &&
              r == 46 &&
              e.shiftKey &&
              !e.ctrlKey &&
              document.execCommand &&
              document.execCommand('cut'),
            r == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && Bl(t);
        }
        function Bl(e) {
          var t = e.display.lineDiv;
          Ie(t, 'CodeMirror-crosshair');
          function r(n) {
            (n.keyCode == 18 || !n.altKey) &&
              (ot(t, 'CodeMirror-crosshair'),
              ce(document, 'keyup', r),
              ce(document, 'mouseover', r));
          }
          V(document, 'keyup', r), V(document, 'mouseover', r);
        }
        function Xa(e) {
          e.keyCode == 16 && (this.doc.sel.shift = !1), Ee(this, e);
        }
        function Ya(e) {
          var t = this;
          if (e.target && e.target != t.display.input.getField()) return;
          if (jt(t.display, e) || Ee(t, e) || (e.ctrlKey && !e.altKey) || (ie && e.metaKey)) return;
          var r = e.keyCode,
            n = e.charCode;
          if (k && r == Qi) {
            (Qi = null), je(e);
            return;
          }
          if (k && (!e.which || e.which < 10) && ja(t, e)) return;
          var i = String.fromCharCode(n == null ? r : n);
          if (i == '\b') return;
          if (Fl(t, e, i)) return;
          t.display.input.onKeyPress(e);
        }
        var zl = 400,
          Vi = function(t, r, n) {
            (this.time = t), (this.pos = r), (this.button = n);
          };
        Vi.prototype.compare = function(e, t, r) {
          return this.time + zl > e && S(t, this.pos) == 0 && r == this.button;
        };
        var Tn, Ln;
        function Ul(e, t) {
          var r = +new Date();
          return Ln && Ln.compare(r, e, t)
            ? ((Tn = Ln = null), 'triple')
            : Tn && Tn.compare(r, e, t)
            ? ((Ln = new Vi(r, e, t)), (Tn = null), 'double')
            : ((Tn = new Vi(r, e, t)), (Ln = null), 'single');
        }
        function qa(e) {
          var t = this,
            r = t.display;
          if (Ee(t, e) || (r.activeTouch && r.input.supportsTouch())) return;
          if ((r.input.ensurePolled(), (r.shift = e.shiftKey), jt(r, e))) {
            U ||
              ((r.scroller.draggable = !1),
              setTimeout(function() {
                return (r.scroller.draggable = !0);
              }, 100));
            return;
          }
          if ($i(t, e)) return;
          var n = fr(t, e),
            i = In(e),
            o = n ? Ul(n, i) : 'single';
          if (
            (window.focus(),
            i == 1 && t.state.selectingText && t.state.selectingText(e),
            n && _l(t, i, n, o, e))
          )
            return;
          i == 1
            ? n
              ? jl(t, n, o, e)
              : Cr(e) == r.scroller && je(e)
            : i == 2
            ? (n && ei(t.doc, n),
              setTimeout(function() {
                return r.input.focus();
              }, 20))
            : i == 3 && (Fe ? t.display.input.onContextMenu(e) : Jo(t));
        }
        function _l(e, t, r, n, i) {
          var o = 'Click';
          return (
            n == 'double' ? (o = 'Double' + o) : n == 'triple' && (o = 'Triple' + o),
            (o = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + o),
            Sn(e, Ba(o, i), i, function(a) {
              if ((typeof a == 'string' && (a = kn[a]), !a)) return !1;
              var s = !1;
              try {
                e.isReadOnly() && (e.state.suppressEdits = !0), (s = a(e, r) != he);
              } finally {
                e.state.suppressEdits = !1;
              }
              return s;
            })
          );
        }
        function Kl(e, t, r) {
          var n = e.getOption('configureMouse'),
            i = n ? n(e, t, r) : {};
          if (i.unit == null) {
            var o = ae ? r.shiftKey && r.metaKey : r.altKey;
            i.unit = o ? 'rectangle' : t == 'single' ? 'char' : t == 'double' ? 'word' : 'line';
          }
          return (
            (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey),
            i.addNew == null && (i.addNew = ie ? r.metaKey : r.ctrlKey),
            i.moveOnDrag == null && (i.moveOnDrag = !(ie ? r.altKey : r.ctrlKey)),
            i
          );
        }
        function jl(e, t, r, n) {
          A ? setTimeout(P(qo, e), 0) : (e.curOp.focus = le());
          var i = Kl(e, r, n),
            o = e.doc.sel,
            a;
          e.options.dragDrop &&
          Ot &&
          !e.isReadOnly() &&
          r == 'single' &&
          (a = o.contains(t)) > -1 &&
          (S((a = o.ranges[a]).from(), t) < 0 || t.xRel > 0) &&
          (S(a.to(), t) > 0 || t.xRel < 0)
            ? Gl(e, n, t, i)
            : Xl(e, n, t, i);
        }
        function Gl(e, t, r, n) {
          var i = e.display,
            o = !1,
            a = Xe(e, function(u) {
              U && (i.scroller.draggable = !1),
                (e.state.draggingText = !1),
                ce(i.wrapper.ownerDocument, 'mouseup', a),
                ce(i.wrapper.ownerDocument, 'mousemove', s),
                ce(i.scroller, 'dragstart', l),
                ce(i.scroller, 'drop', a),
                o ||
                  (je(u),
                  n.addNew || ei(e.doc, r, null, null, n.extend),
                  (U && !O) || (A && B == 9)
                    ? setTimeout(function() {
                        i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
                      }, 20)
                    : i.input.focus());
            }),
            s = function(c) {
              o = o || Math.abs(t.clientX - c.clientX) + Math.abs(t.clientY - c.clientY) >= 10;
            },
            l = function() {
              return (o = !0);
            };
          U && (i.scroller.draggable = !0),
            (e.state.draggingText = a),
            (a.copy = !n.moveOnDrag),
            i.scroller.dragDrop && i.scroller.dragDrop(),
            V(i.wrapper.ownerDocument, 'mouseup', a),
            V(i.wrapper.ownerDocument, 'mousemove', s),
            V(i.scroller, 'dragstart', l),
            V(i.scroller, 'drop', a),
            Jo(e),
            setTimeout(function() {
              return i.input.focus();
            }, 20);
        }
        function Ja(e, t, r) {
          if (r == 'char') return new ke(t, t);
          if (r == 'word') return e.findWordAt(t);
          if (r == 'line') return new ke(y(t.line, 0), ue(e.doc, y(t.line + 1, 0)));
          var n = r(e, t);
          return new ke(n.from, n.to);
        }
        function Xl(e, t, r, n) {
          var i = e.display,
            o = e.doc;
          je(t);
          var a,
            s,
            l = o.sel,
            u = l.ranges;
          if (
            (n.addNew && !n.extend
              ? ((s = o.sel.contains(r)), s > -1 ? (a = u[s]) : (a = new ke(r, r)))
              : ((a = o.sel.primary()), (s = o.sel.primIndex)),
            n.unit == 'rectangle')
          )
            n.addNew || (a = new ke(r, r)), (r = fr(e, t, !0, !0)), (s = -1);
          else {
            var c = Ja(e, r, n.unit);
            n.extend ? (a = Xi(a, c.anchor, c.head, n.extend)) : (a = c);
          }
          n.addNew
            ? s == -1
              ? ((s = u.length), nt(o, Lt(e, u.concat([a]), s), { scroll: !1, origin: '*mouse' }))
              : u.length > 1 && u[s].empty() && n.unit == 'char' && !n.extend
              ? (nt(o, Lt(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
                  scroll: !1,
                  origin: '*mouse',
                }),
                (l = o.sel))
              : Yi(o, s, a, fe)
            : ((s = 0), nt(o, new bt([a], 0), fe), (l = o.sel));
          var p = r;
          function v(F) {
            if (S(p, F) == 0) return;
            if (((p = F), n.unit == 'rectangle')) {
              for (
                var _ = [],
                  ee = e.options.tabSize,
                  Z = Y(q(o, r.line).text, r.ch, ee),
                  pe = Y(q(o, F.line).text, F.ch, ee),
                  xe = Math.min(Z, pe),
                  Qe = Math.max(Z, pe),
                  Me = Math.min(r.line, F.line),
                  lt = Math.min(e.lastLine(), Math.max(r.line, F.line));
                Me <= lt;
                Me++
              ) {
                var ht = q(o, Me).text,
                  Ue = Be(ht, xe, ee);
                xe == Qe
                  ? _.push(new ke(y(Me, Ue), y(Me, Ue)))
                  : ht.length > Ue && _.push(new ke(y(Me, Ue), y(Me, Be(ht, Qe, ee))));
              }
              _.length || _.push(new ke(r, r)),
                nt(o, Lt(e, l.ranges.slice(0, s).concat(_), s), { origin: '*mouse', scroll: !1 }),
                e.scrollIntoView(F);
            } else {
              var ct = a,
                Ve = Ja(e, F, n.unit),
                Ge = ct.anchor,
                _e;
              S(Ve.anchor, Ge) > 0
                ? ((_e = Ve.head), (Ge = rt(ct.from(), Ve.anchor)))
                : ((_e = Ve.anchor), (Ge = tt(ct.to(), Ve.head)));
              var Pe = l.ranges.slice(0);
              (Pe[s] = Yl(e, new ke(ue(o, Ge), _e))), nt(o, Lt(e, Pe, s), fe);
            }
          }
          var m = i.wrapper.getBoundingClientRect(),
            w = 0;
          function L(F) {
            var _ = ++w,
              ee = fr(e, F, !0, n.unit == 'rectangle');
            if (!ee) return;
            if (S(ee, p) != 0) {
              (e.curOp.focus = le()), v(ee);
              var Z = qn(i, o);
              (ee.line >= Z.to || ee.line < Z.from) &&
                setTimeout(
                  Xe(e, function() {
                    w == _ && L(F);
                  }),
                  150,
                );
            } else {
              var pe = F.clientY < m.top ? -20 : F.clientY > m.bottom ? 20 : 0;
              pe &&
                setTimeout(
                  Xe(e, function() {
                    if (w != _) return;
                    (i.scroller.scrollTop += pe), L(F);
                  }),
                  50,
                );
            }
          }
          function I(F) {
            (e.state.selectingText = !1),
              (w = Infinity),
              F && (je(F), i.input.focus()),
              ce(i.wrapper.ownerDocument, 'mousemove', W),
              ce(i.wrapper.ownerDocument, 'mouseup', H),
              (o.history.lastSelOrigin = null);
          }
          var W = Xe(e, function(F) {
              F.buttons === 0 || !In(F) ? I(F) : L(F);
            }),
            H = Xe(e, I);
          (e.state.selectingText = H),
            V(i.wrapper.ownerDocument, 'mousemove', W),
            V(i.wrapper.ownerDocument, 'mouseup', H);
        }
        function Yl(e, t) {
          var r = t.anchor,
            n = t.head,
            i = q(e.doc, r.line);
          if (S(r, n) == 0 && r.sticky == n.sticky) return t;
          var o = at(i);
          if (!o) return t;
          var a = kt(o, r.ch, r.sticky),
            s = o[a];
          if (s.from != r.ch && s.to != r.ch) return t;
          var l = a + ((s.from == r.ch) == (s.level != 1) ? 0 : 1);
          if (l == 0 || l == o.length) return t;
          var u;
          if (n.line != r.line) u = (n.line - r.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0;
          else {
            var c = kt(o, n.ch, n.sticky),
              p = c - a || (n.ch - r.ch) * (s.level == 1 ? -1 : 1);
            c == l - 1 || c == l ? (u = p < 0) : (u = p > 0);
          }
          var v = o[l + (u ? -1 : 0)],
            m = u == (v.level == 1),
            w = m ? v.from : v.to,
            L = m ? 'after' : 'before';
          return r.ch == w && r.sticky == L ? t : new ke(new y(r.line, w, L), n);
        }
        function Za(e, t, r, n) {
          var i, o;
          if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
          else
            try {
              (i = t.clientX), (o = t.clientY);
            } catch (v) {
              return !1;
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
          n && je(t);
          var a = e.display,
            s = a.lineDiv.getBoundingClientRect();
          if (o > s.bottom || !ze(e, r)) return sr(t);
          o -= s.top - a.viewOffset;
          for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
            var u = a.gutters.childNodes[l];
            if (u && u.getBoundingClientRect().right >= i) {
              var c = f(e.doc, o),
                p = e.display.gutterSpecs[l];
              return We(e, r, e, c, p.className, t), sr(t);
            }
          }
        }
        function $i(e, t) {
          return Za(e, t, 'gutterClick', !0);
        }
        function Qa(e, t) {
          if (jt(e.display, t) || ql(e, t)) return;
          if (Ee(e, t, 'contextmenu')) return;
          Fe || e.display.input.onContextMenu(t);
        }
        function ql(e, t) {
          return ze(e, 'gutterContextMenu') ? Za(e, t, 'gutterContextMenu', !1) : !1;
        }
        function Va(e) {
          (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
            e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
            an(e);
        }
        var _r = {
            toString: function() {
              return 'CodeMirror.Init';
            },
          },
          $a = {},
          si = {};
        function Jl(e) {
          var t = e.optionHandlers;
          function r(n, i, o, a) {
            (e.defaults[n] = i),
              o &&
                (t[n] = a
                  ? function(s, l, u) {
                      u != _r && o(s, l, u);
                    }
                  : o);
          }
          (e.defineOption = r),
            (e.Init = _r),
            r(
              'value',
              '',
              function(n, i) {
                return n.setValue(i);
              },
              !0,
            ),
            r(
              'mode',
              null,
              function(n, i) {
                (n.doc.modeOption = i), Ki(n);
              },
              !0,
            ),
            r('indentUnit', 2, Ki, !0),
            r('indentWithTabs', !1),
            r('smartIndent', !0),
            r(
              'tabSize',
              4,
              function(n) {
                pn(n), an(n), ft(n);
              },
              !0,
            ),
            r('lineSeparator', null, function(n, i) {
              if (((n.doc.lineSep = i), !i)) return;
              var o = [],
                a = n.doc.first;
              n.doc.iter(function(l) {
                for (var u = 0; ; ) {
                  var c = l.text.indexOf(i, u);
                  if (c == -1) break;
                  (u = c + i.length), o.push(y(a, c));
                }
                a++;
              });
              for (var s = o.length - 1; s >= 0; s--)
                Fr(n.doc, i, o[s], y(o[s].line, o[s].ch + i.length));
            }),
            r(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
              function(n, i, o) {
                (n.state.specialChars = new RegExp(i.source + (i.test('	') ? '' : '|	'), 'g')),
                  o != _r && n.refresh();
              },
            ),
            r(
              'specialCharPlaceholder',
              Ss,
              function(n) {
                return n.refresh();
              },
              !0,
            ),
            r('electricChars', !0),
            r(
              'inputStyle',
              oe ? 'contenteditable' : 'textarea',
              function() {
                throw new Error('inputStyle can not (yet) be changed in a running editor');
              },
              !0,
            ),
            r(
              'spellcheck',
              !1,
              function(n, i) {
                return (n.getInputField().spellcheck = i);
              },
              !0,
            ),
            r(
              'autocorrect',
              !1,
              function(n, i) {
                return (n.getInputField().autocorrect = i);
              },
              !0,
            ),
            r(
              'autocapitalize',
              !1,
              function(n, i) {
                return (n.getInputField().autocapitalize = i);
              },
              !0,
            ),
            r('rtlMoveVisually', !Ce),
            r('wholeLineUpdateBefore', !0),
            r(
              'theme',
              'default',
              function(n) {
                Va(n), dn(n);
              },
              !0,
            ),
            r('keyMap', 'default', function(n, i, o) {
              var a = oi(i),
                s = o != _r && oi(o);
              s && s.detach && s.detach(n, a), a.attach && a.attach(n, s || null);
            }),
            r('extraKeys', null),
            r('configureMouse', null),
            r('lineWrapping', !1, Ql, !0),
            r(
              'gutters',
              [],
              function(n, i) {
                (n.display.gutterSpecs = Ui(i, n.options.lineNumbers)), dn(n);
              },
              !0,
            ),
            r(
              'fixedGutter',
              !0,
              function(n, i) {
                (n.display.gutters.style.left = i ? Ai(n.display) + 'px' : '0'), n.refresh();
              },
              !0,
            ),
            r(
              'coverGutterNextToScrollbar',
              !1,
              function(n) {
                return Wr(n);
              },
              !0,
            ),
            r(
              'scrollbarStyle',
              'native',
              function(n) {
                ta(n),
                  Wr(n),
                  n.display.scrollbars.setScrollTop(n.doc.scrollTop),
                  n.display.scrollbars.setScrollLeft(n.doc.scrollLeft);
              },
              !0,
            ),
            r(
              'lineNumbers',
              !1,
              function(n, i) {
                (n.display.gutterSpecs = Ui(n.options.gutters, i)), dn(n);
              },
              !0,
            ),
            r('firstLineNumber', 1, dn, !0),
            r(
              'lineNumberFormatter',
              function(n) {
                return n;
              },
              dn,
              !0,
            ),
            r('showCursorWhenSelecting', !1, sn, !0),
            r('resetSelectionOnContextMenu', !0),
            r('lineWiseCopyCut', !0),
            r('pasteLinesPerSelection', !0),
            r('selectionsMayTouch', !1),
            r('readOnly', !1, function(n, i) {
              i == 'nocursor' && (Nr(n), n.display.input.blur()),
                n.display.input.readOnlyChanged(i);
            }),
            r('screenReaderLabel', null, function(n, i) {
              (i = i === '' ? null : i), n.display.input.screenReaderLabelChanged(i);
            }),
            r(
              'disableInput',
              !1,
              function(n, i) {
                i || n.display.input.reset();
              },
              !0,
            ),
            r('dragDrop', !0, Zl),
            r('allowDropFileTypes', null),
            r('cursorBlinkRate', 530),
            r('cursorScrollMargin', 0),
            r('cursorHeight', 1, sn, !0),
            r('singleCursorHeightPerLine', !0, sn, !0),
            r('workTime', 100),
            r('workDelay', 100),
            r('flattenSpans', !0, pn, !0),
            r('addModeClass', !1, pn, !0),
            r('pollInterval', 100),
            r('undoDepth', 200, function(n, i) {
              return (n.doc.history.undoDepth = i);
            }),
            r('historyEventDelay', 1250),
            r(
              'viewportMargin',
              10,
              function(n) {
                return n.refresh();
              },
              !0,
            ),
            r('maxHighlightLength', 1e4, pn, !0),
            r('moveInputWithCursor', !0, function(n, i) {
              i || n.display.input.resetPosition();
            }),
            r('tabindex', null, function(n, i) {
              return (n.display.input.getField().tabIndex = i || '');
            }),
            r('autofocus', null),
            r(
              'direction',
              'ltr',
              function(n, i) {
                return n.doc.setDirection(i);
              },
              !0,
            ),
            r('phrases', null);
        }
        function Zl(e, t, r) {
          var n = r && r != _r;
          if (!t != !n) {
            var i = e.display.dragFunctions,
              o = t ? V : ce;
            o(e.display.scroller, 'dragstart', i.start),
              o(e.display.scroller, 'dragenter', i.enter),
              o(e.display.scroller, 'dragover', i.over),
              o(e.display.scroller, 'dragleave', i.leave),
              o(e.display.scroller, 'drop', i.drop);
          }
        }
        function Ql(e) {
          e.options.lineWrapping
            ? (Ie(e.display.wrapper, 'CodeMirror-wrap'),
              (e.display.sizer.style.minWidth = ''),
              (e.display.sizerWidth = null))
            : (ot(e.display.wrapper, 'CodeMirror-wrap'), wi(e)),
            Ni(e),
            ft(e),
            an(e),
            setTimeout(function() {
              return Wr(e);
            }, 100);
        }
        function Ae(e, t) {
          var r = this;
          if (!(this instanceof Ae)) return new Ae(e, t);
          (this.options = t = t ? K(t) : {}), K($a, t, !1);
          var n = t.value;
          typeof n == 'string'
            ? (n = new wt(n, t.mode, null, t.lineSeparator, t.direction))
            : t.mode && (n.modeOption = t.mode),
            (this.doc = n);
          var i = new Ae.inputStyles[t.inputStyle](this),
            o = (this.display = new fl(e, n, i, t));
          (o.wrapper.CodeMirror = this),
            Va(this),
            t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
            ta(this),
            (this.state = {
              keyMaps: [],
              overlays: [],
              modeGen: 0,
              overwrite: !1,
              delayingBlurEvent: !1,
              focused: !1,
              suppressEdits: !1,
              pasteIncoming: -1,
              cutIncoming: -1,
              selectingText: !1,
              draggingText: !1,
              highlight: new z(),
              keySeq: null,
              specialChars: null,
            }),
            t.autofocus && !oe && o.input.focus(),
            A &&
              B < 11 &&
              setTimeout(function() {
                return r.display.input.reset(!0);
              }, 20),
            Vl(this),
            El(),
            pr(this),
            (this.curOp.forceUpdate = !0),
            ha(this, n),
            (t.autofocus && !oe) || this.hasFocus()
              ? setTimeout(function() {
                  r.hasFocus() && !r.state.focused && Wi(r);
                }, 20)
              : Nr(this);
          for (var a in si) si.hasOwnProperty(a) && si[a](this, t[a], _r);
          ia(this), t.finishInit && t.finishInit(this);
          for (var s = 0; s < eo.length; ++s) eo[s](this);
          gr(this),
            U &&
              t.lineWrapping &&
              getComputedStyle(o.lineDiv).textRendering == 'optimizelegibility' &&
              (o.lineDiv.style.textRendering = 'auto');
        }
        (Ae.defaults = $a), (Ae.optionHandlers = si);
        function Vl(e) {
          var t = e.display;
          V(t.scroller, 'mousedown', Xe(e, qa)),
            A && B < 11
              ? V(
                  t.scroller,
                  'dblclick',
                  Xe(e, function(l) {
                    if (Ee(e, l)) return;
                    var u = fr(e, l);
                    if (!u || $i(e, l) || jt(e.display, l)) return;
                    je(l);
                    var c = e.findWordAt(u);
                    ei(e.doc, c.anchor, c.head);
                  }),
                )
              : V(t.scroller, 'dblclick', function(l) {
                  return Ee(e, l) || je(l);
                }),
            V(t.scroller, 'contextmenu', function(l) {
              return Qa(e, l);
            }),
            V(t.input.getField(), 'contextmenu', function(l) {
              t.scroller.contains(l.target) || Qa(e, l);
            });
          var r,
            n = { end: 0 };
          function i() {
            t.activeTouch &&
              ((r = setTimeout(function() {
                return (t.activeTouch = null);
              }, 1e3)),
              (n = t.activeTouch),
              (n.end = +new Date()));
          }
          function o(l) {
            if (l.touches.length != 1) return !1;
            var u = l.touches[0];
            return u.radiusX <= 1 && u.radiusY <= 1;
          }
          function a(l, u) {
            if (u.left == null) return !0;
            var c = u.left - l.left,
              p = u.top - l.top;
            return c * c + p * p > 20 * 20;
          }
          V(t.scroller, 'touchstart', function(l) {
            if (!Ee(e, l) && !o(l) && !$i(e, l)) {
              t.input.ensurePolled(), clearTimeout(r);
              var u = +new Date();
              (t.activeTouch = { start: u, moved: !1, prev: u - n.end <= 300 ? n : null }),
                l.touches.length == 1 &&
                  ((t.activeTouch.left = l.touches[0].pageX),
                  (t.activeTouch.top = l.touches[0].pageY));
            }
          }),
            V(t.scroller, 'touchmove', function() {
              t.activeTouch && (t.activeTouch.moved = !0);
            }),
            V(t.scroller, 'touchend', function(l) {
              var u = t.activeTouch;
              if (u && !jt(t, l) && u.left != null && !u.moved && new Date() - u.start < 300) {
                var c = e.coordsChar(t.activeTouch, 'page'),
                  p;
                !u.prev || a(u, u.prev)
                  ? (p = new ke(c, c))
                  : !u.prev.prev || a(u, u.prev.prev)
                  ? (p = e.findWordAt(c))
                  : (p = new ke(y(c.line, 0), ue(e.doc, y(c.line + 1, 0)))),
                  e.setSelection(p.anchor, p.head),
                  e.focus(),
                  je(l);
              }
              i();
            }),
            V(t.scroller, 'touchcancel', i),
            V(t.scroller, 'scroll', function() {
              t.scroller.clientHeight &&
                (un(e, t.scroller.scrollTop), cr(e, t.scroller.scrollLeft, !0), We(e, 'scroll', e));
            }),
            V(t.scroller, 'mousewheel', function(l) {
              return sa(e, l);
            }),
            V(t.scroller, 'DOMMouseScroll', function(l) {
              return sa(e, l);
            }),
            V(t.wrapper, 'scroll', function() {
              return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
            }),
            (t.dragFunctions = {
              enter: function(u) {
                Ee(e, u) || et(u);
              },
              over: function(u) {
                Ee(e, u) || (Ol(e, u), et(u));
              },
              start: function(u) {
                return Ml(e, u);
              },
              drop: Xe(e, Ll),
              leave: function(u) {
                Ee(e, u) || Pa(e);
              },
            });
          var s = t.input.getField();
          V(s, 'keyup', function(l) {
            return Xa.call(e, l);
          }),
            V(s, 'keydown', Xe(e, Ga)),
            V(s, 'keypress', Xe(e, Ya)),
            V(s, 'focus', function(l) {
              return Wi(e, l);
            }),
            V(s, 'blur', function(l) {
              return Nr(e, l);
            });
        }
        var eo = [];
        Ae.defineInitHook = function(e) {
          return eo.push(e);
        };
        function Mn(e, t, r, n) {
          var i = e.doc,
            o;
          r == null && (r = 'add'),
            r == 'smart' && (i.mode.indent ? (o = en(e, t).state) : (r = 'prev'));
          var a = e.options.tabSize,
            s = q(i, t),
            l = Y(s.text, null, a);
          s.stateAfter && (s.stateAfter = null);
          var u = s.text.match(/^\s*/)[0],
            c;
          if (!n && !/\S/.test(s.text)) (c = 0), (r = 'not');
          else if (
            r == 'smart' &&
            ((c = i.mode.indent(o, s.text.slice(u.length), s.text)), c == he || c > 150)
          ) {
            if (!n) return;
            r = 'prev';
          }
          r == 'prev'
            ? t > i.first
              ? (c = Y(q(i, t - 1).text, null, a))
              : (c = 0)
            : r == 'add'
            ? (c = l + e.options.indentUnit)
            : r == 'subtract'
            ? (c = l - e.options.indentUnit)
            : typeof r == 'number' && (c = l + r),
            (c = Math.max(0, c));
          var p = '',
            v = 0;
          if (e.options.indentWithTabs) for (var m = Math.floor(c / a); m; --m) (v += a), (p += '	');
          if ((v < c && (p += $e(c - v)), p != u))
            return Fr(i, p, y(t, 0), y(t, u.length), '+input'), (s.stateAfter = null), !0;
          for (var w = 0; w < i.sel.ranges.length; w++) {
            var L = i.sel.ranges[w];
            if (L.head.line == t && L.head.ch < u.length) {
              var I = y(t, u.length);
              Yi(i, w, new ke(I, I));
              break;
            }
          }
        }
        var Mt = null;
        function li(e) {
          Mt = e;
        }
        function to(e, t, r, n, i) {
          var o = e.doc;
          (e.display.shift = !1), n || (n = o.sel);
          var a = +new Date() - 200,
            s = i == 'paste' || e.state.pasteIncoming > a,
            l = Et(t),
            u = null;
          if (s && n.ranges.length > 1)
            if (
              Mt &&
              Mt.text.join(`
`) == t
            ) {
              if (n.ranges.length % Mt.text.length == 0) {
                u = [];
                for (var c = 0; c < Mt.text.length; c++) u.push(o.splitLines(Mt.text[c]));
              }
            } else
              l.length == n.ranges.length &&
                e.options.pasteLinesPerSelection &&
                (u = mt(l, function(W) {
                  return [W];
                }));
          for (var p = e.curOp.updateInput, v = n.ranges.length - 1; v >= 0; v--) {
            var m = n.ranges[v],
              w = m.from(),
              L = m.to();
            m.empty() &&
              (r && r > 0
                ? (w = y(w.line, w.ch - r))
                : e.state.overwrite && !s
                ? (L = y(L.line, Math.min(q(o, L.line).text.length, L.ch + se(l).length)))
                : s &&
                  Mt &&
                  Mt.lineWise &&
                  Mt.text.join(`
`) ==
                    l.join(`
`) &&
                  (w = L = y(w.line, 0)));
            var I = {
              from: w,
              to: L,
              text: u ? u[v % u.length] : l,
              origin: i || (s ? 'paste' : e.state.cutIncoming > a ? 'cut' : '+input'),
            };
            Hr(e.doc, I), Ze(e, 'inputRead', e, I);
          }
          t && !s && ts(e, t),
            Ir(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = p),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function es(e, t) {
          var r = e.clipboardData && e.clipboardData.getData('Text');
          if (r)
            return (
              e.preventDefault(),
              !t.isReadOnly() &&
                !t.options.disableInput &&
                gt(t, function() {
                  return to(t, r, 0, null, 'paste');
                }),
              !0
            );
        }
        function ts(e, t) {
          if (!e.options.electricChars || !e.options.smartIndent) return;
          for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var i = r.ranges[n];
            if (i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line)) continue;
            var o = e.getModeAt(i.head),
              a = !1;
            if (o.electricChars) {
              for (var s = 0; s < o.electricChars.length; s++)
                if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                  a = Mn(e, i.head.line, 'smart');
                  break;
                }
            } else
              o.electricInput &&
                o.electricInput.test(q(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                  (a = Mn(e, i.head.line, 'smart'));
            a && Ze(e, 'electricInput', e, i.head.line);
          }
        }
        function rs(e) {
          for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line,
              o = { anchor: y(i, 0), head: y(i + 1, 0) };
            r.push(o), t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: r };
        }
        function ns(e, t, r, n) {
          e.setAttribute('autocorrect', r ? '' : 'off'),
            e.setAttribute('autocapitalize', n ? '' : 'off'),
            e.setAttribute('spellcheck', !!t);
        }
        function is() {
          var e = h(
              'textarea',
              null,
              null,
              'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none',
            ),
            t = h(
              'div',
              [e],
              null,
              'overflow: hidden; position: relative; width: 3px; height: 0px;',
            );
          return (
            U ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
            E && (e.style.border = '1px solid black'),
            ns(e),
            t
          );
        }
        function $l(e) {
          var t = e.optionHandlers,
            r = (e.helpers = {});
          (e.prototype = {
            constructor: e,
            focus: function() {
              window.focus(), this.display.input.focus();
            },
            setOption: function(i, o) {
              var a = this.options,
                s = a[i];
              if (a[i] == o && i != 'mode') return;
              (a[i] = o),
                t.hasOwnProperty(i) && Xe(this, t[i])(this, o, s),
                We(this, 'optionChange', this, i);
            },
            getOption: function(i) {
              return this.options[i];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(i, o) {
              this.state.keyMaps[o ? 'push' : 'unshift'](oi(i));
            },
            removeKeyMap: function(i) {
              for (var o = this.state.keyMaps, a = 0; a < o.length; ++a)
                if (o[a] == i || o[a].name == i) return o.splice(a, 1), !0;
            },
            addOverlay: st(function(n, i) {
              var o = n.token ? n : e.getMode(this.options, n);
              if (o.startState) throw new Error('Overlays may not be stateful.');
              yr(
                this.state.overlays,
                { mode: o, modeSpec: n, opaque: i && i.opaque, priority: (i && i.priority) || 0 },
                function(a) {
                  return a.priority;
                },
              ),
                this.state.modeGen++,
                ft(this);
            }),
            removeOverlay: st(function(n) {
              for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
                var a = i[o].modeSpec;
                if (a == n || (typeof n == 'string' && a.name == n)) {
                  i.splice(o, 1), this.state.modeGen++, ft(this);
                  return;
                }
              }
            }),
            indentLine: st(function(n, i, o) {
              typeof i != 'string' &&
                typeof i != 'number' &&
                (i == null
                  ? (i = this.options.smartIndent ? 'smart' : 'prev')
                  : (i = i ? 'add' : 'subtract')),
                g(this.doc, n) && Mn(this, n, i, o);
            }),
            indentSelection: st(function(n) {
              for (var i = this.doc.sel.ranges, o = -1, a = 0; a < i.length; a++) {
                var s = i[a];
                if (s.empty())
                  s.head.line > o &&
                    (Mn(this, s.head.line, n, !0),
                    (o = s.head.line),
                    a == this.doc.sel.primIndex && Ir(this));
                else {
                  var l = s.from(),
                    u = s.to(),
                    c = Math.max(o, l.line);
                  o = Math.min(this.lastLine(), u.line - (u.ch ? 0 : 1)) + 1;
                  for (var p = c; p < o; ++p) Mn(this, p, n);
                  var v = this.doc.sel.ranges;
                  l.ch == 0 &&
                    i.length == v.length &&
                    v[a].from().ch > 0 &&
                    Yi(this.doc, a, new ke(l, v[a].to()), Oe);
                }
              }
            }),
            getTokenAt: function(i, o) {
              return fo(this, i, o);
            },
            getLineTokens: function(i, o) {
              return fo(this, y(i), o, !0);
            },
            getTokenTypeAt: function(i) {
              i = ue(this.doc, i);
              var o = so(this, q(this.doc, i.line)),
                a = 0,
                s = (o.length - 1) / 2,
                l = i.ch,
                u;
              if (l == 0) u = o[2];
              else
                for (;;) {
                  var c = (a + s) >> 1;
                  if ((c ? o[c * 2 - 1] : 0) >= l) s = c;
                  else if (o[c * 2 + 1] < l) a = c + 1;
                  else {
                    u = o[c * 2 + 2];
                    break;
                  }
                }
              var p = u ? u.indexOf('overlay ') : -1;
              return p < 0 ? u : p == 0 ? null : u.slice(0, p - 1);
            },
            getModeAt: function(i) {
              var o = this.doc.mode;
              return o.innerMode ? e.innerMode(o, this.getTokenAt(i).state).mode : o;
            },
            getHelper: function(i, o) {
              return this.getHelpers(i, o)[0];
            },
            getHelpers: function(i, o) {
              var a = [];
              if (!r.hasOwnProperty(o)) return a;
              var s = r[o],
                l = this.getModeAt(i);
              if (typeof l[o] == 'string') s[l[o]] && a.push(s[l[o]]);
              else if (l[o])
                for (var u = 0; u < l[o].length; u++) {
                  var c = s[l[o][u]];
                  c && a.push(c);
                }
              else
                l.helperType && s[l.helperType]
                  ? a.push(s[l.helperType])
                  : s[l.name] && a.push(s[l.name]);
              for (var p = 0; p < s._global.length; p++) {
                var v = s._global[p];
                v.pred(l, this) && R(a, v.val) == -1 && a.push(v.val);
              }
              return a;
            },
            getStateAfter: function(i, o) {
              var a = this.doc;
              return (i = Jt(a, i == null ? a.first + a.size - 1 : i)), en(this, i + 1, o).state;
            },
            cursorCoords: function(i, o) {
              var a,
                s = this.doc.sel.primary();
              return (
                i == null
                  ? (a = s.head)
                  : typeof i == 'object'
                  ? (a = ue(this.doc, i))
                  : (a = i ? s.from() : s.to()),
                Tt(this, a, o || 'page')
              );
            },
            charCoords: function(i, o) {
              return Li(this, ue(this.doc, i), o || 'page');
            },
            coordsChar: function(i, o) {
              return (i = zo(this, i, o || 'page')), Oi(this, i.left, i.top);
            },
            lineAtHeight: function(i, o) {
              return (
                (i = zo(this, { top: i, left: 0 }, o || 'page').top),
                f(this.doc, i + this.display.viewOffset)
              );
            },
            heightAtLine: function(i, o, a) {
              var s = !1,
                l;
              if (typeof i == 'number') {
                var u = this.doc.first + this.doc.size - 1;
                i < this.doc.first ? (i = this.doc.first) : i > u && ((i = u), (s = !0)),
                  (l = q(this.doc, i));
              } else l = i;
              return (
                jn(this, l, { top: 0, left: 0 }, o || 'page', a || s).top +
                (s ? this.doc.height - Kt(l) : 0)
              );
            },
            defaultTextHeight: function() {
              return Dr(this.display);
            },
            defaultCharWidth: function() {
              return Ar(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(i, o, a, s, l) {
              var u = this.display;
              i = Tt(this, ue(this.doc, i));
              var c = i.bottom,
                p = i.left;
              if (
                ((o.style.position = 'absolute'),
                o.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(o),
                u.sizer.appendChild(o),
                s == 'over')
              )
                c = i.top;
              else if (s == 'above' || s == 'near') {
                var v = Math.max(u.wrapper.clientHeight, this.doc.height),
                  m = Math.max(u.sizer.clientWidth, u.lineSpace.clientWidth);
                (s == 'above' || i.bottom + o.offsetHeight > v) && i.top > o.offsetHeight
                  ? (c = i.top - o.offsetHeight)
                  : i.bottom + o.offsetHeight <= v && (c = i.bottom),
                  p + o.offsetWidth > m && (p = m - o.offsetWidth);
              }
              (o.style.top = c + 'px'),
                (o.style.left = o.style.right = ''),
                l == 'right'
                  ? ((p = u.sizer.clientWidth - o.offsetWidth), (o.style.right = '0px'))
                  : (l == 'left'
                      ? (p = 0)
                      : l == 'middle' && (p = (u.sizer.clientWidth - o.offsetWidth) / 2),
                    (o.style.left = p + 'px')),
                a &&
                  Zs(this, {
                    left: p,
                    top: c,
                    right: p + o.offsetWidth,
                    bottom: c + o.offsetHeight,
                  });
            },
            triggerOnKeyDown: st(Ga),
            triggerOnKeyPress: st(Ya),
            triggerOnKeyUp: Xa,
            triggerOnMouseDown: st(qa),
            execCommand: function(i) {
              if (kn.hasOwnProperty(i)) return kn[i].call(null, this);
            },
            triggerElectric: st(function(n) {
              ts(this, n);
            }),
            findPosH: function(i, o, a, s) {
              var l = 1;
              o < 0 && ((l = -1), (o = -o));
              for (
                var u = ue(this.doc, i), c = 0;
                c < o && !((u = ro(this.doc, u, l, a, s)), u.hitSide);
                ++c
              );
              return u;
            },
            moveH: st(function(n, i) {
              var o = this;
              this.extendSelectionsBy(function(a) {
                return o.display.shift || o.doc.extend || a.empty()
                  ? ro(o.doc, a.head, n, i, o.options.rtlMoveVisually)
                  : n < 0
                  ? a.from()
                  : a.to();
              }, me);
            }),
            deleteH: st(function(n, i) {
              var o = this.doc.sel,
                a = this.doc;
              o.somethingSelected()
                ? a.replaceSelection('', null, '+delete')
                : Ur(this, function(s) {
                    var l = ro(a, s.head, n, i, !1);
                    return n < 0 ? { from: l, to: s.head } : { from: s.head, to: l };
                  });
            }),
            findPosV: function(i, o, a, s) {
              var l = 1,
                u = s;
              o < 0 && ((l = -1), (o = -o));
              for (var c = ue(this.doc, i), p = 0; p < o; ++p) {
                var v = Tt(this, c, 'div');
                if ((u == null ? (u = v.left) : (v.left = u), (c = os(this, v, l, a)), c.hitSide))
                  break;
              }
              return c;
            },
            moveV: st(function(n, i) {
              var o = this,
                a = this.doc,
                s = [],
                l = !this.display.shift && !a.extend && a.sel.somethingSelected();
              if (
                (a.extendSelectionsBy(function(c) {
                  if (l) return n < 0 ? c.from() : c.to();
                  var p = Tt(o, c.head, 'div');
                  c.goalColumn != null && (p.left = c.goalColumn), s.push(p.left);
                  var v = os(o, p, n, i);
                  return (
                    i == 'page' && c == a.sel.primary() && Ri(o, Li(o, v, 'div').top - p.top), v
                  );
                }, me),
                s.length)
              )
                for (var u = 0; u < a.sel.ranges.length; u++) a.sel.ranges[u].goalColumn = s[u];
            }),
            findWordAt: function(i) {
              var o = this.doc,
                a = q(o, i.line).text,
                s = i.ch,
                l = i.ch;
              if (a) {
                var u = this.getHelper(i, 'wordChars');
                (i.sticky == 'before' || l == a.length) && s ? --s : ++l;
                for (
                  var c = a.charAt(s),
                    p = br(c, u)
                      ? function(v) {
                          return br(v, u);
                        }
                      : /\s/.test(c)
                      ? function(v) {
                          return /\s/.test(v);
                        }
                      : function(v) {
                          return !/\s/.test(v) && !br(v);
                        };
                  s > 0 && p(a.charAt(s - 1));

                )
                  --s;
                for (; l < a.length && p(a.charAt(l)); ) ++l;
              }
              return new ke(y(i.line, s), y(i.line, l));
            },
            toggleOverwrite: function(i) {
              if (i != null && i == this.state.overwrite) return;
              (this.state.overwrite = !this.state.overwrite)
                ? Ie(this.display.cursorDiv, 'CodeMirror-overwrite')
                : ot(this.display.cursorDiv, 'CodeMirror-overwrite'),
                We(this, 'overwriteToggle', this, this.state.overwrite);
            },
            hasFocus: function() {
              return this.display.input.getField() == le();
            },
            isReadOnly: function() {
              return !!(this.options.readOnly || this.doc.cantEdit);
            },
            scrollTo: st(function(n, i) {
              ln(this, n, i);
            }),
            getScrollInfo: function() {
              var i = this.display.scroller;
              return {
                left: i.scrollLeft,
                top: i.scrollTop,
                height: i.scrollHeight - Wt(this) - this.display.barHeight,
                width: i.scrollWidth - Wt(this) - this.display.barWidth,
                clientHeight: ki(this),
                clientWidth: lr(this),
              };
            },
            scrollIntoView: st(function(n, i) {
              n == null
                ? ((n = { from: this.doc.sel.primary().head, to: null }),
                  i == null && (i = this.options.cursorScrollMargin))
                : typeof n == 'number'
                ? (n = { from: y(n, 0), to: null })
                : n.from == null && (n = { from: n, to: null }),
                n.to || (n.to = n.from),
                (n.margin = i || 0),
                n.from.line != null ? Qs(this, n) : Qo(this, n.from, n.to, n.margin);
            }),
            setSize: st(function(n, i) {
              var o = this,
                a = function(u) {
                  return typeof u == 'number' || /^\d+$/.test(String(u)) ? u + 'px' : u;
                };
              n != null && (this.display.wrapper.style.width = a(n)),
                i != null && (this.display.wrapper.style.height = a(i)),
                this.options.lineWrapping && Ho(this);
              var s = this.display.viewFrom;
              this.doc.iter(s, this.display.viewTo, function(l) {
                if (l.widgets) {
                  for (var u = 0; u < l.widgets.length; u++)
                    if (l.widgets[u].noHScroll) {
                      Qt(o, s, 'widget');
                      break;
                    }
                }
                ++s;
              }),
                (this.curOp.forceUpdate = !0),
                We(this, 'refresh', this);
            }),
            operation: function(i) {
              return gt(this, i);
            },
            startOperation: function() {
              return pr(this);
            },
            endOperation: function() {
              return gr(this);
            },
            refresh: st(function() {
              var n = this.display.cachedTextHeight;
              ft(this),
                (this.curOp.forceUpdate = !0),
                an(this),
                ln(this, this.doc.scrollLeft, this.doc.scrollTop),
                Bi(this.display),
                (n == null || Math.abs(n - Dr(this.display)) > 0.5 || this.options.lineWrapping) &&
                  Ni(this),
                We(this, 'refresh', this);
            }),
            swapDoc: st(function(n) {
              var i = this.doc;
              return (
                (i.cm = null),
                this.state.selectingText && this.state.selectingText(),
                ha(this, n),
                an(this),
                this.display.input.reset(),
                ln(this, n.scrollLeft, n.scrollTop),
                (this.curOp.forceScroll = !0),
                Ze(this, 'swapDoc', this, i),
                i
              );
            }),
            phrase: function(i) {
              var o = this.options.phrases;
              return o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : i;
            },
            getInputField: function() {
              return this.display.input.getField();
            },
            getWrapperElement: function() {
              return this.display.wrapper;
            },
            getScrollerElement: function() {
              return this.display.scroller;
            },
            getGutterElement: function() {
              return this.display.gutters;
            },
          }),
            Yt(e),
            (e.registerHelper = function(n, i, o) {
              r.hasOwnProperty(n) || (r[n] = e[n] = { _global: [] }), (r[n][i] = o);
            }),
            (e.registerGlobalHelper = function(n, i, o, a) {
              e.registerHelper(n, i, a), r[n]._global.push({ pred: o, val: a });
            });
        }
        function ro(e, t, r, n, i) {
          var o = t,
            a = r,
            s = q(e, t.line),
            l = i && e.direction == 'rtl' ? -r : r;
          function u() {
            var H = t.line + l;
            return H < e.first || H >= e.first + e.size
              ? !1
              : ((t = new y(H, t.ch, t.sticky)), (s = q(e, H)));
          }
          function c(H) {
            var F;
            if (n == 'codepoint') {
              var _ = s.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
              isNaN(_)
                ? (F = null)
                : (F = new y(
                    t.line,
                    Math.max(
                      0,
                      Math.min(s.text.length, t.ch + r * (_ >= 55296 && _ < 56320 ? 2 : 1)),
                    ),
                    -r,
                  ));
            } else i ? (F = Wl(e.cm, s, t, r)) : (F = Ji(s, t, r));
            if (F == null)
              if (!H && u()) t = Zi(i, e.cm, s, t.line, l);
              else return !1;
            else t = F;
            return !0;
          }
          if (n == 'char' || n == 'codepoint') c();
          else if (n == 'column') c(!0);
          else if (n == 'word' || n == 'group')
            for (
              var p = null, v = n == 'group', m = e.cm && e.cm.getHelper(t, 'wordChars'), w = !0;
              !(r < 0 && !c(!w));
              w = !1
            ) {
              var L =
                  s.text.charAt(t.ch) ||
                  `
`,
                I = br(L, m)
                  ? 'w'
                  : v &&
                    L ==
                      `
`
                  ? 'n'
                  : !v || /\s/.test(L)
                  ? null
                  : 'p';
              if ((v && !w && !I && (I = 's'), p && p != I)) {
                r < 0 && ((r = 1), c(), (t.sticky = 'after'));
                break;
              }
              if ((I && (p = I), r > 0 && !c(!w))) break;
            }
          var W = ri(e, t, o, a, !0);
          return ye(o, W) && (W.hitSide = !0), W;
        }
        function os(e, t, r, n) {
          var i = e.doc,
            o = t.left,
            a;
          if (n == 'page') {
            var s = Math.min(
                e.display.wrapper.clientHeight,
                window.innerHeight || document.documentElement.clientHeight,
              ),
              l = Math.max(s - 0.5 * Dr(e.display), 3);
            a = (r > 0 ? t.bottom : t.top) + r * l;
          } else n == 'line' && (a = r > 0 ? t.bottom + 3 : t.top - 3);
          for (var u; !((u = Oi(e, o, a)), !u.outside); ) {
            if (r < 0 ? a <= 0 : a >= i.height) {
              u.hitSide = !0;
              break;
            }
            a += r * 5;
          }
          return u;
        }
        var Te = function(t) {
          (this.cm = t),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new z()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        (Te.prototype.init = function(e) {
          var t = this,
            r = this,
            n = r.cm,
            i = (r.div = e.lineDiv);
          ns(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize);
          function o(s) {
            for (var l = s.target; l; l = l.parentNode) {
              if (l == i) return !0;
              if (/\bCodeMirror-(?:line)?widget\b/.test(l.className)) break;
            }
            return !1;
          }
          V(i, 'paste', function(s) {
            if (!o(s) || Ee(n, s) || es(s, n)) return;
            B <= 11 &&
              setTimeout(
                Xe(n, function() {
                  return t.updateFromDOM();
                }),
                20,
              );
          }),
            V(i, 'compositionstart', function(s) {
              t.composing = { data: s.data, done: !1 };
            }),
            V(i, 'compositionupdate', function(s) {
              t.composing || (t.composing = { data: s.data, done: !1 });
            }),
            V(i, 'compositionend', function(s) {
              t.composing &&
                (s.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
            }),
            V(i, 'touchstart', function() {
              return r.forceCompositionEnd();
            }),
            V(i, 'input', function() {
              t.composing || t.readFromDOMSoon();
            });
          function a(s) {
            if (!o(s) || Ee(n, s)) return;
            if (n.somethingSelected())
              li({ lineWise: !1, text: n.getSelections() }),
                s.type == 'cut' && n.replaceSelection('', null, 'cut');
            else if (n.options.lineWiseCopyCut) {
              var l = rs(n);
              li({ lineWise: !0, text: l.text }),
                s.type == 'cut' &&
                  n.operation(function() {
                    n.setSelections(l.ranges, 0, Oe), n.replaceSelection('', null, 'cut');
                  });
            } else return;
            if (s.clipboardData) {
              s.clipboardData.clearData();
              var u = Mt.text.join(`
`);
              if ((s.clipboardData.setData('Text', u), s.clipboardData.getData('Text') == u)) {
                s.preventDefault();
                return;
              }
            }
            var c = is(),
              p = c.firstChild;
            n.display.lineSpace.insertBefore(c, n.display.lineSpace.firstChild),
              (p.value = Mt.text.join(`
`));
            var v = document.activeElement;
            T(p),
              setTimeout(function() {
                n.display.lineSpace.removeChild(c), v.focus(), v == i && r.showPrimarySelection();
              }, 50);
          }
          V(i, 'copy', a), V(i, 'cut', a);
        }),
          (Te.prototype.screenReaderLabelChanged = function(e) {
            e ? this.div.setAttribute('aria-label', e) : this.div.removeAttribute('aria-label');
          }),
          (Te.prototype.prepareSelection = function() {
            var e = Xo(this.cm, !1);
            return (e.focus = document.activeElement == this.div), e;
          }),
          (Te.prototype.showSelection = function(e, t) {
            if (!e || !this.cm.display.view.length) return;
            (e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e);
          }),
          (Te.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (Te.prototype.showPrimarySelection = function() {
            var e = this.getSelection(),
              t = this.cm,
              r = t.doc.sel.primary(),
              n = r.from(),
              i = r.to();
            if (
              t.display.viewTo == t.display.viewFrom ||
              n.line >= t.display.viewTo ||
              i.line < t.display.viewFrom
            ) {
              e.removeAllRanges();
              return;
            }
            var o = ui(t, e.anchorNode, e.anchorOffset),
              a = ui(t, e.focusNode, e.focusOffset);
            if (o && !o.bad && a && !a.bad && S(rt(o, a), n) == 0 && S(tt(o, a), i) == 0) return;
            var s = t.display.view,
              l = (n.line >= t.display.viewFrom && as(t, n)) || {
                node: s[0].measure.map[2],
                offset: 0,
              },
              u = i.line < t.display.viewTo && as(t, i);
            if (!u) {
              var c = s[s.length - 1].measure,
                p = c.maps ? c.maps[c.maps.length - 1] : c.map;
              u = { node: p[p.length - 1], offset: p[p.length - 2] - p[p.length - 3] };
            }
            if (!l || !u) {
              e.removeAllRanges();
              return;
            }
            var v = e.rangeCount && e.getRangeAt(0),
              m;
            try {
              m = D(l.node, l.offset, u.offset, u.node);
            } catch (w) {}
            m &&
              (!te && t.state.focused
                ? (e.collapse(l.node, l.offset),
                  m.collapsed || (e.removeAllRanges(), e.addRange(m)))
                : (e.removeAllRanges(), e.addRange(m)),
              v && e.anchorNode == null ? e.addRange(v) : te && this.startGracePeriod()),
              this.rememberSelection();
          }),
          (Te.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function() {
                (e.gracePeriod = !1),
                  e.selectionChanged() &&
                    e.cm.operation(function() {
                      return (e.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (Te.prototype.showMultipleSelections = function(e) {
            G(this.cm.display.cursorDiv, e.cursors), G(this.cm.display.selectionDiv, e.selection);
          }),
          (Te.prototype.rememberSelection = function() {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
              (this.lastAnchorOffset = e.anchorOffset),
              (this.lastFocusNode = e.focusNode),
              (this.lastFocusOffset = e.focusOffset);
          }),
          (Te.prototype.selectionInEditor = function() {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return Q(this.div, t);
          }),
          (Te.prototype.focus = function() {
            this.cm.options.readOnly != 'nocursor' &&
              ((!this.selectionInEditor() || document.activeElement != this.div) &&
                this.showSelection(this.prepareSelection(), !0),
              this.div.focus());
          }),
          (Te.prototype.blur = function() {
            this.div.blur();
          }),
          (Te.prototype.getField = function() {
            return this.div;
          }),
          (Te.prototype.supportsTouch = function() {
            return !0;
          }),
          (Te.prototype.receivedFocus = function() {
            var e = this;
            this.selectionInEditor()
              ? this.pollSelection()
              : gt(this.cm, function() {
                  return (e.cm.curOp.selectionChanged = !0);
                });
            function t() {
              e.cm.state.focused &&
                (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
            }
            this.polling.set(this.cm.options.pollInterval, t);
          }),
          (Te.prototype.selectionChanged = function() {
            var e = this.getSelection();
            return (
              e.anchorNode != this.lastAnchorNode ||
              e.anchorOffset != this.lastAnchorOffset ||
              e.focusNode != this.lastFocusNode ||
              e.focusOffset != this.lastFocusOffset
            );
          }),
          (Te.prototype.pollSelection = function() {
            if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) return;
            var e = this.getSelection(),
              t = this.cm;
            if (M && j && this.cm.display.gutterSpecs.length && eu(e.anchorNode)) {
              this.cm.triggerOnKeyDown({ type: 'keydown', keyCode: 8, preventDefault: Math.abs }),
                this.blur(),
                this.focus();
              return;
            }
            if (this.composing) return;
            this.rememberSelection();
            var r = ui(t, e.anchorNode, e.anchorOffset),
              n = ui(t, e.focusNode, e.focusOffset);
            r &&
              n &&
              gt(t, function() {
                nt(t.doc, $t(r, n), Oe), (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
              });
          }),
          (Te.prototype.pollContent = function() {
            this.readDOMTimeout != null &&
              (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e = this.cm,
              t = e.display,
              r = e.doc.sel.primary(),
              n = r.from(),
              i = r.to();
            if (
              (n.ch == 0 &&
                n.line > e.firstLine() &&
                (n = y(n.line - 1, q(e.doc, n.line - 1).length)),
              i.ch == q(e.doc, i.line).text.length &&
                i.line < e.lastLine() &&
                (i = y(i.line + 1, 0)),
              n.line < t.viewFrom || i.line > t.viewTo - 1)
            )
              return !1;
            var o, a, s;
            n.line == t.viewFrom || (o = hr(e, n.line)) == 0
              ? ((a = we(t.view[0].line)), (s = t.view[0].node))
              : ((a = we(t.view[o].line)), (s = t.view[o - 1].node.nextSibling));
            var l = hr(e, i.line),
              u,
              c;
            if (
              (l == t.view.length - 1
                ? ((u = t.viewTo - 1), (c = t.lineDiv.lastChild))
                : ((u = we(t.view[l + 1].line) - 1), (c = t.view[l + 1].node.previousSibling)),
              !s)
            )
              return !1;
            for (
              var p = e.doc.splitLines(tu(e, s, c, a, u)),
                v = At(e.doc, y(a, 0), y(u, q(e.doc, u).text.length));
              p.length > 1 && v.length > 1;

            )
              if (se(p) == se(v)) p.pop(), v.pop(), u--;
              else if (p[0] == v[0]) p.shift(), v.shift(), a++;
              else break;
            for (
              var m = 0, w = 0, L = p[0], I = v[0], W = Math.min(L.length, I.length);
              m < W && L.charCodeAt(m) == I.charCodeAt(m);

            )
              ++m;
            for (
              var H = se(p),
                F = se(v),
                _ = Math.min(
                  H.length - (p.length == 1 ? m : 0),
                  F.length - (v.length == 1 ? m : 0),
                );
              w < _ && H.charCodeAt(H.length - w - 1) == F.charCodeAt(F.length - w - 1);

            )
              ++w;
            if (p.length == 1 && v.length == 1 && a == n.line)
              for (
                ;
                m && m > n.ch && H.charCodeAt(H.length - w - 1) == F.charCodeAt(F.length - w - 1);

              )
                m--, w++;
            (p[p.length - 1] = H.slice(0, H.length - w).replace(/^\u200b+/, '')),
              (p[0] = p[0].slice(m).replace(/\u200b+$/, ''));
            var ee = y(a, m),
              Z = y(u, v.length ? se(v).length - w : 0);
            if (p.length > 1 || p[0] || S(ee, Z)) return Fr(e.doc, p, ee, Z, '+input'), !0;
          }),
          (Te.prototype.ensurePolled = function() {
            this.forceCompositionEnd();
          }),
          (Te.prototype.reset = function() {
            this.forceCompositionEnd();
          }),
          (Te.prototype.forceCompositionEnd = function() {
            if (!this.composing) return;
            clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus();
          }),
          (Te.prototype.readFromDOMSoon = function() {
            var e = this;
            if (this.readDOMTimeout != null) return;
            this.readDOMTimeout = setTimeout(function() {
              if (((e.readDOMTimeout = null), e.composing))
                if (e.composing.done) e.composing = null;
                else return;
              e.updateFromDOM();
            }, 80);
          }),
          (Te.prototype.updateFromDOM = function() {
            var e = this;
            (this.cm.isReadOnly() || !this.pollContent()) &&
              gt(this.cm, function() {
                return ft(e.cm);
              });
          }),
          (Te.prototype.setUneditable = function(e) {
            e.contentEditable = 'false';
          }),
          (Te.prototype.onKeyPress = function(e) {
            if (e.charCode == 0 || this.composing) return;
            e.preventDefault(),
              this.cm.isReadOnly() ||
                Xe(this.cm, to)(
                  this.cm,
                  String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode),
                  0,
                );
          }),
          (Te.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String(e != 'nocursor');
          }),
          (Te.prototype.onContextMenu = function() {}),
          (Te.prototype.resetPosition = function() {}),
          (Te.prototype.needsContentAttribute = !0);
        function as(e, t) {
          var r = Si(e, t.line);
          if (!r || r.hidden) return null;
          var n = q(e.doc, t.line),
            i = No(r, n, t.line),
            o = at(n, e.doc.direction),
            a = 'left';
          if (o) {
            var s = kt(o, t.ch);
            a = s % 2 ? 'right' : 'left';
          }
          var l = Po(i.map, t.ch, a);
          return (l.offset = l.collapse == 'right' ? l.end : l.start), l;
        }
        function eu(e) {
          for (var t = e; t; t = t.parentNode)
            if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
          return !1;
        }
        function Kr(e, t) {
          return t && (e.bad = !0), e;
        }
        function tu(e, t, r, n, i) {
          var o = '',
            a = !1,
            s = e.doc.lineSeparator(),
            l = !1;
          function u(m) {
            return function(w) {
              return w.id == m;
            };
          }
          function c() {
            a && ((o += s), l && (o += s), (a = l = !1));
          }
          function p(m) {
            m && (c(), (o += m));
          }
          function v(m) {
            if (m.nodeType == 1) {
              var w = m.getAttribute('cm-text');
              if (w) {
                p(w);
                return;
              }
              var L = m.getAttribute('cm-marker'),
                I;
              if (L) {
                var W = e.findMarks(y(n, 0), y(i + 1, 0), u(+L));
                W.length && (I = W[0].find(0)) && p(At(e.doc, I.from, I.to).join(s));
                return;
              }
              if (m.getAttribute('contenteditable') == 'false') return;
              var H = /^(pre|div|p|li|table|br)$/i.test(m.nodeName);
              if (!/^br$/i.test(m.nodeName) && m.textContent.length == 0) return;
              H && c();
              for (var F = 0; F < m.childNodes.length; F++) v(m.childNodes[F]);
              /^(pre|p)$/i.test(m.nodeName) && (l = !0), H && (a = !0);
            } else m.nodeType == 3 && p(m.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
          }
          for (; !(v(t), t == r); ) (t = t.nextSibling), (l = !1);
          return o;
        }
        function ui(e, t, r) {
          var n;
          if (t == e.display.lineDiv) {
            if (((n = e.display.lineDiv.childNodes[r]), !n))
              return Kr(e.clipPos(y(e.display.viewTo - 1)), !0);
            (t = null), (r = 0);
          } else
            for (n = t; ; n = n.parentNode) {
              if (!n || n == e.display.lineDiv) return null;
              if (n.parentNode && n.parentNode == e.display.lineDiv) break;
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n) return ru(o, t, r);
          }
        }
        function ru(e, t, r) {
          var n = e.text.firstChild,
            i = !1;
          if (!t || !Q(n, t)) return Kr(y(we(e.line), 0), !0);
          if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
            var o = e.rest ? se(e.rest) : e.line;
            return Kr(y(we(o), o.text.length), i);
          }
          var a = t.nodeType == 3 ? t : null,
            s = t;
          for (
            !a &&
            t.childNodes.length == 1 &&
            t.firstChild.nodeType == 3 &&
            ((a = t.firstChild), r && (r = a.nodeValue.length));
            s.parentNode != n;

          )
            s = s.parentNode;
          var l = e.measure,
            u = l.maps;
          function c(I, W, H) {
            for (var F = -1; F < (u ? u.length : 0); F++)
              for (var _ = F < 0 ? l.map : u[F], ee = 0; ee < _.length; ee += 3) {
                var Z = _[ee + 2];
                if (Z == I || Z == W) {
                  var pe = we(F < 0 ? e.line : e.rest[F]),
                    xe = _[ee] + H;
                  return (H < 0 || Z != I) && (xe = _[ee + (H ? 1 : 0)]), y(pe, xe);
                }
              }
          }
          var p = c(a, s, r);
          if (p) return Kr(p, i);
          for (var v = s.nextSibling, m = a ? a.nodeValue.length - r : 0; v; v = v.nextSibling) {
            if (((p = c(v, v.firstChild, 0)), p)) return Kr(y(p.line, p.ch - m), i);
            m += v.textContent.length;
          }
          for (var w = s.previousSibling, L = r; w; w = w.previousSibling) {
            if (((p = c(w, w.firstChild, -1)), p)) return Kr(y(p.line, p.ch + L), i);
            L += w.textContent.length;
          }
        }
        var He = function(t) {
          (this.cm = t),
            (this.prevInput = ''),
            (this.pollingFast = !1),
            (this.polling = new z()),
            (this.hasSelection = !1),
            (this.composing = null);
        };
        (He.prototype.init = function(e) {
          var t = this,
            r = this,
            n = this.cm;
          this.createField(e);
          var i = this.textarea;
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            E && (i.style.width = '0px'),
            V(i, 'input', function() {
              A && B >= 9 && t.hasSelection && (t.hasSelection = null), r.poll();
            }),
            V(i, 'paste', function(a) {
              if (Ee(n, a) || es(a, n)) return;
              (n.state.pasteIncoming = +new Date()), r.fastPoll();
            });
          function o(a) {
            if (Ee(n, a)) return;
            if (n.somethingSelected()) li({ lineWise: !1, text: n.getSelections() });
            else if (n.options.lineWiseCopyCut) {
              var s = rs(n);
              li({ lineWise: !0, text: s.text }),
                a.type == 'cut'
                  ? n.setSelections(s.ranges, null, Oe)
                  : ((r.prevInput = ''),
                    (i.value = s.text.join(`
`)),
                    T(i));
            } else return;
            a.type == 'cut' && (n.state.cutIncoming = +new Date());
          }
          V(i, 'cut', o),
            V(i, 'copy', o),
            V(e.scroller, 'paste', function(a) {
              if (jt(e, a) || Ee(n, a)) return;
              if (!i.dispatchEvent) {
                (n.state.pasteIncoming = +new Date()), r.focus();
                return;
              }
              var s = new Event('paste');
              (s.clipboardData = a.clipboardData), i.dispatchEvent(s);
            }),
            V(e.lineSpace, 'selectstart', function(a) {
              jt(e, a) || je(a);
            }),
            V(i, 'compositionstart', function() {
              var a = n.getCursor('from');
              r.composing && r.composing.range.clear(),
                (r.composing = {
                  start: a,
                  range: n.markText(a, n.getCursor('to'), { className: 'CodeMirror-composing' }),
                });
            }),
            V(i, 'compositionend', function() {
              r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null));
            });
        }),
          (He.prototype.createField = function(e) {
            (this.wrapper = is()), (this.textarea = this.wrapper.firstChild);
          }),
          (He.prototype.screenReaderLabelChanged = function(e) {
            e
              ? this.textarea.setAttribute('aria-label', e)
              : this.textarea.removeAttribute('aria-label');
          }),
          (He.prototype.prepareSelection = function() {
            var e = this.cm,
              t = e.display,
              r = e.doc,
              n = Xo(e);
            if (e.options.moveInputWithCursor) {
              var i = Tt(e, r.sel.primary().head, 'div'),
                o = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
              (n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top))),
                (n.teLeft = Math.max(
                  0,
                  Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left),
                ));
            }
            return n;
          }),
          (He.prototype.showSelection = function(e) {
            var t = this.cm,
              r = t.display;
            G(r.cursorDiv, e.cursors),
              G(r.selectionDiv, e.selection),
              e.teTop != null &&
                ((this.wrapper.style.top = e.teTop + 'px'),
                (this.wrapper.style.left = e.teLeft + 'px'));
          }),
          (He.prototype.reset = function(e) {
            if (this.contextMenuPending || this.composing) return;
            var t = this.cm;
            if (t.somethingSelected()) {
              this.prevInput = '';
              var r = t.getSelection();
              (this.textarea.value = r),
                t.state.focused && T(this.textarea),
                A && B >= 9 && (this.hasSelection = r);
            } else
              e ||
                ((this.prevInput = this.textarea.value = ''),
                A && B >= 9 && (this.hasSelection = null));
          }),
          (He.prototype.getField = function() {
            return this.textarea;
          }),
          (He.prototype.supportsTouch = function() {
            return !1;
          }),
          (He.prototype.focus = function() {
            if (this.cm.options.readOnly != 'nocursor' && (!oe || le() != this.textarea))
              try {
                this.textarea.focus();
              } catch (e) {}
          }),
          (He.prototype.blur = function() {
            this.textarea.blur();
          }),
          (He.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (He.prototype.receivedFocus = function() {
            this.slowPoll();
          }),
          (He.prototype.slowPoll = function() {
            var e = this;
            if (this.pollingFast) return;
            this.polling.set(this.cm.options.pollInterval, function() {
              e.poll(), e.cm.state.focused && e.slowPoll();
            });
          }),
          (He.prototype.fastPoll = function() {
            var e = !1,
              t = this;
            t.pollingFast = !0;
            function r() {
              var n = t.poll();
              !n && !e ? ((e = !0), t.polling.set(60, r)) : ((t.pollingFast = !1), t.slowPoll());
            }
            t.polling.set(20, r);
          }),
          (He.prototype.poll = function() {
            var e = this,
              t = this.cm,
              r = this.textarea,
              n = this.prevInput;
            if (
              this.contextMenuPending ||
              !t.state.focused ||
              (Dt(r) && !n && !this.composing) ||
              t.isReadOnly() ||
              t.options.disableInput ||
              t.state.keySeq
            )
              return !1;
            var i = r.value;
            if (i == n && !t.somethingSelected()) return !1;
            if ((A && B >= 9 && this.hasSelection === i) || (ie && /[\uf700-\uf7ff]/.test(i)))
              return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
              var o = i.charCodeAt(0);
              if ((o == 8203 && !n && (n = '​'), o == 8666))
                return this.reset(), this.cm.execCommand('undo');
            }
            for (
              var a = 0, s = Math.min(n.length, i.length);
              a < s && n.charCodeAt(a) == i.charCodeAt(a);

            )
              ++a;
            return (
              gt(t, function() {
                to(t, i.slice(a), n.length - a, null, e.composing ? '*compose' : null),
                  i.length > 1e3 ||
                  i.indexOf(`
`) > -1
                    ? (r.value = e.prevInput = '')
                    : (e.prevInput = i),
                  e.composing &&
                    (e.composing.range.clear(),
                    (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                      className: 'CodeMirror-composing',
                    })));
              }),
              !0
            );
          }),
          (He.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (He.prototype.onKeyPress = function() {
            A && B >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (He.prototype.onContextMenu = function(e) {
            var t = this,
              r = t.cm,
              n = r.display,
              i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = fr(r, e),
              a = n.scroller.scrollTop;
            if (!o || k) return;
            var s = r.options.resetSelectionOnContextMenu;
            s && r.doc.sel.contains(o) == -1 && Xe(r, nt)(r.doc, $t(o), Oe);
            var l = i.style.cssText,
              u = t.wrapper.style.cssText,
              c = t.wrapper.offsetParent.getBoundingClientRect();
            (t.wrapper.style.cssText = 'position: static'),
              (i.style.cssText =
                `position: absolute; width: 30px; height: 30px;
      top: ` +
                (e.clientY - c.top - 5) +
                'px; left: ' +
                (e.clientX - c.left - 5) +
                `px;
      z-index: 1000; background: ` +
                (A ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
            var p;
            U && (p = window.scrollY),
              n.input.focus(),
              U && window.scrollTo(null, p),
              n.input.reset(),
              r.somethingSelected() || (i.value = t.prevInput = ' '),
              (t.contextMenuPending = m),
              (n.selForContextMenu = r.doc.sel),
              clearTimeout(n.detectingSelectAll);
            function v() {
              if (i.selectionStart != null) {
                var L = r.somethingSelected(),
                  I = '​' + (L ? i.value : '');
                (i.value = '⇚'),
                  (i.value = I),
                  (t.prevInput = L ? '' : '​'),
                  (i.selectionStart = 1),
                  (i.selectionEnd = I.length),
                  (n.selForContextMenu = r.doc.sel);
              }
            }
            function m() {
              if (t.contextMenuPending != m) return;
              if (
                ((t.contextMenuPending = !1),
                (t.wrapper.style.cssText = u),
                (i.style.cssText = l),
                A && B < 9 && n.scrollbars.setScrollTop((n.scroller.scrollTop = a)),
                i.selectionStart != null)
              ) {
                (!A || (A && B < 9)) && v();
                var L = 0,
                  I = function W() {
                    n.selForContextMenu == r.doc.sel &&
                    i.selectionStart == 0 &&
                    i.selectionEnd > 0 &&
                    t.prevInput == '​'
                      ? Xe(r, Sa)(r)
                      : L++ < 10
                      ? (n.detectingSelectAll = setTimeout(W, 500))
                      : ((n.selForContextMenu = null), n.input.reset());
                  };
                n.detectingSelectAll = setTimeout(I, 200);
              }
            }
            if ((A && B >= 9 && v(), Fe)) {
              et(e);
              var w = function L() {
                ce(window, 'mouseup', L), setTimeout(m, 20);
              };
              V(window, 'mouseup', w);
            } else setTimeout(m, 50);
          }),
          (He.prototype.readOnlyChanged = function(e) {
            e || this.reset(),
              (this.textarea.disabled = e == 'nocursor'),
              (this.textarea.readOnly = !!e);
          }),
          (He.prototype.setUneditable = function() {}),
          (He.prototype.needsContentAttribute = !1);
        function nu(e, t) {
          if (
            ((t = t ? K(t) : {}),
            (t.value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            t.autofocus == null)
          ) {
            var r = le();
            t.autofocus = r == e || (e.getAttribute('autofocus') != null && r == document.body);
          }
          function n() {
            e.value = s.getValue();
          }
          var i;
          if (e.form && (V(e.form, 'submit', n), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;
            try {
              var a = (o.submit = function() {
                n(), (o.submit = i), o.submit(), (o.submit = a);
              });
            } catch (l) {}
          }
          (t.finishInit = function(l) {
            (l.save = n),
              (l.getTextArea = function() {
                return e;
              }),
              (l.toTextArea = function() {
                (l.toTextArea = isNaN),
                  n(),
                  e.parentNode.removeChild(l.getWrapperElement()),
                  (e.style.display = ''),
                  e.form &&
                    (ce(e.form, 'submit', n),
                    !t.leaveSubmitMethodAlone &&
                      typeof e.form.submit == 'function' &&
                      (e.form.submit = i));
              });
          }),
            (e.style.display = 'none');
          var s = Ae(function(l) {
            return e.parentNode.insertBefore(l, e.nextSibling);
          }, t);
          return s;
        }
        function iu(e) {
          (e.off = ce),
            (e.on = V),
            (e.wheelEventPixels = hl),
            (e.Doc = wt),
            (e.splitLines = Et),
            (e.countColumn = Y),
            (e.findColumn = Be),
            (e.isWordChar = Yr),
            (e.Pass = he),
            (e.signal = We),
            (e.Line = Mr),
            (e.changeEnd = er),
            (e.scrollbarModel = ea),
            (e.Pos = y),
            (e.cmpPos = S),
            (e.modes = Qr),
            (e.mimeModes = Bt),
            (e.resolveMode = zt),
            (e.getMode = Vr),
            (e.modeExtensions = Ut),
            (e.extendMode = di),
            (e.copyState = xt),
            (e.startState = Pn),
            (e.innerMode = Lr),
            (e.commands = kn),
            (e.keyMap = Gt),
            (e.keyName = za),
            (e.isModifierKey = Fa),
            (e.lookupKey = zr),
            (e.normalizeKeyMap = Il),
            (e.StringStream = De),
            (e.SharedTextMarker = wn),
            (e.TextMarker = rr),
            (e.LineWidget = bn),
            (e.e_preventDefault = je),
            (e.e_stopPropagation = Nn),
            (e.e_stop = et),
            (e.addClass = Ie),
            (e.contains = Q),
            (e.rmClass = ot),
            (e.keyNames = nr);
        }
        Jl(Ae), $l(Ae);
        var ou = 'iter insert remove copy getEditor constructor'.split(' ');
        for (var fi in wt.prototype)
          wt.prototype.hasOwnProperty(fi) &&
            R(ou, fi) < 0 &&
            (Ae.prototype[fi] = (function(e) {
              return function() {
                return e.apply(this.doc, arguments);
              };
            })(wt.prototype[fi]));
        return (
          Yt(wt),
          (Ae.inputStyles = { textarea: He, contenteditable: Te }),
          (Ae.defineMode = function(e) {
            !Ae.defaults.mode && e != 'null' && (Ae.defaults.mode = e), Tr.apply(this, arguments);
          }),
          (Ae.defineMIME = St),
          Ae.defineMode('null', function() {
            return {
              token: function(t) {
                return t.skipToEnd();
              },
            };
          }),
          Ae.defineMIME('text/plain', 'null'),
          (Ae.defineExtension = function(e, t) {
            Ae.prototype[e] = t;
          }),
          (Ae.defineDocExtension = function(e, t) {
            wt.prototype[e] = t;
          }),
          (Ae.fromTextArea = nu),
          iu(Ae),
          (Ae.version = '5.58.1'),
          Ae
        );
      });
    },
    a2PE: function(vt, Le, $) {
      'use strict';
      (function(X) {
        function ge() {
          return (
            (ge =
              Object.assign ||
              function(k) {
                for (var O = 1; O < arguments.length; O++) {
                  var d = arguments[O];
                  for (var x in d) Object.prototype.hasOwnProperty.call(d, x) && (k[x] = d[x]);
                }
                return k;
              }),
            ge.apply(this, arguments)
          );
        }
        function te(k) {
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (te = function(d) {
                  return typeof d;
                })
              : (te = function(d) {
                  return d &&
                    typeof Symbol == 'function' &&
                    d.constructor === Symbol &&
                    d !== Symbol.prototype
                    ? 'symbol'
                    : typeof d;
                }),
            te(k)
          );
        }
        var ve = (function() {
          var k = function(d, x) {
            return (
              (k =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(E, M) {
                    E.__proto__ = M;
                  }) ||
                function(E, M) {
                  for (var oe in M) M.hasOwnProperty(oe) && (E[oe] = M[oe]);
                }),
              k(d, x)
            );
          };
          return function(O, d) {
            k(O, d);
            function x() {
              this.constructor = O;
            }
            O.prototype = d === null ? Object.create(d) : ((x.prototype = d.prototype), new x());
          };
        })();
        Object.defineProperty(Le, '__esModule', { value: !0 }),
          (Le.UnControlled = Le.Controlled = void 0);
        var Se = $('q1tI'),
          re = typeof navigator == 'undefined' || X.PREVENT_CODEMIRROR_RENDER === !0,
          A;
        re || (A = $('VrN/'));
        var B = (function() {
            function k() {}
            return (
              (k.equals = function(O, d) {
                var x = this,
                  E = Object.keys,
                  M = te(O),
                  oe = te(d);
                return O && d && M === 'object' && M === oe
                  ? E(O).length === E(d).length &&
                      E(O).every(function(ie) {
                        return x.equals(O[ie], d[ie]);
                      })
                  : O === d;
              }),
              k
            );
          })(),
          U = (function() {
            function k(O, d) {
              (this.editor = O), (this.props = d);
            }
            return (
              (k.prototype.delegateCursor = function(O, d, x) {
                var E = this.editor.getDoc();
                x && this.editor.focus(), d ? E.setCursor(O) : E.setCursor(O, null, { scroll: !1 });
              }),
              (k.prototype.delegateScroll = function(O) {
                this.editor.scrollTo(O.x, O.y);
              }),
              (k.prototype.delegateSelection = function(O, d) {
                var x = this.editor.getDoc();
                x.setSelections(O), d && this.editor.focus();
              }),
              (k.prototype.apply = function(O) {
                O &&
                  O.selection &&
                  O.selection.ranges &&
                  this.delegateSelection(O.selection.ranges, O.selection.focus || !1),
                  O &&
                    O.cursor &&
                    this.delegateCursor(
                      O.cursor,
                      O.autoScroll || !1,
                      this.editor.getOption('autofocus') || !1,
                    ),
                  O && O.scroll && this.delegateScroll(O.scroll);
              }),
              (k.prototype.applyNext = function(O, d, x) {
                O &&
                  O.selection &&
                  O.selection.ranges &&
                  d &&
                    d.selection &&
                    d.selection.ranges &&
                    !B.equals(O.selection.ranges, d.selection.ranges) &&
                    this.delegateSelection(d.selection.ranges, d.selection.focus || !1),
                  O &&
                    O.cursor &&
                    d &&
                      d.cursor &&
                      !B.equals(O.cursor, d.cursor) &&
                      this.delegateCursor(
                        x.cursor || d.cursor,
                        d.autoScroll || !1,
                        d.autoCursor || !1,
                      ),
                  O &&
                    O.scroll &&
                    d && d.scroll && !B.equals(O.scroll, d.scroll) && this.delegateScroll(d.scroll);
              }),
              (k.prototype.applyUserDefined = function(O, d) {
                d &&
                  d.cursor &&
                  this.delegateCursor(
                    d.cursor,
                    O.autoScroll || !1,
                    this.editor.getOption('autofocus') || !1,
                  );
              }),
              (k.prototype.wire = function(O) {
                var d = this;
                Object.keys(O || {})
                  .filter(function(x) {
                    return /^on/.test(x);
                  })
                  .forEach(function(x) {
                    switch (x) {
                      case 'onBlur':
                        d.editor.on('blur', function(E, M) {
                          d.props.onBlur(d.editor, M);
                        });
                        break;
                      case 'onContextMenu': {
                        d.editor.on('contextmenu', function(E, M) {
                          d.props.onContextMenu(d.editor, M);
                        });
                        break;
                      }
                      case 'onCopy': {
                        d.editor.on('copy', function(E, M) {
                          d.props.onCopy(d.editor, M);
                        });
                        break;
                      }
                      case 'onCursor':
                        d.editor.on('cursorActivity', function(E) {
                          d.props.onCursor(d.editor, d.editor.getDoc().getCursor());
                        });
                        break;
                      case 'onCursorActivity':
                        d.editor.on('cursorActivity', function(E) {
                          d.props.onCursorActivity(d.editor);
                        });
                        break;
                      case 'onCut': {
                        d.editor.on('cut', function(E, M) {
                          d.props.onCut(d.editor, M);
                        });
                        break;
                      }
                      case 'onDblClick': {
                        d.editor.on('dblclick', function(E, M) {
                          d.props.onDblClick(d.editor, M);
                        });
                        break;
                      }
                      case 'onDragEnter':
                        d.editor.on('dragenter', function(E, M) {
                          d.props.onDragEnter(d.editor, M);
                        });
                        break;
                      case 'onDragLeave': {
                        d.editor.on('dragleave', function(E, M) {
                          d.props.onDragLeave(d.editor, M);
                        });
                        break;
                      }
                      case 'onDragOver':
                        d.editor.on('dragover', function(E, M) {
                          d.props.onDragOver(d.editor, M);
                        });
                        break;
                      case 'onDragStart': {
                        d.editor.on('dragstart', function(E, M) {
                          d.props.onDragStart(d.editor, M);
                        });
                        break;
                      }
                      case 'onDrop':
                        d.editor.on('drop', function(E, M) {
                          d.props.onDrop(d.editor, M);
                        });
                        break;
                      case 'onFocus':
                        d.editor.on('focus', function(E, M) {
                          d.props.onFocus(d.editor, M);
                        });
                        break;
                      case 'onGutterClick':
                        d.editor.on('gutterClick', function(E, M, oe, ie) {
                          d.props.onGutterClick(d.editor, M, oe, ie);
                        });
                        break;
                      case 'onInputRead':
                        d.editor.on('inputRead', function(E, M) {
                          d.props.onInputRead(d.editor, M);
                        });
                        break;
                      case 'onKeyDown':
                        d.editor.on('keydown', function(E, M) {
                          d.props.onKeyDown(d.editor, M);
                        });
                        break;
                      case 'onKeyHandled':
                        d.editor.on('keyHandled', function(E, M, oe) {
                          d.props.onKeyHandled(d.editor, M, oe);
                        });
                        break;
                      case 'onKeyPress':
                        d.editor.on('keypress', function(E, M) {
                          d.props.onKeyPress(d.editor, M);
                        });
                        break;
                      case 'onKeyUp':
                        d.editor.on('keyup', function(E, M) {
                          d.props.onKeyUp(d.editor, M);
                        });
                        break;
                      case 'onMouseDown': {
                        d.editor.on('mousedown', function(E, M) {
                          d.props.onMouseDown(d.editor, M);
                        });
                        break;
                      }
                      case 'onPaste': {
                        d.editor.on('paste', function(E, M) {
                          d.props.onPaste(d.editor, M);
                        });
                        break;
                      }
                      case 'onRenderLine': {
                        d.editor.on('renderLine', function(E, M, oe) {
                          d.props.onRenderLine(d.editor, M, oe);
                        });
                        break;
                      }
                      case 'onScroll':
                        d.editor.on('scroll', function(E) {
                          d.props.onScroll(d.editor, d.editor.getScrollInfo());
                        });
                        break;
                      case 'onSelection':
                        d.editor.on('beforeSelectionChange', function(E, M) {
                          d.props.onSelection(d.editor, M);
                        });
                        break;
                      case 'onTouchStart': {
                        d.editor.on('touchstart', function(E, M) {
                          d.props.onTouchStart(d.editor, M);
                        });
                        break;
                      }
                      case 'onUpdate':
                        d.editor.on('update', function(E) {
                          d.props.onUpdate(d.editor);
                        });
                        break;
                      case 'onViewportChange':
                        d.editor.on('viewportChange', function(E, M, oe) {
                          d.props.onViewportChange(d.editor, M, oe);
                        });
                        break;
                    }
                  });
              }),
              k
            );
          })(),
          ne = (function(k) {
            ve(O, k);
            function O(d) {
              var x = k.call(this, d) || this;
              return (
                re ||
                  ((x.applied = !1),
                  (x.appliedNext = !1),
                  (x.appliedUserDefined = !1),
                  (x.deferred = null),
                  (x.emulating = !1),
                  (x.hydrated = !1),
                  (x.initCb = function() {
                    x.props.editorDidConfigure && x.props.editorDidConfigure(x.editor);
                  }),
                  (x.mounted = !1)),
                x
              );
            }
            return (
              (O.prototype.hydrate = function(d) {
                var x = this,
                  E = d && d.options ? d.options : {},
                  M = ge({}, A.defaults, this.editor.options, E),
                  oe = Object.keys(M).some(function(ie) {
                    return x.editor.getOption(ie) !== M[ie];
                  });
                oe &&
                  Object.keys(M).forEach(function(ie) {
                    E.hasOwnProperty(ie) &&
                      x.editor.getOption(ie) !== M[ie] &&
                        (x.editor.setOption(ie, M[ie]), x.mirror.setOption(ie, M[ie]));
                  }),
                  this.hydrated ||
                    (this.deferred ? this.resolveChange(d.value) : this.initChange(d.value || '')),
                  (this.hydrated = !0);
              }),
              (O.prototype.initChange = function(d) {
                this.emulating = !0;
                var x = this.editor.getDoc(),
                  E = x.lastLine(),
                  M = x.getLine(x.lastLine()).length;
                x.replaceRange(d || '', { line: 0, ch: 0 }, { line: E, ch: M }),
                  this.mirror.setValue(d),
                  x.clearHistory(),
                  this.mirror.clearHistory(),
                  (this.emulating = !1);
              }),
              (O.prototype.resolveChange = function(d) {
                this.emulating = !0;
                var x = this.editor.getDoc();
                if (
                  (this.deferred.origin === 'undo'
                    ? x.undo()
                    : this.deferred.origin === 'redo'
                    ? x.redo()
                    : x.replaceRange(
                        this.deferred.text,
                        this.deferred.from,
                        this.deferred.to,
                        this.deferred.origin,
                      ),
                  d && d !== x.getValue())
                ) {
                  var E = x.getCursor();
                  x.setValue(d), x.setCursor(E);
                }
                (this.emulating = !1), (this.deferred = null);
              }),
              (O.prototype.mirrorChange = function(d) {
                var x = this.editor.getDoc();
                return (
                  d.origin === 'undo'
                    ? (x.setHistory(this.mirror.getHistory()), this.mirror.undo())
                    : d.origin === 'redo'
                    ? (x.setHistory(this.mirror.getHistory()), this.mirror.redo())
                    : this.mirror.replaceRange(d.text, d.from, d.to, d.origin),
                  this.mirror.getValue()
                );
              }),
              (O.prototype.componentDidMount = function() {
                var d = this;
                if (re) return;
                this.props.defineMode &&
                  this.props.defineMode.name &&
                    this.props.defineMode.fn &&
                    A.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                  (this.editor = A(this.ref, this.props.options)),
                  (this.shared = new U(this.editor, this.props)),
                  (this.mirror = A(function() {}, this.props.options)),
                  this.editor.on('electricInput', function() {
                    d.mirror.setHistory(d.editor.getDoc().getHistory());
                  }),
                  this.editor.on('cursorActivity', function() {
                    d.mirror.setCursor(d.editor.getDoc().getCursor());
                  }),
                  this.editor.on('beforeChange', function(x, E) {
                    if (d.emulating) return;
                    E.cancel(), (d.deferred = E);
                    var M = d.mirrorChange(d.deferred);
                    d.props.onBeforeChange && d.props.onBeforeChange(d.editor, d.deferred, M);
                  }),
                  this.editor.on('change', function(x, E) {
                    if (!d.mounted) return;
                    d.props.onChange && d.props.onChange(d.editor, E, d.editor.getValue());
                  }),
                  this.hydrate(this.props),
                  this.shared.apply(this.props),
                  (this.applied = !0),
                  (this.mounted = !0),
                  this.shared.wire(this.props),
                  this.editor.getOption('autofocus') && this.editor.focus(),
                  this.props.editorDidMount &&
                    this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb);
              }),
              (O.prototype.componentDidUpdate = function(d) {
                if (re) return;
                var x = { cursor: null };
                this.props.value !== d.value && (this.hydrated = !1),
                  !this.props.autoCursor &&
                    this.props.autoCursor !== void 0 &&
                    (x.cursor = this.editor.getDoc().getCursor()),
                  this.hydrate(this.props),
                  this.appliedNext ||
                    (this.shared.applyNext(d, this.props, x), (this.appliedNext = !0)),
                  this.shared.applyUserDefined(d, x),
                  (this.appliedUserDefined = !0);
              }),
              (O.prototype.componentWillUnmount = function() {
                if (re) return;
                this.props.editorWillUnmount && this.props.editorWillUnmount(A);
              }),
              (O.prototype.shouldComponentUpdate = function(d, x) {
                return !re;
              }),
              (O.prototype.render = function() {
                var d = this;
                if (re) return null;
                var x = this.props.className
                  ? 'react-codemirror2 ' + this.props.className
                  : 'react-codemirror2';
                return Se.createElement('div', {
                  className: x,
                  ref: function(M) {
                    return (d.ref = M);
                  },
                });
              }),
              O
            );
          })(Se.Component);
        Le.Controlled = ne;
        var j = (function(k) {
          ve(O, k);
          function O(d) {
            var x = k.call(this, d) || this;
            return (
              re ||
                ((x.applied = !1),
                (x.appliedUserDefined = !1),
                (x.continueChange = !1),
                (x.detached = !1),
                (x.hydrated = !1),
                (x.initCb = function() {
                  x.props.editorDidConfigure && x.props.editorDidConfigure(x.editor);
                }),
                (x.mounted = !1),
                (x.onBeforeChangeCb = function() {
                  x.continueChange = !0;
                })),
              x
            );
          }
          return (
            (O.prototype.hydrate = function(d) {
              var x = this,
                E = d && d.options ? d.options : {},
                M = ge({}, A.defaults, this.editor.options, E),
                oe = Object.keys(M).some(function(be) {
                  return x.editor.getOption(be) !== M[be];
                });
              if (
                (oe &&
                  Object.keys(M).forEach(function(be) {
                    E.hasOwnProperty(be) &&
                      x.editor.getOption(be) !== M[be] && x.editor.setOption(be, M[be]);
                  }),
                !this.hydrated)
              ) {
                var ie = this.editor.getDoc(),
                  ae = ie.lastLine(),
                  Ce = ie.getLine(ie.lastLine()).length;
                ie.replaceRange(d.value || '', { line: 0, ch: 0 }, { line: ae, ch: Ce });
              }
              this.hydrated = !0;
            }),
            (O.prototype.componentDidMount = function() {
              var d = this;
              if (re) return;
              (this.detached = this.props.detach === !0),
                this.props.defineMode &&
                  this.props.defineMode.name &&
                    this.props.defineMode.fn &&
                    A.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                (this.editor = A(this.ref, this.props.options)),
                (this.shared = new U(this.editor, this.props)),
                this.editor.on('beforeChange', function(x, E) {
                  d.props.onBeforeChange &&
                    d.props.onBeforeChange(d.editor, E, d.editor.getValue(), d.onBeforeChangeCb);
                }),
                this.editor.on('change', function(x, E) {
                  if (!d.mounted || !d.props.onChange) return;
                  d.props.onBeforeChange
                    ? d.continueChange && d.props.onChange(d.editor, E, d.editor.getValue())
                    : d.props.onChange(d.editor, E, d.editor.getValue());
                }),
                this.hydrate(this.props),
                this.shared.apply(this.props),
                (this.applied = !0),
                (this.mounted = !0),
                this.shared.wire(this.props),
                this.editor.getDoc().clearHistory(),
                this.props.editorDidMount &&
                  this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb);
            }),
            (O.prototype.componentDidUpdate = function(d) {
              if (
                (this.detached &&
                  this.props.detach === !1 &&
                  ((this.detached = !1), d.editorDidAttach && d.editorDidAttach(this.editor)),
                !this.detached &&
                  this.props.detach === !0 &&
                  ((this.detached = !0), d.editorDidDetach && d.editorDidDetach(this.editor)),
                re || this.detached)
              )
                return;
              var x = { cursor: null };
              this.props.value !== d.value &&
                ((this.hydrated = !1), (this.applied = !1), (this.appliedUserDefined = !1)),
                !d.autoCursor &&
                  d.autoCursor !== void 0 &&
                  (x.cursor = this.editor.getDoc().getCursor()),
                this.hydrate(this.props),
                this.applied || (this.shared.apply(d), (this.applied = !0)),
                this.appliedUserDefined ||
                  (this.shared.applyUserDefined(d, x), (this.appliedUserDefined = !0));
            }),
            (O.prototype.componentWillUnmount = function() {
              if (re) return;
              this.props.editorWillUnmount && this.props.editorWillUnmount(A);
            }),
            (O.prototype.shouldComponentUpdate = function(d, x) {
              var E = !0;
              return re && (E = !1), this.detached && d.detach && (E = !1), E;
            }),
            (O.prototype.render = function() {
              var d = this;
              if (re) return null;
              var x = this.props.className
                ? 'react-codemirror2 ' + this.props.className
                : 'react-codemirror2';
              return Se.createElement('div', {
                className: x,
                ref: function(M) {
                  return (d.ref = M);
                },
              });
            }),
            O
          );
        })(Se.Component);
        Le.UnControlled = j;
      }.call(this, $('yLpj')));
    },
    ga3A: function(vt, Le, $) {
      'use strict';
      var X = $('q1tI'),
        ge = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d:
                    'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z',
                },
              },
            ],
          },
          name: 'save',
          theme: 'outlined',
        },
        te = ge,
        ve = $('6VBw'),
        Se = function(B, U) {
          return X.createElement(ve.a, Object.assign({}, B, { ref: U, icon: te }));
        };
      Se.displayName = 'SaveOutlined';
      var re = (Le.a = X.forwardRef(Se));
    },
    mP80: function(vt, Le, $) {
      'use strict';
      $.d(Le, 'a', function() {
        return pt;
      });
      /*!
       * hotkeys-js v3.8.1
       * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
       *
       * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
       * http://jaywcjlove.github.io/hotkeys
       *
       * Licensed under the MIT license.
       */ var X =
        typeof navigator != 'undefined'
          ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0
          : !1;
      function ge(T, P, K) {
        T.addEventListener
          ? T.addEventListener(P, K, !1)
          : T.attachEvent &&
            T.attachEvent('on'.concat(P), function() {
              K(window.event);
            });
      }
      function te(T, P) {
        for (var K = P.slice(0, P.length - 1), Y = 0; Y < K.length; Y++)
          K[Y] = T[K[Y].toLowerCase()];
        return K;
      }
      function ve(T) {
        typeof T != 'string' && (T = ''), (T = T.replace(/\s/g, ''));
        for (var P = T.split(','), K = P.lastIndexOf(''); K >= 0; )
          (P[K - 1] += ','), P.splice(K, 1), (K = P.lastIndexOf(''));
        return P;
      }
      function Se(T, P) {
        for (
          var K = T.length >= P.length ? T : P, Y = T.length >= P.length ? P : T, z = !0, R = 0;
          R < K.length;
          R++
        )
          Y.indexOf(K[R]) === -1 && (z = !1);
        return z;
      }
      for (
        var re = {
            backspace: 8,
            tab: 9,
            clear: 12,
            enter: 13,
            return: 13,
            esc: 27,
            escape: 27,
            space: 32,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            del: 46,
            delete: 46,
            ins: 45,
            insert: 45,
            home: 36,
            end: 35,
            pageup: 33,
            pagedown: 34,
            capslock: 20,
            '⇪': 20,
            ',': 188,
            '.': 190,
            '/': 191,
            '`': 192,
            '-': X ? 173 : 189,
            '=': X ? 61 : 187,
            ';': X ? 59 : 186,
            "'": 222,
            '[': 219,
            ']': 221,
            '\\': 220,
          },
          A = {
            '⇧': 16,
            shift: 16,
            '⌥': 18,
            alt: 18,
            option: 18,
            '⌃': 17,
            ctrl: 17,
            control: 17,
            '⌘': 91,
            cmd: 91,
            command: 91,
          },
          B = {
            16: 'shiftKey',
            18: 'altKey',
            17: 'ctrlKey',
            91: 'metaKey',
            shiftKey: 16,
            ctrlKey: 17,
            altKey: 18,
            metaKey: 91,
          },
          U = { 16: !1, 18: !1, 17: !1, 91: !1 },
          ne = {},
          j = 1;
        j < 20;
        j++
      )
        re['f'.concat(j)] = 111 + j;
      var k = [],
        O = 'all',
        d = [],
        x = function(P) {
          return re[P.toLowerCase()] || A[P.toLowerCase()] || P.toUpperCase().charCodeAt(0);
        };
      function E(T) {
        O = T || 'all';
      }
      function M() {
        return O || 'all';
      }
      function oe() {
        return k.slice(0);
      }
      function ie(T) {
        var P = T.target || T.srcElement,
          K = P.tagName,
          Y = !0;
        return (
          (P.isContentEditable ||
            ((K === 'INPUT' || K === 'TEXTAREA' || K === 'SELECT') && !P.readOnly)) &&
            (Y = !1),
          Y
        );
      }
      function ae(T) {
        return typeof T == 'string' && (T = x(T)), k.indexOf(T) !== -1;
      }
      function Ce(T, P) {
        var K, Y;
        T || (T = M());
        for (var z in ne)
          if (Object.prototype.hasOwnProperty.call(ne, z))
            for (K = ne[z], Y = 0; Y < K.length; ) K[Y].scope === T ? K.splice(Y, 1) : Y++;
        M() === T && E(P || 'all');
      }
      function be(T) {
        var P = T.keyCode || T.which || T.charCode,
          K = k.indexOf(P);
        if (
          (K >= 0 && k.splice(K, 1),
          T.key && T.key.toLowerCase() === 'meta' && k.splice(0, k.length),
          (P === 93 || P === 224) && (P = 91),
          P in U)
        ) {
          U[P] = !1;
          for (var Y in A) A[Y] === P && (G[Y] = !1);
        }
      }
      function Ke(T) {
        if (!T)
          Object.keys(ne).forEach(function(J) {
            return delete ne[J];
          });
        else if (Array.isArray(T))
          T.forEach(function(J) {
            J.key && Fe(J);
          });
        else if (typeof T == 'object') T.key && Fe(T);
        else if (typeof T == 'string') {
          for (var P = arguments.length, K = new Array(P > 1 ? P - 1 : 0), Y = 1; Y < P; Y++)
            K[Y - 1] = arguments[Y];
          var z = K[0],
            R = K[1];
          typeof z == 'function' && ((R = z), (z = '')),
            Fe({ key: T, scope: z, method: R, splitKey: '+' });
        }
      }
      var Fe = function(P) {
        var K = P.key,
          Y = P.scope,
          z = P.method,
          R = P.splitKey,
          J = R === void 0 ? '+' : R,
          he = ve(K);
        he.forEach(function(Oe) {
          var fe = Oe.split(J),
            me = fe.length,
            Be = fe[me - 1],
            Je = Be === '*' ? '*' : x(Be);
          if (!ne[Je]) return;
          Y || (Y = M());
          var $e = me > 1 ? te(A, fe) : [];
          ne[Je] = ne[Je].map(function(se) {
            var mt = z ? se.method === z : !0;
            return mt && se.scope === Y && Se(se.mods, $e) ? {} : se;
          });
        });
      };
      function Re(T, P, K) {
        var Y;
        if (P.scope === K || P.scope === 'all') {
          Y = P.mods.length > 0;
          for (var z in U)
            Object.prototype.hasOwnProperty.call(U, z) &&
              ((!U[z] && P.mods.indexOf(+z) > -1) || (U[z] && P.mods.indexOf(+z) === -1)) &&
                (Y = !1);
          ((P.mods.length === 0 && !U[16] && !U[18] && !U[17] && !U[91]) ||
            Y ||
            P.shortcut === '*') &&
            P.method(T, P) === !1 &&
              (T.preventDefault ? T.preventDefault() : (T.returnValue = !1),
              T.stopPropagation && T.stopPropagation(),
              T.cancelBubble && (T.cancelBubble = !0));
        }
      }
      function ot(T) {
        var P = ne['*'],
          K = T.keyCode || T.which || T.charCode;
        if (!G.filter.call(this, T)) return;
        if (
          ((K === 93 || K === 224) && (K = 91),
          k.indexOf(K) === -1 && K !== 229 && k.push(K),
          ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function($e) {
            var se = B[$e];
            T[$e] && k.indexOf(se) === -1
              ? k.push(se)
              : !T[$e] && k.indexOf(se) > -1
              ? k.splice(k.indexOf(se), 1)
              : $e === 'metaKey' &&
                T[$e] &&
                k.length === 3 &&
                (T.ctrlKey || T.shiftKey || T.altKey || (k = k.slice(k.indexOf(se))));
          }),
          K in U)
        ) {
          U[K] = !0;
          for (var Y in A) A[Y] === K && (G[Y] = !0);
          if (!P) return;
        }
        for (var z in U) Object.prototype.hasOwnProperty.call(U, z) && (U[z] = T[B[z]]);
        T.getModifierState &&
          !(T.altKey && !T.ctrlKey) &&
          T.getModifierState('AltGraph') &&
          (k.indexOf(17) === -1 && k.push(17),
          k.indexOf(18) === -1 && k.push(18),
          (U[17] = !0),
          (U[18] = !0));
        var R = M();
        if (P)
          for (var J = 0; J < P.length; J++)
            P[J].scope === R &&
              ((T.type === 'keydown' && P[J].keydown) || (T.type === 'keyup' && P[J].keyup)) &&
              Re(T, P[J], R);
        if (!(K in ne)) return;
        for (var he = 0; he < ne[K].length; he++)
          if (
            ((T.type === 'keydown' && ne[K][he].keydown) ||
              (T.type === 'keyup' && ne[K][he].keyup)) &&
            ne[K][he].key
          ) {
            for (
              var Oe = ne[K][he], fe = Oe.splitKey, me = Oe.key.split(fe), Be = [], Je = 0;
              Je < me.length;
              Je++
            )
              Be.push(x(me[Je]));
            Be.sort().join('') === k.sort().join('') && Re(T, Oe, R);
          }
      }
      function C(T) {
        return d.indexOf(T) > -1;
      }
      function G(T, P, K) {
        k = [];
        var Y = ve(T),
          z = [],
          R = 'all',
          J = document,
          he = 0,
          Oe = !1,
          fe = !0,
          me = '+';
        for (
          K === void 0 && typeof P == 'function' && (K = P),
            Object.prototype.toString.call(P) === '[object Object]' &&
              (P.scope && (R = P.scope),
              P.element && (J = P.element),
              P.keyup && (Oe = P.keyup),
              P.keydown !== void 0 && (fe = P.keydown),
              typeof P.splitKey == 'string' && (me = P.splitKey)),
            typeof P == 'string' && (R = P);
          he < Y.length;
          he++
        )
          (T = Y[he].split(me)),
            (z = []),
            T.length > 1 && (z = te(A, T)),
            (T = T[T.length - 1]),
            (T = T === '*' ? '*' : x(T)),
            T in ne || (ne[T] = []),
            ne[T].push({
              keyup: Oe,
              keydown: fe,
              scope: R,
              mods: z,
              shortcut: Y[he],
              method: K,
              key: Y[he],
              splitKey: me,
            });
        typeof J != 'undefined' &&
          !C(J) &&
          window &&
          (d.push(J),
          ge(J, 'keydown', function(Be) {
            ot(Be);
          }),
          ge(window, 'focus', function() {
            k = [];
          }),
          ge(J, 'keyup', function(Be) {
            ot(Be), be(Be);
          }));
      }
      var h = {
        setScope: E,
        getScope: M,
        deleteScope: Ce,
        getPressedKeyCodes: oe,
        isPressed: ae,
        filter: ie,
        unbind: Ke,
      };
      for (var N in h) Object.prototype.hasOwnProperty.call(h, N) && (G[N] = h[N]);
      if (typeof window != 'undefined') {
        var D = window.hotkeys;
        (G.noConflict = function(T) {
          return T && window.hotkeys === G && (window.hotkeys = D), G;
        }),
          (window.hotkeys = G);
      }
      var Q = G,
        le = $('q1tI');
      function Ie() {
        return Q.isPressed;
      }
      function pt(T, P, K, Y) {
        K instanceof Array && ((Y = K), (K = void 0));
        var z = K || {},
          R = z.enableOnTags,
          J = z.filter,
          he = Object(le.useRef)(null),
          Oe = Object(le.useCallback)(
            function(fe, me) {
              return he.current === null || document.activeElement === he.current
                ? (P(fe, me), !0)
                : !1;
            },
            Y ? [he].concat(Y) : [he],
          );
        return (
          Object(le.useEffect)(
            function() {
              return (
                K &&
                  K.enableOnTags &&
                  (Q.filter = function(fe) {
                    var me = fe.target,
                      Be = fe.srcElement,
                      Je = (me && me.tagName) || (Be && Be.tagName);
                    return Boolean(Je && R && R.includes(Je));
                  }),
                J && (Q.filter = J),
                Q(T, K || {}, Oe),
                function() {
                  return Q.unbind(T, Oe);
                }
              );
            },
            [Oe, K, R, J, T],
          ),
          he
        );
      }
    },
    xc4C: function(vt, Le, $) {
      'use strict';
      $.d(Le, 'b', function() {
        return ve;
      }),
        $.d(Le, 'a', function() {
          return Se;
        });
      var X = $('ODXe'),
        ge = $('CJvt'),
        te = $('Qi1f');
      function ve(re) {
        var A = Object(te.d)(re),
          B = Object(X.a)(A, 2),
          U = B[0],
          ne = B[1];
        return ge.a.setTwoToneColors({ primaryColor: U, secondaryColor: ne });
      }
      function Se() {
        var re = ge.a.getTwoToneColors();
        return re.calculated ? [re.primaryColor, re.secondaryColor] : re.primaryColor;
      }
    },
  },
]);

//# sourceMappingURL=vendors~p__ide.js.map
