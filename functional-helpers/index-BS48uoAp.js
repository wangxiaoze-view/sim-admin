var X = Object.defineProperty;
var x0 = (n, e, x) => e in n ? X(n, e, { enumerable: !0, configurable: !0, writable: !0, value: x }) : n[e] = x;
var b = (n, e, x) => x0(n, typeof e != "symbol" ? e + "" : e, x);
import * as W from "fundebug-javascript";
import e0 from "fundebug-vue";
import { isString as Y, isEmpty as H } from "lodash-es";
import c from "dayjs";
import { ETimePeriodType as p, ELoggerColor as C } from "./enums/es/index.js";
import { useClipboard as t0, usePermission as n0 } from "@vueuse/core";
import r0 from "axios";
(function(n, e) {
  const x = m, t = n();
  for (; ; )
    try {
      if (parseInt(x(275)) / 1 + parseInt(x(265)) / 2 + -parseInt(x(276)) / 3 * (parseInt(x(294)) / 4) + -parseInt(x(283)) / 5 + parseInt(x(277)) / 6 + parseInt(x(270)) / 7 * (parseInt(x(288)) / 8) + parseInt(x(266)) / 9 * (parseInt(x(287)) / 10) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(E, 908276);
function s0(n) {
  const e = m;
  return Array.isArray(n) ? n : n[e(272)](",").filter((x) => x);
}
function y0(n) {
  return new Promise((e) => {
    const x = m, t = document[x(286)]("video");
    t[x(284)] = n, t[x(267)] = x(269), t[x(295)] = "auto", t[x(291)] = 0.1, t[x(293)]("loadeddata", () => {
      var a;
      const r = x, s = document[r(286)](r(299));
      s[r(268)] = t[r(274)], s[r(280)] = t.videoHeight, (a = s[r(296)]("2d")) == null || a[r(297)](t, 0, 0, s.width, s.height), e(s[r(290)]());
    });
  });
}
function E() {
  const n = ["4475205SKnYhq", "src", "charCodeAt", "createElement", "2367910SLsaHC", "264THJfmd", "?x-oss-process=image/resize,w_", "toDataURL", "currentTime", "from", "addEventListener", "88GUBatp", "preload", "getContext", "drawImage", "isPdf", "canvas", ",limit_0/quality,q_", "isZip", "image", "filter", "isDocs", "length", "1082078pBDtxT", "45gdjeDR", "crossOrigin", "width", "anonymous", "80703zJIWSU", "?imageView2/2/w/", "split", ";base64,", "videoWidth", "459526tcthqZ", "173379iSdasG", "3058716FEpUZB", ",h_", "indexOf", "height", "oss-cn", "isExcel"];
  return E = function() {
    return n;
  }, E();
}
function v0(n, e = 200, x = 200, t = 75) {
  const r = m;
  return n ? n[r(279)](r(281)) !== -1 ? n + r(289) + e + r(278) + x + r(300) + t : n + r(271) + e + "/h/" + x + "/q/" + t : "";
}
function w0(n, e = "") {
  const x = m, t = n.split(x(273)), r = t[0][x(272)](":")[1], s = atob(t[1]), a = Array[x(292)]({ length: s.length });
  for (let _ = 0; _ < s[x(264)]; _++)
    a[_] = s[x(285)](_);
  const o = new Uint8Array(a);
  return new File([o], e, { type: r });
}
function m(n, e) {
  const x = E();
  return m = function(t, r) {
    return t = t - 264, x[t];
  }, m(n, e);
}
function T0(n, e) {
  const x = m;
  Y(n) && (n = s0(n));
  const t = n[x(303)]((r) => {
    const s = x, a = Y(r) ? r : r.url;
    if (e === s(302)) return a0(a);
    if (e === "video") return c0(a);
    if (e === s(282)) return o0(a);
    if (e === s(304)) return i0(a);
    if (e === s(298)) return f0(a);
    if (e === s(301)) return u0(a);
  });
  return [t, t[x(264)]];
}
const v = w;
(function(n, e) {
  const x = w, t = n();
  for (; ; )
    try {
      if (parseInt(x(524)) / 1 * (parseInt(x(512)) / 2) + parseInt(x(493)) / 3 + -parseInt(x(513)) / 4 + parseInt(x(517)) / 5 + -parseInt(x(494)) / 6 * (-parseInt(x(520)) / 7) + parseInt(x(529)) / 8 * (parseInt(x(509)) / 9) + parseInt(x(496)) / 10 * (-parseInt(x(492)) / 11) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(A, 312029);
function S0() {
  const n = w, e = c(), x = e[n(506)](), t = e[n(495)]() + 1, r = e[n(521)](), s = e[n(526)](), a = e.minute(), o = e[n(504)](), _ = e[n(528)]();
  return { year: x, month: t, day: r, hour: s, minute: a, second: o, week: _, weekName: ["日", "一", "二", "三", "四", "五", "六"] };
}
function y(n = /* @__PURE__ */ new Date(), e = v(505)) {
  return c(n).format(e);
}
function D(n = v(499)) {
  const e = v, x = [], t = c()[e(495)]() + 1;
  return t <= 3 ? x.push({ name: "本季度", start: c()[e(495)](0).startOf("month")[e(519)](n), end: c()[e(495)](2)[e(523)](e(495))[e(519)](n) }, { name: e(508), start: c().add(-1, e(506))[e(495)](9)[e(518)](e(495)).format(n), end: c()[e(522)](-1, e(506))[e(495)](11)[e(523)](e(495)).format(n) }) : t <= 6 ? x[e(498)]({ name: "本季度", start: c()[e(495)](3)[e(518)]("month")[e(519)](n), end: c()[e(495)](5).endOf(e(495))[e(519)](n) }, { name: e(508), start: c()[e(495)](0)[e(518)]("month")[e(519)](n), end: c()[e(495)](2)[e(523)](e(495)).format(n) }) : t <= 9 ? x[e(498)]({ name: e(527), start: c()[e(495)](6)[e(518)](e(495))[e(519)](n), end: c()[e(495)](8).endOf(e(495))[e(519)](n) }, { name: "上季度", start: c()[e(495)](3)[e(518)](e(495))[e(519)](n), end: c()[e(495)](5)[e(523)](e(495)).format(n) }) : t <= 12 && x[e(498)]({ name: "本季度", start: c()[e(495)](9)[e(518)](e(495))[e(519)](n), end: c().month(11)[e(523)](e(495))[e(519)](n) }, { name: e(508), start: c()[e(495)](6)[e(518)](e(495))[e(519)](n), end: c()[e(495)](8).endOf(e(495))[e(519)](n) }), x;
}
function w(n, e) {
  const x = A();
  return w = function(t, r) {
    return t = t - 492, x[t];
  }, w(n, e);
}
function A() {
  const n = ["week", "second", "YYYY-MM-DD HH:mm:ss", "year", "start", "上季度", "260208tHxWgM", "end", "lastQuarter", "254LVyVXg", "1254900QAfQPv", "lastOneYear", "lastOneMonth", "lastThreeMonth", "1008125zGFAQr", "startOf", "format", "504lMJoUJ", "date", "add", "endOf", "517KZhVMY", "lastWeek", "hour", "本季度", "day", "168ZSMxzk", "11LSwgpS", "1771998lhhHNT", "48822gjlmLB", "month", "14252120msJBdL", "subtract", "push", "YYYY-MM-DD", "nearQuarter", "nearYear", "nearMonth"];
  return A = function() {
    return n;
  }, A();
}
function k0(n, e = v(499)) {
  const x = v;
  switch (n) {
    case p[x(515)]:
      return { startTime: c()[x(497)](30, x(528))[x(519)](e), endTime: y(/* @__PURE__ */ new Date(), e) };
    case p[x(516)]:
      return { startTime: c()[x(497)](90, x(528))[x(519)](e), endTime: y(/* @__PURE__ */ new Date(), e) };
    case p[x(514)]:
      return { startTime: c()[x(497)](365, x(528))[x(519)](e), endTime: y(/* @__PURE__ */ new Date(), e) };
    case p[x(525)]:
      return { startTime: c()[x(522)](-1, x(503))[x(518)]("week")[x(522)](1, x(528))[x(519)](e), endTime: c()[x(522)](-1, x(503))[x(523)](x(503))[x(522)](1, "day").format(e) };
    case p.lastMonth:
      return { startTime: c().add(-1, x(495))[x(518)]("month")[x(519)](e), endTime: c()[x(522)](-1, "month")[x(523)](x(495)).format(e) };
    case p[x(511)]:
      return { startTime: D(e)[1][x(507)], endTime: D(e)[1][x(510)] };
    case p.lastYear:
      return { startTime: c()[x(522)](-1, "year")[x(518)](x(506))[x(519)](e), endTime: c()[x(522)](-1, x(506))[x(523)]("year")[x(519)](e) };
    case p.nearWeek:
      return { startTime: c()[x(518)](x(503))[x(522)](1, x(528))[x(519)](e), endTime: c()[x(523)](x(503))[x(522)](1, x(528))[x(519)](e) };
    case p[x(502)]:
      return { startTime: c().startOf("month")[x(519)](e), endTime: c()[x(523)](x(495)).format(e) };
    case p[x(500)]:
      return { startTime: D(e)[0][x(507)], endTime: D(e)[0][x(510)] };
    case p[x(501)]:
      return { startTime: c()[x(518)](x(506))[x(519)](e), endTime: c()[x(523)](x(506))[x(519)](e) };
    default:
      return { startTime: c()[x(497)](30, x(528))[x(519)](e), endTime: y(/* @__PURE__ */ new Date(), e) };
  }
}
const l = I;
(function(n, e) {
  const x = I, t = n();
  for (; ; )
    try {
      if (-parseInt(x(144)) / 1 * (parseInt(x(169)) / 2) + parseInt(x(131)) / 3 + -parseInt(x(170)) / 4 + -parseInt(x(158)) / 5 * (-parseInt(x(136)) / 6) + -parseInt(x(150)) / 7 * (parseInt(x(121)) / 8) + parseInt(x(160)) / 9 + parseInt(x(123)) / 10 * (parseInt(x(152)) / 11) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(z, 470128);
function z() {
  const n = ["488UQAEii", "debug", `font-size: 1px;
                padding: `, "width", "background:", " %c", "28ZvoWCy", "%c ", "275yPedSb", "onload", "Debug", "Log", `px;
                color: transparent;
                `, "img", "54235IVvxEF", `px;
                background-image: url(`, "1207827tXqpwA", "height", "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;", "anonymous", "replace", "default", "prettyLog", "red", "Warn", "1244MJasda", "1989352uxZLcl", "border:1px solid ", "log", "getContext", "1765392ECjtSz", "split", "609060TbzgdT", "info", "createElement", "match", "warn", " %c ", `);
                background-repeat: no-repeat;
                background-size: `, "stack", "1327830AEYhUu", "init", "danger", "Error", "toDataURL", "30PJEhzP", "; padding: 1px; border-radius: 0 2px 2px 0; color: ", ";border:1px solid ", "floor", "px ", "background:transparent", "fillRect", "error"];
  return z = function() {
    return n;
  }, z();
}
function I(n, e) {
  const x = z();
  return I = function(t, r) {
    return t = t - 120, x[t];
  }, I(n, e);
}
class h {
  constructor() {
  }
  static prettyLog(e, x, t) {
    const r = I;
    console[r(172)](r(151) + e + r(128) + x + r(149), r(148) + t + r(138) + t + r(162), r(171) + t + r(137) + t + ";", r(141));
  }
  static logCaller() {
    var a;
    const e = I, x = new Error(), t = ((a = x[e(130)]) == null ? void 0 : a.split(`
`)) || [], r = (t[1] || "")[e(164)](/^\(|\)$/, "").trim(), s = r[e(126)](/^(.*):(\d+):(\d+)$/);
    return s ? s[0][e(122)]("/").pop() : "";
  }
  static [l(132)](e, x, t) {
    const r = H(x) ? t : e, s = H(x) ? e : x;
    return { _title: r, _text: s };
  }
  log(e, x = "") {
    const t = l, { _title: r, _text: s } = h[t(132)](e, x, t(155));
    h[t(166)](r, s, C[t(124)]);
  }
  [l(143)](e, x = "") {
    const t = l, { _title: r, _text: s } = h[t(132)](e, x, t(134));
    h.prettyLog(r, s, C[t(133)]);
  }
  [l(127)](e, x = "") {
    const t = l, { _title: r, _text: s } = h[t(132)](e, x, t(168));
    h[t(166)](r, s, C.warning);
  }
  [l(145)](e = "") {
    const x = l;
    h[x(166)]("[" + y() + "]", e || x(154), C[x(165)]);
  }
  [l(157)](e, x = 1) {
    const t = l, r = new Image();
    r.crossOrigin = t(163), r[t(153)] = () => {
      const s = t, a = document[s(125)]("canvas"), o = a[s(120)]("2d");
      if (o) {
        a[s(147)] = r[s(147)], a.height = r[s(161)], o.fillStyle = s(167), o[s(142)](0, 0, a[s(147)], a[s(161)]), o.drawImage(r, 0, 0);
        const _ = a[s(135)]("image/png");
        console[s(172)]("%c sup?", s(146) + Math[s(139)](r[s(161)] * x / 2) + s(140) + Math.floor(r[s(147)] * x / 2) + s(159) + _ + s(129) + r.width * x + s(140) + r.height * x + s(156));
      }
    }, r.src = e;
  }
}
const T = new h();
(function(n, e) {
  const x = i, t = n();
  for (; ; )
    try {
      if (-parseInt(x(167)) / 1 + -parseInt(x(157)) / 2 * (parseInt(x(160)) / 3) + -parseInt(x(173)) / 4 * (-parseInt(x(161)) / 5) + -parseInt(x(159)) / 6 * (-parseInt(x(151)) / 7) + parseInt(x(153)) / 8 * (parseInt(x(169)) / 9) + parseInt(x(162)) / 10 + parseInt(x(172)) / 11 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(L, 273161);
function i(n, e) {
  const x = L();
  return i = function(t, r) {
    return t = t - 150, x[t];
  }, i(n, e);
}
function C0(n) {
  return /\.(doc|docx|xls|xlsx|ppt|pptx|pdf|txt|zip|rar|7z|gz|bz2|tar|iso|apk|mp3|mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/.test(n);
}
function a0(n) {
  return /\.(png|jpg|jpeg|gif|bmp|webp|svg|ico)$/.test(n);
}
function c0(n) {
  return /\.(mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[i(155)](n);
}
function o0(n) {
  return /\.(xls|xlsx|csv)$/[i(155)](n);
}
function i0(n) {
  return /\.(doc|docx)$/.test(n);
}
function f0(n) {
  return /\.(pdf)$/.test(n);
}
function u0(n) {
  return /\.(zip|rar|7z|tar|iso|apk)$/[i(155)](n);
}
function D0(n) {
  return /^(https?:|mailto:|tel:)/[i(155)](n);
}
function E0() {
  const n = i, e = navigator[n(152)];
  return e[n(156)](n(150)) > -1 || e[n(156)](n(171)) > -1;
}
function A0() {
  const n = i;
  return !!navigator[n(152)][n(174)](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function z0(n) {
  return /^1[3456789]\d{9}$/[i(155)](n);
}
function L0(n) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n);
}
function J0(n) {
  return /^[\u4e00-\u9fa5]+$/[i(155)](n);
}
function U0(n) {
  return /^[a-zA-Z]+$/[i(155)](n);
}
function Z0(n) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/[i(155)](n);
}
function M0(n) {
  return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/[i(155)](n);
}
function O0(n) {
  return /^[a-z]+$/[i(155)](n);
}
function $0(n) {
  return /^[A-Z]+$/[i(155)](n);
}
function P0(n) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/[i(155)](n);
}
function q0(n) {
  const e = i;
  if (typeof n == e(165)) try {
    const x = JSON[e(166)](n);
    return !!(typeof x == e(164) && x);
  } catch (x) {
    return console[e(158)](e(168) + x), !1;
  }
  return !1;
}
function N0() {
  const n = i;
  return window[n(170)] || typeof SpeechSynthesisUtterance !== n(154);
}
function V0() {
  const n = i;
  return n(163) in window || typeof WebSocket !== n(154);
}
function F0(n) {
  return /^\S*(?=\S{5,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/[i(155)](n);
}
const W0 = (n) => /^(https?:|mailto:|tel:|\/\/)/[i(155)](n);
function L() {
  const n = ["test", "indexOf", "26KPyUZW", "log", "318KZPDHM", "106950kvfxIQ", "15GQsCtH", "2633420WiAxBx", "WebSocket", "object", "string", "parse", "526087QVzjYh", "error:", "171WJLDcy", "SpeechSynthesisUtterance", "Adr", "3631155JNqJeG", "386704ZtLvjx", "match", "Android", "23338GPSnHS", "userAgent", "85272ViOfWp", "function"];
  return L = function() {
    return n;
  }, L();
}
const f = J;
(function(n, e) {
  const x = J, t = n();
  for (; ; )
    try {
      if (-parseInt(x(275)) / 1 + parseInt(x(296)) / 2 + parseInt(x(297)) / 3 + -parseInt(x(293)) / 4 + -parseInt(x(303)) / 5 * (-parseInt(x(300)) / 6) + -parseInt(x(285)) / 7 * (-parseInt(x(272)) / 8) + parseInt(x(277)) / 9 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(U, 599921);
const j = 60 * 60 * 24 * 30;
function J(n, e) {
  const x = U();
  return J = function(t, r) {
    return t = t - 272, x[t];
  }, J(n, e);
}
function U() {
  const n = ["954768bDXNDc", "split", "remove", "986763dIhglw", "removeCookie", "6980409DNtNFq", "cookie", "storage", "toUTCString", "removeItem", "clearCookie", "prefixKey", "=;expire=", "28vdqVkV", "Failed to copy text.", "stringify", "getKey", "toExponential", "match", "clear", "setItem", "4077064CfyPjF", "getCookie", "getItem", "321604aVqkQJ", "2747643GcDenV", "isLogger", "get", "1657692VEcUBU", "; Max-Age=", "setCookie", "5mCZzec", "getTime"];
  return U = function() {
    return n;
  }, U();
}
var B;
class d0 {
  constructor(e = "", x = localStorage) {
    b(this, "prefixKey");
    b(this, B);
    const t = f;
    this[t(283)] = e, this[t(279)] = x;
  }
  [(B = f(279), f(288))](e) {
    return "" + this.prefixKey + e;
  }
  set(e, x, t = j) {
    const r = f, s = JSON[r(287)]({ value: x, expire: t !== null ? (/* @__PURE__ */ new Date())[r(304)]() + t * 1e3 : null });
    this[r(279)][r(292)](this[r(288)](e), s);
  }
  [f(299)](e, x) {
    const t = f, r = this[t(279)][t(295)](this[t(288)](e));
    if (r) try {
      const s = JSON.parse(r), { value: a, expire: o } = s;
      if (o === null || o >= Date.now()) return a;
      this[t(274)](this[t(288)](e));
    } catch (s) {
      return k[t(298)] && T.error(t(286), JSON[t(287)](s)), x;
    }
    return x;
  }
  [f(274)](e) {
    const x = f;
    this[x(279)][x(281)](this[x(288)](e));
  }
  [f(291)]() {
    this[f(279)].clear();
  }
  [f(302)](e, x, t = j[f(289)]) {
    const r = f;
    document[r(278)] = this.getKey(e) + "=" + x + r(301) + t;
  }
  [f(294)](e) {
    const x = f, t = document[x(278)][x(273)]("; ");
    for (let r = 0, s = t.length; r < s; r++) {
      const a = t[r][x(273)]("=");
      if (a[0] === this[x(288)](e)) return a[1];
    }
    return "";
  }
  [f(276)](e) {
    this[f(302)](e, "", -1);
  }
  [f(282)]() {
    const e = f, x = document[e(278)][e(290)](/[^ =;]+(?==)/g);
    if (x) for (let t = x.length; t--; )
      document.cookie = x[t] + e(284) + (/* @__PURE__ */ new Date(0))[e(280)]();
  }
}
const Y0 = new d0();
(function(n, e) {
  const x = S, t = n();
  for (; ; )
    try {
      if (-parseInt(x(502)) / 1 * (parseInt(x(477)) / 2) + parseInt(x(499)) / 3 + -parseInt(x(498)) / 4 + -parseInt(x(486)) / 5 * (-parseInt(x(496)) / 6) + parseInt(x(487)) / 7 + -parseInt(x(488)) / 8 + -parseInt(x(482)) / 9 * (-parseInt(x(500)) / 10) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Z, 702983);
function S(n, e) {
  const x = Z();
  return S = function(t, r) {
    return t = t - 477, x[t];
  }, S(n, e);
}
function Z() {
  const n = ["appendChild", "replace", "select", "48540ExBiQX", "4875703ikHHFa", "6734784fAsvTz", "isLogger", "then", "wss://", "body", "removeChild", "clipboard", "http://", "42HbvHqJ", "copy", "2269628GaXMyN", "4017030jbMknT", "211390SLDzds", "stringify", "1axaxfY", "error", "2561472jpIgDw", "execCommand", "setAttribute", "Failed to copy text.", "input", "549rDyRJL"];
  return Z = function() {
    return n;
  }, Z();
}
function H0(n) {
  const e = S, { text: x, success: t, error: r } = n, { isSupported: s, copy: a } = t0({ source: x });
  if (s || n0("clipboard-write"), navigator[e(494)]) a(x)[e(490)](() => {
    t && t();
  }).catch(() => {
    r && r();
  });
  else try {
    const o = document.createElement(e(481));
    o[e(479)]("value", x), document[e(492)][e(483)](o), o[e(485)](), document[e(478)](e(497)), document[e(492)][e(493)](o), t && t();
  } catch (o) {
    k[e(489)] && T[e(503)](e(480), JSON[e(501)](o)), r && r();
  }
}
function j0(n) {
  const e = S;
  return n[e(484)](/^(http|https):\/\//, (x) => x === e(495) ? "ws://" : e(491));
}
function M() {
  const n = ["5262385bqoyOU", "split", "23317776PucwGt", "replace", "2420892tCDTBg", "1762423EAuyJU", "11536840eKrLcH", "6XTbhwI", "1130793XlzxwW", "length", "6013952CHZqgZ"];
  return M = function() {
    return n;
  }, M();
}
(function(n, e) {
  const x = O, t = n();
  for (; ; )
    try {
      if (-parseInt(x(350)) / 1 + -parseInt(x(352)) / 2 * (-parseInt(x(342)) / 3) + -parseInt(x(344)) / 4 + -parseInt(x(345)) / 5 + -parseInt(x(349)) / 6 + parseInt(x(351)) / 7 + parseInt(x(347)) / 8 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(M, 971765);
function O(n, e) {
  const x = M();
  return O = function(t, r) {
    return t = t - 342, x[t];
  }, O(n, e);
}
function B0(n) {
  const e = O, x = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"], t = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "万", "十", "百", "千", "亿"];
  if (!n || isNaN(Number(n))) return "零";
  const r = n.toString()[e(346)]("");
  let s = "";
  for (let a = 0; a < r[e(343)]; a++) {
    const o = r[e(343)] - 1 - a;
    s = t[a] + s;
    const _ = r[o];
    s = x[Number(_)] + s;
  }
  return s = s[e(348)](/零(千|百|十)/g, "零")[e(348)](/十零/g, "十"), s = s.replace(/零+/g, "零"), s = s[e(348)](/零亿/g, "亿")[e(348)](/零万/g, "万"), s = s[e(348)](/亿万/g, "亿"), s = s[e(348)](/零+$/, ""), s = s[e(348)](/^一十/g, "十"), s;
}
const u = P;
function $() {
  const n = ["instance", "3GMUSbe", "interceptorsResponse", "16561368BvxfKL", "isLogger", "9AizzBa", "get", "466151KAFMpu", "request", "assign", "2vTEYPL", "put", "522097uZFdlf", "105295ApmsYG", "4955208nSJeZZ", "post", "create", "use", "257224tLENju", "Request instance has been created.", "1041464resuMm", "66vRlLsb", "interceptorsRequest", "10wSDATr", "interceptors"];
  return $ = function() {
    return n;
  }, $();
}
(function(n, e) {
  const x = P, t = n();
  for (; ; )
    try {
      if (-parseInt(x(277)) / 1 * (parseInt(x(275)) / 2) + -parseInt(x(291)) / 3 * (-parseInt(x(285)) / 4) + parseInt(x(278)) / 5 * (-parseInt(x(286)) / 6) + parseInt(x(297)) / 7 + -parseInt(x(279)) / 8 * (parseInt(x(295)) / 9) + parseInt(x(288)) / 10 * (-parseInt(x(283)) / 11) + parseInt(x(293)) / 12 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})($, 310542);
function P(n, e) {
  const x = $();
  return P = function(t, r) {
    return t = t - 273, x[t];
  }, P(n, e);
}
var G;
class G0 {
  constructor(e) {
    b(this, G, null);
    b(this, "baseConfig", { baseURL: "", timeout: 6e4 });
    const x = u;
    this[x(290)] ? k[x(294)] && T.error(x(284)) : this[x(290)] = r0[x(281)](Object[x(274)](this.baseConfig, e ?? {}));
  }
  [(G = u(290), u(287))](e, x) {
    const t = u;
    this[t(290)][t(289)][t(273)][t(282)]((r) => e ? e(r) : r, (r) => x ? x(r) : r);
  }
  [u(292)](e, x) {
    const t = u;
    this[t(290)][t(289)].response[t(282)]((r) => {
      const { data: s } = r;
      return e ? e(s) : s;
    }, (r) => x ? x(r) : r);
  }
  [u(273)](e) {
    const x = u;
    return this.instance[x(273)](e);
  }
  [u(296)](e, x) {
    return this.instance.get(e, x);
  }
  post(e, x, t) {
    const r = u;
    return this.instance[r(280)](e, x, t);
  }
  [u(276)](e, x, t) {
    const r = u;
    return this[r(290)][r(276)](e, x, t);
  }
  delete(e, x) {
    return this[u(290)].delete(e, x);
  }
}
(function(n, e) {
  for (var x = F, t = n(); ; )
    try {
      var r = parseInt(x(351)) / 1 * (parseInt(x(355)) / 2) + -parseInt(x(349)) / 3 + parseInt(x(357)) / 4 * (parseInt(x(356)) / 5) + -parseInt(x(352)) / 6 + -parseInt(x(350)) / 7 + parseInt(x(358)) / 8 * (parseInt(x(353)) / 9) + parseInt(x(354)) / 10;
      if (r === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(q, 130467);
function q() {
  var n = ["4637280GeWpuU", "670cmJhwZ", "20IZkNjW", "163040RLcglm", "452624daSJXc", "773349JENgUd", "1377838MZyJSn", "349cAiVuQ", "1291062hFZEBq", "9lGKkdE"];
  return q = function() {
    return n;
  }, q();
}
function F(n, e) {
  var x = q();
  return F = function(t, r) {
    t = t - 349;
    var s = x[t];
    return s;
  }, F(n, e);
}
function N() {
  const n = ["init", "includes", "4BJLDHE", "error", "601668qfNsqH", "isLogger", "406605etkmxd", "8587864aRoAAd", "719684BRimYj", "8746722gkPzhf", "vue版本不支持, 目前只支持vue: >= v2 || >= v3", "installFundebugVue", "196875OmIggs", "288KWJsvx", "vueVersion", "isDebug", "2806710GPdfZm", "apikey 不能为空， 请在环境变量中配置"];
  return N = function() {
    return n;
  }, N();
}
function V(n, e) {
  const x = N();
  return V = function(t, r) {
    return t = t - 132, x[t];
  }, V(n, e);
}
const g = V;
(function(n, e) {
  const x = V, t = n();
  for (; ; )
    try {
      if (parseInt(x(134)) / 1 * (-parseInt(x(132)) / 2) + parseInt(x(146)) / 3 + -parseInt(x(138)) / 4 + -parseInt(x(136)) / 5 + -parseInt(x(143)) / 6 * (-parseInt(x(142)) / 7) + -parseInt(x(137)) / 8 + parseInt(x(139)) / 9 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(N, 719367);
var K, R, Q;
const d = class d {
  constructor(e) {
    const x = g, { isLogger: t, isDebug: r, vueVersion: s = "v3", apikey: a, install: o } = e;
    d.isLogger = t ?? !1, d[x(145)] = r ?? !1, d.vueVersion = s ?? "v3", this[x(141)](a) && o && o(this[x(141)](a));
  }
  [(Q = g(135), R = g(145), K = g(144), g(141))](e) {
    const x = g;
    return d[x(145)] ? e ? ["v2", "v3"][x(149)](d[x(144)]) ? (W[x(148)]({ apikey: e }), new e0(W)) : (d[x(135)] && T[x(133)](x(140)), null) : (d[x(135)] && T.error(x(147)), null) : null;
  }
};
b(d, Q), b(d, R), b(d, K);
let k = d;
export {
  U0 as A,
  Z0 as B,
  M0 as C,
  O0 as D,
  $0 as E,
  P0 as F,
  q0 as G,
  F0 as H,
  k as I,
  W0 as J,
  H0 as K,
  B0 as L,
  G0 as R,
  Y0 as S,
  N0 as a,
  V0 as b,
  s0 as c,
  y0 as d,
  v0 as e,
  w0 as f,
  y as g,
  j0 as h,
  A0 as i,
  T0 as j,
  S0 as k,
  T as l,
  D as m,
  k0 as n,
  C0 as o,
  a0 as p,
  c0 as q,
  o0 as r,
  i0 as s,
  f0 as t,
  u0 as u,
  D0 as v,
  E0 as w,
  z0 as x,
  L0 as y,
  J0 as z
};
