import { defineComponent as d, ref as i, openBlock as l, createBlock as p, unref as m, withCtx as b, createCommentVNode as I } from "vue";
/* empty css               */
import { ElDialog as g } from "element-plus";
import { _ as h } from "../VideoPlayer/index-DiQfK05K.js";
const u = f;
function f(n, a) {
  const e = r();
  return f = function(x, s) {
    return x = x - 238, e[x];
  }, f(n, a);
}
(function(n, a) {
  const e = f, x = n();
  for (; ; )
    try {
      if (parseInt(e(255)) / 1 + parseInt(e(246)) / 2 * (parseInt(e(249)) / 3) + parseInt(e(254)) / 4 * (parseInt(e(238)) / 5) + parseInt(e(239)) / 6 * (parseInt(e(241)) / 7) + -parseInt(e(252)) / 8 + parseInt(e(243)) / 9 + parseInt(e(253)) / 10 * (-parseInt(e(248)) / 11) === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(r, 494084);
function r() {
  const n = ["25130IkHXji", "237108gHfHrH", "800", "133ewLawi", "index", "5665293kpwKGn", "value", "assign", "4frmqWn", "config", "8360QxonrT", "231213CjbdNd", "PreviewVideo", "rgba(0, 0, 0, 0.87)", "5335952NwLsCa", "16280AmrpgA", "44IJSXVJ", "808611RdHSqg"];
  return r = function() {
    return n;
  }, r();
}
const y = d({ name: u(250), __name: u(242), setup(n, { expose: a }) {
  const e = i(!1), x = i({ id: Date.now().toString(), lang: "zh", volume: 1, autoplay: !0, screenShot: !0, playbackRate: [0.5, 0.75, 1, 1.5, 2], fluid: !0 });
  return a({ setVisible: (c, o) => {
    const t = f;
    e.value = c, x[t(244)] = Object[t(245)](x.value, o || {});
  } }), (c, o) => {
    const t = f;
    return l(), p(m(g), { modelValue: e[t(244)], "onUpdate:modelValue": o[0] || (o[0] = (_) => e[t(244)] = _), title: "视频预览", width: t(240) }, { default: b(() => [e[t(244)] ? (l(), p(h, { key: 0, config: x[t(244)], style: { "background-color": t(251) } }, null, 8, [t(247)])) : I("", !0)]), _: 1 }, 8, ["modelValue"]);
  };
} });
export {
  y as _
};
