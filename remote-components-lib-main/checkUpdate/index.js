import q from "fs";
import f from "chalk";
import V from "inquirer";
import { spawn as A } from "child_process";
(function(d, x) {
  const a = b, i = d();
  for (; ; )
    try {
      if (-parseInt(a(277)) / 1 + -parseInt(a(255)) / 2 * (-parseInt(a(283)) / 3) + parseInt(a(307)) / 4 * (-parseInt(a(272)) / 5) + parseInt(a(262)) / 6 + parseInt(a(280)) / 7 + -parseInt(a(287)) / 8 + -parseInt(a(302)) / 9 * (-parseInt(a(284)) / 10) === x) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(h, 712106);
function b(d, x) {
  const a = h();
  return b = function(i, p) {
    return i = i - 251, a[i];
  }, b(d, x);
}
function h() {
  const d = ["/package.json", "smallVersion", "193881IDuUqc", "2222210YXjLPf", "bold", "match", "10071712GMINuf", "red", "请选择安装依赖的方式?", "filter", "log", "entries", "development", "dependencies", ", 项目依赖的版本为：", "proVersion", "vue", "prompt", "bigVersion", "stdout", "install", "99eStPhW", "writeFile", `
 安装成功, 重新执行 install 命令`, "green", "请选择依赖进行大版本更新?", "5115492Ttvscx", "toString", `
 pluginPkg参数不能为空, 缺少插件依赖包，请检查插件依赖包是否存在！
`, "length", "table", "padEnd", "30TIDJAH", "pnpm", "join", "error", "进程已退出 ⏏️", "checkbox", "version", "891288xBwveT", "peerDependencies", `
 保证插件版本与项目版本一致，否则可能会导致项目运行异常 
`, "max", "版本说明：插件依赖的版本为：", "子进程退出，退出码：", "name", `
 当前的环境为 生产环境，为保证项目的稳定运行, 线上不支持自动更新 
 `, "includes", "stringify", "5BOqMYE", "map", "请选择依赖进行小版本更新?", `
⬆ 小版本依赖更新提示：处理版本兼容与项目版本一致~`, "push", "1348258XmdjYQ", "manager", `
 安装失败, 重新执行 install 命令`, "7250719zOTLmS"];
  return h = function() {
    return d;
  }, h();
}
async function z(d) {
  const x = b;
  console.log(f[x(288)][x(285)](x(264)));
  let a = {};
  const i = ["element-plus", x(297), "vant"];
  function p(t) {
    const e = x, n = t[e(286)](/\d+/g);
    return { versionString: (n == null ? void 0 : n[e(257)]("")) || "", versionBig: n && n.length ? n[0] : "" };
  }
  function w(t, e) {
    const n = x;
    let { versionString: c } = p(t), { versionString: s } = p(e);
    const o = Math[n(265)](c.length, s[n(252)]);
    return c[n(252)] < o && (c = c[n(254)](o, "0")), s[n(252)] < o && (s = s[n(254)](o, "0")), Number(s) > Number(c);
  }
  function j(t, e) {
    const { versionBig: n } = p(t), { versionBig: c } = p(e);
    return Number(c) > Number(n);
  }
  function D(t, e, n) {
    const c = x, s = [], o = [], l = { name: t, proVersion: e, version: a[c(263)][t] };
    w(e, a[c(263)][t]) && s[c(276)](l), j(e, a[c(263)][t]) && o[c(276)](l), n && n({ smallConfig: s, bigConfig: o });
  }
  async function P(t, e, n, c, s) {
    const o = x;
    try {
      const l = await V[o(298)](t);
      if ((l.smallVersion || []).length > 0 || (l[o(299)] || [])[o(252)] > 0) {
        const I = await V[o(298)](e);
        if (I[o(278)] === "跳过") throw new Error(o(259));
        const S = n.map((r) => l[o(282)][o(270)](r[o(268)]) ? r : null).filter(Boolean), Y = c.map((r) => l[o(299)][o(270)](r[o(268)]) ? r : null)[o(290)](Boolean), N = [...S, ...Y];
        for (let r = 0; r < N[o(252)]; r++) {
          const _ = N[r];
          a[o(263)][_[o(268)]] && (a.peerDependencies[_[o(268)]] = "" + _[o(296)]);
        }
        s && q[o(303)](s + o(281), JSON[o(271)](a, null, 2), (r) => {
          const _ = o;
          r ? console[_(258)](r) : C(I[_(278)]);
        });
      }
    } catch (l) {
      console.log(l);
    }
  }
  function C(t) {
    const e = x;
    console[e(291)](f[e(305)].bold(`
 依赖正在更新中, 请稍等... 
`));
    const n = A(t, [e(301)], {});
    n[e(300)].on("data", (c) => {
      const s = e;
      console[s(291)]("" + c[s(308)]());
    }), n.on("close", (c) => {
      const s = e;
      console[s(291)](s(267) + c), c === 0 ? console[s(291)](f[s(288)][s(285)](s(304))) : console[s(291)](f.red.bold(s(279)));
    });
  }
  const { pkg: E, include: O = i, mode: T = "development", dir: M, pluginPkg: y, exclude: v = [] } = d, B = [], m = [];
  if (!y) return console[x(291)](f[x(288)][x(285)](x(251)));
  a = y || {};
  const k = (t) => {
    const e = x;
    return t[e(273)]((n) => ({ name: n[e(268)], version: n[e(261)], proVersion: n[e(296)], tip: e(266) + n.version + e(295) + n[e(296)] }));
  };
  v == null || v.forEach((t) => {
    const e = x;
    a.peerDependencies[t] && delete a[e(263)][t];
  });
  for (const [t, e] of Object[x(292)](E[x(294)]))
    O.includes(t) && D(t, e, ({ smallConfig: n, bigConfig: c }) => {
      const s = x;
      B[s(276)](...n), m[s(276)](...c);
    });
  const u = k(B[x(290)]((t) => {
    const e = x;
    return m[e(252)] ? m.find((n) => t[e(268)] !== n[e(268)]) : t;
  }));
  u.length && (console.log(f.greenBright[x(285)](x(275))), console[x(253)](u));
  const g = k(m);
  if (g.length && (console.log(f[x(288)][x(285)](`
⬆ 大版本依赖更新提示：如果进行升更新会直接升级会导致项目组件的兼容问题，新版本的API不兼容`)), console.table(g)), T === x(293)) {
    console[x(291)](f[x(288)][x(285)](`
 当前的环境为 开发环境
 `));
    const t = u[x(252)] ? [{ type: x(260), choices: u[x(273)]((c) => c[x(268)]), name: x(282), message: x(274) }] : [], e = g[x(252)] ? [{ type: x(260), choices: g[x(273)]((c) => c[x(268)]), name: x(299), message: x(306) }] : [], n = [{ type: "list", choices: ["npm", "yarn", x(256), "跳过"], name: "manager", message: x(289) }];
    await P([...t, ...e], n, u, g, M);
  } else console.log(f.red[x(285)](x(269)));
}
export {
  z as default
};
