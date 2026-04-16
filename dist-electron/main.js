var cd = Object.defineProperty;
var ud = (e, t, r) => t in e ? cd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var W = (e, t, r) => ud(e, typeof t != "symbol" ? t + "" : t, r);
import vt, { Menu as Nl, BrowserWindow as Fl, clipboard as fd, app as Pe, ipcMain as it, dialog as xl, Tray as dd, nativeTheme as hd } from "electron";
import { fileURLToPath as pd } from "node:url";
import wt from "node:path";
import X from "path";
import Qr from "child_process";
import Ke from "os";
import Ue from "fs";
import ni from "util";
import ii from "events";
import Ll from "http";
import md from "https";
import gd from "constants";
import Zr from "stream";
import Ul from "assert";
import en from "crypto";
import kl from "tty";
import pr from "url";
import yd from "string_decoder";
import Ml from "zlib";
import Bl from "node-hid";
import HidAdapter from "../src/native/hidAdapter.mjs";
const Ed = (e) => {
  e.on("context-menu", (t, r) => {
    const n = [
      {
        label: "控制台",
        click() {
          e.openDevTools();
        }
      }
    ];
    r.pageURL.startsWith("https://") ? n.push({
      label: "刷新网页",
      click() {
        e.reloadIgnoringCache();
      }
    }) : n.push({
      label: "刷新",
      click() {
        e.reloadIgnoringCache();
      }
    }), r.editFlags.canCopy && n.push({
      label: "复制",
      click() {
        e.copy();
      }
    }), r.editFlags.canCut && n.push({
      label: "剪切",
      click() {
        e.cut();
      }
    }), r.editFlags.canPaste && n.push({
      label: "粘贴",
      click() {
        e.paste();
      }
    }), r.editFlags.canDelete && n.push({
      label: "删除",
      click() {
        e.delete();
      }
    }), r.linkURL && n.push({
      label: "复制链接地址",
      click() {
        fd.writeText(r.linkURL);
      }
    }), ["image"].indexOf(r.mediaType) > -1 && n.push({
      label: "复制图片",
      click() {
        e.copyImageAt(r.x, r.y);
      }
    }), ["video"].indexOf(r.mediaType) > -1 && n.push({
      label: "下载视频",
      click() {
        e.downloadURL(r.srcURL);
      }
    });
    const i = Nl.buildFromTemplate(n), { x: o, y: s } = r;
    i.popup({ window: Fl.fromWebContents(e), x: o, y: s });
  });
};
Pe.on("web-contents-created", (e, t) => {
  Ed(t), t.on("did-create-window", (r) => {
    r.setMenu(null);
  });
});
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const jl = Ue, Pr = X;
var wd = {
  findAndReadPackageJson: _d,
  tryReadJsonAt: tr
};
function _d() {
  return tr(bd()) || tr(Ad()) || tr(process.resourcesPath, "app.asar") || tr(process.resourcesPath, "app") || tr(process.cwd()) || { name: void 0, version: void 0 };
}
function tr(...e) {
  if (e[0])
    try {
      const t = Pr.join(...e), r = Sd("package.json", t);
      if (!r)
        return;
      const n = JSON.parse(jl.readFileSync(r, "utf8")), i = (n == null ? void 0 : n.productName) || (n == null ? void 0 : n.name);
      return !i || i.toLowerCase() === "electron" ? void 0 : i ? { name: i, version: n == null ? void 0 : n.version } : void 0;
    } catch {
      return;
    }
}
function Sd(e, t) {
  let r = t;
  for (; ; ) {
    const n = Pr.parse(r), i = n.root, o = n.dir;
    if (jl.existsSync(Pr.join(r, e)))
      return Pr.resolve(Pr.join(r, e));
    if (r === i)
      return null;
    r = o;
  }
}
function Ad() {
  const e = process.argv.filter((r) => r.indexOf("--user-data-dir=") === 0);
  return e.length === 0 || typeof e[0] != "string" ? null : e[0].replace("--user-data-dir=", "");
}
function bd() {
  var e;
  try {
    return (e = require.main) == null ? void 0 : e.filename;
  } catch {
    return;
  }
}
const Td = Qr, Nt = Ke, Vt = X, $d = wd;
let Cd = class {
  constructor() {
    W(this, "appName");
    W(this, "appPackageJson");
    W(this, "platform", process.platform);
  }
  getAppLogPath(t = this.getAppName()) {
    return this.platform === "darwin" ? Vt.join(this.getSystemPathHome(), "Library/Logs", t) : Vt.join(this.getAppUserDataPath(t), "logs");
  }
  getAppName() {
    var r;
    const t = this.appName || ((r = this.getAppPackageJson()) == null ? void 0 : r.name);
    if (!t)
      throw new Error(
        "electron-log can't determine the app name. It tried these methods:\n1. Use `electron.app.name`\n2. Use productName or name from the nearest package.json`\nYou can also set it through log.transports.file.setAppName()"
      );
    return t;
  }
  /**
   * @private
   * @returns {undefined}
   */
  getAppPackageJson() {
    return typeof this.appPackageJson != "object" && (this.appPackageJson = $d.findAndReadPackageJson()), this.appPackageJson;
  }
  getAppUserDataPath(t = this.getAppName()) {
    return t ? Vt.join(this.getSystemPathAppData(), t) : void 0;
  }
  getAppVersion() {
    var t;
    return (t = this.getAppPackageJson()) == null ? void 0 : t.version;
  }
  getElectronLogPath() {
    return this.getAppLogPath();
  }
  getMacOsVersion() {
    const t = Number(Nt.release().split(".")[0]);
    return t <= 19 ? `10.${t - 4}` : t - 9;
  }
  /**
   * @protected
   * @returns {string}
   */
  getOsVersion() {
    let t = Nt.type().replace("_", " "), r = Nt.release();
    return t === "Darwin" && (t = "macOS", r = this.getMacOsVersion()), `${t} ${r}`;
  }
  /**
   * @return {PathVariables}
   */
  getPathVariables() {
    const t = this.getAppName(), r = this.getAppVersion(), n = this;
    return {
      appData: this.getSystemPathAppData(),
      appName: t,
      appVersion: r,
      get electronDefaultDir() {
        return n.getElectronLogPath();
      },
      home: this.getSystemPathHome(),
      libraryDefaultDir: this.getAppLogPath(t),
      libraryTemplate: this.getAppLogPath("{appName}"),
      temp: this.getSystemPathTemp(),
      userData: this.getAppUserDataPath(t)
    };
  }
  getSystemPathAppData() {
    const t = this.getSystemPathHome();
    switch (this.platform) {
      case "darwin":
        return Vt.join(t, "Library/Application Support");
      case "win32":
        return process.env.APPDATA || Vt.join(t, "AppData/Roaming");
      default:
        return process.env.XDG_CONFIG_HOME || Vt.join(t, ".config");
    }
  }
  getSystemPathHome() {
    var t;
    return ((t = Nt.homedir) == null ? void 0 : t.call(Nt)) || process.env.HOME;
  }
  getSystemPathTemp() {
    return Nt.tmpdir();
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: void 0,
      os: this.getOsVersion()
    };
  }
  isDev() {
    return process.env.NODE_ENV === "development" || process.env.ELECTRON_IS_DEV === "1";
  }
  isElectron() {
    return !!process.versions.electron;
  }
  onAppEvent(t, r) {
  }
  onAppReady(t) {
    t();
  }
  onEveryWebContentsEvent(t, r) {
  }
  /**
   * Listen to async messages sent from opposite process
   * @param {string} channel
   * @param {function} listener
   */
  onIpc(t, r) {
  }
  onIpcInvoke(t, r) {
  }
  /**
   * @param {string} url
   * @param {Function} [logFunction]
   */
  openUrl(t, r = console.error) {
    const i = { darwin: "open", win32: "start", linux: "xdg-open" }[process.platform] || "xdg-open";
    Td.exec(`${i} ${t}`, {}, (o) => {
      o && r(o);
    });
  }
  setAppName(t) {
    this.appName = t;
  }
  setPlatform(t) {
    this.platform = t;
  }
  setPreloadFileForSessions({
    filePath: t,
    // eslint-disable-line no-unused-vars
    includeFutureSession: r = !0,
    // eslint-disable-line no-unused-vars
    getSessions: n = () => []
    // eslint-disable-line no-unused-vars
  }) {
  }
  /**
   * Sent a message to opposite process
   * @param {string} channel
   * @param {any} message
   */
  sendIpc(t, r) {
  }
  showErrorBox(t, r) {
  }
};
var Od = Cd;
const Id = X, Pd = Od;
let Dd = class extends Pd {
  /**
   * @param {object} options
   * @param {typeof Electron} [options.electron]
   */
  constructor({ electron: r } = {}) {
    super();
    /**
     * @type {typeof Electron}
     */
    W(this, "electron");
    this.electron = r;
  }
  getAppName() {
    var n, i;
    let r;
    try {
      r = this.appName || ((n = this.electron.app) == null ? void 0 : n.name) || ((i = this.electron.app) == null ? void 0 : i.getName());
    } catch {
    }
    return r || super.getAppName();
  }
  getAppUserDataPath(r) {
    return this.getPath("userData") || super.getAppUserDataPath(r);
  }
  getAppVersion() {
    var n;
    let r;
    try {
      r = (n = this.electron.app) == null ? void 0 : n.getVersion();
    } catch {
    }
    return r || super.getAppVersion();
  }
  getElectronLogPath() {
    return this.getPath("logs") || super.getElectronLogPath();
  }
  /**
   * @private
   * @param {any} name
   * @returns {string|undefined}
   */
  getPath(r) {
    var n;
    try {
      return (n = this.electron.app) == null ? void 0 : n.getPath(r);
    } catch {
      return;
    }
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: `Electron ${process.versions.electron}`,
      os: this.getOsVersion()
    };
  }
  getSystemPathAppData() {
    return this.getPath("appData") || super.getSystemPathAppData();
  }
  isDev() {
    var r;
    return ((r = this.electron.app) == null ? void 0 : r.isPackaged) !== void 0 ? !this.electron.app.isPackaged : typeof process.execPath == "string" ? Id.basename(process.execPath).toLowerCase().startsWith("electron") : super.isDev();
  }
  onAppEvent(r, n) {
    var i;
    return (i = this.electron.app) == null || i.on(r, n), () => {
      var o;
      (o = this.electron.app) == null || o.off(r, n);
    };
  }
  onAppReady(r) {
    var n, i, o;
    (n = this.electron.app) != null && n.isReady() ? r() : (i = this.electron.app) != null && i.once ? (o = this.electron.app) == null || o.once("ready", r) : r();
  }
  onEveryWebContentsEvent(r, n) {
    var o, s, a;
    return (s = (o = this.electron.webContents) == null ? void 0 : o.getAllWebContents()) == null || s.forEach((l) => {
      l.on(r, n);
    }), (a = this.electron.app) == null || a.on("web-contents-created", i), () => {
      var l, d;
      (l = this.electron.webContents) == null || l.getAllWebContents().forEach((c) => {
        c.off(r, n);
      }), (d = this.electron.app) == null || d.off("web-contents-created", i);
    };
    function i(l, d) {
      d.on(r, n);
    }
  }
  /**
   * Listen to async messages sent from opposite process
   * @param {string} channel
   * @param {function} listener
   */
  onIpc(r, n) {
    var i;
    (i = this.electron.ipcMain) == null || i.on(r, n);
  }
  onIpcInvoke(r, n) {
    var i, o;
    (o = (i = this.electron.ipcMain) == null ? void 0 : i.handle) == null || o.call(i, r, n);
  }
  /**
   * @param {string} url
   * @param {Function} [logFunction]
   */
  openUrl(r, n = console.error) {
    var i;
    (i = this.electron.shell) == null || i.openExternal(r).catch(n);
  }
  setPreloadFileForSessions({
    filePath: r,
    includeFutureSession: n = !0,
    getSessions: i = () => {
      var o;
      return [(o = this.electron.session) == null ? void 0 : o.defaultSession];
    }
  }) {
    for (const s of i().filter(Boolean))
      o(s);
    n && this.onAppEvent("session-created", (s) => {
      o(s);
    });
    function o(s) {
      typeof s.registerPreloadScript == "function" ? s.registerPreloadScript({
        filePath: r,
        id: "electron-log-preload",
        type: "frame"
      }) : s.setPreloads([...s.getPreloads(), r]);
    }
  }
  /**
   * Sent a message to opposite process
   * @param {string} channel
   * @param {any} message
   */
  sendIpc(r, n) {
    var i, o;
    (o = (i = this.electron.BrowserWindow) == null ? void 0 : i.getAllWindows()) == null || o.forEach((s) => {
      var a, l;
      ((a = s.webContents) == null ? void 0 : a.isDestroyed()) === !1 && ((l = s.webContents) == null ? void 0 : l.isCrashed()) === !1 && s.webContents.send(r, n);
    });
  }
  showErrorBox(r, n) {
    var i;
    (i = this.electron.dialog) == null || i.showErrorBox(r, n);
  }
};
var Rd = Dd, Hl = { exports: {} };
(function(e) {
  let t = {};
  try {
    t = require("electron");
  } catch {
  }
  t.ipcRenderer && r(t), e.exports = r;
  function r({ contextBridge: n, ipcRenderer: i }) {
    if (!i)
      return;
    i.on("__ELECTRON_LOG_IPC__", (s, a) => {
      window.postMessage({ cmd: "message", ...a });
    }), i.invoke("__ELECTRON_LOG__", { cmd: "getOptions" }).catch((s) => console.error(new Error(
      `electron-log isn't initialized in the main process. Please call log.initialize() before. ${s.message}`
    )));
    const o = {
      sendToMain(s) {
        try {
          i.send("__ELECTRON_LOG__", s);
        } catch (a) {
          console.error("electronLog.sendToMain ", a, "data:", s), i.send("__ELECTRON_LOG__", {
            cmd: "errorHandler",
            error: { message: a == null ? void 0 : a.message, stack: a == null ? void 0 : a.stack },
            errorName: "sendToMain"
          });
        }
      },
      log(...s) {
        o.sendToMain({ data: s, level: "info" });
      }
    };
    for (const s of ["error", "warn", "info", "verbose", "debug", "silly"])
      o[s] = (...a) => o.sendToMain({
        data: a,
        level: s
      });
    if (n && process.contextIsolated)
      try {
        n.exposeInMainWorld("__electronLog", o);
      } catch {
      }
    typeof window == "object" ? window.__electronLog = o : __electronLog = o;
  }
})(Hl);
var Nd = Hl.exports;
const Os = Ue, Fd = Ke, Is = X, xd = Nd;
var Ld = {
  initialize({
    externalApi: e,
    getSessions: t,
    includeFutureSession: r,
    logger: n,
    preload: i = !0,
    spyRendererConsole: o = !1
  }) {
    e.onAppReady(() => {
      try {
        i && Ud({
          externalApi: e,
          getSessions: t,
          includeFutureSession: r,
          preloadOption: i
        }), o && kd({ externalApi: e, logger: n });
      } catch (s) {
        n.warn(s);
      }
    });
  }
};
function Ud({
  externalApi: e,
  getSessions: t,
  includeFutureSession: r,
  preloadOption: n
}) {
  let i = typeof n == "string" ? n : void 0;
  try {
    i = Is.resolve(
      __dirname,
      "../renderer/electron-log-preload.js"
    );
  } catch {
  }
  if (!i || !Os.existsSync(i)) {
    i = Is.join(
      e.getAppUserDataPath() || Fd.tmpdir(),
      "electron-log-preload.js"
    );
    const o = `
      try {
        (${xd.toString()})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    `;
    Os.writeFileSync(i, o, "utf8");
  }
  e.setPreloadFileForSessions({
    filePath: i,
    includeFutureSession: r,
    getSessions: t
  });
}
function kd({ externalApi: e, logger: t }) {
  const r = ["debug", "info", "warn", "error"];
  e.onEveryWebContentsEvent(
    "console-message",
    (n, i, o) => {
      t.processMessage({
        data: [o],
        level: r[i],
        variables: { processType: "renderer" }
      });
    }
  );
}
var Md = Bd;
function Bd(e) {
  return Object.defineProperties(t, {
    defaultLabel: { value: "", writable: !0 },
    labelPadding: { value: !0, writable: !0 },
    maxLabelLength: { value: 0, writable: !0 },
    labelLength: {
      get() {
        switch (typeof t.labelPadding) {
          case "boolean":
            return t.labelPadding ? t.maxLabelLength : 0;
          case "number":
            return t.labelPadding;
          default:
            return 0;
        }
      }
    }
  });
  function t(r) {
    t.maxLabelLength = Math.max(t.maxLabelLength, r.length);
    const n = {};
    for (const i of e.levels)
      n[i] = (...o) => e.logData(o, { level: i, scope: r });
    return n.log = n.info, n;
  }
}
let jd = class {
  constructor({ processMessage: t }) {
    this.processMessage = t, this.buffer = [], this.enabled = !1, this.begin = this.begin.bind(this), this.commit = this.commit.bind(this), this.reject = this.reject.bind(this);
  }
  addMessage(t) {
    this.buffer.push(t);
  }
  begin() {
    this.enabled = [];
  }
  commit() {
    this.enabled = !1, this.buffer.forEach((t) => this.processMessage(t)), this.buffer = [];
  }
  reject() {
    this.enabled = !1, this.buffer = [];
  }
};
var Hd = jd;
const qd = Md, Gd = Hd;
var yt;
let Wd = (yt = class {
  constructor({
    allowUnknownLevel: t = !1,
    dependencies: r = {},
    errorHandler: n,
    eventLogger: i,
    initializeFn: o,
    isDev: s = !1,
    levels: a = ["error", "warn", "info", "verbose", "debug", "silly"],
    logId: l,
    transportFactories: d = {},
    variables: c
  } = {}) {
    W(this, "dependencies", {});
    W(this, "errorHandler", null);
    W(this, "eventLogger", null);
    W(this, "functions", {});
    W(this, "hooks", []);
    W(this, "isDev", !1);
    W(this, "levels", null);
    W(this, "logId", null);
    W(this, "scope", null);
    W(this, "transports", {});
    W(this, "variables", {});
    this.addLevel = this.addLevel.bind(this), this.create = this.create.bind(this), this.initialize = this.initialize.bind(this), this.logData = this.logData.bind(this), this.processMessage = this.processMessage.bind(this), this.allowUnknownLevel = t, this.buffering = new Gd(this), this.dependencies = r, this.initializeFn = o, this.isDev = s, this.levels = a, this.logId = l, this.scope = qd(this), this.transportFactories = d, this.variables = c || {};
    for (const f of this.levels)
      this.addLevel(f, !1);
    this.log = this.info, this.functions.log = this.log, this.errorHandler = n, n == null || n.setOptions({ ...r, logFn: this.error }), this.eventLogger = i, i == null || i.setOptions({ ...r, logger: this });
    for (const [f, p] of Object.entries(d))
      this.transports[f] = p(this, r);
    yt.instances[l] = this;
  }
  static getInstance({ logId: t }) {
    return this.instances[t] || this.instances.default;
  }
  addLevel(t, r = this.levels.length) {
    r !== !1 && this.levels.splice(r, 0, t), this[t] = (...n) => this.logData(n, { level: t }), this.functions[t] = this[t];
  }
  catchErrors(t) {
    return this.processMessage(
      {
        data: ["log.catchErrors is deprecated. Use log.errorHandler instead"],
        level: "warn"
      },
      { transports: ["console"] }
    ), this.errorHandler.startCatching(t);
  }
  create(t) {
    return typeof t == "string" && (t = { logId: t }), new yt({
      dependencies: this.dependencies,
      errorHandler: this.errorHandler,
      initializeFn: this.initializeFn,
      isDev: this.isDev,
      transportFactories: this.transportFactories,
      variables: { ...this.variables },
      ...t
    });
  }
  compareLevels(t, r, n = this.levels) {
    const i = n.indexOf(t), o = n.indexOf(r);
    return o === -1 || i === -1 ? !0 : o <= i;
  }
  initialize(t = {}) {
    this.initializeFn({ logger: this, ...this.dependencies, ...t });
  }
  logData(t, r = {}) {
    this.buffering.enabled ? this.buffering.addMessage({ data: t, date: /* @__PURE__ */ new Date(), ...r }) : this.processMessage({ data: t, ...r });
  }
  processMessage(t, { transports: r = this.transports } = {}) {
    if (t.cmd === "errorHandler") {
      this.errorHandler.handle(t.error, {
        errorName: t.errorName,
        processType: "renderer",
        showDialog: !!t.showDialog
      });
      return;
    }
    let n = t.level;
    this.allowUnknownLevel || (n = this.levels.includes(t.level) ? t.level : "info");
    const i = {
      date: /* @__PURE__ */ new Date(),
      logId: this.logId,
      ...t,
      level: n,
      variables: {
        ...this.variables,
        ...t.variables
      }
    };
    for (const [o, s] of this.transportEntries(r))
      if (!(typeof s != "function" || s.level === !1) && this.compareLevels(s.level, t.level))
        try {
          const a = this.hooks.reduce((l, d) => l && d(l, s, o), i);
          a && s({ ...a, data: [...a.data] });
        } catch (a) {
          this.processInternalErrorFn(a);
        }
  }
  processInternalErrorFn(t) {
  }
  transportEntries(t = this.transports) {
    return (Array.isArray(t) ? t : Object.entries(t)).map((n) => {
      switch (typeof n) {
        case "string":
          return this.transports[n] ? [n, this.transports[n]] : null;
        case "function":
          return [n.name, n];
        default:
          return Array.isArray(n) ? n : null;
      }
    }).filter(Boolean);
  }
}, W(yt, "instances", {}), yt);
var Vd = Wd;
let zd = class {
  constructor({
    externalApi: t,
    logFn: r = void 0,
    onError: n = void 0,
    showDialog: i = void 0
  } = {}) {
    W(this, "externalApi");
    W(this, "isActive", !1);
    W(this, "logFn");
    W(this, "onError");
    W(this, "showDialog", !0);
    this.createIssue = this.createIssue.bind(this), this.handleError = this.handleError.bind(this), this.handleRejection = this.handleRejection.bind(this), this.setOptions({ externalApi: t, logFn: r, onError: n, showDialog: i }), this.startCatching = this.startCatching.bind(this), this.stopCatching = this.stopCatching.bind(this);
  }
  handle(t, {
    logFn: r = this.logFn,
    onError: n = this.onError,
    processType: i = "browser",
    showDialog: o = this.showDialog,
    errorName: s = ""
  } = {}) {
    var a;
    t = Yd(t);
    try {
      if (typeof n == "function") {
        const l = ((a = this.externalApi) == null ? void 0 : a.getVersions()) || {}, d = this.createIssue;
        if (n({
          createIssue: d,
          error: t,
          errorName: s,
          processType: i,
          versions: l
        }) === !1)
          return;
      }
      s ? r(s, t) : r(t), o && !s.includes("rejection") && this.externalApi && this.externalApi.showErrorBox(
        `A JavaScript error occurred in the ${i} process`,
        t.stack
      );
    } catch {
      console.error(t);
    }
  }
  setOptions({ externalApi: t, logFn: r, onError: n, showDialog: i }) {
    typeof t == "object" && (this.externalApi = t), typeof r == "function" && (this.logFn = r), typeof n == "function" && (this.onError = n), typeof i == "boolean" && (this.showDialog = i);
  }
  startCatching({ onError: t, showDialog: r } = {}) {
    this.isActive || (this.isActive = !0, this.setOptions({ onError: t, showDialog: r }), process.on("uncaughtException", this.handleError), process.on("unhandledRejection", this.handleRejection));
  }
  stopCatching() {
    this.isActive = !1, process.removeListener("uncaughtException", this.handleError), process.removeListener("unhandledRejection", this.handleRejection);
  }
  createIssue(t, r) {
    var n;
    (n = this.externalApi) == null || n.openUrl(
      `${t}?${new URLSearchParams(r).toString()}`
    );
  }
  handleError(t) {
    this.handle(t, { errorName: "Unhandled" });
  }
  handleRejection(t) {
    const r = t instanceof Error ? t : new Error(JSON.stringify(t));
    this.handle(r, { errorName: "Unhandled rejection" });
  }
};
function Yd(e) {
  if (e instanceof Error)
    return e;
  if (e && typeof e == "object") {
    if (e.message)
      return Object.assign(new Error(e.message), e);
    try {
      return new Error(JSON.stringify(e));
    } catch (t) {
      return new Error(`Couldn't normalize error ${String(e)}: ${t}`);
    }
  }
  return new Error(`Can't normalize error ${String(e)}`);
}
var Xd = zd;
let Jd = class {
  constructor(t = {}) {
    W(this, "disposers", []);
    W(this, "format", "{eventSource}#{eventName}:");
    W(this, "formatters", {
      app: {
        "certificate-error": ({ args: t }) => this.arrayToObject(t.slice(1, 4), [
          "url",
          "error",
          "certificate"
        ]),
        "child-process-gone": ({ args: t }) => t.length === 1 ? t[0] : t,
        "render-process-gone": ({ args: [t, r] }) => r && typeof r == "object" ? { ...r, ...this.getWebContentsDetails(t) } : []
      },
      webContents: {
        "console-message": ({ args: [t, r, n, i] }) => {
          if (!(t < 3))
            return { message: r, source: `${i}:${n}` };
        },
        "did-fail-load": ({ args: t }) => this.arrayToObject(t, [
          "errorCode",
          "errorDescription",
          "validatedURL",
          "isMainFrame",
          "frameProcessId",
          "frameRoutingId"
        ]),
        "did-fail-provisional-load": ({ args: t }) => this.arrayToObject(t, [
          "errorCode",
          "errorDescription",
          "validatedURL",
          "isMainFrame",
          "frameProcessId",
          "frameRoutingId"
        ]),
        "plugin-crashed": ({ args: t }) => this.arrayToObject(t, ["name", "version"]),
        "preload-error": ({ args: t }) => this.arrayToObject(t, ["preloadPath", "error"])
      }
    });
    W(this, "events", {
      app: {
        "certificate-error": !0,
        "child-process-gone": !0,
        "render-process-gone": !0
      },
      webContents: {
        // 'console-message': true,
        "did-fail-load": !0,
        "did-fail-provisional-load": !0,
        "plugin-crashed": !0,
        "preload-error": !0,
        unresponsive: !0
      }
    });
    W(this, "externalApi");
    W(this, "level", "error");
    W(this, "scope", "");
    this.setOptions(t);
  }
  setOptions({
    events: t,
    externalApi: r,
    level: n,
    logger: i,
    format: o,
    formatters: s,
    scope: a
  }) {
    typeof t == "object" && (this.events = t), typeof r == "object" && (this.externalApi = r), typeof n == "string" && (this.level = n), typeof i == "object" && (this.logger = i), (typeof o == "string" || typeof o == "function") && (this.format = o), typeof s == "object" && (this.formatters = s), typeof a == "string" && (this.scope = a);
  }
  startLogging(t = {}) {
    this.setOptions(t), this.disposeListeners();
    for (const r of this.getEventNames(this.events.app))
      this.disposers.push(
        this.externalApi.onAppEvent(r, (...n) => {
          this.handleEvent({ eventSource: "app", eventName: r, handlerArgs: n });
        })
      );
    for (const r of this.getEventNames(this.events.webContents))
      this.disposers.push(
        this.externalApi.onEveryWebContentsEvent(
          r,
          (...n) => {
            this.handleEvent(
              { eventSource: "webContents", eventName: r, handlerArgs: n }
            );
          }
        )
      );
  }
  stopLogging() {
    this.disposeListeners();
  }
  arrayToObject(t, r) {
    const n = {};
    return r.forEach((i, o) => {
      n[i] = t[o];
    }), t.length > r.length && (n.unknownArgs = t.slice(r.length)), n;
  }
  disposeListeners() {
    this.disposers.forEach((t) => t()), this.disposers = [];
  }
  formatEventLog({ eventName: t, eventSource: r, handlerArgs: n }) {
    var c;
    const [i, ...o] = n;
    if (typeof this.format == "function")
      return this.format({ args: o, event: i, eventName: t, eventSource: r });
    const s = (c = this.formatters[r]) == null ? void 0 : c[t];
    let a = o;
    if (typeof s == "function" && (a = s({ args: o, event: i, eventName: t, eventSource: r })), !a)
      return;
    const l = {};
    return Array.isArray(a) ? l.args = a : typeof a == "object" && Object.assign(l, a), r === "webContents" && Object.assign(l, this.getWebContentsDetails(i == null ? void 0 : i.sender)), [this.format.replace("{eventSource}", r === "app" ? "App" : "WebContents").replace("{eventName}", t), l];
  }
  getEventNames(t) {
    return !t || typeof t != "object" ? [] : Object.entries(t).filter(([r, n]) => n).map(([r]) => r);
  }
  getWebContentsDetails(t) {
    if (!(t != null && t.loadURL))
      return {};
    try {
      return {
        webContents: {
          id: t.id,
          url: t.getURL()
        }
      };
    } catch {
      return {};
    }
  }
  handleEvent({ eventName: t, eventSource: r, handlerArgs: n }) {
    var o;
    const i = this.formatEventLog({ eventName: t, eventSource: r, handlerArgs: n });
    if (i) {
      const s = this.scope ? this.logger.scope(this.scope) : this.logger;
      (o = s == null ? void 0 : s[this.level]) == null || o.call(s, ...i);
    }
  }
};
var Kd = Jd, tn = { transform: Qd };
function Qd({
  logger: e,
  message: t,
  transport: r,
  initialData: n = (t == null ? void 0 : t.data) || [],
  transforms: i = r == null ? void 0 : r.transforms
}) {
  return i.reduce((o, s) => typeof s == "function" ? s({ data: o, logger: e, message: t, transport: r }) : o, n);
}
const { transform: Zd } = tn;
var ql = {
  concatFirstStringElements: eh,
  format({ message: e, logger: t, transport: r, data: n = e == null ? void 0 : e.data }) {
    switch (typeof r.format) {
      case "string":
        return Zd({
          message: e,
          logger: t,
          transforms: [nh, rh, ih],
          transport: r,
          initialData: [r.format, ...n]
        });
      case "function":
        return r.format({
          data: n,
          level: (e == null ? void 0 : e.level) || "info",
          logger: t,
          message: e,
          transport: r
        });
      default:
        return n;
    }
  }
};
function eh({ data: e }) {
  return typeof e[0] != "string" || typeof e[1] != "string" || e[0].match(/%[1cdfiOos]/) ? e : [`${e[0]} ${e[1]}`, ...e.slice(2)];
}
function th(e) {
  const t = Math.abs(e), r = e > 0 ? "-" : "+", n = Math.floor(t / 60).toString().padStart(2, "0"), i = (t % 60).toString().padStart(2, "0");
  return `${r}${n}:${i}`;
}
function rh({ data: e, logger: t, message: r }) {
  const { defaultLabel: n, labelLength: i } = (t == null ? void 0 : t.scope) || {}, o = e[0];
  let s = r.scope;
  s || (s = n);
  let a;
  return s === "" ? a = i > 0 ? "".padEnd(i + 3) : "" : typeof s == "string" ? a = ` (${s})`.padEnd(i + 3) : a = "", e[0] = o.replace("{scope}", a), e;
}
function nh({ data: e, message: t }) {
  let r = e[0];
  if (typeof r != "string")
    return e;
  r = r.replace("{level}]", `${t.level}]`.padEnd(6, " "));
  const n = t.date || /* @__PURE__ */ new Date();
  return e[0] = r.replace(/\{(\w+)}/g, (i, o) => {
    var s;
    switch (o) {
      case "level":
        return t.level || "info";
      case "logId":
        return t.logId;
      case "y":
        return n.getFullYear().toString(10);
      case "m":
        return (n.getMonth() + 1).toString(10).padStart(2, "0");
      case "d":
        return n.getDate().toString(10).padStart(2, "0");
      case "h":
        return n.getHours().toString(10).padStart(2, "0");
      case "i":
        return n.getMinutes().toString(10).padStart(2, "0");
      case "s":
        return n.getSeconds().toString(10).padStart(2, "0");
      case "ms":
        return n.getMilliseconds().toString(10).padStart(3, "0");
      case "z":
        return th(n.getTimezoneOffset());
      case "iso":
        return n.toISOString();
      default:
        return ((s = t.variables) == null ? void 0 : s[o]) || i;
    }
  }).trim(), e;
}
function ih({ data: e }) {
  const t = e[0];
  if (typeof t != "string")
    return e;
  if (t.lastIndexOf("{text}") === t.length - 6)
    return e[0] = t.replace(/\s?{text}/, ""), e[0] === "" && e.shift(), e;
  const n = t.split("{text}");
  let i = [];
  return n[0] !== "" && i.push(n[0]), i = i.concat(e.slice(1)), n[1] !== "" && i.push(n[1]), i;
}
var Gl = { exports: {} };
(function(e) {
  const t = ni;
  e.exports = {
    serialize: n,
    maxDepth({ data: i, transport: o, depth: s = (o == null ? void 0 : o.depth) ?? 6 }) {
      if (!i)
        return i;
      if (s < 1)
        return Array.isArray(i) ? "[array]" : typeof i == "object" && i ? "[object]" : i;
      if (Array.isArray(i))
        return i.map((l) => e.exports.maxDepth({
          data: l,
          depth: s - 1
        }));
      if (typeof i != "object" || i && typeof i.toISOString == "function")
        return i;
      if (i === null)
        return null;
      if (i instanceof Error)
        return i;
      const a = {};
      for (const l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (a[l] = e.exports.maxDepth({
          data: i[l],
          depth: s - 1
        }));
      return a;
    },
    toJSON({ data: i }) {
      return JSON.parse(JSON.stringify(i, r()));
    },
    toString({ data: i, transport: o }) {
      const s = (o == null ? void 0 : o.inspectOptions) || {}, a = i.map((l) => {
        if (l !== void 0)
          try {
            const d = JSON.stringify(l, r(), "  ");
            return d === void 0 ? void 0 : JSON.parse(d);
          } catch {
            return l;
          }
      });
      return t.formatWithOptions(s, ...a);
    }
  };
  function r(i = {}) {
    const o = /* @__PURE__ */ new WeakSet();
    return function(s, a) {
      if (typeof a == "object" && a !== null) {
        if (o.has(a))
          return;
        o.add(a);
      }
      return n(s, a, i);
    };
  }
  function n(i, o, s = {}) {
    const a = (s == null ? void 0 : s.serializeMapAndSet) !== !1;
    return o instanceof Error ? o.stack : o && (typeof o == "function" ? `[function] ${o.toString()}` : o instanceof Date ? o.toISOString() : a && o instanceof Map && Object.fromEntries ? Object.fromEntries(o) : a && o instanceof Set && Array.from ? Array.from(o) : o);
  }
})(Gl);
var oi = Gl.exports, Do = {
  applyAnsiStyles({ data: e }) {
    return Ps(e, oh, sh);
  },
  removeStyles({ data: e }) {
    return Ps(e, () => "");
  }
};
const Wl = {
  unset: "\x1B[0m",
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m"
};
function oh(e) {
  const t = e.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
  return Wl[t] || "";
}
function sh(e) {
  return e + Wl.unset;
}
function Ps(e, t, r) {
  const n = {};
  return e.reduce((i, o, s, a) => {
    if (n[s])
      return i;
    if (typeof o == "string") {
      let l = s, d = !1;
      o = o.replace(/%[1cdfiOos]/g, (c) => {
        if (l += 1, c !== "%c")
          return c;
        const f = a[l];
        return typeof f == "string" ? (n[l] = !0, d = !0, t(f, o)) : c;
      }), d && r && (o = r(o));
    }
    return i.push(o), i;
  }, []);
}
const {
  concatFirstStringElements: ah,
  format: lh
} = ql, { maxDepth: ch, toJSON: uh } = oi, {
  applyAnsiStyles: fh,
  removeStyles: dh
} = Do, { transform: hh } = tn, Ds = {
  error: console.error,
  warn: console.warn,
  info: console.info,
  verbose: console.info,
  debug: console.debug,
  silly: console.debug,
  log: console.log
};
var ph = zl;
const mh = process.platform === "win32" ? ">" : "›", Vl = `%c{h}:{i}:{s}.{ms}{scope}%c ${mh} {text}`;
Object.assign(zl, {
  DEFAULT_FORMAT: Vl
});
function zl(e) {
  return Object.assign(t, {
    format: Vl,
    level: "silly",
    transforms: [
      gh,
      lh,
      Eh,
      ah,
      ch,
      uh
    ],
    useStyles: process.env.FORCE_STYLES,
    writeFn({ message: r }) {
      (Ds[r.level] || Ds.info)(...r.data);
    }
  });
  function t(r) {
    const n = hh({ logger: e, message: r, transport: t });
    t.writeFn({
      message: { ...r, data: n }
    });
  }
}
function gh({ data: e, message: t, transport: r }) {
  return typeof r.format != "string" || !r.format.includes("%c") ? e : [`color:${vh(t.level)}`, "color:unset", ...e];
}
function yh(e, t) {
  if (typeof e == "boolean")
    return e;
  const n = t === "error" || t === "warn" ? process.stderr : process.stdout;
  return n && n.isTTY;
}
function Eh(e) {
  const { message: t, transport: r } = e;
  return (yh(r.useStyles, t.level) ? fh : dh)(e);
}
function vh(e) {
  const t = { error: "red", warn: "yellow", info: "cyan", default: "unset" };
  return t[e] || t.default;
}
const wh = ii, pt = Ue, Rs = Ke;
let _h = class extends wh {
  constructor({
    path: r,
    writeOptions: n = { encoding: "utf8", flag: "a", mode: 438 },
    writeAsync: i = !1
  }) {
    super();
    W(this, "asyncWriteQueue", []);
    W(this, "bytesWritten", 0);
    W(this, "hasActiveAsyncWriting", !1);
    W(this, "path", null);
    W(this, "initialSize");
    W(this, "writeOptions", null);
    W(this, "writeAsync", !1);
    this.path = r, this.writeOptions = n, this.writeAsync = i;
  }
  get size() {
    return this.getSize();
  }
  clear() {
    try {
      return pt.writeFileSync(this.path, "", {
        mode: this.writeOptions.mode,
        flag: "w"
      }), this.reset(), !0;
    } catch (r) {
      return r.code === "ENOENT" ? !0 : (this.emit("error", r, this), !1);
    }
  }
  crop(r) {
    try {
      const n = Sh(this.path, r || 4096);
      this.clear(), this.writeLine(`[log cropped]${Rs.EOL}${n}`);
    } catch (n) {
      this.emit(
        "error",
        new Error(`Couldn't crop file ${this.path}. ${n.message}`),
        this
      );
    }
  }
  getSize() {
    if (this.initialSize === void 0)
      try {
        const r = pt.statSync(this.path);
        this.initialSize = r.size;
      } catch {
        this.initialSize = 0;
      }
    return this.initialSize + this.bytesWritten;
  }
  increaseBytesWrittenCounter(r) {
    this.bytesWritten += Buffer.byteLength(r, this.writeOptions.encoding);
  }
  isNull() {
    return !1;
  }
  nextAsyncWrite() {
    const r = this;
    if (this.hasActiveAsyncWriting || this.asyncWriteQueue.length === 0)
      return;
    const n = this.asyncWriteQueue.join("");
    this.asyncWriteQueue = [], this.hasActiveAsyncWriting = !0, pt.writeFile(this.path, n, this.writeOptions, (i) => {
      r.hasActiveAsyncWriting = !1, i ? r.emit(
        "error",
        new Error(`Couldn't write to ${r.path}. ${i.message}`),
        this
      ) : r.increaseBytesWrittenCounter(n), r.nextAsyncWrite();
    });
  }
  reset() {
    this.initialSize = void 0, this.bytesWritten = 0;
  }
  toString() {
    return this.path;
  }
  writeLine(r) {
    if (r += Rs.EOL, this.writeAsync) {
      this.asyncWriteQueue.push(r), this.nextAsyncWrite();
      return;
    }
    try {
      pt.writeFileSync(this.path, r, this.writeOptions), this.increaseBytesWrittenCounter(r);
    } catch (n) {
      this.emit(
        "error",
        new Error(`Couldn't write to ${this.path}. ${n.message}`),
        this
      );
    }
  }
};
var Yl = _h;
function Sh(e, t) {
  const r = Buffer.alloc(t), n = pt.statSync(e), i = Math.min(n.size, t), o = Math.max(0, n.size - t), s = pt.openSync(e, "r"), a = pt.readSync(s, r, 0, i, o);
  return pt.closeSync(s), r.toString("utf8", 0, a);
}
const Ah = Yl;
let bh = class extends Ah {
  clear() {
  }
  crop() {
  }
  getSize() {
    return 0;
  }
  isNull() {
    return !0;
  }
  writeLine() {
  }
};
var Th = bh;
const $h = ii, Ns = Ue, Fs = X, Ch = Yl, Oh = Th;
let Ih = class extends $h {
  constructor() {
    super();
    W(this, "store", {});
    this.emitError = this.emitError.bind(this);
  }
  /**
   * Provide a File object corresponding to the filePath
   * @param {string} filePath
   * @param {WriteOptions} [writeOptions]
   * @param {boolean} [writeAsync]
   * @return {File}
   */
  provide({ filePath: r, writeOptions: n = {}, writeAsync: i = !1 }) {
    let o;
    try {
      if (r = Fs.resolve(r), this.store[r])
        return this.store[r];
      o = this.createFile({ filePath: r, writeOptions: n, writeAsync: i });
    } catch (s) {
      o = new Oh({ path: r }), this.emitError(s, o);
    }
    return o.on("error", this.emitError), this.store[r] = o, o;
  }
  /**
   * @param {string} filePath
   * @param {WriteOptions} writeOptions
   * @param {boolean} async
   * @return {File}
   * @private
   */
  createFile({ filePath: r, writeOptions: n, writeAsync: i }) {
    return this.testFileWriting({ filePath: r, writeOptions: n }), new Ch({ path: r, writeOptions: n, writeAsync: i });
  }
  /**
   * @param {Error} error
   * @param {File} file
   * @private
   */
  emitError(r, n) {
    this.emit("error", r, n);
  }
  /**
   * @param {string} filePath
   * @param {WriteOptions} writeOptions
   * @private
   */
  testFileWriting({ filePath: r, writeOptions: n }) {
    Ns.mkdirSync(Fs.dirname(r), { recursive: !0 }), Ns.writeFileSync(r, "", { flag: "a", mode: n.mode });
  }
};
var Ph = Ih;
const An = Ue, Dh = Ke, br = X, Rh = Ph, { transform: Nh } = tn, { removeStyles: Fh } = Do, {
  format: xh,
  concatFirstStringElements: Lh
} = ql, { toString: Uh } = oi;
var kh = Bh;
const Mh = new Rh();
function Bh(e, { registry: t = Mh, externalApi: r } = {}) {
  let n;
  return t.listenerCount("error") < 1 && t.on("error", (d, c) => {
    s(`Can't write to ${c}`, d);
  }), Object.assign(i, {
    fileName: jh(e.variables.processType),
    format: "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",
    getFile: a,
    inspectOptions: { depth: 5 },
    level: "silly",
    maxSize: 1024 ** 2,
    readAllLogs: l,
    sync: !0,
    transforms: [Fh, xh, Lh, Uh],
    writeOptions: { flag: "a", mode: 438, encoding: "utf8" },
    archiveLogFn(d) {
      const c = d.toString(), f = br.parse(c);
      try {
        An.renameSync(c, br.join(f.dir, `${f.name}.old${f.ext}`));
      } catch (p) {
        s("Could not rotate log", p);
        const g = Math.round(i.maxSize / 4);
        d.crop(Math.min(g, 256 * 1024));
      }
    },
    resolvePathFn(d) {
      return br.join(d.libraryDefaultDir, d.fileName);
    },
    setAppName(d) {
      e.dependencies.externalApi.setAppName(d);
    }
  });
  function i(d) {
    const c = a(d);
    i.maxSize > 0 && c.size > i.maxSize && (i.archiveLogFn(c), c.reset());
    const p = Nh({ logger: e, message: d, transport: i });
    c.writeLine(p);
  }
  function o() {
    n || (n = Object.create(
      Object.prototype,
      {
        ...Object.getOwnPropertyDescriptors(
          r.getPathVariables()
        ),
        fileName: {
          get() {
            return i.fileName;
          },
          enumerable: !0
        }
      }
    ), typeof i.archiveLog == "function" && (i.archiveLogFn = i.archiveLog, s("archiveLog is deprecated. Use archiveLogFn instead")), typeof i.resolvePath == "function" && (i.resolvePathFn = i.resolvePath, s("resolvePath is deprecated. Use resolvePathFn instead")));
  }
  function s(d, c = null, f = "error") {
    const p = [`electron-log.transports.file: ${d}`];
    c && p.push(c), e.transports.console({ data: p, date: /* @__PURE__ */ new Date(), level: f });
  }
  function a(d) {
    o();
    const c = i.resolvePathFn(n, d);
    return t.provide({
      filePath: c,
      writeAsync: !i.sync,
      writeOptions: i.writeOptions
    });
  }
  function l({ fileFilter: d = (c) => c.endsWith(".log") } = {}) {
    o();
    const c = br.dirname(i.resolvePathFn(n));
    return An.existsSync(c) ? An.readdirSync(c).map((f) => br.join(c, f)).filter(d).map((f) => {
      try {
        return {
          path: f,
          lines: An.readFileSync(f, "utf8").split(Dh.EOL)
        };
      } catch {
        return null;
      }
    }).filter(Boolean) : [];
  }
}
function jh(e = process.type) {
  switch (e) {
    case "renderer":
      return "renderer.log";
    case "worker":
      return "worker.log";
    default:
      return "main.log";
  }
}
const { maxDepth: Hh, toJSON: qh } = oi, { transform: Gh } = tn;
var Wh = Vh;
function Vh(e, { externalApi: t }) {
  return Object.assign(r, {
    depth: 3,
    eventId: "__ELECTRON_LOG_IPC__",
    level: e.isDev ? "silly" : !1,
    transforms: [qh, Hh]
  }), t != null && t.isElectron() ? r : void 0;
  function r(n) {
    var i;
    ((i = n == null ? void 0 : n.variables) == null ? void 0 : i.processType) !== "renderer" && (t == null || t.sendIpc(r.eventId, {
      ...n,
      data: Gh({ logger: e, message: n, transport: r })
    }));
  }
}
const zh = Ll, Yh = md, { transform: Xh } = tn, { removeStyles: Jh } = Do, { toJSON: Kh, maxDepth: Qh } = oi;
var Zh = ep;
function ep(e) {
  return Object.assign(t, {
    client: { name: "electron-application" },
    depth: 6,
    level: !1,
    requestOptions: {},
    transforms: [Jh, Kh, Qh],
    makeBodyFn({ message: r }) {
      return JSON.stringify({
        client: t.client,
        data: r.data,
        date: r.date.getTime(),
        level: r.level,
        scope: r.scope,
        variables: r.variables
      });
    },
    processErrorFn({ error: r }) {
      e.processMessage(
        {
          data: [`electron-log: can't POST ${t.url}`, r],
          level: "warn"
        },
        { transports: ["console", "file"] }
      );
    },
    sendRequestFn({ serverUrl: r, requestOptions: n, body: i }) {
      const s = (r.startsWith("https:") ? Yh : zh).request(r, {
        method: "POST",
        ...n,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": i.length,
          ...n.headers
        }
      });
      return s.write(i), s.end(), s;
    }
  });
  function t(r) {
    if (!t.url)
      return;
    const n = t.makeBodyFn({
      logger: e,
      message: { ...r, data: Xh({ logger: e, message: r, transport: t }) },
      transport: t
    }), i = t.sendRequestFn({
      serverUrl: t.url,
      requestOptions: t.requestOptions,
      body: Buffer.from(n, "utf8")
    });
    i.on("error", (o) => t.processErrorFn({
      error: o,
      logger: e,
      message: r,
      request: i,
      transport: t
    }));
  }
}
const xs = Vd, tp = Xd, rp = Kd, np = ph, ip = kh, op = Wh, sp = Zh;
var ap = lp;
function lp({ dependencies: e, initializeFn: t }) {
  var n;
  const r = new xs({
    dependencies: e,
    errorHandler: new tp(),
    eventLogger: new rp(),
    initializeFn: t,
    isDev: (n = e.externalApi) == null ? void 0 : n.isDev(),
    logId: "default",
    transportFactories: {
      console: np,
      file: ip,
      ipc: op,
      remote: sp
    },
    variables: {
      processType: "main"
    }
  });
  return r.default = r, r.Logger = xs, r.processInternalErrorFn = (i) => {
    r.transports.console.writeFn({
      message: {
        data: ["Unhandled electron-log error", i],
        level: "error"
      }
    });
  }, r;
}
const cp = vt, up = Rd, { initialize: fp } = Ld, dp = ap, Ro = new up({ electron: cp }), si = dp({
  dependencies: { externalApi: Ro },
  initializeFn: fp
});
var hp = si;
Ro.onIpc("__ELECTRON_LOG__", (e, t) => {
  t.scope && si.Logger.getInstance(t).scope(t.scope);
  const r = new Date(t.date);
  Xl({
    ...t,
    date: r.getTime() ? r : /* @__PURE__ */ new Date()
  });
});
Ro.onIpcInvoke("__ELECTRON_LOG__", (e, { cmd: t = "", logId: r }) => {
  switch (t) {
    case "getOptions":
      return {
        levels: si.Logger.getInstance({ logId: r }).levels,
        logId: r
      };
    default:
      return Xl({ data: [`Unknown cmd '${t}'`], level: "error" }), {};
  }
});
function Xl(e) {
  var t;
  (t = si.Logger.getInstance(e)) == null || t.processMessage(e);
}
const pp = hp;
var mp = pp;
const ft = /* @__PURE__ */ vd(mp);
ft.initialize();
const zt = () => ({
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  version: Pe.getVersion(),
  os: `${Ke.platform()} ${Ke.release()}`
}), Jl = {
  info: (e) => {
    const t = zt();
    ft.info(
      `[App Version: ${t.version}] [${t.os}] - ${e}`
    );
  },
  error: (e) => {
    const t = zt();
    ft.error(
      `[App Version: ${t.version}] [${t.os}] - ${e}`
    );
  },
  warn: (e) => {
    const t = zt();
    ft.warn(
      `[App Version: ${t.version}] [${t.os}] - ${e}`
    );
  },
  verbose: (e) => {
    const t = zt();
    ft.verbose(
      `[App Version: ${t.version}] [${t.os}] - ${e}`
    );
  },
  debug: (e) => {
    const t = zt();
    ft.debug(
      `[App Version: ${t.version}] [${t.os}] - ${e}`
    );
  },
  silly: (e) => {
    const t = zt();
    ft.silly(
      `[App Version: ${t.version}] [${t.os}] - ${e}`
    );
  }
};
it.on("log", (e, t) => {
  Jl[t.type](t.message);
});
var xe = {}, Ht = {}, $e = {};
$e.fromCallback = function(e) {
  return Object.defineProperty(function(...t) {
    if (typeof t[t.length - 1] == "function") e.apply(this, t);
    else
      return new Promise((r, n) => {
        t.push((i, o) => i != null ? n(i) : r(o)), e.apply(this, t);
      });
  }, "name", { value: e.name });
};
$e.fromPromise = function(e) {
  return Object.defineProperty(function(...t) {
    const r = t[t.length - 1];
    if (typeof r != "function") return e.apply(this, t);
    t.pop(), e.apply(this, t).then((n) => r(null, n), r);
  }, "name", { value: e.name });
};
var ut = gd, gp = process.cwd, Bn = null, yp = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return Bn || (Bn = gp.call(process)), Bn;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var Ls = process.chdir;
  process.chdir = function(e) {
    Bn = null, Ls.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Ls);
}
var Ep = vp;
function vp(e) {
  ut.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e), e.lutimes || r(e), e.chown = o(e.chown), e.fchown = o(e.fchown), e.lchown = o(e.lchown), e.chmod = n(e.chmod), e.fchmod = n(e.fchmod), e.lchmod = n(e.lchmod), e.chownSync = s(e.chownSync), e.fchownSync = s(e.fchownSync), e.lchownSync = s(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync = i(e.lchmodSync), e.stat = a(e.stat), e.fstat = a(e.fstat), e.lstat = a(e.lstat), e.statSync = l(e.statSync), e.fstatSync = l(e.fstatSync), e.lstatSync = l(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(c, f, p) {
    p && process.nextTick(p);
  }, e.lchmodSync = function() {
  }), e.chown && !e.lchown && (e.lchown = function(c, f, p, g) {
    g && process.nextTick(g);
  }, e.lchownSync = function() {
  }), yp === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(c) {
    function f(p, g, _) {
      var E = Date.now(), S = 0;
      c(p, g, function b(A) {
        if (A && (A.code === "EACCES" || A.code === "EPERM" || A.code === "EBUSY") && Date.now() - E < 6e4) {
          setTimeout(function() {
            e.stat(g, function(N, x) {
              N && N.code === "ENOENT" ? c(p, g, b) : _(A);
            });
          }, S), S < 100 && (S += 10);
          return;
        }
        _ && _(A);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(f, c), f;
  }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(c) {
    function f(p, g, _, E, S, b) {
      var A;
      if (b && typeof b == "function") {
        var N = 0;
        A = function(x, ee, se) {
          if (x && x.code === "EAGAIN" && N < 10)
            return N++, c.call(e, p, g, _, E, S, A);
          b.apply(this, arguments);
        };
      }
      return c.call(e, p, g, _, E, S, A);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(f, c), f;
  }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(c) {
    return function(f, p, g, _, E) {
      for (var S = 0; ; )
        try {
          return c.call(e, f, p, g, _, E);
        } catch (b) {
          if (b.code === "EAGAIN" && S < 10) {
            S++;
            continue;
          }
          throw b;
        }
    };
  }(e.readSync);
  function t(c) {
    c.lchmod = function(f, p, g) {
      c.open(
        f,
        ut.O_WRONLY | ut.O_SYMLINK,
        p,
        function(_, E) {
          if (_) {
            g && g(_);
            return;
          }
          c.fchmod(E, p, function(S) {
            c.close(E, function(b) {
              g && g(S || b);
            });
          });
        }
      );
    }, c.lchmodSync = function(f, p) {
      var g = c.openSync(f, ut.O_WRONLY | ut.O_SYMLINK, p), _ = !0, E;
      try {
        E = c.fchmodSync(g, p), _ = !1;
      } finally {
        if (_)
          try {
            c.closeSync(g);
          } catch {
          }
        else
          c.closeSync(g);
      }
      return E;
    };
  }
  function r(c) {
    ut.hasOwnProperty("O_SYMLINK") && c.futimes ? (c.lutimes = function(f, p, g, _) {
      c.open(f, ut.O_SYMLINK, function(E, S) {
        if (E) {
          _ && _(E);
          return;
        }
        c.futimes(S, p, g, function(b) {
          c.close(S, function(A) {
            _ && _(b || A);
          });
        });
      });
    }, c.lutimesSync = function(f, p, g) {
      var _ = c.openSync(f, ut.O_SYMLINK), E, S = !0;
      try {
        E = c.futimesSync(_, p, g), S = !1;
      } finally {
        if (S)
          try {
            c.closeSync(_);
          } catch {
          }
        else
          c.closeSync(_);
      }
      return E;
    }) : c.futimes && (c.lutimes = function(f, p, g, _) {
      _ && process.nextTick(_);
    }, c.lutimesSync = function() {
    });
  }
  function n(c) {
    return c && function(f, p, g) {
      return c.call(e, f, p, function(_) {
        d(_) && (_ = null), g && g.apply(this, arguments);
      });
    };
  }
  function i(c) {
    return c && function(f, p) {
      try {
        return c.call(e, f, p);
      } catch (g) {
        if (!d(g)) throw g;
      }
    };
  }
  function o(c) {
    return c && function(f, p, g, _) {
      return c.call(e, f, p, g, function(E) {
        d(E) && (E = null), _ && _.apply(this, arguments);
      });
    };
  }
  function s(c) {
    return c && function(f, p, g) {
      try {
        return c.call(e, f, p, g);
      } catch (_) {
        if (!d(_)) throw _;
      }
    };
  }
  function a(c) {
    return c && function(f, p, g) {
      typeof p == "function" && (g = p, p = null);
      function _(E, S) {
        S && (S.uid < 0 && (S.uid += 4294967296), S.gid < 0 && (S.gid += 4294967296)), g && g.apply(this, arguments);
      }
      return p ? c.call(e, f, p, _) : c.call(e, f, _);
    };
  }
  function l(c) {
    return c && function(f, p) {
      var g = p ? c.call(e, f, p) : c.call(e, f);
      return g && (g.uid < 0 && (g.uid += 4294967296), g.gid < 0 && (g.gid += 4294967296)), g;
    };
  }
  function d(c) {
    if (!c || c.code === "ENOSYS")
      return !0;
    var f = !process.getuid || process.getuid() !== 0;
    return !!(f && (c.code === "EINVAL" || c.code === "EPERM"));
  }
}
var Us = Zr.Stream, wp = _p;
function _p(e) {
  return {
    ReadStream: t,
    WriteStream: r
  };
  function t(n, i) {
    if (!(this instanceof t)) return new t(n, i);
    Us.call(this);
    var o = this;
    this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, i = i || {};
    for (var s = Object.keys(i), a = 0, l = s.length; a < l; a++) {
      var d = s[a];
      this[d] = i[d];
    }
    if (this.encoding && this.setEncoding(this.encoding), this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.end === void 0)
        this.end = 1 / 0;
      else if (typeof this.end != "number")
        throw TypeError("end must be a Number");
      if (this.start > this.end)
        throw new Error("start must be <= end");
      this.pos = this.start;
    }
    if (this.fd !== null) {
      process.nextTick(function() {
        o._read();
      });
      return;
    }
    e.open(this.path, this.flags, this.mode, function(c, f) {
      if (c) {
        o.emit("error", c), o.readable = !1;
        return;
      }
      o.fd = f, o.emit("open", f), o._read();
    });
  }
  function r(n, i) {
    if (!(this instanceof r)) return new r(n, i);
    Us.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
    for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
      var l = o[s];
      this[l] = i[l];
    }
    if (this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.start < 0)
        throw new Error("start must be >= zero");
      this.pos = this.start;
    }
    this.busy = !1, this._queue = [], this.fd === null && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
  }
}
var Sp = bp, Ap = Object.getPrototypeOf || function(e) {
  return e.__proto__;
};
function bp(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Object)
    var t = { __proto__: Ap(e) };
  else
    var t = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(e).forEach(function(r) {
    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  }), t;
}
var ne = Ue, Tp = Ep, $p = wp, Cp = Sp, bn = ni, ge, Wn;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (ge = Symbol.for("graceful-fs.queue"), Wn = Symbol.for("graceful-fs.previous")) : (ge = "___graceful-fs.queue", Wn = "___graceful-fs.previous");
function Op() {
}
function Kl(e, t) {
  Object.defineProperty(e, ge, {
    get: function() {
      return t;
    }
  });
}
var Mt = Op;
bn.debuglog ? Mt = bn.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (Mt = function() {
  var e = bn.format.apply(bn, arguments);
  e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
});
if (!ne[ge]) {
  var Ip = Ae[ge] || [];
  Kl(ne, Ip), ne.close = function(e) {
    function t(r, n) {
      return e.call(ne, r, function(i) {
        i || ks(), typeof n == "function" && n.apply(this, arguments);
      });
    }
    return Object.defineProperty(t, Wn, {
      value: e
    }), t;
  }(ne.close), ne.closeSync = function(e) {
    function t(r) {
      e.apply(ne, arguments), ks();
    }
    return Object.defineProperty(t, Wn, {
      value: e
    }), t;
  }(ne.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    Mt(ne[ge]), Ul.equal(ne[ge].length, 0);
  });
}
Ae[ge] || Kl(Ae, ne[ge]);
var Ce = No(Cp(ne));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !ne.__patched && (Ce = No(ne), ne.__patched = !0);
function No(e) {
  Tp(e), e.gracefulify = No, e.createReadStream = ee, e.createWriteStream = se;
  var t = e.readFile;
  e.readFile = r;
  function r(y, q, B) {
    return typeof q == "function" && (B = q, q = null), M(y, q, B);
    function M(J, I, C, D) {
      return t(J, I, function($) {
        $ && ($.code === "EMFILE" || $.code === "ENFILE") ? Yt([M, [J, I, C], $, D || Date.now(), Date.now()]) : typeof C == "function" && C.apply(this, arguments);
      });
    }
  }
  var n = e.writeFile;
  e.writeFile = i;
  function i(y, q, B, M) {
    return typeof B == "function" && (M = B, B = null), J(y, q, B, M);
    function J(I, C, D, $, R) {
      return n(I, C, D, function(P) {
        P && (P.code === "EMFILE" || P.code === "ENFILE") ? Yt([J, [I, C, D, $], P, R || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var o = e.appendFile;
  o && (e.appendFile = s);
  function s(y, q, B, M) {
    return typeof B == "function" && (M = B, B = null), J(y, q, B, M);
    function J(I, C, D, $, R) {
      return o(I, C, D, function(P) {
        P && (P.code === "EMFILE" || P.code === "ENFILE") ? Yt([J, [I, C, D, $], P, R || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var a = e.copyFile;
  a && (e.copyFile = l);
  function l(y, q, B, M) {
    return typeof B == "function" && (M = B, B = 0), J(y, q, B, M);
    function J(I, C, D, $, R) {
      return a(I, C, D, function(P) {
        P && (P.code === "EMFILE" || P.code === "ENFILE") ? Yt([J, [I, C, D, $], P, R || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var d = e.readdir;
  e.readdir = f;
  var c = /^v[0-5]\./;
  function f(y, q, B) {
    typeof q == "function" && (B = q, q = null);
    var M = c.test(process.version) ? function(C, D, $, R) {
      return d(C, J(
        C,
        D,
        $,
        R
      ));
    } : function(C, D, $, R) {
      return d(C, D, J(
        C,
        D,
        $,
        R
      ));
    };
    return M(y, q, B);
    function J(I, C, D, $) {
      return function(R, P) {
        R && (R.code === "EMFILE" || R.code === "ENFILE") ? Yt([
          M,
          [I, C, D],
          R,
          $ || Date.now(),
          Date.now()
        ]) : (P && P.sort && P.sort(), typeof D == "function" && D.call(this, R, P));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var p = $p(e);
    b = p.ReadStream, N = p.WriteStream;
  }
  var g = e.ReadStream;
  g && (b.prototype = Object.create(g.prototype), b.prototype.open = A);
  var _ = e.WriteStream;
  _ && (N.prototype = Object.create(_.prototype), N.prototype.open = x), Object.defineProperty(e, "ReadStream", {
    get: function() {
      return b;
    },
    set: function(y) {
      b = y;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "WriteStream", {
    get: function() {
      return N;
    },
    set: function(y) {
      N = y;
    },
    enumerable: !0,
    configurable: !0
  });
  var E = b;
  Object.defineProperty(e, "FileReadStream", {
    get: function() {
      return E;
    },
    set: function(y) {
      E = y;
    },
    enumerable: !0,
    configurable: !0
  });
  var S = N;
  Object.defineProperty(e, "FileWriteStream", {
    get: function() {
      return S;
    },
    set: function(y) {
      S = y;
    },
    enumerable: !0,
    configurable: !0
  });
  function b(y, q) {
    return this instanceof b ? (g.apply(this, arguments), this) : b.apply(Object.create(b.prototype), arguments);
  }
  function A() {
    var y = this;
    Ne(y.path, y.flags, y.mode, function(q, B) {
      q ? (y.autoClose && y.destroy(), y.emit("error", q)) : (y.fd = B, y.emit("open", B), y.read());
    });
  }
  function N(y, q) {
    return this instanceof N ? (_.apply(this, arguments), this) : N.apply(Object.create(N.prototype), arguments);
  }
  function x() {
    var y = this;
    Ne(y.path, y.flags, y.mode, function(q, B) {
      q ? (y.destroy(), y.emit("error", q)) : (y.fd = B, y.emit("open", B));
    });
  }
  function ee(y, q) {
    return new e.ReadStream(y, q);
  }
  function se(y, q) {
    return new e.WriteStream(y, q);
  }
  var z = e.open;
  e.open = Ne;
  function Ne(y, q, B, M) {
    return typeof B == "function" && (M = B, B = null), J(y, q, B, M);
    function J(I, C, D, $, R) {
      return z(I, C, D, function(P, k) {
        P && (P.code === "EMFILE" || P.code === "ENFILE") ? Yt([J, [I, C, D, $], P, R || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  return e;
}
function Yt(e) {
  Mt("ENQUEUE", e[0].name, e[1]), ne[ge].push(e), Fo();
}
var Tn;
function ks() {
  for (var e = Date.now(), t = 0; t < ne[ge].length; ++t)
    ne[ge][t].length > 2 && (ne[ge][t][3] = e, ne[ge][t][4] = e);
  Fo();
}
function Fo() {
  if (clearTimeout(Tn), Tn = void 0, ne[ge].length !== 0) {
    var e = ne[ge].shift(), t = e[0], r = e[1], n = e[2], i = e[3], o = e[4];
    if (i === void 0)
      Mt("RETRY", t.name, r), t.apply(null, r);
    else if (Date.now() - i >= 6e4) {
      Mt("TIMEOUT", t.name, r);
      var s = r.pop();
      typeof s == "function" && s.call(null, n);
    } else {
      var a = Date.now() - o, l = Math.max(o - i, 1), d = Math.min(l * 1.2, 100);
      a >= d ? (Mt("RETRY", t.name, r), t.apply(null, r.concat([i]))) : ne[ge].push(e);
    }
    Tn === void 0 && (Tn = setTimeout(Fo, 0));
  }
}
(function(e) {
  const t = $e.fromCallback, r = Ce, n = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchmod",
    "lchown",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "rename",
    "rm",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
  ].filter((i) => typeof r[i] == "function");
  Object.assign(e, r), n.forEach((i) => {
    e[i] = t(r[i]);
  }), e.exists = function(i, o) {
    return typeof o == "function" ? r.exists(i, o) : new Promise((s) => r.exists(i, s));
  }, e.read = function(i, o, s, a, l, d) {
    return typeof d == "function" ? r.read(i, o, s, a, l, d) : new Promise((c, f) => {
      r.read(i, o, s, a, l, (p, g, _) => {
        if (p) return f(p);
        c({ bytesRead: g, buffer: _ });
      });
    });
  }, e.write = function(i, o, ...s) {
    return typeof s[s.length - 1] == "function" ? r.write(i, o, ...s) : new Promise((a, l) => {
      r.write(i, o, ...s, (d, c, f) => {
        if (d) return l(d);
        a({ bytesWritten: c, buffer: f });
      });
    });
  }, typeof r.writev == "function" && (e.writev = function(i, o, ...s) {
    return typeof s[s.length - 1] == "function" ? r.writev(i, o, ...s) : new Promise((a, l) => {
      r.writev(i, o, ...s, (d, c, f) => {
        if (d) return l(d);
        a({ bytesWritten: c, buffers: f });
      });
    });
  }), typeof r.realpath.native == "function" ? e.realpath.native = t(r.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
})(Ht);
var xo = {}, Ql = {};
const Pp = X;
Ql.checkPath = function(t) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(t.replace(Pp.parse(t).root, ""))) {
    const n = new Error(`Path contains invalid characters: ${t}`);
    throw n.code = "EINVAL", n;
  }
};
const Zl = Ht, { checkPath: ec } = Ql, tc = (e) => {
  const t = { mode: 511 };
  return typeof e == "number" ? e : { ...t, ...e }.mode;
};
xo.makeDir = async (e, t) => (ec(e), Zl.mkdir(e, {
  mode: tc(t),
  recursive: !0
}));
xo.makeDirSync = (e, t) => (ec(e), Zl.mkdirSync(e, {
  mode: tc(t),
  recursive: !0
}));
const Dp = $e.fromPromise, { makeDir: Rp, makeDirSync: Ui } = xo, ki = Dp(Rp);
var Qe = {
  mkdirs: ki,
  mkdirsSync: Ui,
  // alias
  mkdirp: ki,
  mkdirpSync: Ui,
  ensureDir: ki,
  ensureDirSync: Ui
};
const Np = $e.fromPromise, rc = Ht;
function Fp(e) {
  return rc.access(e).then(() => !0).catch(() => !1);
}
var qt = {
  pathExists: Np(Fp),
  pathExistsSync: rc.existsSync
};
const lr = Ce;
function xp(e, t, r, n) {
  lr.open(e, "r+", (i, o) => {
    if (i) return n(i);
    lr.futimes(o, t, r, (s) => {
      lr.close(o, (a) => {
        n && n(s || a);
      });
    });
  });
}
function Lp(e, t, r) {
  const n = lr.openSync(e, "r+");
  return lr.futimesSync(n, t, r), lr.closeSync(n);
}
var nc = {
  utimesMillis: xp,
  utimesMillisSync: Lp
};
const ur = Ht, de = X, Up = ni;
function kp(e, t, r) {
  const n = r.dereference ? (i) => ur.stat(i, { bigint: !0 }) : (i) => ur.lstat(i, { bigint: !0 });
  return Promise.all([
    n(e),
    n(t).catch((i) => {
      if (i.code === "ENOENT") return null;
      throw i;
    })
  ]).then(([i, o]) => ({ srcStat: i, destStat: o }));
}
function Mp(e, t, r) {
  let n;
  const i = r.dereference ? (s) => ur.statSync(s, { bigint: !0 }) : (s) => ur.lstatSync(s, { bigint: !0 }), o = i(e);
  try {
    n = i(t);
  } catch (s) {
    if (s.code === "ENOENT") return { srcStat: o, destStat: null };
    throw s;
  }
  return { srcStat: o, destStat: n };
}
function Bp(e, t, r, n, i) {
  Up.callbackify(kp)(e, t, n, (o, s) => {
    if (o) return i(o);
    const { srcStat: a, destStat: l } = s;
    if (l) {
      if (rn(a, l)) {
        const d = de.basename(e), c = de.basename(t);
        return r === "move" && d !== c && d.toLowerCase() === c.toLowerCase() ? i(null, { srcStat: a, destStat: l, isChangingCase: !0 }) : i(new Error("Source and destination must not be the same."));
      }
      if (a.isDirectory() && !l.isDirectory())
        return i(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
      if (!a.isDirectory() && l.isDirectory())
        return i(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`));
    }
    return a.isDirectory() && Lo(e, t) ? i(new Error(ai(e, t, r))) : i(null, { srcStat: a, destStat: l });
  });
}
function jp(e, t, r, n) {
  const { srcStat: i, destStat: o } = Mp(e, t, n);
  if (o) {
    if (rn(i, o)) {
      const s = de.basename(e), a = de.basename(t);
      if (r === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: i, destStat: o, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (i.isDirectory() && !o.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
    if (!i.isDirectory() && o.isDirectory())
      throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
  }
  if (i.isDirectory() && Lo(e, t))
    throw new Error(ai(e, t, r));
  return { srcStat: i, destStat: o };
}
function ic(e, t, r, n, i) {
  const o = de.resolve(de.dirname(e)), s = de.resolve(de.dirname(r));
  if (s === o || s === de.parse(s).root) return i();
  ur.stat(s, { bigint: !0 }, (a, l) => a ? a.code === "ENOENT" ? i() : i(a) : rn(t, l) ? i(new Error(ai(e, r, n))) : ic(e, t, s, n, i));
}
function oc(e, t, r, n) {
  const i = de.resolve(de.dirname(e)), o = de.resolve(de.dirname(r));
  if (o === i || o === de.parse(o).root) return;
  let s;
  try {
    s = ur.statSync(o, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (rn(t, s))
    throw new Error(ai(e, r, n));
  return oc(e, t, o, n);
}
function rn(e, t) {
  return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
}
function Lo(e, t) {
  const r = de.resolve(e).split(de.sep).filter((i) => i), n = de.resolve(t).split(de.sep).filter((i) => i);
  return r.reduce((i, o, s) => i && n[s] === o, !0);
}
function ai(e, t, r) {
  return `Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`;
}
var mr = {
  checkPaths: Bp,
  checkPathsSync: jp,
  checkParentPaths: ic,
  checkParentPathsSync: oc,
  isSrcSubdir: Lo,
  areIdentical: rn
};
const De = Ce, Ur = X, Hp = Qe.mkdirs, qp = qt.pathExists, Gp = nc.utimesMillis, kr = mr;
function Wp(e, t, r, n) {
  typeof r == "function" && !n ? (n = r, r = {}) : typeof r == "function" && (r = { filter: r }), n = n || function() {
  }, r = r || {}, r.clobber = "clobber" in r ? !!r.clobber : !0, r.overwrite = "overwrite" in r ? !!r.overwrite : r.clobber, r.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  ), kr.checkPaths(e, t, "copy", r, (i, o) => {
    if (i) return n(i);
    const { srcStat: s, destStat: a } = o;
    kr.checkParentPaths(e, s, t, "copy", (l) => l ? n(l) : r.filter ? sc(Ms, a, e, t, r, n) : Ms(a, e, t, r, n));
  });
}
function Ms(e, t, r, n, i) {
  const o = Ur.dirname(r);
  qp(o, (s, a) => {
    if (s) return i(s);
    if (a) return Vn(e, t, r, n, i);
    Hp(o, (l) => l ? i(l) : Vn(e, t, r, n, i));
  });
}
function sc(e, t, r, n, i, o) {
  Promise.resolve(i.filter(r, n)).then((s) => s ? e(t, r, n, i, o) : o(), (s) => o(s));
}
function Vp(e, t, r, n, i) {
  return n.filter ? sc(Vn, e, t, r, n, i) : Vn(e, t, r, n, i);
}
function Vn(e, t, r, n, i) {
  (n.dereference ? De.stat : De.lstat)(t, (s, a) => s ? i(s) : a.isDirectory() ? Zp(a, e, t, r, n, i) : a.isFile() || a.isCharacterDevice() || a.isBlockDevice() ? zp(a, e, t, r, n, i) : a.isSymbolicLink() ? rm(e, t, r, n, i) : a.isSocket() ? i(new Error(`Cannot copy a socket file: ${t}`)) : a.isFIFO() ? i(new Error(`Cannot copy a FIFO pipe: ${t}`)) : i(new Error(`Unknown file: ${t}`)));
}
function zp(e, t, r, n, i, o) {
  return t ? Yp(e, r, n, i, o) : ac(e, r, n, i, o);
}
function Yp(e, t, r, n, i) {
  if (n.overwrite)
    De.unlink(r, (o) => o ? i(o) : ac(e, t, r, n, i));
  else return n.errorOnExist ? i(new Error(`'${r}' already exists`)) : i();
}
function ac(e, t, r, n, i) {
  De.copyFile(t, r, (o) => o ? i(o) : n.preserveTimestamps ? Xp(e.mode, t, r, i) : li(r, e.mode, i));
}
function Xp(e, t, r, n) {
  return Jp(e) ? Kp(r, e, (i) => i ? n(i) : Bs(e, t, r, n)) : Bs(e, t, r, n);
}
function Jp(e) {
  return (e & 128) === 0;
}
function Kp(e, t, r) {
  return li(e, t | 128, r);
}
function Bs(e, t, r, n) {
  Qp(t, r, (i) => i ? n(i) : li(r, e, n));
}
function li(e, t, r) {
  return De.chmod(e, t, r);
}
function Qp(e, t, r) {
  De.stat(e, (n, i) => n ? r(n) : Gp(t, i.atime, i.mtime, r));
}
function Zp(e, t, r, n, i, o) {
  return t ? lc(r, n, i, o) : em(e.mode, r, n, i, o);
}
function em(e, t, r, n, i) {
  De.mkdir(r, (o) => {
    if (o) return i(o);
    lc(t, r, n, (s) => s ? i(s) : li(r, e, i));
  });
}
function lc(e, t, r, n) {
  De.readdir(e, (i, o) => i ? n(i) : cc(o, e, t, r, n));
}
function cc(e, t, r, n, i) {
  const o = e.pop();
  return o ? tm(e, o, t, r, n, i) : i();
}
function tm(e, t, r, n, i, o) {
  const s = Ur.join(r, t), a = Ur.join(n, t);
  kr.checkPaths(s, a, "copy", i, (l, d) => {
    if (l) return o(l);
    const { destStat: c } = d;
    Vp(c, s, a, i, (f) => f ? o(f) : cc(e, r, n, i, o));
  });
}
function rm(e, t, r, n, i) {
  De.readlink(t, (o, s) => {
    if (o) return i(o);
    if (n.dereference && (s = Ur.resolve(process.cwd(), s)), e)
      De.readlink(r, (a, l) => a ? a.code === "EINVAL" || a.code === "UNKNOWN" ? De.symlink(s, r, i) : i(a) : (n.dereference && (l = Ur.resolve(process.cwd(), l)), kr.isSrcSubdir(s, l) ? i(new Error(`Cannot copy '${s}' to a subdirectory of itself, '${l}'.`)) : e.isDirectory() && kr.isSrcSubdir(l, s) ? i(new Error(`Cannot overwrite '${l}' with '${s}'.`)) : nm(s, r, i)));
    else
      return De.symlink(s, r, i);
  });
}
function nm(e, t, r) {
  De.unlink(t, (n) => n ? r(n) : De.symlink(e, t, r));
}
var im = Wp;
const we = Ce, Mr = X, om = Qe.mkdirsSync, sm = nc.utimesMillisSync, Br = mr;
function am(e, t, r) {
  typeof r == "function" && (r = { filter: r }), r = r || {}, r.clobber = "clobber" in r ? !!r.clobber : !0, r.overwrite = "overwrite" in r ? !!r.overwrite : r.clobber, r.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: n, destStat: i } = Br.checkPathsSync(e, t, "copy", r);
  return Br.checkParentPathsSync(e, n, t, "copy"), lm(i, e, t, r);
}
function lm(e, t, r, n) {
  if (n.filter && !n.filter(t, r)) return;
  const i = Mr.dirname(r);
  return we.existsSync(i) || om(i), uc(e, t, r, n);
}
function cm(e, t, r, n) {
  if (!(n.filter && !n.filter(t, r)))
    return uc(e, t, r, n);
}
function uc(e, t, r, n) {
  const o = (n.dereference ? we.statSync : we.lstatSync)(t);
  if (o.isDirectory()) return gm(o, e, t, r, n);
  if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return um(o, e, t, r, n);
  if (o.isSymbolicLink()) return vm(e, t, r, n);
  throw o.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(`Unknown file: ${t}`);
}
function um(e, t, r, n, i) {
  return t ? fm(e, r, n, i) : fc(e, r, n, i);
}
function fm(e, t, r, n) {
  if (n.overwrite)
    return we.unlinkSync(r), fc(e, t, r, n);
  if (n.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
function fc(e, t, r, n) {
  return we.copyFileSync(t, r), n.preserveTimestamps && dm(e.mode, t, r), Uo(r, e.mode);
}
function dm(e, t, r) {
  return hm(e) && pm(r, e), mm(t, r);
}
function hm(e) {
  return (e & 128) === 0;
}
function pm(e, t) {
  return Uo(e, t | 128);
}
function Uo(e, t) {
  return we.chmodSync(e, t);
}
function mm(e, t) {
  const r = we.statSync(e);
  return sm(t, r.atime, r.mtime);
}
function gm(e, t, r, n, i) {
  return t ? dc(r, n, i) : ym(e.mode, r, n, i);
}
function ym(e, t, r, n) {
  return we.mkdirSync(r), dc(t, r, n), Uo(r, e);
}
function dc(e, t, r) {
  we.readdirSync(e).forEach((n) => Em(n, e, t, r));
}
function Em(e, t, r, n) {
  const i = Mr.join(t, e), o = Mr.join(r, e), { destStat: s } = Br.checkPathsSync(i, o, "copy", n);
  return cm(s, i, o, n);
}
function vm(e, t, r, n) {
  let i = we.readlinkSync(t);
  if (n.dereference && (i = Mr.resolve(process.cwd(), i)), e) {
    let o;
    try {
      o = we.readlinkSync(r);
    } catch (s) {
      if (s.code === "EINVAL" || s.code === "UNKNOWN") return we.symlinkSync(i, r);
      throw s;
    }
    if (n.dereference && (o = Mr.resolve(process.cwd(), o)), Br.isSrcSubdir(i, o))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);
    if (we.statSync(r).isDirectory() && Br.isSrcSubdir(o, i))
      throw new Error(`Cannot overwrite '${o}' with '${i}'.`);
    return wm(i, r);
  } else
    return we.symlinkSync(i, r);
}
function wm(e, t) {
  return we.unlinkSync(t), we.symlinkSync(e, t);
}
var _m = am;
const Sm = $e.fromCallback;
var ko = {
  copy: Sm(im),
  copySync: _m
};
const js = Ce, hc = X, Q = Ul, jr = process.platform === "win32";
function pc(e) {
  [
    "unlink",
    "chmod",
    "stat",
    "lstat",
    "rmdir",
    "readdir"
  ].forEach((r) => {
    e[r] = e[r] || js[r], r = r + "Sync", e[r] = e[r] || js[r];
  }), e.maxBusyTries = e.maxBusyTries || 3;
}
function Mo(e, t, r) {
  let n = 0;
  typeof t == "function" && (r = t, t = {}), Q(e, "rimraf: missing path"), Q.strictEqual(typeof e, "string", "rimraf: path should be a string"), Q.strictEqual(typeof r, "function", "rimraf: callback function required"), Q(t, "rimraf: invalid options argument provided"), Q.strictEqual(typeof t, "object", "rimraf: options should be object"), pc(t), Hs(e, t, function i(o) {
    if (o) {
      if ((o.code === "EBUSY" || o.code === "ENOTEMPTY" || o.code === "EPERM") && n < t.maxBusyTries) {
        n++;
        const s = n * 100;
        return setTimeout(() => Hs(e, t, i), s);
      }
      o.code === "ENOENT" && (o = null);
    }
    r(o);
  });
}
function Hs(e, t, r) {
  Q(e), Q(t), Q(typeof r == "function"), t.lstat(e, (n, i) => {
    if (n && n.code === "ENOENT")
      return r(null);
    if (n && n.code === "EPERM" && jr)
      return qs(e, t, n, r);
    if (i && i.isDirectory())
      return jn(e, t, n, r);
    t.unlink(e, (o) => {
      if (o) {
        if (o.code === "ENOENT")
          return r(null);
        if (o.code === "EPERM")
          return jr ? qs(e, t, o, r) : jn(e, t, o, r);
        if (o.code === "EISDIR")
          return jn(e, t, o, r);
      }
      return r(o);
    });
  });
}
function qs(e, t, r, n) {
  Q(e), Q(t), Q(typeof n == "function"), t.chmod(e, 438, (i) => {
    i ? n(i.code === "ENOENT" ? null : r) : t.stat(e, (o, s) => {
      o ? n(o.code === "ENOENT" ? null : r) : s.isDirectory() ? jn(e, t, r, n) : t.unlink(e, n);
    });
  });
}
function Gs(e, t, r) {
  let n;
  Q(e), Q(t);
  try {
    t.chmodSync(e, 438);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw r;
  }
  try {
    n = t.statSync(e);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw r;
  }
  n.isDirectory() ? Hn(e, t, r) : t.unlinkSync(e);
}
function jn(e, t, r, n) {
  Q(e), Q(t), Q(typeof n == "function"), t.rmdir(e, (i) => {
    i && (i.code === "ENOTEMPTY" || i.code === "EEXIST" || i.code === "EPERM") ? Am(e, t, n) : i && i.code === "ENOTDIR" ? n(r) : n(i);
  });
}
function Am(e, t, r) {
  Q(e), Q(t), Q(typeof r == "function"), t.readdir(e, (n, i) => {
    if (n) return r(n);
    let o = i.length, s;
    if (o === 0) return t.rmdir(e, r);
    i.forEach((a) => {
      Mo(hc.join(e, a), t, (l) => {
        if (!s) {
          if (l) return r(s = l);
          --o === 0 && t.rmdir(e, r);
        }
      });
    });
  });
}
function mc(e, t) {
  let r;
  t = t || {}, pc(t), Q(e, "rimraf: missing path"), Q.strictEqual(typeof e, "string", "rimraf: path should be a string"), Q(t, "rimraf: missing options"), Q.strictEqual(typeof t, "object", "rimraf: options should be object");
  try {
    r = t.lstatSync(e);
  } catch (n) {
    if (n.code === "ENOENT")
      return;
    n.code === "EPERM" && jr && Gs(e, t, n);
  }
  try {
    r && r.isDirectory() ? Hn(e, t, null) : t.unlinkSync(e);
  } catch (n) {
    if (n.code === "ENOENT")
      return;
    if (n.code === "EPERM")
      return jr ? Gs(e, t, n) : Hn(e, t, n);
    if (n.code !== "EISDIR")
      throw n;
    Hn(e, t, n);
  }
}
function Hn(e, t, r) {
  Q(e), Q(t);
  try {
    t.rmdirSync(e);
  } catch (n) {
    if (n.code === "ENOTDIR")
      throw r;
    if (n.code === "ENOTEMPTY" || n.code === "EEXIST" || n.code === "EPERM")
      bm(e, t);
    else if (n.code !== "ENOENT")
      throw n;
  }
}
function bm(e, t) {
  if (Q(e), Q(t), t.readdirSync(e).forEach((r) => mc(hc.join(e, r), t)), jr) {
    const r = Date.now();
    do
      try {
        return t.rmdirSync(e, t);
      } catch {
      }
    while (Date.now() - r < 500);
  } else
    return t.rmdirSync(e, t);
}
var Tm = Mo;
Mo.sync = mc;
const zn = Ce, $m = $e.fromCallback, gc = Tm;
function Cm(e, t) {
  if (zn.rm) return zn.rm(e, { recursive: !0, force: !0 }, t);
  gc(e, t);
}
function Om(e) {
  if (zn.rmSync) return zn.rmSync(e, { recursive: !0, force: !0 });
  gc.sync(e);
}
var ci = {
  remove: $m(Cm),
  removeSync: Om
};
const Im = $e.fromPromise, yc = Ht, Ec = X, vc = Qe, wc = ci, Ws = Im(async function(t) {
  let r;
  try {
    r = await yc.readdir(t);
  } catch {
    return vc.mkdirs(t);
  }
  return Promise.all(r.map((n) => wc.remove(Ec.join(t, n))));
});
function Vs(e) {
  let t;
  try {
    t = yc.readdirSync(e);
  } catch {
    return vc.mkdirsSync(e);
  }
  t.forEach((r) => {
    r = Ec.join(e, r), wc.removeSync(r);
  });
}
var Pm = {
  emptyDirSync: Vs,
  emptydirSync: Vs,
  emptyDir: Ws,
  emptydir: Ws
};
const Dm = $e.fromCallback, _c = X, mt = Ce, Sc = Qe;
function Rm(e, t) {
  function r() {
    mt.writeFile(e, "", (n) => {
      if (n) return t(n);
      t();
    });
  }
  mt.stat(e, (n, i) => {
    if (!n && i.isFile()) return t();
    const o = _c.dirname(e);
    mt.stat(o, (s, a) => {
      if (s)
        return s.code === "ENOENT" ? Sc.mkdirs(o, (l) => {
          if (l) return t(l);
          r();
        }) : t(s);
      a.isDirectory() ? r() : mt.readdir(o, (l) => {
        if (l) return t(l);
      });
    });
  });
}
function Nm(e) {
  let t;
  try {
    t = mt.statSync(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const r = _c.dirname(e);
  try {
    mt.statSync(r).isDirectory() || mt.readdirSync(r);
  } catch (n) {
    if (n && n.code === "ENOENT") Sc.mkdirsSync(r);
    else throw n;
  }
  mt.writeFileSync(e, "");
}
var Fm = {
  createFile: Dm(Rm),
  createFileSync: Nm
};
const xm = $e.fromCallback, Ac = X, ht = Ce, bc = Qe, Lm = qt.pathExists, { areIdentical: Tc } = mr;
function Um(e, t, r) {
  function n(i, o) {
    ht.link(i, o, (s) => {
      if (s) return r(s);
      r(null);
    });
  }
  ht.lstat(t, (i, o) => {
    ht.lstat(e, (s, a) => {
      if (s)
        return s.message = s.message.replace("lstat", "ensureLink"), r(s);
      if (o && Tc(a, o)) return r(null);
      const l = Ac.dirname(t);
      Lm(l, (d, c) => {
        if (d) return r(d);
        if (c) return n(e, t);
        bc.mkdirs(l, (f) => {
          if (f) return r(f);
          n(e, t);
        });
      });
    });
  });
}
function km(e, t) {
  let r;
  try {
    r = ht.lstatSync(t);
  } catch {
  }
  try {
    const o = ht.lstatSync(e);
    if (r && Tc(o, r)) return;
  } catch (o) {
    throw o.message = o.message.replace("lstat", "ensureLink"), o;
  }
  const n = Ac.dirname(t);
  return ht.existsSync(n) || bc.mkdirsSync(n), ht.linkSync(e, t);
}
var Mm = {
  createLink: xm(Um),
  createLinkSync: km
};
const gt = X, Nr = Ce, Bm = qt.pathExists;
function jm(e, t, r) {
  if (gt.isAbsolute(e))
    return Nr.lstat(e, (n) => n ? (n.message = n.message.replace("lstat", "ensureSymlink"), r(n)) : r(null, {
      toCwd: e,
      toDst: e
    }));
  {
    const n = gt.dirname(t), i = gt.join(n, e);
    return Bm(i, (o, s) => o ? r(o) : s ? r(null, {
      toCwd: i,
      toDst: e
    }) : Nr.lstat(e, (a) => a ? (a.message = a.message.replace("lstat", "ensureSymlink"), r(a)) : r(null, {
      toCwd: e,
      toDst: gt.relative(n, e)
    })));
  }
}
function Hm(e, t) {
  let r;
  if (gt.isAbsolute(e)) {
    if (r = Nr.existsSync(e), !r) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: e,
      toDst: e
    };
  } else {
    const n = gt.dirname(t), i = gt.join(n, e);
    if (r = Nr.existsSync(i), r)
      return {
        toCwd: i,
        toDst: e
      };
    if (r = Nr.existsSync(e), !r) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: gt.relative(n, e)
    };
  }
}
var qm = {
  symlinkPaths: jm,
  symlinkPathsSync: Hm
};
const $c = Ce;
function Gm(e, t, r) {
  if (r = typeof t == "function" ? t : r, t = typeof t == "function" ? !1 : t, t) return r(null, t);
  $c.lstat(e, (n, i) => {
    if (n) return r(null, "file");
    t = i && i.isDirectory() ? "dir" : "file", r(null, t);
  });
}
function Wm(e, t) {
  let r;
  if (t) return t;
  try {
    r = $c.lstatSync(e);
  } catch {
    return "file";
  }
  return r && r.isDirectory() ? "dir" : "file";
}
var Vm = {
  symlinkType: Gm,
  symlinkTypeSync: Wm
};
const zm = $e.fromCallback, Cc = X, qe = Ht, Oc = Qe, Ym = Oc.mkdirs, Xm = Oc.mkdirsSync, Ic = qm, Jm = Ic.symlinkPaths, Km = Ic.symlinkPathsSync, Pc = Vm, Qm = Pc.symlinkType, Zm = Pc.symlinkTypeSync, eg = qt.pathExists, { areIdentical: Dc } = mr;
function tg(e, t, r, n) {
  n = typeof r == "function" ? r : n, r = typeof r == "function" ? !1 : r, qe.lstat(t, (i, o) => {
    !i && o.isSymbolicLink() ? Promise.all([
      qe.stat(e),
      qe.stat(t)
    ]).then(([s, a]) => {
      if (Dc(s, a)) return n(null);
      zs(e, t, r, n);
    }) : zs(e, t, r, n);
  });
}
function zs(e, t, r, n) {
  Jm(e, t, (i, o) => {
    if (i) return n(i);
    e = o.toDst, Qm(o.toCwd, r, (s, a) => {
      if (s) return n(s);
      const l = Cc.dirname(t);
      eg(l, (d, c) => {
        if (d) return n(d);
        if (c) return qe.symlink(e, t, a, n);
        Ym(l, (f) => {
          if (f) return n(f);
          qe.symlink(e, t, a, n);
        });
      });
    });
  });
}
function rg(e, t, r) {
  let n;
  try {
    n = qe.lstatSync(t);
  } catch {
  }
  if (n && n.isSymbolicLink()) {
    const a = qe.statSync(e), l = qe.statSync(t);
    if (Dc(a, l)) return;
  }
  const i = Km(e, t);
  e = i.toDst, r = Zm(i.toCwd, r);
  const o = Cc.dirname(t);
  return qe.existsSync(o) || Xm(o), qe.symlinkSync(e, t, r);
}
var ng = {
  createSymlink: zm(tg),
  createSymlinkSync: rg
};
const { createFile: Ys, createFileSync: Xs } = Fm, { createLink: Js, createLinkSync: Ks } = Mm, { createSymlink: Qs, createSymlinkSync: Zs } = ng;
var ig = {
  // file
  createFile: Ys,
  createFileSync: Xs,
  ensureFile: Ys,
  ensureFileSync: Xs,
  // link
  createLink: Js,
  createLinkSync: Ks,
  ensureLink: Js,
  ensureLinkSync: Ks,
  // symlink
  createSymlink: Qs,
  createSymlinkSync: Zs,
  ensureSymlink: Qs,
  ensureSymlinkSync: Zs
};
function og(e, { EOL: t = `
`, finalEOL: r = !0, replacer: n = null, spaces: i } = {}) {
  const o = r ? t : "";
  return JSON.stringify(e, n, i).replace(/\n/g, t) + o;
}
function sg(e) {
  return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
}
var Bo = { stringify: og, stripBom: sg };
let fr;
try {
  fr = Ce;
} catch {
  fr = Ue;
}
const ui = $e, { stringify: Rc, stripBom: Nc } = Bo;
async function ag(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const r = t.fs || fr, n = "throws" in t ? t.throws : !0;
  let i = await ui.fromCallback(r.readFile)(e, t);
  i = Nc(i);
  let o;
  try {
    o = JSON.parse(i, t ? t.reviver : null);
  } catch (s) {
    if (n)
      throw s.message = `${e}: ${s.message}`, s;
    return null;
  }
  return o;
}
const lg = ui.fromPromise(ag);
function cg(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const r = t.fs || fr, n = "throws" in t ? t.throws : !0;
  try {
    let i = r.readFileSync(e, t);
    return i = Nc(i), JSON.parse(i, t.reviver);
  } catch (i) {
    if (n)
      throw i.message = `${e}: ${i.message}`, i;
    return null;
  }
}
async function ug(e, t, r = {}) {
  const n = r.fs || fr, i = Rc(t, r);
  await ui.fromCallback(n.writeFile)(e, i, r);
}
const fg = ui.fromPromise(ug);
function dg(e, t, r = {}) {
  const n = r.fs || fr, i = Rc(t, r);
  return n.writeFileSync(e, i, r);
}
const hg = {
  readFile: lg,
  readFileSync: cg,
  writeFile: fg,
  writeFileSync: dg
};
var pg = hg;
const $n = pg;
var mg = {
  // jsonfile exports
  readJson: $n.readFile,
  readJsonSync: $n.readFileSync,
  writeJson: $n.writeFile,
  writeJsonSync: $n.writeFileSync
};
const gg = $e.fromCallback, Fr = Ce, Fc = X, xc = Qe, yg = qt.pathExists;
function Eg(e, t, r, n) {
  typeof r == "function" && (n = r, r = "utf8");
  const i = Fc.dirname(e);
  yg(i, (o, s) => {
    if (o) return n(o);
    if (s) return Fr.writeFile(e, t, r, n);
    xc.mkdirs(i, (a) => {
      if (a) return n(a);
      Fr.writeFile(e, t, r, n);
    });
  });
}
function vg(e, ...t) {
  const r = Fc.dirname(e);
  if (Fr.existsSync(r))
    return Fr.writeFileSync(e, ...t);
  xc.mkdirsSync(r), Fr.writeFileSync(e, ...t);
}
var jo = {
  outputFile: gg(Eg),
  outputFileSync: vg
};
const { stringify: wg } = Bo, { outputFile: _g } = jo;
async function Sg(e, t, r = {}) {
  const n = wg(t, r);
  await _g(e, n, r);
}
var Ag = Sg;
const { stringify: bg } = Bo, { outputFileSync: Tg } = jo;
function $g(e, t, r) {
  const n = bg(t, r);
  Tg(e, n, r);
}
var Cg = $g;
const Og = $e.fromPromise, Te = mg;
Te.outputJson = Og(Ag);
Te.outputJsonSync = Cg;
Te.outputJSON = Te.outputJson;
Te.outputJSONSync = Te.outputJsonSync;
Te.writeJSON = Te.writeJson;
Te.writeJSONSync = Te.writeJsonSync;
Te.readJSON = Te.readJson;
Te.readJSONSync = Te.readJsonSync;
var Ig = Te;
const Pg = Ce, po = X, Dg = ko.copy, Lc = ci.remove, Rg = Qe.mkdirp, Ng = qt.pathExists, ea = mr;
function Fg(e, t, r, n) {
  typeof r == "function" && (n = r, r = {}), r = r || {};
  const i = r.overwrite || r.clobber || !1;
  ea.checkPaths(e, t, "move", r, (o, s) => {
    if (o) return n(o);
    const { srcStat: a, isChangingCase: l = !1 } = s;
    ea.checkParentPaths(e, a, t, "move", (d) => {
      if (d) return n(d);
      if (xg(t)) return ta(e, t, i, l, n);
      Rg(po.dirname(t), (c) => c ? n(c) : ta(e, t, i, l, n));
    });
  });
}
function xg(e) {
  const t = po.dirname(e);
  return po.parse(t).root === t;
}
function ta(e, t, r, n, i) {
  if (n) return Mi(e, t, r, i);
  if (r)
    return Lc(t, (o) => o ? i(o) : Mi(e, t, r, i));
  Ng(t, (o, s) => o ? i(o) : s ? i(new Error("dest already exists.")) : Mi(e, t, r, i));
}
function Mi(e, t, r, n) {
  Pg.rename(e, t, (i) => i ? i.code !== "EXDEV" ? n(i) : Lg(e, t, r, n) : n());
}
function Lg(e, t, r, n) {
  Dg(e, t, {
    overwrite: r,
    errorOnExist: !0
  }, (o) => o ? n(o) : Lc(e, n));
}
var Ug = Fg;
const Uc = Ce, mo = X, kg = ko.copySync, kc = ci.removeSync, Mg = Qe.mkdirpSync, ra = mr;
function Bg(e, t, r) {
  r = r || {};
  const n = r.overwrite || r.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = ra.checkPathsSync(e, t, "move", r);
  return ra.checkParentPathsSync(e, i, t, "move"), jg(t) || Mg(mo.dirname(t)), Hg(e, t, n, o);
}
function jg(e) {
  const t = mo.dirname(e);
  return mo.parse(t).root === t;
}
function Hg(e, t, r, n) {
  if (n) return Bi(e, t, r);
  if (r)
    return kc(t), Bi(e, t, r);
  if (Uc.existsSync(t)) throw new Error("dest already exists.");
  return Bi(e, t, r);
}
function Bi(e, t, r) {
  try {
    Uc.renameSync(e, t);
  } catch (n) {
    if (n.code !== "EXDEV") throw n;
    return qg(e, t, r);
  }
}
function qg(e, t, r) {
  return kg(e, t, {
    overwrite: r,
    errorOnExist: !0
  }), kc(e);
}
var Gg = Bg;
const Wg = $e.fromCallback;
var Vg = {
  move: Wg(Ug),
  moveSync: Gg
}, $t = {
  // Export promiseified graceful-fs:
  ...Ht,
  // Export extra methods:
  ...ko,
  ...Pm,
  ...ig,
  ...Ig,
  ...Qe,
  ...Vg,
  ...jo,
  ...qt,
  ...ci
}, ot = {}, _t = {}, he = {}, St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.CancellationError = St.CancellationToken = void 0;
const zg = ii;
class Yg extends zg.EventEmitter {
  get cancelled() {
    return this._cancelled || this._parent != null && this._parent.cancelled;
  }
  set parent(t) {
    this.removeParentCancelHandler(), this._parent = t, this.parentCancelHandler = () => this.cancel(), this._parent.onCancel(this.parentCancelHandler);
  }
  // babel cannot compile ... correctly for super calls
  constructor(t) {
    super(), this.parentCancelHandler = null, this._parent = null, this._cancelled = !1, t != null && (this.parent = t);
  }
  cancel() {
    this._cancelled = !0, this.emit("cancel");
  }
  onCancel(t) {
    this.cancelled ? t() : this.once("cancel", t);
  }
  createPromise(t) {
    if (this.cancelled)
      return Promise.reject(new go());
    const r = () => {
      if (n != null)
        try {
          this.removeListener("cancel", n), n = null;
        } catch {
        }
    };
    let n = null;
    return new Promise((i, o) => {
      let s = null;
      if (n = () => {
        try {
          s != null && (s(), s = null);
        } finally {
          o(new go());
        }
      }, this.cancelled) {
        n();
        return;
      }
      this.onCancel(n), t(i, o, (a) => {
        s = a;
      });
    }).then((i) => (r(), i)).catch((i) => {
      throw r(), i;
    });
  }
  removeParentCancelHandler() {
    const t = this._parent;
    t != null && this.parentCancelHandler != null && (t.removeListener("cancel", this.parentCancelHandler), this.parentCancelHandler = null);
  }
  dispose() {
    try {
      this.removeParentCancelHandler();
    } finally {
      this.removeAllListeners(), this._parent = null;
    }
  }
}
St.CancellationToken = Yg;
class go extends Error {
  constructor() {
    super("cancelled");
  }
}
St.CancellationError = go;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.newError = Xg;
function Xg(e, t) {
  const r = new Error(e);
  return r.code = t, r;
}
var be = {}, yo = { exports: {} }, Cn = { exports: {} }, ji, na;
function Jg() {
  if (na) return ji;
  na = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, o = n * 365.25;
  ji = function(c, f) {
    f = f || {};
    var p = typeof c;
    if (p === "string" && c.length > 0)
      return s(c);
    if (p === "number" && isFinite(c))
      return f.long ? l(c) : a(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(c)
    );
  };
  function s(c) {
    if (c = String(c), !(c.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        c
      );
      if (f) {
        var p = parseFloat(f[1]), g = (f[2] || "ms").toLowerCase();
        switch (g) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * o;
          case "weeks":
          case "week":
          case "w":
            return p * i;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function a(c) {
    var f = Math.abs(c);
    return f >= n ? Math.round(c / n) + "d" : f >= r ? Math.round(c / r) + "h" : f >= t ? Math.round(c / t) + "m" : f >= e ? Math.round(c / e) + "s" : c + "ms";
  }
  function l(c) {
    var f = Math.abs(c);
    return f >= n ? d(c, f, n, "day") : f >= r ? d(c, f, r, "hour") : f >= t ? d(c, f, t, "minute") : f >= e ? d(c, f, e, "second") : c + " ms";
  }
  function d(c, f, p, g) {
    var _ = f >= p * 1.5;
    return Math.round(c / p) + " " + g + (_ ? "s" : "");
  }
  return ji;
}
var Hi, ia;
function Mc() {
  if (ia) return Hi;
  ia = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = d, n.disable = a, n.enable = o, n.enabled = l, n.humanize = Jg(), n.destroy = c, Object.keys(t).forEach((f) => {
      n[f] = t[f];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(f) {
      let p = 0;
      for (let g = 0; g < f.length; g++)
        p = (p << 5) - p + f.charCodeAt(g), p |= 0;
      return n.colors[Math.abs(p) % n.colors.length];
    }
    n.selectColor = r;
    function n(f) {
      let p, g = null, _, E;
      function S(...b) {
        if (!S.enabled)
          return;
        const A = S, N = Number(/* @__PURE__ */ new Date()), x = N - (p || N);
        A.diff = x, A.prev = p, A.curr = N, p = N, b[0] = n.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
        let ee = 0;
        b[0] = b[0].replace(/%([a-zA-Z%])/g, (z, Ne) => {
          if (z === "%%")
            return "%";
          ee++;
          const y = n.formatters[Ne];
          if (typeof y == "function") {
            const q = b[ee];
            z = y.call(A, q), b.splice(ee, 1), ee--;
          }
          return z;
        }), n.formatArgs.call(A, b), (A.log || n.log).apply(A, b);
      }
      return S.namespace = f, S.useColors = n.useColors(), S.color = n.selectColor(f), S.extend = i, S.destroy = n.destroy, Object.defineProperty(S, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => g !== null ? g : (_ !== n.namespaces && (_ = n.namespaces, E = n.enabled(f)), E),
        set: (b) => {
          g = b;
        }
      }), typeof n.init == "function" && n.init(S), S;
    }
    function i(f, p) {
      const g = n(this.namespace + (typeof p > "u" ? ":" : p) + f);
      return g.log = this.log, g;
    }
    function o(f) {
      n.save(f), n.namespaces = f, n.names = [], n.skips = [];
      const p = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const g of p)
        g[0] === "-" ? n.skips.push(g.slice(1)) : n.names.push(g);
    }
    function s(f, p) {
      let g = 0, _ = 0, E = -1, S = 0;
      for (; g < f.length; )
        if (_ < p.length && (p[_] === f[g] || p[_] === "*"))
          p[_] === "*" ? (E = _, S = g, _++) : (g++, _++);
        else if (E !== -1)
          _ = E + 1, S++, g = S;
        else
          return !1;
      for (; _ < p.length && p[_] === "*"; )
        _++;
      return _ === p.length;
    }
    function a() {
      const f = [
        ...n.names,
        ...n.skips.map((p) => "-" + p)
      ].join(",");
      return n.enable(""), f;
    }
    function l(f) {
      for (const p of n.skips)
        if (s(f, p))
          return !1;
      for (const p of n.names)
        if (s(f, p))
          return !0;
      return !1;
    }
    function d(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function c() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return Hi = e, Hi;
}
var oa;
function Kg() {
  return oa || (oa = 1, function(e, t) {
    t.formatArgs = n, t.save = i, t.load = o, t.useColors = r, t.storage = s(), t.destroy = /* @__PURE__ */ (() => {
      let l = !1;
      return () => {
        l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let l;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (l = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function n(l) {
      if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const d = "color: " + this.color;
      l.splice(1, 0, d, "color: inherit");
      let c = 0, f = 0;
      l[0].replace(/%[a-zA-Z%]/g, (p) => {
        p !== "%%" && (c++, p === "%c" && (f = c));
      }), l.splice(f, 0, d);
    }
    t.log = console.debug || console.log || (() => {
    });
    function i(l) {
      try {
        l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function o() {
      let l;
      try {
        l = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
    }
    function s() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Mc()(t);
    const { formatters: a } = e.exports;
    a.j = function(l) {
      try {
        return JSON.stringify(l);
      } catch (d) {
        return "[UnexpectedJSONParseError]: " + d.message;
      }
    };
  }(Cn, Cn.exports)), Cn.exports;
}
var On = { exports: {} }, qi, sa;
function Qg() {
  return sa || (sa = 1, qi = (e, t = process.argv) => {
    const r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
    return n !== -1 && (i === -1 || n < i);
  }), qi;
}
var Gi, aa;
function Zg() {
  if (aa) return Gi;
  aa = 1;
  const e = Ke, t = kl, r = Qg(), { env: n } = process;
  let i;
  r("no-color") || r("no-colors") || r("color=false") || r("color=never") ? i = 0 : (r("color") || r("colors") || r("color=true") || r("color=always")) && (i = 1), "FORCE_COLOR" in n && (n.FORCE_COLOR === "true" ? i = 1 : n.FORCE_COLOR === "false" ? i = 0 : i = n.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(n.FORCE_COLOR, 10), 3));
  function o(l) {
    return l === 0 ? !1 : {
      level: l,
      hasBasic: !0,
      has256: l >= 2,
      has16m: l >= 3
    };
  }
  function s(l, d) {
    if (i === 0)
      return 0;
    if (r("color=16m") || r("color=full") || r("color=truecolor"))
      return 3;
    if (r("color=256"))
      return 2;
    if (l && !d && i === void 0)
      return 0;
    const c = i || 0;
    if (n.TERM === "dumb")
      return c;
    if (process.platform === "win32") {
      const f = e.release().split(".");
      return Number(f[0]) >= 10 && Number(f[2]) >= 10586 ? Number(f[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in n)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((f) => f in n) || n.CI_NAME === "codeship" ? 1 : c;
    if ("TEAMCITY_VERSION" in n)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(n.TEAMCITY_VERSION) ? 1 : 0;
    if (n.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in n) {
      const f = parseInt((n.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (n.TERM_PROGRAM) {
        case "iTerm.app":
          return f >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(n.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(n.TERM) || "COLORTERM" in n ? 1 : c;
  }
  function a(l) {
    const d = s(l, l && l.isTTY);
    return o(d);
  }
  return Gi = {
    supportsColor: a,
    stdout: o(s(!0, t.isatty(1))),
    stderr: o(s(!0, t.isatty(2)))
  }, Gi;
}
var la;
function e0() {
  return la || (la = 1, function(e, t) {
    const r = kl, n = ni;
    t.init = c, t.log = a, t.formatArgs = o, t.save = l, t.load = d, t.useColors = i, t.destroy = n.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), t.colors = [6, 2, 3, 4, 5, 1];
    try {
      const p = Zg();
      p && (p.stderr || p).level >= 2 && (t.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    t.inspectOpts = Object.keys(process.env).filter((p) => /^debug_/i.test(p)).reduce((p, g) => {
      const _ = g.substring(6).toLowerCase().replace(/_([a-z])/g, (S, b) => b.toUpperCase());
      let E = process.env[g];
      return /^(yes|on|true|enabled)$/i.test(E) ? E = !0 : /^(no|off|false|disabled)$/i.test(E) ? E = !1 : E === "null" ? E = null : E = Number(E), p[_] = E, p;
    }, {});
    function i() {
      return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : r.isatty(process.stderr.fd);
    }
    function o(p) {
      const { namespace: g, useColors: _ } = this;
      if (_) {
        const E = this.color, S = "\x1B[3" + (E < 8 ? E : "8;5;" + E), b = `  ${S};1m${g} \x1B[0m`;
        p[0] = b + p[0].split(`
`).join(`
` + b), p.push(S + "m+" + e.exports.humanize(this.diff) + "\x1B[0m");
      } else
        p[0] = s() + g + " " + p[0];
    }
    function s() {
      return t.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function a(...p) {
      return process.stderr.write(n.formatWithOptions(t.inspectOpts, ...p) + `
`);
    }
    function l(p) {
      p ? process.env.DEBUG = p : delete process.env.DEBUG;
    }
    function d() {
      return process.env.DEBUG;
    }
    function c(p) {
      p.inspectOpts = {};
      const g = Object.keys(t.inspectOpts);
      for (let _ = 0; _ < g.length; _++)
        p.inspectOpts[g[_]] = t.inspectOpts[g[_]];
    }
    e.exports = Mc()(t);
    const { formatters: f } = e.exports;
    f.o = function(p) {
      return this.inspectOpts.colors = this.useColors, n.inspect(p, this.inspectOpts).split(`
`).map((g) => g.trim()).join(" ");
    }, f.O = function(p) {
      return this.inspectOpts.colors = this.useColors, n.inspect(p, this.inspectOpts);
    };
  }(On, On.exports)), On.exports;
}
typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? yo.exports = Kg() : yo.exports = e0();
var t0 = yo.exports, nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.ProgressCallbackTransform = void 0;
const r0 = Zr;
class n0 extends r0.Transform {
  constructor(t, r, n) {
    super(), this.total = t, this.cancellationToken = r, this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.nextUpdate = this.start + 1e3;
  }
  _transform(t, r, n) {
    if (this.cancellationToken.cancelled) {
      n(new Error("cancelled"), null);
      return;
    }
    this.transferred += t.length, this.delta += t.length;
    const i = Date.now();
    i >= this.nextUpdate && this.transferred !== this.total && (this.nextUpdate = i + 1e3, this.onProgress({
      total: this.total,
      delta: this.delta,
      transferred: this.transferred,
      percent: this.transferred / this.total * 100,
      bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
    }), this.delta = 0), n(null, t);
  }
  _flush(t) {
    if (this.cancellationToken.cancelled) {
      t(new Error("cancelled"));
      return;
    }
    this.onProgress({
      total: this.total,
      delta: this.delta,
      transferred: this.total,
      percent: 100,
      bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
    }), this.delta = 0, t(null);
  }
}
nn.ProgressCallbackTransform = n0;
Object.defineProperty(be, "__esModule", { value: !0 });
be.DigestTransform = be.HttpExecutor = be.HttpError = void 0;
be.createHttpError = Eo;
be.parseJson = f0;
be.configureRequestOptionsFromUrl = jc;
be.configureRequestUrl = qo;
be.safeGetHeader = cr;
be.configureRequestOptions = Xn;
be.safeStringifyJson = Jn;
const i0 = en, o0 = t0, s0 = Ue, a0 = Zr, Bc = pr, l0 = St, ca = gr, c0 = nn, Tr = (0, o0.default)("electron-builder");
function Eo(e, t = null) {
  return new Ho(e.statusCode || -1, `${e.statusCode} ${e.statusMessage}` + (t == null ? "" : `
` + JSON.stringify(t, null, "  ")) + `
Headers: ` + Jn(e.headers), t);
}
const u0 = /* @__PURE__ */ new Map([
  [429, "Too many requests"],
  [400, "Bad request"],
  [403, "Forbidden"],
  [404, "Not found"],
  [405, "Method not allowed"],
  [406, "Not acceptable"],
  [408, "Request timeout"],
  [413, "Request entity too large"],
  [500, "Internal server error"],
  [502, "Bad gateway"],
  [503, "Service unavailable"],
  [504, "Gateway timeout"],
  [505, "HTTP version not supported"]
]);
class Ho extends Error {
  constructor(t, r = `HTTP error: ${u0.get(t) || t}`, n = null) {
    super(r), this.statusCode = t, this.description = n, this.name = "HttpError", this.code = `HTTP_ERROR_${t}`;
  }
  isServerError() {
    return this.statusCode >= 500 && this.statusCode <= 599;
  }
}
be.HttpError = Ho;
function f0(e) {
  return e.then((t) => t == null || t.length === 0 ? null : JSON.parse(t));
}
class Yn {
  constructor() {
    this.maxRedirects = 10;
  }
  request(t, r = new l0.CancellationToken(), n) {
    Xn(t);
    const i = n == null ? void 0 : JSON.stringify(n), o = i ? Buffer.from(i) : void 0;
    if (o != null) {
      Tr(i);
      const { headers: s, ...a } = t;
      t = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": o.length,
          ...s
        },
        ...a
      };
    }
    return this.doApiRequest(t, r, (s) => s.end(o));
  }
  doApiRequest(t, r, n, i = 0) {
    return Tr.enabled && Tr(`Request: ${Jn(t)}`), r.createPromise((o, s, a) => {
      const l = this.createRequest(t, (d) => {
        try {
          this.handleResponse(d, t, r, o, s, i, n);
        } catch (c) {
          s(c);
        }
      });
      this.addErrorAndTimeoutHandlers(l, s, t.timeout), this.addRedirectHandlers(l, t, s, i, (d) => {
        this.doApiRequest(d, r, n, i).then(o).catch(s);
      }), n(l, s), a(() => l.abort());
    });
  }
  // noinspection JSUnusedLocalSymbols
  // eslint-disable-next-line
  addRedirectHandlers(t, r, n, i, o) {
  }
  addErrorAndTimeoutHandlers(t, r, n = 60 * 1e3) {
    this.addTimeOutHandler(t, r, n), t.on("error", r), t.on("aborted", () => {
      r(new Error("Request has been aborted by the server"));
    });
  }
  handleResponse(t, r, n, i, o, s, a) {
    var l;
    if (Tr.enabled && Tr(`Response: ${t.statusCode} ${t.statusMessage}, request options: ${Jn(r)}`), t.statusCode === 404) {
      o(Eo(t, `method: ${r.method || "GET"} url: ${r.protocol || "https:"}//${r.hostname}${r.port ? `:${r.port}` : ""}${r.path}

Please double check that your authentication token is correct. Due to security reasons, actual status maybe not reported, but 404.
`));
      return;
    } else if (t.statusCode === 204) {
      i();
      return;
    }
    const d = (l = t.statusCode) !== null && l !== void 0 ? l : 0, c = d >= 300 && d < 400, f = cr(t, "location");
    if (c && f != null) {
      if (s > this.maxRedirects) {
        o(this.createMaxRedirectError());
        return;
      }
      this.doApiRequest(Yn.prepareRedirectUrlOptions(f, r), n, a, s).then(i).catch(o);
      return;
    }
    t.setEncoding("utf8");
    let p = "";
    t.on("error", o), t.on("data", (g) => p += g), t.on("end", () => {
      try {
        if (t.statusCode != null && t.statusCode >= 400) {
          const g = cr(t, "content-type"), _ = g != null && (Array.isArray(g) ? g.find((E) => E.includes("json")) != null : g.includes("json"));
          o(Eo(t, `method: ${r.method || "GET"} url: ${r.protocol || "https:"}//${r.hostname}${r.port ? `:${r.port}` : ""}${r.path}

          Data:
          ${_ ? JSON.stringify(JSON.parse(p)) : p}
          `));
        } else
          i(p.length === 0 ? null : p);
      } catch (g) {
        o(g);
      }
    });
  }
  async downloadToBuffer(t, r) {
    return await r.cancellationToken.createPromise((n, i, o) => {
      const s = [], a = {
        headers: r.headers || void 0,
        // because PrivateGitHubProvider requires HttpExecutor.prepareRedirectUrlOptions logic, so, we need to redirect manually
        redirect: "manual"
      };
      qo(t, a), Xn(a), this.doDownload(a, {
        destination: null,
        options: r,
        onCancel: o,
        callback: (l) => {
          l == null ? n(Buffer.concat(s)) : i(l);
        },
        responseHandler: (l, d) => {
          let c = 0;
          l.on("data", (f) => {
            if (c += f.length, c > 524288e3) {
              d(new Error("Maximum allowed size is 500 MB"));
              return;
            }
            s.push(f);
          }), l.on("end", () => {
            d(null);
          });
        }
      }, 0);
    });
  }
  doDownload(t, r, n) {
    const i = this.createRequest(t, (o) => {
      if (o.statusCode >= 400) {
        r.callback(new Error(`Cannot download "${t.protocol || "https:"}//${t.hostname}${t.path}", status ${o.statusCode}: ${o.statusMessage}`));
        return;
      }
      o.on("error", r.callback);
      const s = cr(o, "location");
      if (s != null) {
        n < this.maxRedirects ? this.doDownload(Yn.prepareRedirectUrlOptions(s, t), r, n++) : r.callback(this.createMaxRedirectError());
        return;
      }
      r.responseHandler == null ? h0(r, o) : r.responseHandler(o, r.callback);
    });
    this.addErrorAndTimeoutHandlers(i, r.callback, t.timeout), this.addRedirectHandlers(i, t, r.callback, n, (o) => {
      this.doDownload(o, r, n++);
    }), i.end();
  }
  createMaxRedirectError() {
    return new Error(`Too many redirects (> ${this.maxRedirects})`);
  }
  addTimeOutHandler(t, r, n) {
    t.on("socket", (i) => {
      i.setTimeout(n, () => {
        t.abort(), r(new Error("Request timed out"));
      });
    });
  }
  static prepareRedirectUrlOptions(t, r) {
    const n = jc(t, { ...r }), i = n.headers;
    if (i != null && i.authorization) {
      const o = new Bc.URL(t);
      (o.hostname.endsWith(".amazonaws.com") || o.searchParams.has("X-Amz-Credential")) && delete i.authorization;
    }
    return n;
  }
  static retryOnServerError(t, r = 3) {
    for (let n = 0; ; n++)
      try {
        return t();
      } catch (i) {
        if (n < r && (i instanceof Ho && i.isServerError() || i.code === "EPIPE"))
          continue;
        throw i;
      }
  }
}
be.HttpExecutor = Yn;
function jc(e, t) {
  const r = Xn(t);
  return qo(new Bc.URL(e), r), r;
}
function qo(e, t) {
  t.protocol = e.protocol, t.hostname = e.hostname, e.port ? t.port = e.port : t.port && delete t.port, t.path = e.pathname + e.search;
}
class vo extends a0.Transform {
  // noinspection JSUnusedGlobalSymbols
  get actual() {
    return this._actual;
  }
  constructor(t, r = "sha512", n = "base64") {
    super(), this.expected = t, this.algorithm = r, this.encoding = n, this._actual = null, this.isValidateOnEnd = !0, this.digester = (0, i0.createHash)(r);
  }
  // noinspection JSUnusedGlobalSymbols
  _transform(t, r, n) {
    this.digester.update(t), n(null, t);
  }
  // noinspection JSUnusedGlobalSymbols
  _flush(t) {
    if (this._actual = this.digester.digest(this.encoding), this.isValidateOnEnd)
      try {
        this.validate();
      } catch (r) {
        t(r);
        return;
      }
    t(null);
  }
  validate() {
    if (this._actual == null)
      throw (0, ca.newError)("Not finished yet", "ERR_STREAM_NOT_FINISHED");
    if (this._actual !== this.expected)
      throw (0, ca.newError)(`${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`, "ERR_CHECKSUM_MISMATCH");
    return null;
  }
}
be.DigestTransform = vo;
function d0(e, t, r) {
  return e != null && t != null && e !== t ? (r(new Error(`checksum mismatch: expected ${t} but got ${e} (X-Checksum-Sha2 header)`)), !1) : !0;
}
function cr(e, t) {
  const r = e.headers[t];
  return r == null ? null : Array.isArray(r) ? r.length === 0 ? null : r[r.length - 1] : r;
}
function h0(e, t) {
  if (!d0(cr(t, "X-Checksum-Sha2"), e.options.sha2, e.callback))
    return;
  const r = [];
  if (e.options.onProgress != null) {
    const s = cr(t, "content-length");
    s != null && r.push(new c0.ProgressCallbackTransform(parseInt(s, 10), e.options.cancellationToken, e.options.onProgress));
  }
  const n = e.options.sha512;
  n != null ? r.push(new vo(n, "sha512", n.length === 128 && !n.includes("+") && !n.includes("Z") && !n.includes("=") ? "hex" : "base64")) : e.options.sha2 != null && r.push(new vo(e.options.sha2, "sha256", "hex"));
  const i = (0, s0.createWriteStream)(e.destination);
  r.push(i);
  let o = t;
  for (const s of r)
    s.on("error", (a) => {
      i.close(), e.options.cancellationToken.cancelled || e.callback(a);
    }), o = o.pipe(s);
  i.on("finish", () => {
    i.close(e.callback);
  });
}
function Xn(e, t, r) {
  r != null && (e.method = r), e.headers = { ...e.headers };
  const n = e.headers;
  return t != null && (n.authorization = t.startsWith("Basic") || t.startsWith("Bearer") ? t : `token ${t}`), n["User-Agent"] == null && (n["User-Agent"] = "electron-builder"), (r == null || r === "GET" || n["Cache-Control"] == null) && (n["Cache-Control"] = "no-cache"), e.protocol == null && process.versions.electron != null && (e.protocol = "https:"), e;
}
function Jn(e, t) {
  return JSON.stringify(e, (r, n) => r.endsWith("Authorization") || r.endsWith("authorization") || r.endsWith("Password") || r.endsWith("PASSWORD") || r.endsWith("Token") || r.includes("password") || r.includes("token") || t != null && t.has(r) ? "<stripped sensitive data>" : n, 2);
}
var fi = {};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.MemoLazy = void 0;
class p0 {
  constructor(t, r) {
    this.selector = t, this.creator = r, this.selected = void 0, this._value = void 0;
  }
  get hasValue() {
    return this._value !== void 0;
  }
  get value() {
    const t = this.selector();
    if (this._value !== void 0 && Hc(this.selected, t))
      return this._value;
    this.selected = t;
    const r = this.creator(t);
    return this.value = r, r;
  }
  set value(t) {
    this._value = t;
  }
}
fi.MemoLazy = p0;
function Hc(e, t) {
  if (typeof e == "object" && e !== null && (typeof t == "object" && t !== null)) {
    const i = Object.keys(e), o = Object.keys(t);
    return i.length === o.length && i.every((s) => Hc(e[s], t[s]));
  }
  return e === t;
}
var di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
di.githubUrl = m0;
di.getS3LikeProviderBaseUrl = g0;
function m0(e, t = "github.com") {
  return `${e.protocol || "https"}://${e.host || t}`;
}
function g0(e) {
  const t = e.provider;
  if (t === "s3")
    return y0(e);
  if (t === "spaces")
    return E0(e);
  throw new Error(`Not supported provider: ${t}`);
}
function y0(e) {
  let t;
  if (e.accelerate == !0)
    t = `https://${e.bucket}.s3-accelerate.amazonaws.com`;
  else if (e.endpoint != null)
    t = `${e.endpoint}/${e.bucket}`;
  else if (e.bucket.includes(".")) {
    if (e.region == null)
      throw new Error(`Bucket name "${e.bucket}" includes a dot, but S3 region is missing`);
    e.region === "us-east-1" ? t = `https://s3.amazonaws.com/${e.bucket}` : t = `https://s3-${e.region}.amazonaws.com/${e.bucket}`;
  } else e.region === "cn-north-1" ? t = `https://${e.bucket}.s3.${e.region}.amazonaws.com.cn` : t = `https://${e.bucket}.s3.amazonaws.com`;
  return qc(t, e.path);
}
function qc(e, t) {
  return t != null && t.length > 0 && (t.startsWith("/") || (e += "/"), e += t), e;
}
function E0(e) {
  if (e.name == null)
    throw new Error("name is missing");
  if (e.region == null)
    throw new Error("region is missing");
  return qc(`https://${e.name}.${e.region}.digitaloceanspaces.com`, e.path);
}
var Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.retry = Gc;
const v0 = St;
async function Gc(e, t, r, n = 0, i = 0, o) {
  var s;
  const a = new v0.CancellationToken();
  try {
    return await e();
  } catch (l) {
    if ((!((s = o == null ? void 0 : o(l)) !== null && s !== void 0) || s) && t > 0 && !a.cancelled)
      return await new Promise((d) => setTimeout(d, r + n * i)), await Gc(e, t - 1, r, n, i + 1, o);
    throw l;
  }
}
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.parseDn = w0;
function w0(e) {
  let t = !1, r = null, n = "", i = 0;
  e = e.trim();
  const o = /* @__PURE__ */ new Map();
  for (let s = 0; s <= e.length; s++) {
    if (s === e.length) {
      r !== null && o.set(r, n);
      break;
    }
    const a = e[s];
    if (t) {
      if (a === '"') {
        t = !1;
        continue;
      }
    } else {
      if (a === '"') {
        t = !0;
        continue;
      }
      if (a === "\\") {
        s++;
        const l = parseInt(e.slice(s, s + 2), 16);
        Number.isNaN(l) ? n += e[s] : (s++, n += String.fromCharCode(l));
        continue;
      }
      if (r === null && a === "=") {
        r = n, n = "";
        continue;
      }
      if (a === "," || a === ";" || a === "+") {
        r !== null && o.set(r, n), r = null, n = "";
        continue;
      }
    }
    if (a === " " && !t) {
      if (n.length === 0)
        continue;
      if (s > i) {
        let l = s;
        for (; e[l] === " "; )
          l++;
        i = l;
      }
      if (i >= e.length || e[i] === "," || e[i] === ";" || r === null && e[i] === "=" || r !== null && e[i] === "+") {
        s = i - 1;
        continue;
      }
    }
    n += a;
  }
  return o;
}
var dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.nil = dr.UUID = void 0;
const Wc = en, Vc = gr, _0 = "options.name must be either a string or a Buffer", ua = (0, Wc.randomBytes)(16);
ua[0] = ua[0] | 1;
const qn = {}, V = [];
for (let e = 0; e < 256; e++) {
  const t = (e + 256).toString(16).substr(1);
  qn[t] = e, V[e] = t;
}
class jt {
  constructor(t) {
    this.ascii = null, this.binary = null;
    const r = jt.check(t);
    if (!r)
      throw new Error("not a UUID");
    this.version = r.version, r.format === "ascii" ? this.ascii = t : this.binary = t;
  }
  static v5(t, r) {
    return S0(t, "sha1", 80, r);
  }
  toString() {
    return this.ascii == null && (this.ascii = A0(this.binary)), this.ascii;
  }
  inspect() {
    return `UUID v${this.version} ${this.toString()}`;
  }
  static check(t, r = 0) {
    if (typeof t == "string")
      return t = t.toLowerCase(), /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(t) ? t === "00000000-0000-0000-0000-000000000000" ? { version: void 0, variant: "nil", format: "ascii" } : {
        version: (qn[t[14] + t[15]] & 240) >> 4,
        variant: fa((qn[t[19] + t[20]] & 224) >> 5),
        format: "ascii"
      } : !1;
    if (Buffer.isBuffer(t)) {
      if (t.length < r + 16)
        return !1;
      let n = 0;
      for (; n < 16 && t[r + n] === 0; n++)
        ;
      return n === 16 ? { version: void 0, variant: "nil", format: "binary" } : {
        version: (t[r + 6] & 240) >> 4,
        variant: fa((t[r + 8] & 224) >> 5),
        format: "binary"
      };
    }
    throw (0, Vc.newError)("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE");
  }
  // read stringified uuid into a Buffer
  static parse(t) {
    const r = Buffer.allocUnsafe(16);
    let n = 0;
    for (let i = 0; i < 16; i++)
      r[i] = qn[t[n++] + t[n++]], (i === 3 || i === 5 || i === 7 || i === 9) && (n += 1);
    return r;
  }
}
dr.UUID = jt;
jt.OID = jt.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8");
function fa(e) {
  switch (e) {
    case 0:
    case 1:
    case 3:
      return "ncs";
    case 4:
    case 5:
      return "rfc4122";
    case 6:
      return "microsoft";
    default:
      return "future";
  }
}
var xr;
(function(e) {
  e[e.ASCII = 0] = "ASCII", e[e.BINARY = 1] = "BINARY", e[e.OBJECT = 2] = "OBJECT";
})(xr || (xr = {}));
function S0(e, t, r, n, i = xr.ASCII) {
  const o = (0, Wc.createHash)(t);
  if (typeof e != "string" && !Buffer.isBuffer(e))
    throw (0, Vc.newError)(_0, "ERR_INVALID_UUID_NAME");
  o.update(n), o.update(e);
  const a = o.digest();
  let l;
  switch (i) {
    case xr.BINARY:
      a[6] = a[6] & 15 | r, a[8] = a[8] & 63 | 128, l = a;
      break;
    case xr.OBJECT:
      a[6] = a[6] & 15 | r, a[8] = a[8] & 63 | 128, l = new jt(a);
      break;
    default:
      l = V[a[0]] + V[a[1]] + V[a[2]] + V[a[3]] + "-" + V[a[4]] + V[a[5]] + "-" + V[a[6] & 15 | r] + V[a[7]] + "-" + V[a[8] & 63 | 128] + V[a[9]] + "-" + V[a[10]] + V[a[11]] + V[a[12]] + V[a[13]] + V[a[14]] + V[a[15]];
      break;
  }
  return l;
}
function A0(e) {
  return V[e[0]] + V[e[1]] + V[e[2]] + V[e[3]] + "-" + V[e[4]] + V[e[5]] + "-" + V[e[6]] + V[e[7]] + "-" + V[e[8]] + V[e[9]] + "-" + V[e[10]] + V[e[11]] + V[e[12]] + V[e[13]] + V[e[14]] + V[e[15]];
}
dr.nil = new jt("00000000-0000-0000-0000-000000000000");
var on = {}, zc = {};
(function(e) {
  (function(t) {
    t.parser = function(h, u) {
      return new n(h, u);
    }, t.SAXParser = n, t.SAXStream = c, t.createStream = d, t.MAX_BUFFER_LENGTH = 64 * 1024;
    var r = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    t.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function n(h, u) {
      if (!(this instanceof n))
        return new n(h, u);
      var T = this;
      o(T), T.q = T.c = "", T.bufferCheckPosition = t.MAX_BUFFER_LENGTH, T.opt = u || {}, T.opt.lowercase = T.opt.lowercase || T.opt.lowercasetags, T.looseCase = T.opt.lowercase ? "toLowerCase" : "toUpperCase", T.tags = [], T.closed = T.closedRoot = T.sawRoot = !1, T.tag = T.error = null, T.strict = !!h, T.noscript = !!(h || T.opt.noscript), T.state = y.BEGIN, T.strictEntities = T.opt.strictEntities, T.ENTITIES = T.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), T.attribList = [], T.opt.xmlns && (T.ns = Object.create(E)), T.opt.unquotedAttributeValues === void 0 && (T.opt.unquotedAttributeValues = !h), T.trackPosition = T.opt.position !== !1, T.trackPosition && (T.position = T.line = T.column = 0), B(T, "onready");
    }
    Object.create || (Object.create = function(h) {
      function u() {
      }
      u.prototype = h;
      var T = new u();
      return T;
    }), Object.keys || (Object.keys = function(h) {
      var u = [];
      for (var T in h) h.hasOwnProperty(T) && u.push(T);
      return u;
    });
    function i(h) {
      for (var u = Math.max(t.MAX_BUFFER_LENGTH, 10), T = 0, w = 0, Y = r.length; w < Y; w++) {
        var te = h[r[w]].length;
        if (te > u)
          switch (r[w]) {
            case "textNode":
              J(h);
              break;
            case "cdata":
              M(h, "oncdata", h.cdata), h.cdata = "";
              break;
            case "script":
              M(h, "onscript", h.script), h.script = "";
              break;
            default:
              C(h, "Max buffer length exceeded: " + r[w]);
          }
        T = Math.max(T, te);
      }
      var ie = t.MAX_BUFFER_LENGTH - T;
      h.bufferCheckPosition = ie + h.position;
    }
    function o(h) {
      for (var u = 0, T = r.length; u < T; u++)
        h[r[u]] = "";
    }
    function s(h) {
      J(h), h.cdata !== "" && (M(h, "oncdata", h.cdata), h.cdata = ""), h.script !== "" && (M(h, "onscript", h.script), h.script = "");
    }
    n.prototype = {
      end: function() {
        D(this);
      },
      write: ze,
      resume: function() {
        return this.error = null, this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        s(this);
      }
    };
    var a;
    try {
      a = require("stream").Stream;
    } catch {
      a = function() {
      };
    }
    a || (a = function() {
    });
    var l = t.EVENTS.filter(function(h) {
      return h !== "error" && h !== "end";
    });
    function d(h, u) {
      return new c(h, u);
    }
    function c(h, u) {
      if (!(this instanceof c))
        return new c(h, u);
      a.apply(this), this._parser = new n(h, u), this.writable = !0, this.readable = !0;
      var T = this;
      this._parser.onend = function() {
        T.emit("end");
      }, this._parser.onerror = function(w) {
        T.emit("error", w), T._parser.error = null;
      }, this._decoder = null, l.forEach(function(w) {
        Object.defineProperty(T, "on" + w, {
          get: function() {
            return T._parser["on" + w];
          },
          set: function(Y) {
            if (!Y)
              return T.removeAllListeners(w), T._parser["on" + w] = Y, Y;
            T.on(w, Y);
          },
          enumerable: !0,
          configurable: !1
        });
      });
    }
    c.prototype = Object.create(a.prototype, {
      constructor: {
        value: c
      }
    }), c.prototype.write = function(h) {
      if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(h)) {
        if (!this._decoder) {
          var u = yd.StringDecoder;
          this._decoder = new u("utf8");
        }
        h = this._decoder.write(h);
      }
      return this._parser.write(h.toString()), this.emit("data", h), !0;
    }, c.prototype.end = function(h) {
      return h && h.length && this.write(h), this._parser.end(), !0;
    }, c.prototype.on = function(h, u) {
      var T = this;
      return !T._parser["on" + h] && l.indexOf(h) !== -1 && (T._parser["on" + h] = function() {
        var w = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        w.splice(0, 0, h), T.emit.apply(T, w);
      }), a.prototype.on.call(T, h, u);
    };
    var f = "[CDATA[", p = "DOCTYPE", g = "http://www.w3.org/XML/1998/namespace", _ = "http://www.w3.org/2000/xmlns/", E = { xml: g, xmlns: _ }, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, b = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, A = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, N = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function x(h) {
      return h === " " || h === `
` || h === "\r" || h === "	";
    }
    function ee(h) {
      return h === '"' || h === "'";
    }
    function se(h) {
      return h === ">" || x(h);
    }
    function z(h, u) {
      return h.test(u);
    }
    function Ne(h, u) {
      return !z(h, u);
    }
    var y = 0;
    t.STATE = {
      BEGIN: y++,
      // leading byte order mark or whitespace
      BEGIN_WHITESPACE: y++,
      // leading whitespace
      TEXT: y++,
      // general stuff
      TEXT_ENTITY: y++,
      // &amp and such.
      OPEN_WAKA: y++,
      // <
      SGML_DECL: y++,
      // <!BLARG
      SGML_DECL_QUOTED: y++,
      // <!BLARG foo "bar
      DOCTYPE: y++,
      // <!DOCTYPE
      DOCTYPE_QUOTED: y++,
      // <!DOCTYPE "//blah
      DOCTYPE_DTD: y++,
      // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: y++,
      // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: y++,
      // <!-
      COMMENT: y++,
      // <!--
      COMMENT_ENDING: y++,
      // <!-- blah -
      COMMENT_ENDED: y++,
      // <!-- blah --
      CDATA: y++,
      // <![CDATA[ something
      CDATA_ENDING: y++,
      // ]
      CDATA_ENDING_2: y++,
      // ]]
      PROC_INST: y++,
      // <?hi
      PROC_INST_BODY: y++,
      // <?hi there
      PROC_INST_ENDING: y++,
      // <?hi "there" ?
      OPEN_TAG: y++,
      // <strong
      OPEN_TAG_SLASH: y++,
      // <strong /
      ATTRIB: y++,
      // <a
      ATTRIB_NAME: y++,
      // <a foo
      ATTRIB_NAME_SAW_WHITE: y++,
      // <a foo _
      ATTRIB_VALUE: y++,
      // <a foo=
      ATTRIB_VALUE_QUOTED: y++,
      // <a foo="bar
      ATTRIB_VALUE_CLOSED: y++,
      // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: y++,
      // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: y++,
      // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: y++,
      // <foo bar=&quot
      CLOSE_TAG: y++,
      // </a
      CLOSE_TAG_SAW_WHITE: y++,
      // </a   >
      SCRIPT: y++,
      // <script> ...
      SCRIPT_ENDING: y++
      // <script> ... <
    }, t.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    }, t.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    }, Object.keys(t.ENTITIES).forEach(function(h) {
      var u = t.ENTITIES[h], T = typeof u == "number" ? String.fromCharCode(u) : u;
      t.ENTITIES[h] = T;
    });
    for (var q in t.STATE)
      t.STATE[t.STATE[q]] = q;
    y = t.STATE;
    function B(h, u, T) {
      h[u] && h[u](T);
    }
    function M(h, u, T) {
      h.textNode && J(h), B(h, u, T);
    }
    function J(h) {
      h.textNode = I(h.opt, h.textNode), h.textNode && B(h, "ontext", h.textNode), h.textNode = "";
    }
    function I(h, u) {
      return h.trim && (u = u.trim()), h.normalize && (u = u.replace(/\s+/g, " ")), u;
    }
    function C(h, u) {
      return J(h), h.trackPosition && (u += `
Line: ` + h.line + `
Column: ` + h.column + `
Char: ` + h.c), u = new Error(u), h.error = u, B(h, "onerror", u), h;
    }
    function D(h) {
      return h.sawRoot && !h.closedRoot && $(h, "Unclosed root tag"), h.state !== y.BEGIN && h.state !== y.BEGIN_WHITESPACE && h.state !== y.TEXT && C(h, "Unexpected end"), J(h), h.c = "", h.closed = !0, B(h, "onend"), n.call(h, h.strict, h.opt), h;
    }
    function $(h, u) {
      if (typeof h != "object" || !(h instanceof n))
        throw new Error("bad call to strictFail");
      h.strict && C(h, u);
    }
    function R(h) {
      h.strict || (h.tagName = h.tagName[h.looseCase]());
      var u = h.tags[h.tags.length - 1] || h, T = h.tag = { name: h.tagName, attributes: {} };
      h.opt.xmlns && (T.ns = u.ns), h.attribList.length = 0, M(h, "onopentagstart", T);
    }
    function P(h, u) {
      var T = h.indexOf(":"), w = T < 0 ? ["", h] : h.split(":"), Y = w[0], te = w[1];
      return u && h === "xmlns" && (Y = "xmlns", te = ""), { prefix: Y, local: te };
    }
    function k(h) {
      if (h.strict || (h.attribName = h.attribName[h.looseCase]()), h.attribList.indexOf(h.attribName) !== -1 || h.tag.attributes.hasOwnProperty(h.attribName)) {
        h.attribName = h.attribValue = "";
        return;
      }
      if (h.opt.xmlns) {
        var u = P(h.attribName, !0), T = u.prefix, w = u.local;
        if (T === "xmlns")
          if (w === "xml" && h.attribValue !== g)
            $(
              h,
              "xml: prefix must be bound to " + g + `
Actual: ` + h.attribValue
            );
          else if (w === "xmlns" && h.attribValue !== _)
            $(
              h,
              "xmlns: prefix must be bound to " + _ + `
Actual: ` + h.attribValue
            );
          else {
            var Y = h.tag, te = h.tags[h.tags.length - 1] || h;
            Y.ns === te.ns && (Y.ns = Object.create(te.ns)), Y.ns[w] = h.attribValue;
          }
        h.attribList.push([h.attribName, h.attribValue]);
      } else
        h.tag.attributes[h.attribName] = h.attribValue, M(h, "onattribute", {
          name: h.attribName,
          value: h.attribValue
        });
      h.attribName = h.attribValue = "";
    }
    function G(h, u) {
      if (h.opt.xmlns) {
        var T = h.tag, w = P(h.tagName);
        T.prefix = w.prefix, T.local = w.local, T.uri = T.ns[w.prefix] || "", T.prefix && !T.uri && ($(h, "Unbound namespace prefix: " + JSON.stringify(h.tagName)), T.uri = w.prefix);
        var Y = h.tags[h.tags.length - 1] || h;
        T.ns && Y.ns !== T.ns && Object.keys(T.ns).forEach(function(pn) {
          M(h, "onopennamespace", {
            prefix: pn,
            uri: T.ns[pn]
          });
        });
        for (var te = 0, ie = h.attribList.length; te < ie; te++) {
          var pe = h.attribList[te], Ee = pe[0], st = pe[1], le = P(Ee, !0), je = le.prefix, Ii = le.local, hn = je === "" ? "" : T.ns[je] || "", vr = {
            name: Ee,
            value: st,
            prefix: je,
            local: Ii,
            uri: hn
          };
          je && je !== "xmlns" && !hn && ($(h, "Unbound namespace prefix: " + JSON.stringify(je)), vr.uri = je), h.tag.attributes[Ee] = vr, M(h, "onattribute", vr);
        }
        h.attribList.length = 0;
      }
      h.tag.isSelfClosing = !!u, h.sawRoot = !0, h.tags.push(h.tag), M(h, "onopentag", h.tag), u || (!h.noscript && h.tagName.toLowerCase() === "script" ? h.state = y.SCRIPT : h.state = y.TEXT, h.tag = null, h.tagName = ""), h.attribName = h.attribValue = "", h.attribList.length = 0;
    }
    function j(h) {
      if (!h.tagName) {
        $(h, "Weird empty close tag."), h.textNode += "</>", h.state = y.TEXT;
        return;
      }
      if (h.script) {
        if (h.tagName !== "script") {
          h.script += "</" + h.tagName + ">", h.tagName = "", h.state = y.SCRIPT;
          return;
        }
        M(h, "onscript", h.script), h.script = "";
      }
      var u = h.tags.length, T = h.tagName;
      h.strict || (T = T[h.looseCase]());
      for (var w = T; u--; ) {
        var Y = h.tags[u];
        if (Y.name !== w)
          $(h, "Unexpected close tag");
        else
          break;
      }
      if (u < 0) {
        $(h, "Unmatched closing tag: " + h.tagName), h.textNode += "</" + h.tagName + ">", h.state = y.TEXT;
        return;
      }
      h.tagName = T;
      for (var te = h.tags.length; te-- > u; ) {
        var ie = h.tag = h.tags.pop();
        h.tagName = h.tag.name, M(h, "onclosetag", h.tagName);
        var pe = {};
        for (var Ee in ie.ns)
          pe[Ee] = ie.ns[Ee];
        var st = h.tags[h.tags.length - 1] || h;
        h.opt.xmlns && ie.ns !== st.ns && Object.keys(ie.ns).forEach(function(le) {
          var je = ie.ns[le];
          M(h, "onclosenamespace", { prefix: le, uri: je });
        });
      }
      u === 0 && (h.closedRoot = !0), h.tagName = h.attribValue = h.attribName = "", h.attribList.length = 0, h.state = y.TEXT;
    }
    function K(h) {
      var u = h.entity, T = u.toLowerCase(), w, Y = "";
      return h.ENTITIES[u] ? h.ENTITIES[u] : h.ENTITIES[T] ? h.ENTITIES[T] : (u = T, u.charAt(0) === "#" && (u.charAt(1) === "x" ? (u = u.slice(2), w = parseInt(u, 16), Y = w.toString(16)) : (u = u.slice(1), w = parseInt(u, 10), Y = w.toString(10))), u = u.replace(/^0+/, ""), isNaN(w) || Y.toLowerCase() !== u ? ($(h, "Invalid character entity"), "&" + h.entity + ";") : String.fromCodePoint(w));
    }
    function ue(h, u) {
      u === "<" ? (h.state = y.OPEN_WAKA, h.startTagPosition = h.position) : x(u) || ($(h, "Non-whitespace before first tag."), h.textNode = u, h.state = y.TEXT);
    }
    function U(h, u) {
      var T = "";
      return u < h.length && (T = h.charAt(u)), T;
    }
    function ze(h) {
      var u = this;
      if (this.error)
        throw this.error;
      if (u.closed)
        return C(
          u,
          "Cannot write after close. Assign an onready handler."
        );
      if (h === null)
        return D(u);
      typeof h == "object" && (h = h.toString());
      for (var T = 0, w = ""; w = U(h, T++), u.c = w, !!w; )
        switch (u.trackPosition && (u.position++, w === `
` ? (u.line++, u.column = 0) : u.column++), u.state) {
          case y.BEGIN:
            if (u.state = y.BEGIN_WHITESPACE, w === "\uFEFF")
              continue;
            ue(u, w);
            continue;
          case y.BEGIN_WHITESPACE:
            ue(u, w);
            continue;
          case y.TEXT:
            if (u.sawRoot && !u.closedRoot) {
              for (var Y = T - 1; w && w !== "<" && w !== "&"; )
                w = U(h, T++), w && u.trackPosition && (u.position++, w === `
` ? (u.line++, u.column = 0) : u.column++);
              u.textNode += h.substring(Y, T - 1);
            }
            w === "<" && !(u.sawRoot && u.closedRoot && !u.strict) ? (u.state = y.OPEN_WAKA, u.startTagPosition = u.position) : (!x(w) && (!u.sawRoot || u.closedRoot) && $(u, "Text data outside of root node."), w === "&" ? u.state = y.TEXT_ENTITY : u.textNode += w);
            continue;
          case y.SCRIPT:
            w === "<" ? u.state = y.SCRIPT_ENDING : u.script += w;
            continue;
          case y.SCRIPT_ENDING:
            w === "/" ? u.state = y.CLOSE_TAG : (u.script += "<" + w, u.state = y.SCRIPT);
            continue;
          case y.OPEN_WAKA:
            if (w === "!")
              u.state = y.SGML_DECL, u.sgmlDecl = "";
            else if (!x(w)) if (z(S, w))
              u.state = y.OPEN_TAG, u.tagName = w;
            else if (w === "/")
              u.state = y.CLOSE_TAG, u.tagName = "";
            else if (w === "?")
              u.state = y.PROC_INST, u.procInstName = u.procInstBody = "";
            else {
              if ($(u, "Unencoded <"), u.startTagPosition + 1 < u.position) {
                var te = u.position - u.startTagPosition;
                w = new Array(te).join(" ") + w;
              }
              u.textNode += "<" + w, u.state = y.TEXT;
            }
            continue;
          case y.SGML_DECL:
            if (u.sgmlDecl + w === "--") {
              u.state = y.COMMENT, u.comment = "", u.sgmlDecl = "";
              continue;
            }
            u.doctype && u.doctype !== !0 && u.sgmlDecl ? (u.state = y.DOCTYPE_DTD, u.doctype += "<!" + u.sgmlDecl + w, u.sgmlDecl = "") : (u.sgmlDecl + w).toUpperCase() === f ? (M(u, "onopencdata"), u.state = y.CDATA, u.sgmlDecl = "", u.cdata = "") : (u.sgmlDecl + w).toUpperCase() === p ? (u.state = y.DOCTYPE, (u.doctype || u.sawRoot) && $(
              u,
              "Inappropriately located doctype declaration"
            ), u.doctype = "", u.sgmlDecl = "") : w === ">" ? (M(u, "onsgmldeclaration", u.sgmlDecl), u.sgmlDecl = "", u.state = y.TEXT) : (ee(w) && (u.state = y.SGML_DECL_QUOTED), u.sgmlDecl += w);
            continue;
          case y.SGML_DECL_QUOTED:
            w === u.q && (u.state = y.SGML_DECL, u.q = ""), u.sgmlDecl += w;
            continue;
          case y.DOCTYPE:
            w === ">" ? (u.state = y.TEXT, M(u, "ondoctype", u.doctype), u.doctype = !0) : (u.doctype += w, w === "[" ? u.state = y.DOCTYPE_DTD : ee(w) && (u.state = y.DOCTYPE_QUOTED, u.q = w));
            continue;
          case y.DOCTYPE_QUOTED:
            u.doctype += w, w === u.q && (u.q = "", u.state = y.DOCTYPE);
            continue;
          case y.DOCTYPE_DTD:
            w === "]" ? (u.doctype += w, u.state = y.DOCTYPE) : w === "<" ? (u.state = y.OPEN_WAKA, u.startTagPosition = u.position) : ee(w) ? (u.doctype += w, u.state = y.DOCTYPE_DTD_QUOTED, u.q = w) : u.doctype += w;
            continue;
          case y.DOCTYPE_DTD_QUOTED:
            u.doctype += w, w === u.q && (u.state = y.DOCTYPE_DTD, u.q = "");
            continue;
          case y.COMMENT:
            w === "-" ? u.state = y.COMMENT_ENDING : u.comment += w;
            continue;
          case y.COMMENT_ENDING:
            w === "-" ? (u.state = y.COMMENT_ENDED, u.comment = I(u.opt, u.comment), u.comment && M(u, "oncomment", u.comment), u.comment = "") : (u.comment += "-" + w, u.state = y.COMMENT);
            continue;
          case y.COMMENT_ENDED:
            w !== ">" ? ($(u, "Malformed comment"), u.comment += "--" + w, u.state = y.COMMENT) : u.doctype && u.doctype !== !0 ? u.state = y.DOCTYPE_DTD : u.state = y.TEXT;
            continue;
          case y.CDATA:
            w === "]" ? u.state = y.CDATA_ENDING : u.cdata += w;
            continue;
          case y.CDATA_ENDING:
            w === "]" ? u.state = y.CDATA_ENDING_2 : (u.cdata += "]" + w, u.state = y.CDATA);
            continue;
          case y.CDATA_ENDING_2:
            w === ">" ? (u.cdata && M(u, "oncdata", u.cdata), M(u, "onclosecdata"), u.cdata = "", u.state = y.TEXT) : w === "]" ? u.cdata += "]" : (u.cdata += "]]" + w, u.state = y.CDATA);
            continue;
          case y.PROC_INST:
            w === "?" ? u.state = y.PROC_INST_ENDING : x(w) ? u.state = y.PROC_INST_BODY : u.procInstName += w;
            continue;
          case y.PROC_INST_BODY:
            if (!u.procInstBody && x(w))
              continue;
            w === "?" ? u.state = y.PROC_INST_ENDING : u.procInstBody += w;
            continue;
          case y.PROC_INST_ENDING:
            w === ">" ? (M(u, "onprocessinginstruction", {
              name: u.procInstName,
              body: u.procInstBody
            }), u.procInstName = u.procInstBody = "", u.state = y.TEXT) : (u.procInstBody += "?" + w, u.state = y.PROC_INST_BODY);
            continue;
          case y.OPEN_TAG:
            z(b, w) ? u.tagName += w : (R(u), w === ">" ? G(u) : w === "/" ? u.state = y.OPEN_TAG_SLASH : (x(w) || $(u, "Invalid character in tag name"), u.state = y.ATTRIB));
            continue;
          case y.OPEN_TAG_SLASH:
            w === ">" ? (G(u, !0), j(u)) : ($(u, "Forward-slash in opening tag not followed by >"), u.state = y.ATTRIB);
            continue;
          case y.ATTRIB:
            if (x(w))
              continue;
            w === ">" ? G(u) : w === "/" ? u.state = y.OPEN_TAG_SLASH : z(S, w) ? (u.attribName = w, u.attribValue = "", u.state = y.ATTRIB_NAME) : $(u, "Invalid attribute name");
            continue;
          case y.ATTRIB_NAME:
            w === "=" ? u.state = y.ATTRIB_VALUE : w === ">" ? ($(u, "Attribute without value"), u.attribValue = u.attribName, k(u), G(u)) : x(w) ? u.state = y.ATTRIB_NAME_SAW_WHITE : z(b, w) ? u.attribName += w : $(u, "Invalid attribute name");
            continue;
          case y.ATTRIB_NAME_SAW_WHITE:
            if (w === "=")
              u.state = y.ATTRIB_VALUE;
            else {
              if (x(w))
                continue;
              $(u, "Attribute without value"), u.tag.attributes[u.attribName] = "", u.attribValue = "", M(u, "onattribute", {
                name: u.attribName,
                value: ""
              }), u.attribName = "", w === ">" ? G(u) : z(S, w) ? (u.attribName = w, u.state = y.ATTRIB_NAME) : ($(u, "Invalid attribute name"), u.state = y.ATTRIB);
            }
            continue;
          case y.ATTRIB_VALUE:
            if (x(w))
              continue;
            ee(w) ? (u.q = w, u.state = y.ATTRIB_VALUE_QUOTED) : (u.opt.unquotedAttributeValues || C(u, "Unquoted attribute value"), u.state = y.ATTRIB_VALUE_UNQUOTED, u.attribValue = w);
            continue;
          case y.ATTRIB_VALUE_QUOTED:
            if (w !== u.q) {
              w === "&" ? u.state = y.ATTRIB_VALUE_ENTITY_Q : u.attribValue += w;
              continue;
            }
            k(u), u.q = "", u.state = y.ATTRIB_VALUE_CLOSED;
            continue;
          case y.ATTRIB_VALUE_CLOSED:
            x(w) ? u.state = y.ATTRIB : w === ">" ? G(u) : w === "/" ? u.state = y.OPEN_TAG_SLASH : z(S, w) ? ($(u, "No whitespace between attributes"), u.attribName = w, u.attribValue = "", u.state = y.ATTRIB_NAME) : $(u, "Invalid attribute name");
            continue;
          case y.ATTRIB_VALUE_UNQUOTED:
            if (!se(w)) {
              w === "&" ? u.state = y.ATTRIB_VALUE_ENTITY_U : u.attribValue += w;
              continue;
            }
            k(u), w === ">" ? G(u) : u.state = y.ATTRIB;
            continue;
          case y.CLOSE_TAG:
            if (u.tagName)
              w === ">" ? j(u) : z(b, w) ? u.tagName += w : u.script ? (u.script += "</" + u.tagName, u.tagName = "", u.state = y.SCRIPT) : (x(w) || $(u, "Invalid tagname in closing tag"), u.state = y.CLOSE_TAG_SAW_WHITE);
            else {
              if (x(w))
                continue;
              Ne(S, w) ? u.script ? (u.script += "</" + w, u.state = y.SCRIPT) : $(u, "Invalid tagname in closing tag.") : u.tagName = w;
            }
            continue;
          case y.CLOSE_TAG_SAW_WHITE:
            if (x(w))
              continue;
            w === ">" ? j(u) : $(u, "Invalid characters in closing tag");
            continue;
          case y.TEXT_ENTITY:
          case y.ATTRIB_VALUE_ENTITY_Q:
          case y.ATTRIB_VALUE_ENTITY_U:
            var ie, pe;
            switch (u.state) {
              case y.TEXT_ENTITY:
                ie = y.TEXT, pe = "textNode";
                break;
              case y.ATTRIB_VALUE_ENTITY_Q:
                ie = y.ATTRIB_VALUE_QUOTED, pe = "attribValue";
                break;
              case y.ATTRIB_VALUE_ENTITY_U:
                ie = y.ATTRIB_VALUE_UNQUOTED, pe = "attribValue";
                break;
            }
            if (w === ";") {
              var Ee = K(u);
              u.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(Ee) ? (u.entity = "", u.state = ie, u.write(Ee)) : (u[pe] += Ee, u.entity = "", u.state = ie);
            } else z(u.entity.length ? N : A, w) ? u.entity += w : ($(u, "Invalid character in entity name"), u[pe] += "&" + u.entity + w, u.entity = "", u.state = ie);
            continue;
          default:
            throw new Error(u, "Unknown state: " + u.state);
        }
      return u.position >= u.bufferCheckPosition && i(u), u;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    String.fromCodePoint || function() {
      var h = String.fromCharCode, u = Math.floor, T = function() {
        var w = 16384, Y = [], te, ie, pe = -1, Ee = arguments.length;
        if (!Ee)
          return "";
        for (var st = ""; ++pe < Ee; ) {
          var le = Number(arguments[pe]);
          if (!isFinite(le) || // `NaN`, `+Infinity`, or `-Infinity`
          le < 0 || // not a valid Unicode code point
          le > 1114111 || // not a valid Unicode code point
          u(le) !== le)
            throw RangeError("Invalid code point: " + le);
          le <= 65535 ? Y.push(le) : (le -= 65536, te = (le >> 10) + 55296, ie = le % 1024 + 56320, Y.push(te, ie)), (pe + 1 === Ee || Y.length > w) && (st += h.apply(null, Y), Y.length = 0);
        }
        return st;
      };
      Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
        value: T,
        configurable: !0,
        writable: !0
      }) : String.fromCodePoint = T;
    }();
  })(e);
})(zc);
Object.defineProperty(on, "__esModule", { value: !0 });
on.XElement = void 0;
on.parseXml = C0;
const b0 = zc, In = gr;
class Yc {
  constructor(t) {
    if (this.name = t, this.value = "", this.attributes = null, this.isCData = !1, this.elements = null, !t)
      throw (0, In.newError)("Element name cannot be empty", "ERR_XML_ELEMENT_NAME_EMPTY");
    if (!$0(t))
      throw (0, In.newError)(`Invalid element name: ${t}`, "ERR_XML_ELEMENT_INVALID_NAME");
  }
  attribute(t) {
    const r = this.attributes === null ? null : this.attributes[t];
    if (r == null)
      throw (0, In.newError)(`No attribute "${t}"`, "ERR_XML_MISSED_ATTRIBUTE");
    return r;
  }
  removeAttribute(t) {
    this.attributes !== null && delete this.attributes[t];
  }
  element(t, r = !1, n = null) {
    const i = this.elementOrNull(t, r);
    if (i === null)
      throw (0, In.newError)(n || `No element "${t}"`, "ERR_XML_MISSED_ELEMENT");
    return i;
  }
  elementOrNull(t, r = !1) {
    if (this.elements === null)
      return null;
    for (const n of this.elements)
      if (da(n, t, r))
        return n;
    return null;
  }
  getElements(t, r = !1) {
    return this.elements === null ? [] : this.elements.filter((n) => da(n, t, r));
  }
  elementValueOrEmpty(t, r = !1) {
    const n = this.elementOrNull(t, r);
    return n === null ? "" : n.value;
  }
}
on.XElement = Yc;
const T0 = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);
function $0(e) {
  return T0.test(e);
}
function da(e, t, r) {
  const n = e.name;
  return n === t || r === !0 && n.length === t.length && n.toLowerCase() === t.toLowerCase();
}
function C0(e) {
  let t = null;
  const r = b0.parser(!0, {}), n = [];
  return r.onopentag = (i) => {
    const o = new Yc(i.name);
    if (o.attributes = i.attributes, t === null)
      t = o;
    else {
      const s = n[n.length - 1];
      s.elements == null && (s.elements = []), s.elements.push(o);
    }
    n.push(o);
  }, r.onclosetag = () => {
    n.pop();
  }, r.ontext = (i) => {
    n.length > 0 && (n[n.length - 1].value = i);
  }, r.oncdata = (i) => {
    const o = n[n.length - 1];
    o.value = i, o.isCData = !0;
  }, r.onerror = (i) => {
    throw i;
  }, r.write(e), t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CURRENT_APP_PACKAGE_FILE_NAME = e.CURRENT_APP_INSTALLER_FILE_NAME = e.XElement = e.parseXml = e.UUID = e.parseDn = e.retry = e.githubUrl = e.getS3LikeProviderBaseUrl = e.ProgressCallbackTransform = e.MemoLazy = e.safeStringifyJson = e.safeGetHeader = e.parseJson = e.HttpExecutor = e.HttpError = e.DigestTransform = e.createHttpError = e.configureRequestUrl = e.configureRequestOptionsFromUrl = e.configureRequestOptions = e.newError = e.CancellationToken = e.CancellationError = void 0, e.asArray = f;
  var t = St;
  Object.defineProperty(e, "CancellationError", { enumerable: !0, get: function() {
    return t.CancellationError;
  } }), Object.defineProperty(e, "CancellationToken", { enumerable: !0, get: function() {
    return t.CancellationToken;
  } });
  var r = gr;
  Object.defineProperty(e, "newError", { enumerable: !0, get: function() {
    return r.newError;
  } });
  var n = be;
  Object.defineProperty(e, "configureRequestOptions", { enumerable: !0, get: function() {
    return n.configureRequestOptions;
  } }), Object.defineProperty(e, "configureRequestOptionsFromUrl", { enumerable: !0, get: function() {
    return n.configureRequestOptionsFromUrl;
  } }), Object.defineProperty(e, "configureRequestUrl", { enumerable: !0, get: function() {
    return n.configureRequestUrl;
  } }), Object.defineProperty(e, "createHttpError", { enumerable: !0, get: function() {
    return n.createHttpError;
  } }), Object.defineProperty(e, "DigestTransform", { enumerable: !0, get: function() {
    return n.DigestTransform;
  } }), Object.defineProperty(e, "HttpError", { enumerable: !0, get: function() {
    return n.HttpError;
  } }), Object.defineProperty(e, "HttpExecutor", { enumerable: !0, get: function() {
    return n.HttpExecutor;
  } }), Object.defineProperty(e, "parseJson", { enumerable: !0, get: function() {
    return n.parseJson;
  } }), Object.defineProperty(e, "safeGetHeader", { enumerable: !0, get: function() {
    return n.safeGetHeader;
  } }), Object.defineProperty(e, "safeStringifyJson", { enumerable: !0, get: function() {
    return n.safeStringifyJson;
  } });
  var i = fi;
  Object.defineProperty(e, "MemoLazy", { enumerable: !0, get: function() {
    return i.MemoLazy;
  } });
  var o = nn;
  Object.defineProperty(e, "ProgressCallbackTransform", { enumerable: !0, get: function() {
    return o.ProgressCallbackTransform;
  } });
  var s = di;
  Object.defineProperty(e, "getS3LikeProviderBaseUrl", { enumerable: !0, get: function() {
    return s.getS3LikeProviderBaseUrl;
  } }), Object.defineProperty(e, "githubUrl", { enumerable: !0, get: function() {
    return s.githubUrl;
  } });
  var a = Go;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return a.retry;
  } });
  var l = Wo;
  Object.defineProperty(e, "parseDn", { enumerable: !0, get: function() {
    return l.parseDn;
  } });
  var d = dr;
  Object.defineProperty(e, "UUID", { enumerable: !0, get: function() {
    return d.UUID;
  } });
  var c = on;
  Object.defineProperty(e, "parseXml", { enumerable: !0, get: function() {
    return c.parseXml;
  } }), Object.defineProperty(e, "XElement", { enumerable: !0, get: function() {
    return c.XElement;
  } }), e.CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe", e.CURRENT_APP_PACKAGE_FILE_NAME = "package.7z";
  function f(p) {
    return p == null ? [] : Array.isArray(p) ? p : [p];
  }
})(he);
var ye = {}, Vo = {}, Ge = {};
function Xc(e) {
  return typeof e > "u" || e === null;
}
function O0(e) {
  return typeof e == "object" && e !== null;
}
function I0(e) {
  return Array.isArray(e) ? e : Xc(e) ? [] : [e];
}
function P0(e, t) {
  var r, n, i, o;
  if (t)
    for (o = Object.keys(t), r = 0, n = o.length; r < n; r += 1)
      i = o[r], e[i] = t[i];
  return e;
}
function D0(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
function R0(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
Ge.isNothing = Xc;
Ge.isObject = O0;
Ge.toArray = I0;
Ge.repeat = D0;
Ge.isNegativeZero = R0;
Ge.extend = P0;
function Jc(e, t) {
  var r = "", n = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), n + " " + r) : n;
}
function Hr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = Jc(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Hr.prototype = Object.create(Error.prototype);
Hr.prototype.constructor = Hr;
Hr.prototype.toString = function(t) {
  return this.name + ": " + Jc(this, t);
};
var sn = Hr, Dr = Ge;
function Wi(e, t, r, n, i) {
  var o = "", s = "", a = Math.floor(i / 2) - 1;
  return n - t > a && (o = " ... ", t = n - a + o.length), r - n > a && (s = " ...", r = n + a - s.length), {
    str: o + e.slice(t, r).replace(/\t/g, "→") + s,
    pos: n - t + o.length
    // relative position
  };
}
function Vi(e, t) {
  return Dr.repeat(" ", t - e.length) + e;
}
function N0(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], i = [], o, s = -1; o = r.exec(e.buffer); )
    i.push(o.index), n.push(o.index + o[0].length), e.position <= o.index && s < 0 && (s = n.length - 2);
  s < 0 && (s = n.length - 1);
  var a = "", l, d, c = Math.min(e.line + t.linesAfter, i.length).toString().length, f = t.maxLength - (t.indent + c + 3);
  for (l = 1; l <= t.linesBefore && !(s - l < 0); l++)
    d = Wi(
      e.buffer,
      n[s - l],
      i[s - l],
      e.position - (n[s] - n[s - l]),
      f
    ), a = Dr.repeat(" ", t.indent) + Vi((e.line - l + 1).toString(), c) + " | " + d.str + `
` + a;
  for (d = Wi(e.buffer, n[s], i[s], e.position, f), a += Dr.repeat(" ", t.indent) + Vi((e.line + 1).toString(), c) + " | " + d.str + `
`, a += Dr.repeat("-", t.indent + c + 3 + d.pos) + `^
`, l = 1; l <= t.linesAfter && !(s + l >= i.length); l++)
    d = Wi(
      e.buffer,
      n[s + l],
      i[s + l],
      e.position - (n[s] - n[s + l]),
      f
    ), a += Dr.repeat(" ", t.indent) + Vi((e.line + l + 1).toString(), c) + " | " + d.str + `
`;
  return a.replace(/\n$/, "");
}
var F0 = N0, ha = sn, x0 = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], L0 = [
  "scalar",
  "sequence",
  "mapping"
];
function U0(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
function k0(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (x0.indexOf(r) === -1)
      throw new ha('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = U0(t.styleAliases || null), L0.indexOf(this.kind) === -1)
    throw new ha('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var Oe = k0, $r = sn, zi = Oe;
function pa(e, t) {
  var r = [];
  return e[t].forEach(function(n) {
    var i = r.length;
    r.forEach(function(o, s) {
      o.tag === n.tag && o.kind === n.kind && o.multi === n.multi && (i = s);
    }), r[i] = n;
  }), r;
}
function M0() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function n(i) {
    i.multi ? (e.multi[i.kind].push(i), e.multi.fallback.push(i)) : e[i.kind][i.tag] = e.fallback[i.tag] = i;
  }
  for (t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(n);
  return e;
}
function wo(e) {
  return this.extend(e);
}
wo.prototype.extend = function(t) {
  var r = [], n = [];
  if (t instanceof zi)
    n.push(t);
  else if (Array.isArray(t))
    n = n.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (n = n.concat(t.explicit));
  else
    throw new $r("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(o) {
    if (!(o instanceof zi))
      throw new $r("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new $r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new $r("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(o) {
    if (!(o instanceof zi))
      throw new $r("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(wo.prototype);
  return i.implicit = (this.implicit || []).concat(r), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = pa(i, "implicit"), i.compiledExplicit = pa(i, "explicit"), i.compiledTypeMap = M0(i.compiledImplicit, i.compiledExplicit), i;
};
var Kc = wo, B0 = Oe, Qc = new B0("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), j0 = Oe, Zc = new j0("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), H0 = Oe, eu = new H0("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), q0 = Kc, tu = new q0({
  explicit: [
    Qc,
    Zc,
    eu
  ]
}), G0 = Oe;
function W0(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function V0() {
  return null;
}
function z0(e) {
  return e === null;
}
var ru = new G0("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: W0,
  construct: V0,
  predicate: z0,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
}), Y0 = Oe;
function X0(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function J0(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function K0(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var nu = new Y0("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: X0,
  construct: J0,
  predicate: K0,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
}), Q0 = Ge, Z0 = Oe;
function ey(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function ty(e) {
  return 48 <= e && e <= 55;
}
function ry(e) {
  return 48 <= e && e <= 57;
}
function ny(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, n = !1, i;
  if (!t) return !1;
  if (i = e[r], (i === "-" || i === "+") && (i = e[++r]), i === "0") {
    if (r + 1 === t) return !0;
    if (i = e[++r], i === "b") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (i !== "0" && i !== "1") return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "x") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!ey(e.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "o") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!ty(e.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && i !== "_";
    }
  }
  if (i === "_") return !1;
  for (; r < t; r++)
    if (i = e[r], i !== "_") {
      if (!ry(e.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || i === "_");
}
function iy(e) {
  var t = e, r = 1, n;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), n = t[0], (n === "-" || n === "+") && (n === "-" && (r = -1), t = t.slice(1), n = t[0]), t === "0") return 0;
  if (n === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
function oy(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Q0.isNegativeZero(e);
}
var iu = new Z0("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: ny,
  construct: iy,
  predicate: oy,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), ou = Ge, sy = Oe, ay = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function ly(e) {
  return !(e === null || !ay.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function cy(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
var uy = /^[-+]?[0-9]+e/;
function fy(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (ou.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), uy.test(r) ? r.replace("e", ".e") : r;
}
function dy(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || ou.isNegativeZero(e));
}
var su = new sy("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: ly,
  construct: cy,
  predicate: dy,
  represent: fy,
  defaultStyle: "lowercase"
}), au = tu.extend({
  implicit: [
    ru,
    nu,
    iu,
    su
  ]
}), lu = au, hy = Oe, cu = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), uu = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function py(e) {
  return e === null ? !1 : cu.exec(e) !== null || uu.exec(e) !== null;
}
function my(e) {
  var t, r, n, i, o, s, a, l = 0, d = null, c, f, p;
  if (t = cu.exec(e), t === null && (t = uu.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(r, n, i));
  if (o = +t[4], s = +t[5], a = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (c = +t[10], f = +(t[11] || 0), d = (c * 60 + f) * 6e4, t[9] === "-" && (d = -d)), p = new Date(Date.UTC(r, n, i, o, s, a, l)), d && p.setTime(p.getTime() - d), p;
}
function gy(e) {
  return e.toISOString();
}
var fu = new hy("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: py,
  construct: my,
  instanceOf: Date,
  represent: gy
}), yy = Oe;
function Ey(e) {
  return e === "<<" || e === null;
}
var du = new yy("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Ey
}), vy = Oe, zo = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function wy(e) {
  if (e === null) return !1;
  var t, r, n = 0, i = e.length, o = zo;
  for (r = 0; r < i; r++)
    if (t = o.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function _y(e) {
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, o = zo, s = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : r === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : r === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function Sy(e) {
  var t = "", r = 0, n, i, o = e.length, s = zo;
  for (n = 0; n < o; n++)
    n % 3 === 0 && n && (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]), r = (r << 8) + e[n];
  return i = o % 3, i === 0 ? (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]) : i === 2 ? (t += s[r >> 10 & 63], t += s[r >> 4 & 63], t += s[r << 2 & 63], t += s[64]) : i === 1 && (t += s[r >> 2 & 63], t += s[r << 4 & 63], t += s[64], t += s[64]), t;
}
function Ay(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var hu = new vy("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: wy,
  construct: _y,
  predicate: Ay,
  represent: Sy
}), by = Oe, Ty = Object.prototype.hasOwnProperty, $y = Object.prototype.toString;
function Cy(e) {
  if (e === null) return !0;
  var t = [], r, n, i, o, s, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], s = !1, $y.call(i) !== "[object Object]") return !1;
    for (o in i)
      if (Ty.call(i, o))
        if (!s) s = !0;
        else return !1;
    if (!s) return !1;
    if (t.indexOf(o) === -1) t.push(o);
    else return !1;
  }
  return !0;
}
function Oy(e) {
  return e !== null ? e : [];
}
var pu = new by("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Cy,
  construct: Oy
}), Iy = Oe, Py = Object.prototype.toString;
function Dy(e) {
  if (e === null) return !0;
  var t, r, n, i, o, s = e;
  for (o = new Array(s.length), t = 0, r = s.length; t < r; t += 1) {
    if (n = s[t], Py.call(n) !== "[object Object]" || (i = Object.keys(n), i.length !== 1)) return !1;
    o[t] = [i[0], n[i[0]]];
  }
  return !0;
}
function Ry(e) {
  if (e === null) return [];
  var t, r, n, i, o, s = e;
  for (o = new Array(s.length), t = 0, r = s.length; t < r; t += 1)
    n = s[t], i = Object.keys(n), o[t] = [i[0], n[i[0]]];
  return o;
}
var mu = new Iy("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Dy,
  construct: Ry
}), Ny = Oe, Fy = Object.prototype.hasOwnProperty;
function xy(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (Fy.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
function Ly(e) {
  return e !== null ? e : {};
}
var gu = new Ny("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: xy,
  construct: Ly
}), Yo = lu.extend({
  implicit: [
    fu,
    du
  ],
  explicit: [
    hu,
    pu,
    mu,
    gu
  ]
}), Ut = Ge, yu = sn, Uy = F0, ky = Yo, At = Object.prototype.hasOwnProperty, Kn = 1, Eu = 2, vu = 3, Qn = 4, Yi = 1, My = 2, ma = 3, By = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, jy = /[\x85\u2028\u2029]/, Hy = /[,\[\]\{\}]/, wu = /^(?:!|!!|![a-z\-]+!)$/i, _u = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ga(e) {
  return Object.prototype.toString.call(e);
}
function Je(e) {
  return e === 10 || e === 13;
}
function Bt(e) {
  return e === 9 || e === 32;
}
function Re(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function nr(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function qy(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function Gy(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Wy(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function ya(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Vy(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var Su = new Array(256), Au = new Array(256);
for (var Xt = 0; Xt < 256; Xt++)
  Su[Xt] = ya(Xt) ? 1 : 0, Au[Xt] = ya(Xt);
function zy(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || ky, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function bu(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = Uy(r), new yu(t, r);
}
function L(e, t) {
  throw bu(e, t);
}
function Zn(e, t) {
  e.onWarning && e.onWarning.call(null, bu(e, t));
}
var Ea = {
  YAML: function(t, r, n) {
    var i, o, s;
    t.version !== null && L(t, "duplication of %YAML directive"), n.length !== 1 && L(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && L(t, "ill-formed argument of the YAML directive"), o = parseInt(i[1], 10), s = parseInt(i[2], 10), o !== 1 && L(t, "unacceptable YAML version of the document"), t.version = n[0], t.checkLineBreaks = s < 2, s !== 1 && s !== 2 && Zn(t, "unsupported YAML version of the document");
  },
  TAG: function(t, r, n) {
    var i, o;
    n.length !== 2 && L(t, "TAG directive accepts exactly two arguments"), i = n[0], o = n[1], wu.test(i) || L(t, "ill-formed tag handle (first argument) of the TAG directive"), At.call(t.tagMap, i) && L(t, 'there is a previously declared suffix for "' + i + '" tag handle'), _u.test(o) || L(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      L(t, "tag prefix is malformed: " + o);
    }
    t.tagMap[i] = o;
  }
};
function Et(e, t, r, n) {
  var i, o, s, a;
  if (t < r) {
    if (a = e.input.slice(t, r), n)
      for (i = 0, o = a.length; i < o; i += 1)
        s = a.charCodeAt(i), s === 9 || 32 <= s && s <= 1114111 || L(e, "expected valid JSON character");
    else By.test(a) && L(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function va(e, t, r, n) {
  var i, o, s, a;
  for (Ut.isObject(r) || L(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(r), s = 0, a = i.length; s < a; s += 1)
    o = i[s], At.call(t, o) || (t[o] = r[o], n[o] = !0);
}
function ir(e, t, r, n, i, o, s, a, l) {
  var d, c;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), d = 0, c = i.length; d < c; d += 1)
      Array.isArray(i[d]) && L(e, "nested arrays are not supported inside keys"), typeof i == "object" && ga(i[d]) === "[object Object]" && (i[d] = "[object Object]");
  if (typeof i == "object" && ga(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (d = 0, c = o.length; d < c; d += 1)
        va(e, t, o[d], r);
    else
      va(e, t, o, r);
  else
    !e.json && !At.call(r, i) && At.call(t, i) && (e.line = s || e.line, e.lineStart = a || e.lineStart, e.position = l || e.position, L(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: o
    }) : t[i] = o, delete r[i];
  return t;
}
function Xo(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : L(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function ae(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; Bt(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (Je(i))
      for (Xo(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && Zn(e, "deficient indentation"), n;
}
function hi(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Re(r)));
}
function Jo(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Ut.repeat(`
`, t - 1));
}
function Yy(e, t, r) {
  var n, i, o, s, a, l, d, c, f = e.kind, p = e.result, g;
  if (g = e.input.charCodeAt(e.position), Re(g) || nr(g) || g === 35 || g === 38 || g === 42 || g === 33 || g === 124 || g === 62 || g === 39 || g === 34 || g === 37 || g === 64 || g === 96 || (g === 63 || g === 45) && (i = e.input.charCodeAt(e.position + 1), Re(i) || r && nr(i)))
    return !1;
  for (e.kind = "scalar", e.result = "", o = s = e.position, a = !1; g !== 0; ) {
    if (g === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Re(i) || r && nr(i))
        break;
    } else if (g === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Re(n))
        break;
    } else {
      if (e.position === e.lineStart && hi(e) || r && nr(g))
        break;
      if (Je(g))
        if (l = e.line, d = e.lineStart, c = e.lineIndent, ae(e, !1, -1), e.lineIndent >= t) {
          a = !0, g = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = s, e.line = l, e.lineStart = d, e.lineIndent = c;
          break;
        }
    }
    a && (Et(e, o, s, !1), Jo(e, e.line - l), o = s = e.position, a = !1), Bt(g) || (s = e.position + 1), g = e.input.charCodeAt(++e.position);
  }
  return Et(e, o, s, !1), e.result ? !0 : (e.kind = f, e.result = p, !1);
}
function Xy(e, t) {
  var r, n, i;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Et(e, n, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        n = e.position, e.position++, i = e.position;
      else
        return !0;
    else Je(r) ? (Et(e, n, i, !0), Jo(e, ae(e, !1, t)), n = i = e.position) : e.position === e.lineStart && hi(e) ? L(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
  L(e, "unexpected end of the stream within a single quoted scalar");
}
function Jy(e, t) {
  var r, n, i, o, s, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return Et(e, r, e.position, !0), e.position++, !0;
    if (a === 92) {
      if (Et(e, r, e.position, !0), a = e.input.charCodeAt(++e.position), Je(a))
        ae(e, !1, t);
      else if (a < 256 && Su[a])
        e.result += Au[a], e.position++;
      else if ((s = Gy(a)) > 0) {
        for (i = s, o = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (s = qy(a)) >= 0 ? o = (o << 4) + s : L(e, "expected hexadecimal character");
        e.result += Vy(o), e.position++;
      } else
        L(e, "unknown escape sequence");
      r = n = e.position;
    } else Je(a) ? (Et(e, r, n, !0), Jo(e, ae(e, !1, t)), r = n = e.position) : e.position === e.lineStart && hi(e) ? L(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  L(e, "unexpected end of the stream within a double quoted scalar");
}
function Ky(e, t) {
  var r = !0, n, i, o, s = e.tag, a, l = e.anchor, d, c, f, p, g, _ = /* @__PURE__ */ Object.create(null), E, S, b, A;
  if (A = e.input.charCodeAt(e.position), A === 91)
    c = 93, g = !1, a = [];
  else if (A === 123)
    c = 125, g = !0, a = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), A = e.input.charCodeAt(++e.position); A !== 0; ) {
    if (ae(e, !0, t), A = e.input.charCodeAt(e.position), A === c)
      return e.position++, e.tag = s, e.anchor = l, e.kind = g ? "mapping" : "sequence", e.result = a, !0;
    r ? A === 44 && L(e, "expected the node content, but found ','") : L(e, "missed comma between flow collection entries"), S = E = b = null, f = p = !1, A === 63 && (d = e.input.charCodeAt(e.position + 1), Re(d) && (f = p = !0, e.position++, ae(e, !0, t))), n = e.line, i = e.lineStart, o = e.position, hr(e, t, Kn, !1, !0), S = e.tag, E = e.result, ae(e, !0, t), A = e.input.charCodeAt(e.position), (p || e.line === n) && A === 58 && (f = !0, A = e.input.charCodeAt(++e.position), ae(e, !0, t), hr(e, t, Kn, !1, !0), b = e.result), g ? ir(e, a, _, S, E, b, n, i, o) : f ? a.push(ir(e, null, _, S, E, b, n, i, o)) : a.push(E), ae(e, !0, t), A = e.input.charCodeAt(e.position), A === 44 ? (r = !0, A = e.input.charCodeAt(++e.position)) : r = !1;
  }
  L(e, "unexpected end of the stream within a flow collection");
}
function Qy(e, t) {
  var r, n, i = Yi, o = !1, s = !1, a = t, l = 0, d = !1, c, f;
  if (f = e.input.charCodeAt(e.position), f === 124)
    n = !1;
  else if (f === 62)
    n = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; f !== 0; )
    if (f = e.input.charCodeAt(++e.position), f === 43 || f === 45)
      Yi === i ? i = f === 43 ? ma : My : L(e, "repeat of a chomping mode identifier");
    else if ((c = Wy(f)) >= 0)
      c === 0 ? L(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? L(e, "repeat of an indentation width identifier") : (a = t + c - 1, s = !0);
    else
      break;
  if (Bt(f)) {
    do
      f = e.input.charCodeAt(++e.position);
    while (Bt(f));
    if (f === 35)
      do
        f = e.input.charCodeAt(++e.position);
      while (!Je(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (Xo(e), e.lineIndent = 0, f = e.input.charCodeAt(e.position); (!s || e.lineIndent < a) && f === 32; )
      e.lineIndent++, f = e.input.charCodeAt(++e.position);
    if (!s && e.lineIndent > a && (a = e.lineIndent), Je(f)) {
      l++;
      continue;
    }
    if (e.lineIndent < a) {
      i === ma ? e.result += Ut.repeat(`
`, o ? 1 + l : l) : i === Yi && o && (e.result += `
`);
      break;
    }
    for (n ? Bt(f) ? (d = !0, e.result += Ut.repeat(`
`, o ? 1 + l : l)) : d ? (d = !1, e.result += Ut.repeat(`
`, l + 1)) : l === 0 ? o && (e.result += " ") : e.result += Ut.repeat(`
`, l) : e.result += Ut.repeat(`
`, o ? 1 + l : l), o = !0, s = !0, l = 0, r = e.position; !Je(f) && f !== 0; )
      f = e.input.charCodeAt(++e.position);
    Et(e, r, e.position, !1);
  }
  return !0;
}
function wa(e, t) {
  var r, n = e.tag, i = e.anchor, o = [], s, a = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = o), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, L(e, "tab characters must not be used in indentation")), !(l !== 45 || (s = e.input.charCodeAt(e.position + 1), !Re(s)))); ) {
    if (a = !0, e.position++, ae(e, !0, -1) && e.lineIndent <= t) {
      o.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, hr(e, t, vu, !1, !0), o.push(e.result), ae(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      L(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = o, !0) : !1;
}
function Zy(e, t, r) {
  var n, i, o, s, a, l, d = e.tag, c = e.anchor, f = {}, p = /* @__PURE__ */ Object.create(null), g = null, _ = null, E = null, S = !1, b = !1, A;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = f), A = e.input.charCodeAt(e.position); A !== 0; ) {
    if (!S && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, L(e, "tab characters must not be used in indentation")), n = e.input.charCodeAt(e.position + 1), o = e.line, (A === 63 || A === 58) && Re(n))
      A === 63 ? (S && (ir(e, f, p, g, _, null, s, a, l), g = _ = E = null), b = !0, S = !0, i = !0) : S ? (S = !1, i = !0) : L(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, A = n;
    else {
      if (s = e.line, a = e.lineStart, l = e.position, !hr(e, r, Eu, !1, !0))
        break;
      if (e.line === o) {
        for (A = e.input.charCodeAt(e.position); Bt(A); )
          A = e.input.charCodeAt(++e.position);
        if (A === 58)
          A = e.input.charCodeAt(++e.position), Re(A) || L(e, "a whitespace character is expected after the key-value separator within a block mapping"), S && (ir(e, f, p, g, _, null, s, a, l), g = _ = E = null), b = !0, S = !1, i = !1, g = e.tag, _ = e.result;
        else if (b)
          L(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = d, e.anchor = c, !0;
      } else if (b)
        L(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = d, e.anchor = c, !0;
    }
    if ((e.line === o || e.lineIndent > t) && (S && (s = e.line, a = e.lineStart, l = e.position), hr(e, t, Qn, !0, i) && (S ? _ = e.result : E = e.result), S || (ir(e, f, p, g, _, E, s, a, l), g = _ = E = null), ae(e, !0, -1), A = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && A !== 0)
      L(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return S && ir(e, f, p, g, _, null, s, a, l), b && (e.tag = d, e.anchor = c, e.kind = "mapping", e.result = f), b;
}
function eE(e) {
  var t, r = !1, n = !1, i, o, s;
  if (s = e.input.charCodeAt(e.position), s !== 33) return !1;
  if (e.tag !== null && L(e, "duplication of a tag property"), s = e.input.charCodeAt(++e.position), s === 60 ? (r = !0, s = e.input.charCodeAt(++e.position)) : s === 33 ? (n = !0, i = "!!", s = e.input.charCodeAt(++e.position)) : i = "!", t = e.position, r) {
    do
      s = e.input.charCodeAt(++e.position);
    while (s !== 0 && s !== 62);
    e.position < e.length ? (o = e.input.slice(t, e.position), s = e.input.charCodeAt(++e.position)) : L(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !Re(s); )
      s === 33 && (n ? L(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), wu.test(i) || L(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), s = e.input.charCodeAt(++e.position);
    o = e.input.slice(t, e.position), Hy.test(o) && L(e, "tag suffix cannot contain flow indicator characters");
  }
  o && !_u.test(o) && L(e, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    L(e, "tag name is malformed: " + o);
  }
  return r ? e.tag = o : At.call(e.tagMap, i) ? e.tag = e.tagMap[i] + o : i === "!" ? e.tag = "!" + o : i === "!!" ? e.tag = "tag:yaml.org,2002:" + o : L(e, 'undeclared tag handle "' + i + '"'), !0;
}
function tE(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && L(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Re(r) && !nr(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && L(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function rE(e) {
  var t, r, n;
  if (n = e.input.charCodeAt(e.position), n !== 42) return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Re(n) && !nr(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && L(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), At.call(e.anchorMap, r) || L(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], ae(e, !0, -1), !0;
}
function hr(e, t, r, n, i) {
  var o, s, a, l = 1, d = !1, c = !1, f, p, g, _, E, S;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = s = a = Qn === r || vu === r, n && ae(e, !0, -1) && (d = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; eE(e) || tE(e); )
      ae(e, !0, -1) ? (d = !0, a = o, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : a = !1;
  if (a && (a = d || i), (l === 1 || Qn === r) && (Kn === r || Eu === r ? E = t : E = t + 1, S = e.position - e.lineStart, l === 1 ? a && (wa(e, S) || Zy(e, S, E)) || Ky(e, E) ? c = !0 : (s && Qy(e, E) || Xy(e, E) || Jy(e, E) ? c = !0 : rE(e) ? (c = !0, (e.tag !== null || e.anchor !== null) && L(e, "alias node should not have any properties")) : Yy(e, E, Kn === r) && (c = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (c = a && wa(e, S))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && L(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), f = 0, p = e.implicitTypes.length; f < p; f += 1)
      if (_ = e.implicitTypes[f], _.resolve(e.result)) {
        e.result = _.construct(e.result), e.tag = _.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (At.call(e.typeMap[e.kind || "fallback"], e.tag))
      _ = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (_ = null, g = e.typeMap.multi[e.kind || "fallback"], f = 0, p = g.length; f < p; f += 1)
        if (e.tag.slice(0, g[f].tag.length) === g[f].tag) {
          _ = g[f];
          break;
        }
    _ || L(e, "unknown tag !<" + e.tag + ">"), e.result !== null && _.kind !== e.kind && L(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + _.kind + '", not "' + e.kind + '"'), _.resolve(e.result, e.tag) ? (e.result = _.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : L(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || c;
}
function nE(e) {
  var t = e.position, r, n, i, o = !1, s;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (s = e.input.charCodeAt(e.position)) !== 0 && (ae(e, !0, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || s !== 37)); ) {
    for (o = !0, s = e.input.charCodeAt(++e.position), r = e.position; s !== 0 && !Re(s); )
      s = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && L(e, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; Bt(s); )
        s = e.input.charCodeAt(++e.position);
      if (s === 35) {
        do
          s = e.input.charCodeAt(++e.position);
        while (s !== 0 && !Je(s));
        break;
      }
      if (Je(s)) break;
      for (r = e.position; s !== 0 && !Re(s); )
        s = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(r, e.position));
    }
    s !== 0 && Xo(e), At.call(Ea, n) ? Ea[n](e, n, i) : Zn(e, 'unknown document directive "' + n + '"');
  }
  if (ae(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, ae(e, !0, -1)) : o && L(e, "directives end mark is expected"), hr(e, e.lineIndent - 1, Qn, !1, !0), ae(e, !0, -1), e.checkLineBreaks && jy.test(e.input.slice(t, e.position)) && Zn(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && hi(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, ae(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    L(e, "end of the stream or a document separator is expected");
  else
    return;
}
function Tu(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new zy(e, t), n = e.indexOf("\0");
  for (n !== -1 && (r.position = n, L(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    nE(r);
  return r.documents;
}
function iE(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var n = Tu(e, r);
  if (typeof t != "function")
    return n;
  for (var i = 0, o = n.length; i < o; i += 1)
    t(n[i]);
}
function oE(e, t) {
  var r = Tu(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new yu("expected a single document in the stream, but found more");
  }
}
Vo.loadAll = iE;
Vo.load = oE;
var $u = {}, pi = Ge, an = sn, sE = Yo, Cu = Object.prototype.toString, Ou = Object.prototype.hasOwnProperty, Ko = 65279, aE = 9, qr = 10, lE = 13, cE = 32, uE = 33, fE = 34, _o = 35, dE = 37, hE = 38, pE = 39, mE = 42, Iu = 44, gE = 45, ei = 58, yE = 61, EE = 62, vE = 63, wE = 64, Pu = 91, Du = 93, _E = 96, Ru = 123, SE = 124, Nu = 125, _e = {};
_e[0] = "\\0";
_e[7] = "\\a";
_e[8] = "\\b";
_e[9] = "\\t";
_e[10] = "\\n";
_e[11] = "\\v";
_e[12] = "\\f";
_e[13] = "\\r";
_e[27] = "\\e";
_e[34] = '\\"';
_e[92] = "\\\\";
_e[133] = "\\N";
_e[160] = "\\_";
_e[8232] = "\\L";
_e[8233] = "\\P";
var AE = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], bE = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function TE(e, t) {
  var r, n, i, o, s, a, l;
  if (t === null) return {};
  for (r = {}, n = Object.keys(t), i = 0, o = n.length; i < o; i += 1)
    s = n[i], a = String(t[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), l = e.compiledTypeMap.fallback[s], l && Ou.call(l.styleAliases, a) && (a = l.styleAliases[a]), r[s] = a;
  return r;
}
function $E(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new an("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + pi.repeat("0", n - t.length) + t;
}
var CE = 1, Gr = 2;
function OE(e) {
  this.schema = e.schema || sE, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = pi.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = TE(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Gr : CE, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function _a(e, t) {
  for (var r = pi.repeat(" ", t), n = 0, i = -1, o = "", s, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (s = e.slice(n), n = a) : (s = e.slice(n, i + 1), n = i + 1), s.length && s !== `
` && (o += r), o += s;
  return o;
}
function So(e, t) {
  return `
` + pi.repeat(" ", e.indent * t);
}
function IE(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function ti(e) {
  return e === cE || e === aE;
}
function Wr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Ko || 65536 <= e && e <= 1114111;
}
function Sa(e) {
  return Wr(e) && e !== Ko && e !== lE && e !== qr;
}
function Aa(e, t, r) {
  var n = Sa(e), i = n && !ti(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && e !== Iu && e !== Pu && e !== Du && e !== Ru && e !== Nu) && e !== _o && !(t === ei && !i) || Sa(t) && !ti(t) && e === _o || t === ei && i
  );
}
function PE(e) {
  return Wr(e) && e !== Ko && !ti(e) && e !== gE && e !== vE && e !== ei && e !== Iu && e !== Pu && e !== Du && e !== Ru && e !== Nu && e !== _o && e !== hE && e !== mE && e !== uE && e !== SE && e !== yE && e !== EE && e !== pE && e !== fE && e !== dE && e !== wE && e !== _E;
}
function DE(e) {
  return !ti(e) && e !== ei;
}
function Rr(e, t) {
  var r = e.charCodeAt(t), n;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function Fu(e) {
  var t = /^\n* /;
  return t.test(e);
}
var xu = 1, Ao = 2, Lu = 3, Uu = 4, rr = 5;
function RE(e, t, r, n, i, o, s, a) {
  var l, d = 0, c = null, f = !1, p = !1, g = n !== -1, _ = -1, E = PE(Rr(e, 0)) && DE(Rr(e, e.length - 1));
  if (t || s)
    for (l = 0; l < e.length; d >= 65536 ? l += 2 : l++) {
      if (d = Rr(e, l), !Wr(d))
        return rr;
      E = E && Aa(d, c, a), c = d;
    }
  else {
    for (l = 0; l < e.length; d >= 65536 ? l += 2 : l++) {
      if (d = Rr(e, l), d === qr)
        f = !0, g && (p = p || // Foldable line = too long, and not more-indented.
        l - _ - 1 > n && e[_ + 1] !== " ", _ = l);
      else if (!Wr(d))
        return rr;
      E = E && Aa(d, c, a), c = d;
    }
    p = p || g && l - _ - 1 > n && e[_ + 1] !== " ";
  }
  return !f && !p ? E && !s && !i(e) ? xu : o === Gr ? rr : Ao : r > 9 && Fu(e) ? rr : s ? o === Gr ? rr : Ao : p ? Uu : Lu;
}
function NE(e, t, r, n, i) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === Gr ? '""' : "''";
    if (!e.noCompatMode && (AE.indexOf(t) !== -1 || bE.test(t)))
      return e.quotingType === Gr ? '"' + t + '"' : "'" + t + "'";
    var o = e.indent * Math.max(1, r), s = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), a = n || e.flowLevel > -1 && r >= e.flowLevel;
    function l(d) {
      return IE(e, d);
    }
    switch (RE(
      t,
      a,
      e.indent,
      s,
      l,
      e.quotingType,
      e.forceQuotes && !n,
      i
    )) {
      case xu:
        return t;
      case Ao:
        return "'" + t.replace(/'/g, "''") + "'";
      case Lu:
        return "|" + ba(t, e.indent) + Ta(_a(t, o));
      case Uu:
        return ">" + ba(t, e.indent) + Ta(_a(FE(t, s), o));
      case rr:
        return '"' + xE(t) + '"';
      default:
        throw new an("impossible error: invalid scalar style");
    }
  }();
}
function ba(e, t) {
  var r = Fu(e) ? String(t) : "", n = e[e.length - 1] === `
`, i = n && (e[e.length - 2] === `
` || e === `
`), o = i ? "+" : n ? "" : "-";
  return r + o + `
`;
}
function Ta(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function FE(e, t) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var d = e.indexOf(`
`);
    return d = d !== -1 ? d : e.length, r.lastIndex = d, $a(e.slice(0, d), t);
  }(), i = e[0] === `
` || e[0] === " ", o, s; s = r.exec(e); ) {
    var a = s[1], l = s[2];
    o = l[0] === " ", n += a + (!i && !o && l !== "" ? `
` : "") + $a(l, t), i = o;
  }
  return n;
}
function $a(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, n, i = 0, o, s = 0, a = 0, l = ""; n = r.exec(e); )
    a = n.index, a - i > t && (o = s > i ? s : a, l += `
` + e.slice(i, o), i = o + 1), s = a;
  return l += `
`, e.length - i > t && s > i ? l += e.slice(i, s) + `
` + e.slice(s + 1) : l += e.slice(i), l.slice(1);
}
function xE(e) {
  for (var t = "", r = 0, n, i = 0; i < e.length; r >= 65536 ? i += 2 : i++)
    r = Rr(e, i), n = _e[r], !n && Wr(r) ? (t += e[i], r >= 65536 && (t += e[i + 1])) : t += n || $E(r);
  return t;
}
function LE(e, t, r) {
  var n = "", i = e.tag, o, s, a;
  for (o = 0, s = r.length; o < s; o += 1)
    a = r[o], e.replacer && (a = e.replacer.call(r, String(o), a)), (rt(e, t, a, !1, !1) || typeof a > "u" && rt(e, t, null, !1, !1)) && (n !== "" && (n += "," + (e.condenseFlow ? "" : " ")), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function Ca(e, t, r, n) {
  var i = "", o = e.tag, s, a, l;
  for (s = 0, a = r.length; s < a; s += 1)
    l = r[s], e.replacer && (l = e.replacer.call(r, String(s), l)), (rt(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && rt(e, t + 1, null, !0, !0, !1, !0)) && ((!n || i !== "") && (i += So(e, t)), e.dump && qr === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
  e.tag = o, e.dump = i || "[]";
}
function UE(e, t, r) {
  var n = "", i = e.tag, o = Object.keys(r), s, a, l, d, c;
  for (s = 0, a = o.length; s < a; s += 1)
    c = "", n !== "" && (c += ", "), e.condenseFlow && (c += '"'), l = o[s], d = r[l], e.replacer && (d = e.replacer.call(r, l, d)), rt(e, t, l, !1, !1) && (e.dump.length > 1024 && (c += "? "), c += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), rt(e, t, d, !1, !1) && (c += e.dump, n += c));
  e.tag = i, e.dump = "{" + n + "}";
}
function kE(e, t, r, n) {
  var i = "", o = e.tag, s = Object.keys(r), a, l, d, c, f, p;
  if (e.sortKeys === !0)
    s.sort();
  else if (typeof e.sortKeys == "function")
    s.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new an("sortKeys must be a boolean or a function");
  for (a = 0, l = s.length; a < l; a += 1)
    p = "", (!n || i !== "") && (p += So(e, t)), d = s[a], c = r[d], e.replacer && (c = e.replacer.call(r, d, c)), rt(e, t + 1, d, !0, !0, !0) && (f = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, f && (e.dump && qr === e.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e.dump, f && (p += So(e, t)), rt(e, t + 1, c, !0, f) && (e.dump && qr === e.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e.dump, i += p));
  e.tag = o, e.dump = i || "{}";
}
function Oa(e, t, r) {
  var n, i, o, s, a, l;
  for (i = r ? e.explicitTypes : e.implicitTypes, o = 0, s = i.length; o < s; o += 1)
    if (a = i[o], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (r ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?", a.represent) {
        if (l = e.styleMap[a.tag] || a.defaultStyle, Cu.call(a.represent) === "[object Function]")
          n = a.represent(t, l);
        else if (Ou.call(a.represent, l))
          n = a.represent[l](t, l);
        else
          throw new an("!<" + a.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function rt(e, t, r, n, i, o, s) {
  e.tag = null, e.dump = r, Oa(e, r, !1) || Oa(e, r, !0);
  var a = Cu.call(e.dump), l = n, d;
  n && (n = e.flowLevel < 0 || e.flowLevel > t);
  var c = a === "[object Object]" || a === "[object Array]", f, p;
  if (c && (f = e.duplicates.indexOf(r), p = f !== -1), (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && t > 0) && (i = !1), p && e.usedDuplicates[f])
    e.dump = "*ref_" + f;
  else {
    if (c && p && !e.usedDuplicates[f] && (e.usedDuplicates[f] = !0), a === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (kE(e, t, e.dump, i), p && (e.dump = "&ref_" + f + e.dump)) : (UE(e, t, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
    else if (a === "[object Array]")
      n && e.dump.length !== 0 ? (e.noArrayIndent && !s && t > 0 ? Ca(e, t - 1, e.dump, i) : Ca(e, t, e.dump, i), p && (e.dump = "&ref_" + f + e.dump)) : (LE(e, t, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
    else if (a === "[object String]")
      e.tag !== "?" && NE(e, e.dump, t, o, l);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new an("unacceptable kind of an object to dump " + a);
    }
    e.tag !== null && e.tag !== "?" && (d = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? d = "!" + d : d.slice(0, 18) === "tag:yaml.org,2002:" ? d = "!!" + d.slice(18) : d = "!<" + d + ">", e.dump = d + " " + e.dump);
  }
  return !0;
}
function ME(e, t) {
  var r = [], n = [], i, o;
  for (bo(e, r, n), i = 0, o = n.length; i < o; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(o);
}
function bo(e, t, r) {
  var n, i, o;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, o = e.length; i < o; i += 1)
        bo(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, o = n.length; i < o; i += 1)
        bo(e[n[i]], t, r);
}
function BE(e, t) {
  t = t || {};
  var r = new OE(t);
  r.noRefs || ME(e, r);
  var n = e;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), rt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
$u.dump = BE;
var ku = Vo, jE = $u;
function Qo(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
ye.Type = Oe;
ye.Schema = Kc;
ye.FAILSAFE_SCHEMA = tu;
ye.JSON_SCHEMA = au;
ye.CORE_SCHEMA = lu;
ye.DEFAULT_SCHEMA = Yo;
ye.load = ku.load;
ye.loadAll = ku.loadAll;
ye.dump = jE.dump;
ye.YAMLException = sn;
ye.types = {
  binary: hu,
  float: su,
  map: eu,
  null: ru,
  pairs: mu,
  set: gu,
  timestamp: fu,
  bool: nu,
  int: iu,
  merge: du,
  omap: pu,
  seq: Zc,
  str: Qc
};
ye.safeLoad = Qo("safeLoad", "load");
ye.safeLoadAll = Qo("safeLoadAll", "loadAll");
ye.safeDump = Qo("safeDump", "dump");
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.Lazy = void 0;
class HE {
  constructor(t) {
    this._value = null, this.creator = t;
  }
  get hasValue() {
    return this.creator == null;
  }
  get value() {
    if (this.creator == null)
      return this._value;
    const t = this.creator();
    return this.value = t, t;
  }
  set value(t) {
    this._value = t, this.creator = null;
  }
}
mi.Lazy = HE;
var To = { exports: {} };
const qE = "2.0.0", Mu = 256, GE = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, WE = 16, VE = Mu - 6, zE = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var gi = {
  MAX_LENGTH: Mu,
  MAX_SAFE_COMPONENT_LENGTH: WE,
  MAX_SAFE_BUILD_LENGTH: VE,
  MAX_SAFE_INTEGER: GE,
  RELEASE_TYPES: zE,
  SEMVER_SPEC_VERSION: qE,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const YE = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var yi = YE;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: i
  } = gi, o = yi;
  t = e.exports = {};
  const s = t.re = [], a = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], c = t.t = {};
  let f = 0;
  const p = "[a-zA-Z0-9-]", g = [
    ["\\s", 1],
    ["\\d", i],
    [p, n]
  ], _ = (S) => {
    for (const [b, A] of g)
      S = S.split(`${b}*`).join(`${b}{0,${A}}`).split(`${b}+`).join(`${b}{1,${A}}`);
    return S;
  }, E = (S, b, A) => {
    const N = _(b), x = f++;
    o(S, x, b), c[S] = x, l[x] = b, d[x] = N, s[x] = new RegExp(b, A ? "g" : void 0), a[x] = new RegExp(N, A ? "g" : void 0);
  };
  E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), E("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${p}+`), E("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), E("FULL", `^${l[c.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), E("LOOSE", `^${l[c.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), E("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), E("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", l[c.COERCE], !0), E("COERCERTLFULL", l[c.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", E("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", E("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(To, To.exports);
var ln = To.exports;
const XE = Object.freeze({ loose: !0 }), JE = Object.freeze({}), KE = (e) => e ? typeof e != "object" ? XE : e : JE;
var Zo = KE;
const Ia = /^[0-9]+$/, Bu = (e, t) => {
  const r = Ia.test(e), n = Ia.test(t);
  return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
}, QE = (e, t) => Bu(t, e);
var ju = {
  compareIdentifiers: Bu,
  rcompareIdentifiers: QE
};
const Pn = yi, { MAX_LENGTH: Pa, MAX_SAFE_INTEGER: Dn } = gi, { safeRe: Rn, t: Nn } = ln, ZE = Zo, { compareIdentifiers: Jt } = ju;
let ev = class Xe {
  constructor(t, r) {
    if (r = ZE(r), t instanceof Xe) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Pa)
      throw new TypeError(
        `version is longer than ${Pa} characters`
      );
    Pn("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = t.trim().match(r.loose ? Rn[Nn.LOOSE] : Rn[Nn.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Dn || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Dn || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Dn || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((i) => {
      if (/^[0-9]+$/.test(i)) {
        const o = +i;
        if (o >= 0 && o < Dn)
          return o;
      }
      return i;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Pn("SemVer.compare", this.version, this.options, t), !(t instanceof Xe)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new Xe(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof Xe || (t = new Xe(t, this.options)), Jt(this.major, t.major) || Jt(this.minor, t.minor) || Jt(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof Xe || (t = new Xe(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], i = t.prerelease[r];
      if (Pn("prerelease compare", r, n, i), n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return Jt(n, i);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof Xe || (t = new Xe(t, this.options));
    let r = 0;
    do {
      const n = this.build[r], i = t.build[r];
      if (Pn("build compare", r, n, i), n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return Jt(n, i);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, r, n) {
    if (t.startsWith("pre")) {
      if (!r && n === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (r) {
        const i = `-${r}`.match(this.options.loose ? Rn[Nn.PRERELEASELOOSE] : Rn[Nn.PRERELEASE]);
        if (!i || i[1] !== r)
          throw new Error(`invalid identifier: ${r}`);
      }
    }
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const i = Number(n) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [i];
        else {
          let o = this.prerelease.length;
          for (; --o >= 0; )
            typeof this.prerelease[o] == "number" && (this.prerelease[o]++, o = -2);
          if (o === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(i);
          }
        }
        if (r) {
          let o = [r, i];
          n === !1 && (o = [r]), Jt(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = o) : this.prerelease = o;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Ie = ev;
const Da = Ie, tv = (e, t, r = !1) => {
  if (e instanceof Da)
    return e;
  try {
    return new Da(e, t);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var yr = tv;
const rv = yr, nv = (e, t) => {
  const r = rv(e, t);
  return r ? r.version : null;
};
var iv = nv;
const ov = yr, sv = (e, t) => {
  const r = ov(e.trim().replace(/^[=v]+/, ""), t);
  return r ? r.version : null;
};
var av = sv;
const Ra = Ie, lv = (e, t, r, n, i) => {
  typeof r == "string" && (i = n, n = r, r = void 0);
  try {
    return new Ra(
      e instanceof Ra ? e.version : e,
      r
    ).inc(t, n, i).version;
  } catch {
    return null;
  }
};
var cv = lv;
const Na = yr, uv = (e, t) => {
  const r = Na(e, null, !0), n = Na(t, null, !0), i = r.compare(n);
  if (i === 0)
    return null;
  const o = i > 0, s = o ? r : n, a = o ? n : r, l = !!s.prerelease.length;
  if (!!a.prerelease.length && !l) {
    if (!a.patch && !a.minor)
      return "major";
    if (a.compareMain(s) === 0)
      return a.minor && !a.patch ? "minor" : "patch";
  }
  const c = l ? "pre" : "";
  return r.major !== n.major ? c + "major" : r.minor !== n.minor ? c + "minor" : r.patch !== n.patch ? c + "patch" : "prerelease";
};
var fv = uv;
const dv = Ie, hv = (e, t) => new dv(e, t).major;
var pv = hv;
const mv = Ie, gv = (e, t) => new mv(e, t).minor;
var yv = gv;
const Ev = Ie, vv = (e, t) => new Ev(e, t).patch;
var wv = vv;
const _v = yr, Sv = (e, t) => {
  const r = _v(e, t);
  return r && r.prerelease.length ? r.prerelease : null;
};
var Av = Sv;
const Fa = Ie, bv = (e, t, r) => new Fa(e, r).compare(new Fa(t, r));
var We = bv;
const Tv = We, $v = (e, t, r) => Tv(t, e, r);
var Cv = $v;
const Ov = We, Iv = (e, t) => Ov(e, t, !0);
var Pv = Iv;
const xa = Ie, Dv = (e, t, r) => {
  const n = new xa(e, r), i = new xa(t, r);
  return n.compare(i) || n.compareBuild(i);
};
var es = Dv;
const Rv = es, Nv = (e, t) => e.sort((r, n) => Rv(r, n, t));
var Fv = Nv;
const xv = es, Lv = (e, t) => e.sort((r, n) => xv(n, r, t));
var Uv = Lv;
const kv = We, Mv = (e, t, r) => kv(e, t, r) > 0;
var Ei = Mv;
const Bv = We, jv = (e, t, r) => Bv(e, t, r) < 0;
var ts = jv;
const Hv = We, qv = (e, t, r) => Hv(e, t, r) === 0;
var Hu = qv;
const Gv = We, Wv = (e, t, r) => Gv(e, t, r) !== 0;
var qu = Wv;
const Vv = We, zv = (e, t, r) => Vv(e, t, r) >= 0;
var rs = zv;
const Yv = We, Xv = (e, t, r) => Yv(e, t, r) <= 0;
var ns = Xv;
const Jv = Hu, Kv = qu, Qv = Ei, Zv = rs, ew = ts, tw = ns, rw = (e, t, r, n) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
    case "":
    case "=":
    case "==":
      return Jv(e, r, n);
    case "!=":
      return Kv(e, r, n);
    case ">":
      return Qv(e, r, n);
    case ">=":
      return Zv(e, r, n);
    case "<":
      return ew(e, r, n);
    case "<=":
      return tw(e, r, n);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var Gu = rw;
const nw = Ie, iw = yr, { safeRe: Fn, t: xn } = ln, ow = (e, t) => {
  if (e instanceof nw)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let r = null;
  if (!t.rtl)
    r = e.match(t.includePrerelease ? Fn[xn.COERCEFULL] : Fn[xn.COERCE]);
  else {
    const l = t.includePrerelease ? Fn[xn.COERCERTLFULL] : Fn[xn.COERCERTL];
    let d;
    for (; (d = l.exec(e)) && (!r || r.index + r[0].length !== e.length); )
      (!r || d.index + d[0].length !== r.index + r[0].length) && (r = d), l.lastIndex = d.index + d[1].length + d[2].length;
    l.lastIndex = -1;
  }
  if (r === null)
    return null;
  const n = r[2], i = r[3] || "0", o = r[4] || "0", s = t.includePrerelease && r[5] ? `-${r[5]}` : "", a = t.includePrerelease && r[6] ? `+${r[6]}` : "";
  return iw(`${n}.${i}.${o}${s}${a}`, t);
};
var sw = ow;
class aw {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const r = this.map.get(t);
    if (r !== void 0)
      return this.map.delete(t), this.map.set(t, r), r;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, r) {
    if (!this.delete(t) && r !== void 0) {
      if (this.map.size >= this.max) {
        const i = this.map.keys().next().value;
        this.delete(i);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var lw = aw, Xi, La;
function Ve() {
  if (La) return Xi;
  La = 1;
  const e = /\s+/g;
  class t {
    constructor(C, D) {
      if (D = i(D), C instanceof t)
        return C.loose === !!D.loose && C.includePrerelease === !!D.includePrerelease ? C : new t(C.raw, D);
      if (C instanceof o)
        return this.raw = C.value, this.set = [[C]], this.formatted = void 0, this;
      if (this.options = D, this.loose = !!D.loose, this.includePrerelease = !!D.includePrerelease, this.raw = C.trim().replace(e, " "), this.set = this.raw.split("||").map(($) => this.parseRange($.trim())).filter(($) => $.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const $ = this.set[0];
        if (this.set = this.set.filter((R) => !E(R[0])), this.set.length === 0)
          this.set = [$];
        else if (this.set.length > 1) {
          for (const R of this.set)
            if (R.length === 1 && S(R[0])) {
              this.set = [R];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let C = 0; C < this.set.length; C++) {
          C > 0 && (this.formatted += "||");
          const D = this.set[C];
          for (let $ = 0; $ < D.length; $++)
            $ > 0 && (this.formatted += " "), this.formatted += D[$].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(C) {
      const $ = ((this.options.includePrerelease && g) | (this.options.loose && _)) + ":" + C, R = n.get($);
      if (R)
        return R;
      const P = this.options.loose, k = P ? l[d.HYPHENRANGELOOSE] : l[d.HYPHENRANGE];
      C = C.replace(k, M(this.options.includePrerelease)), s("hyphen replace", C), C = C.replace(l[d.COMPARATORTRIM], c), s("comparator trim", C), C = C.replace(l[d.TILDETRIM], f), s("tilde trim", C), C = C.replace(l[d.CARETTRIM], p), s("caret trim", C);
      let G = C.split(" ").map((U) => A(U, this.options)).join(" ").split(/\s+/).map((U) => B(U, this.options));
      P && (G = G.filter((U) => (s("loose invalid filter", U, this.options), !!U.match(l[d.COMPARATORLOOSE])))), s("range list", G);
      const j = /* @__PURE__ */ new Map(), K = G.map((U) => new o(U, this.options));
      for (const U of K) {
        if (E(U))
          return [U];
        j.set(U.value, U);
      }
      j.size > 1 && j.has("") && j.delete("");
      const ue = [...j.values()];
      return n.set($, ue), ue;
    }
    intersects(C, D) {
      if (!(C instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some(($) => b($, D) && C.set.some((R) => b(R, D) && $.every((P) => R.every((k) => P.intersects(k, D)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(C) {
      if (!C)
        return !1;
      if (typeof C == "string")
        try {
          C = new a(C, this.options);
        } catch {
          return !1;
        }
      for (let D = 0; D < this.set.length; D++)
        if (J(this.set[D], C, this.options))
          return !0;
      return !1;
    }
  }
  Xi = t;
  const r = lw, n = new r(), i = Zo, o = vi(), s = yi, a = Ie, {
    safeRe: l,
    t: d,
    comparatorTrimReplace: c,
    tildeTrimReplace: f,
    caretTrimReplace: p
  } = ln, { FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: _ } = gi, E = (I) => I.value === "<0.0.0-0", S = (I) => I.value === "", b = (I, C) => {
    let D = !0;
    const $ = I.slice();
    let R = $.pop();
    for (; D && $.length; )
      D = $.every((P) => R.intersects(P, C)), R = $.pop();
    return D;
  }, A = (I, C) => (s("comp", I, C), I = se(I, C), s("caret", I), I = x(I, C), s("tildes", I), I = Ne(I, C), s("xrange", I), I = q(I, C), s("stars", I), I), N = (I) => !I || I.toLowerCase() === "x" || I === "*", x = (I, C) => I.trim().split(/\s+/).map((D) => ee(D, C)).join(" "), ee = (I, C) => {
    const D = C.loose ? l[d.TILDELOOSE] : l[d.TILDE];
    return I.replace(D, ($, R, P, k, G) => {
      s("tilde", I, $, R, P, k, G);
      let j;
      return N(R) ? j = "" : N(P) ? j = `>=${R}.0.0 <${+R + 1}.0.0-0` : N(k) ? j = `>=${R}.${P}.0 <${R}.${+P + 1}.0-0` : G ? (s("replaceTilde pr", G), j = `>=${R}.${P}.${k}-${G} <${R}.${+P + 1}.0-0`) : j = `>=${R}.${P}.${k} <${R}.${+P + 1}.0-0`, s("tilde return", j), j;
    });
  }, se = (I, C) => I.trim().split(/\s+/).map((D) => z(D, C)).join(" "), z = (I, C) => {
    s("caret", I, C);
    const D = C.loose ? l[d.CARETLOOSE] : l[d.CARET], $ = C.includePrerelease ? "-0" : "";
    return I.replace(D, (R, P, k, G, j) => {
      s("caret", I, R, P, k, G, j);
      let K;
      return N(P) ? K = "" : N(k) ? K = `>=${P}.0.0${$} <${+P + 1}.0.0-0` : N(G) ? P === "0" ? K = `>=${P}.${k}.0${$} <${P}.${+k + 1}.0-0` : K = `>=${P}.${k}.0${$} <${+P + 1}.0.0-0` : j ? (s("replaceCaret pr", j), P === "0" ? k === "0" ? K = `>=${P}.${k}.${G}-${j} <${P}.${k}.${+G + 1}-0` : K = `>=${P}.${k}.${G}-${j} <${P}.${+k + 1}.0-0` : K = `>=${P}.${k}.${G}-${j} <${+P + 1}.0.0-0`) : (s("no pr"), P === "0" ? k === "0" ? K = `>=${P}.${k}.${G}${$} <${P}.${k}.${+G + 1}-0` : K = `>=${P}.${k}.${G}${$} <${P}.${+k + 1}.0-0` : K = `>=${P}.${k}.${G} <${+P + 1}.0.0-0`), s("caret return", K), K;
    });
  }, Ne = (I, C) => (s("replaceXRanges", I, C), I.split(/\s+/).map((D) => y(D, C)).join(" ")), y = (I, C) => {
    I = I.trim();
    const D = C.loose ? l[d.XRANGELOOSE] : l[d.XRANGE];
    return I.replace(D, ($, R, P, k, G, j) => {
      s("xRange", I, $, R, P, k, G, j);
      const K = N(P), ue = K || N(k), U = ue || N(G), ze = U;
      return R === "=" && ze && (R = ""), j = C.includePrerelease ? "-0" : "", K ? R === ">" || R === "<" ? $ = "<0.0.0-0" : $ = "*" : R && ze ? (ue && (k = 0), G = 0, R === ">" ? (R = ">=", ue ? (P = +P + 1, k = 0, G = 0) : (k = +k + 1, G = 0)) : R === "<=" && (R = "<", ue ? P = +P + 1 : k = +k + 1), R === "<" && (j = "-0"), $ = `${R + P}.${k}.${G}${j}`) : ue ? $ = `>=${P}.0.0${j} <${+P + 1}.0.0-0` : U && ($ = `>=${P}.${k}.0${j} <${P}.${+k + 1}.0-0`), s("xRange return", $), $;
    });
  }, q = (I, C) => (s("replaceStars", I, C), I.trim().replace(l[d.STAR], "")), B = (I, C) => (s("replaceGTE0", I, C), I.trim().replace(l[C.includePrerelease ? d.GTE0PRE : d.GTE0], "")), M = (I) => (C, D, $, R, P, k, G, j, K, ue, U, ze) => (N($) ? D = "" : N(R) ? D = `>=${$}.0.0${I ? "-0" : ""}` : N(P) ? D = `>=${$}.${R}.0${I ? "-0" : ""}` : k ? D = `>=${D}` : D = `>=${D}${I ? "-0" : ""}`, N(K) ? j = "" : N(ue) ? j = `<${+K + 1}.0.0-0` : N(U) ? j = `<${K}.${+ue + 1}.0-0` : ze ? j = `<=${K}.${ue}.${U}-${ze}` : I ? j = `<${K}.${ue}.${+U + 1}-0` : j = `<=${j}`, `${D} ${j}`.trim()), J = (I, C, D) => {
    for (let $ = 0; $ < I.length; $++)
      if (!I[$].test(C))
        return !1;
    if (C.prerelease.length && !D.includePrerelease) {
      for (let $ = 0; $ < I.length; $++)
        if (s(I[$].semver), I[$].semver !== o.ANY && I[$].semver.prerelease.length > 0) {
          const R = I[$].semver;
          if (R.major === C.major && R.minor === C.minor && R.patch === C.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Xi;
}
var Ji, Ua;
function vi() {
  if (Ua) return Ji;
  Ua = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(c, f) {
      if (f = r(f), c instanceof t) {
        if (c.loose === !!f.loose)
          return c;
        c = c.value;
      }
      c = c.trim().split(/\s+/).join(" "), s("comparator", c, f), this.options = f, this.loose = !!f.loose, this.parse(c), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
    }
    parse(c) {
      const f = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR], p = c.match(f);
      if (!p)
        throw new TypeError(`Invalid comparator: ${c}`);
      this.operator = p[1] !== void 0 ? p[1] : "", this.operator === "=" && (this.operator = ""), p[2] ? this.semver = new a(p[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(c) {
      if (s("Comparator.test", c, this.options.loose), this.semver === e || c === e)
        return !0;
      if (typeof c == "string")
        try {
          c = new a(c, this.options);
        } catch {
          return !1;
        }
      return o(c, this.operator, this.semver, this.options);
    }
    intersects(c, f) {
      if (!(c instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new l(c.value, f).test(this.value) : c.operator === "" ? c.value === "" ? !0 : new l(this.value, f).test(c.semver) : (f = r(f), f.includePrerelease && (this.value === "<0.0.0-0" || c.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || c.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && c.operator.startsWith(">") || this.operator.startsWith("<") && c.operator.startsWith("<") || this.semver.version === c.semver.version && this.operator.includes("=") && c.operator.includes("=") || o(this.semver, "<", c.semver, f) && this.operator.startsWith(">") && c.operator.startsWith("<") || o(this.semver, ">", c.semver, f) && this.operator.startsWith("<") && c.operator.startsWith(">")));
    }
  }
  Ji = t;
  const r = Zo, { safeRe: n, t: i } = ln, o = Gu, s = yi, a = Ie, l = Ve();
  return Ji;
}
const cw = Ve(), uw = (e, t, r) => {
  try {
    t = new cw(t, r);
  } catch {
    return !1;
  }
  return t.test(e);
};
var wi = uw;
const fw = Ve(), dw = (e, t) => new fw(e, t).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var hw = dw;
const pw = Ie, mw = Ve(), gw = (e, t, r) => {
  let n = null, i = null, o = null;
  try {
    o = new mw(t, r);
  } catch {
    return null;
  }
  return e.forEach((s) => {
    o.test(s) && (!n || i.compare(s) === -1) && (n = s, i = new pw(n, r));
  }), n;
};
var yw = gw;
const Ew = Ie, vw = Ve(), ww = (e, t, r) => {
  let n = null, i = null, o = null;
  try {
    o = new vw(t, r);
  } catch {
    return null;
  }
  return e.forEach((s) => {
    o.test(s) && (!n || i.compare(s) === 1) && (n = s, i = new Ew(n, r));
  }), n;
};
var _w = ww;
const Ki = Ie, Sw = Ve(), ka = Ei, Aw = (e, t) => {
  e = new Sw(e, t);
  let r = new Ki("0.0.0");
  if (e.test(r) || (r = new Ki("0.0.0-0"), e.test(r)))
    return r;
  r = null;
  for (let n = 0; n < e.set.length; ++n) {
    const i = e.set[n];
    let o = null;
    i.forEach((s) => {
      const a = new Ki(s.semver.version);
      switch (s.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!o || ka(a, o)) && (o = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${s.operator}`);
      }
    }), o && (!r || ka(r, o)) && (r = o);
  }
  return r && e.test(r) ? r : null;
};
var bw = Aw;
const Tw = Ve(), $w = (e, t) => {
  try {
    return new Tw(e, t).range || "*";
  } catch {
    return null;
  }
};
var Cw = $w;
const Ow = Ie, Wu = vi(), { ANY: Iw } = Wu, Pw = Ve(), Dw = wi, Ma = Ei, Ba = ts, Rw = ns, Nw = rs, Fw = (e, t, r, n) => {
  e = new Ow(e, n), t = new Pw(t, n);
  let i, o, s, a, l;
  switch (r) {
    case ">":
      i = Ma, o = Rw, s = Ba, a = ">", l = ">=";
      break;
    case "<":
      i = Ba, o = Nw, s = Ma, a = "<", l = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Dw(e, t, n))
    return !1;
  for (let d = 0; d < t.set.length; ++d) {
    const c = t.set[d];
    let f = null, p = null;
    if (c.forEach((g) => {
      g.semver === Iw && (g = new Wu(">=0.0.0")), f = f || g, p = p || g, i(g.semver, f.semver, n) ? f = g : s(g.semver, p.semver, n) && (p = g);
    }), f.operator === a || f.operator === l || (!p.operator || p.operator === a) && o(e, p.semver))
      return !1;
    if (p.operator === l && s(e, p.semver))
      return !1;
  }
  return !0;
};
var is = Fw;
const xw = is, Lw = (e, t, r) => xw(e, t, ">", r);
var Uw = Lw;
const kw = is, Mw = (e, t, r) => kw(e, t, "<", r);
var Bw = Mw;
const ja = Ve(), jw = (e, t, r) => (e = new ja(e, r), t = new ja(t, r), e.intersects(t, r));
var Hw = jw;
const qw = wi, Gw = We;
var Ww = (e, t, r) => {
  const n = [];
  let i = null, o = null;
  const s = e.sort((c, f) => Gw(c, f, r));
  for (const c of s)
    qw(c, t, r) ? (o = c, i || (i = c)) : (o && n.push([i, o]), o = null, i = null);
  i && n.push([i, null]);
  const a = [];
  for (const [c, f] of n)
    c === f ? a.push(c) : !f && c === s[0] ? a.push("*") : f ? c === s[0] ? a.push(`<=${f}`) : a.push(`${c} - ${f}`) : a.push(`>=${c}`);
  const l = a.join(" || "), d = typeof t.raw == "string" ? t.raw : String(t);
  return l.length < d.length ? l : t;
};
const Ha = Ve(), os = vi(), { ANY: Qi } = os, Cr = wi, ss = We, Vw = (e, t, r = {}) => {
  if (e === t)
    return !0;
  e = new Ha(e, r), t = new Ha(t, r);
  let n = !1;
  e: for (const i of e.set) {
    for (const o of t.set) {
      const s = Yw(i, o, r);
      if (n = n || s !== null, s)
        continue e;
    }
    if (n)
      return !1;
  }
  return !0;
}, zw = [new os(">=0.0.0-0")], qa = [new os(">=0.0.0")], Yw = (e, t, r) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Qi) {
    if (t.length === 1 && t[0].semver === Qi)
      return !0;
    r.includePrerelease ? e = zw : e = qa;
  }
  if (t.length === 1 && t[0].semver === Qi) {
    if (r.includePrerelease)
      return !0;
    t = qa;
  }
  const n = /* @__PURE__ */ new Set();
  let i, o;
  for (const g of e)
    g.operator === ">" || g.operator === ">=" ? i = Ga(i, g, r) : g.operator === "<" || g.operator === "<=" ? o = Wa(o, g, r) : n.add(g.semver);
  if (n.size > 1)
    return null;
  let s;
  if (i && o) {
    if (s = ss(i.semver, o.semver, r), s > 0)
      return null;
    if (s === 0 && (i.operator !== ">=" || o.operator !== "<="))
      return null;
  }
  for (const g of n) {
    if (i && !Cr(g, String(i), r) || o && !Cr(g, String(o), r))
      return null;
    for (const _ of t)
      if (!Cr(g, String(_), r))
        return !1;
    return !0;
  }
  let a, l, d, c, f = o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : !1, p = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
  f && f.prerelease.length === 1 && o.operator === "<" && f.prerelease[0] === 0 && (f = !1);
  for (const g of t) {
    if (c = c || g.operator === ">" || g.operator === ">=", d = d || g.operator === "<" || g.operator === "<=", i) {
      if (p && g.semver.prerelease && g.semver.prerelease.length && g.semver.major === p.major && g.semver.minor === p.minor && g.semver.patch === p.patch && (p = !1), g.operator === ">" || g.operator === ">=") {
        if (a = Ga(i, g, r), a === g && a !== i)
          return !1;
      } else if (i.operator === ">=" && !Cr(i.semver, String(g), r))
        return !1;
    }
    if (o) {
      if (f && g.semver.prerelease && g.semver.prerelease.length && g.semver.major === f.major && g.semver.minor === f.minor && g.semver.patch === f.patch && (f = !1), g.operator === "<" || g.operator === "<=") {
        if (l = Wa(o, g, r), l === g && l !== o)
          return !1;
      } else if (o.operator === "<=" && !Cr(o.semver, String(g), r))
        return !1;
    }
    if (!g.operator && (o || i) && s !== 0)
      return !1;
  }
  return !(i && d && !o && s !== 0 || o && c && !i && s !== 0 || p || f);
}, Ga = (e, t, r) => {
  if (!e)
    return t;
  const n = ss(e.semver, t.semver, r);
  return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, Wa = (e, t, r) => {
  if (!e)
    return t;
  const n = ss(e.semver, t.semver, r);
  return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var Xw = Vw;
const Zi = ln, Va = gi, Jw = Ie, za = ju, Kw = yr, Qw = iv, Zw = av, e_ = cv, t_ = fv, r_ = pv, n_ = yv, i_ = wv, o_ = Av, s_ = We, a_ = Cv, l_ = Pv, c_ = es, u_ = Fv, f_ = Uv, d_ = Ei, h_ = ts, p_ = Hu, m_ = qu, g_ = rs, y_ = ns, E_ = Gu, v_ = sw, w_ = vi(), __ = Ve(), S_ = wi, A_ = hw, b_ = yw, T_ = _w, $_ = bw, C_ = Cw, O_ = is, I_ = Uw, P_ = Bw, D_ = Hw, R_ = Ww, N_ = Xw;
var Vu = {
  parse: Kw,
  valid: Qw,
  clean: Zw,
  inc: e_,
  diff: t_,
  major: r_,
  minor: n_,
  patch: i_,
  prerelease: o_,
  compare: s_,
  rcompare: a_,
  compareLoose: l_,
  compareBuild: c_,
  sort: u_,
  rsort: f_,
  gt: d_,
  lt: h_,
  eq: p_,
  neq: m_,
  gte: g_,
  lte: y_,
  cmp: E_,
  coerce: v_,
  Comparator: w_,
  Range: __,
  satisfies: S_,
  toComparators: A_,
  maxSatisfying: b_,
  minSatisfying: T_,
  minVersion: $_,
  validRange: C_,
  outside: O_,
  gtr: I_,
  ltr: P_,
  intersects: D_,
  simplifyRange: R_,
  subset: N_,
  SemVer: Jw,
  re: Zi.re,
  src: Zi.src,
  tokens: Zi.t,
  SEMVER_SPEC_VERSION: Va.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Va.RELEASE_TYPES,
  compareIdentifiers: za.compareIdentifiers,
  rcompareIdentifiers: za.rcompareIdentifiers
}, cn = {}, ri = { exports: {} };
ri.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, o = 2, s = 9007199254740991, a = "[object Arguments]", l = "[object Array]", d = "[object AsyncFunction]", c = "[object Boolean]", f = "[object Date]", p = "[object Error]", g = "[object Function]", _ = "[object GeneratorFunction]", E = "[object Map]", S = "[object Number]", b = "[object Null]", A = "[object Object]", N = "[object Promise]", x = "[object Proxy]", ee = "[object RegExp]", se = "[object Set]", z = "[object String]", Ne = "[object Symbol]", y = "[object Undefined]", q = "[object WeakMap]", B = "[object ArrayBuffer]", M = "[object DataView]", J = "[object Float32Array]", I = "[object Float64Array]", C = "[object Int8Array]", D = "[object Int16Array]", $ = "[object Int32Array]", R = "[object Uint8Array]", P = "[object Uint8ClampedArray]", k = "[object Uint16Array]", G = "[object Uint32Array]", j = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, ue = /^(?:0|[1-9]\d*)$/, U = {};
  U[J] = U[I] = U[C] = U[D] = U[$] = U[R] = U[P] = U[k] = U[G] = !0, U[a] = U[l] = U[B] = U[c] = U[M] = U[f] = U[p] = U[g] = U[E] = U[S] = U[A] = U[ee] = U[se] = U[z] = U[q] = !1;
  var ze = typeof Ae == "object" && Ae && Ae.Object === Object && Ae, h = typeof self == "object" && self && self.Object === Object && self, u = ze || h || Function("return this")(), T = t && !t.nodeType && t, w = T && !0 && e && !e.nodeType && e, Y = w && w.exports === T, te = Y && ze.process, ie = function() {
    try {
      return te && te.binding && te.binding("util");
    } catch {
    }
  }(), pe = ie && ie.isTypedArray;
  function Ee(m, v) {
    for (var O = -1, F = m == null ? 0 : m.length, Z = 0, H = []; ++O < F; ) {
      var oe = m[O];
      v(oe, O, m) && (H[Z++] = oe);
    }
    return H;
  }
  function st(m, v) {
    for (var O = -1, F = v.length, Z = m.length; ++O < F; )
      m[Z + O] = v[O];
    return m;
  }
  function le(m, v) {
    for (var O = -1, F = m == null ? 0 : m.length; ++O < F; )
      if (v(m[O], O, m))
        return !0;
    return !1;
  }
  function je(m, v) {
    for (var O = -1, F = Array(m); ++O < m; )
      F[O] = v(O);
    return F;
  }
  function Ii(m) {
    return function(v) {
      return m(v);
    };
  }
  function hn(m, v) {
    return m.has(v);
  }
  function vr(m, v) {
    return m == null ? void 0 : m[v];
  }
  function pn(m) {
    var v = -1, O = Array(m.size);
    return m.forEach(function(F, Z) {
      O[++v] = [Z, F];
    }), O;
  }
  function af(m, v) {
    return function(O) {
      return m(v(O));
    };
  }
  function lf(m) {
    var v = -1, O = Array(m.size);
    return m.forEach(function(F) {
      O[++v] = F;
    }), O;
  }
  var cf = Array.prototype, uf = Function.prototype, mn = Object.prototype, Pi = u["__core-js_shared__"], us = uf.toString, Ye = mn.hasOwnProperty, fs = function() {
    var m = /[^.]+$/.exec(Pi && Pi.keys && Pi.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }(), ds = mn.toString, ff = RegExp(
    "^" + us.call(Ye).replace(j, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), hs = Y ? u.Buffer : void 0, gn = u.Symbol, ps = u.Uint8Array, ms = mn.propertyIsEnumerable, df = cf.splice, Ot = gn ? gn.toStringTag : void 0, gs = Object.getOwnPropertySymbols, hf = hs ? hs.isBuffer : void 0, pf = af(Object.keys, Object), Di = Wt(u, "DataView"), wr = Wt(u, "Map"), Ri = Wt(u, "Promise"), Ni = Wt(u, "Set"), Fi = Wt(u, "WeakMap"), _r = Wt(Object, "create"), mf = Dt(Di), gf = Dt(wr), yf = Dt(Ri), Ef = Dt(Ni), vf = Dt(Fi), ys = gn ? gn.prototype : void 0, xi = ys ? ys.valueOf : void 0;
  function It(m) {
    var v = -1, O = m == null ? 0 : m.length;
    for (this.clear(); ++v < O; ) {
      var F = m[v];
      this.set(F[0], F[1]);
    }
  }
  function wf() {
    this.__data__ = _r ? _r(null) : {}, this.size = 0;
  }
  function _f(m) {
    var v = this.has(m) && delete this.__data__[m];
    return this.size -= v ? 1 : 0, v;
  }
  function Sf(m) {
    var v = this.__data__;
    if (_r) {
      var O = v[m];
      return O === n ? void 0 : O;
    }
    return Ye.call(v, m) ? v[m] : void 0;
  }
  function Af(m) {
    var v = this.__data__;
    return _r ? v[m] !== void 0 : Ye.call(v, m);
  }
  function bf(m, v) {
    var O = this.__data__;
    return this.size += this.has(m) ? 0 : 1, O[m] = _r && v === void 0 ? n : v, this;
  }
  It.prototype.clear = wf, It.prototype.delete = _f, It.prototype.get = Sf, It.prototype.has = Af, It.prototype.set = bf;
  function Ze(m) {
    var v = -1, O = m == null ? 0 : m.length;
    for (this.clear(); ++v < O; ) {
      var F = m[v];
      this.set(F[0], F[1]);
    }
  }
  function Tf() {
    this.__data__ = [], this.size = 0;
  }
  function $f(m) {
    var v = this.__data__, O = En(v, m);
    if (O < 0)
      return !1;
    var F = v.length - 1;
    return O == F ? v.pop() : df.call(v, O, 1), --this.size, !0;
  }
  function Cf(m) {
    var v = this.__data__, O = En(v, m);
    return O < 0 ? void 0 : v[O][1];
  }
  function Of(m) {
    return En(this.__data__, m) > -1;
  }
  function If(m, v) {
    var O = this.__data__, F = En(O, m);
    return F < 0 ? (++this.size, O.push([m, v])) : O[F][1] = v, this;
  }
  Ze.prototype.clear = Tf, Ze.prototype.delete = $f, Ze.prototype.get = Cf, Ze.prototype.has = Of, Ze.prototype.set = If;
  function Pt(m) {
    var v = -1, O = m == null ? 0 : m.length;
    for (this.clear(); ++v < O; ) {
      var F = m[v];
      this.set(F[0], F[1]);
    }
  }
  function Pf() {
    this.size = 0, this.__data__ = {
      hash: new It(),
      map: new (wr || Ze)(),
      string: new It()
    };
  }
  function Df(m) {
    var v = vn(this, m).delete(m);
    return this.size -= v ? 1 : 0, v;
  }
  function Rf(m) {
    return vn(this, m).get(m);
  }
  function Nf(m) {
    return vn(this, m).has(m);
  }
  function Ff(m, v) {
    var O = vn(this, m), F = O.size;
    return O.set(m, v), this.size += O.size == F ? 0 : 1, this;
  }
  Pt.prototype.clear = Pf, Pt.prototype.delete = Df, Pt.prototype.get = Rf, Pt.prototype.has = Nf, Pt.prototype.set = Ff;
  function yn(m) {
    var v = -1, O = m == null ? 0 : m.length;
    for (this.__data__ = new Pt(); ++v < O; )
      this.add(m[v]);
  }
  function xf(m) {
    return this.__data__.set(m, n), this;
  }
  function Lf(m) {
    return this.__data__.has(m);
  }
  yn.prototype.add = yn.prototype.push = xf, yn.prototype.has = Lf;
  function at(m) {
    var v = this.__data__ = new Ze(m);
    this.size = v.size;
  }
  function Uf() {
    this.__data__ = new Ze(), this.size = 0;
  }
  function kf(m) {
    var v = this.__data__, O = v.delete(m);
    return this.size = v.size, O;
  }
  function Mf(m) {
    return this.__data__.get(m);
  }
  function Bf(m) {
    return this.__data__.has(m);
  }
  function jf(m, v) {
    var O = this.__data__;
    if (O instanceof Ze) {
      var F = O.__data__;
      if (!wr || F.length < r - 1)
        return F.push([m, v]), this.size = ++O.size, this;
      O = this.__data__ = new Pt(F);
    }
    return O.set(m, v), this.size = O.size, this;
  }
  at.prototype.clear = Uf, at.prototype.delete = kf, at.prototype.get = Mf, at.prototype.has = Bf, at.prototype.set = jf;
  function Hf(m, v) {
    var O = wn(m), F = !O && nd(m), Z = !O && !F && Li(m), H = !O && !F && !Z && $s(m), oe = O || F || Z || H, fe = oe ? je(m.length, String) : [], me = fe.length;
    for (var re in m)
      Ye.call(m, re) && !(oe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (re == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Z && (re == "offset" || re == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      H && (re == "buffer" || re == "byteLength" || re == "byteOffset") || // Skip index properties.
      Qf(re, me))) && fe.push(re);
    return fe;
  }
  function En(m, v) {
    for (var O = m.length; O--; )
      if (Ss(m[O][0], v))
        return O;
    return -1;
  }
  function qf(m, v, O) {
    var F = v(m);
    return wn(m) ? F : st(F, O(m));
  }
  function Sr(m) {
    return m == null ? m === void 0 ? y : b : Ot && Ot in Object(m) ? Jf(m) : rd(m);
  }
  function Es(m) {
    return Ar(m) && Sr(m) == a;
  }
  function vs(m, v, O, F, Z) {
    return m === v ? !0 : m == null || v == null || !Ar(m) && !Ar(v) ? m !== m && v !== v : Gf(m, v, O, F, vs, Z);
  }
  function Gf(m, v, O, F, Z, H) {
    var oe = wn(m), fe = wn(v), me = oe ? l : lt(m), re = fe ? l : lt(v);
    me = me == a ? A : me, re = re == a ? A : re;
    var Fe = me == A, He = re == A, ve = me == re;
    if (ve && Li(m)) {
      if (!Li(v))
        return !1;
      oe = !0, Fe = !1;
    }
    if (ve && !Fe)
      return H || (H = new at()), oe || $s(m) ? ws(m, v, O, F, Z, H) : Yf(m, v, me, O, F, Z, H);
    if (!(O & i)) {
      var ke = Fe && Ye.call(m, "__wrapped__"), Me = He && Ye.call(v, "__wrapped__");
      if (ke || Me) {
        var ct = ke ? m.value() : m, et = Me ? v.value() : v;
        return H || (H = new at()), Z(ct, et, O, F, H);
      }
    }
    return ve ? (H || (H = new at()), Xf(m, v, O, F, Z, H)) : !1;
  }
  function Wf(m) {
    if (!Ts(m) || ed(m))
      return !1;
    var v = As(m) ? ff : K;
    return v.test(Dt(m));
  }
  function Vf(m) {
    return Ar(m) && bs(m.length) && !!U[Sr(m)];
  }
  function zf(m) {
    if (!td(m))
      return pf(m);
    var v = [];
    for (var O in Object(m))
      Ye.call(m, O) && O != "constructor" && v.push(O);
    return v;
  }
  function ws(m, v, O, F, Z, H) {
    var oe = O & i, fe = m.length, me = v.length;
    if (fe != me && !(oe && me > fe))
      return !1;
    var re = H.get(m);
    if (re && H.get(v))
      return re == v;
    var Fe = -1, He = !0, ve = O & o ? new yn() : void 0;
    for (H.set(m, v), H.set(v, m); ++Fe < fe; ) {
      var ke = m[Fe], Me = v[Fe];
      if (F)
        var ct = oe ? F(Me, ke, Fe, v, m, H) : F(ke, Me, Fe, m, v, H);
      if (ct !== void 0) {
        if (ct)
          continue;
        He = !1;
        break;
      }
      if (ve) {
        if (!le(v, function(et, Rt) {
          if (!hn(ve, Rt) && (ke === et || Z(ke, et, O, F, H)))
            return ve.push(Rt);
        })) {
          He = !1;
          break;
        }
      } else if (!(ke === Me || Z(ke, Me, O, F, H))) {
        He = !1;
        break;
      }
    }
    return H.delete(m), H.delete(v), He;
  }
  function Yf(m, v, O, F, Z, H, oe) {
    switch (O) {
      case M:
        if (m.byteLength != v.byteLength || m.byteOffset != v.byteOffset)
          return !1;
        m = m.buffer, v = v.buffer;
      case B:
        return !(m.byteLength != v.byteLength || !H(new ps(m), new ps(v)));
      case c:
      case f:
      case S:
        return Ss(+m, +v);
      case p:
        return m.name == v.name && m.message == v.message;
      case ee:
      case z:
        return m == v + "";
      case E:
        var fe = pn;
      case se:
        var me = F & i;
        if (fe || (fe = lf), m.size != v.size && !me)
          return !1;
        var re = oe.get(m);
        if (re)
          return re == v;
        F |= o, oe.set(m, v);
        var Fe = ws(fe(m), fe(v), F, Z, H, oe);
        return oe.delete(m), Fe;
      case Ne:
        if (xi)
          return xi.call(m) == xi.call(v);
    }
    return !1;
  }
  function Xf(m, v, O, F, Z, H) {
    var oe = O & i, fe = _s(m), me = fe.length, re = _s(v), Fe = re.length;
    if (me != Fe && !oe)
      return !1;
    for (var He = me; He--; ) {
      var ve = fe[He];
      if (!(oe ? ve in v : Ye.call(v, ve)))
        return !1;
    }
    var ke = H.get(m);
    if (ke && H.get(v))
      return ke == v;
    var Me = !0;
    H.set(m, v), H.set(v, m);
    for (var ct = oe; ++He < me; ) {
      ve = fe[He];
      var et = m[ve], Rt = v[ve];
      if (F)
        var Cs = oe ? F(Rt, et, ve, v, m, H) : F(et, Rt, ve, m, v, H);
      if (!(Cs === void 0 ? et === Rt || Z(et, Rt, O, F, H) : Cs)) {
        Me = !1;
        break;
      }
      ct || (ct = ve == "constructor");
    }
    if (Me && !ct) {
      var _n = m.constructor, Sn = v.constructor;
      _n != Sn && "constructor" in m && "constructor" in v && !(typeof _n == "function" && _n instanceof _n && typeof Sn == "function" && Sn instanceof Sn) && (Me = !1);
    }
    return H.delete(m), H.delete(v), Me;
  }
  function _s(m) {
    return qf(m, sd, Kf);
  }
  function vn(m, v) {
    var O = m.__data__;
    return Zf(v) ? O[typeof v == "string" ? "string" : "hash"] : O.map;
  }
  function Wt(m, v) {
    var O = vr(m, v);
    return Wf(O) ? O : void 0;
  }
  function Jf(m) {
    var v = Ye.call(m, Ot), O = m[Ot];
    try {
      m[Ot] = void 0;
      var F = !0;
    } catch {
    }
    var Z = ds.call(m);
    return F && (v ? m[Ot] = O : delete m[Ot]), Z;
  }
  var Kf = gs ? function(m) {
    return m == null ? [] : (m = Object(m), Ee(gs(m), function(v) {
      return ms.call(m, v);
    }));
  } : ad, lt = Sr;
  (Di && lt(new Di(new ArrayBuffer(1))) != M || wr && lt(new wr()) != E || Ri && lt(Ri.resolve()) != N || Ni && lt(new Ni()) != se || Fi && lt(new Fi()) != q) && (lt = function(m) {
    var v = Sr(m), O = v == A ? m.constructor : void 0, F = O ? Dt(O) : "";
    if (F)
      switch (F) {
        case mf:
          return M;
        case gf:
          return E;
        case yf:
          return N;
        case Ef:
          return se;
        case vf:
          return q;
      }
    return v;
  });
  function Qf(m, v) {
    return v = v ?? s, !!v && (typeof m == "number" || ue.test(m)) && m > -1 && m % 1 == 0 && m < v;
  }
  function Zf(m) {
    var v = typeof m;
    return v == "string" || v == "number" || v == "symbol" || v == "boolean" ? m !== "__proto__" : m === null;
  }
  function ed(m) {
    return !!fs && fs in m;
  }
  function td(m) {
    var v = m && m.constructor, O = typeof v == "function" && v.prototype || mn;
    return m === O;
  }
  function rd(m) {
    return ds.call(m);
  }
  function Dt(m) {
    if (m != null) {
      try {
        return us.call(m);
      } catch {
      }
      try {
        return m + "";
      } catch {
      }
    }
    return "";
  }
  function Ss(m, v) {
    return m === v || m !== m && v !== v;
  }
  var nd = Es(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Es : function(m) {
    return Ar(m) && Ye.call(m, "callee") && !ms.call(m, "callee");
  }, wn = Array.isArray;
  function id(m) {
    return m != null && bs(m.length) && !As(m);
  }
  var Li = hf || ld;
  function od(m, v) {
    return vs(m, v);
  }
  function As(m) {
    if (!Ts(m))
      return !1;
    var v = Sr(m);
    return v == g || v == _ || v == d || v == x;
  }
  function bs(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= s;
  }
  function Ts(m) {
    var v = typeof m;
    return m != null && (v == "object" || v == "function");
  }
  function Ar(m) {
    return m != null && typeof m == "object";
  }
  var $s = pe ? Ii(pe) : Vf;
  function sd(m) {
    return id(m) ? Hf(m) : zf(m);
  }
  function ad() {
    return [];
  }
  function ld() {
    return !1;
  }
  e.exports = od;
})(ri, ri.exports);
var F_ = ri.exports;
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.DownloadedUpdateHelper = void 0;
cn.createTempUpdateFile = M_;
const x_ = en, L_ = Ue, Ya = F_, xt = $t, Lr = X;
class U_ {
  constructor(t) {
    this.cacheDir = t, this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, this._downloadedFileInfo = null;
  }
  get downloadedFileInfo() {
    return this._downloadedFileInfo;
  }
  get file() {
    return this._file;
  }
  get packageFile() {
    return this._packageFile;
  }
  get cacheDirForPendingUpdate() {
    return Lr.join(this.cacheDir, "pending");
  }
  async validateDownloadedPath(t, r, n, i) {
    if (this.versionInfo != null && this.file === t && this.fileInfo != null)
      return Ya(this.versionInfo, r) && Ya(this.fileInfo.info, n.info) && await (0, xt.pathExists)(t) ? t : null;
    const o = await this.getValidCachedUpdateFile(n, i);
    return o === null ? null : (i.info(`Update has already been downloaded to ${t}).`), this._file = o, o);
  }
  async setDownloadedFile(t, r, n, i, o, s) {
    this._file = t, this._packageFile = r, this.versionInfo = n, this.fileInfo = i, this._downloadedFileInfo = {
      fileName: o,
      sha512: i.info.sha512,
      isAdminRightsRequired: i.info.isAdminRightsRequired === !0
    }, s && await (0, xt.outputJson)(this.getUpdateInfoFile(), this._downloadedFileInfo);
  }
  async clear() {
    this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, await this.cleanCacheDirForPendingUpdate();
  }
  async cleanCacheDirForPendingUpdate() {
    try {
      await (0, xt.emptyDir)(this.cacheDirForPendingUpdate);
    } catch {
    }
  }
  /**
   * Returns "update-info.json" which is created in the update cache directory's "pending" subfolder after the first update is downloaded.  If the update file does not exist then the cache is cleared and recreated.  If the update file exists then its properties are validated.
   * @param fileInfo
   * @param logger
   */
  async getValidCachedUpdateFile(t, r) {
    const n = this.getUpdateInfoFile();
    if (!await (0, xt.pathExists)(n))
      return null;
    let o;
    try {
      o = await (0, xt.readJson)(n);
    } catch (d) {
      let c = "No cached update info available";
      return d.code !== "ENOENT" && (await this.cleanCacheDirForPendingUpdate(), c += ` (error on read: ${d.message})`), r.info(c), null;
    }
    if (!((o == null ? void 0 : o.fileName) !== null))
      return r.warn("Cached update info is corrupted: no fileName, directory for cached update will be cleaned"), await this.cleanCacheDirForPendingUpdate(), null;
    if (t.info.sha512 !== o.sha512)
      return r.info(`Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${o.sha512}, expected: ${t.info.sha512}. Directory for cached update will be cleaned`), await this.cleanCacheDirForPendingUpdate(), null;
    const a = Lr.join(this.cacheDirForPendingUpdate, o.fileName);
    if (!await (0, xt.pathExists)(a))
      return r.info("Cached update file doesn't exist"), null;
    const l = await k_(a);
    return t.info.sha512 !== l ? (r.warn(`Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${l}, expected: ${t.info.sha512}`), await this.cleanCacheDirForPendingUpdate(), null) : (this._downloadedFileInfo = o, a);
  }
  getUpdateInfoFile() {
    return Lr.join(this.cacheDirForPendingUpdate, "update-info.json");
  }
}
cn.DownloadedUpdateHelper = U_;
function k_(e, t = "sha512", r = "base64", n) {
  return new Promise((i, o) => {
    const s = (0, x_.createHash)(t);
    s.on("error", o).setEncoding(r), (0, L_.createReadStream)(e, {
      ...n,
      highWaterMark: 1024 * 1024
      /* better to use more memory but hash faster */
    }).on("error", o).on("end", () => {
      s.end(), i(s.read());
    }).pipe(s, { end: !1 });
  });
}
async function M_(e, t, r) {
  let n = 0, i = Lr.join(t, e);
  for (let o = 0; o < 3; o++)
    try {
      return await (0, xt.unlink)(i), i;
    } catch (s) {
      if (s.code === "ENOENT")
        return i;
      r.warn(`Error on remove temp update file: ${s}`), i = Lr.join(t, `${n++}-${e}`);
    }
  return i;
}
var _i = {}, as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.getAppCacheDir = j_;
const eo = X, B_ = Ke;
function j_() {
  const e = (0, B_.homedir)();
  let t;
  return process.platform === "win32" ? t = process.env.LOCALAPPDATA || eo.join(e, "AppData", "Local") : process.platform === "darwin" ? t = eo.join(e, "Library", "Caches") : t = process.env.XDG_CACHE_HOME || eo.join(e, ".cache"), t;
}
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.ElectronAppAdapter = void 0;
const Xa = X, H_ = as;
class q_ {
  constructor(t = vt.app) {
    this.app = t;
  }
  whenReady() {
    return this.app.whenReady();
  }
  get version() {
    return this.app.getVersion();
  }
  get name() {
    return this.app.getName();
  }
  get isPackaged() {
    return this.app.isPackaged === !0;
  }
  get appUpdateConfigPath() {
    return this.isPackaged ? Xa.join(process.resourcesPath, "app-update.yml") : Xa.join(this.app.getAppPath(), "dev-app-update.yml");
  }
  get userDataPath() {
    return this.app.getPath("userData");
  }
  get baseCachePath() {
    return (0, H_.getAppCacheDir)();
  }
  quit() {
    this.app.quit();
  }
  relaunch() {
    this.app.relaunch();
  }
  onQuit(t) {
    this.app.once("quit", (r, n) => t(n));
  }
}
_i.ElectronAppAdapter = q_;
var zu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ElectronHttpExecutor = e.NET_SESSION_NAME = void 0, e.getNetSession = r;
  const t = he;
  e.NET_SESSION_NAME = "electron-updater";
  function r() {
    return vt.session.fromPartition(e.NET_SESSION_NAME, {
      cache: !1
    });
  }
  class n extends t.HttpExecutor {
    constructor(o) {
      super(), this.proxyLoginCallback = o, this.cachedSession = null;
    }
    async download(o, s, a) {
      return await a.cancellationToken.createPromise((l, d, c) => {
        const f = {
          headers: a.headers || void 0,
          redirect: "manual"
        };
        (0, t.configureRequestUrl)(o, f), (0, t.configureRequestOptions)(f), this.doDownload(f, {
          destination: s,
          options: a,
          onCancel: c,
          callback: (p) => {
            p == null ? l(s) : d(p);
          },
          responseHandler: null
        }, 0);
      });
    }
    createRequest(o, s) {
      o.headers && o.headers.Host && (o.host = o.headers.Host, delete o.headers.Host), this.cachedSession == null && (this.cachedSession = r());
      const a = vt.net.request({
        ...o,
        session: this.cachedSession
      });
      return a.on("response", s), this.proxyLoginCallback != null && a.on("login", this.proxyLoginCallback), a;
    }
    addRedirectHandlers(o, s, a, l, d) {
      o.on("redirect", (c, f, p) => {
        o.abort(), l > this.maxRedirects ? a(this.createMaxRedirectError()) : d(t.HttpExecutor.prepareRedirectUrlOptions(p, s));
      });
    }
  }
  e.ElectronHttpExecutor = n;
})(zu);
var un = {}, Be = {}, G_ = "[object Symbol]", Yu = /[\\^$.*+?()[\]{}|]/g, W_ = RegExp(Yu.source), V_ = typeof Ae == "object" && Ae && Ae.Object === Object && Ae, z_ = typeof self == "object" && self && self.Object === Object && self, Y_ = V_ || z_ || Function("return this")(), X_ = Object.prototype, J_ = X_.toString, Ja = Y_.Symbol, Ka = Ja ? Ja.prototype : void 0, Qa = Ka ? Ka.toString : void 0;
function K_(e) {
  if (typeof e == "string")
    return e;
  if (Z_(e))
    return Qa ? Qa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Q_(e) {
  return !!e && typeof e == "object";
}
function Z_(e) {
  return typeof e == "symbol" || Q_(e) && J_.call(e) == G_;
}
function eS(e) {
  return e == null ? "" : K_(e);
}
function tS(e) {
  return e = eS(e), e && W_.test(e) ? e.replace(Yu, "\\$&") : e;
}
var rS = tS;
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.newBaseUrl = iS;
Be.newUrlFromBase = $o;
Be.getChannelFilename = oS;
Be.blockmapFiles = sS;
const Xu = pr, nS = rS;
function iS(e) {
  const t = new Xu.URL(e);
  return t.pathname.endsWith("/") || (t.pathname += "/"), t;
}
function $o(e, t, r = !1) {
  const n = new Xu.URL(e, t), i = t.search;
  return i != null && i.length !== 0 ? n.search = i : r && (n.search = `noCache=${Date.now().toString(32)}`), n;
}
function oS(e) {
  return `${e}.yml`;
}
function sS(e, t, r) {
  const n = $o(`${e.pathname}.blockmap`, e);
  return [$o(`${e.pathname.replace(new RegExp(nS(r), "g"), t)}.blockmap`, e), n];
}
var ce = {};
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.Provider = void 0;
ce.findFile = cS;
ce.parseUpdateInfo = uS;
ce.getFileList = Ju;
ce.resolveFiles = fS;
const bt = he, aS = ye, Za = Be;
class lS {
  constructor(t) {
    this.runtimeOptions = t, this.requestHeaders = null, this.executor = t.executor;
  }
  get isUseMultipleRangeRequest() {
    return this.runtimeOptions.isUseMultipleRangeRequest !== !1;
  }
  getChannelFilePrefix() {
    if (this.runtimeOptions.platform === "linux") {
      const t = process.env.TEST_UPDATER_ARCH || process.arch;
      return "-linux" + (t === "x64" ? "" : `-${t}`);
    } else
      return this.runtimeOptions.platform === "darwin" ? "-mac" : "";
  }
  // due to historical reasons for windows we use channel name without platform specifier
  getDefaultChannelName() {
    return this.getCustomChannelName("latest");
  }
  getCustomChannelName(t) {
    return `${t}${this.getChannelFilePrefix()}`;
  }
  get fileExtraDownloadHeaders() {
    return null;
  }
  setRequestHeaders(t) {
    this.requestHeaders = t;
  }
  /**
   * Method to perform API request only to resolve update info, but not to download update.
   */
  httpRequest(t, r, n) {
    return this.executor.request(this.createRequestOptions(t, r), n);
  }
  createRequestOptions(t, r) {
    const n = {};
    return this.requestHeaders == null ? r != null && (n.headers = r) : n.headers = r == null ? this.requestHeaders : { ...this.requestHeaders, ...r }, (0, bt.configureRequestUrl)(t, n), n;
  }
}
ce.Provider = lS;
function cS(e, t, r) {
  if (e.length === 0)
    throw (0, bt.newError)("No files provided", "ERR_UPDATER_NO_FILES_PROVIDED");
  const n = e.find((i) => i.url.pathname.toLowerCase().endsWith(`.${t}`));
  return n ?? (r == null ? e[0] : e.find((i) => !r.some((o) => i.url.pathname.toLowerCase().endsWith(`.${o}`))));
}
function uS(e, t, r) {
  if (e == null)
    throw (0, bt.newError)(`Cannot parse update info from ${t} in the latest release artifacts (${r}): rawData: null`, "ERR_UPDATER_INVALID_UPDATE_INFO");
  let n;
  try {
    n = (0, aS.load)(e);
  } catch (i) {
    throw (0, bt.newError)(`Cannot parse update info from ${t} in the latest release artifacts (${r}): ${i.stack || i.message}, rawData: ${e}`, "ERR_UPDATER_INVALID_UPDATE_INFO");
  }
  return n;
}
function Ju(e) {
  const t = e.files;
  if (t != null && t.length > 0)
    return t;
  if (e.path != null)
    return [
      {
        url: e.path,
        sha2: e.sha2,
        sha512: e.sha512
      }
    ];
  throw (0, bt.newError)(`No files provided: ${(0, bt.safeStringifyJson)(e)}`, "ERR_UPDATER_NO_FILES_PROVIDED");
}
function fS(e, t, r = (n) => n) {
  const i = Ju(e).map((a) => {
    if (a.sha2 == null && a.sha512 == null)
      throw (0, bt.newError)(`Update info doesn't contain nor sha256 neither sha512 checksum: ${(0, bt.safeStringifyJson)(a)}`, "ERR_UPDATER_NO_CHECKSUM");
    return {
      url: (0, Za.newUrlFromBase)(r(a.url), t),
      info: a
    };
  }), o = e.packages, s = o == null ? null : o[process.arch] || o.ia32;
  return s != null && (i[0].packageInfo = {
    ...s,
    path: (0, Za.newUrlFromBase)(r(s.path), t).href
  }), i;
}
Object.defineProperty(un, "__esModule", { value: !0 });
un.GenericProvider = void 0;
const el = he, to = Be, ro = ce;
class dS extends ro.Provider {
  constructor(t, r, n) {
    super(n), this.configuration = t, this.updater = r, this.baseUrl = (0, to.newBaseUrl)(this.configuration.url);
  }
  get channel() {
    const t = this.updater.channel || this.configuration.channel;
    return t == null ? this.getDefaultChannelName() : this.getCustomChannelName(t);
  }
  async getLatestVersion() {
    const t = (0, to.getChannelFilename)(this.channel), r = (0, to.newUrlFromBase)(t, this.baseUrl, this.updater.isAddNoCacheQuery);
    for (let n = 0; ; n++)
      try {
        return (0, ro.parseUpdateInfo)(await this.httpRequest(r), t, r);
      } catch (i) {
        if (i instanceof el.HttpError && i.statusCode === 404)
          throw (0, el.newError)(`Cannot find channel "${t}" update info: ${i.stack || i.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
        if (i.code === "ECONNREFUSED" && n < 3) {
          await new Promise((o, s) => {
            try {
              setTimeout(o, 1e3 * n);
            } catch (a) {
              s(a);
            }
          });
          continue;
        }
        throw i;
      }
  }
  resolveFiles(t) {
    return (0, ro.resolveFiles)(t, this.baseUrl);
  }
}
un.GenericProvider = dS;
var Si = {}, Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.BitbucketProvider = void 0;
const tl = he, no = Be, io = ce;
class hS extends io.Provider {
  constructor(t, r, n) {
    super({
      ...n,
      isUseMultipleRangeRequest: !1
    }), this.configuration = t, this.updater = r;
    const { owner: i, slug: o } = t;
    this.baseUrl = (0, no.newBaseUrl)(`https://api.bitbucket.org/2.0/repositories/${i}/${o}/downloads`);
  }
  get channel() {
    return this.updater.channel || this.configuration.channel || "latest";
  }
  async getLatestVersion() {
    const t = new tl.CancellationToken(), r = (0, no.getChannelFilename)(this.getCustomChannelName(this.channel)), n = (0, no.newUrlFromBase)(r, this.baseUrl, this.updater.isAddNoCacheQuery);
    try {
      const i = await this.httpRequest(n, void 0, t);
      return (0, io.parseUpdateInfo)(i, r, n);
    } catch (i) {
      throw (0, tl.newError)(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${i.stack || i.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  resolveFiles(t) {
    return (0, io.resolveFiles)(t, this.baseUrl);
  }
  toString() {
    const { owner: t, slug: r } = this.configuration;
    return `Bitbucket (owner: ${t}, slug: ${r}, channel: ${this.channel})`;
  }
}
Ai.BitbucketProvider = hS;
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.GitHubProvider = Tt.BaseGitHubProvider = void 0;
Tt.computeReleaseNotes = Qu;
const tt = he, or = Vu, pS = pr, sr = Be, Co = ce, oo = /\/tag\/([^/]+)$/;
class Ku extends Co.Provider {
  constructor(t, r, n) {
    super({
      ...n,
      /* because GitHib uses S3 */
      isUseMultipleRangeRequest: !1
    }), this.options = t, this.baseUrl = (0, sr.newBaseUrl)((0, tt.githubUrl)(t, r));
    const i = r === "github.com" ? "api.github.com" : r;
    this.baseApiUrl = (0, sr.newBaseUrl)((0, tt.githubUrl)(t, i));
  }
  computeGithubBasePath(t) {
    const r = this.options.host;
    return r && !["github.com", "api.github.com"].includes(r) ? `/api/v3${t}` : t;
  }
}
Tt.BaseGitHubProvider = Ku;
class mS extends Ku {
  constructor(t, r, n) {
    super(t, "github.com", n), this.options = t, this.updater = r;
  }
  get channel() {
    const t = this.updater.channel || this.options.channel;
    return t == null ? this.getDefaultChannelName() : this.getCustomChannelName(t);
  }
  async getLatestVersion() {
    var t, r, n, i, o;
    const s = new tt.CancellationToken(), a = await this.httpRequest((0, sr.newUrlFromBase)(`${this.basePath}.atom`, this.baseUrl), {
      accept: "application/xml, application/atom+xml, text/xml, */*"
    }, s), l = (0, tt.parseXml)(a);
    let d = l.element("entry", !1, "No published versions on GitHub"), c = null;
    try {
      if (this.updater.allowPrerelease) {
        const S = ((t = this.updater) === null || t === void 0 ? void 0 : t.channel) || ((r = or.prerelease(this.updater.currentVersion)) === null || r === void 0 ? void 0 : r[0]) || null;
        if (S === null)
          c = oo.exec(d.element("link").attribute("href"))[1];
        else
          for (const b of l.getElements("entry")) {
            const A = oo.exec(b.element("link").attribute("href"));
            if (A === null)
              continue;
            const N = A[1], x = ((n = or.prerelease(N)) === null || n === void 0 ? void 0 : n[0]) || null, ee = !S || ["alpha", "beta"].includes(S), se = x !== null && !["alpha", "beta"].includes(String(x));
            if (ee && !se && !(S === "beta" && x === "alpha")) {
              c = N;
              break;
            }
            if (x && x === S) {
              c = N;
              break;
            }
          }
      } else {
        c = await this.getLatestTagName(s);
        for (const S of l.getElements("entry"))
          if (oo.exec(S.element("link").attribute("href"))[1] === c) {
            d = S;
            break;
          }
      }
    } catch (S) {
      throw (0, tt.newError)(`Cannot parse releases feed: ${S.stack || S.message},
XML:
${a}`, "ERR_UPDATER_INVALID_RELEASE_FEED");
    }
    if (c == null)
      throw (0, tt.newError)("No published versions on GitHub", "ERR_UPDATER_NO_PUBLISHED_VERSIONS");
    let f, p = "", g = "";
    const _ = async (S) => {
      p = (0, sr.getChannelFilename)(S), g = (0, sr.newUrlFromBase)(this.getBaseDownloadPath(String(c), p), this.baseUrl);
      const b = this.createRequestOptions(g);
      try {
        return await this.executor.request(b, s);
      } catch (A) {
        throw A instanceof tt.HttpError && A.statusCode === 404 ? (0, tt.newError)(`Cannot find ${p} in the latest release artifacts (${g}): ${A.stack || A.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND") : A;
      }
    };
    try {
      let S = this.channel;
      this.updater.allowPrerelease && (!((i = or.prerelease(c)) === null || i === void 0) && i[0]) && (S = this.getCustomChannelName(String((o = or.prerelease(c)) === null || o === void 0 ? void 0 : o[0]))), f = await _(S);
    } catch (S) {
      if (this.updater.allowPrerelease)
        f = await _(this.getDefaultChannelName());
      else
        throw S;
    }
    const E = (0, Co.parseUpdateInfo)(f, p, g);
    return E.releaseName == null && (E.releaseName = d.elementValueOrEmpty("title")), E.releaseNotes == null && (E.releaseNotes = Qu(this.updater.currentVersion, this.updater.fullChangelog, l, d)), {
      tag: c,
      ...E
    };
  }
  async getLatestTagName(t) {
    const r = this.options, n = r.host == null || r.host === "github.com" ? (0, sr.newUrlFromBase)(`${this.basePath}/latest`, this.baseUrl) : new pS.URL(`${this.computeGithubBasePath(`/repos/${r.owner}/${r.repo}/releases`)}/latest`, this.baseApiUrl);
    try {
      const i = await this.httpRequest(n, { Accept: "application/json" }, t);
      return i == null ? null : JSON.parse(i).tag_name;
    } catch (i) {
      throw (0, tt.newError)(`Unable to find latest version on GitHub (${n}), please ensure a production release exists: ${i.stack || i.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  get basePath() {
    return `/${this.options.owner}/${this.options.repo}/releases`;
  }
  resolveFiles(t) {
    return (0, Co.resolveFiles)(t, this.baseUrl, (r) => this.getBaseDownloadPath(t.tag, r.replace(/ /g, "-")));
  }
  getBaseDownloadPath(t, r) {
    return `${this.basePath}/download/${t}/${r}`;
  }
}
Tt.GitHubProvider = mS;
function rl(e) {
  const t = e.elementValueOrEmpty("content");
  return t === "No content." ? "" : t;
}
function Qu(e, t, r, n) {
  if (!t)
    return rl(n);
  const i = [];
  for (const o of r.getElements("entry")) {
    const s = /\/tag\/v?([^/]+)$/.exec(o.element("link").attribute("href"))[1];
    or.lt(e, s) && i.push({
      version: s,
      note: rl(o)
    });
  }
  return i.sort((o, s) => or.rcompare(o.version, s.version));
}
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.KeygenProvider = void 0;
const nl = he, so = Be, ao = ce;
class gS extends ao.Provider {
  constructor(t, r, n) {
    super({
      ...n,
      isUseMultipleRangeRequest: !1
    }), this.configuration = t, this.updater = r, this.defaultHostname = "api.keygen.sh";
    const i = this.configuration.host || this.defaultHostname;
    this.baseUrl = (0, so.newBaseUrl)(`https://${i}/v1/accounts/${this.configuration.account}/artifacts?product=${this.configuration.product}`);
  }
  get channel() {
    return this.updater.channel || this.configuration.channel || "stable";
  }
  async getLatestVersion() {
    const t = new nl.CancellationToken(), r = (0, so.getChannelFilename)(this.getCustomChannelName(this.channel)), n = (0, so.newUrlFromBase)(r, this.baseUrl, this.updater.isAddNoCacheQuery);
    try {
      const i = await this.httpRequest(n, {
        Accept: "application/vnd.api+json",
        "Keygen-Version": "1.1"
      }, t);
      return (0, ao.parseUpdateInfo)(i, r, n);
    } catch (i) {
      throw (0, nl.newError)(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${i.stack || i.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  resolveFiles(t) {
    return (0, ao.resolveFiles)(t, this.baseUrl);
  }
  toString() {
    const { account: t, product: r, platform: n } = this.configuration;
    return `Keygen (account: ${t}, product: ${r}, platform: ${n}, channel: ${this.channel})`;
  }
}
bi.KeygenProvider = gS;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.PrivateGitHubProvider = void 0;
const Kt = he, yS = ye, ES = X, il = pr, ol = Be, vS = Tt, wS = ce;
class _S extends vS.BaseGitHubProvider {
  constructor(t, r, n, i) {
    super(t, "api.github.com", i), this.updater = r, this.token = n;
  }
  createRequestOptions(t, r) {
    const n = super.createRequestOptions(t, r);
    return n.redirect = "manual", n;
  }
  async getLatestVersion() {
    const t = new Kt.CancellationToken(), r = (0, ol.getChannelFilename)(this.getDefaultChannelName()), n = await this.getLatestVersionInfo(t), i = n.assets.find((a) => a.name === r);
    if (i == null)
      throw (0, Kt.newError)(`Cannot find ${r} in the release ${n.html_url || n.name}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
    const o = new il.URL(i.url);
    let s;
    try {
      s = (0, yS.load)(await this.httpRequest(o, this.configureHeaders("application/octet-stream"), t));
    } catch (a) {
      throw a instanceof Kt.HttpError && a.statusCode === 404 ? (0, Kt.newError)(`Cannot find ${r} in the latest release artifacts (${o}): ${a.stack || a.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND") : a;
    }
    return s.assets = n.assets, s;
  }
  get fileExtraDownloadHeaders() {
    return this.configureHeaders("application/octet-stream");
  }
  configureHeaders(t) {
    return {
      accept: t,
      authorization: `token ${this.token}`
    };
  }
  async getLatestVersionInfo(t) {
    const r = this.updater.allowPrerelease;
    let n = this.basePath;
    r || (n = `${n}/latest`);
    const i = (0, ol.newUrlFromBase)(n, this.baseUrl);
    try {
      const o = JSON.parse(await this.httpRequest(i, this.configureHeaders("application/vnd.github.v3+json"), t));
      return r ? o.find((s) => s.prerelease) || o[0] : o;
    } catch (o) {
      throw (0, Kt.newError)(`Unable to find latest version on GitHub (${i}), please ensure a production release exists: ${o.stack || o.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
    }
  }
  get basePath() {
    return this.computeGithubBasePath(`/repos/${this.options.owner}/${this.options.repo}/releases`);
  }
  resolveFiles(t) {
    return (0, wS.getFileList)(t).map((r) => {
      const n = ES.posix.basename(r.url).replace(/ /g, "-"), i = t.assets.find((o) => o != null && o.name === n);
      if (i == null)
        throw (0, Kt.newError)(`Cannot find asset "${n}" in: ${JSON.stringify(t.assets, null, 2)}`, "ERR_UPDATER_ASSET_NOT_FOUND");
      return {
        url: new il.URL(i.url),
        info: r
      };
    });
  }
}
Ti.PrivateGitHubProvider = _S;
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.isUrlProbablySupportMultiRangeRequests = Zu;
Si.createClient = $S;
const Ln = he, SS = Ai, sl = un, AS = Tt, bS = bi, TS = Ti;
function Zu(e) {
  return !e.includes("s3.amazonaws.com");
}
function $S(e, t, r) {
  if (typeof e == "string")
    throw (0, Ln.newError)("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
  const n = e.provider;
  switch (n) {
    case "github": {
      const i = e, o = (i.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || i.token;
      return o == null ? new AS.GitHubProvider(i, t, r) : new TS.PrivateGitHubProvider(i, t, o, r);
    }
    case "bitbucket":
      return new SS.BitbucketProvider(e, t, r);
    case "keygen":
      return new bS.KeygenProvider(e, t, r);
    case "s3":
    case "spaces":
      return new sl.GenericProvider({
        provider: "generic",
        url: (0, Ln.getS3LikeProviderBaseUrl)(e),
        channel: e.channel || null
      }, t, {
        ...r,
        // https://github.com/minio/minio/issues/5285#issuecomment-350428955
        isUseMultipleRangeRequest: !1
      });
    case "generic": {
      const i = e;
      return new sl.GenericProvider(i, t, {
        ...r,
        isUseMultipleRangeRequest: i.useMultipleRangeRequest !== !1 && Zu(i.url)
      });
    }
    case "custom": {
      const i = e, o = i.updateProvider;
      if (!o)
        throw (0, Ln.newError)("Custom provider not specified", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
      return new o(i, t, r);
    }
    default:
      throw (0, Ln.newError)(`Unsupported provider: ${n}`, "ERR_UPDATER_UNSUPPORTED_PROVIDER");
  }
}
var $i = {}, fn = {}, Er = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.OperationKind = void 0;
Gt.computeOperations = CS;
var kt;
(function(e) {
  e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD";
})(kt || (Gt.OperationKind = kt = {}));
function CS(e, t, r) {
  const n = ll(e.files), i = ll(t.files);
  let o = null;
  const s = t.files[0], a = [], l = s.name, d = n.get(l);
  if (d == null)
    throw new Error(`no file ${l} in old blockmap`);
  const c = i.get(l);
  let f = 0;
  const { checksumToOffset: p, checksumToOldSize: g } = IS(n.get(l), d.offset, r);
  let _ = s.offset;
  for (let E = 0; E < c.checksums.length; _ += c.sizes[E], E++) {
    const S = c.sizes[E], b = c.checksums[E];
    let A = p.get(b);
    A != null && g.get(b) !== S && (r.warn(`Checksum ("${b}") matches, but size differs (old: ${g.get(b)}, new: ${S})`), A = void 0), A === void 0 ? (f++, o != null && o.kind === kt.DOWNLOAD && o.end === _ ? o.end += S : (o = {
      kind: kt.DOWNLOAD,
      start: _,
      end: _ + S
      // oldBlocks: null,
    }, al(o, a, b, E))) : o != null && o.kind === kt.COPY && o.end === A ? o.end += S : (o = {
      kind: kt.COPY,
      start: A,
      end: A + S
      // oldBlocks: [checksum]
    }, al(o, a, b, E));
  }
  return f > 0 && r.info(`File${s.name === "file" ? "" : " " + s.name} has ${f} changed blocks`), a;
}
const OS = process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES === "true";
function al(e, t, r, n) {
  if (OS && t.length !== 0) {
    const i = t[t.length - 1];
    if (i.kind === e.kind && e.start < i.end && e.start > i.start) {
      const o = [i.start, i.end, e.start, e.end].reduce((s, a) => s < a ? s : a);
      throw new Error(`operation (block index: ${n}, checksum: ${r}, kind: ${kt[e.kind]}) overlaps previous operation (checksum: ${r}):
abs: ${i.start} until ${i.end} and ${e.start} until ${e.end}
rel: ${i.start - o} until ${i.end - o} and ${e.start - o} until ${e.end - o}`);
    }
  }
  t.push(e);
}
function IS(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let o = t;
  for (let s = 0; s < e.checksums.length; s++) {
    const a = e.checksums[s], l = e.sizes[s], d = i.get(a);
    if (d === void 0)
      n.set(a, o), i.set(a, l);
    else if (r.debug != null) {
      const c = d === l ? "(same size)" : `(size: ${d}, this size: ${l})`;
      r.debug(`${a} duplicated in blockmap ${c}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`);
    }
    o += l;
  }
  return { checksumToOffset: n, checksumToOldSize: i };
}
function ll(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    t.set(r.name, r);
  return t;
}
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.DataSplitter = void 0;
Er.copyData = ef;
const Un = he, PS = Ue, DS = Zr, RS = Gt, cl = Buffer.from(`\r
\r
`);
var dt;
(function(e) {
  e[e.INIT = 0] = "INIT", e[e.HEADER = 1] = "HEADER", e[e.BODY = 2] = "BODY";
})(dt || (dt = {}));
function ef(e, t, r, n, i) {
  const o = (0, PS.createReadStream)("", {
    fd: r,
    autoClose: !1,
    start: e.start,
    // end is inclusive
    end: e.end - 1
  });
  o.on("error", n), o.once("end", i), o.pipe(t, {
    end: !1
  });
}
class NS extends DS.Writable {
  constructor(t, r, n, i, o, s) {
    super(), this.out = t, this.options = r, this.partIndexToTaskIndex = n, this.partIndexToLength = o, this.finishHandler = s, this.partIndex = -1, this.headerListBuffer = null, this.readState = dt.INIT, this.ignoreByteCount = 0, this.remainingPartDataCount = 0, this.actualPartLength = 0, this.boundaryLength = i.length + 4, this.ignoreByteCount = this.boundaryLength - 2;
  }
  get isFinished() {
    return this.partIndex === this.partIndexToLength.length;
  }
  // noinspection JSUnusedGlobalSymbols
  _write(t, r, n) {
    if (this.isFinished) {
      console.error(`Trailing ignored data: ${t.length} bytes`);
      return;
    }
    this.handleData(t).then(n).catch(n);
  }
  async handleData(t) {
    let r = 0;
    if (this.ignoreByteCount !== 0 && this.remainingPartDataCount !== 0)
      throw (0, Un.newError)("Internal error", "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH");
    if (this.ignoreByteCount > 0) {
      const n = Math.min(this.ignoreByteCount, t.length);
      this.ignoreByteCount -= n, r = n;
    } else if (this.remainingPartDataCount > 0) {
      const n = Math.min(this.remainingPartDataCount, t.length);
      this.remainingPartDataCount -= n, await this.processPartData(t, 0, n), r = n;
    }
    if (r !== t.length) {
      if (this.readState === dt.HEADER) {
        const n = this.searchHeaderListEnd(t, r);
        if (n === -1)
          return;
        r = n, this.readState = dt.BODY, this.headerListBuffer = null;
      }
      for (; ; ) {
        if (this.readState === dt.BODY)
          this.readState = dt.INIT;
        else {
          this.partIndex++;
          let s = this.partIndexToTaskIndex.get(this.partIndex);
          if (s == null)
            if (this.isFinished)
              s = this.options.end;
            else
              throw (0, Un.newError)("taskIndex is null", "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL");
          const a = this.partIndex === 0 ? this.options.start : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
          if (a < s)
            await this.copyExistingData(a, s);
          else if (a > s)
            throw (0, Un.newError)("prevTaskIndex must be < taskIndex", "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED");
          if (this.isFinished) {
            this.onPartEnd(), this.finishHandler();
            return;
          }
          if (r = this.searchHeaderListEnd(t, r), r === -1) {
            this.readState = dt.HEADER;
            return;
          }
        }
        const n = this.partIndexToLength[this.partIndex], i = r + n, o = Math.min(i, t.length);
        if (await this.processPartStarted(t, r, o), this.remainingPartDataCount = n - (o - r), this.remainingPartDataCount > 0)
          return;
        if (r = i + this.boundaryLength, r >= t.length) {
          this.ignoreByteCount = this.boundaryLength - (t.length - i);
          return;
        }
      }
    }
  }
  copyExistingData(t, r) {
    return new Promise((n, i) => {
      const o = () => {
        if (t === r) {
          n();
          return;
        }
        const s = this.options.tasks[t];
        if (s.kind !== RS.OperationKind.COPY) {
          i(new Error("Task kind must be COPY"));
          return;
        }
        ef(s, this.out, this.options.oldFileFd, i, () => {
          t++, o();
        });
      };
      o();
    });
  }
  searchHeaderListEnd(t, r) {
    const n = t.indexOf(cl, r);
    if (n !== -1)
      return n + cl.length;
    const i = r === 0 ? t : t.slice(r);
    return this.headerListBuffer == null ? this.headerListBuffer = i : this.headerListBuffer = Buffer.concat([this.headerListBuffer, i]), -1;
  }
  onPartEnd() {
    const t = this.partIndexToLength[this.partIndex - 1];
    if (this.actualPartLength !== t)
      throw (0, Un.newError)(`Expected length: ${t} differs from actual: ${this.actualPartLength}`, "ERR_DATA_SPLITTER_LENGTH_MISMATCH");
    this.actualPartLength = 0;
  }
  processPartStarted(t, r, n) {
    return this.partIndex !== 0 && this.onPartEnd(), this.processPartData(t, r, n);
  }
  processPartData(t, r, n) {
    this.actualPartLength += n - r;
    const i = this.out;
    return i.write(r === 0 && t.length === n ? t : t.slice(r, n)) ? Promise.resolve() : new Promise((o, s) => {
      i.on("error", s), i.once("drain", () => {
        i.removeListener("error", s), o();
      });
    });
  }
}
Er.DataSplitter = NS;
var Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.executeTasksUsingMultipleRangeRequests = FS;
Ci.checkIsRangesSupported = Io;
const Oo = he, ul = Er, fl = Gt;
function FS(e, t, r, n, i) {
  const o = (s) => {
    if (s >= t.length) {
      e.fileMetadataBuffer != null && r.write(e.fileMetadataBuffer), r.end();
      return;
    }
    const a = s + 1e3;
    xS(e, {
      tasks: t,
      start: s,
      end: Math.min(t.length, a),
      oldFileFd: n
    }, r, () => o(a), i);
  };
  return o;
}
function xS(e, t, r, n, i) {
  let o = "bytes=", s = 0;
  const a = /* @__PURE__ */ new Map(), l = [];
  for (let f = t.start; f < t.end; f++) {
    const p = t.tasks[f];
    p.kind === fl.OperationKind.DOWNLOAD && (o += `${p.start}-${p.end - 1}, `, a.set(s, f), s++, l.push(p.end - p.start));
  }
  if (s <= 1) {
    const f = (p) => {
      if (p >= t.end) {
        n();
        return;
      }
      const g = t.tasks[p++];
      if (g.kind === fl.OperationKind.COPY)
        (0, ul.copyData)(g, r, t.oldFileFd, i, () => f(p));
      else {
        const _ = e.createRequestOptions();
        _.headers.Range = `bytes=${g.start}-${g.end - 1}`;
        const E = e.httpExecutor.createRequest(_, (S) => {
          Io(S, i) && (S.pipe(r, {
            end: !1
          }), S.once("end", () => f(p)));
        });
        e.httpExecutor.addErrorAndTimeoutHandlers(E, i), E.end();
      }
    };
    f(t.start);
    return;
  }
  const d = e.createRequestOptions();
  d.headers.Range = o.substring(0, o.length - 2);
  const c = e.httpExecutor.createRequest(d, (f) => {
    if (!Io(f, i))
      return;
    const p = (0, Oo.safeGetHeader)(f, "content-type"), g = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i.exec(p);
    if (g == null) {
      i(new Error(`Content-Type "multipart/byteranges" is expected, but got "${p}"`));
      return;
    }
    const _ = new ul.DataSplitter(r, t, a, g[1] || g[2], l, n);
    _.on("error", i), f.pipe(_), f.on("end", () => {
      setTimeout(() => {
        c.abort(), i(new Error("Response ends without calling any handlers"));
      }, 1e4);
    });
  });
  e.httpExecutor.addErrorAndTimeoutHandlers(c, i), c.end();
}
function Io(e, t) {
  if (e.statusCode >= 400)
    return t((0, Oo.createHttpError)(e)), !1;
  if (e.statusCode !== 206) {
    const r = (0, Oo.safeGetHeader)(e, "accept-ranges");
    if (r == null || r === "none")
      return t(new Error(`Server doesn't support Accept-Ranges (response code ${e.statusCode})`)), !1;
  }
  return !0;
}
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.ProgressDifferentialDownloadCallbackTransform = void 0;
const LS = Zr;
var ar;
(function(e) {
  e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD";
})(ar || (ar = {}));
class US extends LS.Transform {
  constructor(t, r, n) {
    super(), this.progressDifferentialDownloadInfo = t, this.cancellationToken = r, this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.expectedBytes = 0, this.index = 0, this.operationType = ar.COPY, this.nextUpdate = this.start + 1e3;
  }
  _transform(t, r, n) {
    if (this.cancellationToken.cancelled) {
      n(new Error("cancelled"), null);
      return;
    }
    if (this.operationType == ar.COPY) {
      n(null, t);
      return;
    }
    this.transferred += t.length, this.delta += t.length;
    const i = Date.now();
    i >= this.nextUpdate && this.transferred !== this.expectedBytes && this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && (this.nextUpdate = i + 1e3, this.onProgress({
      total: this.progressDifferentialDownloadInfo.grandTotal,
      delta: this.delta,
      transferred: this.transferred,
      percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
      bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
    }), this.delta = 0), n(null, t);
  }
  beginFileCopy() {
    this.operationType = ar.COPY;
  }
  beginRangeDownload() {
    this.operationType = ar.DOWNLOAD, this.expectedBytes += this.progressDifferentialDownloadInfo.expectedByteCounts[this.index++];
  }
  endRangeDownload() {
    this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && this.onProgress({
      total: this.progressDifferentialDownloadInfo.grandTotal,
      delta: this.delta,
      transferred: this.transferred,
      percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
      bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
    });
  }
  // Called when we are 100% done with the connection/download
  _flush(t) {
    if (this.cancellationToken.cancelled) {
      t(new Error("cancelled"));
      return;
    }
    this.onProgress({
      total: this.progressDifferentialDownloadInfo.grandTotal,
      delta: this.delta,
      transferred: this.transferred,
      percent: 100,
      bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
    }), this.delta = 0, this.transferred = 0, t(null);
  }
}
Oi.ProgressDifferentialDownloadCallbackTransform = US;
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.DifferentialDownloader = void 0;
const Or = he, lo = $t, kS = Ue, MS = Er, BS = pr, kn = Gt, dl = Ci, jS = Oi;
class HS {
  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(t, r, n) {
    this.blockAwareFileInfo = t, this.httpExecutor = r, this.options = n, this.fileMetadataBuffer = null, this.logger = n.logger;
  }
  createRequestOptions() {
    const t = {
      headers: {
        ...this.options.requestHeaders,
        accept: "*/*"
      }
    };
    return (0, Or.configureRequestUrl)(this.options.newUrl, t), (0, Or.configureRequestOptions)(t), t;
  }
  doDownload(t, r) {
    if (t.version !== r.version)
      throw new Error(`version is different (${t.version} - ${r.version}), full download is required`);
    const n = this.logger, i = (0, kn.computeOperations)(t, r, n);
    n.debug != null && n.debug(JSON.stringify(i, null, 2));
    let o = 0, s = 0;
    for (const l of i) {
      const d = l.end - l.start;
      l.kind === kn.OperationKind.DOWNLOAD ? o += d : s += d;
    }
    const a = this.blockAwareFileInfo.size;
    if (o + s + (this.fileMetadataBuffer == null ? 0 : this.fileMetadataBuffer.length) !== a)
      throw new Error(`Internal error, size mismatch: downloadSize: ${o}, copySize: ${s}, newSize: ${a}`);
    return n.info(`Full: ${hl(a)}, To download: ${hl(o)} (${Math.round(o / (a / 100))}%)`), this.downloadFile(i);
  }
  downloadFile(t) {
    const r = [], n = () => Promise.all(r.map((i) => (0, lo.close)(i.descriptor).catch((o) => {
      this.logger.error(`cannot close file "${i.path}": ${o}`);
    })));
    return this.doDownloadFile(t, r).then(n).catch((i) => n().catch((o) => {
      try {
        this.logger.error(`cannot close files: ${o}`);
      } catch (s) {
        try {
          console.error(s);
        } catch {
        }
      }
      throw i;
    }).then(() => {
      throw i;
    }));
  }
  async doDownloadFile(t, r) {
    const n = await (0, lo.open)(this.options.oldFile, "r");
    r.push({ descriptor: n, path: this.options.oldFile });
    const i = await (0, lo.open)(this.options.newFile, "w");
    r.push({ descriptor: i, path: this.options.newFile });
    const o = (0, kS.createWriteStream)(this.options.newFile, { fd: i });
    await new Promise((s, a) => {
      const l = [];
      let d;
      if (!this.options.isUseMultipleRangeRequest && this.options.onProgress) {
        const b = [];
        let A = 0;
        for (const x of t)
          x.kind === kn.OperationKind.DOWNLOAD && (b.push(x.end - x.start), A += x.end - x.start);
        const N = {
          expectedByteCounts: b,
          grandTotal: A
        };
        d = new jS.ProgressDifferentialDownloadCallbackTransform(N, this.options.cancellationToken, this.options.onProgress), l.push(d);
      }
      const c = new Or.DigestTransform(this.blockAwareFileInfo.sha512);
      c.isValidateOnEnd = !1, l.push(c), o.on("finish", () => {
        o.close(() => {
          r.splice(1, 1);
          try {
            c.validate();
          } catch (b) {
            a(b);
            return;
          }
          s(void 0);
        });
      }), l.push(o);
      let f = null;
      for (const b of l)
        b.on("error", a), f == null ? f = b : f = f.pipe(b);
      const p = l[0];
      let g;
      if (this.options.isUseMultipleRangeRequest) {
        g = (0, dl.executeTasksUsingMultipleRangeRequests)(this, t, p, n, a), g(0);
        return;
      }
      let _ = 0, E = null;
      this.logger.info(`Differential download: ${this.options.newUrl}`);
      const S = this.createRequestOptions();
      S.redirect = "manual", g = (b) => {
        var A, N;
        if (b >= t.length) {
          this.fileMetadataBuffer != null && p.write(this.fileMetadataBuffer), p.end();
          return;
        }
        const x = t[b++];
        if (x.kind === kn.OperationKind.COPY) {
          d && d.beginFileCopy(), (0, MS.copyData)(x, p, n, a, () => g(b));
          return;
        }
        const ee = `bytes=${x.start}-${x.end - 1}`;
        S.headers.range = ee, (N = (A = this.logger) === null || A === void 0 ? void 0 : A.debug) === null || N === void 0 || N.call(A, `download range: ${ee}`), d && d.beginRangeDownload();
        const se = this.httpExecutor.createRequest(S, (z) => {
          z.on("error", a), z.on("aborted", () => {
            a(new Error("response has been aborted by the server"));
          }), z.statusCode >= 400 && a((0, Or.createHttpError)(z)), z.pipe(p, {
            end: !1
          }), z.once("end", () => {
            d && d.endRangeDownload(), ++_ === 100 ? (_ = 0, setTimeout(() => g(b), 1e3)) : g(b);
          });
        });
        se.on("redirect", (z, Ne, y) => {
          this.logger.info(`Redirect to ${qS(y)}`), E = y, (0, Or.configureRequestUrl)(new BS.URL(E), S), se.followRedirect();
        }), this.httpExecutor.addErrorAndTimeoutHandlers(se, a), se.end();
      }, g(0);
    });
  }
  async readRemoteBytes(t, r) {
    const n = Buffer.allocUnsafe(r + 1 - t), i = this.createRequestOptions();
    i.headers.range = `bytes=${t}-${r}`;
    let o = 0;
    if (await this.request(i, (s) => {
      s.copy(n, o), o += s.length;
    }), o !== n.length)
      throw new Error(`Received data length ${o} is not equal to expected ${n.length}`);
    return n;
  }
  request(t, r) {
    return new Promise((n, i) => {
      const o = this.httpExecutor.createRequest(t, (s) => {
        (0, dl.checkIsRangesSupported)(s, i) && (s.on("error", i), s.on("aborted", () => {
          i(new Error("response has been aborted by the server"));
        }), s.on("data", r), s.on("end", () => n()));
      });
      this.httpExecutor.addErrorAndTimeoutHandlers(o, i), o.end();
    });
  }
}
fn.DifferentialDownloader = HS;
function hl(e, t = " KB") {
  return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t;
}
function qS(e) {
  const t = e.indexOf("?");
  return t < 0 ? e : e.substring(0, t);
}
Object.defineProperty($i, "__esModule", { value: !0 });
$i.GenericDifferentialDownloader = void 0;
const GS = fn;
class WS extends GS.DifferentialDownloader {
  download(t, r) {
    return this.doDownload(t, r);
  }
}
$i.GenericDifferentialDownloader = WS;
var Ct = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.UpdaterSignal = e.UPDATE_DOWNLOADED = e.DOWNLOAD_PROGRESS = e.CancellationToken = void 0, e.addHandler = n;
  const t = he;
  Object.defineProperty(e, "CancellationToken", { enumerable: !0, get: function() {
    return t.CancellationToken;
  } }), e.DOWNLOAD_PROGRESS = "download-progress", e.UPDATE_DOWNLOADED = "update-downloaded";
  class r {
    constructor(o) {
      this.emitter = o;
    }
    /**
     * Emitted when an authenticating proxy is [asking for user credentials](https://github.com/electron/electron/blob/master/docs/api/client-request.md#event-login).
     */
    login(o) {
      n(this.emitter, "login", o);
    }
    progress(o) {
      n(this.emitter, e.DOWNLOAD_PROGRESS, o);
    }
    updateDownloaded(o) {
      n(this.emitter, e.UPDATE_DOWNLOADED, o);
    }
    updateCancelled(o) {
      n(this.emitter, "update-cancelled", o);
    }
  }
  e.UpdaterSignal = r;
  function n(i, o, s) {
    i.on(o, s);
  }
})(Ct);
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.NoOpLogger = _t.AppUpdater = void 0;
const Se = he, VS = en, zS = Ke, YS = ii, Qt = $t, XS = ye, co = mi, Ft = X, Lt = Vu, pl = cn, JS = _i, ml = zu, KS = un, uo = Si, QS = Ml, ZS = Be, eA = $i, Zt = Ct;
class ls extends YS.EventEmitter {
  /**
   * Get the update channel. Doesn't return `channel` from the update configuration, only if was previously set.
   */
  get channel() {
    return this._channel;
  }
  /**
   * Set the update channel. Overrides `channel` in the update configuration.
   *
   * `allowDowngrade` will be automatically set to `true`. If this behavior is not suitable for you, simple set `allowDowngrade` explicitly after.
   */
  set channel(t) {
    if (this._channel != null) {
      if (typeof t != "string")
        throw (0, Se.newError)(`Channel must be a string, but got: ${t}`, "ERR_UPDATER_INVALID_CHANNEL");
      if (t.length === 0)
        throw (0, Se.newError)("Channel must be not an empty string", "ERR_UPDATER_INVALID_CHANNEL");
    }
    this._channel = t, this.allowDowngrade = !0;
  }
  /**
   *  Shortcut for explicitly adding auth tokens to request headers
   */
  addAuthHeader(t) {
    this.requestHeaders = Object.assign({}, this.requestHeaders, {
      authorization: t
    });
  }
  // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
  get netSession() {
    return (0, ml.getNetSession)();
  }
  /**
   * The logger. You can pass [electron-log](https://github.com/megahertz/electron-log), [winston](https://github.com/winstonjs/winston) or another logger with the following interface: `{ info(), warn(), error() }`.
   * Set it to `null` if you would like to disable a logging feature.
   */
  get logger() {
    return this._logger;
  }
  set logger(t) {
    this._logger = t ?? new tf();
  }
  // noinspection JSUnusedGlobalSymbols
  /**
   * test only
   * @private
   */
  set updateConfigPath(t) {
    this.clientPromise = null, this._appUpdateConfigPath = t, this.configOnDisk = new co.Lazy(() => this.loadUpdateConfig());
  }
  /**
   * Allows developer to override default logic for determining if an update is supported.
   * The default logic compares the `UpdateInfo` minimum system version against the `os.release()` with `semver` package
   */
  get isUpdateSupported() {
    return this._isUpdateSupported;
  }
  set isUpdateSupported(t) {
    t && (this._isUpdateSupported = t);
  }
  constructor(t, r) {
    super(), this.autoDownload = !0, this.autoInstallOnAppQuit = !0, this.autoRunAppAfterInstall = !0, this.allowPrerelease = !1, this.fullChangelog = !1, this.allowDowngrade = !1, this.disableWebInstaller = !1, this.disableDifferentialDownload = !1, this.forceDevUpdateConfig = !1, this._channel = null, this.downloadedUpdateHelper = null, this.requestHeaders = null, this._logger = console, this.signals = new Zt.UpdaterSignal(this), this._appUpdateConfigPath = null, this._isUpdateSupported = (o) => this.checkIfUpdateSupported(o), this.clientPromise = null, this.stagingUserIdPromise = new co.Lazy(() => this.getOrCreateStagingUserId()), this.configOnDisk = new co.Lazy(() => this.loadUpdateConfig()), this.checkForUpdatesPromise = null, this.downloadPromise = null, this.updateInfoAndProvider = null, this._testOnlyOptions = null, this.on("error", (o) => {
      this._logger.error(`Error: ${o.stack || o.message}`);
    }), r == null ? (this.app = new JS.ElectronAppAdapter(), this.httpExecutor = new ml.ElectronHttpExecutor((o, s) => this.emit("login", o, s))) : (this.app = r, this.httpExecutor = null);
    const n = this.app.version, i = (0, Lt.parse)(n);
    if (i == null)
      throw (0, Se.newError)(`App version is not a valid semver version: "${n}"`, "ERR_UPDATER_INVALID_VERSION");
    this.currentVersion = i, this.allowPrerelease = tA(i), t != null && (this.setFeedURL(t), typeof t != "string" && t.requestHeaders && (this.requestHeaders = t.requestHeaders));
  }
  //noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
  getFeedURL() {
    return "Deprecated. Do not use it.";
  }
  /**
   * Configure update provider. If value is `string`, [GenericServerOptions](./publish.md#genericserveroptions) will be set with value as `url`.
   * @param options If you want to override configuration in the `app-update.yml`.
   */
  setFeedURL(t) {
    const r = this.createProviderRuntimeOptions();
    let n;
    typeof t == "string" ? n = new KS.GenericProvider({ provider: "generic", url: t }, this, {
      ...r,
      isUseMultipleRangeRequest: (0, uo.isUrlProbablySupportMultiRangeRequests)(t)
    }) : n = (0, uo.createClient)(t, this, r), this.clientPromise = Promise.resolve(n);
  }
  /**
   * Asks the server whether there is an update.
   * @returns null if the updater is disabled, otherwise info about the latest version
   */
  checkForUpdates() {
    if (!this.isUpdaterActive())
      return Promise.resolve(null);
    let t = this.checkForUpdatesPromise;
    if (t != null)
      return this._logger.info("Checking for update (already in progress)"), t;
    const r = () => this.checkForUpdatesPromise = null;
    return this._logger.info("Checking for update"), t = this.doCheckForUpdates().then((n) => (r(), n)).catch((n) => {
      throw r(), this.emit("error", n, `Cannot check for updates: ${(n.stack || n).toString()}`), n;
    }), this.checkForUpdatesPromise = t, t;
  }
  isUpdaterActive() {
    return this.app.isPackaged || this.forceDevUpdateConfig ? !0 : (this._logger.info("Skip checkForUpdates because application is not packed and dev update config is not forced"), !1);
  }
  // noinspection JSUnusedGlobalSymbols
  checkForUpdatesAndNotify(t) {
    return this.checkForUpdates().then((r) => r != null && r.downloadPromise ? (r.downloadPromise.then(() => {
      const n = ls.formatDownloadNotification(r.updateInfo.version, this.app.name, t);
      new vt.Notification(n).show();
    }), r) : (this._logger.debug != null && this._logger.debug("checkForUpdatesAndNotify called, downloadPromise is null"), r));
  }
  static formatDownloadNotification(t, r, n) {
    return n == null && (n = {
      title: "A new update is ready to install",
      body: "{appName} version {version} has been downloaded and will be automatically installed on exit"
    }), n = {
      title: n.title.replace("{appName}", r).replace("{version}", t),
      body: n.body.replace("{appName}", r).replace("{version}", t)
    }, n;
  }
  async isStagingMatch(t) {
    const r = t.stagingPercentage;
    let n = r;
    if (n == null)
      return !0;
    if (n = parseInt(n, 10), isNaN(n))
      return this._logger.warn(`Staging percentage is NaN: ${r}`), !0;
    n = n / 100;
    const i = await this.stagingUserIdPromise.value, s = Se.UUID.parse(i).readUInt32BE(12) / 4294967295;
    return this._logger.info(`Staging percentage: ${n}, percentage: ${s}, user id: ${i}`), s < n;
  }
  computeFinalHeaders(t) {
    return this.requestHeaders != null && Object.assign(t, this.requestHeaders), t;
  }
  async isUpdateAvailable(t) {
    const r = (0, Lt.parse)(t.version);
    if (r == null)
      throw (0, Se.newError)(`This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${t.version}"`, "ERR_UPDATER_INVALID_VERSION");
    const n = this.currentVersion;
    if ((0, Lt.eq)(r, n) || !await Promise.resolve(this.isUpdateSupported(t)) || !await this.isStagingMatch(t))
      return !1;
    const o = (0, Lt.gt)(r, n), s = (0, Lt.lt)(r, n);
    return o ? !0 : this.allowDowngrade && s;
  }
  checkIfUpdateSupported(t) {
    const r = t == null ? void 0 : t.minimumSystemVersion, n = (0, zS.release)();
    if (r)
      try {
        if ((0, Lt.lt)(n, r))
          return this._logger.info(`Current OS version ${n} is less than the minimum OS version required ${r} for version ${n}`), !1;
      } catch (i) {
        this._logger.warn(`Failed to compare current OS version(${n}) with minimum OS version(${r}): ${(i.message || i).toString()}`);
      }
    return !0;
  }
  async getUpdateInfoAndProvider() {
    await this.app.whenReady(), this.clientPromise == null && (this.clientPromise = this.configOnDisk.value.then((n) => (0, uo.createClient)(n, this, this.createProviderRuntimeOptions())));
    const t = await this.clientPromise, r = await this.stagingUserIdPromise.value;
    return t.setRequestHeaders(this.computeFinalHeaders({ "x-user-staging-id": r })), {
      info: await t.getLatestVersion(),
      provider: t
    };
  }
  createProviderRuntimeOptions() {
    return {
      isUseMultipleRangeRequest: !0,
      platform: this._testOnlyOptions == null ? process.platform : this._testOnlyOptions.platform,
      executor: this.httpExecutor
    };
  }
  async doCheckForUpdates() {
    this.emit("checking-for-update");
    const t = await this.getUpdateInfoAndProvider(), r = t.info;
    if (!await this.isUpdateAvailable(r))
      return this._logger.info(`Update for version ${this.currentVersion.format()} is not available (latest version: ${r.version}, downgrade is ${this.allowDowngrade ? "allowed" : "disallowed"}).`), this.emit("update-not-available", r), {
        isUpdateAvailable: !1,
        versionInfo: r,
        updateInfo: r
      };
    this.updateInfoAndProvider = t, this.onUpdateAvailable(r);
    const n = new Se.CancellationToken();
    return {
      isUpdateAvailable: !0,
      versionInfo: r,
      updateInfo: r,
      cancellationToken: n,
      downloadPromise: this.autoDownload ? this.downloadUpdate(n) : null
    };
  }
  onUpdateAvailable(t) {
    this._logger.info(`Found version ${t.version} (url: ${(0, Se.asArray)(t.files).map((r) => r.url).join(", ")})`), this.emit("update-available", t);
  }
  /**
   * Start downloading update manually. You can use this method if `autoDownload` option is set to `false`.
   * @returns {Promise<Array<string>>} Paths to downloaded files.
   */
  downloadUpdate(t = new Se.CancellationToken()) {
    const r = this.updateInfoAndProvider;
    if (r == null) {
      const i = new Error("Please check update first");
      return this.dispatchError(i), Promise.reject(i);
    }
    if (this.downloadPromise != null)
      return this._logger.info("Downloading update (already in progress)"), this.downloadPromise;
    this._logger.info(`Downloading update from ${(0, Se.asArray)(r.info.files).map((i) => i.url).join(", ")}`);
    const n = (i) => {
      if (!(i instanceof Se.CancellationError))
        try {
          this.dispatchError(i);
        } catch (o) {
          this._logger.warn(`Cannot dispatch error event: ${o.stack || o}`);
        }
      return i;
    };
    return this.downloadPromise = this.doDownloadUpdate({
      updateInfoAndProvider: r,
      requestHeaders: this.computeRequestHeaders(r.provider),
      cancellationToken: t,
      disableWebInstaller: this.disableWebInstaller,
      disableDifferentialDownload: this.disableDifferentialDownload
    }).catch((i) => {
      throw n(i);
    }).finally(() => {
      this.downloadPromise = null;
    }), this.downloadPromise;
  }
  dispatchError(t) {
    this.emit("error", t, (t.stack || t).toString());
  }
  dispatchUpdateDownloaded(t) {
    this.emit(Zt.UPDATE_DOWNLOADED, t);
  }
  async loadUpdateConfig() {
    return this._appUpdateConfigPath == null && (this._appUpdateConfigPath = this.app.appUpdateConfigPath), (0, XS.load)(await (0, Qt.readFile)(this._appUpdateConfigPath, "utf-8"));
  }
  computeRequestHeaders(t) {
    const r = t.fileExtraDownloadHeaders;
    if (r != null) {
      const n = this.requestHeaders;
      return n == null ? r : {
        ...r,
        ...n
      };
    }
    return this.computeFinalHeaders({ accept: "*/*" });
  }
  async getOrCreateStagingUserId() {
    const t = Ft.join(this.app.userDataPath, ".updaterId");
    try {
      const n = await (0, Qt.readFile)(t, "utf-8");
      if (Se.UUID.check(n))
        return n;
      this._logger.warn(`Staging user id file exists, but content was invalid: ${n}`);
    } catch (n) {
      n.code !== "ENOENT" && this._logger.warn(`Couldn't read staging user ID, creating a blank one: ${n}`);
    }
    const r = Se.UUID.v5((0, VS.randomBytes)(4096), Se.UUID.OID);
    this._logger.info(`Generated new staging user ID: ${r}`);
    try {
      await (0, Qt.outputFile)(t, r);
    } catch (n) {
      this._logger.warn(`Couldn't write out staging user ID: ${n}`);
    }
    return r;
  }
  /** @internal */
  get isAddNoCacheQuery() {
    const t = this.requestHeaders;
    if (t == null)
      return !0;
    for (const r of Object.keys(t)) {
      const n = r.toLowerCase();
      if (n === "authorization" || n === "private-token")
        return !1;
    }
    return !0;
  }
  async getOrCreateDownloadHelper() {
    let t = this.downloadedUpdateHelper;
    if (t == null) {
      const r = (await this.configOnDisk.value).updaterCacheDirName, n = this._logger;
      r == null && n.error("updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?");
      const i = Ft.join(this.app.baseCachePath, r || this.app.name);
      n.debug != null && n.debug(`updater cache dir: ${i}`), t = new pl.DownloadedUpdateHelper(i), this.downloadedUpdateHelper = t;
    }
    return t;
  }
  async executeDownload(t) {
    const r = t.fileInfo, n = {
      headers: t.downloadUpdateOptions.requestHeaders,
      cancellationToken: t.downloadUpdateOptions.cancellationToken,
      sha2: r.info.sha2,
      sha512: r.info.sha512
    };
    this.listenerCount(Zt.DOWNLOAD_PROGRESS) > 0 && (n.onProgress = (A) => this.emit(Zt.DOWNLOAD_PROGRESS, A));
    const i = t.downloadUpdateOptions.updateInfoAndProvider.info, o = i.version, s = r.packageInfo;
    function a() {
      const A = decodeURIComponent(t.fileInfo.url.pathname);
      return A.endsWith(`.${t.fileExtension}`) ? Ft.basename(A) : t.fileInfo.info.url;
    }
    const l = await this.getOrCreateDownloadHelper(), d = l.cacheDirForPendingUpdate;
    await (0, Qt.mkdir)(d, { recursive: !0 });
    const c = a();
    let f = Ft.join(d, c);
    const p = s == null ? null : Ft.join(d, `package-${o}${Ft.extname(s.path) || ".7z"}`), g = async (A) => (await l.setDownloadedFile(f, p, i, r, c, A), await t.done({
      ...i,
      downloadedFile: f
    }), p == null ? [f] : [f, p]), _ = this._logger, E = await l.validateDownloadedPath(f, i, r, _);
    if (E != null)
      return f = E, await g(!1);
    const S = async () => (await l.clear().catch(() => {
    }), await (0, Qt.unlink)(f).catch(() => {
    })), b = await (0, pl.createTempUpdateFile)(`temp-${c}`, d, _);
    try {
      await t.task(b, n, p, S), await (0, Se.retry)(() => (0, Qt.rename)(b, f), 60, 500, 0, 0, (A) => A instanceof Error && /^EBUSY:/.test(A.message));
    } catch (A) {
      throw await S(), A instanceof Se.CancellationError && (_.info("cancelled"), this.emit("update-cancelled", i)), A;
    }
    return _.info(`New version ${o} has been downloaded to ${f}`), await g(!0);
  }
  async differentialDownloadInstaller(t, r, n, i, o) {
    try {
      if (this._testOnlyOptions != null && !this._testOnlyOptions.isUseDifferentialDownload)
        return !0;
      const s = (0, ZS.blockmapFiles)(t.url, this.app.version, r.updateInfoAndProvider.info.version);
      this._logger.info(`Download block maps (old: "${s[0]}", new: ${s[1]})`);
      const a = async (c) => {
        const f = await this.httpExecutor.downloadToBuffer(c, {
          headers: r.requestHeaders,
          cancellationToken: r.cancellationToken
        });
        if (f == null || f.length === 0)
          throw new Error(`Blockmap "${c.href}" is empty`);
        try {
          return JSON.parse((0, QS.gunzipSync)(f).toString());
        } catch (p) {
          throw new Error(`Cannot parse blockmap "${c.href}", error: ${p}`);
        }
      }, l = {
        newUrl: t.url,
        oldFile: Ft.join(this.downloadedUpdateHelper.cacheDir, o),
        logger: this._logger,
        newFile: n,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        requestHeaders: r.requestHeaders,
        cancellationToken: r.cancellationToken
      };
      this.listenerCount(Zt.DOWNLOAD_PROGRESS) > 0 && (l.onProgress = (c) => this.emit(Zt.DOWNLOAD_PROGRESS, c));
      const d = await Promise.all(s.map((c) => a(c)));
      return await new eA.GenericDifferentialDownloader(t.info, this.httpExecutor, l).download(d[0], d[1]), !1;
    } catch (s) {
      if (this._logger.error(`Cannot download differentially, fallback to full download: ${s.stack || s}`), this._testOnlyOptions != null)
        throw s;
      return !0;
    }
  }
}
_t.AppUpdater = ls;
function tA(e) {
  const t = (0, Lt.prerelease)(e);
  return t != null && t.length > 0;
}
class tf {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  info(t) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(t) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(t) {
  }
}
_t.NoOpLogger = tf;
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.BaseUpdater = void 0;
const gl = Qr, rA = _t;
class nA extends rA.AppUpdater {
  constructor(t, r) {
    super(t, r), this.quitAndInstallCalled = !1, this.quitHandlerAdded = !1;
  }
  quitAndInstall(t = !1, r = !1) {
    this._logger.info("Install on explicit quitAndInstall"), this.install(t, t ? r : this.autoRunAppAfterInstall) ? setImmediate(() => {
      vt.autoUpdater.emit("before-quit-for-update"), this.app.quit();
    }) : this.quitAndInstallCalled = !1;
  }
  executeDownload(t) {
    return super.executeDownload({
      ...t,
      done: (r) => (this.dispatchUpdateDownloaded(r), this.addQuitHandler(), Promise.resolve())
    });
  }
  get installerPath() {
    return this.downloadedUpdateHelper == null ? null : this.downloadedUpdateHelper.file;
  }
  // must be sync (because quit even handler is not async)
  install(t = !1, r = !1) {
    if (this.quitAndInstallCalled)
      return this._logger.warn("install call ignored: quitAndInstallCalled is set to true"), !1;
    const n = this.downloadedUpdateHelper, i = this.installerPath, o = n == null ? null : n.downloadedFileInfo;
    if (i == null || o == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    this.quitAndInstallCalled = !0;
    try {
      return this._logger.info(`Install: isSilent: ${t}, isForceRunAfter: ${r}`), this.doInstall({
        isSilent: t,
        isForceRunAfter: r,
        isAdminRightsRequired: o.isAdminRightsRequired
      });
    } catch (s) {
      return this.dispatchError(s), !1;
    }
  }
  addQuitHandler() {
    this.quitHandlerAdded || !this.autoInstallOnAppQuit || (this.quitHandlerAdded = !0, this.app.onQuit((t) => {
      if (this.quitAndInstallCalled) {
        this._logger.info("Update installer has already been triggered. Quitting application.");
        return;
      }
      if (!this.autoInstallOnAppQuit) {
        this._logger.info("Update will not be installed on quit because autoInstallOnAppQuit is set to false.");
        return;
      }
      if (t !== 0) {
        this._logger.info(`Update will be not installed on quit because application is quitting with exit code ${t}`);
        return;
      }
      this._logger.info("Auto install update on quit"), this.install(!0, !1);
    }));
  }
  wrapSudo() {
    const { name: t } = this.app, r = `"${t} would like to update"`, n = this.spawnSyncLog("which gksudo || which kdesudo || which pkexec || which beesu"), i = [n];
    return /kdesudo/i.test(n) ? (i.push("--comment", r), i.push("-c")) : /gksudo/i.test(n) ? i.push("--message", r) : /pkexec/i.test(n) && i.push("--disable-internal-agent"), i.join(" ");
  }
  spawnSyncLog(t, r = [], n = {}) {
    this._logger.info(`Executing: ${t} with args: ${r}`);
    const i = (0, gl.spawnSync)(t, r, {
      env: { ...process.env, ...n },
      encoding: "utf-8",
      shell: !0
    }), { error: o, status: s, stdout: a, stderr: l } = i;
    if (o != null)
      throw this._logger.error(l), o;
    if (s != null && s !== 0)
      throw this._logger.error(l), new Error(`Command ${t} exited with code ${s}`);
    return a.trim();
  }
  /**
   * This handles both node 8 and node 10 way of emitting error when spawning a process
   *   - node 8: Throws the error
   *   - node 10: Emit the error(Need to listen with on)
   */
  // https://github.com/electron-userland/electron-builder/issues/1129
  // Node 8 sends errors: https://nodejs.org/dist/latest-v8.x/docs/api/errors.html#errors_common_system_errors
  async spawnLog(t, r = [], n = void 0, i = "ignore") {
    return this._logger.info(`Executing: ${t} with args: ${r}`), new Promise((o, s) => {
      try {
        const a = { stdio: i, env: n, detached: !0 }, l = (0, gl.spawn)(t, r, a);
        l.on("error", (d) => {
          s(d);
        }), l.unref(), l.pid !== void 0 && o(!0);
      } catch (a) {
        s(a);
      }
    });
  }
}
ot.BaseUpdater = nA;
var Vr = {}, dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.FileWithEmbeddedBlockMapDifferentialDownloader = void 0;
const er = $t, iA = fn, oA = Ml;
class sA extends iA.DifferentialDownloader {
  async download() {
    const t = this.blockAwareFileInfo, r = t.size, n = r - (t.blockMapSize + 4);
    this.fileMetadataBuffer = await this.readRemoteBytes(n, r - 1);
    const i = rf(this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4));
    await this.doDownload(await aA(this.options.oldFile), i);
  }
}
dn.FileWithEmbeddedBlockMapDifferentialDownloader = sA;
function rf(e) {
  return JSON.parse((0, oA.inflateRawSync)(e).toString());
}
async function aA(e) {
  const t = await (0, er.open)(e, "r");
  try {
    const r = (await (0, er.fstat)(t)).size, n = Buffer.allocUnsafe(4);
    await (0, er.read)(t, n, 0, n.length, r - n.length);
    const i = Buffer.allocUnsafe(n.readUInt32BE(0));
    return await (0, er.read)(t, i, 0, i.length, r - n.length - i.length), await (0, er.close)(t), rf(i);
  } catch (r) {
    throw await (0, er.close)(t), r;
  }
}
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.AppImageUpdater = void 0;
const yl = he, El = Qr, lA = $t, cA = Ue, Ir = X, uA = ot, fA = dn, dA = ce, vl = Ct;
class hA extends uA.BaseUpdater {
  constructor(t, r) {
    super(t, r);
  }
  isUpdaterActive() {
    return process.env.APPIMAGE == null ? (process.env.SNAP == null ? this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage") : this._logger.info("SNAP env is defined, updater is disabled"), !1) : super.isUpdaterActive();
  }
  /*** @private */
  doDownloadUpdate(t) {
    const r = t.updateInfoAndProvider.provider, n = (0, dA.findFile)(r.resolveFiles(t.updateInfoAndProvider.info), "AppImage", ["rpm", "deb", "pacman"]);
    return this.executeDownload({
      fileExtension: "AppImage",
      fileInfo: n,
      downloadUpdateOptions: t,
      task: async (i, o) => {
        const s = process.env.APPIMAGE;
        if (s == null)
          throw (0, yl.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
        (t.disableDifferentialDownload || await this.downloadDifferential(n, s, i, r, t)) && await this.httpExecutor.download(n.url, i, o), await (0, lA.chmod)(i, 493);
      }
    });
  }
  async downloadDifferential(t, r, n, i, o) {
    try {
      const s = {
        newUrl: t.url,
        oldFile: r,
        logger: this._logger,
        newFile: n,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        requestHeaders: o.requestHeaders,
        cancellationToken: o.cancellationToken
      };
      return this.listenerCount(vl.DOWNLOAD_PROGRESS) > 0 && (s.onProgress = (a) => this.emit(vl.DOWNLOAD_PROGRESS, a)), await new fA.FileWithEmbeddedBlockMapDifferentialDownloader(t.info, this.httpExecutor, s).download(), !1;
    } catch (s) {
      return this._logger.error(`Cannot download differentially, fallback to full download: ${s.stack || s}`), process.platform === "linux";
    }
  }
  doInstall(t) {
    const r = process.env.APPIMAGE;
    if (r == null)
      throw (0, yl.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
    (0, cA.unlinkSync)(r);
    let n;
    const i = Ir.basename(r), o = this.installerPath;
    if (o == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    Ir.basename(o) === i || !/\d+\.\d+\.\d+/.test(i) ? n = r : n = Ir.join(Ir.dirname(r), Ir.basename(o)), (0, El.execFileSync)("mv", ["-f", o, n]), n !== r && this.emit("appimage-filename-updated", n);
    const s = {
      ...process.env,
      APPIMAGE_SILENT_INSTALL: "true"
    };
    return t.isForceRunAfter ? this.spawnLog(n, [], s) : (s.APPIMAGE_EXIT_AFTER_INSTALL = "true", (0, El.execFileSync)(n, [], { env: s })), !0;
  }
}
Vr.AppImageUpdater = hA;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.DebUpdater = void 0;
const pA = ot, mA = ce, wl = Ct;
class gA extends pA.BaseUpdater {
  constructor(t, r) {
    super(t, r);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const r = t.updateInfoAndProvider.provider, n = (0, mA.findFile)(r.resolveFiles(t.updateInfoAndProvider.info), "deb", ["AppImage", "rpm", "pacman"]);
    return this.executeDownload({
      fileExtension: "deb",
      fileInfo: n,
      downloadUpdateOptions: t,
      task: async (i, o) => {
        this.listenerCount(wl.DOWNLOAD_PROGRESS) > 0 && (o.onProgress = (s) => this.emit(wl.DOWNLOAD_PROGRESS, s)), await this.httpExecutor.download(n.url, i, o);
      }
    });
  }
  get installerPath() {
    var t, r;
    return (r = (t = super.installerPath) === null || t === void 0 ? void 0 : t.replace(/ /g, "\\ ")) !== null && r !== void 0 ? r : null;
  }
  doInstall(t) {
    const r = this.wrapSudo(), n = /pkexec/i.test(r) ? "" : '"', i = this.installerPath;
    if (i == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    const o = ["dpkg", "-i", i, "||", "apt-get", "install", "-f", "-y"];
    return this.spawnSyncLog(r, [`${n}/bin/bash`, "-c", `'${o.join(" ")}'${n}`]), t.isForceRunAfter && this.app.relaunch(), !0;
  }
}
zr.DebUpdater = gA;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.PacmanUpdater = void 0;
const yA = ot, _l = Ct, EA = ce;
class vA extends yA.BaseUpdater {
  constructor(t, r) {
    super(t, r);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const r = t.updateInfoAndProvider.provider, n = (0, EA.findFile)(r.resolveFiles(t.updateInfoAndProvider.info), "pacman", ["AppImage", "deb", "rpm"]);
    return this.executeDownload({
      fileExtension: "pacman",
      fileInfo: n,
      downloadUpdateOptions: t,
      task: async (i, o) => {
        this.listenerCount(_l.DOWNLOAD_PROGRESS) > 0 && (o.onProgress = (s) => this.emit(_l.DOWNLOAD_PROGRESS, s)), await this.httpExecutor.download(n.url, i, o);
      }
    });
  }
  get installerPath() {
    var t, r;
    return (r = (t = super.installerPath) === null || t === void 0 ? void 0 : t.replace(/ /g, "\\ ")) !== null && r !== void 0 ? r : null;
  }
  doInstall(t) {
    const r = this.wrapSudo(), n = /pkexec/i.test(r) ? "" : '"', i = this.installerPath;
    if (i == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    const o = ["pacman", "-U", "--noconfirm", i];
    return this.spawnSyncLog(r, [`${n}/bin/bash`, "-c", `'${o.join(" ")}'${n}`]), t.isForceRunAfter && this.app.relaunch(), !0;
  }
}
Yr.PacmanUpdater = vA;
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.RpmUpdater = void 0;
const wA = ot, Sl = Ct, _A = ce;
class SA extends wA.BaseUpdater {
  constructor(t, r) {
    super(t, r);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const r = t.updateInfoAndProvider.provider, n = (0, _A.findFile)(r.resolveFiles(t.updateInfoAndProvider.info), "rpm", ["AppImage", "deb", "pacman"]);
    return this.executeDownload({
      fileExtension: "rpm",
      fileInfo: n,
      downloadUpdateOptions: t,
      task: async (i, o) => {
        this.listenerCount(Sl.DOWNLOAD_PROGRESS) > 0 && (o.onProgress = (s) => this.emit(Sl.DOWNLOAD_PROGRESS, s)), await this.httpExecutor.download(n.url, i, o);
      }
    });
  }
  get installerPath() {
    var t, r;
    return (r = (t = super.installerPath) === null || t === void 0 ? void 0 : t.replace(/ /g, "\\ ")) !== null && r !== void 0 ? r : null;
  }
  doInstall(t) {
    const r = this.wrapSudo(), n = /pkexec/i.test(r) ? "" : '"', i = this.spawnSyncLog("which zypper"), o = this.installerPath;
    if (o == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    let s;
    return i ? s = [i, "--no-refresh", "install", "--allow-unsigned-rpm", "-y", "-f", o] : s = [this.spawnSyncLog("which dnf || which yum"), "-y", "install", o], this.spawnSyncLog(r, [`${n}/bin/bash`, "-c", `'${s.join(" ")}'${n}`]), t.isForceRunAfter && this.app.relaunch(), !0;
  }
}
Xr.RpmUpdater = SA;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.MacUpdater = void 0;
const Al = he, fo = $t, AA = Ue, bl = X, bA = Ll, TA = _t, $A = ce, Tl = Qr, $l = en;
class CA extends TA.AppUpdater {
  constructor(t, r) {
    super(t, r), this.nativeUpdater = vt.autoUpdater, this.squirrelDownloadedUpdate = !1, this.nativeUpdater.on("error", (n) => {
      this._logger.warn(n), this.emit("error", n);
    }), this.nativeUpdater.on("update-downloaded", () => {
      this.squirrelDownloadedUpdate = !0, this.debug("nativeUpdater.update-downloaded");
    });
  }
  debug(t) {
    this._logger.debug != null && this._logger.debug(t);
  }
  closeServerIfExists() {
    this.server && (this.debug("Closing proxy server"), this.server.close((t) => {
      t && this.debug("proxy server wasn't already open, probably attempted closing again as a safety check before quit");
    }));
  }
  async doDownloadUpdate(t) {
    let r = t.updateInfoAndProvider.provider.resolveFiles(t.updateInfoAndProvider.info);
    const n = this._logger, i = "sysctl.proc_translated";
    let o = !1;
    try {
      this.debug("Checking for macOS Rosetta environment"), o = (0, Tl.execFileSync)("sysctl", [i], { encoding: "utf8" }).includes(`${i}: 1`), n.info(`Checked for macOS Rosetta environment (isRosetta=${o})`);
    } catch (f) {
      n.warn(`sysctl shell command to check for macOS Rosetta environment failed: ${f}`);
    }
    let s = !1;
    try {
      this.debug("Checking for arm64 in uname");
      const p = (0, Tl.execFileSync)("uname", ["-a"], { encoding: "utf8" }).includes("ARM");
      n.info(`Checked 'uname -a': arm64=${p}`), s = s || p;
    } catch (f) {
      n.warn(`uname shell command to check for arm64 failed: ${f}`);
    }
    s = s || process.arch === "arm64" || o;
    const a = (f) => {
      var p;
      return f.url.pathname.includes("arm64") || ((p = f.info.url) === null || p === void 0 ? void 0 : p.includes("arm64"));
    };
    s && r.some(a) ? r = r.filter((f) => s === a(f)) : r = r.filter((f) => !a(f));
    const l = (0, $A.findFile)(r, "zip", ["pkg", "dmg"]);
    if (l == null)
      throw (0, Al.newError)(`ZIP file not provided: ${(0, Al.safeStringifyJson)(r)}`, "ERR_UPDATER_ZIP_FILE_NOT_FOUND");
    const d = t.updateInfoAndProvider.provider, c = "update.zip";
    return this.executeDownload({
      fileExtension: "zip",
      fileInfo: l,
      downloadUpdateOptions: t,
      task: async (f, p) => {
        const g = bl.join(this.downloadedUpdateHelper.cacheDir, c), _ = () => (0, fo.pathExistsSync)(g) ? !t.disableDifferentialDownload : (n.info("Unable to locate previous update.zip for differential download (is this first install?), falling back to full download"), !1);
        let E = !0;
        _() && (E = await this.differentialDownloadInstaller(l, t, f, d, c)), E && await this.httpExecutor.download(l.url, f, p);
      },
      done: async (f) => {
        if (!t.disableDifferentialDownload)
          try {
            const p = bl.join(this.downloadedUpdateHelper.cacheDir, c);
            await (0, fo.copyFile)(f.downloadedFile, p);
          } catch (p) {
            this._logger.warn(`Unable to copy file for caching for future differential downloads: ${p.message}`);
          }
        return this.updateDownloaded(l, f);
      }
    });
  }
  async updateDownloaded(t, r) {
    var n;
    const i = r.downloadedFile, o = (n = t.info.size) !== null && n !== void 0 ? n : (await (0, fo.stat)(i)).size, s = this._logger, a = `fileToProxy=${t.url.href}`;
    this.closeServerIfExists(), this.debug(`Creating proxy server for native Squirrel.Mac (${a})`), this.server = (0, bA.createServer)(), this.debug(`Proxy server for native Squirrel.Mac is created (${a})`), this.server.on("close", () => {
      s.info(`Proxy server for native Squirrel.Mac is closed (${a})`);
    });
    const l = (d) => {
      const c = d.address();
      return typeof c == "string" ? c : `http://127.0.0.1:${c == null ? void 0 : c.port}`;
    };
    return await new Promise((d, c) => {
      const f = (0, $l.randomBytes)(64).toString("base64").replace(/\//g, "_").replace(/\+/g, "-"), p = Buffer.from(`autoupdater:${f}`, "ascii"), g = `/${(0, $l.randomBytes)(64).toString("hex")}.zip`;
      this.server.on("request", (_, E) => {
        const S = _.url;
        if (s.info(`${S} requested`), S === "/") {
          if (!_.headers.authorization || _.headers.authorization.indexOf("Basic ") === -1) {
            E.statusCode = 401, E.statusMessage = "Invalid Authentication Credentials", E.end(), s.warn("No authenthication info");
            return;
          }
          const N = _.headers.authorization.split(" ")[1], x = Buffer.from(N, "base64").toString("ascii"), [ee, se] = x.split(":");
          if (ee !== "autoupdater" || se !== f) {
            E.statusCode = 401, E.statusMessage = "Invalid Authentication Credentials", E.end(), s.warn("Invalid authenthication credentials");
            return;
          }
          const z = Buffer.from(`{ "url": "${l(this.server)}${g}" }`);
          E.writeHead(200, { "Content-Type": "application/json", "Content-Length": z.length }), E.end(z);
          return;
        }
        if (!S.startsWith(g)) {
          s.warn(`${S} requested, but not supported`), E.writeHead(404), E.end();
          return;
        }
        s.info(`${g} requested by Squirrel.Mac, pipe ${i}`);
        let b = !1;
        E.on("finish", () => {
          b || (this.nativeUpdater.removeListener("error", c), d([]));
        });
        const A = (0, AA.createReadStream)(i);
        A.on("error", (N) => {
          try {
            E.end();
          } catch (x) {
            s.warn(`cannot end response: ${x}`);
          }
          b = !0, this.nativeUpdater.removeListener("error", c), c(new Error(`Cannot pipe "${i}": ${N}`));
        }), E.writeHead(200, {
          "Content-Type": "application/zip",
          "Content-Length": o
        }), A.pipe(E);
      }), this.debug(`Proxy server for native Squirrel.Mac is starting to listen (${a})`), this.server.listen(0, "127.0.0.1", () => {
        this.debug(`Proxy server for native Squirrel.Mac is listening (address=${l(this.server)}, ${a})`), this.nativeUpdater.setFeedURL({
          url: l(this.server),
          headers: {
            "Cache-Control": "no-cache",
            Authorization: `Basic ${p.toString("base64")}`
          }
        }), this.dispatchUpdateDownloaded(r), this.autoInstallOnAppQuit ? (this.nativeUpdater.once("error", c), this.nativeUpdater.checkForUpdates()) : d([]);
      });
    });
  }
  handleUpdateDownloaded() {
    this.autoRunAppAfterInstall ? this.nativeUpdater.quitAndInstall() : this.app.quit(), this.closeServerIfExists();
  }
  quitAndInstall() {
    this.squirrelDownloadedUpdate ? this.handleUpdateDownloaded() : (this.nativeUpdater.on("update-downloaded", () => this.handleUpdateDownloaded()), this.autoInstallOnAppQuit || this.nativeUpdater.checkForUpdates());
  }
}
Jr.MacUpdater = CA;
var Kr = {}, cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.verifySignature = IA;
const Cl = he, nf = Qr, OA = Ke, Ol = X;
function IA(e, t, r) {
  return new Promise((n, i) => {
    const o = t.replace(/'/g, "''");
    r.info(`Verifying signature ${o}`), (0, nf.execFile)('set "PSModulePath=" & chcp 65001 >NUL & powershell.exe', ["-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", `"Get-AuthenticodeSignature -LiteralPath '${o}' | ConvertTo-Json -Compress"`], {
      shell: !0,
      timeout: 20 * 1e3
    }, (s, a, l) => {
      var d;
      try {
        if (s != null || l) {
          ho(r, s, l, i), n(null);
          return;
        }
        const c = PA(a);
        if (c.Status === 0) {
          try {
            const _ = Ol.normalize(c.Path), E = Ol.normalize(t);
            if (r.info(`LiteralPath: ${_}. Update Path: ${E}`), _ !== E) {
              ho(r, new Error(`LiteralPath of ${_} is different than ${E}`), l, i), n(null);
              return;
            }
          } catch (_) {
            r.warn(`Unable to verify LiteralPath of update asset due to missing data.Path. Skipping this step of validation. Message: ${(d = _.message) !== null && d !== void 0 ? d : _.stack}`);
          }
          const p = (0, Cl.parseDn)(c.SignerCertificate.Subject);
          let g = !1;
          for (const _ of e) {
            const E = (0, Cl.parseDn)(_);
            if (E.size ? g = Array.from(E.keys()).every((b) => E.get(b) === p.get(b)) : _ === p.get("CN") && (r.warn(`Signature validated using only CN ${_}. Please add your full Distinguished Name (DN) to publisherNames configuration`), g = !0), g) {
              n(null);
              return;
            }
          }
        }
        const f = `publisherNames: ${e.join(" | ")}, raw info: ` + JSON.stringify(c, (p, g) => p === "RawData" ? void 0 : g, 2);
        r.warn(`Sign verification failed, installer signed with incorrect certificate: ${f}`), n(f);
      } catch (c) {
        ho(r, c, null, i), n(null);
        return;
      }
    });
  });
}
function PA(e) {
  const t = JSON.parse(e);
  delete t.PrivateKey, delete t.IsOSBinary, delete t.SignatureType;
  const r = t.SignerCertificate;
  return r != null && (delete r.Archived, delete r.Extensions, delete r.Handle, delete r.HasPrivateKey, delete r.SubjectName), t;
}
function ho(e, t, r, n) {
  if (DA()) {
    e.warn(`Cannot execute Get-AuthenticodeSignature: ${t || r}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
    return;
  }
  try {
    (0, nf.execFileSync)("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", "ConvertTo-Json test"], { timeout: 10 * 1e3 });
  } catch (i) {
    e.warn(`Cannot execute ConvertTo-Json: ${i.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
    return;
  }
  t != null && n(t), r && n(new Error(`Cannot execute Get-AuthenticodeSignature, stderr: ${r}. Failing signature validation due to unknown stderr.`));
}
function DA() {
  const e = OA.release();
  return e.startsWith("6.") && !e.startsWith("6.3");
}
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.NsisUpdater = void 0;
const Mn = he, Il = X, RA = ot, NA = dn, Pl = Ct, FA = ce, xA = $t, LA = cs, Dl = pr;
class UA extends RA.BaseUpdater {
  constructor(t, r) {
    super(t, r), this._verifyUpdateCodeSignature = (n, i) => (0, LA.verifySignature)(n, i, this._logger);
  }
  /**
   * The verifyUpdateCodeSignature. You can pass [win-verify-signature](https://github.com/beyondkmp/win-verify-trust) or another custom verify function: ` (publisherName: string[], path: string) => Promise<string | null>`.
   * The default verify function uses [windowsExecutableCodeSignatureVerifier](https://github.com/electron-userland/electron-builder/blob/master/packages/electron-updater/src/windowsExecutableCodeSignatureVerifier.ts)
   */
  get verifyUpdateCodeSignature() {
    return this._verifyUpdateCodeSignature;
  }
  set verifyUpdateCodeSignature(t) {
    t && (this._verifyUpdateCodeSignature = t);
  }
  /*** @private */
  doDownloadUpdate(t) {
    const r = t.updateInfoAndProvider.provider, n = (0, FA.findFile)(r.resolveFiles(t.updateInfoAndProvider.info), "exe");
    return this.executeDownload({
      fileExtension: "exe",
      downloadUpdateOptions: t,
      fileInfo: n,
      task: async (i, o, s, a) => {
        const l = n.packageInfo, d = l != null && s != null;
        if (d && t.disableWebInstaller)
          throw (0, Mn.newError)(`Unable to download new version ${t.updateInfoAndProvider.info.version}. Web Installers are disabled`, "ERR_UPDATER_WEB_INSTALLER_DISABLED");
        !d && !t.disableWebInstaller && this._logger.warn("disableWebInstaller is set to false, you should set it to true if you do not plan on using a web installer. This will default to true in a future version."), (d || t.disableDifferentialDownload || await this.differentialDownloadInstaller(n, t, i, r, Mn.CURRENT_APP_INSTALLER_FILE_NAME)) && await this.httpExecutor.download(n.url, i, o);
        const c = await this.verifySignature(i);
        if (c != null)
          throw await a(), (0, Mn.newError)(`New version ${t.updateInfoAndProvider.info.version} is not signed by the application owner: ${c}`, "ERR_UPDATER_INVALID_SIGNATURE");
        if (d && await this.differentialDownloadWebPackage(t, l, s, r))
          try {
            await this.httpExecutor.download(new Dl.URL(l.path), s, {
              headers: t.requestHeaders,
              cancellationToken: t.cancellationToken,
              sha512: l.sha512
            });
          } catch (f) {
            try {
              await (0, xA.unlink)(s);
            } catch {
            }
            throw f;
          }
      }
    });
  }
  // $certificateInfo = (Get-AuthenticodeSignature 'xxx\yyy.exe'
  // | where {$_.Status.Equals([System.Management.Automation.SignatureStatus]::Valid) -and $_.SignerCertificate.Subject.Contains("CN=siemens.com")})
  // | Out-String ; if ($certificateInfo) { exit 0 } else { exit 1 }
  async verifySignature(t) {
    let r;
    try {
      if (r = (await this.configOnDisk.value).publisherName, r == null)
        return null;
    } catch (n) {
      if (n.code === "ENOENT")
        return null;
      throw n;
    }
    return await this._verifyUpdateCodeSignature(Array.isArray(r) ? r : [r], t);
  }
  doInstall(t) {
    const r = this.installerPath;
    if (r == null)
      return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
    const n = ["--updated"];
    t.isSilent && n.push("/S"), t.isForceRunAfter && n.push("--force-run"), this.installDirectory && n.push(`/D=${this.installDirectory}`);
    const i = this.downloadedUpdateHelper == null ? null : this.downloadedUpdateHelper.packageFile;
    i != null && n.push(`--package-file=${i}`);
    const o = () => {
      this.spawnLog(Il.join(process.resourcesPath, "elevate.exe"), [r].concat(n)).catch((s) => this.dispatchError(s));
    };
    return t.isAdminRightsRequired ? (this._logger.info("isAdminRightsRequired is set to true, run installer using elevate.exe"), o(), !0) : (this.spawnLog(r, n).catch((s) => {
      const a = s.code;
      this._logger.info(`Cannot run installer: error code: ${a}, error message: "${s.message}", will be executed again using elevate if EACCES, and will try to use electron.shell.openItem if ENOENT`), a === "UNKNOWN" || a === "EACCES" ? o() : a === "ENOENT" ? vt.shell.openPath(r).catch((l) => this.dispatchError(l)) : this.dispatchError(s);
    }), !0);
  }
  async differentialDownloadWebPackage(t, r, n, i) {
    if (r.blockMapSize == null)
      return !0;
    try {
      const o = {
        newUrl: new Dl.URL(r.path),
        oldFile: Il.join(this.downloadedUpdateHelper.cacheDir, Mn.CURRENT_APP_PACKAGE_FILE_NAME),
        logger: this._logger,
        newFile: n,
        requestHeaders: this.requestHeaders,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        cancellationToken: t.cancellationToken
      };
      this.listenerCount(Pl.DOWNLOAD_PROGRESS) > 0 && (o.onProgress = (s) => this.emit(Pl.DOWNLOAD_PROGRESS, s)), await new NA.FileWithEmbeddedBlockMapDifferentialDownloader(r, this.httpExecutor, o).download();
    } catch (o) {
      return this._logger.error(`Cannot download differentially, fallback to full download: ${o.stack || o}`), process.platform === "win32";
    }
    return !1;
  }
}
Kr.NsisUpdater = UA;
(function(e) {
  var t = Ae && Ae.__createBinding || (Object.create ? function(S, b, A, N) {
    N === void 0 && (N = A);
    var x = Object.getOwnPropertyDescriptor(b, A);
    (!x || ("get" in x ? !b.__esModule : x.writable || x.configurable)) && (x = { enumerable: !0, get: function() {
      return b[A];
    } }), Object.defineProperty(S, N, x);
  } : function(S, b, A, N) {
    N === void 0 && (N = A), S[N] = b[A];
  }), r = Ae && Ae.__exportStar || function(S, b) {
    for (var A in S) A !== "default" && !Object.prototype.hasOwnProperty.call(b, A) && t(b, S, A);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NsisUpdater = e.MacUpdater = e.RpmUpdater = e.PacmanUpdater = e.DebUpdater = e.AppImageUpdater = e.Provider = e.NoOpLogger = e.AppUpdater = e.BaseUpdater = void 0;
  const n = $t, i = X;
  var o = ot;
  Object.defineProperty(e, "BaseUpdater", { enumerable: !0, get: function() {
    return o.BaseUpdater;
  } });
  var s = _t;
  Object.defineProperty(e, "AppUpdater", { enumerable: !0, get: function() {
    return s.AppUpdater;
  } }), Object.defineProperty(e, "NoOpLogger", { enumerable: !0, get: function() {
    return s.NoOpLogger;
  } });
  var a = ce;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return a.Provider;
  } });
  var l = Vr;
  Object.defineProperty(e, "AppImageUpdater", { enumerable: !0, get: function() {
    return l.AppImageUpdater;
  } });
  var d = zr;
  Object.defineProperty(e, "DebUpdater", { enumerable: !0, get: function() {
    return d.DebUpdater;
  } });
  var c = Yr;
  Object.defineProperty(e, "PacmanUpdater", { enumerable: !0, get: function() {
    return c.PacmanUpdater;
  } });
  var f = Xr;
  Object.defineProperty(e, "RpmUpdater", { enumerable: !0, get: function() {
    return f.RpmUpdater;
  } });
  var p = Jr;
  Object.defineProperty(e, "MacUpdater", { enumerable: !0, get: function() {
    return p.MacUpdater;
  } });
  var g = Kr;
  Object.defineProperty(e, "NsisUpdater", { enumerable: !0, get: function() {
    return g.NsisUpdater;
  } }), r(Ct, e);
  let _;
  function E() {
    if (process.platform === "win32")
      _ = new Kr.NsisUpdater();
    else if (process.platform === "darwin")
      _ = new Jr.MacUpdater();
    else {
      _ = new Vr.AppImageUpdater();
      try {
        const S = i.join(process.resourcesPath, "package-type");
        if (!(0, n.existsSync)(S))
          return _;
        console.info("Checking for beta autoupdate feature for deb/rpm distributions");
        const b = (0, n.readFileSync)(S).toString().trim();
        switch (console.info("Found package-type:", b), b) {
          case "deb":
            _ = new zr.DebUpdater();
            break;
          case "rpm":
            _ = new Xr.RpmUpdater();
            break;
          case "pacman":
            _ = new Yr.PacmanUpdater();
            break;
          default:
            break;
        }
      } catch (S) {
        console.warn("Unable to detect 'package-type' for autoUpdater (beta rpm/deb support). If you'd like to expand support, please consider contributing to electron-builder", S.message);
      }
    }
    return _;
  }
  Object.defineProperty(e, "autoUpdater", {
    enumerable: !0,
    get: () => _ || E()
  });
})(xe);
class kA {
  // 下载完成后是否立刻更新
  constructor(t) {
    this.callBack = t, this.isUpdate = !1, this.cancellationToken = void 0, xe.autoUpdater.logger = ft, xe.autoUpdater.autoInstallOnAppQuit = !1, xe.autoUpdater.on("error", (r) => {
      var n;
      (n = this.callBack) == null || n.call(this, { code: -1, error: r });
    }), xe.autoUpdater.on("checking-for-update", () => {
      var r;
      (r = this.callBack) == null || r.call(this, { code: 3 });
    }), xe.autoUpdater.on("update-available", () => {
      var r;
      (r = this.callBack) == null || r.call(this, { code: 1 });
    }), xe.autoUpdater.on("update-not-available", () => {
      var r;
      (r = this.callBack) == null || r.call(this, { code: 0 });
    }), xe.autoUpdater.on("download-progress", (r) => {
      var i;
      const n = {
        speed: r.bytesPerSecond,
        percent: r.percent,
        downloaded: `${(r.transferred / 1048576).toFixed(2)}MB / ${(r.total / 1048576).toFixed(2)}MB`
      };
      (i = this.callBack) == null || i.call(this, { code: 4, progress: n });
    }), xe.autoUpdater.on("update-downloaded", () => {
      var r;
      (r = this.callBack) == null || r.call(this, { code: 2 }), this.isUpdate && (process.platform === "darwin" ? xe.autoUpdater.quitAndInstall() : xe.autoUpdater.quitAndInstall(!0, !0));
    });
  }
  // 检查一次版本更新
  async checkForUpdates(t) {
    this.isUpdate = t;
    const r = await xe.autoUpdater.checkForUpdates();
    return r != null && r.cancellationToken && (this.cancellationToken = r == null ? void 0 : r.cancellationToken), {
      currentVersion: xe.autoUpdater.currentVersion.version,
      remoteVersion: r == null ? void 0 : r.updateInfo.version
    };
  }
  // 取消下载
  cnacel() {
    this.cancellationToken && (this.cancellationToken.cancel(), this.cancellationToken = void 0);
  }
}
const nt = /* @__PURE__ */ new Map();
it.handle("get-device", async () => (HidAdapter.getDeviceList()).map((t) => ({
  ...t,
  device: {
    vendorId: t.vendorId,
    productId: t.productId
  }
})));
it.handle("open-device", async (e, t) => {
  if (!nt.has(t)) {
    if (process.platform === "darwin" || process.platform === "win32" || process.platform === "linux") {
      await Rl(t);
    }
  }
});
const Rl = async (e) => {
  const adapter = new HidAdapter();
  if (await adapter.open(e)) {
    nt.set(e, adapter);
    adapter.registerListeners((r) => MA(r, e));
  }
}, MA = (e, t) => {
  if (Le.win) {
    const n = new Uint8Array(e).slice(1), i = new DataView(n.buffer);
    Le.win.webContents.send("device-data", {
      data: i,
      path: t
    });
  }
};
it.handle("write-device", async (e, t, r = []) => {
  const adapter = nt.get(t);
  if (adapter) {
    await adapter.sendReport(11, r);
  }
});
it.handle("close-device", async (e, t) => {
  return await BA(t);
});
const of = () => {
  for (const adapter of nt.values()) {
    adapter.close();
  }
  nt.clear();
}, BA = async (e) => {
  const adapter = nt.get(e);
  if (adapter) {
    await adapter.close();
    nt.delete(e);
    return !0;
  }
  return !1;
}, jA = pd(import.meta.url), HA = wt.dirname(jA);
process.env.APP_ROOT = wt.join(HA, "..");
const Po = process.env.VITE_DEV_SERVER_URL;
wt.join(process.env.APP_ROOT, "dist-electron");
const sf = wt.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Po ? wt.join(process.env.APP_ROOT, "public") : sf;
let Gn = {
  vendorId: 0,
  productId: 0,
  path: ""
};
class qA {
  constructor(t) {
    this.options = t;
  }
  loadURL(t) {
    if (Po)
      this.win.loadURL(`${Po}#/${t}`);
    else {
      let r = wt.join(sf, "index.html");
      t && (r = decodeURIComponent(`${r}#/${t}`)), this.win.loadURL(`file://${r}`);
    }
  }
  // 创建主窗口
  async createMainWindow() {
    this.isUpdating = !1, this.win = new Fl({
      // @ts-ignore
      icon: wt.join(process.env.VITE_PUBLIC ?? "", "./logo/hhk.png"),
      width: 1600,
      height: 1e3,
      show: !1,
      webPreferences: {
        webviewTag: !0,
        // 启用 webview
        webSecurity: !1,
        // 允许加载不安全内容
        contextIsolation: !1,
        // 关闭上下文隔离
        nodeIntegration: !0,
        // 为页面集成 Node.js 环境
        devTools: !1
        // 允许使用开发者工具
      },
      ...this.options
    }), this.win.webContents.openDevTools({ mode: "right" }), this.win.setMenuBarVisibility(!1), this.loadURL(""), this.win.webContents.on("before-input-event", (r, n) => {
      n.key === "F12" && (r.preventDefault(), this.win.webContents.toggleDevTools());
    }), this.win.on("closed", () => {
      Pe.quit();
    }), this.win.on("close", (r) => {
      this.isUpdating || (r.preventDefault(), xl.showMessageBox(Le.win, {
        type: "warning",
        buttons: ["Cancel", "Yes"],
        title: "提示",
        message: "确定退出?"
      }).then(({ response: n }) => {
        n === 1 && (of(), Pe.exit());
      }));
    }), this.win.webContents.session.on(
      "select-hid-device",
      (r, n, i) => {
        if (r.preventDefault(), n.deviceList && n.deviceList.length > 0) {
          const o = n.deviceList.find(
            (s) => s.vendorId === Gn.vendorId && s.productId === Gn.productId
          );
          process.platform === "darwin" ? BA(Gn.path).then(() => {
            i(o == null ? void 0 : o.deviceId);
          }) : i(o == null ? void 0 : o.deviceId);
        }
      }
    ), this.win.webContents.session.setPermissionCheckHandler(() => !0), this.win.webContents.session.setDevicePermissionHandler(() => !0);
    const t = this;
    this.win.on("ready-to-show", function() {
      t.win.show();
    });
  }
}
it.on(
  "set-select-device",
  (e, t) => {
    Gn = t;
  }
);
const Le = new qA(), GA = Pe.requestSingleInstanceLock();
GA ? (Pe.on("second-instance", () => {
  Le.win && Le.win.restore();
}), Pe.whenReady().then(() => {
  Le.createMainWindow(), Le.win.webContents.on("did-finish-load", () => {
    const r = new kA((n) => {
      n.code === 1 && Le.win.webContents.send("update-available"), n.code === 4 && Le.win.webContents.send("update-progress", n.progress), n.code === 2 && (Le.isUpdating = !0, Le.win.webContents.send("update-downloaded")), n.code === -1 && (Jl.error(n.error.message), Le.win.webContents.send("update-error", n.error.message));
    });
    r.checkForUpdates(!0), it.on("update-retry", () => {
      r.checkForUpdates(!0);
    });
  });
  const e = new dd(
    // @ts-ignore
    wt.join(process.env.VITE_PUBLIC ?? "", "./logo/hhk.png")
  ), t = Nl.buildFromTemplate([
    {
      label: "退出",
      click: () => {
        xl.showMessageBox(Le.win, {
          type: "warning",
          buttons: ["Cancel", "Yes"],
          title: "提示",
          message: "确定退出?"
        }).then(({ response: r }) => {
          r === 1 && (of(), Pe.exit());
        });
      }
    }
  ]);
  e.setToolTip("IRIS v2 NearLink"), e.setContextMenu(t), Pe.on("window-all-closed", () => {
    e.destroy();
  });
})) : Pe.exit();
it.on("set-theme", (e, t) => {
  hd.themeSource = t;
});
it.handle("get-firmware", async (e, t) => new Promise((r, n) => {
  fetch(t).then((i) => {
    i.ok || n(new Error(`HTTP error! status: ${i.status}`)), i.arrayBuffer().then((o) => {
      r(o);
    });
  }).catch((i) => {
    n(i);
  });
}));
Pe.setName("IRIS v2 NearLink");
Pe.setAppUserModelId("IRIS v2 NearLink");
Pe.commandLine.appendSwitch("ignore-certificate-errors");
Pe.commandLine.appendSwitch("disable-hid-blocklist");
