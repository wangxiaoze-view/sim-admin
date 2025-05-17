var J = Object.defineProperty;
var j = (x, n, e) => n in x ? J(x, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : x[n] = e;
var q = (x, n, e) => j(x, typeof n != "symbol" ? n + "" : n, e);
import { ref as S } from "vue";
import { I as V, i as B, l as h, a as G, h as Z, b as K, g as y } from "../../index-BS48uoAp.js";
import N from "currency.js";
import R from "ali-oss";
import { isObject as Q } from "lodash-es";
import X from "mitt";
export * from "@vueuse/core";
(function(x, n) {
  const e = m, t = x();
  for (; ; )
    try {
      if (parseInt(e(182)) / 1 * (-parseInt(e(174)) / 2) + parseInt(e(173)) / 3 * (-parseInt(e(183)) / 4) + parseInt(e(184)) / 5 + -parseInt(e(175)) / 6 + -parseInt(e(185)) / 7 * (-parseInt(e(178)) / 8) + -parseInt(e(179)) / 9 * (parseInt(e(181)) / 10) + -parseInt(e(176)) / 11 * (-parseInt(e(177)) / 12) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(k, 814131);
function k() {
  const x = ["261550KuZMSO", "63150VGvBCl", "6496604rYOXoj", "2507095gFdJzU", "8893395PxSPez", "3UfrWiz", "14fcmpwf", "7265592dDhadD", "1177SlvVqh", "345180ZCqQaz", "8VUzqkS", "261moCIcH", "value"];
  return k = function() {
    return x;
  }, k();
}
function m(x, n) {
  const e = k();
  return m = function(t, r) {
    return t = t - 173, e[t];
  }, m(x, n);
}
function o0(x = !1, n) {
  const e = S(x), t = S(n || "");
  return { loading: e, loadingText: t, setLoading: (a) => {
    const c = m;
    e[c(180)] = a;
  }, toggleLoading: () => {
    const a = m;
    e[a(180)] = !e[a(180)];
  }, setLoadingText: (a) => {
    const c = m;
    t[c(180)] = a;
  } };
}
function z() {
  const x = ["nav://tel", "8WEnIdB", "4478058zwJRiC", "nav://uploadVideo", "color", "download", "16364817lNLEJx", "#00f", "orderDetailsId", "105jUzgBt", "url", "contactAddressLat", "goto", "title", "debug", "stringify", "nav://orderDetail", "nav://savePicture", "nav://notifyOrderDetailRefresh", "phone", "nav://wechatCustomer", "nav://goBail", "8415678vXxjSP", "订单详情", "webkit", "isLogger", "nav://goSetWorkerState", "showCamera", "7bNncEL", "contactAddressLng", "3846139yUGLOh", "address", "986142iwpNlK", "nav://login", "41084ZLjTts", "size", "nav://uploadImage", "nav://goIdcardUpload", "navShouldHidden", "20UzIzPx", "nav://product", "orderNum", "app交互的参数：", "show", "nav://uploadVoice", "nav://gotoNavigate", "2313646FnwZPf"];
  return z = function() {
    return x;
  }, z();
}
(function(x, n) {
  const e = D, t = x();
  for (; ; )
    try {
      if (-parseInt(e(359)) / 1 + parseInt(e(373)) / 2 + -parseInt(e(376)) / 3 + parseInt(e(361)) / 4 * (-parseInt(e(383)) / 5) + -parseInt(e(396)) / 6 * (-parseInt(e(355)) / 7) + parseInt(e(375)) / 8 * (parseInt(e(380)) / 9) + -parseInt(e(366)) / 10 * (parseInt(e(357)) / 11) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(z, 983932);
function D(x, n) {
  const e = z();
  return D = function(t, r) {
    return t = t - 353, e[t];
  }, D(x, n);
}
function c0() {
  const x = D, n = V[x(399)], e = (o) => {
    const s = x;
    try {
      B() && window[s(398)].messageHandlers[s(365)].postMessage(o), n && h[s(388)](s(369) + JSON[s(389)](o));
    } catch (a) {
      n && h.error("app交互异常：", JSON[s(389)](a));
    }
  };
  return { goAppPage: (o, s) => {
    const a = x, c = { goOrderDetail: () => ({ type: a(386), url: a(390), title: s.title || a(397), data: { actionType: 1, orderDetailsId: s.orderDetailsId || "", ...s } }), callPhone: () => ({ type: a(386), url: a(374), data: { actionType: 1, phone: s[a(393)] || "" } }), gotoNavigate: () => ({ type: a(386), url: a(372), data: { contactAddressLat: s[a(385)] || "", contactAddressLng: s[a(356)] || "", address: s[a(358)] || "", ...s } }), goBail: () => ({ type: a(386), url: a(395) }), updateOrderDetails: () => ({ type: "goto", url: a(392), data: {} }), upLoadVideo: () => ({ type: "goto", url: a(377), data: {} }), upLoadImg: () => ({ type: a(386), url: a(363), data: { actionType: 1, photoCount: s[a(362)] || 4, showCamera: s[a(354)] ?? !0 } }), downloadImg: () => ({ type: a(386), url: a(391), data: { imgUrl: s[a(384)] } }), navHead: () => ({ type: "navHead", headSetting: { show: s[a(370)] ?? !0, color: s[a(378)] || a(381) } }), goto: (u) => ({ type: a(386), title: (u == null ? void 0 : u[a(387)]) || s[a(387)] || "", url: (u == null ? void 0 : u[a(384)]) || s[a(384)] }), login: () => {
      const u = a;
      return c.goto({ title: "登录", url: u(360) });
    }, customerService: () => ({ type: a(386), url: a(394), data: { orderDetailsId: s[a(382)], orderNum: s[a(368)] } }), gotoProduct: () => ({ type: "goto", url: a(367), data: { friendUserId: s.info } }), download: () => ({ type: a(379), url: s[a(384)] }), appVoice: () => ({ type: "goto", url: a(371), data: {} }), addOrderMemo: () => ({ type: a(386), url: "nav://addOrderMemo", data: { orderDetailsId: s.id, abnormalCause: s.value, ...s } }), editOrderMemo: () => ({ type: a(386), url: "nav://editOrderMemo", data: { orderDetailsId: s.id, abnormalCause: s.value, ...s } }), goHome: () => ({ type: a(386), url: "nav://0" }), goSetWorkerState: () => ({ type: a(386), url: a(353) }), goIdCardUpload: () => ({ type: a(386), url: a(364) }) };
    if (!c[o]) return;
    const w = c[o]();
    e(w);
  }, customGoAppPage: (o) => {
    e(o);
  } };
}
function L() {
  const x = ["1381850zQAEff", "1555BdzJPs", "5600490htploh", "toString", "2047293ucNzUb", "543786uMbWfN", "value", "6671160UClFHd", "1987792NcOzmn", "4CkuPKx", "3810ELVNPJ"];
  return L = function() {
    return x;
  }, L();
}
function C(x, n) {
  const e = L();
  return C = function(t, r) {
    return t = t - 421, e[t];
  }, C(x, n);
}
(function(x, n) {
  const e = C, t = x();
  for (; ; )
    try {
      if (-parseInt(e(427)) / 1 + parseInt(e(422)) / 2 + -parseInt(e(426)) / 3 * (parseInt(e(431)) / 4) + parseInt(e(423)) / 5 * (-parseInt(e(421)) / 6) + parseInt(e(424)) / 7 + -parseInt(e(430)) / 8 + parseInt(e(429)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(L, 560059);
function i0() {
  return { arithmetic: (r, o, s) => {
    const a = C, c = N(o)[r](s || 0);
    return { number: c[a(428)], string: c[a(425)]() };
  }, toString: (r) => N(r).toString(), toNumber: (r) => {
    const o = C;
    return N(r)[o(428)];
  }, custom: (r, o = {}) => N(r, o) };
}
(function(x, n) {
  const e = T, t = x();
  for (; ; )
    try {
      if (parseInt(e(384)) / 1 + -parseInt(e(377)) / 2 + parseInt(e(378)) / 3 + -parseInt(e(390)) / 4 + parseInt(e(387)) / 5 + -parseInt(e(381)) / 6 + -parseInt(e(388)) / 7 * (-parseInt(e(383)) / 8) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(P, 344571);
function P() {
  const x = ["onend", "speak", "512900rVZtAP", "219675OMHGQQ", "text", "speechRate", "3981408rWRuci", "speechSynthesis", "7864VbFoaa", "19494RZuofg", "volume", "pitch", "2297730NGWTzi", "8407AeWCRl", "endCallback", "1873036USnsWT", "zh-CN", "startCallback"];
  return P = function() {
    return x;
  }, P();
}
function T(x, n) {
  const e = P();
  return T = function(t, r) {
    return t = t - 373, e[t];
  }, T(x, n);
}
function u0() {
  function x(n) {
    const e = T;
    if (!G() || !n.text) return !1;
    const t = new SpeechSynthesisUtterance();
    return t[e(379)] = n.text, t.rate = n[e(380)] || 1, t.lang = n.lang || e(373), t[e(385)] = n[e(385)] || 1, t[e(386)] = n[e(386)] || 1, t[e(375)] = function() {
      const r = e;
      n[r(389)] && n[r(389)]();
    }, t.onstart = function() {
      const r = e;
      n[r(374)] && n[r(374)]();
    }, window[e(382)][e(376)](t), t;
  }
  return { speak: x };
}
(function(x, n) {
  const e = U, t = x();
  for (; ; )
    try {
      if (parseInt(e(190)) / 1 * (-parseInt(e(182)) / 2) + parseInt(e(194)) / 3 + parseInt(e(192)) / 4 + parseInt(e(191)) / 5 + parseInt(e(187)) / 6 + parseInt(e(185)) / 7 * (-parseInt(e(181)) / 8) + parseInt(e(179)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(M, 954005);
function U(x, n) {
  const e = M();
  return U = function(t, r) {
    return t = t - 176, e[t];
  }, U(x, n);
}
function M() {
  const x = ["ws runing... ", "744705ZGdGVn", "data", "debug", "ws error... ", "10292022NoaMVp", "isLogger", "496ibEZsl", "14vIOcfh", "stringify", "ping", "206542NvSAok", "value", "7428408Xfrmhb", "pong", "onclose", "256049FwmPyi", "8909655xdkMgr", "655712keClSc"];
  return M = function() {
    return x;
  }, M();
}
function f0(x) {
  const n = U, e = V[n(180)], { url: t, time: r = 15 * 1e3 } = x, o = Z(t), s = S(null), a = S(null), c = S(null);
  function w() {
    const p = n;
    clearTimeout(a[p(186)]), clearTimeout(c[p(186)]);
  }
  function u(p, i) {
    const g = n;
    a[g(186)] = setTimeout(() => {
      const b = g;
      p.send(b(184)), c[b(186)] = setTimeout(() => {
        l(i);
      }, r);
    }, r);
  }
  function l(p) {
    const i = n, { isPermission: g = !0, callback: b } = p;
    if (!g || !K() || (s[i(186)] = new WebSocket(o), !s[i(186)])) return !1;
    s[i(186)].onopen = () => {
      e && h[i(177)]("ws open...");
    }, s[i(186)].onmessage = (_) => {
      const f = i;
      w(), u(s[f(186)], p), _[f(176)] != f(188) && (e && h[f(177)](f(193) + JSON.stringify(_.data)), b && b(_[f(176)]));
    }, s[i(186)][i(189)] = () => {
      setTimeout(() => {
        l(p);
      }, 3 * 1e3);
    }, s[i(186)].onerror = (_) => {
      const f = i;
      e && h.error(f(178) + JSON[f(183)](_));
    };
  }
  return { ws: s, initWs: l };
}
const F = O;
function O(x, n) {
  const e = W();
  return O = function(t, r) {
    return t = t - 232, e[t];
  }, O(x, n);
}
(function(x, n) {
  const e = O, t = x();
  for (; ; )
    try {
      if (parseInt(e(258)) / 1 * (parseInt(e(257)) / 2) + -parseInt(e(247)) / 3 * (-parseInt(e(235)) / 4) + parseInt(e(232)) / 5 * (-parseInt(e(242)) / 6) + parseInt(e(233)) / 7 + -parseInt(e(248)) / 8 * (-parseInt(e(253)) / 9) + -parseInt(e(254)) / 10 + -parseInt(e(260)) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(W, 642851);
function W() {
  const x = ["11641910zFzeiD", "200", "message", "2XWCGlE", "54745PTsYRm", "ossClient", "3760493zBSMMd", "505185abprts", "5911276OoYrti", "replace", "177676OtTZxj", "https://", "admin", "上传成功", "error", "注意：需要设置oss-client", "注意：oss-client不存在", "6KFQocI", "getOssClient", "toString", "catch", "isLogger", "15uArwqV", "8cLsciq", "name", "上传失败", "url", "400", "10157706tgBlKp"];
  return W = function() {
    return x;
  }, W();
}
var E;
E = F(259);
class $ {
  constructor() {
    q(this, E);
  }
  getOssClient(n) {
    const e = F;
    if (!this[e(259)]) {
      if (!n || !Q(n)) return V[e(246)] && h[e(239)](e(240)), null;
      this.ossClient = new R(n);
    }
    return this[e(259)];
  }
}
function p0() {
  const x = F, n = new $();
  return { getOssClient: (t) => n[x(243)](t), onUpload: (t) => {
    const r = O, { platform: o = r(237), file: s, success: a, error: c, isHttps: w = !0 } = t, u = n[r(243)]();
    if (!u) return V[r(246)] && h[r(239)](r(241)), null;
    const l = /* @__PURE__ */ new Date(), p = y(l, "YYYY"), i = y(l, "MM"), g = y(l, "DD"), b = Math.random()[r(244)](36).slice(-6) + "_" + Date.now(), _ = s[r(249)], f = "/" + o + "/" + p + "/" + i + "/" + g + "/" + b + "-" + _;
    u.put(f, s).then((I) => {
      const d = r;
      a && a({ success: !0, context: { fileName: _, url: I[d(251)][d(234)]("http://", w ? d(236) : "http://"), path: I[d(249)] }, message: d(238), requestId: y(l) + "_" + b, code: d(255) });
    })[r(245)]((I) => {
      const d = r;
      c && c({ success: !1, context: (I == null ? void 0 : I[d(256)]) || I, message: d(250), requestId: y(l) + "_" + b, code: d(252) });
    });
  } };
}
(function(x, n) {
  const e = v, t = x();
  for (; ; )
    try {
      if (parseInt(e(480)) / 1 * (parseInt(e(476)) / 2) + parseInt(e(485)) / 3 * (parseInt(e(482)) / 4) + parseInt(e(486)) / 5 * (parseInt(e(483)) / 6) + -parseInt(e(478)) / 7 + parseInt(e(474)) / 8 + parseInt(e(488)) / 9 * (parseInt(e(475)) / 10) + -parseInt(e(473)) / 11 * (parseInt(e(481)) / 12) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(H, 438439);
function v(x, n) {
  const e = H();
  return v = function(t, r) {
    return t = t - 473, e[t];
  }, v(x, n);
}
function d0() {
  const x = X();
  return { emitter: x, simEmit: (o, ...s) => {
    x[v(477)](o, s);
  }, simEmitOn: (o, s) => {
    x.on(o, s);
  }, simEmitOff: (o, s) => {
    x[v(487)](o, s);
  }, simEmitClear: () => {
    const o = v;
    x[o(484)][o(479)]();
  } };
}
function H() {
  const x = ["all", "3eaFigB", "35gqceuB", "off", "57060xzHqDn", "2629Avmnwg", "361856GFqhFn", "820vYxHNK", "34IchrwC", "emit", "5766341aemKUI", "clear", "4562utXeLl", "49596spPCob", "3311660wSCvkI", "668064QZoXtU"];
  return H = function() {
    return x;
  }, H();
}
(function(x, n) {
  for (var e = Y, t = x(); ; )
    try {
      var r = -parseInt(e(139)) / 1 + -parseInt(e(138)) / 2 * (-parseInt(e(144)) / 3) + -parseInt(e(135)) / 4 * (-parseInt(e(145)) / 5) + parseInt(e(134)) / 6 + parseInt(e(140)) / 7 * (-parseInt(e(137)) / 8) + -parseInt(e(142)) / 9 * (-parseInt(e(136)) / 10) + -parseInt(e(143)) / 11 * (parseInt(e(141)) / 12);
      if (r === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(A, 775458);
function Y(x, n) {
  var e = A();
  return Y = function(t, r) {
    t = t - 134;
    var o = e[t];
    return o;
  }, Y(x, n);
}
function A() {
  var x = ["4bjeSHj", "140KGkeeD", "112DCHyJs", "4002RCOiJi", "1386255KjCMzp", "494228YXczNy", "12dTIYpu", "552681PlWFWj", "5864672sYVMbb", "243Twhqla", "5563130QYgtWD", "9293328bhgpba"];
  return A = function() {
    return x;
  }, A();
}
export {
  i0 as useComputedNum,
  o0 as useLoading,
  d0 as useMitter,
  c0 as useNavigatorApp,
  u0 as useSpeechRecognitionForSimple,
  p0 as useUpload,
  f0 as useWs
};
