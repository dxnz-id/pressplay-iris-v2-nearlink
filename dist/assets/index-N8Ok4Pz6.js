import {
  L as et,
  w as tt,
  v as st,
  D as L,
  a2 as ae,
  a3 as ot,
  y as G,
  a7 as nt,
  x as at,
  l as rt,
  a8 as lt,
  a9 as it,
  aa as dt,
  O as ct,
  P as ut,
  G as vt,
  H as pt,
  Q as _t,
  R as z,
  S as Q,
  U as re,
  W as Te,
  X as ft,
  Y as mt,
  $ as gt,
  a0 as ht,
  A as bt,
  a4 as yt,
  a5 as wt,
  a6 as It,
  _ as xt,
  ab as kt,
  I as U,
  T as Dt,
} from "./nodeHIDConfiguration-Cn5KyG1E.js";
import {
  g as $t,
  aS as Ct,
  b8 as Pt,
  aQ as St,
  b6 as le,
  aR as Tt,
  r as h,
  a as Ve,
  c as Z,
  w as Be,
  I as Vt,
  be as Bt,
  ba as P,
  bf as Nt,
  aZ as j,
  aM as x,
  aX as d,
  a$ as a,
  F as K,
  aO as r,
  aT as b,
  aV as m,
  aU as Ne,
  ai as Rt,
  b3 as f,
  aW as i,
  b1 as Ft,
  b4 as ie,
  b5 as y,
  bg as Ht,
  b2 as Lt,
  b0 as Ut,
  b9 as Et,
  bc as zt,
  R as jt,
  aN as v,
  ad as Re,
  v as Fe,
  j as S,
} from "./index-C6o3MmhI.js";
const Ot = { class: "h-full flex flex-col" },
  qt = ["src"],
  At = { key: 0 },
  Mt = { class: "p-3 overflow-y-auto device-list flex-1" },
  Wt = { key: 0, class: "text-xl flex items-center justify-end" },
  Xt = { key: 1 },
  Gt = { key: 0 },
  Qt = { class: "my-3 text-center text-xl" },
  Zt = { class: "flex justify-between items-center" },
  Kt = { class: "text-base" },
  Yt = { class: "flex justify-between items-center mt-1" },
  Jt = { class: "text-base" },
  es = { class: "w-full flex items-center" },
  ts = { class: "absolute top-0 right-0" },
  ss = { class: "text-center mb-4" },
  os = { class: "text-lg font-semibold" },
  ns = { class: "space-y-4" },
  as = { class: "pb-3" },
  rs = { class: "flex justify-between items-center" },
  ls = { class: "mr-4" },
  is = { class: "font-medium" },
  ds = { class: "text-sm text-gray-400 whitespace-pre-line mt-1" },
  cs = { class: "flex justify-between items-center" },
  us = { class: "mr-4" },
  vs = { class: "font-medium" },
  ps = { class: "text-sm text-gray-400 whitespace-pre-line mt-1" },
  _s = { class: "flex-1" },
  fs = { class: "mb-4" },
  ms = { class: "text-xl font-semibold" },
  gs = { class: "max-h-[500px] overflow-y-auto pr-2" },
  hs = { class: "space-y-4" },
  bs = { class: "pb-3" },
  ys = { class: "flex justify-between items-center" },
  ws = { class: "mr-4" },
  Is = { class: "font-medium" },
  xs = { class: "text-sm text-gray-400 whitespace-pre-line mt-1" },
  ks = { class: "flex justify-between items-center" },
  Ds = { class: "mr-4" },
  $s = { class: "font-medium" },
  Cs = { class: "text-sm text-gray-400 whitespace-pre-line mt-1" },
  Vs = $t({
    __name: "index",
    setup(Ps) {
      const He = zt(),
        de = Bt(),
        ce = Ct(),
        Y = et(),
        J = Pt(),
        ue = tt(),
        { t: u } = St(),
        C = st(),
        O = le(),
        { getHidDevices: Le, getCurrentHidDevice: T, nodeHidDevice: q } = Tt(C),
        ee = "./logo/hhk.png",
        te = h(!1),
        ve = h("firmware"),
        pe = (e) => {
          n.device = e;
          const { isDongle: t, firmware: s } = Ge({
            vendorId: e.vendorId,
            productId: e.productId,
          });
          ((n.isDongle = t),
            (n.firmwares = s),
            (n.visible = !0),
            (n.receiver_version_text = e.receiver_version_text),
            (n.mouse_version_text = e.mouse_version_text),
            (n.receiver_version_number = e.receiver_version_number),
            (n.mouse_version_number = e.mouse_version_number));
        },
        _e = (e) => {
          ((n.select_firmwares_index = e),
            P.send("set-select-device", {
              vendorId: n.device.vendorId,
              productId: n.device.productId,
              name: n.device.product,
              path: n.device.path,
            }),
            navigator.hid &&
              navigator.hid
                .requestDevice({
                  filters: [
                    {
                      vendorId: n.device.vendorId,
                      productId: n.device.productId,
                      usagePage: n.device.usagePage,
                      usage: n.device.usage,
                    },
                  ],
                })
                .then((t) => {
                  (C.setLastSelectDevice(""), Ue(t));
                }));
        },
        N = async (e) => new Promise((t) => setTimeout(t, e)),
        Ue = (e) => {
          const t = [];
          for (let s = 0; s < e.length; s++)
            ((e[s].oninputreport = (o) => kt(o)),
              t.push({ device: e[s] }),
              j.queueExecute(
                [
                  () => (e[s].opened ? "" : e[s].open()),
                  () => U(e[s], "13"),
                  async () => await N(100),
                  () => U(e[s], "14"),
                  async () => await N(100),
                ],
                100,
              ));
          (C.addHidDevice(t), Ee());
        },
        n = Ve({
          visible: !1,
          device: {},
          isDongle: !1,
          firmwares: [],
          select_firmwares_index: 0,
          receiver_version_text: "",
          receiver_version_number: 0,
          mouse_version_text: "",
          mouse_version_number: 0,
        }),
        Ee = () => {
          const e = Le.value[0];
          if (e.sleep)
            J.info({
              content: u("index.tip3"),
              duration: 3e3,
              keepAliveOnHover: !0,
            });
          else {
            (C.setLastSelectDevice(e.device.productName),
              C.selectDevice(0),
              (le().DeviceFactoryResetLoading = !1),
              (le().onboardSwitchLoading = !1),
              j.queueExecute(
                [
                  async () => await N(150),
                  () => U(e.device, "15"),
                  async () => await N(50),
                  () => U(e.device, "17"),
                  async () => await N(50),
                  () => U(e.device, "19"),
                  async () => await N(50),
                ],
                150,
              ));
            const {
                device: { vendorId: t, productId: s },
              } = T.value,
              o = L.find((c) => c.vendorId === t && c.productId === s);
            je(o.isDongle ? 211 : 210);
          }
        },
        g = h(null),
        ze = Z(() => {
          var e;
          return (e = T.value) == null ? void 0 : e.is_dfu;
        }),
        je = (e) => {
          const t = Y.warning({
            title: u("other.update.tip1"),
            content: () =>
              S("div", [S("p", { class: "mt-3" }, u("other.update.tip2"))]),
            positiveText: u("other.update.tip3"),
            negativeText: u("common.cancel"),
            negativeButtonProps: { disabled: !1 },
            maskClosable: !1,
            closeOnEsc: !1,
            onPositiveClick: () => (
              (t.loading = !0),
              (t.negativeButtonProps.disabled = !0),
              (t.closable = !1),
              new Promise((s) => {
                be(e)
                  .then(() => {
                    s();
                  })
                  .catch((o) => {
                    (o === 2 && fe(e), s());
                  });
              })
            ),
            onNegativeClick: () => {
              ((t.loading = !1), (t.negativeButtonProps.disabled = !1));
            },
          });
        },
        fe = (e) => {
          const t = Y.error({
            title: "哎呀，固件升级包下载卡壳啦!",
            content: () =>
              S("div", [
                S(
                  "p",
                  { class: "mt-3" },
                  "可能是当前网络信号弱或不稳定导致的~别担心，试试这两步:",
                ),
                S("ul", { class: "mt-3" }, [
                  S("li", "1. 检查网络是否正常连接"),
                  S(
                    "li",
                    "2. 点击下方“重试”，即可继续升级流程升级完成后，设备功能会更稳定哦!",
                  ),
                ]),
                S("p", { class: "mt-3" }, u("other.update.tip2")),
              ]),
            positiveText: "重试",
            negativeText: u("common.cancel"),
            negativeButtonProps: { disabled: !1 },
            maskClosable: !1,
            closeOnEsc: !1,
            onPositiveClick: () => (
              (t.loading = !0),
              (t.negativeButtonProps.disabled = !0),
              (t.closable = !1),
              new Promise((s) => {
                be(e)
                  .then(() => {
                    s();
                  })
                  .catch((o) => {
                    (o === 2 && fe(e), s());
                  });
              })
            ),
            onNegativeClick: () => {
              ((t.loading = !1), (t.negativeButtonProps.disabled = !1));
            },
          });
        },
        me = h(""),
        ge = h(null),
        he = h(!1);
      async function Oe(e) {
        try {
          const t = await fetch(e);
          if (!t.ok) throw new Error(`HTTP error! status: ${t.status}`);
          return await t.arrayBuffer();
        } catch (t) {
          return (console.error("读取文件时出错:", t), null);
        }
      }
      const qe = Z(() => {
          const {
            device: { vendorId: e, productId: t },
          } = T.value;
          return L.find((s) => s.vendorId === e && s.productId === t);
        }),
        be = (e) =>
          new Promise((t, s) => {
            var _;
            me.value = T.value.device.productName;
            const o = new Dt();
            let c = "";
            e === 211
              ? (c = n.firmwares[n.select_firmwares_index].dongle.fw)
              : (c = n.firmwares[n.select_firmwares_index].mouse.fw);
            const I = n.firmwares[n.select_firmwares_index],
              k = I && "folder" in I ? I.folder : "",
              p = `https://ausdomhubg.com/fw/${(_ = qe.value) == null ? void 0 : _.Id}/${k}/${c}`;
            Oe(p).then((D) => {
              if (D && D.byteLength) {
                const w = D;
                ((ge.value = new DataView(w)),
                  o.deserialize(w),
                  o.setDevice(T.value.device, e));
                const $ = o.validate(w, ye.value);
                if ($.success) {
                  (console.log("文件校验通过"), U(T.value.device, "EF"));
                  const ne = Be(ze, (X) => {
                    X === !0 &&
                      ((ge.value = new DataView(w)),
                      (F.value = w.slice(o.headLength)),
                      (M.value = Math.ceil(F.value.byteLength / re)),
                      Ie(),
                      ne());
                  });
                  t(0);
                } else (ce.error(u($.message)), s(1));
              } else s(2);
            });
          }),
        ye = Z(() => {
          const {
            device: { vendorId: e, productId: t },
          } = T.value;
          return L.find((o) => o.vendorId === e && o.productId === t).isDongle;
        }),
        we = h([]),
        Ae = (e) =>
          new Promise((t) => {
            P.invoke("get-device").then((s) => {
              ((we.value = s.filter((o) =>
                e.some(
                  (c) =>
                    c.vendorId === o.vendorId &&
                    c.productId === o.productId &&
                    c.usagePage === o.usagePage &&
                    c.usage === o.usage,
                ),
              )),
                t(we.value));
            });
          }),
        Ie = async () => {
          let e;
          (ye.value ? (e = gt) : (e = ht),
            setTimeout(() => {
              Ae(e).then(async (t) => {
                if (t.length) {
                  const { vendorId: s, productId: o } = t[0];
                  P.send("set-select-device", { vendorId: s, productId: o });
                  try {
                    const c = await navigator.hid.requestDevice({ filters: e });
                    c.length
                      ? ((g.value = c[0]), $e())
                      : console.log("No devices found");
                  } catch (c) {
                    console.error("Failed to request device permission:", c);
                  }
                }
              });
            }, 3e3));
        };
      Be(g, (e, t) => {
        console.log("upgrade_device changed from", t, "to", e);
      });
      const Me = () => {
          Y.warning({
            title: u("common.tip"),
            content: u("other.update.dfu.cancelTip"),
            closable: !1,
            positiveText: u("common.know"),
          });
        },
        se = h(!1),
        xe = Ve([]),
        ke = h(null),
        A = async (e) => {
          (xe.push(e),
            await jt(() => {
              var t;
              (t = ke.value) == null ||
                t.scrollTo({ position: "bottom", silent: !1 });
            }));
        },
        R = h(!1),
        F = h(),
        M = h(0),
        V = h(0),
        De = Z(() =>
          M.value === 0 ? 0 : Number(((V.value / M.value) * 100).toFixed(2)),
        ),
        $e = async () => {
          if (!g.value) {
            ce.error(u("other.update.dfu.deviceNotFound"));
            return;
          }
          se.value = !0;
          try {
            g.value.open().then(() => {
              if (g.value) {
                g.value.oninputreport = (t) => We(t);
                const e = _t(F.value, F.value.byteLength);
                (oe(e, u("other.update.logSetp.s1")), g.value.sendReport(z, e));
              }
            });
          } catch (e) {
            (console.error("Error during startUpgrade:", e), E());
          }
        },
        oe = async (e, t) => {
          A(`${t}:${De.value.toFixed(2).toString()}%`);
        },
        We = (e) => {
          g.value &&
            j
              .arrayBuffer2Hex(e.data.buffer)
              .then((t) => {
                var o, c, I, k;
                switch (t.map((p) => j.toDec(p))[0]) {
                  case 255:
                    if (Q(e.data.buffer)) {
                      V.value = 0;
                      const p = mt();
                      (oe(p, u("other.update.logSetp.s2")),
                        (o = g.value) == null || o.sendReport(z, p));
                    } else E();
                    break;
                  case 1:
                    if (Q(e.data.buffer)) {
                      const p = V.value * re,
                        _ = Te(F.value, p);
                      ((c = g.value) == null || c.sendReport(z, _), V.value++);
                    } else E();
                    break;
                  case 2:
                    if (Q(e.data.buffer))
                      if (V.value < M.value) {
                        const p = V.value * re,
                          _ = Te(F.value, p);
                        (oe(_, u("other.update.logSetp.s3")),
                          (I = g.value) == null || I.sendReport(z, _),
                          V.value++);
                      } else {
                        const p = ft();
                        (k = g.value) == null || k.sendReport(z, p);
                      }
                    else E();
                    break;
                  case 0:
                    if (Q(e.data.buffer)) {
                      (A(u("other.update.logSetp.s4") + ":100%"),
                        (R.value = !1),
                        J.success({
                          closable: !1,
                          title: u("common.tip"),
                          content: u("other.update.upgradeSuccess"),
                        }));
                      let p = 5;
                      setInterval(() => {
                        if (
                          (A(`${p--}${u("other.update.logSetp.s5")}`), p === -1)
                        ) {
                          const _ = window.location.href,
                            D = _.indexOf("#"),
                            $ = _.slice(D).split("?")[0];
                          ((window.location.href = _.slice(0, D) + $),
                            window.location.reload());
                        }
                      }, 1e3);
                    } else E();
                    break;
                }
              })
              .catch((t) => {
                console.log(t, "error");
              });
        },
        E = () => {
          (A(u("other.update.upgradeError")),
            J.error({
              closable: !1,
              title: u("common.tip"),
              content: u("other.update.upgradeErrorTip"),
            }));
        };
      (Vt(() => {
        let e = de.query.vendorId,
          t = de.query.productId;
        (e &&
          t &&
          setTimeout(() => {
            const s = q.value.find(
              (o) => o.vendorId === Number(e) && o.productId === Number(t),
            );
            s && pe(s);
          }, 1e3),
          (navigator.hid.onconnect = () => {
            W();
          }),
          (navigator.hid.ondisconnect = (s) => {
            var p;
            const o = s,
              { productId: c, vendorId: I } = o.device;
            C.removeHidDevice({ productId: c, vendorId: I });
            const k =
              (p = q.value.find(
                (_) => _.vendorId === I && _.productId === c,
              )) == null
                ? void 0
                : p.path;
            k &&
              P.invoke("close-device", k)
                .then((_) => {
                  _ &&
                    ((C.nodeHidDevice = C.nodeHidDevice.filter(
                      (D) => D.path !== k,
                    )),
                    W());
                })
                .catch(() => {
                  W();
                });
          }),
          W(),
          P.on("device-data", (s, o) => {
            ae.report(o.path, o.data);
          }));
      }),
        Nt(() => {
          P.removeAllListeners("device-data");
        }));
      const W = () => {
          P.invoke("get-device").then((e) => {
            C.nodeHidDevice = e.filter((t) =>
              L.some(
                (s) =>
                  s.vendorId === t.vendorId &&
                  s.productId === t.productId &&
                  s.usagePage === t.usagePage &&
                  s.usage === t.usage,
              ),
            );
            for (const t of q.value)
              P.invoke("open-device", t.path).then(() => {
                j.queueExecute(
                  [() => ae.sendCmd[13](t.path), () => ae.sendCmd[14](t.path)],
                  500,
                );
              });
          });
        },
        Xe = () => {
          He.push("/").then(() => {
            window.location.reload();
          });
        },
        Ge = ({ vendorId: e, productId: t }) =>
          L.find((o) => o.vendorId === e && o.productId === t),
        H = (e, t) => {
          const s = L.find((c) => c.vendorId === e && c.productId === t),
            o = s == null ? void 0 : s.firmware.filter((c) => c.latest);
          return o && o.length === 1
            ? { dongle: Ce(o[0].dongle.version), mouse: Ce(o[0].mouse.version) }
            : { dongle: 0, mouse: 0 };
        },
        Ce = (e) => {
          const [t, s, o] = e.split(".").map(Number);
          return t * 1e4 + s * 100 + o;
        };
      return (e, t) => {
        const s = Rt,
          o = at,
          c = rt,
          I = nt,
          k = yt,
          p = bt,
          _ = Ft,
          D = xt,
          w = pt,
          $ = Ut,
          ne = it,
          X = ot,
          Qe = dt,
          Ze = Ht("Box"),
          Ke = ct,
          Ye = ut,
          Je = Et,
          Pe = vt;
        return (
          v(),
          x(
            K,
            null,
            [
              d(
                X,
                { "has-sider": "", class: "h-screen" },
                {
                  default: a(() => [
                    d(
                      I,
                      { bordered: "", class: "h-full" },
                      {
                        default: a(() => [
                          r("div", Ot, [
                            m(ee)
                              ? (v(),
                                x(
                                  "img",
                                  {
                                    key: 0,
                                    class: "mx-auto h-[100px] object-contain",
                                    src: m(ee),
                                  },
                                  null,
                                  8,
                                  qt,
                                ))
                              : b("", !0),
                            r(
                              "div",
                              {
                                class: Ne([
                                  "px-5 pb-5 flex-1 flex flex-col",
                                  m(ee) ? "" : "mt-5",
                                ]),
                              },
                              [
                                d(
                                  o,
                                  { vertical: "", class: "flex-1" },
                                  {
                                    default: a(() => [
                                      d(
                                        s,
                                        {
                                          ghost: "",
                                          class:
                                            "w-full rounded-[10px] h-[45px] justify-start",
                                          onClick: Xe,
                                        },
                                        {
                                          default: a(() => [
                                            f(i(e.$t("upgrade.menu.item4")), 1),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      d(
                                        s,
                                        {
                                          class:
                                            "w-full rounded-[10px] h-[45px] justify-start mt-2",
                                          type: "primary",
                                          ghost: "",
                                          onClick:
                                            t[0] ||
                                            (t[0] = (l) =>
                                              (ve.value = "firmware")),
                                        },
                                        {
                                          default: a(() => [
                                            f(i(e.$t("upgrade.menu.item1")), 1),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                d(
                                  s,
                                  {
                                    strong: "",
                                    secondary: "",
                                    class: "w-full rounded-[10px]",
                                    onClick:
                                      t[1] || (t[1] = (l) => (te.value = !0)),
                                  },
                                  {
                                    icon: a(() => [
                                      d(
                                        c,
                                        { size: "18" },
                                        { default: a(() => [d(m(lt))]), _: 1 },
                                      ),
                                    ]),
                                    default: a(() => [
                                      f(" " + i(e.$t("upgrade.menu.item3")), 1),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ],
                              2,
                            ),
                          ]),
                        ]),
                        _: 1,
                      },
                    ),
                    d(X, null, {
                      default: a(() => [
                        d(
                          ne,
                          { "content-style": "padding: 24px;" },
                          {
                            default: a(() => [
                              ve.value === "firmware"
                                ? (v(),
                                  x("div", At, [
                                    r("div", Mt, [
                                      d(
                                        _,
                                        { gap: "x-10 x-10" },
                                        {
                                          default: a(() => [
                                            (v(!0),
                                            x(
                                              K,
                                              null,
                                              ie(
                                                m(q),
                                                (l, B) => (
                                                  v(),
                                                  x(
                                                    "div",
                                                    {
                                                      key: B,
                                                      class:
                                                        "w-[400px] cursor-pointer",
                                                    },
                                                    [
                                                      d(
                                                        $,
                                                        {
                                                          class:
                                                            "cursor-pointer",
                                                          hoverable: "",
                                                          onClick: (Se) =>
                                                            pe(l),
                                                        },
                                                        {
                                                          default: a(() => [
                                                            d(
                                                              _,
                                                              {
                                                                justify:
                                                                  "space-between",
                                                              },
                                                              {
                                                                default: a(
                                                                  () => [
                                                                    l.sleep
                                                                      ? (v(),
                                                                        x(
                                                                          "div",
                                                                          Wt,
                                                                          [
                                                                            t[6] ||
                                                                              (t[6] =
                                                                                r(
                                                                                  "span",
                                                                                  {
                                                                                    class:
                                                                                      "inline-block bg-red-700 w-2 h-2 rounded mr-3",
                                                                                  },
                                                                                  null,
                                                                                  -1,
                                                                                )),
                                                                            r(
                                                                              "span",
                                                                              null,
                                                                              i(
                                                                                e.$t(
                                                                                  "index.tip2",
                                                                                ),
                                                                              ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ))
                                                                      : (v(),
                                                                        x(
                                                                          "div",
                                                                          Xt,
                                                                          [
                                                                            l.power !==
                                                                              null &&
                                                                            l.power !==
                                                                              void 0
                                                                              ? (v(),
                                                                                y(
                                                                                  p,
                                                                                  {
                                                                                    key: 0,
                                                                                    class:
                                                                                      "flex items-center text-xl",
                                                                                    tag: "div",
                                                                                    style:
                                                                                      {
                                                                                        color:
                                                                                          "var(--primary-color)",
                                                                                      },
                                                                                  },
                                                                                  {
                                                                                    default:
                                                                                      a(
                                                                                        () => [
                                                                                          l.is_charge
                                                                                            ? b(
                                                                                                "",
                                                                                                !0,
                                                                                              )
                                                                                            : (v(),
                                                                                              x(
                                                                                                "span",
                                                                                                Gt,
                                                                                                i(
                                                                                                  l.power,
                                                                                                ) +
                                                                                                  "%",
                                                                                                1,
                                                                                              )),
                                                                                          d(
                                                                                            k,
                                                                                            {
                                                                                              class:
                                                                                                "ml-2",
                                                                                              power:
                                                                                                l.power,
                                                                                              "is-charge":
                                                                                                l.is_charge,
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            [
                                                                                              "power",
                                                                                              "is-charge",
                                                                                            ],
                                                                                          ),
                                                                                        ],
                                                                                      ),
                                                                                    _: 2,
                                                                                  },
                                                                                  1024,
                                                                                ))
                                                                              : b(
                                                                                  "",
                                                                                  !0,
                                                                                ),
                                                                          ],
                                                                        )),
                                                                    d(
                                                                      p,
                                                                      {
                                                                        class:
                                                                          "flex items-center text-xl",
                                                                        tag: "span",
                                                                        style: {
                                                                          color:
                                                                            "var(--primary-color)",
                                                                        },
                                                                      },
                                                                      {
                                                                        default:
                                                                          a(
                                                                            () => [
                                                                              f(
                                                                                i(
                                                                                  e.$t(
                                                                                    l.mode ??
                                                                                      "",
                                                                                  ),
                                                                                ) +
                                                                                  " ",
                                                                                1,
                                                                              ),
                                                                              l.wireless_connected !==
                                                                              void 0
                                                                                ? (v(),
                                                                                  y(
                                                                                    c,
                                                                                    {
                                                                                      key: 0,
                                                                                      class:
                                                                                        "ml-1",
                                                                                      size: "28",
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        a(
                                                                                          () => [
                                                                                            l.wireless_connected
                                                                                              ? (v(),
                                                                                                y(
                                                                                                  m(
                                                                                                    wt,
                                                                                                  ),
                                                                                                  {
                                                                                                    key: 0,
                                                                                                  },
                                                                                                ))
                                                                                              : (v(),
                                                                                                y(
                                                                                                  m(
                                                                                                    It,
                                                                                                  ),
                                                                                                  {
                                                                                                    key: 1,
                                                                                                  },
                                                                                                )),
                                                                                          ],
                                                                                        ),
                                                                                      _: 2,
                                                                                    },
                                                                                    1024,
                                                                                  ))
                                                                                : b(
                                                                                    "",
                                                                                    !0,
                                                                                  ),
                                                                            ],
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1024,
                                                                    ),
                                                                  ],
                                                                ),
                                                                _: 2,
                                                              },
                                                              1024,
                                                            ),
                                                            d(
                                                              D,
                                                              {
                                                                class:
                                                                  "h-[300px] w-auto mt-3",
                                                                item: l,
                                                              },
                                                              null,
                                                              8,
                                                              ["item"],
                                                            ),
                                                            r(
                                                              "p",
                                                              Qt,
                                                              i(l.product),
                                                              1,
                                                            ),
                                                            d(
                                                              _,
                                                              {
                                                                justify:
                                                                  "space-between",
                                                                vertical: "",
                                                              },
                                                              {
                                                                default: a(
                                                                  () => [
                                                                    r(
                                                                      "div",
                                                                      Zt,
                                                                      [
                                                                        r(
                                                                          "div",
                                                                          null,
                                                                          [
                                                                            r(
                                                                              "div",
                                                                              Kt,
                                                                              i(
                                                                                e.$t(
                                                                                  "other.item1.title",
                                                                                ),
                                                                              ) +
                                                                                "：" +
                                                                                i(
                                                                                  l.receiver_version_text,
                                                                                ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ),
                                                                        l.receiver_version_number <
                                                                        H(
                                                                          l.vendorId,
                                                                          l.productId,
                                                                        ).dongle
                                                                          ? (v(),
                                                                            y(
                                                                              w,
                                                                              {
                                                                                key: 0,
                                                                                type: "success",
                                                                                size: "small",
                                                                                class:
                                                                                  "ml-2",
                                                                              },
                                                                              {
                                                                                default:
                                                                                  a(
                                                                                    () => [
                                                                                      f(
                                                                                        i(
                                                                                          e.$t(
                                                                                            "upgrade.upgradeable",
                                                                                          ),
                                                                                        ),
                                                                                        1,
                                                                                      ),
                                                                                    ],
                                                                                  ),
                                                                                _: 1,
                                                                              },
                                                                            ))
                                                                          : b(
                                                                              "",
                                                                              !0,
                                                                            ),
                                                                      ],
                                                                    ),
                                                                    r(
                                                                      "div",
                                                                      Yt,
                                                                      [
                                                                        r(
                                                                          "div",
                                                                          null,
                                                                          [
                                                                            r(
                                                                              "div",
                                                                              Jt,
                                                                              i(
                                                                                e.$t(
                                                                                  "other.item2.title",
                                                                                ),
                                                                              ) +
                                                                                "：" +
                                                                                i(
                                                                                  l.mouse_version_text,
                                                                                ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ),
                                                                        l.mouse_version_number <
                                                                        H(
                                                                          l.vendorId,
                                                                          l.productId,
                                                                        ).mouse
                                                                          ? (v(),
                                                                            y(
                                                                              w,
                                                                              {
                                                                                key: 0,
                                                                                type: "success",
                                                                                size: "small",
                                                                                class:
                                                                                  "ml-auto",
                                                                              },
                                                                              {
                                                                                default:
                                                                                  a(
                                                                                    () => [
                                                                                      f(
                                                                                        i(
                                                                                          e.$t(
                                                                                            "upgrade.upgradeable",
                                                                                          ),
                                                                                        ),
                                                                                        1,
                                                                                      ),
                                                                                    ],
                                                                                  ),
                                                                                _: 1,
                                                                              },
                                                                            ))
                                                                          : b(
                                                                              "",
                                                                              !0,
                                                                            ),
                                                                      ],
                                                                    ),
                                                                  ],
                                                                ),
                                                                _: 2,
                                                              },
                                                              1024,
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["onClick"],
                                                      ),
                                                    ],
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                  ]))
                                : b("", !0),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ),
              d(
                G,
                {
                  modelValue: te.value,
                  "onUpdate:modelValue": t[2] || (t[2] = (l) => (te.value = l)),
                  closable: !0,
                },
                {
                  header: a(() => [f(i(e.$t("setting.title")), 1)]),
                  content: a(() => [d(Qe)]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
              d(
                G,
                {
                  modelValue: he.value,
                  "onUpdate:modelValue": t[3] || (t[3] = (l) => (he.value = l)),
                  style: { width: "400px" },
                  closable: !1,
                },
                {
                  header: a(() => [f(i(m(u)("other.update.dfu.title")), 1)]),
                  content: a(() => [
                    g.value
                      ? b("", !0)
                      : (v(),
                        y(
                          Ke,
                          {
                            key: 0,
                            description: m(u)("other.update.dfu.empty"),
                          },
                          {
                            icon: a(() => [
                              d(c, null, { default: a(() => [d(Ze)]), _: 1 }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["description"],
                        )),
                    d(o, null, {
                      default: a(() => [
                        g.value
                          ? (v(),
                            y(
                              $,
                              {
                                key: 0,
                                size: "small",
                                class: Ne([
                                  "cursor-pointer",
                                  R.value ? "cursor-not-allowed" : "",
                                ]),
                                style: Lt({ borderColor: m(ue).primaryColor }),
                              },
                              {
                                default: a(() => [
                                  r("p", null, i(me.value), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class", "style"],
                            ))
                          : b("", !0),
                      ]),
                      _: 1,
                    }),
                  ]),
                  action: a(() => [
                    r("div", es, [
                      d(
                        s,
                        { class: "mr-auto", disabled: R.value, onClick: Ie },
                        {
                          default: a(() => [
                            f(i(m(u)("other.update.dfu.get")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled"],
                      ),
                      d(
                        s,
                        { disabled: R.value, onClick: Me },
                        {
                          default: a(() => [f(i(m(u)("common.cancel")), 1)]),
                          _: 1,
                        },
                        8,
                        ["disabled"],
                      ),
                      d(
                        s,
                        {
                          class: "ml-3",
                          type: "error",
                          disabled: !g.value,
                          loading: R.value,
                          onClick: $e,
                        },
                        {
                          default: a(() => [
                            f(i(m(u)("other.update.dfu.start")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled", "loading"],
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
              d(
                G,
                {
                  modelValue: se.value,
                  "onUpdate:modelValue": t[4] || (t[4] = (l) => (se.value = l)),
                  style: { width: "700px" },
                  closable: !1,
                },
                {
                  header: a(() => [f(i(m(u)("other.update.log")), 1)]),
                  content: a(() => [
                    d(
                      Ye,
                      { ref_key: "logInstRef", ref: ke, rows: 30, lines: xe },
                      null,
                      8,
                      ["lines"],
                    ),
                    d(
                      Je,
                      {
                        class: "mt-3",
                        type: "line",
                        percentage: De.value,
                        "indicator-placement": "inside",
                        color: m(ue).successColor,
                        processing: R.value,
                      },
                      null,
                      8,
                      ["percentage", "color", "processing"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
              d(
                G,
                {
                  modelValue: n.visible,
                  "onUpdate:modelValue":
                    t[5] || (t[5] = (l) => (n.visible = l)),
                  style: { width: "1000px" },
                  closable: !0,
                },
                {
                  header: a(() => [
                    f(i(n.device.product) + " ", 1),
                    d(Pe, { class: "!mx-5", vertical: "" }),
                    f(
                      " " +
                        i(e.$t("other.item1.title")) +
                        "：" +
                        i(n.receiver_version_text) +
                        " ",
                      1,
                    ),
                    n.receiver_version_number <
                    H(n.device.vendorId, n.device.productId).dongle
                      ? (v(),
                        y(
                          w,
                          {
                            key: 0,
                            type: "success",
                            size: "small",
                            class: "ml-2",
                          },
                          {
                            default: a(
                              () => t[7] || (t[7] = [f(" 有新固件可升级 ")]),
                            ),
                            _: 1,
                            __: [7],
                          },
                        ))
                      : b("", !0),
                    d(Pe, { class: "!mx-5", vertical: "" }),
                    f(
                      " " +
                        i(e.$t("other.item2.title")) +
                        "：" +
                        i(n.mouse_version_text) +
                        " ",
                      1,
                    ),
                    n.mouse_version_number <
                    H(n.device.vendorId, n.device.productId).mouse
                      ? (v(),
                        y(
                          w,
                          {
                            key: 1,
                            type: "success",
                            size: "small",
                            class: "ml-2",
                          },
                          {
                            default: a(
                              () => t[8] || (t[8] = [f(" 有新固件可升级 ")]),
                            ),
                            _: 1,
                            __: [8],
                          },
                        ))
                      : b("", !0),
                  ]),
                  content: a(() => [
                    d(_, null, {
                      default: a(() => [
                        r("div", null, [
                          (v(!0),
                          x(
                            K,
                            null,
                            ie(n.firmwares, (l, B) =>
                              Re(
                                (v(),
                                y(
                                  $,
                                  {
                                    key: B,
                                    class:
                                      "relative py-4 h-full !border-[#4ec9a0] px-3",
                                    hoverable: "",
                                  },
                                  {
                                    default: a(() => [
                                      r("div", ts, [
                                        d(
                                          w,
                                          { type: "success", size: "small" },
                                          {
                                            default: a(() => [
                                              f(i(e.$t("upgrade.latest")), 1),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      r("div", ss, [
                                        r(
                                          "h3",
                                          os,
                                          i(e.$t("upgrade.latest")),
                                          1,
                                        ),
                                      ]),
                                      r("div", ns, [
                                        r("div", as, [
                                          r("div", rs, [
                                            r("div", ls, [
                                              r(
                                                "div",
                                                is,
                                                i(e.$t("other.item1.title")) +
                                                  " " +
                                                  i(l.dongle.version),
                                                1,
                                              ),
                                              r(
                                                "p",
                                                ds,
                                                i(
                                                  l.dongle.updateLog[
                                                    m(O).language
                                                  ],
                                                ),
                                                1,
                                              ),
                                            ]),
                                            n.isDongle
                                              ? (v(),
                                                y(
                                                  s,
                                                  {
                                                    key: 0,
                                                    type: "primary",
                                                    size: "small",
                                                    onClick: (Se) => _e(B),
                                                  },
                                                  {
                                                    default: a(() => [
                                                      f(
                                                        i(
                                                          n.receiver_version_number >=
                                                            H(
                                                              n.device.vendorId,
                                                              n.device
                                                                .productId,
                                                            ).dongle
                                                            ? "已是最新版本"
                                                            : e.$t(
                                                                "upgrade.upgradeButton",
                                                              ),
                                                        ),
                                                        1,
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["onClick"],
                                                ))
                                              : b("", !0),
                                          ]),
                                        ]),
                                        r("div", null, [
                                          r("div", cs, [
                                            r("div", us, [
                                              r(
                                                "div",
                                                vs,
                                                i(e.$t("other.item2.title")) +
                                                  " " +
                                                  i(l.mouse.version),
                                                1,
                                              ),
                                              r(
                                                "p",
                                                ps,
                                                i(
                                                  l.mouse.updateLog[
                                                    m(O).language
                                                  ],
                                                ),
                                                1,
                                              ),
                                            ]),
                                            n.isDongle
                                              ? b("", !0)
                                              : (v(),
                                                y(
                                                  s,
                                                  {
                                                    key: 0,
                                                    type: "primary",
                                                    size: "small",
                                                    onClick: (Se) => _e(B),
                                                  },
                                                  {
                                                    default: a(() => [
                                                      f(
                                                        i(
                                                          n.mouse_version_number >=
                                                            H(
                                                              n.device.vendorId,
                                                              n.device
                                                                .productId,
                                                            ).mouse
                                                            ? "已是最新版本"
                                                            : e.$t(
                                                                "upgrade.upgradeButton",
                                                              ),
                                                        ),
                                                        1,
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["onClick"],
                                                )),
                                          ]),
                                        ]),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )),
                                [[Fe, l.latest]],
                              ),
                            ),
                            128,
                          )),
                        ]),
                        r("div", _s, [
                          d(
                            $,
                            { class: "h-full" },
                            {
                              default: a(() => [
                                r("div", fs, [
                                  r("h2", ms, i(e.$t("upgrade.history")), 1),
                                ]),
                                r("div", gs, [
                                  (v(!0),
                                  x(
                                    K,
                                    null,
                                    ie(n.firmwares, (l, B) =>
                                      Re(
                                        (v(),
                                        x(
                                          "div",
                                          { key: B, class: "mb-4 last:mb-0" },
                                          [
                                            d(
                                              $,
                                              { class: "relative py-4" },
                                              {
                                                default: a(() => [
                                                  r("div", hs, [
                                                    r("div", bs, [
                                                      r("div", ys, [
                                                        r("div", ws, [
                                                          r(
                                                            "div",
                                                            Is,
                                                            i(
                                                              e.$t(
                                                                "other.item1.title",
                                                              ),
                                                            ) +
                                                              " " +
                                                              i(
                                                                l.dongle
                                                                  .version,
                                                              ),
                                                            1,
                                                          ),
                                                          r(
                                                            "p",
                                                            xs,
                                                            i(
                                                              l.dongle
                                                                .updateLog[
                                                                m(O).language
                                                              ],
                                                            ),
                                                            1,
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]),
                                                    r("div", null, [
                                                      r("div", ks, [
                                                        r("div", Ds, [
                                                          r(
                                                            "div",
                                                            $s,
                                                            i(
                                                              e.$t(
                                                                "other.item2.title",
                                                              ),
                                                            ) +
                                                              " " +
                                                              i(
                                                                l.mouse.version,
                                                              ),
                                                            1,
                                                          ),
                                                          r(
                                                            "p",
                                                            Cs,
                                                            i(
                                                              l.mouse.updateLog[
                                                                m(O).language
                                                              ],
                                                            ),
                                                            1,
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]),
                                                  ]),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                          ],
                                        )),
                                        [[Fe, !l.latest]],
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
            ],
            64,
          )
        );
      };
    },
  });
export { Vs as default };
