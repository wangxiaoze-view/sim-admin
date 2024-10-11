import { defineComponent as _, ref as f, watch as u, onMounted as d, openBlock as l, createElementBlock as m } from "vue";
import I from "xgplayer";
/* empty css                   */
const i = r;
(function(x, c) {
  const n = r, e = x();
  for (; ; )
    try {
      if (-parseInt(n(305)) / 1 * (-parseInt(n(314)) / 2) + -parseInt(n(313)) / 3 * (-parseInt(n(301)) / 4) + parseInt(n(310)) / 5 + -parseInt(n(306)) / 6 + parseInt(n(307)) / 7 * (parseInt(n(302)) / 8) + -parseInt(n(303)) / 9 + parseInt(n(312)) / 10 * (-parseInt(n(304)) / 11) === c) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(o, 819941);
const b = ["id"];
function r(x, c) {
  const n = o();
  return r = function(e, a) {
    return e = e - 299, n[e];
  }, r(x, c);
}
function o() {
  const x = ["video-player", "20yFIjdZ", "1829307pVZqYt", "322sDQUHM", "player", "url", "4CJEnfy", "5608DiwKjQ", "13197636NwjNbM", "2761033ksRDFZ", "7873YhKwrp", "4573038KGnMAc", "1729MYbHGb", "value", "div", "7500275BTNNnu"];
  return o = function() {
    return x;
  }, o();
}
const k = _({ name: "VideoPlayer", __name: "index", props: { config: { default: { id: i(311), url: "" } } }, emits: [i(299)], setup(x, { emit: c }) {
  const { config: n } = x, e = c, a = f(null), s = () => {
    const t = r;
    n[t(300)] && n[t(300)] !== "" && (a[t(308)] = new I(n), e(t(299), a[t(308)]));
  };
  return u(n, () => {
    s();
  }, { deep: !0 }), d(s), (t, h) => {
    const p = r;
    return l(), m(p(309), { id: n.id }, null, 8, b);
  };
} });
export {
  k as _
};
