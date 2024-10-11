import { defineComponent as $, ref as I, computed as S, onMounted as Z, openBlock as l, createElementBlock as _, Fragment as k, renderList as q, createBlock as F, unref as z, withCtx as C, createElementVNode as G, createVNode as y, createCommentVNode as h, renderSlot as J, toDisplayString as M } from "vue";
/* empty css               */
import { ElImage as O, ElIcon as W, ElMessage as j } from "element-plus";
import { Picture as A } from "@element-plus/icons-vue";
import { g as D, i as w, a as H, b as E, c as Q } from "../AmountText/index-1w1xYwae.js";
import { _ as Y } from "../PreviewImage/index-BuvpqIt8.js";
import { _ as K } from "../PreviewVideo/index-BOfvm3VD.js";
const f = b;
(function(i, n) {
  const r = b, s = i();
  for (; ; )
    try {
      if (-parseInt(r(295)) / 1 + -parseInt(r(289)) / 2 + parseInt(r(282)) / 3 + -parseInt(r(290)) / 4 * (-parseInt(r(279)) / 5) + parseInt(r(272)) / 6 * (-parseInt(r(276)) / 7) + -parseInt(r(286)) / 8 * (-parseInt(r(284)) / 9) + -parseInt(r(299)) / 10 === n) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(g, 577246);
const U = { class: f(292) }, X = [f(288)], ee = { class: f(273) }, xe = { key: 0, class: f(293) }, te = { key: 1, class: f(281) };
function g() {
  const i = ["value", "10531010WYfRmM", "100%", "number", "exceedType", "map", "error", "79446hVzOEL", "_remote-lazy--image-slot", "then", "default", "21MALzgE", "reviewImages", "url", "185sGOQMo", "99+", "_remote-lazy--exceed-number", "1915362xSZPvf", "div", "214479WxqZzj", "src", "144nMrNJb", "cover", "onClick", "338706wvFqmB", "101880JTBaGa", "filter", "_remote-lazy", "_remote-lazy--exceed-default", "forEach", "170379tkaZNE", "$slots", "length"];
  return g = function() {
    return i;
  }, g();
}
function b(i, n) {
  const r = g();
  return b = function(s, p) {
    return s = s - 269, r[s];
  }, b(i, n);
}
const ce = $({ name: "RemoteLazyImage", __name: "index", props: { image: {}, isLazy: { type: Boolean, default: !1 }, style: { default: { width: "60px", height: "60px" } }, limit: { default: 9 }, exceedType: { default: f(275) }, isPreview: { type: Boolean, default: !0 } }, setup(i) {
  const n = f, { image: r, style: s, isLazy: p, exceedType: v, limit: m, isPreview: T } = i, V = I(null), B = I(null), u = I(D(r)[n(270)]((x) => ({ url: x, cover: x }))), N = () => {
    const x = n;
    T && u[x(298)][x(294)]((a) => {
      const e = x;
      w(a[e(278)]) && (a.cover = p ? H(a[e(278)]) : a[e(278)]), E(a[e(278)]) && Q(a[e(278)])[e(274)]((c) => {
        const o = e;
        a[o(287)] = c;
      });
    });
  }, L = S(() => {
    const x = n, a = u.value[x(297)] - m;
    return a > 99 ? x(280) : a;
  }), P = (x, a) => {
    var c, o;
    const e = n;
    if (w(x[e(278)])) {
      let t = a;
      u.value[e(291)]((d) => E(d[e(278)])) && t--, (c = V.value) == null || c[e(277)](!0, { urlList: u[e(298)][e(291)]((d) => w(d[e(278)]))[e(270)]((d) => d[e(278)]), initIndex: t });
    } else E(x.url) ? (o = B[e(298)]) == null || o.setVisible(!0, { url: x[e(278)] }) : j[e(271)]("目前只支持图片和视频预览");
  };
  return Z(N), (x, a) => {
    const e = n;
    return l(), _(e(283), U, [(l(!0), _(k, null, q(u[e(298)], (c, o) => {
      const t = e;
      return l(), _("div", { key: o, class: "_remote-lazy--image", style: s, onClick: (R) => P(c, o) }, [o <= m ? (l(), F(z(O), { key: 0, fit: t(287), src: c[t(287)], style: { width: t(300), height: t(300) } }, { error: C(() => [G(t(283), ee, [y(z(W), null, { default: C(() => [y(z(A))]), _: 1 })])]), _: 2 }, 1032, [t(285)])) : h("", !0), m !== 0 && o == m && r[t(297)] !== m ? (l(), _(k, { key: 1 }, [x.$slots.exceedType ? J(x[t(296)], t(269), { key: 0 }) : (l(), _(k, { key: 1 }, [v === "default" ? (l(), _(t(283), xe, " + " + M(L[t(298)]), 1)) : h("", !0), v === t(301) ? (l(), _(t(283), te, M(L.value), 1)) : h("", !0)], 64))], 64)) : h("", !0)], 8, X);
    }), 128)), y(Y, { ref_key: "previewImageRef", ref: V }, null, 512), y(K, { ref_key: "previewVideoRef", ref: B }, null, 512)]);
  };
} });
export {
  ce as _
};
