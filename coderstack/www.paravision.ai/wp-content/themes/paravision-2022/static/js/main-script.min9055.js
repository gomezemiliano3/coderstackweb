/*!
 * GSAP 3.11.1
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function r(t) {
    return "string" == typeof t
  }

  function s(t) {
    return "function" == typeof t
  }

  function t(t) {
    return "number" == typeof t
  }

  function u(t) {
    return void 0 === t
  }

  function v(t) {
    return "object" == typeof t
  }

  function w(t) {
    return !1 !== t
  }

  function x() {
    return "undefined" != typeof window
  }

  function y(t) {
    return s(t) || r(t)
  }

  function P(t) {
    return (i = vt(t, ot)) && Ce
  }

  function Q(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
  }

  function R(t, e) {
    return !e && console.warn(t)
  }

  function S(t, e) {
    return t && (ot[t] = e) && i && (i[t] = e) || ot
  }

  function T() {
    return 0
  }

  function da(t) {
    var e, r, i = t[0];
    if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = mt.length; r-- && !mt[r].targetTest(i););
      e = mt[r]
    }
    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Yt(t[r], e))) || t.splice(r, 1);
    return t
  }

  function ea(t) {
    return t._gsap || da(Ot(t))[0]._gsap
  }

  function fa(t, e, r) {
    return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
  }

  function ga(t, e) {
    return (t = t.split(",")).forEach(e) || t
  }

  function ha(t) {
    return Math.round(1e5 * t) / 1e5 || 0
  }

  function ia(t) {
    return Math.round(1e7 * t) / 1e7 || 0
  }

  function ja(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
  }

  function ka(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
    return i < r
  }

  function la() {
    var t, e, r = ft.length,
      i = ft.slice(0);
    for (ct = {}, t = ft.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
  }

  function ma(t, e, r, i) {
    ft.length && la(), t.render(e, r, i || I), ft.length && la()
  }

  function na(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
  }

  function oa(t) {
    return t
  }

  function pa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t
  }

  function sa(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? sa(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t
  }

  function ta(t, e) {
    var r, i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i
  }

  function ua(t) {
    var e = t.parent || B,
      r = t.keyframes ? function _setKeyframeDefaults(i) {
        return function (t, e) {
          for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
        }
      }(K(t.keyframes)) : pa;
    if (w(t.inherit))
      for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
    return t
  }

  function wa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a, s = t[i];
    if (n)
      for (a = e[n]; s && s[n] > a;) s = s._prev;
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
  }

  function xa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
  }

  function ya(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
  }

  function za(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t
  }

  function Ba(t, e, r, i) {
    return t._startAt && (I ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
  }

  function Da(t) {
    return t._repeat ? yt(t._tTime, t = t.duration() + t._rDelay) * t : 0
  }

  function Fa(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
  }

  function Ga(t) {
    return t._end = ia(t._start + (t._tDur / Math.abs(t._ts || t._rts || q) || 0))
  }

  function Ha(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = ia(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ga(t), r._dirty || za(r, t)), t
  }

  function Ia(t, e) {
    var r;
    if ((e._time || e._initted && !e._dur) && (r = Fa(t.rawTime(), e), (!e._dur || xt(0, e.totalDuration(), r) - e._tTime > q) && e.render(r, !0)), za(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration())
        for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -q
    }
  }

  function Ja(e, r, i, n) {
    return r.parent && ya(r), r._start = ia((t(i) ? i : i || e !== B ? wt(e, i, r) : e._time) + r._delay), r._end = ia(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), wa(e, r, "_first", "_last", e._sort ? "_start" : 0), Tt(r) || (e._recent = r), n || Ia(e, r), e._ts < 0 && Ha(e, e._tTime), e
  }

  function Ka(t, e) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
  }

  function La(t, e, r, i) {
    return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== zt.frame ? (ft.push(t), t._lazy = [e, i], 1) : void 0 : 1
  }

  function Qa(t, e, r, i) {
    var n = t._repeat,
      a = ia(e) || 0,
      s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ia(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ha(t, t._tTime = t._tDur * s) : t.parent && Ga(t), r || za(t.parent, t), t
  }

  function Ra(t) {
    return t instanceof Qt ? za(t) : Qa(t, t._dur)
  }

  function Ua(e, r, i) {
    var n, a, s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
      u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
    }
    return new $t(r[0], u, r[1 + o])
  }

  function Va(t, e) {
    return t || 0 === t ? e(t) : e
  }

  function Xa(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : ""
  }

  function $a(t, e) {
    return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
  }

  function bb(r) {
    return r = Ot(r)[0] || R("Invalid scope") || {},
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
      }
  }

  function cb(t) {
    return t.sort(function () {
      return .5 - Math.random()
    })
  }

  function db(t) {
    if (s(t)) return t;
    var p = v(t) ? t : {
        each: t
      },
      _ = Lt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return r(m) ? w = x = {
        center: .5,
        edges: .5,
        end: 1
      } [m] || 0 : !e && T && (w = m[0], x = m[1]),
      function (t, e, r) {
        var i, n, a, s, o, u, h, l, f, c = (r || p).length,
          d = y[c];
        if (!d) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
            for (h = -N; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
            f--
          }
          for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === N ? 0 : T ? c * x / f - .5 : m / f | 0, l = N, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : H(a * a + s * s), h < o && (h = o), o < l && (l = o);
          "random" === m && cb(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Xa(p.amount || p.each) || 0, _ = _ && c < 0 ? Bt(_) : _
        }
        return c = (d[t] - d.min) / d.max || 0, ia(d.b + (_ ? _(c) : c) * d.v) + d.u
      }
  }

  function eb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ia(Math.round(parseFloat(e) / i) * i * n);
      return (r - r % 1) / n + (t(e) ? 0 : Xa(e))
    }
  }

  function fb(h, e) {
    var l, f, r = K(h);
    return !r && v(h) && (l = r = h.radius || N, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = eb(h.increment)), Va(e, r ? s(h) ? function (t) {
      return f = h(t), Math.abs(f - t) <= l ? f : t
    } : function (e) {
      for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = N, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
      return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Xa(e)
    } : eb(h))
  }

  function gb(t, e, r, i) {
    return Va(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
    })
  }

  function kb(e, r, t) {
    return Va(t, function (t) {
      return e[~~r(t)]
    })
  }

  function nb(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + gb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    return s + t.substr(a, t.length - a)
  }

  function qb(t, e, r) {
    var i, n, a, s = t.labels,
      o = N;
    for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    return a
  }

  function sb(t) {
    return ya(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Pt(t, "onInterrupt"), t
  }

  function xb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ct + .5 | 0
  }

  function yb(e, r, i) {
    var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & Ct, e & Ct] : 0 : St.black;
    if (!p) {
      if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];
      else if ("#" === e.charAt(0)) {
        if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Ct, p & Ct, parseInt(e.substr(7), 16) / 255];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Ct, e & Ct]
      } else if ("hsl" === e.substr(0, 3))
        if (p = d = e.match(tt), r) {
          if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
        } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = xb(o + 1 / 3, n, a), p[1] = xb(o, n, a), p[2] = xb(o - 1 / 3, n, a);
      else p = e.match(tt) || St.transparent;
      p = p.map(Number)
    }
    return r && !d && (n = p[0] / Ct, a = p[1] / Ct, s = p[2] / Ct, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
  }

  function zb(t) {
    var r = [],
      i = [],
      n = -1;
    return t.split(At).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1)
    }), r.c = i, r
  }

  function Ab(t, e, r) {
    var i, n, a, s, o = "",
      u = (t + o).match(At),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
        return (t = yb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
      }), r && (a = zb(t), (i = r.c).join(o) !== a.c.join(o)))
      for (s = (n = t.replace(At, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n)
      for (s = (n = t.split(At)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s]
  }

  function Db(t) {
    var e, r = t.join(" ");
    if (At.lastIndex = 0, At.test(r)) return e = Dt.test(r), t[1] = Ab(t[1], e), t[0] = Ab(t[0], e, zb(t[1])), !0
  }

  function Mb(t) {
    var e = (t + "").split("("),
      r = Et[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(It, "").trim() : +i, s = r.substr(e + 1).trim();
      return n
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
    }(t).split(",").map(na)) : Et._CE && Ft.test(t) ? Et._CE("", t) : r
  }

  function Ob(t, e) {
    for (var r, i = t._first; i;) i instanceof Qt ? Ob(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ob(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
  }

  function Qb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t)
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
    });
    var n, a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return ga(t, function (t) {
      for (var e in Et[t] = ot[t] = a, Et[n = t.toLowerCase()] = r, a) Et[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Et[t + "." + e] = a[e]
    }), a
  }

  function Rb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
    }
  }

  function Sb(r, t, e) {
    function Fm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
      a = n / j * (Math.asin(1 / i) || 0),
      s = "out" === r ? Fm : "in" === r ? function (t) {
        return 1 - Fm(1 - t)
      } : Rb(Fm);
    return n = j / n, s.config = function (t, e) {
      return Sb(r, t, e)
    }, s
  }

  function Tb(e, r) {
    function Nm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0
    }
    void 0 === r && (r = 1.70158);
    var t = "out" === e ? Nm : "in" === e ? function (t) {
      return 1 - Nm(1 - t)
    } : Rb(Nm);
    return t.config = function (t) {
      return Tb(e, t)
    }, t
  }
  var F, I, l, B, h, n, a, i, o, f, c, d, p, _, m, g, b, M, O, k, C, A, D, z, E, L, X, Y, V = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    U = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    N = 1e8,
    q = 1 / N,
    j = 2 * Math.PI,
    G = j / 4,
    J = 0,
    H = Math.sqrt,
    $ = Math.cos,
    W = Math.sin,
    Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    K = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = {
      suppressEvents: !0,
      isStart: !0
    },
    ht = {
      suppressEvents: !0
    },
    lt = {},
    ft = [],
    ct = {},
    dt = {},
    pt = {},
    _t = 30,
    mt = [],
    gt = "",
    vt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t
    },
    yt = function _animationCycle(t, e) {
      var r = Math.floor(t /= e);
      return t && r === t ? r - 1 : r
    },
    Tt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e
    },
    bt = {
      _start: 0,
      endTime: T,
      totalDuration: T
    },
    wt = function _parsePosition(t, e, i) {
      var n, a, s, o = t.labels,
        u = t._recent || bt,
        h = t.duration() >= N ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (K(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
    },
    xt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r
    },
    Mt = [].slice,
    Ot = function toArray(t, e, i) {
      return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Rt() ? K(t) ? function _flatten(t, e, i) {
        return void 0 === i && (i = []), t.forEach(function (t) {
          return r(t) && !e || $a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
        }) || i
      }(t, i) : $a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
    },
    kt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Va(n, function (t) {
        return r + ((t - e) / a * s || 0)
      })
    },
    Pt = function _callback(t, e, r) {
      var i, n, a, s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ft.length && la(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
    },
    Ct = 255,
    St = {
      aqua: [0, Ct, Ct],
      lime: [0, Ct, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ct],
      navy: [0, 0, 128],
      white: [Ct, Ct, Ct],
      olive: [128, 128, 0],
      yellow: [Ct, Ct, 0],
      orange: [Ct, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ct, 0, 0],
      pink: [Ct, 192, 203],
      cyan: [0, Ct, Ct],
      transparent: [Ct, Ct, Ct, 0]
    },
    At = function () {
      var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in St) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi")
    }(),
    Dt = /hsl[a]?\(/,
    zt = (O = Date.now, k = 500, C = 33, A = O(), D = A, E = z = 1e3 / 240, g = {
      time: 0,
      frame: 0,
      tick: function tick() {
        ul(!0)
      },
      deltaRatio: function deltaRatio(t) {
        return b / (1e3 / (t || 60))
      },
      wake: function wake() {
        o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function (t) {
          return setTimeout(t, E - 1e3 * g.time + 1 | 0)
        }, d = 1, ul(2))
      },
      sleep: function sleep() {
        (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
      },
      lagSmoothing: function lagSmoothing(t, e) {
        k = t || 1e8, C = Math.min(e, k, 0)
      },
      fps: function fps(t) {
        z = 1e3 / (t || 240), E = 1e3 * g.time + z
      },
      add: function add(n, t, e) {
        var a = t ? function (t, e, r, i) {
          n(t, e, r, i), g.remove(a)
        } : n;
        return g.remove(n), L[e ? "unshift" : "push"](a), Rt(), a
      },
      remove: function remove(t, e) {
        ~(e = L.indexOf(t)) && L.splice(e, 1) && e <= M && M--
      },
      _listeners: L = []
    }),
    Rt = function _wake() {
      return !d && zt.wake()
    },
    Et = {},
    Ft = /^[\d.\-M][\d.\-,\s]/,
    It = /["']/g,
    Bt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t)
      }
    },
    Lt = function _parseEase(t, e) {
      return t && (s(t) ? t : Et[t] || Mb(t)) || e
    };

  function ul(t) {
    var e, r, i, n, a = O() - D,
      s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - E) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, E += e + (z <= e ? 4 : z - e), r = 1), s || (p = _(ul)), r)
      for (M = 0; M < L.length; M++) L[M](i, b, n, t)
  }

  function cn(t) {
    return t < Y ? X * t * t : t < .7272727272727273 ? X * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? X * (t -= 2.25 / 2.75) * t + .9375 : X * Math.pow(t - 2.625 / 2.75, 2) + .984375
  }
  ga("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Qb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r)
    } : function (t) {
      return t
    }, function (t) {
      return 1 - Math.pow(1 - t, r)
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
    })
  }), Et.Linear.easeNone = Et.none = Et.Linear.easeIn, Qb("Elastic", Sb("in"), Sb("out"), Sb()), X = 7.5625, Y = 1 / 2.75, Qb("Bounce", function (t) {
    return 1 - cn(1 - t)
  }, cn), Qb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
  }), Qb("Circ", function (t) {
    return -(H(1 - t * t) - 1)
  }), Qb("Sine", function (t) {
    return 1 === t ? 1 : 1 - $(t * G)
  }), Qb("Back", Tb("in"), Tb("out"), Tb()), Et.SteppedEase = Et.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        i = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function (t) {
        return ((i * xt(0, .99999999, t) | 0) + n) * r
      }
    }
  }, U.ease = Et["quad.out"], ga("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return gt += t + "," + t + "Params,"
  });
  var Xt, Yt = function GSCache(t, e) {
      this.id = J++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : fa, this.set = e ? e.getSetter : ee
    },
    Vt = ((Xt = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
    }, Xt.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }, Xt.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0, Qa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, Xt.totalTime = function totalTime(t, e) {
      if (Rt(), !arguments.length) return this._tTime;
      var r = this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (Ha(this, t), !r._dp || r.parent || Ia(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ja(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ma(this, t, e)), this
    }, Xt.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Da(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }, Xt.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, Xt.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Da(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, Xt.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? yt(this._tTime, r) + 1 : 1
    }, Xt.timeScale = function timeScale(t) {
      if (!arguments.length) return this._rts === -q ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? Fa(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || t === -q ? 0 : this._rts, this.totalTime(xt(-this._delay, this._tDur, e), !0), Ga(this),
        function _recacheAncestors(t) {
          for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
          return t
        }(this)
    }, Xt.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps
    }, Xt.startTime = function startTime(t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return !e || !e._sort && this.parent || Ja(e, this, t - this._delay), this
      }
      return this._start
    }, Xt.endTime = function endTime(t) {
      return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, Xt.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fa(e.rawTime(t), this) : this._tTime : this._tTime
    }, Xt.revert = function revert(t) {
      void 0 === t && (t = ht);
      var e = I;
      return I = t, this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents), "nested" !== this.data && ya(this), I = e, this
    }, Xt.globalTime = function globalTime(t) {
      for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
      return !this.parent && this.vars.immediateRender ? -1 : r
    }, Xt.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ra(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }, Xt.repeatDelay = function repeatDelay(t) {
      if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, Ra(this), e ? this.time(e) : this
      }
      return this._rDelay
    }, Xt.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo
    }, Xt.seek = function seek(t, e) {
      return this.totalTime(wt(this, t), w(e))
    }, Xt.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, w(e))
    }, Xt.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, Xt.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, Xt.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0)
    }, Xt.resume = function resume() {
      return this.paused(!1)
    }, Xt.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -q : 0)), this) : this._rts < 0
    }, Xt.invalidate = function invalidate() {
      return this._initted = this._act = 0, this._zTime = -q, this
    }, Xt.isActive = function isActive() {
      var t, e = this.parent || this._dp,
        r = this._start;
      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - q))
    }, Xt.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
    }, Xt.then = function then(t) {
      var i = this;
      return new Promise(function (e) {
        function xo() {
          var t = i.then;
          i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
        }
        var r = s(t) ? t : oa;
        i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? xo() : i._prom = xo
      })
    }, Xt.kill = function kill() {
      sb(this)
    }, Animation);

  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Qa(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || zt.wake()
  }
  pa(Vt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -q,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Qt = function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), B && Ja(t.parent || B, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ka(_assertThisInitialized(r), t.scrollTrigger), r
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Ua(0, arguments, this), this
    }, e.from = function from(t, e, r) {
      return Ua(1, arguments, this), this
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Ua(2, arguments, this), this
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, ua(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, wt(this, r), 1), this
    }, e.call = function call(t, e, r) {
      return Ja(this, $t.delayedCall(0, t, e), r)
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, wt(this, n)), this
    }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
      return r.runBackwards = 1, ua(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
    }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
      return i.startAt = r, ua(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
    }, e.render = function render(t, e, r) {
      var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = t <= 0 ? 0 : ia(t),
        y = this._zTime < 0 != t < 0 && (this._initted || !g);
      if (this !== B && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
          if (i = ia(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = yt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
            var T = d && 1 & c,
              b = T === (d && 1 & s);
            if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ia(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Ob(this, p)
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
            var i;
            if (e < r)
              for (i = t._first; i && i._start <= r;) {
                if ("isPause" === i.data && i._start > e) return i;
                i = i._next
              } else
                for (i = t._last; i && i._start >= r;) {
                  if ("isPause" === i.data && i._start < e) return i;
                  i = i._prev
                }
          }(this, ia(_), ia(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Pt(this, "onStart"), this._tTime !== v)) return this;
        if (_ <= i && 0 <= t)
          for (n = this._first; n;) {
            if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);
              if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = -q);
                break
              }
            }
            n = a
          } else {
            r = r || I, n = this._last;
            for (var w = t < 0 ? t : i; n;) {
              if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                if (n.parent !== this) return this.render(t, e, r);
                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                  h = 0, a && (v += this._zTime = w ? -q : q);
                  break
                }
              }
              n = a
            }
          }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -q)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ga(this), this.render(t, e, r);
        this._onUpdate && !e && Pt(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ya(this, 1), e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
      }
      return this
    }, e.add = function add(e, i) {
      var n = this;
      if (t(i) || (i = wt(this, i, e)), !(e instanceof Vt)) {
        if (K(e)) return e.forEach(function (t) {
          return n.add(t, i)
        }), this;
        if (r(e)) return this.addLabel(e, i);
        if (!s(e)) return this;
        e = $t.delayedCall(0, e)
      }
      return this !== e ? Ja(this, e, i) : this
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      return n
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
        if (e[r].vars.id === t) return e[r]
    }, e.remove = function remove(t) {
      return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (xa(this, t), t === this._recent && (this._recent = this._last), za(this))
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ia(zt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = wt(this, e), this
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this
    }, e.addPause = function addPause(t, e, r) {
      var i = $t.delayedCall(0, e || T, r);
      return i.data = "isPause", this._hasPause = 1, Ja(this, i, wt(this, t))
    }, e.removePause = function removePause(t) {
      var e = this._first;
      for (t = wt(this, t); e;) e._start === t && "isPause" === e.data && ya(e), e = e._next
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ut !== i[n] && i[n].kill(t, e);
      return this
    }, e.getTweensOf = function getTweensOf(e, r) {
      for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof $t ? ka(s._targets, a) && (o ? (!Ut || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
      return n
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r, i = this,
        n = wt(i, t),
        a = e.startAt,
        s = e.onStart,
        o = e.onStartParams,
        u = e.immediateRender,
        h = $t.to(i, pa({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: n,
          overwrite: "auto",
          duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || q,
          onStart: function onStart() {
            if (i.pause(), !r) {
              var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
              h._dur !== t && Qa(h, t, 0, 1).render(h._time, !0, !0), r = 1
            }
            s && s.apply(h, o || [])
          }
        }, e));
      return u ? h.render(0) : h
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, pa({
        startAt: {
          time: wt(this, t)
        }
      }, r))
    }, e.recent = function recent() {
      return this._recent
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), qb(this, wt(this, t))
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), qb(this, wt(this, t), 1)
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + q)
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);
      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
      if (e)
        for (i in a) a[i] >= r && (a[i] += t);
      return za(this)
    }, e.invalidate = function invalidate() {
      var t = this._first;
      for (this._lock = 0; t;) t.invalidate(), t = t._next;
      return i.prototype.invalidate.call(this)
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), za(this)
    }, e.totalDuration = function totalDuration(t) {
      var e, r, i, n = 0,
        a = this,
        s = a._last,
        o = N;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
      if (a._dirty) {
        for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ja(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        Qa(a, a === B && a._time > n ? a._time : n, 1, 1), a._dirty = 0
      }
      return a._tDur
    }, Timeline.updateRoot = function updateRoot(t) {
      if (B._ts && (ma(B, Fa(t, B)), f = zt.frame), zt.frame >= _t) {
        _t += V.autoSleep || 120;
        var e = B._first;
        if ((!e || !e._ts) && V.autoSleep && zt._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || zt.sleep()
        }
      }
    }, Timeline
  }(Vt);
  pa(Qt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function $b(t, e, i, n, a, o) {
    var u, h, l, f;
    if (dt[t] && !1 !== (u = new dt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
        if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || K(t) || Z(t)) return r(t) ? Gt(t, a, e, i, n) : t;
        var o, u = {};
        for (o in t) u[o] = Gt(t[o], a, e, i, n);
        return u
      }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new me(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
    return u
  }

  function ec(t, r, e, i) {
    var n, a, s = r.ease || i || "power1.inOut";
    if (K(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      })
    });
    else
      for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
        t: parseFloat(t),
        v: r[n],
        e: s
      })
  }
  var Ut, Nt, qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var c, d = t[e],
        p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        _ = s(d) ? l ? Kt : Zt : Wt;
      if (r(n) && (~n.indexOf("random(") && (n = nb(n)), "=" === n.charAt(1) && (!(c = ja(p, n) + (Xa(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Nt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
        var o, u, h, l, f, c, d, p, _ = new me(this._pt, t, e, 0, 1, oe, null, n),
          m = 0,
          g = 0;
        for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = nb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: c,
          c: "=" === l.charAt(1) ? ja(c, l) - c : parseFloat(l) - c,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
        return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
      }.call(this, t, e, p, n, _, h || V.stringFilter, l)) : (c = new me(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ne : re, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
    },
    jt = function _initTween(t, e) {
      var r, i, n, a, s, o, u, h, l, f, c, d, p, _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        x = _.callbackScope,
        M = _.runBackwards,
        O = _.yoyoEase,
        k = _.keyframes,
        P = _.autoRevert,
        C = t._dur,
        S = t._startAt,
        A = t._targets,
        D = t.parent,
        z = D && "nested" === D.data ? D.vars.targets : A,
        R = "auto" === t._overwrite && !F,
        E = t.timeline;
      if (!E || k && m || (m = "none"), t._ease = Lt(m, U.ease), t._yEase = O ? Bt(Lt(!0 === O ? m : O, U.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !E && !!_.runBackwards, !E || k && !_.stagger) {
        if (d = (h = A[0] ? ea(A[0]).harness : 0) && _[h.prop], r = ta(_, lt), S && (e < 0 && M && v && !P ? S.render(-1, !0) : S.revert(M && C ? ht : ut), S._lazy = 0), g) {
          if (ya(t._startAt = $t.set(A, pa({
              data: "isStart",
              overwrite: !1,
              parent: D,
              immediateRender: !0,
              lazy: w(y),
              startAt: null,
              delay: 0,
              onUpdate: T,
              onUpdateParams: b,
              callbackScope: x,
              stagger: 0
            }, g))), e < 0 && (I || !v && !P) && t._startAt.revert(ht), v && C && e <= 0) return void(e && (t._zTime = e))
        } else if (M && C && !S)
          if (e && (v = !1), n = pa({
              overwrite: !1,
              data: "isFromStart",
              lazy: v && w(y),
              immediateRender: v,
              stagger: 0,
              parent: D
            }, r), d && (n[h.prop] = d), ya(t._startAt = $t.set(A, n)), e < 0 && (I ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, v) {
            if (!e) return
          } else _initTween(t._startAt, q);
        for (t._pt = t._ptCache = 0, y = C && w(y) || y && !C, i = 0; i < A.length; i++) {
          if (u = (s = A[i])._gsap || da(A)[i]._gsap, t._ptLookup[i] = f = {}, ct[u.id] && ft.length && la(), c = z === A ? i : z.indexOf(s), h && !1 !== (l = new h).init(s, d || r, t, c, z) && (t._pt = a = new me(t._pt, s, l.name, 0, 1, l.render, l, 0, l.priority), l._props.forEach(function (t) {
              f[t] = a
            }), l.priority && (o = 1)), !h || d)
            for (n in r) dt[n] && (l = $b(n, r, t, c, s, z)) ? l.priority && (o = 1) : f[n] = a = qt.call(t, s, n, "get", r[n], c, z, 0, _.stringFilter);
          t._op && t._op[i] && t.kill(s, t._op[i]), R && t._pt && (Ut = t, B.killTweensOf(s, f, t.globalTime(e)), p = !t.parent, Ut = 0), t._pt && y && (ct[u.id] = 1)
        }
        o && _e(t), t._onInit && t._onInit(t)
      }
      t._onUpdate = T, t._initted = (!t._op || t._pt) && !p, k && e <= 0 && E.render(N, !0, !0)
    },
    Gt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? nb(t) : t
    },
    Jt = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ga(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Ht[t] = 1
  });
  var $t = function (E) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var s, o, u, h, l, f, c, d, p = (a = E.call(this, n ? r : ua(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        M = p.defaults,
        O = p.scrollTrigger,
        k = p.yoyoEase,
        P = r.parent || B,
        C = (K(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
      if (a._targets = C.length ? da(C) : R("GSAP target " + e + " not found. https://greensock.com", !V.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
        if (r = a.vars, (s = a.timeline = new Qt({
            data: "nested",
            defaults: M || {},
            targets: P && "nested" === P.data ? P.vars.targets : C
          })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
          if (h = C.length, c = T && db(T), v(T))
            for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
          for (o = 0; o < h; o++)(u = ta(r, Ht)).stagger = 0, k && (u.yoyoEase = k), d && vt(u, d), f = C[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Et.none;
          s.duration() ? _ = m = 0 : a.timeline = 0
        } else if (x) {
          ua(pa(s.vars.defaults, {
            ease: "none"
          })), s._ease = Lt(x.ease || r.ease || "none");
          var S, A, D, z = 0;
          if (K(x)) x.forEach(function (t) {
            return s.to(C, t, ">")
          }), s.duration();
          else {
            for (l in u = {}, x) "ease" === l || "easeEach" === l || ec(l, x[l], u, x.easeEach);
            for (l in u)
              for (S = u[l].sort(function (t, e) {
                  return t.t - e.t
                }), o = z = 0; o < S.length; o++)(D = {
                ease: (A = S[o]).e,
                duration: (A.t - (o ? S[o - 1].t : 0)) / 100 * _
              })[l] = A.v, s.to(C, D, z), z += D.duration;
            s.duration() < _ && s.to({}, {
              duration: _ - s.duration()
            })
          }
        }
        _ || a.duration(_ = s.duration())
      } else a.timeline = 0;
      return !0 !== b || F || (Ut = _assertThisInitialized(a), B.killTweensOf(C), Ut = 0), Ja(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ia(P._time) && w(g) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent)
      }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -q, a.render(Math.max(0, -m))), O && Ka(_assertThisInitialized(a), O), a
    }
    _inheritsLoose(Tween, E);
    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i, n, a, s, o, u, h, l, f, c = this._time,
        d = this._tDur,
        p = this._dur,
        _ = t < 0,
        m = d - q < t && !_ ? d : t < q ? 0 : t;
      if (p) {
        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
          if (i = m, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
            if (i = ia(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = yt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
            a !== o && (l && this._yEase && Ob(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ia(s * a), !0).invalidate()._lock = 0))
          }
          if (!this._initted) {
            if (La(this, _ ? t : i, r, e)) return this._tTime = 0, this;
            if (c !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r)
          }
          if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Pt(this, "onStart"), this._tTime !== m)) return this;
          for (n = this._pt; n;) n.r(h, n.d), n = n._next;
          l && l.render(t < 0 ? t : !i && u ? -q : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ba(this, t, 0, r), Pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ba(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || ya(this, 1), e || _ && !c || !m && !c || (Pt(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
        }
      } else ! function _renderZeroDurationTween(t, e, r, i) {
        var n, a, s, o = t.ratio,
          u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
          }(t) && (t._initted || !Tt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Tt(t)) ? 0 : 1,
          h = t._rDelay,
          l = 0;
        if (h && t._repeat && (l = xt(0, t._tDur, e), a = yt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== yt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || I || i || t._zTime === q || !e && t._zTime) {
          if (!t._initted && La(t, e, i, r)) return;
          for (s = t._zTime, t._zTime = e || (r ? q : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
          e < 0 && Ba(t, e, 0, !0), t._onUpdate && !r && Pt(t, "onUpdate"), l && t._repeat && !r && t.parent && Pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ya(t, 1), r || I || (Pt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
      }(this, t, e, r);
      return this
    }, e.targets = function targets() {
      return this._targets
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), E.prototype.invalidate.call(this)
    }, e.resetTo = function resetTo(t, e, r, i) {
      d || zt.wake(), this._ts || this.play();
      var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || jt(this, a), n = this._ease(a / this._dur),
        function _updatePropTweens(t, e, r, i, n, a, s) {
          var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
          if (!f)
            for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
              if ((o = h[l][e]) && o.d && o.d._pt)
                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
              if (!o) return Nt = 1, t.vars[e] = "+=0", jt(t, s), Nt = 0, 1;
              f.push(o)
            }
          for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ha(r) + Xa(u.e)), u.b && (u.b = o.s + Xa(u.b))
        }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ha(this, 0), this.parent || wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? sb(this) : this;
      if (this.timeline) {
        var i = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Ut && !0 !== Ut.vars.overwrite)._first || sb(this), this.parent && i !== this.timeline.totalDuration() && Qa(this, this._dur * this.timeline._tDur / i, 0, 1), this
      }
      var n, a, s, o, u, h, l, f = this._targets,
        c = t ? Ot(t) : f,
        d = this._ptLookup,
        p = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
          for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
          return r < 0
        }(f, c)) return "all" === e && (this._pt = 0), sb(this);
      for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ga(e, function (t) {
          return u[t] = 1
        }), e = u), e = function _addAliasesToVars(t, e) {
          var r, i, n, a, s = t[0] ? ea(t[0]).harness : 0,
            o = s && s.aliases;
          if (!o) return e;
          for (i in r = vt({}, e), o)
            if (i in r)
              for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
          return r
        }(f, e)), l = f.length; l--;)
        if (~c.indexOf(f[l]))
          for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || xa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
      return this._initted && !this._pt && p && sb(this), this
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r)
    }, Tween.from = function from(t, e) {
      return Ua(1, arguments)
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      })
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Ua(2, arguments)
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return B.killTweensOf(t, e, r)
    }, Tween
  }(Vt);
  pa($t.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ga("staggerTo,staggerFrom,staggerFromTo", function (r) {
    $t[r] = function () {
      var t = new Qt,
        e = Mt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
    }
  });

  function mc(t, e, r) {
    return t.setAttribute(e, r)
  }

  function uc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
  }
  var Wt = function _setterPlain(t, e, r) {
      return t[e] = r
    },
    Zt = function _setterFunc(t, e, r) {
      return t[e](r)
    },
    Kt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r)
    },
    ee = function _getSetter(t, e) {
      return s(t[e]) ? Zt : u(t[e]) && t.setAttribute ? mc : Wt
    },
    re = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    },
    ne = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    oe = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        i += e.c
      }
      e.set(e.t, e.p, i, e)
    },
    ce = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    de = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
    },
    pe = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? xa(this, i, "_pt") : i.dep || (e = 1), i = r;
      return !e
    },
    _e = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a;) {
        for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
        (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
      }
      t._pt = i
    },
    me = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = uc, this.m = t, this.mt = r, this.tween = e
    }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || re, this.d = s || this, this.set = o || Wt, this.pr = u || 0, (this._next = t) && (t._prev = this)
  }
  ga(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return lt[t] = 1
  }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Qt, B = new Qt({
    sortChildren: !1,
    defaults: U,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), V.stringFilter = Db;

  function Bc(t) {
    return (Te[t] || we).map(function (t) {
      return t()
    })
  }

  function Cc() {
    var t = Date.now(),
      o = [];
    2 < t - xe && (Bc("matchMediaInit"), ye.forEach(function (t) {
      var e, r, i, n, a = t.queries,
        s = t.conditions;
      for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
      n && (t.revert(), i && o.push(t))
    }), Bc("matchMediaRevert"), o.forEach(function (t) {
      return t.onMatch(t)
    }), xe = t, Bc("matchMedia"))
  }
  var ve, ye = [],
    Te = {},
    we = [],
    xe = 0,
    Me = ((ve = Context.prototype).add = function add(t, i, n) {
      function xw() {
        var t, e = l,
          r = a.selector;
        return e && e !== a && e.data.push(a), n && (a.selector = bb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
      }
      s(t) && (n = i, i = t, t = s);
      var a = this;
      return a.last = xw, t === s ? xw(a) : t ? a[t] = xw : xw
    }, ve.ignore = function ignore(t) {
      var e = l;
      l = null, t(this), l = e
    }, ve.getTweens = function getTweens() {
      var e = [];
      return this.data.forEach(function (t) {
        return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof $t && e.push(t)
      }), e
    }, ve.clear = function clear() {
      this._r.length = this.data.length = 0
    }, ve.kill = function kill(e, t) {
      var r = this;
      if (e ? (this.getTweens().map(function (t) {
          return {
            g: t.globalTime(0),
            t: t
          }
        }).sort(function (t, e) {
          return e.g - t.g || -1
        }).forEach(function (t) {
          return t.t.revert(e)
        }), this.data.forEach(function (t) {
          return !(t instanceof Vt) && t.revert && t.revert(e)
        }), this._r.forEach(function (t) {
          return t(e, r)
        }), this.isReverted = !0) : this.data.forEach(function (t) {
          return t.kill && t.kill()
        }), this.clear(), t) {
        var i = ye.indexOf(this);
        ~i && ye.splice(i, 1)
      }
    }, ve.revert = function revert(t) {
      this.kill(t || {})
    }, Context);

  function Context(t, e) {
    this.selector = e && bb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
  }
  var Oe, ke = ((Oe = MatchMedia.prototype).add = function add(t, e, r) {
    v(t) || (t = {
      matches: t
    });
    var i, n, a, s = new Me(0, r || this.scope),
      o = s.conditions = {};
    for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Cc) : i.addEventListener("change", Cc));
    return a && e(s), this
  }, Oe.revert = function revert(t) {
    this.kill(t || {})
  }, Oe.kill = function kill(e) {
    this.contexts.forEach(function (t) {
      return t.kill(e, !0)
    })
  }, MatchMedia);

  function MatchMedia(t) {
    this.contexts = [], this.scope = t
  }
  var Pe = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
            r = s(t),
            i = e && !r && t.init ? function () {
              this._props = []
            } : t,
            n = {
              init: T,
              render: ce,
              add: qt,
              kill: pe,
              modifier: de,
              rawVars: 0
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: ee,
              aliases: {},
              register: 0
            };
          if (Rt(), t !== i) {
            if (dt[e]) return;
            pa(i, pa(ta(t, n), a)), vt(i.prototype, vt(n, ta(t, a))), dt[i.prop = e] = i, t.targetTest && (mt.push(i), lt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
          }
          S(e, i), t.register && t.register(Ce, i, me)
        }(t)
      })
    },
    timeline: function timeline(t) {
      return new Qt(t)
    },
    getTweensOf: function getTweensOf(t, e) {
      return B.getTweensOf(t, e)
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = ea(i || {}).get,
        s = e ? oa : na;
      return "native" === e && (e = ""), i ? t ? s((dt[t] && dt[t].get || a)(i, t, e, n)) : function (t, e, r) {
        return s((dt[t] && dt[t].get || a)(i, t, e, r))
      } : i
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
            return Ce.quickSetter(t, e, i)
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--;) n[e](t)
        }
      }
      r = r[0] || {};
      var s = dt[e],
        o = ea(r),
        u = o.harness && (o.harness.aliases || {})[e] || e,
        h = s ? function (t) {
          var e = new s;
          c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && ce(1, c)
        } : o.set(r, u);
      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1)
      }
    },
    quickTo: function quickTo(t, i, e) {
      function Mx(t, e, r) {
        return n.resetTo(i, t, e, r)
      }
      var r, n = Ce.to(t, vt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
      return Mx.tween = n, Mx
    },
    isTweening: function isTweening(t) {
      return 0 < B.getTweensOf(t, !0).length
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Lt(t.ease, U.ease)), sa(U, t || {})
    },
    config: function config(t) {
      return sa(V, t || {})
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !dt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
      }), pt[i] = function (t, e, r) {
        return n(Ot(t), pa(e || {}, a), r)
      }, r && (Qt.prototype[i] = function (t, e, r) {
        return this.add(pt[i](t, v(e) ? e : (r = e) && {}, this), r)
      })
    },
    registerEase: function registerEase(t, e) {
      Et[t] = Lt(e)
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Lt(t, e) : Et
    },
    getById: function getById(t) {
      return B.getById(t)
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r, i, n = new Qt(t);
      for (n.smoothChildTiming = w(t.smoothChildTiming), B.remove(n), n._dp = 0, n._time = n._tTime = B._time, r = B._first; r;) i = r._next, !e && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0] || Ja(n, r, r._start - r._delay), r = i;
      return Ja(B, n, 0), n
    },
    context: function context(t, e) {
      return t ? new Me(t, e) : l
    },
    matchMedia: function matchMedia(t) {
      return new ke(t)
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return ye.forEach(function (t) {
        var e, r, i = t.conditions;
        for (r in i) i[r] && (i[r] = !1, e = 1);
        e && t.revert()
      }) || Cc()
    },
    addEventListener: function addEventListener(t, e) {
      var r = Te[t] || (Te[t] = []);
      ~r.indexOf(e) || r.push(e)
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = Te[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1)
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return K(e) ? kb(e, wrap(0, e.length), t) : Va(r, function (t) {
          return (i + (t - e) % i) % i + e
        })
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return K(e) ? kb(e, wrapYoyo(0, e.length - 1), t) : Va(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
        })
      },
      distribute: db,
      random: gb,
      snap: fb,
      normalize: function normalize(t, e, r) {
        return kt(t, e, 0, 1, r)
      },
      getUnit: Xa,
      clamp: function clamp(e, r, t) {
        return Va(t, function (t) {
          return xt(e, r, t)
        })
      },
      splitColor: yb,
      toArray: Ot,
      selector: bb,
      mapRange: kt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t)
          }, t)
        }
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Xa(t))
        }
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i) ? 0 : function (t) {
          return (1 - t) * e + t * i
        };
        if (!a) {
          var s, o, u, h, l, f = r(e),
            c = {};
          if (!0 === t && (n = 1) && (t = null), f) e = {
            p: e
          }, i = {
            p: i
          };
          else if (K(e) && !K(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e)
            }, t = i
          } else n || (e = vt(K(e) ? [] : {}, e));
          if (!u) {
            for (s in i) qt.call(c, e, s, "get", i[s]);
            a = function func(t) {
              return ce(t, c) || (f ? e.p : e)
            }
          }
        }
        return Va(t, a)
      },
      shuffle: cb
    },
    install: P,
    effects: pt,
    ticker: zt,
    updateRoot: Qt.updateRoot,
    plugins: dt,
    globalTimeline: B,
    core: {
      PropTween: me,
      globals: S,
      Tween: $t,
      Timeline: Qt,
      Animation: Vt,
      getCache: ea,
      _removeLinkedListItem: xa,
      reverting: function reverting() {
        return I
      },
      context: function context(t) {
        return t && l && (l.data.push(t), t._ctx = l), l
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return F = t
      }
    }
  };
  ga("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return Pe[t] = $t[t]
  }), zt.add(Qt.updateRoot), c = Pe.to({}, {
    duration: 0
  });

  function Gc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r
  }

  function Ic(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (r(n) && (e = {}, ga(n, function (t) {
              return e[t] = 1
            }), n = e), a) {
            for (i in e = {}, n) e[i] = a(n[i]);
            n = e
          }! function _addModifiers(t, e) {
            var r, i, n, a = t._targets;
            for (r in e)
              for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
          }(t, n)
        }
      }
    }
  }
  var Ce = Pe.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s, o;
      for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
    },
    render: function render(t, e) {
      for (var r = e._pt; r;) I ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
    }
  }, Ic("roundProps", eb), Ic("modifiers"), Ic("snap", fb)) || Pe;
  $t.version = Qt.version = Ce.version = "3.11.1", o = 1, x() && Rt();

  function sd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }

  function td(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }

  function ud(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
  }

  function vd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
  }

  function wd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
  }

  function xd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
  }

  function yd(t, e, r) {
    return t.style[e] = r
  }

  function zd(t, e, r) {
    return t.style.setProperty(e, r)
  }

  function Ad(t, e, r) {
    return t._gsap[e] = r
  }

  function Bd(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r
  }

  function Cd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a)
  }

  function Dd(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a)
  }

  function Gd(t) {
    var e = this,
      r = this.target,
      i = r.style;
    if (t in er) {
      if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = ur[t] || t).indexOf(",") ? t.split(",").forEach(function (t) {
          return e.tfm[t] = _r(r, t)
        }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : _r(r, t)), 0 <= this.props.indexOf(hr)) return;
      r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(lr, "")), t = hr
    }
    i && this.props.push(t, i[t])
  }

  function Hd(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
  }

  function Id() {
    var t, e, r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 2) r[t + 1] ? n[r[t]] = r[t + 1] : n.removeProperty(r[t].replace(ar, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Fe()) || t.isStart || n[hr] || (Hd(n), a.uncache = 1)
    }
  }

  function Jd(t, e) {
    var r = {
      target: t,
      props: [],
      revert: Id,
      save: Gd
    };
    return e && e.split(",").forEach(function (t) {
      return r.save(t)
    }), r
  }

  function Ld(t, e) {
    var r = Ae.createElementNS ? Ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ae.createElement(t);
    return r.style ? r : Ae.createElement(t)
  }

  function Md(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(ar, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Md(t, cr(e) || e, 1) || ""
  }

  function Pd() {
    (function _windowExists() {
      return "undefined" != typeof window
    })() && window.document && (Se = window, Ae = Se.document, De = Ae.documentElement, Re = Ld("div") || {
      style: {}
    }, Ld("div"), hr = cr(hr), lr = hr + "Origin", Re.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!cr("perspective"), Fe = Ce.core.reverting, ze = 1)
  }

  function Qd(t) {
    var e, r = Ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (De.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Qd
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), De.removeChild(r), this.style.cssText = a, e
  }

  function Rd(t, e) {
    for (var r = e.length; r--;)
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
  }

  function Sd(e) {
    var r;
    try {
      r = e.getBBox()
    } catch (t) {
      r = Qd.call(e, !0)
    }
    return r && (r.width || r.height) || e.getBBox === Qd || (r = Qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +Rd(e, ["x", "cx", "x1"]) || 0,
      y: +Rd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    }
  }

  function Td(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Sd(t))
  }

  function Ud(t, e) {
    if (e) {
      var r = t.style;
      e in er && e !== lr && (e = hr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ar, "-$1").toLowerCase())) : r.removeAttribute(e)
    }
  }

  function Vd(t, e, r, i, n, a) {
    var s = new me(t._pt, e, r, 0, 1, a ? xd : wd);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s
  }

  function Yd(t, e, r, i) {
    var n, a, s, o, u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Re.style,
      f = sr.test(e),
      c = "svg" === t.tagName.toLowerCase(),
      d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || dr[i] || dr[h] ? u : ("px" === h || p || (u = Yd(t, e, r, "px")), o = t.getCTM && Td(t), !_ && "%" !== h || !er[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ae && a.appendChild || (a = Ae.body), (s = a._gsap) && _ && s.width && f && s.time === zt.time && !s.uncache ? ha(u / s.width * 100) : (!_ && "%" !== h || pr[Md(a, "display")] || (l.position = Md(t, "position")), a === t && (l.position = "static"), a.appendChild(Re), n = Re[d], a.removeChild(Re), l.position = "absolute", f && _ && ((s = ea(a)).time = zt.time, s.width = a[d]), ha(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ha(_ ? u / n * 100 : u / 100 * n)))
  }

  function $d(t, e, r, i) {
    if (!r || "none" === r) {
      var n = cr(e, t, 1),
        a = n && Md(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Md(t, "borderTopColor"))
    }
    var s, o, u, h, l, f, c, d, p, _, m, g = new me(this._pt, t.style, e, 0, 1, oe),
      v = 0,
      y = 0;
    if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Md(t, e) || i, t.style[e] = r), Db(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ja(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || V.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Yd(t, e, f, _) || 0), g._pt = {
        _next: g._pt,
        p: p || 1 === y ? p : ",",
        s: h,
        c: d - h,
        m: l && l < 4 || "zIndex" === e ? Math.round : 0
      });
      g.c = v < i.length ? i.substring(v, i.length) : ""
    } else g.r = "display" === e && "none" === i ? xd : wd;
    return nt.test(i) && (g.e = 0), this._pt = g
  }

  function ae(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = mr[r] || r, e[1] = mr[i] || i, e.join(" ")
  }

  function be(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r, i, n, a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;
      else
        for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], er[r] && (i = 1, r = "transformOrigin" === r ? lr : hr), Ud(a, r);
      i && (Ud(a, hr), u && (u.svg && a.removeAttribute("transform"), Tr(a, 1), u.uncache = 1, Hd(s)))
    }
  }

  function fe(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
  }

  function ge(t) {
    var e = Md(t, hr);
    return fe(e) ? vr : e.substr(7).match(et).map(ha)
  }

  function he(t, e) {
    var r, i, n, a, s = t._gsap || ea(t),
      o = t.style,
      u = ge(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? vr : u : (u !== vr || t.offsetParent || t === De || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, De.appendChild(t)), u = ge(t), n ? o.display = n : Ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : De.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
  }

  function ie(t, e, r, i, n, a) {
    var s, o, u, h = t._gsap,
      l = n || he(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r ? l !== vr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Sd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[lr] = "0px 0px", a && (Vd(a, h, "xOrigin", f, w), Vd(a, h, "yOrigin", c, x), Vd(a, h, "xOffset", d, h.xOffset), Vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
  }

  function le(t, e, r) {
    var i = Xa(e);
    return ha(parseFloat(e) + parseFloat(Yd(t, "x", r + "px", i))) + i
  }

  function se(t, e, i, n, a) {
    var s, o, u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? rr : 1) - n,
      f = n + l + "deg";
    return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new me(t._pt, e, i, n, l, td), o.e = f, o.u = "deg", t._props.push(i), o
  }

  function te(t, e) {
    for (var r in e) t[r] = e[r];
    return t
  }

  function ue(t, e, r) {
    var i, n, a, s, o, u, h, l = te({}, r._gsap),
      f = r.style;
    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[hr] = e, i = Tr(r, 1), Ud(r, hr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[hr], f[hr] = e, i = Tr(r, 1), f[hr] = a), er)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Xa(a) !== (h = Xa(s)) ? Yd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new me(t._pt, i, n, o, u - o, sd), t._pt.u = h || 0, t._props.push(n));
    te(i, l)
  }
  var Se, Ae, De, ze, Re, Ee, Fe, Ie, Be = Et.Power0,
    Le = Et.Power1,
    Xe = Et.Power2,
    Ye = Et.Power3,
    Ve = Et.Power4,
    Qe = Et.Linear,
    Ue = Et.Quad,
    Ne = Et.Cubic,
    qe = Et.Quart,
    je = Et.Quint,
    Ge = Et.Strong,
    Je = Et.Elastic,
    He = Et.Back,
    $e = Et.SteppedEase,
    We = Et.Bounce,
    Ze = Et.Sine,
    Ke = Et.Expo,
    tr = Et.Circ,
    er = {},
    rr = 180 / Math.PI,
    ir = Math.PI / 180,
    nr = Math.atan2,
    ar = /([A-Z])/g,
    sr = /(left|right|width|margin|padding|x)/i,
    or = /[\s,\(]\S/,
    ur = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    hr = "transform",
    lr = hr + "Origin",
    fr = "O,Moz,ms,Ms,Webkit".split(","),
    cr = function _checkPropPrefix(t, e, r) {
      var i = (e || Re).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(fr[n] + t in i););
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? fr[n] : "") + t
    },
    dr = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    pr = {
      grid: 1,
      flex: 1
    },
    _r = function _get(t, e, r, i) {
      var n;
      return ze || Pd(), e in ur && "transform" !== e && ~(e = ur[e]).indexOf(",") && (e = e.split(",")[0]), er[e] && "transform" !== e ? (n = Tr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : br(Md(t, lr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = gr[e] && gr[e](t, e, r) || Md(t, e) || fa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Yd(t, e, n, r) + r : n
    },
    mr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    gr = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = t._pt = new me(t._pt, e, r, 0, 0, be);
          return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
        }
      }
    },
    vr = [1, 0, 0, 1, 0, 0],
    yr = {},
    Tr = function _parseTransform(t, e) {
      var r = t._gsap || new Yt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, M, O, k, P, C, S, A, D, z, R, E, F = t.style,
        I = r.scaleX < 0,
        B = "deg",
        L = getComputedStyle(t),
        X = Md(t, lr) || "0";
      return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Td(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[hr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + L[hr]), F.scale = F.rotate = F.translate = "none"), m = he(t, r.svg), r.svg && (k = r.uncache ? (P = t.getBBox(), X = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), ie(t, k || X, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== vr && (T = m[0], b = m[1], w = m[2], x = m[3], i = M = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? nr(b, T) * rr : 0, (f = w || x ? nr(w, x) * rr + u : 0) && (o *= Math.abs(Math.cos(f * ir))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (E = m[6], z = m[7], S = m[8], A = m[9], D = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = nr(E, D)) * rr, g && (k = M * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + A * y, C = E * v + D * y, S = M * -y + S * v, A = O * -y + A * v, D = E * -y + D * v, R = z * -y + R * v, M = k, O = P, E = C), l = (g = nr(-w, D)) * rr, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = k = T * v - S * y, b = P = b * v - A * y, w = C = w * v - D * y), u = (g = nr(b, T)) * rr, g && (k = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = M * v + O * y, b = b * v - T * y, O = O * v - M * y, T = k, M = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ha(Math.sqrt(T * T + b * b + w * w)), o = ha(Math.sqrt(O * O + E * E)), g = nr(M, O), f = 2e-4 < Math.abs(g) ? g * rr : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !fe(Md(t, hr)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ha(s), r.scaleY = ha(o), r.rotation = ha(u) + B, r.rotationX = ha(h) + B, r.rotationY = ha(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (F[lr] = br(X)), r.xOffset = r.yOffset = 0, r.force3D = V.force3D, r.renderTransform = r.svg ? Pr : Ie ? kr : wr, r.uncache = 0, r
    },
    br = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1]
    },
    wr = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, kr(t, e)
    },
    xr = "0deg",
    Mr = "0px",
    Or = ") ",
    kr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (l !== xr || h !== xr)) {
        var b, w = parseFloat(h) * ir,
          x = Math.sin(w),
          M = Math.cos(w);
        w = parseFloat(l) * ir, b = Math.cos(w), a = le(g, a, x * b * -v), s = le(g, s, -Math.sin(w) * -v), o = le(g, o, M * b * -v + v)
      }
      _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== xr && (y += "rotate(" + u + Or), h !== xr && (y += "rotateY(" + h + Or), l !== xr && (y += "rotateX(" + l + Or), f === xr && c === xr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[hr] = y || "translate(0, 0)"
    },
    Pr = function _renderSVGTransforms(t, e) {
      var r, i, n, a, s, o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        M = parseFloat(f);
      c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= ir, d *= ir, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= ir, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ha(r), i = ha(i), n = ha(n), a = ha(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (x = Yd(g, "x", l, "px"), M = Yd(g, "y", f, "px")), (v || y || T || b) && (x = ha(x + v - (v * r + y * n) + T), M = ha(M + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ha(x + u / 100 * s.width), M = ha(M + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + M + ")", g.setAttribute("transform", s), w && (g.style[hr] = s)
    };
  ga("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e
      });
    gr[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return _r(e, t, r)
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
      }), e.init(t, s, n)
    }
  });
  var Cr, Sr, Ar, Dr = {
    name: "css",
    register: Pd,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType
    },
    init: function init(t, e, i, n, a) {
      var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
        x = t.style,
        M = i.vars.startAt;
      for (c in ze || Pd(), this.styles = this.styles || Jd(t), b = this.styles.props, this.tween = i, e)
        if ("autoRound" !== c && (o = e[c], !dt[c] || !$b(c, e, i, n, t, a)))
          if (l = typeof o, f = gr[c], "function" === l && (l = typeof (o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = nb(o)), f) f(this, t, c, o, i) && (T = 1);
          else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", At.lastIndex = 0, At.test(s) || (d = Xa(s), p = Xa(o)), p ? d !== p && (s = Yd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, x[c]);
      else if ("undefined" !== l) {
        if (M && c in M ? (s = "function" == typeof M[c] ? M[c].call(i, n, t, a) : M[c], r(s) && ~s.indexOf("random(") && (s = nb(s)), Xa(s + "") || (s += V.units[c] || Xa(_r(t, c)) || ""), "=" === (s + "").charAt(1) && (s = _r(t, c))) : s = _r(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in ur && ("autoAlpha" === c && (1 === h && "hidden" === _r(t, "visibility") && u && (h = 0), b.push("visibility", x.visibility), Vd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = ur[c]).indexOf(",") && (c = c.split(",")[0])), m = c in er)
          if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || Tr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new me(this._pt, x, hr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new me(this._pt, v, "scaleY", v.scaleY, (_ ? ja(v.scaleY, _ + u) : u) - v.scaleY || 0, sd), this._pt.u = 0, w.push("scaleY", c), c += "X";
          else {
            if ("transformOrigin" === c) {
              b.push(lr, x[lr]), o = ae(o), v.svg ? ie(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Vd(this, v, "zOrigin", v.zOrigin, p), Vd(this, x, c, br(s), br(o)));
              continue
            }
            if ("svgOrigin" === c) {
              ie(t, o, 1, y, 0, this);
              continue
            }
            if (c in yr) {
              se(this, v, c, h, _ ? ja(h, _ + o) : o);
              continue
            }
            if ("smoothOrigin" === c) {
              Vd(this, v, "smooth", v.smooth, o);
              continue
            }
            if ("force3D" === c) {
              v[c] = o;
              continue
            }
            if ("transform" === c) {
              ue(this, o, t);
              continue
            }
          }
        else c in x || (c = cr(c) || c);
        if (m || (u || 0 === u) && (h || 0 === h) && !or.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Xa(o) || (c in V.units ? V.units[c] : d)) && (h = Yd(t, c, s, p)), this._pt = new me(this._pt, m ? v : x, c, h, (_ ? ja(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? sd : vd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = ud);
        else if (c in x) $d.call(this, t, c, s, _ ? _ + o : o);
        else {
          if (!(c in t)) {
            Q(c, o);
            continue
          }
          this.add(t, c, s || t[c], _ ? _ + o : o, n, a)
        }
        m || b.push(c, x[c]), w.push(c)
      }
      T && _e(this)
    },
    render: function render(t, e) {
      if (e.tween._time || !Fe())
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
      else e.styles.revert()
    },
    get: _r,
    aliases: ur,
    getSetter: function getSetter(t, e, r) {
      var i = ur[e];
      return i && i.indexOf(",") < 0 && (e = i), e in er && e !== lr && (t._gsap.x || _r(t, "x")) ? r && Ee === r ? "scale" === e ? Bd : Ad : (Ee = r || {}) && ("scale" === e ? Cd : Dd) : t.style && !u(t.style[e]) ? yd : ~e.indexOf("-") ? zd : ee(t, e)
    },
    core: {
      _removeProperty: Ud,
      _getMatrix: he
    }
  };
  Ce.utils.checkPrefix = cr, Ce.core.getStyleSaver = Jd, Ar = ga((Cr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    er[t] = 1
  }), ga(Sr, function (t) {
    V.units[t] = "deg", yr[t] = 1
  }), ur[Ar[13]] = Cr + "," + Sr, ga("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    ur[e[1]] = Ar[e[0]]
  }), ga("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    V.units[t] = "px"
  }), Ce.registerPlugin(Dr);
  var zr = Ce.registerPlugin(Dr) || Ce,
    Rr = zr.core.Tween;
  e.Back = He, e.Bounce = We, e.CSSPlugin = Dr, e.Circ = tr, e.Cubic = Ne, e.Elastic = Je, e.Expo = Ke, e.Linear = Qe, e.Power0 = Be, e.Power1 = Le, e.Power2 = Xe, e.Power3 = Ye, e.Power4 = Ve, e.Quad = Ue, e.Quart = qe, e.Quint = je, e.Sine = Ze, e.SteppedEase = $e, e.Strong = Ge, e.TimelineLite = Qt, e.TimelineMax = Qt, e.TweenLite = $t, e.TweenMax = Rr, e.default = zr, e.gsap = zr;
  if (typeof (window) === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  } else {
    delete e.default
  }
});

/*!
 * ScrollTrigger 3.11.1
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
  }

  function q() {
    return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we
  }

  function y(e, t) {
    return ~He.indexOf(e) && He[He.indexOf(e) + 1][t]
  }

  function z(e) {
    return !!~t.indexOf(e)
  }

  function A(e, t, r, n, i) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!i
    })
  }

  function B(e, t, r, n) {
    return e.removeEventListener(t, r, !!n)
  }

  function E() {
    return ze && ze.isPressed || k.cache++
  }

  function F(r, n) {
    function Pc(e) {
      if (e || 0 === e) {
        i && (ke.history.scrollRestoration = "manual");
        var t = ze && ze.isPressed;
        e = Pc.v = Math.round(e) || (ze && ze.iOS ? 1 : 0), r(e), Pc.cacheID = k.cache, t && o("ss", e)
      } else(n || k.cache !== Pc.cacheID || o("ref")) && (Pc.cacheID = k.cache, Pc.v = r());
      return Pc.v + Pc.offset
    }
    return Pc.offset = 0, r && Pc
  }

  function I(e) {
    return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
  }

  function J(t, e) {
    var r = e.s,
      n = e.sc,
      i = k.indexOf(t),
      o = n === Je.sc ? 1 : 2;
    return ~i || (i = k.push(t) - 1), k[i + o] || (k[i + o] = F(y(t, r), !0) || (z(t) ? n : F(function (e) {
      return arguments.length ? t[r] = e : t[r]
    })))
  }

  function K(e, t, i) {
    function jd(e, t) {
      var r = je();
      t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
    }
    var o = e,
      a = e,
      s = je(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: jd,
      reset: function reset() {
        a = o = i ? 0 : o, l = s = 0
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = je();
        return !e && 0 !== e || e === o || jd(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
      }
    }
  }

  function L(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
  }

  function M(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r
  }

  function N() {
    (Be = we.core.globals().ScrollTrigger) && Be.core && function _integrate() {
      var e = Be.core,
        r = e.bridge || {},
        t = e._scrollers,
        n = e._proxies;
      t.push.apply(t, k), n.push.apply(n, He), k = t, He = n, o = function _bridge(e, t) {
        return r[e](t)
      }
    }()
  }

  function O(e) {
    return (we = e || q()) && "undefined" != typeof document && document.body && (ke = window, Ce = (Me = document).documentElement, Ae = Me.body, t = [ke, Me, Ce, Ae], we.utils.clamp, Ie = "onpointerenter" in Ae ? "pointer" : "mouse", Ee = P.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = P.eventTypes = ("ontouchstart" in Ce ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ce ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
      return i = 0
    }, 500), N(), _e = 1), _e
  }
  var we, _e, ke, Me, Ce, Ae, Ee, Ie, Be, t, ze, De, i = 1,
    Re = [],
    k = [],
    He = [],
    je = Date.now,
    o = function _bridge(e, t) {
      return t
    },
    r = "scrollLeft",
    n = "scrollTop",
    Fe = {
      s: r,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: F(function (e) {
        return arguments.length ? ke.scrollTo(e, Je.sc()) : ke.pageXOffset || Me[r] || Ce[r] || Ae[r] || 0
      })
    },
    Je = {
      s: n,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Fe,
      sc: F(function (e) {
        return arguments.length ? ke.scrollTo(Fe.sc(), e) : ke.pageYOffset || Me[n] || Ce[n] || Ae[n] || 0
      })
    };
  Fe.op = Je, k.cache = 0;
  var P = (Observer.prototype.init = function init(e) {
    _e || O(we) || console.warn("Please gsap.registerPlugin(Observer)"), Be || N();
    var i = e.tolerance,
      a = e.dragMinimum,
      t = e.type,
      n = e.target,
      r = e.lineHeight,
      o = e.debounce,
      s = e.preventDefault,
      l = e.onStop,
      c = e.onStopDelay,
      u = e.ignore,
      f = e.wheelSpeed,
      d = e.event,
      p = e.onDragStart,
      g = e.onDragEnd,
      h = e.onDrag,
      b = e.onPress,
      v = e.onRelease,
      m = e.onRight,
      y = e.onLeft,
      x = e.onUp,
      w = e.onDown,
      S = e.onChangeX,
      _ = e.onChangeY,
      T = e.onChange,
      k = e.onToggleX,
      P = e.onToggleY,
      C = e.onHover,
      D = e.onHoverEnd,
      X = e.onMove,
      Y = e.ignoreCheck,
      R = e.isNormalizer,
      H = e.onGestureStart,
      j = e.onGestureEnd,
      F = e.onWheel,
      W = e.onEnable,
      V = e.onDisable,
      G = e.onClick,
      U = e.scrollSpeed,
      q = e.capture,
      $ = e.allowClicks,
      Q = e.lockAxis,
      Z = e.onLockAxis;

    function Ke() {
      return ye = je()
    }

    function Le(e, t) {
      return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t)
    }

    function Ne() {
      var e = se.deltaX = M(ve),
        t = se.deltaY = M(me),
        r = Math.abs(e) >= i,
        n = Math.abs(t) >= i;
      T && (r || n) && T(se, e, t, ve, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), S && S(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, ve[0] = ve[1] = ve[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), _ && _(se), P && se.deltaY < 0 != ce < 0 && P(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (X && X(se), re && (h(se), re = !1), ne = !1), oe && !(oe = !1) && Z && Z(se), ie && (F(se), ie = !1), ee = 0
    }

    function Oe(e, t, r) {
      ve[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), o ? ee = ee || requestAnimationFrame(Ne) : Ne()
    }

    function Pe(e, t) {
      Q && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), "y" !== ae && (ve[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), o ? ee = ee || requestAnimationFrame(Ne) : Ne()
    }

    function Qe(e) {
      if (!Le(e, 1)) {
        var t = (e = L(e, s)).clientX,
          r = e.clientY,
          n = t - se.x,
          i = r - se.y,
          o = se.isDragging;
        se.x = t, se.y = r, (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), o || (se.isDragging = !0), Pe(n, i), o || p && p(se))
      }
    }

    function Se(t) {
      if (!Le(t, 1)) {
        B(R ? n : be, De[1], Qe, !0);
        var e = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
          r = L(t);
        e || (se._vx.reset(), se._vy.reset(), s && $ && we.delayedCall(.08, function () {
          if (300 < je() - ye && !t.defaultPrevented)
            if (t.target.click) t.target.click();
            else if (be.createEvent) {
            var e = be.createEvent("MouseEvents");
            e.initMouseEvent("click", !0, !0, ke, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
          }
        })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !R && te.restart(!0), g && e && g(se), v && v(se, e)
      }
    }

    function Te(e) {
      return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging)
    }

    function Ue() {
      return (se.isGesturing = !1) || j(se)
    }

    function Ve(e) {
      if (!Le(e)) {
        var t = ue(),
          r = fe();
        Oe((t - de) * U, (r - pe) * U, 1), de = t, pe = r, l && te.restart(!0)
      }
    }

    function We(e) {
      if (!Le(e)) {
        e = L(e, s), F && (ie = !0);
        var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? ke.innerHeight : 1) * f;
        Oe(e.deltaX * t, e.deltaY * t, 0), l && !R && te.restart(!0)
      }
    }

    function Xe(e) {
      if (!Le(e)) {
        var t = e.clientX,
          r = e.clientY,
          n = t - se.x,
          i = r - se.y;
        se.x = t, se.y = r, ne = !0, (n || i) && Pe(n, i)
      }
    }

    function Ye(e) {
      se.event = e, C(se)
    }

    function Ze(e) {
      se.event = e, D(se)
    }

    function $e(e) {
      return Le(e) || L(e, s) && G(se)
    }
    this.target = n = I(n) || Ce, this.vars = e, u = u && we.utils.toArray(u), i = i || 1e-9, a = a || 0, f = f || 1, U = U || 1, t = t || "wheel,touch,pointer", o = !1 !== o, r = r || parseFloat(ke.getComputedStyle(Ae).lineHeight) || 22;
    var ee, te, re, ne, ie, oe, ae, se = this,
      le = 0,
      ce = 0,
      ue = J(n, Fe),
      fe = J(n, Je),
      de = ue(),
      pe = fe(),
      ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0],
      he = z(n),
      be = n.ownerDocument || Me,
      ve = [0, 0, 0],
      me = [0, 0, 0],
      ye = 0,
      xe = se.onPress = function (e) {
        Le(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = L(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), A(R ? n : be, De[1], Qe, s, !0), se.deltaX = se.deltaY = 0, b && b(se))
      };
    te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
      se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
    }).pause(), se.deltaX = se.deltaY = 0, se._vx = K(0, 50, !0), se._vy = K(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function (e) {
      return se.isEnabled || (A(he ? be : n, "scroll", E), 0 <= t.indexOf("scroll") && A(he ? be : n, "scroll", Ve, s, q), 0 <= t.indexOf("wheel") && A(n, "wheel", We, s, q), (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (A(n, De[0], xe, s, q), A(be, De[2], Se), A(be, De[3], Se), $ && A(n, "click", Ke, !1, !0), G && A(n, "click", $e), H && A(be, "gesturestart", Te), j && A(be, "gestureend", Ue), C && A(n, Ie + "enter", Ye), D && A(n, Ie + "leave", Ze), X && A(n, Ie + "move", Xe)), se.isEnabled = !0, e && e.type && xe(e), W && W(se)), se
    }, se.disable = function () {
      se.isEnabled && (Re.filter(function (e) {
        return e !== se && z(e.target)
      }).length || B(he ? be : n, "scroll", E), se.isPressed && (se._vx.reset(), se._vy.reset(), B(R ? n : be, De[1], Qe, !0)), B(he ? be : n, "scroll", Ve, q), B(n, "wheel", We, q), B(n, De[0], xe, q), B(be, De[2], Se), B(be, De[3], Se), B(n, "click", Ke, !0), B(n, "click", $e), B(be, "gesturestart", Te), B(be, "gestureend", Ue), B(n, Ie + "enter", Ye), B(n, Ie + "leave", Ze), B(n, Ie + "move", Xe), se.isEnabled = se.isPressed = se.isDragging = !1, V && V(se))
    }, se.kill = function () {
      se.disable();
      var e = Re.indexOf(se);
      0 <= e && Re.splice(e, 1), ze === se && (ze = 0)
    }, Re.push(se), R && z(n) && (ze = se), se.enable(d)
  }, function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
  }(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity()
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity()
    }
  }]), Observer);

  function Observer(e) {
    this.init(e)
  }
  P.version = "3.11.1", P.create = function (e) {
    return new P(e)
  }, P.register = O, P.getAll = function () {
    return Re.slice()
  }, P.getById = function (t) {
    return Re.filter(function (e) {
      return e.vars.id === t
    })[0]
  }, q() && we.registerPlugin(P);

  function wa() {
    return st = 1
  }

  function xa() {
    return st = 0
  }

  function ya(e) {
    return e
  }

  function za(e) {
    return Math.round(1e5 * e) / 1e5 || 0
  }

  function Aa() {
    return "undefined" != typeof window
  }

  function Ba() {
    return Ge || Aa() && (Ge = window.gsap) && Ge.registerPlugin && Ge
  }

  function Ca(e) {
    return !!~s.indexOf(e)
  }

  function Da(e) {
    return y(e, "getBoundingClientRect") || (Ca(e) ? function () {
      return Xt.width = qe.innerWidth, Xt.height = qe.innerHeight, Xt
    } : function () {
      return Et(e)
    })
  }

  function Ga(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = "scroll" + n) && (o = y(e, r)) ? o() - Da(e)()[i] : Ca(e) ? (tt[r] || rt[r]) - (qe["inner" + n] || tt["client" + n] || rt["client" + n]) : e[r] - e["offset" + n]
  }

  function Ha(e, t) {
    for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2])
  }

  function Ia(e) {
    return "string" == typeof e
  }

  function Ja(e) {
    return "function" == typeof e
  }

  function Ka(e) {
    return "number" == typeof e
  }

  function La(e) {
    return "object" == typeof e
  }

  function Ma(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause()
  }

  function Na(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r)
    }
  }

  function cb(e) {
    return qe.getComputedStyle(e)
  }

  function eb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e
  }

  function gb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0
  }

  function hb(e) {
    var t, r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r
  }

  function jb(i) {
    var o = Ge.utils.snap(i),
      a = Array.isArray(i) && i.slice(0).sort(function (e, t) {
        return e - t
      });
    return a ? function (e, t, r) {
      var n;
      if (void 0 === r && (r = .001), !t) return o(e);
      if (0 < t) {
        for (e -= r, n = 0; n < a.length; n++)
          if (a[n] >= e) return a[n];
        return a[n - 1]
      }
      for (n = a.length, e += r; n--;)
        if (a[n] <= e) return a[n];
      return a[0]
    } : function (e, t, r) {
      void 0 === r && (r = .001);
      var n = o(e);
      return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
    }
  }

  function lb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n)
    })
  }

  function mb(e, t, r, n, i) {
    return e.addEventListener(t, r, {
      passive: !n,
      capture: !!i
    })
  }

  function nb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n)
  }

  function ob(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r)
  }

  function sb(e, t) {
    if (Ia(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in D ? D[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
  }

  function tb(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = et.createElement("div"),
      g = Ca(r) || "fixed" === y(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      b = g ? rt : r,
      v = -1 !== e.indexOf("start"),
      m = v ? l : c,
      x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === Je ? S : _) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || 0 === t ? e + "-" + t : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, v), p
  }

  function yb() {
    return 34 < bt() - vt && U()
  }

  function zb() {
    h && h.isPressed && !(h.startX > rt.clientWidth) || (k.cache++, x = x || requestAnimationFrame(U), vt || H("scrollStart"), vt = bt())
  }

  function Ab() {
    m = qe.innerWidth, v = qe.innerHeight
  }

  function Bb() {
    k.cache++, at || g || et.fullscreenElement || et.webkitFullscreenElement || b && m === qe.innerWidth && !(Math.abs(qe.innerHeight - v) > .25 * qe.innerHeight) || l.restart(!0)
  }

  function Eb() {
    return nb(te, "scrollEnd", Eb) || V(!0)
  }

  function Hb(e) {
    for (var t = 0; t < j.length; t += 5)(!e || j[t + 4] && j[t + 4].query === e) && (j[t].style.cssText = j[t + 1], j[t].getBBox && j[t].setAttribute("transform", j[t + 2] || ""), j[t + 3].uncache = 1)
  }

  function Ib(e, t) {
    var r;
    for (lt = 0; lt < Bt.length; lt++) !(r = Bt[lt]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
    t && Hb(t), t || H("revert")
  }

  function Jb() {
    return k.cache++ && k.forEach(function (e) {
      return "function" == typeof e && (e.rec = 0)
    })
  }

  function Ub(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[_] = s[S] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[xt] = gb(e, Fe) + At, a[wt] = gb(e, Je) + At, a[Pt] = s[Mt] = s.top = s.left = "0", Lt(n), s[xt] = s.maxWidth = r[xt], s[wt] = s.maxHeight = r[wt], s[Pt] = r[Pt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
    }
  }

  function Xb(e) {
    for (var t = Q.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Q[i], r[Q[i]]);
    return n.t = e, n
  }

  function $b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
    Ja(e) && (e = e(s)), Ia(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? sb("0" + e.substr(3), r) : 0));
    var p, g, h, b = d ? d.time() : 0;
    if (d && d.seek(0), Ka(e)) a && X(a, r, n, !0);
    else {
      Ja(t) && (t = t(s));
      var v, m, y, x, w = (e || "0").split(" ");
      h = I(t) || rt, (v = Et(h) || {}) && (v.left || v.top) || "none" !== cb(h).display || (x = h.style.display, h.style.display = "block", v = Et(h), x ? h.style.display = x : h.style.removeProperty("display")), m = sb(w[0], v[n.d]), y = sb(w[1] || "0", r), e = v[n.p] - l[n.p] - c + m + i - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
    }
    if (o) {
      var S = e + r,
        _ = o._isStart;
      p = "scroll" + n.d2, X(o, S, n, _ && 20 < S || !_ && (u ? Math.max(rt[p], tt[p]) : o.parentNode[p]) <= S + 1), u && (l = Et(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + At))
    }
    return d && h && (p = Et(h), d.seek(f), g = Et(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e)
  }

  function ac(e, t, r, n) {
    if (e.parentNode !== t) {
      var i, o, a = e.style;
      if (t === rt) {
        for (i in e._stOrig = a.cssText, o = cb(e)) + i || ee.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
        a.top = r, a.left = n
      } else a.cssText = e._stOrig;
      Ge.core.getCache(e).uncache = 1, t.appendChild(e)
    }
  }

  function bc(l, e) {
    function Cj(e, t, r, n, i) {
      var o = Cj.tween,
        a = t.onComplete,
        s = {};
      return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function (e) {
        return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (o.kill(), Cj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = Math.round(e)
      }, t.onComplete = function () {
        Cj.tween = 0, a && a.call(o)
      }, o = Cj.tween = Ge.to(l, t)
    }
    var c, u, f = J(l, e),
      d = "_scroll" + e.p2;
    return (l[d] = f).wheelHandler = function () {
      return Cj.tween && Cj.tween.kill() && (Cj.tween = 0)
    }, mb(l, "wheel", f.wheelHandler), Cj
  }
  var Ge, a, qe, et, tt, rt, s, l, nt, it, ot, c, at, st, u, lt, f, d, p, ct, ut, g, h, b, v, m, C, ft, dt, x, pt, gt, ht = 1,
    bt = Date.now,
    w = bt(),
    vt = 0,
    mt = 0,
    yt = Math.abs,
    S = "right",
    _ = "bottom",
    xt = "width",
    wt = "height",
    St = "Right",
    _t = "Left",
    Tt = "Top",
    kt = "Bottom",
    Pt = "padding",
    Mt = "margin",
    Ct = "Width",
    T = "Height",
    At = "px",
    Et = function _getBounds(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== cb(e)[u] && Ge.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n
    },
    Ot = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    It = {
      toggleActions: "play",
      anticipatePin: 0
    },
    D = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    X = function _positionMarker(e, t, r, n) {
      var i = {
          display: "block"
        },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Ct] = 1, i["border" + a + Ct] = 0, i[r.p] = t + "px", Ge.set(e, i)
    },
    Bt = [],
    zt = {},
    Y = {},
    R = [],
    H = function _dispatch(e) {
      return Y[e] && Y[e].map(function (e) {
        return e()
      }) || R
    },
    j = [],
    W = 0,
    V = function _refreshAll(e, t) {
      if (!vt || e) {
        pt = !0;
        var r = H("refreshInit");
        ct && te.sort(), t || Ib(), Bt.slice(0).forEach(function (e) {
          return e.refresh()
        }), Bt.forEach(function (e) {
          return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ga(e.scroller, e._dir)))
        }), r.forEach(function (e) {
          return e && e.render && e.render(-1)
        }), k.forEach(function (e) {
          return "function" == typeof e && e(e.rec)
        }), Jb(), l.pause(), W++, pt = !1, H("refresh")
      } else mb(te, "scrollEnd", Eb)
    },
    G = 0,
    Dt = 1,
    U = function _updateAll() {
      if (!pt) {
        te.isUpdating = !0, gt && gt.update(0);
        var e = Bt.length,
          t = bt(),
          r = 50 <= t - w,
          n = e && Bt[0].scroll();
        if (Dt = n < G ? -1 : 1, G = n, r && (vt && !st && 200 < t - vt && (vt = 0, H("scrollEnd")), ot = w, w = t), Dt < 0) {
          for (lt = e; 0 < lt--;) Bt[lt] && Bt[lt].update(0, r);
          Dt = 1
        } else
          for (lt = 0; lt < e; lt++) Bt[lt] && Bt[lt].update(0, r);
        te.isUpdating = !1
      }
      x = 0
    },
    $ = ["left", "top", _, S, Mt + kt, Mt + St, Mt + Tt, Mt + _t, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Q = $.concat([xt, wt, "boxSizing", "max" + Ct, "max" + T, "position", Mt, Pt, Pt + Tt, Pt + St, Pt + kt, Pt + _t]),
    Z = /([A-Z])/g,
    Lt = function _setState(e) {
      if (e) {
        var t, r, n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Ge.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase())
      }
    },
    Xt = {
      left: 0,
      top: 0
    },
    ee = /(webkit|moz|length|cssText|inset)/i,
    te = (ScrollTrigger.prototype.init = function init(_, T) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), mt) {
        var k, n, p, P, M, C, A, E, O, B, z, e, D, L, X, Y, R, t, N, v, H, j, m, F, x, w, r, S, W, V, i, g, G, K, U, q, $, o, Q = (_ = eb(Ia(_) || Ka(_) || _.nodeType ? {
            trigger: _
          } : _, It)).onUpdate,
          Z = _.toggleClass,
          a = _.id,
          ee = _.onToggle,
          te = _.onRefresh,
          re = _.scrub,
          ne = _.trigger,
          ie = _.pin,
          oe = _.pinSpacing,
          ae = _.invalidateOnRefresh,
          se = _.anticipatePin,
          s = _.onScrubComplete,
          h = _.onSnapComplete,
          le = _.once,
          ce = _.snap,
          ue = _.pinReparent,
          l = _.pinSpacer,
          fe = _.containerAnimation,
          de = _.fastScrollEnd,
          pe = _.preventOverlaps,
          ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Fe : Je,
          he = !re && 0 !== re,
          be = I(_.scroller || qe),
          c = Ge.core.getCache(be),
          ve = Ca(be),
          me = "fixed" === ("pinType" in _ ? _.pinType : y(be, "pinType") || ve && "fixed"),
          ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
          xe = he && _.toggleActions.split(" "),
          u = "markers" in _ ? _.markers : It.markers,
          we = ve ? 0 : parseFloat(cb(be)["border" + ge.p2 + Ct]) || 0,
          Se = this,
          _e = _.onRefreshInit && function () {
            return _.onRefreshInit(Se)
          },
          Te = function _getSizeFunc(e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = y(e, "getBoundingClientRect")) ? function () {
              return o()[n]
            } : function () {
              return (t ? qe["inner" + i] : e["client" + i]) || 0
            }
          }(be, ve, ge),
          ke = function _getOffsetsFunc(e, t) {
            return !t || ~He.indexOf(e) ? Da(e) : function () {
              return Xt
            }
          }(be, ve),
          Pe = 0,
          Me = 0,
          Ce = J(be, ge);
        if (ft(Se), Se._dir = ge, se *= 45, Se.scroller = be, Se.scroll = fe ? fe.time.bind(fe) : Ce, P = Ce(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (ct = 1, -9999 === _.refreshPriority && (gt = Se)), c.tweenScroll = c.tweenScroll || {
            top: bc(be, Je),
            left: bc(be, Fe)
          }, Se.tweenTo = k = c.tweenScroll[ge.p], Se.scrubDuration = function (e) {
            (i = Ka(e) && e) ? V ? V.duration(e) : V = Ge.to(T, {
              ease: "expo",
              totalProgress: "+=0.001",
              duration: i,
              paused: !0,
              onComplete: function onComplete() {
                return s && s(Se)
              }
            }): (V && V.progress(1).kill(), V = 0)
          }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), S = 0, a = a || T.vars.id), Bt.push(Se), ce && (La(ce) && !ce.push || (ce = {
            snapTo: ce
          }), "scrollBehavior" in rt.style && Ge.set(ve ? [rt, tt] : be, {
            scrollBehavior: "auto"
          }), p = Ja(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
            return function (e) {
              return Ge.utils.snap(hb(t), e)
            }
          }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
            return function (e, t) {
              return jb(hb(r))(e, t.direction)
            }
          }(T) : !1 !== ce.directional ? function (e, t) {
            return jb(ce.snapTo)(e, bt() - Me < 500 ? 0 : t.direction)
          } : Ge.utils.snap(ce.snapTo), g = ce.duration || {
            min: .1,
            max: 2
          }, g = La(g) ? it(g.min, g.max) : it(g, g), G = Ge.delayedCall(ce.delay || i / 2 || .1, function () {
            var e = Ce(),
              t = bt() - Me < 500,
              r = k.tween;
            if (!(t || Math.abs(Se.getVelocity()) < 10) || r || st || Pe === e) Se.isActive && Pe !== e && G.restart(!0);
            else {
              var n = (e - C) / D,
                i = T && !he ? T.totalProgress() : n,
                o = t ? 0 : (i - W) / (bt() - ot) * 1e3 || 0,
                a = Ge.utils.clamp(-n, 1 - n, yt(o / 2) * o / .185),
                s = n + (!1 === ce.inertia ? 0 : a),
                l = it(0, 1, p(s, Se)),
                c = Math.round(C + l * D),
                u = ce.onStart,
                f = ce.onInterrupt,
                d = ce.onComplete;
              if (e <= A && C <= e && c !== e) {
                if (r && !r._initted && r.data <= yt(c - e)) return;
                !1 === ce.inertia && (a = l - n), k(c, {
                  duration: g(yt(.185 * Math.max(yt(s - i), yt(l - i)) / o / .05 || 0)),
                  ease: ce.ease || "power3",
                  data: yt(c - e),
                  onInterrupt: function onInterrupt() {
                    return G.restart(!0) && f && f(Se)
                  },
                  onComplete: function onComplete() {
                    Se.update(), Pe = Ce(), S = W = T && !he ? T.totalProgress() : Se.progress, h && h(Se), d && d(Se)
                  }
                }, e, a * D, c - e - a * D), u && u(Se, k.tween)
              }
            }
          }).pause()), a && (zt[a] = Se), o = (o = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : I(ie), Ia(Z) && (Z = {
            targets: ne,
            className: Z
          }), ie && (!1 === oe || oe === Mt || (oe = !(!oe && "flex" === cb(ie.parentNode).display) && Pt), Se.pin = ie, !1 !== _.force3D && Ge.set(ie, {
            force3D: !0
          }), (n = Ge.core.getCache(ie)).spacer ? L = n.pinState : (l && ((l = I(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = Xb(l))), n.spacer = R = l || et.createElement("div"), R.classList.add("pin-spacer"), a && R.classList.add("pin-spacer-" + a), n.pinState = L = Xb(ie)), Se.spacer = R = n.spacer, r = cb(ie), m = r[oe + ge.os2], N = Ge.getProperty(ie), v = Ge.quickSetter(ie, ge.a, At), Ub(ie, R, r), Y = Xb(ie)), u) {
          e = La(u) ? eb(u, Ot) : Ot, B = tb("scroller-start", a, be, ge, e, 0), z = tb("scroller-end", a, be, ge, e, 0, B), t = B["offset" + ge.op.d2];
          var f = I(y(be, "content") || be);
          E = this.markerStart = tb("start", a, f, ge, e, t, 0, fe), O = this.markerEnd = tb("end", a, f, ge, e, t, 0, fe), fe && ($ = Ge.quickSetter([E, O], ge.a, At)), me || He.length && !0 === y(be, "fixedMarkers") || (function _makePositionable(e) {
            var t = cb(e).position;
            e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
          }(ve ? rt : be), Ge.set([B, z], {
            force3D: !0
          }), x = Ge.quickSetter(B, ge.a, At), w = Ge.quickSetter(z, ge.a, At))
        }
        if (fe) {
          var d = fe.vars.onUpdate,
            b = fe.vars.onUpdateParams;
          fe.eventCallback("onUpdate", function () {
            Se.update(0, 0, 1), d && d.apply(b || [])
          })
        }
        Se.previous = function () {
          return Bt[Bt.indexOf(Se) - 1]
        }, Se.next = function () {
          return Bt[Bt.indexOf(Se) + 1]
        }, Se.revert = function (e, t) {
          if (!t) return Se.kill(!0);
          var r = !1 !== e || !Se.enabled,
            n = at;
          r !== Se.isReverted && (r && (Se.scroll.rec || !at && !pt || (Se.scroll.rec = Ce(), pt && Ce(0)), U = Math.max(Ce(), Se.scroll.rec || 0), K = Se.progress, q = T && T.progress()), E && [E, O, B, z].forEach(function (e) {
            return e.style.display = r ? "none" : "block"
          }), r && (at = 1), Se.update(r), at = n, ie && (r ? function _swapPinOut(e, t, r) {
            Lt(r);
            var n = e._gsap;
            if (n.spacerIsNative) Lt(n.spacerState);
            else if (e._gsap.swappedIn) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t))
            }
            e._gsap.swappedIn = !1
          }(ie, R, L) : ue && Se.isActive || Ub(ie, R, cb(ie), F)), Se.isReverted = r)
        }, Se.refresh = function (e, t) {
          if (!at && Se.enabled || t)
            if (ie && e && vt) mb(ScrollTrigger, "scrollEnd", Eb);
            else {
              !pt && _e && _e(Se), at = 1, Me = bt(), k.tween && (k.tween.kill(), k.tween = 0), V && V.pause(), ae && T && T.revert().invalidate(), Se.isReverted || Se.revert(!0, !0);
              for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Ga(be, ge), h = 0, b = 0, v = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Bt.indexOf(Se)) || 0, S = w; S--;)(s = Bt[S]).end || s.refresh(0, 1) || (at = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== Bt[S] && (w--, S--);
              for (Ja(y) && (y = y(Se)), C = $b(y, ne, d, ge, Ce(), E, B, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Ja(v) && (v = v(Se)), Ia(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ia(y) ? y.split(" ")[0] : "") + v : (h = sb(v.substr(2), d), v = Ia(y) ? y : C + h, m = ne)), A = Math.max(C, $b(v || (m ? "100% 0" : g), m, d, ge, Ce() + h, O, z, Se, p, we, me, g, fe)) || -.001, D = A - C || (C -= .01) && .001, h = 0, S = w; S--;)(l = (s = Bt[S]).pin) && s.start - s._pinPush < C && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ka(y) || (h += r * (1 - s.progress)), l === ie && (b += r));
              if (C += h, A += h, Se._pinPush = b, E && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Ce()), Ge.set([E, O], r)), ie) r = cb(ie), o = ge === Je, i = Ce(), H = parseFloat(N(ge.a)) + b, !g && 1 < A && ((ve ? rt : be).style["overflow-" + ge.a] = "scroll"), Ub(ie, R, r), Y = Xb(ie), n = Et(ie, !0), c = me && J(be, o ? Fe : Je)(), oe && ((F = [oe + ge.os2, D + b + At]).t = R, (S = oe === Pt ? gb(ie, ge) + D + b : 0) && F.push(ge.d, S + At), Lt(F), me && Ce(U)), me && ((a = {
                top: n.top + (o ? i - C : c) + At,
                left: n.left + (o ? c : i - C) + At,
                boxSizing: "border-box",
                position: "fixed"
              })[xt] = a.maxWidth = Math.ceil(n.width) + At, a[wt] = a.maxHeight = Math.ceil(n.height) + At, a[Mt] = a[Mt + Tt] = a[Mt + St] = a[Mt + kt] = a[Mt + _t] = "0", a[Pt] = r[Pt], a[Pt + Tt] = r[Pt + Tt], a[Pt + St] = r[Pt + St], a[Pt + kt] = r[Pt + kt], a[Pt + _t] = r[Pt + _t], X = function _copyState(e, t, r) {
                for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                return i.t = e.t, i
              }(L, a, ue), pt && Ce(0)), T ? (u = T._initted, ut(1), T.render(T.duration(), !0, !0), j = N(ge.a) - H + D + b, D !== j && me && X.splice(X.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), ut(0)) : j = D;
              else if (ne && Ce() && !fe)
                for (n = ne.parentNode; n && n !== rt;) n._pinOffset && (C -= n._pinOffset, A -= n._pinOffset), n = n.parentNode;
              f && f.forEach(function (e) {
                return e.revert(!1, !0)
              }), Se.start = C, Se.end = A, P = M = Ce(), fe || pt || (P < U && Ce(U), Se.scroll.rec = 0), Se.revert(!1, !0), G && (Pe = -1, Se.isActive && Ce(C + D * K), G.restart(!0)), at = 0, T && he && (T._initted || q) && T.progress() !== q && T.progress(q, !0).render(T.time(), !0, !0), K === Se.progress && !fe || (T && !he && T.totalProgress(K, !0), Se.progress = (P - C) / D === K ? 0 : K, Se.update(0, 0, 1)), ie && oe && (R._pinOffset = Math.round(Se.progress * j)), te && te(Se)
            }
        }, Se.getVelocity = function () {
          return (Ce() - M) / (bt() - ot) * 1e3 || 0
        }, Se.endAnimation = function () {
          Ma(Se.callbackAnimation), T && (V ? V.progress(1) : T.paused() ? he || Ma(T, Se.direction < 0, 1) : Ma(T, T.reversed()))
        }, Se.labelToScroll = function (e) {
          return T && T.labels && (C || Se.refresh() || C) + T.labels[e] / T.duration() * D || 0
        }, Se.getTrailing = function (t) {
          var e = Bt.indexOf(Se),
            r = 0 < Se.direction ? Bt.slice(0, e).reverse() : Bt.slice(e + 1);
          return (Ia(t) ? r.filter(function (e) {
            return e.vars.preventOverlaps === t
          }) : r).filter(function (e) {
            return 0 < Se.direction ? e.end <= C : e.start >= A
          })
        }, Se.update = function (e, t, r) {
          if (!fe || r || e) {
            var n, i, o, a, s, l, c, u = Se.scroll(),
              f = e ? 0 : (u - C) / D,
              d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
              p = Se.progress;
            if (t && (M = P, P = fe ? Ce() : u, ce && (W = S, S = T && !he ? T.totalProgress() : d)), se && !d && ie && !at && !ht && vt && C < u + (u - M) / (bt() - ot) * se && (d = 1e-4), d !== p && Se.enabled) {
              if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !at && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Ja(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function (e) {
                  return e.endAnimation()
                })), he || (!V || at || ht ? T && T.totalProgress(d, !!at) : ((fe || gt && gt !== Se) && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", d, T._tTime / T._tDur) : (V.vars.totalProgress = d, V.invalidate().restart()))), ie)
                if (e && oe && (R.style[oe + ge.os2] = m), me) {
                  if (a) {
                    if (l = !e && p < d && u < A + 1 && u + 1 >= Ga(be, ge), ue)
                      if (e || !n && !l) ac(ie, R);
                      else {
                        var g = Et(ie, !0),
                          h = u - C;
                        ac(ie, rt, g.top + (ge === Je ? h : 0) + At, g.left + (ge === Je ? 0 : h) + At)
                      } Lt(n || l ? X : Y), j !== D && d < 1 && n || v(H + (1 !== d || l ? 0 : j))
                  }
                } else v(za(H + j * d));
              !ce || k.tween || at || ht || G.restart(!0), Z && (s || le && d && (d < 1 || !dt)) && nt(Z.targets).forEach(function (e) {
                return e.classList[n || le ? "add" : "remove"](Z.className)
              }), !Q || he || e || Q(Se), a && !at ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), Q && Q(Se)), !s && dt || (ee && s && Na(Se, ee), ye[i] && Na(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && Na(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ka(de) ? de : 2500) && (Ma(Se.callbackAnimation), V ? V.progress(1) : Ma(T, "reverse" === o ? 1 : !d, 1))) : he && Q && !at && Q(Se)
            }
            if (w) {
              var b = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
              x(b + (B._isFlipped ? 1 : 0)), w(b)
            }
            $ && $(-u / fe.duration() * (fe._caScrollDist || 0))
          }
        }, Se.enable = function (e, t) {
          Se.enabled || (Se.enabled = !0, mb(be, "resize", Bb), mb(ve ? et : be, "scroll", zb), _e && mb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = K = 0, P = M = Pe = Ce()), !1 !== t && Se.refresh())
        }, Se.getTween = function (e) {
          return e && k ? k.tween : V
        }, Se.setPositions = function (e, t) {
          ie && (H += e - C, j += t - e - D), Se.start = C = e, Se.end = A = t, D = t - e, Se.update()
        }, Se.disable = function (e, t) {
          if (Se.enabled && (!1 !== e && Se.revert(!0, !0), Se.enabled = Se.isActive = !1, t || V && V.pause(), U = 0, n && (n.uncache = 1), _e && nb(ScrollTrigger, "refreshInit", _e), G && (G.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !ve)) {
            for (var r = Bt.length; r--;)
              if (Bt[r].scroller === be && Bt[r] !== Se) return;
            nb(be, "resize", Bb), nb(be, "scroll", zb)
          }
        }, Se.kill = function (e, t) {
          Se.disable(e, t), V && !t && V.kill(), a && delete zt[a];
          var r = Bt.indexOf(Se);
          0 <= r && Bt.splice(r, 1), r === lt && 0 < Dt && lt--, r = 0, Bt.forEach(function (e) {
            return e.scroller === Se.scroller && (r = 1)
          }), r || pt || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), E && [E, O, B, z].forEach(function (e) {
            return e.parentNode && e.parentNode.removeChild(e)
          }), gt === Se && (gt = 0), ie && (n && (n.uncache = 1), r = 0, Bt.forEach(function (e) {
            return e.pin === ie && r++
          }), r || (n.spacer = 0)), _.onKill && _.onKill(Se)
        }, Se.enable(!1, !1), o && o(Se), T && T.add && !D ? Ge.delayedCall(.01, function () {
          return C || A || Se.refresh()
        }) && (D = .01) && (C = A = 0) : Se.refresh()
      } else this.update = this.refresh = this.kill = ya
    }, ScrollTrigger.register = function register(e) {
      return a || (Ge = e || Ba(), Aa() && window.document && ScrollTrigger.enable(), a = mt), a
    }, ScrollTrigger.defaults = function defaults(e) {
      if (e)
        for (var t in e) It[t] = e[t];
      return It
    }, ScrollTrigger.disable = function disable(t, r) {
      mt = 0, Bt.forEach(function (e) {
        return e[r ? "kill" : "disable"](t)
      }), nb(qe, "wheel", zb), nb(et, "scroll", zb), clearInterval(c), nb(et, "touchcancel", ya), nb(rt, "touchstart", ya), lb(nb, et, "pointerdown,touchstart,mousedown", wa), lb(nb, et, "pointerup,touchend,mouseup", xa), l.kill(), Ha(nb);
      for (var e = 0; e < k.length; e += 3) ob(nb, k[e], k[e + 1]), ob(nb, k[e], k[e + 2])
    }, ScrollTrigger.enable = function enable() {
      if (qe = window, et = document, tt = et.documentElement, rt = et.body, Ge && (nt = Ge.utils.toArray, it = Ge.utils.clamp, ft = Ge.core.context || ya, ut = Ge.core.suppressOverwrites || ya, Ge.core.globals("ScrollTrigger", ScrollTrigger), rt)) {
        mt = 1, P.register(Ge), ScrollTrigger.isTouch = P.isTouch, C = P.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), mb(qe, "wheel", zb), s = [qe, et, tt, rt], Ge.matchMedia ? (ScrollTrigger.matchMedia = function (e) {
          var t, r = Ge.matchMedia();
          for (t in e) r.add(t, e[t]);
          return r
        }, Ge.addEventListener("matchMediaInit", function () {
          return Ib()
        }), Ge.addEventListener("matchMediaRevert", function () {
          return Hb()
        }), Ge.addEventListener("matchMedia", function () {
          V(0, 1), H("matchMedia")
        }), Ge.matchMedia("(orientation: portrait)", function () {
          return Ab(), Ab
        })) : console.warn("Requires GSAP 3.11.0 or later"), mb(et, "scroll", zb);
        var e, t, r = rt.style,
          n = r.borderTopStyle,
          i = Ge.core.Animation.prototype;
        for (i.revert || Object.defineProperty(i, "revert", {
            value: function value() {
              return this.time(-.01, !0)
            }
          }), r.borderTopStyle = "solid", e = Et(rt), Je.m = Math.round(e.top + Je.sc()) || 0, Fe.m = Math.round(e.left + Fe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), c = setInterval(yb, 250), Ge.delayedCall(.5, function () {
            return ht = 0
          }), mb(et, "touchcancel", ya), mb(rt, "touchstart", ya), lb(mb, et, "pointerdown,touchstart,mousedown", wa), lb(mb, et, "pointerup,touchend,mouseup", xa), u = Ge.utils.checkPrefix("transform"), Q.push(u), a = bt(), l = Ge.delayedCall(.2, V).pause(), p = [et, "visibilitychange", function () {
            var e = qe.innerWidth,
              t = qe.innerHeight;
            et.hidden ? (f = e, d = t) : f === e && d === t || Bb()
          }, et, "DOMContentLoaded", V, qe, "load", V, qe, "resize", Bb], Ha(mb), Bt.forEach(function (e) {
            return e.enable(0, 1)
          }), t = 0; t < k.length; t += 3) ob(nb, k[t], k[t + 1]), ob(nb, k[t], k[t + 2])
      }
    }, ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (dt = !!e.limitCallbacks);
      var t = e.syncInterval;
      t && clearInterval(c) || (c = t) && setInterval(yb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ha(nb) || Ha(mb, e.autoRefreshEvents || "none"), g = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = I(e),
        n = k.indexOf(r),
        i = Ca(r);
      ~n && k.splice(n, i ? 6 : 2), t && (i ? He.unshift(qe, t, rt, t, tt, t) : He.unshift(r, t))
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
      Bt.forEach(function (e) {
        return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
      })
    }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
      var n = (Ia(e) ? I(e) : e).getBoundingClientRect(),
        i = n[r ? xt : wt] * t || 0;
      return r ? 0 < n.right - i && n.left + i < qe.innerWidth : 0 < n.bottom - i && n.top + i < qe.innerHeight
    }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
      Ia(e) && (e = I(e));
      var n = e.getBoundingClientRect(),
        i = n[r ? xt : wt],
        o = null == t ? i / 2 : t in D ? D[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
      return r ? (n.left + o) / qe.innerWidth : (n.top + o) / qe.innerHeight
    }, ScrollTrigger.killAll = function killAll(e) {
      if (Bt.forEach(function (e) {
          return "ScrollSmoother" !== e.vars.id && e.kill()
        }), !0 !== e) {
        var t = Y.killAll || [];
        Y = {}, t.forEach(function (e) {
          return e()
        })
      }
    }, ScrollTrigger);

  function ScrollTrigger(e, t) {
    a || ScrollTrigger.register(Ge) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
  }
  te.version = "3.11.1", te.saveStyles = function (e) {
    return e ? nt(e).forEach(function (e) {
      if (e && e.style) {
        var t = j.indexOf(e);
        0 <= t && j.splice(t, 5), j.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ge.core.getCache(e), ft())
      }
    }) : j
  }, te.revert = function (e, t) {
    return Ib(!e, t)
  }, te.create = function (e, t) {
    return new te(e, t)
  }, te.refresh = function (e) {
    return e ? Bb() : (a || te.register()) && V(!0)
  }, te.update = U, te.clearScrollMemory = Jb, te.maxScroll = function (e, t) {
    return Ga(e, t ? Fe : Je)
  }, te.getScrollFunc = function (e, t) {
    return J(I(e), t ? Fe : Je)
  }, te.getById = function (e) {
    return zt[e]
  }, te.getAll = function () {
    return Bt.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id
    })
  }, te.isScrolling = function () {
    return !!vt
  }, te.snapDirectional = jb, te.addEventListener = function (e, t) {
    var r = Y[e] || (Y[e] = []);
    ~r.indexOf(t) || r.push(t)
  }, te.removeEventListener = function (e, t) {
    var r = Y[e],
      n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1)
  }, te.batch = function (e, t) {
    function jo(e, t) {
      var r = [],
        n = [],
        i = Ge.delayedCall(o, function () {
          t(r, n), r = [], n = []
        }).pause();
      return function (e) {
        r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
      }
    }
    var r, n = [],
      i = {},
      o = t.interval || .016,
      a = t.batchMax || 1e9;
    for (r in t) i[r] = "on" === r.substr(0, 2) && Ja(t[r]) && "onRefreshInit" !== r ? jo(0, t[r]) : t[r];
    return Ja(a) && (a = a(), mb(te, "refresh", function () {
      return a = t.batchMax()
    })), nt(e).forEach(function (e) {
      var t = {};
      for (r in i) t[r] = i[r];
      t.trigger = e, n.push(te.create(t))
    }), n
  };

  function dc(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
  }

  function ec(e, t) {
    !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (P.isTouch ? " pinch-zoom" : "") : "none", e === tt && ec(rt, t)
  }

  function gc(e) {
    var t, r = e.event,
      n = e.target,
      i = e.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = o._gsap || Ge.core.getCache(o),
      s = bt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
      a._isScroll = o && !Ca(o) && o !== n && (ne[(t = cb(o)).overflowY] || ne[t.overflowX]), a._isScrollT = s
    }!a._isScroll && "x" !== i || (r.stopPropagation(), r._gsapAllow = !0)
  }

  function hc(e, t, r, n) {
    return P.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: n = n && gc,
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && mb(et, P.eventTypes[0], oe, !1, !0)
      },
      onDisable: function onDisable() {
        return nb(et, P.eventTypes[0], oe, !0)
      }
    })
  }

  function lc(e) {
    function fp() {
      return i = !1
    }

    function ip() {
      o = Ga(d, Je), T = it(C ? 1 : 0, o), f && (_ = it(0, Ga(d, Fe))), l = W
    }

    function jp() {
      h._gsap.y = za(parseFloat(h._gsap.y) + b.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
    }

    function pp() {
      ip(), a.isActive() && a.vars.scrollY > o && (b() > o ? a.progress(1) && b(o) : a.resetTo("scrollY", o))
    }
    La(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var n, o, l, i, a, c, u, s, f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = I(e.target) || tt,
      p = Ge.core.globals().ScrollSmoother,
      g = p && p.get(),
      h = C && (e.content && I(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
      b = J(d, Je),
      v = J(d, Fe),
      m = 1,
      y = (P.isTouch && qe.visualViewport ? qe.visualViewport.scale * qe.visualViewport.width : qe.outerWidth) / qe.innerWidth,
      x = 0,
      w = Ja(t) ? function () {
        return t(n)
      } : function () {
        return t || 2.8
      },
      S = hc(d, e.type, !0, r),
      _ = ya,
      T = ya;
    return h && Ge.set(h, {
      y: "+=0"
    }), e.ignoreCheck = function (e) {
      return C && "touchmove" === e.type && function ignoreDrag() {
        if (i) {
          requestAnimationFrame(fp);
          var e = za(n.deltaY / 2),
            t = T(b.v - e);
          if (h && t !== b.v + b.offset) {
            b.offset = t - b.v;
            var r = za((parseFloat(h && h._gsap.y) || 0) - b.offset);
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", h._gsap.y = r + "px", b.cacheID = k.cache, U()
          }
          return !0
        }
        b.offset && jp(), i = !0
      }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
    }, e.onPress = function () {
      var e = m;
      m = za((qe.visualViewport && qe.visualViewport.scale || 1) / y), a.pause(), e !== m && ec(d, 1.01 < m || !f && "x"), c = v(), u = b(), ip(), l = W
    }, e.onRelease = e.onGestureStart = function (e, t) {
      if (b.offset && jp(), t) {
        k.cache++;
        var r, n, i = w();
        f && (n = (r = v()) + .05 * i * -e.velocityX / .227, i *= dc(v, r, n, Ga(d, Fe)), a.vars.scrollX = _(n)), n = (r = b()) + .05 * i * -e.velocityY / .227, i *= dc(b, r, n, Ga(d, Je)), a.vars.scrollY = T(n), a.invalidate().duration(i).play(.01), (C && a.vars.scrollY >= o || o - 1 <= r) && Ge.to({}, {
          onUpdate: pp,
          duration: i
        })
      } else s.restart(!0)
    }, e.onWheel = function () {
      a._ts && a.pause(), 1e3 < bt() - x && (l = 0, x = bt())
    }, e.onChange = function (e, t, r, n, i) {
      if (W !== l && ip(), t && f && v(_(n[2] === t ? c + (e.startX - e.x) : v() + t - n[1])), r) {
        b.offset && jp();
        var o = i[2] === r,
          a = o ? u + e.startY - e.y : b() + r - i[1],
          s = T(a);
        o && a !== s && (u += s - a), b(s)
      }(r || t) && U()
    }, e.onEnable = function () {
      ec(d, !f && "x"), mb(qe, "resize", pp), S.enable()
    }, e.onDisable = function () {
      ec(d, !0), nb(qe, "resize", pp), S.kill()
    }, e.lockAxis = !1 !== e.lockAxis, ((n = new P(e)).iOS = C) && !b() && b(1), C && Ge.ticker.add(ya), s = n._dc, a = Ge.to(n, {
      ease: "power4",
      paused: !0,
      scrollX: f ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: s.vars.onComplete
    }), n
  }
  var re, ne = {
      auto: 1,
      scroll: 1
    },
    ie = /(input|label|select|textarea)/i,
    oe = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || re) && (e._gsapAllow = !0, re = t)
    };
  te.sort = function (e) {
    return Bt.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
    })
  }, te.observe = function (e) {
    return new P(e)
  }, te.normalizeScroll = function (e) {
    if (void 0 === e) return h;
    if (!0 === e && h) return h.enable();
    if (!1 === e) return h && h.kill();
    var t = e instanceof P ? e : lc(e);
    return h && h.target === t.target && h.kill(), Ca(t.target) && (h = t), t
  }, te.core = {
    _getVelocityProp: K,
    _inputObserver: hc,
    _scrollers: k,
    _proxies: He,
    bridge: {
      ss: function ss() {
        vt || H("scrollStart"), vt = bt()
      },
      ref: function ref() {
        return at
      }
    }
  }, Ba() && Ge.registerPlugin(te), e.ScrollTrigger = te, e.default = te;
  if (typeof (window) === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  } else {
    delete e.default
  }
});

/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat ? function (e) {
      return t.flat.call(e)
    } : function (e) {
      return t.concat.apply([], e)
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    },
    x = function (e) {
      return null != e && e === e.window
    },
    E = C.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

  function b(e, t, n) {
    var r, i, o = (n = n || E).createElement("script");
    if (o.text = e, t)
      for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }
  var f = "3.6.1",
    S = function (e, t) {
      return new S.fn.init(e, t)
    };

  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this)
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return S.each(this, e)
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2
      }))
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2
      }))
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n)
    },
    each: function (e, t) {
      var n, r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r])) break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r, i, o = 0,
        a = [];
      if (p(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a)
    },
    guid: 1,
    support: v
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var d = function (n) {
    var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, S = "sizzle" + 1 * new Date,
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      oe = function () {
        T()
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1
        }
      }
    }

    function se(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t)))
          if (i = u[1]) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
          } if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",")
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r)
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
      }
    }

    function le(e) {
      return e[S] = !0, e
    }

    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }

    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function ye(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n, r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ve(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || "HTML")
      }, T = se.setDocument = function (e) {
        var t, n, r = e ? e.ownerDocument || e : p;
        return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
          return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
        }), d.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), d.getElementsByTagName = ce(function (e) {
          return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
        }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
          return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
        }), d.getById ? (b.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (b.filter.ID = function (e) {
          var n = e.replace(te, ne);
          return function (e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n
          }
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n, r, i, o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              i = t.getElementsByName(e), r = 0;
              while (o = i[r++])
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
            }
            return []
          }
        }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            while (n = o[i++]) 1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
          if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
        }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
          var t;
          a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = C.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
        })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
          d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
        }), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function (e, t) {
          if (t)
            while (t = t.parentNode)
              if (t === e) return !0;
          return !1
        }, j = t ? function (e, t) {
          if (e === t) return l = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return l = !0, 0;
          var n, r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
          if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
          if (i === o) return pe(e, t);
          n = e;
          while (n = n.parentNode) a.unshift(n);
          n = t;
          while (n = n.parentNode) s.unshift(n);
          while (a[r] === s[r]) r++;
          return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
        }), C
      }, se.matches = function (e, t) {
        return se(e, null, null, t)
      }, se.matchesSelector = function (e, t) {
        if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {
          N(t, !0)
        }
        return 0 < se(t, C, null, [e]).length
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), v(e, t)
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, se.escape = function (e) {
        return (e + "").replace(re, ie)
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, se.uniqueSort = function (e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
          while (t = e[i++]) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1)
        }
        return u = null, e
      }, o = se.getText = function (e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          while (t = e[r++]) n += o(t);
        return n
      }, (b = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
          },
          PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function (h, e, t, g, y) {
            var v = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === y ? function (e) {
              return !!e.parentNode
            } : function (e, t, n) {
              var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;
              if (c) {
                if (v) {
                  while (l) {
                    a = e;
                    while (a = a[l])
                      if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                    u = l = "only" === h && !u && "nextSibling"
                  }
                  return !0
                }
                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                  d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if (1 === a.nodeType && ++d && a === e) {
                      i[h] = [k, s, d];
                      break
                    }
                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                return (d -= y) === g || d % g == 0 && 0 <= d / g
              }
            }
          },
          PSEUDO: function (e, o) {
            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
              var n, r = a(e, o),
                i = r.length;
              while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
            }) : function (e) {
              return a(e, 0, t)
            }) : a
          }
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[S] ? le(function (e, t, n, r) {
              var i, o = s(e, null, r, []),
                a = e.length;
              while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
            }
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length
            }
          }),
          contains: le(function (t) {
            return t = t.replace(te, ne),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t)
              }
          }),
          lang: le(function (n) {
            return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === a
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return J.test(e.nodeName)
          },
          input: function (e) {
            return Q.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: ye(function () {
            return [0]
          }),
          last: ye(function (e, t) {
            return [t - 1]
          }),
          eq: ye(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: ye(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: ye(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
            return e
          }),
          gt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) b.pseudos[e] = de(e);
    for (e in {
        submit: !0,
        reset: !0
      }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u])
          if (1 === e.nodeType || f) return s(e, t, n);
        return !1
      } : function (e, t, n) {
        var r, i, o, a = [k, p];
        if (n) {
          while (e = e[u])
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
        } else
          while (e = e[u])
            if (1 === e.nodeType || f)
              if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
              else {
                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                if ((i[c] = a)[2] = s(e, t, n)) return !0
              } return !1
      }
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--)
          if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Ce(d, h, g, y, v, e) {
      return y && !y[S] && (y = Ce(y)), v && !v[S] && (v = Ce(v, e)), le(function (e, t, n, r) {
        var i, o, a, s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? v || (e ? d : l || y) ? [] : t : f;
        if (g && g(f, p, n, r), y) {
          i = Te(p, u), y(i, [], n, r), o = i.length;
          while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (v || d) {
            if (v) {
              i = [], o = p.length;
              while (o--)(a = p[o]) && i.push(f[o] = a);
              v(null, p = [], i, r)
            }
            o = p.length;
            while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
      })
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e)
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r
        }]; s < r; s++)
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++)
              if (b.relative[e[n].type]) break;
            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
          }
          c.push(t)
        } return we(c)
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
      var n, r, i, o, a, s, u, l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace(B, " ")
          }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
    }, f = se.compile = function (e, t) {
      var n, y, v, m, x, r, i = [],
        o = [],
        a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function (e, t, n, r, i) {
          var o, a, s, u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);
              while (s = y[a++])
                if (s(o, t || C, n)) {
                  r.push(o);
                  break
                } i && (k = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = v[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u)
                while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
          }
          return i && (k = h, w = p), c
        }, m ? le(r) : r))).selector = e
      }
      return a
    }, g = se.select = function (e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t), n
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ce(function (e) {
      return null == e.getAttribute("disabled")
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), se
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e)
        } return r
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r
    }) : S.filter(n, e, r)
  }
  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, S.fn.extend({
    find: function (e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++)
          if (S.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
      return 1 < r ? S.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0))
    },
    is: function (e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
    }
  });
  var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (S.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return h(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n)
    },
    next: function (e) {
      return O(e, "nextSibling")
    },
    prev: function (e) {
      return O(e, "previousSibling")
    },
    nextAll: function (e) {
      return h(e, "nextSibling")
    },
    prevAll: function (e) {
      return h(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n)
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return T(e.firstChild)
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e
  }

  function M(e) {
    throw e
  }

  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0
    }), n) : S.extend({}, r);
    var i, t, o, a, s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
      },
      f = {
        add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            S.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
            })
          }(arguments), t && !i && c()), this
        },
        remove: function () {
          return S.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
          }), this
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return a = u = [], s = t = "", this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return a = u = [], t || i || (s = t = ""), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!o
        }
      };
    return f
  }, S.extend({
    Deferred: function (e) {
      var o = [
          ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
          ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        a = {
          state: function () {
            return i
          },
          always: function () {
            return s.done(arguments).fail(arguments), this
          },
          "catch": function (e) {
            return a.then(null, e)
          },
          pipe: function () {
            var i = arguments;
            return S.Deferred(function (r) {
              S.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), i = null
            }).promise()
          },
          then: function (t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e()
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                    }
                  };
                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
              }
            }
            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
            }).promise()
          },
          promise: function (e) {
            return null != e ? S.extend(e, a) : a
          }
        },
        s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = S.Deferred(),
        a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
          }
        };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) I(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = S.Deferred();

  function $() {
    E.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), S.ready()
  }
  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e)
    }), this
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
      else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(S(e), n)
        })), t))
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase()
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U)
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function G() {
    this.expando = S.expando + G.uid++
  }
  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;
      else
        for (r in t) i[X(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t)
    }
  };
  var Y = new G,
    Q = new G,
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
        } catch (e) {}
        Q.set(e, t, n)
      } else n = void 0;
    return n
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e)
    },
    data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    removeData: function (e, t) {
      Q.remove(e, t)
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n)
    },
    _removeData: function (e, t) {
      Y.remove(e, t)
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof n ? this.each(function () {
        Q.set(this, n)
      }) : B(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e)
      })
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = S.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = S._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n])
        })
      })
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, r = 1,
        i = S.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --r || i.resolveWith(o, [o])
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e)
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
  };

  function se(e, t, n, r) {
    var i, o, a = 20,
      s = r ? function () {
        return r.cur()
      } : function () {
        return S.css(e, t, "")
      },
      u = s(),
      l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }
  S.fn.extend({
    show: function () {
      return le(this, !0)
    },
    hide: function () {
      return le(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide()
      })
    }
  });
  var ce, fe, pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++])
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o)
    }
    return f
  }
  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0
  }

  function Te() {
    return !1
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement
      } catch (e) {}
    }() == ("focus" === t)
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
    else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n)
    })
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t, n, r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
          else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
  }
  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
      }
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle), delete u[d])
          } else
            for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, r, i, o, a, s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a, s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    S.event.special[t] = {
      setup: function () {
        return Se(this, t, Ce), !1
      },
      trigger: function () {
        return Se(this, t), !0
      },
      _default: function (e) {
        return Y.get(e.target, t)
      },
      delegateType: e
    }
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t, n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return Ee(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return Ee(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t)
      })
    }
  });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in Y.remove(t, "handle events"), s)
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e, t, a, s, u, l, c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ye(u, "script"))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l))
    }
    return n
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0),
        f = ie(e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
        else Le(e, c);
      return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0)
    },
    remove: function (e) {
      return Oe(this, e)
    },
    text: function (e) {
      return B(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ye(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t)
      })
    },
    html: function (e) {
      return B(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ye(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = /^--/,
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e)
    },
    Ie = function (e, t, n) {
      var r, i, o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r
    },
    We = new RegExp(ne.join("|"), "i"),
    Fe = "[\\x20\\t\\r\\n\\f]",
    $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

  function Be(e, t, n) {
    var r, i, o, a, s = Re.test(t),
      u = e.style;
    return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && (a = a.replace($e, "$1")), "" !== a || ie(e) || (a = S.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n, r, i, o, a, s, u = E.createElement("div"),
      l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(v, {
      boxSizingReliable: function () {
        return e(), r
      },
      pixelBoxStyles: function () {
        return e(), o
      },
      pixelPosition: function () {
        return e(), n
      },
      reliableMarginLeft: function () {
        return e(), s
      },
      scrollboxSize: function () {
        return e(), i
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
      }
    }))
  }();
  var ze = ["Webkit", "Moz", "ms"],
    Ue = E.createElement("div").style,
    Xe = {};

  function Ve(e) {
    var t = S.cssProps[e] || Xe[e];
    return t || (e in Ue ? e : Xe[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = ze.length;
      while (n--)
        if ((e = ze[n] + t) in Ue) return e
    }(e) || e)
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Qe = {
      letterSpacing: "0",
      fontWeight: "400"
    };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
  }

  function Ze(e, t, n) {
    var r = Me(e),
      i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto"
    }
    return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i)
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = X(t),
          u = Re.test(t),
          l = e.style;
        if (u || (t = Ve(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = X(t);
      return Re.test(t) || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function () {
          return Ze(e, u, n)
        })
      },
      set: function (e, t, n) {
        var r, i = Me(e),
          o = !v.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
          s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
      }
    }
  }), S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je)
  }), S.fn.extend({
    css: function (e, t) {
      return B(this, function (e, t, n) {
        var r, i, o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, S.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0
    }), tt = Date.now()
  }

  function lt(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function ft(o, e, t) {
    var n, a, r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1;
        for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
        }
      }),
      c = l.props;
    for (! function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
          else t[r] = i
      }(c, l.opts.specialEasing); r < i; r++)
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
    },
    prefilters: [function (e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s()
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
          })
        })), t)
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !y || void 0 === y[r]) continue;
            g = !0
          }
          d[r] = y && y[r] || S.style(e, r)
        } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
            h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
        })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
    }],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
    }, r
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
        o = S.speed(e, n, r),
        a = function () {
          var e = ft(this, S.extend({}, t), o);
          (i || Y.get(this, "finish")) && e.stop(!0)
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = S.timers,
          r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);
        else
          for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || S.dequeue(this, i)
      })
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e, t = Y.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = S.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];
    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
    }
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), S.timers = [], S.fx.tick = function () {
    var e, t = 0,
      n = S.timers;
    for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), tt = void 0
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start()
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st())
  }, S.fx.stop = function () {
    nt = null
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
  var pt, dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return B(this, S.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!v.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, r = 0,
        i = t && t.match(P);
      if (i && 1 === e.nodeType)
        while (n = i[r++]) e.removeAttribute(n)
    }
  }), pt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;
    dt[t] = function (e, t, n) {
      var r, i, o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
    }
  });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;

  function yt(e) {
    return (e.match(P) || []).join(" ")
  }

  function vt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
  }
  S.fn.extend({
    prop: function (e, t) {
      return B(this, S.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), v.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this
  }), S.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a;
      return m(t) ? this.each(function (e) {
        S(this).addClass(t.call(this, e, vt(this)))
      }) : (e = mt(t)).length ? this.each(function () {
        if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = yt(n), r !== a && this.setAttribute("class", a)
        }
      }) : this
    },
    removeClass: function (t) {
      var e, n, r, i, o, a;
      return m(t) ? this.each(function (e) {
        S(this).removeClass(t.call(this, e, vt(this)))
      }) : arguments.length ? (e = mt(t)).length ? this.each(function () {
        if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
          }
          a = yt(n), r !== a && this.setAttribute("class", a)
        }
      }) : this : this.attr("class", "")
    },
    toggleClass: function (t, n) {
      var e, r, i, o, a = typeof t,
        s = "string" === a || Array.isArray(t);
      return m(t) ? this.each(function (e) {
        S(this).toggleClass(t.call(this, e, vt(this), n), n)
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function () {
        if (s)
          for (o = S(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
        else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
      }))
    },
    hasClass: function (e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++])
        if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : yt(S.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t)
            } return s
        },
        set: function (e, t) {
          var n, r, i = e.options,
            o = S.makeArray(t),
            a = i.length;
          while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
      }
    }, v.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), v.focusin = "onfocusin" in C;
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation()
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i, o, a, s, u, l, c, f, p = [n || E],
        d = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event, n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t)
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0)
    }
  }), v.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e))
    };
    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
      }
    }
  });
  var Tt = C.location,
    Ct = {
      guid: Date.now()
    },
    Et = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent
    }).join("\n") : e)), t
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;

  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
    });
    else if (r || "object" !== w(e)) i(n, e);
    else
      for (t in e) jt(n + "[" + t + "]", e[t], r, i)
  }
  S.param = function (e, t) {
    var n, r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value)
    });
    else
      for (n in e) jt(n, e[n], t, i);
    return r.join("&")
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        }
      }).get()
    }
  });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function Bt(e, t) {
    var n, r, i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e
  }
  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o, y = S.ajaxSetup({}, t),
        v = y.context || y,
        m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
        x = S.Deferred(),
        b = S.Callbacks("once memory"),
        w = y.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
              }
              t = n[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          },
          getAllResponseHeaders: function () {
            return h ? p : null
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == h && (y.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (h) T.always(e[T.status]);
              else
                for (t in e) w[t] = [w[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
        } catch (e) {
          y.crossDomain = !0
        }
      }
      if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
      for (i in (g = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
      if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
      if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
        y.async && 0 < y.timeout && (d = C.setTimeout(function () {
          T.abort("timeout")
        }, y.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r, i, o, a, s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(y, T, n)), !i && -1 < S.inArray("script", y.dataTypes) && S.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                } if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --S.active || S.event.trigger("ajaxStop")))
      }
      return T
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script")
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e))
    }
  }), S.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n)
      }
    })
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = S(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes)
      }), this
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e)
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {}
  };
  var _t = {
      0: 200,
      1223: 204
    },
    zt = S.ajaxSettings.xhr();
  v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var o, a;
    if (v.cors || zt && !i.crossDomain) return {
      send: function (e, t) {
        var n, r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
          for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a()
          })
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      },
      abort: function () {
        o && o()
      }
    }
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(r[0])
      },
      abort: function () {
        i && i()
      }
    }
  });
  var Ut, Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
    }), "script"
  }), v.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o
  }, S.fn.load = function (e, t, n) {
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem
    }).length
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l = S.css(e, "position"),
        c = S(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e)
      });
      var e, n, r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
        else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === S.css(e, "position")) e = e.offsetParent;
        return e || re
      })
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    S.fn[t] = function (e) {
      return B(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
    })
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return B(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  });
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || S.guid++, i
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0)
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "$1")
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S
  });
  var Yt = C.jQuery,
    Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
/*!
 * Clamp.js 0.5.1
 *
 * Copyright 2011-2013, Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
(function () {
  window.$clamp = function (c, d) {
    function s(a, b) {
      n.getComputedStyle || (n.getComputedStyle = function (a, b) {
        this.el = a;
        this.getPropertyValue = function (b) {
          var c = /(\-([a-z]){1})/g;
          "float" == b && (b = "styleFloat");
          c.test(b) && (b = b.replace(c, function (a, b, c) {
            return c.toUpperCase()
          }));
          return a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null
        };
        return this
      });
      return n.getComputedStyle(a, null).getPropertyValue(b)
    }

    function t(a) {
      a = a || c.clientHeight;
      var b = u(c);
      return Math.max(Math.floor(a / b), 0)
    }

    function x(a) {
      return u(c) *
        a
    }

    function u(a) {
      var b = s(a, "line-height");
      "normal" == b && (b = 1.2 * parseInt(s(a, "font-size")));
      return parseInt(b)
    }

    function l(a) {
      if (a.lastChild.children && 0 < a.lastChild.children.length) return l(Array.prototype.slice.call(a.children).pop());
      if (a.lastChild && a.lastChild.nodeValue && "" != a.lastChild.nodeValue && a.lastChild.nodeValue != b.truncationChar) return a.lastChild;
      a.lastChild.parentNode.removeChild(a.lastChild);
      return l(c)
    }

    function p(a, d) {
      if (d) {
        var e = a.nodeValue.replace(b.truncationChar, "");
        f || (h = 0 < k.length ?
          k.shift() : "", f = e.split(h));
        1 < f.length ? (q = f.pop(), r(a, f.join(h))) : f = null;
        m && (a.nodeValue = a.nodeValue.replace(b.truncationChar, ""), c.innerHTML = a.nodeValue + " " + m.innerHTML + b.truncationChar);
        if (f) {
          if (c.clientHeight <= d)
            if (0 <= k.length && "" != h) r(a, f.join(h) + h + q), f = null;
            else return c.innerHTML
        } else "" == h && (r(a, ""), a = l(c), k = b.splitOnChars.slice(0), h = k[0], q = f = null);
        if (b.animate) setTimeout(function () {
          p(a, d)
        }, !0 === b.animate ? 10 : b.animate);
        else return p(a, d)
      }
    }

    function r(a, c) {
      a.nodeValue = c + b.truncationChar
    }
    d = d || {};
    var n = window,
      b = {
        clamp: d.clamp || 2,
        useNativeClamp: "undefined" != typeof d.useNativeClamp ? d.useNativeClamp : !0,
        splitOnChars: d.splitOnChars || [".", "-", "\u2013", "\u2014", " "],
        animate: d.animate || !1,
        truncationChar: d.truncationChar || "\u2026",
        truncationHTML: d.truncationHTML
      },
      e = c.style,
      y = c.innerHTML,
      z = "undefined" != typeof c.style.webkitLineClamp,
      g = b.clamp,
      v = g.indexOf && (-1 < g.indexOf("px") || -1 < g.indexOf("em")),
      m;
    b.truncationHTML && (m = document.createElement("span"), m.innerHTML = b.truncationHTML);
    var k = b.splitOnChars.slice(0),
      h = k[0],
      f, q;
    "auto" == g ? g = t() : v && (g = t(parseInt(g)));
    var w;
    z && b.useNativeClamp ? (e.overflow = "hidden", e.textOverflow = "ellipsis", e.webkitBoxOrient = "vertical", e.display = "-webkit-box", e.webkitLineClamp = g, v && (e.height = b.clamp + "px")) : (e = x(g), e <= c.clientHeight && (w = p(l(c), e)));
    return {
      original: y,
      clamped: w
    }
  }
})();
/*! js-cookie v3.0.0-beta.0 | MIT */
! function (e, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = e || self, function () {
    var t = e.Cookies,
      o = e.Cookies = n();
    o.noConflict = function () {
      return e.Cookies = t, o
    }
  }())
}(this, function () {
  "use strict";

  function e() {
    for (var e = {}, n = 0; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t) e[o] = t[o]
    }
    return e
  }

  function n(e) {
    return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  }
  return function t(o) {
    function r(n, t, r) {
      if ("undefined" != typeof document) {
        "number" == typeof (r = e(i.defaults, r)).expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var c = "";
        for (var f in r) r[f] && (c += "; " + f, !0 !== r[f] && (c += "=" + r[f].split(";")[0]));
        return document.cookie = n + "=" + t + c
      }
    }
    var i = {
      defaults: {
        path: "/"
      },
      set: r,
      get: function (e) {
        if ("undefined" != typeof document && (!arguments.length || e)) {
          for (var t = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < t.length; i++) {
            var c = t[i].split("="),
              f = c.slice(1).join("=");
            '"' === f.charAt(0) && (f = f.slice(1, -1));
            try {
              var u = n(c[0]);
              if (r[u] = (o.read || o)(f, u) || n(f), e === u) break
            } catch (e) {}
          }
          return e ? r[e] : r
        }
      },
      remove: function (n, t) {
        r(n, "", e(t, {
          expires: -1
        }))
      },
      withConverter: t
    };
    return i
  }(function () {})
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function (c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function () {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function () {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function () {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function (a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function (c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;
        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
          }
        } else b.find(p + "-" + c).html(d)
      })
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function (b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function () {
        b.types.push(F), w(h + "." + F, function () {
          G()
        })
      },
      getInline: function (c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H)
    },
    K = function () {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function () {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function (d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function () {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function (c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L), L = setInterval(function () {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function () {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function () {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function () {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function () {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function () {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function () {
          R()
        })
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev()
            }), f.click(function () {
              b.next()
            }), b.container.append(e.add(f))
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function () {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function () {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function (a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function (c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            })
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), A()
});
! function (n, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).LazyLoad = t()
}(this, (function () {
  "use strict";

  function n() {
    return (n = Object.assign || function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
      }
      return n
    }).apply(this, arguments)
  }
  var t = "undefined" != typeof window,
    e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    i = t && "IntersectionObserver" in window,
    a = t && "classList" in document.createElement("p"),
    o = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1
    },
    c = function (t) {
      return n({}, r, t)
    },
    l = function (n, t) {
      var e, i = new n(t);
      try {
        e = new CustomEvent("LazyLoad::Initialized", {
          detail: {
            instance: i
          }
        })
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
          instance: i
        })
      }
      window.dispatchEvent(e)
    },
    s = function (n, t) {
      return n.getAttribute("data-" + t)
    },
    u = function (n, t, e) {
      var i = "data-" + t;
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i)
    },
    d = function (n) {
      return s(n, "ll-status")
    },
    f = function (n, t) {
      return u(n, "ll-status", t)
    },
    _ = function (n) {
      return f(n, null)
    },
    g = function (n) {
      return null === d(n)
    },
    v = function (n) {
      return "native" === d(n)
    },
    p = ["loading", "loaded", "applied", "error"],
    b = function (n, t, e, i) {
      n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i))
    },
    h = function (n, t) {
      a ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
    },
    m = function (n, t) {
      a ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    },
    E = function (n) {
      return n.llTempImage
    },
    I = function (n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n)
      }
    },
    y = function (n, t) {
      n && (n.loadingCount += t)
    },
    A = function (n, t) {
      n && (n.toLoadCount = t)
    },
    L = function (n) {
      for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
      return e
    },
    w = function (n, t, e) {
      e && n.setAttribute(t, e)
    },
    z = function (n, t) {
      n.removeAttribute(t)
    },
    k = function (n) {
      return !!n.llOriginalAttrs
    },
    O = function (n) {
      if (!k(n)) {
        var t = {};
        t.src = n.getAttribute("src"), t.srcset = n.getAttribute("srcset"), t.sizes = n.getAttribute("sizes"), n.llOriginalAttrs = t
      }
    },
    C = function (n) {
      if (k(n)) {
        var t = n.llOriginalAttrs;
        w(n, "src", t.src), w(n, "srcset", t.srcset), w(n, "sizes", t.sizes)
      }
    },
    N = function (n, t) {
      w(n, "sizes", s(n, t.data_sizes)), w(n, "srcset", s(n, t.data_srcset)), w(n, "src", s(n, t.data_src))
    },
    x = function (n) {
      z(n, "src"), z(n, "srcset"), z(n, "sizes")
    },
    M = function (n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && L(e).forEach(t)
    },
    R = function (n, t) {
      L(n).forEach(t)
    },
    G = {
      IMG: function (n, t) {
        M(n, (function (n) {
          O(n), N(n, t)
        })), O(n), N(n, t)
      },
      IFRAME: function (n, t) {
        w(n, "src", s(n, t.data_src))
      },
      VIDEO: function (n, t) {
        R(n, (function (n) {
          w(n, "src", s(n, t.data_src))
        })), w(n, "poster", s(n, t.data_poster)), w(n, "src", s(n, t.data_src)), n.load()
      }
    },
    T = function (n, t) {
      var e = G[n.tagName];
      e && e(n, t)
    },
    D = function (n, t, e) {
      y(e, 1), h(n, t.class_loading), f(n, "loading"), b(t.callback_loading, n, e)
    },
    F = {
      IMG: function (n, t) {
        u(n, t.data_src, null), u(n, t.data_srcset, null), u(n, t.data_sizes, null), M(n, (function (n) {
          u(n, t.data_srcset, null), u(n, t.data_sizes, null)
        }))
      },
      IFRAME: function (n, t) {
        u(n, t.data_src, null)
      },
      VIDEO: function (n, t) {
        u(n, t.data_src, null), u(n, t.data_poster, null), R(n, (function (n) {
          u(n, t.data_src, null)
        }))
      }
    },
    V = function (n, t) {
      u(n, t.data_bg_multi, null), u(n, t.data_bg_multi_hidpi, null)
    },
    j = function (n, t) {
      var e = F[n.tagName];
      e ? e(n, t) : function (n, t) {
        u(n, t.data_bg, null), u(n, t.data_bg_hidpi, null)
      }(n, t)
    },
    P = ["IMG", "IFRAME", "VIDEO"],
    S = function (n, t) {
      !t || function (n) {
        return n.loadingCount > 0
      }(t) || function (n) {
        return n.toLoadCount > 0
      }(t) || b(n.callback_finish, t)
    },
    U = function (n, t, e) {
      n.addEventListener(t, e), n.llEvLisnrs[t] = e
    },
    $ = function (n, t, e) {
      n.removeEventListener(t, e)
    },
    q = function (n) {
      return !!n.llEvLisnrs
    },
    H = function (n) {
      if (q(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          $(n, e, i)
        }
        delete n.llEvLisnrs
      }
    },
    B = function (n, t, e) {
      ! function (n) {
        delete n.llTempImage
      }(n), y(e, -1),
        function (n) {
          n && (n.toLoadCount -= 1)
        }(e), m(n, t.class_loading), t.unobserve_completed && I(n, e)
    },
    J = function (n, t, e) {
      var i = E(n) || n;
      q(i) || function (n, t, e) {
        q(n) || (n.llEvLisnrs = {});
        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
        U(n, i, t), U(n, "error", e)
      }(i, (function (a) {
        ! function (n, t, e, i) {
          var a = v(t);
          B(t, e, i), h(t, e.class_loaded), f(t, "loaded"), j(t, e), b(e.callback_loaded, t, i), a || S(e, i)
        }(0, n, t, e), H(i)
      }), (function (a) {
        ! function (n, t, e, i) {
          var a = v(t);
          B(t, e, i), h(t, e.class_error), f(t, "error"), b(e.callback_error, t, i), a || S(e, i)
        }(0, n, t, e), H(i)
      }))
    },
    K = function (n, t, e) {
      ! function (n) {
        n.llTempImage = document.createElement("IMG")
      }(n), J(n, t, e),
        function (n, t, e) {
          var i = s(n, t.data_bg),
            a = s(n, t.data_bg_hidpi),
            r = o && a ? a : i;
          r && (n.style.backgroundImage = 'url("'.concat(r, '")'), E(n).setAttribute("src", r), D(n, t, e))
        }(n, t, e),
        function (n, t, e) {
          var i = s(n, t.data_bg_multi),
            a = s(n, t.data_bg_multi_hidpi),
            r = o && a ? a : i;
          r && (n.style.backgroundImage = r, function (n, t, e) {
            h(n, t.class_applied), f(n, "applied"), V(n, t), t.unobserve_completed && I(n, t), b(t.callback_applied, n, e)
          }(n, t, e))
        }(n, t, e)
    },
    Q = function (n, t, e) {
      ! function (n) {
        return P.indexOf(n.tagName) > -1
      }(n) ? K(n, t, e): function (n, t, e) {
        J(n, t, e), T(n, t), D(n, t, e)
      }(n, t, e)
    },
    W = ["IMG", "IFRAME"],
    X = function (n) {
      return n.use_native && "loading" in HTMLImageElement.prototype
    },
    Y = function (n, t, e) {
      n.forEach((function (n) {
        return function (n) {
          return n.isIntersecting || n.intersectionRatio > 0
        }(n) ? function (n, t, e, i) {
          f(n, "entered"),
            function (n, t, e) {
              t.unobserve_entered && I(n, e)
            }(n, e, i), b(e.callback_enter, n, t, i),
            function (n) {
              return p.indexOf(d(n)) >= 0
            }(n) || Q(n, e, i)
        }(n.target, n, t, e) : function (n, t, e, i) {
          g(n) || (function (n, t, e, i) {
            e.cancel_on_exit && function (n) {
              return "loading" === d(n)
            }(n) && "IMG" === n.tagName && (H(n), function (n) {
              M(n, (function (n) {
                x(n)
              })), x(n)
            }(n), function (n) {
              M(n, (function (n) {
                C(n)
              })), C(n)
            }(n), m(n, e.class_loading), y(i, -1), _(n), b(e.callback_cancel, n, t, i))
          }(n, t, e, i), b(e.callback_exit, n, t, i))
        }(n.target, n, t, e)
      }))
    },
    Z = function (n) {
      return Array.prototype.slice.call(n)
    },
    nn = function (n) {
      return n.container.querySelectorAll(n.elements_selector)
    },
    tn = function (n) {
      return function (n) {
        return "error" === d(n)
      }(n)
    },
    en = function (n, t) {
      return function (n) {
        return Z(n).filter(g)
      }(n || nn(t))
    },
    an = function (n, e) {
      var a = c(n);
      this._settings = a, this.loadingCount = 0,
        function (n, t) {
          i && !X(n) && (t._observer = new IntersectionObserver((function (e) {
            Y(e, n, t)
          }), function (n) {
            return {
              root: n.container === document ? null : n.container,
              rootMargin: n.thresholds || n.threshold + "px"
            }
          }(n)))
        }(a, this),
        function (n, e) {
          t && window.addEventListener("online", (function () {
            ! function (n, t) {
              var e;
              (e = nn(n), Z(e).filter(tn)).forEach((function (t) {
                m(t, n.class_error), _(t)
              })), t.update()
            }(n, e)
          }))
        }(a, this), this.update(e)
    };
  return an.prototype = {
    update: function (n) {
      var t, a, o = this._settings,
        r = en(n, o);
      A(this, r.length), !e && i ? X(o) ? function (n, t, e) {
        n.forEach((function (n) {
          -1 !== W.indexOf(n.tagName) && (n.setAttribute("loading", "lazy"), function (n, t, e) {
            J(n, t, e), T(n, t), j(n, t), f(n, "native")
          }(n, t, e))
        })), A(e, 0)
      }(r, o, this) : (a = r, function (n) {
        n.disconnect()
      }(t = this._observer), function (n, t) {
        t.forEach((function (t) {
          n.observe(t)
        }))
      }(t, a)) : this.loadAll(r)
    },
    destroy: function () {
      this._observer && this._observer.disconnect(), nn(this._settings).forEach((function (n) {
        delete n.llOriginalAttrs
      })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
    },
    loadAll: function (n) {
      var t = this,
        e = this._settings;
      en(n, e).forEach((function (n) {
        I(n, t), Q(n, e, t)
      }))
    }
  }, an.load = function (n, t) {
    var e = c(t);
    Q(n, e)
  }, an.resetStatus = function (n) {
    _(n)
  }, t && function (n, t) {
    if (t)
      if (t.length)
        for (var e, i = 0; e = t[i]; i += 1) l(n, e);
      else l(n, t)
  }(an, window.lazyLoadOptions), an
}));

! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LocomotiveScroll = e()
}(this, (function () {
  "use strict";

  function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function e(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
    }
  }

  function i(t, i, s) {
    return i && e(t.prototype, i), s && e(t, s), t
  }

  function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t
  }

  function n(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      e && (s = s.filter((function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), i.push.apply(i, s)
    }
    return i
  }

  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2 ? n(Object(i), !0).forEach((function (e) {
        s(t, e, i[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }))
    }
    return t
  }

  function l(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && a(t, e)
  }

  function r(t) {
    return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function a(t, e) {
    return (a = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function c(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function h(t, e) {
    return !e || "object" != typeof e && "function" != typeof e ? c(t) : e
  }

  function d(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function () {
      var i, s = r(t);
      if (e) {
        var n = r(this).constructor;
        i = Reflect.construct(s, arguments, n)
      } else i = s.apply(this, arguments);
      return h(this, i)
    }
  }

  function u(t, e, i) {
    return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
      var s = function (t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
        return t
      }(t, e);
      if (s) {
        var n = Object.getOwnPropertyDescriptor(s, e);
        return n.get ? n.get.call(i) : n.value
      }
    })(t, e, i || t)
  }

  function f(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var i = [],
        s = !0,
        n = !1,
        o = void 0;
      try {
        for (var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value), !e || i.length !== e); s = !0);
      } catch (t) {
        n = !0, o = t
      } finally {
        try {
          s || null == r.return || r.return()
        } finally {
          if (n) throw o
        }
      }
      return i
    }(t, e) || m(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function p(t) {
    return function (t) {
      if (Array.isArray(t)) return v(t)
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(t) || m(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function m(t, e) {
    if (t) {
      if ("string" == typeof t) return v(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
    }
  }

  function v(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s
  }
  var y = {
      el: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: {
        x: 0,
        y: 0
      },
      direction: "vertical",
      gestureDirection: "vertical",
      reloadOnContextChange: !1,
      lerp: .1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024
      },
      smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical"
      }
    },
    b = function () {
      function e() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e), Object.assign(this, y, i), this.smartphone = y.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = y.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
          scroll: {
            x: 0,
            y: 0
          },
          limit: {
            x: this.html.offsetWidth,
            y: this.html.offsetHeight
          },
          currentElements: this.currentElements
        }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
      }
      return i(e, [{
        key: "init",
        value: function () {
          this.initEvents()
        }
      }, {
        key: "checkScroll",
        value: function () {
          this.dispatchScroll()
        }
      }, {
        key: "checkResize",
        value: function () {
          var t = this;
          this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function () {
            t.resize(), t.resizeTick = !1
          })))
        }
      }, {
        key: "resize",
        value: function () {}
      }, {
        key: "checkContext",
        value: function () {
          if (this.reloadOnContextChange) {
            this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
            var t = this.context;
            if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
          }
        }
      }, {
        key: "initEvents",
        value: function () {
          var t = this;
          this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function (e) {
            e.addEventListener("click", t.setScrollTo, !1)
          }))
        }
      }, {
        key: "setScrollTo",
        value: function (t) {
          t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
            offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
          })
        }
      }, {
        key: "addElements",
        value: function () {}
      }, {
        key: "detectElements",
        value: function (t) {
          var e = this,
            i = this.instance.scroll.y,
            s = i + this.windowHeight,
            n = this.instance.scroll.x,
            o = n + this.windowWidth;
          Object.entries(this.els).forEach((function (l) {
            var r = f(l, 2),
              a = r[0],
              c = r[1];
            if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)), c && c.inView)
              if ("horizontal" === e.direction) {
                var h = c.right - c.left;
                c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (o < c.left || n > c.right) && e.setOutOfView(c, a)
              } else {
                var d = c.bottom - c.top;
                c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight), (s < c.top || i > c.bottom) && e.setOutOfView(c, a)
              }
          })), this.hasScrollTicking = !1
        }
      }, {
        key: "setInView",
        value: function (t, e) {
          this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
        }
      }, {
        key: "setOutOfView",
        value: function (t, e) {
          var i = this;
          this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function (t) {
            t === e && delete i.currentElements[t]
          })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
        }
      }, {
        key: "dispatchCall",
        value: function (t, e) {
          this.callWay = e, this.callValue = t.call.split(",").map((function (t) {
            return t.trim()
          })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
          var i = new Event(this.namespace + "call");
          this.el.dispatchEvent(i)
        }
      }, {
        key: "dispatchScroll",
        value: function () {
          var t = new Event(this.namespace + "scroll");
          this.el.dispatchEvent(t)
        }
      }, {
        key: "setEvents",
        value: function (t, e) {
          this.listeners[t] || (this.listeners[t] = []);
          var i = this.listeners[t];
          i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
        }
      }, {
        key: "unsetEvents",
        value: function (t, e) {
          if (this.listeners[t]) {
            var i = this.listeners[t],
              s = i.indexOf(e);
            s < 0 || (i.splice(s, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
          }
        }
      }, {
        key: "checkEvent",
        value: function (t) {
          var e = this,
            i = t.type.replace(this.namespace, ""),
            s = this.listeners[i];
          s && 0 !== s.length && s.forEach((function (t) {
            switch (i) {
              case "scroll":
                return t(e.instance);
              case "call":
                return t(e.callValue, e.callWay, e.callObj);
              default:
                return t()
            }
          }))
        }
      }, {
        key: "startScroll",
        value: function () {}
      }, {
        key: "stopScroll",
        value: function () {}
      }, {
        key: "setScroll",
        value: function (t, e) {
          this.instance.scroll = {
            x: 0,
            y: 0
          }
        }
      }, {
        key: "destroy",
        value: function () {
          var t = this;
          window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function (e) {
            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
          })), this.listeners = {}, this.scrollToEls.forEach((function (e) {
            e.removeEventListener("click", t.setScrollTo, !1)
          })), this.html.classList.remove(this.initClass)
        }
      }]), e
    }(),
    g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function w(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports
  }
  var S = w((function (t, e) {
      t.exports = {
        polyfill: function () {
          var t = window,
            e = document;
          if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
            var i, s = t.HTMLElement || t.Element,
              n = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: s.prototype.scroll || r,
                scrollIntoView: s.prototype.scrollIntoView
              },
              o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
              l = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
            t.scroll = t.scrollTo = function () {
              void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
            }, t.scrollBy = function () {
              void 0 !== arguments[0] && (a(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
            }, s.prototype.scroll = s.prototype.scrollTo = function () {
              if (void 0 !== arguments[0])
                if (!0 !== a(arguments[0])) {
                  var t = arguments[0].left,
                    e = arguments[0].top;
                  p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                } else {
                  if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                  n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                }
            }, s.prototype.scrollBy = function () {
              void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
              }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
            }, s.prototype.scrollIntoView = function () {
              if (!0 !== a(arguments[0])) {
                var i = u(this),
                  s = i.getBoundingClientRect(),
                  o = this.getBoundingClientRect();
                i !== e.body ? (p.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                  left: s.left,
                  top: s.top,
                  behavior: "smooth"
                })) : t.scrollBy({
                  left: o.left,
                  top: o.top,
                  behavior: "smooth"
                })
              } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
            }
          }

          function r(t, e) {
            this.scrollLeft = t, this.scrollTop = e
          }

          function a(t) {
            if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
          }

          function c(t, e) {
            return "Y" === e ? t.clientHeight + l < t.scrollHeight : "X" === e ? t.clientWidth + l < t.scrollWidth : void 0
          }

          function h(e, i) {
            var s = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === s || "scroll" === s
          }

          function d(t) {
            var e = c(t, "Y") && h(t, "Y"),
              i = c(t, "X") && h(t, "X");
            return e || i
          }

          function u(t) {
            for (; t !== e.body && !1 === d(t);) t = t.parentNode || t.host;
            return t
          }

          function f(e) {
            var i, s, n, l, r = (o() - e.startTime) / 468;
            l = r = r > 1 ? 1 : r, i = .5 * (1 - Math.cos(Math.PI * l)), s = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, s, n), s === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
          }

          function p(i, s, l) {
            var a, c, h, d, u = o();
            i === e.body ? (a = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, d = n.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, d = r), f({
              scrollable: a,
              method: d,
              startTime: u,
              startX: c,
              startY: h,
              x: s,
              y: l
            })
          }
        }
      }
    })),
    x = (S.polyfill, function (e) {
      l(n, e);
      var s = d(n);

      function n() {
        var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t(this, n), (e = s.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", e.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = S, window.smoothscrollPolyfill.polyfill()), e
      }
      return i(n, [{
        key: "init",
        value: function () {
          this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), u(r(n.prototype), "init", this).call(this)
        }
      }, {
        key: "checkScroll",
        value: function () {
          var t = this;
          u(r(n.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function () {
            t.detectElements()
          })), this.hasScrollTicking = !0))
        }
      }, {
        key: "addDirection",
        value: function () {
          window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
        }
      }, {
        key: "addSpeed",
        value: function () {
          window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
        }
      }, {
        key: "resize",
        value: function () {
          Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
        }
      }, {
        key: "addElements",
        value: function () {
          var t = this;
          this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function (e, i) {
            e.getBoundingClientRect();
            var s, n, o, l = e.dataset[t.name + "Class"] || t.class,
              r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
              a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
              c = e.dataset[t.name + "Repeat"],
              h = e.dataset[t.name + "Call"],
              d = e.dataset[t.name + "Target"],
              u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
            s = u.top + t.instance.scroll.y, n = u.left + t.instance.scroll.x;
            var f = s + o.offsetHeight,
              p = n + o.offsetWidth;
            c = "false" != c && (null != c || t.repeat);
            var m = t.getRelativeOffset(a),
              v = {
                el: e,
                targetEl: o,
                id: r,
                class: l,
                top: s += m[0],
                bottom: f -= m[1],
                left: n,
                right: p,
                offset: a,
                progress: 0,
                repeat: c,
                inView: !1,
                call: h
              };
            t.els[r] = v, e.classList.contains(l) && t.setInView(t.els[r], r)
          }))
        }
      }, {
        key: "updateElements",
        value: function () {
          var t = this;
          Object.entries(this.els).forEach((function (e) {
            var i = f(e, 2),
              s = i[0],
              n = i[1],
              o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
              l = o + n.targetEl.offsetHeight,
              r = t.getRelativeOffset(n.offset);
            t.els[s].top = o + r[0], t.els[s].bottom = l - r[1]
          })), this.hasScrollTicking = !1
        }
      }, {
        key: "getRelativeOffset",
        value: function (t) {
          var e = [0, 0];
          if (t)
            for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
          return e
        }
      }, {
        key: "scrollTo",
        value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = parseInt(e.offset) || 0,
            s = !!e.callback && e.callback;
          if ("string" == typeof t) {
            if ("top" === t) t = this.html;
            else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
            else if (!(t = document.querySelector(t))) return
          } else if ("number" == typeof t) t = parseInt(t);
          else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
          i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
          var n = function () {
            return parseInt(window.pageYOffset) === parseInt(i)
          };
          if (s) {
            if (n()) return void s();
            var o = function t() {
              n() && (window.removeEventListener("scroll", t), s())
            };
            window.addEventListener("scroll", o)
          }
          window.scrollTo({
            top: i,
            behavior: 0 === e.duration ? "auto" : "smooth"
          })
        }
      }, {
        key: "update",
        value: function () {
          this.addElements(), this.detectElements()
        }
      }, {
        key: "destroy",
        value: function () {
          u(r(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
        }
      }]), n
    }(b)),
    k = Object.getOwnPropertySymbols,
    T = Object.prototype.hasOwnProperty,
    E = Object.prototype.propertyIsEnumerable;

  function A(t) {
    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
  }
  var O = function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
          return e[t]
        })).join("")) return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach((function (t) {
        s[t] = t
      })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
    } catch (t) {
      return !1
    }
  }() ? Object.assign : function (t, e) {
    for (var i, s, n = A(t), o = 1; o < arguments.length; o++) {
      for (var l in i = Object(arguments[o])) T.call(i, l) && (n[l] = i[l]);
      if (k) {
        s = k(i);
        for (var r = 0; r < s.length; r++) E.call(i, s[r]) && (n[s[r]] = i[s[r]])
      }
    }
    return n
  };

  function D() {}
  D.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (s[t] || (s[t] = [])).push({
        fn: e,
        ctx: i
      }), this
    },
    once: function (t, e, i) {
      var s = this;

      function n() {
        s.off(t, n), e.apply(i, arguments)
      }
      return n._ = e, this.on(t, n, i)
    },
    emit: function (t) {
      for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
      return this
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var o = 0, l = s.length; o < l; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
      return n.length ? i[t] = n : delete i[t], this
    }
  };
  var C = D,
    L = w((function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = function () {
          function t(t, e, i, s) {
            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != s ? s : 150, this.lastUpDeltas = function () {
              var t, e, i;
              for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
              return i
            }.call(this), this.lastDownDeltas = function () {
              var t, e, i;
              for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
              return i
            }.call(this), this.deltasTimestamp = function () {
              var t, e, i;
              for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
              return i
            }.call(this)
          }
          return t.prototype.check = function (t) {
            var e;
            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
          }, t.prototype.isInertia = function (t) {
            var e, i, s, n, o, l, r;
            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), r = s.reduce((function (t, e) {
              return t + e
            })), o = i.reduce((function (t, e) {
              return t + e
            })), l = r / s.length, n = o / i.length, Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
          }, t.prototype.showLastUpDeltas = function () {
            return this.lastUpDeltas
          }, t.prototype.showLastDownDeltas = function () {
            return this.lastDownDeltas
          }, t
        }()
      }).call(g)
    })),
    M = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1
    },
    j = Object.prototype.toString,
    _ = Object.prototype.hasOwnProperty;

  function B(t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  }
  var W = L.Lethargy,
    H = "virtualscroll",
    R = V,
    P = 37,
    Y = 38,
    I = 39,
    z = 40,
    X = 32;

  function V(t) {
    ! function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t) _.call(t, i) && "function" == typeof t[i] && "[object Function]" == j.call(t[i]) && e.push(i);
      for (var s = 0; s < e.length; s++) {
        var n = e[s];
        t[n] = B(t[n], t)
      }
    }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = O({
      mouseMultiplier: 1,
      touchMultiplier: 2,
      firefoxMultiplier: 15,
      keyStep: 120,
      preventTouch: !1,
      unpreventTouchClass: "vs-touchmove-allowed",
      limitInertia: !1,
      useKeyboard: !0,
      useTouch: !0
    }, t), this.options.limitInertia && (this._lethargy = new W), this._emitter = new C, this._event = {
      y: 0,
      x: 0,
      deltaX: 0,
      deltaY: 0
    }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
      passive: this.options.passive
    })
  }

  function F(t, e, i) {
    return (1 - i) * t + i * e
  }

  function q(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        s = i.transform || i.webkitTransform || i.mozTransform,
        n = s.match(/^matrix3d\((.+)\)$/);
      return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
    }
  }

  function K(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e
  }
  V.prototype._notify = function (t) {
    var e = this._event;
    e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(H, {
      x: e.x,
      y: e.y,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      originalEvent: t
    })
  }, V.prototype._onWheel = function (t) {
    var e = this.options;
    if (!this._lethargy || !1 !== this._lethargy.check(t)) {
      var i = this._event;
      i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, M.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
    }
  }, V.prototype._onMouseWheel = function (t) {
    if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
      var e = this._event;
      e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
    }
  }, V.prototype._onTouchStart = function (t) {
    var e = t.targetTouches ? t.targetTouches[0] : t;
    this.touchStartX = e.pageX, this.touchStartY = e.pageY
  }, V.prototype._onTouchMove = function (t) {
    var e = this.options;
    e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
    var i = this._event,
      s = t.targetTouches ? t.targetTouches[0] : t;
    i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = s.pageX, this.touchStartY = s.pageY, this._notify(t)
  }, V.prototype._onKeyDown = function (t) {
    var e = this._event;
    e.deltaX = e.deltaY = 0;
    var i = window.innerHeight - 40;
    switch (t.keyCode) {
      case P:
      case Y:
        e.deltaY = this.options.keyStep;
        break;
      case I:
      case z:
        e.deltaY = -this.options.keyStep;
        break;
      case t.shiftKey:
        e.deltaY = i;
        break;
      case X:
        e.deltaY = -i;
        break;
      default:
        return
    }
    this._notify(t)
  }, V.prototype._bind = function () {
    M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
  }, V.prototype._unbind = function () {
    M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
  }, V.prototype.on = function (t, e) {
    this._emitter.on(H, t, e);
    var i = this._emitter.e;
    i && i[H] && 1 === i[H].length && this._bind()
  }, V.prototype.off = function (t, e) {
    this._emitter.off(H, t, e);
    var i = this._emitter.e;
    (!i[H] || i[H].length <= 0) && this._unbind()
  }, V.prototype.reset = function () {
    var t = this._event;
    t.x = 0, t.y = 0
  }, V.prototype.destroy = function () {
    this._emitter.off(), this._unbind()
  };
  var N = "function" == typeof Float32Array;

  function U(t, e) {
    return 1 - 3 * e + 3 * t
  }

  function $(t, e) {
    return 3 * e - 6 * t
  }

  function G(t) {
    return 3 * t
  }

  function J(t, e, i) {
    return ((U(e, i) * t + $(e, i)) * t + G(e)) * t
  }

  function Q(t, e, i) {
    return 3 * U(e, i) * t * t + 2 * $(e, i) * t + G(e)
  }

  function Z(t) {
    return t
  }
  var tt = function (t, e, i, s) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      if (t === e && i === s) return Z;
      for (var n = N ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o) n[o] = J(.1 * o, t, i);

      function l(e) {
        for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o) s += .1;
        --o;
        var l = s + .1 * ((e - n[o]) / (n[o + 1] - n[o])),
          r = Q(l, t, i);
        return r >= .001 ? function (t, e, i, s) {
          for (var n = 0; n < 4; ++n) {
            var o = Q(e, i, s);
            if (0 === o) return e;
            e -= (J(e, i, s) - t) / o
          }
          return e
        }(e, l, t, i) : 0 === r ? l : function (t, e, i, s, n) {
          var o, l, r = 0;
          do {
            (o = J(l = e + (i - e) / 2, s, n) - t) > 0 ? i = l : e = l
          } while (Math.abs(o) > 1e-7 && ++r < 10);
          return l
        }(e, s, s + .1, t, i)
      }
      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : J(l(t), e, s)
      }
    },
    et = 38,
    it = 40,
    st = 32,
    nt = 9,
    ot = 33,
    lt = 34,
    rt = 36,
    at = 35,
    ct = function (e) {
      l(n, e);
      var s = d(n);

      function n() {
        var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t(this, n), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (e = s.call(this, i)).inertia && (e.lerp = .1 * e.inertia), e.isScrolling = !1, e.isDraggingScrollbar = !1, e.isTicking = !1, e.hasScrollTicking = !1, e.parallaxElements = {}, e.stop = !1, e.scrollbarContainer = i.scrollbarContainer, e.checkKey = e.checkKey.bind(c(e)), window.addEventListener("keydown", e.checkKey, !1), e
      }
      return i(n, [{
        key: "init",
        value: function () {
          var t = this;
          this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = o({
            delta: {
              x: this.initPosition.x,
              y: this.initPosition.y
            },
            scroll: {
              x: this.initPosition.x,
              y: this.initPosition.y
            }
          }, this.instance), this.vs = new R({
            el: this.scrollFromAnywhere ? document : this.el,
            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
            firefoxMultiplier: this.firefoxMultiplier,
            touchMultiplier: this.touchMultiplier,
            useKeyboard: !1,
            passive: !0
          }), this.vs.on((function (e) {
            t.stop || t.isDraggingScrollbar || requestAnimationFrame((function () {
              t.updateDelta(e), t.isScrolling || t.startScrolling()
            }))
          })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), u(r(n.prototype), "init", this).call(this)
        }
      }, {
        key: "setScrollLimit",
        value: function () {
          if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
            this.instance.limit.x = t - this.windowWidth
          }
        }
      }, {
        key: "startScrolling",
        value: function () {
          this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
        }
      }, {
        key: "stopScrolling",
        value: function () {
          cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
        }
      }, {
        key: "checkKey",
        value: function (t) {
          var e = this;
          if (this.stop) t.keyCode == nt && requestAnimationFrame((function () {
            e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
          }));
          else {
            switch (t.keyCode) {
              case nt:
                requestAnimationFrame((function () {
                  e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                    offset: -window.innerHeight / 2
                  })
                }));
                break;
              case et:
                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                break;
              case it:
                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                break;
              case ot:
                this.instance.delta[this.directionAxis] -= window.innerHeight;
                break;
              case lt:
                this.instance.delta[this.directionAxis] += window.innerHeight;
                break;
              case rt:
                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                break;
              case at:
                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                break;
              case st:
                this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                break;
              default:
                return
            }
            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
          }
        }
      }, {
        key: "isActiveElementScrollSensitive",
        value: function () {
          return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
        }
      }, {
        key: "checkScroll",
        value: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e || this.isScrolling || this.isDraggingScrollbar) {
            this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function () {
              return t.checkScroll()
            })), this.hasScrollTicking = !0), this.updateScroll();
            var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
              s = Date.now() - this.startScrollTs;
            if (!this.animatingScroll && s > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function (i) {
                var s = f(i, 2),
                  n = (s[0], s[1]);
                n.persistent || t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]), n.inView || (n.inView = !0, n.el.style.opacity = 1, n.el.style.pointerEvents = "all", n.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((n.inView || e) && (n.inView = !1, n.el.style.opacity = 0, n.el.style.pointerEvents = "none", n.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(n.el, 0, 0))
              })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
              var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
              "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
            }
            u(r(n.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
          }
        }
      }, {
        key: "resize",
        value: function () {
          this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
          }, this.update()
        }
      }, {
        key: "updateDelta",
        value: function (t) {
          var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
          e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
        }
      }, {
        key: "updateScroll",
        value: function (t) {
          this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = F(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
        }
      }, {
        key: "addDirection",
        value: function () {
          this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
        }
      }, {
        key: "addSpeed",
        value: function () {
          this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
        }
      }, {
        key: "initScrollBar",
        value: function () {
          if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
          } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
          this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
          }
        }
      }, {
        key: "reinitScrollBar",
        value: function () {
          if (this.hasScrollbar = !1, "horizontal" == this.direction) {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
          } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
          this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
          }
        }
      }, {
        key: "destroyScrollBar",
        value: function () {
          this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
        }
      }, {
        key: "getScrollBar",
        value: function (t) {
          this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
        }
      }, {
        key: "releaseScrollBar",
        value: function (t) {
          this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
        }
      }, {
        key: "moveScrollBar",
        value: function (t) {
          var e = this;
          this.isDraggingScrollbar && requestAnimationFrame((function () {
            var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
              s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
            s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
          }))
        }
      }, {
        key: "addElements",
        value: function () {
          var t = this;
          this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function (e, i) {
            var s, n, o, l = K(e),
              r = Object.entries(t.sections).map((function (t) {
                var e = f(t, 2);
                e[0];
                return e[1]
              })).find((function (t) {
                return l.includes(t.el)
              })),
              a = e.dataset[t.name + "Class"] || t.class,
              c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
              h = e.dataset[t.name + "Repeat"],
              d = e.dataset[t.name + "Call"],
              u = e.dataset[t.name + "Position"],
              p = e.dataset[t.name + "Delay"],
              m = e.dataset[t.name + "Direction"],
              v = "string" == typeof e.dataset[t.name + "Sticky"],
              y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
              b = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
              g = e.dataset[t.name + "Target"],
              w = (o = void 0 !== g ? document.querySelector("".concat(g)) : e).getBoundingClientRect();
            null === r || r.inView ? (s = w.top + t.instance.scroll.y - q(o).y, n = w.left + t.instance.scroll.x - q(o).x) : (s = w.top - q(r.el).y - q(o).y, n = w.left - q(r.el).x - q(o).x);
            var S = s + o.offsetHeight,
              x = n + o.offsetWidth,
              k = {
                x: (x - n) / 2 + n,
                y: (S - s) / 2 + s
              };
            if (v) {
              var T = e.getBoundingClientRect(),
                E = T.top,
                A = T.left,
                O = {
                  x: A - n,
                  y: E - s
                };
              s += window.innerHeight, n += window.innerWidth, S = E + o.offsetHeight - e.offsetHeight - O[t.directionAxis], k = {
                x: ((x = A + o.offsetWidth - e.offsetWidth - O[t.directionAxis]) - n) / 2 + n,
                y: (S - s) / 2 + s
              }
            }
            h = "false" != h && (null != h || t.repeat);
            var D = [0, 0];
            if (b)
              if ("horizontal" === t.direction) {
                for (var C = 0; C < b.length; C++) "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowWidth / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                n += D[0], x -= D[1]
              } else {
                for (C = 0; C < b.length; C++) "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowHeight / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                s += D[0], S -= D[1]
              } var L = {
              el: e,
              id: c,
              class: a,
              section: r,
              top: s,
              middle: k,
              bottom: S,
              left: n,
              right: x,
              offset: b,
              progress: 0,
              repeat: h,
              inView: !1,
              call: d,
              speed: y,
              delay: p,
              position: u,
              target: o,
              direction: m,
              sticky: v
            };
            t.els[c] = L, e.classList.contains(a) && t.setInView(t.els[c], c), (!1 !== y || v) && (t.parallaxElements[c] = L)
          }))
        }
      }, {
        key: "addSections",
        value: function () {
          var t = this;
          this.sections = {};
          var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
          0 === e.length && (e = [this.el]), e.forEach((function (e, i) {
            var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
              n = e.getBoundingClientRect(),
              o = {
                x: n.left - 1.5 * window.innerWidth - q(e).x,
                y: n.top - 1.5 * window.innerHeight - q(e).y
              },
              l = {
                x: o.x + n.width + 2 * window.innerWidth,
                y: o.y + n.height + 2 * window.innerHeight
              },
              r = "string" == typeof e.dataset[t.name + "Persistent"];
            e.setAttribute("data-scroll-section-id", s);
            var a = {
              el: e,
              offset: o,
              limit: l,
              inView: !1,
              persistent: r,
              id: s
            };
            t.sections[s] = a
          }))
        }
      }, {
        key: "transform",
        value: function (t, e, i, s) {
          var n;
          if (s) {
            var o = q(t),
              l = F(o.x, e, s),
              r = F(o.y, i, s);
            n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)")
          } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
          t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
        }
      }, {
        key: "transformElements",
        value: function (t) {
          var e = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = this.instance.scroll.x + this.windowWidth,
            n = this.instance.scroll.y + this.windowHeight,
            o = {
              x: this.instance.scroll.x + this.windowMiddle.x,
              y: this.instance.scroll.y + this.windowMiddle.y
            };
          Object.entries(this.parallaxElements).forEach((function (l) {
            var r = f(l, 2),
              a = (r[0], r[1]),
              c = !1;
            if (t && (c = 0), a.inView || i) switch (a.position) {
              case "top":
                c = e.instance.scroll[e.directionAxis] * -a.speed;
                break;
              case "elementTop":
                c = (n - a.top) * -a.speed;
                break;
              case "bottom":
                c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                break;
              case "left":
                c = e.instance.scroll[e.directionAxis] * -a.speed;
                break;
              case "elementLeft":
                c = (s - a.left) * -a.speed;
                break;
              case "right":
                c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                break;
              default:
                c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed
            }
            a.sticky && (c = a.inView ? "horizontal" === e.direction ? e.instance.scroll.x - a.left + window.innerWidth : e.instance.scroll.y - a.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight), !1 !== c && ("horizontal" === a.direction || "horizontal" === e.direction && "vertical" !== a.direction ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay))
          }))
        }
      }, {
        key: "scrollTo",
        value: function (t) {
          var e = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = parseInt(i.offset) || 0,
            n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
            o = i.easing || [.25, 0, .35, 1],
            l = !!i.disableLerp,
            r = !!i.callback && i.callback;
          if (o = tt.apply(void 0, p(o)), "string" == typeof t) {
            if ("top" === t) t = 0;
            else if ("bottom" === t) t = this.instance.limit.y;
            else if ("left" === t) t = 0;
            else if ("right" === t) t = this.instance.limit.x;
            else if (!(t = document.querySelector(t))) return
          } else if ("number" == typeof t) t = parseInt(t);
          else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
          if ("number" != typeof t) {
            var a = K(t).includes(this.el);
            if (!a) return;
            var c = t.getBoundingClientRect(),
              h = c.top,
              d = c.left,
              u = K(t),
              m = u.find((function (t) {
                return Object.entries(e.sections).map((function (t) {
                  var e = f(t, 2);
                  e[0];
                  return e[1]
                })).find((function (e) {
                  return e.el == t
                }))
              })),
              v = 0;
            v = m ? q(m)[this.directionAxis] : -this.instance.scroll[this.directionAxis], s = "horizontal" === this.direction ? d + s - v : h + s - v
          } else s = t + s;
          var y = parseFloat(this.instance.delta[this.directionAxis]),
            b = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])),
            g = b - y,
            w = function (t) {
              l ? "horizontal" === e.direction ? e.setScroll(y + g * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, y + g * t) : e.instance.delta[e.directionAxis] = y + g * t
            };
          this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
          var S = Date.now(),
            x = function t() {
              var i = (Date.now() - S) / n;
              i > 1 ? (w(1), e.animatingScroll = !1, 0 == n && e.update(), r && r()) : (e.scrollToRaf = requestAnimationFrame(t), w(o(i)))
            };
          x()
        }
      }, {
        key: "update",
        value: function () {
          this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
        }
      }, {
        key: "startScroll",
        value: function () {
          this.stop = !1
        }
      }, {
        key: "stopScroll",
        value: function () {
          this.stop = !0
        }
      }, {
        key: "setScroll",
        value: function (t, e) {
          this.instance = o(o({}, this.instance), {}, {
            scroll: {
              x: t,
              y: e
            },
            delta: {
              x: t,
              y: e
            },
            speed: 0
          })
        }
      }, {
        key: "destroy",
        value: function () {
          u(r(n.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
        }
      }]), n
    }(b);
  return function () {
    function e() {
      var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e), this.options = i, Object.assign(this, y, i), this.smartphone = y.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = y.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
    }
    return i(e, [{
      key: "init",
      value: function () {
        if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ct(this.options) : this.scroll = new x(this.options), this.scroll.init(), window.location.hash) {
          var t = window.location.hash.slice(1, window.location.hash.length),
            e = document.getElementById(t);
          e && this.scroll.scrollTo(e)
        }
      }
    }, {
      key: "update",
      value: function () {
        this.scroll.update()
      }
    }, {
      key: "start",
      value: function () {
        this.scroll.startScroll()
      }
    }, {
      key: "stop",
      value: function () {
        this.scroll.stopScroll()
      }
    }, {
      key: "scrollTo",
      value: function (t, e) {
        this.scroll.scrollTo(t, e)
      }
    }, {
      key: "setScroll",
      value: function (t, e) {
        this.scroll.setScroll(t, e)
      }
    }, {
      key: "on",
      value: function (t, e) {
        this.scroll.setEvents(t, e)
      }
    }, {
      key: "off",
      value: function (t, e) {
        this.scroll.unsetEvents(t, e)
      }
    }, {
      key: "destroy",
      value: function () {
        this.scroll.destroy()
      }
    }]), e
  }()
}));
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function () {
  "use strict";

  function t(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
  }

  function e(t) {
    if (t.srcset && !p && window.picturefill) {
      var e = window.picturefill._;
      t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
        reselect: !0
      }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
        reselect: !0
      })), t.currentSrc = t[e.ns].curSrc || t.src
    }
  }

  function i(t) {
    for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));) r[e[1]] = e[2];
    return r
  }

  function r(e, i, r) {
    var n = t(i || 1, r || 0);
    b.call(e, "src") !== n && h.call(e, "src", n)
  }

  function n(t, e) {
    t.naturalWidth ? e(t) : setTimeout(n, 100, t, e)
  }

  function c(t) {
    var c = i(t),
      o = t[l];
    if (c["object-fit"] = c["object-fit"] || "fill", !o.img) {
      if ("fill" === c["object-fit"]) return;
      if (!o.skipTest && f && !c["object-position"]) return
    }
    if (!o.img) {
      o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
      try {
        s(t)
      } catch (t) {
        window.console && console.warn("https://bit.ly/ofi-old-browser")
      }
    }
    e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () {
      o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
    }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) {
      r(t, e.naturalWidth, e.naturalHeight)
    })
  }

  function s(t) {
    var e = {
      get: function (e) {
        return t[l].img[e ? e : "src"]
      },
      set: function (e, i) {
        return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e
      }
    };
    Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
      get: function () {
        return e.get("currentSrc")
      }
    }), Object.defineProperty(t, "srcset", {
      get: function () {
        return e.get("srcset")
      },
      set: function (t) {
        return e.set(t, "srcset")
      }
    })
  }

  function o() {
    function t(t, e) {
      return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t
    }
    d || (HTMLImageElement.prototype.getAttribute = function (e) {
      return b.call(t(this, e), e)
    }, HTMLImageElement.prototype.setAttribute = function (e, i) {
      return h.call(t(this, e), e, String(i))
    })
  }

  function a(t, e) {
    var i = !y && !t;
    if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1;
    "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
    for (var r = 0; r < t.length; r++) t[r][l] = t[r][l] || {
      skipTest: e.skipTest
    }, c(t[r]);
    i && (document.body.addEventListener("load", function (t) {
      "IMG" === t.target.tagName && a(t.target, {
        skipTest: e.skipTest
      })
    }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, {
      skipTest: e.skipTest
    }))
  }
  var l = "bfred-it:object-fit-images",
    u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
    g = "undefined" == typeof Image ? {
      style: {
        "object-position": 1
      }
    } : new Image,
    f = "object-fit" in g.style,
    d = "object-position" in g.style,
    m = "background-size" in g.style,
    p = "string" == typeof g.currentSrc,
    b = g.getAttribute,
    h = g.setAttribute,
    y = !1;
  return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a
}();
gsap.registerPlugin(ScrollTrigger);
const mql_md = window.matchMedia("(min-width: 740px)");
const mql_lg = window.matchMedia("(min-width: 992px)");
let locoScroll;
gsap.config({
  force3D: false
});
(function (e) {
  App = {
    detectJS: function () {
      document.documentElement.className = document.documentElement.className.replace("no-js", "js")
    },
    objectFitPolyfill: function () {
      var e = document.querySelectorAll("img.u-fit");
      if (e) {
        objectFitImages(e)
      }
    },
    lazyLoad: function () {
      var e = new LazyLoad
    },
    inlineSVG: function () {
      e("img.svg").each(function () {
        var e = jQuery(this);
        var t = e.attr("id");
        var i = e.attr("class");
        var n = e.attr("src");
        jQuery.get(n, function (n) {
          var s = jQuery(n).find("svg");
          if (typeof t !== "undefined") {
            s = s.attr("id", t)
          }
          if (typeof i !== "undefined") {
            s = s.attr("class", i + " replaced-svg")
          }
          s = s.removeAttr("xmlns:a");
          e.replaceWith(s)
        }, "xml")
      })
    },
    menuToggler: function () {
      var t = document.querySelector(".menu-toggle");

      function i() {
        document.body.classList.toggle("js-menu-open");
        e(".nav > div").fadeToggle();
        t.setAttribute("aria-expanded", String(document.body.classList.contains("js-menu-open")))
      }
      t.addEventListener("click", i, false);
      e(".header .menu-item-has-children > span").on("click", function (t) {
        t.preventDefault();
        e(this).parents("li").toggleClass("active")
      });
      let n = e(".footer-middle nav").height();
      e(".footer-middle .menu-item-has-children > span").on("click", function (t) {
        t.preventDefault();
        if (e(this).parents("li").hasClass("active")) {
          e(this).parents("li").removeClass("active");
          if (mql_md.matches) {
            e(".footer-middle nav").height(n)
          }
        } else {
          e(".footer-middle li.active").removeClass("active");
          e(this).parents("li").addClass("active");
          if (mql_md.matches) {
            let t = e(this).parents("li").find("ul").outerHeight();
            e(".footer-middle nav").height(n + t)
          }
        }
        locoScroll.update()
      })
    },
    menuHeight: function () {
      let e = window.innerHeight * .01;
      document.documentElement.style.setProperty("--vh", `${e}px`);
      window.addEventListener("resize", () => {
        let e = window.innerHeight * .01;
        document.documentElement.style.setProperty("--vh", `${e}px`)
      })
    },
    sliders: function () {
      const e = document.getElementById("sliderType1");
      if (e) {
        const i = e.closest(".section-slider");
        var t = new Swiper(e, {
          loop: false,
          speed: 750,
          slideToClickedSlide: false,
          slidesPerView: "auto",
          spaceBetween: 30,
          slidesOffsetBefore: 40,
          slidesOffsetAfter: 40,
          watchSlidesProgress: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets"
          },
          navigation: {
            nextEl: i.querySelector(".swiper-btn--next"),
            prevEl: i.querySelector(".swiper-btn--prev")
          },
          preloadImages: false,
          lazy: true,
          breakpoints: {
            0: {
              spaceBetween: 20
            },
            740: {
              spaceBetween: 30
            }
          }
        })
      }
      const i = document.querySelector(".slider-type-2");
      if (i) {
        var n = document.getElementById("sliderType2Images");
        if (n) {
          var s = new Swiper(n, {
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            allowTouchMove: false,
            preloadImages: false,
            lazy: true
          })
        }
        var a = document.getElementById("sliderType2Main");
        if (a) {
          var l = new Swiper(a, {
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: i.querySelector(".swiper-btn--next"),
              prevEl: i.querySelector(".swiper-btn--prev")
            },
            allowTouchMove: true,
            preloadImages: false,
            lazy: true
          });
          l.on("slideChange", function (e) {
            s.slideTo(e.activeIndex)
          })
        }
      }
    },
    tabbedContent: function () {
      e(".p-tabs__content").hide();
      e(".p-tabs__content:first").show();
      e("ul.p-tabs__tabs li").click(function () {
        e(".p-tabs__content").hide();
        var t = e(this).attr("rel");
        e("#" + t).fadeIn();
        e("ul.p-tabs__tabs li").removeClass("active");
        e(this).addClass("active");
        e(".p-tabs__toggler").removeClass("d_active");
        e(".p-tabs__toggler[rel^='" + t + "']").addClass("d_active")
      });
      e(".p-tabs__toggler").click(function () {
        var t = e(this).attr("rel");
        e("#" + t).fadeToggle();
        e(this).toggleClass("d_active");
        e("ul.p-tabs__tabs li[rel^='" + t + "']").toggleClass("active")
      })
    },
    initPopup: function () {
      e("[video-mp-trigger]").magnificPopup({
        type: "iframe",
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: "mfp-fade "
      })
    },
    initSearchbox: function () {
      let e = document.querySelector(".p-search"),
        t = document.querySelector(".p-search__input");
      let i = document.querySelectorAll(".logo img"),
        n = document.querySelector(".logo .logo__light");
      document.addEventListener("click", n => {
        if (~n.target.className.indexOf("p-search__btn")) {
          e.classList.add("focused");
          t.focus();
          if (!mql_md.matches) {
            i.forEach(function (e) {
              e.src = e.dataset.srcSymbol
            })
          }
        } else {
          e.classList.remove("focused");
          if (!mql_md.matches) {
            i.forEach(function (e) {
              e.src = e.dataset.srcLogo
            })
          }
        }
      })
    },
    initTaxList: function () {
      e("[tax-toggler]").click(function (t) {
        e(this).toggleClass("toggled");
        e("[tax-list]").slideToggle()
      })
    },
    initClamp: function () {
      const t = {
        clamp: "auto",
        truncationChar: ".."
      };
      e(".tile-news-2 .u-pseudolink").each(function (e) {
        $clamp(this, t)
      });
      e(".tile-news-ext .u-pseudolink").each(function (e) {
        $clamp(this, t)
      });
      e(".tile-resource-3 .u-pseudolink").each(function (e) {
        $clamp(this, t)
      })
    },
    filterJobOffers: function (t) {
      var i = e("#jobOffers"),
        n = i.find("[data-offer]");
      if (t === "") {
        n.show()
      } else {
        n.each(function (i, n) {
          var s = e(n).attr("data-offer").split("-");
          if (e.inArray(t, s) !== -1) {
            e(n).show()
          } else {
            e(n).hide()
          }
        })
      }
    },
    init: function () {
      this.detectJS();
      this.objectFitPolyfill();
      this.lazyLoad();
      this.inlineSVG();
      this.menuToggler();
      this.menuHeight();
      this.sliders();
      this.tabbedContent();
      this.initPopup();
      this.initSearchbox();
      this.initTaxList();
      this.initClamp()
    }
  };
  e(document).ready(function () {
    App.init()
  })
})(jQuery);
(function (e) {
  AppForms = {
    contactForm: function () {
      var t = function (e) {
        if (e.attr("data-error-text")) {
          e.parents(".form__field").find(".error-text").remove();
          e.parents(".form__field").append('<p class="error-text">' + e.attr("data-error-text") + "</p>")
        }
      };
      var s = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      e(document).on("submit", "form.validate", function (r) {
        var a = true,
          i = e(this),
          o = i.attr("action"),
          n = i.find("button");
        i.find(".form__error").remove();
        i.find("input[type=text].req:not(.email), textarea.req").each(function () {
          if (e(this).val().length < 3) {
            e(this).parents(".form__field").addClass("form__field--error");
            a = false;
            t(e(this))
          }
        });
        i.find("input[type=text].email.req").each(function () {
          if (!s.test(e(this).val())) {
            e(this).parents(".form__field").addClass("form__field--error");
            a = false;
            t(e(this))
          }
        });
        i.find("select.req, select.required").each(function () {
          if (!e(this).val() || e(this).val() == "") {
            e(this).closest(".form__field").addClass("form__field--error");
            a = false;
            t(e(this))
          }
        });
        i.find("#g-recaptcha-response").each(function () {
          if (e(this).val().length < 1) {
            e(this).parents(".form__field").addClass("form__field--error");
            a = false;
            t(e(".form__field--captcha > div"))
          }
        });
        if (a) {
          n.addClass("start");
          e.ajax({
            type: "POST",
            url: o,
            dataType: "json",
            data: i.serialize(),
            success: function (s) {
              i.removeClass("error");
              if (s.status == "ok") {
                i.find("input[type=text], textarea").val("");
                i.find("input[type=checkbox]").prop("checked", false);
                i.addClass("done");
                i.parents(".p-form").addClass("p-form--done");
                if (i.hasClass("form-newsletter")) {
                  i.parents(".p-newsletter").addClass("done")
                }
                if (i.hasClass("form-resource")) {
                  var r = i.data("link-url");
                  AppForms.downloadFile(r, false);
                  Cookies.set("prvn_resource_form_data", "1", {
                    expires: 365,
                    path: "/"
                  })
                }
              }
              if (s.status == "error") {
                n.removeClass("start");
                if (s.message) {
                  i.append('<div class="form__error">' + s.message + "</div>")
                }
                e.each(s.errors, function (s, r) {
                  e("[name=" + r + "]").addClass("error");
                  t(e("[name=" + r + "]"))
                })
              }
            },
            // error: function (e) {
            //   n.removeClass("start");
            //   var t = "Error. Please try again.";
            //   if (e.responseJSON && e.responseJSON.message) {
            //     t = e.responseJSON.message
            //   }
            //   i.append('<div class="form__error">' + t + "</div>");
            //   i.addClass("error")
            // }
          })
        }
        return false
      });
      e("input, textarea").keyup(function () {
        if (e(this).val().length >= 3) {
          if (e(this).hasClass("email") && s.test(e(this).val())) {
            e(this).addClass("ok");
            e(this).parents(".form__field").removeClass("form__field--error");
            e(this).parents(".form__field").find(".error-text").remove()
          } else if (e(this).hasClass("email") && !s.test(e(this).val())) {
            e(this).removeClass("ok")
          } else if (!e(this).hasClass("email")) {
            e(this).addClass("ok");
            e(this).parents(".form__field").removeClass("form__field--error");
            e(this).parents(".form__field").find(".error-text").remove()
          }
        } else {
          e(this).removeClass("ok")
        }
      })
    },
    customSelect: function () {
      var t, s, r, a, i, o, n;
      t = document.getElementsByClassName("custom-select");
      for (s = 0; s < t.length; s++) {
        a = t[s].getElementsByTagName("select")[0];
        selShowFirst = t[s].getAttribute("select-show-first-option");
        i = document.createElement("DIV");
        i.setAttribute("class", "select-selected");
        i.innerHTML = a.options[a.selectedIndex].innerHTML;
        i.setAttribute("data-" + a.getAttribute("id"), a.options[a.selectedIndex].value);
        t[s].appendChild(i);
        o = document.createElement("DIV");
        o.setAttribute("class", "select-items select-hide");
        $start_index = selShowFirst ? 0 : 1;
        for (r = $start_index; r < a.length; r++) {
          n = document.createElement("DIV");
          n.innerHTML = a.options[r].innerHTML;
          n.addEventListener("click", function (t) {
            var s, r, a, i, o;
            i = this.parentNode.parentNode.getElementsByTagName("select")[0];
            o = this.parentNode.previousSibling;
            for (r = 0; r < i.length; r++) {
              if (i.options[r].innerHTML == this.innerHTML) {
                i.selectedIndex = r;
                o.innerHTML = this.innerHTML;
                o.setAttribute("data-" + i.getAttribute("id"), i.options[r].value);
                s = this.parentNode.getElementsByClassName("same-as-selected");
                for (a = 0; a < s.length; a++) {
                  s[a].removeAttribute("class")
                }
                this.setAttribute("class", "same-as-selected");
                break
              }
            }
            o.click();
            if (e(this).closest(".custom-select").attr("id") === "selectJobs") {
              App.filterJobOffers(e(this).closest(".custom-select").find(".select-selected").attr("data-offer"))
            }
            e(this).closest(".form__field").removeClass("form__field--error");
            e(this).closest(".form__field").find(".error-text").remove()
          });
          o.appendChild(n)
        }
        t[s].appendChild(o);
        i.addEventListener("click", function (e) {
          e.stopPropagation();
          l(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active")
        })
      }

      function l(e) {
        var t, s, r, a = [];
        t = document.getElementsByClassName("select-items");
        s = document.getElementsByClassName("select-selected");
        for (r = 0; r < s.length; r++) {
          if (e == s[r]) {
            a.push(r)
          } else {
            s[r].classList.remove("select-arrow-active")
          }
        }
        for (r = 0; r < t.length; r++) {
          if (a.indexOf(r)) {
            t[r].classList.add("select-hide")
          }
        }
      }
      document.addEventListener("click", l)
    },
    newsletterForm: function () {
      let e = document.querySelector("form #lastname");
      if (e) {
        e.value = "HastaLaVista"
      }
    },
    downloadFile: function (e, t) {
      if (t) {
        window.open(window.atob(e), "_blank")
      } else {
        window.open(e, "_blank")
      }
    },
    getFileName: function (e, t) {
      var s;
      if (t) {
        e = window.atob(e)
      }
      if ("" !== e) {
        s = e.split("/").pop()
      }
      return s
    },
    resourceDownload: function () {
      if (e(".resource").length === 0) {
        return
      }
      if ("1" !== Cookies.get("prvn_resource_form_data")) {
        e("#resourceAccess").show()
      } else {
        e("#resourceDownload").css("display", "inline-block")
      }
    },
    init: function () {
      this.contactForm();
      this.customSelect();
      this.newsletterForm();
      this.resourceDownload()
    }
  };
  e(document).ready(function () {
    AppForms.init()
  })
})(jQuery);

function recaptcha_callback() {
  $(".form__field--captcha").find(".error-text").remove()
}

function reCaptchaLazyLoad() {
  var e = document.getElementsByTagName("head")[0];
  var t = document.createElement("script");
  t.type = "text/javascript";
  t.src = "https://www.google.com/recaptcha/api.js";
  e.appendChild(t);
  document.querySelectorAll("form.recaptcha input").forEach(e => {
    e.removeEventListener("focus", reCaptchaLazyLoad)
  })
}
document.querySelectorAll("form.recaptcha input").forEach(e => {
  e.addEventListener("focus", reCaptchaLazyLoad, false)
});
(function (e) {
  AppAnimations = {
    setup: function () {
      locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        mobile: {
          smooth: false
        },
        tablet: {
          smooth: true
        }
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(e) {
          return arguments.length ? locoScroll.scrollTo(e, {
            duration: 0,
            disableLerp: true
          }) : locoScroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.defaults({
        scroller: "[data-scroll-container]"
      });
      setTimeout(() => {
        locoScroll.update()
      }, 1e3);
      const e = document.querySelectorAll('a[href^="#"');
      e.forEach(function (e) {
        e.addEventListener("click", function (t) {
          t.preventDefault();
          locoScroll.scrollTo(e.getAttribute("href"), {
            offset: "-50"
          })
        })
      })
    },
    initShared: function () {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          const e = document.querySelector(".section-hero__text");
          if (e) {
            let t = e.offsetHeight;
            let o = window.innerHeight;
            let r = o / 2 - t / 2;
            let i = gsap.timeline();
            i.fromTo(".section-hero__overlay", {
              opacity: 0
            }, {
              opacity: 1,
              ease: "linear"
            });
            i.fromTo(".section-hero__text", {
              y: o
            }, {
              y: r,
              ease: "linear"
            }, "<");
            ScrollTrigger.create({
              trigger: ".section-hero",
              start: 1,
              end: "+=100%",
              scrub: 1,
              animation: i
            })
          }
        }
      });
      const e = document.getElementById("stickyImg");
      if (e) {
        const t = document.getElementById("stickyGap");
        const o = window.innerHeight;
        t.style.height = e.offsetHeight / 2 + "px";
        gsap.set("#stickyLeft", {
          paddingTop: (o - (e.offsetHeight + 60)) / 2 + "px"
        })
      }
    },
    initHome: function () {
      const e = document.querySelector(".home");
      if (!e) {
        return
      }
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          let e = document.querySelector(".section-hero__wrapper-inner").offsetWidth;
          let t = document.querySelector(".header").offsetHeight;
          let o = gsap.timeline();
          o.fromTo(".section-hero__wrapper-inner", {
            width: e
          }, {
            width: "100vw",
            ease: "linear"
          });
          ScrollTrigger.create({
            trigger: ".home-hero",
            start: 1,
            end: t,
            scrub: 1,
            animation: o
          })
        }
      });
      if (mql_lg.matches) {
        const e = 372;
        const t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const o = document.getElementById("sListSection");
        const r = document.getElementById("sList");
        const i = document.getElementById("sListWrapper");
        const n = Math.max(r.scrollHeight, r.clientHeight);
        const c = o.offsetHeight;
        const l = document.getElementById("sTopBar");
        document.getElementById("sListSizer").style.height = n + t / 2 + "px";
        document.getElementById("sListInner").style.height = c + "px";
        const s = document.querySelectorAll("#sList li");
        const a = document.getElementById("sListNav");
        locoScroll.on("scroll", t => {
          if (typeof t.currentElements["sListSizer"] === "object") {
            let o = t.currentElements["sListSizer"].progress;
            i.scrollTop = o * n;
            s.forEach(function (t) {
              if (t.offsetTop - e / 2 < i.scrollTop && t.offsetTop + 10 >= i.scrollTop) {
                t.classList.add("active");
                a.querySelector('[data-index="' + t.dataset.index + '"]').classList.add("active")
              } else {
                t.classList.remove("active");
                a.querySelector('[data-index="' + t.dataset.index + '"]').classList.remove("active")
              }
            });
            if (i.scrollTop > 4) {
              l.style.opacity = 1
            } else {
              l.style.opacity = 0
            }
          }
        })
      }
    },
    initTrust: function () {
      const e = document.querySelector(".trust");
      if (!e) {
        return
      }
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          let e = gsap.fromTo(".trust-blocks__bg", {
            width: "100%",
            height: "100%"
          }, {
            width: "calc(100% + 80px)",
            height: "calc(100% + 80px)",
            ease: "linear"
          });
          ScrollTrigger.create({
            trigger: ".trust-blocks",
            start: "top center",
            end: "top top",
            scrub: !0,
            animation: e
          })
        }
      })
    },
    initProduct: function () {
      const e = document.querySelector(".product");
      if (!e) {
        return
      }
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          if (document.querySelector(".product-panel")) {
            let e = gsap.timeline({});
            e.fromTo(".product-panel > div", {
              xPercent: -100,
              opacity: 0
            }, {
              xPercent: 0,
              opacity: 1,
              ease: "linear"
            });
            ScrollTrigger.create({
              trigger: ".product-panel",
              start: "top bottom",
              end: "top top",
              scrub: true,
              animation: e
            })
          }
          if (document.querySelector(".product-entry--accuracy")) {
            let e = gsap.timeline({});
            e.fromTo(".svg-acc__line", {
              scale: 0,
              transformOrigin: "center"
            }, {
              scale: 1,
              transformOrigin: "center",
              ease: "linear"
            });
            e.fromTo("#animAccuracyTitle", {
              fontSize: 60
            }, {
              fontSize: 80
            }, "<");
            e.fromTo(".svg-acc__l", {
              x: -50
            }, {
              x: 0
            }, "<");
            e.fromTo(".svg-acc__r", {
              x: 50
            }, {
              x: 0
            }, "<");
            ScrollTrigger.create({
              trigger: "#animAccuracy",
              start: "top bottom",
              end: "top top",
              scrub: true,
              animation: e
            })
          }
        }
      })
    },
    init: function () {
      this.setup();
      this.initShared();
      this.initHome();
      this.initTrust();
      this.initProduct();
      const e = document.querySelector(".section-hero");
      if (e) {
        const t = e.querySelector("video");
        if (t) {
          let o = t.play();
          if (o !== undefined) {
            o.then(() => {
              e.classList.add("js-video-start")
            }).catch(e => {
              console.log("autoplay error");
              if (e.name === "NotAllowedError") {} else {}
            })
          }
        }
      }
    }
  };
  e(document).ready(function () {
    AppAnimations.init()
  })
})(jQuery);