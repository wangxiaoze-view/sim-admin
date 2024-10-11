import { defineComponent as x0, ref as v, reactive as t0, computed as J, watch as O, resolveComponent as T, openBlock as I, createElementBlock as C, createVNode as E, withCtx as z, createElementVNode as b, normalizeStyle as P, Fragment as A, renderList as M, toDisplayString as S, withKeys as V, normalizeClass as n0, nextTick as R } from "vue";
import { cloneDeep as j } from "lodash-es";
function K() {
  const h = ["keyCode", "3705097uvrQRr", "join", "#1890ff", "3311541LHpNxi", "enter", "search-input", "searchValue", "tag-title", "forEach", "5wQHvKk", "splice", "value", "down", "onClick", "findIndex", "searchLabel", "index", "push", "map", "13tcJalQ", "PulldownSelect", "#dcdfe6", "searchList", "from", "1720HSHpdw", "inputEl", "delete", "keyupSelect", "style", "search-line", "length", "placeholder", "searchKey", "tag-label", "1695QEFbST", "459878jcOTyv", "el-input", "795324HTxTKs", "search-list-container", "preventDefault", "10tTkyrB", "8302yFOmhC", "tag-container", "vxe-pulldown", "div", "1109406JJlaWU", "2632vBUjPT", "_remote-search-select-container", "span", "modelValue", "hover-li", "1mNSjyX"];
  return K = function() {
    return h;
  }, K();
}
function l(h, y) {
  const r = K();
  return l = function(s, i) {
    return s = s - 318, r[s];
  }, l(h, y);
}
const p = l;
(function(h, y) {
  const r = l, s = h();
  for (; ; )
    try {
      if (-parseInt(r(360)) / 1 * (-parseInt(r(344)) / 2) + parseInt(r(343)) / 3 * (-parseInt(r(355)) / 4) + -parseInt(r(318)) / 5 * (parseInt(r(354)) / 6) + -parseInt(r(350)) / 7 * (parseInt(r(333)) / 8) + parseInt(r(365)) / 9 * (parseInt(r(349)) / 10) + parseInt(r(362)) / 11 + parseInt(r(346)) / 12 * (parseInt(r(328)) / 13) === y) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(K, 189331);
const s0 = { class: p(356) }, r0 = { class: "search-icon" }, a0 = { class: "search-tag" }, c0 = { class: p(342) }, o0 = { class: p(369) }, l0 = ["onClick"], i0 = { class: p(347) }, d0 = [p(322)], f0 = x0({ name: p(329), __name: p(325), props: { searchList: {} }, emits: ["emit-search"], setup(h, { expose: y, emit: r }) {
  const s = p, i = h, L = r, k = v(!1), u = v(""), B = v(), d = v([]), H = (e) => {
    const x = l, t = j(i[x(331)]), a = [];
    t[x(370)]((c) => {
      const n = x;
      d[n(320)][n(370)]((m) => {
        const o = n;
        c[o(341)] == m.searchKey && (c[o(368)] = m[o(368)]);
      }), a[n(326)]([c[n(341)], c[n(368)]]);
    });
    const f = Object.fromEntries(Array[x(332)](a)[x(327)](([c, n]) => [c, n]));
    e && e(f), R(() => {
      var n;
      const c = x;
      u.value = "", (n = B[c(320)]) == null || n.focus(), w(!1);
    });
  }, N = (e, x, t = "") => {
    const a = l, f = j(e);
    if (f[a(368)] = j(u[a(320)]) || t, !f[a(368)]) return;
    const c = d[a(320)][a(323)]((n) => n && n.searchKey == f[a(341)]);
    c > -1 ? d[a(320)][a(319)](c, 1, f) : d.value[a(326)](f), H(x);
  }, W = (e, x) => {
    const t = l;
    d[t(320)][t(319)](e, 1), H(x);
  }, Q = (e) => {
    N(e, (x) => {
      L("emit-search", x);
    });
  }, U = (e) => {
    W(e, (x) => {
      L("emit-search", x);
    });
  }, X = () => {
    const e = l;
    d[e(320)] = [];
  }, _ = v(-1), D = v(!1), w = (e) => {
    D.value = e;
  }, q = (e) => {
    const x = l;
    if (e == x(321)) {
      let t = _[x(320)] < i[x(331)][x(339)] - 1 ? _.value : -1;
      t++, _.value = t;
      return;
    }
    if (e == "up") {
      let t = _[x(320)];
      t <= 0 ? t = i[x(331)][x(339)] - 1 : t--, _[x(320)] = t;
      return;
    }
    if (e == x(366)) {
      if (_.value > -1) {
        const t = i.searchList[_[x(320)]];
        Q(t);
      }
      return;
    }
    if (e == x(335)) {
      if (D[x(320)]) return;
      const t = d[x(320)].length - 1;
      t > -1 && !u[x(320)] && (w(!0), U(t));
      return;
    }
  }, G = t0({ keyupSelect: (e) => {
    const x = l;
    return e == _.value ? x(359) : "";
  } }), Y = { 38: "up", 40: s(321), 13: "enter", 8: s(335) }, g = (e) => {
    const x = s;
    e && (e[x(361)] != 8 && e[x(348)](), q(Y[e[x(361)]]));
  }, Z = J(() => {
    const e = s;
    return i[e(331)][e(339)] === 0 ? "无可查询项" : i[e(331)][e(327)]((x) => x[e(324)])[e(363)](",");
  }), F = J(() => {
    const e = s;
    return d[e(320)][e(339)] === 0 ? e(330) : e(364);
  }), $ = () => {
    R(() => {
      const e = l;
      u[e(320)] = "", _.value = -1, d[e(320)] = [], k[e(320)] = !1, w(!1);
    });
  };
  return O(() => u[s(320)], (e) => {
    const x = s;
    k[x(320)] = !!e;
  }), O(() => k[s(320)], (e) => {
    const x = s;
    !e && (u[x(320)] = "", _[x(320)] = -1);
  }), y({ setLimit: w, pushChange: N, resetSearch: X, clearText: $ }), (e, x) => {
    const t = s, a = T("vab-icon"), f = T(t(345)), c = T(t(352));
    return I(), C(t(353), s0, [E(c, { modelValue: k[t(320)], "onUpdate:modelValue": x[1] || (x[1] = (n) => k[t(320)] = n) }, { default: z(() => [b("div", { class: t(367), style: P({ borderColor: F[t(320)] }) }, [b(t(353), r0, [E(a, { icon: t(338), style: P({ color: F.value }) }, null, 8, [t(337)])]), b(t(353), a0, [(I(!0), C(A, null, M(d[t(320)], (n, m) => {
      const o = t;
      return I(), C("div", { key: m, class: o(351) }, [b(o(357), c0, S(n[o(324)]), 1), b(o(357), o0, S(n.searchValue), 1), b(o(357), { class: "tag-close", onClick: (e0) => U(m) }, "×", 8, l0)]);
    }), 128))]), E(f, { ref_key: t(334), ref: B, modelValue: u.value, "onUpdate:modelValue": x[0] || (x[0] = (n) => u[t(320)] = n), modelModifiers: { trim: !0 }, placeholder: Z[t(320)], onKeydown: [V(g, [t(335)]), V(g, [t(321)]), V(g, [t(366)]), V(g, ["up"])] }, null, 8, [t(358), t(340)])], 4)]), dropdown: z(() => [b("ul", i0, [(I(!0), C(A, null, M(i.searchList, (n, m) => {
      const o = t;
      return I(), C("li", { key: n.searchKey, class: n0(G[o(336)](m)), onClick: (e0) => Q(n) }, S(n[o(324)]) + ": " + S(u[o(320)]), 11, d0);
    }), 128))])]), _: 1 }, 8, [t(358)])]);
  };
} });
export {
  f0 as _
};
