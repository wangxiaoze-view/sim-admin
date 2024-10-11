import { defineComponent as p, ref as u, unref as f, openBlock as d, createBlock as m, createCommentVNode as I } from "vue";
import { u as b } from "../AmountText/index-1w1xYwae.js";
import { ElImageViewer as g } from "element-plus";
/* empty css               */
function s() {
  const e = ["1610472QGQBAM", "16893btfBRl", "url-list", "177041vAZSXD", "PreviewImage", "initIndex", "824712suluBE", "index", "16syixAY", "2108304WNncKM", "206244RGVCgq", "value", "52080aZbHsZ"];
  return s = function() {
    return e;
  }, s();
}
const l = t;
function t(e, r) {
  const x = s();
  return t = function(a, o) {
    return a = a - 161, x[a];
  }, t(e, r);
}
(function(e, r) {
  const x = t, a = e();
  for (; ; )
    try {
      if (parseInt(x(171)) / 1 + -parseInt(x(165)) / 2 + -parseInt(x(169)) / 3 * (parseInt(x(163)) / 4) + -parseInt(x(167)) / 5 + -parseInt(x(168)) / 6 + parseInt(x(161)) / 7 + parseInt(x(164)) / 8 === r) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(s, 153921);
const y = p({ name: l(172), __name: l(162), setup(e, { expose: r }) {
  const x = u([]), a = u(0), { loading: o, setLoading: c } = b(!1);
  return r({ reviewImages: (_, i) => {
    const n = t;
    c(_), x[n(166)] = i.urlList || [], a[n(166)] = i[n(173)] ?? 0;
  } }), (_, i) => {
    const n = t;
    return f(o) ? (d(), m(f(g), { key: 0, "hide-on-click-modal": !0, "initial-index": a[n(166)], "url-list": x[n(166)], onClose: i[0] || (i[0] = (k) => f(c)(!1)) }, null, 8, ["initial-index", n(170)])) : I("", !0);
  };
} });
export {
  y as _
};
