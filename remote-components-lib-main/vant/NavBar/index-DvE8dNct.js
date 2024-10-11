import { defineComponent as d, openBlock as _, createBlock as u, unref as m, mergeProps as g, createSlots as h, withCtx as c, renderSlot as p } from "vue";
import { NavBar as b } from "vant";
/* empty css               */
const r = x;
function f() {
  const n = ["style", "VantNavBar", "785660kjGUaI", "713028SqZsmV", "1739080ZbHGgb", "left", "0px", "189305iZuAbD", "#fff", "index", "click-right", "$slots", "right", "paddingTop", "bgColor", "1451091eLwxfw", "click-left", "7201168iMrmoT", "21eIEpWM", "584898GkjuNV"];
  return f = function() {
    return n;
  }, f();
}
(function(n, s) {
  const e = x, t = n();
  for (; ; )
    try {
      if (parseInt(e(415)) / 1 + parseInt(e(407)) / 2 + parseInt(e(403)) / 3 + parseInt(e(410)) / 4 + parseInt(e(412)) / 5 + -parseInt(e(411)) / 6 * (parseInt(e(406)) / 7) + -parseInt(e(405)) / 8 === s) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(f, 253022);
function x(n, s) {
  const e = f();
  return x = function(t, l) {
    return t = t - 397, e[t];
  }, x(n, s);
}
const C = d({ name: r(409), __name: r(397), props: { title: {}, fixed: { type: Boolean }, zIndex: {}, border: { type: Boolean }, leftText: {}, rightText: {}, leftDisabled: { type: Boolean }, rightDisabled: { type: Boolean }, leftArrow: { type: Boolean }, placeholder: { type: Boolean }, safeAreaInsetTop: { type: Boolean }, clickable: { type: Boolean }, bgColor: { default: r(416) }, paddingTop: { default: r(414) } }, emits: [r(404), r(398)], setup(n, { emit: s }) {
  const e = n, t = s, l = () => {
    t(x(404));
  }, i = () => {
    t(x(398));
  };
  return (a, k) => {
    const o = x;
    return _(), u(m(b), g(e, { class: "_remote-nav-bar", style: { backgroundColor: e[o(402)], paddingTop: e[o(401)] }, onClickRight: i, onClickLeft: l }), h({ _: 2 }, [a[o(399)][o(413)] ? { name: o(413), fn: c(() => [p(a.$slots, o(413))]), key: "0" } : void 0, a.$slots.right ? { name: "right", fn: c(() => [p(a[o(399)], o(400))]), key: "1" } : void 0]), 1040, [o(408)]);
  };
} });
export {
  C as _
};
